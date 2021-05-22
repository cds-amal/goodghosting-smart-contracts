const BigNumber = require("bignumber.js");

const txlog = 
{
  type: 'transaction',
  actions: [
    {
      type: 'callexternal',
      address: '0xaA780861DA3d81D3eCef0d2CcfB8ba58466a5dE9',
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
            type: { typeClass: 'address', kind: 'specific', payable: false },
            kind: 'value',
            value: {
              asAddress: '0x55F96411Ff9e424e172aB2Aa79fa5f19B09632Ce',
              rawAsHex: '0x00000000000000000000000055f96411ff9e424e172ab2aa79fa5f19b09632ce'
            }
          }
        },
        {
          name: 'amount',
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
                  asAddress: '0xC5fdf4076b8F3A5357c5E395ab970B5B54098Fef',
                  rawAsHex: '0x000000000000000000000000c5fdf4076b8f3a5357c5e395ab970b5b54098fef'
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
                type: { typeClass: 'uint', bits: 256, typeHint: 'uint256' },
                kind: 'value',
                value: { asBN: BigNumber("0x3ba"), rawAsBN: BigNumber("0x3ba") }
              }
            }
          ],
          returnKind: 'return'
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
  origin: '0xC5fdf4076b8F3A5357c5E395ab970B5B54098Fef'
}

module.exports = txlog;
