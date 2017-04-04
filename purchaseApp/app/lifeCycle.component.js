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
var LifeCycleComponent = (function () {
    function LifeCycleComponent() {
        this.log("constructor");
    }
    LifeCycleComponent.prototype.ngOnInit = function () { this.log("onInit"); };
    LifeCycleComponent.prototype.ngOnChanges = function (changes) {
        for (var propName in changes) {
            var chng = changes[propName];
            var cur = JSON.stringify(chng.currentValue);
            var prev = JSON.stringify(chng.previousValue);
            this.log(propName + ": currentValue = " + cur + ", previousValue = " + prev);
        }
    };
    LifeCycleComponent.prototype.log = function (msg) {
        console.log(msg);
    };
    return LifeCycleComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], LifeCycleComponent.prototype, "lifeCycle", void 0);
LifeCycleComponent = __decorate([
    core_1.Component({
        selector: 'lifeCycle-comp',
        template: "<p>Life Cycle: {{ lifeCycle }}</p>"
    }),
    __metadata("design:paramtypes", [])
], LifeCycleComponent);
exports.LifeCycleComponent = LifeCycleComponent;
//# sourceMappingURL=lifeCycle.component.js.map