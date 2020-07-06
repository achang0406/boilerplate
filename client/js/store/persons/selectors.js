import { createSelector } from 'reselect';

export const personsSelector = createSelector(
    state => state,
    res => res.persons
);