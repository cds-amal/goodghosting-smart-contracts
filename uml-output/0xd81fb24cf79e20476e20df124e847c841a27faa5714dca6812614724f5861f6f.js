const BigNumber = require("bignumber.js");

const txlog = 
{
  type: 'transaction',
  actions: [
    {
      type: 'callexternal',
      address: '0x21722dC5D78334bAbAA19A0fCA5210bd453EAa57',
      contextHash: '0xa5d0f0cd4fd043c8edbe931400377de1c6af9e83b4e560e63b545c6f03dfbfa0',
      value: BigNumber("0x0"),
      kind: 'function',
      isDelegate: false,
      functionName: 'deposit',
      contractName: 'LendingPoolAddressesProviderMock',
      arguments: [
        {
          name: '_reserve',
          value: {
            type: { typeClass: 'address', kind: 'specific', payable: false },
            kind: 'value',
            value: {
              asAddress: '0x89E9580a57e4A181E613cCd9EbA1054d7E77B385',
              rawAsHex: '0x00000000000000000000000089e9580a57e4a181e613ccd9eba1054d7e77b385'
            }
          }
        },
        {
          name: '_amount',
          value: {
            type: { typeClass: 'uint', bits: 256, typeHint: 'uint256' },
            kind: 'value',
            value: {
              asBN: BigNumber("0x3635c9adc5dea00000"),
              rawAsBN: BigNumber("0x3635c9adc5dea00000")
            }
          }
        },
        {
          name: 'onBehalfOf',
          value: {
            type: { typeClass: 'address', kind: 'specific', payable: false },
            kind: 'value',
            value: {
              asAddress: '0x21722dC5D78334bAbAA19A0fCA5210bd453EAa57',
              rawAsHex: '0x00000000000000000000000021722dc5d78334babaa19a0fca5210bd453eaa57'
            }
          }
        },
        {
          name: '_referralCode',
          value: {
            type: { typeClass: 'uint', bits: 16, typeHint: 'uint16' },
            kind: 'value',
            value: { asBN: BigNumber("0x0"), rawAsBN: BigNumber("0x0") }
          }
        }
      ],
      actions: [
        {
          type: 'callexternal',
          address: '0x89E9580a57e4A181E613cCd9EbA1054d7E77B385',
          contextHash: '0x2181690f9fe98b4b237a4026f142ef947a191b1d924014d891cf7b40f89f544d',
          value: BigNumber("0x0"),
          kind: 'function',
          isDelegate: false,
          functionName: 'transferFrom',
          contractName: 'MockERC20Mintable',
          arguments: [
            {
              name: 'sender',
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
              name: 'recipient',
              value: {
                type: {
                  typeClass: 'address',
                  kind: 'specific',
                  payable: false
                },
                kind: 'value',
                value: {
                  asAddress: '0x21722dC5D78334bAbAA19A0fCA5210bd453EAa57',
                  rawAsHex: '0x00000000000000000000000021722dc5d78334babaa19a0fca5210bd453eaa57'
                }
              }
            },
            {
              name: 'amount',
              value: {
                type: { typeClass: 'uint', bits: 256, typeHint: 'uint256' },
                kind: 'value',
                value: {
                  asBN: BigNumber("0x3635c9adc5dea00000"),
                  rawAsBN: BigNumber("0x3635c9adc5dea00000")
                }
              }
            }
          ],
          actions: [
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
                              asBN: BigNumber("0x3635c9adc5dea00000"),
                              rawAsBN: BigNumber("0x3635c9adc5dea00000")
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
                              asBN: BigNumber("0x3635c9adc5dea00000"),
                              rawAsBN: BigNumber("0x3635c9adc5dea00000")
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
                            value: { asBN: BigNumber("0x0"), rawAsBN: BigNumber("0x0") }
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
                            value: {
                              asBN: BigNumber("0x340aad21b3b700000"),
                              rawAsBN: BigNumber("0x340aad21b3b700000")
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
                              asBN: BigNumber("0x3635c9adc5dea00000"),
                              rawAsBN: BigNumber("0x3635c9adc5dea00000")
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
                              asBN: BigNumber("0x3976747fe11a100000"),
                              rawAsBN: BigNumber("0x3976747fe11a100000")
                            }
                          }
                        }
                      ]
                    },
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
                              asAddress: '0x21722dC5D78334bAbAA19A0fCA5210bd453EAa57',
                              rawAsHex: '0x00000000000000000000000021722dc5d78334babaa19a0fca5210bd453eaa57'
                            }
                          }
                        }
                      ]
                    },
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
                              asAddress: '0x21722dC5D78334bAbAA19A0fCA5210bd453EAa57',
                              rawAsHex: '0x00000000000000000000000021722dc5d78334babaa19a0fca5210bd453eaa57'
                            }
                          }
                        }
                      ]
                    },
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
                              asBN: BigNumber("0x3635c9adc5dea00000"),
                              rawAsBN: BigNumber("0x3635c9adc5dea00000")
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
                              asBN: BigNumber("0x3635c9adc5dea00000"),
                              rawAsBN: BigNumber("0x3635c9adc5dea00000")
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
                              asString: 'ERC20: transfer amount exceeds allowance'
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
                            value: { asBN: BigNumber("0x0"), rawAsBN: BigNumber("0x0") }
                          }
                        }
                      ]
                    },
                    {
                      type: 'callinternal',
                      actions: [],
                      functionName: '_approve',
                      contractName: 'ERC20',
                      arguments: [
                        {
                          name: 'owner',
                          value: {
                            type: {
                              typeClass: 'address',
                              kind: 'specific',
                              payable: false
                            },
                            kind: 'value',
                            value: {
                              asAddress: '0x00000000000000000000003635c9aDC5dEA00000',
                              rawAsHex: '0x00000000000000000000000000000000000000000000003635c9adc5dea00000'
                            }
                          }
                        },
                        {
                          name: 'spender',
                          value: {
                            type: {
                              typeClass: 'address',
                              kind: 'specific',
                              payable: false
                            },
                            kind: 'value',
                            value: {
                              asAddress: '0x0000000000000000000000000000000000000000',
                              rawAsHex: '0x0000000000000000000000000000000000000000000000000000000000000000'
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
                            value: { asBN: BigNumber("0x44c"), rawAsBN: BigNumber("0x44c") }
                          }
                        }
                      ],
                      returnKind: 'return'
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
                          asAddress: '0x21722dC5D78334bAbAA19A0fCA5210bd453EAa57',
                          rawAsHex: '0x00000000000000000000000021722dc5d78334babaa19a0fca5210bd453eaa57'
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
                          asAddress: '0x00000000000000000000003635c9aDC5dEA00000',
                          rawAsHex: '0x00000000000000000000000000000000000000000000003635c9adc5dea00000'
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
                  returnKind: 'unwind'
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
                        value: {
                          asBN: BigNumber("0x340aad21b3b700000"),
                          rawAsBN: BigNumber("0x340aad21b3b700000")
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
                          asBN: BigNumber("0x3635c9adc5dea00000"),
                          rawAsBN: BigNumber("0x3635c9adc5dea00000")
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
                          asBN: BigNumber("0x3976747fe11a100000"),
                          rawAsBN: BigNumber("0x3976747fe11a100000")
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
                          asBN: BigNumber("0x3635c9adc5dea00000"),
                          rawAsBN: BigNumber("0x3635c9adc5dea00000")
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
                          asBN: BigNumber("0x3635c9adc5dea00000"),
                          rawAsBN: BigNumber("0x3635c9adc5dea00000")
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
                      asAddress: '0x00000000000000000000003635c9aDC5dEA00000',
                      rawAsHex: '0x00000000000000000000000000000000000000000000003635c9adc5dea00000'
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
                    value: { asBN: BigNumber("0x10ae"), rawAsBN: BigNumber("0x10ae") }
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
      returnValues: []
    }
  ],
  origin: '0x627306090abaB3A6e1400e9345bC60c78a8BEf57'
}

module.exports = txlog;
