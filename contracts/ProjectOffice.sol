pragma solidity ^0.5.0;
pragma experimental ABIEncoderV2;

contract ProjectOffice {

    Components[] public component;
    address public customer;

    struct Components{
    uint Id;
    uint ElevatorsShafts; // 8 = 2 columns * 4 elevators
    uint Controllers; // 1 = 1 per battery
    uint Buttons; //  25 = 5floors * 5 buttons
    uint Doors; // 10 =1 per floor * columns
    uint Displays; // 8 = 1 per elevator 
    }

    constructor() public {
        customer = msg.sender;
    }
    uint orderId =1; 

    function set(uint Batteries, uint Columns, uint Elevators, uint Floors) public
    {   
        component.length++;
        component[component.length-1].Id = orderId;
        component[component.length-1].ElevatorsShafts = Elevators * Columns;
        component[component.length-1].Controllers = Batteries;
        component[component.length-1].Buttons = (Floors * 5);
        component[component.length-1].Doors = Floors * Columns;
        component[component.length-1].Displays = Elevators * Columns;
        orderId++;
    }

    //   function addOrder(uint _shafts,uint _controllers,uint _buttons,uint _doors,uint _displays) public returns(uint)
    // {   
    //     component.length++;
    //     component[component.length-1].ElevatorsShafts = _shafts;
    //     component[component.length-1].Controllers = _controllers;
    //     component[component.length-1].Buttons = _buttons;
    //     component[component.length-1].Doors = _doors;
    //     component[component.length-1].Displays = _displays;
    //     return component.length;
    // }

      function componentCount() public view returns(uint){
        return component.length;
    }


     function getId(uint Id) public view returns(uint){
        return component[Id].Id;
    }

    function getElevatorsShafts(uint Id) public view returns(uint){
        return component[Id].ElevatorsShafts;
    }

    function getControllers(uint Id) public view returns(uint){
        return component[Id].Controllers;
    }
    function getButtons(uint Id) public view returns(uint){
        return component[Id].Buttons;
    }
    function getDoors(uint Id) public view returns(uint){
        return component[Id].Doors;
    }
    function getDisplays(uint Id) public view returns(uint){
        return component[Id].Displays;
    }

     function getComponent() public view returns(Components[] memory)
    {
        return component;
    }  
}