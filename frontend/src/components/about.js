import React, { Component } from 'react'
import styled from 'styled-components'

import img from '../images/main-sea.jpg'


const Image = styled.img`
  height: 100%;
`;


const Box = styled.div`
  position: absolute;
  top: 3rem;
  padding: 3rem;
  text-align: center;
  font-size: 2rem;
`;


export class About extends Component {

  render() {
    let text = "Hi! I'm Erika, a software developer who sometimes go too far with the imagination and sometimes goes there in reality! I believe the life is not meant to be lived in one place, and travelling is one of the best thing you can do to with your money.. Oh and hey, you don't necessarily need much of those anyway."

    return (
      <div>
        <Box>
          {text}
        </Box>
        <Image src={img} alt={''}/>
      </div>
    )
  }
};