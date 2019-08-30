import { Directive, OnInit, ElementRef, Renderer } from "@angular/core";

import { UserService } from "src/app/core/user/user.service";

@Directive({
    selector: '[showIfLogged]'
})
export class ShowIfLoggedDirective implements OnInit {
    styleDisplay: string;

    constructor(
        private userService: UserService,
        private element: ElementRef,
        private renderer: Renderer) { }

    ngOnInit(): void {
        this.styleDisplay = getComputedStyle(this.element.nativeElement).display;

        this.userService.getUser()
            .subscribe(user => {
                if (user)
                    this.renderer.setElementStyle(this.element.nativeElement, 'display', this.styleDisplay);
                else
                    this.renderer.setElementStyle(this.element.nativeElement, 'display', 'none');
            });
    }
}