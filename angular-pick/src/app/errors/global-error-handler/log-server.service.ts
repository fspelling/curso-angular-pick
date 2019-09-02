import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { LogServer } from "./log-server";
import { environment } from "../../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class LogServerService {
    constructor(private http: HttpClient) { }

    log(log: LogServer): Observable<any> {
        return this.http.post(`${environment.API_LOG}/infra/log`, log);
    }
}