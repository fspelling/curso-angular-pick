import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import * as jwt_decoder from 'jwt-decode';

import { TokenService } from '../token/token.service';
import { User } from './user';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private userSubject = new BehaviorSubject<User>(null);
    private userName = '';

    constructor(private tokenService: TokenService) {
        if (this.tokenService.hasToken()) {
            this.decodeAndNotify();
        }
    }

    setToken(token: string) {
        this.setToken(token);
        this.decodeAndNotify();
    }

    getUser(): Observable<User> {
        return this.userSubject.asObservable();
    }

    getUserName(): string {
        return this.userName;
    }

    logout() {
        this.tokenService.removeToken();
    }

    isLogged(): boolean {
        return this.tokenService.hasToken();
    }

    private decodeAndNotify() {
        const token = this.tokenService.getToken();
        const user = jwt_decoder.decode(token) as User;
        this.userName = user.name;
        this.userSubject.next(user);
    }
}
