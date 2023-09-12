import { Box, styled } from '@mui/material';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ActionAreaCard from './CardItem';

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const MidCarousel = ()=>{
    return (
      <Component>
      <Carousel responsive={responsive}
      containerClass="carousel-container"
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
      swipeable={false}
      draggable={false}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={4000}
>      

<ActionAreaCard />
<ActionAreaCard />
<ActionAreaCard />
<ActionAreaCard />

</Carousel>

</Component>
        
    )
}


const Component = styled(Box)`
    justify-content:center;
    margin-top: 30px;
    background: #fff;
    padding:10px;
    margin-left: 20%;
    width: 60%;
    margin-bottom: 60px;
`;



export default MidCarousel;