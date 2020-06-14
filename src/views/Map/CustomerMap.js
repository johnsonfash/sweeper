
import React from 'react'
import { AppSwitch } from '@coreui/react'
import { Input, Row, FormGroup } from 'reactstrap';

var map, infoWindow, marker, markers, geoCodeValue;
var google = window.google;

class CustomerMap extends React.PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      searchBox: '',
      addressBox: '',
      checked: true
    }
    this.googleMapRef = React.createRef()
    this.initAutocomplete = this.initAutocomplete.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleMapChange = this.handleMapChange.bind(this)

  }

  handleMapChange(value) {
    this.setState({
      addressBox: value
    })
  }

  handleChange(e) {
    switch (e.target.id) {
      case 'pac-input':
        this.setState({
          searchBox: e.target.value
        })
        break;
      case 'customer_address':
        this.setState({
          addressBox: e.target.value
        })
        break;
      case 'address_switch':
        this.setState({
          checked: e.target.checked
        })
        break;
      default:
        break;
    }
  }

  componentDidMount() {
    let googleScript = document.createElement('script');
    googleScript.src = "https://maps.googleapis.com/maps/api/js?key=xxxAIzaSyBKHdFymwu91lTBTQBDgltrFaXPD6TxY2g&libraries=places"
    googleScript.async = true
    window.document.body.appendChild(googleScript)
    googleScript.addEventListener('load', this.initAutocomplete)
  }

  initAutocomplete() {
    let mapToState = this.handleMapChange
    let myLatlng = { lat: 6.60954222424663, lng: 3.370920970651687 };
    infoWindow = new google.maps.InfoWindow();
    map = new google.maps.Map(this.googleMapRef.current, {
      center: myLatlng,
      zoom: 10,
      mapTypeId: 'roadmap'
    });

    map.addListener('click', function (mapsMouseEvent) {
      // Close the current InfoWindow.
      infoWindow.close();
      // Create a new InfoWindow.
      markers.forEach(function (marker) {
        marker.setMap(null);
      });

      geoCode(mapsMouseEvent.latLng);
      console.log(mapsMouseEvent.latLng.toString());
    });

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        let pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        markers.forEach(function (marker) {
          marker.setMap(null);
        });
        markers = [];
        // markers.push(marker);
        if (pos.length !== undefined) {
          geoCode(pos);
          console.log('navigation working');
        } else {
          handleLocationError(true, infoWindow, map.getCenter());
          console.log(geoCodeValue);
        }
        map.setCenter(pos);
      }, function () {
        handleLocationError(true, infoWindow, map.getCenter());
      });

    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }
    function handleLocationError(browserHasGeolocation, infoWindow, pos) {
      infoWindow.setPosition(pos);
      infoWindow.setContent(browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesn\'t support geolocation.');
      infoWindow.open(map);
    }

    // Create the search box and link it to the UI element.
    let input = document.getElementById('pac-input');
    let searchBox = new google.maps.places.SearchBox(input);
    map.addListener('bounds_changed', function () {
      searchBox.setBounds(map.getBounds());
    });

    markers = [];
    // Listen for the event fired when the user selects a prediction and retrieve
    // more details for that place.
    searchBox.addListener('places_changed', function () {
      var places = searchBox.getPlaces();
      if (places.length === 0) {
        return;
      }
      mapToState(places[0].formatted_address)
      console.log(places[0].formatted_address)

      // Clear out the old markers.
      markers.forEach(function (marker) {
        marker.setMap(null);
      });
      markers = [];

      // For each place, get the icon, name and location.
      var bounds = new google.maps.LatLngBounds();
      places.forEach(function (place) {
        if (!place.geometry) {
          console.log("Returned place contains no geometry");
          return;
        }

        console.log(place.geometry.location.toString());
        // Create a marker for each place.
        markers.push(new google.maps.Marker({
          map: map,
          title: place.name,
          position: place.geometry.location
        }));

        if (place.geometry.viewport) {
          // Only geocodes have viewport.
          bounds.union(place.geometry.viewport);
        } else {
          bounds.extend(place.geometry.location);
        }
        map.setCenter(place.geometry.location);
      });
      // map.fitBounds(bounds);
      map.setZoom(15);
    });

    function geoCode(latitudeLogitude) {
      let geocoder = new google.maps.Geocoder();
      geocoder.geocode({ 'location': latitudeLogitude }, function (results, status) {
        if (status === 'OK') {
          if (results[0]) {
            map.setZoom(16);
            marker = new google.maps.Marker({
              position: latitudeLogitude,
              map: map,
              title: results[0].formatted_address
            });
            markers.push(marker);
            infoWindow.setPosition(latitudeLogitude);
            infoWindow.setContent('Is this your location? <br> click on map to change');
            infoWindow.open(map, marker);
            geoCodeValue = results[0].formatted_address;
            if (geoCodeValue !== undefined) { mapToState(geoCodeValue) }
            console.log(results[0].formatted_address);
          } else {
            window.alert('No results found');
          }
        } else {
          window.alert('Geocoder failed due to: ' + status);
        }
      });
    }

  }

  render() {
    let { searchBox, addressBox } = this.state
    console.log(addressBox)
    return (
      <Row>
        <div className="container_map">
          <div id="map" ref={this.googleMapRef}></div>
          <FormGroup>
            <Input id="pac-input" value={searchBox} onChange={this.handleChange} className="controls" type="text" placeholder="Search" />
            <span id="switch" title="default address"><AppSwitch onChange={this.handleChange} id="address_switch" className={'mx-1'} variant={'3d'} color={'primary'} checked size={'sm'} /></span>
          </FormGroup>
          <FormGroup>
            <Input className="account_address" id="customer_address" value={addressBox} onChange={this.handleChange} type="textarea" placeholder="Adress  ( full address )" />
          </FormGroup>
          <button className="btn_save">SAVE</button>
        </div>
      </Row>
    )
  }
}
export default CustomerMap