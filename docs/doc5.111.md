---
id: doc5.111
title: LAB#5 - Real Projects with Ethereum  / 111. More on Functions Modifiers 
sidebar_label: 111. More on Functions Modifiers
---

## More on Functions Modifiers


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
    
}

~~~



---


![alt text](.\assets\Imagem104_1.jpg)


![alt text](.\assets\Imagem103_2.jpg)
