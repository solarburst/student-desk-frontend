import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
    isAuth: boolean;
}

const initialState: IInitialState = {
    isAuth: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuth(state, action) {
            state.isAuth = action.payload
        }
    }
})

export const { setAuth } = authSlice.actions;

export default authSlice.reducer;