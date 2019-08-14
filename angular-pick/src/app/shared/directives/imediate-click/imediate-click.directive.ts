import { Directive, ElementRef, OnInit } from "@angular/core";

import { PlatformDetectorService } from "src/app/core/platform-detector/platform-detector.service";

@Directive({
    selector: '[imediate-click]'
})
export class ImediateClickDirective implements OnInit {
    constructor(
        private element: ElementRef,
        private platformDetectorService: PlatformDetectorService) { }

    ngOnInit(): void {
        this.platformDetectorService.isPlatformBrowser() && this.element.nativeElement.click();
    }
}