var map;
var marker;
var coords;

function initMap() {
  setCoord(33.135757, -36.242075, 13);

  google.maps.event.addListenerOnce(map, 'idle', function(){
    document.querySelector(".gm-style-pbc").classList.add("darken");
  });
}

function setMarker(coords, m) {

  marker = new google.maps.Marker({
    position: coords,
    map: m,
    icon: "assets/pin.png"
  });
}

function setCoord(latitude, longitude, z) {
  coords = {lat: latitude, lng: longitude};

  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 3,
    mapTypeControl: false,
    disableDefaultUI: true,
    center: coords,
    styles: [
      {
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#ffffff"
          }
        ]
      },
      {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#000000"
          },
          {
            "lightness": 13
          }
        ]
      },
      {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#000000"
          }
        ]
      },
      {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#144b53"
          },
          {
            "lightness": 14
          },
          {
            "weight": 1.4
          }
        ]
      },
      {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
          {
            "color": "#08304b"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#0c4152"
          },
          {
            "lightness": 5
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#000000"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#0b434f"
          },
          {
            "lightness": 25
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#000000"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#0b3d51"
          },
          {
            "lightness": 16
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#000000"
          }
        ]
      },
      {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
          {
            "color": "#146474"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
          {
            "color": "#021019"
          }
        ]
      }
    ]
  });

  setMarker(coords, map);
}
