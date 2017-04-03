"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var platform_browser_1 = require('@angular/platform-browser');
var material_1 = require("@angular/material");
var primeng_1 = require('primeng/primeng');
var primeng_2 = require('primeng/primeng');
var primeng_3 = require('primeng/primeng');
var primeng_4 = require('primeng/primeng');
require('hammerjs');
var AddArticleModule = (function () {
    function AddArticleModule() {
    }
    AddArticleModule = __decorate([
        core_1.NgModule({
            imports: [
                forms_1.FormsModule,
                platform_browser_1.BrowserModule,
                material_1.MaterialModule,
                primeng_1.InputTextareaModule,
                primeng_2.DialogModule,
                primeng_3.ButtonModule,
                primeng_4.GrowlModule,
            ],
            declarations: [],
            providers: [],
            exports: [],
        })
    ], AddArticleModule);
    return AddArticleModule;
}());
exports.AddArticleModule = AddArticleModule;
