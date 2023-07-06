import React from 'react'
import styled from 'styled-components'



const Section = styled.section`
min-height: 100vh;
width: 100vw;
background-color: ${props => props.theme.body};
position: relative;
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
width: 100%;
height: 100vh;

background-color: ${(props) => props.theme.body};
display: flex;

justify-content: center;
align-items: center;


@media (max-width: 70em){
    width: 100%;
    
}

@media (max-width: 64em){
    width: 100%;
    flex-direction: column;

    &>*:last-child{
        width: 100%;
    }

@media (max-width: 40em){

    &>*:last-child{
        width: 100%;
    }
}
`


const Items = styled.ul`
list-style: none;
width: 100%;
height: 100%;
min-height: 10vh;
display: flex;
flex-direction: column;
justify-content: center;
text-align: center;

background-color: none;

@media (max-width: 64em){
    width: 100%;
    justify-content: center;
    text-align: center;
    
}
`

const Item = styled.li`
width: 100%;
height: 100%;
display: flex;
justify-content: center;


@media (max-width: 64em){
    width: 100%;
    justify-content: center;
    text-align: center;
    
}
`

const ItemContainer =styled.div`
width: 90%;
height: fit-content;
padding: 1rem;

border-radius: 20px;
display: flex;
justify-content: center;
text-align: center;

@media (max-width: 64em){
    width: 100%;
    height: 90%
    justify-content: center;
    text-align: center;
}
`

const Box = styled.p`
height: fit-content;
background-color: ${props => props.theme.carouselColor};
color: ${props => props.theme.text};
padding: 1rem;
position: relative;
border: 1px solid ${props => props.theme.text}; 
border-radius: 20px;
display: flex;
flex-direction: column;
justify-content: center;
text-align: center;

@media (max-width: 64em){
    width: 90%;
    justify-content: center;
    text-align: center;
}
`

const SubTitle = styled.span`
display: block;
font-size: ${props => props.theme.fontxxl};
text-transform:capitalize;
color: ${props => props.theme.text};
font-family: 'sora', cursive;

@media (max-width: 64em){
    width: 100%;
    justify-content: center;
    text-align: center;
    font-size: ${(props) => props.theme.fontxl};
}

@media (max-width: 40em){
    font-size: ${(props) => props.theme.fontlg};
}

@media (max-width: 30em){
    font-size: ${(props) => props.theme.fontsm};
}
`;

const Text = styled.span`
display: block;
font-size: ${props => props.theme.fontsm};
text-transform:capitalize;
color: ${props => props.theme.text};
font-family: 'sora', cursive;
font weight:400;
margin: 0.5rem 0;

@media (max-width: 64em){
    width: 100%;
    text-align: center;
    font-size: ${(props) => props.theme.fontmd};
}

@media (max-width: 40em){
    font-size: ${(props) => props.theme.fontsm};
}

@media (max-width: 30em){
    font-size: ${(props) => props.theme.fontxs};
}
`;



const RoadMapItem = ({title, subtext}) => {

    return(
        <Item>
            <ItemContainer>
                <Box>
                    <SubTitle> {title} </SubTitle>
                    <Text> {subtext} </Text>
                </Box>
            </ItemContainer>
        </Item>
    )
}

const Roadmap = () => {
    return (
        <Section id="roadmap">
            <Title>Roadmap</Title>
                <Container>
                    <Items>
                    <RoadMapItem title="Hold to Earn" subtext="Participants are eligible for future airdrops." />
                    
                    <RoadMapItem title="Mint to Earn" subtext="Justdie holders have the right to win lottery tickets. Every time there is a project Just'mint " />
                   
                    <RoadMapItem title="Alpha WL/Airdrop Holder" subtext="this is usub text" />
                </Items>
                <Items>
                
                    <RoadMapItem title="Incubuctor" subtext="Incubuctor Early  Project NFTs on zkSync and L2 Chains" />
                
                    <RoadMapItem title="NFT+LSD" subtext="Non-Fungible Token Liquid Stake Derivertive is a project that takes ETH and deposits it into a Validator node." />
                
                    <RoadMapItem title="Future Airdrop" subtext="Token and NFTs." />
                </Items>
                
                
                
                
                </Container>
        </Section>
    )
}

export default Roadmap