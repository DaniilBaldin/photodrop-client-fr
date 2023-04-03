import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialPhone = '';

type Phone = string | null;

type Phones = {
    phone: Phone;
};

type TokenState = {
    phones: Phones[];
};

const initialState: TokenState = {
    phones: [{ phone: initialPhone || '' }],
};

export const phoneReducer = createSlice({
    name: 'phone',
    initialState: initialState,
    reducers: {
        addPhone(state: TokenState, action: PayloadAction<Phones>) {
            state.phones.push(action.payload);
        },
    },
});

export const { addPhone } = phoneReducer.actions;

export default phoneReducer.reducer;
