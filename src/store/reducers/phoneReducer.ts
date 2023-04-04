import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialPhone = '';

type Phone = string | null;

type Phones = {
    phone: Phone;
};

const initialState: Phones = {
    phone: initialPhone || null,
};

export const phoneReducer = createSlice({
    name: 'phone',
    initialState: initialState,
    reducers: {
        addPhone(state: Phones, action: PayloadAction<Phone>) {
            state.phone = action.payload;
        },
    },
});

export const { addPhone } = phoneReducer.actions;

export default phoneReducer.reducer;
