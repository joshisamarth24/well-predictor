import "mapbox-gl/dist/mapbox-gl.css";
import React, { useRef, useEffect, useState } from 'react';
import './index.css';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import geoJson from "./chicago-parks.json";
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import wellIcon from "./water-well.png"
// import Demo from "./demo.js";
mapboxgl.accessToken = 'pk.eyJ1IjoidHVzaGFyNDUiLCJhIjoiY2xtOWpoZnN1MGtzbDNwbzVnZHU2dzlhcCJ9.ajMoNWOXT4hbizwr9nvxUg';

const Map=()=> {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);
  const [cd,setCD] = useState(null);


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
        mapboxgl: mapboxgl
         }) ;
        map.current.addControl(geocoder, "top-right");
        geocoder.on("result", function (e) {
            const cd=e.result.geometry.coordinates;
            setCD(cd);
            console.log(cd);
        })

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
        const currentCoordinates = [e.coords.longitude, e.coords.latitude];
        console.log('Current Coordinates:', currentCoordinates); });
    
    // // Clean up on unmount
    // return () => map.current.remove();

  },[]);

  return (
    <div> 
            <div className="sidebar">
              Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
            </div>
          <div ref={mapContainer} className="map-container" />
          {/* <Demo coordinates={cd} /> */}
    </div>
  );
}

export default Map;


