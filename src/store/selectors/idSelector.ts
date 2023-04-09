import { RootState } from '..';
import { createSelector } from '@reduxjs/toolkit';

export const idSelector = createSelector(
    (state: RootState) => state.id.id,
    (items) => items,
);
