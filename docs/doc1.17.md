---
id: doc1.17
title: LAB#1 - What is Ethereum ? / 17. Our First Contract
sidebar_label: 17. Our First Contract
---

## Remix

>Remix is a suite of tools to interact with the Ethereum blockchain in order to debug transactions, stored in this Git repository. A Remix transaction Web debugger is available here, and its source code is part of this repository.


[![alt text](.\assets\Imagem17_1.png)](https://remix.ethereum.org/)


---


## Solidity Program

~~~
pragma solidity ^0.4.17;

contract Inbox {
    string public message;


function Inbox(string initialMessage) public {
    message = initialMessage;
}

function setMessage(string newMessage) public {
    message = newMessage;
}

function getMessage() public view returns(string) {
    return message;
}
}
~~~

---

## ABI - Remix IDE

![alt text](.\assets\Imagem17_2.jpg)

