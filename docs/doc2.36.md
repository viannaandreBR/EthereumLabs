---
id: doc2.36
title: LAB#2 - Smart Contracts with Solidity  / 36. The Compile Script
sidebar_label: 36. The Compile Script
---

## compile.js

![alt text](.\assets\Imagem35_3.jpg)


~~~
const path = require ('path');
const fs = require ('fs');
const solc = require ('solc');

const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol');

const source = fs.readFileSync(inboxPath, 'utf8');

console.log(solc.compile(source,1));

~~~

> NodeJS Execute compile.js

~~~
node compile.js

~~~


---

~~~

λ node compile.js
{ contracts:
   { ':Inbox':
      { assembly: [Object],
        bytecode:
         '6060604052341561000f57600080fd5b604051610464380380610464833981016040528080519091019050600081805161003d929160200190610044565b50506100df565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061008557805160ff19168380011785556100b2565b828001600101855582156100b2579182015b828111156100b2578251825591602001919060010190610097565b506100be9291506100c2565b5090565b6100dc91905b808211156100be57600081556001016100c8565b90565b610376806100ee6000396000f300606060405263ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663368b87728114610052578063ce6d41de146100a5578063e21f37ce1461012f57600080fd5b341561005d57600080fd5b6100a360046024813581810190830135806020601f8201819004810201604051908101604052818152929190602084018383808284375094965061014295505050505050565b005b34156100b057600080fd5b6100b8610159565b60405160208082528190810183818151815260200191508051906020019080838360005b838110156100f45780820151838201526020016100dc565b50505050905090810190601f1680156101215780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561013a57600080fd5b6100b8610202565b60008180516101559291602001906102a0565b5050565b61016161031e565b60008054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156101f75780601f106101cc576101008083540402835291602001916101f7565b820191906000526020600020905b8154815290600101906020018083116101da57829003601f168201915b505050505090505b90565b60008054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156102985780601f1061026d57610100808354040283529160200191610298565b820191906000526020600020905b81548152906001019060200180831161027b57829003601f168201915b505050505081565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106102e157805160ff191683800117855561030e565b8280016001018555821561030e579182015b8281111561030e5782518255916020019190600101906102f3565b5061031a929150610330565b5090565b60206040519081016040526000815290565b6101ff91905b8082111561031a57600081556001016103365600a165627a7a72305820fa87fb4dc3988e10c5aa368fd613662766da9c89e447bcb5357d9fae62841a2d0029',
        functionHashes: [Object],
        gasEstimates: [Object],
        interface:
         '[{"constant":false,"inputs":[{"name":"newMessage","type":"string"}],"name":"setMessage","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getMessage","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"message","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"initialMessage","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]',
        metadata:
         '{"compiler":{"version":"0.4.17+commit.bdeb9e52"},"language":"Solidity","output":{"abi":[{"constant":false,"inputs":[{"name":"newMessage","type":"string"}],"name":"setMessage","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getMessage","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"message","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"initialMessage","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"}],"devdoc":{"methods":{}},"userdoc":{"methods":{}}},"settings":{"compilationTarget":{"":"Inbox"},"libraries":{},"optimizer":{"enabled":true,"runs":200},"remappings":[]},"sources":{"":{"keccak256":"0xeee73afa2512e0d4f3e479d6ea9137a4f2bbf80db1e60c85c50de5d971acdaee","urls":["bzzr://f1379b65c8ca838a63e741b3c6e5a5e74becc6c8edb637f0acc281e8ef52dbd4"]}},"version":1}',
        opcodes:
         'PUSH1 0x60 PUSH1 0x40 MSTORE CALLVALUE ISZERO PUSH2 0xF JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x464 CODESIZE SUB DUP1 PUSH2 0x464 DUP4 CODECOPY DUP2 ADD PUSH1 0x40 MSTORE DUP1 DUP1 MLOAD SWAP1 SWAP2 ADD SWAP1 POP PUSH1 0x0 DUP2 DUP1 MLOAD PUSH2 0x3D SWAP3 SWAP2 PUSH1 0x20 ADD SWAP1 PUSH2 0x44 JUMP JUMPDEST POP POP PUSH2 0xDF JUMP JUMPDEST DUP3 DUP1 SLOAD PUSH1 0x1 DUP2 PUSH1 0x1 AND ISZERO PUSH2 0x100 MUL SUB AND PUSH1 0x2 SWAP1 DIV SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 PUSH1 0x1F ADD PUSH1 0x20 SWAP1 DIV DUP2 ADD SWAP3 DUP3 PUSH1 0x1F LT PUSH2 0x85 JUMPI DUP1 MLOAD PUSH1 0xFF NOT AND DUP4 DUP1 ADD OR DUP6 SSTORE PUSH2 0xB2 JUMP JUMPDEST DUP3 DUP1 ADD PUSH1 0x1 ADD DUP6 SSTORE DUP3 ISZERO PUSH2 0xB2 JUMPI SWAP2 DUP3 ADD JUMPDEST DUP3 DUP2 GT ISZERO PUSH2 0xB2 JUMPI DUP3 MLOAD DUP3 SSTORE SWAP2 PUSH1 0x20 ADD SWAP2 SWAP1 PUSH1 0x1 ADD SWAP1 PUSH2 0x97 JUMP JUMPDEST POP PUSH2 0xBE SWAP3 SWAP2 POP PUSH2 0xC2 JUMP JUMPDEST POP SWAP1 JUMP JUMPDEST PUSH2 0xDC SWAP2 SWAP1 JUMPDEST DUP1 DUP3 GT ISZERO PUSH2 0xBE JUMPI PUSH1 0x0 DUP2 SSTORE PUSH1 0x1 ADD PUSH2 0xC8 JUMP JUMPDEST SWAP1 JUMP JUMPDEST PUSH2 0x376 DUP1 PUSH2 0xEE PUSH1 0x0 CODECOPY PUSH1 0x0 RETURN STOP PUSH1 0x60 PUSH1 0x40 MSTORE PUSH4 0xFFFFFFFF PUSH29 0x100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 CALLDATALOAD DIV AND PUSH4 0x368B8772 DUP2 EQ PUSH2 0x52 JUMPI DUP1 PUSH4 0xCE6D41DE EQ PUSH2 0xA5 JUMPI DUP1 PUSH4 0xE21F37CE EQ PUSH2 0x12F JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST CALLVALUE ISZERO PUSH2 0x5D JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0xA3 PUSH1 0x4 PUSH1 0x24 DUP2 CALLDATALOAD DUP2 DUP2 ADD SWAP1 DUP4 ADD CALLDATALOAD DUP1 PUSH1 0x20 PUSH1 0x1F DUP3 ADD DUP2 SWAP1 DIV DUP2 MUL ADD PUSH1 0x40 MLOAD SWAP1 DUP2 ADD PUSH1 0x40 MSTORE DUP2 DUP2 MSTORE SWAP3 SWAP2 SWAP1 PUSH1 0x20 DUP5 ADD DUP4 DUP4 DUP1 DUP3 DUP5 CALLDATACOPY POP SWAP5 SWAP7 POP PUSH2 0x142 SWAP6 POP POP POP POP POP POP JUMP JUMPDEST STOP JUMPDEST CALLVALUE ISZERO PUSH2 0xB0 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0xB8 PUSH2 0x159 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH1 0x20 DUP1 DUP3 MSTORE DUP2 SWAP1 DUP2 ADD DUP4 DUP2 DUP2 MLOAD DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP DUP1 MLOAD SWAP1 PUSH1 0x20 ADD SWAP1 DUP1 DUP4 DUP4 PUSH1 0x0 JUMPDEST DUP4 DUP2 LT ISZERO PUSH2 0xF4 JUMPI DUP1 DUP3 ADD MLOAD DUP4 DUP3 ADD MSTORE PUSH1 0x20 ADD PUSH2 0xDC JUMP JUMPDEST POP POP POP POP SWAP1 POP SWAP1 DUP2 ADD SWAP1 PUSH1 0x1F AND DUP1 ISZERO PUSH2 0x121 JUMPI DUP1 DUP3 SUB DUP1 MLOAD PUSH1 0x1 DUP4 PUSH1 0x20 SUB PUSH2 0x100 EXP SUB NOT AND DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP JUMPDEST POP SWAP3 POP POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE ISZERO PUSH2 0x13A JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0xB8 PUSH2 0x202 JUMP JUMPDEST PUSH1 0x0 DUP2 DUP1 MLOAD PUSH2 0x155 SWAP3 SWAP2 PUSH1 0x20 ADD SWAP1 PUSH2 0x2A0 JUMP JUMPDEST POP POP JUMP JUMPDEST PUSH2 0x161 PUSH2 0x31E JUMP JUMPDEST PUSH1 0x0 DUP1 SLOAD PUSH1 0x1 DUP2 PUSH1 0x1 AND ISZERO PUSH2 0x100 MUL SUB AND PUSH1 0x2 SWAP1 DIV DUP1 PUSH1 0x1F ADD PUSH1 0x20 DUP1 SWAP2 DIV MUL PUSH1 0x20 ADD PUSH1 0x40 MLOAD SWAP1 DUP2 ADD PUSH1 0x40 MSTORE DUP1 SWAP3 SWAP2 SWAP1 DUP2 DUP2 MSTORE PUSH1 0x20 ADD DUP3 DUP1 SLOAD PUSH1 0x1 DUP2 PUSH1 0x1 AND ISZERO PUSH2 0x100 MUL SUB AND PUSH1 0x2 SWAP1 DIV DUP1 ISZERO PUSH2 0x1F7 JUMPI DUP1 PUSH1 0x1F LT PUSH2 0x1CC JUMPI PUSH2 0x100 DUP1 DUP4 SLOAD DIV MUL DUP4 MSTORE SWAP2 PUSH1 0x20 ADD SWAP2 PUSH2 0x1F7 JUMP JUMPDEST DUP3 ADD SWAP2 SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 JUMPDEST DUP2 SLOAD DUP2 MSTORE SWAP1 PUSH1 0x1 ADD SWAP1 PUSH1 0x20 ADD DUP1 DUP4 GT PUSH2 0x1DA JUMPI DUP3 SWAP1 SUB PUSH1 0x1F AND DUP3 ADD SWAP2 JUMPDEST POP POP POP POP POP SWAP1 POP JUMPDEST SWAP1 JUMP JUMPDEST PUSH1 0x0 DUP1 SLOAD PUSH1 0x1 DUP2 PUSH1 0x1 AND ISZERO PUSH2 0x100 MUL SUB AND PUSH1 0x2 SWAP1 DIV DUP1 PUSH1 0x1F ADD PUSH1 0x20 DUP1 SWAP2 DIV MUL PUSH1 0x20 ADD PUSH1 0x40 MLOAD SWAP1 DUP2 ADD PUSH1 0x40 MSTORE DUP1 SWAP3 SWAP2 SWAP1 DUP2 DUP2 MSTORE PUSH1 0x20 ADD DUP3 DUP1 SLOAD PUSH1 0x1 DUP2 PUSH1 0x1 AND ISZERO PUSH2 0x100 MUL SUB AND PUSH1 0x2 SWAP1 DIV DUP1 ISZERO PUSH2 0x298 JUMPI DUP1 PUSH1 0x1F LT PUSH2 0x26D JUMPI PUSH2 0x100 DUP1 DUP4 SLOAD DIV MUL DUP4 MSTORE SWAP2 PUSH1 0x20 ADD SWAP2 PUSH2 0x298 JUMP JUMPDEST DUP3 ADD SWAP2 SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 JUMPDEST DUP2 SLOAD DUP2 MSTORE SWAP1 PUSH1 0x1 ADD SWAP1 PUSH1 0x20 ADD DUP1 DUP4 GT PUSH2 0x27B JUMPI DUP3 SWAP1 SUB PUSH1 0x1F AND DUP3 ADD SWAP2 JUMPDEST POP POP POP POP POP DUP2 JUMP JUMPDEST DUP3 DUP1 SLOAD PUSH1 0x1 DUP2 PUSH1 0x1 AND ISZERO PUSH2 0x100 MUL SUB AND PUSH1 0x2 SWAP1 DIV SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 PUSH1 0x1F ADD PUSH1 0x20 SWAP1 DIV DUP2 ADD SWAP3 DUP3 PUSH1 0x1F LT PUSH2 0x2E1 JUMPI DUP1 MLOAD PUSH1 0xFF NOT AND DUP4 DUP1 ADD OR DUP6 SSTORE PUSH2 0x30E JUMP JUMPDEST DUP3 DUP1 ADD PUSH1 0x1 ADD DUP6 SSTORE DUP3 ISZERO PUSH2 0x30E JUMPI SWAP2 DUP3 ADD JUMPDEST DUP3 DUP2 GT ISZERO PUSH2 0x30E JUMPI DUP3 MLOAD DUP3 SSTORE SWAP2 PUSH1 0x20 ADD SWAP2 SWAP1 PUSH1 0x1 ADD SWAP1 PUSH2 0x2F3 JUMP JUMPDEST POP PUSH2 0x31A SWAP3 SWAP2 POP PUSH2 0x330 JUMP JUMPDEST POP SWAP1 JUMP JUMPDEST PUSH1 0x20 PUSH1 0x40 MLOAD SWAP1 DUP2 ADD PUSH1 0x40 MSTORE PUSH1 0x0 DUP2 MSTORE SWAP1 JUMP JUMPDEST PUSH2 0x1FF SWAP2 SWAP1 JUMPDEST DUP1 DUP3 GT ISZERO PUSH2 0x31A JUMPI PUSH1 0x0 DUP2 SSTORE PUSH1 0x1 ADD PUSH2 0x336 JUMP STOP LOG1 PUSH6 0x627A7A723058 KECCAK256 STATICCALL DUP8 CREATE2 0x4d 0xc3 SWAP9 DUP15 LT 0xc5 0xaa CALLDATASIZE DUP16 0xd6 SGT PUSH7 0x2766DA9C89E447 0xbc 0xb5 CALLDATALOAD PUSH30 0x9FAE62841A2D002900000000000000000000000000000000000000000000 ',
        runtimeBytecode:
         '606060405263ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663368b87728114610052578063ce6d41de146100a5578063e21f37ce1461012f57600080fd5b341561005d57600080fd5b6100a360046024813581810190830135806020601f8201819004810201604051908101604052818152929190602084018383808284375094965061014295505050505050565b005b34156100b057600080fd5b6100b8610159565b60405160208082528190810183818151815260200191508051906020019080838360005b838110156100f45780820151838201526020016100dc565b50505050905090810190601f1680156101215780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561013a57600080fd5b6100b8610202565b60008180516101559291602001906102a0565b5050565b61016161031e565b60008054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156101f75780601f106101cc576101008083540402835291602001916101f7565b820191906000526020600020905b8154815290600101906020018083116101da57829003601f168201915b505050505090505b90565b60008054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156102985780601f1061026d57610100808354040283529160200191610298565b820191906000526020600020905b81548152906001019060200180831161027b57829003601f168201915b505050505081565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106102e157805160ff191683800117855561030e565b8280016001018555821561030e579182015b8281111561030e5782518255916020019190600101906102f3565b5061031a929150610330565b5090565b60206040519081016040526000815290565b6101ff91905b8082111561031a57600081556001016103365600a165627a7a72305820fa87fb4dc3988e10c5aa368fd613662766da9c89e447bcb5357d9fae62841a2d0029',
        srcmap:
         '29:293:0:-;;;79:80;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;131:7:0;79:80;;131:24;;;;;;;;:::i;:::-;;79:80;29:293;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;29:293:0;;;-1:-1:-1;29:293:0;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;',
        srcmapRuntime:
         '29:293:0:-;;;;;;;;;;;;;;;;;;;;;;;;;;;163:77;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;163:77:0;;-1:-1:-1;163:77:0;;-1:-1:-1;;;;;;163:77:0;;;244:75;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;71:3;;;64:6;52:2;45:3;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;51:21:0;;;;;;;;;;;;163:77;216:7;226:10;;216:20;;;;;;;;:::i;:::-;;163:77;:::o;244:75::-;286:6;;:::i;:::-;308:7;301:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;244:75;;:::o;51:21::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;29:293::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;29:293:0;;;-1:-1:-1;29:293:0;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;' } },
  sourceList: [ '' ],
  sources: { '': { AST: [Object] } } }


  ~~~


  ---

  ## Update compile.js

  ~~~
  const path = require ('path');
const fs = require ('fs');
const solc = require ('solc');

const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol');

const source = fs.readFileSync(inboxPath, 'utf8');

//console.log(solc.compile(source,1));


module.exports = solc.compile(source,1).contracts[':inbox'];

~~~

---

## Update inbox.sol

~~~

pragma solidity >=0.4.17;

contract Inbox {
    string public message;


function Inbox(string initialMessage) public {
    message = initialMessage;
}

function setMessage(string newMessage) public {
    message = newMessage;
}

function getMessage() public view returns(string) {
    return message;
}
}

~~~
