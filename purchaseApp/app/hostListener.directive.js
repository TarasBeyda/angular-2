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
var BoldHostListenerDirective = (function () {
    function BoldHostListenerDirective(element, renderer) {
        this.element = element;
        this.renderer = renderer;
        this.renderer.setElementStyle(this.element.nativeElement, "cursor", "pointer");
    }
    BoldHostListenerDirective.prototype.onMouseEnter = function () {
        this.setFontWeight("bold");
    };
    BoldHostListenerDirective.prototype.onMouseLeave = function () {
        this.setFontWeight("normal");
    };
    BoldHostListenerDirective.prototype.setFontWeight = function (val) {
        this.renderer.setElementStyle(this.element.nativeElement, "font-weight", val);
    };
    return BoldHostListenerDirective;
}());
__decorate([
    core_1.HostListener("mouseenter"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BoldHostListenerDirective.prototype, "onMouseEnter", null);
__decorate([
    core_1.HostListener("mouseleave"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BoldHostListenerDirective.prototype, "onMouseLeave", null);
BoldHostListenerDirective = __decorate([
    core_1.Directive({
        selector: '[bold-host-listener]',
    }),
    __metadata("design:paramtypes", [core_1.ElementRef, core_1.Renderer])
], BoldHostListenerDirective);
exports.BoldHostListenerDirective = BoldHostListenerDirective;
//# sourceMappingURL=hostListener.directive.js.map