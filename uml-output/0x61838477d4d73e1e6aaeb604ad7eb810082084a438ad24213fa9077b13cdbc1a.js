const BigNumber = require("bignumber.js");

const txlog = 
{
  type: 'transaction',
  actions: [
    {
      type: 'callexternal',
      address: '0xdD56E578c079532A04D879391596ac95751D7FBC',
      contextHash: '0x2181690f9fe98b4b237a4026f142ef947a191b1d924014d891cf7b40f89f544d',
      value: BigNumber("0x0"),
      kind: 'function',
      isDelegate: false,
      functionName: 'mint',
      contractName: 'MockERC20Mintable',
      arguments: [
        {
          name: 'account',
          value: {
            type: { typeClass: 'address', kind: 'specific', payable: false },
            kind: 'value',
            value: {
              asAddress: '0xC5fdf4076b8F3A5357c5E395ab970B5B54098Fef',
              rawAsHex: '0x000000000000000000000000c5fdf4076b8f3a5357c5e395ab970b5b54098fef'
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
                          asBN: BigNumber("0x6c6b935b8bbd400000"),
                          rawAsBN: BigNumber("0x6c6b935b8bbd400000")
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
                      asAddress: '0xC5fdf4076b8F3A5357c5E395ab970B5B54098Fef',
                      rawAsHex: '0x000000000000000000000000c5fdf4076b8f3a5357c5e395ab970b5b54098fef'
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
                    value: { asBN: BigNumber("0x99e"), rawAsBN: BigNumber("0x99e") }
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
  origin: '0x627306090abaB3A6e1400e9345bC60c78a8BEf57'
}

module.exports = txlog;
