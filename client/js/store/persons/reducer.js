import { handleActions } from 'redux-actions';

import {
  GET_PERSONS_SUCCESS,
} from './actions';

const INITIAL_STATE = {};

export default handleActions(
    {
        [GET_PERSONS_SUCCESS]: (state, action) => ({
          ...action.payload,
        }),
    },
    INITIAL_STATE
);