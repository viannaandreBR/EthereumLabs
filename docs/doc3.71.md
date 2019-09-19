---
id: doc3.71
title: LAB#3 - Advanced Smart Contracts / 71. Pseudo Random Number Generator
sidebar_label: 71. Pseudo Random Number Generator
---

## Pseudo Random Number Generator


![alt text](.\assets\Imagem71_1.jpg)



![alt text](.\assets\Imagem71_2.jpg)

---
## HASH Function

![alt text](.\assets\Imagem71_2.png)



---

## Pick Winner Function


![alt text](.\assets\Imagem71_3.jpg)


![alt text](.\assets\Imagem71_4.jpg)



![alt text](.\assets\Imagem71_1.png)


> SHA3 Hash Generator

> https://www.browserling.com/tools/sha3-hash

> https://leventozturk.com/engineering/sha3/



---

## Solidity / Remix

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

}



~~~
