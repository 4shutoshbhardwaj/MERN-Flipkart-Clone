import React,{useState,useContext} from 'react'
import {InputBase, Box, styled, Button, Typography} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginDialog from '../login/LoginDialog';
import { DataContext } from '../../context/DataProvider';
import Profile from './Profile';

const Wrapper=styled(Box)`
    display:flex;
    margin: 0 3% 0 auto;
    &>button, &>p, &>div{
        margin-right:40px;
        font-size:14px;
        align-items:center;
    }
`

const Container=styled(Box)`
    display:flex;
`

const LoginButton=styled(Button)`
    background-color:white;
    color:#2874f0;
    box-shadow:none;
    text-transform:none;
    padding:5px 40px;
    border-radius:2px;
    font-weight:600;
    height:32px;
    margin-left:20px;
`

const CustomButtons = () => {

    const [open,setOpen]=useState(false);

    const {account,setAccount}=useContext(DataContext);

    const openDialog=()=>{
        setOpen(open?false:true);
    }

  return (
    <Wrapper>
        {
            account?<Profile account={account} setAccount={setAccount}/>:
                <LoginButton variant="contained" onClick={()=>openDialog()}>Login</LoginButton>
        }
        <Typography style={{marginTop:3, width:120}}>Become a Seller</Typography>
        <Typography style={{marginTop:3}}>More</Typography>
        <Container>
            <ShoppingCartIcon/>
            <Typography>Cart</Typography>
        </Container>
        <LoginDialog open={open} setOpen={setOpen}/>
    </Wrapper>
  )
}

export default CustomButtons