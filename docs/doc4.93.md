---
id: doc4.93
title: LAB#4 - Building Interactive Front-Ends  / 93. Updated Deploy Code
sidebar_label: 93. Updated Deploy Code
---

## Updated Deploy Code


Updated Deploy Code
In the upcoming video lecture we will be writing our Lottery project's deploy.js script. Since many students are using different dependency versions, here are the result callbacks needed for each:

---

## Truffle Version 0.0.3

truffle-hdwallet-provider version 0.0.3

const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode })
    .send({ gas: '1000000', from: accounts[0] });

---

truffle-hdwallet-provider versions 0.0.4, 0.0.5 and 0.0.6

const result = await new web3.eth.Contract(JSON.parse(interface))
     .deploy({data: '0x' + bytecode }) // add 0x bytecode
     .send({from: accounts[0]}); // remove 'gas'


