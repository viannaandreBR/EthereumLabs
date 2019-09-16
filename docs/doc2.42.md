---
id: doc2.42
title: LAB#2 - Smart Contracts with Solidity  / 42. Testing with Mocha
sidebar_label: 42. Testing with Mocha
---

## Testing with Mocha


![alt text](.\assets\Imagem42_1.svg)



> Mocha is a feature-rich JavaScript test framework running on Node.js and in the browser, making asynchronous testing simple and fun. Mocha tests run serially, allowing for flexible and accurate reporting, while mapping uncaught exceptions to the correct test cases. Hosted on GitHub.

---

## Mocha Functions



![alt text](.\assets\Imagem42_2.jpg)


---

## Change package.json

> Change:

~~~
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },

~~~


> To:

~~~
 "scripts": {
    "test": "mocha"
  },

~~~

> Execute:

> Test Ok
~~~
npm run test

~~~


![alt text](.\assets\Imagem42_3.jpg)


> Test Failed

~~~

const assert = require ('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3 (ganache.provider());


class Car{
  park() {
    return 'stopped';
  }

  drive() {
    return 'vroom';
  }
}

describe ('Car', ()=>{
 it ('can park', () => {
   const car = new Car();
   assert.equal(car.park(), 'stooooopped');
 });
});

~~~


~~~
npm run test

~~~


![alt text](.\assets\Imagem42_4.jpg)



## Final Version with Let variable define

~~~
const assert = require ('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3 (ganache.provider());


class Car{
  park() {
    return 'stopped';
  }

  drive() {
    return 'vroom';
  }
}

let car;

beforeEach(() => {
  car = new Car();
  const printCar = () => {
    console.log(car);
  }
});


describe ('Car', ()=>{
 it ('can park', () => {
   assert.equal(car.park(), 'stopped');
 });
 it ('can drive', () => {
  assert.equal(car.drive(), 'vroom');
});
});

~~~


![alt text](.\assets\Imagem42_5.jpg)
