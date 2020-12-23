export const loginRequestAction = (data) => {
    return (
        {type: "LOGIN_REQUEST", payload: data}
    )
}

export const loginUserAction = (user) => {
    return (
        {type: "LOGIN_STORE", payload: user}
    )
}

export const authRequestAction = () => {
    return (
        {type: "AUTH_REQUEST", payload: {}}
    )
}

export const logoutAction = () => {
    return (
        {type: "LOGOUT_REQUEST", payload: {}}
    )
}

export const refreshTokensAction = (nextAction) => {
    return (
        {type: "REFRESH_TOKENS_REQUEST", payload: nextAction}
    )
}

export const addCategoryAction = (category) => {
    return (
        {type: "ADD_CATEGORY_REQUEST", payload: category}
    )
}

export const getAllCategorysAction = (userId) => {
    return (
        {type: "GET_CATEGORYS_REQUEST", payload: {userId: userId}}
    )
}

export const getAllListsWithCategorysAction = (obj) => {
    return (
        {type: "GET_LISTS_REQUEST", payload: {userIdAndDateRange: obj}}
    )
}

export const toggleCategoryAction = (categoryType) => {
    return (
        {type: "TOGGLE_CATEGORYS_TYPE_STORE", payload: {categoryType: categoryType}}
    )
}

export const updCategoryAction = (category) => {
    return (
        {type: "UPD_ONE_CATEGORY_REQUEST", payload: {category: category}}
    )
}

export const updDataInStoreAction = (categorys) => {
    return (
        {type: "UPD_DATA_STORE", payload: {categorys: categorys}}
    )
}

export const addCategoryInStoreAction = (category) => {
    return (
        {type: "ADD_NEW_CATEGORY_STORE", payload: {category: category}}
    )
}

export const updOneCategoryInStoreAction = (category) => {
    return (
        {type: "UPD_ONE_CATEGORY_STORE", payload: {category: category}}
    )
}

export const addListItemAction = (listItem) => {
    return (
        {type: "ADD_LIST_ITEM_REQUEST", payload: {listItem: listItem}}
    )
}

export const addListItemInStoreAction = (listItem) => {
    return (
        {type: "ADD_NEW_LIST_ITEM_STORE", payload: {listItem: listItem}}
    )
}

export const updChartsInStoreAction = (charts) => {
    return (
        {type: "UPD_CHARTS_STORE", payload: charts}
    )
}