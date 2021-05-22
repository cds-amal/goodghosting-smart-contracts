const BigNumber = require("bignumber.js");

const txlog = 
{
  type: 'transaction',
  actions: [
    {
      type: 'callexternal',
      address: '0x51815CEbeF59b88DAfD1a5f24095eee1236ffCDd',
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
            value: { asBN: BigNumber("0x1"), rawAsBN: BigNumber("0x1") }
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
                  asHex: '0x2882c9f01add5f1c877ca051d110e9e58fbedc3164a1ae605f2fb231e9d9fb70',
                  rawAsHex: '0x2882c9f01add5f1c877ca051d110e9e58fbedc3164a1ae605f2fb231e9d9fb70'
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
                value: { asBoolean: true }
              }
            }
          ]
        }
      ],
      returnKind: 'revert',
      error: {
        kind: 'revert',
        abi: {
          name: 'Error',
          type: 'error',
          inputs: [ { name: '', type: 'string', internalType: 'string' } ]
        },
        status: false,
        arguments: [
          {
            value: {
              type: { typeClass: 'string', typeHint: 'string' },
              kind: 'value',
              value: { kind: 'valid', asString: 'Pausable: paused' }
            }
          }
        ],
        decodingMode: 'full'
      }
    }
  ],
  origin: '0xf17f52151EbEF6C7334FAD080c5704D77216b732'
}

module.exports = txlog;
