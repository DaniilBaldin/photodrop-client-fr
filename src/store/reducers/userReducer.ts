import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type User = {
    id: number;
    phoneNumber: string;
    verified: boolean;
    name: string;
    ownedAlbums: string[];
    selfie: string;
};

type Users = {
    user: User | null;
};

const initialState: Users = {
    user: null,
};

export const userReducer = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser(state: Users, action: PayloadAction<User>) {
            state.user = action.payload;
        },
        changeName(state: Users, action: PayloadAction<string>) {
            if (state.user) {
                state.user.name = action.payload;
            }
        },
        changeSelfie(state: Users, action: PayloadAction<string>) {
            if (state.user) {
                state.user.selfie = action.payload;
            }
        },
    },
});

export const { addUser, changeName, changeSelfie } = userReducer.actions;

export default userReducer.reducer;
