"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var services_routing_module_1 = require("./services-routing.module");
var services_component_1 = require("./components/services/services.component");
var ServicesModule = /** @class */ (function () {
    function ServicesModule() {
    }
    ServicesModule = __decorate([
        core_1.NgModule({
            declarations: [
                services_component_1.ServicesComponent
            ],
            imports: [
                common_1.CommonModule,
                services_routing_module_1.ServicesRoutingModule
            ],
            providers: []
        })
    ], ServicesModule);
    return ServicesModule;
}());
exports.ServicesModule = ServicesModule;
//# sourceMappingURL=services.module.js.map