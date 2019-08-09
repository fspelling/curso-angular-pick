import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { User } from '../user/user';
import { UserService } from '../user/user.service';

@Component({
    selector: 'ap-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
    user$: Observable<User>;

    constructor(
        private userService: UserService,
        private router: Router) {
            this.user$ = this.userService.getUser();
        }

    ngOnInit(): void {
    }

    logout() {
        this.userService.logout();
        this.router.navigate(['']);
    }
}
