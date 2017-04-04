import { Component, OnChanges, SimpleChanges, ViewChild, ElementRef } from '@angular/core';
import { LocalVariables } from './localVariables.component';

export class Item {
    purchase: string;
    done: boolean;
    price: number;

    constructor(purchase: string, price: number) {
        this.purchase = purchase;
        this.price = price;
        this.done = false;
    }
}

@Component({
    selector: 'purchase-app',
    template: `<div class="page-header">
        <h1> List </h1>
    </div>
    <div class="panel">
        <div class="form-inline">
            <div class="form-group">
                <div class="col-md-8">
                    <input class="form-control" [(ngModel)]="text" placeholder = "Название" />
                </div>
            </div>
            <div class="form-group">
                <div class="col-md-6">
                    <input type="number" class="form-control" [(ngModel)]="price" placeholder="Цена" />
                </div>
            </div>
            <div class="form-group">
                <div class="col-md-offset-2 col-md-8">
                    <button class="btn btn-default" (click)="addItem(text, price)">Добавить</button>
                </div>
            </div>
        </div>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Subject</th>
                    <th>Price</th>
                    <th>Buy</th>
                </tr>
            </thead>
            <tbody>
                <tr *ngFor="let item of items">
                    <td>{{item.purchase}}</td>
                    <td>{{item.price}}</td>
                    <td><input type="checkbox" [(ngModel)]="item.done" /></td>
                </tr>
            </tbody>
        </table>
    </div>

    <child-comp></child-comp>
    <p>Hello {{name}}</p>

    <three-comp [userName] = "forThreeCompUserName" [userAge] = 'forThreeCompUserAge'></three-comp>
    <input type="text" [(ngModel)] = "forThreeCompUserName">

    <setter-comp [firstName]="forSetterCompFirstName" [youAge]="forSetterCompYouAge"></setter-comp>
    <input type="text" [(ngModel)] = "forSetterCompYouAge">

    <h2>Count: {{clicks}}</h2>
    <connectLater-comp (onChanged) = "onChanged($event)" [(uName)] = "forConnectCompUName"></connectLater-comp>
    Selected name: {{ forConnectCompUName }}

    <lifeCycle-comp [lifeCycle] = "lifeCycle"></lifeCycle-comp>
    <input type="text" [(ngModel)] = "lifeCycle">
    <input type="text" [(ngModel)] = "lifeAge">

    <!--<localVariables-comp #counter></localVariables-comp>-->
    <!--<button (click)="counter.increment()">+</button>-->
    <!--<button (click)="counter.decrement()">-</button>-->
    <localVariables-comp ></localVariables-comp>
    <button (click) = "increment();">+</button>
    <button (click) = "decrement();">-</button>

    <p #nameParagpaph>{{ namePar }}</p>
    <button (click) = "changeParagraph()">Change paragraph</button>

    <contentChild-comp>
        <h3 #headerContent>Welcome {{ welcomeName }}!</h3>
    </contentChild-comp>

    <classAndStyle-comp></classAndStyle-comp>

    <h3 attr-comp>I want font weight bold!!!</h3>

    <h2 bold-host-listener>I want cursor pointer as host listener!!!</h2>

    <h1 bold-host-binding>I want cursor pointer as host binding!!!</h1>

    <h4 host-directive>I am host directive!!!</h4>

    <h2 paramsIn [selectedSize] = "'28px'" [defaultSize] = "'14px'">Directive which takes the parameter</h2>`,

    styles: [`
            h1 { color: red; }
            :host {
                font-family: Verdana;
                color: #555;
            }
    `]
})

export class AppComponent {
    items: Item[] =
        [
            { purchase: "Aaaa", done: false, price: 15.9 },
            { purchase: "Bbbb", done: false, price: 60 },
            { purchase: "Cccc", done: true, price: 22.6 },
            { purchase: "Gggg", done: false, price:310 }
        ];

    addItem (text: string, price: number): void {

        if(text == null || text == undefined || text.trim() == "")
            return;
        if(price == null || price == undefined)
            return;
        this.items.push(new Item(text, price));
    }




    name = 'Taras';




    forThreeCompUserName: string = 'Taras';
    forThreeCompUserAge: number = 19;




    forSetterCompFirstName: string = 'Tom';
    forSetterCompYouAge: number = 25;




    clicks: number = 0;
    onChanged (increased: boolean) {
        increased == true ? this.clicks++ : this.clicks--;
    }




    forConnectCompUName: string = 'Jeck';




    lifeCycle: string = "Tom";
    lifeAge: number = 25;

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




    @ViewChild(LocalVariables)
    private counterComponent: LocalVariables;

    increment() { this.counterComponent.increment(); }
    decrement() { this.counterComponent.decrement(); }




    @ViewChild('nameParagpaph')
    nameParagraph: ElementRef;

    namePar: string = "Taras";

    changeParagraph() {
        console.log(this.nameParagraph.nativeElement.textContent);
        this.nameParagraph.nativeElement.textContent = "helloo"
    }



    welcomeName: string = 'Tom';
}