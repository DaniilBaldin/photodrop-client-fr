import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Id = {
    id: string | null;
};

const initialState: Id = {
    id: null,
};

export const albumIdReducer = createSlice({
    name: 'id',
    initialState,
    reducers: {
        addId(state: Id, action: PayloadAction<string>) {
            state.id = action.payload;
        },
        removeId(state: Id) {
            state.id = '';
        },
    },
});

export const { addId, removeId } = albumIdReducer.actions;

export default albumIdReducer.reducer;
