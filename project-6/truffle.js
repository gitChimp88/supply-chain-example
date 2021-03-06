const HDWalletProvider = require("truffle-hdwallet-provider");

const mnemonic = "your mnemonic here";

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*", // Match any network id
    },

    rinkeby: {
      provider: () =>
        new HDWalletProvider(mnemonic, `rinkeby infura link here`),
      network_id: 4, // rinkeby's id
      gas: 5500000, // rinkeby has a lower block limit than mainnet
      confirmations: 2, // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200, // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true, // Skip dry run before migrations? (default: false for public nets )
    },
  },
};
