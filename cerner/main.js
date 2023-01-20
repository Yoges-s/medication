(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _patient_map_patient_map_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./patient-map/patient-map.component */ "./src/app/patient-map/patient-map.component.ts");
/* harmony import */ var _pumpdetails_pumpdetails_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pumpdetails/pumpdetails.component */ "./src/app/pumpdetails/pumpdetails.component.ts");





var routes = [
    { path: '', component: _patient_map_patient_map_component__WEBPACK_IMPORTED_MODULE_3__["PatientMapComponent"] },
    { path: 'pump-listing', component: _patient_map_patient_map_component__WEBPACK_IMPORTED_MODULE_3__["PatientMapComponent"] },
    { path: 'medication-orders', component: _pumpdetails_pumpdetails_component__WEBPACK_IMPORTED_MODULE_4__["PumpdetailsComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <app-homepage></app-homepage> -->\r\n<!-- <app-patient-map></app-patient-map> -->\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'cerner';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");
/* harmony import */ var src_config_endpoint__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/config/endpoint */ "./src/config/endpoint.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _patient_map_patient_map_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./patient-map/patient-map.component */ "./src/app/patient-map/patient-map.component.ts");
/* harmony import */ var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/autocomplete */ "./node_modules/primeng/autocomplete.js");
/* harmony import */ var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(primeng_autocomplete__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/dialog */ "./node_modules/primeng/dialog.js");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(primeng_dialog__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/button.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(primeng_button__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _pumpdetails_pumpdetails_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pumpdetails/pumpdetails.component */ "./src/app/pumpdetails/pumpdetails.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm5/button-toggle.es5.js");
/* harmony import */ var _services_http_interceptor__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/http-interceptor */ "./src/app/services/http-interceptor/index.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/inputtext */ "./node_modules/primeng/inputtext.js");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(primeng_inputtext__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/checkbox */ "./node_modules/primeng/checkbox.js");
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(primeng_checkbox__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _medication_request_medication_request_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./medication-request/medication-request.component */ "./src/app/medication-request/medication-request.component.ts");



























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_8__["HomepageComponent"],
                _patient_map_patient_map_component__WEBPACK_IMPORTED_MODULE_11__["PatientMapComponent"],
                _pumpdetails_pumpdetails_component__WEBPACK_IMPORTED_MODULE_17__["PumpdetailsComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_18__["HomeComponent"],
                _medication_request_medication_request_component__WEBPACK_IMPORTED_MODULE_24__["MedicationRequestComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                primeng_autocomplete__WEBPACK_IMPORTED_MODULE_12__["AutoCompleteModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__["MatTabsModule"],
                primeng_dialog__WEBPACK_IMPORTED_MODULE_15__["DialogModule"],
                primeng_button__WEBPACK_IMPORTED_MODULE_16__["ButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
                _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_19__["MatButtonToggleModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_21__["DropdownModule"],
                primeng_inputtext__WEBPACK_IMPORTED_MODULE_22__["InputTextModule"],
                primeng_checkbox__WEBPACK_IMPORTED_MODULE_23__["CheckboxModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_21__["CalendarModule"],
            ],
            providers: [src_config_endpoint__WEBPACK_IMPORTED_MODULE_9__["ApiEndPoint"], _services_http_interceptor__WEBPACK_IMPORTED_MODULE_20__["httpInterceptorProviders"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-toolbar {\r\n    background: #004a9f;\r\n    color: white;\r\n  }\r\n  mat-sidenav {\r\n    /* margin: 16px; */\r\n    width: 200px;\r\n    border-right: none;\r\n    background: grey;\r\n    color: white;\r\n    /* border-radius: 10px; */\r\n    padding: 16px;\r\n    text-align: center;\r\n  }\r\n  .center {\r\n    display: flex;\r\n    height: 500px;\r\n    background-color: white;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n  .content {\r\n    height: calc(100vh - 130px);\r\n    border-radius: 10px;\r\n    margin: 16px;\r\n    margin-left: 32px;\r\n    padding: 16px;\r\n    overflow: auto;\r\n  }\r\n  mat-sidenav-container {\r\n    height: calc(100vh - 65px);\r\n  }\r\n  .row {\r\n    display: flex;\r\n  }\r\n  /* Create three equal columns that sits next to each other */\r\n  .column {\r\n    flex: 33.33%;\r\n    padding: 5px;\r\n  }\r\n  .menu-button {\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: flex-start;\r\n    font-size: 1rem;\r\n  }\r\n  .avatar {\r\n    margin-top: 16px;\r\n    width: 100px;\r\n    height: 100px;\r\n    border-radius: 50%;\r\n  }\r\n  .name {\r\n    margin-top: 8px;\r\n    font-weight: normal;\r\n  }\r\n  .designation {\r\n    margin-top: 2px;\r\n    font-size: 0.7rem;\r\n    color: lightgrey;\r\n  }\r\n  mat-divider {\r\n    margin-top: 16px;\r\n    margin-bottom: 16px;\r\n    background-color: rgba(255, 255, 255, 0.5);\r\n  }\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQkFBb0I7SUFDcEIsYUFBYTtHQUNkO0VBQ0Q7SUFDRSxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLDBCQUEwQjtJQUMxQixjQUFjO0lBQ2QsbUJBQW1CO0dBQ3BCO0VBQ0Q7SUFDRSxjQUFjO0lBQ2QsY0FBYztJQUNkLHdCQUF3QjtJQUN4Qix3QkFBd0I7SUFDeEIsb0JBQW9CO0dBQ3JCO0VBQ0Q7SUFDRSw0QkFBNEI7SUFDNUIsb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGVBQWU7R0FDaEI7RUFDRDtJQUNFLDJCQUEyQjtHQUM1QjtFQUNEO0lBQ0UsY0FBYztHQUNmO0VBRUQsNkRBQTZEO0VBQzdEO0lBQ0UsYUFBYTtJQUNiLGFBQWE7R0FDZDtFQUNEO0lBQ0UsWUFBWTtJQUNaLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIsNEJBQTRCO0lBQzVCLGdCQUFnQjtHQUNqQjtFQUVEO0lBQ0UsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixjQUFjO0lBQ2QsbUJBQW1CO0dBQ3BCO0VBRUQ7SUFDRSxnQkFBZ0I7SUFDaEIsb0JBQW9CO0dBQ3JCO0VBRUQ7SUFDRSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtHQUNsQjtFQUVEO0lBQ0UsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQiwyQ0FBMkM7R0FDNUMiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC10b29sYmFyIHtcclxuICAgIGJhY2tncm91bmQ6ICMwMDRhOWY7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIG1hdC1zaWRlbmF2IHtcclxuICAgIC8qIG1hcmdpbjogMTZweDsgKi9cclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGJvcmRlci1yaWdodDogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6IGdyZXk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAvKiBib3JkZXItcmFkaXVzOiAxMHB4OyAqL1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgLmNlbnRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgaGVpZ2h0OiA1MDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuICAuY29udGVudCB7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxMzBweCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgbWFyZ2luOiAxNnB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMycHg7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgfVxyXG4gIG1hdC1zaWRlbmF2LWNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA2NXB4KTtcclxuICB9XHJcbiAgLnJvdyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gIH1cclxuICBcclxuICAvKiBDcmVhdGUgdGhyZWUgZXF1YWwgY29sdW1ucyB0aGF0IHNpdHMgbmV4dCB0byBlYWNoIG90aGVyICovXHJcbiAgLmNvbHVtbiB7XHJcbiAgICBmbGV4OiAzMy4zMyU7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgfVxyXG4gIC5tZW51LWJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gIH1cclxuICBcclxuICAuYXZhdGFyIHtcclxuICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIH1cclxuICBcclxuICAubmFtZSB7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIH1cclxuICBcclxuICAuZGVzaWduYXRpb24ge1xyXG4gICAgbWFyZ2luLXRvcDogMnB4O1xyXG4gICAgZm9udC1zaXplOiAwLjdyZW07XHJcbiAgICBjb2xvcjogbGlnaHRncmV5O1xyXG4gIH1cclxuICBcclxuICBtYXQtZGl2aWRlciB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcclxuICB9XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <div style=\"color: #343a40;background-color:  #006bb3;width: 100%;height: 50px;\">\r\n    <div style=\"float: left;padding: 6px 3px 1px 9px;color: floralwhite;font-size: 20px;\">\r\n      <button mat-icon-button *ngIf=\"sidenav.mode === 'side'\" (click)=\"sidenav.toggle()\">\r\n        <mat-icon> menu </mat-icon>\r\n      </button>\r\n      <img src=\"assets/img/ACL Logo.svg\">\r\n    </div>\r\n    <div style=\"float: left;padding: 12px;color: floralwhite;font-size: 18px;\">ACL INFUSION PUMP</div>\r\n  </div>\r\n<mat-sidenav-container>\r\n  <mat-sidenav #sidenav=\"matSidenav\" class=\"mat-elevation-z8\">\r\n    <button mat-button class=\"menu-button\" routerLink=\"/home\" >\r\n      <h4>Home</h4>\r\n    </button>\r\n    <button mat-button class=\"menu-button\" routerLink=\"/medicationorder\">\r\n      <h4>Medication Order</h4>\r\n    </button>\r\n  </mat-sidenav>\r\n  <mat-sidenav-content>\r\n    <router-outlet></router-outlet>\r\n  </mat-sidenav-content>\r\n</mat-sidenav-container>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var HomeComponent = /** @class */ (function () {
    function HomeComponent(observer, router) {
        this.observer = observer;
        this.router = router;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.observer.observe(['(max-width: 800px)']).subscribe(function (res) {
            if (res.matches) {
                _this.sidenav.mode = 'over';
                _this.sidenav.close();
            }
            else {
                _this.sidenav.mode = 'side';
                _this.sidenav.open();
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenav"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenav"])
    ], HomeComponent.prototype, "sidenav", void 0);
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/homepage/homepage.component.css":
/*!*************************************************!*\
  !*** ./src/app/homepage/homepage.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n    width: 100%;\r\n}\r\n\r\nmat-header-cell {\r\n    display: flex;\r\n    justify-content: flex-end;\r\n}\r\n\r\ntr.mat-header-row {\r\n    height: 48px !important;\r\n}\r\n\r\ntr.mat-row {\r\n    height: 45px !important;\r\n}\r\n\r\nth.mat-header-cell:first-of-type, td.mat-cell:first-of-type {\r\n    padding-left: 12px !important;\r\n    padding-right: 12px !important;\r\n    text-align: center !important;\r\n}\r\n\r\ntd.mat-cell {\r\n    text-align: left !important;\r\n}\r\n\r\n.mat-cell {\r\n    font-size: 12px !important;\r\n}\r\n\r\n.overflow-property {\r\n    max-width: 220px;\r\n    width: 410px;\r\n    white-space: nowrap;\r\n    overflow: hidden !important;\r\n    text-overflow: ellipsis;\r\n}\r\n\r\nth.mat-header-cell:last-of-type {\r\n    padding-right: 0px !important;\r\n}\r\n\r\n.mat-header-cell {\r\n    font-size: 14px !important;\r\n}\r\n\r\n.header {\r\n    background: #343a40;\r\n    color: #fff;\r\n    padding-bottom: 7px;\r\n    padding-top: 7px;\r\n}\r\n\r\n.close {\r\n    z-index: 1;\r\n    margin-right: 75px;\r\n    font-size: 36px;\r\n    padding-bottom: 8px;\r\n}\r\n\r\n.close:focus {\r\n    outline: none !important;\r\n}\r\n\r\n.close:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.header span {\r\n    font-size: 13px;\r\n}\r\n\r\n.custom-file-label {\r\n    padding-right: 35%;\r\n    white-space: nowrap;\r\n    overflow: hidden !important;\r\n    text-overflow: ellipsis;\r\n}\r\n\r\n.header h5,\r\nspan {\r\n    margin-left: 50px;\r\n}\r\n\r\n.border {\r\n    background: #343a40;\r\n    height: 1px;\r\n}\r\n\r\n::ng-deep .mat-checkbox-checked.mat-accent .mat-checkbox-background {\r\n    background-color: green !important;\r\n}\r\n\r\n::ng-deep .mat-header-cell {\r\n    background: #343a40;\r\n    color: #fff;\r\n    font-size: 16px;\r\n    padding: 12px;\r\n}\r\n\r\n.nav__cont {\r\n    position: absolute;\r\n    width: 40px;\r\n    top: 66px;\r\n    border-top: 1px solid #000;\r\n    height: 100vh;\r\n    z-index: 100;\r\n    background-color: #414c56;\r\n    overflow: hidden;\r\n    transition: width 0.3s ease;\r\n    cursor: pointer;\r\n    box-shadow: 4px 7px 10px rgba(0, 0, 0, 0.4);\r\n}\r\n\r\n.nav__cont:hover {\r\n    width: 100px;\r\n}\r\n\r\n/* @media screen and (min-width: 600px) {\r\n    .nav__cont {\r\n        width: 80px;\r\n    }\r\n} */\r\n\r\n.nav {\r\n    list-style-type: none;\r\n    color: white;\r\n}\r\n\r\n.nav:first-child {\r\n    padding-top: 0.5rem;\r\n}\r\n\r\n.nav__items {\r\n    padding-bottom: 0.5rem;\r\n    font-family: \"roboto\";\r\n}\r\n\r\n.nav__items a {\r\n    position: relative;\r\n    display: block;\r\n    top: -35px;\r\n    padding-left: 18px;\r\n    padding-right: 15px;\r\n    transition: all 0.3s ease;\r\n    margin-left: 25px;\r\n    margin-right: 10px;\r\n    text-decoration: none;\r\n    color: white;\r\n    font-family: \"roboto\";\r\n    font-weight: 100;\r\n    font-size: 1.35em;\r\n}\r\n\r\n.nav__items a:after {\r\n    content: \"\";\r\n    width: 100%;\r\n    height: 100%;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    border-radius: 2px;\r\n    background: radial-gradient(circle at 94.02% 88.03%, #54a4ff, transparent 100%);\r\n    opacity: 0;\r\n    transition: all 0.5s ease;\r\n    z-index: -10;\r\n}\r\n\r\n.nav__items:hover a:after {\r\n    opacity: 1;\r\n}\r\n\r\n/* ::ng-deep .mat-header-cell,\r\n.mat-sort-header-content {\r\n    text-align: center !important;\r\n} */\r\n\r\n.btn-primary, .btn-warning {\r\n    background-color: #e9ecef !important;\r\n    border: 1px solid #ced4da !important;\r\n    border-radius: 4px;\r\n    color: #495057 !important;\r\n}\r\n\r\n.btn-primary:active,\r\n.btn-primary:focus, .btn-warning:active, .btn-warning:focus {\r\n    background-color: #e9ecef !important;\r\n    border-color:1px #e9ecef !important;\r\n    box-shadow: none !important;\r\n}\r\n\r\n.btn-primary:hover:not(:disabled), .btn-warning:hover:not(:disabled) {\r\n    cursor: pointer !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZXBhZ2UvaG9tZXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7Q0FDZjs7QUFFRDtJQUNJLGNBQWM7SUFDZCwwQkFBMEI7Q0FDN0I7O0FBRUQ7SUFDSSx3QkFBd0I7Q0FDM0I7O0FBRUQ7SUFDSSx3QkFBd0I7Q0FDM0I7O0FBRUQ7SUFDSSw4QkFBOEI7SUFDOUIsK0JBQStCO0lBQy9CLDhCQUE4QjtDQUNqQzs7QUFFRDtJQUNJLDRCQUE0QjtDQUMvQjs7QUFFRDtJQUNJLDJCQUEyQjtDQUM5Qjs7QUFFRDtJQUNJLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLDRCQUE0QjtJQUM1Qix3QkFBd0I7Q0FDM0I7O0FBRUQ7SUFDSSw4QkFBOEI7Q0FDakM7O0FBRUQ7SUFDSSwyQkFBMkI7Q0FDOUI7O0FBRUQ7SUFDSSxvQkFBb0I7SUFDcEIsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixpQkFBaUI7Q0FDcEI7O0FBRUQ7SUFDSSxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixvQkFBb0I7Q0FDdkI7O0FBRUQ7SUFDSSx5QkFBeUI7Q0FDNUI7O0FBRUQ7SUFDSSxnQkFBZ0I7Q0FDbkI7O0FBRUQ7SUFDSSxnQkFBZ0I7Q0FDbkI7O0FBRUQ7SUFDSSxtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLDRCQUE0QjtJQUM1Qix3QkFBd0I7Q0FDM0I7O0FBRUQ7O0lBRUksa0JBQWtCO0NBQ3JCOztBQUVEO0lBQ0ksb0JBQW9CO0lBQ3BCLFlBQVk7Q0FDZjs7QUFFRDtJQUNJLG1DQUFtQztDQUN0Qzs7QUFFRDtJQUNJLG9CQUFvQjtJQUNwQixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGNBQWM7Q0FDakI7O0FBRUQ7SUFDSSxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFVBQVU7SUFDViwyQkFBMkI7SUFDM0IsY0FBYztJQUNkLGFBQWE7SUFDYiwwQkFBMEI7SUFDMUIsaUJBQWlCO0lBQ2pCLDRCQUE0QjtJQUM1QixnQkFBZ0I7SUFDaEIsNENBQTRDO0NBQy9DOztBQUVEO0lBQ0ksYUFBYTtDQUNoQjs7QUFFRDs7OztJQUlJOztBQUVKO0lBQ0ksc0JBQXNCO0lBQ3RCLGFBQWE7Q0FDaEI7O0FBRUQ7SUFDSSxvQkFBb0I7Q0FDdkI7O0FBRUQ7SUFDSSx1QkFBdUI7SUFDdkIsc0JBQXNCO0NBQ3pCOztBQUVEO0lBQ0ksbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQiwwQkFBMEI7SUFDMUIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsa0JBQWtCO0NBQ3JCOztBQUVEO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLE9BQU87SUFDUCxRQUFRO0lBQ1IsbUJBQW1CO0lBQ25CLGdGQUFnRjtJQUNoRixXQUFXO0lBQ1gsMEJBQTBCO0lBQzFCLGFBQWE7Q0FDaEI7O0FBRUQ7SUFDSSxXQUFXO0NBQ2Q7O0FBRUQ7OztJQUdJOztBQUdKO0lBQ0kscUNBQXFDO0lBQ3JDLHFDQUFxQztJQUNyQyxtQkFBbUI7SUFDbkIsMEJBQTBCO0NBQzdCOztBQUVEOztJQUVJLHFDQUFxQztJQUNyQyxvQ0FBb0M7SUFDcEMsNEJBQTRCO0NBQy9COztBQUVEO0lBQ0ksMkJBQTJCO0NBQzlCIiwiZmlsZSI6InNyYy9hcHAvaG9tZXBhZ2UvaG9tZXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5tYXQtaGVhZGVyLWNlbGwge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbn1cclxuXHJcbnRyLm1hdC1oZWFkZXItcm93IHtcclxuICAgIGhlaWdodDogNDhweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG50ci5tYXQtcm93IHtcclxuICAgIGhlaWdodDogNDVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG50aC5tYXQtaGVhZGVyLWNlbGw6Zmlyc3Qtb2YtdHlwZSwgdGQubWF0LWNlbGw6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEycHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEycHggIWltcG9ydGFudDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG59XHJcblxyXG50ZC5tYXQtY2VsbCB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tYXQtY2VsbCB7XHJcbiAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLm92ZXJmbG93LXByb3BlcnR5IHtcclxuICAgIG1heC13aWR0aDogMjIwcHg7XHJcbiAgICB3aWR0aDogNDEwcHg7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbn1cclxuXHJcbnRoLm1hdC1oZWFkZXItY2VsbDpsYXN0LW9mLXR5cGUge1xyXG4gICAgcGFkZGluZy1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tYXQtaGVhZGVyLWNlbGwge1xyXG4gICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5oZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzM0M2E0MDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDdweDtcclxuICAgIHBhZGRpbmctdG9wOiA3cHg7XHJcbn1cclxuXHJcbi5jbG9zZSB7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA3NXB4O1xyXG4gICAgZm9udC1zaXplOiAzNnB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDhweDtcclxufVxyXG5cclxuLmNsb3NlOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNsb3NlOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmhlYWRlciBzcGFuIHtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxufVxyXG5cclxuLmN1c3RvbS1maWxlLWxhYmVsIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDM1JTtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxufVxyXG5cclxuLmhlYWRlciBoNSxcclxuc3BhbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogNTBweDtcclxufVxyXG5cclxuLmJvcmRlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMzQzYTQwO1xyXG4gICAgaGVpZ2h0OiAxcHg7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LWNoZWNrYm94LWNoZWNrZWQubWF0LWFjY2VudCAubWF0LWNoZWNrYm94LWJhY2tncm91bmQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW4gIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtaGVhZGVyLWNlbGwge1xyXG4gICAgYmFja2dyb3VuZDogIzM0M2E0MDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgcGFkZGluZzogMTJweDtcclxufVxyXG5cclxuLm5hdl9fY29udCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIHRvcDogNjZweDtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMDAwO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHotaW5kZXg6IDEwMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MTRjNTY7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdHJhbnNpdGlvbjogd2lkdGggMC4zcyBlYXNlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm94LXNoYWRvdzogNHB4IDdweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcclxufVxyXG5cclxuLm5hdl9fY29udDpob3ZlciB7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbn1cclxuXHJcbi8qIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XHJcbiAgICAubmF2X19jb250IHtcclxuICAgICAgICB3aWR0aDogODBweDtcclxuICAgIH1cclxufSAqL1xyXG5cclxuLm5hdiB7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5uYXY6Zmlyc3QtY2hpbGQge1xyXG4gICAgcGFkZGluZy10b3A6IDAuNXJlbTtcclxufVxyXG5cclxuLm5hdl9faXRlbXMge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcclxuICAgIGZvbnQtZmFtaWx5OiBcInJvYm90b1wiO1xyXG59XHJcblxyXG4ubmF2X19pdGVtcyBhIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdG9wOiAtMzVweDtcclxuICAgIHBhZGRpbmctbGVmdDogMThweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LWZhbWlseTogXCJyb2JvdG9cIjtcclxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICBmb250LXNpemU6IDEuMzVlbTtcclxufVxyXG5cclxuLm5hdl9faXRlbXMgYTphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCA5NC4wMiUgODguMDMlLCAjNTRhNGZmLCB0cmFuc3BhcmVudCAxMDAlKTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xyXG4gICAgei1pbmRleDogLTEwO1xyXG59XHJcblxyXG4ubmF2X19pdGVtczpob3ZlciBhOmFmdGVyIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi8qIDo6bmctZGVlcCAubWF0LWhlYWRlci1jZWxsLFxyXG4ubWF0LXNvcnQtaGVhZGVyLWNvbnRlbnQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbn0gKi9cclxuXHJcblxyXG4uYnRuLXByaW1hcnksIC5idG4td2FybmluZyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllY2VmICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2VkNGRhICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBjb2xvcjogIzQ5NTA1NyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYnRuLXByaW1hcnk6YWN0aXZlLFxyXG4uYnRuLXByaW1hcnk6Zm9jdXMsIC5idG4td2FybmluZzphY3RpdmUsIC5idG4td2FybmluZzpmb2N1cyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllY2VmICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItY29sb3I6MXB4ICNlOWVjZWYgIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJ0bi1wcmltYXJ5OmhvdmVyOm5vdCg6ZGlzYWJsZWQpLCAuYnRuLXdhcm5pbmc6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/homepage/homepage.component.html":
/*!**************************************************!*\
  !*** ./src/app/homepage/homepage.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"color: #343a40;background-color:  #343a40;width: 100%;height: 50px;\">\r\n  <div style=\"float: left;padding: 15px;color: floralwhite;\">ACL HealthCare</div>\r\n  <div style=\"float:right;padding-top: 15px;padding-right: 10px;\">\r\n    <div class=\"input-group-append\">\r\n      <input type=\"text\" (input)=\"valueChanged($event.target.value)\" placeholder=\"12740087\">\r\n      <button class=\"btn btn-outline-secondary\" type=\"button\" (click)=\"getMedicationResult()\" >Go</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"isDataLoaded\" style=\"padding-top: 30px\">\r\n\r\n  <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8 demo-table\">\r\n    <ng-container matColumnDef=\"patientId\">\r\n      <th mat-header-cell *matHeaderCellDef> Id </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.patientId}} </td>\r\n    </ng-container>\r\n  \r\n    <!-- Name Column -->\r\n    <ng-container matColumnDef=\"patientName\">\r\n      <th mat-header-cell *matHeaderCellDef> Patient </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.patientName}} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"doseType\">\r\n      <th mat-header-cell *matHeaderCellDef> Dose Type </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.doseType}} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"drug\">\r\n      <th mat-header-cell *matHeaderCellDef> Drug </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.drug}} </td>\r\n    </ng-container>    \r\n  \r\n    <ng-container matColumnDef=\"doseQuantity\">\r\n      <th mat-header-cell *matHeaderCellDef> Dose Quantity </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.doseQuantity}} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"time\">\r\n      <th mat-header-cell *matHeaderCellDef> Time </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.time}} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"status\">\r\n      <th mat-header-cell *matHeaderCellDef> Status </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.status}} </td>\r\n    </ng-container>\r\n  \r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n  </table>\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/homepage/homepage.component.ts":
/*!************************************************!*\
  !*** ./src/app/homepage/homepage.component.ts ***!
  \************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_medication_result__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/medication-result */ "./src/app/models/medication-result.ts");
/* harmony import */ var _services_medication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/medication.service */ "./src/app/services/medication.service.ts");




var HomepageComponent = /** @class */ (function () {
    function HomepageComponent(medicationService) {
        this.medicationService = medicationService;
        this.patientId = '';
        this.displayedColumns = ['patientId', 'patientName', 'doseType', 'drug', 'doseQuantity', 'time', 'status'];
        this.dataSource = [];
        this.isDataLoaded = false;
    }
    HomepageComponent.prototype.ngOnInit = function () {
    };
    HomepageComponent.prototype.valueChanged = function (value) {
        this.patientId = value;
    };
    HomepageComponent.prototype.getMedicationResult = function () {
        var _this = this;
        this.dataSource = [];
        this.isDataLoaded = false;
        this.medicationService.getMedicationResult(this.patientId).subscribe(function (response) {
            var resultData = _models_medication_result__WEBPACK_IMPORTED_MODULE_2__["Convert"].toMedicationRequest(JSON.stringify(response));
            _this.isDataLoaded = true;
            if (resultData != null && resultData.entry != null && resultData.entry.length > 0) {
                _this.bindMedicationValue(resultData.entry);
            }
        });
    };
    HomepageComponent.prototype.bindMedicationValue = function (sources) {
        for (var _i = 0, sources_1 = sources; _i < sources_1.length; _i++) {
            var data = sources_1[_i];
            var medicationData = { patientId: '', patientName: '', drug: '', time: '', status: '', doseType: '', doseQuantity: '' };
            medicationData.patientName = data.resource.subject.display;
            medicationData.patientId = data.resource.subject.reference.split('/')[1];
            medicationData.status = data.resource.status;
            medicationData.doseType = data.resource.dosageInstruction[0].route.text;
            medicationData.time = data.resource.dosageInstruction[0].timing.repeat.boundsPeriod.start;
            medicationData.doseQuantity = data.resource.dosageInstruction[0].doseAndRate[0].rateQuantity.value + data.resource.dosageInstruction[0].doseAndRate[0].rateQuantity.unit;
            if (medicationData.status == 'active' && medicationData.doseType.includes('IV')) {
                this.dataSource.push(medicationData);
            }
        }
    };
    HomepageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-homepage',
            template: __webpack_require__(/*! ./homepage.component.html */ "./src/app/homepage/homepage.component.html"),
            styles: [__webpack_require__(/*! ./homepage.component.css */ "./src/app/homepage/homepage.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_medication_service__WEBPACK_IMPORTED_MODULE_3__["MedicationService"]])
    ], HomepageComponent);
    return HomepageComponent;
}());



/***/ }),

/***/ "./src/app/medication-request/medication-request.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/medication-request/medication-request.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep .dialog .ui-dialog .ui-dialog-titlebar {\r\n    background: #006bb3;\r\n    font-weight: 500;\r\n    color: white;\r\n}\r\n\r\n::ng-deep .dialog .ui-dialog-content label {\r\n    color: #8f8d88;\r\n    font-weight: 500;\r\n    margin-top: 5px;\r\n}\r\n\r\n::ng-deep .dialog .ui-dialog-content button {\r\n    height: 32px;\r\n}\r\n\r\n::ng-deep .dialog .ui-dialog-footer {\r\n    border: none;\r\n    text-align: center;\r\n}\r\n\r\n::ng-deep .mat-tab-label-active .mat-tab-label-content {\r\n  color: blue;\r\n}\r\n\r\n.pump-div {\r\n    width: 30%;\r\n    height: 100%;\r\n    position: absolute;\r\n}\r\n\r\n.main-div img{\r\n    margin-bottom: 5%;\r\n    margin-left: 20%;\r\n}\r\n\r\n.pump-name {\r\n    text-align: center;\r\n    color: blue;\r\n    font-weight: bold;\r\n}\r\n\r\n.available {\r\n    margin-top: 4px;\r\n    font-size: 11px;\r\n    font-weight: bold;\r\n}\r\n\r\n.patient-div {\r\n    width: 70%;\r\n    height: 100%;\r\n    float: right;\r\n}\r\n\r\n.search-div {\r\n    height: 10%;\r\n    margin: 20px;\r\n}\r\n\r\n.row {\r\n    display: flex; \r\n    flex-wrap: wrap;\r\n    padding: 0 4px;\r\n  }\r\n\r\n.column {\r\n    padding: 25px;\r\n    border: solid 0.01px #cccccc;\r\n  }\r\n\r\n.column img {\r\n    margin-top: 8px;\r\n    vertical-align: middle;\r\n    width: 100%;\r\n  }\r\n\r\n/* Responsive layout - makes a two column-layout instead of four columns  */\r\n\r\n@media screen and (max-width: 800px) {\r\n    .column {\r\n      flex: 50%;\r\n      max-width: 50%;\r\n    }\r\n  }\r\n\r\n/* Responsive layout - makes the two columns stack on top of each other instead of next to each other */\r\n\r\n@media screen and (max-width: 600px) {\r\n    .column {\r\n      flex: 100%;\r\n      max-width: 100%;\r\n    }\r\n  }\r\n\r\n.container {\r\n    border: 1px solid var(--surface-border);\r\n    padding: 1rem;\r\n    margin-bottom: 2rem;\r\n    min-width: 600px;\r\n    /*width: 600px;*/\r\n}\r\n\r\n.ui-button-text.ui-clickable {\r\n   height: 30px !important;\r\n}\r\n\r\n.patient-info {\r\n  margin-top: 15px;\r\n  background: #006bb3;\r\n  border-radius: 15px;\r\n  line-height: 32px;\r\n  height: 10%;\r\n}\r\n\r\n.pump-status {\r\n  color: white;\r\n  font-weight: bold;\r\n  float: right;\r\n  width: 18%;\r\n  height: 7%;\r\n  border-radius: 15px;\r\n  text-align: center;\r\n  line-height: 21px;\r\n  letter-spacing: 0.2px;\r\n  font-size: 11px;\r\n}\r\n\r\n.zoom-in-out-box {\r\n  animation: zoom-in-zoom-out 2s ease infinite;\r\n}\r\n\r\n@keyframes zoom-in-zoom-out {\r\n  0% {\r\n    transform: scale(0.5, 0.5);\r\n  }\r\n  50% {\r\n    transform: scale(1, 1);\r\n  }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVkaWNhdGlvbi1yZXF1ZXN0L21lZGljYXRpb24tcmVxdWVzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixhQUFhO0NBQ2hCOztBQUVEO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixnQkFBZ0I7Q0FDbkI7O0FBRUQ7SUFDSSxhQUFhO0NBQ2hCOztBQUVEO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtDQUN0Qjs7QUFFRDtFQUNFLFlBQVk7Q0FDYjs7QUFFRDtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsbUJBQW1CO0NBQ3RCOztBQUVEO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtDQUNwQjs7QUFFRDtJQUNJLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osa0JBQWtCO0NBQ3JCOztBQUVEO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixrQkFBa0I7Q0FDckI7O0FBRUQ7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLGFBQWE7Q0FDaEI7O0FBRUQ7SUFDSSxZQUFZO0lBQ1osYUFBYTtDQUNoQjs7QUFFRDtJQUVJLGNBQWM7SUFFZCxnQkFBZ0I7SUFDaEIsZUFBZTtHQUNoQjs7QUFHRDtJQUNFLGNBQWM7SUFDZCw2QkFBNkI7R0FDOUI7O0FBRUQ7SUFDRSxnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLFlBQVk7R0FDYjs7QUFFQSw0RUFBNEU7O0FBQzdFO0lBQ0U7TUFFRSxVQUFVO01BQ1YsZUFBZTtLQUNoQjtHQUNGOztBQUVELHdHQUF3Rzs7QUFDeEc7SUFDRTtNQUVFLFdBQVc7TUFDWCxnQkFBZ0I7S0FDakI7R0FDRjs7QUFFRDtJQUNFLHdDQUF3QztJQUN4QyxjQUFjO0lBQ2Qsb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixpQkFBaUI7Q0FDcEI7O0FBRUQ7R0FDRyx3QkFBd0I7Q0FDMUI7O0FBRUQ7RUFDRSxpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsWUFBWTtDQUNiOztBQUVEO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsV0FBVztFQUNYLFdBQVc7RUFDWCxvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsZ0JBQWdCO0NBQ2pCOztBQUVEO0VBQ0UsNkNBQTZDO0NBQzlDOztBQUVEO0VBQ0U7SUFDRSwyQkFBMkI7R0FDNUI7RUFDRDtJQUNFLHVCQUF1QjtHQUN4QjtDQUNGIiwiZmlsZSI6InNyYy9hcHAvbWVkaWNhdGlvbi1yZXF1ZXN0L21lZGljYXRpb24tcmVxdWVzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIC5kaWFsb2cgLnVpLWRpYWxvZyAudWktZGlhbG9nLXRpdGxlYmFyIHtcclxuICAgIGJhY2tncm91bmQ6ICMwMDZiYjM7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLmRpYWxvZyAudWktZGlhbG9nLWNvbnRlbnQgbGFiZWwge1xyXG4gICAgY29sb3I6ICM4ZjhkODg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLmRpYWxvZyAudWktZGlhbG9nLWNvbnRlbnQgYnV0dG9uIHtcclxuICAgIGhlaWdodDogMzJweDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5kaWFsb2cgLnVpLWRpYWxvZy1mb290ZXIge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC10YWItbGFiZWwtYWN0aXZlIC5tYXQtdGFiLWxhYmVsLWNvbnRlbnQge1xyXG4gIGNvbG9yOiBibHVlO1xyXG59XHJcblxyXG4ucHVtcC1kaXYge1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5cclxuLm1haW4tZGl2IGltZ3tcclxuICAgIG1hcmdpbi1ib3R0b206IDUlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwJTtcclxufVxyXG5cclxuLnB1bXAtbmFtZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogYmx1ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uYXZhaWxhYmxlIHtcclxuICAgIG1hcmdpbi10b3A6IDRweDtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4ucGF0aWVudC1kaXYge1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuLnNlYXJjaC1kaXYge1xyXG4gICAgaGVpZ2h0OiAxMCU7XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbn1cclxuXHJcbi5yb3cge1xyXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLW1zLWZsZXgtd3JhcDogd3JhcDsgXHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBwYWRkaW5nOiAwIDRweDtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLmNvbHVtbiB7XHJcbiAgICBwYWRkaW5nOiAyNXB4O1xyXG4gICAgYm9yZGVyOiBzb2xpZCAwLjAxcHggI2NjY2NjYztcclxuICB9XHJcbiAgXHJcbiAgLmNvbHVtbiBpbWcge1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAgLyogUmVzcG9uc2l2ZSBsYXlvdXQgLSBtYWtlcyBhIHR3byBjb2x1bW4tbGF5b3V0IGluc3RlYWQgb2YgZm91ciBjb2x1bW5zICAqL1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgICAuY29sdW1uIHtcclxuICAgICAgLW1zLWZsZXg6IDUwJTtcclxuICAgICAgZmxleDogNTAlO1xyXG4gICAgICBtYXgtd2lkdGg6IDUwJTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLyogUmVzcG9uc2l2ZSBsYXlvdXQgLSBtYWtlcyB0aGUgdHdvIGNvbHVtbnMgc3RhY2sgb24gdG9wIG9mIGVhY2ggb3RoZXIgaW5zdGVhZCBvZiBuZXh0IHRvIGVhY2ggb3RoZXIgKi9cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgLmNvbHVtbiB7XHJcbiAgICAgIC1tcy1mbGV4OiAxMDAlO1xyXG4gICAgICBmbGV4OiAxMDAlO1xyXG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuY29udGFpbmVyIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXN1cmZhY2UtYm9yZGVyKTtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gICAgbWluLXdpZHRoOiA2MDBweDtcclxuICAgIC8qd2lkdGg6IDYwMHB4OyovXHJcbn1cclxuXHJcbi51aS1idXR0b24tdGV4dC51aS1jbGlja2FibGUge1xyXG4gICBoZWlnaHQ6IDMwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnBhdGllbnQtaW5mbyB7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxuICBiYWNrZ3JvdW5kOiAjMDA2YmIzO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDMycHg7XHJcbiAgaGVpZ2h0OiAxMCU7XHJcbn1cclxuXHJcbi5wdW1wLXN0YXR1cyB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZsb2F0OiByaWdodDtcclxuICB3aWR0aDogMTglO1xyXG4gIGhlaWdodDogNyU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbGluZS1oZWlnaHQ6IDIxcHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxufVxyXG5cclxuLnpvb20taW4tb3V0LWJveCB7XHJcbiAgYW5pbWF0aW9uOiB6b29tLWluLXpvb20tb3V0IDJzIGVhc2UgaW5maW5pdGU7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgem9vbS1pbi16b29tLW91dCB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjUsIDAuNSk7XHJcbiAgfVxyXG4gIDUwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpO1xyXG4gIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/medication-request/medication-request.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/medication-request/medication-request.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <style type=\"text/css\">\r\n    .pom-row:after {\r\n      content: \"\";\r\n      display: table;\r\n      clear: both;\r\n      margin-top: 10px;\r\n      margin-bottom: 10px;\r\n    }\r\n\r\n    .pom-column-left {\r\n      float: left;\r\n      width: 50%;\r\n      position: absolute;\r\n    }\r\n\r\n    .pom-column-right {\r\n      float: right;\r\n      width: 50%;\r\n      position: relative;\r\n    }\r\n\r\n    .pom-column-inner-left {\r\n      float: left;\r\n      width: 30%;\r\n      position: absolute;\r\n      text-align: right;\r\n    }\r\n\r\n    .pom-column-inner-left label {\r\n      display: block;\r\n      font-weight: bold;\r\n      word-wrap: normal;\r\n      margin-right: 10px;\r\n      margin-left: -10px;\r\n    }\r\n\r\n    .pom-column-inner-right {\r\n      float: right;\r\n      width: 70%;\r\n      position: relative;\r\n    }\r\n\r\n    .pom-column-inner-right label {\r\n      font-weight: bold;\r\n    }\r\n  </style>\r\n  <div id=\"divIVMedicationTab\">\r\n    <div class=\"pom-row\">\r\n      <div class=\"pom-column-left\">\r\n        <div class=\"pom-row\">\r\n          <div class=\"pom-column-inner-left\">\r\n            <label for=\"OrderDosage\">\r\n              Order Lookup *\r\n            </label>\r\n          </div>\r\n          <div class=\"pom-column-inner-right\">\r\n            <p-dropdown [options]=\"medicationList\" (onChange)=\"ChangeMedicationList($event, dd)\" #dd [(ngModel)]=\"medicationData.MedicationText\" optionLabel=\"name\"></p-dropdown>\r\n          </div>\r\n        </div>\r\n        <div class=\"pom-row\">\r\n          <div class=\"pom-column-inner-left\">\r\n            <label for=\"OrderDosage\">\r\n              Dosage *\r\n            </label>\r\n          </div>\r\n          <div class=\"pom-column-inner-right\">\r\n            <div>\r\n              <input type=\"text\" pInputText [(ngModel)]=\"medicationData.Dosage\" />\r\n              &nbsp;\r\n              <p-dropdown [options]=\"doseUnitsList\" [(ngModel)]=\"medicationData.DosageUnit\" optionLabel=\"name\">\r\n              </p-dropdown>\r\n              &nbsp;\r\n              <p-checkbox [(ngModel)]=\"medicationData.DosageRange\" [binary]=\"true\"></p-checkbox>\r\n              <label for=\"IsRange\" id=\"lblIsRange\">\r\n                Range\r\n              </label>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"pom-row\">\r\n          <div class=\"pom-column-inner-left\">\r\n            <label for=\"IVRate\">\r\n              Rate *\r\n            </label>\r\n          </div>\r\n          <div class=\"pom-column-inner-right\">\r\n            <input type=\"text\" pInputText [(ngModel)]=\"medicationData.Rate\" />\r\n            &nbsp;\r\n            <p-dropdown [options]=\"rateUnitList\" [(ngModel)]=\"medicationData.RateUnit\" optionLabel=\"name\">\r\n            </p-dropdown>\r\n            &nbsp;\r\n            <p-dropdown [options]=\"rateUnitTimingList\" [(ngModel)]=\"medicationData.RateUnitTiming\" optionLabel=\"name\">\r\n            </p-dropdown>\r\n            &nbsp;\r\n            <p-checkbox [(ngModel)]=\"medicationData.RateRange\" [binary]=\"true\"></p-checkbox>\r\n            <label for=\"IsRateRange\" id=\"lblIsRateRange\">\r\n              Range</label>\r\n          </div>\r\n        </div>\r\n        <div class=\"pom-row\">\r\n          <div class=\"pom-column-inner-left\">\r\n            <label for=\"IVMethod\">\r\n              Method *\r\n            </label>\r\n          </div>\r\n          <div class=\"pom-column-inner-right\">\r\n            <p-dropdown [options]=\"methodList\" [(ngModel)]=\"medicationData.Method\" optionLabel=\"name\"></p-dropdown>\r\n          </div>\r\n        </div>\r\n        <div class=\"pom-row\">\r\n          <div class=\"pom-column-inner-left\">\r\n            <label for=\"OrderFrequencyName\">\r\n              Frequency *\r\n            </label>\r\n          </div>\r\n          <div class=\"pom-column-inner-right\">\r\n            <input type=\"text\" pInputText [(ngModel)]=\"medicationData.Frequency\" value=\"Once\" />\r\n          </div>\r\n        </div>\r\n        <div class=\"pom-row\">\r\n          <div class=\"pom-column-inner-right\">\r\n            <p-checkbox [binary]=\"false\"></p-checkbox>\r\n            <label for=\"Specific_Days_of_Week\" id=\"lblSpecific_Days_of_Week\">\r\n              Specify Day of Week</label>\r\n          </div>\r\n        </div>\r\n        <div class=\"pom-row\">\r\n          <div class=\"pom-column-inner-left\">\r\n            <label>\r\n              Times *\r\n            </label>\r\n          </div>\r\n          <div class=\"pom-column-inner-right\">\r\n            <p-calendar [(ngModel)]=\"value\" [showIcon]=\"true\" [timeOnly]=\"true\" showTime=\"true\" [hourFormat]=\"24\">\r\n            </p-calendar>\r\n          </div>\r\n        </div>\r\n        <div class=\"pom-row\">\r\n          <div class=\"pom-column-inner-left\">\r\n            <label for=\"SpecialInstruction\">\r\n              Available Medication\r\n            </label>\r\n          </div>\r\n          <div class=\"pom-column-inner-right\">\r\n            <p-dropdown [options]=\"noData\" [(ngModel)]=\"medicationData.Method\" optionLabel=\"name\"></p-dropdown>\r\n          </div>\r\n        </div>\r\n        <div class=\"pom-row\">\r\n          <div class=\"pom-column-inner-left\">\r\n            <label id=\"ReasonNotMandatory\" for=\"Indications\">\r\n              Reason/Indication\r\n            </label>\r\n          </div>\r\n          <div class=\"pom-column-inner-right\">\r\n            <input type=\"text\" pInputText [(ngModel)]=\"medicationData.Note\" />\r\n          </div>\r\n        </div>\r\n        <div class=\"pom-row\">\r\n          <div class=\"pom-column-inner-left\">\r\n            <label for=\"IVVolume\">\r\n              Volume *\r\n            </label>\r\n          </div>\r\n          <div class=\"pom-column-inner-right\">\r\n            <input type=\"text\" pInputText/>\r\n            ml\r\n          </div>\r\n        </div>\r\n        <div class=\"pom-row\">\r\n          <div class=\"pom-column-inner-left\">\r\n            <label for=\"FinalVolume\">\r\n              Final Volume\r\n            </label>\r\n          </div>\r\n          <div class=\"pom-column-inner-right\">\r\n            <input type=\"text\" pInputText disabled value=\"500\" />\r\n            ml\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"pom-column-right\">\r\n        <div class=\"pom-row\">\r\n          <div class=\"pom-column-inner-left\">\r\n            <label for=\"OrderRoutes\">\r\n              Route *\r\n            </label>\r\n          </div>\r\n          <div class=\"pom-column-inner-right\">\r\n            <p-dropdown [options]=\"routesList\" [(ngModel)]=\"medicationData.Route\" optionLabel=\"name\"></p-dropdown>\r\n          </div>\r\n        </div>\r\n        <div class=\"pom-row\">\r\n          <div class=\"pom-column-inner-left\">\r\n            <label for=\"IVType\">\r\n              IV Type *\r\n            </label>\r\n          </div>\r\n          <div class=\"pom-column-inner-right\">\r\n            <p-dropdown [options]=\"IVTypeList\" [(ngModel)]=\"medicationData.IVType\" optionLabel=\"name\"></p-dropdown>\r\n          </div>\r\n        </div>\r\n        <div class=\"pom-row\">\r\n          <div class=\"pom-column-inner-left\">\r\n            <label>Start Date Time</label>\r\n          </div>\r\n          <div class=\"pom-column-inner-right\">\r\n            <p-calendar [(ngModel)]=\"medicationData.StartDateTime\" [defaultDate]=\"defaultDate\" name=\"startAnalyze\"\r\n              [showTime]=\"true\" [showIcon]=\"true\" [dateFormat]=\"dateFormat\"></p-calendar>\r\n          </div>\r\n        </div>\r\n        <div class=\"pom-row\">\r\n          <div class=\"pom-column-inner-left\">\r\n            <label for=\"IVDuration\" id=\"lblDuration\"> Duration </label>\r\n          </div>\r\n          <div class=\"pom-column-inner-right\">\r\n            <input type=\"text\" pInputText [(ngModel)]=\"medicationData.IVDuration\" />&nbsp;\r\n            <p-dropdown [options]=\"IVDurationUnitsList\" [(ngModel)]=\"selectedRoute\" optionLabel=\"name\"></p-dropdown>\r\n          </div>\r\n        </div>\r\n        <div class=\"pom-row\">\r\n          <div class=\"pom-column-inner-left\">\r\n            <label>Stop Date Time</label>\r\n          </div>\r\n          <div class=\"pom-column-inner-right\">\r\n            <p-calendar [(ngModel)]=\"medicationData.StopDateTime\" [defaultDate]=\"defaultDate\" name=\"startAnalyze\"\r\n              [showTime]=\"true\" [showIcon]=\"true\" [dateFormat]=\"dateFormat\"></p-calendar>\r\n          </div>\r\n        </div>\r\n        <div class=\"pom-row\">\r\n          <div class=\"pom-column-inner-left\">\r\n            <label for=\"OrderPriority\">\r\n              Priority *\r\n            </label>\r\n          </div>\r\n          <div class=\"pom-column-inner-right\">\r\n            <p-dropdown [options]=\"PriorityList\" optionLabel=\"name\"></p-dropdown>\r\n          </div>\r\n        </div>\r\n        <div class=\"pom-row\">\r\n          <div class=\"pom-column-inner-left\">\r\n            <label for=\"OrderPhysicianName\">\r\n              Provider *\r\n            </label>\r\n          </div>\r\n          <div class=\"pom-column-inner-right\">\r\n            <input type=\"text\" pInputText/>\r\n          </div>\r\n        </div>\r\n        <div class=\"pom-row\">\r\n          <div class=\"pom-column-inner-left\">\r\n            <label for=\"dlOrderSource\">\r\n              Source *\r\n            </label>\r\n          </div>\r\n          <div class=\"pom-column-inner-right\">\r\n            <p-dropdown [options]=\"SourceList\" optionLabel=\"name\"></p-dropdown>\r\n          </div>\r\n        </div>\r\n        <div class=\"pom-row\" id=\"DivHomeMed\">\r\n          <div class=\"pom-column-inner-right\">\r\n            <p-checkbox [binary]=\"true\"></p-checkbox>\r\n            <label for=\"HomeMed\" id=\"lblHomeMedication\">Home Medication</label>\r\n            <br>\r\n            <p-checkbox [binary]=\"true\"></p-checkbox>\r\n            <label for=\"PatientCharged\" id=\"lblPatientCharged\">Use home supply</label>\r\n            <br>\r\n            <p-checkbox [binary]=\"true\"></p-checkbox>\r\n            <label for=\"AddToHomeMedList\" id=\"lblAddToHomeMedList\">Add to Home Medication List</label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <br>\r\n  <div class=\"container-wide\">\r\n    <div class=\"col-xs-6\">\r\n      &nbsp;\r\n    </div>\r\n    <div class=\"col-xs-6\" style=\"text-align: right;\">\r\n      <p-button label=\"Cancel\" (click)=\"cancelMedicationOrder()\"></p-button>\r\n      &nbsp;\r\n      <p-button label=\"Submit\" (click)=\"submitMedicationData()\"></p-button>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/medication-request/medication-request.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/medication-request/medication-request.component.ts ***!
  \********************************************************************/
/*! exports provided: MedicationRequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicationRequestComponent", function() { return MedicationRequestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_medication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/medication.service */ "./src/app/services/medication.service.ts");
/* harmony import */ var _models_medication_result__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/medication-result */ "./src/app/models/medication-result.ts");



// import { DosageInstructionExtension, Timing, SubjectReference, Coding, Convert, MedicationRequest, Resource, ResourceStatus, ResourceType, Meta, Intent, Display, EncounterReference } from '../models/medication-result';

var MedicationRequestComponent = /** @class */ (function () {
    function MedicationRequestComponent(medicationService) {
        this.medicationService = medicationService;
        this.ivSites = [];
        this.routesList = [{ 'id': 6, 'name': 'Intravenous' }, { 'id': 28, 'name': 'Intravenous Drip' }, { 'id': 19, 'name': 'Intravenous Piggyback' }, { 'id': 20, 'name': 'Intravenous Push (Bolus)' }, { 'id': 2, 'name': 'Subcutaneous' }];
        this.doseUnitsList = [{ 'name': 'EA', 'id': 62 }, { 'name': 'IV Bag', 'id': 58 }, { 'name': 'ML', 'id': 12272 }];
        this.rateUnitList = [{ id: 202, 'name': 'dL' }, { id: 10, 'name': 'L' }, { id: 13, 'name': 'mcg' }, { id: 14, 'name': 'mEq' }, { id: 16, 'name': 'mg' }, { id: 636, 'name': 'mg/kg' }, { id: 12272, 'name': 'ML' }];
        this.rateUnitTimingList = [{ id: 1, 'name': 'Hr' }, { id: 2, 'name': 'Min' }];
        this.methodList = [{ id: 1, 'name': 'Bolus' }, { id: 3, 'name': 'Continuous' }, { id: 4, 'name': 'Intermittent' }, { id: 89, 'name': 'Normal' }, { id: 7, 'name': 'Piggyback' }, { id: 2, 'name': 'Push' }, { id: 10, 'name': 'TKO' }, { id: 8, 'name': 'Variable Rate' }, { id: 9, 'name': 'WO' }];
        this.IVTypeList = [{ id: 142, 'name': 'A type IV' }, { id: 10, 'name': 'Arterial' }, { id: 9, 'name': 'Central Line' }, { id: 1, 'name': 'Central Venous Line' }, { id: 6, 'name': 'EPIDURAL' }, { id: 11, 'name': 'Interosseus' }, { id: 2, 'name': 'Peripheral' }, { id: 4, 'name': 'PICC' }, { id: 3, 'name': 'Port-a-Cath' }];
        this.IVDurationUnitsList = [{ id: 1, 'name': 'Days' }, { id: 2, 'name': 'Hrs' }, { id: 3, 'name': 'Mins' }, { id: 4, 'name': 'Mons' }, { id: 5, 'name': 'Tms' }, { id: 6, 'name': 'Wks' }];
        this.PriorityList = [{ 'id': 'ASAP', 'name': 'ASAP' }, { 'id': 'ER', 'name': 'ER' }, { 'id': 'Routine', 'name': 'Routine' }, { 'id': 'STAT', 'name': 'STAT' }, { 'id': 'TimeCritical', 'name': 'TimeCritical' },];
        this.SourceList = [{ id: 4, 'name': 'Fax' }, { id: 6, 'name': 'Protocol' }, { id: 5, 'name': 'Secure Message' }, { id: 7, 'name': 'Signed Order on File' }, { id: 3, 'name': 'Telephone' }, { id: 2, 'name': 'Verbal' }, { id: 1, 'name': 'Written' },];
        this.medicationList = [{ id: 0, 'name': '- Select -' }, { id: 12, name: 'NaCl 0.9 %  -    100 ML - MiniBag' }, { id: 13, name: 'BJM CEFTRIAXONE IVPB  1 GM ADD-VANTAGE in 50 mL' }, { id: 14, name: 'CA CEFTRIAXONE IVPB  2 GM ADD-VANTAGE  -- in 100 ml NaCL - CA' }, { id: 16, name: 'NaCl 0.9 %  -     50 ML - ADD-Vantage Bag' }, { id: 17, name: 'NaCl 0.9 %  -    100 ML - ADD-Vantage Bag' }, { id: 18, name: 'NaCl 0.9 %  -    150 ML' }, { id: 19, name: 'NaCl 0.9 %  -    250 ML' }, { id: 20, name: 'NaCl 0.9 %  -    250 ML - ADD-Vantage Bag' }, { id: 24, name: 'VANCOMYCIN VIAL    500 MG' }, { id: 25, name: 'VANCOMYCIN VIAL  1,000 MG' }, { id: 26, name: 'VANCOMYCIN IVPB  1 GM - ADD-Vantage' }, { id: 28, name: 'NaCl 0.9 %  -  1,000 ML' }, { id: 33, name: 'FUROSEMIDE SYRINGE 40 MG / 4 ML - CRASH CART' }, { id: 50, name: 'CEFAZOLIN  IVPB  1 GM / D5W 50 ML - PREMIX DUPLEX' }, { id: 56, name: 'LEVAQUIN  IVPB  500 MG / 100 ML D 5 W -   PREMIX' }, { id: 61, name: 'AZITHROMYCIN INJECTION 500 MG' }, { id: 78, name: 'NaCl 0.45 %  1,000 MLxx' }, { id: 79, name: 'LACTATED RINGER\'S 1,000 ML' }, { id: 81, name: 'D  5 NaCl 0.45 % + KCl 20 mEq   1,000 ML' }, { id: 111, name: 'AMPICILLIN / SULBACTAM IVPB   3 GM - ADD-VANTAGE' }, { id: 131, name: 'CLEOCIN IVPB 900 MG / 50 ML D 5 W - PREMIX' }, { id: 148, name: 'LEVAQUIN  IVPB 750 MG / 150 ML D 5 W - PREMIX' }, { id: 372, name: 'GENTAMICIN INJECTION 80 MG / 2 ML' }, { id: 424, name: 'NaCl 0.9 %  + KCl 20 mEq   1,000 ml' }, { id: 425, name: 'D  5 LACTATED RINGER\'S   1,000 ml' }, { id: 430, name: 'D  5 NaCl 0.9 %   1,000 ml' }, { id: 465, name: 'BLOOD - 1 UNIT' }, { id: 712, name: 'CLEOCIN IVPB 600 MG / 50 ML D 5 W - PREMIX' }, { id: 852, name: 'INTRALIPID 20 % 250 ML' }, { id: 903, name: 'NaCl 0.9 %  + KCl 40 mEq - 1,000 ML' }, { id: 1059, name: 'FORTAZ 1 GM INJECTION (VIAL)' }, { id: 1094, name: 'DOXYCYCLINE INJECTION 100 MG' }, { id: 1113, name: 'BANANA BAG LACTATED RINGERS / MVI / THIAMINE / FOLIC ACID -- CA' }, { id: 1132, name: 'CHLORAMPHENICOL 1 GM INJECTION' }, { id: 1135, name: 'D 5 % NaCl 0.9 % + KCl 20 mEq 1000 ML' }, { id: 1163, name: 'LACTATED RINGER\'S  500 ML' }, { id: 1185, name: 'ERYTHROCIN LACTOBIONATE 500 MG VIAL' }, { id: 1196, name: 'PRIMAXIN IV ADD-VANTAGE 500 MG' }, { id: 1198, name: 'INVANZ INJECTION 1 GM' }, { id: 1199, name: 'CLINIMIX E 4.25%/DEXTROSE 25 %  1000 ML' }, { id: 1216, name: 'IV SODIUM CHLORIDEl 0.9 % - 1,000 ML' }, { id: 1217, name: 'IV LEVAQUIN IVPB 500 MG / 100 ML D5W - PREMIX' }, { id: 1222, name: 'FLUCONAZOLE / NaCl 0.9 % IVPB 200 MG / 100 ML PREMIXED' }, { id: 1229, name: 'IV D  5 NaCl 0.45 % - 1,000 ML' }, { id: 1238, name: 'IV D 5 NaCl 0.45 % + KCl 20 mEq   1,000 ML' }, { id: 1239, name: 'IV CEFTRIAXONE IVPB 1 GM ADD-VANTAGE' }, { id: 1240, name: 'IV IV LEVAQUIN IVPB 750 MG / 150 ML D 5 W - PREMIX' }, { id: 1244, name: 'IV AMPICILLIN / SULBACTAM IVPB 3 GM ADD-VANTAGE' }, { id: 1246, name: 'IV IV METRONIDAZOLE IVPB 500 MG / 100 ML NaCl 0.9% - PREMIX' }, { id: 1247, name: 'IV NaCl 0.9% + KCl 20 mEq 1,000 ML' }, { id: 1248, name: 'IV LACTATED RINGERS 1,000 ML' }, { id: 1249, name: 'IV NaCl 0.45% 1,000 ML' }, { id: 1250, name: 'IV VANCOMYCIN IVPB 1 GM - ADD-VANTAGE' }, { id: 1251, name: 'IV NaCl 0.9% + KCl 40 mEq -  1,000 ML' }, { id: 1252, name: 'IV NaCl 0.45% + KCl 20 mEq   1,000 ML' }, { id: 1253, name: 'IV D 5 % NaCl 0.9 % + KCl 20 mEq  1,000 ML' }, { id: 1254, name: 'IV D 10 % W   1,000 ML' }, { id: 1255, name: 'IV D 5 NaCl 0.45 % + KCl 40 mEq   1,000 ML' }, { id: 1256, name: 'IV D 5 NaCl 0.45 % + KCl 10 mEq   1,000 ML' }, { id: 1257, name: 'IV D 5 NaCl 0.2%   1,000 ML' }, { id: 1258, name: 'IV D 5 LACTATED RINGER\'S   1,000 ML' }, { id: 1259, name: 'IV D 5 % WATER   1,000 ML ***' }, { id: 1260, name: 'IV D 5 % WATER    500 ML' }, { id: 1262, name: 'IV NaCl 0.9 % - 250 ML - ADD-VANTAGE BAG' }, { id: 1264, name: 'IV NaCl 0.9 % -   100 ML - MINIBAG' }, { id: 1266, name: 'IV CLEOCIN IVPB 600 MG / 50 ML D 5 W - PREMIX' }, { id: 1267, name: 'IV CLEOCIN IVPB 900 MG / 50 MG D 5 W - PREMIX' }, { id: 1269, name: 'IV CEFAZOLIN IVPB 1 GM / D5W 50 ML - PREMIX DUPLEX' }, { id: 1274, name: 'IV VANCOMYCIN VIAL 1,000 MG' }, { id: 1275, name: 'IV PRIMAXIN IV ADD-VANTAGE 500 MG' }, { id: 1284, name: 'IV IV FLUCONAZOLE / NaCl 0.9% IVPB 200 MG / 100 ML PREMIXED' }, { id: 1285, name: 'IV FORTAZ 1 GM INJECTION ( VIAL )' }, { id: 1291, name: 'IV CYCLOPHOSPHAMIDE VIAL 1,000 MG' }, { id: 1316, name: 'IV ZOSYN 3.375 GM IVPB' }, { id: 1317, name: 'IV NaCL 0.45 % + KCl 40 mEq 1,000 ML' }, { id: 1320, name: 'IV NaCl 0.9 % 250 ML' }, { id: 1324, name: 'IV BANANA BAG 1,000 ML  (LACTATED RINGER / FOLIC ACID / MIV / THIAMINE)' }, { id: 1325, name: 'IV LEVAQUIN VIAL 500 MG' }, { id: 1326, name: 'IV LEVAQUIN VIAL 750 MG' }, { id: 1327, name: 'IV CLINDAMYCIN INJECTION 600 MG' }, { id: 1328, name: 'RECLAST IVPB SOLUTION 1 MG / 20 ML' }, { id: 1329, name: 'IV RECLAST IVPB 5 MG / 100 ML' }, { id: 1334, name: 'IV IMMUNE GLOBULIN (HUMAN)  5 GM / 50 ML' }, { id: 1343, name: 'IV CUBICIN INTRAVENOUS 590 MG' }, { id: 1351, name: 'IV CEFTRIAXONE IVPB 900 MG' }, { id: 1357, name: 'NACL 3 % 500 ML  IV SOLUTION' }, { id: 1358, name: 'IV NACL 3 % 500 ML  IV SOLUTION' }, { id: 1361, name: 'AZITHROMYCIN INJ 500 MG ADD-VANTAGE' }, { id: 1362, name: 'IV AZITHROMYCIN INJ  500 MG  ADD-VANTAGE' }, { id: 1367, name: 'IV AZITHROMYCIN 250 MG INJECTION' }, { id: 1379, name: 'MINOCIN IV INJECTION 100 MG VIAL' }, { id: 1380, name: 'IV MINOCIN IV INJECTION 100 MG VIAL' }, { id: 1389, name: 'IV VANCOMYCIN VIAL 500 MG ADD-VANTANGE' }, { id: 1390, name: 'VANCOMYCIN IVPB 500 MG ADD-VANTAGE' }, { id: 1391, name: 'IV D 5 NaCl 0.9 %  1,000 ML' }, { id: 1392, name: 'IV GENTAMICIN INJECTION 80 MG / 2 ML VIAL' }, { id: 1393, name: 'IV VANCOMYCIN IVPB 1,500 MG IV SOLUTION' }, { id: 1476, name: 'IV ZOSYN INJECTION 4.5 GM VIAL' }, { id: 1477, name: 'ZOSYN INJECTION  4.5 GRAM VIAL' }, { id: 1487, name: 'IV PENICILLIN G POTASSIUM 2,500,000 UNITS IVPB' }, { id: 1516, name: 'IV LEVAQUIN IVPB 750 MG / 150 ML D 5 W -PREMIX' }, { id: 1517, name: 'IV METRONIDAZOLE IVPB/ NaCl 500 MG / 100 ML PREMIX' }, { id: 1674, name: 'IV VENOFER INJECTION 200 MG' }, { id: 1685, name: 'IV CEFAZOLIN INJECTION 500 MG' }, { id: 1727, name: 'IV CEFTRIAXONE INJECTION 500 MG IVPB' }, { id: 1769, name: 'CALDOLOR INJECTION 400 MG' }, { id: 1770, name: 'IV CALDOLOR INJECTION 400 MG' }, { id: 1783, name: 'CEFOXITIN IVPB 1 GM / D5 W 50 ML' }, { id: 1784, name: 'IV CEFOXITIN IVPB / D5 W 50 ML DUPLEX' }, { id: 1839, name: 'IV SOLU-MEDROL 1,000 MG VIAL' }, { id: 1853, name: 'IV CEFTRIAXONE INJECTION 800 MG' }, { id: 1855, name: 'LEVAQUIN  IVPB  250 MG / 50 ML D 5 W - PREMIX' }, { id: 1856, name: 'IV LEVAQUIN IVPB  250 MG / 50 ML D 5 W PREMIX' }, { id: 1890, name: 'IV VANCOMYCIN IVPB 1,250 MG' }, { id: 1893, name: 'IV GENTAMICIN IVPB 85 MG' }, { id: 1899, name: 'IV CEFAZOLIN IVPB 1.5 GM' }, { id: 1937, name: 'IV CLINIMIX E 4.25%/DEXTROSE 10 % - 1,000 ML' }, { id: 1938, name: 'IV INTRALIPID 20 %  250 ML' }, { id: 1940, name: 'SURGERY - VANCOMYCIN IVPB 1,000 MG' }, { id: 1949, name: 'IV ZANTAC INJECTION 75 MG' }, { id: 1950, name: 'IV METRONIDAZOLE INJECTION 200 MG' }, { id: 1951, name: 'IV AMPICILLIN-SULBACTAM INJECTION 750 MG' }, { id: 1975, name: 'IV VANCOMYCIN INJECTION 1,500 MG' }, { id: 1997, name: 'IV PRIMAXIN IVPB 750 MG' }, { id: 1998, name: 'PRIMAXIN IVPB 500 MG' }, { id: 2002, name: 'CLEOCIN ADDVANTAGE VIAL 900 MG / 6 ML' }, { id: 2005, name: 'IV CLEOCIN  ADDVANTAGE VIAL 900 MG' }, { id: 2006, name: 'IV AMIODARONE BOLUS  150 MG' }, { id: 2007, name: 'IV AMIODARONE DRIP 450 MG' }, { id: 2023, name: 'IV FLUCONAZOLE /NaCl 0.9 % 200 MG / 100 ML' }, { id: 2031, name: 'CLINDAMYCIN INJECTION 900 MG' }, { id: 2032, name: 'IV CLINDAMYCIN INJECTION 900 MG' }, { id: 2037, name: 'IV FLUDARABINE INJECTION 50 MG' }, { id: 2038, name: 'FLUDARABINE INJECTION 50 MG' }, { id: 2052, name: 'LIDOCAINE DRIP 1 GM / D 5 W 250 ML' }, { id: 2054, name: 'IV LEVAQUIN INJECTION 250 MG' }, { id: 2055, name: 'IV INVANZ 1 GM ADD-VANTAGE' }, { id: 2056, name: 'IV INVANZ INJECTION 500 MG' }, { id: 2058, name: 'IV DILTIAZEM INJECTION 125 MG / 25 ML' }, { id: 2059, name: 'IV POTASSIUM PHOSPHATE 32 mM / 10.6 ML' }, { id: 2060, name: 'IV MAGNESIUM SULFATE  2 GM / 4 ML' }, { id: 2063, name: 'IV INSULIN REGULAR HUMAN 100 UNITS' }, { id: 2065, name: 'IV CALCIUM GLUCONATE  2 GM ( 20 ML )' }, { id: 2066, name: 'IV CALCIUM GLUCONATE 6 GM ( 60 ML )' }, { id: 2077, name: 'IV ACYCLOVIR 80 MG FOR IVPB' }, { id: 2150, name: 'LACTATED RINGERS' }, { id: 2162, name: 'IV SODIUM CHLORIDE 0.9% -  500 ML BOLUS' }, { id: 2165, name: 'LACTATED RINGERS  1000 ml  CA' }, { id: 2181, name: 'BIAXIN' }, { id: 4231, name: 'Diazepam 250 ml' }, { id: 5323, name: 'Aravind Pharma' }, { id: 6696, name: 'AUTO_IV_ORDER3' }, { id: 6697, name: 'AUTO_IV_ORDER4' }, { id: 6852, name: 'Non-Formulary NFSC' }];
        //  private medicationList = ['NaCl 0.9 %  -    100 ML - MiniBag',  'BJM CEFTRIAXONE IVPB  1 GM ADD-VANTAGE in 50 mL'];
        this.noData = [{ id: 0, 'name': '- Select -' }];
        this.defaultDate = new Date();
        this.medicationData = { Note: '', Frequency: '', IVDuration: '', Method: '', PatientID: '', MedicationText: '', MedicationCode: '', Status: '', Intent: '', ReportedBoolean: false, Subject: '', Encounter: '', AuthoredOn: '', Requester: '', Dosage: '', DosageRange: false, DosageStartDateTime: this.defaultDate, DosageEndDateTime: this.defaultDate, DosageDuration: '', DosageDurationUnit: '', DosageUnit: '', DosageCode: '', Rate: '', RateUnit: '', RateUnitTiming: '', RateRange: false, TimingCount: '', Route: '' };
        this.displayDialog = false;
        this.selectedMedication = '';
        this.buttonClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    MedicationRequestComponent.prototype.ngOnInit = function () {
    };
    MedicationRequestComponent.prototype.ngOnViewInit = function () {
    };
    MedicationRequestComponent.prototype.setDisplayDialog = function () {
        this.displayDialog = true;
    };
    ;
    MedicationRequestComponent.prototype.ChangeMedicationList = function (event, dd) {
        this.selectedMedication = dd.selectedOption.label;
    };
    ;
    MedicationRequestComponent.prototype.submitMedicationData = function () {
        var _this = this;
        this.medRequestResource = {
            resourceType: null, id: '', meta: null, text: null,
            extension: null, status: null, intent: null, category: null, reportedBoolean: false,
            medicationCodeableConcept: null, subject: null, encounter: null, authoredOn: null,
            requester: null, dosageInstruction: [], dispenseRequest: null, courseOfTherapyType: null,
            note: null, substitution: null
        };
        this.medRequestResource.resourceType = _models_medication_result__WEBPACK_IMPORTED_MODULE_3__["ResourceType"].MedicationRequest;
        this.medRequestResource.status = _models_medication_result__WEBPACK_IMPORTED_MODULE_3__["ResourceStatus"].Active;
        this.medRequestResource.intent = _models_medication_result__WEBPACK_IMPORTED_MODULE_3__["Intent"].Order;
        this.medRequestResource.reportedBoolean = true;
        this.medRequestResource.medicationCodeableConcept = {
            coding: [
                {
                    system: 'http://www.nlm.nih.gov/research/umls/rxnorm',
                    code: '352362',
                    display: this.selectedMedication
                }
            ],
            text: this.selectedMedication
        };
        this.medRequestResource.subject = { reference: _models_medication_result__WEBPACK_IMPORTED_MODULE_3__["SubjectReference"].Patient12742400, display: _models_medication_result__WEBPACK_IMPORTED_MODULE_3__["Display"].PetersTimA };
        this.medRequestResource.encounter = { reference: _models_medication_result__WEBPACK_IMPORTED_MODULE_3__["EncounterReference"].Encounter97953530 }; // 'Encounter/' + this.encounterId }
        this.medRequestResource.note = [{
                text: this.medicationData.Note,
            }];
        this.medRequestResource.dosageInstruction = [{
                extension: [],
                text: this.medicationData.Note,
                patientInstruction: this.medicationData.Note,
                timing: {
                    repeat: { boundsPeriod: { start: new Date() } },
                    code: {
                        coding: [{
                                system: "http://terminology.hl7.org/CodeSystem/v3-GTSAbbreviation",
                                code: "BID",
                                display: 'BID',
                            }],
                        text: 'BID'
                    }
                },
                route: {
                    coding: [{
                            system: "http://snomed.info/sct",
                            code: "41974700",
                            display: '41974700',
                        }],
                    text: '41974700'
                },
                doseAndRate: [
                    {
                        doseQuantity: {
                            value: parseFloat(this.medicationData.Dosage),
                            unit: "tabs",
                            system: "http://unitsofmeasure.org",
                            code: "tbl"
                        }
                    }
                ]
            }];
        this.medRequestResource.dispenseRequest = {
            extension: [],
            validityPeriod: { start: new Date() },
            numberOfRepeatsAllowed: 0
        };
        this.medRequestResource.substitution = { allowedBoolean: true };
        this.medicationService.createMedicationOrder(this.medRequestResource).subscribe(function (response) {
            var resultData = _models_medication_result__WEBPACK_IMPORTED_MODULE_3__["Convert"].toMedicationRequest(JSON.stringify(response));
            if (resultData != null && resultData.entry != null && resultData.entry.length > 0) {
                _this.buttonClicked.emit(true);
            }
        });
        this.buttonClicked.emit(true);
    };
    MedicationRequestComponent.prototype.cancelMedicationOrder = function () {
        this.buttonClicked.emit(false);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], MedicationRequestComponent.prototype, "buttonClicked", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MedicationRequestComponent.prototype, "patientId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MedicationRequestComponent.prototype, "encounterId", void 0);
    MedicationRequestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-medication-request',
            template: __webpack_require__(/*! ./medication-request.component.html */ "./src/app/medication-request/medication-request.component.html"),
            styles: [__webpack_require__(/*! ./medication-request.component.css */ "./src/app/medication-request/medication-request.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_medication_service__WEBPACK_IMPORTED_MODULE_2__["MedicationService"]])
    ], MedicationRequestComponent);
    return MedicationRequestComponent;
}());



/***/ }),

/***/ "./src/app/models/PumpMapDetails.ts":
/*!******************************************!*\
  !*** ./src/app/models/PumpMapDetails.ts ***!
  \******************************************/
/*! exports provided: PumpMapDetails, PatientConvert */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PumpMapDetails", function() { return PumpMapDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientConvert", function() { return PatientConvert; });
var PumpMapDetails = /** @class */ (function () {
    function PumpMapDetails() {
    }
    return PumpMapDetails;
}());

var PatientConvert = /** @class */ (function () {
    function PatientConvert() {
    }
    PatientConvert.toPatientDetails = function (json) {
        return JSON.parse(json);
    };
    return PatientConvert;
}());



/***/ }),

/***/ "./src/app/models/accesstoken.ts":
/*!***************************************!*\
  !*** ./src/app/models/accesstoken.ts ***!
  \***************************************/
/*! exports provided: AccessToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessToken", function() { return AccessToken; });
var AccessToken = /** @class */ (function () {
    function AccessToken() {
        this.code = 'c95c4f8b-2230-4513-99a2-8b8420b22cec';
        this.grant_type = 'refresh_token';
        this.refresh_token = 'eyJpZCI6IjNiMzFjYTgyLWU5MTMtNGNkMS1hZWIyLWJiNzdkNjY5OWJjNSIsInNlY3JldCI6ImJlNjU0ZGJmLWY5NjYtNDY1Ni04YmExLTkxMWM3ZDE5YTY1OSIsInZlciI6IjEuMCIsInR5cGUiOiJvbmxpbmVfYWNjZXNzIiwicHJvZmlsZSI6InNtYXJ0LXYxIn0=';
        this.client_id = 'adf6b80d-375a-4971-80f4-b280bbf4f9dd';
        this.redirect_uri = 'https://ratheshr8.github.io/-smart-on-fhir-tutorial/example-smart-app/';
    }
    return AccessToken;
}());



/***/ }),

/***/ "./src/app/models/medication-order-request.ts":
/*!****************************************************!*\
  !*** ./src/app/models/medication-order-request.ts ***!
  \****************************************************/
/*! exports provided: MedicationOrderRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicationOrderRequest", function() { return MedicationOrderRequest; });
var MedicationOrderRequest = /** @class */ (function () {
    function MedicationOrderRequest() {
    }
    return MedicationOrderRequest;
}());



/***/ }),

/***/ "./src/app/models/medication-result.ts":
/*!*********************************************!*\
  !*** ./src/app/models/medication-result.ts ***!
  \*********************************************/
/*! exports provided: MedicationRequest, EncounterReference, Intent, ValueCode, ResourceType, ResourceStatus, Display, SubjectReference, TextStatus, Mode, Convert */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicationRequest", function() { return MedicationRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EncounterReference", function() { return EncounterReference; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Intent", function() { return Intent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValueCode", function() { return ValueCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceType", function() { return ResourceType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceStatus", function() { return ResourceStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Display", function() { return Display; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectReference", function() { return SubjectReference; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextStatus", function() { return TextStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mode", function() { return Mode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Convert", function() { return Convert; });
var MedicationRequest = /** @class */ (function () {
    function MedicationRequest() {
    }
    return MedicationRequest;
}());

var EncounterReference;
(function (EncounterReference) {
    EncounterReference["Encounter97953530"] = "Encounter/97953530";
})(EncounterReference || (EncounterReference = {}));
var Intent;
(function (Intent) {
    Intent["Order"] = "order";
    Intent["Plan"] = "plan";
})(Intent || (Intent = {}));
var ValueCode;
(function (ValueCode) {
    ValueCode["Unknown"] = "unknown";
})(ValueCode || (ValueCode = {}));
var ResourceType;
(function (ResourceType) {
    ResourceType["MedicationRequest"] = "MedicationRequest";
})(ResourceType || (ResourceType = {}));
var ResourceStatus;
(function (ResourceStatus) {
    ResourceStatus["Active"] = "active";
})(ResourceStatus || (ResourceStatus = {}));
var Display;
(function (Display) {
    Display["PetersTimA"] = "PETERS, TIM A";
})(Display || (Display = {}));
var SubjectReference;
(function (SubjectReference) {
    SubjectReference["Patient12742400"] = "Patient/12742400";
})(SubjectReference || (SubjectReference = {}));
var TextStatus;
(function (TextStatus) {
    TextStatus["Generated"] = "generated";
})(TextStatus || (TextStatus = {}));
var Mode;
(function (Mode) {
    Mode["Match"] = "match";
})(Mode || (Mode = {}));
// Converts JSON strings to/from your types
var Convert = /** @class */ (function () {
    function Convert() {
    }
    Convert.toMedicationRequest = function (json) {
        return JSON.parse(json);
    };
    Convert.medicationRequestToJson = function (value) {
        return JSON.stringify(value);
    };
    return Convert;
}());



/***/ }),

/***/ "./src/app/patient-map/patient-map.component.css":
/*!*******************************************************!*\
  !*** ./src/app/patient-map/patient-map.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep .dialog .ui-dialog .ui-dialog-titlebar {\r\n    background: #006bb3;\r\n    font-weight: 500;\r\n    color: white;\r\n}\r\n\r\n::ng-deep .dialog .ui-dialog-content label {\r\n    color: #8f8d88;\r\n    font-weight: 500;\r\n    margin-top: 5px;\r\n}\r\n\r\n::ng-deep .dialog .ui-dialog-content button {\r\n    height: 32px;\r\n}\r\n\r\n::ng-deep .dialog .ui-dialog-footer {\r\n    border: none;\r\n    text-align: center;\r\n}\r\n\r\n::ng-deep .mat-tab-label-active .mat-tab-label-content {\r\n  color: rgb(0 107 179);\r\n  font-weight: 500 !important;\r\n}\r\n\r\n.pump-div {\r\n    width: 30%;\r\n    height: 100%;\r\n    position: absolute;\r\n}\r\n\r\n.main-div img{\r\n    margin-bottom: 5%;\r\n    margin-left: 15%;\r\n}\r\n\r\n.pump-name {\r\n  text-align: center;\r\n  color: #006bb3;\r\n  font-weight: 500;\r\n  font-size: 20px;\r\n}\r\n\r\n.available {\r\n    margin-top: 4px;\r\n    font-size: 14px;\r\n}\r\n\r\n.patient-div {\r\n    width: 70%;\r\n    height: 100%;\r\n    float: right;\r\n}\r\n\r\n.search-div {\r\n    height: 10%;\r\n    margin: 20px;\r\n}\r\n\r\n.row {\r\n    display: flex; \r\n    flex-wrap: wrap;\r\n    padding: 0 4px;\r\n  }\r\n\r\n.column {\r\n    padding: 25px;\r\n    border: solid 0.01px #cccccc;\r\n  }\r\n\r\n.column img {\r\n    margin-top: 8px;\r\n    vertical-align: middle;\r\n    width: 100%;\r\n  }\r\n\r\n/* Responsive layout - makes a two column-layout instead of four columns  */\r\n\r\n@media screen and (max-width: 800px) {\r\n    .column {\r\n      flex: 50%;\r\n      max-width: 50%;\r\n    }\r\n  }\r\n\r\n/* Responsive layout - makes the two columns stack on top of each other instead of next to each other */\r\n\r\n@media screen and (max-width: 600px) {\r\n    .column {\r\n      flex: 100%;\r\n      max-width: 100%;\r\n    }\r\n  }\r\n\r\n.container {\r\n    border: 1px solid var(--surface-border);\r\n    padding: 1rem;\r\n    margin-bottom: 2rem;\r\n    min-width: 600px;\r\n    width: 600px;\r\n}\r\n\r\n.container-wide {\r\n  border: 1px solid var(--surface-border);\r\n  padding: 1rem;\r\n  margin-bottom: 2rem;\r\n  min-width: 80%;\r\n  width: 95%;\r\n}\r\n\r\n.ui-button-text.ui-clickable {\r\n   height: 30px !important;\r\n}\r\n\r\n::ng-deep .startSelectButton .ui-selectbutton .ui-button.ui-state-active,::ng-deep .startSelectButton .ui-selectbutton .ui-button.ui-state-active:focus {\r\n  border: 1px solid #2399e5;\r\n  background: #2399e5;\r\n  box-shadow: none;\r\n}\r\n\r\n::ng-deep .startSelectButton  {\r\n  border-radius: 4px;\r\n}\r\n\r\n::ng-deep .mat-button-toggle-group.mat-button-toggle-group-appearance-standard, .mat-button-toggle-label-content {\r\n  height: 32px;\r\n}\r\n\r\n::ng-deep .mat-button-toggle-appearance-standard .mat-button-toggle-label-content {\r\n  line-height: 32px !important;\r\n  padding: 0 16px !important;\r\n}\r\n\r\n.patient-info {\r\n  margin-top: 15px;\r\n  background: #006bb3;\r\n  border-radius: 15px;\r\n  line-height: 32px;\r\n  height: 10%;\r\n}\r\n\r\n.patient-info label{\r\n  font-weight: 400;\r\n}\r\n\r\n.pump-status {\r\n  color: white;\r\n  font-weight: 500;\r\n  float: right;\r\n  padding: 0px 10px;\r\n  border-radius: 15px;\r\n  text-align: center;\r\n  line-height: 25px;\r\n  letter-spacing: 0.2px;\r\n  font-size: 11px;\r\n}\r\n\r\n.zoom-in-out-box {\r\n  animation: zoom-in-zoom-out 2s ease infinite;\r\n}\r\n\r\n@keyframes zoom-in-zoom-out {\r\n  0% {\r\n    transform: scale(0.5, 0.5);\r\n  }\r\n  50% {\r\n    transform: scale(1, 1);\r\n  }\r\n}\r\n\r\n.card {\r\n\r\n  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\r\n  transition: 0.3s;\r\n  width: 31.4% !important;\r\n}\r\n\r\n.card:hover {\r\n  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);\r\n}\r\n\r\n.labelstyle {\r\n  color: black;\r\n    text-align: left;\r\n    font-weight: 500 !important;\r\n}\r\n\r\n.valuestyle{\r\n  font-size: 14px;\r\n    color: #5f5a5a;\r\n    display: block;\r\n  \r\n    line-height: 1;\r\n    \r\n    margin-bottom: 10PX;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF0aWVudC1tYXAvcGF0aWVudC1tYXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsYUFBYTtDQUNoQjs7QUFFRDtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsZ0JBQWdCO0NBQ25COztBQUVEO0lBQ0ksYUFBYTtDQUNoQjs7QUFFRDtJQUNJLGFBQWE7SUFDYixtQkFBbUI7Q0FDdEI7O0FBRUQ7RUFDRSxzQkFBc0I7RUFDdEIsNEJBQTRCO0NBQzdCOztBQUVEO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixtQkFBbUI7Q0FDdEI7O0FBRUQ7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0NBQ3BCOztBQUVEO0VBQ0UsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsZ0JBQWdCO0NBQ2pCOztBQUVEO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtDQUNuQjs7QUFFRDtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsYUFBYTtDQUNoQjs7QUFFRDtJQUNJLFlBQVk7SUFDWixhQUFhO0NBQ2hCOztBQUVEO0lBRUksY0FBYztJQUVkLGdCQUFnQjtJQUNoQixlQUFlO0dBQ2hCOztBQUdEO0lBQ0UsY0FBYztJQUNkLDZCQUE2QjtHQUM5Qjs7QUFFRDtJQUNFLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsWUFBWTtHQUNiOztBQUVBLDRFQUE0RTs7QUFDN0U7SUFDRTtNQUVFLFVBQVU7TUFDVixlQUFlO0tBQ2hCO0dBQ0Y7O0FBRUQsd0dBQXdHOztBQUN4RztJQUNFO01BRUUsV0FBVztNQUNYLGdCQUFnQjtLQUNqQjtHQUNGOztBQUVEO0lBQ0Usd0NBQXdDO0lBQ3hDLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLGFBQWE7Q0FDaEI7O0FBRUQ7RUFDRSx3Q0FBd0M7RUFDeEMsY0FBYztFQUNkLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsV0FBVztDQUNaOztBQUVEO0dBQ0csd0JBQXdCO0NBQzFCOztBQUVBO0VBQ0MsMEJBQTBCO0VBQzFCLG9CQUFvQjtFQUNwQixpQkFBaUI7Q0FDbEI7O0FBRUQ7RUFDRSxtQkFBbUI7Q0FDcEI7O0FBRUQ7RUFDRSxhQUFhO0NBQ2Q7O0FBRUQ7RUFDRSw2QkFBNkI7RUFDN0IsMkJBQTJCO0NBQzVCOztBQUVEO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLFlBQVk7Q0FDYjs7QUFFRDtFQUNFLGlCQUFpQjtDQUNsQjs7QUFDRDtFQUNFLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsZ0JBQWdCO0NBQ2pCOztBQUVEO0VBQ0UsNkNBQTZDO0NBQzlDOztBQUVEO0VBQ0U7SUFDRSwyQkFBMkI7R0FDNUI7RUFDRDtJQUNFLHVCQUF1QjtHQUN4QjtDQUNGOztBQUVEOztFQUVFLHdDQUF3QztFQUN4QyxpQkFBaUI7RUFDakIsd0JBQXdCO0NBQ3pCOztBQUdEO0VBQ0UseUNBQXlDO0NBQzFDOztBQUVEO0VBQ0UsYUFBYTtJQUNYLGlCQUFpQjtJQUNqQiw0QkFBNEI7Q0FDL0I7O0FBQ0Q7RUFDRSxnQkFBZ0I7SUFDZCxlQUFlO0lBQ2YsZUFBZTs7SUFFZixlQUFlOztJQUVmLG9CQUFvQjtDQUN2QiIsImZpbGUiOiJzcmMvYXBwL3BhdGllbnQtbWFwL3BhdGllbnQtbWFwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgLmRpYWxvZyAudWktZGlhbG9nIC51aS1kaWFsb2ctdGl0bGViYXIge1xyXG4gICAgYmFja2dyb3VuZDogIzAwNmJiMztcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuZGlhbG9nIC51aS1kaWFsb2ctY29udGVudCBsYWJlbCB7XHJcbiAgICBjb2xvcjogIzhmOGQ4ODtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuZGlhbG9nIC51aS1kaWFsb2ctY29udGVudCBidXR0b24ge1xyXG4gICAgaGVpZ2h0OiAzMnB4O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLmRpYWxvZyAudWktZGlhbG9nLWZvb3RlciB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LXRhYi1sYWJlbC1hY3RpdmUgLm1hdC10YWItbGFiZWwtY29udGVudCB7XHJcbiAgY29sb3I6IHJnYigwIDEwNyAxNzkpO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnB1bXAtZGl2IHtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuXHJcbi5tYWluLWRpdiBpbWd7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNSU7XHJcbn1cclxuXHJcbi5wdW1wLW5hbWUge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogIzAwNmJiMztcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLmF2YWlsYWJsZSB7XHJcbiAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5wYXRpZW50LWRpdiB7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4uc2VhcmNoLWRpdiB7XHJcbiAgICBoZWlnaHQ6IDEwJTtcclxuICAgIG1hcmdpbjogMjBweDtcclxufVxyXG5cclxuLnJvdyB7XHJcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAtbXMtZmxleC13cmFwOiB3cmFwOyBcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIHBhZGRpbmc6IDAgNHB4O1xyXG4gIH1cclxuICBcclxuICBcclxuICAuY29sdW1uIHtcclxuICAgIHBhZGRpbmc6IDI1cHg7XHJcbiAgICBib3JkZXI6IHNvbGlkIDAuMDFweCAjY2NjY2NjO1xyXG4gIH1cclxuICBcclxuICAuY29sdW1uIGltZyB7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gICAvKiBSZXNwb25zaXZlIGxheW91dCAtIG1ha2VzIGEgdHdvIGNvbHVtbi1sYXlvdXQgaW5zdGVhZCBvZiBmb3VyIGNvbHVtbnMgICovXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcclxuICAgIC5jb2x1bW4ge1xyXG4gICAgICAtbXMtZmxleDogNTAlO1xyXG4gICAgICBmbGV4OiA1MCU7XHJcbiAgICAgIG1heC13aWR0aDogNTAlO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAvKiBSZXNwb25zaXZlIGxheW91dCAtIG1ha2VzIHRoZSB0d28gY29sdW1ucyBzdGFjayBvbiB0b3Agb2YgZWFjaCBvdGhlciBpbnN0ZWFkIG9mIG5leHQgdG8gZWFjaCBvdGhlciAqL1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAuY29sdW1uIHtcclxuICAgICAgLW1zLWZsZXg6IDEwMCU7XHJcbiAgICAgIGZsZXg6IDEwMCU7XHJcbiAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5jb250YWluZXIge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tc3VyZmFjZS1ib3JkZXIpO1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgICBtaW4td2lkdGg6IDYwMHB4O1xyXG4gICAgd2lkdGg6IDYwMHB4O1xyXG59XHJcblxyXG4uY29udGFpbmVyLXdpZGUge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXN1cmZhY2UtYm9yZGVyKTtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgbWluLXdpZHRoOiA4MCU7XHJcbiAgd2lkdGg6IDk1JTtcclxufVxyXG5cclxuLnVpLWJ1dHRvbi10ZXh0LnVpLWNsaWNrYWJsZSB7XHJcbiAgIGhlaWdodDogMzBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4gOjpuZy1kZWVwIC5zdGFydFNlbGVjdEJ1dHRvbiAudWktc2VsZWN0YnV0dG9uIC51aS1idXR0b24udWktc3RhdGUtYWN0aXZlLDo6bmctZGVlcCAuc3RhcnRTZWxlY3RCdXR0b24gLnVpLXNlbGVjdGJ1dHRvbiAudWktYnV0dG9uLnVpLXN0YXRlLWFjdGl2ZTpmb2N1cyB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzIzOTllNTtcclxuICBiYWNrZ3JvdW5kOiAjMjM5OWU1O1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuc3RhcnRTZWxlY3RCdXR0b24gIHtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAtYXBwZWFyYW5jZS1zdGFuZGFyZCwgLm1hdC1idXR0b24tdG9nZ2xlLWxhYmVsLWNvbnRlbnQge1xyXG4gIGhlaWdodDogMzJweDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtYnV0dG9uLXRvZ2dsZS1hcHBlYXJhbmNlLXN0YW5kYXJkIC5tYXQtYnV0dG9uLXRvZ2dsZS1sYWJlbC1jb250ZW50IHtcclxuICBsaW5lLWhlaWdodDogMzJweCAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6IDAgMTZweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucGF0aWVudC1pbmZvIHtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIGJhY2tncm91bmQ6ICMwMDZiYjM7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBsaW5lLWhlaWdodDogMzJweDtcclxuICBoZWlnaHQ6IDEwJTtcclxufVxyXG5cclxuLnBhdGllbnQtaW5mbyBsYWJlbHtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcbi5wdW1wLXN0YXR1cyB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIHBhZGRpbmc6IDBweCAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcclxuICBmb250LXNpemU6IDExcHg7XHJcbn1cclxuXHJcbi56b29tLWluLW91dC1ib3gge1xyXG4gIGFuaW1hdGlvbjogem9vbS1pbi16b29tLW91dCAycyBlYXNlIGluZmluaXRlO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHpvb20taW4tem9vbS1vdXQge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC41LCAwLjUpO1xyXG4gIH1cclxuICA1MCUge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKTtcclxuICB9XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuXHJcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLDAsMCwwLjIpO1xyXG4gIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgd2lkdGg6IDMxLjQlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG4uY2FyZDpob3ZlciB7XHJcbiAgYm94LXNoYWRvdzogMCA4cHggMTZweCAwIHJnYmEoMCwwLDAsMC4yKTtcclxufVxyXG5cclxuLmxhYmVsc3R5bGUge1xyXG4gIGNvbG9yOiBibGFjaztcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XHJcbn1cclxuLnZhbHVlc3R5bGV7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICM1ZjVhNWE7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICBcclxuICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgXHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMFBYO1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/patient-map/patient-map.component.html":
/*!********************************************************!*\
  !*** ./src/app/patient-map/patient-map.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"color: #343a40;background-color:  #006bb3;width: 100%;height: 73px;\">\r\n  <div style=\"float: left;padding: 10px 3px 5px 9px;color: floralwhite;font-size: 20px;\">\r\n    <img src=\"assets/img/LoginBanner_white.png\">\r\n  </div>\r\n  <div style=\"padding: 12px;color: floralwhite;font-size: 22px;text-align: center;padding-right: 28rem;padding-top: 2rem;\">ACL INFUSION PUMP</div>\r\n</div>\r\n\r\n<div class=\"main-div\">\r\n  <mat-tab-group mat-align-tabs=\"left\" backgroundColor=\"#006bb3\" style=\"margin: 0 14px;\">\r\n    <mat-tab label=\"All\" style=\"font-size: 16px;\">\r\n      <div class=\"row col-xs-12\">\r\n        <div *ngFor=\"let pump of pumpList\" class=\"column col-xs-4 card\" style=\"width: 30%; margin: 2rem; border-radius: 0.75rem;\" (click)=\"openMapPatientDialog(pump)\">\r\n          <div class=\"col-xs-12 \" style=\"text-align: center;\">\r\n            <span class=\"pump-name\">{{pump.pumpName}}</span>\r\n          </div>\r\n\r\n          <div class=\"col-xs-12 justify-space-between\" style=\"margin:1rem 0\">\r\n            <span class=\"pump-name available\" [ngStyle]=\"{'color': (pump.pumpStatus == 'A') ? '#d95422' : 'green'}\">{{(pump.pumpStatus == 'A') ? 'Available To Connect' :  'Connected'}}</span> \r\n            <span>\r\n              <span *ngIf=\"itemLoaded\" class=\"pump-name\" style=\"margin-left: 1rem; font-size: 14px; float: right;\">{{pump.pumpStatus == 'L' ? 'Ready' : pump.pumpStatus == 'R' ? 'Running' : pump.pumpStatus == 'S' ? 'Stopped' : 'Available'}}</span>\r\n              <ng-container *ngFor=\"let pumpStatus of allPumpStatus\">\r\n                <span *ngIf=\"pumpStatus.pumpdetailid == pump.pumpName\" class=\"pump-name\" style=\"margin-left: 1rem; font-size: 14px; float: right;\">{{pumpStatus.status == 'L' ? 'Ready' : pumpStatus.status == 'R' ? 'Running' : pumpStatus.status == 'S' ? 'Stopped' : 'Available'}}</span>\r\n                <span *ngIf=\"pumpStatus.pumpdetailid !== pump.pumpName\" class=\"pump-name\" style=\"margin-left: 1rem; font-size: 14px; float: right;\">{{pump.pumpStatus == 'L' ? 'Ready' : pump.pumpStatus == 'R' ? 'Running' : pump.pumpStatus == 'S' ? 'Stopped' : 'Available'}}</span>\r\n              </ng-container>\r\n              <span *ngIf=\"itemLoaded\" class=\"pump-status\" style=\"background: green;width: 20px;height: 19px;\" [ngStyle]=\"{'background': (pump.pumpStatus == 'S') ? 'red' : (pump.pumpStatus == 'R') ? 'lightgreen' : (pump.pumpStatus == 'A') ? 'green' : 'orange', 'color': (pump.pumpStatus == 'A') ? '' : 'white'}\" [ngClass]=\"(pump.pumpStatus == 'R') ? 'zoom-in-out-box' : ''\"></span>\r\n              <ng-container *ngFor=\"let pumpStatus of allPumpStatus\">\r\n                <span *ngIf=\"pumpStatus.pumpdetailid == pump.pumpName\" class=\"pump-status\" style=\"background: green;width: 20px;height: 19px;\" [ngStyle]=\"{'background': (pumpStatus.status == 'S') ? 'red' : (pumpStatus.status == 'R') ? 'lightgreen' : (pumpStatus.status == 'A') ? 'green' : 'orange', 'color': (pumpStatus.status == 'A') ? '' : 'white'}\" [ngClass]=\"(pumpStatus.status == 'R') ? 'zoom-in-out-box' : ''\"></span>\r\n                <span *ngIf=\"pumpStatus.pumpdetailid !== pump.pumpName\" class=\"pump-status\" style=\"background: green;width: 20px;height: 19px;\" [ngStyle]=\"{'background': (pump.pumpStatus == 'S') ? 'red' : (pump.pumpStatus == 'R') ? 'lightgreen' : (pump.pumpStatus == 'A') ? 'green' : 'orange', 'color': (pump.pumpStatus == 'A') ? '' : 'white'}\" [ngClass]=\"(pump.pumpStatus == 'R') ? 'zoom-in-out-box' : ''\"></span>\r\n              </ng-container>\r\n            </span>\r\n          </div>\r\n\r\n        <div *ngIf=\"(pump.pumpStatus == 'A')\">\r\n          <div class=\"column col-xs-2\" style=\"width: 100%;text-align: center;\">\r\n            <img  *ngIf=\"(pump.pumpStatus == 'A')\" src=\"assets/img/iv_pump_avaliable.png\" alt=\"Img\" style=\"width: 150px;height: 270px;margin-left: 0px;\">\r\n          </div>\r\n        </div>\r\n\r\n        <div *ngIf=\"(pump.pumpStatus != 'A')\">\r\n          <div class=\"column col-xs-2\" style=\"border: none;background: #eeecece0;height: auto;margin-right: 4rem;color: black;width: 45.666667%;padding: 2rem;\">\r\n            <div *ngIf=\"(pump.pumpStatus != 'A')\" class=\"patient-info\" style=\"margin-top: 0px;background: none;line-height: normal;text-align: left;height: 300px;\">\r\n              <div style=\"border-bottom: 1px solid #d6d5d5;margin-bottom: 5px;\">\r\n                <label class=\"labelstyle\">Patient Name </label>\r\n                <span id=\"{{pump.patientId}}\" class=\"valuestyle\">  {{pump.patientName}}</span>\r\n              </div>\r\n              <div style=\"border-bottom: 1px solid #d6d5d5;margin-bottom: 5px;\">\r\n                <label class=\"labelstyle\">Bed No: </label>\r\n                <span class=\"\" class=\"valuestyle\">  {{pump.bednumber}}</span>\r\n              </div>\r\n              <div style=\"border-bottom: 1px solid #d6d5d5;margin-bottom: 5px;\">\r\n                <label class=\"labelstyle\">IV Site: </label>\r\n                <span class=\"\" class=\"valuestyle\">  {{pump.ivSite}}</span>\r\n              </div>        \r\n              <div style=\"border-bottom: 1px solid #d6d5d5;margin-bottom: 5px;\">\r\n                <label class=\"labelstyle\">Medication </label>\r\n                <span *ngIf=\"itemLoaded\" class=\"valuestyle\">  -</span>\r\n                <ng-container *ngFor=\"let status of allPumpStatus\">\r\n                  <span *ngIf=\"status.pumpdetailid !== pump.pumpName\" class=\"valuestyle\">  -</span>\r\n                  <span *ngIf=\"status.pumpdetailid == pump.pumpName\" id=\"{{pump.patientId}}\" class=\"valuestyle\">  {{status.medication}}</span>\r\n                </ng-container>\r\n              </div>\r\n              <div style=\"border-bottom: 1px solid #d6d5d5;margin-bottom: 5px;\">\r\n                <label class=\"labelstyle\">Infused Volume </label>\r\n                <span *ngIf=\"itemLoaded\"class=\"valuestyle\">  -</span>\r\n                <ng-container *ngFor=\"let status of allPumpStatus\">\r\n                  <span *ngIf=\"status.pumpdetailid !== pump.pumpName\" class=\"valuestyle\">  -</span>\r\n                  <span *ngIf=\"status.pumpdetailid == pump.pumpName\" id=\"{{pump.patientId}}\" class=\"valuestyle\">  {{status.infusedvolume}}</span>\r\n                </ng-container>\r\n              </div>\r\n              <div>\r\n                <label class=\"labelstyle\">Timer </label>\r\n                <span *ngIf=\"itemLoaded\" class=\"valuestyle\">  -</span>\r\n                <ng-container *ngFor=\"let status of allPumpStatus\">\r\n                  <span *ngIf=\"status.pumpdetailid !== pump.pumpName\" class=\"valuestyle\">  -</span>\r\n                  <span *ngIf=\"status.pumpdetailid == pump.pumpName\" id=\"{{pump.patientId}}\" class=\"valuestyle\">  {{status.runingtime.split('T')[1]}}</span>\r\n                </ng-container>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div *ngIf=\"itemLoaded\" class=\"column col-xs-2\" style=\"width: 45.666667%;text-align: center\">\r\n            <img  *ngIf=\"(pump.pumpStatus == 'L')\" src=\"assets/img/iv_pump_connected.gif\" alt=\"Img\" style=\"width: 150px;height: 270px;margin-left: 0px;\">\r\n            <img  *ngIf=\"(pump.pumpStatus == 'R')\" src=\"assets/img/iv_pump_running.gif\" alt=\"Img\" style=\"width: 150px;height: 270px;margin-left: 0px;\">\r\n            <img  *ngIf=\"(pump.pumpStatus == 'S')\" src=\"assets/img/iv_pump_stopped.gif\" alt=\"Img\" style=\"width: 150px;height: 270px;margin-left: 0px;\">\r\n          </div>\r\n          <div *ngIf=\"!itemLoaded\" class=\"column col-xs-2\" style=\"width: 45.666667%;text-align: center\">\r\n            <ng-container *ngFor=\"let pumpStatus of allPumpStatus\">\r\n              <img  *ngIf=\"(pumpStatus.pumpdetailid == pump.pumpName && pumpStatus.status == 'L')\" src=\"assets/img/iv_pump_connected.gif\" alt=\"Img\" style=\"width: 150px;height: 270px;margin-left: 0px;\">\r\n              <img  *ngIf=\"(pumpStatus.pumpdetailid == pump.pumpName && pumpStatus.status == 'R')\" src=\"assets/img/iv_pump_running.gif\" alt=\"Img\" style=\"width: 150px;height: 270px;margin-left: 0px;\">\r\n              <img  *ngIf=\"(pumpStatus.pumpdetailid == pump.pumpName && pumpStatus.status == 'S')\" src=\"assets/img/iv_pump_stopped.gif\" alt=\"Img\" style=\"width: 150px;height: 270px;margin-left: 0px;\">\r\n              <img  *ngIf=\"(pumpStatus.pumpdetailid !== pump.pumpName && pump.pumpStatus == 'L')\" src=\"assets/img/iv_pump_connected.gif\" alt=\"Img\" style=\"width: 150px;height: 270px;margin-left: 0px;\">\r\n              <img  *ngIf=\"(pumpStatus.pumpdetailid !== pump.pumpName && pump.pumpStatus == 'R')\" src=\"assets/img/iv_pump_running.gif\" alt=\"Img\" style=\"width: 150px;height: 270px;margin-left: 0px;\">\r\n              <img  *ngIf=\"(pumpStatus.pumpdetailid !== pump.pumpName && pump.pumpStatus == 'S')\" src=\"assets/img/iv_pump_stopped.gif\" alt=\"Img\" style=\"width: 150px;height: 270px;margin-left: 0px;\">\r\n            </ng-container>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </mat-tab>\r\n  <mat-tab label=\"Available\">\r\n    <div class=\"row col-xs-12\">\r\n      <ng-container *ngFor=\"let pump of pumpList\">\r\n        <div *ngIf=\"(pump.pumpStatus == 'A')\" class=\"column col-xs-4 card\" style=\"width: 30%; margin: 2rem; border-radius: 0.75rem;\" (click)=\"openMapPatientDialog(pump)\">\r\n          <div class=\"col-xs-12 \" style=\"text-align: center;\">\r\n            <span class=\"pump-name\">{{pump.pumpName}}</span>\r\n          </div>\r\n          <div class=\"col-xs-12 justify-space-between\" style=\"margin:1rem 0\">\r\n            <span class=\"pump-name available\" [ngStyle]=\"{'color': (pump.pumpStatus == 'A') ? '#d95422' : 'green'}\">{{(pump.pumpStatus == 'A') ? 'Available To Connect' :  'Connected'}}</span> \r\n              <span>\r\n                <span class=\"pump-name\" style=\"margin-left: 1rem; font-size: 14px; float: right;\">{{pump.pumpStatus == 'L' ? 'Ready' : pump.pumpStatus == 'R' ? 'Running' : pump.pumpStatus == 'S' ? 'Stopped' : 'Available'}}</span>\r\n                <span class=\"pump-status\" style=\"background: green;width: 20px;height: 19px;\" [ngStyle]=\"{'background': (pump.pumpStatus == 'S') ? 'red' : (pump.pumpStatus == 'R') ? 'lightgreen' : (pump.pumpStatus == 'A') ? 'green' : 'orange', 'color': (pump.pumpStatus == 'A') ? '' : 'white'}\" [ngClass]=\"(pump.pumpStatus == 'R') ? 'zoom-in-out-box' : ''\">\r\n              </span>\r\n            </span>\r\n          </div>\r\n        <div *ngIf=\"(pump.pumpStatus == 'A')\">\r\n          <div class=\"column col-xs-2\" style=\"width: 100%;text-align: center;\">\r\n            <img  *ngIf=\"(pump.pumpStatus == 'A')\" src=\"assets/img/iv_pump_avaliable.png\" alt=\"Img\" style=\"width: 150px;height: 200px;margin-left: 0px;\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </ng-container>\r\n  </div>\r\n  </mat-tab>\r\n    <mat-tab label=\"Connected\">\r\n      <div class=\"row col-xs-12\">\r\n        <ng-container *ngFor=\"let pump of pumpList\">\r\n          <div *ngIf=\"(pump.pumpStatus != 'A')\" class=\"column col-xs-4 card\" style=\"width: 30%; margin: 2rem; border-radius: 0.75rem;\" (click)=\"openMapPatientDialog(pump)\">\r\n            <div class=\"col-xs-12 \" style=\"text-align: center;\">\r\n              <span class=\"pump-name\">{{pump.pumpName}}</span>\r\n            </div>\r\n            <div class=\"col-xs-12 justify-space-between\" style=\"margin:1rem 0\">\r\n              <span class=\"pump-name available\" [ngStyle]=\"{'color': (pump.pumpStatus == 'A') ? '#d95422' : 'green'}\">{{(pump.pumpStatus == 'A') ? 'Available To Connect' :  'Connected'}}</span> \r\n              <span>\r\n                <span *ngIf=\"itemLoaded\" class=\"pump-name\" style=\"margin-left: 1rem; font-size: 14px; float: right;\">{{pump.pumpStatus == 'L' ? 'Ready' : pump.pumpStatus == 'R' ? 'Running' : pump.pumpStatus == 'S' ? 'Stopped' : 'Available'}}</span>\r\n                <ng-container *ngFor=\"let pumpStatus of allPumpStatus\">\r\n                  <span *ngIf=\"pumpStatus.pumpdetailid == pump.pumpName\" class=\"pump-name\" style=\"margin-left: 1rem; font-size: 14px; float: right;\">{{pumpStatus.status == 'L' ? 'Ready' : pumpStatus.status == 'R' ? 'Running' : pumpStatus.status == 'S' ? 'Stopped' : 'Available'}}</span>\r\n                  <span *ngIf=\"pumpStatus.pumpdetailid !== pump.pumpName\" class=\"pump-name\" style=\"margin-left: 1rem; font-size: 14px; float: right;\">{{pump.pumpStatus == 'L' ? 'Ready' : pump.pumpStatus == 'R' ? 'Running' : pump.pumpStatus == 'S' ? 'Stopped' : 'Available'}}</span>\r\n                </ng-container>\r\n                <span *ngIf=\"itemLoaded\" class=\"pump-status\" style=\"background: green;width: 20px;height: 19px;\" [ngStyle]=\"{'background': (pump.pumpStatus == 'S') ? 'red' : (pump.pumpStatus == 'R') ? 'lightgreen' : (pump.pumpStatus == 'A') ? 'green' : 'orange', 'color': (pump.pumpStatus == 'A') ? '' : 'white'}\" [ngClass]=\"(pump.pumpStatus == 'R') ? 'zoom-in-out-box' : ''\"></span>\r\n                <ng-container *ngFor=\"let pumpStatus of allPumpStatus\">\r\n                  <span *ngIf=\"pumpStatus.pumpdetailid == pump.pumpName\" class=\"pump-status\" style=\"background: green;width: 20px;height: 19px;\" [ngStyle]=\"{'background': (pumpStatus.status == 'S') ? 'red' : (pumpStatus.status == 'R') ? 'lightgreen' : (pumpStatus.status == 'A') ? 'green' : 'orange', 'color': (pumpStatus.status == 'A') ? '' : 'white'}\" [ngClass]=\"(pumpStatus.status == 'R') ? 'zoom-in-out-box' : ''\"></span>\r\n                  <span *ngIf=\"pumpStatus.pumpdetailid !== pump.pumpName\" class=\"pump-status\" style=\"background: green;width: 20px;height: 19px;\" [ngStyle]=\"{'background': (pump.pumpStatus == 'S') ? 'red' : (pump.pumpStatus == 'R') ? 'lightgreen' : (pump.pumpStatus == 'A') ? 'green' : 'orange', 'color': (pump.pumpStatus == 'A') ? '' : 'white'}\" [ngClass]=\"(pump.pumpStatus == 'R') ? 'zoom-in-out-box' : ''\"></span>\r\n                </ng-container>\r\n              </span>\r\n            </div>\r\n          <div *ngIf=\"(pump.pumpStatus != 'A')\">\r\n            <div class=\"column col-xs-2\" style=\"border: none;background: #eeecece0;height: auto;margin-right: 4rem;color: black;width: 45.666667%;padding: 2rem;\">\r\n              <div *ngIf=\"(pump.pumpStatus != 'A')\" class=\"patient-info\" style=\"margin-top: 0px;background: none;line-height: normal;text-align: left;height: 300px;\">\r\n                <div style=\"border-bottom: 1px solid #d6d5d5;margin-bottom: 5px;\">\r\n                  <label class=\"labelstyle\">Patient Name </label>\r\n                  <span id=\"{{pump.patientId}}\" class=\"valuestyle\">  {{pump.patientName}}</span>\r\n                </div>\r\n                <div style=\"border-bottom: 1px solid #d6d5d5;margin-bottom: 5px;\">\r\n                  <label class=\"labelstyle\">Bed No: </label>\r\n                  <span class=\"\" class=\"valuestyle\">  {{pump.bednumber}}</span>\r\n                </div>\r\n                <div style=\"border-bottom: 1px solid #d6d5d5;margin-bottom: 5px;\">\r\n                  <label class=\"labelstyle\">IV Site: </label>\r\n                  <span class=\"\" class=\"valuestyle\">  {{pump.ivSite}}</span>\r\n                </div>\r\n                <div style=\"border-bottom: 1px solid #d6d5d5;margin-bottom: 5px;\">\r\n                  <label class=\"labelstyle\">Medication </label>\r\n                  <span *ngIf=\"itemLoaded\" class=\"valuestyle\">  -</span>\r\n                  <ng-container *ngFor=\"let status of allPumpStatus\">\r\n                    <span *ngIf=\"status.pumpdetailid !== pump.pumpName\" class=\"valuestyle\">  -</span>\r\n                    <span *ngIf=\"status.pumpdetailid == pump.pumpName\" id=\"{{pump.patientId}}\" class=\"valuestyle\">  {{status.medication}}</span>\r\n                  </ng-container>\r\n                </div>\r\n                <div style=\"border-bottom: 1px solid #d6d5d5;margin-bottom: 5px;\">\r\n                  <label class=\"labelstyle\">Infused Volume </label>\r\n                  <span *ngIf=\"itemLoaded\"class=\"valuestyle\">  -</span>\r\n                  <ng-container *ngFor=\"let status of allPumpStatus\">\r\n                    <span *ngIf=\"status.pumpdetailid !== pump.pumpName\" class=\"valuestyle\">  -</span>\r\n                    <span *ngIf=\"status.pumpdetailid == pump.pumpName\" id=\"{{pump.patientId}}\" class=\"valuestyle\">  {{status.infusedvolume}}</span>\r\n                  </ng-container>\r\n                </div>\r\n                <div>\r\n                  <label class=\"labelstyle\">Timer </label>\r\n                  <span *ngIf=\"itemLoaded\" class=\"valuestyle\">  -</span>\r\n                  <ng-container *ngFor=\"let status of allPumpStatus\">\r\n                    <span *ngIf=\"status.pumpdetailid !== pump.pumpName\" class=\"valuestyle\">  -</span>\r\n                    <span *ngIf=\"status.pumpdetailid == pump.pumpName\" id=\"{{pump.patientId}}\" class=\"valuestyle\">  {{status.runingtime.split('T')[1]}}</span>\r\n                  </ng-container>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div *ngIf=\"itemLoaded\" class=\"column col-xs-2\" style=\"width: 45.666667%;text-align: center\">\r\n              <img  *ngIf=\"(pump.pumpStatus == 'L')\" src=\"assets/img/iv_pump_connected.gif\" alt=\"Img\" style=\"width: 150px;height: 270px;margin-left: 0px;\">\r\n              <img  *ngIf=\"(pump.pumpStatus == 'R')\" src=\"assets/img/iv_pump_running.gif\" alt=\"Img\" style=\"width: 150px;height: 270px;margin-left: 0px;\">\r\n              <img  *ngIf=\"(pump.pumpStatus == 'S')\" src=\"assets/img/iv_pump_stopped.gif\" alt=\"Img\" style=\"width: 150px;height: 270px;margin-left: 0px;\">\r\n            </div>\r\n            <div *ngIf=\"!itemLoaded\" class=\"column col-xs-2\" style=\"width: 45.666667%;text-align: center\">\r\n              <ng-container *ngFor=\"let pumpStatus of allPumpStatus\">\r\n                <img  *ngIf=\"(pumpStatus.pumpdetailid == pump.pumpName && pumpStatus.status == 'L')\" src=\"assets/img/iv_pump_connected.gif\" alt=\"Img\" style=\"width: 150px;height: 270px;margin-left: 0px;\">\r\n                <img  *ngIf=\"(pumpStatus.pumpdetailid == pump.pumpName && pumpStatus.status == 'R')\" src=\"assets/img/iv_pump_running.gif\" alt=\"Img\" style=\"width: 150px;height: 270px;margin-left: 0px;\">\r\n                <img  *ngIf=\"(pumpStatus.pumpdetailid == pump.pumpName && pumpStatus.status == 'S')\" src=\"assets/img/iv_pump_stopped.gif\" alt=\"Img\" style=\"width: 150px;height: 270px;margin-left: 0px;\">\r\n                <img  *ngIf=\"(pumpStatus.pumpdetailid !== pump.pumpName && pump.pumpStatus == 'L')\" src=\"assets/img/iv_pump_connected.gif\" alt=\"Img\" style=\"width: 150px;height: 270px;margin-left: 0px;\">\r\n                <img  *ngIf=\"(pumpStatus.pumpdetailid !== pump.pumpName && pump.pumpStatus == 'R')\" src=\"assets/img/iv_pump_running.gif\" alt=\"Img\" style=\"width: 150px;height: 270px;margin-left: 0px;\">\r\n                <img  *ngIf=\"(pumpStatus.pumpdetailid !== pump.pumpName && pump.pumpStatus == 'S')\" src=\"assets/img/iv_pump_stopped.gif\" alt=\"Img\" style=\"width: 150px;height: 270px;margin-left: 0px;\">\r\n              </ng-container>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        </ng-container>\r\n      </div>\r\n    </mat-tab>\r\n  <mat-tab label=\"IV - Order\">\r\n    <div class=\"container-wide\">\r\n      <div class=\"row\" style=\"padding-top: 25px;min-height: 300px;\">\r\n        <div class=\"col-xs-4\">\r\n          <label for=\"name\" class=\"form-label\">Patient Name</label>\r\n          &nbsp;\r\n          <p-autoComplete id=\"txtPatientId\" [inputStyle]=\"{'width': '275px','height':'32px'}\"\r\n            [(ngModel)]=\"patientName\" [suggestions]=\"selectedPatient\" (completeMethod)=\"searchItem($event)\"\r\n            (onSelect)=\"getMedicationResult($event)\" [minLength]=\"3\" (input)=\"valueChanged($event.target.value)\"\r\n            placeholder=\"Search patient by name\"></p-autoComplete>\r\n        </div>\r\n        <div class=\"col-xs-3\" *ngIf=\"encounterList.length\">\r\n          <label for=\"name\" class=\"form-label\">Visit#</label>\r\n          &nbsp;\r\n          <p-dropdown [options]=\"encounterList\" (onChange)=\"ChangeMedicationList($event, dd)\" #dd\r\n            [(ngModel)]=\"encounterSelected\" optionLabel=\"id\"></p-dropdown>\r\n        </div>\r\n        <div class=\"col-xs-2\">\r\n          <p-button label=\"Add\" [disabled]=\"!encounterList.length\" (click)=\"isSaved = false;displayMedicationOrderDialog = true\"></p-button>\r\n        </div>\r\n        <div class=\"col-xs-3\">\r\n          &nbsp;\r\n        </div>          \r\n        <div class=\"col-xs-12\">\r\n          <br/>\r\n          <span *ngIf=\"isSaved\" style=\"color: green\">\r\n            <h5>Medication Request Saved Successfully.</h5>\r\n          </span>\r\n          <br/>\r\n          <table class=\"table table-striped\" style=\"border: 1px solid #ccc\">\r\n            <thead>\r\n              <tr>\r\n                <th>Patient ID</th>\r\n                <th>PatientName</th>\r\n                <th>MedicationReqID</th>\r\n                <th>Medication Item</th>\r\n                <th>DosageInstruction</th>\r\n                <th>Category</th>\r\n                <th>AuthorisedDate</th>\r\n                <th>Status</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let medication of dataSource\">\r\n                <td>{{ medication.PatientID }}</td>\r\n                <td width=\"150px\">{{ medication.PatientName }}</td>\r\n                <td>{{ medication.MedicationReqID }}</td>\r\n                <td>{{ medication.MedicationItem }}</td>\r\n                <td>{{ medication.DosageInstruction }}</td>\r\n                <td>{{ medication.Category }}</td>\r\n                <td width=\"170px\">{{ medication.AuthorisedDate }}</td>\r\n                <td>{{ medication.Status }}</td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </mat-tab>\r\n  </mat-tab-group>\r\n</div>\r\n\r\n<p-dialog [(visible)]=\"displayDialog\" [style]=\"{width: '550px'}\" [modal]=\"true\" header=\"Connect Patient\" class=\"dialog\"\r\n    [baseZIndex]=\"10000\" [draggable]=\"false\" [resizable]=\"false\">\r\n    <div class=\"container\">\r\n            <div class=\"row\" style=\"padding-top: 10px;\">\r\n                <div class=\"col-xs-3\" style=\"text-align: right;\">\r\n                    <label for=\"name\" class=\"form-label\">Pump Name</label>\r\n                </div>\r\n                <div class=\"col-xs-5\">\r\n                  <input type=\"text\" style=\"width: 275px;height:32px\" class=\"form-control\" id=\"name\" value=\"{{pumpMapDetails.pumpName}}\" readonly = true disabled=true/>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\" style=\"padding-top: 25px;\">\r\n              <div class=\"col-xs-3\" style=\"text-align: right;\">\r\n                  <label for=\"name\" class=\"form-label\">Start Type</label>\r\n              </div>\r\n              <div class=\"col-xs-5\">\r\n                  <mat-button-toggle-group #pumpStartTypeButtonToggle=\"matButtonToggleGroup\" (change)=\"onValChange(pumpStartTypeButtonToggle.value)\" value=\"{{pumpMapDetails.pumpStartType}}\">\r\n                    <mat-button-toggle value=\"auto\">Auto</mat-button-toggle>\r\n                    <mat-button-toggle value=\"manual\">Manual</mat-button-toggle>\r\n                  </mat-button-toggle-group>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\" style=\"padding-top: 25px;\">\r\n              <div class=\"col-xs-3\" style=\"text-align: right;\">\r\n                <label for=\"name\" class=\"form-label\">Patient Name</label>\r\n              </div>\r\n              <div class=\"col-xs-7\">\r\n                <p-autoComplete [inputStyle]=\"{'width': '275px','height':'32px'}\" [(ngModel)]=\"patientName\" [suggestions]=\"selectedPatient\" (completeMethod)=\"searchItem($event)\" (onSelect)=\"onSelectDropdown()\" [minLength]=\"3\" placeholder=\"Search patient by name\"></p-autoComplete>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\" style=\"padding-top: 25px;\">\r\n              <div class=\"col-xs-3\" style=\"text-align: right;\">\r\n                <label class=\"form-label\" >Bed No</label>\r\n              </div>\r\n              <div class=\"col-xs-7\">\r\n                  <p-autoComplete [inputStyle]=\"{'width': '250px','height':'32px'}\" [(ngModel)]=\"bedName\" [suggestions]=\"bedNames\" (completeMethod)=\"filterBedNames()\" [dropdown]=\"true\" (onSelect)=\"onSelectDropdown()\" placeholder=\"Select bed number\">\r\n                  <ng-template let-bedName pTemplate=\"item\">\r\n                      <div>\r\n                          <div>{{bedName}}</div>\r\n                      </div>\r\n                  </ng-template>\r\n              </p-autoComplete>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\" style=\"padding-top: 25px;\">\r\n              <div class=\"col-xs-3\" style=\"text-align: right;\">\r\n                <label class=\"form-label\" >IV site</label>\r\n              </div>\r\n              <div class=\"col-xs-7\">\r\n                <p-autoComplete [inputStyle]=\"{'width': '250px','height':'32px'}\"  [(ngModel)]=\"ivSite\" [suggestions]=\"ivSites\" (completeMethod)=\"filterIvSites()\" (onSelect)=\"onSelectDropdown()\" [dropdown]=\"true\" placeholder=\"Select IV site\">\r\n                <ng-template let-ivSite pTemplate=\"item\">\r\n                <div>\r\n                    <div>{{ivSite}}</div>\r\n                </div>\r\n              </ng-template>\r\n              </p-autoComplete>\r\n              </div>\r\n          </div>\r\n    </div>\r\n    <p-footer>\r\n      <p-button label=\"Connect\" [disabled]=\"!(patients?.id && patientName && bedName && ivSite)\" (click)=\"submitPatientData()\" ></p-button>\r\n    </p-footer>\r\n</p-dialog>\r\n<p-dialog [(visible)]=\"displayMedicationOrderDialog\" [style]=\"{width: '80%'}\" [modal]=\"true\" header=\"Medication Order\"\r\n  class=\"dialog\" [baseZIndex]=\"10000\" [draggable]=\"false\" [resizable]=\"false\">\r\n  <div class=\"container-wide\">\r\n    <app-medication-request [encounterId]=\"encounterSelected\" [patientId]=\"selectedPatientID\"\r\n      (buttonClicked)=\"cancelMedicationOrder($event)\"></app-medication-request>\r\n  </div>\r\n  <br />\r\n</p-dialog>"

/***/ }),

/***/ "./src/app/patient-map/patient-map.component.ts":
/*!******************************************************!*\
  !*** ./src/app/patient-map/patient-map.component.ts ***!
  \******************************************************/
/*! exports provided: PatientMapComponent, PumpMapDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientMapComponent", function() { return PatientMapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_medication_result__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/medication-result */ "./src/app/models/medication-result.ts");
/* harmony import */ var _services_medication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/medication.service */ "./src/app/services/medication.service.ts");
/* harmony import */ var _models_PumpMapDetails__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/PumpMapDetails */ "./src/app/models/PumpMapDetails.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PumpMapDetails", function() { return _models_PumpMapDetails__WEBPACK_IMPORTED_MODULE_5__["PumpMapDetails"]; });

/* harmony import */ var _services_login_login_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/login/login.service */ "./src/app/services/login/login.service.ts");







var PatientMapComponent = /** @class */ (function () {
    function PatientMapComponent(medicationService, router, login) {
        this.medicationService = medicationService;
        this.router = router;
        this.login = login;
        this.dataSource = [];
        this.selectedPatient = [];
        this.selectedPatientId = '';
        this.startDateTime = '';
        this.encounterList = [];
        this.ivSites = [];
        this.bedNames = [];
        this.displayDialog = false;
        this.displayMedicationOrderDialog = false;
        this.itemLoaded = true;
        this.pumpStartTypeButtonToggle = 'manual';
        this.patientName = '';
        this.bedName = '';
        this.ivSite = '';
        this.isSubmitButtonDisabled = true;
        this.pumpMapDetails = new _models_PumpMapDetails__WEBPACK_IMPORTED_MODULE_5__["PumpMapDetails"]();
        this.isSaved = false;
        this.selectedPatientID = '';
        this.patientId = '';
        this.allPumpStatus = [];
        this.pumpList = [
            {
                'patientName': '',
                'pumpStartType': '',
                'patientId': '',
                'pumpName': 'Pump-A',
                'bednumber': '',
                'ivSite': '',
                'pumpStatus': 'A',
            },
            {
                'patientName': '',
                'pumpStartType': '',
                'patientId': '',
                'pumpName': 'Pump-B',
                'bednumber': '',
                'ivSite': '',
                'pumpStatus': 'A',
            },
            {
                'patientName': '',
                'pumpStartType': '',
                'patientId': '',
                'pumpName': 'Pump-C',
                'bednumber': '',
                'ivSite': '',
                'pumpStatus': 'A',
            },
            {
                'patientName': '',
                'pumpStartType': '',
                'patientId': '',
                'pumpName': 'Pump-D',
                'bednumber': '',
                'ivSite': '',
                'pumpStatus': 'A',
            },
            {
                'patientName': '',
                'pumpStartType': '',
                'patientId': '',
                'pumpName': 'Pump-E',
                'bednumber': '',
                'ivSite': '',
                'pumpStatus': 'A',
            },
            {
                'patientName': '',
                'pumpStartType': '',
                'patientId': '',
                'pumpName': 'Pump-F',
                'bednumber': '',
                'ivSite': '',
                'pumpStatus': 'A',
            },
        ];
    }
    PatientMapComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.medicationService.getPumpDetails().subscribe(function (response) {
            var resultData = _models_PumpMapDetails__WEBPACK_IMPORTED_MODULE_5__["PatientConvert"].toPatientDetails(JSON.stringify(response));
            console.log(resultData);
            if (resultData) {
                _this.updatePumpMapDetails(resultData);
            }
        });
        this.interval = setInterval(function () {
            _this.medicationService.getAllPumpStatus().subscribe(function (response) {
                _this.allPumpStatus = response;
                if (_this.allPumpStatus.length > 0) {
                    _this.itemLoaded = false;
                }
            });
        }, 5000);
    };
    PatientMapComponent.prototype.valueChanged = function (value) {
        this.patientId = value;
    };
    PatientMapComponent.prototype.updatePumpMapDetails = function (resultData) {
        for (var _i = 0, resultData_1 = resultData; _i < resultData_1.length; _i++) {
            var patient = resultData_1[_i];
            for (var pumpItem in this.pumpList) {
                if (patient.pumpname == this.pumpList[pumpItem].pumpName) {
                    this.pumpList[pumpItem].pumpStatus = patient.pumpstatus;
                    this.pumpList[pumpItem].patientName = patient.patientname;
                    this.pumpList[pumpItem].patientId = patient.patientid;
                    this.pumpList[pumpItem].bednumber = patient.bednumber;
                    this.pumpList[pumpItem].ivSite = patient.ivsite;
                }
            }
        }
    };
    PatientMapComponent.prototype.getPatientInfo = function (patientDetails) {
        for (var _i = 0, patientDetails_1 = patientDetails; _i < patientDetails_1.length; _i++) {
            var patient = patientDetails_1[_i];
            var name_1 = patient.resource.name.map(function (a) { return a.text; });
            this.selectedPatient.push(name_1);
        }
    };
    PatientMapComponent.prototype.searchItem = function (event) {
        var _this = this;
        this.isSaved = false;
        this.medicationService.getPatientInfo(event.query).subscribe(function (response) {
            _this.patients = JSON.parse(JSON.stringify(response));
            if (_this.patients != null && _this.patients.entry != null && _this.patients.entry.length > 0) {
                _this.getPatientInfo(_this.patients.entry);
                _this.selectedPatient = _this.selectedPatient.filter(function (a) { return a.filter(function (b) { return b.toLowerCase().includes(event.query.toLowerCase()); }); });
            }
        });
    };
    PatientMapComponent.prototype.filterBedNames = function () {
        this.bedNames = ['Bed 1', 'Bed 2', 'Bed 3', 'Bed 4', 'Bed 5', 'Bed 6'];
    };
    PatientMapComponent.prototype.filterIvSites = function () {
        this.ivSites = ['Hand', 'Wrist', 'Foot', 'Leg', 'Scalp'];
    };
    PatientMapComponent.prototype.openMapPatientDialog = function (pumpData) {
        if (pumpData.pumpStatus && pumpData.pumpStatus == 'L' || pumpData.pumpStatus == 'R' || pumpData.pumpStatus == 'S' || pumpData.pumpStatus == 'C') {
            var navigationDetails = ['/medication-orders'];
            this.router.navigate(navigationDetails, { queryParams: pumpData });
        }
        else {
            this.displayDialog = true;
            this.patientName = '';
            this.bedName = '';
            this.ivSite = '';
            this.isSubmitButtonDisabled = true;
            this.pumpMapDetails = new _models_PumpMapDetails__WEBPACK_IMPORTED_MODULE_5__["PumpMapDetails"]();
            this.pumpMapDetails.pumpStartType = this.pumpStartTypeButtonToggle;
            this.pumpMapDetails.pumpName = pumpData.pumpName;
        }
    };
    PatientMapComponent.prototype.closeMapPatientDialog = function () {
        this.displayDialog = false;
        this.patients = null;
    };
    PatientMapComponent.prototype.submitPatientData = function () {
        if (this.patientName && this.ivSite && this.bedName) {
            this.pumpMapDetails.patientId = this.selectedPatientId;
            this.pumpMapDetails.patientName = this.patientName;
            this.pumpMapDetails.pumpStartType = this.pumpStartTypeButtonToggle;
            this.pumpMapDetails.bednumber = this.bedName;
            this.pumpMapDetails.ivSite = this.ivSite;
            this.pumpMapDetails.pumpStatus = 'L';
            for (var _i = 0, _a = this.pumpList; _i < _a.length; _i++) {
                var pumpItem = _a[_i];
                if (pumpItem.pumpName == this.pumpMapDetails.pumpName) {
                    pumpItem.pumpStatus = 'L';
                    pumpItem.patientId = this.selectedPatientId;
                    pumpItem.patientName = this.patientName;
                    pumpItem.pumpStartType = this.pumpStartTypeButtonToggle;
                    pumpItem.bednumber = this.bedName;
                    pumpItem.ivSite = this.ivSite;
                }
            }
            this.medicationService.updatePatientDetails(this.pumpMapDetails).subscribe(function (response) {
            });
            this.closeMapPatientDialog();
        }
    };
    PatientMapComponent.prototype.onSelectDropdown = function () {
        var _this = this;
        if (this.patients != null && this.patients.entry != null) {
            var currentPatient = this.patients.entry.filter(function (a) { return a.resource.name.find(function (b) { return b.text.includes(_this.patientName); }); });
            if (currentPatient[0]) {
                this.selectedPatientId = currentPatient[0].resource.id;
                this.updateSubmitButtonDisabledProperty();
            }
        }
    };
    PatientMapComponent.prototype.onSelectPatientName = function (event) {
        this.pumpMapDetails.patientId = this.patients.id;
        this.pumpMapDetails.patientName = event[0];
        this.patientName = event[0];
        this.updateSubmitButtonDisabledProperty();
    };
    PatientMapComponent.prototype.onSelectBedName = function (event) {
        this.bedName = event;
        this.pumpMapDetails.bednumber = event;
        this.updateSubmitButtonDisabledProperty();
    };
    PatientMapComponent.prototype.onSelectIvSite = function (event) {
        this.ivSite = event;
        this.pumpMapDetails.ivSite = event;
        this.updateSubmitButtonDisabledProperty();
    };
    PatientMapComponent.prototype.onValChange = function (val) {
        this.pumpStartTypeButtonToggle = val;
    };
    PatientMapComponent.prototype.updateSubmitButtonDisabledProperty = function () {
        if (!(this.patients.id && this.patientName && this.pumpStartTypeButtonToggle && this.bedName && this.ivSite && this.pumpMapDetails.pumpName)) {
            this.isSubmitButtonDisabled = false;
        }
    };
    PatientMapComponent.prototype.showMappedPatientDetails = function () {
        var navigationDetails = ['/medication-orders'];
        this.router.navigate(navigationDetails);
    };
    PatientMapComponent.prototype.cancelMedicationOrder = function (event) {
        this.isSaved = true;
        this.displayMedicationOrderDialog = false;
        this.getAssociatedMedicalRequests(this.patients.entry, this.patientName);
    };
    PatientMapComponent.prototype.getAssociatedMedicalRequests = function (patientDetails, selectedName) {
        var _this = this;
        for (var _i = 0, patientDetails_2 = patientDetails; _i < patientDetails_2.length; _i++) {
            var patient = patientDetails_2[_i];
            var id = patient.resource.id;
            var name = patient.resource.name[0].text;
            if (selectedName == name) {
                this.selectedPatientID = id;
                this.medicationService.getMedicationResult(id).subscribe(function (response) {
                    var resultData = _models_medication_result__WEBPACK_IMPORTED_MODULE_3__["Convert"].toMedicationRequest(JSON.stringify(response));
                    if (resultData != null && resultData.entry != null && resultData.entry.length > 0) {
                        _this.bindMedicationValue(resultData.entry);
                    }
                });
            }
            this.getEncounterByPatientId(id);
        }
    };
    PatientMapComponent.prototype.bindMedicationValue = function (sources) {
        for (var _i = 0, sources_1 = sources; _i < sources_1.length; _i++) {
            var data = sources_1[_i];
            var medicationData = { PatientID: '', PatientName: '', MedicationReqID: '', MedicationItem: '', DosageInstruction: '', Category: '', AuthorisedDate: '', Status: '' };
            medicationData.PatientName = data.resource.subject.display;
            medicationData.PatientID = data.resource.subject.reference.split('/')[1];
            medicationData.MedicationReqID = data.resource.id;
            medicationData.MedicationItem = data.resource.medicationCodeableConcept.text;
            medicationData.DosageInstruction = data.resource.dosageInstruction[0].text;
            medicationData.Category = data.resource.category[0].coding[0].display;
            medicationData.AuthorisedDate = data.resource.authoredOn;
            medicationData.Status = data.resource.status;
            this.dataSource.push(medicationData);
        }
    };
    PatientMapComponent.prototype.getMedicationResult = function (event) {
        this.dataSource = [];
        this.getAssociatedMedicalRequests(this.patients.entry, event[0]);
    };
    PatientMapComponent.prototype.getEncounterByPatientId = function (patientId) {
        var _this = this;
        this.encounterList = [];
        this.medicationService.getEncountersByPatientId(patientId).subscribe(function (response) {
            var resultData = _models_medication_result__WEBPACK_IMPORTED_MODULE_3__["Convert"].toMedicationRequest(JSON.stringify(response));
            if (resultData != null && resultData.entry != null && resultData.entry.length > 0) {
                for (var _i = 0, _a = resultData.entry; _i < _a.length; _i++) {
                    var encounter = _a[_i];
                    _this.encounterList.push({ id: encounter.resource.id });
                }
            }
        });
    };
    PatientMapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-patient-map',
            template: __webpack_require__(/*! ./patient-map.component.html */ "./src/app/patient-map/patient-map.component.html"),
            styles: [__webpack_require__(/*! ./patient-map.component.css */ "./src/app/patient-map/patient-map.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_medication_service__WEBPACK_IMPORTED_MODULE_4__["MedicationService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_login_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"]])
    ], PatientMapComponent);
    return PatientMapComponent;
}());




/***/ }),

/***/ "./src/app/pumpdetails/pumpdetails.component.css":
/*!*******************************************************!*\
  !*** ./src/app/pumpdetails/pumpdetails.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "th {\r\n    font-weight: bold;\r\n    background: #006bb3;\r\n    color: white;\r\n}\r\n\r\n.row-highlight {\r\n    background: lightgreen;\r\n}\r\n\r\n.contact-info {\r\n    vertical-align: middle;\r\n    margin-right: 10px;\r\n    color: white;\r\n}\r\n\r\n.avator {\r\n    background: grey;\r\n    width: 90px;\r\n    height: 90px;\r\n    border-radius: 50%;\r\n    text-align: center;\r\n    line-height: 90px;\r\n    display: inline-block;\r\n    margin-right: 15px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHVtcGRldGFpbHMvcHVtcGRldGFpbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsYUFBYTtDQUNoQjs7QUFFRDtJQUNJLHVCQUF1QjtDQUMxQjs7QUFFRDtJQUNJLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsYUFBYTtDQUNoQjs7QUFFRDtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixtQkFBbUI7Q0FDdEIiLCJmaWxlIjoic3JjL2FwcC9wdW1wZGV0YWlscy9wdW1wZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGgge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDA2YmIzO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ucm93LWhpZ2hsaWdodCB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaWdodGdyZWVuO1xyXG59XHJcblxyXG4uY29udGFjdC1pbmZvIHtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5hdmF0b3Ige1xyXG4gICAgYmFja2dyb3VuZDogZ3JleTtcclxuICAgIHdpZHRoOiA5MHB4O1xyXG4gICAgaGVpZ2h0OiA5MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGluZS1oZWlnaHQ6IDkwcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pumpdetails/pumpdetails.component.html":
/*!********************************************************!*\
  !*** ./src/app/pumpdetails/pumpdetails.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"color: #343a40;background-color:  #006bb3;width: 100%;height: 50px;\">\r\n  <div style=\"float: left;padding: 6px 3px 1px 9px;color: floralwhite;font-size: 20px;\">\r\n    <img src=\"assets/img/ACL Logo.svg\">\r\n  </div>\r\n  <div style=\"float: left;padding: 12px;color: floralwhite;font-size: 18px;\">ACL INFUSION PUMP</div>\r\n</div>\r\n\r\n<div class=\"row col-xs-12\" [ngStyle]=\"{'height': screenHeight - 50 + 'px'}\">\r\n  <div class=\"column col-xs-3\" style=\"text-align: center;padding: 1%;border: solid 0.01px #cccccc;margin: 4%;\">\r\n        <img *ngIf=\"(pumpMapDetails.pumpStatus == 'L' && pumpStatus.status == undefined || pumpStatus.status == 'L')\" src=\"assets/img/iv_pump_connected.gif\" alt=\"Img\" style=\"width: 150px;height: 500px;\">\r\n        <img *ngIf=\"(pumpStatus.status == 'R')\" src=\"assets/img/iv_pump_running.gif\" alt=\"Img\" style=\"width: 150px;height: 500px;\">\r\n        <img *ngIf=\"(pumpStatus.status == 'S')\" src=\"assets/img/iv_pump_stopped.gif\" alt=\"Img\" style=\"width: 150px;height: 500px;\">\r\n        <img *ngIf=\"(pumpStatus.status == 'C')\" src=\"assets/img/iv_pump_avaliable.png\" alt=\"Img\" style=\"width: 150px;height: 500px;\">\r\n        <div class=\"col-xs-12\" style=\"text-align: center;margin-top: 30px;font-weight: bold;color: #006bb3;font-size: 20px;\">\r\n          <span class=\"\">{{pumpMapDetails.pumpName}}</span> \r\n        </div>\r\n        <div class=\"col-xs-12 patient-info\" style=\"margin-top: 10px;\">\r\n          <label>Bed No: </label>\r\n          <span class=\"\" style=\"text-align: right; font-size: 14px; color: black;margin-right: 10px;\">  {{pumpMapDetails.bednumber}}</span>\r\n          <label>IV Site: </label>\r\n          <span class=\"\" style=\"text-align: right; font-size: 14px; color: black;margin-right: 10px;\">  {{pumpMapDetails.ivSite}}</span>\r\n        </div>\r\n        <div *ngIf=\"(pumpStatus.status == 'R' || pumpStatus.status == 'S')\" class=\"times col-xs-6\" style=\"margin-left: 25%;margin-top: 10%;background: #313b3f;padding: 8px;border-radius: 15px\">\r\n          <span style=\"margin-left: 10px;color:white;font-size: 25px;\">{{pumpStatus.runingtime.split('T')[1]}}</span>\r\n        </div>\r\n  </div>\r\n  \r\n  <div class=\"col-xs-8\">\r\n    <h4 style=\"color: #999;font-weight: bold;margin: 15px;margin-bottom: 0;\">Patient Info</h4>\r\n    <div class=\"col-xs-12\" style=\"margin: 15px;background: #006bb3;border-radius: 10px;margin-bottom: 20px;\">\r\n      <div class=\"col-xs-12\" style=\"color: white;padding: 20px\">\r\n        <h3 class=\"avator\">{{pumpMapDetails.patientName[0]}}</h3>\r\n        <div style=\"display: inline-block;vertical-align: middle;\">\r\n          <h3 style=\"display: inline-block\">{{pumpMapDetails.patientName}}</h3>\r\n          <div style=\"color: white;\">\r\n            <span>Female - </span>\r\n            <span>25 June 1997</span>\r\n          </div> \r\n          <div style=\"margin-top: 10px;\">\r\n            <mat-icon class=\"contact-info\">mail</mat-icon>\r\n            <span class=\"contact-info\">test@relatient.net</span>\r\n            <mat-icon class=\"contact-info\">call</mat-icon>\r\n            <span class=\"contact-info\">9876543211</span>\r\n            <mat-icon class=\"contact-info\">location_on</mat-icon>\r\n            <span class=\"contact-info\">Washington - 600002</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <h4 style=\"color: #999;font-weight: bold;margin: 15px;\">Medications</h4>\r\n    <div class=\"col-xs-12\" style=\"padding: 0;margin: 15px;margin-top: 0;\">\r\n        <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8 demo-table col-xs-12\">\r\n          <ng-container matColumnDef=\"drug\">\r\n            <th mat-header-cell *matHeaderCellDef width=\"30%\"> Drug </th>\r\n            <td mat-cell *matCellDef=\"let element\" [ngClass]=\"isMedicationStarted && rowId == element.id ? 'row-highlight' : ''\"> {{element.drug}} </td>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"doseQuantity\">\r\n            <th mat-header-cell *matHeaderCellDef width=\"10%\"> Dose Quantity </th>\r\n            <td mat-cell *matCellDef=\"let element\" [ngClass]=\"isMedicationStarted && rowId == element.id ? 'row-highlight' : ''\"> {{element.doseQuantity}} </td>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"rateQuantity\">\r\n            <th mat-header-cell *matHeaderCellDef width=\"10%\"> Rate Quantity </th>\r\n            <td mat-cell *matCellDef=\"let element\" [ngClass]=\"isMedicationStarted && rowId == element.id ? 'row-highlight' : ''\"> {{element.rateQuantity}} </td>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"startTime\">\r\n            <th mat-header-cell *matHeaderCellDef width=\"15%\"> Start Time </th>\r\n            <td mat-cell *matCellDef=\"let element\" [ngClass]=\"isMedicationStarted && rowId == element.id ? 'row-highlight' : ''\"> {{element.startTime}} </td>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"frequency\">\r\n            <th mat-header-cell *matHeaderCellDef width=\"10%\"> Frequency </th>\r\n            <td mat-cell *matCellDef=\"let element\" [ngClass]=\"isMedicationStarted && rowId == element.id ? 'row-highlight' : ''\"> {{element.frequency}} </td>\r\n          </ng-container>\r\n          \r\n          <ng-container matColumnDef=\"status\">\r\n            <th mat-header-cell *matHeaderCellDef width=\"7%\"> Status </th>\r\n            <td mat-cell *matCellDef=\"let element\" [ngClass]=\"isMedicationStarted && rowId == element.id ? 'row-highlight' : ''\" [ngStyle]=\"{'color': (element.status == 'Active') ? 'green' : 'orange', 'font-weight': '500'}\"> {{element.status}} </td>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"start\">\r\n            <th mat-header-cell *matHeaderCellDef width=\"5%\"> Start </th>\r\n            <td mat-cell *matCellDef=\"let element\" (click)=\"startMedication(element)\" [ngClass]=\"isMedicationStarted && rowId == element.id ? 'row-highlight' : ''\"> \r\n              <mat-icon [ngStyle]=\"{'color': (isMedicationStarted && rowId == element.id) ? '#ccc' : 'green', 'font-size': '35px', 'font-weight': 'bold'}\">arrow_right</mat-icon>\r\n            </td>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"stop\">\r\n            <th mat-header-cell *matHeaderCellDef width=\"5%\"> Stop </th>\r\n            <td mat-cell *matCellDef=\"let element\" (click)=\"stopMedication(element.id)\" [ngClass]=\"isMedicationStarted && rowId == element.id ? 'row-highlight' : ''\"> \r\n              <mat-icon [ngStyle]=\"{'color': (isMedicationStarted && rowId == element.id) ? 'red' : '#ccc'}\">stop</mat-icon>\r\n            </td>\r\n          </ng-container>\r\n        \r\n          <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n          <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n        </table>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pumpdetails/pumpdetails.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pumpdetails/pumpdetails.component.ts ***!
  \******************************************************/
/*! exports provided: MedicationModel, PumpdetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicationModel", function() { return MedicationModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PumpdetailsComponent", function() { return PumpdetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_medication_result__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/medication-result */ "./src/app/models/medication-result.ts");
/* harmony import */ var _patient_map_patient_map_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../patient-map/patient-map.component */ "./src/app/patient-map/patient-map.component.ts");
/* harmony import */ var _services_medication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/medication.service */ "./src/app/services/medication.service.ts");
/* harmony import */ var _models_medication_order_request__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/medication-order-request */ "./src/app/models/medication-order-request.ts");







var MedicationModel = /** @class */ (function () {
    function MedicationModel() {
    }
    return MedicationModel;
}());

var PumpdetailsComponent = /** @class */ (function () {
    function PumpdetailsComponent(route, medicationService) {
        this.route = route;
        this.medicationService = medicationService;
        this.isMedicationStarted = false;
        this.pumpMapDetails = new _patient_map_patient_map_component__WEBPACK_IMPORTED_MODULE_4__["PumpMapDetails"]();
        this.displayedColumns = ['drug', 'doseQuantity', 'rateQuantity', 'startTime', 'frequency', 'status', 'start', 'stop'];
        this.dataSource = [];
        this.isDataLoaded = false;
        this.pumpStatus = new _models_medication_order_request__WEBPACK_IMPORTED_MODULE_6__["MedicationOrderRequest"]();
    }
    PumpdetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.screenHeight = window.innerHeight;
        this.route.queryParams.subscribe(function (params) {
            _this.pumpMapDetails = JSON.parse(JSON.stringify(params));
        });
        this.medicationService.getPumpStatus(this.pumpMapDetails.pumpName).subscribe(function (response) {
            _this.pumpStatus = response;
        });
        this.interval = setInterval(function () {
            _this.medicationService.getPumpStatus(_this.pumpMapDetails.pumpName).subscribe(function (response) {
                _this.pumpStatus = response;
            });
        }, 5000);
        this.medicationService.getMedicationResult(this.pumpMapDetails.patientId).subscribe(function (response) {
            var resultData = _models_medication_result__WEBPACK_IMPORTED_MODULE_3__["Convert"].toMedicationRequest(JSON.stringify(response));
            if (typeof (resultData.entry) !== "undefined") {
                _this.prepareDataSource(resultData.entry);
            }
        });
    };
    PumpdetailsComponent.prototype.prepareDataSource = function (dataList) {
        var count = 0;
        var test = [];
        dataList = dataList.filter(function (x) { return x.resource.dosageInstruction[0].route != null && x.resource.dosageInstruction[0].route.text.includes("IV"); });
        // console.log(dataList)
        for (var _i = 0, dataList_1 = dataList; _i < dataList_1.length; _i++) {
            var data = dataList_1[_i];
            var medicationData = new MedicationModel();
            medicationData.id = (count++).toString();
            medicationData.drug = data.resource.medicationCodeableConcept.text;
            medicationData.doseQuantity = data.resource.dosageInstruction[0].doseAndRate && data.resource.dosageInstruction[0].doseAndRate[0].doseQuantity.value + ' ' + data.resource.dosageInstruction[0].doseAndRate[0].doseQuantity.unit;
            medicationData.rateQuantity = data.resource.dosageInstruction[0].doseAndRate && data.resource.dosageInstruction[0].doseAndRate[0].rateQuantity && data.resource.dosageInstruction[0].doseAndRate[0].rateQuantity.value + ' ' + data.resource.dosageInstruction[0].doseAndRate[0].rateQuantity.unit;
            medicationData.startTime = data.resource.dosageInstruction[0].timing.repeat.boundsPeriod.start;
            medicationData.status = data.resource.status;
            medicationData.start = '';
            medicationData.stop = '';
            medicationData.frequency = data.resource.dosageInstruction[0].timing.code != null ? data.resource.dosageInstruction[0].timing.code.text : '-';
            test.push(medicationData);
        }
        this.dataSource = test;
    };
    PumpdetailsComponent.prototype.startMedication = function (data) {
        this.isMedicationStarted = true;
        this.rowId = data.id;
        var pumpStartData = {
            "pumpdetailid": this.pumpMapDetails.pumpName,
            "patientname": this.pumpMapDetails.patientName,
            "medication": data.drug,
            "startdatetime": data.startTime,
            "dosage": data.rateQuantity.split(' ')[1],
            "totalVolume": data.doseQuantity.split(' ')[0],
            "infusedvolume": 0.0,
            "ratevalue": data.rateQuantity.split(' ')[0],
            "ratedosage": data.doseQuantity.split(' ')[1],
            "ratehour": 1.0,
            "ratecalculatevalue": 0,
            "bedNo": this.pumpMapDetails.bednumber,
            "status": "L"
        };
        this.medicationService.startPump(pumpStartData).subscribe(function (response) { });
    };
    PumpdetailsComponent.prototype.stopMedication = function (id) {
        this.isMedicationStarted = false;
        this.rowId = id;
        clearInterval(this.interval);
        this.medicationService.stopPump(this.pumpMapDetails.pumpName).subscribe(function (response) { });
    };
    PumpdetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pumpdetails',
            template: __webpack_require__(/*! ./pumpdetails.component.html */ "./src/app/pumpdetails/pumpdetails.component.html"),
            styles: [__webpack_require__(/*! ./pumpdetails.component.css */ "./src/app/pumpdetails/pumpdetails.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_medication_service__WEBPACK_IMPORTED_MODULE_5__["MedicationService"]])
    ], PumpdetailsComponent);
    return PumpdetailsComponent;
}());



/***/ }),

/***/ "./src/app/services/http-interceptor/http-interceptor.ts":
/*!***************************************************************!*\
  !*** ./src/app/services/http-interceptor/http-interceptor.ts ***!
  \***************************************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _login_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../login/login.service */ "./src/app/services/login/login.service.ts");






var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(router, login) {
        this.router = router;
        this.login = login;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        // Get the auth token from the service.
        var authToken = JSON.parse(localStorage.getItem('tokenResponse'));
        if (authToken != null && authToken['access_token'] && req.url.includes('https://fhir-ehr.cerner.com/')) {
            req = req.clone({ setHeaders: { Authorization: 'Bearer ' + authToken['access_token'] } });
        }
        else {
            if (req.url.includes('/pump/get')) {
                if (authToken == null || authToken == undefined) {
                    this.login.setToken();
                }
            }
        }
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            if (error.status === 401) {
                //this.login.setToken();
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }));
    };
    AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _login_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"]])
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "./src/app/services/http-interceptor/index.ts":
/*!****************************************************!*\
  !*** ./src/app/services/http-interceptor/index.ts ***!
  \****************************************************/
/*! exports provided: httpInterceptorProviders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpInterceptorProviders", function() { return httpInterceptorProviders; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _http_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http-interceptor */ "./src/app/services/http-interceptor/http-interceptor.ts");


var httpInterceptorProviders = [
    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"], useClass: _http_interceptor__WEBPACK_IMPORTED_MODULE_1__["AuthInterceptor"], multi: true }
];


/***/ }),

/***/ "./src/app/services/login/login.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/login/login.service.ts ***!
  \*************************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_models_accesstoken__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/accesstoken */ "./src/app/models/accesstoken.ts");
/* harmony import */ var src_config_endpoint__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/config/endpoint */ "./src/config/endpoint.ts");





var LoginService = /** @class */ (function () {
    function LoginService(httpClient, endpoints) {
        this.httpClient = httpClient;
        this.endpoints = endpoints;
        this.tokenDetails = new src_app_models_accesstoken__WEBPACK_IMPORTED_MODULE_3__["AccessToken"]();
    }
    LoginService.prototype.setToken = function () {
        this.getToken(this.tokenDetails).subscribe(function (res) {
            localStorage.setItem('tokenResponse', JSON.stringify(res));
        });
    };
    LoginService.prototype.getToken = function (tokenDetails) {
        var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        header.set('Access-Control-Allow-Origin', '*');
        var bodyString = 'grant_type=' + tokenDetails.grant_type + '&refresh_token=' + tokenDetails.refresh_token;
        var options = { headers: header };
        return this.httpClient.post(this.endpoints.authorization, bodyString, options);
    };
    LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], src_config_endpoint__WEBPACK_IMPORTED_MODULE_4__["ApiEndPoint"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/services/medication.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/medication.service.ts ***!
  \************************************************/
/*! exports provided: MedicationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicationService", function() { return MedicationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_config_endpoint__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/config/endpoint */ "./src/config/endpoint.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");





var MedicationService = /** @class */ (function () {
    function MedicationService(httpClient, endpointService) {
        this.httpClient = httpClient;
        this.endpointService = endpointService;
        this.apiUrl = '';
        this.pumpUrl = 'http://52.3.72.133:5000/';
    }
    MedicationService.prototype.getMedicationResult = function (patientId) {
        this.apiUrl = this.endpointService.getMedication;
        return this.httpClient.get(this.apiUrl + patientId);
    };
    MedicationService.prototype.getPatientInfo = function (patientName) {
        this.apiUrl = this.endpointService.getPatientList;
        return this.httpClient.get(this.apiUrl + patientName);
    };
    MedicationService.prototype.updatePatientDetails = function (patientDetails) {
        return this.httpClient.post(this.pumpUrl + "pump/create", patientDetails);
    };
    MedicationService.prototype.getPumpDetails = function () {
        return this.httpClient.get(this.pumpUrl + "pump/get");
    };
    MedicationService.prototype.startPump = function (pumpData) {
        return this.httpClient.post(this.pumpUrl + "pump/start", pumpData);
    };
    MedicationService.prototype.stopPump = function (pumpName) {
        return this.httpClient.post(this.pumpUrl + "pump/stop", pumpName);
    };
    MedicationService.prototype.getPumpStatus = function (pumpName) {
        return this.httpClient.get(this.pumpUrl + "tube/get?pumpname=" + pumpName);
    };
    MedicationService.prototype.getEncountersByPatientId = function (patientId) {
        this.apiUrl = this.endpointService.encounter;
        return this.httpClient.get(this.apiUrl + patientId);
    };
    MedicationService.prototype.createMedicationOrder = function (medicationRequestDetail) {
        console.log(medicationRequestDetail);
        this.apiUrl = this.endpointService.medicationRequest;
        return this.httpClient.post(this.apiUrl, medicationRequestDetail, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', 'Bearer ' + src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].bearerToken)
                .set('Access-Control-Allow-Origin', '*')
        });
    };
    MedicationService.prototype.getAllPumpStatus = function () {
        return this.httpClient.get(this.pumpUrl + "tube/get/all");
    };
    MedicationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], src_config_endpoint__WEBPACK_IMPORTED_MODULE_3__["ApiEndPoint"]])
    ], MedicationService);
    return MedicationService;
}());



/***/ }),

/***/ "./src/config/endpoint.ts":
/*!********************************!*\
  !*** ./src/config/endpoint.ts ***!
  \********************************/
/*! exports provided: ApiEndPoint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiEndPoint", function() { return ApiEndPoint; });
var ApiEndPoint = /** @class */ (function () {
    function ApiEndPoint() {
        this.authToken = 'Bearer eyJraWQiOiIyMDIzLTAxLTExVDIyOjI1OjMyLjQ3My5lYyIsInR5cCI6IkpXVCIsImFsZyI6IkVTMjU2In0.eyJzdWIiOiJwb3J0YWwiLCJ1cm46Y29tOmNlcm5lcjphdXRob3JpemF0aW9uOmNsYWltcyI6eyJ2ZXIiOiIxLjAiLCJlbmNvdW50ZXIiOiI5Nzk1MzUzMCIsInRudCI6ImVjMjQ1OGYyLTFlMjQtNDFjOC1iNzFiLTBlNzAxYWY3NTgzZCIsImF6cyI6ImxhdW5jaCBvbmxpbmVfYWNjZXNzIG9wZW5pZCBwcm9maWxlIHVzZXJcL01lZGljYXRpb25SZXF1ZXN0LnJlYWQgdXNlclwvTWVkaWNhdGlvblJlcXVlc3Qud3JpdGUgdXNlclwvT2JzZXJ2YXRpb24ucmVhZCB1c2VyXC9QYXRpZW50LnJlYWQiLCJ1c2VyIjoiMTI3NDIwNjkiLCJwYXRpZW50IjoiMTI3NDI0MDAifSwiYXpwIjoiYWRmNmI4MGQtMzc1YS00OTcxLTgwZjQtYjI4MGJiZjRmOWRkIiwiaXNzIjoiaHR0cHM6XC9cL2F1dGhvcml6YXRpb24uY2VybmVyLmNvbVwvIiwiZXhwIjoxNjczNjA5NTMwLCJpYXQiOjE2NzM2MDg5MzAsImp0aSI6ImEzODI0NjBmLTk5OWQtNGFjNy1iOThhLTgwZDEwN2YxZjNjNiIsInVybjpjZXJuZXI6YXV0aG9yaXphdGlvbjpjbGFpbXM6dmVyc2lvbjoxIjp7InZlciI6IjEuMCIsInByb2ZpbGVzIjp7Im1pbGxlbm5pdW0tdjEiOnsicGVyc29ubmVsIjoiMTI3NDIwNjkiLCJlbmNvdW50ZXIiOiI5Nzk1MzUzMCJ9LCJzbWFydC12MSI6eyJwYXRpZW50cyI6WyIxMjc0MjQwMCJdLCJhenMiOiJsYXVuY2ggb25saW5lX2FjY2VzcyBvcGVuaWQgcHJvZmlsZSB1c2VyXC9NZWRpY2F0aW9uUmVxdWVzdC5yZWFkIHVzZXJcL01lZGljYXRpb25SZXF1ZXN0LndyaXRlIHVzZXJcL09ic2VydmF0aW9uLnJlYWQgdXNlclwvUGF0aWVudC5yZWFkIiwiZmhpclVzZXIiOiJQcmFjdGl0aW9uZXJcLzEyNzQyMDY5In19LCJjbGllbnQiOnsibmFtZSI6IkFDTCBJbmZ1c2lvbiBQdW1wIFYxIiwiaWQiOiJhZGY2YjgwZC0zNzVhLTQ5NzEtODBmNC1iMjgwYmJmNGY5ZGQifSwidXNlciI6eyJwcmluY2lwYWwiOiJwb3J0YWwiLCJwZXJzb25hIjoicHJvdmlkZXIiLCJpZHNwIjoiZWMyNDU4ZjItMWUyNC00MWM4LWI3MWItMGU3MDFhZjc1ODNkIiwic2Vzc2lvbklkIjoiNzg5MjAyMWItYzVkNy00ZjcyLThhNDItOTcyMDFhZjI0OWNjIiwicHJpbmNpcGFsVHlwZSI6InVzZXJuYW1lIiwicHJpbmNpcGFsVXJpIjoiaHR0cHM6XC9cL21pbGxlbm5pYS5jZXJuZXIuY29tXC9pbnN0YW5jZVwvZWMyNDU4ZjItMWUyNC00MWM4LWI3MWItMGU3MDFhZjc1ODNkXC9wcmluY2lwYWxcLzAwMDAuMDAwMC4wMEMyLjZEQjUiLCJpZHNwVXJpIjoiaHR0cHM6XC9cL21pbGxlbm5pYS5jZXJuZXIuY29tXC9hY2NvdW50c1wvYzE5NDEuY2Vybl9hYmNuLmNlcm5lcmFzcC5jb21cL2VjMjQ1OGYyLTFlMjQtNDFjOC1iNzFiLTBlNzAxYWY3NTgzZFwvbG9naW4ifSwidGVuYW50IjoiZWMyNDU4ZjItMWUyNC00MWM4LWI3MWItMGU3MDFhZjc1ODNkIn19.0T5vGHRdBZ4jeyk8uFf_3IFuKrwGBLkbe7z1lur0lIaCsc5QGViGT3UqjGFs8ClDzCzsPtyphI26OJM1YtkQGg';
        this.getMedication = 'https://fhir-open.cerner.com/r4/ec2458f2-1e24-41c8-b71b-0e701af7583d/MedicationRequest?patient=';
        this.getPatientList = 'https://fhir-open.cerner.com/r4/ec2458f2-1e24-41c8-b71b-0e701af7583d/Patient?name=';
        this.authorization = 'https://authorization.cerner.com/tenants/ec2458f2-1e24-41c8-b71b-0e701af7583d/protocols/oauth2/profiles/smart-v1/token';
        this.encounter = 'https://fhir-open.cerner.com/r4/ec2458f2-1e24-41c8-b71b-0e701af7583d/Encounter?patient=';
        this.medicationRequest = 'https://fhir-ehr-code.cerner.com/r4/ec2458f2-1e24-41c8-b71b-0e701af7583d/MedicationRequest';
    }
    return ApiEndPoint;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    baseUrl: '',
    bearerToken: 'eyJraWQiOiIyMDIzLTAxLTExVDIyOjI1OjMyLjQ3My5lYyIsInR5cCI6IkpXVCIsImFsZyI6IkVTMjU2In0.eyJzdWIiOiJwb3J0YWwiLCJ1cm46Y29tOmNlcm5lcjphdXRob3JpemF0aW9uOmNsYWltcyI6eyJ2ZXIiOiIxLjAiLCJlbmNvdW50ZXIiOiI5Nzk1MzQ4MyIsInRudCI6ImVjMjQ1OGYyLTFlMjQtNDFjOC1iNzFiLTBlNzAxYWY3NTgzZCIsImF6cyI6ImxhdW5jaCBvbmxpbmVfYWNjZXNzIG9wZW5pZCBwcm9maWxlIHVzZXJcL01lZGljYXRpb25SZXF1ZXN0LnJlYWQgdXNlclwvTWVkaWNhdGlvblJlcXVlc3Qud3JpdGUgdXNlclwvT2JzZXJ2YXRpb24ucmVhZCB1c2VyXC9QYXRpZW50LnJlYWQiLCJ1c2VyIjoiMTI3NDIwNjkiLCJwYXRpZW50IjoiMTI3MjQwNjUifSwiYXpwIjoiYWRmNmI4MGQtMzc1YS00OTcxLTgwZjQtYjI4MGJiZjRmOWRkIiwiaXNzIjoiaHR0cHM6XC9cL2F1dGhvcml6YXRpb24uY2VybmVyLmNvbVwvIiwiZXhwIjoxNjczNTg4NTkxLCJpYXQiOjE2NzM1ODc5OTEsImp0aSI6IjRhNTIxZmMxLWJkMzMtNDNhYy1hZTFhLWE5YmE4N2ZiZTg5YyIsInVybjpjZXJuZXI6YXV0aG9yaXphdGlvbjpjbGFpbXM6dmVyc2lvbjoxIjp7InZlciI6IjEuMCIsInByb2ZpbGVzIjp7Im1pbGxlbm5pdW0tdjEiOnsicGVyc29ubmVsIjoiMTI3NDIwNjkiLCJlbmNvdW50ZXIiOiI5Nzk1MzQ4MyJ9LCJzbWFydC12MSI6eyJwYXRpZW50cyI6WyIxMjcyNDA2NSJdLCJhenMiOiJsYXVuY2ggb25saW5lX2FjY2VzcyBvcGVuaWQgcHJvZmlsZSB1c2VyXC9NZWRpY2F0aW9uUmVxdWVzdC5yZWFkIHVzZXJcL01lZGljYXRpb25SZXF1ZXN0LndyaXRlIHVzZXJcL09ic2VydmF0aW9uLnJlYWQgdXNlclwvUGF0aWVudC5yZWFkIiwiZmhpclVzZXIiOiJQcmFjdGl0aW9uZXJcLzEyNzQyMDY5In19LCJjbGllbnQiOnsibmFtZSI6IkFDTCBJbmZ1c2lvbiBQdW1wIFYxIiwiaWQiOiJhZGY2YjgwZC0zNzVhLTQ5NzEtODBmNC1iMjgwYmJmNGY5ZGQifSwidXNlciI6eyJwcmluY2lwYWwiOiJwb3J0YWwiLCJwZXJzb25hIjoicHJvdmlkZXIiLCJpZHNwIjoiZWMyNDU4ZjItMWUyNC00MWM4LWI3MWItMGU3MDFhZjc1ODNkIiwic2Vzc2lvbklkIjoiOTM0ZjMzYWItNWUwMi00NWM5LWIyZGMtZjVkY2MyMjEyODk1IiwicHJpbmNpcGFsVHlwZSI6InVzZXJuYW1lIiwicHJpbmNpcGFsVXJpIjoiaHR0cHM6XC9cL21pbGxlbm5pYS5jZXJuZXIuY29tXC9pbnN0YW5jZVwvZWMyNDU4ZjItMWUyNC00MWM4LWI3MWItMGU3MDFhZjc1ODNkXC9wcmluY2lwYWxcLzAwMDAuMDAwMC4wMEMyLjZEQjUiLCJpZHNwVXJpIjoiaHR0cHM6XC9cL21pbGxlbm5pYS5jZXJuZXIuY29tXC9hY2NvdW50c1wvYzE5NDEuY2Vybl9hYmNuLmNlcm5lcmFzcC5jb21cL2VjMjQ1OGYyLTFlMjQtNDFjOC1iNzFiLTBlNzAxYWY3NTgzZFwvbG9naW4ifSwidGVuYW50IjoiZWMyNDU4ZjItMWUyNC00MWM4LWI3MWItMGU3MDFhZjc1ODNkIn19.ub41n3cJHf0XIu82kkGmmAVBI5DC9y1nsrvG0eFZ8c9rYb2b-TOGf3uqxRle4y2T7KVaHsu_pRfwhcpiG689Ag'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Development\Medication\latest frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map