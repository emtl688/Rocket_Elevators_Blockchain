pragma solidity ^0.5.0;

contract QualityControl {
 
    struct Test {
        bool door;
        bool cable;
        bool brake;
        string perm;
        string certificate;
    }
    
    Test newTest = Test(false, false, false, "", "");
   
    function validateDoor(bool isPassed) public {
        newTest.door = isPassed;
    }
    
    function validateCable(bool isPassed) public {
        newTest.cable = isPassed;
    }
    
    function validateBrake(bool isPassed) public {
        newTest.brake = isPassed;
    }
    
    function addPermit(string memory permitNumber) public {
        newTest.perm = permitNumber;
    }
    
    function addCertificate(string memory certificateNumber) public {
        newTest.certificate = certificateNumber;
    }
    
    function getTest() public view returns (bool, bool, bool, string memory, string memory) {
        return (newTest.door, newTest.cable, newTest.brake, newTest.perm, newTest.certificate);           
    }
}