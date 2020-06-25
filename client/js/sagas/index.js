import { all } from 'redux-saga/effects';

import sampleSagas from './sample';

const Sagas = function*() {
    yield all([
      sampleSagas,
    ]);
};

export default Sagas;