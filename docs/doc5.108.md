---
id: doc5.108
title: LAB#5 - Real Projects with Ethereum / 108. Contributing to the Campaign 
sidebar_label: 108. Contributing to the Campaign
---

## Contributing to the Campaign


## Structure Campaign Contract

![alt text](.\assets\Imagem107_1.jpg)

---

## function Contriute()

![alt text](.\assets\Imagem108_2.jpg)


---

## Update Campaign-Contract.sol

~~~

pragma solidity ^0.4.17;



contract Campaign {
    address public manager;
    uint public minimumContribution;
    address[] public approvers;
    
function Campaign(uint minimum ) public {
    manager = msg.sender;
    minimumContribution = minimum;
    
}

function contribute() public payable{
    require(msg.value > minimumContribution);
    
    approvers.push(msg.sender);
    
}
    
}


~~~
