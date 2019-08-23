import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/core/auth/auth.service';
import { PlatformDetectorService } from 'src/app/core/platform-detector/platform-detector.service';
import { AlertService } from 'src/app/shared/alert/alert.service';

@Component({
    templateUrl: './signin.component.html'
})
export class SignInComponent implements OnInit {
    @ViewChild('userNameInput') userNameInput: ElementRef<HTMLInputElement>;

    loginForm: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private authService: AuthService,
        private router: Router,
        private platformDetectorSerivice: PlatformDetectorService,
        private alertService: AlertService) { }

    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            userName: ['', Validators.required],
            password: ['', Validators.required]
        });

        this.platformDetectorSerivice.isPlatformBrowser() && this.userNameInput.nativeElement.focus();
    }

    login() {
        const userName = this.loginForm.get('userName').value;
        const password = this.loginForm.get('password').value;

        this.authService.authenticate(userName, password)
            .subscribe(
                () => {
                    this.router.navigate(['user', userName]);
                },
                (error) => {
                    console.log(error);
                    this.alertService.Danger('falha no login');

                    this.loginForm.reset();
                    this.platformDetectorSerivice.isPlatformBrowser() && this.userNameInput.nativeElement.focus();
                }
            );
    }
}
