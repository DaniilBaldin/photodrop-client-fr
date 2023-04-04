import { RootState } from '..';
import { createSelector } from '@reduxjs/toolkit';

export const userSelector = createSelector(
    (state: RootState) => state.users.user,
    (items) => items,
);
