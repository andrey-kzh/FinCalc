export function saveTokens(tokens) {
    localStorage.setItem('tokens', JSON.stringify(tokens));
}

export function saveUserName(name) {
    localStorage.setItem('userName', name);
}