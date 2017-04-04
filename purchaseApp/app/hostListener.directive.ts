import { Directive, ElementRef, Renderer, HostListener } from '@angular/core';

@Directive({
    selector: '[bold-host-listener]',
})
export class BoldHostListenerDirective {
    constructor(private element: ElementRef, private renderer: Renderer){
        this.renderer.setElementStyle(this.element.nativeElement, "cursor", "pointer");
    }

    @HostListener("mouseenter") onMouseEnter() {
        this.setFontWeight("bold");
    }

    @HostListener("mouseleave") onMouseLeave() {
        this.setFontWeight("normal");
    }

    private setFontWeight(val: string) {
        this.renderer.setElementStyle(this.element.nativeElement, "font-weight", val);
    }
}