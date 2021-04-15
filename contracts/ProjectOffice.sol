pragma solidity ^0.5.0;

contract ProjectOffice {
    Components[] public component;
    address public customer;

    struct Components {
        uint256 Id;
        uint256 ElevatorsShafts; // 8 = 2 columns * 4 elevators
        uint256 Controllers; // 1 = 1 per battery
        uint256 Buttons; //  25 = 5floors * 5 buttons
        uint256 Doors; // 10 =1 per floor * columns
        uint256 Displays; // 8 = 1 per elevator
    }

    constructor() public {
        customer = msg.sender;
    }

    uint256 orderId = 1;

    function set(
        uint256 Batteries,
        uint256 Columns,
        uint256 Elevators,
        uint256 Floors
    ) public {
        component.length++;
        component[component.length - 1].Id = orderId;
        component[component.length - 1].ElevatorsShafts = Elevators * Columns;
        component[component.length - 1].Controllers = Batteries;
        component[component.length - 1].Buttons = (Floors * 5);
        component[component.length - 1].Doors = Floors * Columns;
        component[component.length - 1].Displays = Elevators * Columns;
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

    function componentCount() public view returns (uint256) {
        return component.length;
    }

    function getId(uint256 Id) public view returns (uint256) {
        return component[Id].Id;
    }

    function getElevatorsShafts(uint256 Id) public view returns (uint256) {
        return component[Id].ElevatorsShafts;
    }

    function getControllers(uint256 Id) public view returns (uint256) {
        return component[Id].Controllers;
    }

    function getButtons(uint256 Id) public view returns (uint256) {
        return component[Id].Buttons;
    }

    function getDoors(uint256 Id) public view returns (uint256) {
        return component[Id].Doors;
    }

    function getDisplays(uint256 Id) public view returns (uint256) {
        return component[Id].Displays;
    }

    function getComponent() public view returns (Components[] memory) {
        return component;
    }
}
