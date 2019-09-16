---
id: doc2.46
title: LAB#2 - Smart Contracts with Solidity  / 46. Deployment with Web3JS
sidebar_label: 46. Deployment with Web3JS
---

## Deployment with Web3JS

> compile.js

~~~

const path = require ('path');
const fs = require ('fs');
const solc = require ('solc');

const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol');

const source = fs.readFileSync(inboxPath, 'utf8');

console.log(solc.compile(source,1));


module.exports = solc.compile(source,1).contracts[':inbox'];



~~~



---

## execute test

> Update inbox.test.js

~~~
const assert = require ('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3 (ganache.provider());
const { interface, bytecode } = require('../compile');

let accounts;
let inbox;

beforeEach(async () => {
  // Get a list of all accounts

accounts = await web3.eth.getAccounts();


inbox = await new web3.eth.Contract(JSON.parse(interface))
  .deploy({data: bytecode, arguments: ['Hi there!!!']})
  .send({from: accounts[0],gas:'1000000',  })
});

describe('Inbox', ()=> {
  it ('deploys a contract', ()=>{
    console.log(accounts);
    console.log(inbox);
  });
});










~~~





> npm run test

~~~

λ npm run test

> inbox@1.0.0 test C:\Users\viann\OneDrive\___________Developer\_BlockChain-Labs\Ethereum-Labs\inbox
> mocha

{ contracts:
   { ':Inbox':
      { assembly: [Object],
        bytecode:
         '608060405234801561001057600080fd5b5060405161044038038061044083398101604052805101805161003a906000906020840190610041565b50506100dc565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061008257805160ff19168380011785556100af565b828001600101855582156100af579182015b828111156100af578251825591602001919060010190610094565b506100bb9291506100bf565b5090565b6100d991905b808211156100bb57600081556001016100c5565b90565b610355806100eb6000396000f3006080604052600436106100565763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663368b8772811461005b578063ce6d41de146100b6578063e21f37ce14610140575b600080fd5b34801561006757600080fd5b506040805160206004803580820135601f81018490048402850184019095528484526100b49436949293602493928401919081908401838280828437509497506101559650505050505050565b005b3480156100c257600080fd5b506100cb61016c565b6040805160208082528351818301528351919283929083019185019080838360005b838110156101055781810151838201526020016100ed565b50505050905090810190601f1680156101325780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561014c57600080fd5b506100cb610203565b8051610168906000906020840190610291565b5050565b60008054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156101f85780601f106101cd576101008083540402835291602001916101f8565b820191906000526020600020905b8154815290600101906020018083116101db57829003601f168201915b505050505090505b90565b6000805460408051602060026001851615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156102895780601f1061025e57610100808354040283529160200191610289565b820191906000526020600020905b81548152906001019060200180831161026c57829003601f168201915b505050505081565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106102d257805160ff19168380011785556102ff565b828001600101855582156102ff579182015b828111156102ff5782518255916020019190600101906102e4565b5061030b92915061030f565b5090565b61020091905b8082111561030b57600081556001016103155600a165627a7a723058203d7ee12ca59bd96812d80ed272c5a64dd11c8dbc82a1b7547e8774c450f528c80029',
        functionHashes: [Object],
        gasEstimates: [Object],
        interface:
         '[{"constant":false,"inputs":[{"name":"newMessage","type":"string"}],"name":"setMessage","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getMessage","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"message","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"initialMessage","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]',
        metadata:
         '{"compiler":{"version":"0.4.25+commit.59dbf8f1"},"language":"Solidity","output":{"abi":[{"constant":false,"inputs":[{"name":"newMessage","type":"string"}],"name":"setMessage","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getMessage","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"message","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"initialMessage","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"}],"devdoc":{"methods":{}},"userdoc":{"methods":{}}},"settings":{"compilationTarget":{"":"Inbox"},"evmVersion":"byzantium","libraries":{},"optimizer":{"enabled":true,"runs":200},"remappings":[]},"sources":{"":{"keccak256":"0xe5e1eadc57cb68aadc71c7f932dea5bd5b4e4fafefab83c59785ceffe3c43fd8","urls":["bzzr://44cd45bfbced677978916d61c49174ca7e34ef6de067ce541f353957a69d9a4b"]}},"version":1}',
        opcodes:
         'PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH2 0x10 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x40 MLOAD PUSH2 0x440 CODESIZE SUB DUP1 PUSH2 0x440 DUP4 CODECOPY DUP2 ADD PUSH1 0x40 MSTORE DUP1 MLOAD ADD DUP1 MLOAD PUSH2 0x3A SWAP1 PUSH1 0x0 SWAP1 PUSH1 0x20 DUP5 ADD SWAP1 PUSH2 0x41 JUMP JUMPDEST POP POP PUSH2 0xDC JUMP JUMPDEST DUP3 DUP1 SLOAD PUSH1 0x1 DUP2 PUSH1 0x1 AND ISZERO PUSH2 0x100 MUL SUB AND PUSH1 0x2 SWAP1 DIV SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 PUSH1 0x1F ADD PUSH1 0x20 SWAP1 DIV DUP2 ADD SWAP3 DUP3 PUSH1 0x1F LT PUSH2 0x82 JUMPI DUP1 MLOAD PUSH1 0xFF NOT AND DUP4 DUP1 ADD OR DUP6 SSTORE PUSH2 0xAF JUMP JUMPDEST DUP3 DUP1 ADD PUSH1 0x1 ADD DUP6 SSTORE DUP3 ISZERO PUSH2 0xAF JUMPI SWAP2 DUP3 ADD JUMPDEST DUP3 DUP2 GT ISZERO PUSH2 0xAF JUMPI DUP3 MLOAD DUP3 SSTORE SWAP2 PUSH1 0x20 ADD SWAP2 SWAP1 PUSH1 0x1 ADD SWAP1 PUSH2 0x94 JUMP JUMPDEST POP PUSH2 0xBB SWAP3 SWAP2 POP PUSH2 0xBF JUMP JUMPDEST POP SWAP1 JUMP JUMPDEST PUSH2 0xD9 SWAP2 SWAP1 JUMPDEST DUP1 DUP3 GT ISZERO PUSH2 0xBB JUMPI PUSH1 0x0 DUP2 SSTORE PUSH1 0x1 ADD PUSH2 0xC5 JUMP JUMPDEST SWAP1 JUMP JUMPDEST PUSH2 0x355 DUP1 PUSH2 0xEB PUSH1 0x0 CODECOPY PUSH1 0x0 RETURN STOP PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x4 CALLDATASIZE LT PUSH2 0x56 JUMPI PUSH4 0xFFFFFFFF PUSH29 0x100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 CALLDATALOAD DIV AND PUSH4 0x368B8772 DUP2 EQ PUSH2 0x5B JUMPI DUP1 PUSH4 0xCE6D41DE EQ PUSH2 0xB6 JUMPI DUP1 PUSH4 0xE21F37CE EQ PUSH2 0x140 JUMPI JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x67 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x40 DUP1 MLOAD PUSH1 0x20 PUSH1 0x4 DUP1 CALLDATALOAD DUP1 DUP3 ADD CALLDATALOAD PUSH1 0x1F DUP2 ADD DUP5 SWAP1 DIV DUP5 MUL DUP6 ADD DUP5 ADD SWAP1 SWAP6 MSTORE DUP5 DUP5 MSTORE PUSH2 0xB4 SWAP5 CALLDATASIZE SWAP5 SWAP3 SWAP4 PUSH1 0x24 SWAP4 SWAP3 DUP5 ADD SWAP2 SWAP1 DUP2 SWAP1 DUP5 ADD DUP4 DUP3 DUP1 DUP3 DUP5 CALLDATACOPY POP SWAP5 SWAP8 POP PUSH2 0x155 SWAP7 POP POP POP POP POP POP POP JUMP JUMPDEST STOP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0xC2 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0xCB PUSH2 0x16C JUMP JUMPDEST PUSH1 0x40 DUP1 MLOAD PUSH1 0x20 DUP1 DUP3 MSTORE DUP4 MLOAD DUP2 DUP4 ADD MSTORE DUP4 MLOAD SWAP2 SWAP3 DUP4 SWAP3 SWAP1 DUP4 ADD SWAP2 DUP6 ADD SWAP1 DUP1 DUP4 DUP4 PUSH1 0x0 JUMPDEST DUP4 DUP2 LT ISZERO PUSH2 0x105 JUMPI DUP2 DUP2 ADD MLOAD DUP4 DUP3 ADD MSTORE PUSH1 0x20 ADD PUSH2 0xED JUMP JUMPDEST POP POP POP POP SWAP1 POP SWAP1 DUP2 ADD SWAP1 PUSH1 0x1F AND DUP1 ISZERO PUSH2 0x132 JUMPI DUP1 DUP3 SUB DUP1 MLOAD PUSH1 0x1 DUP4 PUSH1 0x20 SUB PUSH2 0x100 EXP SUB NOT AND DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP JUMPDEST POP SWAP3 POP POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x14C JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0xCB PUSH2 0x203 JUMP JUMPDEST DUP1 MLOAD PUSH2 0x168 SWAP1 PUSH1 0x0 SWAP1 PUSH1 0x20 DUP5 ADD SWAP1 PUSH2 0x291 JUMP JUMPDEST POP POP JUMP JUMPDEST PUSH1 0x0 DUP1 SLOAD PUSH1 0x40 DUP1 MLOAD PUSH1 0x20 PUSH1 0x1F PUSH1 0x2 PUSH1 0x0 NOT PUSH2 0x100 PUSH1 0x1 DUP9 AND ISZERO MUL ADD SWAP1 SWAP6 AND SWAP5 SWAP1 SWAP5 DIV SWAP4 DUP5 ADD DUP2 SWAP1 DIV DUP2 MUL DUP3 ADD DUP2 ADD SWAP1 SWAP3 MSTORE DUP3 DUP2 MSTORE PUSH1 0x60 SWAP4 SWAP1 SWAP3 SWAP1 SWAP2 DUP4 ADD DUP3 DUP3 DUP1 ISZERO PUSH2 0x1F8 JUMPI DUP1 PUSH1 0x1F LT PUSH2 0x1CD JUMPI PUSH2 0x100 DUP1 DUP4 SLOAD DIV MUL DUP4 MSTORE SWAP2 PUSH1 0x20 ADD SWAP2 PUSH2 0x1F8 JUMP JUMPDEST DUP3 ADD SWAP2 SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 JUMPDEST DUP2 SLOAD DUP2 MSTORE SWAP1 PUSH1 0x1 ADD SWAP1 PUSH1 0x20 ADD DUP1 DUP4 GT PUSH2 0x1DB JUMPI DUP3 SWAP1 SUB PUSH1 0x1F AND DUP3 ADD SWAP2 JUMPDEST POP POP POP POP POP SWAP1 POP JUMPDEST SWAP1 JUMP JUMPDEST PUSH1 0x0 DUP1 SLOAD PUSH1 0x40 DUP1 MLOAD PUSH1 0x20 PUSH1 0x2 PUSH1 0x1 DUP6 AND ISZERO PUSH2 0x100 MUL PUSH1 0x0 NOT ADD SWAP1 SWAP5 AND SWAP4 SWAP1 SWAP4 DIV PUSH1 0x1F DUP2 ADD DUP5 SWAP1 DIV DUP5 MUL DUP3 ADD DUP5 ADD SWAP1 SWAP3 MSTORE DUP2 DUP2 MSTORE SWAP3 SWAP2 DUP4 ADD DUP3 DUP3 DUP1 ISZERO PUSH2 0x289 JUMPI DUP1 PUSH1 0x1F LT PUSH2 0x25E JUMPI PUSH2 0x100 DUP1 DUP4 SLOAD DIV MUL DUP4 MSTORE SWAP2 PUSH1 0x20 ADD SWAP2 PUSH2 0x289 JUMP JUMPDEST DUP3 ADD SWAP2 SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 JUMPDEST DUP2 SLOAD DUP2 MSTORE SWAP1 PUSH1 0x1 ADD SWAP1 PUSH1 0x20 ADD DUP1 DUP4 GT PUSH2 0x26C JUMPI DUP3 SWAP1 SUB PUSH1 0x1F AND DUP3 ADD SWAP2 JUMPDEST POP POP POP POP POP DUP2 JUMP JUMPDEST DUP3 DUP1 SLOAD PUSH1 0x1 DUP2 PUSH1 0x1 AND ISZERO PUSH2 0x100 MUL SUB AND PUSH1 0x2 SWAP1 DIV SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 PUSH1 0x1F ADD PUSH1 0x20 SWAP1 DIV DUP2 ADD SWAP3 DUP3 PUSH1 0x1F LT PUSH2 0x2D2 JUMPI DUP1 MLOAD PUSH1 0xFF NOT AND DUP4 DUP1 ADD OR DUP6 SSTORE PUSH2 0x2FF JUMP JUMPDEST DUP3 DUP1 ADD PUSH1 0x1 ADD DUP6 SSTORE DUP3 ISZERO PUSH2 0x2FF JUMPI SWAP2 DUP3 ADD JUMPDEST DUP3 DUP2 GT ISZERO PUSH2 0x2FF JUMPI DUP3 MLOAD DUP3 SSTORE SWAP2 PUSH1 0x20 ADD SWAP2 SWAP1 PUSH1 0x1 ADD SWAP1 PUSH2 0x2E4 JUMP JUMPDEST POP PUSH2 0x30B SWAP3 SWAP2 POP PUSH2 0x30F JUMP JUMPDEST POP SWAP1 JUMP JUMPDEST PUSH2 0x200 SWAP2 SWAP1 JUMPDEST DUP1 DUP3 GT ISZERO PUSH2 0x30B JUMPI PUSH1 0x0 DUP2 SSTORE PUSH1 0x1 ADD PUSH2 0x315 JUMP STOP LOG1 PUSH6 0x627A7A723058 KECCAK256 RETURNDATASIZE PUSH31 0xE12CA59BD96812D80ED272C5A64DD11C8DBC82A1B7547E8774C450F528C800 0x29 ',
        runtimeBytecode:
         '6080604052600436106100565763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663368b8772811461005b578063ce6d41de146100b6578063e21f37ce14610140575b600080fd5b34801561006757600080fd5b506040805160206004803580820135601f81018490048402850184019095528484526100b49436949293602493928401919081908401838280828437509497506101559650505050505050565b005b3480156100c257600080fd5b506100cb61016c565b6040805160208082528351818301528351919283929083019185019080838360005b838110156101055781810151838201526020016100ed565b50505050905090810190601f1680156101325780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561014c57600080fd5b506100cb610203565b8051610168906000906020840190610291565b5050565b60008054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156101f85780601f106101cd576101008083540402835291602001916101f8565b820191906000526020600020905b8154815290600101906020018083116101db57829003601f168201915b505050505090505b90565b6000805460408051602060026001851615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156102895780601f1061025e57610100808354040283529160200191610289565b820191906000526020600020905b81548152906001019060200180831161026c57829003601f168201915b505050505081565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106102d257805160ff19168380011785556102ff565b828001600101855582156102ff579182015b828111156102ff5782518255916020019190600101906102e4565b5061030b92915061030f565b5090565b61020091905b8082111561030b57600081556001016103155600a165627a7a723058203d7ee12ca59bd96812d80ed272c5a64dd11c8dbc82a1b7547e8774c450f528c80029',
        srcmap:
         '28:293:0:-;;;78:80;8:9:-1;5:2;;;30:1;27;20:12;5:2;78:80:0;;;;;;;;;;;;;;;;;130:24;;;;:7;;:24;;;;;:::i;:::-;;78:80;28:293;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;28:293:0;;;-1:-1:-1;28:293:0;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;',
        srcmapRuntime:
         '28:293:0:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;162:77;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;162:77:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;162:77:0;;-1:-1:-1;162:77:0;;-1:-1:-1;;;;;;;162:77:0;;;243:75;;8:9:-1;5:2;;;30:1;27;20:12;5:2;243:75:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:100:-1;33:3;30:1;27:10;8:100;;;90:11;;;84:18;71:11;;;64:39;52:2;45:10;8:100;;;12:14;243:75:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;50:21;;8:9:-1;5:2;;;30:1;27;20:12;5:2;50:21:0;;;;162:77;215:20;;;;:7;;:20;;;;;:::i;:::-;;162:77;:::o;243:75::-;307:7;300:14;;;;;;;;-1:-1:-1;;300:14:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;285:6;;300:14;;307:7;;300:14;;307:7;300:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;243:75;;:::o;50:21::-;;;;;;;;;;;;;;;-1:-1:-1;;50:21:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;28:293::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;28:293:0;;;-1:-1:-1;28:293:0;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;' } },
  errors:
   [ ':7:1: Warning: Defining constructors as functions with the same name as the contract is deprecated. Use "constructor(...) { ... }" instead.\nfunction Inbox(string initialMessage) public {\r\n^ (Relevant source part starts here and spans across multiple lines).\n' ],
  sourceList: [ '' ],
  sources: { '': { AST: [Object] } } }


  Inbox
(node:18220) MaxListenersExceededWarning: Possible EventEmitter memory leak detected. 11 data listeners added. Use emitter.setMaxListeners() to increase limit
[ '0x636ffD80C1409c42263E0A58570C111bE44A96D6',
  '0x0015f7B7DfAB5A61847e4b28e77932ac30633acA',
  '0xCCa3285c41ffD829d9F6EdFAdb38aDf003332cE0',
  '0xbf6DA988a59AF4A63B8a53196f83b56392BAdE1B',
  '0x7b8e080173a44F13eC65a04864efe5cE04c3693C',
  '0xD9E78ef7153601d322D48b39Ef2f2f10DAAc0197',
  '0x84aF231D2C8256203b37Bf040D6AAd89bEDAC605',
  '0xd5d2559E9Da9ab64D9aEB53AB7Dd345c90802121',
  '0x99810250C8140ADaF827918fDD3A9872d6018e2a',
  '0x6e6a17D261CA4c3269DE54C613Bd0516fb5e01a5' ]
Contract {
  currentProvider: [Getter/Setter],
  _requestManager:
   RequestManager {
     provider:
      b {
        _events: [Object],
        _eventsCount: 1,
        _maxListeners: undefined,
        options: [Object],
        engine: [d],
        manager: [b],
        sendAsync: [Function: bound ],
        send: [Function: bound ],
        close: [Function: bound ],
        _queueRequest: [Function: bound ],
        _processRequestQueue: [Function: bound ],
        _requestQueue: [],
        _requestInProgress: false },
     providers:
      { WebsocketProvider: [Function: WebsocketProvider],
        HttpProvider: [Function: HttpProvider],
        IpcProvider: [Function: IpcProvider] },
     subscriptions: {} },
  givenProvider: null,
  providers:
   { WebsocketProvider: [Function: WebsocketProvider],
     HttpProvider: [Function: HttpProvider],
     IpcProvider: [Function: IpcProvider] },
  _provider:
   b {
     _events: [Object: null prototype] { data: [Array] },
     _eventsCount: 1,
     _maxListeners: undefined,
     options:
      { vmErrorsOnRPCResponse: true,
        verbose: false,
        asyncRequestProcessing: false,
        logger: [Object],
        seed: 'OjCjV96OCM',
        mnemonic:
         'secret mean banana pool major increase sausage smooth bicycle grunt alien law',
        network_id: 1568516306607,
        total_accounts: 10,
        gasPrice: '0x77359400',
        default_balance_ether: 100,
        unlocked_accounts: [],
        hdPath: 'm/44\'/60\'/0\'/0/',
        gasLimit: '0x6691b7',
        defaultTransactionGasLimit: '0x15f90',
        time: null,
        debug: false,
        hardfork: 'petersburg',
        allowUnlimitedContractSize: false },
     engine:
      d {
        _events: [Object],
        _eventsCount: 3,
        _maxListeners: 100,
        _blockTracker: [i],
        _ready: [i],
        currentBlock: [Object],
        _providers: [Array],
        manager: [b],
        _running: true },
     manager:
      b {
        state: [k],
        options: [Object],
        initialized: true,
        initialization_error: null,
        post_initialization_callbacks: [],
        engine: [d],
        currentBlock: [Object] },
     sendAsync: [Function: bound ],
     send: [Function: bound ],
     close: [Function: bound ],
     _queueRequest: [Function: bound ],
     _processRequestQueue: [Function: bound ],
     _requestQueue: [],
     _requestInProgress: false },
  setProvider: [Function],
  BatchRequest: [Function: bound Batch],
  extend:
   { [Function: ex]
     formatters:
      { inputDefaultBlockNumberFormatter: [Function: inputDefaultBlockNumberFormatter],
        inputBlockNumberFormatter: [Function: inputBlockNumberFormatter],
        inputCallFormatter: [Function: inputCallFormatter],
        inputTransactionFormatter: [Function: inputTransactionFormatter],
        inputAddressFormatter: [Function: inputAddressFormatter],
        inputPostFormatter: [Function: inputPostFormatter],
        inputLogFormatter: [Function: inputLogFormatter],
        inputSignFormatter: [Function: inputSignFormatter],
        outputBigNumberFormatter: [Function: outputBigNumberFormatter],
        outputTransactionFormatter: [Function: outputTransactionFormatter],
        outputTransactionReceiptFormatter: [Function: outputTransactionReceiptFormatter],
        outputBlockFormatter: [Function: outputBlockFormatter],
        outputLogFormatter: [Function: outputLogFormatter],
        outputPostFormatter: [Function: outputPostFormatter],
        outputSyncingFormatter: [Function: outputSyncingFormatter] },
     utils:
      { _fireError: [Function: _fireError],
        _jsonInterfaceMethodToString: [Function: _jsonInterfaceMethodToString],
        randomHex: [Function: randomHex],
        _: [Function],
        BN: [Function],
        isBN: [Function: isBN],
        isBigNumber: [Function: isBigNumber],
        isHex: [Function: isHex],
        isHexStrict: [Function: isHexStrict],
        sha3: [Function],
        keccak256: [Function],
        soliditySha3: [Function: soliditySha3],
        isAddress: [Function: isAddress],
        checkAddressChecksum: [Function: checkAddressChecksum],
        toChecksumAddress: [Function: toChecksumAddress],
        toHex: [Function: toHex],
        toBN: [Function: toBN],
        bytesToHex: [Function: bytesToHex],
        hexToBytes: [Function: hexToBytes],
        hexToNumberString: [Function: hexToNumberString],
        hexToNumber: [Function: hexToNumber],
        toDecimal: [Function: hexToNumber],
        numberToHex: [Function: numberToHex],
        fromDecimal: [Function: numberToHex],
        hexToUtf8: [Function: hexToUtf8],
        hexToString: [Function: hexToUtf8],
        toUtf8: [Function: hexToUtf8],
        utf8ToHex: [Function: utf8ToHex],
        stringToHex: [Function: utf8ToHex],
        fromUtf8: [Function: utf8ToHex],
        hexToAscii: [Function: hexToAscii],
        toAscii: [Function: hexToAscii],
        asciiToHex: [Function: asciiToHex],
        fromAscii: [Function: asciiToHex],
        unitMap: [Object],
        toWei: [Function: toWei],
        fromWei: [Function: fromWei],
        padLeft: [Function: leftPad],
        leftPad: [Function: leftPad],
        padRight: [Function: rightPad],
        rightPad: [Function: rightPad],
        toTwosComplement: [Function: toTwosComplement] },
     Method: [Function: Method] },
  clearSubscriptions: [Function],
  options:
   { address: [Getter/Setter],
     jsonInterface: [Getter/Setter],
     data: undefined,
     from: undefined,
     gasPrice: undefined,
     gas: undefined },
  defaultAccount: [Getter/Setter],
  defaultBlock: [Getter/Setter],
  methods:
   { setMessage: [Function: bound _createTxObject],
     '0x368b8772': [Function: bound _createTxObject],
     'setMessage(string)': [Function: bound _createTxObject],
     getMessage: [Function: bound _createTxObject],
     '0xce6d41de': [Function: bound _createTxObject],
     'getMessage()': [Function: bound _createTxObject],
     message: [Function: bound _createTxObject],
     '0xe21f37ce': [Function: bound _createTxObject],
     'message()': [Function: bound _createTxObject] },
  events: { allEvents: [Function: bound ] },
  _address: '0x3916D1Afc6025a098e6517bb402a04cfb3857687',
  _jsonInterface:
   [ { constant: false,
       inputs: [Array],
       name: 'setMessage',
       outputs: [],
       payable: false,
       stateMutability: 'nonpayable',
       type: 'function',
       signature: '0x368b8772' },
     { constant: true,
       inputs: [],
       name: 'getMessage',
       outputs: [Array],
       payable: false,
       stateMutability: 'view',
       type: 'function',
       signature: '0xce6d41de' },
     { constant: true,
       inputs: [],
       name: 'message',
       outputs: [Array],
       payable: false,
       stateMutability: 'view',
       type: 'function',
       signature: '0xe21f37ce' },
     { inputs: [Array],
       payable: false,
       stateMutability: 'nonpayable',
       type: 'constructor',
       constant: undefined,
       signature: 'constructor' } ] }
    √ deploys a contract (206ms)


  1 passing (527ms)

~~~
