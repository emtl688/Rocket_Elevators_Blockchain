pragma solidity ^0.5.0;

contract Manufacturing {

    struct Door {
        address manufacturerAddress;
        uint nbOfAluminumBars;
        uint nbOfStainlessSheets;
        uint nbOfOtherHardware;
        uint nbOfBumpers;
        uint nbOfLightBulbs;
        uint nbOfLeds;
    }
    
    struct Controller {
        address manufacturerAddress;
        uint nbOfAluminumBars;
        uint nbOfStainlessSheets;
        uint nbOfOtherHardware;
        uint nbOfBumpers;
        uint nbOfLightBulbs;
        uint nbOfLeds;
    }
    
    struct ControlPanel {
        address manufacturerAddress;
        uint nbOfAluminumBars;
        uint nbOfStainlessSheets;
        uint nbOfOtherHardware;
        uint nbOfBumpers;
        uint nbOfLightBulbs;
        uint nbOfLeds;
    }
    
    struct CallSign {
        address manufacturerAddress;
        uint nbOfAluminumBars;
        uint nbOfStainlessSheets;
        uint nbOfOtherHardware;
        uint nbOfBumpers;
        uint nbOfLightBulbs;
        uint nbOfLeds;
    }
    Door[] public doors;
    Controller[] public controllers;
    ControlPanel[] public controlPanels;
    CallSign[] public callSigns;

    function addDoor(uint nbOfAluminumBars, uint nbOfStainlessSheets, uint nbOfOtherHardware, uint nbOfBumpers, uint nbOfLightBulbs, uint nbOfLeds) public {
        doors.length++;
        doors[doors.length-1].manufacturerAddress = msg.sender;
        doors[doors.length-1].nbOfAluminumBars = nbOfAluminumBars;
        doors[doors.length-1].nbOfStainlessSheets = nbOfStainlessSheets;
        doors[doors.length-1].nbOfOtherHardware = nbOfOtherHardware;
        doors[doors.length-1].nbOfBumpers = nbOfBumpers;
        doors[doors.length-1].nbOfLightBulbs = nbOfLightBulbs;
        doors[doors.length-1].nbOfLeds = nbOfLeds;
    }
        function addController(uint nbOfAluminumBars, uint nbOfStainlessSheets, uint nbOfOtherHardware, uint nbOfBumpers, uint nbOfLightBulbs, uint nbOfLeds) public {
        controllers.length++;
        controllers[controllers.length-1].manufacturerAddress = msg.sender;
        controllers[controllers.length-1].nbOfAluminumBars = nbOfAluminumBars;
        controllers[controllers.length-1].nbOfStainlessSheets = nbOfStainlessSheets;
        controllers[controllers.length-1].nbOfOtherHardware = nbOfOtherHardware;
        controllers[controllers.length-1].nbOfBumpers = nbOfBumpers;
        controllers[controllers.length-1].nbOfLightBulbs = nbOfLightBulbs;
        controllers[controllers.length-1].nbOfLeds = nbOfLeds;
    }
    
    function addControlPanel(uint nbOfAluminumBars, uint nbOfStainlessSheets, uint nbOfOtherHardware, uint nbOfBumpers, uint nbOfLightBulbs, uint nbOfLeds) public {
        controlPanels.length++;
        controlPanels[controlPanels.length-1].manufacturerAddress = msg.sender;
        controlPanels[controlPanels.length-1].nbOfAluminumBars = nbOfAluminumBars;
        controlPanels[controlPanels.length-1].nbOfStainlessSheets = nbOfStainlessSheets;
        controlPanels[controlPanels.length-1].nbOfOtherHardware = nbOfOtherHardware;
        controlPanels[controlPanels.length-1].nbOfBumpers = nbOfBumpers;
        controlPanels[controlPanels.length-1].nbOfLightBulbs = nbOfLightBulbs;
        controlPanels[controlPanels.length-1].nbOfLeds = nbOfLeds;
    }
    
    function addCallSign(uint nbOfAluminumBars, uint nbOfStainlessSheets, uint nbOfOtherHardware, uint nbOfBumpers, uint nbOfLightBulbs, uint nbOfLeds) public {
        callSigns.length++;
        callSigns[callSigns.length-1].manufacturerAddress = msg.sender;
        callSigns[callSigns.length-1].nbOfAluminumBars = nbOfAluminumBars;
        callSigns[callSigns.length-1].nbOfStainlessSheets = nbOfStainlessSheets;
        callSigns[callSigns.length-1].nbOfOtherHardware = nbOfOtherHardware;
        callSigns[callSigns.length-1].nbOfBumpers = nbOfBumpers;
        callSigns[callSigns.length-1].nbOfLightBulbs = nbOfLightBulbs;
        callSigns[callSigns.length-1].nbOfLeds = nbOfLeds;
    }

    function getDoor(uint index) public view returns (uint, uint, uint, uint, uint, uint) {
        return (doors[index].nbOfAluminumBars, doors[index].nbOfStainlessSheets, doors[index].nbOfOtherHardware,
        doors[index].nbOfBumpers, doors[index].nbOfLightBulbs, doors[index].nbOfLeds);
    }
    
    function getController(uint index) public view returns (uint, uint, uint, uint, uint, uint) {
        return (controllers[index].nbOfAluminumBars, controllers[index].nbOfStainlessSheets, controllers[index].nbOfOtherHardware,
        controllers[index].nbOfBumpers, controllers[index].nbOfLightBulbs, controllers[index].nbOfLeds);
    }
    
    function getCallSign(uint index) public view returns (uint, uint, uint, uint, uint, uint) {
        return (callSigns[index].nbOfAluminumBars, callSigns[index].nbOfStainlessSheets, callSigns[index].nbOfOtherHardware,
        callSigns[index].nbOfBumpers, callSigns[index].nbOfLightBulbs, callSigns[index].nbOfLeds);
    }
}