---
id: doc2.44
title: LAB#2 - Smart Contracts with Solidity  / 44. Fetching Accounts from Ganache
sidebar_label: 44. Fetching Accounts from Ganache
---

## Fetching Accounts from Ganache


![alt text](.\assets\Imagem44_1.jpg)


---

## fetchedAccounts()

> Source

~~~
const assert = require ('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3 (ganache.provider());

beforeEach(() => {
  // Get a list of all accounts
  web3.eth.getAccounts()
    .then(fetchedAccounts => {
      console.log(fetchedAccounts);
});

// Use one of those accounts to deploy
// the contract
});
describe('Inbox', ()=> {
  it ('deploys a contract', ()=>{

  });
});

~~~
> Result


~~~
npm run test

> inbox@1.0.0 test 
> mocha


  '0x16a552e37ed1818891DA79c6a561ED5E0118eb40',
  '0xd2679C85cE0CfB778935A3BeC0e195cf971c85E7',
  '0x2a2bd013e913353510FEDd34c8B51EF8F1bB1A19',
  '0xd2b44FC908f9B4771C45fEd9de116015DC4E2b5e',
  '0x1de9358d9a84bdA16512D034151FBF0864715B75',
  '0x21E646662053c1263841D4d2142D3680F9af99fD',
  '0x1561B17C812fbc9fd92433B6CAe4664A7c3ecfC2' ]
~~~



