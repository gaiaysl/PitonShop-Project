import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"
import { useRouter } from 'next/router'
const initialState={
   // msg:"",
   // user:"",
    token:"",
   // loading:false,
    error:""
}
export const signInUser = createAsyncThunk('signinuser',async(body)=>{
    const res = await fetch("https://assignment-api.piton.com.tr/api/v1/user/login",{
        method:"post",
        headers:{
            'Content-Type':"application/json",
            'accept':"application/json"

        },
        body:JSON.stringify(body)
    })
    return await res.json()
})
export const signUpUser = createAsyncThunk('signupuser',async(body)=>{
 
    const res = await fetch("https://assignment-api.piton.com.tr/api/v1/user/register ",{
        method:"post",
        headers:{
            'Content-Type':"application/json",
            'accept':"application/json"

        },
        body:JSON.stringify(body)
    })
    return await res.json()
})

const authSlice = createSlice({
    
    name:"user",
    initialState,
    reducers:{
        
        addToken: (state,action)=>{

            state.token = localStorage.getItem("token")
        },
        addUser: (state,action)=>{

            state.user = localStorage.getItem("user")
        },
      

        logout: (state,action)=>{
            state.token = null,
            localStorage.clear();
        }
    },
    
    extraReducers:{
        //*******login */
        [signInUser.pending]: (state,action)=>{
            state.loading = true
        },
        [signInUser.fulfilled]: (state,{payload:{error,msg,token,user}})=>{
            state.loading = false;
            if(error){
                state.error = error;
             
            }else{
                
               // state.msg = msg;
                state.token = token;
               // state.user = user;
               // localStorage.setItem('msg',msg)
                localStorage.setItem('token',token)
               // localStorage.setItem('user',JSON.stringify(user))
        
            }
        },
        [signInUser.rejected]: (state,action)=>{
            state.loading = true
        },
        /***************register */
[signUpUser.pending]: (state,action)=>{
    state.loading = true
},
[signUpUser.fulfilled]: (state,{payload:{error,message}})=>{
    state.loading = false
    if(error){
        state.error = error
    }else{
        state.message = message
    }
},
[signUpUser.rejected]: (state,action)=>{
    state.loading = true
},
    }
    
})

export const {addToken,addUser,logout} = authSlice.actions;
export default authSlice.reducer