import {call, put, takeEvery} from 'redux-saga/effects'
import Api from '../api'
import {saveTokensToStorage, clearTokensFromStorage} from '../utils/tokens'
import {normalizeLists, normalizeCategorys} from "../utils/normalize";

import {
    updDataInStoreAction,
    updOneCategoryInStoreAction,
    addCategoryInStoreAction,
    loginUserAction,
    logoutUserAction,
    loginErrorAction,
    refreshTokensAction,
    authRequestAction,
    addListItemInStoreAction,
    delOneCategoryInStoreAction,
    updOneListItemInStoreAction,
    delOneListItemInStoreAction,
} from '../store/actions'

const api = new Api();


function* fetchLogin(action) {
    try {
        const user = yield call(api.loginRequest, action.payload);
        if (!user.error) {
            if (user.tokens) yield call(saveTokensToStorage, user.tokens);
            yield put(loginUserAction(user))
        } else {
            yield put(loginErrorAction(user.error))
        }
    } catch (e) {
        console.log(e.message)
    }
}


function* fetchAuth() {
    try {
        const user = yield call(api.getAuthDataBySession)
        if (!user.error) {
            yield put(loginUserAction(user))
        } else {
            if (user.error.code === 'l03') { //Access token expires
                yield put(refreshTokensAction(authRequestAction()))
            } else {
                yield put(loginUserAction({userName: null, isLogin: false}))
            }
        }

    } catch (e) {
        console.log(e.message)
    }
}


function* fetchLogout() {
    try {
        const response = yield call(api.logoutRequest);
        if (!response.error) {
            yield call(clearTokensFromStorage)
            yield put(logoutUserAction())
        } else {
            console.log(response.error)
        }
    } catch (e) {
        console.log(e.message)
    }
}


function* fetchRefreshTokens(nextAction) {
    const response = yield call(api.refreshTokens)
    if (response.error) {
        yield put(loginUserAction({userName: null, isLogin: false}))
    } else {
        yield call(saveTokensToStorage, response.tokens)
        yield put(nextAction.payload)
    }
}


function* fetchAddCategory(action) {
    const response = yield call(api.addCategoryRequest, action.payload)
    yield put(addCategoryInStoreAction(response.category))

}


function* fetchAllCategorys(action) {
    const response = yield call(api.getAllCategorys, action.payload.userId)
    yield put(updDataInStoreAction(normalizeCategorys(response)))

}


function* fetchUpdateCategory(action) {
    const response = yield call(api.updCategoryRequest, action.payload.category)
    yield put(updOneCategoryInStoreAction(response.category))

}


function* fetchDeleteCategory(action) {
    const response = yield call(api.delCategoryRequest, action.payload.category)
    yield put(delOneCategoryInStoreAction(response.category))
}


function* fetchAllListsWithCategorys(action) {
    const response = yield call(api.getAllListsWithCategorys, action.payload.userIdAndDateRange)
    const data = normalizeLists(response)
    yield put(updDataInStoreAction(data))
}


function* fetchAddListItem(action) {
    const response = yield call(api.addListItemRequest, action.payload.listItem)
    yield put(addListItemInStoreAction(response.listItem))
}


function* fetchUpdateListItem(action) {
    const response = yield call(api.updListItemRequest, action.payload.listItem)
    yield put(updOneListItemInStoreAction(response.listItem))
}


function* fetchDeleteListItem(action) {
    const response = yield call(api.delListItemRequest, action.payload.listItem)
    yield put(delOneListItemInStoreAction(response.listItem))
}


function* sagas() {
    yield takeEvery("LOGIN_REQUEST", fetchLogin);
    yield takeEvery("AUTH_REQUEST", fetchAuth);
    yield takeEvery("REFRESH_TOKENS_REQUEST", fetchRefreshTokens);
    yield takeEvery("LOGOUT_REQUEST", fetchLogout);
    yield takeEvery("ADD_CATEGORY_REQUEST", fetchAddCategory);
    yield takeEvery("GET_CATEGORYS_REQUEST", fetchAllCategorys);
    yield takeEvery("UPD_ONE_CATEGORY_REQUEST", fetchUpdateCategory);
    yield takeEvery("GET_LISTS_REQUEST", fetchAllListsWithCategorys);
    yield takeEvery("ADD_LIST_ITEM_REQUEST", fetchAddListItem);
    yield takeEvery("DEL_ONE_CATEGORY_REQUEST", fetchDeleteCategory);
    yield takeEvery("UPD_ONE_LIST_ITEM_REQUEST", fetchUpdateListItem);
    yield takeEvery("DEL_ONE_LIST_ITEM_REQUEST", fetchDeleteListItem);
}

export default sagas;
