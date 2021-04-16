App = {
  web3Provider: null,
  doorV : false,
  brakeV : false,
  cableV : false,
  batteryV : false,
  columnV : false,
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
    $.getJSON('QualityControl.json', function(data) {
      // Get the necessary contract artifact file and instantiate it with @truffle/contract
      var QualityControlArtifact = data;
      console.log(data)
      App.contracts.QualityControl = TruffleContract(QualityControlArtifact);
    
      // Set the provider for our contract
      
      App.contracts.QualityControl.setProvider(App.web3Provider);
      console.log(App.web3Provider);
      // Use our contract to retrieve and mark the adopted pets
      return App.getTestt();
    });

    return App.bindEvents();
  },

bindEvents: function() {
  // $(document).on('click', '#doorCheck', App.doorchanged);
  // $(document).on('click', '#cableCheck', App.cablechanged);
  // $(document).on('click', '#brakeCheck', App.brakechanged);
  // $(document).on('click', '#columnCheck', App.columnchanged);
  // $(document).on('click', '#batteryCheck', App.batterychanged);
  $(document).on('click', '.btn-primary', App.submitContrat);
},
getTestt:async function() {
  console.log("EEEEEEEEEE")
  App.contracts.QualityControl.deployed().then(async function(instance) {
    var QualityControlInstance = instance;
    

    return QualityControlInstance.getTest();
  }).then(function(adopters) {
    console.log("FFFFFFFF")
    return QualityControlInstance.getTest();
  }).catch(function(err) {
    console.log(err.message);
  });

},
submitContrat: function(event) {
  //recupere les checkbox
  event.preventDefault();
    web3.eth.getAccounts(function(error, accounts) {
      if (error) {
        console.log(error);
      }
      console.log(account);
      var account = accounts[0];
  

  App.contracts.QualityControl.deployed().then(function(instance) {
    var QualityControlInstance = instance;
    
        var address = QualityControlInstance.address.toString();

        var datastring = {address: address, contract_type: "QualityControl"};

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
    return QualityControlInstance.getTest.call();
  }).then(function(data) {
    return App.getTestt();
  }).catch(function(err) {
    console.log(err.message);
  });
    });




},
doorchanged: function(e){
  App.doorV = e.target.checked;
  
  $("#submit").attr("disabled", !(App.doorV && App.cableV && App.batteryV && App.columnV && App.brakeV));
},
brakechanged: function(e){
  App.brakeV = e.target.checked;
  $("#submit").attr("disabled", !(App.doorV && App.cableV && App.batteryV && App.columnV && App.brakeV));
},
cablechanged: function(e){
  App.cableV = e.target.checked;
  $("#submit").attr("disabled", !(App.doorV && App.cableV && App.batteryV && App.columnV && App.brakeV));
},
batterychanged: function(e){
  App.batteryV = e.target.checked;
  $("#submit").attr("disabled", !(App.doorV && App.cableV && App.batteryV && App.columnV && App.brakeV));
},
columnchanged: function(e){
  App.columnV = e.target.checked;
  $("#submit").attr("disabled", !(App.doorV && App.cableV && App.batteryV && App.columnV && App.brakeV));
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

App.contracts.Adoption.deployed().then(function(instance) {
  adoptionInstance = instance;

  // Execute adopt as a transaction by sending account
  return adoptionInstance.adopt(petId, {from: account});
}).then(function(result) {
  return App.markAdopted();
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
