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
    $.getJSON('MaterialProvider.json', function(data) {
      // Get the necessary contract artifact file and instantiate it with @truffle/contract
      var MaterialProviderArtifact = data;
      console.log(data)
      App.contracts.MaterialProvider = TruffleContract(MaterialProviderArtifact);
    
      // Set the provider for our contract
      
      App.contracts.MaterialProvider.setProvider(App.web3Provider);
      console.log(App.web3Provider);
      // Use our contract to retrieve and mark the adopted pets
      return App.markAdopted();
    });

    return App.bindEvents();
  },

  bindEvents: function() {
    $(document).on('click', '.btn-success', App.handleAdopt); //change button class
  },

  markAdopted: async function() {
    App.contracts.MaterialProvider.deployed().then(async function(instance) {
      var materialProviderInstance = instance;
      
          var address = materialProviderInstance.address.toString();

          var datastring = {address: address, contract_type: "MaterialProvider"};

          var data = JSON.stringify(datastring);
          console.log(data);

            $.ajax({
              type: 'POST',
              dataType: 'JSON',
              headers: { 'content-type': 'application/json', "accept": "*/*", "Access-Control-Allow-Origin": "*" },
              data: data,
              url: 'https://rest-api-ag.azurewebsites.net/api/contracts',
              success: function () {
                  alert('YOUR CONTRACT HAS BEEN CREATED');
              }
    });
    

      return materialProviderInstance.set();
    }).then(function() {
      App.contracts.MaterialProvider.set($("#shafts").val(),$("#controllers").val(),$("#buttons").val(),$("#doors").val(),$("#displays").val(), {from: account})
    }).catch(function(err) {
      console.log(err.message);
    });
  },

  handleAdopt: function(event) {
    event.preventDefault();
    console.log("handle Adopt");

    console.log(event.target);
    var petId = parseInt($("#alumBars").val());
    console.log(petId);

    var adoptionInstance;

      web3.eth.getAccounts(function(error, accounts) {
        if (error) {
          console.log(error);
        }
        console.log(accounts);
        var account = accounts[0];

        App.contracts.MaterialProvider.deployed().then((instance) => {
          console.log(instance);
          
          materialProviderInstance = instance;
          // Execute adopt as a transaction by sending account
          return materialProviderInstance.set($("#shafts").val(),$("#controllers").val(),$("#buttons").val(),$("#doors").val(),$("#displays").val(), {from: account})
        }).then(function(result) {
          return App.markAdopted();//post api
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
