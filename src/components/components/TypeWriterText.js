import React from 'react'
import styled from 'styled-components'
import Typewriter from 'typewriter-effect';
import Button from "./Button"

const Title = styled.h2`
font-size: ${(props) => props.theme.fontxxl};
font-family: 'sora', cursive;
text-transform: capitalize;
width: 80%;
color: ${(props) => props.theme.text};
align-self: flex-start;

@media (max-width: 70em) {
  font-size: ${(props) => props.theme.fontxl};
}

@media (max-width: 48em) {
  align-self: center;
  text-align:center;
}

@media (max-width: 40em) {
  width: 90%;
}
`
const SubTitle = styled.h3`
font-size: ${(props) => props.theme.fontlg};
font-family: 'sora', cursive;
text-transform: capitalize;
color: ${props => `rgba(${props.theme.textRgba}, 0.8)`};
font-weight:600;
margin-bottom: 1rem;
width: 80%;
align-self: flex-start;

@media (max-width: 40em) {
  font-size: ${(props) => props.theme.fontmd};
}

@media (max-width: 48em) {
  align-self: center;
  text-align:center;
}


`

const ButtonContainer = styled.div`
width: 80%;
align-self: flex-start;

@media (max-width: 48em) {
  align-self: center;
  text-align:center;

  button{
    margin: 0 auto;
  }
}
`

const TypeWriterText = () => {
    return (
      <>
      <Title>
          Discover a new era of
          <Typewriter
          options={{
              strings: ['NFTs', 'Community', 'Arts'],
              autoStart: true,
              loop: true,
            }}
  />
    
      </Title>
      <SubTitle>Something New?</SubTitle>
      <ButtonContainer>
      <a href="https://twitter.com/justdieclub" target='_blank' 
            rel="noopener noreferrer"
            >
                <Button text="Explore" />
            </a>
      </ButtonContainer>
      
      </>
    )
  }

export default TypeWriterText