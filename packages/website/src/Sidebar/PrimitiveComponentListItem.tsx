import { ListItem, ListItemText } from "@material-ui/core";
import { memo, useCallback } from "react";
import type { Dispatch, FunctionComponent, SetStateAction } from "react";
import { v4 as uuidv4 } from "uuid";
import { componentName, componentType } from "../component";
import type { Component, PrimitiveComponentType } from "../component";
import type { Sketch } from "../sketch";

const createPrimitiveComponent = ({
  type,
}: {
  type: PrimitiveComponentType;
}): Component => {
  const componentBase = {
    name: componentName[type],
    outputDestinations: [],
    position: { x: window.scrollX, y: window.scrollY },
  };

  switch (type) {
    case componentType.input: {
      return {
        ...componentBase,
        type: type,
        extendedData: {
          value: "0",
        },
      };
    }

    case componentType.meter: {
      return {
        ...componentBase,
        type: type,
        extendedData: {
          value: 0,
        },
      };
    }

    case componentType.amplifier:
    case componentType.buffer:
    case componentType.differentiator:
    case componentType.distributor:
    case componentType.divider:
    case componentType.integrator:
    case componentType.lowerSaturator:
    case componentType.mixer:
    case componentType.noise:
    case componentType.saw:
    case componentType.sine:
    case componentType.square:
    case componentType.subtractor:
    case componentType.triangle:
    case componentType.upperSaturator:
    case componentType.keyboardFrequency:
    case componentType.keyboardSwitch:
    case componentType.speaker: {
      return {
        ...componentBase,
        type: type,
        extendedData: {},
      };
    }

    default: {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const exhaustiveCheck: never = type;

      throw new Error();
    }
  }
};

const PrimitiveComponentListItem: FunctionComponent<{
  dispatchSketch: Dispatch<SetStateAction<Sketch>>;
  type: PrimitiveComponentType;
}> = memo(({ dispatchSketch, type }) => {
  const handleClick = useCallback(
    () =>
      dispatchSketch((prevSketch) => ({
        ...prevSketch,
        component: {
          ...prevSketch.component,
          [uuidv4()]: createPrimitiveComponent({ type }),
        },
      })),
    [dispatchSketch, type]
  );

  return (
    <ListItem button onClick={handleClick}>
      <ListItemText primary={componentName[type]} />
    </ListItem>
  );
});

export { PrimitiveComponentListItem };
