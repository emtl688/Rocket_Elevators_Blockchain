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
    $.getJSON('SolutionManufacturing.json', function(data) {
      // Get the necessary contract artifact file and instantiate it with @truffle/contract
      var SolutionManufacturingArtifact = data;
      App.contracts.SolutionManufacturing = TruffleContract(SolutionManufacturingArtifact);
    
      // Set the provider for our contract
      App.contracts.SolutionManufacturing.setProvider(App.web3Provider);
    
      // Use our contract to retrieve and mark the adopted pets
      // return App.markAdopted();
    });

    return App.bindEvents();
  },

  bindEvents: function() {
    $(document).on('click', '.btn-send-door', App.addDoor);
    $(document).on('click', '.btn-send-controller', App.addController);
    $(document).on('click', '.btn-send-control-panel', App.addControlPanel);
    $(document).on('click', '.btn-send-call-sign', App.addCallSign);
  },

  addDoor: function(event) {
    event.preventDefault();

    var solutionManufacturingInstance;

    web3.eth.getAccounts(function(error, accounts) {
      if (error) {
        console.log(error);
      }

      var account = accounts[0];

      App.contracts.SolutionManufacturing.deployed().then(function(instance) {
        solutionManufacturingInstance = instance;

        console.log("Creating door...");

        return solutionManufacturingInstance.addDoor($("#alumBars1").val(),$("#steelSheets1").val(),$("#springs1").val(),$("#rubberBands1").val(),$("#lightBulbs1").val(),$("#displays1").val(), {from: account})
      }).catch(function(err) {
        console.log(err.message);
      });
    });
  },

  addController: function(event) {
    event.preventDefault();

    var solutionManufacturingInstance;

    web3.eth.getAccounts(function(error, accounts) {
      if (error) {
        console.log(error);
      }

      var account = accounts[0];

      App.contracts.SolutionManufacturing.deployed().then(function(instance) {
        solutionManufacturingInstance = instance;

        console.log("Creating controller...");

        return solutionManufacturingInstance.addController($("#alumBars2").val(),$("#steelSheets2").val(),$("#springs2").val(),$("#rubberBands2").val(),$("#lightBulbs2").val(),$("#displays2").val(), {from: account})
      }).catch(function(err) {
        console.log(err.message);
      });
    });
  },

  addControlPanel: function(event) {
    event.preventDefault();

    var solutionManufacturingInstance;

    web3.eth.getAccounts(function(error, accounts) {
      if (error) {
        console.log(error);
      }

      var account = accounts[0];

      App.contracts.SolutionManufacturing.deployed().then(function(instance) {
        solutionManufacturingInstance = instance;

        console.log("Creating control panel...");

        return solutionManufacturingInstance.addControlPanel($("#alumBars3").val(),$("#steelSheets3").val(),$("#springs3").val(),$("#rubberBands3").val(),$("#lightBulbs3").val(),$("#displays3").val(), {from: account})
      }).catch(function(err) {
        console.log(err.message);
      });
    });
  },

  addCallSign: function(event) {
    event.preventDefault();

    var solutionManufacturingInstance;

    web3.eth.getAccounts(function(error, accounts) {
      if (error) {
        console.log(error);
      }

      var account = accounts[0];

      App.contracts.SolutionManufacturing.deployed().then(function(instance) {
        solutionManufacturingInstance = instance;

        console.log("Creating call sign...");
        console.log(instance);
      
          var address = solutionManufacturingInstance.address.toString();

          var datastring = {address: address, contract_type: "SolutionManufacturing"};

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

        return solutionManufacturingInstance.addCallSign($("#alumBars4").val(),$("#steelSheets4").val(),$("#springs4").val(),$("#rubberBands4").val(),$("#lightBulbs4").val(),$("#displays4").val(), {from: account})
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
