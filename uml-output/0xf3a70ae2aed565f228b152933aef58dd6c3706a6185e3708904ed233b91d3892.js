const BigNumber = require("bignumber.js");

const txlog = 
{
  type: 'transaction',
  actions: [
    {
      type: 'callexternal',
      address: '0x1622c3352f54f66E2b86583958D30DB50695ec4c',
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
            value: { asBN: BigNumber("0x0"), rawAsBN: BigNumber("0x0") }
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
                  asHex: '0x93e8909af44acf5e2128ec9b84e3ba358ce1de36b5c9d6f9c61e14bb89a1d5f2',
                  rawAsHex: '0x93e8909af44acf5e2128ec9b84e3ba358ce1de36b5c9d6f9c61e14bb89a1d5f2'
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
                    value: { asBN: BigNumber("0x60a8a562"), rawAsBN: BigNumber("0x60a8a562") }
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
                    value: { asBN: BigNumber("0x60a8a562"), rawAsBN: BigNumber("0x60a8a562") }
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
                          asHex: '0x93e8909af44acf5e2128ec9b84e3ba358ce1de36b5c9d6f9c61e14bb89a1d5f2',
                          rawAsHex: '0x93e8909af44acf5e2128ec9b84e3ba358ce1de36b5c9d6f9c61e14bb89a1d5f2'
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
                      asHex: '0x2882c9f01add5f1c877ca051d110e9e58fbedc3164a1ae605f2fb231e9d9fb70',
                      rawAsHex: '0x2882c9f01add5f1c877ca051d110e9e58fbedc3164a1ae605f2fb231e9d9fb70'
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
                    value: { asBoolean: true }
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
                value: { asBN: BigNumber("0x0"), rawAsBN: BigNumber("0x0") }
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
                  asAddress: '0xC5fdf4076b8F3A5357c5E395ab970B5B54098Fef',
                  rawAsHex: '0x000000000000000000000000c5fdf4076b8f3a5357c5e395ab970b5b54098fef'
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
                      asHex: '0x93e8909af44acf5e2128ec9b84e3ba358ce1de36b5c9d6f9c61e14bb89a1d5f2',
                      rawAsHex: '0x93e8909af44acf5e2128ec9b84e3ba358ce1de36b5c9d6f9c61e14bb89a1d5f2'
                    }
                  }
                ]
              }
            }
          ],
          returnKind: 'return',
          returnValues: []
        },
        {
          type: 'callinternal',
          actions: [
            {
              type: 'callexternal',
              address: '0xe547Baa852602c90e641d0e9d6B0d279AFC09f92',
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
                      asAddress: '0xC5fdf4076b8F3A5357c5E395ab970B5B54098Fef',
                      rawAsHex: '0x000000000000000000000000c5fdf4076b8f3a5357c5e395ab970b5b54098fef'
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
                      asAddress: '0x1622c3352f54f66E2b86583958D30DB50695ec4c',
                      rawAsHex: '0x0000000000000000000000001622c3352f54f66e2b86583958d30db50695ec4c'
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
                          asBN: BigNumber("0x60a8a562"),
                          rawAsBN: BigNumber("0x60a8a562")
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
                          asBN: BigNumber("0x60a8a562"),
                          rawAsBN: BigNumber("0x60a8a562")
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
              actions: [
                {
                  type: 'callinternal',
                  actions: [
                    {
                      type: 'callinternal',
                      actions: [
                        {
                          type: 'callexternal',
                          address: '0xe547Baa852602c90e641d0e9d6B0d279AFC09f92',
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
                                  asAddress: '0xC5fdf4076b8F3A5357c5E395ab970B5B54098Fef',
                                  rawAsHex: '0x000000000000000000000000c5fdf4076b8f3a5357c5e395ab970b5b54098fef'
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
                                  asAddress: '0x1622c3352f54f66E2b86583958D30DB50695ec4c',
                                  rawAsHex: '0x0000000000000000000000001622c3352f54f66e2b86583958d30db50695ec4c'
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
                                              asBN: BigNumber("0x35ab028ac154b80000"),
                                              rawAsBN: BigNumber("0x35ab028ac154b80000")
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
                                              asBN: BigNumber("0x1158e460913d00000"),
                                              rawAsBN: BigNumber("0x1158e460913d00000")
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
                                              asAddress: '0x1622c3352f54f66E2b86583958D30DB50695ec4c',
                                              rawAsHex: '0x0000000000000000000000001622c3352f54f66e2b86583958d30db50695ec4c'
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
                                              asAddress: '0x1622c3352f54f66E2b86583958D30DB50695ec4c',
                                              rawAsHex: '0x0000000000000000000000001622c3352f54f66e2b86583958d30db50695ec4c'
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
                                          asAddress: '0x1622c3352f54f66E2b86583958D30DB50695ec4c',
                                          rawAsHex: '0x0000000000000000000000001622c3352f54f66e2b86583958d30db50695ec4c'
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
  origin: '0xC5fdf4076b8F3A5357c5E395ab970B5B54098Fef'
}

module.exports = txlog;
