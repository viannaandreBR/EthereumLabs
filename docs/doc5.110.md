---
id: doc5.110
title: LAB#5 - Real Projects with Ethereum  / 110. The Reques Struct 
sidebar_label: 110. The Reques Struct
---

## The Reques Struct

---

## Campaing Contract


![alt text](.\assets\Imagem106_2.jpg)

---
## Reference Types

![alt text](.\assets\Imagem110_1.jpg)


---

## Request Struct

![alt text](.\assets\Imagem110_2.jpg)


![alt text](.\assets\Imagem110_4.jpg)

---

## Voting Mechanism

![alt text](.\assets\Imagem110_3.jpg)


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
    
    address public manager;
    uint public minimumContribution;
    address[] public approvers;
    
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


![alt text](.\assets\Imagem110_5.jpg)
