import { Component } from '@angular/core';

@Component({
    selector: 'classAndStyle-comp',
    template: `
                <div [ngClass] = "{ colorTextRed: true, displayVisible: visibility }">
                    <p>adsadss</p>
                    <p [ngClass] = "{ colorTextRed: false, colorTextGreen: true }">dsadsadsa</p>
                    <p [ngStyle] = "{ 'text-decoration': 'underline' }">dsadsadsasa</p>
                </div>
                <button (click) = "toggleVisible()">Hide / Show</button>
              `,
    styles: [
        `.colorTextRed { color: red; }
        .colorTextGreen { color: green; }
        .displayVisible { display: none; }`
    ]
})
export class ClassAndStyleComponent {
    visibility: boolean = true;

    toggleVisible() {
        this.visibility =! this.visibility;
    }
}