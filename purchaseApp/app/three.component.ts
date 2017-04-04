import { Input, Component } from '@angular/core';

@Component({
    selector: 'three-comp',
    template: `<h3>Name: {{userName}}</h3>
               <h3>Age: {{userAge}}</h3>`,
    styles: [`h2, p {color:red;}`]
})
export class ThreeComponent {
    @Input() userName: string;
    @Input() userAge: number;
}