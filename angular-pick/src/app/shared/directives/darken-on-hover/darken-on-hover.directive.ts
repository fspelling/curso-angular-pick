import { Directive, ElementRef, HostListener, Renderer, Input } from '@angular/core';

@Directive({
    selector: '[darkenOnHover]'
})
export class DarkenOnHoverDirective {
    @Input() brightnessOver = 70;

    constructor(private el: ElementRef, private render: Renderer) { }

    @HostListener('mouseover')
    darkeOn() {
        this.render.setElementStyle(this.el.nativeElement, 'filter', `brightness(${this.brightnessOver}%)`);
    }

    @HostListener('mouseleave')
    darkeOff() {
        this.render.setElementStyle(this.el.nativeElement, 'filter', 'brightness(100%)');
    }
}
