import React from 'react'
import styled from 'styled-components'

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";


import { Navigation, Autoplay, EffectCoverflow, Pagination } from 'swiper';

import img1 from '../assets/Nfts/Justdie_Party.svg'
import img2 from '../assets/Nfts/Justdie1_Party.svg'
import img3 from '../assets/Nfts/Justdie2_Party.svg'
import img4 from '../assets/Nfts/Justdie3_Party.svg'
import img5 from '../assets/Nfts/Justdie4_Party.svg'
import img6 from '../assets/Nfts/Justdie5_Party.svg'
import img7 from '../assets/Nfts/Justdie6_Party.svg'
import img8 from '../assets/Nfts/Justdie7_Party.svg'
import img9 from '../assets/Nfts/Justdie8_Party.svg'

import Arrow from '../assets/Arrow.svg';

const Container = styled.div`
width: 20vw;
height: 40vh;

@media (max-width: 70em){
  height: 50vh;
}

@media (max-width: 64em){
  height: 50vh;
  width: 40vw;
}

@media (max-width: 48em){
  height: 50vh;
  width: 40vw;
}

@media (max-width: 30em){
  height: 45vh;
  width: 65vw;
}

.swiper{
    width: 100%;
    height: 100%;
}

.swiper-slide{
    background-color: white;

    border-radius: 20px;

    display: flex;
    justify-content: center;
    align-items: center
}


.swiper-button-next{
    color: ${props => props.theme.text};
    right: 0;
    width: 4rem;

    background-image: url(${Arrow});
    background-position: center;
    background-size: center;

    &:after{
        display: none;
    }

    @media (max-width: 64em){
      width: 3rem;

    }

    @media (max-width: 30em){
      width: 2rem;

    }
}

.swiper-button-prev{
    color: ${props => props.theme.text};
    left: 0;
    width: 4rem;
    transform: rotate(180deg);
    background-image: url(${Arrow});
    background-position: center;
    background-size: center;

    &:after{
        display: none;
    }

    @media (max-width: 64em){
      width: 3rem;

    }

    @media (max-width: 30em){
      width: 2rem;

    }
}
`
const Carousel = () => {
  return (
    <Container> 
        <Swiper
        autoplay={{
            delay:2000,
            disableOnInteraction:false,
        }}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{
            type:'fraction',
        }}

        scrollbar={{
            draggable:true
        }}
        navigation={true}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img1} alt="Justdieclub" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="Justdieclub" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="Justdieclub" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="Justdieclub" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} alt="Justdieclub" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img6} alt="Justdieclub" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img7} alt="Justdieclub" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img8} alt="Justdieclub" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img9} alt="Justdieclub" />
        </SwiperSlide>
        
      </Swiper>
         
    </Container>
  )
}

export default Carousel