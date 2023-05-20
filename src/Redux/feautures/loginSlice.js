import { createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import axios from '../../components/API/axiosinstance'
import { auth } from "../../components/API/url";

const initialState ={
    users:[],
}

export const userdetails = createAsyncThunk('userDetails',async()=>{
    console.log("insider  user Details is working in thunk");
    return await axios.get(`${auth}`).then(({data})=>{
        console.log(data,"data after  User Details");
      return data
    })
})

export const loginUser = createAsyncThunk('loginUser',async(body, {getState})=>{
    console.log("insider login user is working in thunk",body);
    const email = body.data.email;
    const password = body.data.password;
    const users = getState().Auth.users
    const Authentication = await users.some((user)=> user.email === email && user.username === password)
     console.log(Authentication,"chinnu");
    if(Authentication){
        console.log("dont worry ites working");
        return true
    }else{
        return false
    }


})

const loginslice = createSlice({
    name:"Auth",
    initialState,
    reducers:{

    },
    extraReducers(builder){
        builder.addCase(userdetails.fulfilled,(state,action)=>{
           state.users = action.payload
        })
    }
})

export default loginslice.reducer