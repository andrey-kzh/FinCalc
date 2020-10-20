import {getRefreshTokenFromStorage, getAccessTokenFromStorage} from '../utils/tokens'

export default class Api {

    constructor() {
        this.urlRoot = 'http://localhost:3000/api';
        this.optionsDefault = {
            mode: "cors"
        };

        this.getRefreshTokenFromStorage = getRefreshTokenFromStorage
        this.getAccessTokenFromStorage = getAccessTokenFromStorage

        this.loginRequest = this.loginRequest.bind(this);
        this.requestWithAccessToken = this.requestWithAccessToken.bind(this);
        this.refreshTokens = this.refreshTokens.bind(this);
        this.getAuthDataBySession = this.getAuthDataBySession.bind(this);
        this.addCategoryRequest = this.addCategoryRequest.bind(this);
    }


    async requestWithAccessToken(url, options) {
        try {
            const fullUrl = `${this.urlRoot}${url}`;

            let accessToken = this.getAccessTokenFromStorage();

            if (!options.headers) options.headers = {};
            options.headers = {'Content-Type': 'application/json'};
            if (accessToken) options.headers.Authorization = `Bearer ${accessToken}`;

            return await fetch(fullUrl, {...this.optionsDefault, ...options});
        } catch (e) {
            console.log(e.message)
        }
    }


    async refreshTokens() {
        try {
            const refreshToken = this.getRefreshTokenFromStorage();

            const fullUrl = `${this.urlRoot}/auth/refresh`;
            const options = {
                method: "POST",
                body: JSON.stringify({refreshToken: refreshToken}),
                headers: {
                    'Content-Type': 'application/json'
                }
            };

            const response = await fetch(fullUrl, {...this.optionsDefault, ...options});
            return response.json().then((data) => {
                return data
            })
        } catch (e) {
            console.log(e.message)
        }


    }

    async loginRequest(data) {
        const fullUrl = `${this.urlRoot}/auth/login`;
        const options = {
            method: "POST",
            body: JSON.stringify({login: data.login, password: data.pass}),
            headers: {
                'Content-Type': 'application/json'
            }
        };
        try {
            const response = await fetch(fullUrl, {...this.optionsDefault, ...options});
            return response.json().then((data) => {
                return data
            })
        } catch (e) {
            console.log(e.message)
        }

    }

    async getAuthDataBySession() {

        const url = `/auth/user`;
        const options = {
            method: "GET"
        };
        try {
            const response = await this.requestWithAccessToken(url, options)
            return response.json().then((data) => {
                return data
            })
        } catch (e) {
            console.log(e.message)
        }
    }


    async addCategoryRequest(category) {

        const url = `/categorys`;
        const options = {
            method: "POST",
            body: JSON.stringify({
                title: category.title,
                userId: category.userId,
                type: category.type
            }),
        };
        try {
            const response = await this.requestWithAccessToken(url, options)
            console.log(response)
            return response.json().then((data) => {
                return data
            })
        } catch (e) {
            console.log(e.message)
        }


    }

}
