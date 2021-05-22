const BigNumber = require("bignumber.js");

const txlog = 
{
  type: 'transaction',
  actions: [
    {
      type: 'callexternal',
      address: '0xeB6e71BfB760bD0bbDd3C0a6466FBC6bb9608E8e',
      contextHash: '0x4be60db92cada79b8066139b76b1cfb0319fbf46439ef2b7c575a4dd88480618',
      value: BigNumber("0x0"),
      kind: 'function',
      isDelegate: false,
      functionName: 'earlyWithdraw',
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
                          asBN: BigNumber("0x60a89b75"),
                          rawAsBN: BigNumber("0x60a89b75")
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
                          asBN: BigNumber("0x60a89ac1"),
                          rawAsBN: BigNumber("0x60a89ac1")
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
                        value: { asBN: BigNumber("0xb4"), rawAsBN: BigNumber("0xb4") }
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
                        value: { asBN: BigNumber("0xb4"), rawAsBN: BigNumber("0xb4") }
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
                        value: { asBN: BigNumber("0x1"), rawAsBN: BigNumber("0x1") }
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
                    value: { asBN: BigNumber("0x1"), rawAsBN: BigNumber("0x1") }
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
          actions: [],
          functionName: 'mul',
          contractName: 'SafeMath',
          arguments: [
            {
              name: 'a',
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
              name: 'b',
              value: {
                type: { typeClass: 'uint', bits: 256, typeHint: 'uint256' },
                kind: 'value',
                value: { asBN: BigNumber("0x9"), rawAsBN: BigNumber("0x9") }
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
                value: {
                  asBN: BigNumber("0x4e1003b28d9280000"),
                  rawAsBN: BigNumber("0x4e1003b28d9280000")
                }
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
                value: {
                  asBN: BigNumber("0x4e1003b28d9280000"),
                  rawAsBN: BigNumber("0x4e1003b28d9280000")
                }
              }
            },
            {
              name: 'b',
              value: {
                type: { typeClass: 'uint', bits: 256, typeHint: 'uint256' },
                kind: 'value',
                value: { asBN: BigNumber("0x64"), rawAsBN: BigNumber("0x64") }
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
                value: {
                  asBN: BigNumber("0xc7d713b49da0000"),
                  rawAsBN: BigNumber("0xc7d713b49da0000")
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
                value: {
                  asBN: BigNumber("0x8ac7230489e80000"),
                  rawAsBN: BigNumber("0x8ac7230489e80000")
                }
              }
            },
            {
              name: 'b',
              value: {
                type: { typeClass: 'uint', bits: 256, typeHint: 'uint256' },
                kind: 'value',
                value: {
                  asBN: BigNumber("0xc7d713b49da0000"),
                  rawAsBN: BigNumber("0xc7d713b49da0000")
                }
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
                value: {
                  asBN: BigNumber("0x7e49b1c9400e0000"),
                  rawAsBN: BigNumber("0x7e49b1c9400e0000")
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
                value: {
                  asBN: BigNumber("0x8ac7230489e80000"),
                  rawAsBN: BigNumber("0x8ac7230489e80000")
                }
              }
            },
            {
              name: 'b',
              value: {
                type: { typeClass: 'uint', bits: 256, typeHint: 'uint256' },
                kind: 'value',
                value: {
                  asBN: BigNumber("0x7e49b1c9400e0000"),
                  rawAsBN: BigNumber("0x7e49b1c9400e0000")
                }
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
                value: {
                  asBN: BigNumber("0xc7d713b49da0000"),
                  rawAsBN: BigNumber("0xc7d713b49da0000")
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
                    value: { asBN: BigNumber("0x60a89b75"), rawAsBN: BigNumber("0x60a89b75") }
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
                    value: { asBN: BigNumber("0x60a89ac1"), rawAsBN: BigNumber("0x60a89ac1") }
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
                    value: { asBN: BigNumber("0xb4"), rawAsBN: BigNumber("0xb4") }
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
                    value: { asBN: BigNumber("0xb4"), rawAsBN: BigNumber("0xb4") }
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
                    value: { asBN: BigNumber("0x1"), rawAsBN: BigNumber("0x1") }
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
                value: { asBN: BigNumber("0x1"), rawAsBN: BigNumber("0x1") }
              }
            }
          ]
        },
        {
          type: 'callexternal',
          address: '0x082CDe5eD91bDfc7A1d70042f5a180B1A8d1eA35',
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
                  asAddress: '0xeB6e71BfB760bD0bbDd3C0a6466FBC6bb9608E8e',
                  rawAsHex: '0x000000000000000000000000eb6e71bfb760bd0bbdd3c0a6466fbc6bb9608e8e'
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
                value: { asBN: BigNumber("0x0"), rawAsBN: BigNumber("0x0") }
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
                value: {
                  asBN: BigNumber("0x7e49b1c9400e0000"),
                  rawAsBN: BigNumber("0x7e49b1c9400e0000")
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
          returnKind: 'return',
          returnValues: [
            {
              name: undefined,
              value: {
                type: { typeClass: 'uint', bits: 256, typeHint: 'uint256' },
                kind: 'value',
                value: {
                  asBN: BigNumber("0x7e49b1c9400e0000"),
                  rawAsBN: BigNumber("0x7e49b1c9400e0000")
                }
              }
            }
          ]
        },
        {
          type: 'callexternal',
          address: '0x14a81eFf3d379311665f8Dad841671BC7bf00849',
          contextHash: '0xa5d0f0cd4fd043c8edbe931400377de1c6af9e83b4e560e63b545c6f03dfbfa0',
          value: BigNumber("0x0"),
          kind: 'function',
          isDelegate: false,
          functionName: 'withdraw',
          contractName: 'LendingPoolAddressesProviderMock',
          arguments: [
            {
              name: 'asset',
              value: {
                type: {
                  typeClass: 'address',
                  kind: 'specific',
                  payable: false
                },
                kind: 'value',
                value: {
                  asAddress: '0x082CDe5eD91bDfc7A1d70042f5a180B1A8d1eA35',
                  rawAsHex: '0x000000000000000000000000082cde5ed91bdfc7a1d70042f5a180b1a8d1ea35'
                }
              }
            },
            {
              name: 'amount',
              value: {
                type: { typeClass: 'uint', bits: 256, typeHint: 'uint256' },
                kind: 'value',
                value: {
                  asBN: BigNumber("0x7e49b1c9400e0000"),
                  rawAsBN: BigNumber("0x7e49b1c9400e0000")
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
                  asAddress: '0xeB6e71BfB760bD0bbDd3C0a6466FBC6bb9608E8e',
                  rawAsHex: '0x000000000000000000000000eb6e71bfb760bd0bbdd3c0a6466fbc6bb9608e8e'
                }
              }
            }
          ],
          actions: [
            {
              type: 'callexternal',
              address: '0x14a81eFf3d379311665f8Dad841671BC7bf00849',
              contextHash: '0xa5d0f0cd4fd043c8edbe931400377de1c6af9e83b4e560e63b545c6f03dfbfa0',
              value: BigNumber("0x0"),
              kind: 'function',
              isDelegate: false,
              functionName: 'balanceOf',
              contractName: 'LendingPoolAddressesProviderMock',
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
                      asAddress: '0xeB6e71BfB760bD0bbDd3C0a6466FBC6bb9608E8e',
                      rawAsHex: '0x000000000000000000000000eb6e71bfb760bd0bbdd3c0a6466fbc6bb9608e8e'
                    }
                  }
                }
              ],
              actions: [],
              returnKind: 'return',
              returnValues: [
                {
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
                              asString: 'ERC20: burn amount exceeds balance'
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
                      type: 'callexternal',
                      address: '0x082CDe5eD91bDfc7A1d70042f5a180B1A8d1eA35',
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
                              asAddress: '0xeB6e71BfB760bD0bbDd3C0a6466FBC6bb9608E8e',
                              rawAsHex: '0x000000000000000000000000eb6e71bfb760bd0bbdd3c0a6466fbc6bb9608e8e'
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
                                  asAddress: '0x14a81eFf3d379311665f8Dad841671BC7bf00849',
                                  rawAsHex: '0x00000000000000000000000014a81eff3d379311665f8dad841671bc7bf00849'
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
                                        value: {
                                          asBN: BigNumber("0x0"),
                                          rawAsBN: BigNumber("0x0")
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
                                          asBN: BigNumber("0x0"),
                                          rawAsBN: BigNumber("0x0")
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
                                          asBN: BigNumber("0x8ac7230489e80000"),
                                          rawAsBN: BigNumber("0x8ac7230489e80000")
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
                                      asAddress: '0xeB6e71BfB760bD0bbDd3C0a6466FBC6bb9608E8e',
                                      rawAsHex: '0x000000000000000000000000eb6e71bfb760bd0bbdd3c0a6466fbc6bb9608e8e'
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
                                    value: {
                                      asBN: BigNumber("0x76d"),
                                      rawAsBN: BigNumber("0x76d")
                                    }
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
                          asAddress: '0xeB6e71BfB760bD0bbDd3C0a6466FBC6bb9608E8e',
                          rawAsHex: '0x000000000000000000000000eb6e71bfb760bd0bbdd3c0a6466fbc6bb9608e8e'
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
                        value: { asBN: BigNumber("0xf90"), rawAsBN: BigNumber("0xf90") }
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
        },
        {
          type: 'callexternal',
          address: '0x082CDe5eD91bDfc7A1d70042f5a180B1A8d1eA35',
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
                type: { typeClass: 'uint', bits: 256, typeHint: 'uint256' },
                kind: 'value',
                value: {
                  asBN: BigNumber("0x7e49b1c9400e0000"),
                  rawAsBN: BigNumber("0x7e49b1c9400e0000")
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
                      asAddress: '0xeB6e71BfB760bD0bbDd3C0a6466FBC6bb9608E8e',
                      rawAsHex: '0x000000000000000000000000eb6e71bfb760bd0bbdd3c0a6466fbc6bb9608e8e'
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
                              asBN: BigNumber("0x7e49b1c9400e0000"),
                              rawAsBN: BigNumber("0x7e49b1c9400e0000")
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
                              asBN: BigNumber("0xc7d713b49da0000"),
                              rawAsBN: BigNumber("0xc7d713b49da0000")
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
                              asBN: BigNumber("0x35ab028ac154b80000"),
                              rawAsBN: BigNumber("0x35ab028ac154b80000")
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
                              asBN: BigNumber("0x7e49b1c9400e0000"),
                              rawAsBN: BigNumber("0x7e49b1c9400e0000")
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
                              asBN: BigNumber("0x36294c3c8a94c60000"),
                              rawAsBN: BigNumber("0x36294c3c8a94c60000")
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
                          asAddress: '0x0000000000000000000000007e49b1C9400E0000',
                          rawAsHex: '0x0000000000000000000000000000000000000000000000007e49b1c9400e0000'
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
      returnValues: [],
      returnKind: 'return'
    }
  ],
  origin: '0xf17f52151EbEF6C7334FAD080c5704D77216b732'
}

module.exports = txlog;
