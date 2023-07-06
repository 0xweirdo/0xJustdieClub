import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const LogoText = styled.h1`
font-family: 'Akaya Telivigala', cursive;
font-size: ${props => props.theme.fontxxxl};
color: ${props => props.theme.text};
cursor: pointer;
transition: all 0.3 ease;

&:hover{
    transform: scale(1.1);
}

@media (max-width: 64em){
    font-size: ${props => props.theme.fontxxl};
}
`

const Logo = () => {
    return (
        <LogoText>
            
            J.
            
        </LogoText>
    )
}

export default Logo