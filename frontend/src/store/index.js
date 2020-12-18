import {createStore, combineReducers, applyMiddleware} from "redux"
import createSagaMiddleware from 'redux-saga'
import sagas from './sagas'

import {
    returnStateReducer,
    toogleCategoryReducer,
    userReducer,
    categorysReducer,
} from "./reducers"

const sagaMiddleware = createSagaMiddleware()

export const initialState = {
    user: {
        id: null,
        name: null,
        isLogin: null,
    },
    toggleCategory: 'expense',
    menu: [
        {title: 'Этот месяц', link: 'month'},
        {title: 'Прошлый месяц', link: 'last-month'},
        {title: 'Шесть месяцев', link: 'half-year'},
        {title: 'Этот год', link: 'year'}
    ],
    charts: [
        {title: 'Доход', sum: '1500', type: 'income'},
        {title: 'Расход', sum: '2000', type: 'expense'},
        {title: 'Накопления', sum: '500', type: 'savings'}
    ],
    categorys: [],
    lists: {
        1: [
            {id: 1, title: 'Тест', sum: '200'},
            {id: 2, title: 'Тест1', sum: '300'},
            {id: 3, title: 'Тест2', sum: '400'},
            {id: 4, title: 'Тест3', sum: '500'},
        ],
        2: [
            {id: 5, title: '0Тест', sum: '1200'},
            {id: 6, title: '0Тест1', sum: '2300'},
            {id: 7, title: '0Тест2', sum: '3400'},
            {id: 8, title: '0Тест3', sum: '4500'},
        ]
    }
}

const reducer = combineReducers({
    user: userReducer,

    menu: returnStateReducer,
    charts: returnStateReducer,
    categorys: categorysReducer,
    lists: returnStateReducer,
    toggleCategory: toogleCategoryReducer,
})


export const store = createStore(reducer, initialState, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(sagas)
