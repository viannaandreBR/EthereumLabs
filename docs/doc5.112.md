---
id: doc5.112
title: LAB#5 - Real Projects with Ethereum  / 112. Creating Struct Instances 
sidebar_label: 112. Creating Struct Instances
---


## Creating Struct Instances

---

## Campaing Contract


![alt text](.\assets\Imagem106_2.jpg)


---


## Update Campaign-Contract.sol


~~~
pragma solidity ^0.4.17;


contract Campaign {
    struct Request {
        string description;
        uint value;
        address recipient;
        bool complete;
    }
    
    Request[] public requests;
        
    address public manager;
    uint public minimumContribution;
    address[] public approvers;
    
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
    
        approvers.push(msg.sender);
    
    }
    
    function createRequest(string description, uint value, address recipient) public restricted {
            Request newRequest = Request({
                description: description,
                value: value,
                recipient: recipient,
                complete: false
            });
            
            requests.push(newRequest);
        
    }
    
}


~~~