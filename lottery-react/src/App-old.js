import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import web3 from './web3';

class  App extends Component {
  render() {
    //console.log('Web3 Version --->',web3.version);

    const injectedWeb3 = window.web3 || undefined;

    this.state = {
         web3: injectedWeb3
       };

     getAccount() {
       const { web3 } = this.state;
       if (web3.eth.accounts[0]) return web3.eth.accounts[0];
       throw new Error('Your MetaMask is locked. Unlock it to continue.');
     }


    //console.log('Web3 Version --->',web3.eth.getAccounts());

    //web3.eth.getAccounts().then(console.log);

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
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
