(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-files-files-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/files/components/files-condidate/files-condidate.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/files/components/files-condidate/files-condidate.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"header-card-matching ion-no-border\" mode=\"md\">\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-menu-button>\n                <ion-icon src=\"./assets/icon/menu-icon.svg\" style=\"width: 60px;height: 60px;\">\n                </ion-icon>\n            </ion-menu-button>\n        </ion-buttons>\n        <ion-buttons slot=\"primary\">\n            <ion-button (click)=\"presentNotification($event)\"\n                class=\"animate__animated animate__swing animate__repeat-3\">\n                <ion-icon color=\"primary\" name=\"notifications-outline\"></ion-icon>\n                <span class=\"countNotif\"  *ngIf=\"notifService.countNotif > 0\">\n                    {{ notifService.countNotif }}\n                </span>\n            </ion-button>\n            <ion-button routerLink=\"/dashboard/messenger\" routerDirection=\"root\">\n                <ion-icon src=\"./assets/icon/notification.svg\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <!-- <div class=\"text-center\">\n        <img src=\"./assets/icon/swipe.svg\" alt=\"\" style=\"width: 23px\">\n        <p class=\"how-to-use\">\n            Swipez, Matchez et Rencontrez-vous !\n        </p>\n    </div> -->\n    <ng-container *ngIf=\"advertisements && advertisements.length else notFound\">\n        <section #matchingCard *ngFor=\"let advertisement of advertisements\" class=\"content-card-matching\"\n            [style.position]=\"'absolute'\">\n            <ng-container *ngIf=\"advertisements\">\n                <mat-horizontal-stepper class=\"card-matching m-1\" [@.disabled]=\"true\">\n                    <mat-step>\n                        <div class=\"card-matching-step card-info\">\n                            <h3 class=\"title\"> {{ advertisement.companyName }} </h3>\n                            <div class=\"d-block text-center position-relative\">\n                                <img src=\"./assets/icon/space-title.svg\" alt=\"\">\n                                <p class=\"desciption mb-0\">\n                                    {{ advertisement.companyTitle }}\n                                </p>\n                                <img src=\"./assets/icon/space-title.svg\" alt=\"\">\n                                <div class=\"picture-card-matching mt-1\">\n                                    <img [src]=\"('backend_url' | env) + advertisement.logo\" alt=\"\"\n                                        class=\"w-100 circle-image\">\n                                </div>\n                                <div class=\"text-right position-absolute\" style=\"right: 0;\">\n                                    <button mat-button class=\"bg-transparent cursor-pointer\" matStepperNext><img\n                                            src=\"./assets/icon/arrow-right.svg\" alt=\"\"></button>\n                                </div>\n                            </div>\n\n                            <div class=\"position-relative px-1 mt-2\">\n                                <div class=\"custom-fields text-center\">\n                                    <div class=\"d-inline w-80\"> {{ advertisement.desiredJob }} </div>\n                                </div>\n                                <div class=\"custom-fields text-center mt-1\">\n                                    <div class=\"d-inline capitalize w-50 text-center mr-1\"\n                                        style=\"min-height: 50px;vertical-align: bottom;\">{{ advertisement.activitySector\n                                        }}</div>\n                                    <div class=\"d-inline capitalize w-50 text-center pt-1\"\n                                        style=\"min-height: 50px;vertical-align: bottom;\">{{ advertisement.location }}\n                                    </div>\n                                </div>\n\n\n                                <div class=\"custom-fields text-center mt-1\">\n                                    <div class=\"d-inline w-80\">{{advertisement.experienceYears}} d’expérience</div>\n                                </div>\n                                <div class=\"custom-fields text-center mt-1\">\n                                    <div class=\"d-inline w-80\">{{ advertisement.salary }}</div>\n                                </div>\n                            </div>\n                            <div class=\"action-button w-100\">\n                                <!-- <div class=\"inner\">\n                                    <button mat-mini-fab type=\"button\" class=\"refreshBtn\" (click)=\"getAdvertisement()\">\n                                        <mat-icon>refresh</mat-icon>\n                                    </button>\n                                </div> -->\n                                <div class=\"inner\">\n                                    <button mat-raised-button type=\"button\" class=\"deleteBtn\"\n                                        (click)=\"addToBlackList(advertisement._id, advertisement.recruiter)\">\n                                        <img src=\"./assets/icon/cancel-btn.svg\" alt=\"\" style=\"width: 14px\">\n                                    </button>\n                                </div>\n                                <div class=\"inner\">\n                                    <button mat-raised-button type=\"button\" class=\"winBtn\"\n                                        (click)=\"addWin(advertisement._id,advertisement.recruiter)\">\n                                        <img src=\"./assets/icon/win-btn-bleu.svg\" alt=\"\" style=\"width: 32px\">\n                                    </button>\n                                </div>\n                            </div>\n                        </div>\n                    </mat-step>\n\n                    <mat-step>\n                        <div class=\"card-matching-step card-info\">\n                            <h3 class=\"title\"> {{ advertisement.companyName }} </h3>\n                            <div class=\"d-block text-center position-relative\">\n                                <img src=\"./assets/icon/space-title.svg\" alt=\"\">\n                                <p class=\"desciption mb-0\">\n                                    {{ advertisement.companyTitle }}\n                                </p>\n                                <img src=\"./assets/icon/space-title.svg\" alt=\"\">\n                                <div class=\"picture-card-matching mt-1\">\n                                    <img [src]=\"('backend_url' | env) + advertisement.logo\" alt=\"\"\n                                        class=\"w-100 circle-image\">\n                                </div>\n                                <div class=\"position-relative mt-3\">\n                                    <div class=\"text-left position-absolute\" style=\"left: 0;\">\n                                        <button mat-button class=\"bg-transparent cursor-pointer\" matStepperPrevious><img\n                                                src=\"./assets/icon/arrow-left.svg\" alt=\"\"></button>\n                                    </div>\n                                    <div class=\"text-right position-absolute\" style=\"right: 0;\">\n                                        <button mat-button class=\"bg-transparent cursor-pointer\" matStepperNext><img\n                                                src=\"./assets/icon/arrow-right.svg\" alt=\"\"></button>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"text-center job-title\">\n                                <span> {{ advertisement.desiredJob }} </span>\n                            </div>\n                            <div class=\"position-relative p1-1 mt-1\">\n\n                                <div class=\"card-matching-details\">\n                                    <h3 class=\"title2\">\n                                        <img src=\"./assets/icon/mission-generale.svg\" alt=\"\" width=\"30px\">\n                                        <span>Mission Générale</span>\n                                    </h3>\n                                    <div class=\"desc-candidate\">\n                                        {{ advertisement.missions }}\n                                    </div>\n                                </div>\n\n                                <div class=\"card-matching-details mt-1\">\n                                    <h3 class=\"title2\">\n                                        <img src=\"./assets/icon/Taches.svg\" alt=\"\" width=\"30px\">\n                                        <span>Descriptif de poste</span>\n                                    </h3>\n                                    <div class=\"desc-candidate\">\n                                        <ul class=\"list\">\n                                            <li *ngFor=\"let description of advertisement.descriptions\">\n                                                {{ description }}\n                                            </li>\n                                        </ul>\n                                    </div>\n                                </div>\n\n                                <div class=\"card-matching-details mt-1\">\n                                    <h3 class=\"title2\">\n                                        <img src=\"./assets/icon/Profil2.svg\" alt=\"\" width=\"30px\">\n                                        <span>Prérequis</span>\n                                    </h3>\n                                    <div class=\"desc-candidate\">\n                                        <p>\n                                            {{ advertisement.prerequisite }}\n                                        </p>\n                                        <div class=\"text-center\">\n                                            <strong class=\"text-center\">Langue</strong>\n                                        </div>\n\n                                        <ul class=\"list\">\n                                            <li *ngFor=\"let item of advertisement.languages\">\n                                                {{ item.language }} : {{ item.languageLevel }}\n                                            </li>\n                                        </ul>\n\n                                        <div class=\"text-center\">\n                                            <strong>Langues et Informatique</strong>\n                                        </div>\n\n                                        <ul class=\"list\">\n                                            <li *ngFor=\"let item of advertisement.programingLanguages.language\">\n                                                {{ item }}\n                                            </li>\n                                            <li *ngFor=\"let item of advertisement.programingLanguages.logiciel\">\n                                                {{ item }}\n                                            </li>\n                                        </ul>\n                                    </div>\n                                </div>\n\n                                <div class=\"card-matching-details mt-1\">\n                                    <h3 class=\"title2\">\n                                        <img src=\"./assets/icon/Taches.svg\" alt=\"\" width=\"30px\">\n                                        <span>Autres informations</span>\n                                    </h3>\n                                    <span class=\"desc-candidate\">\n                                        <ul class=\"list\">\n                                            <li>Type de contrat : {{ advertisement.contract }}</li>\n                                            <li>Type de poste : {{ advertisement.jobType }}</li>\n                                            <li>Mode de travail : {{ advertisement.jobMode }}</li>\n                                            <li>Niv. managérial : {{ advertisement.managerialLevel }}</li>\n                                            <li>Effectif géré : {{ advertisement.effective }}</li>\n                                        </ul>\n                                    </span>\n                                </div>\n\n                                <div class=\"card-matching-details mt-1\">\n                                    <h3 class=\"title2\">\n                                        <img src=\"./assets/icon/calendar.png\" alt=\"\" width=\"30px\">\n                                        <span>Date prise de fonction</span>\n                                    </h3>\n                                    <span class=\"desc\">\n                                        <strong>{{ advertisement.startedDate | date: 'yyyy-dd-MM' }}</strong>\n                                    </span>\n                                </div>\n                                <div class=\"action-button pt-1 w-100\">\n                                    <!-- <div class=\"inner\">\n                                        <button mat-mini-fab type=\"button\" class=\"refreshBtn\"\n                                            (click)=\"getAdvertisement()\">\n                                            <mat-icon>refresh</mat-icon>\n                                        </button>\n                                    </div> -->\n                                    <div class=\"inner\">\n                                        <button mat-raised-button type=\"button\" class=\"deleteBtn\"\n                                            (click)=\"addToBlackList(advertisement._id, advertisement.recruiter)\">\n                                            <img src=\"./assets/icon/cancel-btn.svg\" alt=\"\" style=\"width: 14px\">\n                                        </button>\n                                    </div>\n                                    <div class=\"inner\">\n                                        <button mat-raised-button type=\"button\" class=\"winBtn\"\n                                            (click)=\"addWin(advertisement._id, advertisement.recruiter)\">\n                                            <img src=\"./assets/icon/win-btn-bleu.svg\" alt=\"\" style=\"width: 32px\">\n                                        </button>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </mat-step>\n\n                    <mat-step>\n                        <div class=\"card-matching-step card-values\">\n                            <h3 class=\"title p-1\">{{ advertisement.companyName }}</h3>\n                            <div class=\"top-content text-center w-100 mx-1 p-1\">\n                                <h3 class=\"top-content text-secondary text-center uppercase\">présentation générale</h3>\n                                <p>\n                                    {{ advertisement.companyDescription }}\n                                </p>\n                            </div>\n\n                            <div class=\"position-relative pl-1\">\n                                <button mat-button class=\"bg-transparent position-absolute cursor-pointer\"\n                                    matStepperPrevious>\n                                    <img src=\"./assets/icon/arrow-left-black.svg\" alt=\"\"></button>\n                            </div>\n\n                            <div class=\"text-secondary text-center\">\n                                <h3 class=\"uppercase\">Valeurs</h3>\n                            </div>\n\n                            <div class=\"circle-content position-relative pt-5\">\n                                <div class=\"d-block value-one\">\n                                    <div class=\"text-content\">\n                                        {{ advertisement.companyValues[0] ? advertisement.companyValues[0].name : '' }}\n                                    </div>\n                                </div>\n                                <div class=\"d-block value-two\">\n                                    <div class=\"text-content\">\n                                        {{ advertisement.companyValues[1] ? advertisement.companyValues[1].name : '' }}\n                                    </div>\n                                </div>\n                                <div class=\"d-block value-three\">\n                                    <div class=\"text-content\">\n                                        {{ advertisement.companyValues[2] ? advertisement.companyValues[2].name : '' }}\n                                    </div>\n                                </div>\n                                <div class=\"d-block value-four\">\n                                    <div class=\"text-content\">\n                                        {{ advertisement.companyValues[3] ? advertisement.companyValues[3].name : '' }}\n                                    </div>\n                                </div>\n                                <div class=\"d-block value-five\">\n                                    <div class=\"text-content\">\n                                        {{ advertisement.companyValues[4] ? advertisement.companyValues[4].name : '' }}\n                                    </div>\n                                </div>\n                                <div class=\"d-block value-six\">\n                                    <div class=\"text-content\">\n                                        {{ advertisement.companyValues[5] ? advertisement.companyValues[5].name : '' }}\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"more-content p-1\">\n\n                                <div *ngIf=\"advertisement.companyWebSite\"\n                                    class=\"custom-fields info-recruteur-title text-center mb-2\">\n                                    <a [href]=\"advertisement.companyWebSite\" target=\"_blank\">\n                                        <span style=\"border: none !important;\">{{ advertisement.companyWebSite }}</span>\n                                    </a>\n                                </div>\n\n                                <div class=\"social-media text-center\">\n                                    <ng-container *ngIf=\"advertisement.companyFacebook\">\n                                        <a [href]=\"advertisement.companyFacebook\" target=\"_blank\"><img\n                                                class=\"mr-1 inline-block cursor-pointer\"\n                                                src=\"./assets/icon/circle-facebook.svg\" alt=\"facebook\"></a>\n                                    </ng-container>\n\n                                    <ng-container *ngIf=\"advertisement.companyInstagram\">\n                                        <a [href]=\"'https://www.instagram.com/' + advertisement.companyInstagram\"\n                                            target=\"_blank\"> <img class=\"mr-1 inline-block cursor-pointer\"\n                                                src=\"./assets/icon/circle-instagram.svg\" alt=\"instagram\"></a>\n                                    </ng-container>\n                                    <ng-container *ngIf=\"advertisement.companyLinkedin\">\n                                        <a [href]=\"advertisement.companyLinkedin\" target=\"_blank\"><img\n                                                class=\"mr-1 inline-block cursor-pointer\"\n                                                src=\"./assets/icon/circle-linkedin.svg\" alt=\"linkedin\"></a>\n                                    </ng-container>\n                                    <ng-container *ngIf=\"advertisement.companyTwitter\">\n                                        <a [href]=\"'https://www.twitter.com/' + advertisement.companyTwitter\"\n                                            target=\"_blank\"><img class=\"mr-1 inline-block cursor-pointer\"\n                                                src=\"./assets/icon/circle-twitter.svg\" alt=\"twitter\"></a>\n                                    </ng-container>\n                                </div>\n                                <div class=\"action-button mt-1 w-100\">\n                                    <!-- <div class=\"inner\">\n                                        <button mat-mini-fab type=\"button\" class=\"refreshBtn\"\n                                            (click)=\"getAdvertisement()\">\n                                            <mat-icon>refresh</mat-icon>\n                                        </button>\n                                    </div> -->\n                                    <div class=\"inner\">\n                                        <button mat-raised-button type=\"button\" class=\"deleteBtn\"\n                                            (click)=\"addToBlackList(advertisement._id, advertisement.recruiter)\">\n                                            <img src=\"./assets/icon/cancel-btn.svg\" alt=\"\" style=\"width: 14px\">\n                                        </button>\n                                    </div>\n                                    <div class=\"inner\">\n                                        <button mat-raised-button type=\"button\" class=\"winBtn\"\n                                            (click)=\"addWin(advertisement._id, advertisement.recruiter)\">\n                                            <img src=\"./assets/icon/win-btn-bleu.svg\" alt=\"\" style=\"width: 32px\">\n                                        </button>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </mat-step>\n\n                </mat-horizontal-stepper>\n            </ng-container>\n        </section>\n    </ng-container>\n    <ng-template #notFound>\n        <section class=\"blank-card\">\n            <ion-grid class=\"h-80vh\">\n                <ion-row class=\"h-100 py-1\">\n                    <ion-col size=\"12\" class=\"custom-card ion-align-self-center p-1\">\n                        <h3 class=\"text-primary text-center\">Bienvenue sur <strong>job<span\n                                    class=\"text-secondary\">winwin</span></strong></h3>\n                        <img class=\"w-100 mt-2\" src=\"./assets/img/no-result-recruteur.svg\" alt=\"\">\n                        <h3 class=\"text text-center pt-2\">Aucune offre ne correspond à votre profil pour le moment</h3>\n                        <div class=\"action-button mt-2 w-100\">\n                            <div class=\"inner pb-2\">\n                                <button mat-raised-button type=\"button\" class=\"winBtn d-block mr-auto\"\n                                    (click)=\"getAdvertisement()\" style=\"width: 40% !important;\">\n                                    <mat-icon class=\"align-middle\">refresh</mat-icon>\n                                    <span class=\"align-middle\">Actualiser</span>\n                                </button>\n                            </div>\n                        </div>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n        </section>\n    </ng-template>\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/files/components/files-recruiter/files-recruiter.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/files/components/files-recruiter/files-recruiter.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"header-card-matching ion-no-border\" mode=\"md\">\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ng-container *ngIf=\"candidates && candidates.length > 0 else mainMenu\">\n                <ion-button class=\"roundbutton p-0\" (click)=\"resteView()\">\n                    <ion-icon src=\"./assets/icon/arrow-back.svg\"></ion-icon>\n                </ion-button>\n            </ng-container>\n            <ng-template #mainMenu>\n                <ion-menu-button>\n                    <ion-icon src=\"./assets/icon/menu-icon.svg\" style=\"width: 60px;height: 60px;\">\n                    </ion-icon>\n                </ion-menu-button>\n            </ng-template>\n        </ion-buttons>\n        <ion-buttons slot=\"primary\">\n            <ion-button (click)=\"presentNotification($event)\"\n                class=\"animate__animated animate__swing animate__repeat-3\">\n                <ion-icon color=\"primary\" name=\"notifications-outline\"></ion-icon>\n                <span class=\"countNotif\" *ngIf=\"notifService.countNotif > 0\" >\n                    {{ notifService.countNotif}}\n                </span>\n            </ion-button>\n            <ion-button routerLink=\"/dashboard/messenger\" routerDirection=\"root\">\n                <ion-icon src=\"./assets/icon/notification.svg\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n\n    <ng-container *ngIf=\"candidates && candidates.length > 0 else searchCard\">\n        <section #matchingCard *ngFor=\"let candidate of candidates\" class=\"content-card-matching\"\n            [style.position]=\"'absolute'\">\n            <ng-container *ngIf=\"candidates\">\n                <mat-horizontal-stepper class=\"card-matching m-1\" [@.disabled]=\"true\">\n\n                    <mat-step>\n                        <div class=\"card-matching-step card-info\">\n                            <h3 class=\"title\">{{ candidate.fullName }}</h3>\n                            <div class=\"d-block text-center position-relative\">\n                                <img src=\"./assets/icon/space-title.svg\" alt=\"\">\n                                <p class=\"desciption mb-0\">\n                                    {{ candidate.goal }}\n                                </p>\n                                <img src=\"./assets/icon/space-title.svg\" alt=\"\">\n                                <div class=\"picture-card-matching mt-1\">\n                                    <img [src]=\"candidate.picture ? (('backend_url' | env) + candidate.picture.name) : \n                                (candidate.gender === 'masculin' ? '/assets/img/male.svg' : '/assets/img/female.svg' )\"\n                                        alt=\"\" class=\"w-100 circle-image\">\n                                </div>\n                                <div class=\"text-right position-absolute\" style=\"right: 0;\">\n                                    <button mat-button class=\"bg-transparent cursor-pointer\" matStepperNext><img\n                                            src=\"./assets/icon/arrow-right.svg\" alt=\"\"></button>\n                                </div>\n                            </div>\n                            <div class=\"position-relative px-1 mt-2\">\n                                <div class=\"custom-fields text-center\">\n                                    <div class=\"d-inline capitalize min-w-50 w-80\">\n                                        {{ candidate.currentJob }}\n                                    </div>\n                                </div>\n                                <div class=\"custom-fields text-center mt-1\">\n                                    <div class=\"d-inline capitalize w-80 text-center\">\n                                        {{ candidate.experienceYears }}\n                                    </div>\n                                </div>\n\n                                <h3 class=\"objectif pt-1\">OBJECTIFS ACTUELS</h3>\n\n                                <div class=\"custom-fields text-center mt-1\">\n                                    <div class=\"d-inline capitalize min-w-50 w-80\">{{ candidate.searchedPost }}</div>\n                                </div>\n\n                                <div class=\"custom-fields text-center mt-1\">\n                                    <div class=\"d-inline capitalize w-40 text-center mr-1\">\n                                        {{ candidate.location }}\n                                    </div>\n                                    <div class=\"d-inline capitalize w-40 text-center\">{{ candidate.salary }}</div>\n                                </div>\n                            </div>\n                            <div class=\"action-button w-100\">\n                                <!-- <div class=\"inner\">\n                                    <button mat-mini-fab type=\"button\" class=\"refreshBtn\">\n                                        <mat-icon>refresh</mat-icon>\n                                    </button>\n                                </div> -->\n                                <div class=\"inner\">\n                                    <button mat-raised-button type=\"button\" class=\"deleteBtn\"\n                                        (click)=\"addToBlackList(candidate._id)\">\n                                        <img src=\"./assets/icon/cancel-btn.svg\" alt=\"\" style=\"width: 14px\">\n                                    </button>\n                                </div>\n                                <div class=\"inner\">\n                                    <button mat-raised-button type=\"button\" class=\"winBtn\"\n                                        (click)=\"addWin(candidate._id)\">\n                                        <img src=\"./assets/icon/win-btn-bleu.svg\" alt=\"\" style=\"width: 32px\">\n                                    </button>\n                                </div>\n                            </div>\n                        </div>\n                    </mat-step>\n\n                    <mat-step>\n                        <div class=\"card-matching-step card-info\">\n                            <h3 class=\"title\"> {{ candidate.fullName }} </h3>\n                            <div class=\"d-block text-center position-relative\">\n                                <img src=\"./assets/icon/space-title.svg\" alt=\"\">\n                                <p class=\"desciption mb-0\">\n                                    {{ candidate.goal }}\n                                </p>\n                                <img src=\"./assets/icon/space-title.svg\" alt=\"\">\n                                <div class=\"picture-card-matching mt-1\">\n                                    <img [src]=\"candidate.picture ? (('backend_url' | env) + candidate.picture.name) : \n                                (candidate.gender === 'masculin' ? '/assets/img/male.svg' : '/assets/img/female.svg' )\"\n                                        alt=\"\" class=\"w-100 circle-image\">\n                                </div>\n                                <div class=\"text-right position-absolute\" style=\"left: 0;\">\n                                    <button mat-button class=\"bg-transparent cursor-pointer\" matStepperPrevious><img\n                                            src=\"./assets/icon/arrow-left.svg\" alt=\"\"></button>\n                                </div>\n                                <div class=\"text-right position-absolute\" style=\"right: 0;\">\n                                    <button mat-button class=\"bg-transparent cursor-pointer\" matStepperNext><img\n                                            src=\"./assets/icon/arrow-right.svg\" alt=\"\"></button>\n                                </div>\n                            </div>\n                            <div class=\"text-center job-title\">\n                                <span>cv-résumé</span>\n                            </div>\n                            <div class=\"text-center mt-2\" *ngIf=\"candidate.video \">\n                                <video width=\"100%\" height=\"200px\" controls>\n                                    <source [src]=\"('backend_url' | env) + candidate.video.name\">\n                                </video>\n                            </div>\n\n                            <div class=\"file-card-details mt-1\">\n                                <h3 class=\"title3 mb-0\">\n                                    <mat-icon>subject</mat-icon>\n                                    <span>CV</span>\n                                    <a [href]=\"candidate.cv ? (('backend_url' | env) + \n                                         candidate.cv.name) : '#'\">\n                                        <mat-icon class=\"float-right\">save_alt</mat-icon>\n                                    </a>\n                                </h3>\n                            </div>\n\n                            <div class=\"file-card-details mt-1\">\n                                <h3 class=\"title3\">\n                                    <mat-icon>mediation</mat-icon>\n                                    <span>EXPÉRIENCE</span>\n                                </h3>\n                                <span class=\"desc\">\n                                    <ul class=\"list\">\n                                        <li *ngFor=\"let experience of candidate.experiences\">\n                                            <div class=\"d-inline\"></div> {{ experience.startedDate | date: 'yyyy'}} -\n                                            <ng-container class=\"w-100\" *ngIf=\"experience.endDate else inwork\" >{{ experience.endDate | date:'yyyy' }}</ng-container>\n                                            <ng-template class=\"w-100\" #inwork>Aujourd’hui</ng-template> :\n                                            <div class=\"d-inline capitalize\"> {{ experience.job }} </div>\n                                        </li>\n                                    </ul>\n                                </span>\n                            </div>\n\n                            <div class=\"file-card-details mt-1\">\n                                <h3 class=\"title3\">\n                                    <mat-icon>school</mat-icon>\n                                    <span>FORMATION</span>\n                                </h3>\n                                <span class=\"desc\">\n                                    <ul class=\"list\">\n                                        <li *ngFor=\"let training of candidate.trainings\">\n                                            <div class=\"d-inline capitalize\">{{ training.year }} :\n                                                {{ training.typeOfTraining }}</div>\n                                        </li>\n                                    </ul>\n                                </span>\n                            </div>\n                            <div class=\"file-card-details mt-1\">\n                                <h3 class=\"title3\">\n                                    <mat-icon>g_translate</mat-icon>\n                                    <span>LANGUE</span>\n                                </h3>\n                                <span class=\"desc\">\n                                    <ul class=\"list\">\n                                        <li *ngFor=\"let item of candidate.languages\">\n                                            <div class=\"d-inline capitalize\">{{ item.language }}</div> :\n                                            <div class=\"d-inline capitalize\">{{ item.languageLevel }}</div>\n                                        </li>\n                                    </ul>\n                                </span>\n                            </div>\n                            <div class=\"action-button mt-1 w-100\">\n                                <!-- <div class=\"inner\">\n                                    <button mat-mini-fab type=\"button\" class=\"refreshBtn\">\n                                        <mat-icon>refresh</mat-icon>\n                                    </button>\n                                </div> -->\n                                <div class=\"inner\">\n                                    <button mat-raised-button type=\"button\" class=\"deleteBtn\"\n                                        (click)=\"addToBlackList(candidate._id)\">\n                                        <img src=\"./assets/icon/cancel-btn.svg\" alt=\"\" style=\"width: 14px\">\n                                    </button>\n                                </div>\n                                <div class=\"inner\">\n                                    <button mat-raised-button type=\"button\" class=\"winBtn\"\n                                        (click)=\"addWin(candidate._id)\">\n                                        <img src=\"./assets/icon/win-btn-bleu.svg\" alt=\"\" style=\"width: 32px\">\n                                    </button>\n                                </div>\n                            </div>\n                        </div>\n                    </mat-step>\n\n                    <mat-step>\n                        <div class=\"card-matching-step card-value-candidate\">\n                            <h3 class=\"title p-1\"> {{ candidate.fullName }} </h3>\n                            <div class=\"d-block text-center position-relative\">\n\n                                <div class=\"file-card-Skills d-block mr-auto\">\n                                    <h3 class=\"text-center text-secondary uppercase\">SOFTSKILLS</h3>\n                                    <div class=\"desc-competence\">\n                                        <ul class=\"list-competence\">\n                                            <li *ngFor=\"let skill of candidate.skills\"> {{ skill}} </li>\n                                        </ul>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"position-relative pl-1\">\n                                <button mat-button class=\"bg-transparent position-absolute cursor-pointer\"\n                                    matStepperPrevious>\n                                    <img src=\"./assets/icon/arrow-left-black.svg\" alt=\"\"></button>\n                            </div>\n                            <div class=\"text-secondary text-center\">\n                                <h3 class=\"uppercase\">Valeurs</h3>\n                            </div>\n\n                            <div class=\"circle-content position-relative pt-5\">\n                                <div class=\"d-block value-one\">\n                                    <div class=\"text-content\">{{ candidate.values[0] }}</div>\n                                </div>\n                                <div class=\"d-block value-two\">\n                                    <div class=\"text-content\">{{ candidate.values[1] }}</div>\n                                </div>\n                                <div class=\"d-block value-three\">\n                                    <div class=\"text-content\">{{ candidate.values[2] }}</div>\n                                </div>\n                                <div class=\"d-block value-four\">\n                                    <div class=\"text-content\">{{ candidate.values[3] }}</div>\n                                </div>\n                                <div class=\"d-block value-five\">\n                                    <div class=\"text-content\">{{ candidate.values[4] }}</div>\n                                </div>\n                                <div class=\"d-block value-six\">\n                                    <div class=\"text-content\">{{ candidate.values[5] }}</div>\n                                </div>\n                            </div>\n\n                            <div class=\"more-content p-1\">\n\n                                <div class=\"custom-fields info-recruteur-title text-center mb-2\"\n                                    *ngIf=\"candidate.webSite\">\n                                    <a [href]=\"candidate.webSite\" target=\"_blank\">\n                                        <span>{{ candidate.webSite }}</span>\n                                    </a>\n                                </div>\n\n                                <div class=\"social-media text-center\">\n\n                                    <ng-container *ngIf=\"candidate.facebook\">\n                                        <a [href]=\"candidate.facebook\" target=\"_blank\"><img\n                                                class=\"mr-1 inline-block cursor-pointer\"\n                                                src=\"./assets/icon/circle-facebook.svg\" alt=\"facebook\"></a>\n                                    </ng-container>\n\n                                    <ng-container *ngIf=\"candidate.instagram\">\n                                        <a [href]=\"'https://www.instagram.com/' + candidate.instagram\" target=\"_blank\">\n                                            <img class=\"mr-1 inline-block cursor-pointer\"\n                                                src=\"./assets/icon/circle-instagram.svg\" alt=\"instagram\">\n                                        </a>\n                                    </ng-container>\n\n                                    <ng-container *ngIf=\"candidate.linkedin\">\n                                        <a [href]=\"candidate.linkedin\" target=\"_blank\"><img\n                                                class=\"mr-1 inline-block cursor-pointer\"\n                                                src=\"./assets/icon/circle-linkedin.svg\" alt=\"linkedin\"></a>\n                                    </ng-container>\n\n                                    <ng-container *ngIf=\"candidate.twitter\">\n                                        <a [href]=\"'https://www.twitter.com/' + candidate.twitter\" target=\"_blank\"><img\n                                                class=\"mr-1 inline-block cursor-pointer\"\n                                                src=\"./assets/icon/circle-twitter.svg\" alt=\"twitter\"></a>\n                                    </ng-container>\n\n                                    <ng-container *ngIf=\"candidate.blog\">\n                                        <a [href]=\"candidate.blog\" target=\"_blank\"><img\n                                                class=\"mr-1 inline-block cursor-pointer\"\n                                                src=\"./assets/icon/circle-blogger.svg\" alt=\"blog\"></a>\n                                    </ng-container>\n\n                                </div>\n                                <div class=\"action-button mt-1 w-100\">\n                                    <!-- <div class=\"inner\">\n                                        <button mat-mini-fab type=\"button\" class=\"refreshBtn\">\n                                            <mat-icon>refresh</mat-icon>\n                                        </button>\n                                    </div> -->\n                                    <div class=\"inner\">\n                                        <button mat-raised-button type=\"button\" class=\"deleteBtn\"\n                                            (click)=\"addToBlackList(candidate._id)\">\n                                            <img src=\"./assets/icon/cancel-btn.svg\" alt=\"\" style=\"width: 14px\">\n                                        </button>\n                                    </div>\n                                    <div class=\"inner\">\n                                        <button mat-raised-button type=\"button\" class=\"winBtn\"\n                                            (click)=\"addWin(candidate._id)\">\n                                            <img src=\"./assets/icon/win-btn-bleu.svg\" alt=\"\" style=\"width: 32px\">\n                                        </button>\n                                    </div>\n                                </div>\n\n                            </div>\n                        </div>\n                    </mat-step>\n\n                </mat-horizontal-stepper>\n            </ng-container>\n        </section>\n    </ng-container>\n    <ng-template #searchCard>\n        <section class=\"blank-card\">\n            <ion-grid class=\"h-80vh\">\n                <ion-row class=\"h-100 py-1\">\n                    <ion-col size=\"12\" class=\"custom-card ion-align-self-center p-1\">\n                        <h3 class=\"text-primary text-center\">Bienvenue sur <strong>job<span\n                                    class=\"text-secondary\">winwin</span></strong></h3>\n                        <img class=\"w-100 mt-2\" src=\"./assets/img/no-result-candidate.svg\" alt=\"\">\n\n                        <div *ngIf=\"advertisements && advertisements.length > 0 else createAdvertisement\">\n                            <h3 class=\"text text-center pt-2\">\n                                Sélectionnez l'annonce pour laquelle vous souhaitez matcher\n                            </h3>\n                            <ion-item class=\"custom-select w-100\">\n                                <ion-label position=\"floating\">Annonces</ion-label>\n                                <ion-select class=\"w-100\" ok-text=\"Ok\" cancel-text=\"Annuler\" placeholder=\"Sélectionner\"\n                                    (ionChange)=\"valueChanges($event.detail.value)\" #selectedAds>\n                                    <ion-select-option *ngFor=\"let advertisement of advertisements\"\n                                        [value]=\"advertisement._id\">\n                                        {{ advertisement.desiredJob }}\n                                    </ion-select-option>\n                                </ion-select>\n                            </ion-item>\n                            <!-- <ng-container *ngIf=\"annonceFind || selectedAds.value\">\n                                <small class=\"text-error mt-2\" >\n                                    \n                                </small>\n                            </ng-container> -->\n                        </div>\n\n                        <ng-template #createAdvertisement>\n                            <div>\n                                <h3 class=\"text text-center pt-2\">\n                                    Ajouter une annonce pour commencer à Matcher\n                                </h3>\n                                <div class=\"action-button mt-2 w-100\">\n                                    <div class=\"inner pb-2\">\n                                        <button mat-raised-button type=\"button\" class=\"file-button d-block mr-auto py-1\"\n                                            [routerLink]=\" advertisementService.advertisements.length > 0  ? '/dashboard/advertisement/form/create-advertisement' : '/dashboard/advertisement/slider-advertisement'\">\n                                            <mat-icon class=\"align-middle\">add</mat-icon>\n                                            <span class=\"align-middle\">Ajouter une annonce</span>\n                                        </button>\n                                    </div>\n                                </div>\n                            </div>\n                        </ng-template>\n\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n        </section>\n    </ng-template>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/files/components/files-condidate/files-condidate.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/files/components/files-condidate/files-condidate.component.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".countNotif {\n  position: absolute;\n  background-color: red;\n  color: #ffffff;\n  width: 16px;\n  height: 16px;\n  top: 2px;\n  right: -5px;\n  border-radius: 16px;\n  font-size: 10px;\n  line-height: 16px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZmlsZXMvY29tcG9uZW50cy9maWxlcy1jb25kaWRhdGUvZmlsZXMtY29uZGlkYXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixjQUFjO0VBQ2QsV0FBVztFQUNYLFlBQVk7RUFDWixRQUFRO0VBQ1IsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZmlsZXMvY29tcG9uZW50cy9maWxlcy1jb25kaWRhdGUvZmlsZXMtY29uZGlkYXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvdW50Tm90aWYge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgd2lkdGg6IDE2cHg7XG4gICAgaGVpZ2h0OiAxNnB4O1xuICAgIHRvcDogMnB4O1xuICAgIHJpZ2h0OiAtNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICB9XG4gIFxuIl19 */");

/***/ }),

/***/ "./src/app/pages/files/components/files-condidate/files-condidate.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/files/components/files-condidate/files-condidate.component.ts ***!
  \*************************************************************************************/
/*! exports provided: FilesCondidateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilesCondidateComponent", function() { return FilesCondidateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_core_services_crud_matching_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/crud/matching.service */ "./src/app/core/services/crud/matching.service.ts");
/* harmony import */ var src_app_core_services_global_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/global/global.service */ "./src/app/core/services/global/global.service.ts");
/* harmony import */ var src_app_core_services_addapters_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/addapters/toast.service */ "./src/app/core/services/addapters/toast.service.ts");
/* harmony import */ var src_app_core_services_addapters_trans_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/addapters/trans.service */ "./src/app/core/services/addapters/trans.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_core_services_global_notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/global/notification.service */ "./src/app/core/services/global/notification.service.ts");
/* harmony import */ var src_app_pages_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/pages/notifications/notifications.component */ "./src/app/pages/notifications/notifications.component.ts");









let FilesCondidateComponent = class FilesCondidateComponent {
    constructor(matchingService, globalService, notifService, NotificationController, toastService, transService, gestureCtrl, platform) {
        this.matchingService = matchingService;
        this.globalService = globalService;
        this.notifService = notifService;
        this.NotificationController = NotificationController;
        this.toastService = toastService;
        this.transService = transService;
        this.gestureCtrl = gestureCtrl;
        this.platform = platform;
        this.longPressActive = false;
    }
    ngOnInit() {
        this.getAdvertisement();
    }
    presentNotification(ev) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const notif = yield this.NotificationController.create({
                component: src_app_pages_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_8__["NotificationsComponent"],
                cssClass: 'notification-class',
                event: ev,
                translucent: true,
                animated: true,
                backdropDismiss: true,
                keyboardClose: true,
                showBackdrop: true,
            });
            this.notifService.notificationShowing().subscribe(res => {
                console.log(res);
                this.notifService.countNotif = res['count'];
            });
            return yield notif.present();
        });
    }
    ngAfterViewChecked() {
        const cardArray = this.matchingCard.toArray();
        this.swipe(cardArray);
    }
    /**
     * Action swipe
     * @param cardArray
     */
    swipe(cardArray) {
        for (let i = 0; i < cardArray.length; i++) {
            const card = cardArray[i];
            const gesture = this.gestureCtrl.create({
                el: card.nativeElement,
                gestureName: 'swipe-gesture',
                onStart: ev => {
                    // console.log('debut diyal action');
                },
                onMove: ev => {
                    card.nativeElement.style.transform = `translateX(${ev.deltaX}px) rotate(${ev.deltaX / 10}deg)`;
                },
                onEnd: ev => {
                    card.nativeElement.style.transition = `.5s ease-out`;
                    if (ev.deltaX > 150) {
                        card.nativeElement.style.transform = `translateX(${+this.platform.width() * 2}px) rotate(${ev.deltaX / 2}deg)`;
                        this.addWin(this.advertisements[i]._id, this.advertisements[i].recruiter);
                    }
                    else if (ev.deltaX < -150) {
                        card.nativeElement.style.transform = `translateX(-${+this.platform.width() * 2}px) rotate(${ev.deltaX / 2}deg)`;
                        this.addToBlackList(this.advertisements[i]._id, this.advertisements[i].recruiter);
                    }
                    else {
                        card.nativeElement.style.transform = ``;
                        // console.log('la fin diyal action ');
                    }
                }
            }, true);
            gesture.enable(true);
        }
    }
    /**
     * refresh candidate
     */
    refreshAdvertisement(advertisementId) {
        const index = this.advertisements.findIndex(x => x._id === advertisementId);
        if (index !== -1) {
            this.advertisements.splice(index, 1);
            if (this.advertisements.length === 0) {
                this.getAdvertisement();
            }
        }
    }
    /**
     * get Advertisement
     */
    getAdvertisement() {
        this.matchingService.getPlug().subscribe(advertisement => {
            this.advertisements = advertisement;
            if (this.advertisements) {
                this.advertisements = this.advertisements.map(element => {
                    const activitySector = this.globalService.activitySectors.find(x => x._id === element.advertisement.company.activitySector);
                    if (element.advertisement.languages) {
                        element.advertisement.languages = element.advertisement.languages.map(x => {
                            const langIndex = this.globalService.languages.findIndex(val => val._id === x.language);
                            const langLevelIndex = this.globalService.languagesLevels.findIndex(val => val._id === x.languageLevel);
                            return {
                                language: langIndex !== -1 ? this.globalService.languages[langIndex].name : null,
                                languageLevel: langLevelIndex !== -1 ? this.globalService.languagesLevels[langLevelIndex].name : null
                            };
                        });
                    }
                    if (element.advertisement.programingLanguages) {
                        element.advertisement.programingLanguages.language = element.advertisement.programingLanguages.language.map(lg => {
                            const language = this.globalService.programmingLanguages.find(x => x._id === lg);
                            return language ? language.name : null;
                        });
                        element.advertisement.programingLanguages.logiciel = element.advertisement.programingLanguages.logiciel.map(lg => {
                            const logiciel = this.globalService.logiciels.find(x => x._id === lg);
                            return logiciel ? logiciel.name : null;
                        });
                    }
                    return {
                        logo: element.advertisement.company.logo.name,
                        companyName: element.advertisement.company.name,
                        companyTitle: element.advertisement.company.title,
                        companyDescription: element.advertisement.company.description,
                        companyValues: element.advertisement.company.values,
                        companyWebSite: element.advertisement.company.webSite,
                        companyLinkedin: element.advertisement.company.linkedin,
                        companyFacebook: element.advertisement.company.facebook,
                        companyInstagram: element.advertisement.company.instagram,
                        companyTwitter: element.advertisement.company.twitter,
                        desiredJob: element.advertisement.desiredJob,
                        experienceYears: this.getRepertoire(element.advertisement, 'experienceYears'),
                        location: this.getRepertoire(element.advertisement, 'location'),
                        contract: this.getRepertoire(element.advertisement, 'contract'),
                        jobType: this.getRepertoire(element.advertisement, 'jobType'),
                        jobMode: this.getRepertoire(element.advertisement, 'jobMode'),
                        managerialLevel: this.getRepertoire(element.advertisement, 'managerialLevel'),
                        effective: this.getRepertoire(element.advertisement, 'effective'),
                        activitySector: activitySector ? activitySector.name : '',
                        salary: `${element.advertisement.supposedSalaryMax} MAD`,
                        prerequisite: element.advertisement.prerequisite,
                        missions: element.advertisement.missions,
                        descriptions: element.advertisement.descriptions,
                        startedDate: element.advertisement.startedDate,
                        programingLanguages: element.advertisement.programingLanguages,
                        languages: element.advertisement.languages,
                        recruiter: element.advertisement.recruiter,
                        _id: element.advertisement._id
                    };
                });
            }
        });
    }
    /**
     * add to black list
     */
    addToBlackList(advertisementId, recruiter) {
        this.matchingService.addToBlackList({
            advertisement: advertisementId,
            recruiter
        }).subscribe((response) => {
            this.getAdvertisement();
            this.refreshAdvertisement(advertisementId);
        });
    }
    /**
     * add new iwn
     */
    addWin(advertisementId, recruiter) {
        this.matchingService.createWin({
            advertisement: advertisementId,
            recruiter
        }).subscribe((response) => {
            // this.toastService.success(this.transService.translate(response.message));
            console.log(response.message);
            this.toastService.success('Vous avez bien matché');
            this.refreshAdvertisement(advertisementId);
        });
    }
    /**
     * get repertoires
     * @param key
     */
    getRepertoire(advertisement, key) {
        let val;
        switch (key) {
            case 'contract':
                val = this.globalService.contracts.find(x => x._id === advertisement[key]);
                break;
            case 'jobType':
                val = this.globalService.jobTypes.find(x => x._id === advertisement[key]);
                break;
            case 'jobMode':
                val = this.globalService.jobModes.find(x => x._id === advertisement[key]);
                break;
            case 'managerialLevel':
                val = this.globalService.managerialLevels.find(x => x._id === advertisement[key]);
                break;
            case 'effective':
                val = this.globalService.effectives.find(x => x._id === advertisement[key]);
                break;
            case 'experienceYears':
                val = this.globalService.experiences.find(x => x._id === advertisement[key]);
                break;
            case 'location':
                val = this.globalService.locations.find(x => x._id === advertisement[key]);
                break;
        }
        if (val) {
            return val.name;
        }
    }
};
FilesCondidateComponent.ctorParameters = () => [
    { type: src_app_core_services_crud_matching_service__WEBPACK_IMPORTED_MODULE_2__["MatchingService"] },
    { type: src_app_core_services_global_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"] },
    { type: src_app_core_services_global_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["PopoverController"] },
    { type: src_app_core_services_addapters_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"] },
    { type: src_app_core_services_addapters_trans_service__WEBPACK_IMPORTED_MODULE_5__["TransService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["GestureController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"] }
];
FilesCondidateComponent.propDecorators = {
    matchingCard: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"], args: ['matchingCard',] }]
};
FilesCondidateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-files-condidate',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./files-condidate.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/files/components/files-condidate/files-condidate.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./files-condidate.component.scss */ "./src/app/pages/files/components/files-condidate/files-condidate.component.scss")).default]
    })
], FilesCondidateComponent);



/***/ }),

/***/ "./src/app/pages/files/components/files-recruiter/files-recruiter.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/files/components/files-recruiter/files-recruiter.component.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".file-button {\n  background-color: #f6ce3c !important;\n  border-radius: 25px !important;\n  height: 30px;\n  outline: none;\n  color: #ffffff;\n}\n\n.countNotif {\n  position: absolute;\n  background-color: red;\n  color: #ffffff;\n  width: 16px;\n  height: 16px;\n  top: 2px;\n  right: -5px;\n  border-radius: 16px;\n  font-size: 10px;\n  line-height: 16px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZmlsZXMvY29tcG9uZW50cy9maWxlcy1yZWNydWl0ZXIvZmlsZXMtcmVjcnVpdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0NBQW9DO0VBQ3BDLDhCQUE4QjtFQUM5QixZQUFZO0VBQ1osYUFBYTtFQUNiLGNBQWM7QUFDaEI7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCxXQUFXO0VBQ1gsWUFBWTtFQUNaLFFBQVE7RUFDUixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixpQkFBaUI7QUFFbkIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9maWxlcy9jb21wb25lbnRzL2ZpbGVzLXJlY3J1aXRlci9maWxlcy1yZWNydWl0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmlsZS1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZjZTNjICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBvdXRsaW5lOiBub25lO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbi5jb3VudE5vdGlmIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICB0b3A6IDJweDtcbiAgcmlnaHQ6IC01cHg7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/pages/files/components/files-recruiter/files-recruiter.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/files/components/files-recruiter/files-recruiter.component.ts ***!
  \*************************************************************************************/
/*! exports provided: FilesRecruiterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilesRecruiterComponent", function() { return FilesRecruiterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_core_services_crud_matching_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/crud/matching.service */ "./src/app/core/services/crud/matching.service.ts");
/* harmony import */ var src_app_core_services_global_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/global/global.service */ "./src/app/core/services/global/global.service.ts");
/* harmony import */ var src_app_core_services_crud_advertisement_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/crud/advertisement.service */ "./src/app/core/services/crud/advertisement.service.ts");
/* harmony import */ var src_app_core_services_addapters_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/addapters/toast.service */ "./src/app/core/services/addapters/toast.service.ts");
/* harmony import */ var src_app_core_services_addapters_trans_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/addapters/trans.service */ "./src/app/core/services/addapters/trans.service.ts");
/* harmony import */ var src_app_pages_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/pages/notifications/notifications.component */ "./src/app/pages/notifications/notifications.component.ts");
/* harmony import */ var src_app_core_services_global_notification_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/global/notification.service */ "./src/app/core/services/global/notification.service.ts");
/* harmony import */ var src_app_core_services_global_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/services/global/auth.service */ "./src/app/core/services/global/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");












let FilesRecruiterComponent = class FilesRecruiterComponent {
    constructor(matchingService, globalService, transService, authService, advertisementService, gestureCtrl, NotificationController, platform, alertController, toastService, notifService, activedRoute) {
        this.matchingService = matchingService;
        this.globalService = globalService;
        this.transService = transService;
        this.authService = authService;
        this.advertisementService = advertisementService;
        this.gestureCtrl = gestureCtrl;
        this.NotificationController = NotificationController;
        this.platform = platform;
        this.alertController = alertController;
        this.toastService = toastService;
        this.notifService = notifService;
        this.activedRoute = activedRoute;
        this.longPressActive = false;
        this.candidates = [];
        this.annonceFind = false;
    }
    ngOnInit() {
        const { advertismentId } = this.activedRoute.snapshot.queryParams;
        if (advertismentId) {
            this.advertisementId = advertismentId;
            this.getCandidate();
            this.annonceFind = true;
        }
        else {
            this.getCandidates();
        }
    }
    ionViewWillEnter() {
        this.getCandidates();
    }
    /**
     * get candidate
     */
    getCandidates() {
        this.advertisementService.getAdvetissementByCreator().subscribe(res => {
            this.advertisements = res;
            console.log(res);
        });
        // this.advertisementService.read().subscribe(res => {
        //   this.advertisements = res.data.filter(x => x.status === 'Ouverte');
        // });
    }
    presentNotification(ev) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const notif = yield this.NotificationController.create({
                component: src_app_pages_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_8__["NotificationsComponent"],
                cssClass: 'notification-class',
                event: ev,
                translucent: true,
                animated: true,
                backdropDismiss: true,
                keyboardClose: true,
                showBackdrop: true,
            });
            this.notifService.notificationShowing().subscribe(res => {
                this.notifService.countNotif = res['count'];
            });
            return yield notif.present();
        });
    }
    ngAfterViewChecked() {
        const cardArray = this.matchingCard.toArray();
        this.swipe(cardArray);
    }
    presentAlert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Jobwinwin',
                subHeader: 'Information',
                message: 'Aucun candidat ne match avec vos critères',
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    /**
     * Action swipe
     * @param cardArray
     */
    swipe(cardArray) {
        for (let i = 0; i < cardArray.length; i++) {
            const card = cardArray[i];
            const gesture = this.gestureCtrl.create({
                el: card.nativeElement,
                gestureName: 'swipe-gesture',
                onStart: ev => {
                    // console.log('debut diyal action');
                },
                onMove: ev => {
                    card.nativeElement.style.transform = `translateX(${ev.deltaX}px) rotate(${ev.deltaX / 10}deg)`;
                },
                onEnd: ev => {
                    card.nativeElement.style.transition = `.5s ease-out`;
                    if (ev.deltaX > 150) {
                        card.nativeElement.style.transform = `translateX(${+this.platform.width() * 2}px) rotate(${ev.deltaX / 2}deg)`;
                        this.addWin(this.candidates[i]._id);
                    }
                    else if (ev.deltaX < -150) {
                        card.nativeElement.style.transform = `translateX(-${+this.platform.width() * 2}px) rotate(${ev.deltaX / 2}deg)`;
                        this.addToBlackList(this.candidates[i]._id);
                    }
                    else {
                        card.nativeElement.style.transform = ``;
                        // console.log('la fin diyal action ');
                    }
                }
            }, true);
            gesture.enable(true);
        }
    }
    valueChanges(value) {
        this.advertisementId = value;
        this.getCandidate();
        this.annonceFind = true;
    }
    resteView() {
        this.advertisementId = null;
        this.getCandidate();
        this.annonceFind = false;
    }
    getCandidate() {
        this.matchingService.getPlug(this.advertisementId).subscribe(candidate => {
            this.candidates = candidate;
            if (this.candidates) {
                if (this.candidates.length <= 0 && this.annonceFind) {
                    this.presentAlert();
                    this.annonceFind = false;
                }
                this.candidates = this.candidates.map(element => {
                    const trainings = element.candidate.trainings.map(x => ({
                        typeOfTraining: this.getRepertoire(x, 'typeOfTraining'),
                        year: x.yearOfGraduation
                    }));
                    const languages = element.candidate.languages.map(x => ({
                        language: this.getRepertoire(x, 'language'),
                        languageLevel: this.getRepertoire(x, 'languageLevel')
                    }));
                    const values = element.candidate.values.map(x => this.getRepertoire(x, 'value'));
                    const skills = element.candidate.skills.map(x => this.getRepertoire(x, 'skill'));
                    return {
                        fullName: `${element.candidate.user.firstName} ${element.candidate.user.lastName}`,
                        goal: element.candidate.goal,
                        currentJob: element.candidate.currentJob,
                        searchedPost: element.candidate.searchedPost,
                        salary: `${element.candidate.supposedSalaryMax} MAD`,
                        location: this.getRepertoire(element.candidate, 'locations'),
                        experienceYears: `${this.getRepertoire(element.candidate, 'experienceYears')} D'experience`,
                        experiences: element.candidate.experiences,
                        trainings,
                        languages,
                        values,
                        skills,
                        webSite: element.candidate.webSite,
                        blog: element.candidate.blog,
                        instagram: element.candidate.instagram,
                        linkedin: element.candidate.linkedin,
                        twitter: element.candidate.twitter,
                        facebook: element.candidate.facebook,
                        picture: element.candidate.user.picture,
                        video: element.candidate.video,
                        cv: element.candidate.cv,
                        _id: element.candidate._id
                    };
                });
            }
        });
    }
    /**
     * add to black list
     */
    addToBlackList(candidateId) {
        this.matchingService.addToBlackList({ candidate: candidateId, advertisement: this.advertisementId }).subscribe((response) => {
            this.getCandidate();
            this.refreshCandidate(candidateId);
        });
    }
    /**
     * add new iwn
     */
    addWin(candidateId) {
        this.matchingService.createWin({ candidate: candidateId, advertisement: this.advertisementId }).subscribe((response) => {
            // this.toastService.success(this.transService.translate(response.message));
            this.toastService.success('Vous avez bien matché');
            this.refreshCandidate(candidateId);
        });
    }
    /**
     * refresh candidate
     */
    refreshCandidate(candidateId) {
        const index = this.candidates.findIndex(x => x._id === candidateId);
        if (index !== -1) {
            this.candidates.splice(index, 1);
            if (this.candidates.length === 1) {
                this.getCandidate();
            }
        }
    }
    /**
     * get repertoires
     * @param key
     */
    getRepertoire(candidate, key) {
        let val;
        switch (key) {
            case 'contract':
                val = this.globalService.contracts.find(x => x._id === candidate[key]);
                break;
            case 'value':
                val = this.globalService.values.find(x => x._id === candidate);
                break;
            case 'jobType':
                val = this.globalService.jobTypes.find(x => x._id === candidate[key]);
                break;
            case 'jobMode':
                val = this.globalService.jobModes.find(x => x._id === candidate[key]);
                break;
            case 'managerialLevel':
                val = this.globalService.managerialLevels.find(x => x._id === candidate[key]);
                break;
            case 'effective':
                val = this.globalService.effectives.find(x => x._id === candidate[key]);
                break;
            case 'experienceYears':
                val = this.globalService.experiences.find(x => x._id === candidate[key]);
                break;
            case 'locations':
                val = this.globalService.locations.find(x => x._id === candidate[key][0]);
                break;
            case 'typeOfTraining':
                val = this.globalService.typeOfTrainings.find(x => x._id === candidate[key]);
                break;
            case 'language':
                val = this.globalService.languages.find(x => x._id === candidate[key]);
                break;
            case 'languageLevel':
                val = this.globalService.languagesLevels.find(x => x._id === candidate[key]);
                break;
            case 'skill':
                val = this.globalService.softSkills.find(x => x._id === candidate);
                break;
        }
        if (val) {
            return val.name;
        }
    }
};
FilesRecruiterComponent.ctorParameters = () => [
    { type: src_app_core_services_crud_matching_service__WEBPACK_IMPORTED_MODULE_3__["MatchingService"] },
    { type: src_app_core_services_global_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"] },
    { type: src_app_core_services_addapters_trans_service__WEBPACK_IMPORTED_MODULE_7__["TransService"] },
    { type: src_app_core_services_global_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"] },
    { type: src_app_core_services_crud_advertisement_service__WEBPACK_IMPORTED_MODULE_5__["AdvertisementService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["GestureController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: src_app_core_services_addapters_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"] },
    { type: src_app_core_services_global_notification_service__WEBPACK_IMPORTED_MODULE_9__["NotificationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"] }
];
FilesRecruiterComponent.propDecorators = {
    matchingCard: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"], args: ['matchingCard',] }]
};
FilesRecruiterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-files-recruiter',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./files-recruiter.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/files/components/files-recruiter/files-recruiter.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./files-recruiter.component.scss */ "./src/app/pages/files/components/files-recruiter/files-recruiter.component.scss")).default]
    })
], FilesRecruiterComponent);



/***/ }),

/***/ "./src/app/pages/files/files-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/files/files-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: FilesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilesRoutingModule", function() { return FilesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _components_files_recruiter_files_recruiter_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/files-recruiter/files-recruiter.component */ "./src/app/pages/files/components/files-recruiter/files-recruiter.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_files_condidate_files_condidate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/files-condidate/files-condidate.component */ "./src/app/pages/files/components/files-condidate/files-condidate.component.ts");





const routes = [
    {
        path: 'plug-recruiter',
        component: _components_files_condidate_files_condidate_component__WEBPACK_IMPORTED_MODULE_4__["FilesCondidateComponent"]
    },
    {
        path: '',
        component: _components_files_recruiter_files_recruiter_component__WEBPACK_IMPORTED_MODULE_1__["FilesRecruiterComponent"]
    },
];
let FilesRoutingModule = class FilesRoutingModule {
};
FilesRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })
], FilesRoutingModule);



/***/ }),

/***/ "./src/app/pages/files/files.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/files/files.module.ts ***!
  \*********************************************/
/*! exports provided: FilesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilesModule", function() { return FilesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _files_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./files-routing.module */ "./src/app/pages/files/files-routing.module.ts");
/* harmony import */ var _components_files_condidate_files_condidate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/files-condidate/files-condidate.component */ "./src/app/pages/files/components/files-condidate/files-condidate.component.ts");
/* harmony import */ var _components_files_recruiter_files_recruiter_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/files-recruiter/files-recruiter.component */ "./src/app/pages/files/components/files-recruiter/files-recruiter.component.ts");






let FilesModule = class FilesModule {
};
FilesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_components_files_condidate_files_condidate_component__WEBPACK_IMPORTED_MODULE_4__["FilesCondidateComponent"], _components_files_recruiter_files_recruiter_component__WEBPACK_IMPORTED_MODULE_5__["FilesRecruiterComponent"]],
        imports: [
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
            _files_routing_module__WEBPACK_IMPORTED_MODULE_3__["FilesRoutingModule"]
        ]
    })
], FilesModule);



/***/ })

}]);
//# sourceMappingURL=pages-files-files-module-es2015.js.map