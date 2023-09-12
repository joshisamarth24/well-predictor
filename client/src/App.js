import React from 'react'
import Header from './components/Header/Header';
import { Box } from '@mui/material';
import Home from './components/Home/Home';
import Contact from './components/Home/Contact';
import {Route, BrowserRouter,Routes} from 'react-router-dom'
import LogIn from './components/Header/login';
import SignUp from './components/Header/signup';
import About from './components/about/about';
import {createTheme,ThemeProvider} from '@mui/material'
const theme = createTheme();
const App = () => {
  return (
    <>  <BrowserRouter>
    <ThemeProvider theme={theme}>
       <Header />
       <Box sx={{marginTop:'30px'}}>
       <Routes>
       <Route path="/" element={<Home />} />
       <Route path='/login' element={<LogIn/>}/>
       <Route path="/contact" element={<Contact />} />
       <Route path='/signup' element={<SignUp/>}/>
       <Route path='/about' element={<About/>}/>
       </Routes>
       </Box>
        </ThemeProvider>
        </BrowserRouter>
    </>
  )
}

export default App;
