---
id: doc3.87
title: LAB#3 - Advanced Smart Contracts   / 87. End-to-End Test
sidebar_label: 87. End-to-End Test
---

## End-to-End Test

> Enter player

~~~
function enter() public payable {
        require(msg.value > .01 ether);
        players.push(msg.sender);
    }
~~~

> PickWinner

~~~

  function pickWinner() public restricted {
         require(msg.sender == manager);
         uint index = random() % players.length;
         players[index].transfer(this.balance);
         players = new address[](0);
    }

~~~


> lottery.test.js

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
      from: accounts[0],
      value: web3.utils.toWei('0.02', 'ether')
  });
    await lottery.methods.enter().send({
      from: accounts[1],
      value: web3.utils.toWei('0.02', 'ether')
  });
    await lottery.methods.enter().send({
      from: accounts[2],
      value: web3.utils.toWei('0.02', 'ether')
  });
  



  const players = await lottery.methods.getPlayers().call({
    from: accounts[0]
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

  it('only manager can call pickWinner', async()=>{
    try{
      await lottery.methods.pickWinner().send({
        from: accounts[1]
      });
      assert(false);
    } catch (err){
      assert(err);
    }
  });
  it('sends money to the winner and resets the players array', async()=>{
    await lottery.methods.enter().send({
      from: accounts[0],
      value: web3.utils.toWei('2', 'ether')
    });

    const initialBalance = await web3.eth.getBalance(accounts[0]);

    await lottery.methods.pickWinner().send({from: accounts[0] });

    const finalBalance = await web3.eth.getBalance(accounts[0]);

    const difference = finalBalance - initialBalance;

    console.log(finalBalance - initialBalance);

    assert(difference > web3.utils.toWei('1.8', 'ether'));


  });


  ~~~


  
![alt text](.\assets\Imagem87_1.jpg)


