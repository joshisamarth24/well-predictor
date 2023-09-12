import React from 'react'
import Header from './components/Header/Header';
import { Box,createTheme,ThemeProvider } from '@mui/material';
import Home from './components/Home/Home';
import Contact from './components/Home/Contact';
import {Route, BrowserRouter,Routes} from 'react-router-dom'
import Map from './components/Map/Map';
import PredictionResult from './components/PredictionResult/PredictionResult';

const theme = createTheme();
const App = () => {
  
  return (
    <ThemeProvider theme={theme}>
    <BrowserRouter>
       <Header />
       <Box sx={{marginTop:'30px'}}>
       <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/contact" element={<Contact />} />
       <Route path="/search" element={<Map />} />
       <Route path="/prediction-result" element={<PredictionResult/>} />
       </Routes>
       </Box>
    </BrowserRouter>
    </ThemeProvider>
  )
}

export default App;
