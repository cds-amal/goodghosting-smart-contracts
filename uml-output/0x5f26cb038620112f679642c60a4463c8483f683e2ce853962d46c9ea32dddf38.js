const BigNumber = require("bignumber.js");

const txlog = 
{
  type: 'transaction',
  actions: [
    {
      type: 'callexternal',
      address: '0xe57779fAb48667c13C1508B872CbC80dea7B9186',
      contextHash: '0x4be60db92cada79b8066139b76b1cfb0319fbf46439ef2b7c575a4dd88480618',
      value: BigNumber("0x0"),
      kind: 'function',
      isDelegate: false,
      functionName: 'adminFeeWithdraw',
      contractName: 'GoodGhosting',
      arguments: [],
      actions: [
        {
          type: 'callinternal',
          actions: [],
          functionName: '_msgSender',
          contractName: 'Context',
          arguments: [],
          returnKind: 'return',
          returnValues: [
            {
              name: undefined,
              value: {
                type: {
                  typeClass: 'address',
                  kind: 'specific',
                  payable: true
                },
                kind: 'value',
                value: {
                  asAddress: '0x627306090abaB3A6e1400e9345bC60c78a8BEf57',
                  rawAsHex: '0x000000000000000000000000627306090abab3a6e1400e9345bc60c78a8bef57'
                }
              }
            }
          ]
        },
        {
          type: 'callinternal',
          actions: [],
          functionName: 'owner',
          contractName: 'Ownable',
          arguments: [],
          returnKind: 'return',
          returnValues: [
            {
              name: undefined,
              value: {
                type: {
                  typeClass: 'address',
                  kind: 'specific',
                  payable: false
                },
                kind: 'value',
                value: {
                  asAddress: '0x627306090abaB3A6e1400e9345bC60c78a8BEf57',
                  rawAsHex: '0x000000000000000000000000627306090abab3a6e1400e9345bc60c78a8bef57'
                }
              }
            }
          ]
        },
        {
          type: 'callinternal',
          actions: [
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
                        value: {
                          asBN: BigNumber("0x60a8f46c"),
                          rawAsBN: BigNumber("0x60a8f46c")
                        }
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
                        value: {
                          asBN: BigNumber("0x60a8ef7e"),
                          rawAsBN: BigNumber("0x60a8ef7e")
                        }
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
                        value: { asBN: BigNumber("0x4ee"), rawAsBN: BigNumber("0x4ee") }
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
                        value: { asBN: BigNumber("0x4ee"), rawAsBN: BigNumber("0x4ee") }
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
                        value: { asBN: BigNumber("0x7"), rawAsBN: BigNumber("0x7") }
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
                    type: {
                      typeClass: 'uint',
                      bits: 256,
                      typeHint: 'uint256'
                    },
                    kind: 'value',
                    value: { asBN: BigNumber("0x7"), rawAsBN: BigNumber("0x7") }
                  }
                }
              ]
            }
          ],
          functionName: 'isGameCompleted',
          contractName: 'GoodGhosting',
          arguments: [],
          returnKind: 'return',
          returnValues: [
            {
              name: undefined,
              value: {
                type: { typeClass: 'bool', typeHint: 'bool' },
                kind: 'value',
                value: { asBoolean: true }
              }
            }
          ]
        },
        {
          type: 'callinternal',
          actions: [],
          functionName: 'owner',
          contractName: 'Ownable',
          arguments: [],
          returnKind: 'return',
          returnValues: [
            {
              name: undefined,
              value: {
                type: {
                  typeClass: 'address',
                  kind: 'specific',
                  payable: false
                },
                kind: 'value',
                value: {
                  asAddress: '0x627306090abaB3A6e1400e9345bC60c78a8BEf57',
                  rawAsHex: '0x000000000000000000000000627306090abab3a6e1400e9345bc60c78a8bef57'
                }
              }
            }
          ]
        },
        {
          type: 'callinternal',
          actions: [],
          functionName: 'owner',
          contractName: 'Ownable',
          arguments: [],
          returnKind: 'return',
          returnValues: [
            {
              name: undefined,
              value: {
                type: {
                  typeClass: 'address',
                  kind: 'specific',
                  payable: false
                },
                kind: 'value',
                value: {
                  asAddress: '0x627306090abaB3A6e1400e9345bC60c78a8BEf57',
                  rawAsHex: '0x000000000000000000000000627306090abab3a6e1400e9345bc60c78a8bef57'
                }
              }
            }
          ]
        },
        {
          type: 'callexternal',
          address: '0x89E9580a57e4A181E613cCd9EbA1054d7E77B385',
          contextHash: '0x2181690f9fe98b4b237a4026f142ef947a191b1d924014d891cf7b40f89f544d',
          value: BigNumber("0x0"),
          kind: 'function',
          isDelegate: false,
          functionName: 'transfer',
          contractName: 'MockERC20Mintable',
          arguments: [
            {
              name: 'recipient',
              value: {
                type: {
                  typeClass: 'address',
                  kind: 'specific',
                  payable: false
                },
                kind: 'value',
                value: {
                  asAddress: '0x627306090abaB3A6e1400e9345bC60c78a8BEf57',
                  rawAsHex: '0x000000000000000000000000627306090abab3a6e1400e9345bc60c78a8bef57'
                }
              }
            },
            {
              name: 'amount',
              value: {
                type: { typeClass: 'uint', bits: 256, typeHint: 'uint256' },
                kind: 'value',
                value: {
                  asBN: BigNumber("0x2b5e3af16b1880000"),
                  rawAsBN: BigNumber("0x2b5e3af16b1880000")
                }
              }
            }
          ],
          actions: [
            {
              type: 'callinternal',
              actions: [],
              functionName: '_msgSender',
              contractName: 'Context',
              arguments: [],
              returnKind: 'return',
              returnValues: [
                {
                  name: undefined,
                  value: {
                    type: {
                      typeClass: 'address',
                      kind: 'specific',
                      payable: true
                    },
                    kind: 'value',
                    value: {
                      asAddress: '0xe57779fAb48667c13C1508B872CbC80dea7B9186',
                      rawAsHex: '0x000000000000000000000000e57779fab48667c13c1508b872cbc80dea7b9186'
                    }
                  }
                }
              ]
            },
            {
              type: 'callinternal',
              actions: [
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
                            value: {
                              asBN: BigNumber("0x3976747fe11a100000"),
                              rawAsBN: BigNumber("0x3976747fe11a100000")
                            }
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
                            value: {
                              asBN: BigNumber("0x2b5e3af16b1880000"),
                              rawAsBN: BigNumber("0x2b5e3af16b1880000")
                            }
                          }
                        },
                        {
                          name: 'errorMessage',
                          value: {
                            type: {
                              typeClass: 'string',
                              location: 'memory',
                              typeHint: 'string'
                            },
                            kind: 'value',
                            value: {
                              kind: 'valid',
                              asString: 'ERC20: transfer amount exceeds balance'
                            }
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
                            value: {
                              asBN: BigNumber("0x36c090d0ca68880000"),
                              rawAsBN: BigNumber("0x36c090d0ca68880000")
                            }
                          }
                        }
                      ]
                    },
                    {
                      type: 'callinternal',
                      actions: [],
                      functionName: 'add',
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
                            value: { asBN: BigNumber("0x0"), rawAsBN: BigNumber("0x0") }
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
                            value: {
                              asBN: BigNumber("0x2b5e3af16b1880000"),
                              rawAsBN: BigNumber("0x2b5e3af16b1880000")
                            }
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
                            value: {
                              asBN: BigNumber("0x2b5e3af16b1880000"),
                              rawAsBN: BigNumber("0x2b5e3af16b1880000")
                            }
                          }
                        }
                      ]
                    }
                  ],
                  functionName: '_beforeTokenTransfer',
                  contractName: 'ERC20',
                  arguments: [
                    {
                      name: 'from',
                      value: {
                        type: {
                          typeClass: 'address',
                          kind: 'specific',
                          payable: false
                        },
                        kind: 'value',
                        value: {
                          asAddress: '0x627306090abaB3A6e1400e9345bC60c78a8BEf57',
                          rawAsHex: '0x000000000000000000000000627306090abab3a6e1400e9345bc60c78a8bef57'
                        }
                      }
                    },
                    {
                      name: 'to',
                      value: {
                        type: {
                          typeClass: 'address',
                          kind: 'specific',
                          payable: false
                        },
                        kind: 'value',
                        value: {
                          asAddress: '0x000000000000000000000002B5e3aF16B1880000',
                          rawAsHex: '0x000000000000000000000000000000000000000000000002b5e3af16b1880000'
                        }
                      }
                    },
                    {
                      name: 'amount',
                      value: {
                        type: {
                          typeClass: 'uint',
                          bits: 256,
                          typeHint: 'uint256'
                        },
                        kind: 'value',
                        value: { asBN: BigNumber("0x76d"), rawAsBN: BigNumber("0x76d") }
                      }
                    }
                  ],
                  returnKind: 'return'
                }
              ],
              returnKind: 'unwind'
            }
          ],
          returnKind: 'unwind',
          returnValues: [
            {
              value: {
                type: { typeClass: 'bool', typeHint: 'bool' },
                kind: 'value',
                value: { asBoolean: true }
              }
            }
          ]
        }
      ],
      returnKind: 'return',
      returnValues: []
    }
  ],
  origin: '0x627306090abaB3A6e1400e9345bC60c78a8BEf57'
}

module.exports = txlog;
