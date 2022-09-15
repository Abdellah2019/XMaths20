(self["webpackChunkXMaths20"] = self["webpackChunkXMaths20"] || []).push([["src_app_equation-a_equation-a_module_ts"],{

/***/ 6526:
/*!*********************************************************!*\
  !*** ./src/app/equation-a/equation-a-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EquationAPageRoutingModule": () => (/* binding */ EquationAPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _equation_a_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./equation-a.page */ 8336);




const routes = [
    {
        path: '',
        component: _equation_a_page__WEBPACK_IMPORTED_MODULE_0__.EquationAPage
    }
];
let EquationAPageRoutingModule = class EquationAPageRoutingModule {
};
EquationAPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EquationAPageRoutingModule);



/***/ }),

/***/ 1869:
/*!*************************************************!*\
  !*** ./src/app/equation-a/equation-a.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EquationAPageModule": () => (/* binding */ EquationAPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _equation_a_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./equation-a-routing.module */ 6526);
/* harmony import */ var _equation_a_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./equation-a.page */ 8336);







let EquationAPageModule = class EquationAPageModule {
};
EquationAPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _equation_a_routing_module__WEBPACK_IMPORTED_MODULE_0__.EquationAPageRoutingModule
        ],
        declarations: [_equation_a_page__WEBPACK_IMPORTED_MODULE_1__.EquationAPage]
    })
], EquationAPageModule);



/***/ }),

/***/ 8336:
/*!***********************************************!*\
  !*** ./src/app/equation-a/equation-a.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EquationAPage": () => (/* binding */ EquationAPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_equation_a_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./equation-a.page.html */ 6350);
/* harmony import */ var _equation_a_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./equation-a.page.scss */ 504);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let EquationAPage = class EquationAPage {
    constructor() {
        this.s = 0;
        this.clickeq1 = false;
        this.clickeq2 = false;
        this.clickeq3 = false;
    }
    ngOnInit() {
    }
    equation1() {
        if (this.a != 0) {
            var res = (this.c - this.b) / this.a;
            this.s = Math.round(res * 100) / 100;
            //return (this.c-this.b)/this.a;
        }
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
    equation2() {
        if (this.a1 == 0) {
            var res = -this.c1 / this.b1;
            this.s1 = Math.round(res * 100) / 100;
            ;
        }
        else {
            var delta = Math.floor(this.b1 * this.b1 - 4 * this.a1 * this.c1);
            console.log(delta);
            if (delta > 0) {
                var res1 = (-this.b1 - Math.sqrt(delta)) / (2 * this.a1);
                var res2 = (-this.b1 + Math.sqrt(delta)) / (2 * this.a1);
                this.s1 = Math.round(res1 * 100) / 100;
                this.s2 = Math.round(res2 * 100) / 100;
                ;
            }
            if (delta == 0) {
                this.s1 = -this.b1 / (2 * this.a1);
            }
        }
    }
    haveSolution(a, b, c) {
        if (c % this.pgcd(a, b) == 0) {
            return true;
        }
        else
            return false;
    }
    verification(a, b, c, u, v) {
        if (a * u + b * v == c) {
            return true;
        }
        else
            return false;
    }
    bezout(a, b, c, N) {
        this.sp1 = -b / this.pgcd(a, b);
        this.sp2 = a / this.pgcd(a, b);
        for (var u = -N; u < N + 1; u++) {
            for (var v = -N; v < N + 1; v++) {
                if (this.verification(a, b, c, u, v)) {
                    this.sd1 = u;
                    this.sd2 = v;
                }
            }
        }
    }
};
EquationAPage.ctorParameters = () => [];
EquationAPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-equation-a',
        template: _raw_loader_equation_a_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_equation_a_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], EquationAPage);



/***/ }),

/***/ 504:
/*!*************************************************!*\
  !*** ./src/app/equation-a/equation-a.page.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-toolbar {\n  --background:rgb(33,66,99);\n}\n\nion-content {\n  --background: white;\n}\n\n* {\n  color: black;\n}\n\np {\n  font-weight: 600;\n  font-size: 25px;\n  padding-top: 7px;\n}\n\nion-button {\n  padding-left: 120px;\n}\n\n.ina {\n  --padding-top:1px;\n  font-size: 25px;\n}\n\n.inb {\n  --padding-top:1px;\n  font-size: 25px;\n}\n\n.inc {\n  --padding-top:1px;\n  font-size: 25px;\n}\n\n.ina1 {\n  --padding-top:1px;\n  font-size: 25px;\n}\n\n.inb1 {\n  --padding-top:1px;\n  font-size: 25px;\n}\n\n.inc1 {\n  --padding-top:1px;\n  font-size: 25px;\n}\n\n.ina2 {\n  --padding-top:1px;\n  font-size: 25px;\n}\n\n.inb2 {\n  --padding-top:1px;\n  font-size: 25px;\n}\n\n.inc2 {\n  --padding-top:1px;\n  font-size: 25px;\n}\n\n.p1 {\n  padding-left: 0px;\n}\n\n.p2 {\n  padding-left: 0px;\n}\n\n.p3 {\n  padding-left: 120px;\n}\n\n.p4 {\n  padding-left: 120px;\n}\n\n.eq1 {\n  padding-left: 50px;\n}\n\n.eq2 {\n  padding-left: 50px;\n}\n\n.eq3 {\n  padding-left: 50px;\n}\n\nion-button {\n  padding-left: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVxdWF0aW9uLWEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMEJBQUE7QUFDSjs7QUFDQTtFQUNPLG1CQUFBO0FBRVA7O0FBQUE7RUFDQSxZQUFBO0FBR0E7O0FBREE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUlKOztBQUZBO0VBQ0ksbUJBQUE7QUFLSjs7QUFIQTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtBQU1KOztBQUpBO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0FBT0o7O0FBTEE7RUFDSSxpQkFBQTtFQUNBLGVBQUE7QUFRSjs7QUFOQTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtBQVNKOztBQVBBO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0FBVUo7O0FBUkE7RUFDSSxpQkFBQTtFQUNBLGVBQUE7QUFXSjs7QUFUQTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtBQVlKOztBQVZBO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0FBYUo7O0FBWEE7RUFDSSxpQkFBQTtFQUNBLGVBQUE7QUFjSjs7QUFWQTtFQUNJLGlCQUFBO0FBYUo7O0FBWEE7RUFDSSxpQkFBQTtBQWNKOztBQVpBO0VBQ0ksbUJBQUE7QUFlSjs7QUFiQTtFQUNJLG1CQUFBO0FBZ0JKOztBQWRBO0VBQ0ksa0JBQUE7QUFpQko7O0FBZkE7RUFDSSxrQkFBQTtBQWtCSjs7QUFoQkE7RUFDSSxrQkFBQTtBQW1CSjs7QUFqQkE7RUFDSSxrQkFBQTtBQW9CSiIsImZpbGUiOiJlcXVhdGlvbi1hLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFye1xuICAgIC0tYmFja2dyb3VuZDpyZ2IoMzMsNjYsOTkpO1xuICAgfVxuaW9uLWNvbnRlbnR7XG4gICAgICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cbip7XG5jb2xvcjpibGFjaztcbn1cbnB7XG4gICAgZm9udC13ZWlnaHQ6NjAwO1xuICAgIGZvbnQtc2l6ZSA6MjVweDtcbiAgICBwYWRkaW5nLXRvcDogN3B4O1xufVxuaW9uLWJ1dHRvbntcbiAgICBwYWRkaW5nLWxlZnQ6MTIwcHg7XG59XG4uaW5he1xuICAgIC0tcGFkZGluZy10b3A6MXB4O1xuICAgIGZvbnQtc2l6ZToyNXB4O1xufVxuLmluYntcbiAgICAtLXBhZGRpbmctdG9wOjFweDtcbiAgICBmb250LXNpemU6MjVweDtcbn1cbi5pbmN7XG4gICAgLS1wYWRkaW5nLXRvcDoxcHg7XG4gICAgZm9udC1zaXplOjI1cHg7XG59XG4uaW5hMXtcbiAgICAtLXBhZGRpbmctdG9wOjFweDtcbiAgICBmb250LXNpemU6MjVweDtcbn1cbi5pbmIxe1xuICAgIC0tcGFkZGluZy10b3A6MXB4O1xuICAgIGZvbnQtc2l6ZToyNXB4O1xufVxuLmluYzF7XG4gICAgLS1wYWRkaW5nLXRvcDoxcHg7XG4gICAgZm9udC1zaXplOjI1cHg7XG59XG4uaW5hMntcbiAgICAtLXBhZGRpbmctdG9wOjFweDtcbiAgICBmb250LXNpemU6MjVweDtcbn1cbi5pbmIye1xuICAgIC0tcGFkZGluZy10b3A6MXB4O1xuICAgIGZvbnQtc2l6ZToyNXB4O1xufVxuLmluYzJ7XG4gICAgLS1wYWRkaW5nLXRvcDoxcHg7XG4gICAgZm9udC1zaXplOjI1cHg7XG59XG5cblxuLnAxe1xuICAgIHBhZGRpbmctbGVmdDowcHg7XG59XG4ucDJ7XG4gICAgcGFkZGluZy1sZWZ0OjBweDtcbn1cbi5wM3tcbiAgICBwYWRkaW5nLWxlZnQ6MTIwcHg7XG59XG4ucDR7XG4gICAgcGFkZGluZy1sZWZ0OjEyMHB4O1xufVxuLmVxMXtcbiAgICBwYWRkaW5nLWxlZnQ6NTBweDtcbn1cbi5lcTJ7XG4gICAgcGFkZGluZy1sZWZ0OjUwcHg7XG59XG4uZXEze1xuICAgIHBhZGRpbmctbGVmdDo1MHB4O1xufVxuaW9uLWJ1dHRvbntcbiAgICBwYWRkaW5nLWxlZnQ6NTBweDtcbn0iXX0= */");

/***/ }),

/***/ 6350:
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/equation-a/equation-a.page.html ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Algebric Equations</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content>\n  <div class=\"equations\">\n    <ion-label>\n      <ion-grid>\n        <ion-row>\n          <p class=\"eq1\">First degree Equation</p>\n        </ion-row>\n        <ion-row size=\"12\">\n          <ion-col size=\"3\">\n            <br>\n            <br>\n  \n            <p>\n          </p>\n  \n          </ion-col>\n          <ion-col size=\"2\">\n            <br>\n            <ion-input  class=\"ina\" placeholder=\"a\" [(ngModel)]=\"a\"></ion-input>\n          </ion-col>\n          <ion-col size=\"2\">\n            <br>\n            <p >x+</p>\n          </ion-col>\n          <ion-col size=\"2\">\n            <br>\n    \n            <ion-input class=\"inb\" placeholder=\"b\" [(ngModel)]=\"b\"></ion-input>\n          </ion-col>\n          <ion-col size=\"1\">\n            <br>\n            <p>=</p>\n          </ion-col>\n          <ion-col size=\"2\">\n            <br>\n            <ion-input class=\"inc\" placeholder=\"c\" [(ngModel)]=\"c\"></ion-input>\n          </ion-col>\n\n          </ion-row>\n          <ion-row size=\"12\">\n            <ion-col size=\"4\">\n          <ion-button class=\"btn1\" color=\"primary\" (click)=\"s1=equation1();clickeq1=!clickeq1\">\n             calculate\n          </ion-button>\n        </ion-col>\n        </ion-row>\n        <ion-row size=\"12\">\n          <br>\n          <br>\n          <ion-col size=\"9\">\n            <p class=\"p1\" *ngIf=\"clickeq1==true\">result:{{s}}</p>\n            </ion-col>\n            </ion-row>\n            <ion-row>\n                <p class=\"eq2\">Second degree Equation</p>\n                <br>\n              </ion-row>\n            <ion-row size=\"12\">\n              <ion-col size=\"1.5\">\n                <ion-input class=\"ina1\" placeholder=\"a1\" [(ngModel)]=\"a1\"></ion-input>\n              </ion-col>\n                <ion-col size=\"2.2\">\n                <p>x²+</p>\n              </ion-col>\n              \n              \n              <ion-col size=\"1.7\">\n                <ion-input  class=\"inb1\" placeholder=\"b1\" [(ngModel)]=\"b1\"></ion-input>\n              </ion-col>\n              <ion-col size=\"1.9\">\n              <p>x+</p>\n              </ion-col>\n              <ion-col size=\"2\">\n                <ion-input  class=\"inc1\" placeholder=\"c1\" [(ngModel)]=\"c1\"></ion-input>\n              </ion-col>\n              <ion-col>\n                <p>  =0</p>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col size=\"4\">\n                <ion-button color=\"primary\" (click)=\"equation2();clickeq2=!clickeq2\">\n                  calculate\n                </ion-button>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n              \n              <p class=\"p2\" *ngIf=\"clickeq2==true\">S=[{{this.s1}};{{this.s2}}]</p>\n              \n            </ion-row>\n            <ion-row>\n              <p class=\"eq3\">Diophantine Equation</p>\n            </ion-row>\n            <ion-row>\n              <ion-col size=\"1.5\">\n                <ion-input class=\"ina2\" placeholder=\"a2\" [(ngModel)]=\"a2\"></ion-input>\n              </ion-col>\n              <ion-col size=\"2\">\n                <p> x+</p>\n              </ion-col>\n              <ion-col size=\"1.5\">\n                <ion-input  class=\"inb2\" placeholder=\"b2\" [(ngModel)]=\"b2\"></ion-input>\n                \n              </ion-col>\n              <ion-col size=\"2\" >\n                <p>y=</p>\n              </ion-col>\n              <ion-col size=\"2\">\n                <ion-input  class=\"inc2\" placeholder=\"c2\" [(ngModel)]=\"c2\"></ion-input>\n              </ion-col>\n              \n\n            </ion-row>\n            <ion-row>\n              <ion-col size=\"4\">\n                <ion-button color=\"primary\" (click)=\"bezout(a2,b2,c2,20);clickeq3=!clickeq3\">\n                  calculate\n                </ion-button>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n              <p class=\"p3\" *ngIf=\"clickeq3==true\">[{{this.sd1}} +{{sp1}}k</p>\n            </ion-row>\n            <ion-row>\n              <p class=\"p3\" *ngIf=\"clickeq3==true\">[{{this.sd2}} +{{sp2}}k</p>\n            </ion-row>\n          </ion-grid>\n          </ion-label>\n          </div>\n\n</ion-content>\n\n");

/***/ })

}]);
//# sourceMappingURL=src_app_equation-a_equation-a_module_ts.js.map