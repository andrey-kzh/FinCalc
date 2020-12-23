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
        this.getAllCategorys = this.getAllCategorys.bind(this);
        this.updCategoryRequest = this.updCategoryRequest.bind(this);
        this.getAllListsWithCategorys = this.getAllListsWithCategorys.bind(this);
        this.addListItemRequest = this.addListItemRequest.bind(this);
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
            return response.json().then((data) => {
                return data
            })
        } catch (e) {
            console.log(e.message)
        }
    }


    async updCategoryRequest(category) {

        const url = `/categorys`;
        const options = {
            method: "PUT",
            body: JSON.stringify(category),
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


    async getAllCategorys(userId) {

        const url = `/categorys?userId=${userId}`;
        const options = {
            method: "GET",
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


    async getAllListsWithCategorys({userId, dateMin, dateMax}) {

        const url = `/lists?userId=${userId}&dateMin=${dateMin}&dateMax=${dateMax}`;
        const options = {
            method: "GET",
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


    async addListItemRequest(listItem) {

        const url = `/lists`;
        const options = {
            method: "POST",
            body: JSON.stringify(listItem),
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


}
