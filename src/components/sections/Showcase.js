import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Picshowcase from '../Picshowcase'




const Section = styled.section`
min-height: 70vh;
width: 100%;
background-color: ${props => props.theme.text};
font-family: 'sora', cursive;
display: flex;
justify-content: center;
align-items: center;
position: relative;
`



const Container = styled.div`
width: 100%;
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

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

@media (max-width: 40em){
    min-hetght: 50vh;
  }
`




const About = () => {
    return (
        <Section id="showcase">
            

            <Container>
            
            <Box> <Picshowcase /> </Box>
                
            </Container>

        </Section>
    )
}

export default About