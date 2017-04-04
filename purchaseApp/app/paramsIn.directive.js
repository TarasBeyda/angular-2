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
var ParamsInDirective = (function () {
    function ParamsInDirective() {
        this.selectedSize = "18px";
        this.defaultSize = "16px";
        this.fontWeight = "normal";
    }
    ParamsInDirective.prototype.ngOnInit = function () {
        this.fontSize = this.defaultSize;
    };
    Object.defineProperty(ParamsInDirective.prototype, "getFontSize", {
        get: function () {
            return this.fontSize;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ParamsInDirective.prototype, "getFontWeight", {
        get: function () {
            return this.fontWeight;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ParamsInDirective.prototype, "getCursor", {
        get: function () {
            return "pointer";
        },
        enumerable: true,
        configurable: true
    });
    ParamsInDirective.prototype.onMouseEnter = function () {
        this.fontWeight = "bold";
        this.fontSize = this.selectedSize;
    };
    ParamsInDirective.prototype.onMouseLeave = function () {
        this.fontWeight = "normal";
        this.fontSize = this.defaultSize;
    };
    return ParamsInDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ParamsInDirective.prototype, "selectedSize", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ParamsInDirective.prototype, "defaultSize", void 0);
__decorate([
    core_1.HostBinding("style.fontSize"),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], ParamsInDirective.prototype, "getFontSize", null);
__decorate([
    core_1.HostBinding("style.fontWeight"),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], ParamsInDirective.prototype, "getFontWeight", null);
__decorate([
    core_1.HostBinding("style.cursor"),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], ParamsInDirective.prototype, "getCursor", null);
__decorate([
    core_1.HostListener("mouseenter"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ParamsInDirective.prototype, "onMouseEnter", null);
__decorate([
    core_1.HostListener("mouseleave"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ParamsInDirective.prototype, "onMouseLeave", null);
ParamsInDirective = __decorate([
    core_1.Directive({
        selector: '[paramsIn]',
    }),
    __metadata("design:paramtypes", [])
], ParamsInDirective);
exports.ParamsInDirective = ParamsInDirective;
//# sourceMappingURL=paramsIn.directive.js.map