"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var ClassAndStyleComponent = (function () {
    function ClassAndStyleComponent() {
        this.visibility = true;
    }
    ClassAndStyleComponent.prototype.toggleVisible = function () {
        this.visibility = !this.visibility;
    };
    return ClassAndStyleComponent;
}());
ClassAndStyleComponent = __decorate([
    core_1.Component({
        selector: 'classAndStyle-comp',
        template: "\n                <div [ngClass] = \"{ colorTextRed: true, displayVisible: visibility }\">\n                    <p>adsadss</p>\n                    <p [ngClass] = \"{ colorTextRed: false, colorTextGreen: true }\">dsadsadsa</p>\n                    <p [ngStyle] = \"{ 'text-decoration': 'underline' }\">dsadsadsasa</p>\n                </div>\n                <button (click) = \"toggleVisible()\">Hide / Show</button>\n              ",
        styles: [
            ".colorTextRed { color: red; }\n        .colorTextGreen { color: green; }\n        .displayVisible { display: none; }"
        ]
    })
], ClassAndStyleComponent);
exports.ClassAndStyleComponent = ClassAndStyleComponent;
//# sourceMappingURL=classAndStyle.component.js.map