export const getPosts = (menu) => {
    return (
        {type: "USER_FETCH_REQUESTED", payload: menu}
    )
}

export const toggleCategory = (categoryType) => {
    return (
        {type: "TOGGLE_CATEGORY", payload: {categoryType: categoryType}}
    )
}

export const loginRequest = (data) => {
    return (
        {type: "LOGIN_REQUEST", payload: data}
    )
}

export const authRequest = () => {
    return (
        {type: "AUTH_REQUEST", payload: {}}
    )
}

export const logout = () => {
    return (
        {type: "LOGOUT_REQUEST", payload: {}}
    )
}

export const addCategory = (data) => {
    return (
        {type: "ADD_CATEGORY", payload: data}
    )
}
