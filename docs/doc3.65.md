---
id: doc3.65
title: LAB#3 - Advanced Smart Contracts / 65. Overview of Arrays
sidebar_label: 65. Overview of Arrays
---

## Mappings / Arrays / Structs


![alt text](.\assets\Imagem65_1.png)

---

## Reference Types - Array, Mapping, Struct


![alt text](.\assets\Imagem65_3.jpg)



---

## Solidity Data Types


![alt text](.\assets\Imagem65_2.png)


---

## Players - Array of Addresses of people who have entered


![alt text](.\assets\Imagem65_1.jpg)

---

## Basic Types



![alt text](.\assets\Imagem65_2.jpg)

---


## Solidiy Test

> test.sol

~~~

pragma solidity ^0.4.17;

contract Test {
    uint[] public myArray;
    
    function Test() public {
        myArray.push(177);
        myArray.push(10);
        myArray.push(30);
    }
    
    function getArrayLength() public view returns (uint){
        return myArray.length;
    }
    
    function getFirstElement() public view returns (uint){
        return myArray[0];
    }
    
     function getSecondElement() public view returns (uint){
        return myArray[1];
    }
    
    function getThirdElement() public view returns (uint){
        return myArray[2];
    }
}

~~~



![alt text](.\assets\Imagem65_4.jpg)

---
