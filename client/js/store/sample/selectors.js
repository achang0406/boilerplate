import { createSelector } from 'reselect';

export const testSelector = createSelector(
    state => state,
    res => res.test
);