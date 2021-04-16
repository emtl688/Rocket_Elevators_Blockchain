pragma solidity ^0.5.0;
pragma experimental ABIEncoderV2;

contract QualityControl {
    Quality qual;
    struct Quality {
        bytes32 doorTest;
        bytes32 cableTest;
        bytes32 brakeTest;
        bytes32 batteryPermit;
        bytes32 certificate;
    }

    //Calcul material base on input component
    function qualCheck(
        bytes32 doorTest,
        bytes32 cableTest,
        bytes32 brakeTest,
        bytes32 batteryPermit,
        bytes32 certificate
    ) public returns (Quality memory) {
        qual.doorTest = doorTest;
        qual.cableTest = cableTest;
        qual.brakeTest = brakeTest;
        qual.batteryPermit = batteryPermit;
        qual.certificate = certificate;
        return qual;
    }

    //Retrieving the value
    function retrive() public view returns (Quality memory) {
        return qual;
    }
}
