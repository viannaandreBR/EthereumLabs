---
id: doc3.73
title: LAB#3 - Advanced Smart Contracts / 73. Sending Ether from Contracts
sidebar_label: 73. Sending Ether from Contracts
---

## Sending Ether from Contracts

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
         players[index].transfer(this.balance);
    }
    
    

}

~~~