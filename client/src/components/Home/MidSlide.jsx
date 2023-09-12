import React from 'react';
import { Box, Typography,styled } from '@mui/material';

const MidSlide = () => {
  return (
    <Container>
        <TextComponent>
            <Typography variant='h3'>Our Services</Typography>
            <Typography variant='h5'>Making Complex Well Analysis Simple with AI</Typography>
        </TextComponent>
       <HRtag />
    </Container>
  )
}

const Container = styled(Box)`
    background-color: #fff;
    display:flex;
    margin-top: 70px;
    justify-content:center;
    align-items:center;
    flex-direction:column;
`;

const TextComponent = styled(Box)`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
`
const HRtag = styled('hr')({
    width:'30%',
    height:1,
    background:'#0000',
    backgroundColor:'#000000',
    border:0,
    marginTop:10,
    padding:0,
})
export default MidSlide