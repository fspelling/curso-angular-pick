import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { SignInComponent } from './signin/signin.component';
import { SignUpComponent } from './signup/signup.component';
import { LoginGuardService } from '../core/auth/login.guard.service';

const routes: Route[] = [
    {
        path: '',
        component: HomeComponent,
        canActivate: [LoginGuardService],
        children: [
            {
                path: '',
                component: SignInComponent,
                data: { title: 'Sign in' }
            },
            {
                path: 'signup',
                component: SignUpComponent,
                data: { title: 'Sign up' }
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class HomeRoutingModule { }
