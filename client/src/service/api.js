import axios from 'axios';

const url=`http://localhost:8000`;

export const authenticateSignup=async(data)=>{
    try {
        return await axios.post(`${url}/signup`,data)
    } catch (err) {
        console.log('Error while calling signup api',err);
    }
}

export const authenticateLogin=async(data)=>{
    try {
        return await axios.post(`${url}/login`,data)
    } catch (err) {
        console.log('Error while calling login api',err);
        return err.response;
    }
}