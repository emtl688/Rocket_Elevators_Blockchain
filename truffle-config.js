module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      host: "172.28.112.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    develop: {
      port: 7545
    }
  }
};
