(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-entreprise-entreprise-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/entreprise/components/entreprise-card/entreprise-card.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/entreprise/components/entreprise-card/entreprise-card.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"list-header ion-no-border\" mode=\"md\">\n    <ion-toolbar>\n        <ion-buttons (click)=\"goBack()\" class=\"roundbutton\" slot=\"start\">\n            <ion-icon src=\"./assets/icon/arrow-back.svg\"></ion-icon>\n        </ion-buttons>\n        <ion-buttons slot=\"primary\">\n            <ion-button routerLink=\"/dashboard/settings\">\n                <ion-icon slot=\"icon-only\" ios=\"settings-outline\" md=\"settings-outline\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n\n        <ion-title>Profil entreprise</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content [fullscreen]=\"true\" class=\"forms\">\n    <section class=\"entreprise-card\">\n        <div class=\"page-content\">\n\n            <div class=\"entreprise-profil\">\n                <div class=\"d-block position-relative mr-auto pt-1\" style=\"width: 120px\">\n                    <app-file-uploader [data]=\"value\" (fileChanges)=\"fileChanges($event)\"></app-file-uploader>\n                </div>\n                <div class=\"text-center mt-1 py-1 pb-1\">\n                    <span class=\"name ml-1\">{{ authService.user.company.name }}</span> <br>\n                    <span class=\"post ml-1\">{{ activitySector }}</span><br>\n                    <span class=\"city ml-1\">{{ authService.user.company.city }}</span>\n                </div>\n            </div>\n\n            <div class=\"bg-light px-1 py-2\">\n                <span (click)=\"openSlogan()\">\n                    <mat-icon class=\"float-right\" color=\"primary\">edit</mat-icon>\n                </span>\n                <p class=\"desciption text-center mb-1\">\n                    {{ authService.user.company.title }}\n                </p>\n            </div>\n\n            <div class=\"objectif border-bottom bg-light\">\n                <h3 class=\"title\">PRÉSENTATION GÉNÉRALE\n                    <span (click)=\"openPresentation()\">\n                        <mat-icon class=\"float-right\" color=\"primary\">edit</mat-icon>\n                    </span>\n                </h3>\n                <p class=\"desciption-objectif text-center mb-1\">\n                    {{ authService.user.company.description }}\n                </p>\n            </div>\n\n            <div class=\"skils bg-light\">\n                <h3 class=\"title\">VALEURS\n                    <mat-icon class=\"align-middle ml-1\" color=\"primary\" (click)=\"openValues()\">add</mat-icon>\n                </h3>\n\n                <ion-row class=\"ion-justify-content-center py-1\">\n                    <ion-col size=\"2\" class=\"ion-align-self-center\">\n                        <img src=\"./assets/icon/circle-website.svg\" alt=\"website\">\n                    </ion-col>\n                    <ng-container *ngIf=\"authService.user.company.webSite else addWebSite\">\n                        <ion-col size=\"10\" class=\"ion-align-self-center\">\n                            <span>{{ authService.user.company.webSite }}</span>\n                        </ion-col>\n                    </ng-container>\n                    <ng-template #addWebSite>\n                        <ion-col size=\"10\" class=\"ion-align-self-center\">\n                            <span>Ajoutez le lien de wiste web</span>\n                        </ion-col>\n                    </ng-template>\n                </ion-row>\n\n                <ion-row class=\"ion-justify-content-center py-1\">\n                    <ion-col size=\"2\" class=\"ion-align-self-center\">\n                        <img src=\"./assets/icon/circle-facebook.svg\" alt=\"facebook\">\n                    </ion-col>\n\n                    <ng-container *ngIf=\"authService.user.company.facebook else addFacebook\">\n                        <ion-col size=\"10\" class=\"ion-align-self-center\">\n                            <span>{{authService.user.company.facebook}}</span>\n                        </ion-col>\n                    </ng-container>\n                    <ng-template #addFacebook>\n                        <ion-col size=\"10\" class=\"ion-align-self-center\">\n                            <span>Ajoutez le compte facebook</span>\n                        </ion-col>\n                    </ng-template>\n                </ion-row>\n\n                <ion-row class=\"ion-justify-content-center py-1\">\n                    <ion-col size=\"2\" class=\"ion-align-self-center\">\n                        <img src=\"./assets/icon/circle-instagram.svg\" alt=\"instagram\">\n                    </ion-col>\n                    <ng-container *ngIf=\"authService.user.company.instagram else addInstagram\">\n                        <ion-col size=\"10\" class=\"ion-align-self-center\">\n                            <span>{{authService.user.company.instagram}}</span>\n                        </ion-col>\n                    </ng-container>\n                    <ng-template #addInstagram>\n                        <ion-col size=\"10\" class=\"ion-align-self-center\">\n                            <span>Ajoutez le compte instagram</span>\n                        </ion-col>\n                    </ng-template>\n                </ion-row>\n\n                <ion-row class=\"ion-justify-content-center py-1\">\n                    <ion-col size=\"2\" class=\"ion-align-self-center\">\n                        <img src=\"./assets/icon/circle-twitter.svg\" alt=\"twitter\">\n                    </ion-col>\n\n                    <ng-container *ngIf=\"authService.user.company.twitter else addTwitter\">\n                        <ion-col size=\"10\" class=\"ion-align-self-center\">\n                            <span>{{authService.user.company.twitter}}</span>\n                        </ion-col>\n                    </ng-container>\n                    <ng-template #addTwitter>\n                        <ion-col size=\"10\" class=\"ion-align-self-center\">\n                            <span>Ajoutez un compte twitter</span>\n                        </ion-col>\n                    </ng-template>\n                </ion-row>\n\n                <ion-row class=\"ion-justify-content-center py-1\">\n                    <ion-col size=\"2\" class=\"ion-align-self-center\">\n                        <img src=\"./assets/icon/circle-linkedin.svg\" alt=\"linkedin\">\n                    </ion-col>\n                    <ng-container *ngIf=\"authService.user.company.linkedin else addLinkedIn\">\n                        <ion-col size=\"10\" class=\"ion-align-self-center\">\n                            <span>{{authService.user.company.linkedin}}</span>\n                        </ion-col>\n                    </ng-container>\n                    <ng-template #addLinkedIn>\n                        <ion-col size=\"10\" class=\"ion-align-self-center\">\n                            <span>Ajoutez un compte linkedin</span>\n                        </ion-col>\n                    </ng-template>\n                </ion-row>\n\n                <div class=\"links cursor-pointer\" (click)=\"openLinks()\">\n                    Modifier vos réseau sociaux\n                </div>\n            </div>\n\n            <div class=\"annonces bg-light\">\n                <h3 class=\"title\">ANNONCES</h3>\n                <div *ngIf=\"advertisements.length > 0 else newAdvertisement\">\n                    <ion-row class=\"advertisement-detail w-100 mt-1\"\n                        *ngFor=\"let advertisement of advertisements\">\n                        <ion-col size=\"12\" class=\"ion-align-self-start\">\n                            <div class=\"advertisement-data\">\n                                <h2 class=\"advertisement-name\">{{advertisement.desiredJob}}</h2>\n                                <p class=\"city\">{{ advertisement.location }}</p>\n                                <p class=\"salary\">De {{ advertisement.supposedSalaryMin }} DH</p>\n                                <p class=\"salary\">à {{ advertisement.supposedSalaryMax }} DH</p>\n                            </div>\n                        </ion-col>\n                        <ion-col size=\"3\" class=\"advertisement-info text-left\">\n                            {{advertisement.views}} <br>\n                            Vues\n                        </ion-col>\n                        <ion-col size=\"3\" class=\"advertisement-info text-left\">\n                            {{ advertisement.wins }} <br>\n                            Wins\n                        </ion-col>\n                        <ion-col size=\"6\" class=\"advertisement-info text-left\">\n                            Édité le {{advertisement.updatedAt | date:'dd/MM'}}<br>\n                            {{ advertisement.recruiter.firstName }} {{ advertisement.recruiter.lastName }}\n                        </ion-col>\n                    </ion-row>\n                </div>\n                <div class=\"text-center mt-1\">\n                    <ion-button class=\"light-color w-80\" routerLink=\"/dashboard/advertisement/slider-advertisement\"\n                        routerDirection=\"root\">\n                        <ion-icon name=\"add\"></ion-icon>\n                        Ajouter une annonce\n                    </ion-button>\n                </div>\n                <ng-template #newAdvertisement>\n                    <div class=\"d-block position-relative mr-auto pt-1 w-30\">\n                        <img src=\"./assets/img/not-found.svg\" alt=\"Not found\">\n                    </div>\n                </ng-template>\n            </div>\n        </div>\n    </section>\n\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/entreprise/components/update/links-entreprise/links-entreprise.component.html":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/entreprise/components/update/links-entreprise/links-entreprise.component.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form class=\"d-block\" [formGroup]=\"form\" (ngSubmit)=\"onSave()\">\n    <ion-header class=\"list-header ion-no-border\" mode=\"md\">\n        <ion-toolbar>\n            <ion-buttons (click)=\"modalController.dismiss()\" routerDirection=\"root\" class=\"roundbutton\" slot=\"start\">\n                <ion-icon src=\"./assets/icon/arrow-back.svg\"></ion-icon>\n            </ion-buttons>\n            <ion-title>Réseau sociaux</ion-title>\n        </ion-toolbar>\n    </ion-header>\n    <ion-content [fullscreen]=\"true\" class=\"forms\">\n        <section class=\"steps-content\">\n            <div class=\"page-content\">\n                <div class=\"custom-input-icon\">\n                    <ion-icon class=\"align-middle\" src=\"./assets/icon/website-input.svg\"></ion-icon>\n                    <mat-form-field class=\"ml-1 w-90\">\n                        <mat-label>site web</mat-label>\n                        <input matInput placeholder=\"exemple.com\" formControlName=\"webSite\">\n                        <span matPrefix>www.</span>\n                    </mat-form-field>\n                </div>\n\n                <div class=\"custom-input-icon\">\n                    <ion-icon class=\"align-middle\" src=\"./assets/icon/facebook-input.svg\"></ion-icon>\n                    <mat-form-field class=\"ml-1 w-90\">\n                        <mat-label>Facebook</mat-label>\n                        <input matInput placeholder=\"www.facebbok.com/Yassmine.jtioui\" formControlName=\"facebook\">\n                    </mat-form-field>\n                </div>\n\n                <div class=\"custom-input-icon\">\n                    <ion-icon class=\"align-middle\" src=\"./assets/icon/instagram-input.svg\"></ion-icon>\n                    <mat-form-field class=\"ml-1 w-90\">\n                        <mat-label>Instagram</mat-label>\n                        <input matInput placeholder=\"\" formControlName=\"instagram\">\n                        <span matPrefix>@</span>\n                    </mat-form-field>\n                </div>\n\n                <div class=\"custom-input-icon\">\n                    <ion-icon class=\"align-middle\" src=\"./assets/icon/twitter-input.svg\"></ion-icon>\n                    <mat-form-field class=\"ml-1 w-90\">\n                        <mat-label>Twitter</mat-label>\n                        <input matInput placeholder=\"\" formControlName=\"twitter\">\n                        <span matPrefix>@</span>\n                    </mat-form-field>\n                </div>\n\n                <div class=\"custom-input-icon\">\n                    <ion-icon class=\"align-middle\" src=\"./assets/icon/linkedin-input.svg\"></ion-icon>\n                    <mat-form-field class=\"ml-1 w-90\">\n                        <mat-label>Linkedin</mat-label>\n                        <input matInput placeholder=\"www.linkedin.com/Yassmine.jtioui\" formControlName=\"linkedin\">\n                    </mat-form-field>\n                </div>\n            </div>\n            <div class=\"text-right mt-2\">\n                <ion-button type=\"submit\" [disabled]=\"!form.valid\">\n                    Enregistrer\n                </ion-button>\n            </div>\n        </section>\n    </ion-content>\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/entreprise/components/update/presentation/presentation.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/entreprise/components/update/presentation/presentation.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form class=\"d-block\" [formGroup]=\"form\" (ngSubmit)=\"onSave()\">\n    <ion-header class=\"list-header ion-no-border\" mode=\"md\">\n        <ion-toolbar>\n            <ion-buttons (click)=\"modalController.dismiss()\" routerDirection=\"root\" class=\"roundbutton\" slot=\"start\">\n                <ion-icon src=\"./assets/icon/arrow-back.svg\"></ion-icon>\n            </ion-buttons>\n            <ion-title>Présentation</ion-title>\n        </ion-toolbar>\n    </ion-header>\n    <ion-content [fullscreen]=\"true\" class=\"forms\">\n        <section class=\"steps-content\">\n            <div class=\"page-content\">\n                <mat-form-field class=\"w-100\">\n                    <mat-label>Description de l’entreprise</mat-label>\n                    <textarea matInput placeholder=\"\" matTextareaAutosize matAutosizeMinRows=1 matAutosizeMaxRows=7\n                        formControlName=\"description\">\n                    </textarea>\n                </mat-form-field>\n            </div>\n            <div class=\"text-right mt-2\">\n                <ion-button type=\"submit\" [disabled]=\"!form.valid\">\n                    Enregistrer\n                </ion-button>\n            </div>\n        </section>\n    </ion-content>\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/entreprise/components/update/slogan/slogan.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/entreprise/components/update/slogan/slogan.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form class=\"d-block\" [formGroup]=\"form\" (ngSubmit)=\"onSave()\">\n    <ion-header class=\"list-header ion-no-border\" mode=\"md\">\n        <ion-toolbar>\n            <ion-buttons (click)=\"modalController.dismiss()\" routerDirection=\"root\" class=\"roundbutton\" slot=\"start\">\n                <ion-icon src=\"./assets/icon/arrow-back.svg\"></ion-icon>\n            </ion-buttons>\n            <ion-title>Slogan entreprise</ion-title>\n        </ion-toolbar>\n    </ion-header>\n    <ion-content [fullscreen]=\"true\" class=\"forms\">\n        <section class=\"steps-content\">\n            <div class=\"page-content\">\n                <mat-form-field class=\"w-100\">\n                    <mat-label>Slogan</mat-label>\n                    <textarea matInput placeholder=\"\" matTextareaAutosize matAutosizeMinRows=1 matAutosizeMaxRows=7\n                        formControlName=\"title\">\n                    </textarea>\n                </mat-form-field>\n            </div>\n            <div class=\"text-right mt-2\">\n                <ion-button type=\"submit\" [disabled]=\"!form.valid\">\n                    Enregistrer\n                </ion-button>\n            </div>\n        </section>\n    </ion-content>\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/entreprise/components/update/values-entreprise/values-entreprise.component.html":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/entreprise/components/update/values-entreprise/values-entreprise.component.html ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form class=\"d-block\" [formGroup]=\"form\" (ngSubmit)=\"onSave()\">\n    <!--  -->\n    <ion-header class=\"list-header ion-no-border\" mode=\"md\">\n        <ion-toolbar>\n            <ion-buttons (click)=\"modalController.dismiss()\" routerDirection=\"root\" class=\"roundbutton\" slot=\"start\">\n                <ion-icon src=\"./assets/icon/arrow-back.svg\"></ion-icon>\n            </ion-buttons>\n            <ion-title>Valeurs</ion-title>\n        </ion-toolbar>\n    </ion-header>\n    <ion-content [fullscreen]=\"true\" class=\"forms\">\n        <section class=\"steps-content\">\n            <div class=\"page-content\">\n\n                <app-multi-select label=\"Valeurs\" [limit]=\"6\" collection=\"values\" formControlName=\"values\">\n                </app-multi-select>\n\n                <!-- <mat-accordion class=\"custom-mat-accordion w-100\">\n                    <mat-expansion-panel>\n                        <mat-expansion-panel-header class=\"pl-0\">\n                            <mat-panel-title>\n                                Valeurs\n                            </mat-panel-title>\n                        </mat-expansion-panel-header>\n\n                        <div *ngFor=\"let item of values; let i = index;\" class=\"d-inline w-50\"\n                            [ngClass]=\"{'mr-1': i%2 === 0, 'float-right': i%2 !== 0}\">\n                            <mat-checkbox [checked]=\"item.checked\" [value]=\"item._id\"\n                                (change)=\"onChangeValues(i, $event)\" [disabled]=\"maxLenght\">\n                                {{ item.name }}\n                            </mat-checkbox>\n                        </div>\n                    </mat-expansion-panel>\n                </mat-accordion> -->\n                <!-- <span class=\"float-right mt-1\"> {{ checkedValue }} /{{ values.length }}</span> -->\n\n                <!-- <ion-item class=\"custom-input\">\n                <ion-label position=\"floating\">Autres valeurs </ion-label>\n                <ion-input type=\"text\" #element></ion-input>\n                <ion-icon (click)=\"addValue(element)\" name=\"add\"></ion-icon>\n            </ion-item> -->\n\n                <!-- <mat-form-field class=\"w-100 mt-2\">\n                <mat-label>Autres valeurs</mat-label>\n                <input matInput placeholder=\"ajouter vos valeurs\" #element>\n                <mat-icon matSuffix (click)=\"addValue(element)\">add</mat-icon>\n            </mat-form-field> -->\n\n                <!-- <div class=\"mb-1 mt-1\">\n                <ul class=\"customList\">\n                    <li *ngFor=\"let item of otherValues; let i = index;\">\n                        {{ item }}\n                        <span class=\"text-primary text-left\" (click)=\"removeValue(i)\">\n                            <mat-icon class=\"cursor-pointer btn-round vertical-align ml-1\">close</mat-icon>\n                        </span><br>\n                    </li>\n                </ul>\n            </div> -->\n\n            </div>\n            <div class=\"text-right mt-2\">\n                <ion-button type=\"submit\" [disabled]=\"!form.valid\" (click)=\"onSave()\">\n                    Enregistrer\n                </ion-button>\n            </div>\n        </section>\n    </ion-content>\n\n</form>");

/***/ }),

/***/ "./src/app/core/services/crud/company.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/core/services/crud/company.service.ts ***!
  \*******************************************************/
/*! exports provided: CompanyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyService", function() { return CompanyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _global_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../global/api.service */ "./src/app/core/services/global/api.service.ts");




let CompanyService = class CompanyService {
    constructor(apiService) {
        this.apiService = apiService;
        this.$changes = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.changes = this.$changes.asObservable();
    }
    setChanges(change) {
        this.$changes.next(change);
    }
    /**
     * update company infos
     * @param infos
     */
    updateInfos(infos) {
        return this.apiService.put('account-ms/companies/infos', infos);
    }
    /**
     * update company values
     * @param values
     */
    updateValues(values) {
        return this.apiService.put('account-ms/companies/provile/values', values);
    }
    /**
     * update social networks
     * @param socialNetwork
     */
    updateSocialNetwork(socialNetwork) {
        return this.apiService.put('account-ms/companies/profile/social-network', socialNetwork);
    }
    /**
     * update description
     * @param description
     */
    updateDescription(description) {
        return this.apiService.put('account-ms/companies/profile/description', description);
    }
    /**
     * update title
     * @param title
     */
    updateTitle(title) {
        return this.apiService.put('account-ms/companies/profile/title', title);
    }
    /**
     * update title
     * @param title
     */
    updateLogo(logo) {
        return this.apiService.put('account-ms/companies/profile/logo', { logo });
    }
};
CompanyService.ctorParameters = () => [
    { type: _global_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
];
CompanyService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CompanyService);



/***/ }),

/***/ "./src/app/pages/entreprise/components/entreprise-card/entreprise-card.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/entreprise/components/entreprise-card/entreprise-card.component.scss ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".logo {\n  width: 130px !important;\n  height: 130px !important;\n  border-radius: 100% !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZW50cmVwcmlzZS9jb21wb25lbnRzL2VudHJlcHJpc2UtY2FyZC9lbnRyZXByaXNlLWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1QkFBdUI7RUFDdkIsd0JBQXdCO0VBQ3hCLDhCQUE4QjtBQUNsQyIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2VudHJlcHJpc2UvY29tcG9uZW50cy9lbnRyZXByaXNlLWNhcmQvZW50cmVwcmlzZS1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ28ge1xuICAgIHdpZHRoOiAxMzBweCAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogMTMwcHggIWltcG9ydGFudDtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlICFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/entreprise/components/entreprise-card/entreprise-card.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/entreprise/components/entreprise-card/entreprise-card.component.ts ***!
  \******************************************************************************************/
/*! exports provided: EntrepriseCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntrepriseCardComponent", function() { return EntrepriseCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _update_links_entreprise_links_entreprise_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../update/links-entreprise/links-entreprise.component */ "./src/app/pages/entreprise/components/update/links-entreprise/links-entreprise.component.ts");
/* harmony import */ var _update_presentation_presentation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../update/presentation/presentation.component */ "./src/app/pages/entreprise/components/update/presentation/presentation.component.ts");
/* harmony import */ var _update_slogan_slogan_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../update/slogan/slogan.component */ "./src/app/pages/entreprise/components/update/slogan/slogan.component.ts");
/* harmony import */ var _update_values_entreprise_values_entreprise_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../update/values-entreprise/values-entreprise.component */ "./src/app/pages/entreprise/components/update/values-entreprise/values-entreprise.component.ts");
/* harmony import */ var src_app_core_services_global_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/global/auth.service */ "./src/app/core/services/global/auth.service.ts");
/* harmony import */ var src_app_core_services_global_global_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/global/global.service */ "./src/app/core/services/global/global.service.ts");
/* harmony import */ var src_app_core_services_crud_advertisement_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/crud/advertisement.service */ "./src/app/core/services/crud/advertisement.service.ts");
/* harmony import */ var src_app_core_services_crud_company_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/services/crud/company.service */ "./src/app/core/services/crud/company.service.ts");
/* harmony import */ var src_app_core_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/utils */ "./src/app/core/utils/index.ts");












let EntrepriseCardComponent = class EntrepriseCardComponent {
    constructor(modalController, authService, globalService, advertisementService, companyService) {
        this.modalController = modalController;
        this.authService = authService;
        this.globalService = globalService;
        this.advertisementService = advertisementService;
        this.companyService = companyService;
        this.advertisements = [];
    }
    ionViewDidEnter() {
        const index = this.globalService.activitySectors.findIndex(x => x._id === this.authService.user.company.activitySector);
        if (index !== -1) {
            this.activitySector = this.globalService.activitySectors[index].name;
        }
        this.advertisementService.read(null, 2).subscribe((response) => {
            this.advertisements = response.data;
        });
        this.value = {
            file: this.authService.user.company.logo ? this.authService.user.company.logo : null,
            type: 'edit-image'
        };
        console.log(this.authService.user);
    }
    openSlogan() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _update_slogan_slogan_component__WEBPACK_IMPORTED_MODULE_5__["SloganComponent"]
            });
            return yield modal.present();
        });
    }
    openPresentation() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _update_presentation_presentation_component__WEBPACK_IMPORTED_MODULE_4__["PresentationComponent"]
            });
            return yield modal.present();
        });
    }
    openValues() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _update_values_entreprise_values_entreprise_component__WEBPACK_IMPORTED_MODULE_6__["ValuesEntrepriseComponent"]
            });
            return yield modal.present();
        });
    }
    openLinks() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _update_links_entreprise_links_entreprise_component__WEBPACK_IMPORTED_MODULE_3__["LinksEntrepriseComponent"]
            });
            return yield modal.present();
        });
    }
    /**
     * file changes
     * @param value
     */
    fileChanges(value) {
        this.companyService.updateLogo(value).subscribe(res => {
            this.authService.user.company['logo'] = value;
        });
    }
    /**
     * go back
     */
    goBack() {
        if (this.authService.user.role.name === 'candidate') {
            src_app_core_utils__WEBPACK_IMPORTED_MODULE_11__["Redirection"].candidateDashboard();
        }
        else {
            src_app_core_utils__WEBPACK_IMPORTED_MODULE_11__["Redirection"].dashboard();
        }
    }
};
EntrepriseCardComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: src_app_core_services_global_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
    { type: src_app_core_services_global_global_service__WEBPACK_IMPORTED_MODULE_8__["GlobalService"] },
    { type: src_app_core_services_crud_advertisement_service__WEBPACK_IMPORTED_MODULE_9__["AdvertisementService"] },
    { type: src_app_core_services_crud_company_service__WEBPACK_IMPORTED_MODULE_10__["CompanyService"] }
];
EntrepriseCardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-entreprise-card',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./entreprise-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/entreprise/components/entreprise-card/entreprise-card.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./entreprise-card.component.scss */ "./src/app/pages/entreprise/components/entreprise-card/entreprise-card.component.scss")).default]
    })
], EntrepriseCardComponent);



/***/ }),

/***/ "./src/app/pages/entreprise/components/update/links-entreprise/links-entreprise.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/entreprise/components/update/links-entreprise/links-entreprise.component.scss ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2VudHJlcHJpc2UvY29tcG9uZW50cy91cGRhdGUvbGlua3MtZW50cmVwcmlzZS9saW5rcy1lbnRyZXByaXNlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/entreprise/components/update/links-entreprise/links-entreprise.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/entreprise/components/update/links-entreprise/links-entreprise.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: LinksEntrepriseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinksEntrepriseComponent", function() { return LinksEntrepriseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_core_services_crud_company_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/crud/company.service */ "./src/app/core/services/crud/company.service.ts");
/* harmony import */ var src_app_core_services_addapters_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/addapters/toast.service */ "./src/app/core/services/addapters/toast.service.ts");
/* harmony import */ var src_app_core_services_addapters_trans_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/addapters/trans.service */ "./src/app/core/services/addapters/trans.service.ts");
/* harmony import */ var src_app_core_services_global_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/global/auth.service */ "./src/app/core/services/global/auth.service.ts");








let LinksEntrepriseComponent = class LinksEntrepriseComponent {
    constructor(modalController, authService, companyService, toastService, transService) {
        this.modalController = modalController;
        this.authService = authService;
        this.companyService = companyService;
        this.toastService = toastService;
        this.transService = transService;
        this.initForm();
    }
    ionViewDidEnter() {
    }
    /**
     * init links form
     */
    initForm() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            webSite: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.authService.user.company.webSite),
            linkedin: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.authService.user.company.linkedin),
            facebook: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.authService.user.company.facebook),
            twitter: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.authService.user.company.twitter),
            instagram: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.authService.user.company.instagram)
        });
    }
    /**
     * on save
     */
    onSave() {
        this.companyService.updateSocialNetwork(this.form.value).subscribe((response) => {
            this.authService.user.company = Object.assign(this.authService.user.company, this.form.value);
            this.toastService.success(this.transService.translate(response.message));
            this.modalController.dismiss();
        });
    }
};
LinksEntrepriseComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: src_app_core_services_global_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
    { type: src_app_core_services_crud_company_service__WEBPACK_IMPORTED_MODULE_4__["CompanyService"] },
    { type: src_app_core_services_addapters_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"] },
    { type: src_app_core_services_addapters_trans_service__WEBPACK_IMPORTED_MODULE_6__["TransService"] }
];
LinksEntrepriseComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-links-entreprise',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./links-entreprise.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/entreprise/components/update/links-entreprise/links-entreprise.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./links-entreprise.component.scss */ "./src/app/pages/entreprise/components/update/links-entreprise/links-entreprise.component.scss")).default]
    })
], LinksEntrepriseComponent);



/***/ }),

/***/ "./src/app/pages/entreprise/components/update/presentation/presentation.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/entreprise/components/update/presentation/presentation.component.scss ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2VudHJlcHJpc2UvY29tcG9uZW50cy91cGRhdGUvcHJlc2VudGF0aW9uL3ByZXNlbnRhdGlvbi5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/entreprise/components/update/presentation/presentation.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/entreprise/components/update/presentation/presentation.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: PresentationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PresentationComponent", function() { return PresentationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_core_services_global_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/global/auth.service */ "./src/app/core/services/global/auth.service.ts");
/* harmony import */ var src_app_core_services_crud_company_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/crud/company.service */ "./src/app/core/services/crud/company.service.ts");
/* harmony import */ var src_app_core_services_addapters_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/addapters/toast.service */ "./src/app/core/services/addapters/toast.service.ts");
/* harmony import */ var src_app_core_services_addapters_trans_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/addapters/trans.service */ "./src/app/core/services/addapters/trans.service.ts");








let PresentationComponent = class PresentationComponent {
    constructor(modalController, authService, companyService, toastService, transService) {
        this.modalController = modalController;
        this.authService = authService;
        this.companyService = companyService;
        this.toastService = toastService;
        this.transService = transService;
        this.initForm();
    }
    ionViewDidEnter() {
    }
    /**
     * init description form
     */
    initForm() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.authService.user.company.description, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required)
        });
    }
    /**
     * update description
     */
    onSave() {
        this.companyService.updateDescription(this.form.value).subscribe((response) => {
            this.authService.user.company = Object.assign(this.authService.user.company, this.form.value);
            this.toastService.success(this.transService.translate(response.message));
            this.modalController.dismiss();
        });
    }
};
PresentationComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: src_app_core_services_global_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: src_app_core_services_crud_company_service__WEBPACK_IMPORTED_MODULE_5__["CompanyService"] },
    { type: src_app_core_services_addapters_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"] },
    { type: src_app_core_services_addapters_trans_service__WEBPACK_IMPORTED_MODULE_7__["TransService"] }
];
PresentationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-presentation',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./presentation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/entreprise/components/update/presentation/presentation.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./presentation.component.scss */ "./src/app/pages/entreprise/components/update/presentation/presentation.component.scss")).default]
    })
], PresentationComponent);



/***/ }),

/***/ "./src/app/pages/entreprise/components/update/slogan/slogan.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/entreprise/components/update/slogan/slogan.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2VudHJlcHJpc2UvY29tcG9uZW50cy91cGRhdGUvc2xvZ2FuL3Nsb2dhbi5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/entreprise/components/update/slogan/slogan.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/entreprise/components/update/slogan/slogan.component.ts ***!
  \*******************************************************************************/
/*! exports provided: SloganComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SloganComponent", function() { return SloganComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_core_services_crud_company_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/crud/company.service */ "./src/app/core/services/crud/company.service.ts");
/* harmony import */ var src_app_core_services_addapters_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/addapters/toast.service */ "./src/app/core/services/addapters/toast.service.ts");
/* harmony import */ var src_app_core_services_addapters_trans_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/addapters/trans.service */ "./src/app/core/services/addapters/trans.service.ts");
/* harmony import */ var src_app_core_services_global_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/global/auth.service */ "./src/app/core/services/global/auth.service.ts");








let SloganComponent = class SloganComponent {
    constructor(modalController, authService, companyService, toastService, transService) {
        this.modalController = modalController;
        this.authService = authService;
        this.companyService = companyService;
        this.toastService = toastService;
        this.transService = transService;
        this.initForm();
    }
    ionViewDidEnter() {
    }
    /**
     * init title form
     */
    initForm() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.authService.user.company.title, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required)
        });
    }
    /**
     * update title of company
     */
    onSave() {
        this.companyService.updateTitle(this.form.value).subscribe((response) => {
            this.authService.user.company = Object.assign(this.authService.user.company, this.form.value);
            this.toastService.success(this.transService.translate(response.message));
            this.modalController.dismiss();
        });
    }
};
SloganComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: src_app_core_services_global_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
    { type: src_app_core_services_crud_company_service__WEBPACK_IMPORTED_MODULE_4__["CompanyService"] },
    { type: src_app_core_services_addapters_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"] },
    { type: src_app_core_services_addapters_trans_service__WEBPACK_IMPORTED_MODULE_6__["TransService"] }
];
SloganComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-slogan',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./slogan.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/entreprise/components/update/slogan/slogan.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./slogan.component.scss */ "./src/app/pages/entreprise/components/update/slogan/slogan.component.scss")).default]
    })
], SloganComponent);



/***/ }),

/***/ "./src/app/pages/entreprise/components/update/values-entreprise/values-entreprise.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/entreprise/components/update/values-entreprise/values-entreprise.component.scss ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2VudHJlcHJpc2UvY29tcG9uZW50cy91cGRhdGUvdmFsdWVzLWVudHJlcHJpc2UvdmFsdWVzLWVudHJlcHJpc2UuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/entreprise/components/update/values-entreprise/values-entreprise.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/entreprise/components/update/values-entreprise/values-entreprise.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: ValuesEntrepriseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValuesEntrepriseComponent", function() { return ValuesEntrepriseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_core_services_global_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/global/global.service */ "./src/app/core/services/global/global.service.ts");
/* harmony import */ var src_app_core_services_addapters_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/addapters/toast.service */ "./src/app/core/services/addapters/toast.service.ts");
/* harmony import */ var src_app_core_services_addapters_trans_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/addapters/trans.service */ "./src/app/core/services/addapters/trans.service.ts");
/* harmony import */ var src_app_core_services_crud_company_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/crud/company.service */ "./src/app/core/services/crud/company.service.ts");
/* harmony import */ var src_app_core_services_global_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/global/auth.service */ "./src/app/core/services/global/auth.service.ts");









let ValuesEntrepriseComponent = class ValuesEntrepriseComponent {
    constructor(modalController, globalService, authService, toastService, transService, companyService) {
        this.modalController = modalController;
        this.globalService = globalService;
        this.authService = authService;
        this.toastService = toastService;
        this.transService = transService;
        this.companyService = companyService;
        this.values = [];
        this.otherValues = [];
        this.checkedValue = 0;
        this.maxLenght = false;
        this.disabled = true;
    }
    ngOnInit() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            values: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.authService.user.company.values ? this.authService.user.company.values : [])
        });
    }
    // getCheckedValues() {
    //   this.globalService.values.forEach((val) => {
    //     const index = this.authService.user.company.values.findIndex(x => x._id === val._id);
    //     this.values.push({
    //       _id: val._id,
    //       name: val.name,
    //       checked: index !== -1
    //     });
    //   });
    // }
    // onChangeValues(i: number, event) {
    //   this.checkedValue = this.values.filter(x => (x.checked)).length;
    //   if (this.checkedValue === 6) {
    //     event.source._checked = false;
    //     this.values[i]['checked'] = false;
    //     this.checkedValue -= 1;
    //   } else {
    //     this.values[i]['checked'] = event.checked;
    //     this.checkedValue += 1;
    //   }
    //   this.enableButton();
    // }
    // enableButton() {
    //   const valuesSize = this.values.filter(x => (x.checked)).length;
    //   this.disabled = valuesSize === 0;
    // }
    // addValue(element) {
    //   this.otherValues.push(element.value);
    //   element.value = null;
    // }
    // removeValue(i: number) {
    //   this.otherValues.splice(i, 1);
    // }
    /**
     * save values
     */
    onSave() {
        const val = { values: this.values.filter(x => (x.checked)).map(x => (x._id)) };
        console.log(val);
        this.companyService.updateValues(val).subscribe((response) => {
            this.authService.user.company = Object.assign(this.authService.user.company, this.form.value);
            this.toastService.success(this.transService.translate(response.message));
            this.modalController.dismiss();
        });
    }
};
ValuesEntrepriseComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: src_app_core_services_global_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"] },
    { type: src_app_core_services_global_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] },
    { type: src_app_core_services_addapters_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"] },
    { type: src_app_core_services_addapters_trans_service__WEBPACK_IMPORTED_MODULE_6__["TransService"] },
    { type: src_app_core_services_crud_company_service__WEBPACK_IMPORTED_MODULE_7__["CompanyService"] }
];
ValuesEntrepriseComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-values-entreprise',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./values-entreprise.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/entreprise/components/update/values-entreprise/values-entreprise.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./values-entreprise.component.scss */ "./src/app/pages/entreprise/components/update/values-entreprise/values-entreprise.component.scss")).default]
    })
], ValuesEntrepriseComponent);



/***/ }),

/***/ "./src/app/pages/entreprise/entreprise-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/entreprise/entreprise-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: EntrepriseRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntrepriseRoutingModule", function() { return EntrepriseRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _components_entreprise_card_entreprise_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/entreprise-card/entreprise-card.component */ "./src/app/pages/entreprise/components/entreprise-card/entreprise-card.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [
    {
        path: '',
        component: _components_entreprise_card_entreprise_card_component__WEBPACK_IMPORTED_MODULE_1__["EntrepriseCardComponent"]
    }
];
let EntrepriseRoutingModule = class EntrepriseRoutingModule {
};
EntrepriseRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })
], EntrepriseRoutingModule);



/***/ }),

/***/ "./src/app/pages/entreprise/entreprise.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/entreprise/entreprise.module.ts ***!
  \*******************************************************/
/*! exports provided: EntrepriseModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntrepriseModule", function() { return EntrepriseModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _components_entreprise_card_entreprise_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/entreprise-card/entreprise-card.component */ "./src/app/pages/entreprise/components/entreprise-card/entreprise-card.component.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _entreprise_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./entreprise-routing.module */ "./src/app/pages/entreprise/entreprise-routing.module.ts");
/* harmony import */ var _components_update_slogan_slogan_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/update/slogan/slogan.component */ "./src/app/pages/entreprise/components/update/slogan/slogan.component.ts");
/* harmony import */ var _components_update_presentation_presentation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/update/presentation/presentation.component */ "./src/app/pages/entreprise/components/update/presentation/presentation.component.ts");
/* harmony import */ var _components_update_links_entreprise_links_entreprise_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/update/links-entreprise/links-entreprise.component */ "./src/app/pages/entreprise/components/update/links-entreprise/links-entreprise.component.ts");
/* harmony import */ var _components_update_values_entreprise_values_entreprise_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/update/values-entreprise/values-entreprise.component */ "./src/app/pages/entreprise/components/update/values-entreprise/values-entreprise.component.ts");









let EntrepriseModule = class EntrepriseModule {
};
EntrepriseModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [_components_entreprise_card_entreprise_card_component__WEBPACK_IMPORTED_MODULE_1__["EntrepriseCardComponent"], _components_update_slogan_slogan_component__WEBPACK_IMPORTED_MODULE_5__["SloganComponent"], _components_update_presentation_presentation_component__WEBPACK_IMPORTED_MODULE_6__["PresentationComponent"], _components_update_links_entreprise_links_entreprise_component__WEBPACK_IMPORTED_MODULE_7__["LinksEntrepriseComponent"], _components_update_values_entreprise_values_entreprise_component__WEBPACK_IMPORTED_MODULE_8__["ValuesEntrepriseComponent"]],
        imports: [
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            _entreprise_routing_module__WEBPACK_IMPORTED_MODULE_4__["EntrepriseRoutingModule"]
        ]
    })
], EntrepriseModule);



/***/ })

}]);
//# sourceMappingURL=pages-entreprise-entreprise-module-es2015.js.map