import React, {useState} from "react";
import {ethers} from 'ethers'
import styled from "styled-components";

const Btn = styled.button`
display: inline-block;
background-image: linear-gradient(to right, rgb(1 134 218), rgb(182 49 167));
color: ${props =>props.theme.body};
outline: none;
border: 0;
margin-top: 10px;
margin-bottom: 10px; 



font-size: ${props => props.theme.fontsm};
font-family: 'sora', cursive;
padding: 0.9rem 2.3rem;
border-radius: 50px;
cursor: pointer;
position: relative;
&:hover{
    transform: scale(0.9);
    text-shadow: 0 0 15px rgb(192 219 255 / 80%), 0 0 50px rgb(65 120 255 / 30%);
    
}

&::after{
    content: ' ';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    border: 2px solid ${props => props.theme.text};
    width : 100%;
    height: 100%;
    border-radius: 50px;
    transition: all 0.3s ease;
}

&:hover::after{
    transform: translate(-50%, -50%) scale(1);
    padding: 0.3rem;
    
`

const MetaMask = ({text, link}) => {

    const [errorMessage, setErrorMessage] = useState(null);
    const [defaultAccount, setDefaultAccount] = useState(null);
    

    const ConnectWallet = () => {
        if (window.ethereum) {
            window.ethereum.request({method: 'eth_requestAccounts'})
            .then(result => {
                acountChanged([result[0]])
            })
        } else {
            setErrorMessage('Install Metamask Please!')
        }
    }

    const acountChanged = (accountName) => {
        setDefaultAccount(accountName)
        
    }


    

    

    return (


        <Btn onClick={ConnectWallet} >
            <div>
  <a href={link} aria-label={text} target="_blank" rel="noreferrer">
  {text}
 
  </a>
        {defaultAccount}
        {errorMessage}
        </div>
      </Btn>

        
        
        

        
        
        
        
    )
}

export default MetaMask;