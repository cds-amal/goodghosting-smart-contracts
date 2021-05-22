const BigNumber = require("bignumber.js");

const txlog = 
{
  type: 'transaction',
  actions: [
    {
      type: 'callexternal',
      address: '0xE7539f1d351dfB28696f38e2219bcB19b71AE564',
      contextHash: '0x4be60db92cada79b8066139b76b1cfb0319fbf46439ef2b7c575a4dd88480618',
      value: BigNumber("0x0"),
      kind: 'function',
      isDelegate: false,
      functionName: 'withdraw',
      contractName: 'GoodGhosting',
      arguments: [],
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
                type: { typeClass: 'uint', bits: 256, typeHint: 'uint256' },
                kind: 'value',
                value: { asBN: BigNumber("0x6"), rawAsBN: BigNumber("0x6") }
              }
            },
            {
              name: 'b',
              value: {
                type: { typeClass: 'uint', bits: 256, typeHint: 'uint256' },
                kind: 'value',
                value: { asBN: BigNumber("0x1"), rawAsBN: BigNumber("0x1") }
              }
            }
          ],
          returnKind: 'return',
          returnValues: [
            {
              name: undefined,
              value: {
                type: { typeClass: 'uint', bits: 256, typeHint: 'uint256' },
                kind: 'value',
                value: { asBN: BigNumber("0x5"), rawAsBN: BigNumber("0x5") }
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
                type: { typeClass: 'uint', bits: 256, typeHint: 'uint256' },
                kind: 'value',
                value: { asBN: BigNumber("0x0"), rawAsBN: BigNumber("0x0") }
              }
            },
            {
              name: 'b',
              value: {
                type: { typeClass: 'uint', bits: 256, typeHint: 'uint256' },
                kind: 'value',
                value: { asBN: BigNumber("0x1"), rawAsBN: BigNumber("0x1") }
              }
            }
          ],
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
              type: 'callexternal',
              address: '0x8b9310d456A72bea86E3C2eAd7e7F47625d2ef34',
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
                      asAddress: '0xf17f52151EbEF6C7334FAD080c5704D77216b732',
                      rawAsHex: '0x000000000000000000000000f17f52151ebef6c7334fad080c5704d77216b732'
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
                    value: {
                      asBN: BigNumber("0x340aad21b3b700000"),
                      rawAsBN: BigNumber("0x340aad21b3b700000")
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
                          asAddress: '0xE7539f1d351dfB28696f38e2219bcB19b71AE564',
                          rawAsHex: '0x000000000000000000000000e7539f1d351dfb28696f38e2219bcb19b71ae564'
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
                                  asBN: BigNumber("0x340aad21b3b700000"),
                                  rawAsBN: BigNumber("0x340aad21b3b700000")
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
                                  asBN: BigNumber("0x32f51edbaaa3300000"),
                                  rawAsBN: BigNumber("0x32f51edbaaa3300000")
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
                                  asBN: BigNumber("0x340aad21b3b700000"),
                                  rawAsBN: BigNumber("0x340aad21b3b700000")
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
                              asAddress: '0xf17f52151EbEF6C7334FAD080c5704D77216b732',
                              rawAsHex: '0x000000000000000000000000f17f52151ebef6c7334fad080c5704d77216b732'
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
                              asAddress: '0x00000000000000000000000340AAd21b3b700000',
                              rawAsHex: '0x00000000000000000000000000000000000000000000000340aad21b3b700000'
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
          functionName: 'add',
          contractName: 'SafeMath',
          arguments: [
            {
              name: 'a',
              value: {
                type: { typeClass: 'uint', bits: 256, typeHint: 'uint256' },
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
                type: { typeClass: 'uint', bits: 256, typeHint: 'uint256' },
                kind: 'value',
                value: { asBN: BigNumber("0x0"), rawAsBN: BigNumber("0x0") }
              }
            }
          ],
          returnKind: 'return'
        }
      ],
      returnKind: 'unwind',
      returnValues: []
    }
  ],
  origin: '0xf17f52151EbEF6C7334FAD080c5704D77216b732'
}

module.exports = txlog;
