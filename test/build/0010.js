[
  {
    "type": "Program",
    "start": 0,
    "end": 48,
    "body": [
      {
        "type": "VariableDeclaration",
        "start": 0,
        "end": 10,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 4,
            "end": 9,
            "id": {
              "type": "Identifier",
              "start": 4,
              "end": 5,
              "name": "x"
            },
            "init": {
              "type": "Literal",
              "start": 8,
              "end": 9,
              "value": 0,
              "raw": "0"
            }
          }
        ],
        "kind": "let"
      },
      {
        "type": "ExpressionStatement",
        "start": 11,
        "end": 21,
        "expression": {
          "type": "AssignmentExpression",
          "start": 11,
          "end": 20,
          "operator": "=",
          "left": {
            "type": "Identifier",
            "start": 11,
            "end": 12,
            "name": "x"
          },
          "right": {
            "type": "BinaryExpression",
            "start": 15,
            "end": 20,
            "left": {
              "type": "Identifier",
              "start": 15,
              "end": 16,
              "name": "x"
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "start": 19,
              "end": 20,
              "value": 1,
              "raw": "1"
            }
          }
        }
      },
      {
        "type": "ExpressionStatement",
        "start": 22,
        "end": 32,
        "expression": {
          "type": "AssignmentExpression",
          "start": 22,
          "end": 31,
          "operator": "=",
          "left": {
            "type": "Identifier",
            "start": 22,
            "end": 23,
            "name": "x"
          },
          "right": {
            "type": "BinaryExpression",
            "start": 26,
            "end": 31,
            "left": {
              "type": "Identifier",
              "start": 26,
              "end": 27,
              "name": "x"
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "start": 30,
              "end": 31,
              "value": 1,
              "raw": "1"
            }
          }
        }
      },
      {
        "type": "ExpressionStatement",
        "start": 33,
        "end": 48,
        "expression": {
          "type": "CallExpression",
          "start": 33,
          "end": 47,
          "callee": {
            "type": "Identifier",
            "start": 33,
            "end": 39,
            "name": "finish"
          },
          "arguments": [
            {
              "type": "BinaryExpression",
              "start": 40,
              "end": 46,
              "left": {
                "type": "Identifier",
                "start": 40,
                "end": 41,
                "name": "x"
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "start": 44,
                "end": 46,
                "value": 40,
                "raw": "40"
              }
            }
          ]
        }
      }
    ]
  }
]