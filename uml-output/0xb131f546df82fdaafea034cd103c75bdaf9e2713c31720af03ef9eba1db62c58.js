const BigNumber = require("bignumber.js");

const txlog = 
{
  type: 'transaction',
  actions: [
    {
      type: 'callexternal',
      address: '0xE6B0a577D28879305B2564D13c7c40bb24656A70',
      contextHash: '0x65b870ed1fe682fc9bf7d40f2807fadc0b7c7118f09cf87eb4405755ba8a65c1',
      value: BigNumber("0x0"),
      kind: 'constructor',
      isDelegate: undefined,
      functionName: undefined,
      contractName: 'GoodGhosting',
      arguments: [
        {
          name: '_inboundCurrency',
          value: {
            type: {
              typeClass: 'contract',
              kind: 'native',
              id: 'shimmedcompilationNumber(0):6086',
              typeName: 'IERC20',
              contractKind: 'interface',
              payable: false
            },
            kind: 'value',
            value: {
              kind: 'known',
              address: '0xe5fcB7960Adc9F0bCd88dAa3C699E01836Fcd24f',
              rawAddress: '0xe5fcb7960adc9f0bcd88daa3c699e01836fcd24f',
              class: {
                typeClass: 'contract',
                kind: 'native',
                id: 'shimmedcompilationNumber(0):4396',
                typeName: 'MockERC20Mintable',
                contractKind: 'contract',
                payable: false
              }
            }
          }
        },
        {
          name: '_lendingPoolAddressProvider',
          value: {
            type: {
              typeClass: 'contract',
              kind: 'native',
              id: 'shimmedcompilationNumber(0):4315',
              typeName: 'ILendingPoolAddressesProvider',
              contractKind: 'contract',
              payable: false
            },
            kind: 'value',
            value: {
              kind: 'known',
              address: '0x49acD0FD75f836477CfFCAb3B27b21c641E9AA54',
              rawAddress: '0x49acd0fd75f836477cffcab3b27b21c641e9aa54',
              class: {
                typeClass: 'contract',
                kind: 'native',
                id: 'shimmedcompilationNumber(0):4768',
                typeName: 'LendingPoolAddressesProviderMock',
                contractKind: 'contract',
                payable: false
              }
            }
          }
        },
        {
          name: '_segmentCount',
          value: {
            type: { typeClass: 'uint', bits: 256, typeHint: 'uint256' },
            kind: 'value',
            value: { asBN: BigNumber("0x6"), rawAsBN: BigNumber("0x6") }
          }
        },
        {
          name: '_segmentLength',
          value: {
            type: { typeClass: 'uint', bits: 256, typeHint: 'uint256' },
            kind: 'value',
            value: { asBN: BigNumber("0xb4"), rawAsBN: BigNumber("0xb4") }
          }
        },
        {
          name: '_segmentPayment',
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
          name: '_earlyWithdrawalFee',
          value: {
            type: { typeClass: 'uint', bits: 256, typeHint: 'uint256' },
            kind: 'value',
            value: { asBN: BigNumber("0x9"), rawAsBN: BigNumber("0x9") }
          }
        },
        {
          name: '_customFee',
          value: {
            type: { typeClass: 'uint', bits: 256, typeHint: 'uint256' },
            kind: 'value',
            value: { asBN: BigNumber("0x5"), rawAsBN: BigNumber("0x5") }
          }
        },
        {
          name: '_dataProvider',
          value: {
            type: { typeClass: 'address', kind: 'specific', payable: false },
            kind: 'value',
            value: {
              asAddress: '0x49acD0FD75f836477CfFCAb3B27b21c641E9AA54',
              rawAsHex: '0x00000000000000000000000049acd0fd75f836477cffcab3b27b21c641e9aa54'
            }
          }
        },
        {
          name: 'merkleRoot_',
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
                  asAddress: '0x627306090abaB3A6e1400e9345bC60c78a8BEf57',
                  rawAsHex: '0x000000000000000000000000627306090abab3a6e1400e9345bc60c78a8bef57'
                }
              }
            }
          ]
        },
        {
          type: 'callexternal',
          address: '0x49acD0FD75f836477CfFCAb3B27b21c641E9AA54',
          contextHash: '0xa5d0f0cd4fd043c8edbe931400377de1c6af9e83b4e560e63b545c6f03dfbfa0',
          value: BigNumber("0x0"),
          kind: 'function',
          isDelegate: false,
          functionName: 'getLendingPool',
          contractName: 'LendingPoolAddressesProviderMock',
          arguments: [],
          actions: [
            {
              type: 'callinternal',
              actions: [],
              functionName: 'getLendingPool',
              contractName: 'LendingPoolAddressesProviderMock',
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
                      asAddress: '0x49acD0FD75f836477CfFCAb3B27b21c641E9AA54',
                      rawAsHex: '0x00000000000000000000000049acd0fd75f836477cffcab3b27b21c641e9aa54'
                    }
                  }
                }
              ]
            }
          ],
          returnKind: 'return',
          returnValues: [
            {
              value: {
                type: {
                  typeClass: 'address',
                  kind: 'specific',
                  payable: false
                },
                kind: 'value',
                value: {
                  asAddress: '0x49acD0FD75f836477CfFCAb3B27b21c641E9AA54',
                  rawAsHex: '0x00000000000000000000000049acd0fd75f836477cffcab3b27b21c641e9aa54'
                }
              }
            }
          ]
        },
        {
          type: 'callexternal',
          address: '0x49acD0FD75f836477CfFCAb3B27b21c641E9AA54',
          contextHash: '0xa5d0f0cd4fd043c8edbe931400377de1c6af9e83b4e560e63b545c6f03dfbfa0',
          value: BigNumber("0x0"),
          kind: 'function',
          isDelegate: false,
          functionName: 'getReserveTokensAddresses',
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
                  asAddress: '0xe5fcB7960Adc9F0bCd88dAa3C699E01836Fcd24f',
                  rawAsHex: '0x000000000000000000000000e5fcb7960adc9f0bcd88daa3c699e01836fcd24f'
                }
              }
            }
          ],
          actions: [
            { type: 'callinternal', actions: [], returnKind: 'return' }
          ],
          returnKind: 'unwind',
          returnValues: [
            {
              value: {
                type: {
                  typeClass: 'address',
                  kind: 'specific',
                  payable: false
                },
                kind: 'value',
                value: {
                  asAddress: '0x49acD0FD75f836477CfFCAb3B27b21c641E9AA54',
                  rawAsHex: '0x00000000000000000000000049acd0fd75f836477cffcab3b27b21c641e9aa54'
                }
              }
            },
            {
              value: {
                type: {
                  typeClass: 'address',
                  kind: 'specific',
                  payable: false
                },
                kind: 'value',
                value: {
                  asAddress: '0x49acD0FD75f836477CfFCAb3B27b21c641E9AA54',
                  rawAsHex: '0x00000000000000000000000049acd0fd75f836477cffcab3b27b21c641e9aa54'
                }
              }
            },
            {
              value: {
                type: {
                  typeClass: 'address',
                  kind: 'specific',
                  payable: false
                },
                kind: 'value',
                value: {
                  asAddress: '0x49acD0FD75f836477CfFCAb3B27b21c641E9AA54',
                  rawAsHex: '0x00000000000000000000000049acd0fd75f836477cffcab3b27b21c641e9aa54'
                }
              }
            }
          ]
        },
        {
          type: 'callexternal',
          address: '0xe5fcB7960Adc9F0bCd88dAa3C699E01836Fcd24f',
          contextHash: '0x2181690f9fe98b4b237a4026f142ef947a191b1d924014d891cf7b40f89f544d',
          value: BigNumber("0x0"),
          kind: 'function',
          isDelegate: false,
          functionName: 'approve',
          contractName: 'MockERC20Mintable',
          arguments: [
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
                  asAddress: '0x49acD0FD75f836477CfFCAb3B27b21c641E9AA54',
                  rawAsHex: '0x00000000000000000000000049acd0fd75f836477cffcab3b27b21c641e9aa54'
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
            }
          ],
          actions: [
            {
              type: 'callinternal',
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
                          asAddress: '0xE6B0a577D28879305B2564D13c7c40bb24656A70',
                          rawAsHex: '0x000000000000000000000000e6b0a577d28879305b2564d13c7c40bb24656a70'
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
                          asAddress: '0xFFfFfFffFFfffFFfFFfFFFFFffFFFffffFfFFFfF',
                          rawAsHex: '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'
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
                        value: { asBN: BigNumber("0x3ba"), rawAsBN: BigNumber("0x3ba") }
                      }
                    }
                  ],
                  returnKind: 'return'
                }
              ],
              functionName: 'approve',
              contractName: 'ERC20',
              arguments: [
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
                      asAddress: '0x49acD0FD75f836477CfFCAb3B27b21c641E9AA54',
                      rawAsHex: '0x00000000000000000000000049acd0fd75f836477cffcab3b27b21c641e9aa54'
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
                      asBN: BigNumber("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"),
                      rawAsBN: BigNumber("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff")
                    }
                  }
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
      salt: null,
      returnKind: 'return',
      returnImmutables: [
        {
          name: 'daiToken',
          class: {
            typeClass: 'contract',
            kind: 'native',
            id: 'shimmedcompilationNumber(0):1079',
            typeName: 'GoodGhosting',
            contractKind: 'contract',
            payable: false
          },
          value: {
            type: {
              typeClass: 'contract',
              kind: 'native',
              id: 'shimmedcompilationNumber(0):6086',
              typeName: 'IERC20',
              contractKind: 'interface',
              payable: false
            },
            kind: 'value',
            value: {
              kind: 'known',
              address: '0xe5fcB7960Adc9F0bCd88dAa3C699E01836Fcd24f',
              rawAddress: '0xe5fcb7960adc9f0bcd88daa3c699e01836fcd24f',
              class: {
                typeClass: 'contract',
                kind: 'native',
                id: 'shimmedcompilationNumber(0):4396',
                typeName: 'MockERC20Mintable',
                contractKind: 'contract',
                payable: false
              }
            }
          }
        },
        {
          name: 'adaiToken',
          class: {
            typeClass: 'contract',
            kind: 'native',
            id: 'shimmedcompilationNumber(0):1079',
            typeName: 'GoodGhosting',
            contractKind: 'contract',
            payable: false
          },
          value: {
            type: {
              typeClass: 'contract',
              kind: 'native',
              id: 'shimmedcompilationNumber(0):4159',
              typeName: 'AToken',
              contractKind: 'interface',
              payable: false
            },
            kind: 'value',
            value: {
              kind: 'known',
              address: '0x49acD0FD75f836477CfFCAb3B27b21c641E9AA54',
              rawAddress: '0x49acd0fd75f836477cffcab3b27b21c641e9aa54',
              class: {
                typeClass: 'contract',
                kind: 'native',
                id: 'shimmedcompilationNumber(0):4768',
                typeName: 'LendingPoolAddressesProviderMock',
                contractKind: 'contract',
                payable: false
              }
            }
          }
        },
        {
          name: 'lendingPoolAddressProvider',
          class: {
            typeClass: 'contract',
            kind: 'native',
            id: 'shimmedcompilationNumber(0):1079',
            typeName: 'GoodGhosting',
            contractKind: 'contract',
            payable: false
          },
          value: {
            type: {
              typeClass: 'contract',
              kind: 'native',
              id: 'shimmedcompilationNumber(0):4315',
              typeName: 'ILendingPoolAddressesProvider',
              contractKind: 'contract',
              payable: false
            },
            kind: 'value',
            value: {
              kind: 'known',
              address: '0x49acD0FD75f836477CfFCAb3B27b21c641E9AA54',
              rawAddress: '0x49acd0fd75f836477cffcab3b27b21c641e9aa54',
              class: {
                typeClass: 'contract',
                kind: 'native',
                id: 'shimmedcompilationNumber(0):4768',
                typeName: 'LendingPoolAddressesProviderMock',
                contractKind: 'contract',
                payable: false
              }
            }
          }
        },
        {
          name: 'segmentPayment',
          class: {
            typeClass: 'contract',
            kind: 'native',
            id: 'shimmedcompilationNumber(0):1079',
            typeName: 'GoodGhosting',
            contractKind: 'contract',
            payable: false
          },
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
          name: 'lastSegment',
          class: {
            typeClass: 'contract',
            kind: 'native',
            id: 'shimmedcompilationNumber(0):1079',
            typeName: 'GoodGhosting',
            contractKind: 'contract',
            payable: false
          },
          value: {
            type: { typeClass: 'uint', bits: 256, typeHint: 'uint256' },
            kind: 'value',
            value: { asBN: BigNumber("0x6"), rawAsBN: BigNumber("0x6") }
          }
        },
        {
          name: 'firstSegmentStart',
          class: {
            typeClass: 'contract',
            kind: 'native',
            id: 'shimmedcompilationNumber(0):1079',
            typeName: 'GoodGhosting',
            contractKind: 'contract',
            payable: false
          },
          value: {
            type: { typeClass: 'uint', bits: 256, typeHint: 'uint256' },
            kind: 'value',
            value: { asBN: BigNumber("0x60a8cce8"), rawAsBN: BigNumber("0x60a8cce8") }
          }
        },
        {
          name: 'segmentLength',
          class: {
            typeClass: 'contract',
            kind: 'native',
            id: 'shimmedcompilationNumber(0):1079',
            typeName: 'GoodGhosting',
            contractKind: 'contract',
            payable: false
          },
          value: {
            type: { typeClass: 'uint', bits: 256, typeHint: 'uint256' },
            kind: 'value',
            value: { asBN: BigNumber("0xb4"), rawAsBN: BigNumber("0xb4") }
          }
        },
        {
          name: 'earlyWithdrawalFee',
          class: {
            typeClass: 'contract',
            kind: 'native',
            id: 'shimmedcompilationNumber(0):1079',
            typeName: 'GoodGhosting',
            contractKind: 'contract',
            payable: false
          },
          value: {
            type: { typeClass: 'uint', bits: 256, typeHint: 'uint256' },
            kind: 'value',
            value: { asBN: BigNumber("0x9"), rawAsBN: BigNumber("0x9") }
          }
        },
        {
          name: 'customFee',
          class: {
            typeClass: 'contract',
            kind: 'native',
            id: 'shimmedcompilationNumber(0):1079',
            typeName: 'GoodGhosting',
            contractKind: 'contract',
            payable: false
          },
          value: {
            type: { typeClass: 'uint', bits: 256, typeHint: 'uint256' },
            kind: 'value',
            value: { asBN: BigNumber("0x5"), rawAsBN: BigNumber("0x5") }
          }
        },
        {
          name: 'merkleRoot',
          class: {
            typeClass: 'contract',
            kind: 'native',
            id: 'shimmedcompilationNumber(0):2191',
            typeName: 'GoodGhostingWhitelisted',
            contractKind: 'contract',
            payable: false
          },
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
        }
      ]
    }
  ],
  origin: '0x627306090abaB3A6e1400e9345bC60c78a8BEf57'
}

module.exports = txlog;
