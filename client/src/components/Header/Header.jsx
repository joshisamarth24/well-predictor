import React from 'react'
import { Box,AppBar,Toolbar,Typography,Button } from '@mui/material'
import FlexBetween from '../../requiredComponents/flexBetween';
import styled from '@emotion/styled';

const Header = () => {
  return (
    <container sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Well Predictor
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </container>
  )
}


const container = styled(Box)`
    margin:0;
    padding:0;
`;

export default Header