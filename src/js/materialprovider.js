MaterialProvider = {
  web3Provider: null,
  contracts: {},

  initWeb3: async function() {
    // Modern dapp browsers...
if (window.ethereum) {
  MaterialProvider.web3Provider = window.ethereum;
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
  MaterialProvider.web3Provider = window.web3.currentProvider;
}
// If no injected web3 instance is detected, fall back to Ganache
else {
  MaterialProvider.web3Provider = new Web3.providers.HttpProvider('http://localhost:8545');
}
web3 = new Web3(MaterialProvider.web3Provider);

    return MaterialProvider.initContract();
  },

  initContract: function() {
    $.getJSON('MaterialProvider.json', function(data) {
      // Get the necessary contract artifact file and instantiate it with @truffle/contract
      var MaterialProviderArtifact = data;
      MaterialProvider.contracts.MaterialProvider = TruffleContract(MaterialProviderArtifact);
    
      // Set the provider for our contract
      MaterialProvider.contracts.MaterialProvider.setProvider(MaterialProvider.web3Provider);
    
      // Use our contract to retrieve and mark the adopted pets
      return MaterialProvider.markAdopted();
    });

    return MaterialProvider.bindEvents();
  },

  bindEvents: function() {
    $(document).on('click', '.btn-submit-mats', MaterialProvider.handleAdopt);
  },

  markAdopted: function() {
    var adoptionInstance;

MaterialProvider.contracts.MaterialProvider.deployed().then(function(instance) {
  adoptionInstance = instance;

  return adoptionInstance.getAdopters.call();
}).then(function(adopters) {
  for (i = 0; i < adopters.length; i++) {
    if (adopters[i] !== '0x0000000000000000000000000000000000000000') {
      $('.panel-pet').eq(i).find('button').text('Success').attr('disabled', true);
    }
  }
}).catch(function(err) {
  console.log(err.message);
});
  },

  handleAdopt: function(event) {
    event.preventDefault();

    var petId = parseInt($(event.target).data('id'));

    var adoptionInstance;

web3.eth.getAccounts(function(error, accounts) {
  if (error) {
    console.log(error);
  }

  var account = accounts[0];

  MaterialProvider.contracts.MaterialProvider.deployed().then(function(instance) {
    adoptionInstance = instance;

    // Execute adopt as a transaction by sending account
    return adoptionInstance.adopt(petId, {from: account});
  }).then(function(result) {
    return MaterialProvider.markAdopted();
  }).catch(function(err) {
    console.log(err.message);
  });
});
  }

};

$(function() {
  $(window).load(function() {
    MaterialProvider.init();
  });
});
