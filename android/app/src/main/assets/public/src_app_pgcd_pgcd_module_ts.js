(self["webpackChunkXMaths20"] = self["webpackChunkXMaths20"] || []).push([["src_app_pgcd_pgcd_module_ts"],{

/***/ 5276:
/*!*********************************************!*\
  !*** ./src/app/pgcd/pgcd-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PgcdPageRoutingModule": () => (/* binding */ PgcdPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _pgcd_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pgcd.page */ 3676);




const routes = [
    {
        path: '',
        component: _pgcd_page__WEBPACK_IMPORTED_MODULE_0__.PgcdPage
    }
];
let PgcdPageRoutingModule = class PgcdPageRoutingModule {
};
PgcdPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PgcdPageRoutingModule);



/***/ }),

/***/ 5187:
/*!*************************************!*\
  !*** ./src/app/pgcd/pgcd.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PgcdPageModule": () => (/* binding */ PgcdPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _pgcd_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pgcd-routing.module */ 5276);
/* harmony import */ var _pgcd_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pgcd.page */ 3676);







let PgcdPageModule = class PgcdPageModule {
};
PgcdPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _pgcd_routing_module__WEBPACK_IMPORTED_MODULE_0__.PgcdPageRoutingModule
        ],
        declarations: [_pgcd_page__WEBPACK_IMPORTED_MODULE_1__.PgcdPage]
    })
], PgcdPageModule);



/***/ }),

/***/ 3676:
/*!***********************************!*\
  !*** ./src/app/pgcd/pgcd.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PgcdPage": () => (/* binding */ PgcdPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_pgcd_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./pgcd.page.html */ 6342);
/* harmony import */ var _pgcd_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pgcd.page.scss */ 7401);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let PgcdPage = class PgcdPage {
    constructor() {
        this.clickpgcd = false;
        this.clickppcm = false;
        this.clickprime = false;
    }
    ngOnInit() {
    }
    pgcd(c, d) {
        var t;
        var res;
        if (c > 0 && d) {
            if (c > d) {
                t = c;
                c = d;
                d = t;
            }
            do {
                console.log("hello");
                res = c % d;
                c = d;
                d = res;
                console.log(c);
                console.log(d);
                console.log(res);
            } while (res != 0);
            return c;
        }
    }
    ppcm(p1, p2) {
        return (p1 * p2) / this.pgcd(p1, p2);
    }
    isprime(n) {
        var prime = true;
        if (n <= 1) {
            prime = false;
        }
        for (var i = 2; i <= n / 2; i++) {
            if (n % i == 0) {
                prime = false;
            }
        }
        return prime;
    }
};
PgcdPage.ctorParameters = () => [];
PgcdPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-pgcd',
        template: _raw_loader_pgcd_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_pgcd_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PgcdPage);



/***/ }),

/***/ 7401:
/*!*************************************!*\
  !*** ./src/app/pgcd/pgcd.page.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-toolbar {\n  --background:rgb(33,66,99);\n}\n\nion-content {\n  --background: white;\n}\n\np {\n  font-weight: 600;\n  font-size: 25px;\n  color: black;\n}\n\nion-button {\n  padding-left: 80px;\n}\n\n.p1 {\n  padding-left: 80px;\n}\n\n.p2 {\n  padding-left: 80px;\n}\n\n.p3 {\n  padding-left: 80px;\n}\n\nion-input {\n  color: black;\n  font-size: 25px;\n  --padding-top:-20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBnY2QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMEJBQUE7QUFDSjs7QUFDRztFQUNJLG1CQUFBO0FBRVA7O0FBQ0E7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBRUo7O0FBQUE7RUFDSSxrQkFBQTtBQUdKOztBQURBO0VBQ0ksa0JBQUE7QUFJSjs7QUFGQTtFQUNJLGtCQUFBO0FBS0o7O0FBSEE7RUFDSSxrQkFBQTtBQU1KOztBQUpBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQU9KIiwiZmlsZSI6InBnY2QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXJ7XG4gICAgLS1iYWNrZ3JvdW5kOnJnYigzMyw2Niw5OSk7XG4gICB9XG4gICBpb24tY29udGVudHtcbiAgICAgICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuICAgfVxuXG5we1xuICAgIGZvbnQtd2VpZ2h0OjYwMDtcbiAgICBmb250LXNpemUgOjI1cHg7XG4gICAgY29sb3I6YmxhY2s7XG59XG5pb24tYnV0dG9ue1xuICAgIHBhZGRpbmctbGVmdDo4MHB4O1xufVxuLnAxe1xuICAgIHBhZGRpbmctbGVmdDo4MHB4O1xufVxuLnAye1xuICAgIHBhZGRpbmctbGVmdDo4MHB4O1xufVxuLnAze1xuICAgIHBhZGRpbmctbGVmdDo4MHB4O1xufVxuaW9uLWlucHV0e1xuICAgIGNvbG9yOmJsYWNrO1xuICAgIGZvbnQtc2l6ZSA6MjVweDtcbiAgICAtLXBhZGRpbmctdG9wOi0yMHB4O1xufSJdfQ== */");

/***/ }),

/***/ 6342:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pgcd/pgcd.page.html ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Arithmetic</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<div class=\"pgcd\">\n  <ion-label>\n    <ion-grid>\n      <label style=\"color:black\">this function allows to calculate the greatest common divisor</label>\n      <ion-row size=\"12\">\n        \n        <ion-col size=\"5\">\n          <br>\n          <br>\n          <p>PGCD (\n        </p>\n\n        </ion-col>\n        <ion-col size=\"2\">\n          <br>\n          <br>\n          <ion-input placeholder=\"Enter\" [(ngModel)]=\"a\"></ion-input>\n        </ion-col>\n        \n        <ion-col size=\"1\">\n          <br>\n          <br>\n          <p>,</p>\n        </ion-col>\n        <ion-col size=\"3\">\n          <br>\n          <br>\n          <ion-input type=\"number\"placeholder=\"Enter \" [(ngModel)]=\"b\"></ion-input>\n        </ion-col>\n        <ion-col size=\"1\">\n          <br>\n          <br>\n          <p>)</p>\n        </ion-col>\n\n      </ion-row >\n      <ion-row size=\"12\">\n        <ion-col size=\"4\">\n      <ion-button color=\"primary\" (click)=\"rpgcd=pgcd(a,b);clickpgcd=!clickpgcd\">\n         calculate\n      </ion-button>\n    </ion-col>\n    </ion-row>\n\n    <ion-row size=\"12\">\n      <br>\n      <br>\n      <br>\n      <ion-col size=\"9\">\n        <p class=\"p1\" *ngIf=\"this.clickpgcd==true\">result:{{rpgcd}}</p>\n        </ion-col>\n        </ion-row>\n        <label style=\"color:black\">this function allows to calculate the least common multiple</label>\n        <ion-row size=\"12\">\n          <ion-col size=\"5\">\n            \n            <br>\n            <br>\n  \n            <p>PPCM (\n          </p>\n  \n          </ion-col>\n          <ion-col size=\"2\">\n            <br>\n            <br>\n            <ion-input placeholder=\"Enter\" [(ngModel)]=\"a1\"></ion-input>\n          </ion-col>\n          \n          <ion-col size=\"1\">\n            <br>\n            <br>\n            <p>,</p>\n          </ion-col>\n          <ion-col size=\"3\">\n            <br>\n            <br>\n            <ion-input type=\"number\"placeholder=\"Enter \" [(ngModel)]=\"b1\"></ion-input>\n          </ion-col>\n          <ion-col size=\"1\">\n            <br>\n            <br>\n            <p>)</p>\n          </ion-col>\n        </ion-row >\n        <ion-row size=\"12\">\n          <ion-col size=\"4\">\n        <ion-button color=\"primary\" (click)=\"rppcm=ppcm(a1,b1);clickppcm=!clickppcm\">\n          calculate\n        </ion-button>\n      </ion-col>\n      </ion-row>\n      <ion-row size=\"12\">\n        <br>\n        <br>\n        <br>\n        <ion-col size=\"9\">\n          <p class=\"p2\" *ngIf=\"this.clickppcm==true\">result:{{rppcm}}</p>\n          </ion-col>\n          </ion-row>\n          <label style=\"color:black\">this function determines if a number is prime</label>\n          <ion-row size=\"12\">\n            <ion-col size=\"5\">\n             \n              \n    \n              <p>PRIME (\n            </p>\n            </ion-col>\n            <ion-col size=\"3\">\n              \n              \n              <ion-input placeholder=\"Enter \" [(ngModel)]=\"a2\"></ion-input>\n            </ion-col>\n            <ion-col size=\"1\">\n              \n              \n              <p>)</p>\n            </ion-col>\n            </ion-row>\n\n            <ion-row size=\"12\">\n              <ion-col size=\"4\">\n            <ion-button color=\"primary\" (click)=\"rprime=isprime(a2);clickprime=!clickprime\">\n              calculate\n            </ion-button>\n          </ion-col>\n          </ion-row>\n          <ion-row size=\"12\">\n            <br>\n            <br>\n            <br>\n            <ion-col size=\"9\">\n              <p class=\"p3\" *ngIf=\"clickprime==true\">result:{{rprime}}</p>\n              </ion-col>\n              </ion-row>\n          \n          \n    </ion-grid>\n    \n  </ion-label>\n\n</div>\n\n<ion-content>\n\n</ion-content>\n\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pgcd_pgcd_module_ts.js.map