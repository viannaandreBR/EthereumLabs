---
id: doc2.49
title: LAB#2 - Smart Contracts with Solidity  / 49. Web3 Version Fix
sidebar_label: 49. Web3 Version Fix
---

## Web3 Version Fix


![alt text](.\assets\Imagem37_1.jpg)


Remember how I mentioned that these Ethereum packages break sometimes?  Well, we're in that situation right now!  You and I just installed version 1.0.0-beta.26 of Web3, which automatically imports some packages of its own.  Unfortunately due to the way versioning works, this .26 release includes some broken internal packages, which is going to result in an error in a command we run in the next video. 

Long story short, to work around a bug, we need to add in two additional lines and change one line of code to our test file.  Make the three changes shown below:

~~~
const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
 
// UPDATE THESE TWO LINES RIGHT HERE!!!!! <-----------------
const provider = ganache.provider();
const web3 = new Web3(provider);
 
const { interface, bytecode } = require('../compile');
 
let accounts;
let inbox;
 
beforeEach(async () => {
  // Get a list of all accounts
  accounts = await web3.eth.getAccounts();
  // Use one of those accounts to deploy the contract
  inbox = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: ['Hi there!'] })
    .send({ from: accounts[0], gas: '1000000' });
    
  // ADD THIS ONE LINE RIGHT HERE!!!!! <---------------------
  inbox.setProvider(provider);
});
 
describe('Inbox', () => {
  it('deploys a contract', () => {
    assert.ok(inbox.options.address);
  });
  it('has a default message', async () => {
    const message = await inbox.methods.message().call();
    assert.equal(message, 'Hi there!');
  });
});

~~~


## Solidity Fix

~~~

pragma solidity ^0.4.25;

contract Inbox {
    string public message;

constructor(string initialMessage) public {
    message = initialMessage;
}

function setMessage(string newMessage) public {
    message = newMessage;
}

function getMessage() public view returns(string) {
    return message;
}
}


~~~
