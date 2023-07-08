import React,{useState} from 'react'
import styled from 'styled-components'
import Logo from './Logo'

import MetaMask from './Metamask'

const Section = styled.section`
width: 100vw;
background-color: ${prop => prop.theme.body};
`
const NavBar = styled.nav`
display: flex;
justify-content: space-between;
align-item: center;

width: 85%;
heigth: ${props => props.theme.navHeight};
margin: 0 auto;

.mobile{
    display: none;
}

@media (max-width: 64em) {
.desktop{
    display: none;
}    
.mobile{
    display: inline-block;
}

}

`


const Menu = styled.ul`
font-family: 'sora', cursive;
font-size: ${props => props.theme.fontl};
color: ${props => props.theme.text};
display: flex;
justify-content: space-between;
align-items: center;
list-style:none;

@media (max-width: 64em) {
/* 1024px */

position: fixed;
top: 55px ${props => props.theme.navHeight};
left: 0;
right: 0;
bottom: 0;
width: 100vw;
height: ${props => `calc(100vh - ${props.theme.navHeight})`};
min-height: 1rem;
z-index:50;
background-color: ${props => `rgba(${props.theme.bodyRgba},0.85)`};
backdrop-filter: blur(10px);

transform: ${props => props.click ? 'translateY(0)' : `translateY(1000%)`};
transition: all 0.3s ease;

display: flex;
flex-direction: column;
justify-content: center;


}

`

const MenuItem = styled.li`
margin: 0 1rem;
color : ${props => props.theme.text};
color: $pointer;

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

@media (max-width: 64em) {
    margin: 1rem 0;

    &::after{
        display: none;
    }

}

`

const HamburgerMenu = styled.span`
width: ${props => props.click ? '2rem' : '1.5rem'};
height: 2px;
background: ${props => props.theme.text};

position: absolute;
top: 2rem;
left: 50%;
transform: ${props => props.click ? 'translateX(-50%) rotate(90deg)' : 'translateX(-50%) rotate(0)' };


display: none;
justify-content: center;
align-items: center;

cursor: pointer;
transition: all 0.3s ease;

@media (max-width: 64em) {
/* 1024px */
display: flex;

}

&::after, &::before{
    content: ' ';
    width: ${props => props.click ? '1rem' : '1.5rem'};
    height: 2px;
    right: ${props => props.click ? '-2px' : '0'};
background: ${props => props.theme.text};
position: absolute;
}

&::after{
    top: ${props => props.click ? '0.3rem' : '0.5rem'};
    transform: ${props => props.click ? 'rotate(-40deg)' : 'rotate(0)' };
}
&::before{
    bottom: ${props => props.click ? '0.3rem' : '0.5rem'};
    transform: ${props => props.click ? 'rotate(40deg)' : 'rotate(0)' };
}




`

const Navigation = () => {

    const [click, setClick] = useState(false)

const scrollTo = (id) => {

    let element = document.getElementById(id);

    element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'

    })

    setClick(!click);
}

    return (

        <Section id="navigation">
            <NavBar>
                <Logo />
                <HamburgerMenu click={click} onClick={() => setClick(!click)}>
                    &nbsp;
                </HamburgerMenu>
                <Menu click={click} >
                    <MenuItem onClick={() => scrollTo('home')} >Home</MenuItem>
                    <MenuItem onClick={() => scrollTo('about')} >About</MenuItem>
                    <MenuItem onClick={() => scrollTo('roadmap')} >Roadmap</MenuItem>
                    <MenuItem onClick={() => scrollTo('showcase')} >Showcase</MenuItem>
                    <MenuItem onClick={() => scrollTo('team')} >Team</MenuItem>
                    <MenuItem onClick={() => scrollTo('faq')} >Faq</MenuItem>
                    <MenuItem>
                        <div class="mobile">
                        <MetaMask text="Connect Wallet" link="https://www.google.com" />
                        </div>
                    </MenuItem>
                </Menu>
                    <div class="desktop">
                    <MetaMask text="Connect Wallet" link="https://www.google.com"  />
                    </div>

            </NavBar>
        </Section>
            
    )
}

export default Navigation