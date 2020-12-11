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

export const toggleCategoryAction = (categoryType) => {
    return (
        {type: "TOGGLE_CATEGORY_STORE", payload: {categoryType: categoryType}}
    )
}

export const hideCategoryAction = (categoryId) => {
    return (
        {type: "HIDE_CATEGORY_REQUEST", payload: {categoryId: categoryId}}
    )
}

export const updStoreCategorysAction = (categorys) => {
    return (
        {type: "UPD_CATEGORYS_STORE", payload: {categorys: categorys}}
    )
}