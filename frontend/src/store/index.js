import {createStore, combineReducers, applyMiddleware} from "redux"
import createSagaMiddleware from 'redux-saga'
import sagas from './sagas'

import {
    returnStateReducer,
    toogleCategoryReducer,
    userReducer,
    dataReducer,
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
    data: null,
}

const reducer = combineReducers({
    user: userReducer,

    menu: returnStateReducer,
    charts: returnStateReducer,
    data: dataReducer,
    toggleCategory: toogleCategoryReducer,
})


export const store = createStore(reducer, initialState, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(sagas)
