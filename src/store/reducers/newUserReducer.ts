import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type newUser = boolean;

type newUsers = {
    newUser: newUser;
};

const initialState: newUsers = {
    newUser: false,
};

export const newUserReducer = createSlice({
    name: 'phone',
    initialState: initialState,
    reducers: {
        addUserState(state: newUsers, action: PayloadAction<newUser>) {
            state.newUser = action.payload;
        },
    },
});

export const { addUserState } = newUserReducer.actions;

export default newUserReducer.reducer;
