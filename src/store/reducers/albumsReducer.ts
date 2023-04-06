import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Album = {
    id: number;
    name: string;
    location: string;
    date: string;
    photographerId: number;
    owned: boolean;
    coverImageUrl: string;
}[];

type Albums = {
    albums: Album | null;
};

const initialState: Albums = {
    albums: null,
};

export const albumsReducer = createSlice({
    name: 'albums',
    initialState,
    reducers: {
        addAlbums(state: Albums, action: PayloadAction<Album>) {
            state.albums = action.payload;
        },
    },
});

export const { addAlbums } = albumsReducer.actions;

export default albumsReducer.reducer;
