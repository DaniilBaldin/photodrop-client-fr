import { RootState } from '..';
import { createSelector } from '@reduxjs/toolkit';

export const albumPhotoSelector = createSelector(
    (state: RootState) => state.albumPhoto.albumPhotos,
    (items) => items,
);
