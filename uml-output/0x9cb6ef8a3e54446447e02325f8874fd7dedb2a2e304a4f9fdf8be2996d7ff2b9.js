const BigNumber = require("bignumber.js");

const txlog = 
{
  type: 'transaction',
  actions: [
    {
      type: 'callexternal',
      address: '0x20df41308f8F48fC38f22beb42306f2C98D0d00c',
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
              asAddress: '0xE0bF6021e023a197DBb3fABE64efA880E13D3f4b',
              rawAsHex: '0x000000000000000000000000e0bf6021e023a197dbb3fabe64efa880e13d3f4b'
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
                  asAddress: '0xf17f52151EbEF6C7334FAD080c5704D77216b732',
                  rawAsHex: '0x000000000000000000000000f17f52151ebef6c7334fad080c5704d77216b732'
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
  origin: '0xf17f52151EbEF6C7334FAD080c5704D77216b732'
}

module.exports = txlog;
