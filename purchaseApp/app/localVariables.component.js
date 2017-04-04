"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var LocalVariables = (function () {
    function LocalVariables() {
        this.counter = 0;
    }
    LocalVariables.prototype.increment = function () { this.counter++; };
    LocalVariables.prototype.decrement = function () { this.counter--; };
    return LocalVariables;
}());
LocalVariables = __decorate([
    core_1.Component({
        selector: 'localVariables-comp',
        template: "\n                <p>{{ counter }}</p>\n              "
    })
], LocalVariables);
exports.LocalVariables = LocalVariables;
//# sourceMappingURL=localVariables.component.js.map