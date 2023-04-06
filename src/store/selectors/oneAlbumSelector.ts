import { RootState } from '..';
import { createSelector } from '@reduxjs/toolkit';

export const oneAlbumSelector = createSelector(
    (state: RootState) => state.album.album,
    (items) => items,
);
