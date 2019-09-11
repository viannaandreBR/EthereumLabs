---
id: doc1.21
title: LAB#1 - What is Ethereum ? / Testing with REmix
sidebar_label: Testing with REmix
---

##  Remix Contract

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

## Remix IDE Process 

![alt text](.\assets\Imagem21_1.jpg)


---

## Remix Interface

> Code Area

> Console Area

> Deployment Area
  - Environment
    - Java Script VM
    - Inject Web3
    - Web3 Provider
  - Account
  - Gas Limit
  - Value
    - wey
    - gwey
    - finney
    - ether


![alt text](.\assets\Imagem21_2.jpg)



---

## Public message, getMessage, setMessage

![alt text](.\assets\Imagem21_3.jpg)



---

## Data Structure

![alt text](.\assets\Imagem21_4.png )

