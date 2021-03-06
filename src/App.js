import React, { Component } from 'react';
import './App.css';

let mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
mapboxgl.accessToken = 'pk.eyJ1Ijoia2Nob2Rvcm93IiwiYSI6ImNqOHJnOGJwYTB4cWgzNG1sM2R3aXZtcjkifQ.1ikua6DTg__rSkdX9GoZ2Q';

class App extends Component { 
  render() {
    return <Map/>;
  }
}

class Map extends React.Component {
  componentDidMount() {
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/light-v9'
    });
    this.map.addControl(new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true
      },
      trackUserLocation: true
    }));
    let r = this;
    this.map.on('click', function(e) { r.handleClick(e); });
  }

  componentWillUnmount() {
    this.map.remove();
  }

  handleClick(e) {
    new mapboxgl.Marker().setLngLat([e.lngLat.lng, e.lngLat.lat]).addTo(this.map);
  }

  render() {
    const style = {
      position: 'absolute',
      top: 0,
      bottom: 0,
      width: '100%'
    };

    return <div style={style} ref={el => this.mapContainer = el}></div>;
  }

}

export default App;
