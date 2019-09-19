---
id: doc3.76
title: LAB#3 - Advanced Smart Contracts / 76. Functions Modifiers
sidebar_label: 76. Functions Modifiers
---

## Functions Modifiers

> modifier restricted()

~~~

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
    
    
}

~~~