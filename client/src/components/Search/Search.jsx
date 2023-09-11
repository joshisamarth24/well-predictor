import React, { useState } from 'react';
import { Button, TextField, Typography, Paper } from '@mui/material';
import useStyles from './styles';

const Search = ({ onSearch }) => {
  const classes = useStyles();
  const [location, setLocation] = useState('');

  const handleSearch = () => {
    if (location) {
      onSearch(location);
    }
  };

  return (
    <Paper className={classes.root}>
      <Typography variant="h6" className={classes.title}>
        Search Location
      </Typography>

      <TextField 
        label="Enter Location" 
        variant="outlined" 
        fullWidth 
        className={classes.inputField}
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />

      <Button 
        variant="contained" 
        color="primary" 
        className={classes.searchButton}
        onClick={handleSearch}
      >
        Search
      </Button>

      <Button 
        variant="text" 
        className={classes.geoButton}
        onClick={() => {
          // TODO: Implement Geolocation logic
        }}
      >
        Use My Location
      </Button>
    </Paper>
  );
};

export default Search;