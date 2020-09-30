import {initialState} from './index'

export function returnStateReducer(prevState = initialState) {
    return prevState;
}

export function userReducer(prevState = initialState, action) {

    switch (action.type) {
        case "LOGIN": {
            const user = {
                name: action.payload.userName,
                isLogin: action.payload.isLogin,
            }
            return user
        }
    }
    return prevState
}
