import React from 'react'
import Header from './components/Header/Header';
import { Box } from '@mui/material';
import Home from './components/Home/Home';
import Contact from './components/Home/Contact';
import {Route, BrowserRouter,Routes} from 'react-router-dom'
import Map from './components/Map/Map';
const App = () => {
  const theme =  createTheme();
  return (
    <>  <BrowserRouter>
       <Header />
       <Box sx={{marginTop:'30px'}}>
       <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/contact" element={<Contact />} />
       <Route path="/search" element={<Map />} />
       </Routes>
       </Box>
        </BrowserRouter>
    </>
  )
}

export default App;
