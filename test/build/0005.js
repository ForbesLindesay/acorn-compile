[
  {
    "type": "Program",
    "start": 0,
    "end": 55,
    "body": [
      {
        "type": "CompiledImportDeclaration",
        "start": 0,
        "end": 27,
        "specifiers": [
          {
            "type": "ImportSpecifier",
            "start": 7,
            "end": 13,
            "id": {
              "type": "Identifier",
              "start": 7,
              "end": 13,
              "name": "assert"
            },
            "name": null,
            "default": true
          }
        ],
        "source": "assert",
        "kind": "default"
      },
      {
        "type": "EmptyStatement",
        "start": 27,
        "end": 28
      },
      {
        "type": "ExpressionStatement",
        "start": 30,
        "end": 43,
        "expression": {
          "type": "CallExpression",
          "start": 30,
          "end": 42,
          "callee": {
            "type": "Identifier",
            "start": 30,
            "end": 36,
            "name": "assert"
          },
          "arguments": [
            {
              "type": "Literal",
              "start": 37,
              "end": 41,
              "value": true,
              "raw": "true"
            }
          ]
        }
      },
      {
        "type": "ExpressionStatement",
        "start": 44,
        "end": 55,
        "expression": {
          "type": "CallExpression",
          "start": 44,
          "end": 54,
          "callee": {
            "type": "Identifier",
            "start": 44,
            "end": 50,
            "name": "finish"
          },
          "arguments": [
            {
              "type": "Literal",
              "start": 51,
              "end": 53,
              "value": 42,
              "raw": "42"
            }
          ]
        }
      }
    ]
  }
]