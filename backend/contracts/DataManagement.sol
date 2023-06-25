pragma solidity ^0.8.13;

contract DataManagement {
    mapping(address => string) public data;

    function storeData(string memory _data) public {
        data[msg.sender] = _data;
    }

    function retrieveData(address _address) public view returns(string memory) {
        return data[_address];
    }
}
