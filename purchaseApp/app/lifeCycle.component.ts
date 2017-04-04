import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
    selector: 'lifeCycle-comp',
    template: `<p>Life Cycle: {{ lifeCycle }}</p>`
})
export class LifeCycleComponent implements OnInit, OnChanges {
    @Input() lifeCycle: string;

    constructor(){ this.log(`constructor`); }
    ngOnInit() { this.log(`onInit`); }

    ngOnChanges (changes: SimpleChanges) {
        for (let propName in changes) {
            let chng = changes[propName];
            let cur  = JSON.stringify(chng.currentValue);
            let prev = JSON.stringify(chng.previousValue);
            this.log(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
        }
    }

    private log(msg: string) {
        console.log(msg);
    }
}