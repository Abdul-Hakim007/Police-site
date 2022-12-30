import React, { useState } from 'react';
import './Home_module.css';
import { ethers } from "ethers";

const Home = () => {
    const [errorMessage, setErrorMessange] = useState(null);
    const [defaultAccount, setDefaultAccount] = useState(null);
    const [userBalance, setUserBalance] = useState(null);

    const connectWallet = () =>{
        if(window.ethereum){
            window.ethereum.request({method: 'eth_requestAccounts'})
            .then(result =>{
                accountChanged([result[0]])
            })
        }else{
            setErrorMessange('Connect your MetaMask wallet')
        }     
    }
    const accountChanged = (accountName)=>{
        setDefaultAccount(accountName);
        getUserBalance(accountName);
    }

    const getUserBalance = (accountAddress)=>{
        window.ethereum.request({method: 'eth_getBalance', params: [String(accountAddress), "latest"]})
        .then(balance=>{
            setUserBalance(ethers.utils.formatEther(balance));
        })
    }

    return (
        <div className="main_page">
            <div className="home_page">
            <h1 className='dark'>Please!!! Connect your wallet to continue</h1>
            <button  className="btn-style" onClick={connectWallet}>Connect</button>
            <h3 className='dark'>Address: {defaultAccount}</h3>
            <h3 className='dark'>Balance: {userBalance}</h3>
            {errorMessage}
        </div>
        </div>
        
    );
};

export default Home;