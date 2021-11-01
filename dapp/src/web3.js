import Web3 from 'web3';
/*=async()=> {
await window.web3.currentProvider.enable();


};*/


//await window.web3.currentProvider.enable();
const web3 = new Web3(window.web3.currentProvider);

//const web3=new Web3(window.web3.currentProvider.enable());

export default web3;