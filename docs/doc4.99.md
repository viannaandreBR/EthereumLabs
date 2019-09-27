---
id: doc4.99
title: LAB#4 - Building Interactive Front-Ends  / 99. The 'Enter' Form
sidebar_label: 99. The 'Enter' Form
---

## The 'Enter' Form


![alt text](.\assets\Imagem99_1.jpg)




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
    value: ""
  };
  async componentDidMount() {
    const manager = await lottery.methods.manager().call();
    const players = await lottery.methods.getPlayers().call();
    const balance = await web3.eth.getBalance(lottery.options.address);

    this.setState({ manager, players, balance });
  }
  render() {
    return (
      <div>
        <h2> Lottery Contract </h2>
        <p>
          This contract is managed by {this.state.manager} <br /> There are
          currently {this.state.players.length} people entered, <br /> competing
          to win {(web3.utils.fromWei(this.state.balance), "ether")} ether!
        </p>

        <hr />

        <form>
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
      </div>
    );
  }
}

export default App;


~~~