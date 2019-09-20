---
id: doc3.79
title: LAB#3 - Advanced Smart Contracts / 79. New Test Setup
sidebar_label: 79. New Test Setup
---

##  New Test Setup


> Duplicate /inbox

> Rename /lottery

> Delete /lotterry/contracts/inbox.sol

> Create /lottery/contracts/lottery.sol


> lottery.sol

~~~

pragma solidity >0.4.17;

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
    
    function pickWinner() public restricted {
         require(msg.sender == manager);
         uint index = random() % players.length;
         players[index].transfer(this.balance);
         players = new address[](0);
    }
    
    modifier restricted() {
        require(msg.sender == manager);
        _;
    }
 
    function getPlayers() public view returns (address[]) {
        return players;
    }   
    
}



~~~