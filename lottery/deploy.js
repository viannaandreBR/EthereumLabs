const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require ('./compile');

const provider = new HDWalletProvider(
'orbit glow kit grief violin receive label retire enjoy share kite flower',
'https://rinkeby.infura.io/v3/c110681145d042bd81b92e5ffd6a20e3'
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log('Attempting to deploy from account', accounts[0]);

  const result =   await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data:bytecode })
    .send({gas:'1000000', from: accounts[0]});
  
  console.log('Contract deployed to',result.options.address);

};

deploy();