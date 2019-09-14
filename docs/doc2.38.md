---
id: doc2.38
title: LAB#2 - Smart Contracts with Solidity  /  Web3 Install Issues on Windows
sidebar_label:  Web3 Install Issues on Windows
---

##  Web3.js


![alt text](.\assets\Imagem38_1.jpg)

---

## Web3.js Ethereum Developer

![alt text](.\assets\Imagem38_1.png)


---

## Ethereum Nodes

![alt text](.\assets\Imagem38_2.png)




---

## Web3.js Ethereum Integrated

![alt text](.\assets\Imagem38_2.jpg)


---

##  Web3 Install Issues on Windows

Option #1:

Open up your terminal as administrator and run the following command:

npm install --global --production windows-build-tools 



Option #2

Many students have noted that Option #1 fails and no longer works. If you find this to be true, then you will need to install the Visual Studio C++ build tools manually: https://github.com/nodejs/node-gyp#option-2



If you still have issues installing then I recommend checking out this post here (https://www.udemy.com/ethereum-and-solidity-the-complete-developers-guide/learn/v4/questions/3613606) for some additional troubleshooting tips. (Please remember, that since this post is older, the versions may not be the same) I do encourage you to create a new post instead of adding a question to that post as it is now very long.



npm ERR! exited with error code: 128

Some students are having issues with Windows firewall or are behind a corporate firewall / proxy and are getting the above error when trying to install web3 and its dependencies.

Running these git configurations in your terminal should fix this:

git config --global url."https://github.com/".insteadOf git@github.com:

git config --global url."https://".insteadOf git://




