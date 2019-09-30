---
id: doc5.115
title: LAB#5 - Real Projects with Ethereum  / 115. More on Storage vs Memory 
sidebar_label: 115. More on Storage vs Memory
---

## More on Storage vs Memory



---


## Diference Between Memory x Storage

![alt text](.\assets\Imagem115_1.jpg)

---

![alt text](.\assets\Imagem115_2.jpg)

---

## Storage


![alt text](.\assets\Imagem115_3.jpg)



![alt text](.\assets\Imagem115_4.jpg)

---

## Memory

![alt text](.\assets\Imagem115_5.jpg)






![alt text](.\assets\Imagem115_6.jpg)


---

## Campaign-Contract.sol with Error


![alt text](.\assets\Imagem113_3.jpg)


![alt text](.\assets\Imagem115_8.jpg)


---


## Campaign-Contract.sol without Error


![alt text](.\assets\Imagem115_7.jpg)


![alt text](.\assets\Imagem115_9.jpg)

~~~

pragma solidity ^0.4.17;


contract Campaign {
    struct Request {
        string description;
        uint value;
        address recipient;
        bool complete;
    }
    
    Request[] public requests;
        
    address public manager;
    uint public minimumContribution;
    address[] public approvers;
    
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
    
        approvers.push(msg.sender);
    
    }
    
    function createRequest(string description, uint value, address recipient) public restricted {
            Request  memory newRequest = Request({
                description: description,
                value: value,
                recipient: recipient,
                complete: false
            });
            

            
            requests.push(newRequest);
        
    }
    
}


~~~
