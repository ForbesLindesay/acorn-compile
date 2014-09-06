[
  {
    "type": "Program",
    "start": 0,
    "end": 51,
    "body": [
      {
        "type": "IfStatement",
        "start": 0,
        "end": 51,
        "test": {
          "type": "Literal",
          "start": 4,
          "end": 9,
          "value": false,
          "raw": "false"
        },
        "consequent": {
          "type": "BlockStatement",
          "start": 11,
          "end": 28,
          "body": [
            {
              "type": "ExpressionStatement",
              "start": 15,
              "end": 26,
              "expression": {
                "type": "CallExpression",
                "start": 15,
                "end": 25,
                "callee": {
                  "type": "Identifier",
                  "start": 15,
                  "end": 21,
                  "name": "finish"
                },
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 22,
                    "end": 24,
                    "value": 10,
                    "raw": "10"
                  }
                ]
              }
            }
          ]
        },
        "alternate": {
          "type": "BlockStatement",
          "start": 34,
          "end": 51,
          "body": [
            {
              "type": "ExpressionStatement",
              "start": 38,
              "end": 49,
              "expression": {
                "type": "CallExpression",
                "start": 38,
                "end": 48,
                "callee": {
                  "type": "Identifier",
                  "start": 38,
                  "end": 44,
                  "name": "finish"
                },
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 45,
                    "end": 47,
                    "value": 42,
                    "raw": "42"
                  }
                ]
              }
            }
          ]
        }
      }
    ]
  }
]