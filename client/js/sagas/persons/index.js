// ----------------------------------------------------------------
// <copyright company='Microsoft Corporation'>
//     Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// ----------------------------------------------------------------

import { call, put, takeLatest } from 'redux-saga/effects';

import Services from 'Services/persons';

import {
    GET_PERSONS,
    getPersonsSuccess,
} from 'Store/persons';

function* getPersons() {
    try {
        const response = yield call(
            Services.getPersons
        );


        yield put(getPersonsSuccess(response));
    } catch (e) {
        console.log(e);
    }
}


export default [
    takeLatest(`${GET_PERSONS}`, getPersons),
];
