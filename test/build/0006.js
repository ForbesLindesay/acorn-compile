[
  {
    "type": "Program",
    "start": 0,
    "end": 56,
    "body": [
      {
        "type": "FunctionDeclaration",
        "start": 0,
        "end": 36,
        "id": {
          "type": "Identifier",
          "start": 9,
          "end": 17,
          "name": "getValue"
        },
        "params": [],
        "defaults": [],
        "rest": null,
        "generator": false,
        "body": {
          "type": "BlockStatement",
          "start": 20,
          "end": 36,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 24,
              "end": 34,
              "argument": {
                "type": "Literal",
                "start": 31,
                "end": 33,
                "value": 42,
                "raw": "42"
              }
            }
          ]
        },
        "expression": false
      },
      {
        "type": "ExpressionStatement",
        "start": 37,
        "end": 56,
        "expression": {
          "type": "CallExpression",
          "start": 37,
          "end": 55,
          "callee": {
            "type": "Identifier",
            "start": 37,
            "end": 43,
            "name": "finish"
          },
          "arguments": [
            {
              "type": "CallExpression",
              "start": 44,
              "end": 54,
              "callee": {
                "type": "Identifier",
                "start": 44,
                "end": 52,
                "name": "getValue"
              },
              "arguments": []
            }
          ]
        }
      }
    ]
  }
]