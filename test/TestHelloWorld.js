const Contract = artifacts.require("HelloWorld");
const truffleAssert = require("truffle-assertions");

contract("Test HelloWorld.sol", async (accounts) => {
 const CLASS_NAME = "HelloWorld"

 let deployerAccount = accounts[0];
 console.log("Caller account:", deployerAccount);
 it(`[${CLASS_NAME}] Test 1: Check push function`, async () => {
   let contract = await Contract.deployed();
   let result = await contract.push(2,{ from: deployerAccount });
   truffleAssert.eventEmitted(result, "pushEvent", (functionEvent) => {
     return functionEvent.caller == deployerAccount && functionEvent.functionName == "push" && functionEvent.element == 2;
   });
 });

 it(`[${CLASS_NAME}] Test 2: Check push function`, async () => {
   let contract = await Contract.deployed();
   let result = await contract.push(8,{ from: deployerAccount });
   truffleAssert.eventEmitted(result, "pushEvent", (functionEvent) => {
     return functionEvent.caller == deployerAccount && functionEvent.functionName == "push" && functionEvent.element == 8;
   });
 });

 it(`[${CLASS_NAME}] Test 3: Check getArray function`, async () => {
   let contract = await Contract.deployed();
   let result = await contract.getArray({ from: deployerAccount });
   assert.equal( 2,result.length);
   assert.equal( 2,result[0]);
   assert.equal( 8,result[1]);
 });

xit(`[${CLASS_NAME}] Test 4: Expected failure`, async () => {
   let contract = await Contract.deployed();
   let result = await contract.getArray({ from: deployerAccount });
   assert.equal( 3,result.length);
 });
});
