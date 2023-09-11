import React from 'react'
import { Box,styled } from '@mui/material'
import Slide from './Slide'
const Home = () => {
  return (
   <Container>
        <Slide />
   </Container>
  )
}


const Container = styled(Box)`
    background-color: #f2f2f2;
    padding:10px;
`
export default Home