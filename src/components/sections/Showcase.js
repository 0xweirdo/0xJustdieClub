import React from 'react'
import styled, { keyframes } from 'styled-components'

import img1 from '../../assets/Nfts/Justdie.jpg'
import img2 from '../../assets/Nfts/Justdie-1.jpg'
import img3 from '../../assets/Nfts/Justdie-2.jpg'
import img4 from '../../assets/Nfts/Justdie-3.jpg'
import img5 from '../../assets/Nfts/Justdie-4.jpg'
import img6 from '../../assets/Nfts/Justdie-5.jpg'

const Section = styled.section`
min-height: 100vh;
width: 100vw;
background-color: ${props => props.theme.text};
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
position: relative;


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
                <NftItem img={img1} />
                <NftItem img={img2} />
                <NftItem img={img3} />
                <NftItem img={img4} />
                <NftItem img={img5} />
                <NftItem img={img6} />
            </Row>
        </Section>
    )
}

export default Showcase