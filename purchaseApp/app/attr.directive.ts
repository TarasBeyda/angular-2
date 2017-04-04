import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
    selector: '[attr-comp]',
})
export class AttrDirective {
    constructor(private elementRef: ElementRef, private renderer: Renderer){
        //this.elementRef.nativeElement.style.fontWeight = "bold";
        this.renderer.setElementStyle(this.elementRef.nativeElement, "font-weight", "bold");
    }
}