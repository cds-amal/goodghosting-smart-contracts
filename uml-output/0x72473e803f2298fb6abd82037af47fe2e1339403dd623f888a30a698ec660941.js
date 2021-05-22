const BigNumber = require("bignumber.js");

const txlog = 
{
  type: 'transaction',
  actions: [
    {
      type: 'callexternal',
      address: '0x21722dC5D78334bAbAA19A0fCA5210bd453EAa57',
      contextHash: '0x378bda192263a0568f6930e3d80aac6a8974a487e2d299c3f7398ee3b43c7a67',
      value: BigNumber("0x0"),
      kind: 'constructor',
      isDelegate: undefined,
      functionName: undefined,
      contractName: 'LendingPoolAddressesProviderMock',
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
            value: { kind: 'valid', asString: 'TOKEN_NAME' }
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
            value: { kind: 'valid', asString: 'TOKEN_SYMBOL' }
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
