---
id: doc5.122
title: LAB#5 - Real Projects with Ethereum  / 122. Refactoring Request Structs 
sidebar_label: 122. Refactoring Request Structs
---

## Refactoring Request Structs

![alt text](.\assets\Imagem121_1.png)

---

![alt text](.\assets\Imagem122_1.jpg)


![alt text](.\assets\Imagem122_2.jpg)


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
                complete: false
            });
            

            
            requests.push(newRequest);
        
    }
    
}


~~~~
