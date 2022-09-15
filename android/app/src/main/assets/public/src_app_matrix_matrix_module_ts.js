(self["webpackChunkXMaths20"] = self["webpackChunkXMaths20"] || []).push([["src_app_matrix_matrix_module_ts"],{

/***/ 6860:
/*!*************************************************!*\
  !*** ./src/app/matrix/matrix-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MatrixPageRoutingModule": () => (/* binding */ MatrixPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _matrix_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./matrix.page */ 2008);




const routes = [
    {
        path: '',
        component: _matrix_page__WEBPACK_IMPORTED_MODULE_0__.MatrixPage
    }
];
let MatrixPageRoutingModule = class MatrixPageRoutingModule {
};
MatrixPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MatrixPageRoutingModule);



/***/ }),

/***/ 4340:
/*!*****************************************!*\
  !*** ./src/app/matrix/matrix.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MatrixPageModule": () => (/* binding */ MatrixPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _matrix_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./matrix-routing.module */ 6860);
/* harmony import */ var _matrix_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./matrix.page */ 2008);







let MatrixPageModule = class MatrixPageModule {
};
MatrixPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _matrix_routing_module__WEBPACK_IMPORTED_MODULE_0__.MatrixPageRoutingModule
        ],
        declarations: [_matrix_page__WEBPACK_IMPORTED_MODULE_1__.MatrixPage]
    })
], MatrixPageModule);



/***/ }),

/***/ 2008:
/*!***************************************!*\
  !*** ./src/app/matrix/matrix.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MatrixPage": () => (/* binding */ MatrixPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_matrix_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./matrix.page.html */ 2946);
/* harmony import */ var _matrix_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./matrix.page.scss */ 7506);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let MatrixPage = class MatrixPage {
    constructor() {
        this.a1 = 0;
        this.a2 = 0;
        this.a3 = 0;
        this.b1 = 0;
        this.b2 = 0;
        this.b3 = 0;
        this.c1 = 0;
        this.c2 = 0;
        this.c3 = 0;
        this.n1 = 2;
        this.clickd = false;
        this.T = [
            [this.a1, this.a2, this.a3],
            [this.b1, this.b2, this.b3],
            [this.c1, this.c2, this.c3]
        ];
    }
    ngOnInit() {
    }
    getCofactor(Temp, p, q, n) {
        var i, j;
        i = j = 0;
        for (var row = 0; row < n; row++) {
            for (var col = 0; col < n; col++) {
                if (row != p && col != q) {
                    Temp[i][j++] = this.T[row][col];
                }
                if (j == n - 1) {
                    j = 0;
                    i++;
                }
            }
        }
    }
    determinantOfMatrix(n) {
        var D = 0;
        if (n == 1) {
            return this.T[0][0];
        }
        var Temp;
        var sign = 1;
        for (var f = 0; f < n; f++) {
            this.getCofactor(Temp, 0, f, this.n1);
            D += sign * this.T[0][f] * this.determinantOfMatrix(this.n1 - 1);
            sign = -sign;
        }
        return D;
    }
    detM3() {
        return ((this.a1 * this.b2 * this.c3 + this.a2 * this.b3 * this.c1 + this.a3 * this.b1 * this.c2) - (this.a3 * this.b2 * this.c1 + this.a2 * this.b1 * this.c3 + this.a1 * this.b3 * this.c2));
    }
};
MatrixPage.ctorParameters = () => [];
MatrixPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-matrix',
        template: _raw_loader_matrix_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_matrix_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MatrixPage);



/***/ }),

/***/ 7506:
/*!*****************************************!*\
  !*** ./src/app/matrix/matrix.page.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-toolbar {\n  --background:rgb(33,66,99);\n}\n\nion-content {\n  --background: white;\n}\n\nion-button {\n  padding-left: 20px;\n}\n\nion-input {\n  --padding-top:1px;\n  font-size: 25px;\n  color: black;\n}\n\np {\n  font-size: 25px;\n  padding-left: 80px;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hdHJpeC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwwQkFBQTtBQUNKOztBQUNHO0VBQ0ksbUJBQUE7QUFFUDs7QUFBQTtFQUNJLGtCQUFBO0FBR0o7O0FBREE7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBSUo7O0FBREE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBSUoiLCJmaWxlIjoibWF0cml4LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFye1xuICAgIC0tYmFja2dyb3VuZDpyZ2IoMzMsNjYsOTkpO1xuICAgfVxuICAgaW9uLWNvbnRlbnR7XG4gICAgICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgIH1cbmlvbi1idXR0b257XG4gICAgcGFkZGluZy1sZWZ0OjIwcHg7XG59XG5pb24taW5wdXR7XG4gICAgLS1wYWRkaW5nLXRvcDoxcHg7XG4gICAgZm9udC1zaXplOjI1cHg7XG4gICAgY29sb3I6YmxhY2s7XG4gICAgXG59XG5we1xuICAgIGZvbnQtc2l6ZToyNXB4O1xuICAgIHBhZGRpbmctbGVmdDo4MHB4O1xuICAgIGNvbG9yOmJsYWNrO1xufVxuIl19 */");

/***/ }),

/***/ 2946:
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/matrix/matrix.page.html ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Determinant 3x3</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"matrix3\">\n    <ion-grid>\n      <ion-row>\n\n        <br>\n        <ion-col size=\"3\">\n\n        </ion-col>\n        <ion-col size=\"2\">\n          <ion-input class=\"ina1\" placeholder=\"a1\" [(ngModel)]=\"a1\"></ion-input>\n        </ion-col>\n        <ion-col size=\"2\">\n          <ion-input placeholder=\"a2\" [(ngModel)]=\"a2\"></ion-input>\n        </ion-col>\n        <ion-col size=\"2\">\n          <ion-input placeholder=\"a3\" [(ngModel)]=\"a3\"></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"3\">\n\n        </ion-col>\n        <ion-col size=\"2\">\n          <ion-input placeholder=\"b1\" [(ngModel)]=\"b1\"></ion-input>\n        </ion-col>\n        <ion-col size=\"2\">\n          <ion-input placeholder=\"b2\" [(ngModel)]=\"b2\"></ion-input>\n        </ion-col>\n        <ion-col size=\"2\">\n          <ion-input placeholder=\"b3\" [(ngModel)]=\"b3\"></ion-input>\n        </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"3\">\n\n          </ion-col>\n        <ion-col size=\"2\">\n          \n          <ion-input placeholder=\"c1\" [(ngModel)]=\"c1\"></ion-input>\n        </ion-col>\n\n        <ion-col size=\"2\">\n          <ion-input placeholder=\"c2\" [(ngModel)]=\"c2\"></ion-input>\n        </ion-col>\n        <ion-col size=\"2\">\n          <ion-input placeholder=\"c3\" [(ngModel)]=\"c3\"></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row size=\"12\">\n        <br>\n        <ion-col size=\"2\">\n\n        </ion-col>\n        <ion-col size=\"10h\">\n      <ion-button color=\"primary\" (click)=\"det3=detM3();clickd=!clickd\">\n        calculate  \n      </ion-button>\n    </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"9\">\n      <p *ngIf=\"clickd==true\">result:{{det3}}</p>\n    </ion-col>\n    </ion-row>\n    </ion-grid>\n  </div>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_matrix_matrix_module_ts.js.map