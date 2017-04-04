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
var ThreeComponent = (function () {
    function ThreeComponent() {
    }
    return ThreeComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ThreeComponent.prototype, "userName", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], ThreeComponent.prototype, "userAge", void 0);
ThreeComponent = __decorate([
    core_1.Component({
        selector: 'three-comp',
        template: "<h3>Name: {{userName}}</h3>\n               <h3>Age: {{userAge}}</h3>",
        styles: ["h2, p {color:red;}"]
    })
], ThreeComponent);
exports.ThreeComponent = ThreeComponent;
//# sourceMappingURL=three.component.js.map