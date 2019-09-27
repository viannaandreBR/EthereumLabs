---
id: doc4.92
title: LAB#4 - Building Interactive Front-Ends  / 92. Web3 Setup
sidebar_label: 92. Web3 Setup
---

## Web3 Overview


![alt text](.\assets\Imagem92_1.png )



![alt text](.\assets\Imagem92_2.png )


![alt text](.\assets\Imagem92_1.jpg)


---

## Web3 Setup


![alt text](.\assets\Imagem92_2.jpg)


> Crete File /src/web3.js


![alt text](.\assets\Imagem92_3.jpg)

---


## Address Metamask in Console.log


![alt text](.\assets\Imagem92_4.jpg)


![alt text](.\assets\Imagem92_5.jpg)


![alt text](.\assets\Imagem92_6.jpg)


---

## app.js

~~~

import React, { Component } from 'react';
import web3 from './web3.js';

  // window.web3 = new Web3(window.web3.currentProvider);

  class  App extends Component {
    render() {
      //console.lo


  // const web3 = new Web3(window.web3.currentProvider);


//  console.log(web3.eth.accounts)

//  console.log('Web3 Version --->',web3.version);

  web3.eth.getAccounts().then(console.log);

  //console.log('Web3 Address --->',web3.eth.account[0]);

  return (
    <div className="App">
      <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
          >
            Learn React
          </a>
      </header>
    </div>
  );



}
}


export default App;

~~~


---

## web.js

~~~

import Web3 from 'web3';

// const web3 = new Web3(ethereum);

//const web3 = new Web3(ethereum);

const web3 = new Web3(window.web3.currentProvider);

console.log('Testando Web3.js <<< ');

export default web3;


~~~

