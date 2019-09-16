---
id: doc2.51
title: LAB#2 - Smart Contracts with Solidity  / 51. Testing Message Update
sidebar_label: 51. Testing Message Update
---

## Testing Message Update


![alt text](.\assets\Imagem51_1.jpg)


> inbox.test.js

~~~

const assert = require ('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');

// Update
//const web3 = new Web3 (ganache.provider());
const provider = ganache.provider();
const web3 = new Web3(provider);

const { interface, bytecode } = require('../compile');

let accounts;
let inbox;

beforeEach(async () => {
  // Get a list of all accounts

accounts = await web3.eth.getAccounts();

inbox = await new web3.eth.Contract(JSON.parse(interface))
  .deploy({data: bytecode, arguments: ['Hi there!']})
  .send({from: accounts[0],gas:'1000000' })

  inbox.setProvider(provider);

});

describe('Inbox', ()=> {
  it ('deploys a contract', ()=>{
    assert.ok(inbox.options.address);
  });

  it('has a default message', async ()=> {
      const message = await inbox.methods.message().call();
      assert.equal(message, 'Hi there!' )
  });
  it ('can change the message', async()=> {
      await inbox.methods.setMessage('bye').send({ from: accounts[0]});
      const message = await inbox.methods.message().call();
      assert.equal(message, 'bye');
  });

});



~~~


> Execute test

~~~
  Inbox
(node:23220) MaxListenersExceededWarning: Possible EventEmitter memory leak detected. 11 data listeners added. Use emitter.setMaxListeners() to increase limit
    √ deploys a contract
    √ has a default message (38ms)
    √ can change the message (127ms)


  3 passing (684ms)

  ~~~