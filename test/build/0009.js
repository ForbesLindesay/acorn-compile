[
  {
    "type": "Program",
    "start": 0,
    "end": 85,
    "body": [
      {
        "type": "FunctionDeclaration",
        "start": 0,
        "end": 63,
        "id": {
          "type": "Identifier",
          "start": 9,
          "end": 17,
          "name": "getValue"
        },
        "params": [
          {
            "type": "Identifier",
            "start": 18,
            "end": 19,
            "name": "b"
          }
        ],
        "defaults": [],
        "rest": null,
        "generator": false,
        "body": {
          "type": "BlockStatement",
          "start": 21,
          "end": 63,
          "body": [
            {
              "type": "IfStatement",
              "start": 25,
              "end": 48,
              "test": {
                "type": "BinaryExpression",
                "start": 29,
                "end": 36,
                "left": {
                  "type": "Identifier",
                  "start": 29,
                  "end": 30,
                  "name": "b"
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "start": 35,
                  "end": 36,
                  "value": 0,
                  "raw": "0"
                }
              },
              "consequent": {
                "type": "ReturnStatement",
                "start": 38,
                "end": 48,
                "argument": {
                  "type": "Literal",
                  "start": 45,
                  "end": 47,
                  "value": 42,
                  "raw": "42"
                }
              },
              "alternate": null
            },
            {
              "type": "ReturnStatement",
              "start": 51,
              "end": 61,
              "argument": {
                "type": "Literal",
                "start": 58,
                "end": 60,
                "value": 10,
                "raw": "10"
              }
            }
          ]
        },
        "expression": false
      },
      {
        "type": "ExpressionStatement",
        "start": 65,
        "end": 85,
        "expression": {
          "type": "CallExpression",
          "start": 65,
          "end": 84,
          "callee": {
            "type": "Identifier",
            "start": 65,
            "end": 71,
            "name": "finish"
          },
          "arguments": [
            {
              "type": "CallExpression",
              "start": 72,
              "end": 83,
              "callee": {
                "type": "Identifier",
                "start": 72,
                "end": 80,
                "name": "getValue"
              },
              "arguments": [
                {
                  "type": "Literal",
                  "start": 81,
                  "end": 82,
                  "value": 0,
                  "raw": "0"
                }
              ]
            }
          ]
        }
      }
    ]
  }
]