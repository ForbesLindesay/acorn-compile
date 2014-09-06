[
  {
    "type": "Program",
    "start": 0,
    "end": 96,
    "body": [
      {
        "type": "VariableDeclaration",
        "start": 0,
        "end": 15,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 4,
            "end": 14,
            "id": {
              "type": "Identifier",
              "start": 4,
              "end": 10,
              "name": "result"
            },
            "init": {
              "type": "Literal",
              "start": 13,
              "end": 14,
              "value": 0,
              "raw": "0"
            }
          }
        ],
        "kind": "let"
      },
      {
        "type": "VariableDeclaration",
        "start": 16,
        "end": 32,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 20,
            "end": 31,
            "id": {
              "type": "Identifier",
              "start": 20,
              "end": 21,
              "name": "x"
            },
            "init": {
              "type": "ArrayExpression",
              "start": 24,
              "end": 31,
              "elements": [
                {
                  "type": "Literal",
                  "start": 25,
                  "end": 26,
                  "value": 2,
                  "raw": "2"
                },
                {
                  "type": "Literal",
                  "start": 28,
                  "end": 30,
                  "value": 40,
                  "raw": "40"
                }
              ]
            }
          }
        ],
        "kind": "let"
      },
      {
        "type": "ForOfStatement",
        "start": 33,
        "end": 80,
        "left": {
          "type": "VariableDeclaration",
          "start": 38,
          "end": 45,
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 42,
              "end": 45,
              "id": {
                "type": "Identifier",
                "start": 42,
                "end": 45,
                "name": "val"
              },
              "init": null
            }
          ],
          "kind": "let"
        },
        "right": {
          "type": "Identifier",
          "start": 49,
          "end": 50,
          "name": "x"
        },
        "body": {
          "type": "BlockStatement",
          "start": 52,
          "end": 80,
          "body": [
            {
              "type": "ExpressionStatement",
              "start": 56,
              "end": 78,
              "expression": {
                "type": "AssignmentExpression",
                "start": 56,
                "end": 77,
                "operator": "=",
                "left": {
                  "type": "Identifier",
                  "start": 56,
                  "end": 62,
                  "name": "result"
                },
                "right": {
                  "type": "BinaryExpression",
                  "start": 65,
                  "end": 77,
                  "left": {
                    "type": "Identifier",
                    "start": 65,
                    "end": 71,
                    "name": "result"
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "start": 74,
                    "end": 77,
                    "name": "val"
                  }
                }
              }
            }
          ]
        }
      },
      {
        "type": "ExpressionStatement",
        "start": 81,
        "end": 96,
        "expression": {
          "type": "CallExpression",
          "start": 81,
          "end": 95,
          "callee": {
            "type": "Identifier",
            "start": 81,
            "end": 87,
            "name": "finish"
          },
          "arguments": [
            {
              "type": "Identifier",
              "start": 88,
              "end": 94,
              "name": "result"
            }
          ]
        }
      }
    ]
  }
]