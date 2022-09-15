(self["webpackChunkXMaths20"] = self["webpackChunkXMaths20"] || []).push([["src_app_systemes_systemes_module_ts"],{

/***/ 7882:
/*!*****************************************************!*\
  !*** ./src/app/systemes/systemes-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SystemesPageRoutingModule": () => (/* binding */ SystemesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _systemes_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./systemes.page */ 9437);




const routes = [
    {
        path: '',
        component: _systemes_page__WEBPACK_IMPORTED_MODULE_0__.SystemesPage
    }
];
let SystemesPageRoutingModule = class SystemesPageRoutingModule {
};
SystemesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SystemesPageRoutingModule);



/***/ }),

/***/ 1661:
/*!*********************************************!*\
  !*** ./src/app/systemes/systemes.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SystemesPageModule": () => (/* binding */ SystemesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _systemes_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./systemes-routing.module */ 7882);
/* harmony import */ var _systemes_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./systemes.page */ 9437);







let SystemesPageModule = class SystemesPageModule {
};
SystemesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _systemes_routing_module__WEBPACK_IMPORTED_MODULE_0__.SystemesPageRoutingModule
        ],
        declarations: [_systemes_page__WEBPACK_IMPORTED_MODULE_1__.SystemesPage]
    })
], SystemesPageModule);



/***/ }),

/***/ 9437:
/*!*******************************************!*\
  !*** ./src/app/systemes/systemes.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SystemesPage": () => (/* binding */ SystemesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_systemes_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./systemes.page.html */ 575);
/* harmony import */ var _systemes_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./systemes.page.scss */ 7098);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let SystemesPage = class SystemesPage {
    constructor() {
        this.click1 = false;
        this.click2 = false;
    }
    ngOnInit() {
    }
    solution1() {
        this.sx1 = (this.e * this.d - this.b * this.f) / (this.a * this.d - this.b * this.c);
        this.sy1 = (this.a * this.f - this.e * this.c) / (this.a * this.d - this.b * this.c);
    }
    detA() {
        return this.a1 * (this.b2 * this.c3 - this.c2 * this.b3) - this.b1 * (this.a2 * this.c3 - this.a3 * this.c2) + this.c1 * (this.a2 * this.b3 - this.a3 * this.b2);
    }
    detA1() {
        return this.d1 * (this.b2 * this.c3 - this.b3 * this.c2) - this.b1 * (this.d2 * this.c3 - this.c2 * this.d3) + this.c1 * (this.d2 * this.b3 - this.d3 * this.b2);
    }
    detA2() {
        return this.a1 * (this.d2 * this.c3 - this.c2 * this.d3) - this.d1 * (this.a2 * this.c3 - this.a3 * this.c2) + this.c1 * (this.a2 * this.d3 - this.a3 * this.d2);
    }
    detA3() {
        return this.a1 * (this.b2 * this.d3 - this.b3 * this.d2) - this.b1 * (this.a2 * this.d3 - this.a3 * this.d2) + this.d1 * (this.a2 * this.b3 - this.a3 * this.b2);
    }
    solution2() {
        this.sx2 = this.detA1() / this.detA();
        this.sy2 = this.detA2() / this.detA();
        this.sz2 = this.detA3() / this.detA();
    }
};
SystemesPage.ctorParameters = () => [];
SystemesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-systemes',
        template: _raw_loader_systemes_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_systemes_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SystemesPage);



/***/ }),

/***/ 7098:
/*!*********************************************!*\
  !*** ./src/app/systemes/systemes.page.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-toolbar {\n  --background:rgb(33,66,99);\n}\n\nion-content {\n  --background: white;\n}\n\nion-button {\n  padding-left: 80px;\n}\n\nion-input {\n  --padding-top:-20px;\n  font-size: 20px;\n  color: black;\n}\n\n.ca {\n  padding-top: 10px;\n}\n\n.cb {\n  padding-top: 10px;\n}\n\n.ca {\n  padding-top: 10px;\n}\n\n.ce {\n  padding-top: 10px;\n}\n\np {\n  font-size: 600;\n  font-weight: 30px;\n  color: black;\n}\n\n.ina {\n  --padding-top:10px;\n}\n\n.inb {\n  --padding-top:10px;\n}\n\n.ine {\n  --padding-top:10px;\n}\n\n.inc {\n  --padding-top:10px;\n}\n\n.ind {\n  --padding-top:10px;\n}\n\n.inf {\n  --padding-top:7px;\n}\n\n.ina1 {\n  --padding-top:10px;\n}\n\n.inb1 {\n  --padding-top:10px;\n}\n\n.inc1 {\n  --padding-top:10px;\n}\n\n.ind1 {\n  --padding-top:10px;\n}\n\n.ina2 {\n  --padding-top:10px;\n}\n\n.inb2 {\n  --padding-top:10px;\n}\n\n.inc2 {\n  --padding-top:10px;\n}\n\n.ind2 {\n  --padding-top:10px;\n}\n\n.ina3 {\n  --padding-top:10px;\n}\n\n.inb3 {\n  --padding-top:10px;\n}\n\n.inc3 {\n  --padding-top:10px;\n}\n\n.ind3 {\n  --padding-top:10px;\n}\n\n.pa {\n  font-size: 600;\n  font-weight: 30px;\n  padding-top: -50px;\n}\n\n.p1 {\n  padding-left: 90px;\n}\n\n.p2 {\n  padding-left: 90px;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN5c3RlbWVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBCQUFBO0FBQ0o7O0FBQ0c7RUFDSSxtQkFBQTtBQUVQOztBQUFBO0VBQ0ksa0JBQUE7QUFHSjs7QUFEQTtFQUNJLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFJSjs7QUFGQTtFQUNJLGlCQUFBO0FBS0o7O0FBSEE7RUFDSSxpQkFBQTtBQU1KOztBQUpBO0VBQ0ksaUJBQUE7QUFPSjs7QUFMQTtFQUNJLGlCQUFBO0FBUUo7O0FBTEE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBUUo7O0FBTkE7RUFDSSxrQkFBQTtBQVNKOztBQVBBO0VBQ0ksa0JBQUE7QUFVSjs7QUFQQTtFQUNJLGtCQUFBO0FBVUo7O0FBUkE7RUFDSSxrQkFBQTtBQVdKOztBQVRBO0VBQ0ksa0JBQUE7QUFZSjs7QUFWQTtFQUNJLGlCQUFBO0FBYUo7O0FBWEE7RUFDSSxrQkFBQTtBQWNKOztBQVpBO0VBQ0ksa0JBQUE7QUFlSjs7QUFiQTtFQUNJLGtCQUFBO0FBZ0JKOztBQWRBO0VBQ0ksa0JBQUE7QUFpQko7O0FBZkE7RUFDSSxrQkFBQTtBQWtCSjs7QUFoQkE7RUFDSSxrQkFBQTtBQW1CSjs7QUFqQkE7RUFDSSxrQkFBQTtBQW9CSjs7QUFsQkE7RUFDSSxrQkFBQTtBQXFCSjs7QUFuQkE7RUFDSSxrQkFBQTtBQXNCSjs7QUFwQkE7RUFDSSxrQkFBQTtBQXVCSjs7QUFyQkE7RUFDSSxrQkFBQTtBQXdCSjs7QUF0QkE7RUFDSSxrQkFBQTtBQXlCSjs7QUFyQkE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQXdCSjs7QUF0QkE7RUFDSSxrQkFBQTtBQXlCSjs7QUF2QkE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7QUEwQkoiLCJmaWxlIjoic3lzdGVtZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXJ7XG4gICAgLS1iYWNrZ3JvdW5kOnJnYigzMyw2Niw5OSk7XG4gICB9XG4gICBpb24tY29udGVudHtcbiAgICAgICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuICAgfVxuaW9uLWJ1dHRvbntcbiAgICBwYWRkaW5nLWxlZnQ6ODBweDtcbn1cbmlvbi1pbnB1dHtcbiAgICAtLXBhZGRpbmctdG9wOi0yMHB4O1xuICAgIGZvbnQtc2l6ZToyMHB4O1xuICAgIGNvbG9yOmJsYWNrO1xufVxuLmNhe1xuICAgIHBhZGRpbmctdG9wOjEwcHg7XG59XG4uY2J7XG4gICAgcGFkZGluZy10b3A6MTBweDtcbn1cbi5jYXtcbiAgICBwYWRkaW5nLXRvcDoxMHB4O1xufVxuLmNle1xuICAgIHBhZGRpbmctdG9wOjEwcHg7XG59XG5cbnB7XG4gICAgZm9udC1zaXplOjYwMDtcbiAgICBmb250LXdlaWdodDozMHB4O1xuICAgIGNvbG9yOmJsYWNrO1xufVxuLmluYXtcbiAgICAtLXBhZGRpbmctdG9wOjEwcHg7XG59XG4uaW5ie1xuICAgIC0tcGFkZGluZy10b3A6MTBweDtcbiAgIFxufVxuLmluZXtcbiAgICAtLXBhZGRpbmctdG9wOjEwcHg7XG59XG4uaW5je1xuICAgIC0tcGFkZGluZy10b3A6MTBweDtcbn1cbi5pbmR7XG4gICAgLS1wYWRkaW5nLXRvcDoxMHB4O1xufVxuLmluZntcbiAgICAtLXBhZGRpbmctdG9wOjdweDtcbn1cbi5pbmExe1xuICAgIC0tcGFkZGluZy10b3A6MTBweDtcbn1cbi5pbmIxe1xuICAgIC0tcGFkZGluZy10b3A6MTBweDtcbn1cbi5pbmMxe1xuICAgIC0tcGFkZGluZy10b3A6MTBweDtcbn1cbi5pbmQxe1xuICAgIC0tcGFkZGluZy10b3A6MTBweDtcbn1cbi5pbmEye1xuICAgIC0tcGFkZGluZy10b3A6MTBweDtcbn1cbi5pbmIye1xuICAgIC0tcGFkZGluZy10b3A6MTBweDtcbn1cbi5pbmMye1xuICAgIC0tcGFkZGluZy10b3A6MTBweDtcbn1cbi5pbmQye1xuICAgIC0tcGFkZGluZy10b3A6MTBweDtcbn1cbi5pbmEze1xuICAgIC0tcGFkZGluZy10b3A6MTBweDtcbn1cbi5pbmIze1xuICAgIC0tcGFkZGluZy10b3A6MTBweDtcbn1cbi5pbmMze1xuICAgIC0tcGFkZGluZy10b3A6MTBweDtcbn1cbi5pbmQze1xuICAgIC0tcGFkZGluZy10b3A6MTBweDtcbn1cblxuXG4ucGF7XG4gICAgZm9udC1zaXplOjYwMDtcbiAgICBmb250LXdlaWdodDozMHB4O1xuICAgIHBhZGRpbmctdG9wOi01MHB4O1xufVxuLnAxe1xuICAgIHBhZGRpbmctbGVmdDo5MHB4O1xufVxuLnAye1xuICAgIHBhZGRpbmctbGVmdDo5MHB4O1xuICAgIGNvbG9yIDpibGFjaztcbn1cblxuXG4iXX0= */");

/***/ }),

/***/ 575:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/systemes/systemes.page.html ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Systems of Equations</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"2\">\n\n      </ion-col>\n      <ion-col class=\"ca\" size=\"2\">\n        <ion-input class=\"ina\" placeholder=\"_\" [(ngModel)]=\"a\"></ion-input>\n      </ion-col>\n      <ion-col   size=\"1.5\">\n        \n       <p class=\"pa\">X+</p>\n      </ion-col>\n      <ion-col class=\"cb\" size=\"2\">\n        <ion-input  class=\"inb\" placeholder=\"_\" [(ngModel)]=\"b\"></ion-input>\n      </ion-col>\n      <ion-col size=\"2\">\n        <p> Y =</p>\n      </ion-col>\n      <ion-col class=\"ce\" size=\"2\">\n        <ion-input  class=\"ine\" placeholder=\"_\" [(ngModel)]=\"e\"></ion-input>\n        </ion-col>\n\n    </ion-row>\n\n    <ion-row size=\"12\">\n      <ion-col size=\"2\">\n\n      </ion-col>\n      <ion-col size=\"2\">\n        \n        <ion-input  class=\"inc\" placeholder=\"_\" [(ngModel)]=\"c\"></ion-input>\n      </ion-col>\n      <ion-col size=\"1.5\">\n        \n       <p>X+</p>\n      </ion-col>\n      <ion-col size=\"2\">\n        <ion-input  class=\"ind\" placeholder=\"_\" [(ngModel)]=\"d\"></ion-input>\n      </ion-col>\n      <ion-col size=\"2\">\n        <p>Y =</p>\n      </ion-col>\n      <ion-col size=\"2\">\n        <ion-input class=\"inf\" placeholder=\"_\" [(ngModel)]=\"f\"></ion-input>\n        </ion-col>\n\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"4\">\n        <ion-button color=\"primary\" (click)=\"solution1();this.click1=!this.click1\">\n          calculate  \n        </ion-button>\n\n      </ion-col>\n      \n    </ion-row>\n    <ion-row>\n      \n      <p  class=\"p1\" *ngIf=\"this.click1==true\">result:[{{this.sx1}};{{this.sy1}}]</p>\n      \n      \n    </ion-row>\n    \n    <ion-row>\n      <ion-col size=\"2\">\n\n      </ion-col>\n      <ion-col size=\"1\">\n        \n        <ion-input class=\"ina1\" placeholder=\"_\" [(ngModel)]=\"a1\"></ion-input>\n      </ion-col>\n      <ion-col size=\"1.5\">\n        \n       <p>X+</p>\n      </ion-col>\n      <ion-col size=\"1\">\n        <ion-input class=\"inb1\" placeholder=\"_\" [(ngModel)]=\"b1\"></ion-input>\n      </ion-col>\n      <ion-col size=\"1.5\">\n        <p>Y+</p>\n      </ion-col>\n      <ion-col size=\"1\">\n        <ion-input class=\"inc1\" placeholder=\"_\" [(ngModel)]=\"c1\"></ion-input>\n        </ion-col>\n        <ion-col size=\"2\">\n          <p>Z =</p>\n\n        </ion-col>\n        <ion-col size=\"2\">\n          <ion-input class=\"ind1\" placeholder=\"_\" [(ngModel)]=\"d1\"></ion-input>\n        </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"2\">\n\n      </ion-col>\n      <ion-col size=\"1\">\n        \n        <ion-input class=\"ina2\" placeholder=\"_\" [(ngModel)]=\"a2\"></ion-input>\n      </ion-col>\n      <ion-col size=\"1.5\">\n        \n       <p>X+</p>\n      </ion-col>\n      <ion-col size=\"1\">\n        <ion-input class=\"inb2\" placeholder=\"_\" [(ngModel)]=\"b2\"></ion-input>\n      </ion-col>\n      <ion-col size=\"1.5\">\n        <p>Y+</p>\n      </ion-col>\n      <ion-col size=\"1\">\n        <ion-input class=\"inc2\" placeholder=\"_\" [(ngModel)]=\"c2\"></ion-input>\n        </ion-col>\n        <ion-col size=\"2\">\n          <p>Z =</p>\n\n        </ion-col>\n        <ion-col size=\"2\">\n          <ion-input class=\"ind2\" placeholder=\"_\" [(ngModel)]=\"d2\"></ion-input>\n        </ion-col>\n\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"2\">\n\n      </ion-col>\n      <ion-col size=\"1\">\n        \n        <ion-input class=\"ina3\" placeholder=\"_\" [(ngModel)]=\"a3\"></ion-input>\n      </ion-col>\n      <ion-col size=\"1.5\">\n        \n       <p>X+</p>\n      </ion-col>\n      <ion-col size=\"1\">\n        <ion-input class=\"inb3\" placeholder=\"_\" [(ngModel)]=\"b3\"></ion-input>\n      </ion-col>\n      <ion-col size=\"1.5\">\n        <p>Y+</p>\n      </ion-col>\n      <ion-col size=\"1\">\n        <ion-input  class=\"inc3\" placeholder=\"_\" [(ngModel)]=\"c3\"></ion-input>\n        </ion-col>\n        <ion-col size=\"2\">\n          <p>Z =</p>\n\n        </ion-col>\n        <ion-col size=\"2\">\n          <ion-input class=\"ind3\" placeholder=\"_\" [(ngModel)]=\"d3\"></ion-input>\n        </ion-col>\n\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"4\">\n        <ion-button color=\"primary\" (click)=\"solution2();this.click2=!this.click2\">\n          calculate  \n        </ion-button>\n\n      </ion-col>\n      \n    </ion-row>\n    <ion-row>\n      <p  class=\"p2\" *ngIf=\"this.click2==true\">result:[{{this.sx2}};{{this.sy2}};{{this.sz2}}]</p>\n    </ion-row>\n\n  </ion-grid>\n\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_systemes_systemes_module_ts.js.map