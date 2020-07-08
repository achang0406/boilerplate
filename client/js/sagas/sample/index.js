// ----------------------------------------------------------------
// <copyright company='Microsoft Corporation'>
//     Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// ----------------------------------------------------------------

import { takeLatest } from 'redux-saga/effects';

// import Services from '../../services';

import {
    test_action,
} from 'Store/sample';

export function* getSample() {
    // try {
    //     yield put(actionStatusStarted({ actionName: GET_WIC_ADDRESS_DATA }));
    //     const response = yield call(
    //         AddressDal.getWicAddresses,
    //         request.payload
    //     );

    //     yield put(getWicAddressDataSuccess(response));
    //     yield put(actionStatusSuccess({ actionName: GET_WIC_ADDRESS_DATA }));
    // } catch (e) {
    //     yield put(
    //         actionStatusFailed({
    //             actionName: GET_WIC_ADDRESS_DATA,
    //             error: e,
    //         })
    //     );
    // }
}


export default [
    takeLatest(`${test_action}`, getSample),
];
