[
  {
    "type": "Program",
    "start": 0,
    "end": 22,
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
              "name": "f"
            },
            "init": {
              "type": "Identifier",
              "start": 8,
              "end": 14,
              "name": "finish"
            }
          }
        ],
        "kind": "let"
      },
      {
        "type": "ExpressionStatement",
        "start": 16,
        "end": 22,
        "expression": {
          "type": "CallExpression",
          "start": 16,
          "end": 21,
          "callee": {
            "type": "Identifier",
            "start": 16,
            "end": 17,
            "name": "f"
          },
          "arguments": [
            {
              "type": "Literal",
              "start": 18,
              "end": 20,
              "value": 42,
              "raw": "42"
            }
          ]
        }
      }
    ]
  }
]