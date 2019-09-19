---
id: doc3.68
title: LAB#3 - Advanced Smart Contracts / 68. Entering the Lottery
sidebar_label: 68. Entering the Lottery
---

## Entering the Lottery


![alt text](.\assets\Imagem68_1.jpg)

---

## Source Code lottery.sol

~~~

pragma solidity ^0.4.17;

contract Lottery {
    address     public      manager;
    address[]   public      players;


    function Lottery() public {
        manager = msg.sender;
    }

    function enter() public payable {
        players.push(msg.sender);
    }



}


~~~




---

## Remix with Source Code lottery.sol


![alt text](.\assets\Imagem68_2.jpg)

---
