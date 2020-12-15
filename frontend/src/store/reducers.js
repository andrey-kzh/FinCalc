import {initialState} from './index'

export function returnStateReducer(prevState = initialState) {
    return prevState;
}

export function userReducer(prevState = initialState, action) {

    switch (action.type) {
        case "LOGIN_STORE": {
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
        case "TOGGLE_CATEGORY_STORE": {
            return action.payload.categoryType
        }
    }
    return prevState
}


export function categorysReducer(prevState = initialState, action) {

    switch (action.type) {
        case "UPD_CATEGORYS_STORE": {
            return action.payload.categorys
        }
        case "ADD_CATEGORY_STORE": {
            return [...prevState, ...action.payload.category]
        }
    }
    return prevState

}
