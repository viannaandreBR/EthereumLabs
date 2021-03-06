Ethereum-Labs
=============

Ethereum Blockchain Environment
=============================== 

https://viannaandrebr.github.io/EthereumLabs/
---------------------------------------------------


Welcome Ethereum Labs
--------------------



Blockchain Ethereum Develop Environment 
--------------------------------------------------------------------------------


About:
--------------------------------------------------------------------------------
- (1) What is Ethereum ?

- (2) Smart Contract with Solidity

- (3) Advanced Smart Contracts

- (4) Building Interactive Front-Ends

- (5) Real Projects with Ethereum

- (6) Ethereum Project Infrastrucuture

- (7) Advanced Multi-Page Fron-Ends

- (8) React Java Script


Setup Docusaurus.io with Git Hub Pages
--------------------------------------------------------------------------------
- Git Hub repository
- Clone Git Hub repository
- Installation Docusaurus
- yarn global add docusaurus-init
- yarn install
- docusaurus-init
- rename doc folder
- rename blog folder
- edit siteConfig.js
- cd website
- yarn run build
- git init
- git remote add origin https://github.com/viannaandreBR/EthereumLabs.git
- git add .
- git commit -m "First Commit"
- git push origin master
- Create Website branch in Git Hub
- git checkout -b gh-pages
- Relative Path: website\build\ethereum-labs
- git add -f website/build/ethereum-labs && git commit -m "initial dist subtree"
- git subtree push --prefix website/build/ethereum-labs/ origin gh-pages

-------------------------------------------------------------------------
# Compilando Build
- Atualizando o siteConfig.js
- cd website
- yarn run build
- cd ..
- git add -f website/build/EthereumLabs && git commit -m "Branch gh-pages"
- git subtree push --prefix website/build/EthereumLabs/ origin gh-pages 

---------------------------------------------------------------------------
> git for-each-ref --format %(refname) %(objectname) --sort -committerdate
> git remote --verbose
> git checkout -q --track origin/master
> git subtree push --prefix website/build/ethereum-labs/ origin gh-pages


----------------------------------------------------------------------------
# Como remover branchs

# Para apagar o branch localmente:
git branch -D <nome do branch>
git branch -D gh-pages

# Para apagar o branch remotamente:
git push <nome do origin> <nome do branch> --delete
git push origin gh-pages --delete
-----------------------------------------------------------------------------
# --------------
# Compilação
# --------------
> cd website
> yarn run build
> cd ..
> git add -f website/build/ethereum-labs && git commit -m "initial dist subtree"

-----------------------------------------------------------------------------
# Imagem Test

![alt text](website\static\img\gumball.png)



------------------------------------------------------------------------------
#
# Automatica Build && Deploy
>
> Criação Aplicação React
> create-react-app gh-pages-teste
>
> Compilação, Criação /build
> yarn run build
>
>
>>>> Instalação Pacote Yarn para Git Hub Pages
>>>>
>>>> cd website
>>>> yarn add --dev gh-pages
>>>> ./node_modules/.bin/gh-pages -d build
>>>>
>>>>
>>>> Update Docusaurus
1) yarn run build

2) git add -f website/build/EthereumLabs && git commit -m "Branch gh-pages"

3) git push origin gh-pages --delete

4) git subtree push --prefix website/build/EthereumLabs/ origin gh-pages 

>>> Help
>>> http://xszhao.science/blog/Dapp-Lottery-Contract/



---

npm install --global --production windows-build-tools





