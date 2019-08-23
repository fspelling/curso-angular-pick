import { Component, OnInit, Input } from "@angular/core";

import { AlertService } from "./alert.service";
import { Alert, TypeAlert } from "./alert";

@Component({
    selector: 'ap-alert',
    templateUrl: './alert.component.html'
})
export class AlertComponent implements OnInit {
    @Input() timeout = 3000;

    alertas: Alert[] = [];

    constructor(private alertService: AlertService) { }

    ngOnInit(): void {
        this.alertService.getAlert()
            .subscribe(alert => {
                if (!alert) {
                    this.alertas = [];
                    return;
                }

                this.alertas.push(alert);
                setTimeout(() => this.removeAlert(alert), this.timeout);
            });
    }

    removeAlert(alertRemoved: Alert) {
        const listAlert = this.alertas.filter(alertItem => alertItem != alertRemoved);
        this.alertas = listAlert;
    }

    getAlertClass(alert: Alert): string {
        if (!alert) return '';

        switch (alert.typeAlert) {
            case TypeAlert.SUCCESS:
                return 'text-center alert alert-success';
            case TypeAlert.DANGER:
                return 'text-center alert alert-danger';
            case TypeAlert.WARNING:
                return 'text-center alert alert-warning';
            case TypeAlert.INFO:
                return 'text-center alert alert-info';
        }
    }
}