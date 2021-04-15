pragma solidity ^0.5.0;

contract SolutionManufacturing {
    struct Door {
        uint256 id;
        address manufacturerAddress;
        uint256 nbOfAluminumBars;
        uint256 nbOfStainlessSheets;
        uint256 nbOfOtherHardware;
        uint256 nbOfBumpers;
        uint256 nbOfLightBulbs;
        uint256 nbOfLeds;
    }

    struct Controller {
        uint256 id;
        address manufacturerAddress;
        uint256 nbOfAluminumBars;
        uint256 nbOfStainlessSheets;
        uint256 nbOfOtherHardware;
        uint256 nbOfBumpers;
        uint256 nbOfLightBulbs;
        uint256 nbOfLeds;
    }

    struct ControlPanel {
        uint256 id;
        address manufacturerAddress;
        uint256 nbOfAluminumBars;
        uint256 nbOfStainlessSheets;
        uint256 nbOfOtherHardware;
        uint256 nbOfBumpers;
        uint256 nbOfLightBulbs;
        uint256 nbOfLeds;
    }

    struct CallSign {
        uint256 id;
        address manufacturerAddress;
        uint256 nbOfAluminumBars;
        uint256 nbOfStainlessSheets;
        uint256 nbOfOtherHardware;
        uint256 nbOfBumpers;
        uint256 nbOfLightBulbs;
        uint256 nbOfLeds;
    }
    Door[] public doors;
    Controller[] public controllers;
    ControlPanel[] public controlPanels;
    CallSign[] public callSigns;

    uint256 nextDoorId = 1;
    uint256 nextControllerId = 1;
    uint256 nextControlPanelId = 1;
    uint256 nextCallSignId = 1;

    function addDoor(
        uint256 nbOfAluminumBars,
        uint256 nbOfStainlessSheets,
        uint256 nbOfOtherHardware,
        uint256 nbOfBumpers,
        uint256 nbOfLightBulbs,
        uint256 nbOfLeds
    ) public {
        doors.length++;
        doors[doors.length - 1].id = nextDoorId;
        doors[doors.length - 1].manufacturerAddress = msg.sender;
        doors[doors.length - 1].nbOfAluminumBars = nbOfAluminumBars;
        doors[doors.length - 1].nbOfStainlessSheets = nbOfStainlessSheets;
        doors[doors.length - 1].nbOfOtherHardware = nbOfOtherHardware;
        doors[doors.length - 1].nbOfBumpers = nbOfBumpers;
        doors[doors.length - 1].nbOfLightBulbs = nbOfLightBulbs;
        doors[doors.length - 1].nbOfLeds = nbOfLeds;
        nextDoorId++;
    }

    function addController(
        uint256 nbOfAluminumBars,
        uint256 nbOfStainlessSheets,
        uint256 nbOfOtherHardware,
        uint256 nbOfBumpers,
        uint256 nbOfLightBulbs,
        uint256 nbOfLeds
    ) public {
        controllers.length++;
        controllers[controllers.length - 1].id = nextControllerId;
        controllers[controllers.length - 1].manufacturerAddress = msg.sender;
        controllers[controllers.length - 1].nbOfAluminumBars = nbOfAluminumBars;
        controllers[controllers.length - 1]
            .nbOfStainlessSheets = nbOfStainlessSheets;
        controllers[controllers.length - 1]
            .nbOfOtherHardware = nbOfOtherHardware;
        controllers[controllers.length - 1].nbOfBumpers = nbOfBumpers;
        controllers[controllers.length - 1].nbOfLightBulbs = nbOfLightBulbs;
        controllers[controllers.length - 1].nbOfLeds = nbOfLeds;
        nextControllerId++;
    }

    function addControlPanel(
        uint256 nbOfAluminumBars,
        uint256 nbOfStainlessSheets,
        uint256 nbOfOtherHardware,
        uint256 nbOfBumpers,
        uint256 nbOfLightBulbs,
        uint256 nbOfLeds
    ) public {
        controlPanels.length++;
        controlPanels[controlPanels.length - 1].id = nextControlPanelId;
        controlPanels[controlPanels.length - 1].manufacturerAddress = msg
            .sender;
        controlPanels[controlPanels.length - 1]
            .nbOfAluminumBars = nbOfAluminumBars;
        controlPanels[controlPanels.length - 1]
            .nbOfStainlessSheets = nbOfStainlessSheets;
        controlPanels[controlPanels.length - 1]
            .nbOfOtherHardware = nbOfOtherHardware;
        controlPanels[controlPanels.length - 1].nbOfBumpers = nbOfBumpers;
        controlPanels[controlPanels.length - 1].nbOfLightBulbs = nbOfLightBulbs;
        controlPanels[controlPanels.length - 1].nbOfLeds = nbOfLeds;
        nextControlPanelId++;
    }

    function addCallSign(
        uint256 nbOfAluminumBars,
        uint256 nbOfStainlessSheets,
        uint256 nbOfOtherHardware,
        uint256 nbOfBumpers,
        uint256 nbOfLightBulbs,
        uint256 nbOfLeds
    ) public {
        callSigns.length++;
        callSigns[callSigns.length - 1].id = nextCallSignId;
        callSigns[callSigns.length - 1].manufacturerAddress = msg.sender;
        callSigns[callSigns.length - 1].nbOfAluminumBars = nbOfAluminumBars;
        callSigns[callSigns.length - 1]
            .nbOfStainlessSheets = nbOfStainlessSheets;
        callSigns[callSigns.length - 1].nbOfOtherHardware = nbOfOtherHardware;
        callSigns[callSigns.length - 1].nbOfBumpers = nbOfBumpers;
        callSigns[callSigns.length - 1].nbOfLightBulbs = nbOfLightBulbs;
        callSigns[callSigns.length - 1].nbOfLeds = nbOfLeds;
        nextCallSignId++;
    }

    function getDoor(uint256 id)
        public
        view
        returns (
            uint256,
            uint256,
            uint256,
            uint256,
            uint256,
            uint256
        )
    {
        for (uint256 i = 0; i < doors.length; i++) {
            if (doors[i].id == id) {
                return (
                    doors[i].nbOfAluminumBars,
                    doors[i].nbOfStainlessSheets,
                    doors[i].nbOfOtherHardware,
                    doors[i].nbOfBumpers,
                    doors[i].nbOfLightBulbs,
                    doors[i].nbOfLeds
                );
            }
        }
    }

    function getController(uint256 id)
        public
        view
        returns (
            uint256,
            uint256,
            uint256,
            uint256,
            uint256,
            uint256
        )
    {
        for (uint256 i = 0; i < controllers.length; i++) {
            if (controllers[i].id == id) {
                return (
                    controllers[i].nbOfAluminumBars,
                    controllers[i].nbOfStainlessSheets,
                    controllers[i].nbOfOtherHardware,
                    controllers[i].nbOfBumpers,
                    controllers[i].nbOfLightBulbs,
                    controllers[i].nbOfLeds
                );
            }
        }
    }

    function getControlPanel(uint256 id)
        public
        view
        returns (
            uint256,
            uint256,
            uint256,
            uint256,
            uint256,
            uint256
        )
    {
        for (uint256 i = 0; i < controlPanels.length; i++) {
            if (controlPanels[i].id == id) {
                return (
                    controlPanels[i].nbOfAluminumBars,
                    controlPanels[i].nbOfStainlessSheets,
                    controlPanels[i].nbOfOtherHardware,
                    controlPanels[i].nbOfBumpers,
                    controlPanels[i].nbOfLightBulbs,
                    controlPanels[i].nbOfLeds
                );
            }
        }
    }

    function getCallSign(uint256 id)
        public
        view
        returns (
            uint256,
            uint256,
            uint256,
            uint256,
            uint256,
            uint256
        )
    {
        for (uint256 i = 0; i < callSigns.length; i++) {
            if (callSigns[i].id == id) {
                return (
                    callSigns[i].nbOfAluminumBars,
                    callSigns[i].nbOfStainlessSheets,
                    callSigns[i].nbOfOtherHardware,
                    callSigns[i].nbOfBumpers,
                    callSigns[i].nbOfLightBulbs,
                    callSigns[i].nbOfLeds
                );
            }
        }
    }
}
