---
id: doc2.55
title: LAB#2 - Smart Contracts with Solidity  / 55. Update Deploy Code
sidebar_label: 55. Update Deploy Code
---

## Update Deploy Code


~~~
Updated Deploy Code
In the upcoming video lecture we will be writing our deploy.js script. Since many students are using different dependency versions, here are the result callbacks needed for each:

truffle-hdwallet-provider version 0.0.3

const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: ['Hi there!'] })
    .send({ gas: '1000000', from: accounts[0] });


truffle-hdwallet-provider versions 0.0.4, 0.0.5 and 0.0.6

const result = await new web3.eth.Contract(JSON.parse(interface))
     .deploy({data: '0x' + bytecode, arguments: ['Hi there!']}) // add 0x bytecode
     .send({from: accounts[0]}); // remove 'gas'

~~~