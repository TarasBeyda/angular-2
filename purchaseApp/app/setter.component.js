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
var SetterComponent = (function () {
    function SetterComponent() {
    }
    Object.defineProperty(SetterComponent.prototype, "youAge", {
        get: function () { return this._youAge; },
        set: function (forSetterCompYouAge) {
            if (forSetterCompYouAge < 0)
                this._youAge = 0;
            else if (forSetterCompYouAge > 100)
                this._youAge = 100;
            else
                this._youAge = forSetterCompYouAge;
        },
        enumerable: true,
        configurable: true
    });
    return SetterComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], SetterComponent.prototype, "firstName", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], SetterComponent.prototype, "youAge", null);
SetterComponent = __decorate([
    core_1.Component({
        selector: 'setter-comp',
        template: "<h4>First name: {{ firstName }}</h4>\n               <h4>You age: {{ youAge }}</h4>",
        styles: ["h2, p {color:red;}"]
    })
], SetterComponent);
exports.SetterComponent = SetterComponent;
//# sourceMappingURL=setter.component.js.map