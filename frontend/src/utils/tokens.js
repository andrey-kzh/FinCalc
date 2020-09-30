export function saveTokensToStorage(tokens) {
    localStorage.setItem('tokens', JSON.stringify(tokens));
}

export function getRefreshTokenFromStorage() {
    if (!localStorage.tokens) return null
    return JSON.parse(localStorage.tokens).refreshToken;
}

export function getAccessTokenFromStorage() {
    if (!localStorage.tokens) return null
    return JSON.parse(localStorage.tokens).accessToken;
}

