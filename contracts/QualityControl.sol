pragma solidity ^0.5.0;
//pragma experimental ABIEncoderV2;

contract QualityControl {
    address public customer;
 
    struct Test {
        bool door;
        bool cable;
        bool brake;
        string battery;
        string column;
        
    }
    
    
   Test newTest = Test(true, true, true, "cccccc-55555-5555555-cc4c4c", "cccccc-55555-5555555-cc4c4c");
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
        newTest.column = permitNumber;
    }
    
    
    function addCertificate(string memory certificateNumber) public {
        newTest.battery = certificateNumber;
    }
    
    function getTest() public returns (bool) {
            //Test memory p;
            newTest.brake = true;
            newTest.cable = true;
            newTest.door = true;
            newTest.column = "ghjkl";
            newTest.battery = "ghjkl";
          //print("a was submit is:", newTest.door);

//          validateBrake(true);, bool, bool, string memory, string memory
 //         validateDoor(true);(newTest.brake, newTest.cable, newTest.door, newTest.column, newTest.battery)
  //        validateCable(true);
   //       addPermit('cccccc-55555-5555555-cc4c4c4');
    //      addCertificate('cccccc-55555-5555555-cc4c4c4');
        
        return true;           
    }
}
/// je charge mon phone##############################################