(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-wins-wins-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/wins/wins.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/wins/wins.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"list-header ion-no-border\" mode=\"md\">\n    <ion-toolbar>\n        <ion-buttons (click)=\"goBack()\" class=\"roundbutton\" slot=\"start\">\n            <ion-icon src=\"./assets/icon/arrow-back.svg\"></ion-icon>\n        </ion-buttons>\n        <!-- <ion-buttons slot=\"primary\">\n            <ion-button>\n                <ion-icon slot=\"icon-only\" ios=\"ellipsis-vertical\" md=\"ellipsis-vertical\"></ion-icon>\n            </ion-button>\n        </ion-buttons> -->\n        <ion-title>Wins</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content [fullscreen]=\"true\" class=\"forms\">\n    <section class=\"settings-content mb-3\">\n        <div class=\"page-content\">\n            <ion-list>\n                <!-- <ion-list-header>\n                    Winwin\n                </ion-list-header> -->\n                <ion-item class=\"win-status\" lines=\"none\" *ngFor=\"let win of wins\">\n                    <ion-avatar slot=\"start\">\n                        <img [src]=\"win.logo ? (('backend_url' | env) + win.logo.name) : '/assets/img/default-image.svg'\">\n                    </ion-avatar>\n                    <ion-label>\n                        <h2 *ngIf=\"authService.user.userRole != 'Candidate' \" >{{ win.candidate.firstName }} {{ win.candidate.lastName }}</h2>\n                        <h2 *ngIf=\"authService.user.userRole === 'Candidate' \" >{{ win.name }}</h2>\n                        <p>Veut te contacter</p>\n                    </ion-label>\n                    <button mat-icon-button [matMenuTriggerFor]=\"menu\" class=\"more-btn-win\">\n                        <mat-icon>more_vert</mat-icon>\n                    </button>\n                    <mat-menu #menu=\"matMenu\">\n                        <button mat-menu-item *ngIf=\"authService.user.userRole != 'Candidate'\"  (click)=\"showCandidate('item.user._id')\">\n                            <span>Voir le profil R</span>\n                        </button>\n                        <button mat-menu-item *ngIf=\"authService.user.userRole === 'Candidate'\"  (click)=\"showAdvertissement('item.advertisement')\">\n                            <span>Voir le profil C</span>\n                        </button>\n                        <button mat-menu-item>\n                            <a [routerLink]=\"['/dashboard/messenger']\" [queryParams]=\"{ matching: win._id }\">\n                                contacter\n                            </a>\n                        </button>\n                        <button mat-menu-item (click)=\"onDelete(win._id)\">\n                            <span>Effacer</span>\n                        </button>\n                    </mat-menu>\n                </ion-item>\n            </ion-list>\n        </div>\n    </section>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/wins/wins-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/wins/wins-routing.module.ts ***!
  \***************************************************/
/*! exports provided: WinsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WinsRoutingModule", function() { return WinsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _wins_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wins.component */ "./src/app/pages/wins/wins.component.ts");




const routes = [
    {
        path: '',
        component: _wins_component__WEBPACK_IMPORTED_MODULE_3__["WinsComponent"]
    }
];
let WinsRoutingModule = class WinsRoutingModule {
};
WinsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], WinsRoutingModule);



/***/ }),

/***/ "./src/app/pages/wins/wins.component.scss":
/*!************************************************!*\
  !*** ./src/app/pages/wins/wins.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".win-status {\n  position: relative;\n}\n\n.win-status ion-avatar {\n  width: 60px;\n  height: 60px;\n  border: 1px solid #d4d4d4;\n}\n\n.win-status ion-label h2 {\n  font-weight: normal;\n  font-size: 15px;\n  line-height: 18px;\n  text-align: left;\n  color: #393939;\n  margin-bottom: 5px !important;\n}\n\n.win-status ion-label p {\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 14.4px;\n  text-align: left;\n  color: #858585;\n}\n\n.win-status .more-btn-win {\n  padding: 5px 11px;\n  background-color: #ffffff !important;\n  color: black;\n  text-decoration: none;\n  font-size: 13px;\n  border: none;\n  outline: none;\n  cursor: pointer;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvd2lucy93aW5zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUZBO0VBR0ksV0FBVztFQUNYLFlBQVk7RUFDWix5QkFBeUI7QUFHN0I7O0FBUkE7RUFTTSxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLDZCQUE2QjtBQUduQzs7QUFqQkE7RUFpQk0sbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFJcEI7O0FBekJBO0VBeUJJLGlCQUFpQjtFQUNqQixvQ0FBb0M7RUFDcEMsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsWUFBWTtFQUNaLGFBQWE7RUFDYixlQUFlO0FBSW5CIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvd2lucy93aW5zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndpbi1zdGF0dXMge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGlvbi1hdmF0YXIge1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIGhlaWdodDogNjBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDRkNGQ0O1xuICB9XG4gIGlvbi1sYWJlbCB7XG4gICAgaDIge1xuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIGNvbG9yOiAjMzkzOTM5O1xuICAgICAgbWFyZ2luLWJvdHRvbTogNXB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIHAge1xuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxNC40cHg7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgY29sb3I6ICM4NTg1ODU7XG4gICAgfVxuICB9XG4gIC5tb3JlLWJ0bi13aW4ge1xuICAgIHBhZGRpbmc6IDVweCAxMXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/pages/wins/wins.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/wins/wins.component.ts ***!
  \**********************************************/
/*! exports provided: WinsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WinsComponent", function() { return WinsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_core_services_crud_matching_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/crud/matching.service */ "./src/app/core/services/crud/matching.service.ts");
/* harmony import */ var src_app_core_services_addapters_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/addapters/toast.service */ "./src/app/core/services/addapters/toast.service.ts");
/* harmony import */ var src_app_core_services_addapters_trans_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/addapters/trans.service */ "./src/app/core/services/addapters/trans.service.ts");
/* harmony import */ var src_app_core_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/utils */ "./src/app/core/utils/index.ts");
/* harmony import */ var src_app_core_services_global_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/global/auth.service */ "./src/app/core/services/global/auth.service.ts");







let WinsComponent = class WinsComponent {
    constructor(matchingServices, authService, toastService, transService) {
        this.matchingServices = matchingServices;
        this.authService = authService;
        this.toastService = toastService;
        this.transService = transService;
        this.wins = [];
    }
    ionViewDidEnter() {
        this.matchingServices.getWins().subscribe((res) => {
            this.wins = res.data;
            console.log(this.wins);
        });
    }
    /**
     * remove matching
     * @param id
     */
    onDelete(id) {
        this.matchingServices.deleteWin(id).subscribe(res => {
            const index = this.wins.findIndex(x => x._id = id);
            if (index !== -1) {
                this.wins.splice(index, 1);
            }
            this.toastService.success(this.transService.translate('delete_success'));
        });
    }
    /**
     * go back
     */
    goBack() {
        if (this.authService.user.role.name === 'candidate') {
            src_app_core_utils__WEBPACK_IMPORTED_MODULE_5__["Redirection"].candidateDashboard();
        }
        else {
            src_app_core_utils__WEBPACK_IMPORTED_MODULE_5__["Redirection"].dashboard();
        }
    }
    showCandidate(id) {
    }
    showAdvertissement(id) {
    }
};
WinsComponent.ctorParameters = () => [
    { type: src_app_core_services_crud_matching_service__WEBPACK_IMPORTED_MODULE_2__["MatchingService"] },
    { type: src_app_core_services_global_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: src_app_core_services_addapters_toast_service__WEBPACK_IMPORTED_MODULE_3__["ToastService"] },
    { type: src_app_core_services_addapters_trans_service__WEBPACK_IMPORTED_MODULE_4__["TransService"] }
];
WinsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-wins',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./wins.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/wins/wins.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./wins.component.scss */ "./src/app/pages/wins/wins.component.scss")).default]
    })
], WinsComponent);



/***/ }),

/***/ "./src/app/pages/wins/wins.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/wins/wins.module.ts ***!
  \*******************************************/
/*! exports provided: WinsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WinsModule", function() { return WinsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _wins_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wins-routing.module */ "./src/app/pages/wins/wins-routing.module.ts");
/* harmony import */ var _wins_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wins.component */ "./src/app/pages/wins/wins.component.ts");





let WinsModule = class WinsModule {
};
WinsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_wins_component__WEBPACK_IMPORTED_MODULE_4__["WinsComponent"]],
        imports: [
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
            _wins_routing_module__WEBPACK_IMPORTED_MODULE_3__["WinsRoutingModule"]
        ]
    })
], WinsModule);



/***/ })

}]);
//# sourceMappingURL=pages-wins-wins-module-es2015.js.map