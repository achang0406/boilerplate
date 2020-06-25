import { handleActions } from 'redux-actions';

import {
    TEST_ACTION,
} from './actions';

const INITIAL_STATE = {};

export default handleActions(
    {
        [TEST_ACTION]: (state, action) => ({
          ...state,
          [action.payload]: {
            test: 'test',
          },
        }),
    },
    INITIAL_STATE
);