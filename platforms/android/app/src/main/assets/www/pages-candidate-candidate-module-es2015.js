(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-candidate-candidate-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/candidate/components/card-condidate/card-condidate.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/candidate/components/card-condidate/card-condidate.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"list-header ion-no-border\" mode=\"md\">\n    <ion-toolbar>\n        <ion-buttons (click)=\"goBack()\" class=\"roundbutton\" slot=\"start\">\n            <ion-icon src=\"./assets/icon/arrow-back.svg\"></ion-icon>\n        </ion-buttons>\n        <ion-buttons slot=\"primary\">\n            <ion-button routerLink=\"/dashboard/settings\">\n                <ion-icon slot=\"icon-only\" ios=\"settings-outline\" md=\"settings-outline\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n\n        <ion-title>Profil candidat</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content [fullscreen]=\"true\" class=\"forms\" appScrollToTop>\n    <section class=\"condidate-card\" >\n        <div class=\"page-content\">\n\n            <ion-row class=\"mt-1 py-1\">\n                <ion-col size=\"12\">\n                    <!-- <ion-icon class=\"d-inline icon-blue-title mr-1\" src=\"./assets/icon/apprentice.svg\"></ion-icon> -->\n                    <span class=\"blue-title\">Profil complété à :  </span>\n                </ion-col>\n                <ion-col size=\"12\">\n                    <div class=\"progressbar w-100\">\n                        <div class=\"porcent\" [ngStyle]=\"{'width': (candidateService.percentage | async | number: '1.0-0') + '%'}\">\n                            <div class=\"counter text-center\">\n                                {{ candidateService.percentage | async | number: '1.0-0' }} %\n                             </div>\n                        </div>\n                    </div>\n\n                    <!-- <div class=\"progressbar w-100\">\n                        <div class=\"porcent\"\n                            [ngStyle]=\"{'width': (authService.user.candidate.percentage | number: '1.0-0') + '%'}\">\n                            {{ authService.user.candidate.percentage | number: '1.0-0' }} %\n                        </div>\n                    </div> -->\n                </ion-col>\n            </ion-row>\n\n            <div class=\"condidate-profil\">\n                <div class=\"d-block position-relative mr-auto pt-1\" style=\"width: 120px\">\n                    <img class=\"circle-image\"\n                        [src]=\"authService.user.picture ? (('backend_url' | env) + authService.user.picture.name) : \n                    (authService.user['gender'] === 'masculin' ? '/assets/img/male.svg' : '/assets/img/female.svg' )\"\n                        alt=\"profil\">\n                    <div class=\"change-photo\" (click)=\"addImageAction()\">\n                        <mat-icon color=\"primary\">edit</mat-icon>\n                    </div>\n                </div>\n                <ion-row class=\"mt-1 py-1 pb-1\">\n                    <ion-col size=\"12\" class=\"text-center\">\n                        <div class=\"name ml-1\">{{ authService.user.firstName }} {{ authService.user.lastName }}</div>\n                    </ion-col>\n                    <ion-col size=\"12\" class=\"text-center\">\n                        <div class=\"post ml-1\">{{ authService.user['currentJob'] }}</div>\n                    </ion-col>\n                </ion-row>\n            </div>\n\n            <div class=\"bg-light border-bottom px-1 py-2\">\n                <p class=\"desciption text-center mb-1\">\n                    {{ authService.user['goal'] }}\n                </p>\n                <div class=\"links cursor-pointer\" (click)=\"editProfil()\">\n                    Modifier profil\n                </div>\n            </div>\n\n            <div class=\"objectif bg-light\">\n                <h3 class=\"title\">OBJECTIF ACTUEL</h3>\n                <ion-row class=\"ion-justify-content-center mt-1 py-1\">\n                    <ion-col size=\"12\" class=\"text-center\">\n                        <div class=\"info\">{{ authService.user['searchedPost'] }} </div>\n                    </ion-col>\n                </ion-row>\n                <ion-row class=\"ion-justify-content-center py-1\">\n                    <ion-col size=\"12\" class=\"text-center\">\n                        <div class=\"info\"> {{ objectifLocation }} </div>\n                    </ion-col>\n                </ion-row>\n                <ion-row class=\"ion-justify-content-center py-1 pb-1\">\n                    <ion-col size=\"12\" class=\"text-center\">\n                        <div class=\"info\">{{ authService.user['supposedSalaryMax'] }} DH</div>\n                    </ion-col>\n                </ion-row>\n                <div class=\"links cursor-pointer\" (click)=\"editObjectif()\">\n                    Modifier mon objectif\n                </div>\n            </div>\n\n            <div class=\"video bg-light border-bottom\">\n                <h3 class=\"title\">VIDÉO</h3>\n                <ion-row class=\"ion-justify-content-center py-1\">\n                    <ion-col size=\"11\" class=\"text-center\">\n                        <div *ngIf=\"authService.user['video'] else uploadVideo\">\n                            <video width=\"100%\" height=\"200px\" controls>\n                                <source [src]=\"('backend_url' | env) + authService.user['video'].name\">\n                            </video>\n                        </div>\n                        <ng-template #uploadVideo>\n                            <img class=\"w-100\" src=\"./assets/img/default-video.svg\" alt=\"Add Video\">\n                        </ng-template>\n                    </ion-col>\n                    <ion-col size=\"1\" class=\"ion-align-self-center\">\n                        <mat-icon color=\"primary\" (click)=\"editVideo()\">edit</mat-icon>\n                    </ion-col>\n                </ion-row>\n            </div>\n            <div class=\"experience bg-light border-bottom\">\n                <h3 class=\"title\">EXPÉRIENCES</h3>\n                <ion-row class=\"ion-justify-content-center py-1\">\n                    <ion-col size=\"2\" class=\"text-center\">\n                        <mat-icon color=\"primary\">mediation</mat-icon>\n                    </ion-col>\n                    <ion-col size=\"9\" class=\"ion-align-self-center\">\n                        <span>Expérience : <br></span>\n                        <div class=\"exeprience-details\" *ngFor=\"let experience of authService.user['experiences']\">\n                            {{ experience.startedDate | date:'MM-yyyy' }} - \n                            <span *ngIf=\"experience.endDate\"> {{ experience.endDate | date:'MM-yyyy' }} :</span>\n                            <span *ngIf=\"!experience.endDate\"> en cours :</span>\n                            {{ experience.job }}\n                        </div>\n                    </ion-col>\n                    <ion-col size=\"1\" class=\"ion-align-self-center\">\n                        <mat-icon color=\"primary\" (click)=\"editExperience()\">edit</mat-icon>\n                    </ion-col>\n                </ion-row>\n            </div>\n            <div class=\"formation bg-light border-bottom\">\n                <h3 class=\"title\">FORMATIONS</h3>\n                <ion-row class=\"ion-justify-content-center py-1\">\n                    <ion-col size=\"2\" class=\"text-center\">\n                        <mat-icon color=\"primary\">school</mat-icon>\n                    </ion-col>\n                    <ion-col size=\"9\" class=\"ion-align-self-center\">\n                        <span>Formations : </span>\n                        <div class=\"formation-details\" *ngFor=\"let item of authService.user['trainings']\">\n                            {{ item.yearOfGraduation }} :\n                            {{ item.name }}\n                        </div>\n                    </ion-col>\n                    <ion-col size=\"1\" class=\"ion-align-self-center\">\n                        <mat-icon color=\"primary\" (click)=\"editFormation()\">edit</mat-icon>\n                    </ion-col>\n                </ion-row>\n            </div>\n            <div class=\"cv bg-light border-bottom\">\n                <ion-row class=\"ion-justify-content-center py-1\">\n                    <ion-col size=\"2\" class=\"text-center\">\n                        <mat-icon color=\"primary\" class=\"mr-1\">article</mat-icon>\n                    </ion-col>\n                    <ion-col size=\"9\" class=\"ion-align-self-center\">\n                        <span>CV</span>\n                    </ion-col>\n                    <ion-col size=\"1\" class=\"ion-align-self-center\">\n                        <mat-icon color=\"primary\" (click)=\"editCV()\">edit</mat-icon>\n                    </ion-col>\n                </ion-row>\n            </div>\n            <div class=\"langue bg-light\">\n                <ion-row class=\"ion-justify-content-center py-1\">\n                    <ion-col size=\"2\" class=\"text-center\">\n                        <mat-icon color=\"primary\" class=\"mr-1\">g_translate</mat-icon>\n                    </ion-col>\n                    <ion-col size=\"9\" class=\"ion-align-self-center\">\n                        <span>LANGUE</span>\n                        <div *ngFor=\"let item of languages\">\n                            {{ item.language.name }} :\n                            {{ item.languageLevel.name }}\n                        </div>\n                    </ion-col>\n                    <ion-col size=\"1\" class=\"ion-align-self-center\">\n                        <mat-icon color=\"primary\" (click)=\"editLangue()\">edit</mat-icon>\n                    </ion-col>\n                </ion-row>\n            </div>\n            <div class=\"skils bg-light border-bottom pb-3\">\n                <h3 class=\"title\">SOFT SKILLS / VALEURS\n                    <mat-icon class=\"align-middle ml-1\" color=\"primary\" (click)=\"editSkils()\">add</mat-icon>\n                </h3>\n                <ion-row class=\"ion-justify-content-center py-1\">\n                    <ion-col size=\"2\" class=\"ion-align-self-center\">\n                        <img src=\"./assets/icon/circle-linkedin.svg\" alt=\"linkedin\">\n                    </ion-col>\n                    <ng-container *ngIf=\"authService.user['linkedin'] else addLinkedIn\">\n                        <ion-col size=\"10\" class=\"ion-align-self-center\">\n                            <span>{{authService.user['linkedin']}}</span>\n                        </ion-col>\n                    </ng-container>\n                    <ng-template #addLinkedIn>\n                        <ion-col size=\"9\" class=\"ion-align-self-center\">\n                            <span>Ajoutez un compte linkedin</span>\n                        </ion-col>\n                        <ion-col size=\"1\" class=\"ion-align-self-center\">\n                            <mat-icon color=\"primary\" (click)=\"editLinks()\">add</mat-icon>\n                        </ion-col>\n                    </ng-template>\n                </ion-row>\n                <ion-row class=\"ion-justify-content-center py-1\">\n                    <ion-col size=\"2\" class=\"ion-align-self-center\">\n                        <img src=\"./assets/icon/circle-blogger.svg\" alt=\"blogger\">\n                    </ion-col>\n                    <ng-container *ngIf=\"authService.user['blog'] else addBlog\">\n                        <ion-col size=\"10\" class=\"ion-align-self-center\">\n                            <span>{{authService.user['blog']}}</span>\n                        </ion-col>\n                    </ng-container>\n                    <ng-template #addBlog>\n                        <ion-col size=\"9\" class=\"ion-align-self-center\">\n                            <span>Ajoutez un lien blog</span>\n                        </ion-col>\n                        <ion-col size=\"1\" class=\"ion-align-self-center\">\n                            <mat-icon color=\"primary\" (click)=\"editLinks()\">add</mat-icon>\n                        </ion-col>\n                    </ng-template>\n                </ion-row>\n                <ion-row class=\"ion-justify-content-center py-1\">\n                    <ion-col size=\"2\" class=\"ion-align-self-center\">\n                        <img src=\"./assets/icon/circle-website.svg\" alt=\"website\">\n                    </ion-col>\n                    <ng-container *ngIf=\"authService.user['webSite'] else addWebSite\">\n                        <ion-col size=\"10\" class=\"ion-align-self-center\">\n                            <span>{{authService.user['webSite']}}</span>\n                        </ion-col>\n                    </ng-container>\n                    <ng-template #addWebSite>\n                        <ion-col size=\"9\" class=\"ion-align-self-center\">\n                            <span>Ajouter le lien de site web</span>\n                        </ion-col>\n                        <ion-col size=\"1\" class=\"ion-align-self-center\">\n                            <mat-icon color=\"primary\" (click)=\"editLinks()\">add</mat-icon>\n                        </ion-col>\n                    </ng-template>\n                </ion-row>\n                <ion-row class=\"ion-justify-content-center py-1\">\n                    <ion-col size=\"2\" class=\"ion-align-self-center\">\n                        <img src=\"./assets/icon/circle-instagram.svg\" alt=\"instagram\">\n                    </ion-col>\n                    <ng-container *ngIf=\"authService.user['instagram'] else addInstagram\">\n                        <ion-col size=\"10\" class=\"ion-align-self-center\">\n                            <span>{{authService.user['instagram']}}</span>\n                        </ion-col>\n                    </ng-container>\n                    <ng-template #addInstagram>\n                        <ion-col size=\"9\" class=\"ion-align-self-center\">\n                            <span>Ajoutez un compte instagram</span>\n                        </ion-col>\n                        <ion-col size=\"1\" class=\"ion-align-self-center\">\n                            <mat-icon color=\"primary\" (click)=\"editLinks()\">add</mat-icon>\n                        </ion-col>\n                    </ng-template>\n                </ion-row>\n                <ion-row class=\"ion-justify-content-center py-1\">\n                    <ion-col size=\"2\" class=\"ion-align-self-center\">\n                        <img src=\"./assets/icon/circle-twitter.svg\" alt=\"twitter\">\n                    </ion-col>\n                    <ng-container *ngIf=\"authService.user['twitter'] else addTwitter\">\n                        <ion-col size=\"10\" class=\"ion-align-self-center\">\n                            <span>{{authService.user['twitter']}}</span>\n                        </ion-col>\n                    </ng-container>\n                    <ng-template #addTwitter>\n                        <ion-col size=\"9\" class=\"ion-align-self-center\">\n                            <span>Ajoutez un compte twitter</span>\n                        </ion-col>\n                        <ion-col size=\"1\" class=\"ion-align-self-center\">\n                            <mat-icon color=\"primary\" (click)=\"editLinks()\">add</mat-icon>\n                        </ion-col>\n                    </ng-template>\n                </ion-row>\n                <ion-row class=\"ion-justify-content-center py-1\">\n                    <ion-col size=\"2\" class=\"ion-align-self-center\">\n                        <img src=\"./assets/icon/circle-facebook.svg\" alt=\"facebook\">\n                    </ion-col>\n                    <ng-container *ngIf=\"authService.user['facebook'] else addFacebook\">\n                        <ion-col size=\"10\" class=\"ion-align-self-center\">\n                            <span>{{ authService.user['facebook'] }}</span>\n                        </ion-col>\n                    </ng-container>\n                    <ng-template #addFacebook>\n                        <ion-col size=\"9\" class=\"ion-align-self-center\">\n                            <span>Ajouter le compte facebook</span>\n                        </ion-col>\n                        <ion-col size=\"1\" class=\"ion-align-self-center\">\n                            <mat-icon color=\"primary\" (click)=\"editLinks()\">add</mat-icon>\n                        </ion-col>\n                    </ng-template>\n                </ion-row>\n\n                <div class=\"links cursor-pointer\" (click)=\"editLinks()\">\n                    Modifier vos réseau sociaux\n                </div>\n            </div>\n        </div>\n    </section>\n\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/candidate/components/update/cv-condidate/cv-condidate.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/candidate/components/update/cv-condidate/cv-condidate.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"list-header ion-no-border\" mode=\"md\">\n    <ion-toolbar>\n        <ion-buttons (click)=\"modalController.dismiss()\" routerDirection=\"root\" class=\"roundbutton\" slot=\"start\">\n            <ion-icon src=\"./assets/icon/arrow-back.svg\"></ion-icon>\n        </ion-buttons>\n        <!-- <ion-buttons slot=\"end\">\n            <ion-button [disabled]=\"!file\" (click)=\"onSave()\">\n                Enregistrer\n            </ion-button>\n        </ion-buttons> -->\n        <ion-title>Mon CV</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content [fullscreen]=\"true\" class=\"forms\">\n    <section class=\"steps-content\">\n        <div class=\"page-content\">\n            <div class=\"d-block\">\n                <app-file-uploader [data]=\"value\" (fileChanges)=\"fileChanges($event)\"></app-file-uploader>\n            </div>\n        </div>\n        <div class=\"text-right mt-2\">\n            <ion-button type=\"submit\" [disabled]=\"!file\" (click)=\"onSave()\">\n                Enregistrer\n            </ion-button>\n        </div>\n    </section>\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/candidate/components/update/experience-condidate/experience-condidate.component.html":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/candidate/components/update/experience-condidate/experience-condidate.component.html ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form class=\"d-block\" [formGroup]=\"form\" (ngSubmit)=\"onSave()\">\n    <ion-header class=\"list-header ion-no-border\" mode=\"md\">\n        <ion-toolbar>\n            <ion-buttons (click)=\"modalController.dismiss()\" routerDirection=\"root\" class=\"roundbutton\" slot=\"start\">\n                <ion-icon src=\"./assets/icon/arrow-back.svg\"></ion-icon>\n            </ion-buttons>\n            <ion-title>Mes expériences</ion-title>\n        </ion-toolbar>\n    </ion-header>\n    <ion-content [fullscreen]=\"true\" class=\"forms\">\n        <section class=\"steps-content\">\n            <div class=\"page-content\" formArrayName=\"experiences\">\n\n                <ng-container\n                    *ngFor=\"let experience of form.get('experiences')['controls']; let i=index; let last=last;\"\n                    [formGroupName]=\"i\">\n\n                    <div class=\"w-100\">\n                        <ion-item class=\"custom-input\">\n                            <ion-label position=\"floating\">Emploi occupé <span class=\"required\">*</span></ion-label>\n                            <ion-input type=\"text\" formControlName=\"job\"></ion-input>\n                        </ion-item>\n                        <small class=\"text-error\"\n                            *ngIf=\"form.get('experiences')['controls'][i].get('job').invalid &&\n                    form.get('experiences')['controls'][i].get('job').errors.required && (form.get('experiences')['controls'][i].get('job').dirty || form.get('experiences')['controls'][i].get('job').touched) \">\n                            Champ obligatoire\n                        </small>\n                    </div>\n\n                    <div class=\"w-100\">\n                        <ion-item class=\"custom-select\">\n                            <ion-label position=\"floating\">Fonction <span class=\"required\">*</span></ion-label>\n                            <ion-select class=\"w-100\" ok-text=\"Ok\" cancel-text=\"Annuler\" placeholder=\"Sélectionner\"\n                                formControlName=\"function\">\n                                <ion-select-option *ngFor=\"let item of globalService.functions\" [value]=\"item._id\">\n                                    {{item.name}}\n                                </ion-select-option>\n                            </ion-select>\n                        </ion-item>\n                        <small class=\"text-error\"\n                            *ngIf=\"form.get('experiences')['controls'][i].get('function').invalid && (form.get('experiences')['controls'][i].get('function').dirty || form.get('experiences')['controls'][i].get('function').touched) \">\n                            Champ obligatoire\n                        </small>\n                    </div>\n\n                    <div fxLayout=\"row\" fxLayoutAlign=\"space-between\" fxLayoutGap=\"20px\">\n                        <div fxLayout=\"column\" fxFlex.xs=\"45%\">\n                            <ion-item class=\"custom-datetime w-100\">\n                                <ion-label position=\"floating\">Date debut <span class=\"required\">*</span></ion-label>\n                                <ion-datetime placeholder=\"De\" formControlName=\"startedDate\">\n                                </ion-datetime>\n                            </ion-item>\n                            <small class=\"text-error\"\n                                *ngIf=\"form.get('experiences')['controls'][i].get('startedDate').invalid && (form.get('experiences')['controls'][i].get('startedDate').dirty || form.get('experiences')['controls'][i].get('startedDate').touched) \">\n                                Champ obligatoire\n                            </small>\n                        </div>\n                        <div fxLayout=\"column\" fxFlex.xs=\"45%\">\n                            <ion-item class=\"custom-datetime w-100\">\n                                <ion-label position=\"floating\">Date fin</ion-label>\n                                <ion-datetime placeholder=\"À\" formControlName=\"endDate\" [disabled]=\"inWork\">\n                                </ion-datetime>\n                            </ion-item>\n                        </div>\n                    </div>\n\n                    <small class=\"text-error\" *ngIf=\"\n            form.get('experiences')['controls'][i].get('startedDate').touched && \n            form.get('experiences')['controls'][i].get('endDate').touched &&\n            form.get('experiences')['controls'][i].hasError('dateError')\">\n                        Date fin doit être supérieur de la date debut\n                    </small>\n\n                    <!-- <div class=\"w-40\">\n                        <ion-item class=\"custom-checkbox\" lines=\"none\">\n                            <ion-label class=\"ml-1\">En poste</ion-label>\n                            <ion-checkbox class=\"ion-no-margin\" color=\"primary\" slot=\"start\"\n                                (ionChange)=\"inWordChange()\">\n                            </ion-checkbox>\n                        </ion-item>\n                    </div> -->\n\n                    <div class=\"w-100\">\n                        <ion-item class=\"custom-input\">\n                            <ion-label position=\"floating\">Entreprise <span class=\"required\">*</span></ion-label>\n                            <ion-input type=\"text\" formControlName=\"company\"></ion-input>\n                        </ion-item>\n                        <small class=\"text-error\"\n                            *ngIf=\"form.get('experiences')['controls'][i].get('company').invalid && (form.get('experiences')['controls'][i].get('company').dirty || form.get('experiences')['controls'][i].get('company').touched) \">\n                            Champ obligatoire\n                        </small>\n                    </div>\n\n                    <div class=\"w-100\">\n                        <ion-item class=\"custom-select\">\n                            <ion-label position=\"floating\">Secteur d’activité <span class=\"required\">*</span>\n                            </ion-label>\n                            <ion-select class=\"w-100\" ok-text=\"Ok\" cancel-text=\"Annuler\" placeholder=\"Sélectionner\"\n                                formControlName=\"activitySector\">\n                                <ion-select-option *ngFor=\"let item of globalService.activitySectors\"\n                                    [value]=\"item._id\">\n                                    {{item.name}}\n                                </ion-select-option>\n                            </ion-select>\n                        </ion-item>\n                        <small class=\"text-error\"\n                            *ngIf=\"form.get('experiences')['controls'][i].get('activitySector').invalid && (form.get('experiences')['controls'][i].get('activitySector').dirty || form.get('experiences')['controls'][i].get('activitySector').touched) \">\n                            Champ obligatoire\n                        </small>\n                    </div>\n\n                    <div class=\"w-100\">\n                        <ion-item class=\"custom-input\">\n                            <ion-label position=\"floating\">Lieu <span class=\"required\">*</span></ion-label>\n                            <ion-input type=\"text\" formControlName=\"location\"></ion-input>\n                        </ion-item>\n                        <small class=\"text-error\"\n                            *ngIf=\"form.get('experiences')['controls'][i].get('location').invalid && (form.get('experiences')['controls'][i].get('location').dirty || form.get('experiences')['controls'][i].get('location').touched) \">\n                            Champ obligatoire\n                        </small>\n                    </div>\n\n                    <div class=\"text-right mt-1\">\n                        <ion-button fill=\"outline\" class=\"btn-outline-danger ml-30\" color=\"danger\"\n                            *ngIf=\"form.controls['experiences']['controls'].length > 1\"\n                            (click)=\"removeField(i, 'experiences')\">\n                            Supprimer\n                        </ion-button>\n                    </div>\n                </ng-container>\n                <div class=\"text-left mt-1\">\n                    <ion-button fill=\"outline\" class=\"btn-outline\" color=\"primary\"\n                        [disabled]=\"!form.controls.experiences.valid\" (click)=\"addField('experiences')\">\n                        <ion-icon slot=\"start\" name=\"add\"></ion-icon>\n                        Ajouter une Expérience\n                    </ion-button>\n                </div>\n\n            </div>\n            <div class=\"text-right mt-2\">\n                <ion-button type=\"submit\" [disabled]=\"!form.valid\">\n                    Enregistrer\n                </ion-button>\n            </div>\n        </section>\n    </ion-content>\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/candidate/components/update/formation-condidate/formation-condidate.component.html":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/candidate/components/update/formation-condidate/formation-condidate.component.html ***!
  \************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form class=\"d-block\" [formGroup]=\"form\" (ngSubmit)=\"onSave()\">\n    <ion-header class=\"list-header ion-no-border\" mode=\"md\">\n        <ion-toolbar>\n            <ion-buttons (click)=\"modalController.dismiss()\" routerDirection=\"root\" class=\"roundbutton\" slot=\"start\">\n                <ion-icon src=\"./assets/icon/arrow-back.svg\"></ion-icon>\n            </ion-buttons>\n            <!-- <ion-buttons slot=\"end\">\n                <ion-button type=\"submit\" [disabled]=\"!form.valid\">\n                    Enregistrer\n                </ion-button>\n            </ion-buttons> -->\n            <ion-title>Mes formations</ion-title>\n        </ion-toolbar>\n    </ion-header>\n    <ion-content [fullscreen]=\"true\" class=\"forms\">\n        <section class=\"steps-content\">\n\n            <ion-item class=\"custom-select w-100\">\n                <ion-label position=\"floating\">Niveau d'études le plus élevé</ion-label>\n                <ion-select class=\"w-100\" ok-text=\"Ok\" cancel-text=\"Annuler\" placeholder=\"Sélectionner\"\n                    formControlName=\"levelOfStudies\">\n                    <ion-select-option *ngFor=\"let item of globalService.levelOfStudies\" [value]=\"item._id\">\n                        {{item.name}}</ion-select-option>\n                </ion-select>\n                <small class=\"text-error\"\n                    *ngIf=\"form.get('levelOfStudies').invalid && (form.get('levelOfStudies').dirty || form.get('levelOfStudies').touched) \">\n                    Champ obligatoire\n                </small>\n            </ion-item>\n\n            <div class=\"mt-2\" formArrayName=\"trainings\">\n\n                <ng-container *ngFor=\"let training of form.get('trainings')['controls']; let i=index; let last=last;\"\n                    [formGroupName]=\"i\">\n\n                    <div class=\"w-100\">\n                        <ion-item class=\"custom-input\">\n                            <ion-label position=\"floating\">Intitulé de la formation <span class=\"required\">*</span>\n                            </ion-label>\n                            <ion-input type=\"text\" formControlName=\"name\"></ion-input>\n                        </ion-item>\n                        <small class=\"text-error\"\n                            *ngIf=\"form.get('trainings')['controls'][i].get('name').invalid && (form.get('trainings')['controls'][i].get('name').dirty || form.get('trainings')['controls'][i].get('name').touched) \">\n                            Champ obligatoire\n                        </small>\n                    </div>\n\n                    <ion-item class=\"custom-select w-100\">\n                        <ion-label position=\"floating\">Niveau d'études</ion-label>\n                        <ion-select class=\"w-100\" ok-text=\"Ok\" cancel-text=\"Annuler\" placeholder=\"Sélectionner\"\n                            formControlName=\"studyLevel\">\n                            <ion-select-option *ngFor=\"let item of globalService.levelOfStudies\" [value]=\"item._id\">\n                                {{item.name}}</ion-select-option>\n                        </ion-select>\n                        <small class=\"text-error\"\n                            *ngIf=\"form.get('trainings')['controls'][i].get('studyLevel').invalid && (form.get('trainings')['controls'][i].get('studyLevel').dirty || form.get('trainings')['controls'][i].get('studyLevel').touched) \">\n                            Champ obligatoire\n                        </small>\n                    </ion-item>\n\n\n                    <ion-item class=\"custom-select w-100\">\n                        <ion-label position=\"floating\">Type de formation</ion-label>\n                        <ion-select class=\"w-100\" ok-text=\"Ok\" cancel-text=\"Annuler\" placeholder=\"Sélectionner\"\n                            formControlName=\"typeOfTraining\">\n                            <ion-select-option *ngFor=\"let item of globalService.typeOfTrainings\" [value]=\"item._id\">\n                                {{item.name}}</ion-select-option>\n                        </ion-select>\n                        <small class=\"text-error\"\n                            *ngIf=\"form.get('trainings')['controls'][i].get('typeOfTraining').invalid && (form.get('trainings')['controls'][i].get('typeOfTraining').dirty || form.get('trainings')['controls'][i].get('typeOfTraining').touched) \">\n                            Champ obligatoire\n                        </small>\n                    </ion-item>\n\n                    <div class=\"w-100\">\n                        <ion-item class=\"custom-input\">\n                            <ion-label position=\"floating\">École <span class=\"required\">*</span></ion-label>\n                            <ion-input type=\"text\" formControlName=\"school\"></ion-input>\n                        </ion-item>\n                        <small class=\"text-error\"\n                            *ngIf=\"form.get('trainings')['controls'][i].get('school').invalid && (form.get('trainings')['controls'][i].get('school').dirty || form.get('trainings')['controls'][i].get('school').touched) \">\n                            Champ obligatoire\n                        </small>\n                    </div>\n\n                    <div fxLayout=\"row\" fxLayoutAlign=\"space-between\" fxLayoutGap=\"20px\">\n                        <div fxLayout=\"column\" fxFlex.xs=\"45%\">\n                            <ion-item class=\"custom-datetime w-100\">\n                                <ion-label position=\"floating\">Année d’obtention</ion-label>\n                                <ion-datetime placeholder=\"De\" displayFormat=\"YYYY\" pickerFormat=\"YYYY\"\n                                    formControlName=\"yearOfGraduation\">\n                                </ion-datetime>\n                            </ion-item>\n                            <small class=\"text-error\"\n                                *ngIf=\"form.get('trainings')['controls'][i].get('yearOfGraduation').invalid && (form.get('trainings')['controls'][i].get('yearOfGraduation').dirty || form.get('trainings')['controls'][i].get('yearOfGraduation').touched) \">\n                                Champ obligatoire\n                            </small>\n                        </div>\n\n                        <div fxLayout=\"column\" fxFlex.xs=\"45%\">\n                            <ion-item class=\"custom-input\">\n                                <ion-label position=\"floating\">Lieu <span class=\"required\">*</span></ion-label>\n                                <ion-input type=\"text\" formControlName=\"location\"></ion-input>\n                            </ion-item>\n                            <small class=\"text-error\"\n                                *ngIf=\"form.get('trainings')['controls'][i].get('location').invalid && (form.get('trainings')['controls'][i].get('location').dirty || form.get('trainings')['controls'][i].get('location').touched) \">\n                                Champ obligatoire\n                            </small>\n                        </div>\n\n                    </div>\n\n                    <div class=\"text-right mt-1\">\n                        <ion-button fill=\"outline\" class=\"btn-outline-danger ml-30\" color=\"danger\"\n                            *ngIf=\"form.controls['trainings']['controls'].length > 1\"\n                            (click)=\"removeField(i, 'trainings')\">\n                            Supprimer\n                        </ion-button>\n                    </div>\n                </ng-container>\n                <div class=\"text-left mt-1\">\n                    <ion-button fill=\"outline\" class=\"btn-outline\" color=\"primary\"\n                        [disabled]=\"!form.controls.trainings || !form.controls.trainings.valid\"\n                        (click)=\"addField('trainings')\">\n                        <ion-icon slot=\"start\" name=\"add\"></ion-icon>\n                        Ajouter une Formation\n                    </ion-button>\n                </div>\n\n            </div>\n            <div class=\"text-right mt-2\">\n                <ion-button type=\"submit\" [disabled]=\"!form.valid\">\n                    Enregistrer\n                </ion-button>\n            </div>\n        </section>\n    </ion-content>\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/candidate/components/update/langue-condidate/langue-condidate.component.html":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/candidate/components/update/langue-condidate/langue-condidate.component.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form class=\"d-block\" [formGroup]=\"form\">\n    <ion-header class=\"list-header ion-no-border\" mode=\"md\">\n        <ion-toolbar>\n            <ion-buttons (click)=\"modalController.dismiss()\" routerDirection=\"root\" class=\"roundbutton\" slot=\"start\">\n                <ion-icon src=\"./assets/icon/arrow-back.svg\"></ion-icon>\n            </ion-buttons>\n            <!-- <ion-buttons slot=\"end\">\n                <ion-button (click)=\"onSave()\" [disabled]=\"languagesList.length <= 0\n                || form.get('programingLanguages.logiciel').value?.length <= 0\n                || form.get('programingLanguages.language').value?.length <= 0\">\n                    Enregistrer\n                </ion-button>\n            </ion-buttons> -->\n            <ion-title>Langue</ion-title>\n        </ion-toolbar>\n    </ion-header>\n    <ion-content [fullscreen]=\"true\" class=\"forms\">\n        <section class=\"steps-content\">\n            <div class=\"page-content\">\n\n                <div formGroupName=\"languages\">\n                    <div class=\"mt-1\" fxLayout=\"row\" fxLayoutAlign=\"space-between\" fxLayoutGap=\"20px\">\n\n                        <ion-item class=\"custom-select w-100\" fxLayout=\"column\" fxFlex.xs=\"45%\">\n                            <ion-label position=\"floating\">Langue</ion-label>\n                            <ion-select class=\"w-100\" ok-text=\"Ok\" cancel-text=\"Annuler\" placeholder=\"Sélectionner\"\n                                formControlName=\"language\">\n                                <ion-select-option\n                                    *ngFor=\"let item of globalService.languages | languages:languagesList\"\n                                    [value]=\"item._id\">\n                                    {{item.name}}\n                                </ion-select-option>\n                            </ion-select>\n                        </ion-item>\n\n                        <ion-item class=\"custom-select w-100\" fxLayout=\"column\" fxFlex.xs=\"45%\">\n                            <ion-label position=\"floating\">Niveau de langue</ion-label>\n                            <ion-select class=\"w-100\" ok-text=\"Ok\" cancel-text=\"Annuler\" placeholder=\"Sélectionner\"\n                                formControlName=\"languageLevel\">\n                                <ion-select-option *ngFor=\"let item of globalService.languagesLevels\" [value]=\"item._id\">\n                                    {{item.name}}\n                                </ion-select-option>\n                            </ion-select>\n                        </ion-item>\n\n                    </div>\n                </div>\n\n                <div class=\"mb-1 mt-1\">\n                    <ul class=\"customList\">\n                        <li *ngFor=\"let item of languagesList;let i =index;\">\n                            <span class=\"text-primary text-left\">\n                                {{ item.language.name }} : {{ item.languageLevel.name}}\n                            </span>\n                            <mat-icon class=\"cursor-pointer btn-round vertical-align ml-1\" (click)=\"deleteLanguage(i)\">\n                                close\n                            </mat-icon><br>\n                        </li>\n                    </ul>\n                </div>\n\n                <div class=\"mt-1 mb-1 text-left\">\n                    <ion-button fill=\"outline\" class=\"btn-outline w-40\" color=\"primary\" (click)=\"addLanguage()\">\n                        Ajouter\n                        <ion-icon slot=\"end\" name=\"add\"></ion-icon>\n                    </ion-button>\n                </div>\n\n                <div class=\"mb-1\" fxLayout=\"row\" fxLayoutAlign=\"space-between\" fxLayoutGap=\"20px\"\n                    formGroupName=\"programingLanguages\">\n                    <div fxLayout=\"column\" fxFlex.xs=\"45%\">\n                        <app-multi-select label=\"Langages informatiques\" collection=\"programmingLanguages\"\n                            formControlName=\"language\"></app-multi-select>\n                        <small class=\"text-error\" *ngIf=\"form.get('programingLanguages.language').value?.length <= 0\">\n                            Champ obligatoire\n                        </small>\n                    </div>\n                    <div fxLayout=\"column\" fxFlex.xs=\"45%\">\n                        <app-multi-select label=\"Logiciels informatiques\" collection=\"logiciels\"\n                            formControlName=\"logiciel\">\n                        </app-multi-select>\n                        <small class=\"text-error\" *ngIf=\"form.get('programingLanguages.logiciel').value?.length <= 0\">\n                            Champ obligatoire\n                        </small>\n                    </div>\n                </div>\n\n\n            </div>\n            <div class=\"text-right mt-2\">\n                <ion-button type=\"submit\" (click)=\"onSave()\" [disabled]=\"languagesList.length <= 0\n                || form.get('programingLanguages.logiciel').value?.length <= 0\n                || form.get('programingLanguages.language').value?.length <= 0\">\n                    Enregistrer\n                </ion-button>\n            </div>\n        </section>\n    </ion-content>\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/candidate/components/update/links-condidate/links-condidate.component.html":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/candidate/components/update/links-condidate/links-condidate.component.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form class=\"d-block\" [formGroup]=\"form\" (ngSubmit)=\"onSave()\">\n    <ion-header class=\"list-header ion-no-border\" mode=\"md\">\n        <ion-toolbar>\n            <ion-buttons (click)=\"modalController.dismiss()\" routerDirection=\"root\" class=\"roundbutton\" slot=\"start\">\n                <ion-icon src=\"./assets/icon/arrow-back.svg\"></ion-icon>\n            </ion-buttons>\n            <!-- <ion-buttons slot=\"end\">\n                <ion-button type=\"submit\" [disabled]=\"!form.valid\">\n                    Enregistrer\n                </ion-button>\n            </ion-buttons> -->\n            <ion-title>Mes liens</ion-title>\n        </ion-toolbar>\n    </ion-header>\n    <ion-content [fullscreen]=\"true\" class=\"forms\">\n        <section class=\"steps-content\">\n            <div class=\"page-content\">\n                <div class=\"custom-input-icon\">\n                    <ion-icon class=\"align-middle\" src=\"./assets/icon/website-input.svg\"></ion-icon>\n                    <mat-form-field class=\"ml-1 w-90\">\n                        <mat-label>Site internet</mat-label>\n                        <input matInput placeholder=\"\" formControlName=\"webSite\">\n                        <span matPrefix>www.</span>\n                    </mat-form-field>\n                </div>\n                <div class=\"custom-input-icon\">\n                    <ion-icon class=\"align-middle\" src=\"./assets/icon/blogger-input.svg\"></ion-icon>\n                    <mat-form-field class=\"ml-1 w-90\">\n                        <mat-label>Blog</mat-label>\n                        <input matInput placeholder=\"\" formControlName=\"blog\">\n                        <span matPrefix>www.</span>\n                    </mat-form-field>\n                </div>\n                <div class=\"custom-input-icon\">\n                    <ion-icon class=\"align-middle\" src=\"./assets/icon/linkedin-input.svg\"></ion-icon>\n                    <mat-form-field class=\"ml-1 w-90\">\n                        <mat-label>Linkedin</mat-label>\n                        <input matInput placeholder=\"\" formControlName=\"linkedin\">\n                    </mat-form-field>\n                </div>\n                <div class=\"custom-input-icon\">\n                    <ion-icon class=\"align-middle\" src=\"./assets/icon/instagram-input.svg\"></ion-icon>\n                    <mat-form-field class=\"ml-1 w-90\">\n                        <mat-label>Instagram</mat-label>\n                        <input matInput placeholder=\"\" formControlName=\"instagram\">\n                        <span matPrefix>@</span>\n                    </mat-form-field>\n                </div>\n                <div class=\"custom-input-icon\">\n                    <ion-icon class=\"align-middle\" src=\"./assets/icon/twitter-input.svg\"></ion-icon>\n                    <mat-form-field class=\"ml-1 w-90\">\n                        <mat-label>Twitter</mat-label>\n                        <input matInput placeholder=\"\" formControlName=\"twitter\">\n                        <span matPrefix>@</span>\n                    </mat-form-field>\n                </div>\n                <div class=\"custom-input-icon\">\n                    <ion-icon class=\"align-middle\" src=\"./assets/icon/facebook-input.svg\"></ion-icon>\n                    <mat-form-field class=\"ml-1 w-90\">\n                        <mat-label>Facebook</mat-label>\n                        <input matInput placeholder=\"\" formControlName=\"facebook\">\n                    </mat-form-field>\n                </div>\n            </div>\n            <div class=\"text-right mt-2\">\n                <ion-button type=\"submit\" [disabled]=\"!form.valid\">\n                    Enregistrer\n                </ion-button>\n            </div>\n        </section>\n    </ion-content>\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/candidate/components/update/objectif-condidate/objectif-condidate.component.html":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/candidate/components/update/objectif-condidate/objectif-condidate.component.html ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"form\" (ngSubmit)=\"onSave()\">\n    <ion-header class=\"list-header ion-no-border\" mode=\"md\">\n        <ion-toolbar>\n            <ion-buttons (click)=\"modalController.dismiss()\" routerDirection=\"root\" class=\"roundbutton\" slot=\"start\">\n                <ion-icon src=\"./assets/icon/arrow-back.svg\"></ion-icon>\n            </ion-buttons>\n            <ion-title>Mon objectif</ion-title>\n        </ion-toolbar>\n    </ion-header>\n    <ion-content [fullscreen]=\"true\" class=\"forms\">\n        <section class=\"steps-content\">\n            <div class=\"page-content\">\n                <div class=\"d-block\">\n\n                    <div fxLayout=\"row\" fxLayoutAlign=\"space-between\" fxLayoutGap=\"20px\">\n                        <div class=\"w-100\" fxLayout=\"column\" fxFlex.xs=\"45%\">\n                            <ion-item class=\"custom-input\">\n                                <ion-label position=\"floating\">Poste souhaité <span class=\"required\">*</span>\n                                </ion-label>\n                                <ion-input type=\"text\" formControlName=\"searchedPost\"></ion-input>\n                            </ion-item>\n                            <small class=\"text-error\"\n                                *ngIf=\"form.get('searchedPost').invalid && (form.get('searchedPost').dirty || form.get('searchedPost').touched) \">\n                                Champ obligatoire\n                            </small>\n                        </div>\n\n                        <div fxLayout=\"column\" fxFlex.xs=\"45%\">\n                            <app-multi-select label=\"Intitulés d'usage\" collection=\"usageTitles\"\n                                formControlName=\"usageTitles\">\n                            </app-multi-select>\n                            <small class=\"text-error\" *ngIf=\"!form.get('usageTitles').value?.length\">\n                                Champ obligatoire\n                            </small>\n                        </div>\n                    </div>\n\n                    <div fxLayout=\"row\" fxLayoutAlign=\"space-between\" fxLayoutGap=\"20px\">\n                        <div class=\"w-100\" fxLayout=\"column\" fxFlex.xs=\"45%\">\n                            <app-multi-select label=\"Type de contrat\" collection=\"contracts\"\n                                formControlName=\"contracts\">\n                            </app-multi-select>\n                            <small class=\"text-error\" *ngIf=\"!form.get('contracts').value?.length\">\n                                Veuillez choisir au moins un type de contrat.\n                            </small>\n                        </div>\n                        <div class=\"w-100\" fxLayout=\"column\" fxFlex.xs=\"45%\">\n                            <ion-item class=\"custom-select\">\n                                <ion-label position=\"floating\">Type de Poste <span class=\"required\">*</span></ion-label>\n                                <ion-select class=\"w-100\" ok-text=\"Ok\" cancel-text=\"Annuler\" placeholder=\"Sélectionner\"\n                                    formControlName=\"jobType\">\n                                    <ion-select-option *ngFor=\"let item of globalService.jobTypes\" [value]=\"item._id\">\n                                        {{item.name}}</ion-select-option>\n                                </ion-select>\n                            </ion-item>\n                            <small class=\"text-error\"\n                                *ngIf=\"form.get('jobType').invalid && (form.get('jobType').dirty || form.get('jobType').touched) \">\n                                Champ obligatoire\n                            </small>\n                        </div>\n                    </div>\n\n                    <div class=\"w-100\">\n                        <app-multi-select label=\"Fonction\" collection=\"functions\" formControlName=\"functions\">\n                        </app-multi-select>\n                        <small class=\"text-error\" *ngIf=\"!form.get('functions').value?.length\">\n                            Veuillez choisir au moins une fonction.\n                        </small>\n                    </div>\n\n                    <div class=\"w-100\">\n\n                        <app-multi-select label=\"Secteur d’activité \" collection=\"activitySectors\"\n                            formControlName=\"activitySector\">\n                        </app-multi-select>\n                        <small class=\"text-error\" *ngIf=\"!form.get('activitySector').value?.length\">\n                            Veuillez choisir au moins un secteur d’activité.\n                        </small>\n\n                    </div>\n                    <div class=\"w-100\">\n                        <ion-item class=\"custom-select w-100 \">\n                            <ion-label position=\"floating\">Mode de travail <span class=\"required\">*</span></ion-label>\n                            <ion-select class=\"w-100\" ok-text=\"Ok\" cancel-text=\"Annuler\" placeholder=\"Sélectionner\"\n                                formControlName=\"jobMode\">\n                                <ion-select-option *ngFor=\"let item of globalService.jobModes\" [value]=\"item._id\">\n                                    {{item.name}}</ion-select-option>\n                            </ion-select>\n                        </ion-item>\n                        <small class=\"text-error\"\n                            *ngIf=\"form.get('jobMode').invalid && (form.get('jobMode').dirty || form.get('jobMode').touched) \">\n                            Champ obligatoire\n                        </small>\n                    </div>\n\n                    <div class=\"w-100\">\n                        <app-multi-select label=\"Lieu\" collection=\"locations\" formControlName=\"locations\">\n                        </app-multi-select>\n                        <small class=\"text-error\" *ngIf=\"!form.get('locations').value?.length\">\n                            Veuillez choisir au moins une ville.\n                        </small>\n                    </div>\n\n                    <h4 class=\"pt-2\">Prétentions salariales (Dhs)</h4>\n                    <div fxLayout=\"row\" fxLayoutAlign=\"space-between\" fxLayoutGap=\"20px\">\n                        <div class=\"w-100\" fxLayout=\"column\" fxFlex.xs=\"45%\">\n                            <ion-item class=\"custom-input\">\n                                <ion-label position=\"floating\">À partir de <span class=\"required\">*</span></ion-label>\n                                <ion-input type=\"number\" formControlName=\"supposedSalaryMin\"></ion-input>\n                            </ion-item>\n                            <small class=\"text-error\"\n                                *ngIf=\"form.get('supposedSalaryMin').invalid && (form.get('supposedSalaryMin').dirty || form.get('supposedSalaryMin').touched) \">\n                                Champ obligatoire\n                            </small>\n                        </div>\n\n                        <div class=\"w-100\" fxLayout=\"column\" fxFlex.xs=\"45%\">\n                            <ion-item class=\"custom-input\">\n                                <ion-label position=\"floating\">Jusqu'à <span class=\"required\">*</span></ion-label>\n                                <ion-input type=\"number\" formControlName=\"supposedSalaryMax\"></ion-input>\n                            </ion-item>\n                            <small class=\"text-error\"\n                                *ngIf=\"form.get('supposedSalaryMax').invalid && (form.get('supposedSalaryMax').dirty || form.get('supposedSalaryMax').touched) \">\n                                Champ obligatoire\n                            </small>\n                        </div>\n                    </div>\n                    <small class=\"text-error\"\n                        *ngIf=\"form.get('supposedSalaryMax').touched && !form.get('supposedSalaryMax').hasError('required') && form.hasError('salaryErreur')\">\n                        Le salaire maximum doit être supérieur au salaire minimum\n                    </small>\n                </div>\n            </div>\n            <div class=\"text-right mt-2\">\n                <ion-button type=\"submit\" [disabled]=\"!form.valid || !form.get('usageTitles').value?.length\n                || !form.get('functions').value?.length \n                || !form.get('activitySector').value?.length\n                || !form.get('locations').value?.length\n                || !form.get('contracts').value?.length\">\n                    Enregistrer\n                </ion-button>\n            </div>\n        </section>\n    </ion-content>\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/candidate/components/update/profil-condidate/profil-condidate.component.html":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/candidate/components/update/profil-condidate/profil-condidate.component.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"form\" (ngSubmit)=\"onSave()\">\n    <ion-header class=\"list-header ion-no-border\" mode=\"md\">\n        <ion-toolbar>\n            <ion-buttons (click)=\"modalController.dismiss()\" routerDirection=\"root\" class=\"roundbutton\" slot=\"start\">\n                <ion-icon src=\"./assets/icon/arrow-back.svg\"></ion-icon>\n            </ion-buttons>\n            <!-- <ion-buttons slot=\"end\">\n                <ion-button type=\"submit\" [disabled]=\"!form.valid\">\n                    Enregistrer\n                </ion-button>\n            </ion-buttons> -->\n            <ion-title>Mon profil</ion-title>\n        </ion-toolbar>\n    </ion-header>\n    <ion-content [fullscreen]=\"true\" class=\"forms\">\n        <section class=\"steps-content mt-2\">\n            <div class=\"page-content\">\n\n                <div fxLayout=\"row\" fxLayoutAlign=\"space-between\" fxLayoutGap=\"20px\">\n                    <div class=\"w-100\" fxLayout=\"column\" fxFlex.xs=\"45%\">\n                        <ion-item class=\"custom-input\">\n                            <ion-label position=\"floating\">Nom <span class=\"required\">*</span></ion-label>\n                            <ion-input type=\"text\" formControlName=\"lastName\"></ion-input>\n                        </ion-item>\n                        <small class=\"text-error\"\n                            *ngIf=\"form.get('lastName').invalid && (form.get('lastName').dirty || form.get('lastName').touched) \">\n                            Champ obligatoire\n                        </small>\n                    </div>\n\n                    <div class=\"w-100\" fxLayout=\"column\" fxFlex.xs=\"45%\">\n                        <ion-item class=\"custom-input\">\n                            <ion-label position=\"floating\">Prénom <span class=\"required\">*</span></ion-label>\n                            <ion-input type=\"text\" formControlName=\"firstName\"></ion-input>\n                        </ion-item>\n                        <small class=\"text-error\"\n                            *ngIf=\"form.get('firstName').invalid && (form.get('firstName').dirty || form.get('firstName').touched) \">\n                            Champ obligatoire\n                        </small>\n                    </div>\n                </div>\n\n                <div fxLayout=\"row\" fxLayoutAlign=\"space-between\" fxLayoutGap=\"20px\">\n                    <div class=\"w-100\" fxLayout=\"column\" fxFlex.xs=\"45%\">\n                        <ion-item class=\"custom-datetime\">\n                            <ion-label position=\"floating\">Date Naissance <span class=\"required\">*</span></ion-label>\n                            <ion-datetime placeholder=\"Choissez votre date\" formControlName=\"birthday\">\n                            </ion-datetime>\n                        </ion-item>\n                        <small class=\"text-error\"\n                            *ngIf=\"form.get('birthday').invalid && (form.get('birthday').dirty || form.get('birthday').touched) \">\n                            Champ obligatoire\n                        </small>\n                    </div>\n\n                    <div class=\"w-100\" fxLayout=\"column\" fxFlex.xs=\"45%\">\n                        <ion-item class=\"custom-select\">\n                            <ion-label position=\"floating\">Sexe <span class=\"required\">*</span></ion-label>\n                            <ion-select class=\"w-100\" ok-text=\"Ok\" cancel-text=\"Annuler\" placeholder=\"Sélectionner\"\n                                formControlName=\"gender\">\n                                <ion-select-option value=\"masculin\">Homme</ion-select-option>\n                                <ion-select-option value=\"feminin\">Femme</ion-select-option>\n                            </ion-select>\n                        </ion-item>\n                        <small class=\"text-error\"\n                            *ngIf=\"form.get('gender').invalid && (form.get('gender').dirty || form.get('gender').touched) \">\n                            Champ obligatoire\n                        </small>\n                    </div>\n                </div>\n\n                <div fxLayout=\"row\" fxLayoutAlign=\"space-between\" fxLayoutGap=\"20px\">\n                    <div class=\"w-100\" fxLayout=\"column\" fxFlex.xs=\"45%\">\n                        <div class=\"w-100 custom-input\">\n                            <ion-item class=\"custom-input\">\n                                <ion-label position=\"floating\">Téléphone (+212)<span class=\"required\">*</span></ion-label>\n                                <ion-input type=\"tel\" formControlName=\"phoneNumber\"></ion-input>\n                            </ion-item>\n                        </div>\n                        <small class=\"text-error\"\n                            *ngIf=\"form.get('phoneNumber').invalid && (form.get('phoneNumber').dirty || form.get('phoneNumber').touched) \">\n                            Champ obligatoire\n                        </small>\n                    </div>\n\n                    <div class=\"w-100\" fxLayout=\"column\" fxFlex.xs=\"45%\">\n                        <ion-item class=\"custom-select w-100\">\n                            <ion-label position=\"floating\">Disponiblité <span class=\"required\">*</span></ion-label>\n                            <ion-select class=\"w-100\" ok-text=\"Ok\" cancel-text=\"Annuler\" placeholder=\"Sélectionner\"\n                                formControlName=\"availability\">\n                                <ion-select-option *ngFor=\"let item of globalService.availabilities\" [value]=\"item._id\">\n                                    {{item.name}}\n                                </ion-select-option>\n                            </ion-select>\n                        </ion-item>\n                        <small class=\"text-error\"\n                            *ngIf=\"form.get('availability').invalid && (form.get('availability').dirty || form.get('availability').touched) \">\n                            Champ obligatoire\n                        </small>\n                    </div>\n                </div>\n\n                <div fxLayout=\"row\" fxLayoutAlign=\"space-between\">\n                    <div class=\"w-100\" fxLayout=\"column\" fxFlex.xs=\"100%\">\n                        <ion-item class=\"custom-select w-100\">\n                            <ion-label position=\"floating\">Nombre d’années d’experience <span class=\"required\">*</span>\n                            </ion-label>\n                            <ion-select class=\"w-100\" ok-text=\"Ok\" cancel-text=\"Annuler\" placeholder=\"Sélectionner\"\n                                formControlName=\"experienceYears\">\n                                <ion-select-option *ngFor=\"let item of globalService.experiences\" [value]=\"item._id\">\n                                    {{item.name}}\n                                </ion-select-option>\n                            </ion-select>\n                        </ion-item>\n                        <small class=\"text-error\"\n                            *ngIf=\"form.get('experienceYears').invalid && (form.get('experienceYears').dirty || form.get('experienceYears').touched) \">\n                            Champ obligatoire\n                        </small>\n                    </div>\n                </div>\n\n                <ion-item class=\"custom-input w-100\">\n                    <ion-label position=\"floating\">Poste actuel <span class=\"required\">*</span></ion-label>\n                    <ion-input type=\"text\" formControlName=\"currentJob\"></ion-input>\n                </ion-item>\n                <small class=\"text-error\"\n                    *ngIf=\"form.get('currentJob').invalid && (form.get('currentJob').dirty || form.get('currentJob').touched) \">\n                    Champ obligatoire\n                </small>\n\n\n                <ion-item class=\"custom-input w-100\">\n                    <ion-label position=\"floating\">Préciser salaire actuel (Dhs) <span class=\"required\">*</span>\n                    </ion-label>\n                    <ion-input type=\"number\" formControlName=\"currentSalary\"></ion-input>\n                </ion-item>\n                <small class=\"text-error\"\n                    *ngIf=\"form.get('currentSalary').invalid && (form.get('currentSalary').dirty || form.get('currentSalary').touched) \">\n                    Champ obligatoire\n                </small>\n\n                <div fxLayout=\"row\" fxLayoutAlign=\"space-between\" fxLayoutGap=\"20px\">\n                    <div class=\"w-100\" fxLayout=\"column\" fxFlex.xs=\"45%\">\n                        <ion-item class=\"custom-select w-100\">\n                            <ion-label position=\"floating\">Niv. managérial <span class=\"required\">*</span></ion-label>\n                            <ion-select class=\"w-100\" ok-text=\"Ok\" cancel-text=\"Annuler\" placeholder=\"Sélectionner\"\n                                formControlName=\"managerialLevel\">\n                                <ion-select-option *ngFor=\"let item of globalService.managerialLevels\"\n                                    [value]=\"item._id\">\n                                    {{item.name}}\n                                </ion-select-option>\n                            </ion-select>\n                        </ion-item>\n                        <small class=\"text-error\"\n                            *ngIf=\"form.get('managerialLevel').invalid && (form.get('managerialLevel').dirty || form.get('managerialLevel').touched) \">\n                            Champ obligatoire\n                        </small>\n                    </div>\n\n                    <div class=\"w-100\" fxLayout=\"column\" fxFlex.xs=\"45%\">\n                        <ion-item class=\"custom-select w-100\">\n                            <ion-label position=\"floating\">Effectif Géré <span class=\"required\">*</span></ion-label>\n                            <ion-select class=\"w-100\" ok-text=\"Ok\" cancel-text=\"Annuler\" placeholder=\"Sélectionner\"\n                                formControlName=\"effective\">\n                                <ion-select-option *ngFor=\"let item of globalService.effectives\" [value]=\"item._id\">\n                                    {{item.name}}\n                                </ion-select-option>\n                            </ion-select>\n                        </ion-item>\n                        <small class=\"text-error\"\n                            *ngIf=\"form.get('effective').invalid && (form.get('effective').dirty || form.get('effective').touched) \">\n                            Champ obligatoire\n                        </small>\n                    </div>\n                </div>\n\n                <ion-item class=\"custom-input w-100\">\n                    <ion-label position=\"floating\">Objectif <span class=\"required\">*</span></ion-label>\n                    <ion-input type=\"text\" formControlName=\"goal\"></ion-input>\n                </ion-item>\n                <small class=\"text-error\"\n                    *ngIf=\"form.get('goal').invalid && (form.get('goal').dirty || form.get('goal').touched) \">\n                    Champ obligatoire\n                </small>\n\n            </div>\n            <div class=\"text-right mt-2\">\n                <ion-button type=\"submit\" [disabled]=\"!form.valid\">\n                    Enregistrer\n                </ion-button>\n            </div>\n        </section>\n    </ion-content>\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/candidate/components/update/skils-condidate/skils-condidate.component.html":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/candidate/components/update/skils-condidate/skils-condidate.component.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"list-header ion-no-border\" mode=\"md\">\n    <ion-toolbar>\n        <ion-buttons (click)=\"modalController.dismiss()\" routerDirection=\"root\" class=\"roundbutton\" slot=\"start\">\n            <ion-icon src=\"./assets/icon/arrow-back.svg\"></ion-icon>\n        </ion-buttons>\n        <ion-title>Soft skills</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content [fullscreen]=\"true\" class=\"forms\">\n    <section class=\"steps-content\">\n        <div class=\"page-content\">\n            <form class=\"d-block\" [formGroup]=\"form\" (ngSubmit)=\"onSave()\">\n                <div class=\"text-center mt-2\">\n                    <p> Vos softskills sont très importants pour les recruteurs.\n                        Choisissez dans la liste les 5 softskills qui vous représentent le plus.\n                    </p>\n                </div>\n                <app-multi-select label=\"Mes soft skills\" [limit] = \"5\" collection=\"softSkills\" formControlName=\"skills\">\n                </app-multi-select>\n                <div class=\"text-center mt-2\">\n                    <p>En recrutement une valeur est parfois plus\n                        décisive qu’une compétence.\n                        Renforcer la qualité de votre profil en\n                        séléctionnant dans la liste les 6 valeurs qui vous\n                        correspondent</p>\n                </div>\n                <app-multi-select label=\"Mes valeurs\" [limit] = \"6\" collection=\"values\" formControlName=\"values\">\n                </app-multi-select>\n            \n            </form>\n        </div>\n        <div class=\"text-right mt-2\">\n            <ion-button type=\"submit\" (click)=\"onSave()\" [disabled]=\"form.get('values').value?.length < 6\n            ||  form.get('skills').value?.length < 5 ? true : false\">\n                Enregistrer\n            </ion-button>\n        </div>\n    </section>\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/candidate/components/update/video-condidate/video-condidate.component.html":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/candidate/components/update/video-condidate/video-condidate.component.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"list-header ion-no-border\" mode=\"md\">\n    <ion-toolbar>\n        <ion-buttons (click)=\"modalController.dismiss()\" routerDirection=\"root\" class=\"roundbutton\" slot=\"start\">\n            <ion-icon src=\"./assets/icon/arrow-back.svg\"></ion-icon>\n        </ion-buttons>\n        <ion-title>Vidéo</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content [fullscreen]=\"true\" class=\"forms\">\n    <section class=\"steps-content\">\n        <div class=\"page-content mt-4\">\n            <app-file-uploader [data]=\"value\" (fileChanges)=\"fileChanges($event)\"></app-file-uploader>\n        </div>\n        <div class=\"text-right mt-2\">\n            <ion-button type=\"submit\" [disabled]=\"!file\" (click)=\"onSave()\">\n                Enregistrer\n            </ion-button>\n        </div>\n    </section>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/candidate/candidate-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/candidate/candidate-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: CandidateRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CandidateRoutingModule", function() { return CandidateRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_card_condidate_card_condidate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/card-condidate/card-condidate.component */ "./src/app/pages/candidate/components/card-condidate/card-condidate.component.ts");




const routes = [
    {
        path: '',
        component: _components_card_condidate_card_condidate_component__WEBPACK_IMPORTED_MODULE_3__["CardCondidateComponent"]
    }
];
let CandidateRoutingModule = class CandidateRoutingModule {
};
CandidateRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], CandidateRoutingModule);



/***/ }),

/***/ "./src/app/pages/candidate/candidate.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/candidate/candidate.module.ts ***!
  \*****************************************************/
/*! exports provided: CandidateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CandidateModule", function() { return CandidateModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _candidate_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./candidate-routing.module */ "./src/app/pages/candidate/candidate-routing.module.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _components_card_condidate_card_condidate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/card-condidate/card-condidate.component */ "./src/app/pages/candidate/components/card-condidate/card-condidate.component.ts");
/* harmony import */ var _components_update_cv_condidate_cv_condidate_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/update/cv-condidate/cv-condidate.component */ "./src/app/pages/candidate/components/update/cv-condidate/cv-condidate.component.ts");
/* harmony import */ var _components_update_experience_condidate_experience_condidate_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/update/experience-condidate/experience-condidate.component */ "./src/app/pages/candidate/components/update/experience-condidate/experience-condidate.component.ts");
/* harmony import */ var _components_update_formation_condidate_formation_condidate_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/update/formation-condidate/formation-condidate.component */ "./src/app/pages/candidate/components/update/formation-condidate/formation-condidate.component.ts");
/* harmony import */ var _components_update_langue_condidate_langue_condidate_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/update/langue-condidate/langue-condidate.component */ "./src/app/pages/candidate/components/update/langue-condidate/langue-condidate.component.ts");
/* harmony import */ var _components_update_links_condidate_links_condidate_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/update/links-condidate/links-condidate.component */ "./src/app/pages/candidate/components/update/links-condidate/links-condidate.component.ts");
/* harmony import */ var _components_update_objectif_condidate_objectif_condidate_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/update/objectif-condidate/objectif-condidate.component */ "./src/app/pages/candidate/components/update/objectif-condidate/objectif-condidate.component.ts");
/* harmony import */ var _components_update_profil_condidate_profil_condidate_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/update/profil-condidate/profil-condidate.component */ "./src/app/pages/candidate/components/update/profil-condidate/profil-condidate.component.ts");
/* harmony import */ var _components_update_skils_condidate_skils_condidate_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/update/skils-condidate/skils-condidate.component */ "./src/app/pages/candidate/components/update/skils-condidate/skils-condidate.component.ts");
/* harmony import */ var _components_update_video_condidate_video_condidate_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/update/video-condidate/video-condidate.component */ "./src/app/pages/candidate/components/update/video-condidate/video-condidate.component.ts");














let CandidateModule = class CandidateModule {
};
CandidateModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_components_card_condidate_card_condidate_component__WEBPACK_IMPORTED_MODULE_4__["CardCondidateComponent"],
            _components_update_profil_condidate_profil_condidate_component__WEBPACK_IMPORTED_MODULE_11__["ProfilCondidateComponent"],
            _components_update_objectif_condidate_objectif_condidate_component__WEBPACK_IMPORTED_MODULE_10__["ObjectifCondidateComponent"],
            _components_update_video_condidate_video_condidate_component__WEBPACK_IMPORTED_MODULE_13__["VideoCondidateComponent"],
            _components_update_cv_condidate_cv_condidate_component__WEBPACK_IMPORTED_MODULE_5__["CvCondidateComponent"],
            _components_update_experience_condidate_experience_condidate_component__WEBPACK_IMPORTED_MODULE_6__["ExperienceCondidateComponent"],
            _components_update_formation_condidate_formation_condidate_component__WEBPACK_IMPORTED_MODULE_7__["FormationCondidateComponent"],
            _components_update_langue_condidate_langue_condidate_component__WEBPACK_IMPORTED_MODULE_8__["LangueCondidateComponent"],
            _components_update_links_condidate_links_condidate_component__WEBPACK_IMPORTED_MODULE_9__["LinksCondidateComponent"],
            _components_update_skils_condidate_skils_condidate_component__WEBPACK_IMPORTED_MODULE_12__["SkilsCondidateComponent"]],
        imports: [
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _candidate_routing_module__WEBPACK_IMPORTED_MODULE_2__["CandidateRoutingModule"]
        ]
    })
], CandidateModule);



/***/ }),

/***/ "./src/app/pages/candidate/components/card-condidate/card-condidate.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/candidate/components/card-condidate/card-condidate.component.scss ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhbmRpZGF0ZS9jb21wb25lbnRzL2NhcmQtY29uZGlkYXRlL2NhcmQtY29uZGlkYXRlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/candidate/components/card-condidate/card-condidate.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/candidate/components/card-condidate/card-condidate.component.ts ***!
  \***************************************************************************************/
/*! exports provided: CardCondidateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardCondidateComponent", function() { return CardCondidateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _update_cv_condidate_cv_condidate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../update/cv-condidate/cv-condidate.component */ "./src/app/pages/candidate/components/update/cv-condidate/cv-condidate.component.ts");
/* harmony import */ var _update_experience_condidate_experience_condidate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../update/experience-condidate/experience-condidate.component */ "./src/app/pages/candidate/components/update/experience-condidate/experience-condidate.component.ts");
/* harmony import */ var _update_formation_condidate_formation_condidate_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../update/formation-condidate/formation-condidate.component */ "./src/app/pages/candidate/components/update/formation-condidate/formation-condidate.component.ts");
/* harmony import */ var _update_langue_condidate_langue_condidate_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../update/langue-condidate/langue-condidate.component */ "./src/app/pages/candidate/components/update/langue-condidate/langue-condidate.component.ts");
/* harmony import */ var _update_links_condidate_links_condidate_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../update/links-condidate/links-condidate.component */ "./src/app/pages/candidate/components/update/links-condidate/links-condidate.component.ts");
/* harmony import */ var _update_objectif_condidate_objectif_condidate_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../update/objectif-condidate/objectif-condidate.component */ "./src/app/pages/candidate/components/update/objectif-condidate/objectif-condidate.component.ts");
/* harmony import */ var _update_profil_condidate_profil_condidate_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../update/profil-condidate/profil-condidate.component */ "./src/app/pages/candidate/components/update/profil-condidate/profil-condidate.component.ts");
/* harmony import */ var _update_skils_condidate_skils_condidate_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../update/skils-condidate/skils-condidate.component */ "./src/app/pages/candidate/components/update/skils-condidate/skils-condidate.component.ts");
/* harmony import */ var _update_video_condidate_video_condidate_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../update/video-condidate/video-condidate.component */ "./src/app/pages/candidate/components/update/video-condidate/video-condidate.component.ts");
/* harmony import */ var src_app_core_services_global_auth_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/core/services/global/auth.service */ "./src/app/core/services/global/auth.service.ts");
/* harmony import */ var src_app_core_services_global_global_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/core/services/global/global.service */ "./src/app/core/services/global/global.service.ts");
/* harmony import */ var src_app_core_services_global_picture_utils_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/core/services/global/picture-utils.service */ "./src/app/core/services/global/picture-utils.service.ts");
/* harmony import */ var src_app_core_services_addapters_toast_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/core/services/addapters/toast.service */ "./src/app/core/services/addapters/toast.service.ts");
/* harmony import */ var src_app_core_services_crud_file_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/core/services/crud/file.service */ "./src/app/core/services/crud/file.service.ts");
/* harmony import */ var src_app_core_services_crud_candidate_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/core/services/crud/candidate.service */ "./src/app/core/services/crud/candidate.service.ts");
/* harmony import */ var src_app_core_services_addapters_trans_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/core/services/addapters/trans.service */ "./src/app/core/services/addapters/trans.service.ts");
/* harmony import */ var src_app_core_utils__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/core/utils */ "./src/app/core/utils/index.ts");




















let CardCondidateComponent = class CardCondidateComponent {
    constructor(modalController, authService, globalService, actionSheetController, loadingController, pictureUtilsService, zone, toastService, fileService, candidateService, trans) {
        this.modalController = modalController;
        this.authService = authService;
        this.globalService = globalService;
        this.actionSheetController = actionSheetController;
        this.loadingController = loadingController;
        this.pictureUtilsService = pictureUtilsService;
        this.zone = zone;
        this.toastService = toastService;
        this.fileService = fileService;
        this.candidateService = candidateService;
        this.trans = trans;
        this.languages = [];
        this.hasChanged = false;
        this.disabled = true;
        this.values = [];
        this.softSkills = [];
        this.oldPercentage = 0;
    }
    ngOnInit() {
        this.getLanguageCandidate();
        console.log(this.authService.user);
        this.candidateService.setPercentage(this.candidateService.candidate.percentage);
        const value = { picture: this.authService.user.picture };
        this.oldPercentage = src_app_core_utils__WEBPACK_IMPORTED_MODULE_19__["Helper"].calculePercentage(value, 0, 1.96);
    }
    getLanguageCandidate() {
        this.languages = this.authService.user['languages'].map(lang => {
            const languageIndex = this.globalService.languages.findIndex(x => x._id === lang.language);
            const languageLevelIndex = this.globalService.languagesLevels.findIndex(x => x._id === lang.languageLevel);
            return {
                language: this.globalService.languages[languageIndex],
                languageLevel: this.globalService.languagesLevels[languageLevelIndex]
            };
        });
    }
    ionViewDidEnter() {
        const index = this.globalService.locations.findIndex(x => x._id === this.authService.user['location']);
        const objectifLocationIndex = this.globalService.locations.findIndex(x => x._id === this.authService.user['locations'][0]);
        if (index !== -1) {
            this.location = this.globalService.locations[index].name;
        }
        if (objectifLocationIndex !== -1) {
            this.objectifLocation = this.globalService.locations[objectifLocationIndex].name;
        }
        this.candidateService.changes.subscribe(res => {
            this.getLanguageCandidate();
            const index = this.globalService.locations.findIndex(x => x._id === this.authService.user['location']);
            const objectifLocationIndex = this.globalService.locations.findIndex(x => x._id === this.authService.user['locations'][0]);
            if (index !== -1) {
                this.location = this.globalService.locations[index].name;
            }
            if (objectifLocationIndex !== -1) {
                this.objectifLocation = this.globalService.locations[objectifLocationIndex].name;
            }
        });
        console.log(this.authService.user['values']);
    }
    /**
     * add image
     */
    addImageAction() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: 'Image',
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
                                        if (!this.authService.user['picture']) {
                                            let value = { picture: res.file };
                                            let per = src_app_core_utils__WEBPACK_IMPORTED_MODULE_19__["Helper"].calculePercentage(value, (this.authService.user.percentage ? Number(this.authService.user.percentage) : 0) - Number(this.oldPercentage), 1.96);
                                            value = Object.assign(value, {
                                                percentage: (Math.round(per * 100) / 100).toFixed(2)
                                            });
                                            this.candidateService.updatePicture(value).subscribe(response => {
                                                console.log(response);
                                                this.candidateService.candidate['picture'] = response['picture'];
                                                this.candidateService.candidate.percentage = Math.round(per);
                                                this.candidateService.setPercentage(this.candidateService.candidate.percentage);
                                                this.authService.user['picture'] = response['picture'];
                                                this.candidateService.setChanges(true);
                                                this.toastService.success('Modifier avec success');
                                            });
                                            console.log('makaynach');
                                        }
                                        else {
                                            console.log('kayna');
                                            this.candidateService.updatePicture({ picture: res.file }).subscribe(response => {
                                                this.authService.user['picture'] = response['picture'];
                                                this.candidateService.candidate['picture'] = response['picture'];
                                                this.candidateService.setChanges(true);
                                                this.toastService.success('Modifier avec success');
                                            });
                                        }
                                    });
                                });
                                syncing = false;
                                loading.dismiss();
                            }, _error => {
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
                                        if (!this.authService.user['picture']) {
                                            let value = { picture: res.file };
                                            let per = src_app_core_utils__WEBPACK_IMPORTED_MODULE_19__["Helper"].calculePercentage(value, (this.authService.user.percentage ? Number(this.authService.user.percentage) : 0) - Number(this.oldPercentage), 1.96);
                                            value = Object.assign(value, {
                                                percentage: (Math.round(per * 100) / 100).toFixed(2)
                                            });
                                            console.log(value);
                                            this.candidateService.updatePicture(value).subscribe(response => {
                                                this.candidateService.candidate['picture'] = response['picture'];
                                                this.candidateService.candidate.percentage = Math.round(per);
                                                this.candidateService.setPercentage(this.candidateService.candidate.percentage);
                                                this.authService.user['picture'] = response['picture'];
                                                this.candidateService.setChanges(true);
                                                this.toastService.success('Modifier avec success');
                                            });
                                            console.log('makaynach');
                                        }
                                        else {
                                            console.log('kayna');
                                            this.candidateService.updatePicture({ picture: res.file }).subscribe(response => {
                                                console.log(response['picture']);
                                                this.authService.user['picture'] = response['picture'];
                                                this.candidateService.candidate['picture'] = response['picture'];
                                                this.candidateService.setChanges(true);
                                                this.toastService.success('Modifier avec success');
                                            });
                                        }
                                    });
                                });
                                syncing = false;
                                loading.dismiss();
                            }, _error => {
                                alert(_error);
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
    editProfil() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _update_profil_condidate_profil_condidate_component__WEBPACK_IMPORTED_MODULE_9__["ProfilCondidateComponent"]
            });
            return yield modal.present();
        });
    }
    editObjectif() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _update_objectif_condidate_objectif_condidate_component__WEBPACK_IMPORTED_MODULE_8__["ObjectifCondidateComponent"]
            });
            return yield modal.present();
        });
    }
    editCV() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _update_cv_condidate_cv_condidate_component__WEBPACK_IMPORTED_MODULE_3__["CvCondidateComponent"]
            });
            return yield modal.present();
        });
    }
    editExperience() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _update_experience_condidate_experience_condidate_component__WEBPACK_IMPORTED_MODULE_4__["ExperienceCondidateComponent"]
            });
            return yield modal.present();
        });
    }
    editFormation() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _update_formation_condidate_formation_condidate_component__WEBPACK_IMPORTED_MODULE_5__["FormationCondidateComponent"]
            });
            return yield modal.present();
        });
    }
    editLangue() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _update_langue_condidate_langue_condidate_component__WEBPACK_IMPORTED_MODULE_6__["LangueCondidateComponent"]
            });
            return yield modal.present();
        });
    }
    editLinks() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _update_links_condidate_links_condidate_component__WEBPACK_IMPORTED_MODULE_7__["LinksCondidateComponent"]
            });
            return yield modal.present();
        });
    }
    editSkils() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _update_skils_condidate_skils_condidate_component__WEBPACK_IMPORTED_MODULE_10__["SkilsCondidateComponent"]
            });
            return yield modal.present();
        });
    }
    editVideo() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _update_video_condidate_video_condidate_component__WEBPACK_IMPORTED_MODULE_11__["VideoCondidateComponent"]
            });
            return yield modal.present();
        });
    }
    /**
     * go back
     */
    goBack() {
        if (this.authService.user.role.name === 'candidate') {
            src_app_core_utils__WEBPACK_IMPORTED_MODULE_19__["Redirection"].candidateDashboard();
        }
        else {
            src_app_core_utils__WEBPACK_IMPORTED_MODULE_19__["Redirection"].dashboard();
        }
    }
    enableButton() {
        const softSkillsSize = this.softSkills.filter(x => (x.checked)).length;
        const valuesSize = this.values.filter(x => (x.checked)).length;
        this.disabled = softSkillsSize === 0 || valuesSize === 0;
    }
};
CardCondidateComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: src_app_core_services_global_auth_service__WEBPACK_IMPORTED_MODULE_12__["AuthService"] },
    { type: src_app_core_services_global_global_service__WEBPACK_IMPORTED_MODULE_13__["GlobalService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: src_app_core_services_global_picture_utils_service__WEBPACK_IMPORTED_MODULE_14__["PictureUtilsService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: src_app_core_services_addapters_toast_service__WEBPACK_IMPORTED_MODULE_15__["ToastService"] },
    { type: src_app_core_services_crud_file_service__WEBPACK_IMPORTED_MODULE_16__["FileService"] },
    { type: src_app_core_services_crud_candidate_service__WEBPACK_IMPORTED_MODULE_17__["CandidateService"] },
    { type: src_app_core_services_addapters_trans_service__WEBPACK_IMPORTED_MODULE_18__["TransService"] }
];
CardCondidateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-card-condidate',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./card-condidate.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/candidate/components/card-condidate/card-condidate.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./card-condidate.component.scss */ "./src/app/pages/candidate/components/card-condidate/card-condidate.component.scss")).default]
    })
], CardCondidateComponent);



/***/ }),

/***/ "./src/app/pages/candidate/components/update/cv-condidate/cv-condidate.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/candidate/components/update/cv-condidate/cv-condidate.component.scss ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhbmRpZGF0ZS9jb21wb25lbnRzL3VwZGF0ZS9jdi1jb25kaWRhdGUvY3YtY29uZGlkYXRlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/candidate/components/update/cv-condidate/cv-condidate.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/candidate/components/update/cv-condidate/cv-condidate.component.ts ***!
  \******************************************************************************************/
/*! exports provided: CvCondidateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvCondidateComponent", function() { return CvCondidateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_core_services_global_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/global/auth.service */ "./src/app/core/services/global/auth.service.ts");
/* harmony import */ var src_app_core_services_crud_candidate_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/crud/candidate.service */ "./src/app/core/services/crud/candidate.service.ts");
/* harmony import */ var src_app_core_services_addapters_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/addapters/toast.service */ "./src/app/core/services/addapters/toast.service.ts");
/* harmony import */ var src_app_core_services_addapters_trans_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/addapters/trans.service */ "./src/app/core/services/addapters/trans.service.ts");







let CvCondidateComponent = class CvCondidateComponent {
    constructor(modalController, authService, candidateService, toastService, trans) {
        this.modalController = modalController;
        this.authService = authService;
        this.candidateService = candidateService;
        this.toastService = toastService;
        this.trans = trans;
    }
    ionViewDidEnter() {
        this.value = { file: this.authService.user['cv'] ? this.authService.user['cv'] : null, type: 'cv' };
    }
    /**
    *
    * @param value
    */
    fileChanges(value) {
        this.file = value;
    }
    /**
     * on save
     */
    onSave() {
        this.candidateService.updateCV(this.file._id).subscribe((response) => {
            this.authService.user['cv'] = this.file;
            this.toastService.success('Enregistré avec succès');
            this.modalController.dismiss();
        });
    }
};
CvCondidateComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: src_app_core_services_global_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: src_app_core_services_crud_candidate_service__WEBPACK_IMPORTED_MODULE_4__["CandidateService"] },
    { type: src_app_core_services_addapters_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"] },
    { type: src_app_core_services_addapters_trans_service__WEBPACK_IMPORTED_MODULE_6__["TransService"] }
];
CvCondidateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cv-condidate',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./cv-condidate.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/candidate/components/update/cv-condidate/cv-condidate.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./cv-condidate.component.scss */ "./src/app/pages/candidate/components/update/cv-condidate/cv-condidate.component.scss")).default]
    })
], CvCondidateComponent);



/***/ }),

/***/ "./src/app/pages/candidate/components/update/experience-condidate/experience-condidate.component.scss":
/*!************************************************************************************************************!*\
  !*** ./src/app/pages/candidate/components/update/experience-condidate/experience-condidate.component.scss ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhbmRpZGF0ZS9jb21wb25lbnRzL3VwZGF0ZS9leHBlcmllbmNlLWNvbmRpZGF0ZS9leHBlcmllbmNlLWNvbmRpZGF0ZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/candidate/components/update/experience-condidate/experience-condidate.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/pages/candidate/components/update/experience-condidate/experience-condidate.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: ExperienceCondidateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceCondidateComponent", function() { return ExperienceCondidateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_core_services_global_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/global/global.service */ "./src/app/core/services/global/global.service.ts");
/* harmony import */ var src_app_core_services_global_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/global/auth.service */ "./src/app/core/services/global/auth.service.ts");
/* harmony import */ var src_app_core_services_addapters_trans_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/addapters/trans.service */ "./src/app/core/services/addapters/trans.service.ts");
/* harmony import */ var src_app_core_services_addapters_toast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/addapters/toast.service */ "./src/app/core/services/addapters/toast.service.ts");
/* harmony import */ var src_app_core_services_crud_candidate_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/crud/candidate.service */ "./src/app/core/services/crud/candidate.service.ts");
/* harmony import */ var src_app_core_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/utils */ "./src/app/core/utils/index.ts");










let ExperienceCondidateComponent = class ExperienceCondidateComponent {
    constructor(modalController, fb, globalService, authService, transService, toastService, candidateService) {
        this.modalController = modalController;
        this.fb = fb;
        this.globalService = globalService;
        this.authService = authService;
        this.transService = transService;
        this.toastService = toastService;
        this.candidateService = candidateService;
        this.oldPercentage = 0;
        this.functions = [];
        this.activitySectors = [];
        this.inWork = false;
        this.initForm();
    }
    ngOnInit() {
        this.oldPercentage = src_app_core_utils__WEBPACK_IMPORTED_MODULE_9__["Helper"].calculePercentage(this.form.value, 0, 1.96);
        this.setValues('experiences');
    }
    /**
     * init experience form
     */
    initForm() {
        this.form = this.fb.group({
            experiences: this.fb.array([this.getExperienceFields()]),
        });
    }
    inWordChange() {
        this.inWork = !this.inWork;
    }
    /**
     * get experiences fields
     */
    getExperienceFields() {
        return this.fb.group({
            job: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            function: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            startedDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            endDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            company: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            activitySector: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            location: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required)
        }, { validator: this.checkDates });
    }
    checkDates(group) {
        const min = new Date(group.controls.startedDate.value).setHours(0, 0, 0, 0);
        const max = new Date(group.controls.endDate.value).setHours(0, 0, 0, 0);
        if (min === max || min > max) {
            return { dateError: true };
        }
        console.log(min, max);
        // return min === max ? null : { dateError: true };
    }
    /**
     * set values
     * @param control
     */
    setValues(control) {
        if (this.candidateService.candidate[control] && this.candidateService.candidate[control].length > 0) {
            let fields = this.form.controls[control];
            fields.controls.splice(0);
            fields.controls = [];
            this.candidateService.candidate[control].forEach((val) => {
                fields.push(this.fb.group(val));
            });
        }
    }
    /**
     * add field to form array
     * @param ctrl
     */
    addField(ctrl) {
        const control = this.form.get(ctrl);
        control.push(this.getExperienceFields());
    }
    /**
     * remove field from form array
     * @param index
     * @param ctrl
     */
    removeField(index, ctrl) {
        const control = this.form.get(ctrl);
        control.removeAt(index);
    }
    /**
     * on save
     */
    onSave() {
        const value = this.form.value;
        const calc = Math.round(this.authService.user.percentage - Number(this.oldPercentage));
        const percentage = src_app_core_utils__WEBPACK_IMPORTED_MODULE_9__["Helper"].calculePercentage(value, calc, 1.96);
        if (this.candidateService.candidate['experiences'].length <= 0) {
            this.candidateService.updateExperience(Object.assign(value, {
                percentage: (Math.round(percentage * 100) / 100).toFixed(2)
            })).subscribe((response) => {
                this.authService.user = Object.assign(this.authService.user, this.form.value);
                // this.candidateService.candidate = this.authService.user;
                this.candidateService.setPercentage(this.candidateService.candidate.percentage);
                this.toastService.success('Enregistré avec succès');
                this.modalController.dismiss();
            });
        }
        else {
            this.candidateService.updateExperience(value).subscribe((response) => {
                this.authService.user = Object.assign(this.authService.user, this.form.value);
                // this.candidateService.candidate = this.authService.user.candidate;
                this.candidateService.setPercentage(this.candidateService.candidate.percentage);
                this.toastService.success('Enregistré avec succès');
                this.modalController.dismiss();
            });
        }
    }
};
ExperienceCondidateComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: src_app_core_services_global_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"] },
    { type: src_app_core_services_global_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: src_app_core_services_addapters_trans_service__WEBPACK_IMPORTED_MODULE_6__["TransService"] },
    { type: src_app_core_services_addapters_toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"] },
    { type: src_app_core_services_crud_candidate_service__WEBPACK_IMPORTED_MODULE_8__["CandidateService"] }
];
ExperienceCondidateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-experience-condidate',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./experience-condidate.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/candidate/components/update/experience-condidate/experience-condidate.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./experience-condidate.component.scss */ "./src/app/pages/candidate/components/update/experience-condidate/experience-condidate.component.scss")).default]
    })
], ExperienceCondidateComponent);



/***/ }),

/***/ "./src/app/pages/candidate/components/update/formation-condidate/formation-condidate.component.scss":
/*!**********************************************************************************************************!*\
  !*** ./src/app/pages/candidate/components/update/formation-condidate/formation-condidate.component.scss ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhbmRpZGF0ZS9jb21wb25lbnRzL3VwZGF0ZS9mb3JtYXRpb24tY29uZGlkYXRlL2Zvcm1hdGlvbi1jb25kaWRhdGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/candidate/components/update/formation-condidate/formation-condidate.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/pages/candidate/components/update/formation-condidate/formation-condidate.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: FormationCondidateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormationCondidateComponent", function() { return FormationCondidateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_core_services_global_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/global/global.service */ "./src/app/core/services/global/global.service.ts");
/* harmony import */ var src_app_core_services_addapters_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/addapters/toast.service */ "./src/app/core/services/addapters/toast.service.ts");
/* harmony import */ var src_app_core_services_addapters_trans_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/addapters/trans.service */ "./src/app/core/services/addapters/trans.service.ts");
/* harmony import */ var src_app_core_services_crud_candidate_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/crud/candidate.service */ "./src/app/core/services/crud/candidate.service.ts");
/* harmony import */ var src_app_core_services_global_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/global/auth.service */ "./src/app/core/services/global/auth.service.ts");
/* harmony import */ var src_app_core_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/utils */ "./src/app/core/utils/index.ts");










let FormationCondidateComponent = class FormationCondidateComponent {
    constructor(modalController, fb, globalService, toastService, transService, candidateService, authService) {
        this.modalController = modalController;
        this.fb = fb;
        this.globalService = globalService;
        this.toastService = toastService;
        this.transService = transService;
        this.candidateService = candidateService;
        this.authService = authService;
        this.oldPercentage = 0;
        this.initForm();
    }
    ngOnInit() {
        this.oldPercentage = src_app_core_utils__WEBPACK_IMPORTED_MODULE_9__["Helper"].calculePercentage(this.form.value, 0, 1.96);
        this.setValues('trainings');
    }
    initForm() {
        this.form = this.fb.group({
            levelOfStudies: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.candidateService.candidate['levelOfStudies']),
            trainings: this.fb.array([this.getTrainings()]),
        });
    }
    /**
     * get study fields
     */
    getTrainings() {
        return this.fb.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            studyLevel: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            typeOfTraining: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            yearOfGraduation: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            school: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            location: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required)
        });
    }
    /**
   * set values
   * @param control
   */
    setValues(control) {
        if (this.candidateService.candidate[control] && this.candidateService.candidate[control].length > 0) {
            let fields = this.form.controls[control];
            fields.controls.splice(0);
            fields.controls = [];
            this.candidateService.candidate[control].forEach((val) => {
                fields.push(this.fb.group(val));
            });
        }
    }
    /**
     * add field to form array
     * @param ctrl
     */
    addField(ctrl) {
        const control = this.form.get(ctrl);
        control.push(this.getTrainings());
    }
    /**
     * remove field from form array
     * @param index
     * @param ctrl
     */
    removeField(index, ctrl) {
        const control = this.form.get(ctrl);
        control.removeAt(index);
    }
    /**
     * update trainings
     */
    onSave() {
        const value = this.form.value;
        for (let training of value['trainings']) {
            training.yearOfGraduation = typeof training.yearOfGraduation === 'number' ? training.yearOfGraduation :
                new Date(training.yearOfGraduation).getFullYear();
        }
        const calc = Math.round(this.authService.user.percentage - Number(this.oldPercentage));
        const percentage = src_app_core_utils__WEBPACK_IMPORTED_MODULE_9__["Helper"].calculePercentage(value, calc, 1.96);
        if (this.candidateService.candidate['experiences'].length <= 0) {
            this.candidateService.updateTraining(Object.assign(value, {
                percentage: (Math.round(percentage * 100) / 100).toFixed(2)
            })).subscribe((response) => {
                this.authService.user = Object.assign(this.authService.user, this.form.value);
                this.candidateService.candidate = this.authService.user;
                this.candidateService.setPercentage(this.candidateService.candidate.percentage);
                this.toastService.success('Enregistré avec succès');
                this.modalController.dismiss();
            });
        }
        else {
            this.candidateService.updateTraining(value).subscribe((response) => {
                this.authService.user = Object.assign(this.authService.user, this.form.value);
                this.candidateService.candidate = this.authService.user;
                ;
                this.candidateService.setPercentage(this.candidateService.candidate.percentage);
                this.toastService.success('Enregistré avec succès');
                this.modalController.dismiss();
            });
        }
    }
};
FormationCondidateComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: src_app_core_services_global_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"] },
    { type: src_app_core_services_addapters_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"] },
    { type: src_app_core_services_addapters_trans_service__WEBPACK_IMPORTED_MODULE_6__["TransService"] },
    { type: src_app_core_services_crud_candidate_service__WEBPACK_IMPORTED_MODULE_7__["CandidateService"] },
    { type: src_app_core_services_global_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] }
];
FormationCondidateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-formation-condidate',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./formation-condidate.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/candidate/components/update/formation-condidate/formation-condidate.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./formation-condidate.component.scss */ "./src/app/pages/candidate/components/update/formation-condidate/formation-condidate.component.scss")).default]
    })
], FormationCondidateComponent);



/***/ }),

/***/ "./src/app/pages/candidate/components/update/langue-condidate/langue-condidate.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/candidate/components/update/langue-condidate/langue-condidate.component.scss ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhbmRpZGF0ZS9jb21wb25lbnRzL3VwZGF0ZS9sYW5ndWUtY29uZGlkYXRlL2xhbmd1ZS1jb25kaWRhdGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/candidate/components/update/langue-condidate/langue-condidate.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/candidate/components/update/langue-condidate/langue-condidate.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: LangueCondidateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LangueCondidateComponent", function() { return LangueCondidateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_core_services_global_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/global/global.service */ "./src/app/core/services/global/global.service.ts");
/* harmony import */ var src_app_core_services_crud_candidate_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/crud/candidate.service */ "./src/app/core/services/crud/candidate.service.ts");
/* harmony import */ var src_app_core_services_addapters_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/addapters/toast.service */ "./src/app/core/services/addapters/toast.service.ts");
/* harmony import */ var src_app_core_services_addapters_trans_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/addapters/trans.service */ "./src/app/core/services/addapters/trans.service.ts");
/* harmony import */ var src_app_core_services_global_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/global/auth.service */ "./src/app/core/services/global/auth.service.ts");
/* harmony import */ var src_app_core_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/utils */ "./src/app/core/utils/index.ts");










let LangueCondidateComponent = class LangueCondidateComponent {
    constructor(modalController, globalService, fb, candidateService, toastService, transService, authService) {
        this.modalController = modalController;
        this.globalService = globalService;
        this.fb = fb;
        this.candidateService = candidateService;
        this.toastService = toastService;
        this.transService = transService;
        this.authService = authService;
        this.languagesList = [];
        this.oldPercentage = 0;
        this.initForm();
    }
    ngOnInit() {
        if (this.candidateService.candidate['languages'] && this.candidateService.candidate['languages'].length > 0) {
            this.candidateService.candidate['languages'].forEach(item => {
                const languageIndex = this.globalService.languages.findIndex(x => x._id === item.language);
                const languageLevelIndex = this.globalService.languagesLevels.findIndex(x => x._id === item.languageLevel);
                this.languagesList.push({
                    language: this.globalService.languages[languageIndex],
                    languageLevel: this.globalService.languagesLevels[languageLevelIndex]
                });
            });
        }
        this.oldPercentage = src_app_core_utils__WEBPACK_IMPORTED_MODULE_9__["Helper"].calculePercentage(this.form.value, 0, 1.96);
    }
    initForm() {
        this.form = this.fb.group({
            languages: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
                language: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
                languageLevel: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null)
            }),
            programingLanguages: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
                language: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.candidateService.candidate['programingLanguages'] ? this.candidateService.candidate['programingLanguages']['language'] : []),
                logiciel: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.candidateService.candidate['programingLanguages'] ? this.candidateService.candidate['programingLanguages']['logiciel'] : [])
            }),
        });
    }
    addLanguage() {
        const value = this.form.get('languages').value;
        if (value) {
            const languageIndex = this.globalService.languages.findIndex(x => x._id === value.language);
            const languageLevelIndex = this.globalService.languagesLevels.findIndex(x => x._id === value.languageLevel);
            this.languagesList.push({
                language: this.globalService.languages[languageIndex],
                languageLevel: this.globalService.languagesLevels[languageLevelIndex]
            });
            this.form.get('languages').reset();
        }
    }
    deleteLanguage(i) {
        this.languagesList.splice(i, 1);
    }
    /**
     * update soft skills
     */
    onSave() {
        const value = this.form.value;
        delete value['languages'];
        value.languages = this.languagesList.map(x => ({
            language: x.language._id,
            languageLevel: x.languageLevel._id
        }));
        this.candidateService.updateLanguage(value).subscribe((response) => {
            this.authService.user = Object.assign(this.authService.user, value);
            this.toastService.success('Enregistré avec succès');
            this.candidateService.setChanges(true);
            this.modalController.dismiss();
        });
    }
};
LangueCondidateComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: src_app_core_services_global_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: src_app_core_services_crud_candidate_service__WEBPACK_IMPORTED_MODULE_5__["CandidateService"] },
    { type: src_app_core_services_addapters_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"] },
    { type: src_app_core_services_addapters_trans_service__WEBPACK_IMPORTED_MODULE_7__["TransService"] },
    { type: src_app_core_services_global_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] }
];
LangueCondidateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-langue-condidate',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./langue-condidate.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/candidate/components/update/langue-condidate/langue-condidate.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./langue-condidate.component.scss */ "./src/app/pages/candidate/components/update/langue-condidate/langue-condidate.component.scss")).default]
    })
], LangueCondidateComponent);



/***/ }),

/***/ "./src/app/pages/candidate/components/update/links-condidate/links-condidate.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/candidate/components/update/links-condidate/links-condidate.component.scss ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhbmRpZGF0ZS9jb21wb25lbnRzL3VwZGF0ZS9saW5rcy1jb25kaWRhdGUvbGlua3MtY29uZGlkYXRlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/candidate/components/update/links-condidate/links-condidate.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/pages/candidate/components/update/links-condidate/links-condidate.component.ts ***!
  \************************************************************************************************/
/*! exports provided: LinksCondidateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinksCondidateComponent", function() { return LinksCondidateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_core_services_global_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/global/auth.service */ "./src/app/core/services/global/auth.service.ts");
/* harmony import */ var src_app_core_services_crud_candidate_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/crud/candidate.service */ "./src/app/core/services/crud/candidate.service.ts");
/* harmony import */ var src_app_core_services_addapters_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/addapters/toast.service */ "./src/app/core/services/addapters/toast.service.ts");
/* harmony import */ var src_app_core_services_addapters_trans_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/addapters/trans.service */ "./src/app/core/services/addapters/trans.service.ts");
/* harmony import */ var src_app_core_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/utils */ "./src/app/core/utils/index.ts");









let LinksCondidateComponent = class LinksCondidateComponent {
    constructor(modalController, authService, candidateService, toastService, transService) {
        this.modalController = modalController;
        this.authService = authService;
        this.candidateService = candidateService;
        this.toastService = toastService;
        this.transService = transService;
        this.oldPercentage = 0;
        this.initForm();
    }
    ngOnInit() {
        this.oldPercentage = src_app_core_utils__WEBPACK_IMPORTED_MODULE_8__["Helper"].calculePercentage(this.form.value, 0, 1.96);
    }
    /**
     * init links
     */
    initForm() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            webSite: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.authService.user['webSite']),
            blog: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.authService.user['blog']),
            linkedin: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.authService.user['linkedin']),
            instagram: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.authService.user['instagram']),
            twitter: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.authService.user['twitter']),
            facebook: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.authService.user['facebook'])
        });
    }
    /**
     * update social network
     */
    onSave() {
        const value = this.form.value;
        const calc = Math.round(this.authService.user.percentage - Number(this.oldPercentage));
        const percentage = src_app_core_utils__WEBPACK_IMPORTED_MODULE_8__["Helper"].calculePercentage(value, calc, 1.96);
        this.candidateService.updateSocialNetworks(Object.assign(value, {
            percentage: (Math.round(percentage * 100) / 100).toFixed(2)
        })).subscribe((response) => {
            this.authService.user = Object.assign(this.authService.user, value);
            this.candidateService.candidate = this.authService.user;
            this.candidateService.setPercentage(this.candidateService.candidate.percentage);
            this.toastService.success('Enregistré avec succès');
            this.modalController.dismiss();
        });
    }
};
LinksCondidateComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: src_app_core_services_global_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: src_app_core_services_crud_candidate_service__WEBPACK_IMPORTED_MODULE_5__["CandidateService"] },
    { type: src_app_core_services_addapters_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"] },
    { type: src_app_core_services_addapters_trans_service__WEBPACK_IMPORTED_MODULE_7__["TransService"] }
];
LinksCondidateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-links-condidate',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./links-condidate.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/candidate/components/update/links-condidate/links-condidate.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./links-condidate.component.scss */ "./src/app/pages/candidate/components/update/links-condidate/links-condidate.component.scss")).default]
    })
], LinksCondidateComponent);



/***/ }),

/***/ "./src/app/pages/candidate/components/update/objectif-condidate/objectif-condidate.component.scss":
/*!********************************************************************************************************!*\
  !*** ./src/app/pages/candidate/components/update/objectif-condidate/objectif-condidate.component.scss ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhbmRpZGF0ZS9jb21wb25lbnRzL3VwZGF0ZS9vYmplY3RpZi1jb25kaWRhdGUvb2JqZWN0aWYtY29uZGlkYXRlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/candidate/components/update/objectif-condidate/objectif-condidate.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/pages/candidate/components/update/objectif-condidate/objectif-condidate.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: ObjectifCondidateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjectifCondidateComponent", function() { return ObjectifCondidateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_core_services_global_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/global/global.service */ "./src/app/core/services/global/global.service.ts");
/* harmony import */ var src_app_core_services_global_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/global/auth.service */ "./src/app/core/services/global/auth.service.ts");
/* harmony import */ var src_app_core_services_crud_candidate_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/crud/candidate.service */ "./src/app/core/services/crud/candidate.service.ts");
/* harmony import */ var src_app_core_services_addapters_toast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/addapters/toast.service */ "./src/app/core/services/addapters/toast.service.ts");
/* harmony import */ var src_app_core_services_addapters_trans_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/addapters/trans.service */ "./src/app/core/services/addapters/trans.service.ts");
/* harmony import */ var src_app_core_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/utils */ "./src/app/core/utils/index.ts");










let ObjectifCondidateComponent = class ObjectifCondidateComponent {
    constructor(fb, candidateService, globalService, transService, authService, toastService, modalController) {
        this.fb = fb;
        this.candidateService = candidateService;
        this.globalService = globalService;
        this.transService = transService;
        this.authService = authService;
        this.toastService = toastService;
        this.modalController = modalController;
        this.oldPercentage = 0;
        this.initForm();
    }
    ngOnInit() {
        this.oldPercentage = src_app_core_utils__WEBPACK_IMPORTED_MODULE_9__["Helper"].calculePercentage(this.form.value, 0, 1.96);
    }
    /**
     * init job infos form
     */
    initForm() {
        this.form = this.fb.group({
            jobType: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.candidateService.candidate['jobType'], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            searchedPost: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.candidateService.candidate['searchedPost'], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            jobMode: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.candidateService.candidate['jobMode'], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            supposedSalaryMin: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.candidateService.candidate['supposedSalaryMin'], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            supposedSalaryMax: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.candidateService.candidate['supposedSalaryMax'], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            usageTitles: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.candidateService.candidate['usageTitles'] ? this.candidateService.candidate['usageTitles'] : []),
            functions: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.candidateService.candidate['functions'] ? this.candidateService.candidate['functions'] : []),
            activitySector: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.candidateService.candidate['activitySector'] ? this.candidateService.candidate['activitySector'] : [], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            locations: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.candidateService.candidate['locations'] ? this.candidateService.candidate['locations'] : [], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            contracts: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.candidateService.candidate['contracts'] ? this.candidateService.candidate['contracts'] : [], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
        }, { validator: this.checkSupposedSalary });
    }
    checkSupposedSalary(group) {
        const min = group.controls.supposedSalaryMin.value;
        const max = group.controls.supposedSalaryMax.value;
        return min < max ? null : { salaryErreur: true };
    }
    /**
     * on save
     */
    onSave() {
        const value = this.form.value;
        const calc = Math.round(this.authService.user.percentage - Number(this.oldPercentage));
        const percentage = src_app_core_utils__WEBPACK_IMPORTED_MODULE_9__["Helper"].calculePercentage(value, calc, 1.96);
        this.candidateService.updateGoals(Object.assign(value, {
            percentage: (Math.round(percentage * 100) / 100).toFixed(2)
        })).subscribe((response) => {
            this.authService.user = Object.assign(this.authService.user, value);
            this.candidateService.candidate = this.authService.user;
            this.candidateService.setPercentage(this.candidateService.candidate.percentage);
            this.candidateService.setChanges(true);
            this.toastService.success('Enregistré avec succès');
            this.modalController.dismiss();
        });
    }
};
ObjectifCondidateComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: src_app_core_services_crud_candidate_service__WEBPACK_IMPORTED_MODULE_6__["CandidateService"] },
    { type: src_app_core_services_global_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"] },
    { type: src_app_core_services_addapters_trans_service__WEBPACK_IMPORTED_MODULE_8__["TransService"] },
    { type: src_app_core_services_global_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: src_app_core_services_addapters_toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
ObjectifCondidateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-objectif-condidate',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./objectif-condidate.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/candidate/components/update/objectif-condidate/objectif-condidate.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./objectif-condidate.component.scss */ "./src/app/pages/candidate/components/update/objectif-condidate/objectif-condidate.component.scss")).default]
    })
], ObjectifCondidateComponent);



/***/ }),

/***/ "./src/app/pages/candidate/components/update/profil-condidate/profil-condidate.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/candidate/components/update/profil-condidate/profil-condidate.component.scss ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhbmRpZGF0ZS9jb21wb25lbnRzL3VwZGF0ZS9wcm9maWwtY29uZGlkYXRlL3Byb2ZpbC1jb25kaWRhdGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/candidate/components/update/profil-condidate/profil-condidate.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/candidate/components/update/profil-condidate/profil-condidate.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: ProfilCondidateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilCondidateComponent", function() { return ProfilCondidateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_core_services_global_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/global/global.service */ "./src/app/core/services/global/global.service.ts");
/* harmony import */ var src_app_core_services_crud_candidate_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/crud/candidate.service */ "./src/app/core/services/crud/candidate.service.ts");
/* harmony import */ var src_app_core_services_global_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/global/auth.service */ "./src/app/core/services/global/auth.service.ts");
/* harmony import */ var src_app_core_services_addapters_toast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/addapters/toast.service */ "./src/app/core/services/addapters/toast.service.ts");
/* harmony import */ var src_app_core_services_addapters_trans_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/addapters/trans.service */ "./src/app/core/services/addapters/trans.service.ts");
/* harmony import */ var src_app_core_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/utils */ "./src/app/core/utils/index.ts");










let ProfilCondidateComponent = class ProfilCondidateComponent {
    constructor(modalController, globalService, candidateService, authService, toastService, transService) {
        this.modalController = modalController;
        this.globalService = globalService;
        this.candidateService = candidateService;
        this.authService = authService;
        this.toastService = toastService;
        this.transService = transService;
        this.oldPercentage = 0;
        this.initForm();
    }
    ngOnInit() {
        this.oldPercentage = src_app_core_utils__WEBPACK_IMPORTED_MODULE_9__["Helper"].calculePercentage(this.form.value, 0, 1.96);
        console.log(this.candidateService.candidate);
        // this.formPercentage = Object.keys(this.form.controls).length * 1.96;
        // Number(this.candidateService.percentage.forEach(element => {
        //   this.currentPercentage = element;
        // }));
        // this.newPercentage = (Math.trunc(this.currentPercentage) - Math.trunc(this.formPercentage));
    }
    initForm() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.authService.user.firstName, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.authService.user.lastName, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            birthday: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]((this.candidateService.candidate ? this.candidateService.candidate['birthday'] : null), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.candidateService.candidate['gender'], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            phoneNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.authService.user['phoneNumber'], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            availability: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.candidateService.candidate['availability'], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            currentJob: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.candidateService.candidate['currentJob'], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            currentSalary: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.candidateService.candidate['currentSalary'], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            managerialLevel: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.candidateService.candidate['managerialLevel'], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            effective: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.candidateService.candidate['effective'], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            goal: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.candidateService.candidate['goal'], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            experienceYears: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.candidateService.candidate['experienceYears'], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
        });
    }
    /**
     * on save
     */
    onSave() {
        const value = this.form.value;
        const calc = Math.round(this.authService.user.percentage - Number(this.oldPercentage));
        const percentage = src_app_core_utils__WEBPACK_IMPORTED_MODULE_9__["Helper"].calculePercentage(value, calc, 1.96);
        this.candidateService.updateInfos(Object.assign(value, {
            percentage: (Math.round(percentage * 100) / 100).toFixed(2)
        })).subscribe((response) => {
            this.authService.user = Object.assign(this.authService.user, value);
            this.authService.user = Object.assign(this.authService.user, {
                firstName: value.firstName,
                lastName: value.lastName
            });
            this.candidateService.candidate = this.authService.user;
            this.candidateService.setPercentage(this.candidateService.candidate.percentage);
            this.toastService.success('Enregistré avec succès');
            this.modalController.dismiss();
        });
    }
};
ProfilCondidateComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: src_app_core_services_global_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"] },
    { type: src_app_core_services_crud_candidate_service__WEBPACK_IMPORTED_MODULE_5__["CandidateService"] },
    { type: src_app_core_services_global_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: src_app_core_services_addapters_toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"] },
    { type: src_app_core_services_addapters_trans_service__WEBPACK_IMPORTED_MODULE_8__["TransService"] }
];
ProfilCondidateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profil-condidate',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./profil-condidate.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/candidate/components/update/profil-condidate/profil-condidate.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./profil-condidate.component.scss */ "./src/app/pages/candidate/components/update/profil-condidate/profil-condidate.component.scss")).default]
    })
], ProfilCondidateComponent);



/***/ }),

/***/ "./src/app/pages/candidate/components/update/skils-condidate/skils-condidate.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/candidate/components/update/skils-condidate/skils-condidate.component.scss ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhbmRpZGF0ZS9jb21wb25lbnRzL3VwZGF0ZS9za2lscy1jb25kaWRhdGUvc2tpbHMtY29uZGlkYXRlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/candidate/components/update/skils-condidate/skils-condidate.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/pages/candidate/components/update/skils-condidate/skils-condidate.component.ts ***!
  \************************************************************************************************/
/*! exports provided: SkilsCondidateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkilsCondidateComponent", function() { return SkilsCondidateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_core_services_global_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/global/global.service */ "./src/app/core/services/global/global.service.ts");
/* harmony import */ var src_app_core_services_global_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/global/auth.service */ "./src/app/core/services/global/auth.service.ts");
/* harmony import */ var src_app_core_services_crud_candidate_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/crud/candidate.service */ "./src/app/core/services/crud/candidate.service.ts");
/* harmony import */ var src_app_core_services_addapters_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/addapters/toast.service */ "./src/app/core/services/addapters/toast.service.ts");
/* harmony import */ var src_app_core_services_addapters_trans_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/addapters/trans.service */ "./src/app/core/services/addapters/trans.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");









let SkilsCondidateComponent = class SkilsCondidateComponent {
    constructor(modalController, globalService, transService, authService, candidateService, toastService) {
        this.modalController = modalController;
        this.globalService = globalService;
        this.transService = transService;
        this.authService = authService;
        this.candidateService = candidateService;
        this.toastService = toastService;
    }
    ngOnInit() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormGroup"]({
            values: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](this.candidateService.candidate['values'] ? this.candidateService.candidate['values'] : []),
            skills: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](this.candidateService.candidate['skills'] ? this.candidateService.candidate['skills'] : [])
        });
    }
    /**
     * update soft skills
     */
    onSave() {
        this.candidateService.updateSoftSkills(this.form.value).subscribe((response) => {
            this.authService.user = Object.assign(this.authService.user, this.form.value);
            this.toastService.success('Enregistré avec succès');
            this.modalController.dismiss();
        });
    }
};
SkilsCondidateComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: src_app_core_services_global_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"] },
    { type: src_app_core_services_addapters_trans_service__WEBPACK_IMPORTED_MODULE_7__["TransService"] },
    { type: src_app_core_services_global_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: src_app_core_services_crud_candidate_service__WEBPACK_IMPORTED_MODULE_5__["CandidateService"] },
    { type: src_app_core_services_addapters_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"] }
];
SkilsCondidateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-skils-condidate',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./skils-condidate.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/candidate/components/update/skils-condidate/skils-condidate.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./skils-condidate.component.scss */ "./src/app/pages/candidate/components/update/skils-condidate/skils-condidate.component.scss")).default]
    })
], SkilsCondidateComponent);



/***/ }),

/***/ "./src/app/pages/candidate/components/update/video-condidate/video-condidate.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/candidate/components/update/video-condidate/video-condidate.component.scss ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhbmRpZGF0ZS9jb21wb25lbnRzL3VwZGF0ZS92aWRlby1jb25kaWRhdGUvdmlkZW8tY29uZGlkYXRlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/candidate/components/update/video-condidate/video-condidate.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/pages/candidate/components/update/video-condidate/video-condidate.component.ts ***!
  \************************************************************************************************/
/*! exports provided: VideoCondidateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoCondidateComponent", function() { return VideoCondidateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_core_services_crud_candidate_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/crud/candidate.service */ "./src/app/core/services/crud/candidate.service.ts");
/* harmony import */ var src_app_core_services_global_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/global/auth.service */ "./src/app/core/services/global/auth.service.ts");
/* harmony import */ var src_app_core_services_addapters_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/addapters/toast.service */ "./src/app/core/services/addapters/toast.service.ts");
/* harmony import */ var src_app_core_services_addapters_trans_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/addapters/trans.service */ "./src/app/core/services/addapters/trans.service.ts");
/* harmony import */ var src_app_core_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/utils */ "./src/app/core/utils/index.ts");









let VideoCondidateComponent = class VideoCondidateComponent {
    constructor(modalController, candidateService, authService, toastService, trans) {
        this.modalController = modalController;
        this.candidateService = candidateService;
        this.authService = authService;
        this.toastService = toastService;
        this.trans = trans;
        this.oldPercentage = 0;
        this.initForm();
    }
    ngOnInit() {
        this.value = { file: this.authService.user['video'] ? this.authService.user['video'] : null, type: 'video' };
        if (this.value.file) {
            this.oldPercentage = 1.96;
        }
    }
    /**
     * init form
     */
    initForm() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            video: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required)
        });
    }
    /**
     *
     * @param value
     */
    fileChanges(value) {
        this.form.setValue({ video: value });
        this.file = value;
    }
    /**
     * on save
     */
    onSave() {
        let value = this.form.value;
        let percentage = src_app_core_utils__WEBPACK_IMPORTED_MODULE_8__["Helper"].calculePercentage(value, (this.authService.user.percentage ? Number(this.authService.user.percentage) : 0) - Number(this.oldPercentage), 1.96);
        value = Object.assign(value, {
            percentage: (Math.round(percentage * 100) / 100).toFixed(2)
        });
        this.authService.user['video'] = null;
        this.candidateService.updateVideo(value).subscribe((response) => {
            this.authService.user['video'] = value.video;
            this.candidateService.candidate['video'] = value.video;
            this.candidateService.candidate.percentage = Math.round(value.percentage);
            this.candidateService.setPercentage(this.candidateService.candidate.percentage);
            this.toastService.success('Enregistré avec succès');
            this.modalController.dismiss();
        });
    }
};
VideoCondidateComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"] },
    { type: src_app_core_services_crud_candidate_service__WEBPACK_IMPORTED_MODULE_4__["CandidateService"] },
    { type: src_app_core_services_global_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: src_app_core_services_addapters_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"] },
    { type: src_app_core_services_addapters_trans_service__WEBPACK_IMPORTED_MODULE_7__["TransService"] }
];
VideoCondidateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-video-condidate',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./video-condidate.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/candidate/components/update/video-condidate/video-condidate.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./video-condidate.component.scss */ "./src/app/pages/candidate/components/update/video-condidate/video-condidate.component.scss")).default]
    })
], VideoCondidateComponent);



/***/ })

}]);
//# sourceMappingURL=pages-candidate-candidate-module-es2015.js.map