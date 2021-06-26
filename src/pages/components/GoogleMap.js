import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';


const container = {
    'border-radius': '20px',
    position: 'relative',
    width: '60%',
    height: '60%', 
    position: 'absolute',
    top: '10%',
    left: '20%',
    transform: 'translate(-50%, -50%)'
  }
  
class GoogleMap extends Component {
    render() {
      return (
          <Map
            style={container}
            google={this.props.google}
            initialCenter={{
              lat: 33.8869,
              lng: 9.5375
            }}
            zoom={1.9}>
            <Marker onClick={this.onMarkerClick}
              name={'Current location'} />
          </Map>
      );
    }
  }
  
  export default GoogleApiWrapper({
    apiKey: ("AIzaSyD3EkGj5k4eCFjyMCAsHK0FwnidtTzTk98")
  })(GoogleMap)