[
  {
    "type": "Program",
    "start": 0,
    "end": 37,
    "body": [
      {
        "type": "VariableDeclaration",
        "start": 0,
        "end": 16,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 4,
            "end": 15,
            "id": {
              "type": "Identifier",
              "start": 4,
              "end": 5,
              "name": "x"
            },
            "init": {
              "type": "ArrayExpression",
              "start": 8,
              "end": 15,
              "elements": [
                {
                  "type": "Literal",
                  "start": 9,
                  "end": 10,
                  "value": 2,
                  "raw": "2"
                },
                {
                  "type": "Literal",
                  "start": 12,
                  "end": 14,
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
        "type": "ExpressionStatement",
        "start": 17,
        "end": 37,
        "expression": {
          "type": "CallExpression",
          "start": 17,
          "end": 36,
          "callee": {
            "type": "Identifier",
            "start": 17,
            "end": 23,
            "name": "finish"
          },
          "arguments": [
            {
              "type": "BinaryExpression",
              "start": 24,
              "end": 35,
              "left": {
                "type": "MemberExpression",
                "start": 24,
                "end": 28,
                "object": {
                  "type": "Identifier",
                  "start": 24,
                  "end": 25,
                  "name": "x"
                },
                "property": {
                  "type": "Literal",
                  "start": 26,
                  "end": 27,
                  "value": 0,
                  "raw": "0"
                },
                "computed": true
              },
              "operator": "+",
              "right": {
                "type": "MemberExpression",
                "start": 31,
                "end": 35,
                "object": {
                  "type": "Identifier",
                  "start": 31,
                  "end": 32,
                  "name": "x"
                },
                "property": {
                  "type": "Literal",
                  "start": 33,
                  "end": 34,
                  "value": 1,
                  "raw": "1"
                },
                "computed": true
              }
            }
          ]
        }
      }
    ]
  }
]