import { RootState } from '..';
import { createSelector } from '@reduxjs/toolkit';

export const newUserSelector = createSelector(
    (state: RootState) => state.newUser.newUser,
    (items) => items,
);
