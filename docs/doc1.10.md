---
id: doc1.10
title: LAB#1 - What is Ethereum ? / What is a Transaction ?
sidebar_label: What is a Transaction ?
---

## What is a Transaction ?

### Metamask
- Account Address
- Public Key
- Private Key

### Networks
- Main
- Ropsten
- Kovan
- Rinkeby

### Transaction Flow
1. Click 'submit' on form
2. Address sent to backend server
3. Backend server used web3 library to create a 'transaction' object
4. Backend server sent 'transaction' object to the Rinkeby test network
5. Backend server waited to transaction to be confirmed
6. Backend server sent success message back to the browser
7. Transaction OK!

![alt text](.\assets\Imagem10_1.jpg)

### Transaction Parameters
1. **nonce** - How many times the sender has sent a transaction
2. **to** - Address of account this money is going to
3. **value** - Amount of ether to send to the target address
4. **gasPrice** - Amount of ether the sender is willing to pay per unit gas to get this transaction processed
5. **startGas/gasLimit** - Units of gas that this transaction can consume
6. **v, r, s** - Cryptographic pieces of data that can be used to generate the senders account address. Generated from the sender´s private key.   

![alt text](.\assets\Imagem10_2.jpg)




![alt text](.\assets\Imagem10_3.jpg)