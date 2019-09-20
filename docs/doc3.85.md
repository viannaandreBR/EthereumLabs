---
id: doc3.85
title: LAB#3 - Advanced Smart Contracts   / 85. Try Catch Assertions
sidebar_label: 59. Project Review
---

## Try Catch Assertions


~~~

const assert = require('assert');
const ganache = require('ganache-cli');
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
  
  it('allows multiple account to enter', async() => {
    await lottery.methods.enter().send({
      from: account[0],
      value: web3.utils.toWei('0.02', 'ether')
  });
    await lottery.methods.enter().send({
      from: account[1],
      value: web3.utils.toWei('0.02', 'ether')
});
    await lottery.methods.enter().send({
      from: account[2],
      value: web3.utils.toWei('0.02', 'ether')
});




  const players = await lottery.methods.getPlayers().call({
    from: account[0]
  });

  assert.equal(accounts[0], players[0]);
  assert.equal(accounts[1], players[1]);
  assert.equal(accounts[2], players[2]);
  assert.equal(3,players.length);
  });

  it ('requires a minimum amount of ether to enter', async()=> {
    try {
    await lottery.methods.enter().send({
      from: accounts[0],
      value: 100
    });
    assert(false);
  } catch(err) {
     assert.ok(err);
  }
  });

});


~~~

