import React,{useState} from 'react'
import Dialog from '@mui/material/Dialog';
import { InputBase, Box, styled, Button, Typography, TextField } from '@mui/material';
import { authenticateSignup } from '../../service/api';

const Component = styled(Box)`
  height:70vh;
  width:90vh;
`

const Image = styled(Box)`
  background:#2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
  height:100%;
  width:35%;
  padding:45px 35px;
  &>h5,&>p{
    color:white;
    font-weight:600;
  }
`

const Wrapper=styled(Box)`
  display:flex;
  flex-direction:column;
  padding:45px 35px;
  flex:1;
  &>div,&>Button,&>p{
    margin-top:20px;
  }
`

const LoginButton=styled(Button)`
  text-transform:none;
  background-color:#FB641B;
  color:#fff;
  height:48px;
  border-radius:2px;
`

const RequestOTP=styled(Button)`
  text-transform:none;
  background-color:#fff;
  color:#2874f0;
  height:48px;
  border-radius:2px;
  box-shadow:0 2px 4px 0 rgb(0 0 0/20%);
`

const Text=styled(Typography)`
  font-size:11px;
  color:#878787;
`

const CreateAccout=styled(Typography)`
  font-size:13px;
  text-align:center;
  color:#2874f0;
  font-weight:600;
  cursor:pointer;
`

const accountInitialValues={
  login:{
    view:"login",
    heading:"Login",
    subHeading:"Get access to your Orders, Wishlist and Recomendation"
  },
  signup:{
    view:"signup",
    heading:"Looks like you're new here!",
    subHeading:"Sign up with oyur mobile to get started"
  }
}

const signUpInitialValues={
  firstname:"",
  lastname:"",
  username:"",
  email:"",
  password:"",
  phone:""
}

const LoginDialog = ({ open, setOpen }) => {

  const [signup,setSignup]=useState(signUpInitialValues)

  const [account,toggleAccount]=useState(accountInitialValues.login);

  const handleColse = () => {
    setOpen(false);
    toggleAccount(accountInitialValues.login)
  }

  const toggleSignup=()=>{
    toggleAccount(accountInitialValues.signup)
  }

  const onInputChange=(e)=>{
    setSignup({...signup,[e.target.name]:e.target.value})
  }

  const signupUser=async()=>{
    let res=await authenticateSignup(signup);
    console.log(res);
  }

  return (
    <Dialog open={open} onClose={handleColse} PaperProps={{sx:{maxWidth:"unset"}}}>
      <Component>
        <Box style={{display:"flex", height:"100%"}}>
          <Image>
            <Typography variant="h5">{account.heading}</Typography>
            <Typography style={{marginTop:20}}>{account.subHeading}</Typography>
          </Image>
          {
            account.view==='login'?<Wrapper>
              <TextField variant='standard' label="Enter Email/ Mobile No." />
              <TextField variant='standard' label="Enter Password" />
              <Text>By continuing you agree to Flipkart's Terms and Privacy Policy</Text>
              <LoginButton>Login</LoginButton>
              <Typography style={{textAlign:"center"}}>OR</Typography>
              <RequestOTP>Request OTP</RequestOTP>
              <CreateAccout onClick={()=>toggleSignup()}>New to Flipkart? Create an account</CreateAccout>
            </Wrapper>:
            <Wrapper>
              <TextField variant='standard' onChange={(e)=>onInputChange(e)} name="firstname" label="Enter First Name" />
              <TextField variant='standard' onChange={(e)=>onInputChange(e)} name="lastname" label="Enter Last Name" />
              <TextField variant='standard' onChange={(e)=>onInputChange(e)} name="username" label="Enter Username" />
              <TextField variant='standard' onChange={(e)=>onInputChange(e)} name="email" label="Enter Email" />
              <TextField variant='standard' onChange={(e)=>onInputChange(e)} name="password" label="Enter Password" />
              <TextField variant='standard' onChange={(e)=>onInputChange(e)} name="phone" label="Enter Phone" />
              <LoginButton onClick={()=>signupUser()}>Continue</LoginButton>
          </Wrapper>
          }
        </Box>
      </Component>
    </Dialog>
  )
}

export default LoginDialog