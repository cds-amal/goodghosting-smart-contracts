const BigNumber = require("bignumber.js");

const txlog = 
{
  type: 'transaction',
  actions: [
    {
      type: 'callexternal',
      address: '0x19A3cf15c11ED5a6B6FdB8ACd733107fa63ab29c',
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
              asAddress: '0x27374C26b60eDe5883eD8DabB07Bd3785ff64A4C',
              rawAsHex: '0x00000000000000000000000027374c26b60ede5883ed8dabb07bd3785ff64a4c'
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
