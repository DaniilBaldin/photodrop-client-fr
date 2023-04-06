import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Photo = {
    id: string;
    name: string;
    ext: string;
    phoneNumbers: string[];
    albumId: number;
    owned: boolean;
    photoUrl: string;
    thumbnailUrl: string;
    phWatermarkUrl: string;
    thumbWatermarkUrl: string;
}[];

type Photos = {
    photos: Photo | null;
};

const initialState: Photos = {
    photos: null,
};

export const albumsReducer = createSlice({
    name: 'photo',
    initialState,
    reducers: {
        addPhotos(state: Photos, action: PayloadAction<Photo>) {
            state.photos = action.payload;
        },
    },
});

export const { addPhotos } = albumsReducer.actions;

export default albumsReducer.reducer;
