import {initialState} from './index'
import {clone} from 'ramda'

export function returnStateReducer(prevState = initialState) {
    return prevState;
}

export function userReducer(prevState = initialState, action) {

    switch (action.type) {
        case "LOGIN_STORE": {
            return {
                id: action.payload.id,
                name: action.payload.userName,
                isLogin: action.payload.isLogin,
            }
        }
        case "LOGIN_ERROR_STORE": {
            return {
                loginErrorMes: action.payload.error.mes
            }
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


export function dataReducer(prevState = initialState, action) {

    switch (action.type) {
        case "UPD_DATA_STORE": {
            return action.payload.categorys
        }
        case "ADD_NEW_CATEGORY_STORE": {
            let data = clone(prevState)
            data.entities.categorys[action.payload.category.id] = action.payload.category
            data.result.categorys.push(action.payload.category.id)
            return data
        }
        case "ADD_NEW_LIST_ITEM_STORE": {
            let data = clone(prevState)
            if (!data.entities.list) data.entities.list = {}
            data.entities.list[action.payload.listItem.id] = action.payload.listItem
            data.entities.categorys[action.payload.listItem.categoryId].list.unshift(action.payload.listItem.id)
            data.entities.categorys[action.payload.listItem.categoryId].totalSum += action.payload.listItem.sum
            return data
        }
        case "UPD_ONE_CATEGORY_STORE": {
            let data = clone(prevState)
            data.entities.categorys[action.payload.category.id] = action.payload.category
            return data
        }
        case "UPD_ONE_LIST_ITEM_STORE": {
            let data = clone(prevState)
            const listItem = action.payload.listItem
            const prevSum = prevState.entities.list[listItem.id].sum
            data.entities.list[listItem.id] = listItem
            data.entities.categorys[listItem.categoryId].totalSum -= prevSum
            data.entities.categorys[listItem.categoryId].totalSum += listItem.sum
            return data
        }
        case "DEL_ONE_CATEGORY_STORE": {
            let data = clone(prevState)
            delete data.entities.categorys[action.payload.category.id]
            data.result.categorys = data.result.categorys.filter((categoryId) => {
                return categoryId !== action.payload.category.id
            })
            return data
        }
        case "DEL_ONE_LIST_ITEM_STORE": {
            let data = clone(prevState)
            const listItem = action.payload.listItem
            const newListArr = data.entities.categorys[listItem.categoryId].list.filter((listId) => {
                return listId !== listItem.id
            })
            data.entities.categorys[listItem.categoryId].list = newListArr
            data.entities.categorys[listItem.categoryId].totalSum -= listItem.sum
            delete data.entities.list[listItem.id]
            return data
        }
    }
    return prevState
}
