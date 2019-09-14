---
id: doc2.41
title: LAB#2 - Smart Contracts with Solidity  / Web3 Providers
sidebar_label: Web3 Providers
---

## Web3 Providers


![alt text](.\assets\Imagem41_1.jpg)


---

## Web3 Instance



![alt text](.\assets\Imagem41_2.jpg)

~~~

const assert = require ('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3 (ganache.provider);

~~~


