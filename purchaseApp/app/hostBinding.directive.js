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
var BoldHostBindingDirective = (function () {
    function BoldHostBindingDirective() {
        this.fontWeight = "normal";
    }
    Object.defineProperty(BoldHostBindingDirective.prototype, "getFontWeight", {
        get: function () {
            return this.fontWeight;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BoldHostBindingDirective.prototype, "getCursor", {
        get: function () {
            return "pointer";
        },
        enumerable: true,
        configurable: true
    });
    BoldHostBindingDirective.prototype.onMouseEnter = function () {
        this.fontWeight = "bold";
    };
    BoldHostBindingDirective.prototype.onMouseLeave = function () {
        this.fontWeight = "normal";
    };
    return BoldHostBindingDirective;
}());
__decorate([
    core_1.HostBinding("style.fontWeight"),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], BoldHostBindingDirective.prototype, "getFontWeight", null);
__decorate([
    core_1.HostBinding("style.cursor"),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], BoldHostBindingDirective.prototype, "getCursor", null);
__decorate([
    core_1.HostListener("mouseenter"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BoldHostBindingDirective.prototype, "onMouseEnter", null);
__decorate([
    core_1.HostListener("mouseleave"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BoldHostBindingDirective.prototype, "onMouseLeave", null);
BoldHostBindingDirective = __decorate([
    core_1.Directive({
        selector: '[bold-host-binding]',
    }),
    __metadata("design:paramtypes", [])
], BoldHostBindingDirective);
exports.BoldHostBindingDirective = BoldHostBindingDirective;
//# sourceMappingURL=hostBinding.directive.js.map