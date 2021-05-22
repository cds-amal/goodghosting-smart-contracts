const BigNumber = require("bignumber.js");

const txlog = 
{
  type: 'transaction',
  actions: [
    {
      type: 'callexternal',
      address: '0x7E0e500A2766c5e1aB1Bc602CCD03c4e3132475d',
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
              asAddress: '0x2369BA5C459E1255585889A6FBF5Ea82F004388d',
              rawAsHex: '0x0000000000000000000000002369ba5c459e1255585889a6fbf5ea82f004388d'
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
