import { Directive, OnInit, Input, ElementRef, Renderer } from '@angular/core';

import { Photo } from '../../photo/photo';
import { UserService } from 'src/app/core/user/user.service';

@Directive({
    selector: '[photoOwnerOnly]'
})
export class PhotoOwnerOnlyDirective implements OnInit {
    @Input() photoOwner: Photo;

    constructor(
        private element: ElementRef,
        private renderer: Renderer,
        private userService: UserService) { }

    ngOnInit(): void {
        this.userService.getUser()
            .subscribe(user => {
                if (!user || user.id !== this.photoOwner.id) {
                    this.renderer.setElementStyle(this.element.nativeElement, 'display', 'none');
                }
            });
    }
}
