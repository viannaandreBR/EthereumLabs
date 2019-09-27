---
id: doc4.102
title: LAB#4 - Building Interactive Front-Ends  / 102. Picking a Winner
sidebar_label: 102. Picking a Winner
---

## Picking a Winner

## The 'Enter' Form


![alt text](.\assets\Imagem102_1.jpg)




## Update app.js


~~~
import React, { Component } from "react";
import "./App.css";
import web3 from "./web3.js";
import lottery from "./lottery";

// window.web3 = new Web3(window.web3.currentProvider);

console.log("versão web3--->", web3.version);
console.log("versão web3 window --->", window.web3.currentProvider);

web3.eth.getAccounts().then(console.log);
//web3.eth.getAccounts().then(console.log());

class App extends Component {
  state = {
    manager: "",
    players: [],
    balance: "",
    value: "",
    message: ""
  };
  async componentDidMount() {
    const manager = await lottery.methods.manager().call();
    const players = await lottery.methods.getPlayers().call();
    const balance = await web3.eth.getBalance(lottery.options.address);

    this.setState({ manager, players, balance });
  }

  onSubmit = async event => {
    event.preventDefault();
    const accounts = await web3.eth.getAccounts();

    this.setState({ message: "Waiting on transaction success..." });

    await lottery.methods.enter().send({
      from: accounts[0],
      value: web3.utils.toWei(this.state.value, "ether")
    });

    this.setState({ message: "You have been entered!" });
  };

onClick = async () => {
  const accounts = await web3.eth.getAccounts();

  this.setState({message: 'Waiting on transaction success...'});

  await lottery.methods.pickWinner().send({
    from: accounts[0]
  });

  this.setState({message: 'A winner has been picked! ' });
};

  render() {
    return (
      <div>
        <h2> Lottery Contract </h2>
        <p>
          This contract is managed by {this.state.manager} <br /> There are
          currently {this.state.players.length} people entered, <br /> competing
          to win {web3.utils.fromWei(this.state.balance, "ether")} ether!
        </p>

        <hr />

        <form onSubmit={this.onSubmit}>
          <h4>Want to try your luck ? </h4>
          <div>
            <label> Amount of ether to enter </label>
            <input
              value={this.state.value}
              onChange={event => this.setState({ value: event.target.value })}
            />
          </div>
          <button>Enter</button>
        </form>

        <hr />

        <h4> Ready to pick a winner ? </h4>
        <button onClick={this.onClick}>Pick a Winner!</button>

        <hr />

        <h1>{this.state.message}</h1>
      </div>
    );
  }
}

export default App;

~~~

---

## EtherScan

> https://rinkeby.etherscan.io/address/0x2a4277d1901fbe2bb0fcc7bbd2f57ef53f85a819


![alt text](.\assets\Imagem102_2.jpg)

