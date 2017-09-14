import React, { Component } from 'react'
import styled from 'styled-components'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';


const MapBox = styled.div`
  height: 50rem;
`;

export class MapContainer extends Component {
  render() {
    return (
      <Map google={this.props.google} zoom={14}>
      </Map>
    );
  }
}


export const MapWrapper = GoogleApiWrapper({
  apiKey: ('AIzaSyBwgfKL7f_HzUSrsJHF1wOU4tx7IOzVhWo')
})(MapContainer)


export class MapPage extends Component {

  render() {
    return (
      <MapBox>
        <MapWrapper />
      </MapBox>
    )
  }
};