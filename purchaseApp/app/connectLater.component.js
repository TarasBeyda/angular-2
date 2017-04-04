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
var ConnectLaterComponent = (function () {
    function ConnectLaterComponent() {
        this.onChanged = new core_1.EventEmitter();
        this.uNameChange = new core_1.EventEmitter();
    }
    ConnectLaterComponent.prototype.change = function (increased) {
        this.onChanged.emit(increased);
    };
    ConnectLaterComponent.prototype.onNameChange = function (model) {
        this.uName = model;
        this.uNameChange.emit(model);
    };
    return ConnectLaterComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ConnectLaterComponent.prototype, "onChanged", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ConnectLaterComponent.prototype, "uName", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ConnectLaterComponent.prototype, "uNameChange", void 0);
ConnectLaterComponent = __decorate([
    core_1.Component({
        selector: 'connectLater-comp',
        template: "<button (click) = \"change(true)\">+</button>\n               <button (click) = \"change(false)\">-</button>\n               <input [ngModel]=\"uName\" (ngModelChange)=\"onNameChange($event)\" />"
    })
], ConnectLaterComponent);
exports.ConnectLaterComponent = ConnectLaterComponent;
//# sourceMappingURL=connectLater.component.js.map