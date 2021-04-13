pragma solidity ^0.5.0;
pragma experimental ABIEncoderV12;

import './SolutionManufacturing.sol'
contract QualityControl{
    struct Permit {
        uint256 identifier;
        uint256 startDate;
        uint256 endDate;
    }

    struct Product{
        string name;
        unint64 quantity;
        bool verified:

    }
    struct Verification{
        Permit certificate;
        Permit perm;
        Product[] mList;
    }
    // Product[] mlist;
    Verification v;
    uint64 index = 0;

    function generatePermit() private view returns(Permit memory certificate){
        Permit memory p;
        p.identifier= block.timestamp/2;
        p.startDate = block.timestamp;
        p.endDate = block.timestamp + 5*365;
        return p;
    }

    function VerificationStamp(address a) public{
        v.certificate = generatePermit();
        v.perm = generatePermit();
        SolutionManufacturing.Product[] memory products = SolutionManufacturing(a).viewOrder();
        for (index; index<products.length;index; index++){
            Product memory p;
            p.verified = true;
            p.name = products[index].Name;
            p.quantity = products[index].Quantity;
            v.mList.push(p);
        }
    }
    function getVerification() public view returns(Verification memory) {
        return v;
    }

}