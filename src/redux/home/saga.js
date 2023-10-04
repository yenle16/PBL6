import { all, call, fork, put, takeEvery } from '@redux-saga/core/effects';
import actions from './action';
import { SampleApi } from '../../api/ApiCore';

function* watchSample() {
    yield takeEvery(actions.SAMPLE_ACTION, function* (payload) {
        try {
            const response = yield call(SampleApi, payload);
            console.log(response)
            // yield put({
            //     type: actions.FETCH_SAMPLE_1_SUCCESS,
            //     payload: response.Data.Suppliers,
            // });
        } catch (error) {

        } finally {
        }
    });
}

export default function* HomeSaga() {
    yield all([
        fork(watchSample),
    ]);
}
