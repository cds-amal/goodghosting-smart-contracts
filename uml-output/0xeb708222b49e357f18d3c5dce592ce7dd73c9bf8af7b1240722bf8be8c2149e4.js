const BigNumber = require("bignumber.js");

const txlog = 
{
  type: 'transaction',
  actions: [
    {
      type: 'callexternal',
      address: '0x2a504B5e7eC284ACa5b6f49716611237239F0b97',
      contextHash: '0xa5d0f0cd4fd043c8edbe931400377de1c6af9e83b4e560e63b545c6f03dfbfa0',
      value: BigNumber("0x0"),
      kind: 'function',
      isDelegate: false,
      functionName: 'setUnderlyingAssetAddress',
      contractName: 'LendingPoolAddressesProviderMock',
      arguments: [
        {
          name: '_addr',
          value: {
            type: { typeClass: 'address', kind: 'specific', payable: false },
            kind: 'value',
            value: {
              asAddress: '0xA4392264a2d8c998901D10C154C91725b1BF0158',
              rawAsHex: '0x000000000000000000000000a4392264a2d8c998901d10c154c91725b1bf0158'
            }
          }
        }
      ],
      actions: [],
      returnValues: [],
      returnKind: 'return'
    }
  ],
  origin: '0x627306090abaB3A6e1400e9345bC60c78a8BEf57'
}

module.exports = txlog;
