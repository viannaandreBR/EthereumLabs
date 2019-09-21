---
id: doc-react16
title: LAB#1 - React JS / 16. Introduction to State
sidebar_label: 16. Introduction to State
---

## Introduction to State


![alt text](.\assets\React_Imagem8_1.jpg)


---



![alt text](.\assets\React_Imagem8_1.png)


---



![alt text](.\assets\React_Imagem8_2.png)


---

## ReactDOM vs React


![alt text](.\assets\React_Imagem8_2.jpg)


---

![alt text](.\assets\React_Imagem8_3.jpg)


---



![alt text](.\assets\React_Imagem8_4.jpg)



~~~
import React from 'react';
import ReactDOM from 'react-dom';

// Create a new component. This component should produce
// some HTML
const App = function() {
  return <div> hi!</div>;
};

// Take this compoment´s generate HTML and pu it
// on the page (in the DOM)
//React.render(App);
ReactDOM.render(App);

~~~