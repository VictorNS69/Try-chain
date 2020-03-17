const contract = artifacts.require("./HelloWorld.sol")

module.exports = function(deployer) {
	deployer.deploy(contract)
}
