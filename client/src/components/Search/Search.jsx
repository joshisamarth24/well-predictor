import React, { useState } from 'react';
import { Button, TextField, Typography, Paper } from '@mui/material';
import TravelExploreOutlinedIcon from '@mui/icons-material/TravelExploreOutlined';
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
    <Paper className={classes.root} >


      <TextField 
        label="Enter Location" 
        variant="outlined" 
        fullWidth 
        className={classes.inputField}
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />

      <Button  
        className={classes.searchButton}
        onClick={handleSearch}
      >
        <TravelExploreOutlinedIcon/>
      </Button>

    </Paper>
  );
};

export default Search;