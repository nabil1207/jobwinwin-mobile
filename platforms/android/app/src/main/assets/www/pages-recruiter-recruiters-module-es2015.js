(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-recruiter-recruiters-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/recruiter/components/create/create.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/recruiter/components/create/create.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"list-header ion-no-border\" mode=\"md\">\n    <ion-toolbar>\n        <ion-buttons (click)=\"modalCtrl.dismiss()\" class=\"roundbutton\" slot=\"start\">\n            <ion-icon src=\"./assets/icon/arrow-back.svg\"></ion-icon>\n        </ion-buttons>\n        <ion-title> {{ form.get('_id').value ? 'Modifier le recruteur' : 'Ajouter un recruteur' }}</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content [fullscreen]=\"true\" class=\"forms\">\n    <section class=\"steps-content\">\n        <div class=\"page-content\">\n            <form class=\"d-block\" [formGroup]=\"form\" (ngSubmit)=\"onSave()\">\n\n                <ion-item class=\"custom-input\">\n                    <ion-label position=\"floating\">Nom <span class=\"required\">*</span></ion-label>\n                    <ion-input type=\"text\" formControlName=\"lastName\"></ion-input>\n                </ion-item>\n                <small class=\"text-error\"\n                    *ngIf=\"form.get('lastName').invalid && (form.get('lastName').dirty || form.get('lastName').touched) \">\n                    Champ obligatoire\n                </small>\n\n                <ion-item class=\"custom-input\">\n                    <ion-label position=\"floating\">Prénom <span class=\"required\">*</span></ion-label>\n                    <ion-input type=\"text\" formControlName=\"firstName\"></ion-input>\n                </ion-item>\n                <small class=\"text-error\"\n                    *ngIf=\"form.get('firstName').invalid && (form.get('firstName').dirty || form.get('firstName').touched) \">\n                    Champ obligatoire\n                </small>\n\n                <ion-item class=\"custom-select\">\n                    <ion-label position=\"floating\">Civilité <span class=\"required\">*</span></ion-label>\n                    <ion-select class=\"w-100\" ok-text=\"Ok\" cancel-text=\"Annuler\" placeholder=\"Sélectionner\"\n                        formControlName=\"civility\">\n                        <ion-select-option value=\"Mr\">Mr</ion-select-option>\n                        <ion-select-option value=\"Mme\">Mme</ion-select-option>\n                    </ion-select>\n                </ion-item>\n                <small class=\"text-error\"\n                    *ngIf=\"form.get('civility').invalid && (form.get('civility').dirty || form.get('civility').touched) \">\n                    Champ obligatoire\n                </small>\n\n                <ion-item class=\"custom-input\">\n                    <ion-label position=\"floating\">Email <span class=\"required\">*</span></ion-label>\n                    <ion-input type=\"email\" formControlName=\"email\"></ion-input>\n                </ion-item>\n                <small class=\"text-error\"\n                    *ngIf=\"form.get('email').invalid && (form.get('email').dirty || form.get('email').touched) \">\n                    Champ obligatoire\n                </small>\n\n                <ion-item class=\"custom-input\">\n                    <ion-label position=\"floating\">Fonction <span class=\"required\">*</span></ion-label>\n                    <ion-input type=\"text\" formControlName=\"function\"></ion-input>\n                </ion-item>\n                <small class=\"text-error\"\n                    *ngIf=\"form.get('function').invalid && (form.get('function').dirty || form.get('function').touched) \">\n                    Champ obligatoire\n                </small>\n\n                <div class=\"w-100 custom-input\">\n                    <ion-item class=\"custom-input\">\n                        <ion-label position=\"floating\">Téléphone personnel (+212) </ion-label>\n                        <ion-input type=\"tel\" formControlName=\"firstPhoneNumber\"></ion-input>\n                    </ion-item>\n                </div>\n\n                <div class=\"w-100 custom-input\">\n                    <ion-item class=\"custom-input\">\n                        <ion-label position=\"floating\">Téléphone professionnel (+212) </ion-label>\n                        <ion-input type=\"tel\" formControlName=\"secondPhoneNumber\"></ion-input>\n                    </ion-item>\n                </div>\n\n                <ion-item class=\"input-upload-image ion-no-padding mt-1\" lines=\"full\">\n                    <app-file-uploader [data]=\"value\" (fileChanges)=\"fileChanges($event)\"></app-file-uploader>\n                </ion-item>\n\n                <div class=\"mt-3 text-center\">\n                    <ion-button type=\"submit\" [disabled]=\"!form.valid\" class=\"w-80\" color=\"primary\">\n                        Confirmé\n                    </ion-button>\n                </div>\n            </form>\n        </div>\n    </section>\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/recruiter/components/details/details.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/recruiter/components/details/details.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"recruiter\">\n    <ion-header class=\"list-header ion-no-border\" mode=\"md\">\n        <ion-toolbar>\n            <ion-buttons routerLink=\"/dashboard/recruiter\" routerDirection=\"root\" class=\"roundbutton\" slot=\"start\">\n                <ion-icon src=\"./assets/icon/arrow-back.svg\"></ion-icon>\n            </ion-buttons>\n            <ion-buttons slot=\"primary\">\n                <ion-button>\n                    <ion-icon slot=\"icon-only\" ios=\"ellipsis-vertical\" md=\"ellipsis-vertical\"></ion-icon>\n                </ion-button>\n            </ion-buttons>\n            <ion-title> {{recruiter.firstName }} {{ recruiter.lastName }} </ion-title>\n        </ion-toolbar>\n    </ion-header>\n    <ion-content [fullscreen]=\"true\" class=\"forms\">\n        <section class=\"detail-mission-content\">\n            <div class=\"d-block position-relative mr-auto mb-3 w-30\" id=\"image-block\">\n                <img [src]=\"recruiter.picture ? (('backend_url' | env) + recruiter.picture.name) : \n                (recruiter.civility === 'Mr' ? '/assets/img/male.svg' : '/assets/img/female.svg' )\" alt=\"\">\n                <app-file-uploader [data]=\"value\" (fileChanges)=\"fileChanges($event)\"></app-file-uploader>\n            </div>\n            <div class=\"update-link text-right\" (click)=\"editRecruiter()\">\n                <span class=\"d-inline vertical-align\">Modifier</span>\n                <mat-icon class=\"d-inline vertical-align float-right\" color=\"primary\">edit\n                </mat-icon>\n            </div>\n            <div class=\"d-block mt-1 w-100\">\n                <div class=\"d-inline text-right align-middle w-30\">\n                    <img class=\"mr-2\" src=\"./assets/icon/profil-blue.svg\" alt=\"profil\" width=\"20px\">\n                </div>\n                <div class=\"d-inline text-left w-60\">\n                    <span>{{recruiter.firstName }} {{ recruiter.lastName }}</span>\n                    <!-- <mat-icon class=\"d-inline vertical-align float-right\" color=\"primary\" (click)=\"editRecruiter()\">edit\n                    </mat-icon> -->\n                </div>\n            </div>\n\n            <div class=\"d-block mt-1 w-100\">\n                <div class=\"d-inline text-right align-middle w-30\">\n                    <mat-icon class=\"mr-2\" color=\"primary\" width=\"20px\">work</mat-icon>\n                </div>\n                <div class=\"d-inline text-left w-60\">\n                    <span>{{ recruiter.function }}</span>\n                    <!-- <mat-icon class=\"d-inline vertical-align float-right\" color=\"primary\" (click)=\"editRecruiter()\">edit\n                    </mat-icon> -->\n                </div>\n            </div>\n            <div class=\"d-block mt-1 w-100\">\n                <div class=\"d-inline text-right align-middle w-30\">\n                    <mat-icon class=\"mr-2\" color=\"primary\" width=\"20px\">admin_panel_settings</mat-icon>\n                </div>\n                <div class=\"d-inline text-left w-60\">\n                    <span>Recruteur</span>\n                    <!-- <mat-icon class=\"d-inline vertical-align float-right\" color=\"primary\" (click)=\"editRecruiter()\">edit\n                    </mat-icon> -->\n                </div>\n            </div>\n            <div class=\"d-block mt-1 w-100\">\n                <div class=\"d-inline text-right align-middle w-30\">\n                    <mat-icon class=\"mr-2\" color=\"primary\" width=\"20px\">phone</mat-icon>\n                </div>\n                <div class=\"d-inline text-left w-60\">\n                    <span>{{ recruiter.firstPhoneNumber }}</span>\n                    <!-- <mat-icon class=\"d-inline vertical-align float-right\" color=\"primary\" (click)=\"editRecruiter()\">edit\n                    </mat-icon> -->\n                </div>\n            </div>\n            <div class=\"d-block mt-1 w-100\" *ngIf=\"recruiter.secondPhoneNumber\" >\n                <div class=\"d-inline text-right align-middle w-30\">\n                    <mat-icon class=\"mr-2\" color=\"primary\" width=\"20px\">phone</mat-icon>\n                </div>\n                <div class=\"d-inline text-left w-60\">\n                    <span>{{ recruiter.secondPhoneNumber }}</span>\n                    <!-- <mat-icon class=\"d-inline vertical-align float-right\" color=\"primary\" (click)=\"editRecruiter()\">edit\n                    </mat-icon> -->\n                </div>\n            </div>\n\n        </section>\n\n    </ion-content>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/recruiter/components/listing/listing.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/recruiter/components/listing/listing.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"list-header ion-no-border\" mode=\"md\">\n    <ion-toolbar>\n        <ion-buttons (click)=\"goBack()\" class=\"roundbutton\" slot=\"start\">\n            <ion-icon src=\"./assets/icon/arrow-back.svg\"></ion-icon>\n        </ion-buttons>\n        <ion-buttons slot=\"primary\">\n            <ion-button>\n                <ion-icon slot=\"icon-only\" ios=\"ellipsis-vertical\" md=\"ellipsis-vertical\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n\n        <ion-title>Recruteurs</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content [fullscreen]=\"true\" class=\"forms\">\n    <section class=\"steps-content\">\n        <article class=\"page-content\">\n\n            <form class=\"mb-3\">\n                <div class=\"d-block\">\n                    <div class=\"form-group position-relative d-inline w-100\">\n                        <input class=\"custom-input search-input border-bleu\" type=\"text\" name=\"search\"\n                            placeholder=\"Rechercher un recruteur\" [(ngModel)]=\"search\" (ngModelChange)=\"onSearch()\">\n                        <span class=\"icon-search position-absolute\">\n                            <img src=\"./assets/icon/search.svg\">\n                        </span>\n                    </div>\n                </div>\n            </form>\n\n            <ion-item class=\"list-of-recruiter ion-no-padding\" lines=\"none\" *ngFor=\"let recruiter of recruiterService.recruiters\">\n                <ion-avatar slot=\"start\">\n                    <img [src]=\"recruiter.picture ? (('backend_url' | env) + recruiter.picture.name) : \n                    (recruiter.civility === 'Mr' ? '/assets/img/male.svg' : '/assets/img/female.svg' )\" alt=\"\">\n                </ion-avatar>\n                <ion-label>\n                    <ion-button [routerLink]=\"['/dashboard/recruiter/detail-recruiter', recruiter._id]\" routerDirection=\"root\"class=\"name-recruiter\" color=\"primary\">\n                       {{ recruiter.firstName }}\n                       {{ recruiter.lastName }}\n                    </ion-button>\n                </ion-label>\n            </ion-item>\n\n            <ion-item class=\"list-of-recruiter ion-no-padding\" lines=\"none\">\n                <ion-avatar slot=\"start\">\n                    <img src=\"./assets/img/default-image.svg\" />\n                </ion-avatar>\n                <ion-label>\n                    <ion-button class=\"name-recruiter light-color\" (click)=\"onAdd()\">\n                       <ion-icon name=\"add\"></ion-icon>\n                       Ajouter un recruteur\n                    </ion-button>\n                </ion-label>\n            </ion-item>\n\n        </article>\n    </section>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/recruiter/components/create/create.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/recruiter/components/create/create.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlY3J1aXRlci9jb21wb25lbnRzL2NyZWF0ZS9jcmVhdGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/recruiter/components/create/create.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/recruiter/components/create/create.component.ts ***!
  \***********************************************************************/
/*! exports provided: CreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateComponent", function() { return CreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_core_services_global_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/global/global.service */ "./src/app/core/services/global/global.service.ts");
/* harmony import */ var src_app_core_services_crud_recruiter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/crud/recruiter.service */ "./src/app/core/services/crud/recruiter.service.ts");
/* harmony import */ var src_app_core_services_addapters_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/addapters/toast.service */ "./src/app/core/services/addapters/toast.service.ts");
/* harmony import */ var src_app_core_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/utils */ "./src/app/core/utils/index.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_core_services_addapters_trans_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/addapters/trans.service */ "./src/app/core/services/addapters/trans.service.ts");









let CreateComponent = class CreateComponent {
    constructor(globalService, recruiterService, toast, modalCtrl, transService) {
        this.globalService = globalService;
        this.recruiterService = recruiterService;
        this.toast = toast;
        this.modalCtrl = modalCtrl;
        this.transService = transService;
        this.value = { file: null, type: 'photo' };
        this.initForm();
    }
    ionViewDidEnter() {
        this.subscription = this.recruiterService.recruiter.subscribe((recruiter) => {
            if (recruiter) {
                this.form.patchValue(recruiter.getValues());
                this.value = { file: recruiter.picture ? recruiter.picture : null, type: 'photo' };
            }
        });
    }
    /**
     * init recruiter form
     */
    initForm() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            _id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            firstPhoneNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            secondPhoneNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email])),
            picture: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            civility: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            function: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
        });
    }
    /**
     *
     * @param value
     */
    fileChanges(value) {
        this.form.patchValue({
            picture: value
        });
    }
    /**
     * create candidate
     */
    onSave() {
        if (this.form.get('_id').value) {
            this.recruiterService.update(this.form.value).subscribe(res => {
                this.toast.success(this.transService.translate('update_success'));
                this.dismiss();
            });
        }
        else {
            this.recruiterService.create(this.form.value).subscribe(res => {
                this.toast.success(this.transService.translate('create_success'));
                this.dismiss();
                src_app_core_utils__WEBPACK_IMPORTED_MODULE_6__["Redirection"].recruiters();
            });
        }
    }
    dismiss() {
        this.modalCtrl.dismiss();
    }
};
CreateComponent.ctorParameters = () => [
    { type: src_app_core_services_global_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"] },
    { type: src_app_core_services_crud_recruiter_service__WEBPACK_IMPORTED_MODULE_4__["RecruiterService"] },
    { type: src_app_core_services_addapters_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"] },
    { type: src_app_core_services_addapters_trans_service__WEBPACK_IMPORTED_MODULE_8__["TransService"] }
];
CreateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/recruiter/components/create/create.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./create.component.scss */ "./src/app/pages/recruiter/components/create/create.component.scss")).default]
    })
], CreateComponent);



/***/ }),

/***/ "./src/app/pages/recruiter/components/details/details.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/pages/recruiter/components/details/details.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlY3J1aXRlci9jb21wb25lbnRzL2RldGFpbHMvZGV0YWlscy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/recruiter/components/details/details.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/recruiter/components/details/details.component.ts ***!
  \*************************************************************************/
/*! exports provided: DetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsComponent", function() { return DetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_core_services_crud_recruiter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/crud/recruiter.service */ "./src/app/core/services/crud/recruiter.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _create_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../create/create.component */ "./src/app/pages/recruiter/components/create/create.component.ts");
/* harmony import */ var src_app_core_services_addapters_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/addapters/toast.service */ "./src/app/core/services/addapters/toast.service.ts");
/* harmony import */ var src_app_core_services_addapters_trans_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/addapters/trans.service */ "./src/app/core/services/addapters/trans.service.ts");








let DetailsComponent = class DetailsComponent {
    constructor(modalController, toastService, trans, recruiterService, activtedRoute) {
        this.modalController = modalController;
        this.toastService = toastService;
        this.trans = trans;
        this.recruiterService = recruiterService;
        this.activtedRoute = activtedRoute;
    }
    ionViewDidEnter() {
        this.getRecruteur();
    }
    getRecruteur() {
        const { id } = this.activtedRoute.snapshot.params;
        console.log('qqqqqqqq');
        if (id) {
            this.recruiterService.readOne(id).subscribe();
            this.subscription = this.recruiterService.recruiter.subscribe((recruiter) => {
                if (recruiter) {
                    this.value = { file: recruiter.picture ? recruiter.picture : null, type: 'update-picture' };
                    return this.recruiter = recruiter;
                }
            });
        }
    }
    editRecruiter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _create_create_component__WEBPACK_IMPORTED_MODULE_5__["CreateComponent"]
            });
            modal.onWillDismiss().then(() => {
                this.getRecruteur();
            });
            return yield modal.present();
        });
    }
    /**
     *
     * @param value
     */
    fileChanges(value) {
        this.recruiterService.updatePicture({
            _id: this.recruiter.user,
            picture: value
        }).subscribe((response) => {
            this.recruiter.picture = value;
            this.toastService.success(this.trans.translate('update_success'));
        });
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
};
DetailsComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: src_app_core_services_addapters_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"] },
    { type: src_app_core_services_addapters_trans_service__WEBPACK_IMPORTED_MODULE_7__["TransService"] },
    { type: src_app_core_services_crud_recruiter_service__WEBPACK_IMPORTED_MODULE_3__["RecruiterService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
DetailsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-details',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/recruiter/components/details/details.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./details.component.scss */ "./src/app/pages/recruiter/components/details/details.component.scss")).default]
    })
], DetailsComponent);



/***/ }),

/***/ "./src/app/pages/recruiter/components/listing/listing.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/pages/recruiter/components/listing/listing.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlY3J1aXRlci9jb21wb25lbnRzL2xpc3RpbmcvbGlzdGluZy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/recruiter/components/listing/listing.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/recruiter/components/listing/listing.component.ts ***!
  \*************************************************************************/
/*! exports provided: ListingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListingComponent", function() { return ListingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_core_services_crud_recruiter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/crud/recruiter.service */ "./src/app/core/services/crud/recruiter.service.ts");
/* harmony import */ var src_app_core_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/utils */ "./src/app/core/utils/index.ts");
/* harmony import */ var src_app_core_services_global_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/global/auth.service */ "./src/app/core/services/global/auth.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _create_create_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../create/create.component */ "./src/app/pages/recruiter/components/create/create.component.ts");







let ListingComponent = class ListingComponent {
    constructor(recruiterService, authService, modalController) {
        this.recruiterService = recruiterService;
        this.authService = authService;
        this.modalController = modalController;
    }
    ionViewDidEnter() {
        this.readRecruteur();
    }
    readRecruteur() {
        this.recruiterService.read().subscribe();
    }
    /**
     * search recruiter
     */
    onSearch() {
        this.recruiterService.read(this.search).subscribe();
    }
    onAdd() {
        this.addRecruiter();
        this.recruiterService.unSubscribe();
    }
    addRecruiter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _create_create_component__WEBPACK_IMPORTED_MODULE_6__["CreateComponent"]
            });
            modal.onWillDismiss().then(() => {
                this.readRecruteur();
            });
            return yield modal.present();
        });
    }
    /**
     * go back
     */
    goBack() {
        if (this.authService.user.role.name === 'candidate') {
            src_app_core_utils__WEBPACK_IMPORTED_MODULE_3__["Redirection"].candidateDashboard();
        }
        else {
            src_app_core_utils__WEBPACK_IMPORTED_MODULE_3__["Redirection"].dashboard();
        }
    }
};
ListingComponent.ctorParameters = () => [
    { type: src_app_core_services_crud_recruiter_service__WEBPACK_IMPORTED_MODULE_2__["RecruiterService"] },
    { type: src_app_core_services_global_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] }
];
ListingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-listing',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./listing.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/recruiter/components/listing/listing.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./listing.component.scss */ "./src/app/pages/recruiter/components/listing/listing.component.scss")).default]
    })
], ListingComponent);



/***/ }),

/***/ "./src/app/pages/recruiter/recruiters-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/recruiter/recruiters-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: RecruitersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecruitersRoutingModule", function() { return RecruitersRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_create_create_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/create/create.component */ "./src/app/pages/recruiter/components/create/create.component.ts");
/* harmony import */ var _components_details_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/details/details.component */ "./src/app/pages/recruiter/components/details/details.component.ts");
/* harmony import */ var _components_listing_listing_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/listing/listing.component */ "./src/app/pages/recruiter/components/listing/listing.component.ts");






const routes = [
    {
        path: '',
        component: _components_listing_listing_component__WEBPACK_IMPORTED_MODULE_5__["ListingComponent"]
    },
    {
        path: 'create-recruiter',
        component: _components_create_create_component__WEBPACK_IMPORTED_MODULE_3__["CreateComponent"]
    },
    {
        path: 'detail-recruiter/:id',
        component: _components_details_details_component__WEBPACK_IMPORTED_MODULE_4__["DetailsComponent"]
    }
];
let RecruitersRoutingModule = class RecruitersRoutingModule {
};
RecruitersRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], RecruitersRoutingModule);



/***/ }),

/***/ "./src/app/pages/recruiter/recruiters.module.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/recruiter/recruiters.module.ts ***!
  \******************************************************/
/*! exports provided: RecruitersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecruitersModule", function() { return RecruitersModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _recruiters_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./recruiters-routing.module */ "./src/app/pages/recruiter/recruiters-routing.module.ts");
/* harmony import */ var _components_create_create_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/create/create.component */ "./src/app/pages/recruiter/components/create/create.component.ts");
/* harmony import */ var _components_details_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/details/details.component */ "./src/app/pages/recruiter/components/details/details.component.ts");
/* harmony import */ var _components_listing_listing_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/listing/listing.component */ "./src/app/pages/recruiter/components/listing/listing.component.ts");







let RecruitersModule = class RecruitersModule {
};
RecruitersModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_components_listing_listing_component__WEBPACK_IMPORTED_MODULE_6__["ListingComponent"], _components_create_create_component__WEBPACK_IMPORTED_MODULE_4__["CreateComponent"], _components_details_details_component__WEBPACK_IMPORTED_MODULE_5__["DetailsComponent"]],
        imports: [
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
            _recruiters_routing_module__WEBPACK_IMPORTED_MODULE_3__["RecruitersRoutingModule"]
        ]
    })
], RecruitersModule);



/***/ })

}]);
//# sourceMappingURL=pages-recruiter-recruiters-module-es2015.js.map