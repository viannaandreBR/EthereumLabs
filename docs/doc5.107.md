---
id: doc5.107
title: LAB#5 - Real Projects with Ethereum  / 107. Campaign Constructor 
sidebar_label: 107. Campaign Constructor
---

## Campaign Constructor

---

## Structure Campaign Contract

![alt text](.\assets\Imagem107_1.jpg)


---

## Campaign-Contract.sol


![alt text](.\assets\Imagem107_2.jpg)


~~~
pragma solidity ^0.4.17;



contract Campaign {
    address public manager;
    uint public minimumContribution;
    
function Campaign(uint minimum ) public {
    manager = msg.sender;
    minimumContribution = minimum;
    
}
    
}

~~~

---
 
## EtherScan Contract


> https://rinkeby.etherscan.io/tx/0x16fbd584a8d53a91e774b832c4771d9d4e94ce7397b92b9aacd9fa76b511bc95



![alt text](.\assets\Imagem107_3.jpg)
