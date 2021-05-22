const BigNumber = require("bignumber.js");

const txlog = 
{
  type: 'transaction',
  actions: [
    {
      type: 'callexternal',
      address: '0x8f1A69555d18587277937D06A6dF3C07459d1dA9',
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
              asAddress: '0x394BfB86641Bf8cA8A757a318499A580Cc1f26C6',
              rawAsHex: '0x000000000000000000000000394bfb86641bf8ca8a757a318499a580cc1f26c6'
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
