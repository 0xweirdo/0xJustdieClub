import React, { useLayoutEffect, useRef } from 'react'
import styled from 'styled-components';
import Accordion from '../Accordion';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';



const Section = styled.section`
min-height: 100vh;
height: auto;
width: 100vw;
background-color: ${props => props.theme.text};
position: relative;
color: ${(props) => props.theme.body};
font-family: 'sora', cursive;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
text-shadow: 0 0 15px rgb(192 219 255 / 50%), 0 0 50px rgb(65 120 255 / 20%);
`

const Title = styled.h1`
font-size: ${(props) => props.theme.fontxxl};
font-family: 'sora', cursive;
text-transform: capitalize;
margin: 1rem auto;
border-bottom: 2px solid ${(props) => props.theme.body};
width: fit-content;

@media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
}
`;

const Container = styled.div`
width: 75%;
margin: 2rem auto;

display: flex;
justify-content: space-between;
align-content: center;

@media (max-width: 64em) {
    width: 80%;
}

@media (max-width: 48em) {
    width: 90%;
    flex-direction: column;

    &>*:last-child{
        &>*:first-child{
            margin-top: 0;
        }
    }
}
`

const Box = styled.div`
width: 45%;
@media (max-width: 64em) {
    width: 90%;
    align-self: center;
}
`

const Faq = () => {

const ref = useRef(null);
gsap.registerPlugin(ScrollTrigger);
useLayoutEffect(() => {
  
    let element = ref.current;

    ScrollTrigger.create({
        trigger: element,
        start:'top top',
        end:'bottom top',
        pin:true,
        pinSpacing:false,
        scrub:true,
        // marker:true,
    })

  return () => {
    
  };
}, [])

    return (
        <Section ref={ref} id="faq"> 
            <Title>Faq</Title>

        <Container>
    <Box>
        <Accordion title="WHERE CAN I VIEW MY NFTS?" >
        Once minted or bought simply connect to Zonic.app to view your NFTs.
        </Accordion>
        <Accordion title="WHAT IS THE JUST'VERSE?" >
        Just'verse is a community focused on social connections on web3. Through NFTs, we will be a community-driven force to reach more web3 engagements on the zk-sync network.
        </Accordion>
        <Accordion title="WHY DO WE NEED ROYALTIES?" >
        The amount of royalties was fixed at 5% to finance Just'die Club projects. We have the ambition to organize multiple events around the world in order to strengthen the community and build a network of entrepreneurs and investors with the same mindset and common interests.
        </Accordion>
    </Box>
    <Box>
        <Accordion title="HOW CAN I USE MY NFT?" >
        You will be able to use your NFT as an avatar on Twitter, Discord, and our future Stake. Holding also means that you are part of an exclusive network of investors and entrepreneurs.        </Accordion>
        <Accordion title="WHAT ARE JUST'DIE CLUB?" >
        Just'die Genesis is a Next Generation of PFPs & NFT Collectibles, on zkSync Era.        
        </Accordion>
        <Accordion title="WHAT IS THE FUSION PROCESS?" >
        The fusion process is a fusion of Just'die and something with the ability to make ordinary objects extraordinary.        </Accordion>
    </Box>
        </Container>
        </Section>
    )
}

export default Faq