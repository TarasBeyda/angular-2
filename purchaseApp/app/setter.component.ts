import { Input, Component } from '@angular/core';

@Component({
    selector: 'setter-comp',
    template: `<h4>First name: {{ firstName }}</h4>
               <h4>You age: {{ youAge }}</h4>`,
    styles: [`h2, p {color:red;}`]
})
export class SetterComponent {
    @Input() firstName: string;
    _youAge: number;

    @Input()
        set youAge (forSetterCompYouAge: number) {
            if (forSetterCompYouAge < 0)
                this._youAge=0;
            else if (forSetterCompYouAge > 100)
                this._youAge=100;
            else
                this._youAge = forSetterCompYouAge;
        }

        get youAge() { return this._youAge; }
}