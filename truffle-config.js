const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require('web3')
const ContractKit = require('@celo/contractkit')
const web3 = new Web3('https://alfajores-forno.celo-testnet.org')
const kit = ContractKit.newKitFromWeb3(web3)
const getAccount = require('./getAccount').getAccount

async function awaitWrapper(){
    let account = await getAccount()
    kit.connection.addAccount(account.privateKey)
}
awaitWrapper()
require("dotenv").config();

module.exports = {
    // See <http://truffleframework.com/docs/advanced/configuration>
    // to customize your Truffle configuration!

    plugins: [
        //"truffle-security",
        "solidity-coverage",
        "truffle-plugin-verify"
    ],

    // Set default mocha options here, use special reporters etc.
    mocha: {
        // timeout: 100000
        reporter: "eth-gas-reporter",
        reporterOptions : {
            currency: "USD",
            showTimeSpent: true,
            coinmarketcap: process.env.COINMARKETCAP_API_KEY,
            excludeContracts: ["Migrations", "ForceSend"]
        }
    },

    networks: {

        "teams-mainnet-fork": {
            url: "", // Get URL from Truffle Teams
            network_id: 0, // Get network_id from Truffle Teams
        },

        "local-mainnet-fork": {
            host: "127.0.0.1",
            port: 8545,
            network_id: "*",
        },

        "local-polygon-vigil-fork": {
            host: "127.0.0.1",
            port: 8545,
            network_id: "*",
        },
        alfajores: {
            provider: kit.connection.web3.currentProvider, // CeloProvider
            network_id: 44787                              // Alfajores network id
        },

        kovan: {
            provider: () => new HDWalletProvider(
                process.env.KOVAN_MNEMONIC,
                process.env.KOVAN_PROVIDER_URL,
                0, //address_index
                10, // num_addresses
                true // shareNonce
            ),
            network_id: 42, // Kovan's id
            //gas: 7017622, //
            networkCheckTimeout: 60000,
            confirmations: 2, // # of confs to wait between deployments. (default: 0)
            timeoutBlocks: 50000, // # of blocks before a deployment times out  (minimum/default: 50)
            skipDryRun: false // Skip dry run before migrations? (default: false for public nets )
        },
        polygon: {
            provider: () => new HDWalletProvider(
                process.env.POLYGON_MAINNET_MNEMONIC,
                process.env.POLYGON_MAINNET_PROVIDER_URL,
                0, //address_index
                10, // num_addresses
                true // shareNonce
            ),
            network_id: 137, // Polygon mainnet id
            networkCheckTimeout: 60000,
            //gas: 7017622, //
            gasPrice: 1000000000,// 1 Gwei
            confirmations: 2, // # of confs to wait between deployments. (default: 0)
            timeoutBlocks: 50, // # of blocks before a deployment times out  (minimum/default: 50)
            skipDryRun: false // Skip dry run before migrations? (default: false for public nets )
        },
        ropsten: {
            provider: () =>
                new HDWalletProvider(
                    process.env.ROPSTEN_MNEMONIC,
                    process.env.ROPSTEN_PROVIDER_URL,
                ),
            network_id: 3,       // Ropsten's id
            networkCheckTimeout: 60000,
            // gas: 4600000,        // Ropsten has a lower block limit than mainnet
            confirmations: 2,    // # of confs to wait between deployments. (default: 0)
            timeoutBlocks: 50,  // # of blocks before a deployment times out  (minimum/default: 50)
            // gasPrice: 2000000000,// 2 Gwei
            skipDryRun: false     // Skip dry run before migrations? (default: false for public nets )
        },

        mainnet: {
            provider: () => new HDWalletProvider(
                process.env.MAINNET_MNEMONIC,
                process.env.MAINNET_PROVIDER_URL,
                0, //address_index
                10, // num_addresses
                true // shareNonce
            ),
            network_id: 1, // mainnet's id
            networkCheckTimeout: 60000,
            //gas: 7017622, //
            gasPrice: +process.env.MAINNET_GAS_PRICE || 1000*1000*1000, // default 1 gwei
            confirmations: 2, // # of confs to wait between deployments. (default: 0)
            timeoutBlocks: 100, // # of blocks before a deployment times out  (minimum/default: 50)
            skipDryRun: false // Skip dry run before migrations? (default: false for public nets )
        },

        coverage: {
            host: "localhost",
            network_id: "*",
            port: 8555,         // <-- If you change this, also set the port option in .solcover.js.
            gas: 8900000, // <-- Use this high gas value
            gasPrice: 115*(10^9)      // <-- Use this low gas price (10^9 == 1 Gwei) => x * 10^9 === x Gwei
        },
    },

    compilers: {
        solc: {
            version: "0.6.11",
            settings: {
                optimizer: {
                  enabled: true,
                  runs: 1500
                }
              }
             // A version or constraint - Ex. "^0.5.0"
            // Can also be set to "native" to use a native solc
            //docker: false, // Use a version obtained through docker
            // parser: "solcjs",  // Leverages solc-js purely for speedy parsing
        }
    },
    api_keys: {
        etherscan: process.env.ETHERSCAN_API_KEY
    },
    etherscan: {
        apiKey: process.env.ETHERSCAN_API_KEY
    }
};
