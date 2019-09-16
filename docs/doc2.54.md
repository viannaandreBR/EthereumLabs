---
id: doc2.54
title: LAB#2 - Smart Contracts with Solidity  / 54. Wallet Provider Setup
sidebar_label: 54. Wallet Provider Setup
---

## Truffle Wallet Provider Setup


![alt text](.\assets\Imagem54_1.png)

> https://www.npmjs.com/package/truffle-wallet-provider


~~~
truffle-wallet-provider
Wallet-enabled Web3 provider. Use it to sign transactions for web3 wallet.

Install
$ npm install truffle-wallet-provider
General Usage
You can use this provider wherever a Web3 provider is needed, not just in Truffle. For Truffle-specific usage, see next section.

var WalletProvider = require("truffle-wallet-provider");
var wallet = require('ethereumjs-wallet').fromV3(keystore, pass);
var provider = new WalletProvider(wallet, "https://ropsten.infura.io/"),
Parameters:

wallet: a wallet object.
provider_uri: string. URI of Ethereum client to send all other non-transaction-related Web3 requests.
Truffle Usage
You can easily use this within a Truffle configuration. For instance:

truffle.js

var WalletProvider = require("truffle-wallet-provider");
 
// Read and unlock keystore
var keystore = require('fs').readFileSync('./keystore').toString();
var pass = require('fs').readFileSync('./pass').toString();
var wallet = require('ethereumjs-wallet').fromV3(keystore, pass);
 
module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    },
    ropsten: {
      provider: new WalletProvider(wallet, "https://ropsten.infura.io/"),
      network_id: 3
    }
  }
};
Keywords
etheruemwalletprovider

~~~

---

## Installation Truflle Wallet Provider

> npm install --svave truffle-hdwallet-provider@0.0.3