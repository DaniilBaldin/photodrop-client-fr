import { configureStore } from '@reduxjs/toolkit';

import tokenReducer from './reducers/tokenReducer';
import phoneReducer from './reducers/phoneReducer';
import userReducer from './reducers/userReducer';
import albumsReducer from './reducers/albumsReducer';
import photosReducer from './reducers/photosReducer';
import oneAlbumReducer from './reducers/oneAlbumReducer';
import albumPhotoReducer from './reducers/albumPhotosReducer';

export const store = configureStore({
    reducer: {
        tokens: tokenReducer,
        phones: phoneReducer,
        users: userReducer,
        albums: albumsReducer,
        photos: photosReducer,
        album: oneAlbumReducer,
        albumPhoto: albumPhotoReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
