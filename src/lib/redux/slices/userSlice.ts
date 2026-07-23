import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

type Address = {
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
};

type User = {
    id: number;
    name: string;
    email: string;
    address: Address | null;
};

type UserState = {
    user: User | null;
    isAuthenticated: boolean;
};

const initialState: UserState = {
    user: null,
    isAuthenticated: false,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<User>) {
            state.user = action.payload;
            state.isAuthenticated = true;
        },
        logout(state) {
            state.user = null;
            state.isAuthenticated = false;
        },
        updateUser(state, action: PayloadAction<Partial<User>>) {
            if (state.user) {
                state.user = { ...state.user, ...action.payload };
            }
        },
        updateAddress(state, action: PayloadAction<Address>) {
            if (state.user) {
                state.user.address = action.payload;
            }
        },
    },
});

export const { setUser, logout, updateUser, updateAddress } = userSlice.actions;

export const selectUser = (state: RootState) => state.user.user;
export const selectIsAuthenticated = (state: RootState) => state.user.isAuthenticated;

export default userSlice.reducer;
