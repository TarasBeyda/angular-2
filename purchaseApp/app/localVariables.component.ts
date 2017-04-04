import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
    selector: 'localVariables-comp',
    template: `
                <p>{{ counter }}</p>
              `
})
export class LocalVariables {
    counter: number = 0;
    increment() { this.counter++; }
    decrement() { this.counter--; }
}