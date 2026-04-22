import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { httpService } from "../../services/httpServices";



export const loginUser = createAsyncThunk('auth/loginUser', async (userData, { rejectWithValue }) => {
    try {
        const data = await httpService.post('auth/login',userData);
        if(data.accessToken){
            localStorage.setItem('token',data.accessToken)
        }
        return data
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

const initialState={
    user:null,
    token:localStorage.getItem('token')||null,
    isLoading:false,
    error:null,
}


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout:(state)=>{
            state.user=null;
            state.token=null;
            localStorage.removeItem('token');
        }
    },
    extraReducers: (builder) => {
        builder.addCase(loginUser.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        })
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.products = action.payload;
            state.token=action.payload.accessToken
        })
        builder.addCase(loginUser.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload
        })
    }

})

export const {logout}=authSlice.actions;
export default authSlice.reducer;