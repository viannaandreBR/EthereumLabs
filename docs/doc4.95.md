---
id: doc4.95
title: LAB#4 - Building Interactive Front-Ends  / 95. Local Contract Instances
sidebar_label: 95. Local Contract Instances
---

## Local Contract Instances

> create /lottery-react/src/lottery.js


![alt text](.\assets\Imagem95_1.jpg)


Contract deployed to 0x2A4277D1901fbe2BB0fCc7bbd2F57ef53f85A819

> Address

~~~
Contract Address: 0x2A4277D1901fbe2BB0fCc7bbd2F57ef53f85A819
~~~

> ABI

~~~
[{"constant":true,"inputs":[],"name":"manager","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"pickWinner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getPlayers","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"enter","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"players","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]
~~~


![alt text](.\assets\Imagem95_2.jpg)



![alt text](.\assets\Imagem95_3.jpg)


---

## Update lottery.js

~~~
import web3 from './web3';

const address='0x2A4277D1901fbe2BB0fCc7bbd2F57ef53f85A819';

const abi = '[{"constant":true,"inputs":[],"name":"manager","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"pickWinner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getPlayers","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"enter","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"players","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]';


export default new web3.eth.Contract (abi, address);

~~~

![alt text](.\assets\Imagem95_4.jpg)
