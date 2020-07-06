import { createActions } from 'redux-actions';

export const GET_PERSONS = 'GET_PERSONS';
export const GET_PERSONS_SUCCESS = 'GET_PERSONS_SUCCESS';

export const {
  getPersons,
  getPersonsSuccess,
} = createActions(
  GET_PERSONS,
  GET_PERSONS_SUCCESS,
);