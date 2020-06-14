
import React from 'react'
// import { AppSwitch } from '@coreui/react'
import { Row } from 'reactstrap';

// var map, infoWindow, marker, markers, geoCodeValue;
var map, pos, panorama, infoWindow;

class AgentMap extends React.PureComponent {
  constructor(props) {
    super(props)

    this.googleMapRef = React.createRef()
    this.initMap = this.initMap.bind(this)
    this.addRoute = this.addRoute.bind(this)
    this.handleLocationError = this.handleLocationError.bind(this)
    this.processSVData = this.processSVData.bind(this)
  }

  componentDidMount() {
    let googleScript = document.createElement('script');
    googleScript.src = "https://maps.googleapis.com/maps/api/js?key=xxxAIzaSyBKHdFymwu91lTBTQBDgltrFaXPD6TxY2g"
    googleScript.async = true
    window.document.body.appendChild(googleScript)
    googleScript.addEventListener('load', this.initMap)
  }

  initMap() {
    var google = window.google;

    let addRoute = this.addRoute
    let handleLocationError = this.handleLocationError
    let processSVData = this.processSVData

    var latlong = { lat: 6.50954222424663, lng: 3.370920970651687 };
    var sv = new google.maps.StreetViewService();
    panorama = new google.maps.StreetViewPanorama(document.getElementById('pano'));
    // Set up the map.
    map = new google.maps.Map(document.getElementById('map'), {
      center: latlong,
      zoom: 15,
      streetViewControl: false
    });

    infoWindow = new google.maps.InfoWindow();
    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      pos = { lat: 6.60954222424663, lng: 3.370920970651687 }
      navigator.geolocation.getCurrentPosition(function (position) {
        pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        if (pos !== undefined) {
          console.log(pos);
          addRoute();
        }
      }, function () {
        addRoute()
        handleLocationError(true, infoWindow, map.getCenter());
      });
    } else {
      addRoute()
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }
    // Set the initial Street View camera to the center of the map
    sv.getPanorama({ location: null, radius: 50 }, processSVData);
    map.addListener('click', function (event) {
      sv.getPanorama({ location: event.latLng, radius: 50 }, processSVData);
    });

  }

  addRoute() {
    var google = window.google;

    var directionsRenderer = new google.maps.DirectionsRenderer();
    var directionsService = new google.maps.DirectionsService();
    directionsRenderer.setMap(map);
    directionsRenderer.setPanel(document.getElementById('right-panel'));
    if (pos === undefined) {
      var start = { lat: 6.60157422424999, lng: 3.360932070651222 };
    } else {
      start = pos;
    }
    var end = { lat: 6.60157222424999, lng: 3.360920570651222 };
    directionsService.route({
      origin: start,
      destination: end,
      travelMode: 'DRIVING'
    }, function (response, status) {
      if (status === 'OK') {
        directionsRenderer.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }

  processSVData(data, status) {
    if (status === 'OK') {
      if (data !== null) {
        var google = window.google;

        var marker = new google.maps.Marker({
          position: data.location.latLng,
          map: map,
          title: data.location.description
        });
      }

      panorama.setPano(data.location.pano);
      panorama.setPov({
        heading: 270,
        pitch: 0
      });
      panorama.setVisible(true);

      marker.addListener('click', function () {
        var markerPanoID = data.location.pano;
        // Set the Pano to use the passed panoID.
        panorama.setPano(markerPanoID);
        panorama.setPov({
          heading: 270,
          pitch: 0
        });
        panorama.setVisible(true);
      });
    } else {
      console.error('Street View data not found for this location.');
    }
  }

  handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
      'Error: The Geolocation service failed.' :
      'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
  }

  render() {
    // let { searchBox, addressBox } = this.state
    // console.log(addressBox)
    return (
      <Row>
        <div className="container_agent">
          <div className="map_container">
            <div id="map"></div>
          </div>
          <input type="checkbox" id="one" name="" value="" />
          <label htmlFor="one" className="one">
            <div type="button" className="route_button" name="button">Route</div>
          </label>
          <span className="horizontal_rule"></span>

          <div className="route">
            <div id="right-panel"></div>
          </div>
          <input type="checkbox" id="two" name="" value="" />
          <label htmlFor="two" className="two">
            <div type="button" name="button" className="street_button" >Imagery</div>
          </label>
          <div className="street">
            <div id="pano"></div>
          </div>
        </div>
      </Row>
    )
  }
}
export default AgentMap