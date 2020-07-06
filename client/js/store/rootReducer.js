import { combineReducers } from 'redux';

import sampleReducer from './sample';
import personsReducer from './persons';

export default combineReducers({
  sample: sampleReducer,
  persons: personsReducer,
});