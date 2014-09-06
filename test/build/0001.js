[
  {
    "type": "Program",
    "start": 0,
    "end": 24,
    "body": [
      {
        "type": "VariableDeclaration",
        "start": 0,
        "end": 17,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 6,
            "end": 16,
            "id": {
              "type": "Identifier",
              "start": 6,
              "end": 7,
              "name": "f"
            },
            "init": {
              "type": "Identifier",
              "start": 10,
              "end": 16,
              "name": "finish"
            }
          }
        ],
        "kind": "const"
      },
      {
        "type": "ExpressionStatement",
        "start": 18,
        "end": 24,
        "expression": {
          "type": "CallExpression",
          "start": 18,
          "end": 23,
          "callee": {
            "type": "Identifier",
            "start": 18,
            "end": 19,
            "name": "f"
          },
          "arguments": [
            {
              "type": "Literal",
              "start": 20,
              "end": 22,
              "value": 42,
              "raw": "42"
            }
          ]
        }
      }
    ]
  }
]