import {configureStore} from '@reduxjs/toolkit'
import loginSlice from '../feautures/loginSlice';

const store = configureStore({
    reducer:{
       Auth:loginSlice,
        
    }
})

export default store;