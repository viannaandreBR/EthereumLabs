---
id: doc5.123
title: LAB#5 - Real Projects with Ethereum  / 123. More on Struct Initialization 
sidebar_label: 123. More on Struct Initialization
---

## More on Struct Initialization



---
## Refactoring Campaign-Contract.sol with Error


![alt text](.\assets\Imagem123_1.jpg)

---
## Refactoring Campaign-Contract.sol without Error


![alt text](.\assets\Imagem123_2.jpg)


~~~~


pragma solidity ^0.4.17;


contract Campaign {
    struct Request {
        string description;
        uint value;
        address recipient;
        bool complete;
        uint approvalCount;
        mapping(address => bool) approvals;
    }
    
    Request[] public requests;
        
    address public manager;
    uint public minimumContribution;
    mapping(address => bool) public approvers;
    
    
    modifier restricted() {
            require(msg.sender == manager );
            _;
        
    }
    
    function Campaign(uint minimum) public {
        manager = msg.sender;
        minimumContribution = minimum;
    
    }

    function contribute() public payable{
        require(msg.value > minimumContribution);
    
        approvers[msg.sender] = true;

    
    }
    
    function createRequest(string description, uint value, address recipient) public restricted {
        Request  memory newRequest = Request({
                description: description,
                value: value,
                recipient: recipient,
                complete: false,
                approvalCount: 0
            });
            

            
            requests.push(newRequest);
        
    }
    
}


~~~~

---
