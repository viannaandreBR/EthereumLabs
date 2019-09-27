---
id: doc4.96
title: LAB#4 - Building Interactive Front-Ends  / 96. Rendering Contract Data
sidebar_label: 96. Rendering Contract Data
---

## Rendering Contract Data

![alt text](.\assets\Imagem96_1.jpg)



![alt text](.\assets\Imagem96_2.jpg)

---

## lottery.js

~~~
import web3 from "./web3.js";

const address = "0x2A4277D1901fbe2BB0fCc7bbd2F57ef53f85A819";

const abi = [
  {
    constant: true,
    inputs: [],
    name: "manager",
    outputs: [{ name: "", type: "address" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [],
    name: "pickWinner",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "getPlayers",
    outputs: [{ name: "", type: "address[]" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [],
    name: "enter",
    outputs: [],
    payable: true,
    stateMutability: "payable",
    type: "function"
  },
  {
    constant: true,
    inputs: [{ name: "", type: "uint256" }],
    name: "players",
    outputs: [{ name: "", type: "address" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor"
  }
];

export default new web3.eth.Contract(abi, address);


~~~


![alt text](.\assets\Imagem96_5.jpg)


---

## infura



![alt text](.\assets\Imagem96_3.jpg)



---

## deploy.js




![alt text](.\assets\Imagem96_4.jpg)

