(self["webpackChunkXMaths20"] = self["webpackChunkXMaths20"] || []).push([["src_app_home_home_module_ts"],{

/***/ 2003:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HomePageRoutingModule);



/***/ }),

/***/ 3467:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-routing.module */ 2003);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page */ 2267);







let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomePageRoutingModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_1__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 2267:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./home.page.html */ 9764);
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss */ 2610);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/http/ngx */ 8589);
/* harmony import */ var _ionic_native_admob_pro_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/admob-pro/ngx */ 3212);






//import { AdMobFree, AdMobFreeBannerConfig, AdMobFreeInterstitialConfig } from '@ionic-native/admob-free/ngx';
//import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free/ngx';
//import { Admob, AdmobOptions, AdmobOriginal } from '@ionic-native/admob';
let HomePage = class HomePage {
    constructor(http, admob
    //private http:HttpClient
    //private admob: AdmobOriginal
    ) {
        /*
        const admobOptions: AdmobOptions = {
          bannerAdId: 'ca-app-pub-7994229315092036~6984944352',
          //interstitialAdId: 'XXX-XXXX-XXXX',
          //rewardedAdId: 'XXX-XXXX-XXXX',
          isTesting: true,
          autoShowBanner: false,
          autoShowInterstitial: false,
          autoShowRewarded: false,
          adSize: this.admob.AD_SIZE.BANNER
        };
    
        // Set admob options
        this.admob.setOptions(admobOptions)
          .then(() => console.log('Admob options have been successfully set'))
          .catch(err => console.error('Error setting admob options:', err));
        // (Optionally) Load banner ad, in order to have it ready to show
        this.admob.createBannerView()
        .then(() => console.log('Banner ad loaded'))
        .catch(err => console.error('Error loading banner ad:', err));
  
  
        // Show banner ad (createBannerView must be called before and onAdLoaded() event raised)
        this.admob.onAdLoaded().subscribe((ad) => {
        if (ad.adType === this.admob.AD_TYPE.BANNER) {
          this.admob.showBannerAd()
            .then(() => console.log('Banner ad shown'))
            .catch(err => console.error('Error showing banner ad:', err));
        }
        });
  
  
        // Hide banner ad, but do not destroy it, so it can be shown later on
        // See destroyBannerView in order to hide and destroy banner ad
        this.admob.showBannerAd(false)
        .then(() => console.log('Banner ad hidden'))
        .catch(err => console.error('Error hiding banner ad:', err));
        */
        /*
        let word=this.words[this.getRandom()];
        this.readAPI('http://numbersapi.com/random/'+word+'?json')
        .subscribe((data) =>{
          
          this.dataN.text=data['text'];
          this.dataN.number=data['number'];
          this.dataN.type=data['type'];
          this.dataN.year=data['year'];
          this.dataN.date=data['date'];
  
        })
        */
        this.http = http;
        this.admob = admob;
        this.words = ['trivia', 'math', 'date', 'year'];
        this.dataN = {
            text: '',
            number: '',
            type: '',
            year: '',
            date: ''
        };
        //=======================A DECOMMENTER LORS DE LA CONSTRUCTION DU PROJET
        // this.generateInfoWeb()
    }
    ngOnInit() {
    }
    getRandom() {
        return Math.floor(Math.random() * Math.floor(4));
    }
    /*
    readAPI(URL:string){
      return this.http.get(URL);
    }
    */
    //=======================A DECOMMENTER LORS DE LA CONSTRUCTION DU PROJET
    /*
   generateInfo(){
     let word=this.words[this.getRandom()];
     this.http.get('http://numbersapi.com/random/'+word+'?json',{},{})
       .then(res =>{
         this.dataN.text=JSON.parse(res.data).text;
         //this.dataN.text=res.data;
 
         this.dataN.number=JSON.parse(res.data).number;
         this.dataN.type=JSON.parse(res.data).type;
         this.dataN.year=JSON.parse(res.data).year;
         this.dataN.date=JSON.parse(res.data).date;
       })
       .catch(error =>{
         console.log(error.status);
         console.log(error.error);
         console.log(error.headers);
       })
   }
   *
  generateInfoWeb(){
   let word=this.words[this.getRandom()];
   this.readAPI('http://numbersapi.com/random/'+word+'?json')
       .subscribe((data) =>{
         let word=this.words[this.getRandom()];
         this.dataN.text=data['text'];
         this.dataN.number=data['number'];
         this.dataN.type=data['type'];
         this.dataN.year=data['year'];
         this.dataN.date=data['date'];
 
  });
 }
 
 */
    showBanner() {
        alert('Hello b3d ads s');
        let adId = "ca-app-pub-7994229315092036/8100738993";
        this.admob.createBanner({
            adId: adId,
            isTesting: true // remove in production 
        })
            .then(() => {
            this.admob.showBanner(this.admob.AD_POSITION.BOTTOM_CENTER);
        })
            .catch((err) => {
            console.log(err);
        });
    }
    test() {
        alert('Hello world');
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_2__.HTTP },
    { type: _ionic_native_admob_pro_ngx__WEBPACK_IMPORTED_MODULE_3__.AdMobPro }
];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HomePage);



/***/ }),

/***/ 2610:
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-toolbar {\n  --background:rgb(33,66,99);\n}\n\nion-content {\n  --background: white;\n}\n\n.welcome, .button {\n  text-align: center;\n  color: black;\n}\n\n#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  top: 50%;\n  transform: translate(-50%);\n}\n\n#container p {\n  font-size: 20px;\n  line-height: 26px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsMEJBQUE7QUFDRDs7QUFDQTtFQUNJLG1CQUFBO0FBRUo7O0FBQUE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7QUFHSjs7QUFDQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLDBCQUFBO0FBRUo7O0FBQUE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUFHSiIsImZpbGUiOiJob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFye1xuIC0tYmFja2dyb3VuZDpyZ2IoMzMsNjYsOTkpO1xufVxuaW9uLWNvbnRlbnR7XG4gICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cbi53ZWxjb21lLC5idXR0b257XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOmJsYWNrO1xuXG5cbn1cbiNjb250YWluZXJ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgIGxlZnQ6MDtcbiAgICB0b3A6NTAlO1xuICAgIHRyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSk7XG59XG4jY29udGFpbmVyIHB7XG4gICAgZm9udC1zaXplOjIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDI2cHg7XG59Il19 */");

/***/ }),

/***/ 9764:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>home</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content >\n  <h1 class=\"welcome\">Welcome to XMaths20</h1>\n  \n  \n\n  \n    <ion-card>\n      <ion-img src=\"../../assets/mathsformula.jpg\"></ion-img>\n    <ion-card-header>\n      <ion-card-title>\n        \n        {{this.dataN.year}}\n        {{this.dataN.date}}\n        \n          \n        \n        \n      </ion-card-title>\n    </ion-card-header>\n\n    <ion-card-content>\n      \n      <ion-label>{{this.dataN.text}}</ion-label>\n    </ion-card-content>\n\n    <div class=\"button\">\n     <ion-button class=\"button\" color=\"primary\" (click)=\"showBanner() \">generate info</ion-button>\n    </div>\n\n  </ion-card>\n\n  \n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map