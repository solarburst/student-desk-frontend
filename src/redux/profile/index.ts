import { createSlice } from "@reduxjs/toolkit";
import { LoginResponseDTO, defaultUser } from "../../api/dto/auth.dto";

interface IInitialState {
    profile: LoginResponseDTO;
}

const initialState: IInitialState = {
    profile: defaultUser,
}

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setProfile(state, action) {
            state.profile = action.payload
        }
    }
})

export const { setProfile } = profileSlice.actions;

export default profileSlice.reducer;