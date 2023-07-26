import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {getItemAsync,setItemAsync} from 'expo-secure-store'
import { useNavigation } from "@react-navigation/native";

const initialState = {
    isAuthenticated: false,
    isVerified:false,
    user: [],
    otp:false,
    errors: '',
}

export const  Authenticate = createSlice({
    name:'auth',
    initialState,
    reducers:{
        siginup:(state,actions)=>{
            state.user = actions.payload
            state.isAuthenticated = true
        },
        signin:(state,actions)=>{
            state.user = actions.payload
            state.isAuthenticated = true
        },
        logout:(state)=>{
            state.user = []
            state.isAuthenticated = false
        },
        errors:(state,actions)=>{
            state.isAuthenticated = false
            state.errors = actions.payload
        },
        otp:(state,actions)=>{
            state.otp = true
            state.user = actions.payload
        },
        setVerified:(state)=>{state.isVerified=true}
    }
})


export const { siginup,errors,logout,signin} = Authenticate.actions
export default Authenticate.reducer

export const  SiginUp = (data) => async (dispatch) =>{
    try{
        const response = await axios({
            method:'post',
            url:'https://d-pay-api.onrender.com/api/v1/auth/register',
            data:data
        })    
        console.log(response.data)
        dispatch(siginup(response.data))
        setItemAsync("userData",JSON.stringify(response.data.user))
        setItemAsync("StoreToken",response.data.token)
        window.location.href = 'Verification'
    }catch(error){
        console.log(error.response.data.msg)
        dispatch(errors(error.response.data.msg))
    }
}
export const Login = (data) => async (dispatch) =>{
    try{
        const response = await axios({
            method:'POST',
            url:'https://d-pay-api.onrender.com/api/v1/auth/login',
            data:data
        })
        console.log(response.data)
        dispatch(signin(response.data))
    }catch(err){
        console.log(err.response.data.msg)
        dispatch(errors(err.response.data.msg))
    }
}

// export const VerifyOtp = (data) => async (dispatch) =>{
//     try{
//         const response = await axios({
//             method:'POST',
//             url:'https://d-pay-api.onrender.com/api/v1/auth/login',
//             data:data
//         })
//         console.log(response.data)
//         dispatch(signin(response.data))
//     }catch(err){
//         console.log(err.response.data.msg)
//         dispatch(errors(err.response.data.msg))
//     }
// }

export const Logout = ()=>(dispatch)=>{
   setItemAsync("userData",null)
    setItemAsync("StoreToken",null)
    dispatch(logout())
}