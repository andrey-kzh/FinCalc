import {initialState} from './index'
import {calcChartsPersents} from "../utils/calcCharts";

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
        case "ADD_LIST_TO_CHARTS_STORE": {
            const newChartsValues = prevState.map((chart) => {
                if (chart.type === action.payload.listItem.categoryType) {
                    return {
                        ...chart,
                        ...{sum: chart.sum += action.payload.listItem.sum}
                    }
                }
                return chart
            })

            let income = 0, expense = 0
            newChartsValues.forEach((chart) => {
                if (chart.type === `income`) income = chart.sum
                if (chart.type === `expense`) expense = chart.sum
            })

            const persents = calcChartsPersents(income, expense)

            return newChartsValues.map((chart) => {
                if (chart.type === `income`) return {...chart, ...{persent: persents.incomePersents}}
                if (chart.type === `expense`) return {...chart, ...{persent: persents.expensePersents}}
                if (chart.type === `savings`) return {...chart, ...{persent: persents.savingsPersents}}
            })
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
        case "ADD_NEW_LIST_ITEM_STORE": {
            let data = JSON.parse(JSON.stringify(prevState)) //замени потом это
            data.entities.list[action.payload.listItem.id] = action.payload.listItem
            data.entities.categorys[action.payload.listItem.categoryId].list.unshift(action.payload.listItem.id)
            data.entities.categorys[action.payload.listItem.categoryId].totalSum += action.payload.listItem.sum
            return data
        }
        case "UPD_ONE_CATEGORY_STORE": {
            let data = JSON.parse(JSON.stringify(prevState)) //замени потом это
            data.entities.categorys[action.payload.category.id] = action.payload.category
            return data
        }
        case "UPD_ONE_LIST_ITEM_STORE": {
            let data = JSON.parse(JSON.stringify(prevState)) //замени потом это
            data.entities.list[action.payload.listItem.id] = action.payload.listItem
            return data
        }
        case "DEL_ONE_CATEGORY_STORE": {
            let data = JSON.parse(JSON.stringify(prevState)) //замени потом это
            delete data.entities.categorys[action.payload.categoryId]
            data.result.categorys = data.result.categorys.filter((categoryId) => {
                return categoryId !== action.payload.categoryId
            })
            return data
        }
        case "DEL_ONE_LIST_ITEM_STORE": {
            let data = JSON.parse(JSON.stringify(prevState)) //замени потом это
            const categoryId = data.entities.list[action.payload.listId].categoryId
            data.entities.categorys[categoryId].list = data.entities.categorys[categoryId].list.filter((listId) => {
                return listId !== action.payload.listId
            })
            delete data.entities.list[action.payload.listId]
            return data
        }
    }
    return prevState
}
