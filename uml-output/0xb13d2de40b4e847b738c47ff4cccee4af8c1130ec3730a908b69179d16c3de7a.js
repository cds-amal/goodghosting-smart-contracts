const BigNumber = require("bignumber.js");

const txlog = 
{
  type: 'transaction',
  actions: [
    {
      type: 'callexternal',
      address: '0x25CbaB0C13650026C7BcBCcE7EF963c303B68Cd6',
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
              address: '0xdD56E578c079532A04D879391596ac95751D7FBC',
              rawAddress: '0xdd56e578c079532a04d879391596ac95751d7fbc',
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
              address: '0x7001EA1Ca8C28AA90A0D2e8B034aa56319fF0a7E',
              rawAddress: '0x7001ea1ca8c28aa90a0d2e8b034aa56319ff0a7e',
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
              asAddress: '0x7001EA1Ca8C28AA90A0D2e8B034aa56319fF0a7E',
              rawAsHex: '0x0000000000000000000000007001ea1ca8c28aa90a0d2e8b034aa56319ff0a7e'
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
          address: '0x7001EA1Ca8C28AA90A0D2e8B034aa56319fF0a7E',
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
                      asAddress: '0x7001EA1Ca8C28AA90A0D2e8B034aa56319fF0a7E',
                      rawAsHex: '0x0000000000000000000000007001ea1ca8c28aa90a0d2e8b034aa56319ff0a7e'
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
                  asAddress: '0x7001EA1Ca8C28AA90A0D2e8B034aa56319fF0a7E',
                  rawAsHex: '0x0000000000000000000000007001ea1ca8c28aa90a0d2e8b034aa56319ff0a7e'
                }
              }
            }
          ]
        },
        {
          type: 'callexternal',
          address: '0x7001EA1Ca8C28AA90A0D2e8B034aa56319fF0a7E',
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
                  asAddress: '0xdD56E578c079532A04D879391596ac95751D7FBC',
                  rawAsHex: '0x000000000000000000000000dd56e578c079532a04d879391596ac95751d7fbc'
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
                  asAddress: '0x7001EA1Ca8C28AA90A0D2e8B034aa56319fF0a7E',
                  rawAsHex: '0x0000000000000000000000007001ea1ca8c28aa90a0d2e8b034aa56319ff0a7e'
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
                  asAddress: '0x7001EA1Ca8C28AA90A0D2e8B034aa56319fF0a7E',
                  rawAsHex: '0x0000000000000000000000007001ea1ca8c28aa90a0d2e8b034aa56319ff0a7e'
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
                  asAddress: '0x7001EA1Ca8C28AA90A0D2e8B034aa56319fF0a7E',
                  rawAsHex: '0x0000000000000000000000007001ea1ca8c28aa90a0d2e8b034aa56319ff0a7e'
                }
              }
            }
          ]
        },
        {
          type: 'callexternal',
          address: '0xdD56E578c079532A04D879391596ac95751D7FBC',
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
                  asAddress: '0x7001EA1Ca8C28AA90A0D2e8B034aa56319fF0a7E',
                  rawAsHex: '0x0000000000000000000000007001ea1ca8c28aa90a0d2e8b034aa56319ff0a7e'
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
                          asAddress: '0x25CbaB0C13650026C7BcBCcE7EF963c303B68Cd6',
                          rawAsHex: '0x00000000000000000000000025cbab0c13650026c7bcbcce7ef963c303b68cd6'
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
                      asAddress: '0x7001EA1Ca8C28AA90A0D2e8B034aa56319fF0a7E',
                      rawAsHex: '0x0000000000000000000000007001ea1ca8c28aa90a0d2e8b034aa56319ff0a7e'
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
              address: '0xdD56E578c079532A04D879391596ac95751D7FBC',
              rawAddress: '0xdd56e578c079532a04d879391596ac95751d7fbc',
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
              address: '0x7001EA1Ca8C28AA90A0D2e8B034aa56319fF0a7E',
              rawAddress: '0x7001ea1ca8c28aa90a0d2e8b034aa56319ff0a7e',
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
              address: '0x7001EA1Ca8C28AA90A0D2e8B034aa56319fF0a7E',
              rawAddress: '0x7001ea1ca8c28aa90a0d2e8b034aa56319ff0a7e',
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
            value: { asBN: BigNumber("0x60a882a7"), rawAsBN: BigNumber("0x60a882a7") }
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
