import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Button from './Button'

import img1 from '../assets/Nfts/bighead.svg'
import img2 from '../assets/Nfts/Justdie-1.jpg'
import img3 from '../assets/Nfts/Justdie-2.jpg'
import img4 from '../assets/Nfts/Justdie-3.jpg'
import img5 from '../assets/Nfts/Justdie-4.jpg'
import img6 from '../assets/Nfts/Justdie-7.jpg'
import {dark} from '../styles/Themes';

const Section = styled.section`
width: 100vw;
height: 25rem;
position: relative;
border-top: 2px solid ${props => props.theme.text};
border-top: 2px solid ${props => props.theme.text};

background-color: ${props => `rgba(${props.theme.textRgba},0.9)`};

display: flex;
justify-content: center;
align-items: center;

overflow: hidden;
`

const ImgContainer = styled.div`
width: 80%;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);

display: flex;
justify-content: center;
align-items: center;
opacity: 0.2;

img{
  width: 15rem;
  height: auto;
}
`

const Title = styled.h1`
font-size: ${props => props.theme.fontxxxl};
color: ${props => props.theme.body};
padding: 1rem 2rem;
z-index:10;
width: 35%;

@media (max-width: 64em){
  width: 100%;
  justify-content: left;
  text-align: left;
  font-size: ${(props) => props.theme.fontxxl};
}

@media (max-width: 40em){
  font-size: ${(props) => props.theme.fontxl};
}

@media (max-width: 30em){
  font-size: ${(props) => props.theme.fontlg};
}
`

const ButtonContainer = styled.div`
width: 35%;
display: flex;
justify-content: flex-end;

@media (max-width: 64em){
  width: 100%;

button{
  margin: 0 auto;
}
`

const Banner = () => {
  return (
    <Section>
      <ImgContainer>
          <img src={img1} alt="The Justdie" />
          <img src={img2} alt="The Justdie" />
          <img src={img3} alt="The Justdie" />
          <img src={img4} alt="The Justdie" />
          <img src={img5} alt="The Justdie" />
          <img src={img6} alt="The Justdie" />
      </ImgContainer>
      <Title>Join the <br /> Just'die club </Title>
      <ButtonContainer>
      <ThemeProvider theme={dark}>
      <Button text="Join now" link="https://discord.gg/BFzfRykJ7m" />
      </ThemeProvider>
      </ButtonContainer>
    </Section>
  )
}

export default Banner