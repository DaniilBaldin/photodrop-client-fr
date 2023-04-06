import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type OneAlbum = {
    id: number;
    name: string;
    location: string;
    date: string;
    photographerId: number;
    owned: boolean;
    coverImageUrl: string;
};

type Album = {
    album: OneAlbum | null;
};

const initialState: Album = {
    album: null,
};

export const oneAlbumReducer = createSlice({
    name: 'onealbum',
    initialState,
    reducers: {
        addOneAlbum(state: Album, action: PayloadAction<OneAlbum>) {
            state.album = action.payload;
        },
    },
});

export const { addOneAlbum } = oneAlbumReducer.actions;

export default oneAlbumReducer.reducer;
