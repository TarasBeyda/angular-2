import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'connectLater-comp',
    template: `<button (click) = "change(true)">+</button>
               <button (click) = "change(false)">-</button>
               <input [ngModel]="uName" (ngModelChange)="onNameChange($event)" />`
})
export class ConnectLaterComponent {
    @Output() onChanged = new EventEmitter <boolean> ();
    change (increased: boolean) {
        this.onChanged.emit(increased);
    }

    @Input() uName: string;
    @Output() uNameChange = new EventEmitter <string> ();
    onNameChange (model: string) {
        this.uName = model;
        this.uNameChange.emit(model)
    }
}