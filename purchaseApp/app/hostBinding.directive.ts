import { Directive, ElementRef, Renderer, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector: '[bold-host-binding]',
})
export class BoldHostBindingDirective {
    private fontWeight = "normal";
    constructor(){}

    @HostBinding("style.fontWeight") get getFontWeight(){
        return this.fontWeight;
    }

    @HostBinding("style.cursor") get getCursor(){
        return "pointer";
    }

    @HostListener("mouseenter") onMouseEnter() {
        this.fontWeight = "bold";
    }

    @HostListener("mouseleave") onMouseLeave() {
        this.fontWeight = "normal";
    }
}