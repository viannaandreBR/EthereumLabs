---
id: doc2.45
title: LAB#2 - Smart Contracts with Solidity  / 45. Refactor to Async/Await
sidebar_label: 45. Refactor to Async/Await
---

## Refactor to Async/Await


![alt text](.\assets\Imagem045_2.png)



![alt text](.\assets\Imagem045_1.png)



![alt text](.\assets\Imagem45_1.jpg)



---

## Code Refactor with Asyc / Await

~~~

const assert = require ('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3 (ganache.provider());

let accounts;

beforeEach(async () => {
  // Get a list of all accounts

  accounts = await web3.eth.getAccounts();

//  web3.eth.getAccounts()
//    .then(fetchedAccounts => {
//      console.log(fetchedAccounts);
//});

// Use one of those accounts to deploy
// the contract
});
describe('Inbox', ()=> {
  it ('deploys a contract', ()=>{
    console.log(accounts);
  });
});


~~~



~~~

λ npm test

> inbox@1.0.0 test 
> mocha



  Inbox
[ '0xA3F74495116971fb523f82052F746266477CEE65',
  '0x445432D4B7502C9dfa59014adb1368BAfF061D88',
  '0x670b5531F637f38A795a379A5Dc337bF2973048F',
  '0x004C5C09fDbB7f9FE6AB153FAD570D1981F56cb2',
  '0x5f8E8B6920bE104b5C837eF9d4C5aA8FDB203be6',
  '0xbD68A1a15fc593b4e6176f3439Cb0a7042E7Dc16',
  '0x63F7578374Cae07C81Dab73968d51Db2d7188deB',
  '0x9Eb256F9ff5c64D66Bd507D1646f6d4346A6dE9f',
  '0x19179d32C12C32fD356320F7fE0eD7ff2598cCa5',
  '0xcc1EBB462D92830373447D341c499b86ddb058D2' ]
    √ deploys a contract


  1 passing (149ms)

~~~