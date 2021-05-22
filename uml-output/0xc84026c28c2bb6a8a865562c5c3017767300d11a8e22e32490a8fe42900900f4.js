const BigNumber = require("bignumber.js");

const txlog = 
{
  type: 'transaction',
  actions: [
    {
      type: 'callexternal',
      address: '0x48DD0dcaeCe8EbDe0A5F2E7A69B1082cd318cCd1',
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
              asAddress: '0x58056F51402E855CD7670ae4e842Fc95c227CD83',
              rawAsHex: '0x00000000000000000000000058056f51402e855cd7670ae4e842fc95c227cd83'
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
