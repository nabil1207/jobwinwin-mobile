(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-profil-dashboard-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profil/components/add-profil/add-profil.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profil/components/add-profil/add-profil.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div appScrollToTop>\n  <form class=\"d-block\">\n    <div class=\"text-center mt-3\">\n      <h1 class=\"title\">Ajouter votre meilleure photo <br> de profil ! </h1>\n      <img class=\"circle-image mt-3\"\n        [src]=\"authService.user.picture ? (('backend_url' | env) + authService.user.picture.name) : '/assets/img/default-image.svg'\"\n        alt=\"Add Photo\" (click)=\"addImageAction()\">\n    </div>\n  \n    <div class=\"mt-3 text-center\">\n      <ion-button class=\"w-80\" color=\"primary\" (click)=\"onSave()\">\n        Continuez\n      </ion-button>\n    </div>\n  </form>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profil/components/experience/experience.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profil/components/experience/experience.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div appScrollToTop>\n    <form class=\"d-block\" [formGroup]=\"form\" (ngSubmit)=\"onSave()\">\n        <div formArrayName=\"experiences\">\n            <ng-container *ngFor=\"let experience of form.get('experiences')['controls']; let i=index; let last=last;\"\n                [formGroupName]=\"i\">\n                <hr class=\"border-bottom\" *ngIf=\"i>0\">\n                <div class=\"w-100\">\n                    <ion-item class=\"custom-input\">\n                        <ion-label position=\"floating\">Emploi occupé <span class=\"required\">*</span></ion-label>\n                        <ion-input type=\"text\" formControlName=\"job\"></ion-input>\n                    </ion-item>\n                    <small class=\"text-error\"\n                        *ngIf=\"form.get('experiences')['controls'][i].get('job').invalid &&\n                        form.get('experiences')['controls'][i].get('job').errors.required && (form.get('experiences')['controls'][i].get('job').dirty || form.get('experiences')['controls'][i].get('job').touched) \">\n                        Champ obligatoire\n                    </small>\n                </div>\n\n                <div class=\"w-100\">\n                    <ion-item class=\"custom-select\">\n                        <ion-label position=\"floating\">Fonction <span class=\"required\">*</span></ion-label>\n                        <ion-select class=\"w-100\" ok-text=\"Ok\" cancel-text=\"Annuler\" placeholder=\"Sélectionner\"\n                            formControlName=\"function\">\n                            <ion-select-option *ngFor=\"let item of globalService.functions\" [value]=\"item._id\">\n                                {{item.name}}\n                            </ion-select-option>\n                        </ion-select>\n                    </ion-item>\n                    <small class=\"text-error\"\n                        *ngIf=\"form.get('experiences')['controls'][i].get('function').invalid && (form.get('experiences')['controls'][i].get('function').dirty || form.get('experiences')['controls'][i].get('function').touched) \">\n                        Champ obligatoire\n                    </small>\n                </div>\n\n                <div fxLayout=\"row\" fxLayoutAlign=\"space-between\" fxLayoutGap=\"20px\">\n                    <div fxLayout=\"column\" fxFlex.xs=\"45%\">\n                        <div class=\"w-100\">\n                            <ion-item class=\"custom-datetime\">\n                                <ion-label position=\"floating\">Date debut <span class=\"required\">*</span></ion-label>\n                                <ion-datetime placeholder=\"De\" formControlName=\"startedDate\">\n                                </ion-datetime>\n                            </ion-item>\n                            <small class=\"text-error\"\n                                *ngIf=\"form.get('experiences')['controls'][i].get('startedDate').invalid && (form.get('experiences')['controls'][i].get('startedDate').dirty || form.get('experiences')['controls'][i].get('startedDate').touched) \">\n                                Champ obligatoire\n                            </small>\n                        </div>\n                    </div>\n                    <div fxLayout=\"column\" fxFlex.xs=\"45%\">\n\n                        <div class=\"w-100\">\n                             \n                            <ion-item class=\"custom-datetime\" *ngIf=\"inWork[i]\">\n                                <ion-label position=\"floating\">Date fin</ion-label>\n                                <ion-datetime placeholder=\"À\" formControlName=\"endDate\"></ion-datetime>\n                            </ion-item> \n                             <ion-item class=\"custom-static-input\" *ngIf=\"!inWork[i]\">\n                                <ion-label position=\"floating\">Date fin</ion-label>\n                                <ion-input value=\"Aujourd’hui\" readonly></ion-input>\n                            </ion-item>\n                        </div>\n                    </div>\n                </div>\n\n                <small class=\"text-error\" *ngIf=\"\n                form.get('experiences')['controls'][i].get('startedDate').touched && \n                form.get('experiences')['controls'][i].get('endDate').touched &&\n                form.get('experiences')['controls'][i].hasError('dateError')\">\n                    Date fin doit être supérieur de la date debut\n                </small>\n\n                <div>\n                    <ion-item class=\"custom-checkbox\" lines=\"none\">\n                        <ion-label class=\"ml-1\">J’occupe actuellement ce poste</ion-label>\n                        <ion-checkbox class=\"ion-no-margin\" color=\"primary\" slot=\"start\"\n                          [checked]=\"!inWork[i]\" (ionChange)=\"inWorkChange(i, $event)\">\n                        </ion-checkbox>\n                    </ion-item>\n                </div>\n\n                <!-- <small class=\"text-error\"\n                    *ngIf=\"form.get('experiences')['controls'][i].get('endDate').invalid || inWork\">\n                    Veuillez préciser si vous étes en cours de cette experience ou bien de mettre une date limite.\n                </small> -->\n\n                <div class=\"w-100\">\n                    <ion-item class=\"custom-input\">\n                        <ion-label position=\"floating\">Entreprise <span class=\"required\">*</span></ion-label>\n                        <ion-input type=\"text\" formControlName=\"company\"></ion-input>\n                    </ion-item>\n                    <small class=\"text-error\"\n                        *ngIf=\"form.get('experiences')['controls'][i].get('company').invalid && (form.get('experiences')['controls'][i].get('company').dirty || form.get('experiences')['controls'][i].get('company').touched) \">\n                        Champ obligatoire\n                    </small>\n                </div>\n\n                <div class=\"w-100\">\n                    <ion-item class=\"custom-select\">\n                        <ion-label position=\"floating\">Secteur d’activité <span class=\"required\">*</span></ion-label>\n                        <ion-select class=\"w-100\" ok-text=\"Ok\" cancel-text=\"Annuler\" placeholder=\"Sélectionner\"\n                            formControlName=\"activitySector\">\n                            <ion-select-option *ngFor=\"let item of globalService.activitySectors\" [value]=\"item._id\">\n                                {{item.name}}\n                            </ion-select-option>\n                        </ion-select>\n                    </ion-item>\n                    <small class=\"text-error\"\n                        *ngIf=\"form.get('experiences')['controls'][i].get('activitySector').invalid && (form.get('experiences')['controls'][i].get('activitySector').dirty || form.get('experiences')['controls'][i].get('activitySector').touched) \">\n                        Champ obligatoire\n                    </small>\n                </div>\n\n                <div class=\"w-100\">\n                    <ion-item class=\"custom-input\">\n                        <ion-label position=\"floating\">Lieu <span class=\"required\">*</span></ion-label>\n                        <ion-input type=\"text\" formControlName=\"location\"></ion-input>\n                    </ion-item>\n                    <small class=\"text-error\"\n                        *ngIf=\"form.get('experiences')['controls'][i].get('location').invalid && (form.get('experiences')['controls'][i].get('location').dirty || form.get('experiences')['controls'][i].get('location').touched) \">\n                        Champ obligatoire\n                    </small>\n                </div>\n\n                <div class=\"text-right mt-1\">\n                    <ion-button fill=\"outline\" class=\"btn-outline-danger ml-30\" color=\"danger\"\n                        *ngIf=\"form.controls['experiences']['controls'].length > 1\"\n                        (click)=\"removeField(i, 'experiences')\">\n                        Supprimer\n                    </ion-button>\n                </div>\n            </ng-container>\n            <div class=\"text-left mt-1\">\n                <ion-button fill=\"outline\" class=\"btn-outline\" color=\"primary\" (click)=\"addField('experiences')\"\n                    [disabled]=\"!form.controls['experiences'].valid\">\n                    <ion-icon slot=\"start\" name=\"add\"></ion-icon>\n                    Ajouter une expérience\n                </ion-button>\n            </div>\n\n        </div>\n\n        <ion-item class=\"custom-select w-100 mt-1\">\n            <ion-label position=\"floating\">Niveau d'études le plus élevé <span class=\"required\">*</span></ion-label>\n            <ion-select class=\"w-100\" ok-text=\"Ok\" cancel-text=\"Annuler\" placeholder=\"Sélectionner\"\n                formControlName=\"levelOfStudies\">\n                <ion-select-option *ngFor=\"let item of globalService.levelOfStudies\" [value]=\"item._id\">\n                    {{item.name}}</ion-select-option>\n            </ion-select>\n            <small class=\"text-error\"\n                *ngIf=\"form.get('levelOfStudies').invalid && (form.get('levelOfStudies').dirty || form.get('levelOfStudies').touched) \">\n                Champ obligatoire\n            </small>\n        </ion-item>\n\n        <div formArrayName=\"trainings\">\n\n            <ng-container *ngFor=\"let training of form.get('trainings')['controls']; let i=index; let last=last;\"\n                [formGroupName]=\"i\">\n\n                <div class=\"w-100\">\n                    <ion-item class=\"custom-input\">\n                        <ion-label position=\"floating\">Intitulé de la formation <span class=\"required\">*</span>\n                        </ion-label>\n                        <ion-input type=\"text\" formControlName=\"name\"></ion-input>\n                    </ion-item>\n                    <small class=\"text-error\"\n                        *ngIf=\"form.get('trainings')['controls'][i].get('name').invalid && (form.get('trainings')['controls'][i].get('name').dirty || form.get('trainings')['controls'][i].get('name').touched) \">\n                        Champ obligatoire\n                    </small>\n                </div>\n\n                <ion-item class=\"custom-select w-100\">\n                    <ion-label position=\"floating\">Niveau d'études <span class=\"required\">*</span></ion-label>\n                    <ion-select class=\"w-100\" ok-text=\"Ok\" cancel-text=\"Annuler\" placeholder=\"Sélectionner\"\n                        formControlName=\"studyLevel\">\n                        <ion-select-option *ngFor=\"let item of globalService.levelOfStudies\" [value]=\"item._id\">\n                            {{item.name}}</ion-select-option>\n                    </ion-select>\n                    <small class=\"text-error\"\n                        *ngIf=\"form.get('trainings')['controls'][i].get('studyLevel').invalid && (form.get('trainings')['controls'][i].get('studyLevel').dirty || form.get('trainings')['controls'][i].get('studyLevel').touched) \">\n                        Champ obligatoire\n                    </small>\n                </ion-item>\n\n\n                <ion-item class=\"custom-select w-100\">\n                    <ion-label position=\"floating\">Type de formation <span class=\"required\">*</span></ion-label>\n                    <ion-select class=\"w-100\" ok-text=\"Ok\" cancel-text=\"Annuler\" placeholder=\"Sélectionner\"\n                        formControlName=\"typeOfTraining\">\n                        <ion-select-option *ngFor=\"let item of globalService.typeOfTrainings\" [value]=\"item._id\">\n                            {{item.name}}</ion-select-option>\n                    </ion-select>\n                    <small class=\"text-error\"\n                        *ngIf=\"form.get('trainings')['controls'][i].get('typeOfTraining').invalid && (form.get('trainings')['controls'][i].get('typeOfTraining').dirty || form.get('trainings')['controls'][i].get('typeOfTraining').touched) \">\n                        Champ obligatoire\n                    </small>\n                </ion-item>\n\n                <div class=\"w-100\">\n                    <ion-item class=\"custom-input\">\n                        <ion-label position=\"floating\">École <span class=\"required\">*</span></ion-label>\n                        <ion-input type=\"text\" formControlName=\"school\"></ion-input>\n                    </ion-item>\n                    <small class=\"text-error\"\n                        *ngIf=\"form.get('trainings')['controls'][i].get('school').invalid && (form.get('trainings')['controls'][i].get('school').dirty || form.get('trainings')['controls'][i].get('school').touched) \">\n                        Champ obligatoire\n                    </small>\n                </div>\n\n                <div fxLayout=\"row\" fxLayoutAlign=\"space-between\" fxLayoutGap=\"20px\">\n                    <div fxLayout=\"column\" fxFlex.xs=\"45%\">\n                        <ion-item class=\"custom-datetime w-100\">\n                            <ion-label position=\"floating\">Année d’obtention <span class=\"required\">*</span></ion-label>\n                            <ion-datetime placeholder=\"De\" displayFormat=\"YYYY\" pickerFormat=\"YYYY\"\n                                formControlName=\"yearOfGraduation\">\n                            </ion-datetime>\n                        </ion-item>\n                        <small class=\"text-error\"\n                            *ngIf=\"form.get('trainings')['controls'][i].get('yearOfGraduation').invalid && (form.get('trainings')['controls'][i].get('yearOfGraduation').dirty || form.get('trainings')['controls'][i].get('yearOfGraduation').touched) \">\n                            Champ obligatoire\n                        </small>\n                    </div>\n\n                    <div fxLayout=\"column\" fxFlex.xs=\"45%\">\n                        <ion-item class=\"custom-input\">\n                            <ion-label position=\"floating\">Lieu <span class=\"required\">*</span></ion-label>\n                            <ion-input type=\"text\" formControlName=\"location\"></ion-input>\n                        </ion-item>\n                        <small class=\"text-error\"\n                            *ngIf=\"form.get('trainings')['controls'][i].get('location').invalid && (form.get('trainings')['controls'][i].get('location').dirty || form.get('trainings')['controls'][i].get('location').touched) \">\n                            Champ obligatoire\n                        </small>\n                    </div>\n\n                </div>\n\n                <div class=\"text-right mt-1\">\n                    <ion-button fill=\"outline\" class=\"btn-outline-danger ml-30\" color=\"danger\"\n                        *ngIf=\"form.controls['trainings']['controls'].length > 1\" (click)=\"removeField(i, 'trainings')\">\n                        Supprimer\n                    </ion-button>\n                </div>\n            </ng-container>\n            <div class=\"text-left mt-1\">\n                <ion-button fill=\"outline\" class=\"btn-outline\" color=\"primary\"\n                    [disabled]=\"!form.controls.trainings || !form.controls.trainings.valid\"\n                    (click)=\"addField('trainings')\">\n                    <ion-icon slot=\"start\" name=\"add\"></ion-icon>\n                    Ajouter une formation\n                </ion-button>\n            </div>\n        </div>\n\n        <div class=\"mt-2 mb-3 text-center\">\n            <ion-button type=\"submit\" class=\"w-80\" color=\"primary\">\n                Continuez\n            </ion-button>\n        </div>\n    </form>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profil/components/final-state/final-state.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profil/components/final-state/final-state.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"d-block\" appScrollToTop>\n\n    <div class=\"text-center mt-2\" *ngIf=\"(candidateService.percentage | async | number: '1.0-0')\">\n        <p>\n            Votre profil est complet à  {{ candidateService.percentage | async | number: '1.0-0' }} %.<br>\n            Vous pouvez désormais swiper et rencontrer des recruteurs! \n        </p>\n    </div>\n\n    <div class=\"text-center mt-1\">\n        <p class=\"px-0\">Complétez votre profil pour mieux matcher avec les recruteurs.</p>\n        <p class=\"px-0\">Avec jobwinwin trouver le job qui vous correspond ! </p>\n    </div>\n\n    <!-- <div class=\"progressbar mt-3\">\n        <div class=\"porcent\" [ngStyle]=\"{'width': (candidateService.percentage | async | number: '1.0-0') + '%'}\">\n            {{ candidateService.percentage | async | number: '1.0-0' }} %\n        </div>\n    </div> -->\n\n   \n\n    <div class=\"mt-3 text-center\">\n        <ion-button class=\"w-80\" color=\"primary\" (click)=\"previewProfil()\">\n            Prévisualisez votre profil\n        </ion-button>\n    </div>\n\n    <div class=\"mt-1 text-center\">\n        <ion-button class=\"btn-win w-80\" color=\"primary\" (click)=\"onClear()\">\n            <img src=\"./assets/icon/win-btn.svg\" alt=\"\">\n        </ion-button>\n    </div>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profil/components/info-plus/info-plus.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profil/components/info-plus/info-plus.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div appScrollToTop>\n    <form class=\"d-block\" [formGroup]=\"form\" (ngSubmit)=\"onSave()\">\n        <div formGroupName=\"languages\">\n            <div class=\"mt-1\" fxLayout=\"row\" fxLayoutAlign=\"space-between\" fxLayoutGap=\"20px\">\n    \n                <ion-item class=\"custom-select w-100\" fxLayout=\"column\" fxFlex.xs=\"45%\" tabindex=\"0\">\n                    <ion-label position=\"floating\">Langue</ion-label>\n                    <ion-select class=\"w-100\" ok-text=\"Ok\" cancel-text=\"Annuler\" placeholder=\"Sélectionner\"\n                        formControlName=\"language\">\n                        <ion-select-option *ngFor=\"let item of globalService.languages | languages:languagesList\"\n                            [value]=\"item._id\">\n                            {{item.name}}\n                        </ion-select-option>\n                    </ion-select>\n                </ion-item>\n    \n                <ion-item class=\"custom-select w-100\" fxLayout=\"column\" fxFlex.xs=\"45%\" tabindex=\"1\">\n                    <ion-label position=\"floating\">Niveau de langue</ion-label>\n                    <ion-select class=\"w-100\" ok-text=\"Ok\" cancel-text=\"Annuler\" placeholder=\"Sélectionner\"\n                        formControlName=\"languageLevel\">\n                        <ion-select-option *ngFor=\"let item of globalService.languagesLevels\" [value]=\"item._id\">\n                            {{item.name}}\n                        </ion-select-option>\n                    </ion-select>\n                </ion-item>\n    \n            </div>\n            <small class=\"text-error\" *ngIf=\"languagesList <= 0\">\n                Veuillez renseigner au moins une valeur et cliquer sur ajouter\n            </small> \n        </div>  \n    \n        <div class=\"mt-1 text-left\">\n            <ion-button fill=\"outline\" class=\"btn-outline w-40\" color=\"primary\" tabindex=\"3\"\n                [disabled]=\"!form.get('languages').get('language').value || !form.get('languages').get('languageLevel').value\"\n                (click)=\"addLanguage()\">\n                Ajouter\n                <ion-icon slot=\"start\" name=\"add\"></ion-icon>\n            </ion-button>\n        </div>\n        <div class=\"mb-1 mt-1\">\n            <ul class=\"customList\">\n                <li *ngFor=\"let item of languagesList;let i =index;\">\n                    <span class=\"text-primary text-left\">{{ item.language.name }} : {{ item.languageLevel.name }}</span>\n                    <mat-icon class=\"cursor-pointer btn-round vertical-align ml-1\" (click)=\"deleteLanguage(i)\">\n                        close</mat-icon><br>\n                </li>\n            </ul>\n        </div>\n    \n        <div class=\"mb-1\" fxLayout=\"row\" fxLayoutAlign=\"space-between\" fxLayoutGap=\"20px\"\n            formGroupName=\"programingLanguages\">\n            <div fxLayout=\"column\" fxFlex.xs=\"45%\">\n                <app-multi-select label=\"Langages informatiques\" collection=\"programmingLanguages\"\n                    formControlName=\"language\"></app-multi-select>\n                <small class=\"text-error\" *ngIf=\"form.get('programingLanguages.language').value?.length <= 0\">\n                    Champ obligatoire\n                </small>\n            </div>\n            <div fxLayout=\"column\" fxFlex.xs=\"45%\">\n                <app-multi-select label=\"Logiciels informatiques\" collection=\"logiciels\" formControlName=\"logiciel\">\n                </app-multi-select>\n                <small class=\"text-error\" *ngIf=\"form.get('programingLanguages.logiciel').value?.length <= 0\">\n                    Champ obligatoire\n                </small>\n            </div>\n        </div>\n    \n        <app-file-uploader [data]=\"{ file: candidateService.candidate['cv'], type: 'simple-cv' }\"\n            (fileChanges)=\"fileChanges($event)\">\n        </app-file-uploader>\n    \n        <div class=\"custom-input-icon\">\n            <ion-icon class=\"align-middle\" src=\"./assets/icon/website-input.svg\"></ion-icon>\n            <mat-form-field class=\"ml-1 w-90\">\n                <mat-label>Site internet</mat-label>\n                <input matInput placeholder=\"\" formControlName=\"webSite\">\n                <span matPrefix>www.</span>\n            </mat-form-field>\n        </div>\n        \n        <div class=\"custom-input-icon\">\n            <ion-icon class=\"align-middle\" src=\"./assets/icon/blogger-input.svg\"></ion-icon>\n            <mat-form-field class=\"ml-1 w-90\">\n                <mat-label>Blog</mat-label>\n                <input matInput placeholder=\"\" formControlName=\"blog\">\n                <span matPrefix>www.</span>\n            </mat-form-field>\n        </div>\n\n        <div class=\"custom-input-icon\">\n            <ion-icon class=\"align-middle\" src=\"./assets/icon/linkedin-input.svg\"></ion-icon>\n            <mat-form-field class=\"ml-1 w-90\">\n                <mat-label>Profil linkedin</mat-label>\n                <input matInput placeholder=\"Insérer le lien de votre profil Linkedin\" formControlName=\"linkedin\">\n            </mat-form-field>\n        </div>\n\n        <div class=\"custom-input-icon\">\n            <ion-icon class=\"align-middle\" src=\"./assets/icon/instagram-input.svg\"></ion-icon>\n            <mat-form-field class=\"ml-1 w-90\">\n                <mat-label>Instagram</mat-label>\n                <input matInput placeholder=\"\" formControlName=\"instagram\">\n                <span matPrefix>@</span>\n            </mat-form-field>\n        </div>\n\n        <div class=\"custom-input-icon\">\n            <ion-icon class=\"align-middle\" src=\"./assets/icon/twitter-input.svg\"></ion-icon>\n            <mat-form-field class=\"ml-1 w-90\">\n                <mat-label>Twitter</mat-label>\n                <input matInput placeholder=\"\" formControlName=\"twitter\">\n                <span matPrefix>@</span>\n            </mat-form-field>\n        </div>\n\n        <div class=\"custom-input-icon\">\n            <ion-icon class=\"align-middle\" src=\"./assets/icon/facebook-input.svg\"></ion-icon>\n            <mat-form-field class=\"ml-1 w-90\">\n                <mat-label>Facebook</mat-label>\n                <input matInput placeholder=\"\" formControlName=\"facebook\">\n            </mat-form-field>\n        </div>\n    \n        <div class=\"mt-2 mb-3 text-center\">\n            <ion-button type=\"submit\" class=\"w-80\" color=\"primary\" [disabled]=\"languagesList.length <= 0\n            || form.get('programingLanguages.logiciel').value?.length <= 0\n            || form.get('programingLanguages.language').value?.length <= 0 || !form.valid\">\n            \n                Continuez\n            </ion-button>\n        </div>\n    \n    </form>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profil/components/job-info/job-info.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profil/components/job-info/job-info.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div appScrollToTop>\n    <form class=\"d-block\" [formGroup]=\"form\" (ngSubmit)=\"onSave()\">\n\n        <div class=\"w-100\">\n            <ion-item class=\"custom-input\">\n                <ion-label position=\"floating\">Poste souhaité <span class=\"required\">*</span></ion-label>\n                <ion-input type=\"text\" formControlName=\"searchedPost\"></ion-input>\n            </ion-item>\n            <small class=\"text-error\"\n                *ngIf=\"form.get('searchedPost').invalid && (form.get('searchedPost').dirty || form.get('searchedPost').touched) \">\n                Champ obligatoire\n            </small>\n        </div>\n\n        <!-- <div class=\"mt-1\">\n            <ng-multiselect-dropdown label=\"aaaaa\" [placeholder]=\"'Intitulés d\\'usage'\" [settings]=\"dropdownSettings\"\n                [data]=\"globalService.usageTitles\" formControlName=\"usageTitles\"\n                (onSelect)=\"onItemSelect($event)\" (onDeSelect)=\"OnItemDeSelect($event)\">\n            </ng-multiselect-dropdown>\n        </div> -->\n\n        <div>\n            <app-multi-select label=\"Intitulés d'usage\" collection=\"usageTitles\" formControlName=\"usageTitles\">\n            </app-multi-select>\n            <small class=\"text-error\" *ngIf=\"!form.get('usageTitles').value?.length\">\n                Champ obligatoire\n            </small>\n        </div>\n\n        <div fxLayout=\"row\" fxLayoutAlign=\"space-between\" fxLayoutGap=\"20px\">\n            <div class=\"w-100\" fxLayout=\"column\" fxFlex.xs=\"45%\">\n                <app-multi-select label=\"Type de contrat\" collection=\"contracts\" formControlName=\"contracts\">\n                </app-multi-select>\n                <small class=\"text-error\" *ngIf=\"!form.get('contracts').value?.length\">\n                    Veuillez choisir au moins un type de contrat.\n                </small>\n            </div>\n            <div class=\"w-100\" fxLayout=\"column\" fxFlex.xs=\"45%\">\n                <ion-item class=\"custom-select\">\n                    <ion-label position=\"floating\">Type de Poste <span class=\"required\">*</span></ion-label>\n                    <ion-select class=\"w-100\" ok-text=\"Ok\" cancel-text=\"Annuler\" placeholder=\"Sélectionner\"\n                        formControlName=\"jobType\">\n                        <ion-select-option *ngFor=\"let item of globalService.jobTypes\" [value]=\"item._id\">\n                            {{item.name}}</ion-select-option>\n                    </ion-select>\n                </ion-item>\n                <small class=\"text-error\"\n                    *ngIf=\"form.get('jobType').invalid && (form.get('jobType').dirty || form.get('jobType').touched) \">\n                    Champ obligatoire\n                </small>\n            </div>\n        </div>\n\n        <div class=\"w-100\">\n            <app-multi-select label=\"Fonction\" collection=\"functions\" formControlName=\"functions\"></app-multi-select>\n            <small class=\"text-error\" *ngIf=\"!form.get('functions').value?.length\">\n                Veuillez choisir au moins une fonction.\n            </small>\n        </div>\n\n        <div class=\"w-100\">\n            <app-multi-select label=\"Secteur d’activité \" collection=\"activitySectors\" formControlName=\"activitySector\">\n            </app-multi-select>\n            <small class=\"text-error\" *ngIf=\"!form.get('activitySector').value?.length\">\n                Veuillez choisir au moins un secteur d’activité.\n            </small>\n        </div>\n\n        <div class=\"w-100\">\n            <ion-item class=\"custom-select w-100 \">\n                <ion-label position=\"floating\">Mode de travail <span class=\"required\">*</span></ion-label>\n                <ion-select class=\"w-100\" ok-text=\"Ok\" cancel-text=\"Annuler\" placeholder=\"Sélectionner\"\n                    formControlName=\"jobMode\">\n                    <ion-select-option *ngFor=\"let item of globalService.jobModes\" [value]=\"item._id\">\n                        {{item.name}}</ion-select-option>\n                </ion-select>\n            </ion-item>\n            <small class=\"text-error\"\n                *ngIf=\"form.get('jobMode').invalid && (form.get('jobMode').dirty || form.get('jobMode').touched) \">\n                Champ obligatoire\n            </small>\n        </div>\n\n        <div class=\"w-100\">\n            <app-multi-select label=\"Lieu\" collection=\"locations\" formControlName=\"locations\"></app-multi-select>\n            <small class=\"text-error\" *ngIf=\"!form.get('locations').value?.length\">\n                Veuillez choisir au moins une ville.\n            </small>\n        </div>\n\n        <h4 class=\"pt-2\">Prétentions salariales (Dhs)</h4>\n        <div fxLayout=\"row\" fxLayoutAlign=\"space-between\" fxLayoutGap=\"20px\">\n            <div class=\"w-100\" fxLayout=\"column\" fxFlex.xs=\"45%\">\n                <ion-item class=\"custom-input\">\n                    <ion-label position=\"floating\">À partir de <span class=\"required\">*</span></ion-label>\n                    <ion-input type=\"number\" formControlName=\"supposedSalaryMin\"></ion-input>\n                </ion-item>\n                <small class=\"text-error\"\n                    *ngIf=\"form.get('supposedSalaryMin').invalid && (form.get('supposedSalaryMin').dirty || form.get('supposedSalaryMin').touched) \">\n                    Champ obligatoire\n                </small>\n            </div>\n\n            <div class=\"w-100\" fxLayout=\"column\" fxFlex.xs=\"45%\">\n                <ion-item class=\"custom-input\">\n                    <ion-label position=\"floating\">Jusqu'à <span class=\"required\">*</span></ion-label>\n                    <ion-input type=\"number\" formControlName=\"supposedSalaryMax\"></ion-input>\n                </ion-item>\n                <small class=\"text-error\"\n                    *ngIf=\"form.get('supposedSalaryMax').invalid && (form.get('supposedSalaryMax').dirty || form.get('supposedSalaryMax').touched) \">\n                    Champ obligatoire\n                </small>\n            </div>\n\n        </div>\n        <small class=\"text-error\" *ngIf=\"form.get('supposedSalaryMax').touched && !form.get('supposedSalaryMax').hasError('required') \n        && form.hasError('salaryErreur')\">\n            Le salaire maximum doit être supérieur au salaire minimum\n        </small>\n\n        <div class=\"mt-2 mb-3 text-center\">\n            <ion-button type=\"submit\" class=\"w-80\" color=\"primary\" [disabled]=\"!form.valid\n            || form.get('usageTitles').value?.length <= 0\n            || form.get('contracts').value?.length <= 0\n            || form.get('functions').value?.length <= 0\n            || form.get('activitySector').value?.length <= 0\n            || form.get('locations').value?.length <= 0\n            \">\n                Continuez\n            </ion-button>\n        </div>\n    </form>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profil/components/main/main.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profil/components/main/main.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"steps-header ion-no-border\" mode=\"md\">\n    <ion-toolbar class=\"steps-toolbar\">\n        <ion-buttons slot=\"start\">\n            <ion-button class=\"roundbutton p-0\" (click)=\"back()\">\n                <ion-icon src=\"./assets/icon/arrow-back.svg\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <ion-buttons slot=\"secondary\">\n            <ion-button (click)=\"desconnect()\">\n                <ion-icon src=\"./assets/icon/deconnexion-white.svg\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <ion-title class=\"page-title\">\n            <h1 class=\"title mb-0\">{{pageTitle}}</h1>\n        </ion-title>\n    </ion-toolbar>\n    <div class=\"progressbar w-100\">\n        <div class=\"porcent\" [ngStyle]=\"{'width': (candidateService.percentage | async | number: '1.0-0') + '%'}\">\n            <div class=\"counter text-center\">\n                {{ candidateService.percentage | async | number: '1.0-0' }} %\n             </div>\n        </div>\n    </div>\n</ion-header>\n<ion-content [fullscreen]=\"true\" class=\"forms\">\n    <section class=\"steps-content mt-1\">\n        <div class=\"page-content\">\n           <router-outlet></router-outlet>\n        </div>\n    </section>\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profil/components/personal-info/personal-info.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profil/components/personal-info/personal-info.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div appScrollToTop>\n  <form class=\"d-block\" [formGroup]=\"form\" (ngSubmit)=\"onSave()\">\n\n    <div fxLayout=\"row\" fxLayoutAlign=\"space-between\" fxLayoutGap=\"20px\">\n      <div class=\"w-100\" fxLayout=\"column\" fxFlex.xs=\"100%\">\n        <ion-item class=\"custom-input\">\n          <ion-label position=\"floating\">Nom <span class=\"required\">*</span></ion-label>\n          <ion-input type=\"text\" formControlName=\"lastName\"></ion-input>\n        </ion-item>\n        <small class=\"text-error\"\n          *ngIf=\"form.get('lastName').invalid && (form.get('lastName').dirty || form.get('lastName').touched) \">\n          Champ obligatoire\n        </small>\n      </div>\n\n      <div class=\"w-100\" fxLayout=\"column\" fxFlex.xs=\"45%\">\n        <ion-item class=\"custom-input\">\n          <ion-label position=\"floating\">Prénom <span class=\"required\">*</span></ion-label>\n          <ion-input type=\"text\" formControlName=\"firstName\"></ion-input>\n        </ion-item>\n        <small class=\"text-error\"\n          *ngIf=\"form.get('firstName').invalid && (form.get('firstName').dirty || form.get('firstName').touched) \">\n          Champ obligatoire\n        </small>\n      </div>\n    </div>\n\n    <div fxLayout=\"row\" fxLayoutAlign=\"space-between\" fxLayoutGap=\"20px\">\n      <div class=\"w-100\" fxLayout=\"column\" fxFlex.xs=\"45%\">\n        <ion-item class=\"custom-datetime\">\n          <ion-label position=\"floating\">Date Naissance <span class=\"required\">*</span></ion-label>\n          <ion-datetime placeholder=\"Choissez votre date\" formControlName=\"birthday\">\n          </ion-datetime>\n        </ion-item>\n        <small class=\"text-error\"\n          *ngIf=\"form.get('birthday').invalid && (form.get('birthday').dirty || form.get('birthday').touched) \">\n          Champ obligatoire\n        </small>\n      </div>\n\n      <div class=\"w-100\" fxLayout=\"column\" fxFlex.xs=\"45%\">\n        <ion-item class=\"custom-select\">\n          <ion-label position=\"floating\">Sexe <span class=\"required\">*</span></ion-label>\n          <ion-select class=\"w-100\" ok-text=\"Ok\" cancel-text=\"Annuler\" placeholder=\"Sélectionner\"\n            formControlName=\"gender\">\n            <ion-select-option value=\"masculin\">Homme</ion-select-option>\n            <ion-select-option value=\"feminin\">Femme</ion-select-option>\n          </ion-select>\n        </ion-item>\n        <small class=\"text-error\"\n          *ngIf=\"form.get('gender').invalid && (form.get('gender').dirty || form.get('gender').touched) \">\n          Champ obligatoire\n        </small>\n      </div>\n    </div>\n\n\n\n    <div fxLayout=\"row\" fxLayoutAlign=\"space-between\" fxLayoutGap=\"20px\">\n      <div class=\"w-100\" fxLayout=\"column\" fxFlex.xs=\"45%\">\n        <div class=\"w-100 custom-input\">\n          <ion-item class=\"custom-input\">\n            <ion-label position=\"floating\">Téléphone (+212) <span class=\"required\">*</span></ion-label>\n            <ion-input type=\"tel\" formControlName=\"phoneNumber\"></ion-input>\n          </ion-item>\n        </div>\n        <small class=\"text-error\"\n          *ngIf=\"form.get('phoneNumber').invalid && (form.get('phoneNumber').dirty || form.get('phoneNumber').touched) \">\n          Champ obligatoire\n        </small>\n      </div>\n\n      <div class=\"w-100\" fxLayout=\"column\" fxFlex.xs=\"45%\">\n        <ion-item class=\"custom-select w-100\">\n          <ion-label position=\"floating\">Disponiblité <span class=\"required\">*</span></ion-label>\n          <ion-select class=\"w-100\" ok-text=\"Ok\" cancel-text=\"Annuler\" placeholder=\"Sélectionner\"\n            formControlName=\"availability\">\n            <ion-select-option *ngFor=\"let item of globalService.availabilities\" [value]=\"item._id\">\n              {{item.name}}\n            </ion-select-option>\n          </ion-select>\n        </ion-item>\n        <small class=\"text-error\"\n          *ngIf=\"form.get('availability').invalid && (form.get('availability').dirty || form.get('availability').touched) \">\n          Champ obligatoire\n        </small>\n      </div>\n    </div>\n\n    <div fxLayout=\"row\" fxLayoutAlign=\"space-between\">\n      <div class=\"w-100\" fxLayout=\"column\" fxFlex.xs=\"100%\">\n        <ion-item class=\"custom-select w-100\">\n          <ion-label position=\"floating\">Nombre d’années d’experience <span class=\"required\">*</span></ion-label>\n          <ion-select class=\"w-100\" ok-text=\"Ok\" cancel-text=\"Annuler\" placeholder=\"Sélectionner\"\n            formControlName=\"experienceYears\">\n            <ion-select-option *ngFor=\"let item of globalService.experiences\" [value]=\"item._id\">\n              {{item.name}}\n            </ion-select-option>\n          </ion-select>\n        </ion-item>\n        <small class=\"text-error\"\n          *ngIf=\"form.get('experienceYears').invalid && (form.get('experienceYears').dirty || form.get('experienceYears').touched) \">\n          Champ obligatoire\n        </small>\n      </div>\n    </div>\n\n    <ion-item class=\"custom-input w-100\">\n      <ion-label position=\"floating\">Poste actuel <span class=\"required\">*</span></ion-label>\n      <ion-input type=\"text\" formControlName=\"currentJob\"></ion-input>\n    </ion-item>\n    <small class=\"text-error\"\n      *ngIf=\"form.get('currentJob').invalid && (form.get('currentJob').dirty || form.get('currentJob').touched) \">\n      Champ obligatoire\n    </small>\n\n\n    <ion-item class=\"custom-input w-100\">\n      <ion-label position=\"floating\">Préciser salaire actuel (Dhs) <span class=\"required\">*</span></ion-label>\n      <ion-input type=\"number\" formControlName=\"currentSalary\"></ion-input>\n    </ion-item>\n    <small class=\"text-error\"\n      *ngIf=\"form.get('currentSalary').invalid && (form.get('currentSalary').dirty || form.get('currentSalary').touched) \">\n      Champ obligatoire\n    </small>\n\n\n    <div fxLayout=\"row\" fxLayoutAlign=\"space-between\" fxLayoutGap=\"20px\">\n      <div class=\"w-100\" fxLayout=\"column\" fxFlex.xs=\"45%\">\n        <ion-item class=\"custom-select w-100\">\n          <ion-label position=\"floating\">Niv. managérial <span class=\"required\">*</span></ion-label>\n          <ion-select class=\"w-100\" ok-text=\"Ok\" cancel-text=\"Annuler\" placeholder=\"Sélectionner\"\n            formControlName=\"managerialLevel\">\n            <ion-select-option *ngFor=\"let item of globalService.managerialLevels\" [value]=\"item._id\">\n              {{item.name}}\n            </ion-select-option>\n          </ion-select>\n        </ion-item>\n        <small class=\"text-error\"\n          *ngIf=\"form.get('managerialLevel').invalid && (form.get('managerialLevel').dirty || form.get('managerialLevel').touched) \">\n          Champ obligatoire\n        </small>\n      </div>\n\n      <div class=\"w-100\" fxLayout=\"column\" fxFlex.xs=\"45%\">\n        <ion-item class=\"custom-select w-100\">\n          <ion-label position=\"floating\">Effectif Géré <span class=\"required\">*</span></ion-label>\n          <ion-select class=\"w-100\" ok-text=\"Ok\" cancel-text=\"Annuler\" placeholder=\"Sélectionner\"\n            formControlName=\"effective\">\n            <ion-select-option *ngFor=\"let item of globalService.effectives\" [value]=\"item._id\">\n              {{item.name}}\n            </ion-select-option>\n          </ion-select>\n        </ion-item>\n        <small class=\"text-error\"\n          *ngIf=\"form.get('effective').invalid && (form.get('effective').dirty || form.get('effective').touched) \">\n          Champ obligatoire\n        </small>\n      </div>\n    </div>\n\n    <div class=\"w-100 mt-1\">\n      <mat-form-field class=\"w-100\">\n        <mat-label>Objectif <span class=\"required\">*</span></mat-label>\n        <textarea matInput placeholder=\"Mission générale\" matTextareaAutosize matAutosizeMinRows=1 matAutosizeMaxRows=7\n          formControlName=\"goal\"></textarea>\n      </mat-form-field>\n      <small class=\"text-error\"\n        *ngIf=\"form.get('goal').invalid && (form.get('goal').dirty || form.get('goal').touched) \">\n        Champ obligatoire\n      </small>\n    </div>\n\n    <div class=\"mt-3 text-center\">\n      <ion-button type=\"submit\" class=\"w-80\" color=\"primary\" [disabled]=\"!form.valid\">\n        Continuez\n      </ion-button>\n    </div>\n\n  </form>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profil/components/preview-profil/preview-profil.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profil/components/preview-profil/preview-profil.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"file-dashboard\">\n    <ion-header class=\"ion-no-border py-2\" mode=\"md\">\n        <ion-toolbar>\n            <ion-buttons routerLink=\"/dashboard/profile/values\" routerDirection=\"root\" class=\"roundbutton\" slot=\"start\">\n                <ion-icon src=\"./assets/icon/arrow-back.svg\"></ion-icon>\n            </ion-buttons>\n            <ion-title class=\"text-center\">{{ authService.user.firstName }} {{ authService.user.lastName }}</ion-title>\n        </ion-toolbar>\n        <div class=\"d-block text-center\">\n            <img src=\"./assets/icon/space-title.svg\" alt=\"\">\n            <p class=\"short-desc mb-0\">\n                J’ai pu constater que nous avons fréquenté le même\n                établissement. Ce serait un plaisir de pouvoir évoquer ce sujet et d’autres autour d’une\n                activité.\n            </p>\n            <img src=\"./assets/icon/space-title.svg\" alt=\"\">\n            <div class=\"profil-files\">\n                <img src=\"./assets/img/female.svg\" alt=\"\" class=\"w-100\">\n            </div>\n        </div>\n    </ion-header>\n\n    <ion-slides class=\"files-slide\">\n        <ion-slide>\n            <div class=\"position-relative mt-1 mb-3\">\n                <button class=\"position-absolute arrow-right cursor-pointer bg-transparent\"><img\n                        src=\"./assets/icon/arrow-right.svg\" alt=\"\"></button>\n                <div class=\"custom-fields text-center\">\n                    <span>{{ candidateService.candidate.currentJob }}</span>\n                </div>\n\n                <div class=\"custom-fields text-center\">\n                    <div class=\"d-inline w-40 text-center mr-1 mt-2\">{{ candidateService.candidate.currentLocation }}</div>\n                    <div class=\"d-inline w-40 text-center mt-2\">{{ candidateService.candidate.experienceYears }} ans d’expérience</div>\n                </div>\n\n                <h3 class=\"objectif\">OBJECTIFS ACTUELS</h3>\n\n                <div class=\"custom-fields text-center mt-2\">\n                    <span>{{ candidateService.candidate.goal }} </span>\n                </div>\n                <div class=\"custom-fields text-center\">\n                    <div class=\"d-inline w-40 text-center mr-1 mt-2\">{{ candidateService.candidate.location }}</div>\n                    <div class=\"d-inline w-40 text-center\">{{ candidateService.candidate.supposedSalaryMax }} DH</div>\n                </div>\n            </div>\n        </ion-slide>\n\n        <ion-slide class=\"mb-3\">\n            <div class=\"position-relative mt-1 py-2\">\n                <button class=\"position-absolute arrow-left cursor-pointer bg-transparent\"><img\n                        src=\"./assets/icon/arrow-left.svg\" alt=\"\"></button>\n                <button class=\"position-absolute arrow-right cursor-pointer bg-transparent\"><img\n                        src=\"./assets/icon/arrow-right.svg\" alt=\"\"></button>\n\n                <h3 class=\"objectif\">CV- RÉSUMÉ</h3>\n\n                <div class=\"text-center mt-2\">\n                    <img class=\"w-100\" src=\"./assets/img/default-video.svg\" alt=\"Add Video\">\n                </div>\n\n                <div class=\"matching-card-details mt-2\" style=\"height: 50px;\">\n                    <h3 class=\"title\">\n                        <mat-icon>subject</mat-icon>\n                        <span>CV</span>\n                        <mat-icon class=\"float-right\">save_alt</mat-icon>\n                    </h3>\n                </div>\n\n                <div class=\"matching-card-details mt-2\">\n                    <h3 class=\"title\">\n                        <mat-icon>mediation</mat-icon>\n                        <span>EXPÉRIENCE</span>\n                    </h3>\n                    <span class=\"desc\">\n                        <ul class=\"list\">\n                            <li>Actuellement : Directrice Générale</li>\n                            <li>2005-2011 : Responsable de marketing</li>\n                            <li>2000-2005 : Responsable commerciale.</li>\n                        </ul>\n                    </span>\n                </div>\n\n                <div class=\"matching-card-details mt-2\">\n                    <h3 class=\"title\">\n                        <mat-icon>school</mat-icon>\n                        <span>FORMATION</span>\n                    </h3>\n                    <span class=\"desc\">\n                        <ul class=\"list\">\n                            <li *ngFor=\"let item of candidate.candidate.trainings\">{{ item.yearOfGraduation }} : {{ item.studyLevel }} en {{ item.typeOfTraining }}</li>\n                        </ul>\n                    </span>\n                </div>\n\n                <div class=\"matching-card-details mt-2\">\n                    <h3 class=\"title\">\n                        <mat-icon>g_translate</mat-icon>\n                        <span>LANGUE</span>\n                    </h3>\n                    <span class=\"desc\">\n                        <ul class=\"list\">\n                            <li *ngFor=\"let item of candidate.languages\">{{ item.language }} : {{ item.languageLevel }}</li>\n                        </ul>\n                    </span>\n                </div>\n\n            </div>\n        </ion-slide>\n\n        <ion-slide>\n            <div class=\"position-relative py-2 mt-1 mb-3\">\n                <div class=\"d-block text-center\">\n                    <h3 class=\"objectif\">MES COMPÉTENCES</h3>\n                </div>\n                <button class=\"position-absolute arrow-left cursor-pointer bg-transparent\"><img\n                    src=\"./assets/icon/arrow-left.svg\" alt=\"\"></button>\n\n                <div class=\"matching-card-details\">\n                    <div class=\"desc\">\n                        <ul class=\"list\">\n                            <li *ngFor=\"let item of candidate.skills\">\n                                {{item.softSkill}}\n                                <!-- <span class=\"float-right\">Expert</span> -->\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n\n                <h3 class=\"objectif\">MES VALEURS</h3>\n\n                <div class=\"matching-card-details mt-2\">\n                    <div class=\"desc\">\n                        <ul class=\"list\">\n                            <li *ngFor=\"let item of candidate.values\">{{ item.value }}</li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n        </ion-slide>\n    </ion-slides>\n\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profil/components/upload-video/upload-video.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profil/components/upload-video/upload-video.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div appScrollToTop>\n  <div class=\"text-center mt-2\">\n    <h1 class=\"title\">Présentez vous en vidéo <br> aux recruteurs ! </h1>\n  </div>\n  <app-file-uploader [data]=\"value\" (fileChanges)=\"fileChanges($event)\"></app-file-uploader>\n  <div class=\"mt-3 text-center\">\n    <ion-button class=\"w-80\" color=\"primary\" (click)=\"onSave()\">Continuez\n    </ion-button>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profil/components/values/values.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profil/components/values/values.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div appScrollToTop>\n    <form class=\"d-block\" [formGroup]=\"form\" (ngSubmit)=\"onSave()\">\n        <div class=\"text-center mt-2\">\n            <p> Vos softskills sont très importants pour les recruteurs.\n                Choisissez dans la liste les 5 softskills qui vous représentent le plus.\n            </p>\n        </div>\n        <app-multi-select label=\"Mes soft skills\" [limit]=\"5\" collection=\"softSkills\" formControlName=\"skills\">\n        </app-multi-select>\n        <div class=\"text-center mt-2\">\n            <p>En recrutement une valeur est parfois plus\n                décisive qu’une compétence.\n                Renforcer la qualité de votre profil en\n                séléctionnant dans la liste les 6 valeurs qui vous\n                correspondent</p>\n        </div>\n        <app-multi-select label=\"Mes valeurs\" [limit]=\"6\" collection=\"values\" formControlName=\"values\">\n        </app-multi-select>\n\n        <div class=\"mt-2 text-center\">\n            <ion-button type=\"submit\" class=\"w-80\" color=\"primary\"\n                [disabled]=\"form.get('values').value?.length < 6 ||  form.get('skills').value?.length < 5 ? true : false\">\n                Validez\n            </ion-button>\n        </div>\n    </form>\n</div>");

/***/ }),

/***/ "./src/app/pages/profil/components/add-profil/add-profil.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/pages/profil/components/add-profil/add-profil.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbC9jb21wb25lbnRzL2FkZC1wcm9maWwvYWRkLXByb2ZpbC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/profil/components/add-profil/add-profil.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/profil/components/add-profil/add-profil.component.ts ***!
  \****************************************************************************/
/*! exports provided: AddProfilComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProfilComponent", function() { return AddProfilComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_core_services_addapters_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/addapters/toast.service */ "./src/app/core/services/addapters/toast.service.ts");
/* harmony import */ var src_app_core_services_crud_file_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/crud/file.service */ "./src/app/core/services/crud/file.service.ts");
/* harmony import */ var src_app_core_services_crud_candidate_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/crud/candidate.service */ "./src/app/core/services/crud/candidate.service.ts");
/* harmony import */ var src_app_core_services_addapters_trans_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/addapters/trans.service */ "./src/app/core/services/addapters/trans.service.ts");
/* harmony import */ var src_app_core_services_global_picture_utils_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/global/picture-utils.service */ "./src/app/core/services/global/picture-utils.service.ts");
/* harmony import */ var src_app_core_services_global_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/global/auth.service */ "./src/app/core/services/global/auth.service.ts");
/* harmony import */ var src_app_core_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/utils */ "./src/app/core/utils/index.ts");










let AddProfilComponent = class AddProfilComponent {
    constructor(authService, actionSheetController, loadingController, pictureUtilsService, zone, toastService, fileService, candidateService, trans) {
        this.authService = authService;
        this.actionSheetController = actionSheetController;
        this.loadingController = loadingController;
        this.pictureUtilsService = pictureUtilsService;
        this.zone = zone;
        this.toastService = toastService;
        this.fileService = fileService;
        this.candidateService = candidateService;
        this.trans = trans;
        this.hasChanged = false;
        this.oldPercentage = 0;
    }
    ngOnInit() {
        const value = { picture: this.authService.user.picture };
        this.oldPercentage = src_app_core_utils__WEBPACK_IMPORTED_MODULE_9__["Helper"].calculePercentage(value, 0, 1.96);
    }
    /**
     * add image
     */
    addImageAction() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: 'Image',
                // cssClass: 'my-actionSheet',
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
                                        this.candidateService.candidate['picture'] = res.file;
                                        this.authService.user.picture = res.file;
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
                                        this.candidateService.candidate['picture'] = res.file;
                                        this.authService.user.picture = res.file;
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
    /**
     * save picture
     */
    onSave() {
        let value = { picture: this.authService.user.picture };
        let percentage = src_app_core_utils__WEBPACK_IMPORTED_MODULE_9__["Helper"].calculePercentage(value, (this.authService.user.percentage ? Number(this.authService.user.percentage) : 0) - Number(this.oldPercentage), 1.96);
        console.log('New percent : ', percentage);
        this.candidateService.changeInfos(Object.assign(value, {
            percentage: (Math.round(percentage * 100) / 100).toFixed(2),
            currentStep: 2
        })).subscribe(res => {
            console.log(res);
            this.candidateService.candidate = res;
            this.authService.user = res;
            this.candidateService.setPercentage(this.candidateService.candidate.percentage);
            src_app_core_utils__WEBPACK_IMPORTED_MODULE_9__["Redirection"].jobInfo();
        });
        // if (this.authService.user.picture) {
        //   let value = { picture: this.authService.user.picture };
        //   let percentage = Helper.calculePercentage(value, (this.authService.user.percentage ? Number(this.authService.user.percentage) : 0) - Number(this.oldPercentage), 1.96);
        //   console.log('New percent : ', percentage);
        //   this.candidateService.changeInfos(Object.assign(value, {
        //     percentage: (Math.round(percentage * 100) / 100).toFixed(2),
        //     currentStep: 2
        //   })).subscribe(res => {
        //     console.log(res);
        //     this.candidateService.candidate = res;
        //     this.authService.user = res;
        //     this.candidateService.setPercentage(this.candidateService.candidate.percentage);
        //     Redirection.jobInfo();
        //   });
        // } else {
        //   Redirection.jobInfo();
        // }
    }
};
AddProfilComponent.ctorParameters = () => [
    { type: src_app_core_services_global_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: src_app_core_services_global_picture_utils_service__WEBPACK_IMPORTED_MODULE_7__["PictureUtilsService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: src_app_core_services_addapters_toast_service__WEBPACK_IMPORTED_MODULE_3__["ToastService"] },
    { type: src_app_core_services_crud_file_service__WEBPACK_IMPORTED_MODULE_4__["FileService"] },
    { type: src_app_core_services_crud_candidate_service__WEBPACK_IMPORTED_MODULE_5__["CandidateService"] },
    { type: src_app_core_services_addapters_trans_service__WEBPACK_IMPORTED_MODULE_6__["TransService"] }
];
AddProfilComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-profil',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./add-profil.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profil/components/add-profil/add-profil.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./add-profil.component.scss */ "./src/app/pages/profil/components/add-profil/add-profil.component.scss")).default]
    })
], AddProfilComponent);



/***/ }),

/***/ "./src/app/pages/profil/components/experience/experience.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/pages/profil/components/experience/experience.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbC9jb21wb25lbnRzL2V4cGVyaWVuY2UvZXhwZXJpZW5jZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/profil/components/experience/experience.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/profil/components/experience/experience.component.ts ***!
  \****************************************************************************/
/*! exports provided: ExperienceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceComponent", function() { return ExperienceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_core_services_crud_candidate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/crud/candidate.service */ "./src/app/core/services/crud/candidate.service.ts");
/* harmony import */ var src_app_core_services_global_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/global/global.service */ "./src/app/core/services/global/global.service.ts");
/* harmony import */ var src_app_core_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/utils */ "./src/app/core/utils/index.ts");
/* harmony import */ var src_app_core_services_global_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/global/auth.service */ "./src/app/core/services/global/auth.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








let ExperienceComponent = class ExperienceComponent {
    constructor(fb, candidateService, globalService, authService) {
        this.fb = fb;
        this.candidateService = candidateService;
        this.globalService = globalService;
        this.authService = authService;
        this.oldPercentage = 0;
        this.inWork = [];
        this.checkDate = false;
        this.initForm();
    }
    ngOnInit() {
        this.setValues('experiences');
        this.setValues('trainings');
        this.oldPercentage = src_app_core_utils__WEBPACK_IMPORTED_MODULE_5__["Helper"].calculePercentage(this.form.value, 0, 1.96);
    }
    /**
     * init form controls
     */
    initForm() {
        this.form = this.fb.group({
            levelOfStudies: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.candidateService.candidate['levelOfStudies'] ? this.candidateService.candidate['levelOfStudies'] : null),
            experiences: this.fb.array([this.getExperienceFields()]),
            trainings: this.fb.array([this.getTrainings()])
        });
    }
    inWorkChange(i, event) {
        if (this.inWork[i]) {
            this.inWork[i] = false;
            this.form.get('experiences')['controls'][i].get('endDate').value = null;
        }
        else {
            this.inWork[i] = true;
        }
    }
    // inWorkChange(i) {
    //   const end = this.form.get('experiences')['controls'][i].get('endDate').value.getTime();
    //   const start = this.form.get('experiences')['controls'][i].get('startedDate').value.getTime();
    //   return end <= start ? this.inWork = true : this.inWork = false;
    // }
    /**
     * get experiences fields
     */
    getExperienceFields() {
        return this.fb.group({
            job: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            function: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            startedDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            endDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            company: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            activitySector: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            location: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        }, { validator: this.checkDates });
    }
    checkDates(group) {
        if (!group.controls.endDate.value) {
            return false;
        }
        const min = new Date(group.controls.startedDate.value).setHours(0, 0, 0, 0);
        const max = new Date(group.controls.endDate.value).setHours(0, 0, 0, 0);
        if (min === max || min > max) {
            return { dateError: true };
        }
    }
    /**
     * get Trainings
     */
    getTrainings() {
        return this.fb.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            studyLevel: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            typeOfTraining: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            yearOfGraduation: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            school: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            location: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
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
                // this.inWork.push();
                // console.log(val.experiences);
                this.inWork = this.candidateService.candidate.experiences.map(x => {
                    return x.endDate ? true : false;
                });
                console.log(this.inWork);
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
        control.push(ctrl === 'experiences' ? this.getExperienceFields() : this.getTrainings());
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
        let value = this.form.value;
        for (let val of value['experiences']) {
            if (!val.endDate) {
                val.endDate === null;
            }
        }
        for (let training of value['trainings']) {
            training.yearOfGraduation = typeof training.yearOfGraduation === 'number' ? training.yearOfGraduation :
                new Date(training.yearOfGraduation).getFullYear();
        }
        const percentage = src_app_core_utils__WEBPACK_IMPORTED_MODULE_5__["Helper"].calculePercentage(value, (this.authService.user.percentage ? Number(this.authService.user.percentage) : 0) - Number(this.oldPercentage), 1.96);
        console.log(percentage);
        console.log(value);
        this.candidateService.changeInfos(Object.assign(value, {
            currentStep: 4,
            percentage: (Math.round(percentage * 100) / 100).toFixed(2)
        })).subscribe(res => {
            this.candidateService.candidate = res;
            this.authService.user = res;
            this.candidateService.setPercentage(this.authService.user.percentage);
            src_app_core_utils__WEBPACK_IMPORTED_MODULE_5__["Redirection"].infoPlus();
        });
    }
};
ExperienceComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_core_services_crud_candidate_service__WEBPACK_IMPORTED_MODULE_3__["CandidateService"] },
    { type: src_app_core_services_global_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"] },
    { type: src_app_core_services_global_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }
];
ExperienceComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-experience',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./experience.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profil/components/experience/experience.component.html")).default,
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./experience.component.scss */ "./src/app/pages/profil/components/experience/experience.component.scss")).default]
    })
], ExperienceComponent);



/***/ }),

/***/ "./src/app/pages/profil/components/final-state/final-state.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/pages/profil/components/final-state/final-state.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbC9jb21wb25lbnRzL2ZpbmFsLXN0YXRlL2ZpbmFsLXN0YXRlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/profil/components/final-state/final-state.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/profil/components/final-state/final-state.component.ts ***!
  \******************************************************************************/
/*! exports provided: FinalStateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinalStateComponent", function() { return FinalStateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_core_services_crud_candidate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/crud/candidate.service */ "./src/app/core/services/crud/candidate.service.ts");
/* harmony import */ var src_app_core_services_global_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/global/auth.service */ "./src/app/core/services/global/auth.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_shared_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/components */ "./src/app/shared/components/index.ts");
/* harmony import */ var src_app_core_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/utils */ "./src/app/core/utils/index.ts");







let FinalStateComponent = class FinalStateComponent {
    constructor(candidateService, authService, modalController) {
        this.candidateService = candidateService;
        this.authService = authService;
        this.modalController = modalController;
    }
    /**
     * preview profil
     */
    previewProfil() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_app_shared_components__WEBPACK_IMPORTED_MODULE_5__["PreviewCandidateComponent"]
            });
            return yield modal.present();
        });
    }
    onClear() {
        this.candidateService.changeInfos({
            currentStep: 8,
            completed: true
        }).subscribe(res => {
            this.candidateService.candidate = res;
            this.authService.user = res;
            src_app_core_utils__WEBPACK_IMPORTED_MODULE_6__["Redirection"].candidateDashboard();
        });
    }
};
FinalStateComponent.ctorParameters = () => [
    { type: src_app_core_services_crud_candidate_service__WEBPACK_IMPORTED_MODULE_2__["CandidateService"] },
    { type: src_app_core_services_global_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
FinalStateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-final-state',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./final-state.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profil/components/final-state/final-state.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./final-state.component.scss */ "./src/app/pages/profil/components/final-state/final-state.component.scss")).default]
    })
], FinalStateComponent);



/***/ }),

/***/ "./src/app/pages/profil/components/info-plus/info-plus.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/pages/profil/components/info-plus/info-plus.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbC9jb21wb25lbnRzL2luZm8tcGx1cy9pbmZvLXBsdXMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/profil/components/info-plus/info-plus.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/profil/components/info-plus/info-plus.component.ts ***!
  \**************************************************************************/
/*! exports provided: InfoPlusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoPlusComponent", function() { return InfoPlusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_core_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/utils */ "./src/app/core/utils/index.ts");
/* harmony import */ var src_app_core_services_global_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/global/global.service */ "./src/app/core/services/global/global.service.ts");
/* harmony import */ var src_app_core_services_crud_candidate_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/crud/candidate.service */ "./src/app/core/services/crud/candidate.service.ts");
/* harmony import */ var src_app_core_services_global_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/global/auth.service */ "./src/app/core/services/global/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");








let InfoPlusComponent = class InfoPlusComponent {
    constructor(fb, globalService, candidateService, authService, router) {
        this.fb = fb;
        this.globalService = globalService;
        this.candidateService = candidateService;
        this.authService = authService;
        this.router = router;
        this.languagesList = [];
        this.fileUploder = false;
        this.oldPercentage = 0;
        this.initForm();
    }
    ngOnInit() {
        this.value = { file: this.candidateService.candidate ? this.candidateService.candidate['cv'] : null, type: 'simple-cv' };
        if (this.candidateService.candidate['languages'] && this.candidateService.candidate['languages'].length > 0) {
            console.log(this.candidateService.candidate['languages']);
            this.candidateService.candidate['languages'].forEach(item => {
                const languageIndex = this.globalService.languages.findIndex(x => x._id === item.language);
                const languageLevelIndex = this.globalService.languagesLevels.findIndex(x => x._id === item.languageLevel);
                this.languagesList.push({
                    language: this.globalService.languages[languageIndex],
                    languageLevel: this.globalService.languagesLevels[languageLevelIndex]
                });
            });
        }
        if (this.candidateService.candidate['programingLanguages']) {
            console.log(this.candidateService.candidate['programingLanguages']['language']);
        }
        this.oldPercentage = src_app_core_utils__WEBPACK_IMPORTED_MODULE_3__["Helper"].calculePercentage(Object.assign(this.form.value, { languages: this.languagesList }), 0, 1.96);
    }
    /**
     * init form
     */
    initForm() {
        this.form = this.fb.group({
            languages: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                language: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
                languageLevel: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null)
            }),
            programingLanguages: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                language: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.candidateService.candidate['programingLanguages'] ? this.candidateService.candidate['programingLanguages']['language'] : []),
                logiciel: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.candidateService.candidate['programingLanguages'] ? this.candidateService.candidate['programingLanguages']['logiciel'] : [])
            }),
            cv: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.candidateService.candidate['cv'], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            webSite: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.candidateService.candidate['webSite']),
            blog: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.candidateService.candidate['blog']),
            linkedin: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.candidateService.candidate['linkedin']),
            instagram: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.candidateService.candidate['instagram']),
            twitter: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.candidateService.candidate['twitter']),
            facebook: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.candidateService.candidate['facebook'])
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
    fileChanges(value) {
        this.form.patchValue({
            cv: value
        });
        this.fileUploder = true;
    }
    onSave() {
        let value = this.form.value;
        delete value['languages'];
        value.languages = this.languagesList.map(x => ({
            language: x.language._id,
            languageLevel: x.languageLevel._id
        }));
        const percentage = src_app_core_utils__WEBPACK_IMPORTED_MODULE_3__["Helper"].calculePercentage(value, (this.authService.user.percentage ? Number(this.authService.user.percentage) : 0) - Number(this.oldPercentage), 1.96);
        console.log('New percent : ', percentage);
        this.candidateService.changeInfos(Object.assign(value, {
            currentStep: 5,
            percentage: (Math.round(percentage * 100) / 100).toFixed(2)
        })).subscribe(res => {
            console.log(res);
            this.candidateService.candidate = res;
            this.authService.user = res;
            this.candidateService.setPercentage(this.authService.user.percentage);
            src_app_core_utils__WEBPACK_IMPORTED_MODULE_3__["Redirection"].values();
        });
    }
};
InfoPlusComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_core_services_global_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"] },
    { type: src_app_core_services_crud_candidate_service__WEBPACK_IMPORTED_MODULE_5__["CandidateService"] },
    { type: src_app_core_services_global_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
];
InfoPlusComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-info-plus',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./info-plus.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profil/components/info-plus/info-plus.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./info-plus.component.scss */ "./src/app/pages/profil/components/info-plus/info-plus.component.scss")).default]
    })
], InfoPlusComponent);



/***/ }),

/***/ "./src/app/pages/profil/components/job-info/job-info.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/pages/profil/components/job-info/job-info.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbC9jb21wb25lbnRzL2pvYi1pbmZvL2pvYi1pbmZvLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/profil/components/job-info/job-info.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/profil/components/job-info/job-info.component.ts ***!
  \************************************************************************/
/*! exports provided: JobInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobInfoComponent", function() { return JobInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_core_services_crud_candidate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/crud/candidate.service */ "./src/app/core/services/crud/candidate.service.ts");
/* harmony import */ var src_app_core_services_global_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/global/global.service */ "./src/app/core/services/global/global.service.ts");
/* harmony import */ var src_app_core_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/utils */ "./src/app/core/utils/index.ts");
/* harmony import */ var src_app_core_services_global_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/global/auth.service */ "./src/app/core/services/global/auth.service.ts");







let JobInfoComponent = class JobInfoComponent {
    constructor(candidateService, globalService, authService, fb) {
        this.candidateService = candidateService;
        this.globalService = globalService;
        this.authService = authService;
        this.fb = fb;
        this.oldPercentage = 0;
        this.selectedItems = [];
        this.initForm();
    }
    ngOnInit() {
        console.log(this.authService.user.picture);
        this.oldPercentage = src_app_core_utils__WEBPACK_IMPORTED_MODULE_5__["Helper"].calculePercentage(this.form.value, 0, 1.96);
        this.dropdownSettings = {
            singleSelection: false,
            idField: '_id',
            textField: 'name',
            unSelectAllText: 'UnSelect All',
            itemsShowLimit: 0,
            allowSearchFilter: true,
            enableCheckAll: false,
        };
    }
    onItemSelect(event) {
        // this.selectedItems.push(item);
        // console.log(this.selectedItems);
        console.log(event);
    }
    OnItemDeSelect(event) {
        // this.selectedItems.slice(item);
        // this.selectedItems = this.selectedItems.filter(worker => worker !== item);
        console.log(event);
    }
    /**
     * init job infos form
     */
    initForm() {
        this.form = this.fb.group({
            searchedPost: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.candidateService.candidate ? this.candidateService.candidate['searchedPost'] : null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            jobType: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.candidateService.candidate ? this.candidateService.candidate['jobType'] : null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            jobMode: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.candidateService.candidate ? this.candidateService.candidate['jobMode'] : null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            supposedSalaryMin: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.candidateService.candidate ? this.candidateService.candidate['supposedSalaryMin'] : null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            supposedSalaryMax: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.candidateService.candidate ? this.candidateService.candidate['supposedSalaryMax'] : null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            usageTitles: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.candidateService.candidate ? this.candidateService.candidate['usageTitles'] : []),
            functions: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.candidateService.candidate ? this.candidateService.candidate['functions'] : []),
            activitySector: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.candidateService.candidate ? this.candidateService.candidate['activitySector'] : []),
            locations: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.candidateService.candidate ? this.candidateService.candidate['locations'] : []),
            contracts: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.candidateService.candidate ? this.candidateService.candidate['contracts'] : []),
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
        let value = this.form.value;
        // value['usageTitles'] = value.usageTitles.map(x => x._id);
        const percentage = src_app_core_utils__WEBPACK_IMPORTED_MODULE_5__["Helper"].calculePercentage(value, (this.authService.user.percentage ? Number(this.authService.user.percentage) : 0) - Number(this.oldPercentage), 1.96);
        console.log('New percent : ', percentage);
        this.candidateService.changeInfos(Object.assign(value, {
            currentStep: 3,
            percentage: (Math.round(percentage * 100) / 100).toFixed(2)
        })).subscribe(res => {
            console.log(res);
            this.candidateService.candidate = res;
            this.authService.user = res;
            this.candidateService.setPercentage(this.authService.user.percentage);
            src_app_core_utils__WEBPACK_IMPORTED_MODULE_5__["Redirection"].profileExperiences();
        });
    }
};
JobInfoComponent.ctorParameters = () => [
    { type: src_app_core_services_crud_candidate_service__WEBPACK_IMPORTED_MODULE_3__["CandidateService"] },
    { type: src_app_core_services_global_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"] },
    { type: src_app_core_services_global_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
JobInfoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-job-info',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./job-info.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profil/components/job-info/job-info.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./job-info.component.scss */ "./src/app/pages/profil/components/job-info/job-info.component.scss")).default]
    })
], JobInfoComponent);



/***/ }),

/***/ "./src/app/pages/profil/components/main/main.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/pages/profil/components/main/main.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbC9jb21wb25lbnRzL21haW4vbWFpbi5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/profil/components/main/main.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/profil/components/main/main.component.ts ***!
  \****************************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_core_services_global_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/global/auth.service */ "./src/app/core/services/global/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_core_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/utils */ "./src/app/core/utils/index.ts");
/* harmony import */ var src_app_core_services_crud_candidate_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/crud/candidate.service */ "./src/app/core/services/crud/candidate.service.ts");







let MainComponent = class MainComponent {
    constructor(authService, router, candidateService, alertController) {
        this.authService = authService;
        this.router = router;
        this.candidateService = candidateService;
        this.alertController = alertController;
    }
    ngOnInit() {
        this.subscription = this.router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["ChildActivationEnd"]) {
                if (event.snapshot.firstChild.data.title) {
                    this.pageTitle = event.snapshot.firstChild.data.title;
                }
            }
        });
    }
    back() {
        let step = this.authService.user.currentStep ? this.authService.user.currentStep : 0;
        switch (step) {
            case 1:
                src_app_core_utils__WEBPACK_IMPORTED_MODULE_5__["Redirection"].profile();
                break;
            case 2:
                src_app_core_utils__WEBPACK_IMPORTED_MODULE_5__["Redirection"].addProfile();
                break;
            case 3:
                src_app_core_utils__WEBPACK_IMPORTED_MODULE_5__["Redirection"].jobInfo();
                break;
            case 4:
                src_app_core_utils__WEBPACK_IMPORTED_MODULE_5__["Redirection"].profileExperiences();
                break;
            case 5:
                src_app_core_utils__WEBPACK_IMPORTED_MODULE_5__["Redirection"].infoPlus();
                break;
            case 6:
                src_app_core_utils__WEBPACK_IMPORTED_MODULE_5__["Redirection"].values();
                break;
            case 7:
                src_app_core_utils__WEBPACK_IMPORTED_MODULE_5__["Redirection"].profileVideo();
                break;
        }
        console.log(step);
        this.authService.user.currentStep = --step;
    }
    desconnect() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alertSave = yield this.alertController.create({
                header: 'Confirmation!',
                message: 'Souhaitez-vous enregistrer les données et continuez l\'inscription plus tard ?',
                buttons: [
                    {
                        text: 'NON',
                        role: 'cancel'
                    },
                    {
                        text: 'OUI',
                        handler: () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            const desconnect = yield this.alertController.create({
                                header: 'Confirmation!',
                                message: 'Souhaitez-vous vous déconnecter ? ',
                                buttons: [
                                    {
                                        text: 'NON',
                                        role: 'cancel'
                                    }, {
                                        text: 'OUI',
                                        handler: () => {
                                            this.authService.logout();
                                        }
                                    }
                                ]
                            });
                            yield desconnect.present();
                        })
                    }
                ]
            });
            yield alertSave.present();
        });
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
};
MainComponent.ctorParameters = () => [
    { type: src_app_core_services_global_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_core_services_crud_candidate_service__WEBPACK_IMPORTED_MODULE_6__["CandidateService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"] }
];
MainComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-main',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./main.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profil/components/main/main.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./main.component.scss */ "./src/app/pages/profil/components/main/main.component.scss")).default]
    })
], MainComponent);



/***/ }),

/***/ "./src/app/pages/profil/components/personal-info/personal-info.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/pages/profil/components/personal-info/personal-info.component.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbC9jb21wb25lbnRzL3BlcnNvbmFsLWluZm8vcGVyc29uYWwtaW5mby5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/profil/components/personal-info/personal-info.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/profil/components/personal-info/personal-info.component.ts ***!
  \**********************************************************************************/
/*! exports provided: PersonalInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalInfoComponent", function() { return PersonalInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_core_services_crud_candidate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/crud/candidate.service */ "./src/app/core/services/crud/candidate.service.ts");
/* harmony import */ var src_app_core_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/utils */ "./src/app/core/utils/index.ts");
/* harmony import */ var src_app_core_services_global_global_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/global/global.service */ "./src/app/core/services/global/global.service.ts");
/* harmony import */ var src_app_core_services_global_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/global/auth.service */ "./src/app/core/services/global/auth.service.ts");







let PersonalInfoComponent = class PersonalInfoComponent {
    constructor(candidateService, authService, globalService) {
        this.candidateService = candidateService;
        this.authService = authService;
        this.globalService = globalService;
        this.oldPercentage = 0;
        this.initForm();
    }
    initForm() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.candidateService.candidate['firstName'] ? this.candidateService.candidate['firstName'] : null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.candidateService.candidate['lastName'] ? this.candidateService.candidate['lastName'] : null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            birthday: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.candidateService.candidate['birthday'] ? this.candidateService.candidate['birthday'] : null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.candidateService.candidate['gender'] ? this.candidateService.candidate['gender'] : null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            phoneNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.candidateService.candidate['phoneNumber'] ? this.candidateService.candidate['phoneNumber'] : null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            availability: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.candidateService.candidate['availability'] ? this.candidateService.candidate['availability'] : null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            experienceYears: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.candidateService.candidate['experienceYears'] ? this.candidateService.candidate['experienceYears'] : null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            currentJob: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.candidateService.candidate['currentJob'] ? this.candidateService.candidate['currentJob'] : null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            currentSalary: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.candidateService.candidate['currentSalary'] ? this.candidateService.candidate['currentSalary'] : null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            managerialLevel: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.candidateService.candidate['managerialLevel'] ? this.candidateService.candidate['managerialLevel'] : null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            effective: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.candidateService.candidate['effective'] ? this.candidateService.candidate['effective'] : null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            goal: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.candidateService.candidate['goal'] ? this.candidateService.candidate['goal'] : null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
        });
    }
    ngOnInit() {
        if (this.authService.user.currentStep >= 0) {
            this.oldPercentage = src_app_core_utils__WEBPACK_IMPORTED_MODULE_4__["Helper"].calculePercentage(this.form.value, 0, 1.96);
            console.log(this.oldPercentage);
            console.log(this.authService.user.percentage);
        }
    }
    /**
     * on save
     */
    onSave() {
        let value = this.form.value;
        let percentage = src_app_core_utils__WEBPACK_IMPORTED_MODULE_4__["Helper"].calculePercentage(value, (Number(this.authService.user.percentage) ? Number(this.authService.user.percentage) : 0) - Number(this.oldPercentage), 1.96);
        console.log('New percent : ', percentage = (Math.round(percentage * 100) / 100 + 3.92).toFixed(2));
        this.candidateService.changeInfos(Object.assign(value, {
            percentage: (Math.round(percentage * 100) / 100).toFixed(2),
            currentStep: 1
        })).subscribe(res => {
            if (res) {
                console.log(res);
                this.authService.user = res;
                this.candidateService.candidate = res;
                this.candidateService.setPercentage(this.authService.user.percentage);
                src_app_core_utils__WEBPACK_IMPORTED_MODULE_4__["Redirection"].addProfile();
            }
        });
    }
};
PersonalInfoComponent.ctorParameters = () => [
    { type: src_app_core_services_crud_candidate_service__WEBPACK_IMPORTED_MODULE_3__["CandidateService"] },
    { type: src_app_core_services_global_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: src_app_core_services_global_global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"] }
];
PersonalInfoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-personal-info',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./personal-info.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profil/components/personal-info/personal-info.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./personal-info.component.scss */ "./src/app/pages/profil/components/personal-info/personal-info.component.scss")).default]
    })
], PersonalInfoComponent);



/***/ }),

/***/ "./src/app/pages/profil/components/preview-profil/preview-profil.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/profil/components/preview-profil/preview-profil.component.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbC9jb21wb25lbnRzL3ByZXZpZXctcHJvZmlsL3ByZXZpZXctcHJvZmlsLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/profil/components/preview-profil/preview-profil.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/pages/profil/components/preview-profil/preview-profil.component.ts ***!
  \************************************************************************************/
/*! exports provided: PreviewProfilComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviewProfilComponent", function() { return PreviewProfilComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_core_services_crud_candidate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/crud/candidate.service */ "./src/app/core/services/crud/candidate.service.ts");
/* harmony import */ var src_app_core_services_global_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/global/auth.service */ "./src/app/core/services/global/auth.service.ts");
/* harmony import */ var src_app_core_services_global_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/global/global.service */ "./src/app/core/services/global/global.service.ts");





let PreviewProfilComponent = class PreviewProfilComponent {
    constructor(candidateService, authService, globalService) {
        this.candidateService = candidateService;
        this.authService = authService;
        this.globalService = globalService;
    }
    ngOnInit() {
        this.candidate = {
            currentJob: this.candidateService.candidate['currentJob'],
            goal: this.candidateService.candidate['goal'],
            currentLocation: this.candidateService.candidate['currentLocation']
        };
        this.setTrainings();
        this.setExperiences();
        this.setSkills();
        this.setValues();
        this.setLanguages();
        console.log(this.candidateService.candidate);
        console.log('aaa');
    }
    ionViewDidEnter() {
        console.log('bbbb');
    }
    /**
     * set training to candidate
     */
    setTrainings() {
        this.candidate['trainings'] = this.candidateService.candidate['trainings'].map((x) => {
            const studyLevelIndex = this.globalService.levelOfStudies.findIndex(s => (s._id === x.studyLevel));
            const typeOfTrainingIndex = this.globalService.typeOfTrainings.findIndex(s => (s._id === x.typeOfTraining));
            return {
                yearOfGraduation: x.yearOfGraduation,
                studyLevel: this.globalService.levelOfStudies[studyLevelIndex].name,
                typeOfTraining: this.globalService.typeOfTrainings[typeOfTrainingIndex].name,
            };
        });
    }
    /**
     * set experience to candidate
     */
    setExperiences() {
        this.candidate['experiences'] = this.candidateService.candidate['trainings'].map((x) => {
            const experienceYearsIndex = this.globalService.experiences.findIndex(s => (s._id === x.experienceYears));
            const locationIndex = this.globalService.locations.findIndex(s => (s._id === x.location));
            return {
                experienceYears: this.globalService.experiences[experienceYearsIndex].name,
                location: this.globalService.locations[locationIndex].name,
            };
        });
    }
    /**
     * set value to candidate
     */
    setValues() {
        this.candidate['values'] = this.candidateService.candidate['values'].map((x) => {
            const valueIndex = this.globalService.values.findIndex(s => (s._id === x.value));
            return {
                value: this.globalService.values[valueIndex].name,
            };
        });
    }
    /**
     * set skills to candidate
     */
    setSkills() {
        this.candidate['skills'] = this.candidateService.candidate['skills'].map((x) => {
            const softSkillIndex = this.globalService.softSkills.findIndex(s => (s._id === x.softSkill));
            const managerialLevelIndex = this.globalService.managerialLevels.findIndex(s => (s._id === x.managerialLevel));
            return {
                softSkill: this.globalService.softSkills[softSkillIndex].name,
                managerialLevel: this.globalService.managerialLevels[managerialLevelIndex].name,
            };
        });
    }
    /**
     * set languages to candidate
     */
    setLanguages() {
        this.candidate['skills'] = this.candidateService.candidate['skills'].map((x) => {
            const languageIndex = this.globalService.languages.findIndex(s => (s._id === x.softSkill));
            const languageLevelIndex = this.globalService.languagesLevels.findIndex(s => (s._id === x.managerialLevel));
            return {
                language: this.globalService.languages[languageIndex].name,
                languageLevel: this.globalService.languagesLevels[languageLevelIndex].name,
            };
        });
    }
};
PreviewProfilComponent.ctorParameters = () => [
    { type: src_app_core_services_crud_candidate_service__WEBPACK_IMPORTED_MODULE_2__["CandidateService"] },
    { type: src_app_core_services_global_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: src_app_core_services_global_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"] }
];
PreviewProfilComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-preview-profil',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./preview-profil.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profil/components/preview-profil/preview-profil.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./preview-profil.component.scss */ "./src/app/pages/profil/components/preview-profil/preview-profil.component.scss")).default]
    })
], PreviewProfilComponent);



/***/ }),

/***/ "./src/app/pages/profil/components/upload-video/upload-video.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/profil/components/upload-video/upload-video.component.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbC9jb21wb25lbnRzL3VwbG9hZC12aWRlby91cGxvYWQtdmlkZW8uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/profil/components/upload-video/upload-video.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/pages/profil/components/upload-video/upload-video.component.ts ***!
  \********************************************************************************/
/*! exports provided: UploadVideoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadVideoComponent", function() { return UploadVideoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_core_services_crud_candidate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/crud/candidate.service */ "./src/app/core/services/crud/candidate.service.ts");
/* harmony import */ var src_app_core_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/utils */ "./src/app/core/utils/index.ts");
/* harmony import */ var src_app_core_services_global_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/global/auth.service */ "./src/app/core/services/global/auth.service.ts");






let UploadVideoComponent = class UploadVideoComponent {
    constructor(candidateService, authService) {
        this.candidateService = candidateService;
        this.authService = authService;
        this.oldPercentage = 0;
        this.initForm();
    }
    ngOnInit() {
        console.log(this.candidateService.candidate);
        this.value = { file: this.candidateService.candidate['video'] ? this.candidateService.candidate['video'] : null, type: 'video' };
        if (this.value.file) {
            this.oldPercentage = 1.96;
        }
    }
    /**
     * init form
     */
    initForm() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            video: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.candidateService.candidate['video'])
        });
    }
    /**
     *
     * @param value
     */
    fileChanges(value) {
        this.form.setValue({ 'video': value });
    }
    /**
     * on save
     */
    onSave() {
        let value = this.form.value;
        let percentage = src_app_core_utils__WEBPACK_IMPORTED_MODULE_4__["Helper"].calculePercentage(value, (this.authService.user.percentage ? Number(this.authService.user.percentage) : 0) - Number(this.oldPercentage), 1.96);
        value = Object.assign(value, { 'percentage': (Math.round(percentage * 100) / 100).toFixed(2), 'currentStep': 7 });
        console.log('New percent : ', percentage);
        this.candidateService.changeInfos(value).subscribe(res => {
            console.log(res);
            this.candidateService.candidate = res;
            this.authService.user = res;
            this.candidateService.setPercentage(this.authService.user.percentage);
            src_app_core_utils__WEBPACK_IMPORTED_MODULE_4__["Redirection"].finalStep();
        });
    }
};
UploadVideoComponent.ctorParameters = () => [
    { type: src_app_core_services_crud_candidate_service__WEBPACK_IMPORTED_MODULE_3__["CandidateService"] },
    { type: src_app_core_services_global_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }
];
UploadVideoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-upload-video',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./upload-video.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profil/components/upload-video/upload-video.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./upload-video.component.scss */ "./src/app/pages/profil/components/upload-video/upload-video.component.scss")).default]
    })
], UploadVideoComponent);



/***/ }),

/***/ "./src/app/pages/profil/components/values/values.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/pages/profil/components/values/values.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbC9jb21wb25lbnRzL3ZhbHVlcy92YWx1ZXMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/profil/components/values/values.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/profil/components/values/values.component.ts ***!
  \********************************************************************/
/*! exports provided: ValuesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValuesComponent", function() { return ValuesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_core_services_crud_candidate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/crud/candidate.service */ "./src/app/core/services/crud/candidate.service.ts");
/* harmony import */ var src_app_core_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/utils */ "./src/app/core/utils/index.ts");
/* harmony import */ var src_app_core_services_global_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/global/auth.service */ "./src/app/core/services/global/auth.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");







let ValuesComponent = class ValuesComponent {
    constructor(candidateService, authService, modalController) {
        this.candidateService = candidateService;
        this.authService = authService;
        this.modalController = modalController;
        this.oldPercentage = 0;
        this.initForm();
    }
    ngOnInit() {
        this.oldPercentage = src_app_core_utils__WEBPACK_IMPORTED_MODULE_3__["Helper"].calculePercentage(this.form.value, 0, 1.96);
    }
    /**
     * init form
     */
    initForm() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
            values: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](this.candidateService.candidate['values'] ? this.candidateService.candidate['values'] : []),
            skills: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](this.candidateService.candidate['skills'] ? this.candidateService.candidate['skills'] : [])
        });
    }
    /**
     * on save
     */
    onSave() {
        const val = this.form.value;
        const percentage = src_app_core_utils__WEBPACK_IMPORTED_MODULE_3__["Helper"].calculePercentage(val, (this.authService.user.percentage ? Number(this.authService.user.percentage) : 0) - Number(this.oldPercentage), 1.96);
        // console.log('New percent : ', percentage);
        this.candidateService.changeInfos(Object.assign(val, {
            percentage: (Math.round(percentage * 100) / 100).toFixed(2),
            currentStep: 6
        })).subscribe(res => {
            console.log(res);
            this.candidateService.candidate = res;
            this.authService.user = res;
            this.candidateService.setPercentage(this.authService.user.percentage);
            src_app_core_utils__WEBPACK_IMPORTED_MODULE_3__["Redirection"].profileVideo();
        });
    }
};
ValuesComponent.ctorParameters = () => [
    { type: src_app_core_services_crud_candidate_service__WEBPACK_IMPORTED_MODULE_2__["CandidateService"] },
    { type: src_app_core_services_global_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] }
];
ValuesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-values',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./values.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profil/components/values/values.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./values.component.scss */ "./src/app/pages/profil/components/values/values.component.scss")).default]
    })
], ValuesComponent);



/***/ }),

/***/ "./src/app/pages/profil/dashboard-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/profil/dashboard-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/main/main.component */ "./src/app/pages/profil/components/main/main.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_add_profil_add_profil_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/add-profil/add-profil.component */ "./src/app/pages/profil/components/add-profil/add-profil.component.ts");
/* harmony import */ var _components_experience_experience_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/experience/experience.component */ "./src/app/pages/profil/components/experience/experience.component.ts");
/* harmony import */ var _components_final_state_final_state_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/final-state/final-state.component */ "./src/app/pages/profil/components/final-state/final-state.component.ts");
/* harmony import */ var _components_info_plus_info_plus_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/info-plus/info-plus.component */ "./src/app/pages/profil/components/info-plus/info-plus.component.ts");
/* harmony import */ var _components_job_info_job_info_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/job-info/job-info.component */ "./src/app/pages/profil/components/job-info/job-info.component.ts");
/* harmony import */ var _components_personal_info_personal_info_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/personal-info/personal-info.component */ "./src/app/pages/profil/components/personal-info/personal-info.component.ts");
/* harmony import */ var _components_preview_profil_preview_profil_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/preview-profil/preview-profil.component */ "./src/app/pages/profil/components/preview-profil/preview-profil.component.ts");
/* harmony import */ var _components_upload_video_upload_video_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/upload-video/upload-video.component */ "./src/app/pages/profil/components/upload-video/upload-video.component.ts");
/* harmony import */ var _components_values_values_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/values/values.component */ "./src/app/pages/profil/components/values/values.component.ts");













const routes = [
    {
        path: '',
        component: _components_main_main_component__WEBPACK_IMPORTED_MODULE_1__["MainComponent"],
        children: [
            {
                path: '',
                component: _components_personal_info_personal_info_component__WEBPACK_IMPORTED_MODULE_9__["PersonalInfoComponent"],
                data: { title: 'Informations générales' }
            },
            {
                path: 'add-profil',
                component: _components_add_profil_add_profil_component__WEBPACK_IMPORTED_MODULE_4__["AddProfilComponent"],
                data: { title: 'Photo' }
            },
            {
                path: 'job-info',
                component: _components_job_info_job_info_component__WEBPACK_IMPORTED_MODULE_8__["JobInfoComponent"],
                data: { title: 'Poste souhaité' }
            },
            {
                path: 'experience',
                component: _components_experience_experience_component__WEBPACK_IMPORTED_MODULE_5__["ExperienceComponent"],
                data: { title: 'Expériences et formation' }
            },
            {
                path: 'info-plus',
                component: _components_info_plus_info_plus_component__WEBPACK_IMPORTED_MODULE_7__["InfoPlusComponent"],
                data: { title: 'Compétences' }
            },
            {
                path: 'upload-video',
                component: _components_upload_video_upload_video_component__WEBPACK_IMPORTED_MODULE_11__["UploadVideoComponent"],
                data: { title: 'Vidéo' }
            },
            {
                path: 'values',
                component: _components_values_values_component__WEBPACK_IMPORTED_MODULE_12__["ValuesComponent"],
                data: { title: 'Values' }
            },
            {
                path: 'final-steps',
                component: _components_final_state_final_state_component__WEBPACK_IMPORTED_MODULE_6__["FinalStateComponent"],
                data: { title: 'Dernière étape' }
            },
            {
                path: 'preview-profil',
                component: _components_preview_profil_preview_profil_component__WEBPACK_IMPORTED_MODULE_10__["PreviewProfilComponent"],
                data: { title: 'Prévisualisation' }
            }
        ]
    }
];
let DashboardRoutingModule = class DashboardRoutingModule {
};
DashboardRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })
], DashboardRoutingModule);



/***/ }),

/***/ "./src/app/pages/profil/dashboard.module.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/profil/dashboard.module.ts ***!
  \**************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/pages/profil/dashboard-routing.module.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _components_add_profil_add_profil_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/add-profil/add-profil.component */ "./src/app/pages/profil/components/add-profil/add-profil.component.ts");
/* harmony import */ var _components_experience_experience_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/experience/experience.component */ "./src/app/pages/profil/components/experience/experience.component.ts");
/* harmony import */ var _components_final_state_final_state_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/final-state/final-state.component */ "./src/app/pages/profil/components/final-state/final-state.component.ts");
/* harmony import */ var _components_info_plus_info_plus_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/info-plus/info-plus.component */ "./src/app/pages/profil/components/info-plus/info-plus.component.ts");
/* harmony import */ var _components_job_info_job_info_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/job-info/job-info.component */ "./src/app/pages/profil/components/job-info/job-info.component.ts");
/* harmony import */ var _components_personal_info_personal_info_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/personal-info/personal-info.component */ "./src/app/pages/profil/components/personal-info/personal-info.component.ts");
/* harmony import */ var _components_preview_profil_preview_profil_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/preview-profil/preview-profil.component */ "./src/app/pages/profil/components/preview-profil/preview-profil.component.ts");
/* harmony import */ var _components_upload_video_upload_video_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/upload-video/upload-video.component */ "./src/app/pages/profil/components/upload-video/upload-video.component.ts");
/* harmony import */ var _components_values_values_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/values/values.component */ "./src/app/pages/profil/components/values/values.component.ts");
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/main/main.component */ "./src/app/pages/profil/components/main/main.component.ts");














let DashboardModule = class DashboardModule {
};
DashboardModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _components_personal_info_personal_info_component__WEBPACK_IMPORTED_MODULE_9__["PersonalInfoComponent"],
            _components_add_profil_add_profil_component__WEBPACK_IMPORTED_MODULE_4__["AddProfilComponent"],
            _components_job_info_job_info_component__WEBPACK_IMPORTED_MODULE_8__["JobInfoComponent"],
            _components_experience_experience_component__WEBPACK_IMPORTED_MODULE_5__["ExperienceComponent"],
            _components_info_plus_info_plus_component__WEBPACK_IMPORTED_MODULE_7__["InfoPlusComponent"],
            _components_upload_video_upload_video_component__WEBPACK_IMPORTED_MODULE_11__["UploadVideoComponent"],
            _components_values_values_component__WEBPACK_IMPORTED_MODULE_12__["ValuesComponent"],
            _components_final_state_final_state_component__WEBPACK_IMPORTED_MODULE_6__["FinalStateComponent"],
            _components_preview_profil_preview_profil_component__WEBPACK_IMPORTED_MODULE_10__["PreviewProfilComponent"],
            _components_main_main_component__WEBPACK_IMPORTED_MODULE_13__["MainComponent"],
        ],
        imports: [
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__["DashboardRoutingModule"]
        ]
    })
], DashboardModule);



/***/ })

}]);
//# sourceMappingURL=pages-profil-dashboard-module-es2015.js.map