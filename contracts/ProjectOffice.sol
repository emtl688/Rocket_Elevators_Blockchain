pragma solidity ^0.5.0;
pragma experimental ABIEncoderV2;

contract ProjectOffice {

    Components[] public component;
    address public customer;

    struct Components{
    uint ElevatorsShafts; // 8 = 2 columns * 4 elevators
    uint Controllers; // 1 = 1 per battery
    uint Buttons; //  25 = 5floors * 5 buttons
    uint Doors; // 10 =1 per floor * columns
    uint Displays; // 8 = 1 per elevator 
    }

    constructor() public {
        customer = msg.sender;
    }

    function set(uint Batteries, uint Columns, uint Elevators, uint Floors) public
    {       
        Components memory comp;
        comp.ElevatorsShafts = Elevators * Columns;
        comp.Controllers = Batteries;
        comp.Buttons = (Floors * 5);
        comp.Doors = Floors * Columns;
        comp.Displays = Elevators * Columns;
        component.push(comp);
    }

     function componentCount() public view returns(uint){
        return component.length;
    }

    function getElevatorsShafts(uint index) public view returns(uint){
        return component[index].ElevatorsShafts;
    }

    function getControllers(uint index) public view returns(uint){
        return component[index].Controllers;
    }
    function getButtons(uint index) public view returns(uint){
        return component[index].Buttons;
    }
    function getDoors(uint index) public view returns(uint){
        return component[index].Doors;
    }
    function getDisplays(uint index) public view returns(uint){
        return component[index].Displays;
    }

     function get() public view returns(Components[] memory)
    {
        return component;
    }  
}