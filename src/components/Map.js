import React, { useState, useEffect } from 'react'
import './Map.css';
import ReactMapGL, {Marker, Popup} from "react-map-gl"
import * as restaurantData from "../data/restaurants.json"
import logoCutlery from '../img/cutlery.svg'


export default function Map() {
  const [viewport, setViewport] = useState({
    latitude: 43.5277, 
    longitude: 5.45873,
    width: "100vw", //valeur à recevoir en prop
    height: "100vh", //valeur à recevoir en prop
    zoom: 14,
    //possibilité d'intégrer des variables css pour faire varier les dimensions de la map
  })
  const [selectedRestaurant, setSelectedRestaurant] = useState(null)

  
  useEffect( () => {
    const listener = e => {
      if( e.key === "Escape" ) {
        setSelectedRestaurant(null);
      }
    }
    window.addEventListener("keydown", listener)
    
    return () => {
      window.removeEventListener("keydown", listener)
    } //remove the event on "Escape" when App is unmounted
  }, [])

  

  return (
    <div className="map">
      <ReactMapGL {...viewport} 
      mapboxApiAccessToken={"pk.eyJ1IjoiYW1lbGllbGMiLCJhIjoiY2p3YXZ1ZTFzMDZwdTN5bzFsdzZxYmJzMiJ9.rUx0VnEYBnJkDnTmrvH1jQ"}
      onViewportChange={(viewport) => {setViewport(viewport)}}
      mapStyle="mapbox://styles/amelielc/cjwgpybys051y1coo8y55hpwe"
      >
        {restaurantData.features.map(restaurant => (
          <Marker 
          key={restaurant.ID}
          latitude={restaurant.latitude}
          longitude={restaurant.longitude}
          >
            <button className="marker-btn"
            onMouseEnter={ (e) => {
              e.preventDefault();
              setSelectedRestaurant(restaurant);
            }}
            onMouseLeave={(e) => {
              e.preventDefault();
              setSelectedRestaurant(null);
            }}
            onClick={ (e) => {
              e.preventDefault();
              setSelectedRestaurant(restaurant);
            }}>
              <img src={logoCutlery} alt="Restaurant Icon"/>
            </button>
            </Marker>
            ))}

            { selectedRestaurant && (
              <Popup 
              latitude={selectedRestaurant.latitude} 
              longitude={selectedRestaurant.longitude}
              onClose={() => {
                setSelectedRestaurant(null)
              }}
              >
                <div>
                  <h3>{selectedRestaurant.name}</h3>
                  <p>Latitude : {selectedRestaurant.latitude}</p>
                  <p>Longitude :{selectedRestaurant.longitude}</p>
                </div>
              </Popup>
            )}
      </ReactMapGL>
    </div>
    ) 
  }