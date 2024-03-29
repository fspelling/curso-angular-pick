import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { UserService } from '../user/user.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
    constructor(
        private userService: UserService,
        private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        if (!this.userService.isLogged()) {
            console.log(state.url);
            this.router.navigate([''], { queryParams: { fromUrl: state.url } });
            return false;
        }

        return true;
    }
}
