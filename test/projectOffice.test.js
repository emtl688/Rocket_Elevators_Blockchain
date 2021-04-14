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
        const result = await projectOffice.get(); //get the results
        console.log("Result :" + result);

        assert(result !== '')
    });

    it ("should get the number of shafts needed", async () =>{
        const shafts = await projectOffice.getElevatorsShafts(0);
        console.log('Shafts needed :' + shafts);
        assert(shafts == 8)
    })

    it ("should get the number of controllers needed", async () =>{
        const controllers = await projectOffice.getControllers(0);
        console.log('Controllers needed :' + controllers);
        assert(controllers == 1)
    })

    it ("should get the number of buttons needed", async () =>{
        const buttons = await projectOffice.getButtons(0);
        console.log('Buttons needed :' + buttons);
        assert(buttons == 25)
    })

    it ("should get the number of doors needed", async () =>{
        const doors = await projectOffice.getDoors(0);
        console.log('Doors needed :' + doors);
        assert(doors == 10)
    })

    it ("should get the number of displays needed", async () =>{
        const displays = await projectOffice.getDisplays(0);
        console.log('Displays needed :' + displays);
        assert(displays == 8)
    })

    it (" should have elements in Components array", async() =>{
        const length = await projectOffice.componentCount();
        console.log(length)
        assert(length != 0)
    });
})