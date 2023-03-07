import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialToken = localStorage.getItem('token');

type Token = string | null;

type Tokens = {
    token: Token;
};

type TokenState = {
    tokens: Tokens[];
};

const initialState: TokenState = {
    tokens: [{ token: initialToken || '' }],
};

export const tokenReducer = createSlice({
    name: 'token',
    initialState: initialState,
    reducers: {
        addToken(state: TokenState, action: PayloadAction<Tokens>) {
            state.tokens.push(action.payload);
        },
        removeToken(state: TokenState) {
            state.tokens.pop();
        },
    },
});

export const { addToken } = tokenReducer.actions;

export default tokenReducer.reducer;
