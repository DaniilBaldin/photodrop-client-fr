import { configureStore } from '@reduxjs/toolkit';

import tokenReducer from './reducers/tokenReducer';
import phoneReducer from './reducers/phoneReducer';

export const store = configureStore({
    reducer: {
        tokens: tokenReducer,
        phones: phoneReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
