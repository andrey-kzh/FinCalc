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
        case "TOGGLE_CATEGORYS_TYPE_STORE": {
            return action.payload.categoryType
        }
    }
    return prevState
}


export function chartsReducer(prevState = initialState, action) {

    switch (action.type) {
        case "UPD_CHARTS_STORE": {
            return action.payload.charts
        }
    }
    return prevState
}


export function dataReducer(prevState = initialState, action) {

    switch (action.type) {
        case "UPD_DATA_STORE": {
            return action.payload.categorys
        }
        case "ADD_NEW_CATEGORY_STORE": {
            let data = JSON.parse(JSON.stringify(prevState)) //замени потом это
            data.entities.categorys[action.payload.category.id] = action.payload.category
            data.result.categorys.push(action.payload.category.id)
            return data
        }
        case "UPD_ONE_CATEGORY_STORE": {
            let data = JSON.parse(JSON.stringify(prevState)) //замени потом это
            data.entities.categorys[action.payload.category.id] = action.payload.category
            return data
        }
        case "ADD_NEW_LIST_ITEM_STORE": {
            let data = JSON.parse(JSON.stringify(prevState)) //замени потом это
            data.entities.list[action.payload.listItem.id] = action.payload.listItem
            data.entities.categorys[action.payload.listItem.categoryId].list.push(action.payload.listItem.id)
            data.entities.categorys[action.payload.listItem.categoryId].totalSum += action.payload.listItem.sum
            return data
        }
    }
    return prevState

}
