import { Injectable } from "@angular/core";
import { Subject, Observable } from "rxjs";
import { Router, ActivationStart } from "@angular/router";

import { Alert, TypeAlert } from "./alert";

@Injectable({
    providedIn: 'root'
})
export class AlertService {
    alertSubject: Subject<Alert> = new Subject<Alert>();
    alertBreak = false;

    constructor(router: Router) {
        router.events.subscribe(event => {
            if (event instanceof ActivationStart) {
                if (this.alertBreak)
                    this.alertBreak = false;
                else
                    this.clear();
            }
        });
    }

    public getAlert(): Observable<Alert> {
        return this.alertSubject.asObservable();
    }

    public Success(message: string, alertBreak: boolean = false) {
        this.setAlert(TypeAlert.SUCCESS, message, alertBreak);
    }

    public Danger(message: string, alertBreak: boolean = false) {
        this.setAlert(TypeAlert.DANGER, message, alertBreak);
    }

    public Warning(message: string, alertBreak: boolean = false) {
        this.setAlert(TypeAlert.WARNING, message, alertBreak);
    }

    public Info(message: string, alertBreak: boolean = false) {
        this.setAlert(TypeAlert.INFO, message, alertBreak);
    }

    private setAlert(typeAlert: TypeAlert, message: string, alertBreak: boolean) {
        this.alertBreak = alertBreak;
        this.alertSubject.next(new Alert(typeAlert, message));
    }

    private clear() {
        this.alertSubject.next(null);
    }
}