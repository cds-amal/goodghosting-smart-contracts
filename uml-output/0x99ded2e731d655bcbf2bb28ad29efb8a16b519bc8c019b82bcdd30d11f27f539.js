const BigNumber = require("bignumber.js");

const txlog = 
{
  type: 'transaction',
  actions: [
    {
      type: 'callexternal',
      address: '0x87Bd32cF6E7e4CeE8c44852F3e9a5BF27f11aB8D',
      contextHash: '0xcf7311815a16d7be2428f29ea362912d1ab1e108329890d4c1eea80c098f7ebe',
      value: BigNumber("0x0"),
      kind: 'constructor',
      isDelegate: undefined,
      functionName: undefined,
      contractName: 'MockERC20Mintable',
      arguments: [
        {
          name: 'name',
          value: {
            type: {
              typeClass: 'string',
              location: 'memory',
              typeHint: 'string'
            },
            kind: 'value',
            value: { kind: 'valid', asString: 'MINT' }
          }
        },
        {
          name: 'symbol',
          value: {
            type: {
              typeClass: 'string',
              location: 'memory',
              typeHint: 'string'
            },
            kind: 'value',
            value: { kind: 'valid', asString: 'MINT' }
          }
        }
      ],
      actions: [],
      salt: null,
      returnKind: 'return',
      returnImmutables: []
    }
  ],
  origin: '0x627306090abaB3A6e1400e9345bC60c78a8BEf57'
}

module.exports = txlog;
