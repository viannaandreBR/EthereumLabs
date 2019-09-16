---
id: doc1.16
title: LAB#1 - What is Ethereum ? / 16. The Solidity Programming Language
sidebar_label: 16. The Solidity Programming Language
---

## The Solidity Programming Language



![alt text](.\assets\Imagem16_1.png)

---


## Solidity Complier

![alt text](.\assets\Imagem16_2.jpg)


---

## ABI - Application Binary Interface

![alt text](.\assets\Imagem16_3.jpg)


## Solidity

>ABI:

A data encoding scheme called “Application Binary Interface” (ABI) is used in for working with smart contracts

>Global Variables:

Solidity provides special variables that exist inside the global namespace are known as Global Variables

- **blockhash(uint numberOfBlock) returns (bytes32):**  hash function of the given block which works for the 256 most recent blocks excluding the current block
- **block.coinbase (address):** shows the miner’s address of the current block
- **block.number (unit):** number of current block
- **block.gaslimit (unit):** gaslimit of the current block
- **block.timestamp (uint):** timestamp of current block
- **msg.gas (uint):** the gas that remains
- **msg.value (uint):** the amount of WEI sent along with the message
- **msg.sender (address):** address of the message sender (current call)
- **msg.sig (bytes4):** first four bytes of the call data
- **now (uint):** timestamp for the current block
- **tx.origin (address):** the sender of the transaction (whole call chain)


![alt text](.\assets\Imagem16_2.png)