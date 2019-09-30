---
id: doc5.121
title: LAB#5 - Real Projects with Ethereum  / 121. Refactoring to Mappings 
sidebar_label: 121. Refactoring to Mappings
---

## Refactoring to Mappings


![alt text](.\assets\Imagem121_1.png)

---

## Refactoring to Mappings


![alt text](.\assets\Imagem121_1.jpg)


![alt text](.\assets\Imagem121_2.jpg)

---


## Refactoring Campaign-Contract.sol 


![alt text](.\assets\Imagem121_3.jpg)

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
            require(approvers[msg.sender]);
            Request  memory newRequest = Request({
                description: description,
                value: value,
                recipient: recipient,
                complete: false
            });
            

            
            requests.push(newRequest);
        
    }
    
}

~~~

