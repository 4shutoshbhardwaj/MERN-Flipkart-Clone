import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import {Typography} from '@mui/material';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Search from './Search';
import CustomButtons from './CustomButtons';

const StyledHeader=styled(AppBar)`
    background-color:#2874f0;
    height:55px;
`

const Component=styled(Box)`
    margin-left:12%;
    line-height:0;
`

const Heading=styled(Typography)`
    font-size:10px;
    font-style:italic;
`

const PlusImage=styled('img')({
    width:10,
    height:10,
    marginLeft:4
})

const CustomButtonWrapper=styled(Box)`
    margin:0 5% 0 auto;
`

const Header = () => {
    
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

  return (
    <StyledHeader>
        <Toolbar style={{minHeight:55}}>
            <Component>
                <img src={logoURL} alt="" style={{width:75}}/>
                <Box style={{display:"flex"}}>
                    <Heading>Explore <Box component="span" style={{color:"#FFE500"}}>Plus</Box></Heading>
                    <PlusImage src={subURL} alt="" />
                </Box>
            </Component>
            <Search/>
            <CustomButtonWrapper>
                <CustomButtons/>
            </CustomButtonWrapper>
        </Toolbar>
    </StyledHeader>
  )
}

export default Header