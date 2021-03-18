pragma solidity 0.4.25;

contract HelloWorld {

    string public hello;
    uint256[] private array;
    
    constructor() public  {
        hello = "Hello World!";
    }
    
    event pushEvent(address caller, string functionName,uint256 element, uint256 timestamp);
    
    function push(uint256 element) public  {
        emit pushEvent(msg.sender, "push", element, block.timestamp);
        array.push(element);
    }
    
    function getArray() public view returns (uint256[]){
        return array;
    }

}
