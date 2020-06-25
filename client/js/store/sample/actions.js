import { createActions } from 'redux-actions';

export const TEST_ACTION = 'TEST_ACTION';

export const {
  test_action,
} = createActions(
  TEST_ACTION,
);