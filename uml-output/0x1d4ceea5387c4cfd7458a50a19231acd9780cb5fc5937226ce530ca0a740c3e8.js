const BigNumber = require("bignumber.js");

const txlog = 
{
  type: 'transaction',
  actions: [
    {
      type: 'callexternal',
      address: '0x3d7E44D9C1EDF03a368605bd83769851219e65ff',
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
                          asBN: BigNumber("0x60a8a11a"),
                          rawAsBN: BigNumber("0x60a8a11a")
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
                          asBN: BigNumber("0x60a89d95"),
                          rawAsBN: BigNumber("0x60a89d95")
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
                        value: { asBN: BigNumber("0x385"), rawAsBN: BigNumber("0x385") }
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
                        value: { asBN: BigNumber("0x385"), rawAsBN: BigNumber("0x385") }
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
                        value: { asBN: BigNumber("0x5"), rawAsBN: BigNumber("0x5") }
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
                    value: { asBN: BigNumber("0x5"), rawAsBN: BigNumber("0x5") }
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
                  asBN: BigNumber("0x2b5e3af16b1880000"),
                  rawAsBN: BigNumber("0x2b5e3af16b1880000")
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
                  asBN: BigNumber("0x18650127cc3dc80000"),
                  rawAsBN: BigNumber("0x18650127cc3dc80000")
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
                  asBN: BigNumber("0x18650127cc3dc80000"),
                  rawAsBN: BigNumber("0x18650127cc3dc80000")
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
                  asBN: BigNumber("0x3e73362871420000"),
                  rawAsBN: BigNumber("0x3e73362871420000")
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
                  asBN: BigNumber("0x2b5e3af16b1880000"),
                  rawAsBN: BigNumber("0x2b5e3af16b1880000")
                }
              }
            },
            {
              name: 'b',
              value: {
                type: { typeClass: 'uint', bits: 256, typeHint: 'uint256' },
                kind: 'value',
                value: {
                  asBN: BigNumber("0x3e73362871420000"),
                  rawAsBN: BigNumber("0x3e73362871420000")
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
                  asBN: BigNumber("0x2777078ee40460000"),
                  rawAsBN: BigNumber("0x2777078ee40460000")
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
                  asBN: BigNumber("0x2b5e3af16b1880000"),
                  rawAsBN: BigNumber("0x2b5e3af16b1880000")
                }
              }
            },
            {
              name: 'b',
              value: {
                type: { typeClass: 'uint', bits: 256, typeHint: 'uint256' },
                kind: 'value',
                value: {
                  asBN: BigNumber("0x2777078ee40460000"),
                  rawAsBN: BigNumber("0x2777078ee40460000")
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
                  asBN: BigNumber("0x3e73362871420000"),
                  rawAsBN: BigNumber("0x3e73362871420000")
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
                    value: { asBN: BigNumber("0x60a8a11a"), rawAsBN: BigNumber("0x60a8a11a") }
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
                    value: { asBN: BigNumber("0x60a89d95"), rawAsBN: BigNumber("0x60a89d95") }
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
                    value: { asBN: BigNumber("0x385"), rawAsBN: BigNumber("0x385") }
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
                    value: { asBN: BigNumber("0x385"), rawAsBN: BigNumber("0x385") }
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
                    value: { asBN: BigNumber("0x5"), rawAsBN: BigNumber("0x5") }
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
                value: { asBN: BigNumber("0x5"), rawAsBN: BigNumber("0x5") }
              }
            }
          ]
        },
        {
          type: 'callexternal',
          address: '0x8803cCB711bb7a5D165dC9b1AacC146e08f30e9a',
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
                  asAddress: '0x3d7E44D9C1EDF03a368605bd83769851219e65ff',
                  rawAsHex: '0x0000000000000000000000003d7e44d9c1edf03a368605bd83769851219e65ff'
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
                value: {
                  asBN: BigNumber("0x2777078ee40460000"),
                  rawAsBN: BigNumber("0x2777078ee40460000")
                }
              }
            },
            {
              name: 'b',
              value: {
                type: { typeClass: 'uint', bits: 256, typeHint: 'uint256' },
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
                type: { typeClass: 'uint', bits: 256, typeHint: 'uint256' },
                kind: 'value',
                value: {
                  asBN: BigNumber("0x1eca955e9b65e0000"),
                  rawAsBN: BigNumber("0x1eca955e9b65e0000")
                }
              }
            }
          ]
        },
        {
          type: 'callexternal',
          address: '0xD555066DdD647678c2178A4f0b1Ba1B885ad0101',
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
                  asAddress: '0x8803cCB711bb7a5D165dC9b1AacC146e08f30e9a',
                  rawAsHex: '0x0000000000000000000000008803ccb711bb7a5d165dc9b1aacc146e08f30e9a'
                }
              }
            },
            {
              name: 'amount',
              value: {
                type: { typeClass: 'uint', bits: 256, typeHint: 'uint256' },
                kind: 'value',
                value: {
                  asBN: BigNumber("0x1eca955e9b65e0000"),
                  rawAsBN: BigNumber("0x1eca955e9b65e0000")
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
                  asAddress: '0x3d7E44D9C1EDF03a368605bd83769851219e65ff',
                  rawAsHex: '0x0000000000000000000000003d7e44d9c1edf03a368605bd83769851219e65ff'
                }
              }
            }
          ],
          actions: [
            {
              type: 'callexternal',
              address: '0xD555066DdD647678c2178A4f0b1Ba1B885ad0101',
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
                      asAddress: '0x3d7E44D9C1EDF03a368605bd83769851219e65ff',
                      rawAsHex: '0x0000000000000000000000003d7e44d9c1edf03a368605bd83769851219e65ff'
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
                      asBN: BigNumber("0x22b1c8c1227a00000"),
                      rawAsBN: BigNumber("0x22b1c8c1227a00000")
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
                              asBN: BigNumber("0x22b1c8c1227a00000"),
                              rawAsBN: BigNumber("0x22b1c8c1227a00000")
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
                              asBN: BigNumber("0x22b1c8c1227a00000"),
                              rawAsBN: BigNumber("0x22b1c8c1227a00000")
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
                              asBN: BigNumber("0x22b1c8c1227a00000"),
                              rawAsBN: BigNumber("0x22b1c8c1227a00000")
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
                              asBN: BigNumber("0x22b1c8c1227a00000"),
                              rawAsBN: BigNumber("0x22b1c8c1227a00000")
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
                      address: '0x8803cCB711bb7a5D165dC9b1AacC146e08f30e9a',
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
                              asAddress: '0x3d7E44D9C1EDF03a368605bd83769851219e65ff',
                              rawAsHex: '0x0000000000000000000000003d7e44d9c1edf03a368605bd83769851219e65ff'
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
                              asBN: BigNumber("0x22b1c8c1227a00000"),
                              rawAsBN: BigNumber("0x22b1c8c1227a00000")
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
                                  asAddress: '0xD555066DdD647678c2178A4f0b1Ba1B885ad0101',
                                  rawAsHex: '0x000000000000000000000000d555066ddd647678c2178a4f0b1ba1b885ad0101'
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
                                          asBN: BigNumber("0x22b1c8c1227a00000"),
                                          rawAsBN: BigNumber("0x22b1c8c1227a00000")
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
                                          asBN: BigNumber("0x22b1c8c1227a00000"),
                                          rawAsBN: BigNumber("0x22b1c8c1227a00000")
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
                                          asBN: BigNumber("0x22b1c8c1227a00000"),
                                          rawAsBN: BigNumber("0x22b1c8c1227a00000")
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
                                      asAddress: '0x3d7E44D9C1EDF03a368605bd83769851219e65ff',
                                      rawAsHex: '0x0000000000000000000000003d7e44d9c1edf03a368605bd83769851219e65ff'
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
                                      asAddress: '0x0000000000000000000000022b1c8C1227a00000',
                                      rawAsHex: '0x0000000000000000000000000000000000000000000000022b1c8c1227a00000'
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
                          asAddress: '0x3d7E44D9C1EDF03a368605bd83769851219e65ff',
                          rawAsHex: '0x0000000000000000000000003d7e44d9c1edf03a368605bd83769851219e65ff'
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
                          asAddress: '0x0000000000000000000000022b1c8C1227a00000',
                          rawAsHex: '0x0000000000000000000000000000000000000000000000022b1c8c1227a00000'
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
          address: '0x8803cCB711bb7a5D165dC9b1AacC146e08f30e9a',
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
                  asBN: BigNumber("0x2777078ee40460000"),
                  rawAsBN: BigNumber("0x2777078ee40460000")
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
                      asAddress: '0x3d7E44D9C1EDF03a368605bd83769851219e65ff',
                      rawAsHex: '0x0000000000000000000000003d7e44d9c1edf03a368605bd83769851219e65ff'
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
                              asBN: BigNumber("0x2b5e3af16b1880000"),
                              rawAsBN: BigNumber("0x2b5e3af16b1880000")
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
                              asBN: BigNumber("0x2777078ee40460000"),
                              rawAsBN: BigNumber("0x2777078ee40460000")
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
                              asBN: BigNumber("0x3e73362871420000"),
                              rawAsBN: BigNumber("0x3e73362871420000")
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
                              asBN: BigNumber("0x337fe5feaf2d180000"),
                              rawAsBN: BigNumber("0x337fe5feaf2d180000")
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
                              asBN: BigNumber("0x2777078ee40460000"),
                              rawAsBN: BigNumber("0x2777078ee40460000")
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
                              asBN: BigNumber("0x35f756779d6d5e0000"),
                              rawAsBN: BigNumber("0x35f756779d6d5e0000")
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
                          asAddress: '0x000000000000000000000002777078EE40460000',
                          rawAsHex: '0x000000000000000000000000000000000000000000000002777078ee40460000'
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
