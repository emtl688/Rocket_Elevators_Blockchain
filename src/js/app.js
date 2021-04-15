
// //   initContract: function() {
// //     $.getJSON('ProjectOffice.json', function(data) {
// //       // Get the necessary contract artifact file and instantiate it with @truffle/contract
// //       var ProjectOfficeArtifact = data;
// //       App.contracts.ProjectOffice = TruffleContract(ProjectOfficeArtifact);
    
// //       // Set the provider for our contract
// //       App.contracts.ProjectOffice.setProvider(App.web3Provider);
    
// //       // Use our contract to retrieve and mark the adopted pets
// //       return App.setOrder();
// //     });

// //     return App.bindEvents();
// //   },

// //   bindEvents: function() {
// //     $(document).on('click', '.btn', App.handleAdopt);
// //   },

// //   handleAdopt: function (event) {
// //         event.preventDefault();
    
// //         var batt = parseInt($("#battery").val());
// //         var col = parseInt($("#column").val());
// //         var el = parseInt($("#elevator").val());
// //         var flo = parseInt($("#floor").val());
    
// //         function calcComp() {
// //         $("#shafts").val(el);
// //         $("#controllers").val(batt);
// //         $("#buttons").val(flo * (flo - 1) * col);
// //         $("#doors").val(el*flo);
// //         $("#displays").val(el)
    
// //         web3.eth.getAccounts(function (error, accounts) {
// //           if (error) {
// //             console.log(error);
// //           }
    
// //           var account = accounts[0];
    
// //           App.contracts.ProjectOffice.deployed().then(function (instance) {
// //             adoptionInstance = instance;
    
// //             // Execute adopt as a transaction by sending account
// //             return adoptionInstance.adopt(petId, { from: account });
// //           }).then(function (result) {
// //             return App.markAdopted();
// //           }).catch(function (err) {
// //             console.log(err.message);
// //           });
// //         });
// //       }
// //     },
    
    
// //   setOrder: async function(){
// //    App.contracts.ProjectOffice.deployed().then(function(instance) {
// //         projectOfficeInstance = instance;
// //         componentcount = projectOfficeInstance.componentCount();
// //         comp = [componentcount, projectOfficeInstance]

// //       return comp
// //     }).then(async function(comp){

// //         for (let i = 0; i < comp[0]; i++) { 
// //           var component = await comp[1].getComponent(i);
// //           await addToOrder(i, component[0], "order", async () => getOrder(i));
// //         } 
// //       })
// //     },

// //     getOrder: async function(index) {
// //       App.contracts.ProjectOffice.deployed().then(async function (instance) {
          
// //         var projectOfficeInstance = instance;
// //         var component = await projectOfficeInstance.getComponent(index);
    
// //         return component
// //       }).then(async function(comp){
// //       $("#shafts").value = (comp[1]);
// //       $("#controllers").value = (comp[2]);
// //       $("#buttons").val(comp[3]);
// //       $("#doors").val(comp[4]);
// //       $("#displays").val(comp[5]);
// //       });
// //     },

// //     addToOrder: async function (index, item, list_name, click_function) {
// //       var element = document.createElement("a");
// //         element.setAttribute("id", index);
// //         element.textContent = item
// //         element.classList.add("collection-item")
// //         element.addEventListener("click", click_function);
// //       },
// //   }
// // $(function() {
// //   $(window).load(function() {
// //     App.initContract();
// //   });
// // });




// // // App = {
// // //   web3Provider: null,
// // //   contracts: {},

// // //   init: async function () {
// // //     // Load pets.
// // //     $.getJSON('../pets.json', function (data) {
// // //       var petsRow = $('#petsRow');
// // //       var petTemplate = $('#petTemplate');

// // //       for (i = 0; i < data.length; i++) {
// // //         petTemplate.find('.panel-title').text(data[i].name);
// // //         petTemplate.find('img').attr('src', data[i].picture);
// // //         petTemplate.find('.pet-breed').text(data[i].breed);
// // //         petTemplate.find('.pet-age').text(data[i].age);
// // //         petTemplate.find('.pet-location').text(data[i].location);
// // //         petTemplate.find('.btn-adopt').attr('data-id', data[i].id);

// // //         petsRow.append(petTemplate.html());
// // //       }
// // //     });

// // //     return await App.initWeb3();
// // //   },

// // //   initWeb3: async function () {

// // //     // Modern dapp browsers...
// // //     if (window.ethereum) {
// // //       App.web3Provider = window.ethereum;
// // //       try {
// // //         // Request account access
// // //         await window.ethereum.enable();
// // //       } catch (error) {
// // //         // User denied account access...
// // //         console.error("User denied account access")
// // //       }
// // //     }
// // //     // Legacy dapp browsers...
// // //     else if (window.web3) {
// // //       App.web3Provider = window.web3.currentProvider;
// // //     }
// // //     // If no injected web3 instance is detected, fall back to Ganache
// // //     else {
// // //       App.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
// // //     }
// // //     web3 = new Web3(App.web3Provider);

// // //     return App.initContract();
// // //   },

// // //   initContract: function () {

// // //     $.getJSON('ProjectOffice.json', function (data) {
// // //       // Get the necessary contract artifact file and instantiate it with @truffle/contract
// // //       var ProjectOfficeArtifact = data;
// // //       App.contracts.ProjectOffice = TruffleContract(ProjectOfficeArtifact);

// // //       // Set the provider for our contract
// // //       App.contracts.ProjectOffice.setProvider(App.web3Provider);

// // //       // Use our contract to retrieve and mark the adopted pets
// // //       return App.markAdopted();
// // //     });

// // //     return App.bindEvents();
// // //   },

// // //   bindEvents: function () {
// // //     $(document).on('click', '.btn-adopt', App.handleAdopt);
// // //   },

// // //   markAdopted: function () {
// // //     var adoptionInstance;

// // //     App.contracts.ProjectOffice.deployed().then(function (instance) {
// // //       adoptionInstance = instance;

// // //       return adoptionInstance.getAdopters.call();
// // //     }).then(function (adopters) {
// // //       for (i = 0; i < adopters.length; i++) {
// // //         if (adopters[i] !== '0x0000000000000000000000000000000000000000') {
// // //           $('.panel-pet').eq(i).find('button').text('Success').attr('disabled', true);
// // //         }
// // //       }
// // //     }).catch(function (err) {
// // //       console.log(err.message);
// // //     });
// // //   },

// // //   handleAdopt: function (event) {
// // //     event.preventDefault();

// // //     var petId = parseInt($(event.target).data('id'));

// // //     var adoptionInstance;

// // //     web3.eth.getAccounts(function (error, accounts) {
// // //       if (error) {
// // //         console.log(error);
// // //       }

// // //       var account = accounts[0];

// // //       App.contracts.ProjectOffice.deployed().then(function (instance) {
// // //         adoptionInstance = instance;

// // //         // Execute adopt as a transaction by sending account
// // //         return adoptionInstance.adopt(petId, { from: account });
// // //       }).then(function (result) {
// // //         return App.markAdopted();
// // //       }).catch(function (err) {
// // //         console.log(err.message);
// // //       });
// // //     });
// // //   }

// // // };

// // // $(function () {
// // //   $(window).load(function () {
// // //     App.init();
// // //   });
// // // });

// App = {
//   web3Provider: null,
//   contracts: {},

//   init: async function() {
//     // Load materials.
//     $.getJSON('projectoffice.json', function(data) {
//       var po_template = $('#order');

//       for (i = 0; i < data.length; i ++) {
//         po_template.find('#battery').text(data[i].battery);
//         po_template.find('#column').text( data[i].column);
//         po_template.find('#elevator').text(data[i].elevator);
//         po_template.find('#floor').text(data[i].floor);
//         po_template.find('#shafts').text( data[i].shafts);
//         po_template.find('#controllers').text(data[i].controllers);
//         po_template.find('#buttons').text(data[i].buttons);
//         po_template.find('#doors').text( data[i].doors);
//         po_template.find('#displays').text(data[i].displays);
//       }
//     });

//     return await App.initWeb3();
//   },

//   initWeb3: async function() {
//     // Modern dapp browsers...
//       if (window.ethereum) {
//         App.web3Provider = window.ethereum;
//         try {
//           // Request account access
//           await window.ethereum.enable();
//         } catch (error) {
//           // User denied account access...
//           console.error("User denied account access")
//         }
//       }
//       // Legacy dapp browsers...
//       else if (window.web3) {
//         App.web3Provider = window.web3.currentProvider;
//       }
//       // If no injected web3 instance is detected, fall back to Ganache
//       else {
//         App.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
//       }
//       web3 = new Web3(App.web3Provider);

//     return App.initContract();
//   },

//   initContract: function() {
//     $.getJSON('ProjectOffice.json', function(data) {
//       // Get the necessary contract artifact file and instantiate it with @truffle/contract
//       var ProjectOfficeArtifact = data;
//       App.contracts.ProjectOffice = TruffleContract(ProjectOfficeArtifact);
//       App.contracts.ProjectOffice.setProvider(App.web3Provider);
    
//       // Use our contract to retrieve and mark the adopted pets
//       return App.markAssembled();
//     });

//     return App.bindEvents();
//   },

//   bindEvents: function() {
//     $(document).on('click', '.btn-assemble', App.handleAssemble);
//   },

//   markAssembled: function() {
//     var projectofficeInstance;

//     App.contracts.ProjectOffice.deployed().then(function(instance) {
//       projectofficeInstance = instance;

//   //   return projectofficeInstance.getComponent.call();
//   //   }).then(function(clients) {
//   //     for (i = 0; i < clients.length; i++) {
//   //       if (clients[i] !== '0x0000000000000000000000000000000000000000') {
//   //         $('.panel-assembly').eq(i).find('button').text('Success').attr('disabled', true);
//   //       }
//   //     }
//   //   }).catch(function(err) {
//   //     console.log(err.message);
//   //   });
//   // },

//   handleAssemble: function(event) {
//     event.preventDefault();

//     var projectOfficeID = parseInt($(event.target).data('id'));

//     var assemblyInstance;

//     web3.eth.getAccounts(function(error, accounts) {
//       if (error) {
//         console.log(error);
//       }
    
//       var account = accounts[0];
    
//       App.contracts.ProjectOffice.deployed().then(function(instance) {
//         assemblyInstance = instance;
    
//         // Execute adopt as a transaction by sending account
//         return assemblyInstance.getProducts();
//       }).then(function(result) {
//         return App.markAssembled();
//       }).catch(function(err) {
//         console.log(err.message);
//       });
//     });
//   }

//   $(function() {
//     $(window).load(function() {
//       App.init();
//     });
//   });
  
// };


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
      //return App.markAdopted();
    });

    return App.bindEvents();
  },

  bindEvents: function() {
    $(document).on('click', '.btn-primary', App.handleAdopt);
  },

  markAdopted: function() {
    var adoptionInstance;

App.contracts.ProjectOffice.deployed().then(function(instance) {
  adoptionInstance = instance;

  return adoptionInstance.set();
}).then(function(adopters) {
  App.contracts.ProjectOffice.set(1,1,1,1, {from: account})
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





