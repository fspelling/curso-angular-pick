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
        private router: Router) { }

    ngOnInit(): void {
        this.user$ = this.userService.getUser();
    }

    logout() {
        this.userService.logout();
        this.router.navigate(['']);
    }
}
