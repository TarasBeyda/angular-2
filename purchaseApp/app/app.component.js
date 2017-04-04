"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var localVariables_component_1 = require("./localVariables.component");
var Item = (function () {
    function Item(purchase, price) {
        this.purchase = purchase;
        this.price = price;
        this.done = false;
    }
    return Item;
}());
exports.Item = Item;
var AppComponent = (function () {
    function AppComponent() {
        this.items = [
            { purchase: "Aaaa", done: false, price: 15.9 },
            { purchase: "Bbbb", done: false, price: 60 },
            { purchase: "Cccc", done: true, price: 22.6 },
            { purchase: "Gggg", done: false, price: 310 }
        ];
        this.name = 'Taras';
        this.forThreeCompUserName = 'Taras';
        this.forThreeCompUserAge = 19;
        this.forSetterCompFirstName = 'Tom';
        this.forSetterCompYouAge = 25;
        this.clicks = 0;
        this.forConnectCompUName = 'Jeck';
        this.lifeCycle = "Tom";
        this.lifeAge = 25;
        this.namePar = "Taras";
        this.welcomeName = 'Tom';
    }
    AppComponent.prototype.addItem = function (text, price) {
        if (text == null || text == undefined || text.trim() == "")
            return;
        if (price == null || price == undefined)
            return;
        this.items.push(new Item(text, price));
    };
    AppComponent.prototype.onChanged = function (increased) {
        increased == true ? this.clicks++ : this.clicks--;
    };
    AppComponent.prototype.ngOnChanges = function (changes) {
        for (var propName in changes) {
            var chng = changes[propName];
            var cur = JSON.stringify(chng.currentValue);
            var prev = JSON.stringify(chng.previousValue);
            this.log(propName + ": currentValue = " + cur + ", previousValue = " + prev);
        }
    };
    AppComponent.prototype.log = function (msg) {
        console.log(msg);
    };
    AppComponent.prototype.increment = function () { this.counterComponent.increment(); };
    AppComponent.prototype.decrement = function () { this.counterComponent.decrement(); };
    AppComponent.prototype.changeParagraph = function () {
        console.log(this.nameParagraph.nativeElement.textContent);
        this.nameParagraph.nativeElement.textContent = "helloo";
    };
    return AppComponent;
}());
__decorate([
    core_1.ViewChild(localVariables_component_1.LocalVariables),
    __metadata("design:type", localVariables_component_1.LocalVariables)
], AppComponent.prototype, "counterComponent", void 0);
__decorate([
    core_1.ViewChild('nameParagpaph'),
    __metadata("design:type", core_1.ElementRef)
], AppComponent.prototype, "nameParagraph", void 0);
AppComponent = __decorate([
    core_1.Component({
        selector: 'purchase-app',
        template: "<div class=\"page-header\">\n        <h1> List </h1>\n    </div>\n    <div class=\"panel\">\n        <div class=\"form-inline\">\n            <div class=\"form-group\">\n                <div class=\"col-md-8\">\n                    <input class=\"form-control\" [(ngModel)]=\"text\" placeholder = \"\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435\" />\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <div class=\"col-md-6\">\n                    <input type=\"number\" class=\"form-control\" [(ngModel)]=\"price\" placeholder=\"\u0426\u0435\u043D\u0430\" />\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <div class=\"col-md-offset-2 col-md-8\">\n                    <button class=\"btn btn-default\" (click)=\"addItem(text, price)\">\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C</button>\n                </div>\n            </div>\n        </div>\n        <table class=\"table table-striped\">\n            <thead>\n                <tr>\n                    <th>Subject</th>\n                    <th>Price</th>\n                    <th>Buy</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let item of items\">\n                    <td>{{item.purchase}}</td>\n                    <td>{{item.price}}</td>\n                    <td><input type=\"checkbox\" [(ngModel)]=\"item.done\" /></td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n\n    <child-comp></child-comp>\n    <p>Hello {{name}}</p>\n\n    <three-comp [userName] = \"forThreeCompUserName\" [userAge] = 'forThreeCompUserAge'></three-comp>\n    <input type=\"text\" [(ngModel)] = \"forThreeCompUserName\">\n\n    <setter-comp [firstName]=\"forSetterCompFirstName\" [youAge]=\"forSetterCompYouAge\"></setter-comp>\n    <input type=\"text\" [(ngModel)] = \"forSetterCompYouAge\">\n\n    <h2>Count: {{clicks}}</h2>\n    <connectLater-comp (onChanged) = \"onChanged($event)\" [(uName)] = \"forConnectCompUName\"></connectLater-comp>\n    Selected name: {{ forConnectCompUName }}\n\n    <lifeCycle-comp [lifeCycle] = \"lifeCycle\"></lifeCycle-comp>\n    <input type=\"text\" [(ngModel)] = \"lifeCycle\">\n    <input type=\"text\" [(ngModel)] = \"lifeAge\">\n\n    <!--<localVariables-comp #counter></localVariables-comp>-->\n    <!--<button (click)=\"counter.increment()\">+</button>-->\n    <!--<button (click)=\"counter.decrement()\">-</button>-->\n    <localVariables-comp ></localVariables-comp>\n    <button (click) = \"increment();\">+</button>\n    <button (click) = \"decrement();\">-</button>\n\n    <p #nameParagpaph>{{ namePar }}</p>\n    <button (click) = \"changeParagraph()\">Change paragraph</button>\n\n    <contentChild-comp>\n        <h3 #headerContent>Welcome {{ welcomeName }}!</h3>\n    </contentChild-comp>\n\n    <classAndStyle-comp></classAndStyle-comp>\n\n    <h3 attr-comp>I want font weight bold!!!</h3>\n\n    <h2 bold-host-listener>I want cursor pointer as host listener!!!</h2>\n\n    <h1 bold-host-binding>I want cursor pointer as host binding!!!</h1>\n\n    <h4 host-directive>I am host directive!!!</h4>\n\n    <h2 paramsIn [selectedSize] = \"'28px'\" [defaultSize] = \"'14px'\">Directive which takes the parameter</h2>",
        styles: ["\n            h1 { color: red; }\n            :host {\n                font-family: Verdana;\n                color: #555;\n            }\n    "]
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map