import React from 'react'
import styled, { keyframes } from 'styled-components'

import img1 from '../../assets/Nfts/Justdie_Party.svg'
import img2 from '../../assets/Nfts/Justdie1_Party.svg'
import img3 from '../../assets/Nfts/Justdie2_Party.svg'
import img4 from '../../assets/Nfts/Justdie3_Party.svg'
import img5 from '../../assets/Nfts/Justdie4_Party.svg'
import img6 from '../../assets/Nfts/Justdie5_Party.svg' 
import img7 from '../../assets/Nfts/Justdie6_Party.svg' 
import img8 from '../../assets/Nfts/Justdie7_Party.svg' 
import img9 from '../../assets/Nfts/Justdie8_Party.svg' 
import img10 from '../../assets/Nfts/Justdie9_Party.svg' 
import img11 from '../../assets/Nfts/Justdie10_Party.svg' 
import img12 from '../../assets/Nfts/Justdie11_Party.svg' 

const Section = styled.section`
min-height: 100vh;
width: 100vw;
background-color: ${props => props.theme.text};
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
position: relative;

@media (max-width: 30em){
    animation-duration: 15s;
}
`

const move = keyframes`
0%{ transform: translateX(100%)};
100%{ transform: translateX(-100%)}

`

const Row = styled.div`
background-color: none;
white-space: nowrap;
bow-sizing:centent-box;
margin: 2rem 0;
display: flex;

animation: ${move} 20s linear infinite ${props => props.direction};


`

const ImgContainer = styled.div`
width: 15rem;
margin: 0 1rem;
background-color:${props => props.theme.body};

border-radius: 10px;
cursor: pointer;
padding: 10px;



display: flex;
justify-content: center;
align-items: center

@media (max-width: 48em){
    width: 12rem;
}
@media (max-width: 30em){
    width: 10rem;
}

img{
    width: 100%;
    heigth: 100%;

}
`

const NftItem = ({img, number=0, price=0}) => {

    return(
        <ImgContainer>
            <img src={img} alt="The weirdos"  />
            
        </ImgContainer>
    )
}

const Showcase = () => {
    return (
        <Section id="showcase">
            <Row direction="none">
                <NftItem img={img1} />
                <NftItem img={img2} />
                <NftItem img={img3} />
                <NftItem img={img4} />
                <NftItem img={img5} />
                <NftItem img={img6} />
            </Row>
            <Row direction="reverse">
                <NftItem img={img7} />
                <NftItem img={img8} />
                <NftItem img={img9} />
                <NftItem img={img10} />
                <NftItem img={img11} />
                <NftItem img={img12} />
            </Row>
        </Section>
    )
}

export default Showcase