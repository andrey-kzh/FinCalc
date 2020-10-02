import {createStore, combineReducers, applyMiddleware} from "redux"
import createSagaMiddleware from 'redux-saga'
import sagas from './sagas'

import {
    returnStateReducer,
    userReducer,
} from "./reducers"

const sagaMiddleware = createSagaMiddleware()

export const initialState = {
    user: {
        id: null,
        name: null,
        isLogin: null,
    },
    toggleCategory: 'income',
    menu: [
        {title: 'Этот месяц', link: 'month'},
        {title: 'Прошлый месяц', link: 'last-month'},
        {title: 'Полгода', link: 'half-year'},
        {title: 'Год', link: 'year'}
    ],
    charts: [
        {title: 'Доход', sum: '1500', type: 'income'},
        {title: 'Расход', sum: '2000', type: 'expense'},
        {title: 'Накопления', sum: '500', type: 'savings'}
    ],
    categorys: [
        {id: 1, title: 'Еда', sum: '1250', type: 'expense'},
        {id: 2, title: 'Развлечения', sum: '2250', type: 'expense'},
        {id: 3, title: 'Зарплата', sum: '3250', type: 'income'},
        {id: 4, title: 'Фриланс', sum: '4250', type: 'income'},
        {id: 5, title: 'Подарки', sum: '5250', type: 'income'},
    ],
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
    categorys: returnStateReducer,
    lists: returnStateReducer,
    toggleCategory: returnStateReducer,
})


export const store = createStore(reducer, initialState, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(sagas)
