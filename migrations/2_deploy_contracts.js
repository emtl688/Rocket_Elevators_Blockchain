var ProjectOffice = artifacts.require("ProjectOffice");
var MaterialProvider = artifacts.require("MaterialProvider");
var SolutionManufacturing = artifacts.require("SolutionManufacturing");
var QualityControl = artifacts.require("QualityControl");

module.exports = function(deployer) {
  deployer.deploy(ProjectOffice);
  deployer.deploy(MaterialProvider);
  deployer.deploy(SolutionManufacturing);
  deployer.deploy(QualityControl);
};