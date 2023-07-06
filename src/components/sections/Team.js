import React from 'react'
import styled from 'styled-components';

import img1 from '../../assets/Nfts/JustdieMain-01.png';
import ConfettiComponent from '../Confetti';

const Section = styled.section`
min-height: 100vh;
width: 100vw;
background-color: ${props => props.theme.body};
position: relative;

@media (max-width: 64em) {
    width: 100%;
}
`

const Title = styled.h1`
font-size: ${(props) => props.theme.fontxxl};
font-family: 'sora', cursive;
text-transform: capitalize;
color: ${(props) => props.theme.text};
display: flex;
justify-content: center;
align-items: center;
margin: 1rem auto;
border-bottom: 2px solid ${(props) => props.theme.text};
width: fit-content;
`;

const Container = styled.div`
width: 75%
margin: 2rem auto;

display: flex;
justify-content: space-around;
align-items: center;
flex-wrap: wrap;

@media (max-width: 64em) {
    width: 100%;
}
@media (max-width: 48em) {
    width: 100%;
    justify-content: center;
}

`

const Item = styled.div`
width: calc(20rem - 4vw);
padding: 1rem 0;
color: ${props => props.theme.body};
margin: 2rem 1rem;
position: relative; 
z-index:5;

backdrop-filter: blur(4px);

border-radius: 20px;
background-image: linear-gradient(to right, rgb(1 134 218), rgb(182 49 167));
`

const ImageContainer = styled.div`
width: 80%;
margin: 0 auto;
background-color:${props => props.theme.body};

padding: 1rem;

border-radius: 20px;
cursor: pointer;


img{
    width: 100%;
    height: auto;
    transition: all 0.3s ease;
}
`

const Name = styled.h2`
font-size: ${props => props.theme.fontlg};
display: flex;
align-items: center;
justify-content: center;
text-transform: uppercase;
text-color: white;
text-shadow: 0 0 15px rgb(192 219 255 / 80%), 0 0 50px rgb(65 120 255 / 30%);
margin-top: 1rem;
`
const Position = styled.h2`
font-size: ${props => props.theme.fontmd};
display: flex;
align-items: center;
justify-content: center;
text-transform: capitalize;
text-color: white;
text-shadow: 0 0 15px rgb(192 219 255 / 80%), 0 0 50px rgb(65 120 255 / 30%);
font-weigth:400;
`

const MemberComponent =({img, name=" ",position=" "}) => {

    return(
        <Item>
            <ImageContainer>
                <img src={img} alt={name} />
            </ImageContainer>
                    <Name>{name}</Name>
                    <Position>{position}</Position>
                
        </Item>
    )
}

const Team = () => {
    return (
        <Section id="team">
            <ConfettiComponent />
            <Title>Team</Title>
            <Container>
            <MemberComponent img={img1} name="Weirdo" position="founder" />
            </Container>
        </Section>
    )
}

export default Team
