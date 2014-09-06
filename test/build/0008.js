[
  {
    "type": "Program",
    "start": 0,
    "end": 58,
    "body": [
      {
        "type": "FunctionDeclaration",
        "start": 0,
        "end": 38,
        "id": {
          "type": "Identifier",
          "start": 9,
          "end": 12,
          "name": "add"
        },
        "params": [
          {
            "type": "Identifier",
            "start": 13,
            "end": 14,
            "name": "a"
          },
          {
            "type": "Identifier",
            "start": 16,
            "end": 17,
            "name": "b"
          }
        ],
        "defaults": [],
        "rest": null,
        "generator": false,
        "body": {
          "type": "BlockStatement",
          "start": 19,
          "end": 38,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 23,
              "end": 36,
              "argument": {
                "type": "BinaryExpression",
                "start": 30,
                "end": 35,
                "left": {
                  "type": "Identifier",
                  "start": 30,
                  "end": 31,
                  "name": "a"
                },
                "operator": "+",
                "right": {
                  "type": "Identifier",
                  "start": 34,
                  "end": 35,
                  "name": "b"
                }
              }
            }
          ]
        },
        "expression": false
      },
      {
        "type": "ExpressionStatement",
        "start": 39,
        "end": 58,
        "expression": {
          "type": "CallExpression",
          "start": 39,
          "end": 57,
          "callee": {
            "type": "Identifier",
            "start": 39,
            "end": 45,
            "name": "finish"
          },
          "arguments": [
            {
              "type": "CallExpression",
              "start": 46,
              "end": 56,
              "callee": {
                "type": "Identifier",
                "start": 46,
                "end": 49,
                "name": "add"
              },
              "arguments": [
                {
                  "type": "Literal",
                  "start": 50,
                  "end": 52,
                  "value": 40,
                  "raw": "40"
                },
                {
                  "type": "Literal",
                  "start": 54,
                  "end": 55,
                  "value": 2,
                  "raw": "2"
                }
              ]
            }
          ]
        }
      }
    ]
  }
]