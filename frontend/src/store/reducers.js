import {initialState} from './index'

export function returnStateReducer(prevState = initialState) {
    return prevState;
}

export function userReducer(prevState = initialState, action) {

    switch (action.type) {
        case "LOGIN": {
            const user = {
                id: action.payload.id,
                name: action.payload.userName,
                isLogin: action.payload.isLogin,
            }
            return user
        }
    }
    return prevState
}


export function toogleCategoryReducer(prevState = initialState, action) {

    switch (action.type) {
        case "TOGGLE_CATEGORY": {
            return action.payload.categoryType
        }
    }
    return prevState
}
