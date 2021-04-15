const MaterialProvider = artifacts.require("MaterialProvider");

contract("MaterialProvider", (accounts) => {
    let material;
    before(async () => {
        material = await MaterialProvider.deployed();
    });
    describe("calculMaterial", async () => {
        before("using accounts[0]", async () => {
            await material.calculMaterial(8, 1, 2, 6, 2);
            
          });
        it("calcul material base on imput", async () => {
            const materials = await material.calculMaterial(8, 1, 2, 6, 2);
            console.log(materials);
            assert(materials);
          });
    })
    describe("retrive", async () => {
        before("using accounts[0]", async () => {
            await material.retrive();
            
          });
        it("retrive material calcul", async () => {
            const materials = await material.retrive();
            console.log("aluminium bar " + materials.aluminum_bars);
            assert.equal(materials.aluminum_bars, 12 ,"number of aluminium bar");
          });
    })
});