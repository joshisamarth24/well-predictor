import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper,Typography,useMediaQuery,Grid,Box } from '@mui/material';
import { CleaningServices, LocationOnOutlined } from '@mui/icons-material';
import useStyles from "./styles";
import Header from '../Header/Header';
import Search from '../Search/Search';

const Map = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery('(min-width:600px)');
  const coordinates = {lat:20.5937,lng:78.9629};
  
  return (
    
    <Grid container spacing={3}>
    <Grid item xs={12} md={4}>
      <Search/>
    </Grid>
    <Grid item xs={12} md={8}>
    <div className={classes.mapContainer}>
    <GoogleMapReact
     bootstrapURLKeys={{ key: "AIzaSyDlL4USCM0fANdcqqkkaSU_lIcrVTBlK4c" }}
     defaultCenter={coordinates}
     center={coordinates}
     defaultZoom={5}
     margin={[50,50,50,50]}
     options={''}
     onChange={''}
     onChildClick={''}
     >
      
    </GoogleMapReact>
    </div>
    </Grid>
    </Grid>
  )
}

export default Map