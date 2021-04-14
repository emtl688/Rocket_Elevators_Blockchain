//SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.8.0;
pragma experimental ABIEncoderV2;

import './SolutionManufacturing.sol';

contract QualityControl {
// peermit object
    struct Permit{
        uint256 identifier;
        uint256 startDate;
        uint256 endDate;
        //uint datetime // 1512220800
    }
// product object
    struct Product{
        string name;
        uint64 quantity;
        bool verified;
    }

    struct Verification{
        Permit certificate;
        Permit perm;
        Product[] mList;
    }
    //Product[] mList;
    Verification v;
    uint64 index = 0;

// filling the 
    function createPermit() private view returns(Permit memory certificate){
        Permit memory p;
        p.identifier = block.timestamp/2;
        p.startdate = block.timestamp;
        p.enddate = block.timestamp + (10* 365 days);
        return p;
    }

    function VerificationStamp(address a) public{
        v.certificate = createPermit();
        v.perm = createPermit();
        SolutionManufacturing.Product[] memory products = SolutionManufacturing(a).viewOrder();
        for(index;index<products.length;index++){
            Product memory p;
            p.verified = true;
            p.name = products[index].Name;
            p.quantity = products[index].Quantity;
            v.mList.push(p);
        }
    }

    function getVerification() public view returns(Verification memory){
        return v;
    }



}