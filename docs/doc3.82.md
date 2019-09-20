---
id: doc3.82
title: LAB#3 - Advanced Smart Contracts   / 82. Asserting Deployment
sidebar_label: 82. Asserting Deployment
---

## Asserting Deployment


![alt text](.\assets\Imagem82_1.jfif)

---

## Describe Lottery Contract

> describe('Lottery Contract', () => 

> lottery.test.js

~~~

const assert = require('assert');
const ganache = require('ganach-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

const { interface, bytecode } = require('../compile');

let lottery;
let accounts;

beforeEach(async ()=> {
  accounts = await web3.eth.getAccounts();

  lottery = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode })
    .send({ from: accounts[0], gas: '1000000'})
})

describe('Lottery Contract', () => {
  it('deploys a contract', ()=> {
    assert.ok(lottery.options.address);
  });
});

~~~

---

## Execute Test

> npm run test
