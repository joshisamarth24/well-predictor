import { Box,styled } from '@mui/material';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import s1 from '../../assets/1b.png'
import s2 from '../../assets/2b.png'
import s3 from '../../assets/4b.png'

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const Slide = () => {
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
      
        <Image src={s1} alt="banner"/>
        <Image src={s2} alt="banner"/>
        <Image src={s3} alt="banner"/>
      
    </Carousel>

    </Component>
  )
}

const Component = styled(Box)`
    margin-top: 10px;
    background: #fff;
`;

const Image =styled('img')({
    width:'100%',
    height:280,
})
export default Slide