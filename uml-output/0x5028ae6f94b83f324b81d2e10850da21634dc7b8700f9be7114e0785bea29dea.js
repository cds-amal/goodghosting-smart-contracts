const BigNumber = require("bignumber.js");

const txlog = 
{
  type: 'transaction',
  actions: [
    {
      type: 'callexternal',
      address: '0x7855E42B012dCbABADe36E2cBbcCD3AAB5669411',
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
              asAddress: '0x106EB8d828a547Fc275D6a683C62e7bDa3dc22eD',
              rawAsHex: '0x000000000000000000000000106eb8d828a547fc275d6a683c62e7bda3dc22ed'
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
