import { handleActions } from 'redux-actions';

import {
    TEST,
} from './actions';

const INITIAL_STATE = {};

export default handleActions(
    {
        [TEST]: (state, action) => ({
          ...state,
          [action.payload]: {
            test: 'test',
          },
        }),
    },
    INITIAL_STATE
);