import { RootState } from '..';
import { createSelector } from '@reduxjs/toolkit';

export const photoSelector = createSelector(
    (state: RootState) => state.photos.photos,
    (items) => items,
);
