import React from 'react'
import { Box,styled } from '@mui/material'
import Slide from './Slide'
import MidSlide from './MidSlide'
import MidCarousel from './MidCarousel'
import WorkItem from './WorkItem'
import WorkBox from './WorkBox'
import Footer from './footer'
const Home = () => {
  return (
    <>
      <Container>
        <Slide />
    </Container>
    <WorkItem />
    <WorkBox />
    <MidSlide />
    <MidCarousel />
    <Footer />
    </>
  )
}


const Container = styled(Box)`
    background-color: #f2f2f2;
    padding:10px;
`
export default Home