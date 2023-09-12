import "mapbox-gl/dist/mapbox-gl.css";
import React, { useRef, useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import geoJson from "./MapConstant.json";
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import Search from "../Search/Search";
import "./map.css"
import wellIcon from "./water-well.png"
import { Button } from "@mui/material";
import useStyles from "./styles";
// import Demo from "./demo.js";
import locationicon from "./locationicon.png";
mapboxgl.accessToken = 'pk.eyJ1IjoidHVzaGFyNDUiLCJhIjoiY2xtOWpoZnN1MGtzbDNwbzVnZHU2dzlhcCJ9.ajMoNWOXT4hbizwr9nvxUg';

const markers = [];

const Map=()=> {
  const Navigate = useNavigate();
  const classes = useStyles();
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(78.9629);
  const [lat, setLat] = useState(20.5937);
  const [zoom, setZoom] = useState(1);
  const [cd,setCD] = useState(null);
  const [georesult,setGeoResult] = useState(false);


  // if("geolocation" in navigator){
  //   navigator.geolocation.getCurrentPosition(position=>{
  //     const longitude = position.coords.longitude;
  //     const latitude=position.coords.latitude;
  //     console.log(longitude,latitude);
  //   }, error=>console.log(error)
  //   )
  // }else{
  //   console.log("geolocation not available");
  // }



  useEffect(() => {

    if (map.current) return; 
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/satellite-streets-v12',
      center: [78.3553, 22.9132],
      zoom: zoom,
   
    });
    // map.current.on('style.load', () => {
    //   map.current.addSource('mapbox-dem', {
    //   'type': 'raster-dem',
    //   'url': 'mapbox://mapbox.mapbox-terrain-dem-v1',
    //   'tileSize': 512,
    //   'maxzoom': 30
    //   });
    //   // add the DEM source as a terrain layer with exaggerated height
    //   map.current.setTerrain({ 'source': 'mapbox-dem', 'exaggeration': 1.5 });
    //   });
      
    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });

  

    map.current.on("load", function () {
     
        // Add an image to use as a custom marker
        map.current.loadImage(
          wellIcon,
          function (error, image) {
            if (error) throw error;
            map.current.addImage("custom-marker", image);
            // Add a GeoJSON source with multiple points
            map.current.addSource("points", {
              type: "geojson",
              data: {
                type: "FeatureCollection",
                features: geoJson.features,
              },
            });
                 // Add a symbol layer
          map.current.addLayer({
            id: "points",
            type: "symbol",
            source: "points",
            layout: {
              "icon-image": "custom-marker",
              "icon-size": [
                "interpolate",
                ["linear"],
                ["zoom"],
                0, 0,   // At zoom level 0, set icon-size to 0.5 (half the original size)
                10, 0.05,  // At zoom level 10, set icon-size to 1.0 (original size)
                15, 0.08   // At zoom level 15, set icon-size to 2.0 (double the original size)
              ],
              // get the title name from the source's "title" property
              "text-field": ["get", "title"],
              "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
              "text-offset": [0, 1.25],
              "text-anchor": "top",
            },
          });
        }
      );
    });

    // Add the control to the map.
    const geocoder=
        new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
         }) ;
        geocoder.on("result", function (e) {
            const cd=e.result.geometry.coordinates;
            setCD(cd);
            setGeoResult(true);
            console.log(cd);
        })
        map.current.addControl(geocoder);
    // Add navigation control (the +/- zoom buttons)
    map.current.addControl(new mapboxgl.NavigationControl(), "top-right");
    const geolocateControl = new mapboxgl.GeolocateControl({
      positionOptions: {
      enableHighAccuracy: true
      } ,
      trackUserLocation: true,
      showUserHeading: true,
      }
      );
      map.current.addControl(geolocateControl);
      geolocateControl.on('geolocate', (e) => {
        setGeoResult(true);
        const currentCoordinates = [e.coords.longitude, e.coords.latitude];
        console.log('Current Coordinates:', currentCoordinates);
        
      });

    
      map.current.on('click', (e) => {
        const clickedCoordinates = e.lngLat;
        console.log(clickedCoordinates);
        setGeoResult(true);
      
        // Remove existing markers from the map
        markers.forEach((marker) => marker.remove());
        markers.length = 0;
      
        // Create a marker element with the location icon image
        const markerElement = document.createElement('div');
        markerElement.className = 'location-icon'; // Add a class for styling
        markerElement.style.backgroundImage = `url(${locationicon})`; // Replace with the path to your location icon image
        markerElement.style.width = '50px'; // Set the width of the icon
        markerElement.style.height = '50px'; // Set the height of the icon
      
        // Create a new marker with the location icon
        const marker = new mapboxgl.Marker(markerElement)
          .setLngLat(clickedCoordinates)
          .addTo(map.current);
      
        // Add the marker to the markers array
        markers.push(marker);
      
        // Set the map center to the clicked coordinates
        map.current.setCenter(clickedCoordinates);
      });
        
    // // Clean up on unmount
    // return () => map.current.remove();

  },[]);

  return (
    <div> 
            <div className="sidebar">
              Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
            </div>
            
          <div ref={mapContainer} className="map-container" >
          {(georesult)&&(<div className='button-container'>
            <Button variant="contained" className='button' onClick={()=>Navigate('/prediction-result')}>Predict</Button>
            </div>)}
          </div>
    </div>
  );
}

export default Map;


