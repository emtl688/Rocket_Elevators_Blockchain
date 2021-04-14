const { assertType } = require("graphql");

const ProjectOffice = artifacts.require("ProjectOffice")

contract('ProjectOffice', () => {
    before( async () => {
        projectOffice = await ProjectOffice.deployed();
    });

    it ("should deploy project office properly", async() =>{
        console.log("Address :" + projectOffice.address);
        assert(projectOffice.address !== '');
    });

    it("should set Shafts, Controllers, Buttons, Doors, Displays", async () =>{
        await projectOffice.set(1,2,4,5); // input of the user
        const result = await projectOffice.get(); //get the results

        console.log("Result " + result);

        assert(result !== '')
    });

    it (" should have elements in Components array", async() =>{
        const length = await projectOffice.length();
        console.log(length)
        assert(length != 1)
    });
})