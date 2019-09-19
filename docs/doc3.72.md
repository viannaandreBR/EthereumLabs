---
id: doc3.72
title: LAB#3 - Advanced Smart Contracts / 72. Selecting a Winner
sidebar_label: 72. Selecting a Winner
---

## Function pickWinner

~~~

pragma solidity ^0.4.17;

contract Lottery {
    address     public      manager;
    address[]   public      players;


    function Lottery() public {
        manager = msg.sender;
    }

    function enter() public payable {
        require(msg.value > .01 ether);
        players.push(msg.sender);
    }


    function random() public view returns(uint){
        
     return    uint(keccak256(block.difficulty,now,players));
    }
    
    function pickWinner() public{
         uint index = random() % players.length;
    }

}


~~~

