pragma solidity ^0.5.0;
pragma experimental ABIEncoderV2;



contract QualityControl {
 

    struct test{
        bool Door;
        bool Cable;
        bool  Brake;
        bool perm;
        bool Certificate;

    }
   
    
    function validateUnit(bool cabletest, bool braketest,bool doortest, bool perm, bool certificate) public returns (bool){
        if (doortest == true && braketest == true && cabletest == true && perm == true  && certificate == true  ){
            return true;
        }
        else {
            return false;
        }
    }


}