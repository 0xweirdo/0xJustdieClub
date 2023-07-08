import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Carousel from '../Carousel'
import Button from '../Button'
import {dark} from '../../styles/Themes';


const Section = styled.section`
min-height: 100vh;
width: 100%;
background-color: ${props => props.theme.text};
font-family: 'sora', cursive;
display: flex;
justify-content: center;
align-items: center;
position: relative;
`

const Container = styled.div`
width: 80%;
margin: 0 auto;
background-color: none;

display: flex;
justify-content: center;
align-items: center;

@media (max-width: 70em){
    width: 80%;
}

@media (max-width: 64em){
    width: 100%;
    flex-direction: column;

    &>*:last-child{
        width: 80%;
    }

@media (max-width: 40em){

    &>*:last-child{
        width: 90%;
    }
}
`
const Box = styled.div`
width: 100%;
height: 100%;
min-height: 45vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

@media (max-width: 40em){
    min-hetght: 50vh;
  }

`

const Title = styled.h2`
    font-size: ${(props) => props.theme.fontxxl};
    font-family: 'sora', cursive;
    text-transform: capitalize;
    color: ${(props) => props.theme.body};
    align-self: flex-start;
    width: 80%;
margin: 0 auto;
text-shadow: 0 0 10px rgb(192 219 255 / 75%), 0 0 32px rgb(65 120 255 / 24%);

@media (max-width: 64em){
    width: 100%;
    text-align: center;
}

@media (max-width: 40em){
    font-size: ${(props) => props.theme.fontxl};
}

@media (max-width: 30em){
    font-size: ${(props) => props.theme.fontlg};
}
`
const SubText = styled.p`
    font-size: ${(props) => props.theme.fontlg};
    font-family: 'sora', cursive;
    color: ${(props) => props.theme.body};
    align-self: flex-start;
    width: 80%;
margin: 1rem auto;
font-weight:400;
text-shadow: 0 0 10px rgb(192 219 255 / 75%), 0 0 32px rgb(65 120 255 / 24%);

@media (max-width: 64em){
    width: 100%;
    text-align: center;
    font-size: ${(props) => props.theme.fontmd};
}

@media (max-width: 40em){
    font-size: ${(props) => props.theme.fontmd};
}

@media (max-width: 30em){
    font-size: ${(props) => props.theme.fontsm};
}
`
const SubTextLight = styled.p`
    font-size: ${(props) => props.theme.fontmd};
    font-family: 'sora', cursive;
    background: linear-gradient(to right, #30CFD0, #c43ad6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
    align-self: flex-start;
    width: 80%;
margin: 1rem auto;
font-weight:400;
text-shadow: 0 0 15px rgb(192 219 255 / 30%), 0 0 50px rgb(65 120 255 / 30%);

@media (max-width: 64em){
    width: 100%;
    text-align: center;
    font-size: ${(props) => props.theme.fontsm};
}

@media (max-width: 40em){
    font-size: ${(props) => props.theme.fontsm};
}

@media (max-width: 30em){
    font-size: ${(props) => props.theme.fontxs};
}
`

const ButtonContainer = styled.div`
width: 80%;
margin: 1rem auto;
display: flex;
align: flex-start;

@media (max-width: 64em){
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

button{
    margin: 0 auto;
}
}
`


const About = () => {
    return (
        <Section id="about">
            <Container>
                <Box> <Carousel/> </Box>
                <Box> 
                <Title>
                Welcome To 
                Just'die Club.
                </Title>
                <SubText>
                Just'die Genesis is a Next Generation of PFPs & NFT Collectibles, on zkSync Era mainnet.   
                </SubText>
                <SubTextLight>
                With more than 200+ traits, each NFT is unique and comes with a membership to an exclusive group of successful investors. Join an ambitious ever-growing community with multiple benefits and utilities.    
                </SubTextLight>
                <ButtonContainer>
                <ThemeProvider theme={dark}>


                <a href="https://discord.gg/BFzfRykJ7m" target='_blank' 
            rel="noopener noreferrer"
            >
                <Button text="Join Discord" />
            </a>


                </ThemeProvider>
                </ButtonContainer>
                 </Box>
            </Container>

        </Section>
    )
}

export default About