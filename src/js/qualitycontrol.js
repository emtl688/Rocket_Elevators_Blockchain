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
          App.web3Provider = new Web3.providers.HttpProvider('http://172.28.112.1:7545');
        }

        App.web3Provider = new Web3.providers.HttpProvider('http://172.28.112.1:7545');
        web3 = new Web3(App.web3Provider);

      return App.initContract();
    },

  initContract: function() {
    $.getJSON('QualityControl.json', function(data) {
      console.log(data)
      // Get the necessary contract artifact file and instantiate it with @truffle/contract
      var QualityControlArtifact = data;
      App.contracts.QualityControl = TruffleContract(QualityControlArtifact);
    
      // Set the provider for our contract
      App.contracts.QualityControl.setProvider(App.web3Provider);
    
      // Use our contract to retrieve and mark the adopted pets
      return App.getTest();
    });

    return App.bindEvents();
  },

  bindEvents: function() {
    $(document).on('click', '#doorCheck', App.doorchanged);
    $(document).on('click', '#cableCheck', App.cablechanged);
    $(document).on('click', '#brakeCheck', App.brakechanged);
    $(document).on('click', '#columnCheck', App.columnchanged);
    $(document).on('click', '#batteryCheck', App.batterychanged);
    $(document).on('click', '#submit', App.submitContrat);
  },
  getTest: function() {
//recupere les checkbox



    var QualityControlInstance;

    App.contracts.QualityControl.deployed().then(function(instance) {
      QualityControlInstance = instance;
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
      

      return QualityControlInstance.getTest.call(x,y);
    }).then(function(adopters) {
    
    }).catch(function(err) {
      console.log(err.message);
    });

  },
  submitContrat: function() {
    //recupere les checkbox
    
    var QualityControlInstance;

    App.contracts.QualityControl.deployed().then(function(instance) {
      QualityControlInstance = instance;

      return QualityControlInstance.getTest.call();
    }).then(function(data) {
      console.log(data)
      // for (i = 0; i < adopters.length; i++) {
      //   if (adopters[i] !== '0x0000000000000000000000000000000000000000') {
      //     $('.panel-pet').eq(i).find('button').text('Success').attr('disabled', true);
      //   }
      // }
    }).catch(function(err) {
      console.log(err.message);
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
