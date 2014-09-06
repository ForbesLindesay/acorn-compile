[
  {
    "type": "Program",
    "start": 0,
    "end": 47,
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
              "end": 5,
              "name": "x"
            },
            "init": {
              "type": "ArrayExpression",
              "start": 8,
              "end": 14,
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
                  "end": 13,
                  "value": 5,
                  "raw": "5"
                }
              ]
            }
          }
        ],
        "kind": "let"
      },
      {
        "type": "ExpressionStatement",
        "start": 16,
        "end": 26,
        "expression": {
          "type": "AssignmentExpression",
          "start": 16,
          "end": 25,
          "operator": "=",
          "left": {
            "type": "MemberExpression",
            "start": 16,
            "end": 20,
            "object": {
              "type": "Identifier",
              "start": 16,
              "end": 17,
              "name": "x"
            },
            "property": {
              "type": "Literal",
              "start": 18,
              "end": 19,
              "value": 1,
              "raw": "1"
            },
            "computed": true
          },
          "right": {
            "type": "Literal",
            "start": 23,
            "end": 25,
            "value": 40,
            "raw": "40"
          }
        }
      },
      {
        "type": "ExpressionStatement",
        "start": 27,
        "end": 47,
        "expression": {
          "type": "CallExpression",
          "start": 27,
          "end": 46,
          "callee": {
            "type": "Identifier",
            "start": 27,
            "end": 33,
            "name": "finish"
          },
          "arguments": [
            {
              "type": "BinaryExpression",
              "start": 34,
              "end": 45,
              "left": {
                "type": "MemberExpression",
                "start": 34,
                "end": 38,
                "object": {
                  "type": "Identifier",
                  "start": 34,
                  "end": 35,
                  "name": "x"
                },
                "property": {
                  "type": "Literal",
                  "start": 36,
                  "end": 37,
                  "value": 0,
                  "raw": "0"
                },
                "computed": true
              },
              "operator": "+",
              "right": {
                "type": "MemberExpression",
                "start": 41,
                "end": 45,
                "object": {
                  "type": "Identifier",
                  "start": 41,
                  "end": 42,
                  "name": "x"
                },
                "property": {
                  "type": "Literal",
                  "start": 43,
                  "end": 44,
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