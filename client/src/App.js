import React from 'react';
import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom';
import { createTheme,ThemeProvider,Box } from '@mui/material';
import Home from './components/Home/Home';
import Map from './components/Map/Map';
import Header from './components/Header/Header';

const App = () => {
  const theme =  createTheme();
  return (
    <ThemeProvider theme={theme}>
    <BrowserRouter>
    <Box >
    <Header/>
      <Routes>
        <Route path='/' exact Component={Home} />
        <Route path='/search' exact Component={Map} />
        </Routes>
        </Box>
    </BrowserRouter>
    </ThemeProvider>
    
  )
}

export default App;
