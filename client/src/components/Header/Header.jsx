import React from 'react'
import { Box,AppBar,Toolbar,Typography,Button } from '@mui/material'
import FlexBetween from '../../requiredComponents/flexBetween'
import styled from '@emotion/styled';
import logo from '../../assets/logo.png'
const Header = () => {
  return (
    <Container sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar style={{display:'flex', justifyContent:'space-between'}}>
            <Box>
            <img src={logo} alt='logo' style={{width:300}}/>
            </Box>
            <Box>
            <Button color="inherit">Home</Button>
            <Button color="inherit">About</Button>
            <Button color="inherit">Contact</Button>
          <Button color="inherit">Login</Button>
          </Box>

        </Toolbar>
      </AppBar>
    </Container>
  )
}


const Container = styled(Box)`
    margin:0;
    padding:0;
    margin-bottom: 4rem;
`;

export default Header