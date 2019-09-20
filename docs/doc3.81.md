---
id: doc3.81
title: LAB#3 - Advanced Smart Contracts   / 81. Test Helper Review
sidebar_label: 81. Test Helper Review
---

## Test Helper Review

> Lottery.test.js

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

~~~
