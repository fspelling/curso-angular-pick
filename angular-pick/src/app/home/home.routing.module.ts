import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";

import { HomeComponent } from "./home.component";
import { SignInComponent } from "./signin/signin.component";
import { SignUpComponent } from "./signup/signup.component";
import { LoginGuardService } from "../core/auth/login.guard.service";

const routes: Route[] = [
    {
        path: '',
        component: HomeComponent,
        canActivate: [LoginGuardService],
        children: [
            { 
                path: '', 
                component: SignInComponent
            },
            { 
                path: 'signup', 
                component: SignUpComponent
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
