import { RootState } from '..';
import { createSelector } from '@reduxjs/toolkit';

export const albumSelector = createSelector(
    (state: RootState) => state.albums.albums,
    (items) => items,
);
