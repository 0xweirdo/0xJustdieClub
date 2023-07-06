import React from 'react'
import styled, { keyframes } from 'styled-components'


const Bounce = keyframes`
from { transform: translateX(-50%) scale(0.5);  }
to { transform: translateX(-50%) scale(1);  }

`

const Ball = styled.div`
position: absolute;
top: 0;
left: 50%;
transform: translateX(-50%);
width: 1.5rem;
height: 1.5rem;
border-radius: 50%;
background-color: ${props => props.theme.text};
animation: ${Bounce} 0.5s linear infinite alternate;
`



const DrawSvg = () => {
  return (
    <>
      <Ball />
    </>
  )
}

export default DrawSvg