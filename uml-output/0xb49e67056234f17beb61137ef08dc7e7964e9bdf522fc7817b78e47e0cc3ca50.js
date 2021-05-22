const BigNumber = require("bignumber.js");

const txlog = 
{
  type: 'transaction',
  actions: [
    {
      type: 'callexternal',
      address: '0x9583518388389c8B324629bF16751B2e3B416287',
      contextHash: '0x4be60db92cada79b8066139b76b1cfb0319fbf46439ef2b7c575a4dd88480618',
      value: BigNumber("0x0"),
      kind: 'function',
      isDelegate: false,
      functionName: 'depositIntoExternalPool',
      contractName: 'GoodGhosting',
      arguments: [],
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
                          asBN: BigNumber("0x60a8b655"),
                          rawAsBN: BigNumber("0x60a8b655")
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
                          asBN: BigNumber("0x60a8b438"),
                          rawAsBN: BigNumber("0x60a8b438")
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
                        value: { asBN: BigNumber("0x21d"), rawAsBN: BigNumber("0x21d") }
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
                        value: { asBN: BigNumber("0x21d"), rawAsBN: BigNumber("0x21d") }
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
                        value: { asBN: BigNumber("0x3"), rawAsBN: BigNumber("0x3") }
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
                    value: { asBN: BigNumber("0x3"), rawAsBN: BigNumber("0x3") }
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
                    value: { asBN: BigNumber("0x60a8b655"), rawAsBN: BigNumber("0x60a8b655") }
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
                    value: { asBN: BigNumber("0x60a8b438"), rawAsBN: BigNumber("0x60a8b438") }
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
                    value: { asBN: BigNumber("0x21d"), rawAsBN: BigNumber("0x21d") }
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
                    value: { asBN: BigNumber("0x21d"), rawAsBN: BigNumber("0x21d") }
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
                    value: { asBN: BigNumber("0x3"), rawAsBN: BigNumber("0x3") }
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
                value: { asBN: BigNumber("0x3"), rawAsBN: BigNumber("0x3") }
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
                type: { typeClass: 'uint', bits: 256, typeHint: 'uint256' },
                kind: 'value',
                value: { asBN: BigNumber("0x3"), rawAsBN: BigNumber("0x3") }
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
                value: { asBN: BigNumber("0x2"), rawAsBN: BigNumber("0x2") }
              }
            }
          ]
        },
        {
          type: 'callexternal',
          address: '0xD38BBD737e01915f8C57CeAb24790610B88B2369',
          contextHash: '0x2181690f9fe98b4b237a4026f142ef947a191b1d924014d891cf7b40f89f544d',
          value: BigNumber("0x0"),
          kind: 'function',
          isDelegate: false,
          functionName: 'balanceOf',
          contractName: 'MockERC20Mintable',
          arguments: [
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
                  asAddress: '0x9583518388389c8B324629bF16751B2e3B416287',
                  rawAsHex: '0x0000000000000000000000009583518388389c8b324629bf16751b2e3b416287'
                }
              }
            }
          ],
          actions: [],
          returnKind: 'return',
          returnValues: [
            {
              value: {
                type: { typeClass: 'uint', bits: 256, typeHint: 'uint256' },
                kind: 'value',
                value: {
                  asBN: BigNumber("0x8ac7230489e80000"),
                  rawAsBN: BigNumber("0x8ac7230489e80000")
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
                type: { typeClass: 'uint', bits: 256, typeHint: 'uint256' },
                kind: 'value',
                value: { asBN: BigNumber("0x3"), rawAsBN: BigNumber("0x3") }
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
                value: { asBN: BigNumber("0x2"), rawAsBN: BigNumber("0x2") }
              }
            }
          ]
        },
        {
          type: 'callexternal',
          address: '0x01B67874ecd062b43f773c5412B7D10023db6498',
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
                type: {
                  typeClass: 'address',
                  kind: 'specific',
                  payable: false
                },
                kind: 'value',
                value: {
                  asAddress: '0xD38BBD737e01915f8C57CeAb24790610B88B2369',
                  rawAsHex: '0x000000000000000000000000d38bbd737e01915f8c57ceab24790610b88b2369'
                }
              }
            },
            {
              name: '_amount',
              value: {
                type: { typeClass: 'uint', bits: 256, typeHint: 'uint256' },
                kind: 'value',
                value: {
                  asBN: BigNumber("0x8ac7230489e80000"),
                  rawAsBN: BigNumber("0x8ac7230489e80000")
                }
              }
            },
            {
              name: 'onBehalfOf',
              value: {
                type: {
                  typeClass: 'address',
                  kind: 'specific',
                  payable: false
                },
                kind: 'value',
                value: {
                  asAddress: '0x9583518388389c8B324629bF16751B2e3B416287',
                  rawAsHex: '0x0000000000000000000000009583518388389c8b324629bf16751b2e3b416287'
                }
              }
            },
            {
              name: '_referralCode',
              value: {
                type: { typeClass: 'uint', bits: 16, typeHint: 'uint16' },
                kind: 'value',
                value: { asBN: BigNumber("0x9b"), rawAsBN: BigNumber("0x9b") }
              }
            }
          ],
          actions: [
            {
              type: 'callexternal',
              address: '0xD38BBD737e01915f8C57CeAb24790610B88B2369',
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
                      asAddress: '0x9583518388389c8B324629bF16751B2e3B416287',
                      rawAsHex: '0x0000000000000000000000009583518388389c8b324629bf16751b2e3b416287'
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
                      asAddress: '0x01B67874ecd062b43f773c5412B7D10023db6498',
                      rawAsHex: '0x00000000000000000000000001b67874ecd062b43f773c5412b7d10023db6498'
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
                      asBN: BigNumber("0x8ac7230489e80000"),
                      rawAsBN: BigNumber("0x8ac7230489e80000")
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
                                  asBN: BigNumber("0x8ac7230489e80000"),
                                  rawAsBN: BigNumber("0x8ac7230489e80000")
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
                                  asBN: BigNumber("0x8ac7230489e80000"),
                                  rawAsBN: BigNumber("0x8ac7230489e80000")
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
                                  asBN: BigNumber("0x1158e460913d00000"),
                                  rawAsBN: BigNumber("0x1158e460913d00000")
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
                                  asBN: BigNumber("0x8ac7230489e80000"),
                                  rawAsBN: BigNumber("0x8ac7230489e80000")
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
                                  asBN: BigNumber("0x1a055690d9db80000"),
                                  rawAsBN: BigNumber("0x1a055690d9db80000")
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
                                  asAddress: '0x01B67874ecd062b43f773c5412B7D10023db6498',
                                  rawAsHex: '0x00000000000000000000000001b67874ecd062b43f773c5412b7d10023db6498'
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
                                  asAddress: '0x01B67874ecd062b43f773c5412B7D10023db6498',
                                  rawAsHex: '0x00000000000000000000000001b67874ecd062b43f773c5412b7d10023db6498'
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
                                  asBN: BigNumber("0xfffffffffffffffffffffffffffffffffffffffffffffffeea71b9f6ec2fffff"),
                                  rawAsBN: BigNumber("0xfffffffffffffffffffffffffffffffffffffffffffffffeea71b9f6ec2fffff")
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
                                  asBN: BigNumber("0x8ac7230489e80000"),
                                  rawAsBN: BigNumber("0x8ac7230489e80000")
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
                                value: {
                                  asBN: BigNumber("0xfffffffffffffffffffffffffffffffffffffffffffffffe5faa96f26247ffff"),
                                  rawAsBN: BigNumber("0xfffffffffffffffffffffffffffffffffffffffffffffffe5faa96f26247ffff")
                                }
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
                                  asAddress: '0x0000000000000000000000008AC7230489e80000',
                                  rawAsHex: '0x0000000000000000000000000000000000000000000000008ac7230489e80000'
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
                              asAddress: '0x01B67874ecd062b43f773c5412B7D10023db6498',
                              rawAsHex: '0x00000000000000000000000001b67874ecd062b43f773c5412b7d10023db6498'
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
                              asAddress: '0x0000000000000000000000008AC7230489e80000',
                              rawAsHex: '0x0000000000000000000000000000000000000000000000008ac7230489e80000'
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
                              asBN: BigNumber("0x1158e460913d00000"),
                              rawAsBN: BigNumber("0x1158e460913d00000")
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
                              asBN: BigNumber("0x8ac7230489e80000"),
                              rawAsBN: BigNumber("0x8ac7230489e80000")
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
                              asBN: BigNumber("0x1a055690d9db80000"),
                              rawAsBN: BigNumber("0x1a055690d9db80000")
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
                            value: {
                              asBN: BigNumber("0x1158e460913d00000"),
                              rawAsBN: BigNumber("0x1158e460913d00000")
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
                              asBN: BigNumber("0x8ac7230489e80000"),
                              rawAsBN: BigNumber("0x8ac7230489e80000")
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
                              asBN: BigNumber("0x1a055690d9db80000"),
                              rawAsBN: BigNumber("0x1a055690d9db80000")
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
                          asAddress: '0x9583518388389c8B324629bF16751B2e3B416287',
                          rawAsHex: '0x0000000000000000000000009583518388389c8b324629bf16751b2e3b416287'
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
                          asAddress: '0x0000000000000000000000008AC7230489e80000',
                          rawAsHex: '0x0000000000000000000000000000000000000000000000008ac7230489e80000'
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
      returnValues: [],
      returnKind: 'return'
    }
  ],
  origin: '0xf17f52151EbEF6C7334FAD080c5704D77216b732'
}

module.exports = txlog;
