import React from 'react'
import {Box, styled} from '@mui/material';
import Navbar from './Navbar';
import Banner from './Banner';

const Component=styled(Box)`
  padding:10px 10px;
  background:#cecece;
`

const Home = () => {
  return (
    <>
        <Navbar/>
        <Component>
          <Banner/>
        </Component>
    </>
  )
}

export default Home