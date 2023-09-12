import * as React from 'react';
import { Box,styled } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const WorkBox = () => {
  return (
    <Container>
    <Component>
    <Card sx={{ width: 250, maxHeight:200 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="100"
          image="https://www.musson.be/actualites/water-2.jpg/@@images/image.jpeg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Component>  

    <Component>
    <Card sx={{ width: 250, maxHeight:200 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="100"
          image="https://www.musson.be/actualites/water-2.jpg/@@images/image.jpeg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Component>

    <Component>
    <Card sx={{ width: 250, maxHeight:200 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="100"
          image="https://www.musson.be/actualites/water-2.jpg/@@images/image.jpeg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Component>

    <Component>
    <Card sx={{ width: 250, maxHeight:200 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="100"
          image="https://www.musson.be/actualites/water-2.jpg/@@images/image.jpeg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Component>
    </Container>
  )
}

const Container =styled(Box)`
    width: 100%;
    background-color: #fff;
    display:flex;
    margin-top: 30px;
    flex-direction: row;
    justify-content: space-around;
    padding: 10px 0px;
`
const Component = styled(Box)`
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`;
export default WorkBox