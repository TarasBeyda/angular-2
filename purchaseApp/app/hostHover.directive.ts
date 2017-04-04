import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
    selector: '[host-directive]',
    host: {
        '(mouseenter)': 'onMouseEnter()',
        '(mouseleave)': 'onMouseLeave()'
    }
})
export class HostDirective {
    constructor(private element: ElementRef, private renderer: Renderer){
        this.renderer.setElementStyle(this.element.nativeElement, "cursor", "pointer");
    }

    onMouseEnter() {
        this.setFontWeight("bold");
    }

    onMouseLeave() {
        this.setFontWeight("normal");
    }

    private setFontWeight(val: string) {
        this.renderer.setElementStyle(this.element.nativeElement, "font-weight", val);
    }
}