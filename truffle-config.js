const HDWalletProvider = require("@truffle/hdwallet-provider");

const mnemonic = "claw essay spoon blind early kite rural between usual tide express pigeon";

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    develop: {
      port: 8545
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/v3/ee754186529c4304a7651c1f4290dd8a")
      },
      network_id: 3
    }
  }
};
