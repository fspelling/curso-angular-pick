import { Injectable } from '@angular/core';

const KEY = 'authToken';

@Injectable({
    providedIn: 'root'
})
export class TokenService {
    constructor() {}

    setToken(token: string) {
        window.localStorage.setItem(KEY, token);
    }

    getToken(): string {
        return window.localStorage.getItem(KEY);
    }

    removeToken() {
        window.localStorage.removeItem(KEY);
    }

    hasToken(): boolean {
        return !!this.getToken();
    }
}
