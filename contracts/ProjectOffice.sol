pragma solidity ^0.5.0;
pragma experimental ABIEncoderV2;


// 1 battery
// 2 columns * 4 exclium elevators
// 5 floors


contract ProjectOffice {

    Components[] public component;
    address[] public customer;

    struct Components{
    uint64 ElevatorsShafts; // 8 = 2 columns * 4 elevators
    uint64 Controllers; // 1 = 1 per battery
    uint64 Buttons; //  25 = 5floors * 5 buttons
    uint64 Doors; // 10 =1 per floor * columns
    uint64 Displays; // 8 = 1 per elevator 
    }

    // constructor(address customer) public{
    //     customer = msg.sender;
    // }

    function set(uint64 Batteries, uint64 Columns, uint64 Elevators, uint64 Floors) public
    {       
        Components memory comp;
        comp.ElevatorsShafts = Elevators * Columns;
        comp.Controllers = Batteries;
        comp.Buttons = (Floors * 5);
        comp.Doors = Floors * Columns;
        comp.Displays = Elevators * Columns;
        component.push(comp);
    }

     function get() public view returns(Components[] memory)
    {
        return component;
    }

    function length() public view returns(uint){
        return component.length;
    }
}


// contract ProjectOffice {

//     uint64 ElevatorsShafts; // 8 = 2 columns * 4 elevators
//     uint64 Controllers; // 1 = 1 per battery
//     uint64 Buttons; //  25 = 5floors * 5 buttons
//     uint64 Doors; // 10 =1 per floor * columns
//     uint64 Displays; // 8 = 1 per elevator 
    

//     constructor(address customer,uint64 _shafts,uint64 _controllers,uint64 _buttons,uint64 _doors,uint64 _displays) public
//     {
//         customer = msg.sender;
//         ElevatorsShafts = _shafts;
//         Controllers = _controllers;
//         Buttons = _buttons;
//         Doors = _doors;
//         Displays = _displays;
//     }

//     function newOrder() public view returns(uint64[5] memory)
//           {       
//               uint64[5] memory components = [
//                 ElevatorsShafts,
//                 Controllers,
//                 Buttons,
//                 Doors,
//                 Displays
//             ];
//                 return components;
//            }
// }