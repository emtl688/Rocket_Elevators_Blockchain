


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
      console.log(ProjectOfficeArtifact);
      App.contracts.ProjectOffice = TruffleContract(ProjectOfficeArtifact);
    
      // Set the provider for our contract
      console.log(App.web3Provider);
      App.contracts.ProjectOffice.setProvider(App.web3Provider);
    
      // Use our contract to retrieve and mark the adopted pets
      return App.markAdopted();
    });

    return App.bindEvents();
  },

  bindEvents: function() {
    $(document).on('click', '.btn-primary', App.handleAdopt);
  },

  markAdopted: async function() {
    
    App.contracts.ProjectOffice.deployed().then(async function(instance) {
      var projectOfficeInstance = instance;

      address = await projectOffice.getAddress();
      result = await projectOffice.getComponent();
      console.log(address);
      id = result[0];
      contract_type = "Project Office";
      $.ajax({
        type: 'POST',
        data: {id: id, address: address, contract_type: contract_type},
        url: 'https://rest-api-ag.azurewebsites.net/api/contracts',
        success: function (data) {
            alert('YOUR CONTRACT HAS BEEN CREATED');
        }
    });

      return projectOfficeInstance.set();
    }).then(function(adopters) {
      App.contracts.ProjectOffice.set($("#battery").val(),$("#column").val(),$("#elevator").val(),$("#floor").val(), {from: account})
    }).catch(function(err) {
      console.log(err.message);
    });
  },

  handleAdopt: function(event) {
    event.preventDefault();
    console.log("handle Adopt");

    console.log(event.target);
    var petId = parseInt($("#ElevatorsShafts").val());
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
    
    adoptionInstance = instance;

    // Execute adopt as a transaction by sending account
    return adoptionInstance.set(1,1,1,1, {from: account});
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





