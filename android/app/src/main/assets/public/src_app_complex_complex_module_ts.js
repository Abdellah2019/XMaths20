(self["webpackChunkXMaths20"] = self["webpackChunkXMaths20"] || []).push([["src_app_complex_complex_module_ts"],{

/***/ 6305:
/*!***************************************************!*\
  !*** ./src/app/complex/complex-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComplexPageRoutingModule": () => (/* binding */ ComplexPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _complex_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./complex.page */ 8490);




const routes = [
    {
        path: '',
        component: _complex_page__WEBPACK_IMPORTED_MODULE_0__.ComplexPage
    }
];
let ComplexPageRoutingModule = class ComplexPageRoutingModule {
};
ComplexPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ComplexPageRoutingModule);



/***/ }),

/***/ 6330:
/*!*******************************************!*\
  !*** ./src/app/complex/complex.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComplexPageModule": () => (/* binding */ ComplexPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _complex_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./complex-routing.module */ 6305);
/* harmony import */ var _complex_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./complex.page */ 8490);







let ComplexPageModule = class ComplexPageModule {
};
ComplexPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _complex_routing_module__WEBPACK_IMPORTED_MODULE_0__.ComplexPageRoutingModule
        ],
        declarations: [_complex_page__WEBPACK_IMPORTED_MODULE_1__.ComplexPage]
    })
], ComplexPageModule);



/***/ }),

/***/ 8490:
/*!*****************************************!*\
  !*** ./src/app/complex/complex.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComplexPage": () => (/* binding */ ComplexPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_complex_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./complex.page.html */ 5058);
/* harmony import */ var _complex_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./complex.page.scss */ 4858);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let ComplexPage = class ComplexPage {
    constructor() {
        this.t = false;
    }
    ngOnInit() {
    }
    module() {
        let r = (Math.sqrt((this.a * this.a) + (this.b * this.b)));
        return r.toFixed(2);
    }
    argument() {
        var pi = Math.PI;
        var ang = Math.acos(this.a / (Math.sqrt((this.a * this.a) + (this.b * this.b))));
        var r = Math.acos(this.a / (Math.sqrt((this.a * this.a) + (this.b * this.b)))) * (180 / pi);
        var d = r;
        var r2 = ang;
        this.radians = Math.acos(this.a / (Math.sqrt((this.a * this.a) + (this.b * this.b))));
        this.degree = d;
        this.radians = r2;
        this.cr = d.toFixed(2);
        this.cd = r2.toFixed(2);
    }
};
ComplexPage.ctorParameters = () => [];
ComplexPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-complex',
        template: _raw_loader_complex_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_complex_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ComplexPage);



/***/ }),

/***/ 4858:
/*!*******************************************!*\
  !*** ./src/app/complex/complex.page.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-toolbar {\n  --background:rgb(33,66,99);\n}\n\nion-content {\n  --background: white;\n}\n\n* {\n  color: black;\n}\n\n.p1 {\n  font-weight: 600;\n  font-size: 25px;\n  padding: 0px 0px 0px 50px;\n  padding-top: 12px;\n}\n\n.p2 {\n  font-weight: 600;\n  font-size: 24px;\n  padding-top: 12px;\n}\n\n.btn {\n  padding-left: 10px;\n}\n\n.p3 {\n  font-weight: 600;\n  font-size: 25px;\n}\n\nion-input {\n  font-weight: 60;\n  font-size: 24px;\n  padding-top: -20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBsZXgucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMEJBQUE7QUFDSjs7QUFDQTtFQUNPLG1CQUFBO0FBRVA7O0FBQUE7RUFDQSxZQUFBO0FBR0E7O0FBQUE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0FBR0o7O0FBREE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUlKOztBQURBO0VBQ0ksa0JBQUE7QUFJSjs7QUFGQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtBQUtKOztBQUhBO0VBQ0ksZUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQU1KIiwiZmlsZSI6ImNvbXBsZXgucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXJ7XG4gICAgLS1iYWNrZ3JvdW5kOnJnYigzMyw2Niw5OSk7XG4gICB9XG5pb24tY29udGVudHtcbiAgICAgICAtLWJhY2tncm91bmQ6IHdoaXRlO1xufVxuKntcbmNvbG9yOmJsYWNrO1xufVxuXG4ucDF7XG4gICAgZm9udC13ZWlnaHQ6NjAwO1xuICAgIGZvbnQtc2l6ZSA6MjVweDtcbiAgICBwYWRkaW5nOiAwcHggMHB4IDBweCA1MHB4O1xuICAgIHBhZGRpbmctdG9wOjEycHg7XG59XG4ucDJ7XG4gICAgZm9udC13ZWlnaHQ6NjAwO1xuICAgIGZvbnQtc2l6ZSA6MjRweDtcbiAgICBwYWRkaW5nLXRvcDoxMnB4O1xuXG59XG4uYnRue1xuICAgIHBhZGRpbmctbGVmdDoxMHB4O1xufVxuLnAze1xuICAgIGZvbnQtd2VpZ2h0OjYwMDtcbiAgICBmb250LXNpemUgOjI1cHg7XG59XG5pb24taW5wdXR7XG4gICAgZm9udC13ZWlnaHQ6NjA7XG4gICAgZm9udC1zaXplIDoyNHB4O1xuICAgIHBhZGRpbmctdG9wOi0yMHB4O1xufSJdfQ== */");

/***/ }),

/***/ 5058:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/complex/complex.page.html ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>complex</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n  <div class=\"complex\">\n    <ion-label>\n      <ion-grid>\n        <ion-row size=\"12\">\n          <ion-col size=\"5\">\n            <br>\n            <br>\n  \n            <p class=\"p1\">Z=\n          </p>\n  \n          </ion-col>\n          <ion-col size=\"2\">\n            <br>\n            <br>\n            <ion-input placeholder=\"_\" [(ngModel)]=\"a\"></ion-input>\n          </ion-col>\n          \n          <ion-col size=\"2\">\n            <br>\n            <br>\n            <p class=\"p2\">+i</p>\n            \n          </ion-col>\n          <ion-col size=\"2\">\n            <br>\n            <br>\n            \n            <ion-input placeholder=\"_\" [(ngModel)]=\"b\"></ion-input>\n            \n          </ion-col>\n          </ion-row>\n          <ion-row size=\"12\">\n            <ion-col size=\"3\">\n            </ion-col>\n          \n          <ion-button class=\"btn\" color=\"primary\" (click)=\"m=module() ; argument() \" >\n            result\n          </ion-button>\n        \n        \n        </ion-row>\n        <ion-row size=\"12\">\n          <br>\n          <br>\n          <br>\n          <ion-col size=\"4\">\n            <p class=\"p3\" >|Z|={{m}}</p>\n            </ion-col>\n            </ion-row>\n  \n            <ion-row size=\"12\">\n              <br>\n              <br>\n              <br>\n              <ion-col size=\"9\">\n              <p class=\"p3\">arg in degree:{{this.cr}}</p>\n                </ion-col>\n                </ion-row>\n                <ion-row size=\"12\">\n                  <br>\n                  <br>\n                  <br>\n                  <ion-col size=\"9\">\n                  <p class=\"p3\">arg in radian:{{this.cd}}</p>\n                    </ion-col>\n                    </ion-row>\n  \n      </ion-grid>\n          </ion-label>\n          </div>\n\n<ion-content>\n\n</ion-content>\n\n\n");

/***/ })

}]);
//# sourceMappingURL=src_app_complex_complex_module_ts.js.map