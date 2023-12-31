import React from 'react'
import styled from 'styled-components'
import Banner from './Banner'
import Logo from './Logo'
import Facebook from '../Icons/Facebook'
import Instragram from '../Icons/Instagram'
import Twitter from '../Icons/Twitter'
import LinkedIn from '../Icons/LinkedIn'


const Section = styled.section`
min-height: 100vh;
height: 100vh;
width: 100vw;
background-color: ${props => props.theme.body};
position: relative;
color: ${(props) => props.theme.text};
font-family: 'sora', cursive;
display: flex;

flex-direction: column;

`

const Container = styled.div`
width: 75%;
margin: 2rem auto;
display: flex;

justity-content: space-between;
align-items: center;
 
border-bottom: 1px solid ${(props) => props.theme.text};
`

const Left = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const IconList = styled.div`
display: flex;
align-items: center;
margin: 1rem auto;

&>*{
    padding-right: 0.5rem;
    transition: all 0.2s ease;

    &:hover{
        transform: scale(1.2);
    }
}
`

const MenuItems = styled.ul`
list-style: none;
width: 30%;
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: repeat(3, 1fr);
margin: 1rem auto;
`

const Item = styled.li`
width: fit-content;
cursor: pointer;

&::after{
    content: ' ';
    display: block;
    width: 0%;
    height: 2px;
    background: ${props => props.theme.text};
    transition: width 0.3s ease;
}
&:hover::after{
    width: 100%;
}
`

const  Bottom = styled.div`
width: 75%;
margin: 0 auto;
display: flex;
justify-content: center;
align-items: center;
`

const Footer = () => {
    return (
        <Section>
            <Banner />
            <Container>
        <Left>
        <Logo />    
        <IconList>
            <a href="http://facebook.com" target='_blank' 
            rel="noopener noreferrer"
            >
                <Facebook />
            </a>
            <a href="http://instragram.com" target='_blank' 
            rel="noopener noreferrer"
            >
                <Instragram />
            </a>
            <a href="http://twitter.com/justdieclub" target='_blank' 
            rel="noopener noreferrer"
            >
                <Twitter />
            </a>
            <a href="http://linkedIn.com" target='_blank' 
            rel="noopener noreferrer"
            >
                <LinkedIn />
            </a>
        </IconList>
        </Left>
        <MenuItems>
            <Item>Home</Item>
            <Item>About</Item>
            <Item>Roadmap</Item>
            
            <Item>Showcase</Item>
            <Item>Team</Item>
            <Item>Faq</Item>
        </MenuItems>
            </Container>
            <Bottom> 
                <span>
                    &copy; {new Date().getFullYear()} Just'die Club. All rights reserved.
                </span>
            </Bottom>
        </Section>
    )
}

export default Footer