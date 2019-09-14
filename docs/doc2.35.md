---
id: doc2.35
title: LAB#2 - Smart Contracts with Solidity  / Compiling Solidity
sidebar_label: Compiling Solidity
---

## Solidity Compiler


![alt text](.\assets\Imagem35_1.jpg)


![alt text](.\assets\Imagem35_2.jpg)


> Installation Solidity Compiler

~~~
npm install --save solc

~~~


---

## compile.js

![alt text](.\assets\Imagem35_3.jpg)


~~~
const path = require ('path');
const fs = require ('fs');
const solc = require ('solc');

const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol');

const source = fs.readFileSync(inboxPath, 'utf8');

console.log(solc.compile(source,1));

~~~


