---
id: doc3.83
title: LAB#3 - Advanced Smart Contracts   / 83. Entering the Lottery
sidebar_label: 83. Entering the Lottery
---

## Entering the Lottery

> lottery.sol

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
    .send({ from: accounts[0], gas: '1000000'});
});

describe('Lottery Contract', () => {
  it('deploys a contract', ()=> {
    assert.ok(lottery.options.address);
  });
  it('allows one account to enter', async() => {
    await lottery.methods.enter().send();
      from: account[0];
      value: web3.utils.toWei('0.02', 'ether');
  });
  const players = await lottery.methods.getPlayers().call({
    from: account[0]
  });

  assert.equal(accounts[0], players[0]);
  assert.equal(1,players.length);

});


~~~
