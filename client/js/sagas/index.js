import { all } from 'redux-saga/effects';

import sampleSagas from './sample';
import personsSagas from './persons';

const Sagas = function*() {
    yield all([
      ...sampleSagas,
      ...personsSagas,
    ]);
};

export default Sagas;