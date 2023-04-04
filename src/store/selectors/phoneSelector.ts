import { RootState } from '..';
import { createSelector } from '@reduxjs/toolkit';

export const phoneSelector = createSelector(
    (state: RootState) => state.phones.phone,
    (items) => items,
);
