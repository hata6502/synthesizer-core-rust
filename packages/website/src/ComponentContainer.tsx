import {
  Box,
  Button,
  Card,
  CardActions,
  IconButton,
  Radio,
  TextField,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Delete, Error as ErrorIcon } from "@material-ui/icons";
import { memo, useCallback, useMemo, useState } from "react";
import type {
  ChangeEventHandler,
  CSSProperties,
  Dispatch,
  FunctionComponent,
  MouseEventHandler,
  SetStateAction,
} from "react";
import { ArcherElement } from "react-archer";
import type { Relation } from "react-archer";
import Draggable, { DraggableCore } from "react-draggable";
import type {
  ControlPosition,
  DraggableData,
  DraggableEventHandler,
} from "react-draggable";
import type { AlertData } from "./App";
import { Player } from "./Player";
import { componentInputNames, diffTimeInput } from "./component";
import type { Component, OutputDestination } from "./component";
import type { Sketch } from "./sketch";

const detectArcherAnchorPosition = ({
  sourceX,
  targetX,
}: {
  sourceX: ControlPosition["x"];
  targetX: ControlPosition["x"];
}): Pick<Relation, "sourceAnchor" | "targetAnchor"> => {
  return sourceX < targetX
    ? {
        sourceAnchor: "right",
        targetAnchor: "left",
      }
    : {
        sourceAnchor: "left",
        targetAnchor: "right",
      };
};

const anchorWidth = 20;
const containerWidth = 160;

const useStyles = makeStyles(({ palette, spacing }) => ({
  card: {
    overflow: "visible",
  },
  container: {
    position: "absolute",
    cursor: "move",
    width: containerWidth,
  },
  deleteButton: {
    position: "absolute",
    right: spacing(0),
    top: spacing(-4),
  },
  errorIcon: {
    position: "absolute",
    left: spacing(0),
    top: spacing(-4),
  },
  input: {
    position: "relative",
    paddingLeft: spacing(2),
    paddingRight: spacing(2),
  },
  inputAnchor: {
    position: "absolute",
    left: 0,
    top: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: palette.background.paper,
    padding: 0,
    width: anchorWidth,
  },
  outputAnchor: {
    position: "absolute",
    right: 0,
    top: "50%",
    transform: "translate(50%, -50%)",
    backgroundColor: palette.background.paper,
    cursor: "alias",
    padding: 0,
    width: anchorWidth,
  },
}));

interface ComponentContainerProps {
  id: string;
  component: Component;
  sketch: Sketch;
  dispatchAlertData: Dispatch<SetStateAction<AlertData>>;
  getDispatchComponent: <T extends Component>(props: {
    id: string;
    component: T;
  }) => Dispatch<SetStateAction<T>>;
  isError?: boolean;
  onDistributorButtonClick?: MouseEventHandler<HTMLButtonElement>;
  onDrag?: DraggableEventHandler;
  onRemoveComponentRequest?: (event: {
    id: string;
    component: Component;
  }) => void;
  onRemoveConnectionsRequest?: (event: OutputDestination[]) => void;
}

const ComponentContainer: FunctionComponent<ComponentContainerProps> = memo(
  ({
    id,
    children,
    component,
    sketch,
    dispatchAlertData,
    getDispatchComponent,
    isError = false,
    onDistributorButtonClick,
    onDrag,
    onRemoveComponentRequest,
    onRemoveConnectionsRequest,
  }) => {
    const [connectionCuror, setConnectionCuror] = useState<DraggableData>();

    const dispatchComponent = useMemo(
      () => getDispatchComponent({ id, component }),
      [component, getDispatchComponent, id]
    );

    const handleNameChange: ChangeEventHandler<HTMLInputElement> = useCallback(
      (event) =>
        dispatchComponent((prevComponent) => ({
          ...prevComponent,
          name: event.target.value,
        })),
      [dispatchComponent]
    );

    const handleDrag: DraggableEventHandler = useCallback(
      (event, data) => {
        dispatchComponent((prevComponent) => ({
          ...prevComponent,
          position: { x: data.x, y: data.y },
        }));

        onDrag?.(event, data);
      },
      [dispatchComponent, onDrag]
    );

    const handleDeleteButtonClick = useCallback(
      () =>
        onRemoveComponentRequest?.({
          id,
          component,
        }),
      [component, id, onRemoveComponentRequest]
    );

    const handleOutputAnchorDrag: DraggableEventHandler = useCallback(
      (event, data) => {
        event.stopPropagation();

        setConnectionCuror(data);

        onDrag?.(event, data);
      },
      [onDrag]
    );

    const handleDistributorButtonClick: MouseEventHandler<HTMLButtonElement> =
      useCallback(
        (event) => {
          dispatchAlertData((prevAlertData) => ({
            ...prevAlertData,
            isOpen: false,
          }));

          onDistributorButtonClick?.(event);
        },
        [dispatchAlertData, onDistributorButtonClick]
      );

    const handleOutputAnchorStop: DraggableEventHandler = useCallback(
      (event, data) => {
        event.stopPropagation();

        if (event instanceof MouseEvent) {
          const elements = document.elementsFromPoint(
            event.clientX,
            event.clientY
          );

          const newOutputDestinations = elements.flatMap(
            (element): OutputDestination[] => {
              if (!(element instanceof HTMLElement)) {
                return [];
              }

              const componentID = element.dataset["componentId"];
              const inputIndexString = element.dataset["inputIndex"];

              if (componentID === undefined || inputIndexString === undefined) {
                return [];
              }

              return [
                {
                  componentID,
                  inputIndex: Number(inputIndexString),
                },
              ];
            }
          );

          const appendedOutputDestinations = [
            ...component.outputDestinations,
            ...newOutputDestinations,
          ];

          const uniqueOutputDestinations = [
            ...new Map(
              appendedOutputDestinations.map((outputDestination) => [
                `${outputDestination.componentID}-${outputDestination.inputIndex}`,
                outputDestination,
              ])
            ).values(),
          ];

          if (
            uniqueOutputDestinations.length <= Player.coreComponentOutputLength
          ) {
            onRemoveConnectionsRequest?.(newOutputDestinations);

            dispatchComponent((prevComponent) => ({
              ...prevComponent,
              outputDestinations: uniqueOutputDestinations,
            }));
          } else {
            dispatchAlertData({
              isOpen: true,
              severity: "info",
              title: "Please use distributor component",
              description: (
                <>
                  A component can output to up to&nbsp;
                  {Player.coreComponentOutputLength} destinations. Please
                  use&nbsp;
                  <Button
                    variant="outlined"
                    size="small"
                    onClick={handleDistributorButtonClick}
                  >
                    distributor
                  </Button>
                  &nbsp;component to expand it.
                </>
              ),
            });
          }
        } else {
          throw new Error();
        }

        setConnectionCuror(undefined);

        onDrag?.(event, data);
      },
      [
        component.outputDestinations,
        dispatchAlertData,
        dispatchComponent,
        handleDistributorButtonClick,
        onDrag,
        onRemoveConnectionsRequest,
      ]
    );

    const classes = useStyles();

    const inputElements = useMemo(() => {
      const inputLength = componentInputNames[component.type].length;

      return [...Array(inputLength).keys()].flatMap((inputIndex) => {
        if ([diffTimeInput].includes(inputIndex)) {
          return [];
        }

        const handleInputAnchorClick = () =>
          onRemoveConnectionsRequest?.([
            {
              componentID: id,
              inputIndex,
            },
          ]);

        const isConnected = Object.values(sketch.component).some(
          (otherComponent) =>
            otherComponent.outputDestinations.some(
              (outputDestination) =>
                outputDestination.componentID === id &&
                outputDestination.inputIndex === inputIndex
            )
        );

        return [
          <Box key={inputIndex} className={classes.input}>
            <Typography variant="body2" gutterBottom>
              {componentInputNames[component.type][inputIndex]}
            </Typography>

            <ArcherElement id={`${id}-input-anchor-${inputIndex}`}>
              <Radio
                data-component-id={id}
                data-input-index={inputIndex}
                checked={isConnected}
                className={classes.inputAnchor}
                size="small"
                onClick={handleInputAnchorClick}
              />
            </ArcherElement>
          </Box>,
        ];
      });
    }, [
      classes.input,
      classes.inputAnchor,
      component.type,
      id,
      onRemoveConnectionsRequest,
      sketch.component,
    ]);

    const connectionCurorStyle = useMemo(
      (): CSSProperties | undefined =>
        connectionCuror && {
          position: "absolute",
          left: connectionCuror.x,
          top: connectionCuror.y,
        },
      [connectionCuror]
    );

    return (
      <Draggable
        position={component.position}
        onStart={handleDrag}
        onDrag={handleDrag}
        onStop={handleDrag}
      >
        <div className={classes.container}>
          <Card className={classes.card}>
            <Box pb={2} pt={2}>
              <Box mb={2} pl={2} pr={2}>
                <TextField
                  size="small"
                  value={component.name}
                  onChange={handleNameChange}
                />
              </Box>

              {inputElements}
            </Box>

            <CardActions>{children}</CardActions>
          </Card>

          {isError && (
            <ErrorIcon
              className={classes.errorIcon}
              color="error"
              fontSize="small"
            />
          )}

          <IconButton
            className={classes.deleteButton}
            size="small"
            onClick={handleDeleteButtonClick}
          >
            <Delete fontSize="small" />
          </IconButton>

          <DraggableCore
            onStart={handleOutputAnchorDrag}
            onDrag={handleOutputAnchorDrag}
            onStop={handleOutputAnchorStop}
          >
            {/* DraggableCore target. */}
            <div>
              <ArcherElement
                id={`${id}-output-anchor`}
                relations={[
                  ...component.outputDestinations.map((outputDestination) => {
                    const destinationComponent = new Map(
                      Object.entries(sketch.component)
                    ).get(outputDestination.componentID);

                    if (!destinationComponent) {
                      throw new Error();
                    }

                    return {
                      ...detectArcherAnchorPosition({
                        sourceX:
                          component.position.x +
                          containerWidth +
                          anchorWidth / 2,
                        targetX:
                          destinationComponent.position.x - anchorWidth / 2,
                      }),
                      targetId: `${outputDestination.componentID}-input-anchor-${outputDestination.inputIndex}`,
                    };
                  }),
                  ...(connectionCuror
                    ? [
                        {
                          ...detectArcherAnchorPosition({
                            sourceX:
                              component.position.x +
                              containerWidth +
                              anchorWidth / 2,
                            targetX: component.position.x + connectionCuror.x,
                          }),
                          targetId: `${id}-connection-cursor`,
                        },
                      ]
                    : []),
                ]}
              >
                <Radio
                  checked={false}
                  className={classes.outputAnchor}
                  size="small"
                />
              </ArcherElement>
            </div>
          </DraggableCore>

          {connectionCurorStyle && (
            <ArcherElement id={`${id}-connection-cursor`}>
              <div style={connectionCurorStyle} />
            </ArcherElement>
          )}
        </div>
      </Draggable>
    );
  }
);

export { ComponentContainer };
export type { ComponentContainerProps };
