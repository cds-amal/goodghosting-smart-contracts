const BigNumber = require("bignumber.js");

const txlog = 
{
  type: 'transaction',
  actions: [
    {
      type: 'callexternal',
      address: '0xe7339802756022b179F8b62d68207d67e59832Cd',
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
              asAddress: '0x19A3cf15c11ED5a6B6FdB8ACd733107fa63ab29c',
              rawAsHex: '0x00000000000000000000000019a3cf15c11ed5a6b6fdb8acd733107fa63ab29c'
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
