[
  {
    "type": "Program",
    "start": 0,
    "end": 199,
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
        "type": "FunctionDeclaration",
        "start": 30,
        "end": 102,
        "id": {
          "type": "Identifier",
          "start": 39,
          "end": 42,
          "name": "gcd"
        },
        "params": [
          {
            "type": "Identifier",
            "start": 44,
            "end": 45,
            "name": "a"
          },
          {
            "type": "Identifier",
            "start": 47,
            "end": 48,
            "name": "b"
          }
        ],
        "defaults": [],
        "rest": null,
        "generator": false,
        "body": {
          "type": "BlockStatement",
          "start": 50,
          "end": 102,
          "body": [
            {
              "type": "IfStatement",
              "start": 54,
              "end": 76,
              "test": {
                "type": "BinaryExpression",
                "start": 58,
                "end": 65,
                "left": {
                  "type": "Identifier",
                  "start": 58,
                  "end": 59,
                  "name": "b"
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "start": 64,
                  "end": 65,
                  "value": 0,
                  "raw": "0"
                }
              },
              "consequent": {
                "type": "ReturnStatement",
                "start": 67,
                "end": 76,
                "argument": {
                  "type": "Identifier",
                  "start": 74,
                  "end": 75,
                  "name": "a"
                }
              },
              "alternate": null
            },
            {
              "type": "ReturnStatement",
              "start": 79,
              "end": 100,
              "argument": {
                "type": "CallExpression",
                "start": 86,
                "end": 99,
                "callee": {
                  "type": "Identifier",
                  "start": 86,
                  "end": 89,
                  "name": "gcd"
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 90,
                    "end": 91,
                    "name": "b"
                  },
                  {
                    "type": "BinaryExpression",
                    "start": 93,
                    "end": 98,
                    "left": {
                      "type": "Identifier",
                      "start": 93,
                      "end": 94,
                      "name": "a"
                    },
                    "operator": "%",
                    "right": {
                      "type": "Identifier",
                      "start": 97,
                      "end": 98,
                      "name": "b"
                    }
                  }
                ]
              }
            }
          ]
        },
        "expression": false
      },
      {
        "type": "ExpressionStatement",
        "start": 104,
        "end": 130,
        "expression": {
          "type": "CallExpression",
          "start": 104,
          "end": 129,
          "callee": {
            "type": "Identifier",
            "start": 104,
            "end": 110,
            "name": "assert"
          },
          "arguments": [
            {
              "type": "BinaryExpression",
              "start": 111,
              "end": 128,
              "left": {
                "type": "CallExpression",
                "start": 111,
                "end": 122,
                "callee": {
                  "type": "Identifier",
                  "start": 111,
                  "end": 114,
                  "name": "gcd"
                },
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 115,
                    "end": 117,
                    "value": 48,
                    "raw": "48"
                  },
                  {
                    "type": "Literal",
                    "start": 119,
                    "end": 121,
                    "value": 18,
                    "raw": "18"
                  }
                ]
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 127,
                "end": 128,
                "value": 6,
                "raw": "6"
              }
            }
          ]
        }
      },
      {
        "type": "ExpressionStatement",
        "start": 131,
        "end": 157,
        "expression": {
          "type": "CallExpression",
          "start": 131,
          "end": 156,
          "callee": {
            "type": "Identifier",
            "start": 131,
            "end": 137,
            "name": "assert"
          },
          "arguments": [
            {
              "type": "BinaryExpression",
              "start": 138,
              "end": 155,
              "left": {
                "type": "CallExpression",
                "start": 138,
                "end": 149,
                "callee": {
                  "type": "Identifier",
                  "start": 138,
                  "end": 141,
                  "name": "gcd"
                },
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 142,
                    "end": 144,
                    "value": 54,
                    "raw": "54"
                  },
                  {
                    "type": "Literal",
                    "start": 146,
                    "end": 148,
                    "value": 24,
                    "raw": "24"
                  }
                ]
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 154,
                "end": 155,
                "value": 6,
                "raw": "6"
              }
            }
          ]
        }
      },
      {
        "type": "ExpressionStatement",
        "start": 158,
        "end": 186,
        "expression": {
          "type": "CallExpression",
          "start": 158,
          "end": 185,
          "callee": {
            "type": "Identifier",
            "start": 158,
            "end": 164,
            "name": "assert"
          },
          "arguments": [
            {
              "type": "BinaryExpression",
              "start": 165,
              "end": 184,
              "left": {
                "type": "CallExpression",
                "start": 165,
                "end": 177,
                "callee": {
                  "type": "Identifier",
                  "start": 165,
                  "end": 168,
                  "name": "gcd"
                },
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 169,
                    "end": 171,
                    "value": 48,
                    "raw": "48"
                  },
                  {
                    "type": "Literal",
                    "start": 173,
                    "end": 176,
                    "value": 180,
                    "raw": "180"
                  }
                ]
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 182,
                "end": 184,
                "value": 12,
                "raw": "12"
              }
            }
          ]
        }
      },
      {
        "type": "ExpressionStatement",
        "start": 188,
        "end": 199,
        "expression": {
          "type": "CallExpression",
          "start": 188,
          "end": 198,
          "callee": {
            "type": "Identifier",
            "start": 188,
            "end": 194,
            "name": "finish"
          },
          "arguments": [
            {
              "type": "Literal",
              "start": 195,
              "end": 197,
              "value": 42,
              "raw": "42"
            }
          ]
        }
      }
    ]
  }
]