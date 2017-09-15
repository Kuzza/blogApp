import React, { Component } from 'react'
import styled from 'styled-components'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react'
import { fetchPlaces } from '../actions'
import { connect } from 'react-redux'
import _ from 'lodash'


const MapBox = styled.div`
  height: 50rem;
`;


export class MapContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    };

    // binding this to event-handler functions
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClicked = this.onMapClicked.bind(this);
  }

  componentDidMount () {
    this.props.fetchPlaces();
  }

  onMarkerClick (props, marker, e) {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

  onMapClicked (props) {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  }

  render() {
    return (
      <Map google={this.props.google}
          onClick={this.onMapClicked}
          initialCenter={{
            lat: 0,
            lng: 99
          }}
          zoom={5}>
        { this.props.places.map( p => <Marker
          onClick={this.onMarkerClick}
          title={p.name}
          name={p.name}
          position={{lat: parseFloat(p.latitude), lng: parseFloat(p.longitude)}} /> )}

        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow>
      </Map>
    );
  }
}


const mapStateToProps = state => {
  return {
    places: state.places
  }
}


export const MP = connect(
  mapStateToProps,
  { fetchPlaces }
)(MapContainer)


export const MapWrapper = GoogleApiWrapper({
  apiKey: ('AIzaSyBwgfKL7f_HzUSrsJHF1wOU4tx7IOzVhWo')
})(MP)


export class MapPage extends Component {

  render() {
    return (
      <MapBox>
        <MapWrapper />
      </MapBox>
    )
  }
};

