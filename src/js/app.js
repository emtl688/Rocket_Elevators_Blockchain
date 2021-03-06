App = {
  web3Provider: null,
  contracts: {},

  initWeb3: async function() {
    // Modern dapp browsers...
if (window.ethereum) {
  App.web3Provider = window.ethereum;
  try {
    // Request account access
    await window.ethereum.enable();
  } catch (error) {
    // User denied account access...
    console.error("User denied account access")
  }
}
// Legacy dapp browsers...
else if (window.web3) {
  App.web3Provider = window.web3.currentProvider;
}
// If no injected web3 instance is detected, fall back to Ganache
else {
  App.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
}
web3 = new Web3(App.web3Provider);

    return App.initContract();
  },

  initContract: function() {
    $.getJSON('ProjectOffice.json', function(data) {
      // Get the necessary contract artifact file and instantiate it with @truffle/contract
      var ProjectOfficeArtifact = data;
      console.log(data)
      App.contracts.ProjectOffice = TruffleContract(ProjectOfficeArtifact);
    
      // Set the provider for our contract
      
      App.contracts.ProjectOffice.setProvider(App.web3Provider);
      console.log(App.web3Provider);
      // Use our contract to retrieve and mark the adopted pets
      return App.setContract();
    });

    return App.bindEvents();
  },

  bindEvents: function() {
    $(document).on('click', '.btn-primary', App.getOrder);
  },

  setContract: async function() {
    App.contracts.ProjectOffice.deployed().then(async function(instance) {
      var projectOfficeInstance = instance;
      
          // var address = projectOfficeInstance.address.toString();

          // var datastring = {address: address, contract_type: "ProjectOffice"};

          // var data = JSON.stringify(datastring);
          // console.log(data);

            // $.ajax({
            //   type: 'POST',
            //   dataType: 'JSON',
            //   headers: { 'content-type': 'application/json', "accept": "*/*", "Access-Control-Allow-Origin": "*" },
            //   data: data,
            //   url: 'https://rest-api-ag.azurewebsites.net/api/contracts',
            //   success: function () {
            //       alert('YOUR CONTRACT HAS BEEN CREATED');
            //   }
    

      return projectOfficeInstance.set();
    }).then(function() {
      App.contracts.ProjectOffice.set($("#battery").val(),$("#column").val(),$("#elevator").val(),$("#floor").val(), {from: account})
    }).catch(function(err) {
      console.log(err.message);
    });
  },

  getOrder: function(event) {
    event.preventDefault();

    console.log(event.target);
    var petId = parseInt($("#shafts").val());
    console.log(petId);

    var adoptionInstance;

      web3.eth.getAccounts(function(error, accounts) {
        if (error) {
          console.log(error);
        }
        console.log(accounts);
        var account = accounts[0];

        App.contracts.ProjectOffice.deployed().then((instance) => {
          console.log(instance);
          var projectOfficeInstance = instance;
      
          var address = projectOfficeInstance.address.toString();

          var datastring = {address: address, contract_type: "ProjectOffice"};

          var data = JSON.stringify(datastring);
          console.log(data);

          $.ajax({
            type: 'POST',
            headers: { 'content-type': 'application/json', "accept": "*/*", "Access-Control-Allow-Origin": "*" },
            data: data,
            url: 'https://rest-api-ag.azurewebsites.net/api/contracts',
            success: function (data) {
                alert('YOUR CONTRACT HAVE BEEN CREATED');
            }
        });
        console.log("ZAP")
          // Execute adopt as a transaction by sending account
          console.log(projectOfficeInstance.set($("#battery").val(),$("#column").val(),$("#elevator").val(),$("#floor").val(), {from: account}))
          return projectOfficeInstance.set($("#battery").val(),$("#column").val(),$("#elevator").val(),$("#floor").val(), {from: account})
        }).then(function(result) {
          return App.setContract();//post api
        }).catch(function(err) {
          console.log(err.message);
        });
      });
  }

};

$(function() {
  $(window).load(function() {
    App.initWeb3();
  });
});

