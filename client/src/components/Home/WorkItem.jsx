import React from 'react';
import { Box, Typography,styled } from '@mui/material';

const WorkItem = () => {
  return (
    <Container>
        <TextComponent>
            <Typography variant='h3'>How it Works</Typography>
            <Typography variant='h5'>Step-by-Step Guide to Predicting Well Performance</Typography>
        </TextComponent>
       <HRtag />
    </Container>
  )
}

const Container = styled(Box)`
    background-color: #fff;
    display:flex;
    margin-top: 50px;
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
export default WorkItem