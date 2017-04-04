"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var child_component_1 = require("./child.component");
var three_component_1 = require("./three.component");
var setter_component_1 = require("./setter.component");
var connectLater_component_1 = require("./connectLater.component");
var lifeCycle_component_1 = require("./lifeCycle.component");
var localVariables_component_1 = require("./localVariables.component");
var contentChild_component_1 = require("./contentChild.component");
var classAndStyle_component_1 = require("./classAndStyle.component");
var attr_directive_1 = require("./attr.directive");
var hostListener_directive_1 = require("./hostListener.directive");
var hostBinding_directive_1 = require("./hostBinding.directive");
var hostHover_directive_1 = require("./hostHover.directive");
var paramsIn_directive_1 = require("./paramsIn.directive");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule],
        declarations: [app_component_1.AppComponent,
            child_component_1.ChildComponent,
            three_component_1.ThreeComponent,
            setter_component_1.SetterComponent,
            connectLater_component_1.ConnectLaterComponent,
            lifeCycle_component_1.LifeCycleComponent,
            localVariables_component_1.LocalVariables,
            contentChild_component_1.ContentChildComponent,
            classAndStyle_component_1.ClassAndStyleComponent,
            attr_directive_1.AttrDirective,
            hostListener_directive_1.BoldHostListenerDirective,
            hostBinding_directive_1.BoldHostBindingDirective,
            hostHover_directive_1.HostDirective,
            paramsIn_directive_1.ParamsInDirective],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map