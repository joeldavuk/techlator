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
var core_1 = require('@angular/core');
var ng2_bootstrap_1 = require('ng2-bootstrap/ng2-bootstrap');
var common_1 = require('@angular/common');
var ng2_bootstrap_2 = require('ng2-bootstrap/ng2-bootstrap');
var translate_service_1 = require('app/services/translate.service');
var AppComponent = (function () {
    function AppComponent(TranslateService) {
        this.disabled = false;
        this.status = { isopen: false };
        this.items = ['The first choice!',
            'And another choice for you.', 'but wait! A third!'];
        this.translations = TranslateService.getWords();
    }
    AppComponent.prototype.toggled = function (open) {
        console.log('Dropdown is now: ', open);
    };
    AppComponent.prototype.translateWord = function (event) {
        console.log(event.target.innerHTML);
    };
    AppComponent.prototype.toggleDropdown = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
        this.status.isopen = !this.status.isopen;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'techlator-app',
            directives: [ng2_bootstrap_1.AlertComponent, ng2_bootstrap_2.DROPDOWN_DIRECTIVES, common_1.CORE_DIRECTIVES],
            templateUrl: '/view/main.html',
            providers: [translate_service_1.TranslateService]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof translate_service_1.TranslateService !== 'undefined' && translate_service_1.TranslateService) === 'function' && _a) || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map