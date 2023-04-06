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
    albumPhotos: Photo | null;
};

const initialState: Photos = {
    albumPhotos: null,
};

export const albumPhotoReducer = createSlice({
    name: 'photo',
    initialState,
    reducers: {
        addAlbumPhotos(state: Photos, action: PayloadAction<Photo>) {
            state.albumPhotos = action.payload;
        },
    },
});

export const { addAlbumPhotos } = albumPhotoReducer.actions;

export default albumPhotoReducer.reducer;
