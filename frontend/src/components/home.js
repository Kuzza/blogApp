import React, { Component } from 'react'
import styled from 'styled-components'

import img from '../images/main.jpg'
//import { TravelBox } from './travel-box'


const Image = styled.img`
  width: 100%;
`;


export class Home extends Component {

  render() {
    return (
      <div>
        <Image src={img} />
      </div>
    )
  }
};