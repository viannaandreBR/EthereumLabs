---
id: doc5.124
title: LAB#5 - Real Projects with Ethereum  / 124. Approving a Request 
sidebar_label: 124. Approving a Request
---

## Approving a Request


![alt text](.\assets\Imagem124_1.jpg)


---
## Contract Requests


![alt text](.\assets\Imagem124_2.jpg)

---

## Refactoring Campaign-Contract.sol without 

~~~

pragma solidity ^0.4.17;


contract Campaign {
    struct Request {
        string description;
        uint value;
        address recipient;
        bool complete;
        uint approvalCount;
        mapping(address => bool) approvals;
    }
    
    Request[] public requests;
        
    address public manager;
    uint public minimumContribution;
    mapping(address => bool) public approvers;
    
    
    modifier restricted() {
            require(msg.sender == manager );
            _;
        
    }
    
    function Campaign(uint minimum) public {
        manager = msg.sender;
        minimumContribution = minimum;
    
    }

    function contribute() public payable{
        require(msg.value > minimumContribution);
    
        approvers[msg.sender] = true;

    
    }
    
    function createRequest(string description, uint value, address recipient) public restricted {
        Request  memory newRequest = Request({
                description: description,
                value: value,
                recipient: recipient,
                complete: false,
                approvalCount: 0
            });
            

            
            requests.push(newRequest);
        
    }
    
    function approveRequest(uint index) public {
        Request storage request = requests[index]; 
        
        
        require(approvers[msg.sender]);
        require(!requests[index].approvals[msg.sender]);
        
        request.approvals[msg.sender] = true;
        request.approvalCount++;
    }
    
}


~~~
