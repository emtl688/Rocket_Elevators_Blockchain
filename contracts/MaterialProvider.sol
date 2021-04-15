pragma solidity ^0.5.0;
pragma experimental ABIEncoderV2;

contract MaterialProvider {
    Material mat;
    struct Material {
        uint64 aluminum_bars;
        uint64 stainless_steel_sheets;
        uint64 springs_and_hardware;
        uint64 bumper_rubber_bands;
        uint64 interior_light_bulbs;
        uint64 display_LEDs;
    }

    //Calcul material base on input component
    function calculMaterial(
        uint64 elevator_shaft,
        uint64 controller,
        uint64 door,
        uint64 button,
        uint64 display
    ) public returns (Material memory) {
        mat.aluminum_bars = (elevator_shaft * 1) + (door * 2);
        mat.stainless_steel_sheets = (door * 4) + (controller * 1);
        mat.springs_and_hardware = (elevator_shaft * 2);
        mat.bumper_rubber_bands = (door * 2);
        mat.interior_light_bulbs = (elevator_shaft * 2) + button;
        mat.display_LEDs = (elevator_shaft * 2) + display;
        return mat;
    }

    //Retrieving the value
    function retrive() public view returns (Material memory) {
        return mat;
    }
}
