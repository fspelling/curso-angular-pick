import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
    selector: '[darkenOnHover]'
})
export class DarkenOnHoverDirective {
    constructor(private el: ElementRef) { }

    @HostListener('mouseover')
    darkeOn() {
        console.log('1');
    }

    @HostListener('mouseleave')
    darkeOff() {
        console.log('2');
    }
}