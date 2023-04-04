import { configureStore } from '@reduxjs/toolkit';

import tokenReducer from './reducers/tokenReducer';
import phoneReducer from './reducers/phoneReducer';
import userReducer from './reducers/userReducer';

export const store = configureStore({
    reducer: {
        tokens: tokenReducer,
        phones: phoneReducer,
        users: userReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
