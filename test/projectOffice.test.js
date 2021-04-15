const { assertType } = require("graphql");

const ProjectOffice = artifacts.require("ProjectOffice")

contract('ProjectOffice', () => {
    before( async () => {
        projectOffice = await ProjectOffice.deployed();
        await projectOffice.set(1,2,4,5);// input of the user
    });

    it ("should deploy project office properly", async() =>{
        console.log("Address :" + projectOffice.address);
        assert(projectOffice.address !== '');
    });

    it("should set Shafts, Controllers, Buttons, Doors, Displays", async () =>{
        const result = await projectOffice.getComponent(0); //get the results
        const shafts = await result[1];
        const controllers = await result[2];
        const buttons = await result[3];
        const doors = await result[4];
        const displays = await result[5];
        console.log("Elevators : " + shafts + ", Controllers : " + controllers + ", Buttons : " +buttons + ", Doors : " + doors + ", Displays : " + displays);

        assert(result !== '')
    });

    it (" should have elements in Components array", async() =>{
        const length = await projectOffice.componentCount();
        console.log(length)
        assert(length != 0)
    });
})