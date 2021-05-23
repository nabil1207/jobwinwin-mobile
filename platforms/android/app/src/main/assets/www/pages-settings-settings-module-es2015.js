(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-settings-settings-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/settings/components/account/account.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/settings/components/account/account.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form class=\"d-block\" [formGroup]=\"form\" (ngSubmit)='onSave()'>\n    <ion-header class=\"list-header ion-no-border\" mode=\"md\">\n        <ion-toolbar>\n            <ion-buttons (click)=\"modalController.dismiss()\" routerDirection=\"root\" class=\"roundbutton\" slot=\"start\">\n                <ion-icon src=\"./assets/icon/arrow-back.svg\"></ion-icon>\n            </ion-buttons>\n            <ion-title>Compte</ion-title>\n        </ion-toolbar>\n    </ion-header>\n    <ion-content [fullscreen]=\"true\" class=\"forms\">\n        <section class=\"steps-content\">\n            <div class=\"page-content\">\n\n                <div class=\"w-100\">\n                    <ion-item class=\"custom-input\">\n                        <ion-label position=\"floating\">Email <span class=\"required\">*</span></ion-label>\n                        <ion-input type=\"email\" formControlName=\"email\" readonly></ion-input>\n                    </ion-item>\n                </div>\n\n                <div class=\"w-100\">\n                    <ion-item class=\"custom-input\">\n                        <ion-label position=\"floating\">Mot de passe actuel <span class=\"required\">*</span></ion-label>\n                        <ion-input type=\"password\" formControlName=\"currentPassword\"></ion-input>\n                    </ion-item>\n                </div>\n                <small class=\"text-error\"\n                    *ngIf=\"form.get('currentPassword').invalid && (form.get('currentPassword').dirty || form.get('currentPassword').touched) \">\n                    Champ obligatoire\n                </small>\n\n                <div class=\"w-100\">\n                    <ion-item class=\"custom-input\">\n                        <ion-label position=\"floating\">Mot de passe <span class=\"required\">*</span></ion-label>\n                        <ion-input type=\"password\" formControlName=\"newPassword\"></ion-input>\n                    </ion-item>\n                </div>\n                <small class=\"text-error\"\n                    *ngIf=\"form.get('newPassword').invalid && (form.get('newPassword').dirty || form.get('newPassword').touched) \">\n                    Champ obligatoire\n                </small>\n\n                <div class=\"w-100\">\n                    <ion-item class=\"custom-input\">\n                        <ion-label position=\"floating\">Confirmer le mot de passe <span class=\"required\">*</span>\n                        </ion-label>\n                        <ion-input type=\"password\" formControlName=\"confirmPassword\"></ion-input>\n                    </ion-item>\n                </div>\n                <small class=\"text-error\"\n                    *ngIf=\"form.get('confirmPassword').invalid && (form.get('confirmPassword').dirty || form.get('confirmPassword').touched) \">\n                    Champ obligatoire\n                </small>\n\n                <small class=\"text-error\" *ngIf=\"form.get('confirmPassword').touched &&\n                !form.get('confirmPassword').hasError('required') &&\n                !form.get('confirmPassword').hasError('minlength') &&\n                form.hasError('passwordsDoNotMatch')\" class=\"text-error\">\n                    Les mots de passe ne correspondent pas.\n                </small>\n\n            </div>\n            <div class=\"text-right mt-2\">\n                <ion-button type=\"submit\" [disabled]=\"!form.valid\">\n                    Enregistrer\n                </ion-button>\n            </div>\n        </section>\n    </ion-content>\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/settings/components/entreprise/entreprise.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/settings/components/entreprise/entreprise.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"list-header ion-no-border\" mode=\"md\">\n    <ion-toolbar>\n        <ion-buttons (click)=\"modalController.dismiss()\" routerDirection=\"root\" class=\"roundbutton\" slot=\"start\">\n            <ion-icon src=\"./assets/icon/arrow-back.svg\"></ion-icon>\n        </ion-buttons>\n        <!-- <ion-buttons slot=\"end\">\n            <ion-button>\n                Enregistrer\n            </ion-button>\n        </ion-buttons> -->\n        <ion-title>Informations entreprise</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content [fullscreen]=\"true\" class=\"forms\">\n    <section class=\"steps-content\">\n        <div class=\"page-content\">\n            <form class=\"d-block\" [formGroup]=\"form\">\n                <mat-form-field class=\"w-100\">\n                    <mat-label>Nom de l’entreprise</mat-label>\n                    <input type=\"type\" matInput value=\"Fairmont royal palm marrakech\" formControlName=\"name\">\n                </mat-form-field>\n\n                <mat-form-field class=\"w-100\">\n                    <mat-label>Nom du responsable</mat-label>\n                    <input type=\"text\" matInput value=\"yasmine\" formControlName=\"managerLastName\">\n                </mat-form-field>\n\n                <mat-form-field class=\"w-100\">\n                    <mat-label>Prénom</mat-label>\n                    <input type=\"text\" matInput value=\"jtioui\" formControlName=\"managerFirstName\">\n                </mat-form-field>\n\n                <mat-form-field class=\"w-100\">\n                    <mat-label>Titre</mat-label>\n                    <input type=\"text\" matInput value=\"Hotellerie\" formControlName=\"title\">\n                </mat-form-field>\n\n                <mat-form-field class=\"w-100\">\n                    <mat-label>Adresse email</mat-label>\n                    <input type=\"email\" matInput value=\"Fairmont.marrakaech@contact.com\" formControlName=\"email\">\n                </mat-form-field>\n\n                <mat-form-field class=\"w-100\">\n                    <mat-label>Adresse postale</mat-label>\n                    <input type=\"text\" matInput value=\"40130\" formControlName=\"zipCode\">\n                </mat-form-field>\n\n                <mat-form-field class=\"w-100\">\n                    <mat-label>Ville / entreprise</mat-label>\n                    <input type=\"text\" matInput formControlName=\"city\">\n                </mat-form-field>\n\n                <mat-form-field class=\"w-100\">\n                    <mat-label>Pays</mat-label>\n                    <input type=\"text\" matInput formControlName=\"country\">\n                </mat-form-field>\n\n                <mat-form-field class=\"w-100\">\n                    <mat-label>RC</mat-label>\n                    <input type=\"text\" matInput value=\"7845103269\" formControlName=\"rc\">\n                </mat-form-field>\n\n                <mat-form-field class=\"w-100\">\n                    <mat-label>IF</mat-label>\n                    <input type=\"text\" matInput value=\"700364981\" formControlName=\"taxIdentification\">\n                </mat-form-field>\n\n                <mat-form-field class=\"w-100\">\n                    <mat-label>ICE</mat-label>\n                    <input type=\"text\" matInput value=\"145967236541208\" formControlName=\"ice\">\n                </mat-form-field>\n\n                <mat-form-field class=\"w-100\">\n                    <mat-label>Télephone portable</mat-label>\n                    <input type=\"tel\" matInput value=\"555-555-1234\" formControlName=\"phoneNumber\">\n                </mat-form-field>\n\n                <mat-form-field class=\"w-100\">\n                    <mat-label>Secteur d’activité</mat-label>\n                    <mat-select matNativeControl formControlName=\"activitySector\">\n                        <mat-option *ngFor=\"let activitySector of globalService.activitySectors\" [value]=\"activitySector._id\"> \n                            {{ activitySector.name }} \n                        </mat-option>\n                    </mat-select>\n                </mat-form-field>\n            </form>\n        </div>\n    </section>\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/settings/components/identity/identity.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/settings/components/identity/identity.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form class=\"d-block\" [formGroup]=\"formRecruiter\" *ngIf=\"authService.user.role.name !== 'candidate'\" (ngSubmit)=\"onSave()\">\n    <ion-header class=\"list-header ion-no-border\" mode=\"md\">\n        <ion-toolbar>\n            <ion-buttons (click)=\"modalController.dismiss()\" routerDirection=\"root\" class=\"roundbutton\" slot=\"start\">\n                <ion-icon src=\"./assets/icon/arrow-back.svg\"></ion-icon>\n            </ion-buttons>\n            <!-- <ion-buttons slot=\"end\">\n                <ion-button type=\"submit\" [disabled]=\"!formRecruiter.valid\">\n                    Enregistrer\n                </ion-button>\n            </ion-buttons> -->\n            <ion-title>Identité</ion-title>\n        </ion-toolbar>\n    </ion-header>\n    <ion-content [fullscreen]=\"true\" class=\"forms\">\n        <section class=\"steps-content\">\n            <div class=\"page-content\">\n\n                <div class=\"d-block position-relative mr-auto pt-1\" *ngIf=\"authService.user.role.name !== 'candidate'\"\n                    style=\"width: 120px\">\n                    <img class=\"circle-image\"\n                        [src]=\"authService.user.picture ? (('backend_url' | env) + this.authService.user.picture.name) : \n                    (this.authService.user.civility === 'Mr' ? '/assets/img/male.svg' : '/assets/img/female.svg' )\" alt=\"profil\">\n                    <div class=\"change-photo\" (click)=\"addImageAction()\">\n                        <mat-icon style=\"color: #ffffff; position: absolute;top: 2px; left: 3px;\">edit</mat-icon>\n                    </div>\n                </div>\n\n                <div class=\"w-100\">\n                    <ion-item class=\"custom-input\">\n                        <ion-label position=\"floating\">Nom <span class=\"required\">*</span></ion-label>\n                        <ion-input type=\"text\" formControlName=\"lastName\"></ion-input>\n                    </ion-item>\n                </div>\n\n                <div class=\"w-100\">\n                    <ion-item class=\"custom-input\">\n                        <ion-label position=\"floating\">Prénom <span class=\"required\">*</span></ion-label>\n                        <ion-input type=\"text\" formControlName=\"firstName\"></ion-input>\n                    </ion-item>\n                </div>\n\n                <div class=\"w-100 custom-input\">\n                    <ion-item class=\"custom-input\">\n                        <!-- <span slot=\"start\" class=\"mr-1\" style=\"margin-top: 28px;\">+212 &nbsp;</span> -->\n                        <ion-label position=\"floating\">Téléphone personnel (+212) </ion-label>\n                        <ion-input type=\"tel\" formControlName=\"firstPhoneNumber\"></ion-input>\n                    </ion-item>\n                </div>\n\n                <div class=\"w-100 custom-input\">\n                    <ion-item class=\"custom-input\">\n                        <ion-label position=\"floating\">Téléphone professionnel (+212) </ion-label>\n                        <ion-input type=\"tel\" formControlName=\"secondPhoneNumber\"></ion-input>\n                    </ion-item>\n                </div>\n\n                <div class=\"text-right mt-2\">\n                    <ion-button type=\"submit\" [disabled]=\"!formRecruiter.valid\">\n                        Enregistrer\n                    </ion-button>\n                </div>\n\n            </div>\n        </section>\n    </ion-content>\n</form>\n\n<form class=\"d-block\" [formGroup]=\"formCandidate\" (ngSubmit)=\"onSave()\"\n    *ngIf=\"authService.user.role.name === 'candidate'\">\n    <ion-header class=\"list-header ion-no-border\" mode=\"md\">\n        <ion-toolbar>\n            <ion-buttons (click)=\"modalController.dismiss()\" routerDirection=\"root\" class=\"roundbutton\" slot=\"start\">\n                <ion-icon src=\"./assets/icon/arrow-back.svg\"></ion-icon>\n            </ion-buttons>\n            <!-- <ion-buttons slot=\"end\">\n                <ion-button type=\"submit\" [disabled]=\"!formCandidate.valid\">\n                    Enregistrer\n                </ion-button>\n            </ion-buttons> -->\n            <ion-title>Identité</ion-title>\n        </ion-toolbar>\n    </ion-header>\n    <ion-content [fullscreen]=\"true\" class=\"forms\">\n        <section class=\"steps-content\">\n            <div class=\"page-content\">\n\n                <ng-container *ngIf=\"authService.user.role.name === 'candidate'\">\n\n                    <div class=\"w-100\">\n                        <ion-item class=\"custom-input\">\n                            <ion-label position=\"floating\">Nom <span class=\"required\">*</span></ion-label>\n                            <ion-input type=\"text\" formControlName=\"lastName\"></ion-input>\n                        </ion-item>\n                    </div>\n                    <small class=\"text-error\"\n                        *ngIf=\"formCandidate.get('lastName').invalid && (formCandidate.get('lastName').dirty || formCandidate.get('lastName').touched) \">\n                        Champ obligatoire\n                    </small>\n\n                    <div class=\"w-100\">\n                        <ion-item class=\"custom-input\">\n                            <ion-label position=\"floating\">Prénom <span class=\"required\">*</span></ion-label>\n                            <ion-input type=\"text\" formControlName=\"firstName\"></ion-input>\n                        </ion-item>\n                    </div>\n                    <small class=\"text-error\"\n                        *ngIf=\"formCandidate.get('firstName').invalid && (formCandidate.get('firstName').dirty || formCandidate.get('firstName').touched) \">\n                        Champ obligatoire\n                    </small>\n\n                    <ion-item class=\"custom-select w-100\">\n                        <ion-label position=\"floating\">Sexe</ion-label>\n                        <ion-select class=\"w-100\" ok-text=\"Ok\" cancel-text=\"Annuler\" placeholder=\"Sélectionner\"\n                            formControlName=\"gender\">\n                            <ion-select-option value=\"masculin\">Homme</ion-select-option>\n                            <ion-select-option value=\"feminin\">Femme</ion-select-option>\n                        </ion-select>\n                    </ion-item>\n                    <small class=\"text-error\"\n                        *ngIf=\"formCandidate.get('gender').invalid && (formCandidate.get('gender').dirty || formCandidate.get('gender').touched) \">\n                        Champ obligatoire\n                    </small>\n\n                    <div class=\"w-100 custom-input\">\n                        <ion-item class=\"custom-input\">\n                            <ion-label position=\"floating\">Téléphone (+212) <span class=\"required\">*</span></ion-label>\n                            <ion-input type=\"tel\" formControlName=\"phoneNumber\"></ion-input>\n                        </ion-item>\n                    </div>\n\n                    <small class=\"text-error\"\n                        *ngIf=\"formCandidate.get('phoneNumber').invalid && (formCandidate.get('phoneNumber').dirty || formCandidate.get('phoneNumber').touched) \">\n                        Champ obligatoire\n                    </small>\n\n                </ng-container>\n\n            </div>\n            <div class=\"text-right mt-2\">\n                <ion-button type=\"submit\" [disabled]=\"!formCandidate.valid\">\n                    Enregistrer\n                </ion-button>\n            </div>\n        </section>\n    </ion-content>\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/settings/components/settings/settings.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/settings/components/settings/settings.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"list-header ion-no-border\" mode=\"md\">\n    <ion-toolbar>\n        <ion-buttons (click)=\"goBack()\" class=\"roundbutton\" slot=\"start\">\n            <ion-icon src=\"./assets/icon/arrow-back.svg\"></ion-icon>\n        </ion-buttons>\n        <ion-title>Paramètres</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content [fullscreen]=\"true\" class=\"forms\">\n    <section class=\"settings-content mb-3\">\n        <div class=\"page-content\">\n            <div class=\"d-block\">\n                <ion-item class=\"ion-no-padding\" detail=\"true\" (click)=\"editEntreprise()\" *appHasPermission=\"['read_infos_company']\">\n                    <ion-label class=\"ml-3\"> Informations entreprise </ion-label>\n                </ion-item>\n\n                <ion-item class=\"ion-no-padding\" detail=\"true\" (click)=\"openAccount()\">\n                    <ion-label class=\"ml-3\"> Compte </ion-label>\n                </ion-item>\n\n                <ion-item class=\"ion-no-padding\" detail=\"true\" (click)=\"openIdentity()\">\n                    <ion-label class=\"ml-3\"> Identité </ion-label>\n                </ion-item>\n\n                <ion-item class=\"ion-no-padding\" detail=\"true\">\n                    <ion-label class=\"ml-3\"> Confidentialité </ion-label>\n                </ion-item>\n\n                <div class=\"mt-3 text-center\">\n                    <ion-button class=\"w-80\" color=\"primary\" (click)=\"authService.logout()\">Déconnexion</ion-button>\n                </div>\n                \n            </div>\n        </div>\n    </section>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/settings/components/account/account.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/pages/settings/components/account/account.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NldHRpbmdzL2NvbXBvbmVudHMvYWNjb3VudC9hY2NvdW50LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/settings/components/account/account.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/settings/components/account/account.component.ts ***!
  \************************************************************************/
/*! exports provided: AccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountComponent", function() { return AccountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_core_services_global_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/global/auth.service */ "./src/app/core/services/global/auth.service.ts");
/* harmony import */ var src_app_core_services_addapters_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/addapters/toast.service */ "./src/app/core/services/addapters/toast.service.ts");
/* harmony import */ var src_app_core_services_addapters_trans_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/addapters/trans.service */ "./src/app/core/services/addapters/trans.service.ts");







let AccountComponent = class AccountComponent {
    constructor(modalController, fb, authService, toastService, transService) {
        this.modalController = modalController;
        this.fb = fb;
        this.authService = authService;
        this.toastService = toastService;
        this.transService = transService;
        this.initForm();
    }
    ionViewDidEnter() {
    }
    /**
     * init Form
     */
    initForm() {
        this.form = this.fb.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.authService.user.email, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email])),
            currentPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(5)])),
            newPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(5)])),
            confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(5)])),
        }, { validator: this.checkPasswords });
    }
    /**
     * check match passwords
     * @param group
     */
    checkPasswords(group) {
        return group.controls.newPassword.value === group.controls.confirmPassword.value ? null : { passwordsDoNotMatch: true };
    }
    /**
     * update profile infos
     */
    onSave() {
        let value = this.form.value;
        delete value['confirmPassword'];
        this.authService.updateProfile(value).subscribe((response) => {
            console.log(response.message);
            this.toastService.success(this.transService.translate(response.message));
            this.modalController.dismiss();
        });
    }
};
AccountComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: src_app_core_services_global_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: src_app_core_services_addapters_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"] },
    { type: src_app_core_services_addapters_trans_service__WEBPACK_IMPORTED_MODULE_6__["TransService"] }
];
AccountComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-account',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./account.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/settings/components/account/account.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./account.component.scss */ "./src/app/pages/settings/components/account/account.component.scss")).default]
    })
], AccountComponent);



/***/ }),

/***/ "./src/app/pages/settings/components/entreprise/entreprise.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/pages/settings/components/entreprise/entreprise.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NldHRpbmdzL2NvbXBvbmVudHMvZW50cmVwcmlzZS9lbnRyZXByaXNlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/settings/components/entreprise/entreprise.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/settings/components/entreprise/entreprise.component.ts ***!
  \******************************************************************************/
/*! exports provided: EntrepriseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntrepriseComponent", function() { return EntrepriseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_core_services_global_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/global/auth.service */ "./src/app/core/services/global/auth.service.ts");
/* harmony import */ var src_app_core_services_global_global_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/global/global.service */ "./src/app/core/services/global/global.service.ts");






let EntrepriseComponent = class EntrepriseComponent {
    constructor(modalController, authService, globalService) {
        this.modalController = modalController;
        this.authService = authService;
        this.globalService = globalService;
        this.initForm();
        console.log(this.authService.user.company.phoneNumber);
    }
    ionViewDidEnter() { }
    /**
     * init form
     */
    initForm() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: this.authService.user.company.name, disabled: true }),
            managerFirstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: this.authService.user.company.managerFirstName, disabled: true }),
            managerLastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: this.authService.user.company.managerLastName, disabled: true }),
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: this.authService.user.company.title, disabled: true }),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: this.authService.user.company.email, disabled: true }),
            zipCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: this.authService.user.company.zipCode, disabled: true }),
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: this.authService.user.company.city, disabled: true }),
            country: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: this.authService.user.company.country, disabled: true }),
            rc: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: this.authService.user.company.rc, disabled: true }),
            taxIdentification: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: this.authService.user.company.taxIdentification, disabled: true }),
            ice: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: this.authService.user.company.ice, disabled: true }),
            phoneNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: this.authService.user.company.phoneNumber, disabled: true }),
            activitySector: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: this.authService.user.company.activitySector, disabled: true })
        });
    }
};
EntrepriseComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: src_app_core_services_global_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: src_app_core_services_global_global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"] }
];
EntrepriseComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-entreprise',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./entreprise.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/settings/components/entreprise/entreprise.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./entreprise.component.scss */ "./src/app/pages/settings/components/entreprise/entreprise.component.scss")).default]
    })
], EntrepriseComponent);



/***/ }),

/***/ "./src/app/pages/settings/components/identity/identity.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/pages/settings/components/identity/identity.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NldHRpbmdzL2NvbXBvbmVudHMvaWRlbnRpdHkvaWRlbnRpdHkuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/settings/components/identity/identity.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/settings/components/identity/identity.component.ts ***!
  \**************************************************************************/
/*! exports provided: IdentityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdentityComponent", function() { return IdentityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_core_services_global_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/global/auth.service */ "./src/app/core/services/global/auth.service.ts");
/* harmony import */ var src_app_core_services_addapters_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/addapters/toast.service */ "./src/app/core/services/addapters/toast.service.ts");
/* harmony import */ var src_app_core_services_addapters_trans_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/addapters/trans.service */ "./src/app/core/services/addapters/trans.service.ts");
/* harmony import */ var src_app_core_services_crud_recruiter_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/crud/recruiter.service */ "./src/app/core/services/crud/recruiter.service.ts");
/* harmony import */ var src_app_core_services_global_picture_utils_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/global/picture-utils.service */ "./src/app/core/services/global/picture-utils.service.ts");
/* harmony import */ var src_app_core_services_crud_file_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/crud/file.service */ "./src/app/core/services/crud/file.service.ts");










let IdentityComponent = class IdentityComponent {
    constructor(modalController, authService, toastService, transService, recruiterService, actionSheetController, loadingController, pictureUtilsService, zone, fileService) {
        this.modalController = modalController;
        this.authService = authService;
        this.toastService = toastService;
        this.transService = transService;
        this.recruiterService = recruiterService;
        this.actionSheetController = actionSheetController;
        this.loadingController = loadingController;
        this.pictureUtilsService = pictureUtilsService;
        this.zone = zone;
        this.fileService = fileService;
        this.hasChanged = false;
        this.value = { file: null, type: 'photo' };
        this.initForm();
    }
    ngOnInit() {
        this.subscription = this.recruiterService.recruiter.subscribe((recruiter) => {
            console.log(this.authService.user);
            if (recruiter) {
                console.log(recruiter.getValues());
                this.value = { file: recruiter.picture ? recruiter.picture : null, type: 'edit-image' };
            }
        });
    }
    addImageAction() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: 'Image',
                cssClass: 'my-actionSheet',
                buttons: [
                    {
                        text: 'Camera',
                        icon: 'camera',
                        handler: () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            let syncing = true;
                            setTimeout(() => {
                                if (syncing) {
                                    syncing = false;
                                    loading.dismiss();
                                    this.toastService.error('Connection error');
                                    return;
                                }
                            }, 30000);
                            const loading = yield this.loadingController.create({});
                            yield loading.present();
                            this.pictureUtilsService.uploadFromCamera().then(({ imageData }) => {
                                this.zone.run(() => {
                                    this.hasChanged = true;
                                    this.fileService.create(imageData, true).subscribe(res => {
                                        this.authService.user.picture = res.file;
                                        this.recruiterService.updatePicture({
                                            picture: res.file
                                        }).subscribe(response => {
                                            this.authService.user.picture = res.file;
                                            this.toastService.success(this.transService.translate('picture_updated'));
                                        });
                                    });
                                });
                                syncing = false;
                                loading.dismiss();
                            }, error => {
                                syncing = false;
                                loading.dismiss();
                            });
                            return syncing;
                        })
                    },
                    {
                        text: 'Gallery',
                        icon: 'image',
                        handler: () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            let syncing = true;
                            setTimeout(() => {
                                if (syncing) {
                                    syncing = false;
                                    loading.dismiss();
                                    this.toastService.error('Connection error');
                                    return;
                                }
                            }, 30000);
                            const loading = yield this.loadingController.create({});
                            yield loading.present();
                            this.pictureUtilsService.uploadFromGallery().then(({ imageData }) => {
                                this.zone.run(() => {
                                    this.hasChanged = true;
                                    this.fileService.create(imageData, true).subscribe(res => {
                                        this.recruiterService.updatePicture({
                                            picture: res.file
                                        }).subscribe(response => {
                                            this.authService.user.picture = res.file;
                                            this.toastService.success(this.transService.translate('picture_updated'));
                                        });
                                    });
                                });
                                syncing = false;
                                loading.dismiss();
                            }, error => {
                                alert(error);
                                syncing = false;
                                loading.dismiss();
                            });
                            return syncing;
                        })
                    }
                ]
            });
            yield actionSheet.present();
        });
    }
    ionViewDidEnter() {
    }
    /**
     * init form
     */
    initForm() {
        if (this.authService.user.role.name === 'recruiter' || this.authService.user.role.name === 'Responsable délégué' || this.authService.user.role.name === 'Responsable principale') {
            this.formRecruiter = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
                firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.authService.user.firstName, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
                lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.authService.user.lastName, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
                firstPhoneNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.authService.user['firstPhoneNumber']),
                secondPhoneNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.authService.user['secondPhoneNumber'])
            });
        }
        else if (this.authService.user.role.name === 'candidate') {
            this.formCandidate = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
                firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.authService.user.firstName, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
                lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.authService.user.lastName, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
                email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.authService.user.email),
                gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.authService.user['gender'], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
                phoneNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.authService.user.phoneNumber, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            });
        }
    }
    /**
     * on save
     */
    onSave() {
        if (this.authService.user.role.name === 'candidate') {
            console.log(this.formCandidate.value);
            this.authService.updateIdentity(this.formCandidate.value).subscribe((response) => {
                this.authService.user = Object.assign(this.authService.user, this.formCandidate.value);
                this.authService.user = Object.assign(this.authService.user, this.formCandidate.value);
                this.toastService.success(this.transService.translate(response.message));
                this.modalController.dismiss();
            });
        }
        else {
            console.log(this.formRecruiter.value);
            this.authService.updateIdentity(this.formRecruiter.value).subscribe((response) => {
                this.toastService.success(this.transService.translate(response.message));
                this.modalController.dismiss();
            });
        }
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
};
IdentityComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: src_app_core_services_global_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: src_app_core_services_addapters_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"] },
    { type: src_app_core_services_addapters_trans_service__WEBPACK_IMPORTED_MODULE_6__["TransService"] },
    { type: src_app_core_services_crud_recruiter_service__WEBPACK_IMPORTED_MODULE_7__["RecruiterService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: src_app_core_services_global_picture_utils_service__WEBPACK_IMPORTED_MODULE_8__["PictureUtilsService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: src_app_core_services_crud_file_service__WEBPACK_IMPORTED_MODULE_9__["FileService"] }
];
IdentityComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-identity',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./identity.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/settings/components/identity/identity.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./identity.component.scss */ "./src/app/pages/settings/components/identity/identity.component.scss")).default]
    })
], IdentityComponent);



/***/ }),

/***/ "./src/app/pages/settings/components/settings/settings.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/pages/settings/components/settings/settings.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NldHRpbmdzL2NvbXBvbmVudHMvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/settings/components/settings/settings.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/settings/components/settings/settings.component.ts ***!
  \**************************************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _account_account_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../account/account.component */ "./src/app/pages/settings/components/account/account.component.ts");
/* harmony import */ var _entreprise_entreprise_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../entreprise/entreprise.component */ "./src/app/pages/settings/components/entreprise/entreprise.component.ts");
/* harmony import */ var _identity_identity_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../identity/identity.component */ "./src/app/pages/settings/components/identity/identity.component.ts");
/* harmony import */ var src_app_core_services_global_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/global/auth.service */ "./src/app/core/services/global/auth.service.ts");
/* harmony import */ var src_app_core_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/utils */ "./src/app/core/utils/index.ts");








let SettingsComponent = class SettingsComponent {
    constructor(modalController, authService) {
        this.modalController = modalController;
        this.authService = authService;
    }
    ionViewDidEnter() {
    }
    openAccount() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _account_account_component__WEBPACK_IMPORTED_MODULE_3__["AccountComponent"]
            });
            return yield modal.present();
        });
    }
    openIdentity() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _identity_identity_component__WEBPACK_IMPORTED_MODULE_5__["IdentityComponent"]
            });
            return yield modal.present();
        });
    }
    editEntreprise() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _entreprise_entreprise_component__WEBPACK_IMPORTED_MODULE_4__["EntrepriseComponent"]
            });
            return yield modal.present();
        });
    }
    /**
     * go back
     */
    goBack() {
        if (this.authService.user.role.name === 'candidate') {
            src_app_core_utils__WEBPACK_IMPORTED_MODULE_7__["Redirection"].candidateDashboard();
        }
        else {
            src_app_core_utils__WEBPACK_IMPORTED_MODULE_7__["Redirection"].dashboard();
        }
    }
};
SettingsComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: src_app_core_services_global_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }
];
SettingsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-settings',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./settings.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/settings/components/settings/settings.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./settings.component.scss */ "./src/app/pages/settings/components/settings/settings.component.scss")).default]
    })
], SettingsComponent);



/***/ }),

/***/ "./src/app/pages/settings/settings-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/settings/settings-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: SettingsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsRoutingModule", function() { return SettingsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/settings/settings.component */ "./src/app/pages/settings/components/settings/settings.component.ts");




const routes = [
    {
        path: '',
        component: _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_3__["SettingsComponent"]
    }
];
let SettingsRoutingModule = class SettingsRoutingModule {
};
SettingsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], SettingsRoutingModule);



/***/ }),

/***/ "./src/app/pages/settings/settings.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/settings/settings.module.ts ***!
  \***************************************************/
/*! exports provided: SettingsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsModule", function() { return SettingsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _settings_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings-routing.module */ "./src/app/pages/settings/settings-routing.module.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _components_account_account_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/account/account.component */ "./src/app/pages/settings/components/account/account.component.ts");
/* harmony import */ var _components_identity_identity_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/identity/identity.component */ "./src/app/pages/settings/components/identity/identity.component.ts");
/* harmony import */ var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/settings/settings.component */ "./src/app/pages/settings/components/settings/settings.component.ts");
/* harmony import */ var _components_entreprise_entreprise_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/entreprise/entreprise.component */ "./src/app/pages/settings/components/entreprise/entreprise.component.ts");








let SettingsModule = class SettingsModule {
};
SettingsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_components_settings_settings_component__WEBPACK_IMPORTED_MODULE_6__["SettingsComponent"], _components_account_account_component__WEBPACK_IMPORTED_MODULE_4__["AccountComponent"], _components_identity_identity_component__WEBPACK_IMPORTED_MODULE_5__["IdentityComponent"], _components_entreprise_entreprise_component__WEBPACK_IMPORTED_MODULE_7__["EntrepriseComponent"]],
        imports: [
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _settings_routing_module__WEBPACK_IMPORTED_MODULE_2__["SettingsRoutingModule"]
        ]
    })
], SettingsModule);



/***/ })

}]);
//# sourceMappingURL=pages-settings-settings-module-es2015.js.map