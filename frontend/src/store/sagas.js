import {call, put, takeEvery} from 'redux-saga/effects'
import Api from '../api'
import {saveTokensToStorage} from '../utils/tokens'

const api = new Api();


function* fetchLogin(action) {
    try {
        const user = yield call(api.loginRequest, action.payload);
        if (!user.error) {
            if (user.tokens) yield call(saveTokensToStorage, user.tokens);
            yield put({type: "LOGIN", payload: user}) //вызываем редьюсер
        } else {
            console.log(user.error)
        }
    } catch (e) {
        console.log(e.message)
    }
}

function* fetchAuth() {
    try {
        console.log('auth')
        const user = yield call(api.getAuthDataBySession)
        if (!user.error) {
            yield put({type: "LOGIN", payload: user})
        } else {
            if (user.error.code === 'l03') { //Access token expires
                yield put({type: "REFRESH_TOKENS", payload: {type: "AUTH_REQUEST"}})
            } else {
                yield put({type: "LOGIN", payload: {userName: null, isLogin: false}})
            }
        }

    } catch (e) {
        console.log(e.message)
    }
}


function* fetchLogout() {
    console.log('123')
}


function* refreshTokens(nextAction) {
    console.log('refresh tokens')
    const response = yield call(api.refreshTokens)
    if (response.error) {
        yield put({type: "LOGIN", payload: {userName: null, isLogin: false}})
    } else {
        yield call(saveTokensToStorage, response.tokens)
        yield put(nextAction.payload)
    }
}


function* sagas() {
    yield takeEvery("LOGIN_REQUEST", fetchLogin);
    yield takeEvery("AUTH_REQUEST", fetchAuth);
    yield takeEvery("REFRESH_TOKENS", refreshTokens);
    yield takeEvery("LOGOUT_REQUEST", fetchLogout);
}

export default sagas;
