const BigNumber = require("bignumber.js");

const txlog = 
{
  type: 'transaction',
  actions: [
    {
      type: 'callexternal',
      address: '0x5F80759241b2A868DC5A5216901D05c3763DC5cC',
      contextHash: '0x4be60db92cada79b8066139b76b1cfb0319fbf46439ef2b7c575a4dd88480618',
      value: BigNumber("0x0"),
      kind: 'function',
      isDelegate: false,
      functionName: 'makeDeposit',
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
                    value: { asBN: BigNumber("0x60a8e160"), rawAsBN: BigNumber("0x60a8e160") }
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
                    value: { asBN: BigNumber("0x60a8e0ac"), rawAsBN: BigNumber("0x60a8e0ac") }
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
                value: { asBN: BigNumber("0x1"), rawAsBN: BigNumber("0x1") }
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
          actions: [
            {
              type: 'callexternal',
              address: '0x4BE080246b09f31f795a1ac22B0624F36fD2f11e',
              contextHash: '0x2181690f9fe98b4b237a4026f142ef947a191b1d924014d891cf7b40f89f544d',
              value: BigNumber("0x0"),
              kind: 'function',
              isDelegate: false,
              functionName: 'allowance',
              contractName: 'MockERC20Mintable',
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
                      asAddress: '0xf17f52151EbEF6C7334FAD080c5704D77216b732',
                      rawAsHex: '0x000000000000000000000000f17f52151ebef6c7334fad080c5704d77216b732'
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
                      asAddress: '0x5F80759241b2A868DC5A5216901D05c3763DC5cC',
                      rawAsHex: '0x0000000000000000000000005f80759241b2a868dc5a5216901d05c3763dc5cc'
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
                          asBN: BigNumber("0x60a8e160"),
                          rawAsBN: BigNumber("0x60a8e160")
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
                          asBN: BigNumber("0x60a8e0ac"),
                          rawAsBN: BigNumber("0x60a8e0ac")
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
            },
            {
              type: 'callinternal',
              actions: [
                {
                  type: 'callinternal',
                  actions: [
                    {
                      type: 'callinternal',
                      actions: [
                        {
                          type: 'callexternal',
                          address: '0x4BE080246b09f31f795a1ac22B0624F36fD2f11e',
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
                                  asAddress: '0xf17f52151EbEF6C7334FAD080c5704D77216b732',
                                  rawAsHex: '0x000000000000000000000000f17f52151ebef6c7334fad080c5704d77216b732'
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
                                  asAddress: '0x5F80759241b2A868DC5A5216901D05c3763DC5cC',
                                  rawAsHex: '0x0000000000000000000000005f80759241b2a868dc5a5216901d05c3763dc5cc'
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
                                              asBN: BigNumber("0x35203b67bccad00000"),
                                              rawAsBN: BigNumber("0x35203b67bccad00000")
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
                                              asAddress: '0x5F80759241b2A868DC5A5216901D05c3763DC5cC',
                                              rawAsHex: '0x0000000000000000000000005f80759241b2a868dc5a5216901d05c3763dc5cc'
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
                                              asAddress: '0x5F80759241b2A868DC5A5216901D05c3763DC5cC',
                                              rawAsHex: '0x0000000000000000000000005f80759241b2a868dc5a5216901d05c3763dc5cc'
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
                                            value: {
                                              asBN: BigNumber("0x44c"),
                                              rawAsBN: BigNumber("0x44c")
                                            }
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
                                          asAddress: '0x5F80759241b2A868DC5A5216901D05c3763DC5cC',
                                          rawAsHex: '0x0000000000000000000000005f80759241b2a868dc5a5216901d05c3763dc5cc'
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
                        }
                      ],
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
                              asBN: BigNumber("0x8ac7230489e80000"),
                              rawAsBN: BigNumber("0x8ac7230489e80000")
                            }
                          }
                        }
                      ],
                      returnKind: 'return'
                    }
                  ],
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
                          asBN: BigNumber("0x8ac7230489e80000"),
                          rawAsBN: BigNumber("0x8ac7230489e80000")
                        }
                      }
                    }
                  ],
                  returnKind: 'unwind'
                }
              ],
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
                      asBN: BigNumber("0x8ac7230489e80000"),
                      rawAsBN: BigNumber("0x8ac7230489e80000")
                    }
                  }
                }
              ],
              returnKind: 'unwind'
            }
          ],
          functionName: '_transferDaiToContract',
          contractName: 'GoodGhosting',
          arguments: [],
          returnKind: 'unwind'
        }
      ],
      returnKind: 'unwind',
      returnValues: []
    }
  ],
  origin: '0xf17f52151EbEF6C7334FAD080c5704D77216b732'
}

module.exports = txlog;
