const BigNumber = require("bignumber.js");

const txlog = 
{
  type: 'transaction',
  actions: [
    {
      type: 'callexternal',
      address: '0xDAfa7C2690a61Ef657584702A48BFfb002FcD641',
      contextHash: '0x4be60db92cada79b8066139b76b1cfb0319fbf46439ef2b7c575a4dd88480618',
      value: BigNumber("0x0"),
      kind: 'function',
      isDelegate: false,
      functionName: 'redeemFromExternalPool',
      contractName: 'GoodGhosting',
      arguments: [],
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
                          asBN: BigNumber("0x60a8ef7b"),
                          rawAsBN: BigNumber("0x60a8ef7b")
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
                          asBN: BigNumber("0x60a8ea8e"),
                          rawAsBN: BigNumber("0x60a8ea8e")
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
                        value: { asBN: BigNumber("0x4ed"), rawAsBN: BigNumber("0x4ed") }
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
                        value: { asBN: BigNumber("0x4ed"), rawAsBN: BigNumber("0x4ed") }
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
          type: 'callexternal',
          address: '0x0287d1B786c26653d1C70dCE72bFd3Fe636a9cfb',
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
                  asAddress: '0xDAfa7C2690a61Ef657584702A48BFfb002FcD641',
                  rawAsHex: '0x000000000000000000000000dafa7c2690a61ef657584702a48bffb002fcd641'
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
                  asBN: BigNumber("0x340aad21b3b700000"),
                  rawAsBN: BigNumber("0x340aad21b3b700000")
                }
              }
            }
          ]
        },
        {
          type: 'callexternal',
          address: '0x0287d1B786c26653d1C70dCE72bFd3Fe636a9cfb',
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
                  asAddress: '0x95eC298f1D21ae5E2ffEcf3bf91674B7179d4353',
                  rawAsHex: '0x00000000000000000000000095ec298f1d21ae5e2ffecf3bf91674b7179d4353'
                }
              }
            },
            {
              name: 'amount',
              value: {
                type: { typeClass: 'uint', bits: 256, typeHint: 'uint256' },
                kind: 'value',
                value: {
                  asBN: BigNumber("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"),
                  rawAsBN: BigNumber("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff")
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
                  asAddress: '0xDAfa7C2690a61Ef657584702A48BFfb002FcD641',
                  rawAsHex: '0x000000000000000000000000dafa7c2690a61ef657584702a48bffb002fcd641'
                }
              }
            }
          ],
          actions: [
            {
              type: 'callexternal',
              address: '0x0287d1B786c26653d1C70dCE72bFd3Fe636a9cfb',
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
                      asAddress: '0xDAfa7C2690a61Ef657584702A48BFfb002FcD641',
                      rawAsHex: '0x000000000000000000000000dafa7c2690a61ef657584702a48bffb002fcd641'
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
                      asBN: BigNumber("0x340aad21b3b700000"),
                      rawAsBN: BigNumber("0x340aad21b3b700000")
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
                      address: '0x95eC298f1D21ae5E2ffEcf3bf91674B7179d4353',
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
                              asAddress: '0xDAfa7C2690a61Ef657584702A48BFfb002FcD641',
                              rawAsHex: '0x000000000000000000000000dafa7c2690a61ef657584702a48bffb002fcd641'
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
                                  asAddress: '0x0287d1B786c26653d1C70dCE72bFd3Fe636a9cfb',
                                  rawAsHex: '0x0000000000000000000000000287d1b786c26653d1c70dce72bfd3fe636a9cfb'
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
                                          asBN: BigNumber("0x340aad21b3b700000"),
                                          rawAsBN: BigNumber("0x340aad21b3b700000")
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
                                      asAddress: '0xDAfa7C2690a61Ef657584702A48BFfb002FcD641',
                                      rawAsHex: '0x000000000000000000000000dafa7c2690a61ef657584702a48bffb002fcd641'
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
                          asAddress: '0xDAfa7C2690a61Ef657584702A48BFfb002FcD641',
                          rawAsHex: '0x000000000000000000000000dafa7c2690a61ef657584702a48bffb002fcd641'
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
          address: '0x95eC298f1D21ae5E2ffEcf3bf91674B7179d4353',
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
                  asAddress: '0xDAfa7C2690a61Ef657584702A48BFfb002FcD641',
                  rawAsHex: '0x000000000000000000000000dafa7c2690a61ef657584702a48bffb002fcd641'
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
                  asBN: BigNumber("0x340aad21b3b700000"),
                  rawAsBN: BigNumber("0x340aad21b3b700000")
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
          functionName: 'mul',
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
                value: { asBN: BigNumber("0x5"), rawAsBN: BigNumber("0x5") }
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
                value: { asBN: BigNumber("0x0"), rawAsBN: BigNumber("0x0") }
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
                value: { asBN: BigNumber("0x0"), rawAsBN: BigNumber("0x0") }
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
