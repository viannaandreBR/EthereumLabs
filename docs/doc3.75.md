---
id: doc3.75
title: LAB#3 - Advanced Smart Contracts / 75. Requiring Managers
sidebar_label: 75. Requiring Managers
---

## Requiring Managers

>          require(msg.sender == manager);


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
         require(msg.sender == manager);
         uint index = random() % players.length;
         players[index].transfer(this.balance);
         players = new address[](0);
        
    }
    
    
    

}



~~~