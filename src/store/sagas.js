// ReduxSaga-5
import {takeEvery, put} from 'redux-saga/effects';
import {GET_INIT_LIST} from './actionTypes';
import axios from "axios/index";
import {initListAction} from "./actionCreators";

function* getInitList() {
    try {
        const res = yield axios.get('/list');
        const action = initListAction(res.data);
        yield put(action);
    } catch (e) {
        alert('error');
    }
    /*axios.get('/list')
        .then((res) => {
            const data = res.data;
            const action = initListAction(data);
            store.dispatch(action);
        })
        .catch(() => {
            alert('error');
        })*/
}

// generator函数
function* mySaga() {
    yield takeEvery(GET_INIT_LIST, getInitList)
    // yield takeLatest("USER_FETCH_REQUESTED", getInitList);
}

export default mySaga;