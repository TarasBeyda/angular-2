import { Component, ContentChild, ElementRef } from '@angular/core';

@Component({
    selector: 'contentChild-comp',
    template: `
                <ng-content></ng-content>
                <button (click)="change()">Change</button>
              `
})
export class ContentChildComponent {

    @ContentChild('headerContent')
    header: ElementRef;

    change() {
        console.log(this.header);
        this.header.nativeElement.textContent = "Hello to world!";
    }
}