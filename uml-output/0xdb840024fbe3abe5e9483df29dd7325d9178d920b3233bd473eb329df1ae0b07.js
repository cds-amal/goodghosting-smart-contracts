const BigNumber = require("bignumber.js");

const txlog = 
{
  type: 'transaction',
  actions: [
    {
      type: 'callexternal',
      address: '0x25CbaB0C13650026C7BcBCcE7EF963c303B68Cd6',
      contextHash: '0x4be60db92cada79b8066139b76b1cfb0319fbf46439ef2b7c575a4dd88480618',
      value: BigNumber("0x0"),
      kind: 'function',
      isDelegate: false,
      functionName: 'joinGame',
      contractName: 'GoodGhosting',
      arguments: [
        {
          name: 'index',
          value: {
            type: { typeClass: 'uint', bits: 256, typeHint: 'uint256' },
            kind: 'value',
            value: { asBN: BigNumber("0x3"), rawAsBN: BigNumber("0x3") }
          }
        },
        {
          name: 'merkleProof',
          value: {
            type: {
              typeClass: 'array',
              baseType: {
                typeClass: 'bytes',
                kind: 'static',
                length: 32,
                typeHint: 'bytes32'
              },
              kind: 'dynamic',
              location: 'calldata',
              typeHint: 'bytes32[]'
            },
            kind: 'value',
            value: [
              {
                type: {
                  typeClass: 'bytes',
                  kind: 'static',
                  length: 32,
                  typeHint: 'bytes32'
                },
                kind: 'value',
                value: {
                  asHex: '0x45533c7da4a9f550fb2a9e5efe3b6db62261670807ed02ce75cb871415d708cc',
                  rawAsHex: '0x45533c7da4a9f550fb2a9e5efe3b6db62261670807ed02ce75cb871415d708cc'
                }
              },
              {
                type: {
                  typeClass: 'bytes',
                  kind: 'static',
                  length: 32,
                  typeHint: 'bytes32'
                },
                kind: 'value',
                value: {
                  asHex: '0x10b900833bd5f4efa3f47f034cf1d4afd8f4de59b50e0cdc2f0c2e0847caecef',
                  rawAsHex: '0x10b900833bd5f4efa3f47f034cf1d4afd8f4de59b50e0cdc2f0c2e0847caecef'
                }
              },
              {
                type: {
                  typeClass: 'bytes',
                  kind: 'static',
                  length: 32,
                  typeHint: 'bytes32'
                },
                kind: 'value',
                value: {
                  asHex: '0xc0afcf89a6f3a0adc4f9753a170e9be8a76083ff27004c10b5fb55db34079324',
                  rawAsHex: '0xc0afcf89a6f3a0adc4f9753a170e9be8a76083ff27004c10b5fb55db34079324'
                }
              }
            ]
          }
        }
      ],
      actions: [
        {
          type: 'callinternal',
          actions: [],
          functionName: 'paused',
          contractName: 'Pausable',
          arguments: [],
          returnKind: 'return',
          returnValues: [
            {
              name: undefined,
              value: {
                type: { typeClass: 'bool', typeHint: 'bool' },
                kind: 'value',
                value: { asBoolean: false }
              }
            }
          ]
        },
        {
          type: 'callinternal',
          actions: [
            {
              type: 'callinternal',
              actions: [],
              functionName: 'sub',
              contractName: 'SafeMath',
              arguments: [
                {
                  name: 'a',
                  value: {
                    type: {
                      typeClass: 'uint',
                      bits: 256,
                      typeHint: 'uint256'
                    },
                    kind: 'value',
                    value: { asBN: BigNumber("0x60a882a8"), rawAsBN: BigNumber("0x60a882a8") }
                  }
                },
                {
                  name: 'b',
                  value: {
                    type: {
                      typeClass: 'uint',
                      bits: 256,
                      typeHint: 'uint256'
                    },
                    kind: 'value',
                    value: { asBN: BigNumber("0x60a882a7"), rawAsBN: BigNumber("0x60a882a7") }
                  }
                }
              ],
              returnKind: 'return',
              returnValues: [
                {
                  name: undefined,
                  value: {
                    type: {
                      typeClass: 'uint',
                      bits: 256,
                      typeHint: 'uint256'
                    },
                    kind: 'value',
                    value: { asBN: BigNumber("0x1"), rawAsBN: BigNumber("0x1") }
                  }
                }
              ]
            },
            {
              type: 'callinternal',
              actions: [],
              functionName: 'div',
              contractName: 'SafeMath',
              arguments: [
                {
                  name: 'a',
                  value: {
                    type: {
                      typeClass: 'uint',
                      bits: 256,
                      typeHint: 'uint256'
                    },
                    kind: 'value',
                    value: { asBN: BigNumber("0x1"), rawAsBN: BigNumber("0x1") }
                  }
                },
                {
                  name: 'b',
                  value: {
                    type: {
                      typeClass: 'uint',
                      bits: 256,
                      typeHint: 'uint256'
                    },
                    kind: 'value',
                    value: { asBN: BigNumber("0xb4"), rawAsBN: BigNumber("0xb4") }
                  }
                }
              ],
              returnKind: 'return',
              returnValues: [
                {
                  name: undefined,
                  value: {
                    type: {
                      typeClass: 'uint',
                      bits: 256,
                      typeHint: 'uint256'
                    },
                    kind: 'value',
                    value: { asBN: BigNumber("0x0"), rawAsBN: BigNumber("0x0") }
                  }
                }
              ]
            }
          ],
          functionName: 'getCurrentSegment',
          contractName: 'GoodGhosting',
          arguments: [],
          returnKind: 'return',
          returnValues: [
            {
              name: undefined,
              value: {
                type: { typeClass: 'uint', bits: 256, typeHint: 'uint256' },
                kind: 'value',
                value: { asBN: BigNumber("0x0"), rawAsBN: BigNumber("0x0") }
              }
            }
          ]
        },
        {
          type: 'callinternal',
          actions: [
            {
              type: 'callinternal',
              actions: [],
              functionName: 'verify',
              contractName: 'MerkleProof',
              arguments: [
                {
                  name: 'proof',
                  value: {
                    type: {
                      typeClass: 'array',
                      baseType: {
                        typeClass: 'bytes',
                        kind: 'static',
                        length: 32,
                        typeHint: 'bytes32'
                      },
                      kind: 'dynamic',
                      location: 'memory',
                      typeHint: 'bytes32[]'
                    },
                    kind: 'value',
                    value: [
                      {
                        type: {
                          typeClass: 'bytes',
                          kind: 'static',
                          length: 32,
                          typeHint: 'bytes32'
                        },
                        kind: 'value',
                        value: {
                          asHex: '0x45533c7da4a9f550fb2a9e5efe3b6db62261670807ed02ce75cb871415d708cc',
                          rawAsHex: '0x45533c7da4a9f550fb2a9e5efe3b6db62261670807ed02ce75cb871415d708cc'
                        }
                      },
                      {
                        type: {
                          typeClass: 'bytes',
                          kind: 'static',
                          length: 32,
                          typeHint: 'bytes32'
                        },
                        kind: 'value',
                        value: {
                          asHex: '0x10b900833bd5f4efa3f47f034cf1d4afd8f4de59b50e0cdc2f0c2e0847caecef',
                          rawAsHex: '0x10b900833bd5f4efa3f47f034cf1d4afd8f4de59b50e0cdc2f0c2e0847caecef'
                        }
                      },
                      {
                        type: {
                          typeClass: 'bytes',
                          kind: 'static',
                          length: 32,
                          typeHint: 'bytes32'
                        },
                        kind: 'value',
                        value: {
                          asHex: '0xc0afcf89a6f3a0adc4f9753a170e9be8a76083ff27004c10b5fb55db34079324',
                          rawAsHex: '0xc0afcf89a6f3a0adc4f9753a170e9be8a76083ff27004c10b5fb55db34079324'
                        }
                      }
                    ]
                  }
                },
                {
                  name: 'root',
                  value: {
                    type: {
                      typeClass: 'bytes',
                      kind: 'static',
                      length: 32,
                      typeHint: 'bytes32'
                    },
                    kind: 'value',
                    value: {
                      asHex: '0xd53ed7372825e2b21778b03e7f08246a9e358bf89416c856ebb4f196fca5e662',
                      rawAsHex: '0xd53ed7372825e2b21778b03e7f08246a9e358bf89416c856ebb4f196fca5e662'
                    }
                  }
                },
                {
                  name: 'leaf',
                  value: {
                    type: {
                      typeClass: 'bytes',
                      kind: 'static',
                      length: 32,
                      typeHint: 'bytes32'
                    },
                    kind: 'value',
                    value: {
                      asHex: '0x34d220641a835e676c622620c60afa1785434e045dfb5d84de79fcc1628faaaa',
                      rawAsHex: '0x34d220641a835e676c622620c60afa1785434e045dfb5d84de79fcc1628faaaa'
                    }
                  }
                }
              ],
              returnKind: 'return',
              returnValues: [
                {
                  name: undefined,
                  value: {
                    type: { typeClass: 'bool', typeHint: 'bool' },
                    kind: 'value',
                    value: { asBoolean: false }
                  }
                }
              ]
            }
          ],
          functionName: 'claim',
          contractName: 'GoodGhostingWhitelisted',
          arguments: [
            {
              name: 'index',
              value: {
                type: { typeClass: 'uint', bits: 256, typeHint: 'uint256' },
                kind: 'value',
                value: { asBN: BigNumber("0x3"), rawAsBN: BigNumber("0x3") }
              }
            },
            {
              name: 'account',
              value: {
                type: {
                  typeClass: 'address',
                  kind: 'specific',
                  payable: false
                },
                kind: 'value',
                value: {
                  asAddress: '0x821aEa9a577a9b44299B9c15c88cf3087F3b5544',
                  rawAsHex: '0x000000000000000000000000821aea9a577a9b44299b9c15c88cf3087f3b5544'
                }
              }
            },
            {
              name: 'isValid',
              value: {
                type: { typeClass: 'bool', typeHint: 'bool' },
                kind: 'value',
                value: { asBoolean: true }
              }
            },
            {
              name: 'merkleProof',
              value: {
                type: {
                  typeClass: 'array',
                  baseType: {
                    typeClass: 'bytes',
                    kind: 'static',
                    length: 32,
                    typeHint: 'bytes32'
                  },
                  kind: 'dynamic',
                  location: 'calldata',
                  typeHint: 'bytes32[]'
                },
                kind: 'value',
                value: [
                  {
                    type: {
                      typeClass: 'bytes',
                      kind: 'static',
                      length: 32,
                      typeHint: 'bytes32'
                    },
                    kind: 'value',
                    value: {
                      asHex: '0x45533c7da4a9f550fb2a9e5efe3b6db62261670807ed02ce75cb871415d708cc',
                      rawAsHex: '0x45533c7da4a9f550fb2a9e5efe3b6db62261670807ed02ce75cb871415d708cc'
                    }
                  },
                  {
                    type: {
                      typeClass: 'bytes',
                      kind: 'static',
                      length: 32,
                      typeHint: 'bytes32'
                    },
                    kind: 'value',
                    value: {
                      asHex: '0x10b900833bd5f4efa3f47f034cf1d4afd8f4de59b50e0cdc2f0c2e0847caecef',
                      rawAsHex: '0x10b900833bd5f4efa3f47f034cf1d4afd8f4de59b50e0cdc2f0c2e0847caecef'
                    }
                  },
                  {
                    type: {
                      typeClass: 'bytes',
                      kind: 'static',
                      length: 32,
                      typeHint: 'bytes32'
                    },
                    kind: 'value',
                    value: {
                      asHex: '0xc0afcf89a6f3a0adc4f9753a170e9be8a76083ff27004c10b5fb55db34079324',
                      rawAsHex: '0xc0afcf89a6f3a0adc4f9753a170e9be8a76083ff27004c10b5fb55db34079324'
                    }
                  }
                ]
              }
            }
          ],
          returnKind: 'revert',
          error: {
            kind: 'revert',
            abi: {
              name: 'Error',
              type: 'error',
              inputs: [ { name: '', type: 'string', internalType: 'string' } ]
            },
            status: false,
            arguments: [
              {
                value: {
                  type: { typeClass: 'string', typeHint: 'string' },
                  kind: 'value',
                  value: {
                    kind: 'valid',
                    asString: 'MerkleDistributor: Invalid proof'
                  }
                }
              }
            ],
            decodingMode: 'full'
          }
        }
      ],
      returnKind: 'unwind'
    }
  ],
  origin: '0x821aEa9a577a9b44299B9c15c88cf3087F3b5544'
}

module.exports = txlog;
