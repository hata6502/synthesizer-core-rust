import Ajv from "ajv";
import type { JSONSchemaType } from "ajv";
import type { Component } from "./component";

interface Sketch {
  component: Record<string, Component>;
}

// Generated by
// $ npx typescript-json-schema --noExtraProps --required tsconfig.json Sketch
const sketchSchema: JSONSchemaType<Sketch> = {
  $schema: "http://json-schema.org/draft-07/schema#",
  additionalProperties: false,
  definitions: {
    "ComponentBase<0,Record<string,never>>": {
      additionalProperties: false,
      properties: {
        extendedData: {
          $ref: "#/definitions/Record<string,never>",
        },
        implementation: {
          enum: [0],
          type: "number",
        },
        name: {
          type: "string",
        },
        outputDestinations: {
          items: {
            $ref: "#/definitions/OutputDestination",
          },
          type: "array",
        },
        position: {
          additionalProperties: false,
          properties: {
            x: {
              type: "number",
            },
            y: {
              type: "number",
            },
          },
          required: ["x", "y"],
          type: "object",
        },
      },
      required: [
        "extendedData",
        "implementation",
        "name",
        "outputDestinations",
        "position",
      ],
      // @ts-expect-error: typescript-json-schema generates the wrong JSON schema.
      type: "object",
    },
    "ComponentBase<1,Record<string,never>>": {
      additionalProperties: false,
      properties: {
        extendedData: {
          $ref: "#/definitions/Record<string,never>",
        },
        implementation: {
          enum: [1],
          type: "number",
        },
        name: {
          type: "string",
        },
        outputDestinations: {
          items: {
            $ref: "#/definitions/OutputDestination",
          },
          type: "array",
        },
        position: {
          additionalProperties: false,
          properties: {
            x: {
              type: "number",
            },
            y: {
              type: "number",
            },
          },
          required: ["x", "y"],
          type: "object",
        },
      },
      required: [
        "extendedData",
        "implementation",
        "name",
        "outputDestinations",
        "position",
      ],
      // @ts-expect-error: typescript-json-schema generates the wrong JSON schema.
      type: "object",
    },
    "ComponentBase<10,Record<string,never>>": {
      additionalProperties: false,
      properties: {
        extendedData: {
          $ref: "#/definitions/Record<string,never>",
        },
        implementation: {
          enum: [10],
          type: "number",
        },
        name: {
          type: "string",
        },
        outputDestinations: {
          items: {
            $ref: "#/definitions/OutputDestination",
          },
          type: "array",
        },
        position: {
          additionalProperties: false,
          properties: {
            x: {
              type: "number",
            },
            y: {
              type: "number",
            },
          },
          required: ["x", "y"],
          type: "object",
        },
      },
      required: [
        "extendedData",
        "implementation",
        "name",
        "outputDestinations",
        "position",
      ],
      // @ts-expect-error: typescript-json-schema generates the wrong JSON schema.
      type: "object",
    },
    "ComponentBase<11,Record<string,never>>": {
      additionalProperties: false,
      properties: {
        extendedData: {
          $ref: "#/definitions/Record<string,never>",
        },
        implementation: {
          enum: [11],
          type: "number",
        },
        name: {
          type: "string",
        },
        outputDestinations: {
          items: {
            $ref: "#/definitions/OutputDestination",
          },
          type: "array",
        },
        position: {
          additionalProperties: false,
          properties: {
            x: {
              type: "number",
            },
            y: {
              type: "number",
            },
          },
          required: ["x", "y"],
          type: "object",
        },
      },
      required: [
        "extendedData",
        "implementation",
        "name",
        "outputDestinations",
        "position",
      ],
      // @ts-expect-error: typescript-json-schema generates the wrong JSON schema.
      type: "object",
    },
    "ComponentBase<12,Record<string,never>>": {
      additionalProperties: false,
      properties: {
        extendedData: {
          $ref: "#/definitions/Record<string,never>",
        },
        implementation: {
          enum: [12],
          type: "number",
        },
        name: {
          type: "string",
        },
        outputDestinations: {
          items: {
            $ref: "#/definitions/OutputDestination",
          },
          type: "array",
        },
        position: {
          additionalProperties: false,
          properties: {
            x: {
              type: "number",
            },
            y: {
              type: "number",
            },
          },
          required: ["x", "y"],
          type: "object",
        },
      },
      required: [
        "extendedData",
        "implementation",
        "name",
        "outputDestinations",
        "position",
      ],
      // @ts-expect-error: typescript-json-schema generates the wrong JSON schema.
      type: "object",
    },
    "ComponentBase<13,Record<string,never>>": {
      additionalProperties: false,
      properties: {
        extendedData: {
          $ref: "#/definitions/Record<string,never>",
        },
        implementation: {
          enum: [13],
          type: "number",
        },
        name: {
          type: "string",
        },
        outputDestinations: {
          items: {
            $ref: "#/definitions/OutputDestination",
          },
          type: "array",
        },
        position: {
          additionalProperties: false,
          properties: {
            x: {
              type: "number",
            },
            y: {
              type: "number",
            },
          },
          required: ["x", "y"],
          type: "object",
        },
      },
      required: [
        "extendedData",
        "implementation",
        "name",
        "outputDestinations",
        "position",
      ],
      // @ts-expect-error: typescript-json-schema generates the wrong JSON schema.
      type: "object",
    },
    "ComponentBase<14,Record<string,never>>": {
      additionalProperties: false,
      properties: {
        extendedData: {
          $ref: "#/definitions/Record<string,never>",
        },
        implementation: {
          enum: [14],
          type: "number",
        },
        name: {
          type: "string",
        },
        outputDestinations: {
          items: {
            $ref: "#/definitions/OutputDestination",
          },
          type: "array",
        },
        position: {
          additionalProperties: false,
          properties: {
            x: {
              type: "number",
            },
            y: {
              type: "number",
            },
          },
          required: ["x", "y"],
          type: "object",
        },
      },
      required: [
        "extendedData",
        "implementation",
        "name",
        "outputDestinations",
        "position",
      ],
      // @ts-expect-error: typescript-json-schema generates the wrong JSON schema.
      type: "object",
    },
    "ComponentBase<15,{value:string;}>": {
      additionalProperties: false,
      properties: {
        extendedData: {
          additionalProperties: false,
          properties: {
            value: {
              type: "string",
            },
          },
          required: ["value"],
          type: "object",
        },
        implementation: {
          enum: [15],
          type: "number",
        },
        name: {
          type: "string",
        },
        outputDestinations: {
          items: {
            $ref: "#/definitions/OutputDestination",
          },
          type: "array",
        },
        position: {
          additionalProperties: false,
          properties: {
            x: {
              type: "number",
            },
            y: {
              type: "number",
            },
          },
          required: ["x", "y"],
          type: "object",
        },
      },
      required: [
        "extendedData",
        "implementation",
        "name",
        "outputDestinations",
        "position",
      ],
      // @ts-expect-error: typescript-json-schema generates the wrong JSON schema.
      type: "object",
    },
    "ComponentBase<16,Record<string,never>>": {
      additionalProperties: false,
      properties: {
        extendedData: {
          $ref: "#/definitions/Record<string,never>",
        },
        implementation: {
          enum: [16],
          type: "number",
        },
        name: {
          type: "string",
        },
        outputDestinations: {
          items: {
            $ref: "#/definitions/OutputDestination",
          },
          type: "array",
        },
        position: {
          additionalProperties: false,
          properties: {
            x: {
              type: "number",
            },
            y: {
              type: "number",
            },
          },
          required: ["x", "y"],
          type: "object",
        },
      },
      required: [
        "extendedData",
        "implementation",
        "name",
        "outputDestinations",
        "position",
      ],
      // @ts-expect-error: typescript-json-schema generates the wrong JSON schema.
      type: "object",
    },
    "ComponentBase<17,Record<string,never>>": {
      additionalProperties: false,
      properties: {
        extendedData: {
          $ref: "#/definitions/Record<string,never>",
        },
        implementation: {
          enum: [17],
          type: "number",
        },
        name: {
          type: "string",
        },
        outputDestinations: {
          items: {
            $ref: "#/definitions/OutputDestination",
          },
          type: "array",
        },
        position: {
          additionalProperties: false,
          properties: {
            x: {
              type: "number",
            },
            y: {
              type: "number",
            },
          },
          required: ["x", "y"],
          type: "object",
        },
      },
      required: [
        "extendedData",
        "implementation",
        "name",
        "outputDestinations",
        "position",
      ],
      // @ts-expect-error: typescript-json-schema generates the wrong JSON schema.
      type: "object",
    },
    "ComponentBase<18,Record<string,never>>": {
      additionalProperties: false,
      properties: {
        extendedData: {
          $ref: "#/definitions/Record<string,never>",
        },
        implementation: {
          enum: [18],
          type: "number",
        },
        name: {
          type: "string",
        },
        outputDestinations: {
          items: {
            $ref: "#/definitions/OutputDestination",
          },
          type: "array",
        },
        position: {
          additionalProperties: false,
          properties: {
            x: {
              type: "number",
            },
            y: {
              type: "number",
            },
          },
          required: ["x", "y"],
          type: "object",
        },
      },
      required: [
        "extendedData",
        "implementation",
        "name",
        "outputDestinations",
        "position",
      ],
      // @ts-expect-error: typescript-json-schema generates the wrong JSON schema.
      type: "object",
    },
    "ComponentBase<19,Record<string,never>>": {
      additionalProperties: false,
      properties: {
        extendedData: {
          $ref: "#/definitions/Record<string,never>",
        },
        implementation: {
          enum: [19],
          type: "number",
        },
        name: {
          type: "string",
        },
        outputDestinations: {
          items: {
            $ref: "#/definitions/OutputDestination",
          },
          type: "array",
        },
        position: {
          additionalProperties: false,
          properties: {
            x: {
              type: "number",
            },
            y: {
              type: "number",
            },
          },
          required: ["x", "y"],
          type: "object",
        },
      },
      required: [
        "extendedData",
        "implementation",
        "name",
        "outputDestinations",
        "position",
      ],
      // @ts-expect-error: typescript-json-schema generates the wrong JSON schema.
      type: "object",
    },
    "ComponentBase<2,Record<string,never>>": {
      additionalProperties: false,
      properties: {
        extendedData: {
          $ref: "#/definitions/Record<string,never>",
        },
        implementation: {
          enum: [2],
          type: "number",
        },
        name: {
          type: "string",
        },
        outputDestinations: {
          items: {
            $ref: "#/definitions/OutputDestination",
          },
          type: "array",
        },
        position: {
          additionalProperties: false,
          properties: {
            x: {
              type: "number",
            },
            y: {
              type: "number",
            },
          },
          required: ["x", "y"],
          type: "object",
        },
      },
      required: [
        "extendedData",
        "implementation",
        "name",
        "outputDestinations",
        "position",
      ],
      // @ts-expect-error: typescript-json-schema generates the wrong JSON schema.
      type: "object",
    },
    "ComponentBase<3,Record<string,never>>": {
      additionalProperties: false,
      properties: {
        extendedData: {
          $ref: "#/definitions/Record<string,never>",
        },
        implementation: {
          enum: [3],
          type: "number",
        },
        name: {
          type: "string",
        },
        outputDestinations: {
          items: {
            $ref: "#/definitions/OutputDestination",
          },
          type: "array",
        },
        position: {
          additionalProperties: false,
          properties: {
            x: {
              type: "number",
            },
            y: {
              type: "number",
            },
          },
          required: ["x", "y"],
          type: "object",
        },
      },
      required: [
        "extendedData",
        "implementation",
        "name",
        "outputDestinations",
        "position",
      ],
      // @ts-expect-error: typescript-json-schema generates the wrong JSON schema.
      type: "object",
    },
    "ComponentBase<4,Record<string,never>>": {
      additionalProperties: false,
      properties: {
        extendedData: {
          $ref: "#/definitions/Record<string,never>",
        },
        implementation: {
          enum: [4],
          type: "number",
        },
        name: {
          type: "string",
        },
        outputDestinations: {
          items: {
            $ref: "#/definitions/OutputDestination",
          },
          type: "array",
        },
        position: {
          additionalProperties: false,
          properties: {
            x: {
              type: "number",
            },
            y: {
              type: "number",
            },
          },
          required: ["x", "y"],
          type: "object",
        },
      },
      required: [
        "extendedData",
        "implementation",
        "name",
        "outputDestinations",
        "position",
      ],
      // @ts-expect-error: typescript-json-schema generates the wrong JSON schema.
      type: "object",
    },
    "ComponentBase<5,Record<string,never>>": {
      additionalProperties: false,
      properties: {
        extendedData: {
          $ref: "#/definitions/Record<string,never>",
        },
        implementation: {
          enum: [5],
          type: "number",
        },
        name: {
          type: "string",
        },
        outputDestinations: {
          items: {
            $ref: "#/definitions/OutputDestination",
          },
          type: "array",
        },
        position: {
          additionalProperties: false,
          properties: {
            x: {
              type: "number",
            },
            y: {
              type: "number",
            },
          },
          required: ["x", "y"],
          type: "object",
        },
      },
      required: [
        "extendedData",
        "implementation",
        "name",
        "outputDestinations",
        "position",
      ],
      // @ts-expect-error: typescript-json-schema generates the wrong JSON schema.
      type: "object",
    },
    "ComponentBase<6,Record<string,never>>": {
      additionalProperties: false,
      properties: {
        extendedData: {
          $ref: "#/definitions/Record<string,never>",
        },
        implementation: {
          enum: [6],
          type: "number",
        },
        name: {
          type: "string",
        },
        outputDestinations: {
          items: {
            $ref: "#/definitions/OutputDestination",
          },
          type: "array",
        },
        position: {
          additionalProperties: false,
          properties: {
            x: {
              type: "number",
            },
            y: {
              type: "number",
            },
          },
          required: ["x", "y"],
          type: "object",
        },
      },
      required: [
        "extendedData",
        "implementation",
        "name",
        "outputDestinations",
        "position",
      ],
      // @ts-expect-error: typescript-json-schema generates the wrong JSON schema.
      type: "object",
    },
    "ComponentBase<7,Record<string,never>>": {
      additionalProperties: false,
      properties: {
        extendedData: {
          $ref: "#/definitions/Record<string,never>",
        },
        implementation: {
          enum: [7],
          type: "number",
        },
        name: {
          type: "string",
        },
        outputDestinations: {
          items: {
            $ref: "#/definitions/OutputDestination",
          },
          type: "array",
        },
        position: {
          additionalProperties: false,
          properties: {
            x: {
              type: "number",
            },
            y: {
              type: "number",
            },
          },
          required: ["x", "y"],
          type: "object",
        },
      },
      required: [
        "extendedData",
        "implementation",
        "name",
        "outputDestinations",
        "position",
      ],
      // @ts-expect-error: typescript-json-schema generates the wrong JSON schema.
      type: "object",
    },
    "ComponentBase<8,Record<string,never>>": {
      additionalProperties: false,
      properties: {
        extendedData: {
          $ref: "#/definitions/Record<string,never>",
        },
        implementation: {
          enum: [8],
          type: "number",
        },
        name: {
          type: "string",
        },
        outputDestinations: {
          items: {
            $ref: "#/definitions/OutputDestination",
          },
          type: "array",
        },
        position: {
          additionalProperties: false,
          properties: {
            x: {
              type: "number",
            },
            y: {
              type: "number",
            },
          },
          required: ["x", "y"],
          type: "object",
        },
      },
      required: [
        "extendedData",
        "implementation",
        "name",
        "outputDestinations",
        "position",
      ],
      // @ts-expect-error: typescript-json-schema generates the wrong JSON schema.
      type: "object",
    },
    "ComponentBase<9,Record<string,never>>": {
      additionalProperties: false,
      properties: {
        extendedData: {
          $ref: "#/definitions/Record<string,never>",
        },
        implementation: {
          enum: [9],
          type: "number",
        },
        name: {
          type: "string",
        },
        outputDestinations: {
          items: {
            $ref: "#/definitions/OutputDestination",
          },
          type: "array",
        },
        position: {
          additionalProperties: false,
          properties: {
            x: {
              type: "number",
            },
            y: {
              type: "number",
            },
          },
          required: ["x", "y"],
          type: "object",
        },
      },
      required: [
        "extendedData",
        "implementation",
        "name",
        "outputDestinations",
        "position",
      ],
      // @ts-expect-error: typescript-json-schema generates the wrong JSON schema.
      type: "object",
    },
    OutputDestination: {
      additionalProperties: false,
      properties: {
        componentID: {
          type: "string",
        },
        inputIndex: {
          type: "number",
        },
      },
      required: ["componentID", "inputIndex"],
      type: "object",
    },
    "Record<string,never>": {
      additionalProperties: false,
      // @ts-expect-error: typescript-json-schema generates the wrong JSON schema.
      type: "object",
    },
  },
  properties: {
    component: {
      additionalProperties: {
        anyOf: [
          {
            $ref: "#/definitions/ComponentBase<0,Record<string,never>>",
          },
          {
            $ref: "#/definitions/ComponentBase<1,Record<string,never>>",
          },
          {
            $ref: "#/definitions/ComponentBase<2,Record<string,never>>",
          },
          {
            $ref: "#/definitions/ComponentBase<3,Record<string,never>>",
          },
          {
            $ref: "#/definitions/ComponentBase<4,Record<string,never>>",
          },
          {
            $ref: "#/definitions/ComponentBase<5,Record<string,never>>",
          },
          {
            $ref: "#/definitions/ComponentBase<6,Record<string,never>>",
          },
          {
            $ref: "#/definitions/ComponentBase<7,Record<string,never>>",
          },
          {
            $ref: "#/definitions/ComponentBase<8,Record<string,never>>",
          },
          {
            $ref: "#/definitions/ComponentBase<9,Record<string,never>>",
          },
          {
            $ref: "#/definitions/ComponentBase<10,Record<string,never>>",
          },
          {
            $ref: "#/definitions/ComponentBase<11,Record<string,never>>",
          },
          {
            $ref: "#/definitions/ComponentBase<12,Record<string,never>>",
          },
          {
            $ref: "#/definitions/ComponentBase<13,Record<string,never>>",
          },
          {
            $ref: "#/definitions/ComponentBase<14,Record<string,never>>",
          },
          {
            $ref: "#/definitions/ComponentBase<15,{value:string;}>",
          },
          {
            $ref: "#/definitions/ComponentBase<16,Record<string,never>>",
          },
          {
            $ref: "#/definitions/ComponentBase<17,Record<string,never>>",
          },
          {
            $ref: "#/definitions/ComponentBase<18,Record<string,never>>",
          },
          {
            $ref: "#/definitions/ComponentBase<19,Record<string,never>>",
          },
        ],
      },
      type: "object",
    },
  },
  required: ["component"],
  type: "object",
};

const validateSketch = new Ajv().compile(sketchSchema);

const initialSketch: Sketch = {
  component: {
    "75e51c9e-5edf-345e-e4b8-7ed5716a3b0d": {
      name: "input",
      implementation: 15,
      outputDestinations: [
        { componentID: "797ad8ea-66d8-4f45-a95c-dcecde5b6a83", inputIndex: 1 },
      ],
      position: { x: 0, y: 18 },
      extendedData: { value: "440" },
    },
    "df5bb750-e9fe-fbf3-26e0-bbd601fe98c9": {
      name: "sine",
      implementation: 10,
      outputDestinations: [
        { componentID: "d417eb39-d2d7-4023-a58f-f058658b7c40", inputIndex: 1 },
      ],
      position: { x: 507, y: 90 },
      extendedData: {},
    },
    "d417eb39-d2d7-4023-a58f-f058658b7c40": {
      name: "speaker",
      outputDestinations: [],
      position: { x: 770, y: 85 },
      implementation: 17,
      extendedData: {},
    },
    "a259dfac-5a43-463b-8aa1-248a772ace60": {
      name: "input",
      outputDestinations: [
        { componentID: "797ad8ea-66d8-4f45-a95c-dcecde5b6a83", inputIndex: 2 },
      ],
      position: { x: 1, y: 167 },
      implementation: 15,
      extendedData: { value: "220" },
    },
    "797ad8ea-66d8-4f45-a95c-dcecde5b6a83": {
      name: "mixer",
      outputDestinations: [
        { componentID: "df5bb750-e9fe-fbf3-26e0-bbd601fe98c9", inputIndex: 1 },
      ],
      position: { x: 238, y: 82 },
      implementation: 7,
      extendedData: {},
    },
  },
};

export { initialSketch, validateSketch };
export type { Sketch };
