import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { NewUser } from './new-user';
import { environment } from '../../../environments/environment';

const API_URL = environment.API_URL;

@Injectable({
    providedIn: 'root'
})
export class SignUpService {
    constructor(private http: HttpClient) { }

    checkUserNameTaken(userName: string): Observable<any> {
        return this.http.get(`${API_URL}/user/exists/${userName}`);
    }

    signup(newUser: NewUser): Observable<any> {
        return this.http.post(`${API_URL}/user/signup`, newUser);
    }
}
