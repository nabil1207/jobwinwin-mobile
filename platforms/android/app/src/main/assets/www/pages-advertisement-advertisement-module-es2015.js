(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-advertisement-advertisement-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/advertisement/components/create/create-advertisement/create-advertisement.component.html":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/advertisement/components/create/create-advertisement/create-advertisement.component.html ***!
  \******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form class=\"d-block mt-1\" [formGroup]=\"form\" (ngSubmit)=\"onSave()\">\n\n    <div class=\"w-100\">\n        <ion-item class=\"custom-input\">\n            <ion-label position=\"floating\">Poste à pourvoir <span class=\"required\">*</span></ion-label>\n            <ion-input type=\"text\" formControlName=\"desiredJob\"></ion-input>\n        </ion-item>\n        <small class=\"text-error\"\n            *ngIf=\"form.get('desiredJob').invalid && (form.get('desiredJob').dirty || form.get('desiredJob').touched) \">\n            Champ obligatoire\n        </small>\n    </div>\n\n    <div class=\"w-100\">\n        <app-multi-select label=\"Intitulés d'usage\" collection=\"usageTitles\" formControlName=\"usageTitles\">\n        </app-multi-select>\n        <small class=\"text-error\" *ngIf=\"form.get('usageTitles').value?.length <= 0\">\n            Veuillez choisir au moins un intitulé d'usage.\n        </small>\n    </div>\n\n    <div class=\"w-100\">\n        <ion-item class=\"custom-select w-100\">\n            <ion-label position=\"floating\">Fonction <span class=\"required\">*</span></ion-label>\n            <ion-select class=\"w-100\" ok-text=\"Ok\" cancel-text=\"Annuler\" placeholder=\"Sélectionner\"\n                formControlName=\"function\">\n                <ion-select-option *ngFor=\"let item of globalService.functions\" [value]=\"item._id\">\n                    {{item.name}}\n                </ion-select-option>\n            </ion-select>\n        </ion-item>\n        <small class=\"text-error\"\n            *ngIf=\"form.get('function').invalid && (form.get('function').dirty || form.get('function').touched) \">\n            Champ obligatoire\n        </small>\n    </div>\n\n    <div fxLayout=\"row\" fxLayoutAlign=\"space-between\" fxLayoutGap=\"20px\">\n\n        <div class=\"w-100\" fxLayout=\"column\" fxFlex.xs=\"45%\">\n            <ion-item class=\"custom-select w-100\">\n                <ion-label position=\"floating\">Expérience <span class=\"required\">*</span></ion-label>\n                <ion-select class=\"w-100\" ok-text=\"Ok\" cancel-text=\"Annuler\" placeholder=\"Sélectionner\"\n                    formControlName=\"experienceYears\">\n                    <ion-select-option *ngFor=\"let experience of globalService.experiences\" [value]=\"experience._id\">\n                        {{ experience.name }}\n                    </ion-select-option>\n                </ion-select>\n            </ion-item>\n            <small class=\"text-error\"\n                *ngIf=\"form.get('experienceYears').invalid && (form.get('experienceYears').dirty || form.get('experienceYears').touched) \">\n                Champ obligatoire\n            </small>\n        </div>\n\n        <div class=\"w-100\" fxLayout=\"column\" fxFlex.xs=\"45%\">\n            <ion-item class=\"custom-select w-100\">\n                <ion-label position=\"floating\">Effectif géré <span class=\"required\">*</span></ion-label>\n                <ion-select class=\"w-100\" ok-text=\"Ok\" cancel-text=\"Annuler\" placeholder=\"Sélectionner\"\n                    formControlName=\"effective\">\n                    <ion-select-option *ngFor=\"let effective of globalService.effectives\" [value]=\"effective._id\">\n                        {{ effective.name }}\n                    </ion-select-option>\n                </ion-select>\n            </ion-item>\n            <small class=\"text-error\"\n                *ngIf=\"form.get('effective').invalid && (form.get('effective').dirty || form.get('effective').touched) \">\n                Champ obligatoire\n            </small>\n        </div>\n    </div>\n\n    <div class=\"w-100\">\n        <ion-item class=\"custom-select w-100\">\n            <ion-label position=\"floating\">Niveau managérial <span class=\"required\">*</span></ion-label>\n            <ion-select class=\"w-100\" ok-text=\"Ok\" cancel-text=\"Annuler\" placeholder=\"Sélectionner\"\n                formControlName=\"managerialLevel\">\n                <ion-select-option *ngFor=\"let item of globalService.managerialLevels\" [value]=\"item._id\">\n                    {{item.name}}\n                </ion-select-option>\n            </ion-select>\n        </ion-item>\n        <small class=\"text-error\"\n            *ngIf=\"form.get('managerialLevel').invalid && (form.get('managerialLevel').dirty || form.get('managerialLevel').touched) \">\n            Champ obligatoire\n        </small>\n    </div>\n\n    <div class=\"mt-1\" fxLayout=\"row\" fxLayoutAlign=\"space-between\" fxLayoutGap=\"20px\">\n        <div class=\"w-100\" fxLayout=\"column\" fxFlex.xs=\"45%\">\n            <ion-item class=\"custom-select w-100\">\n                <ion-label position=\"floating\">Type de contrat <span class=\"required\">*</span></ion-label>\n                <ion-select class=\"w-100\" ok-text=\"Ok\" cancel-text=\"Annuler\" placeholder=\"Sélectionner\"\n                    formControlName=\"contract\">\n                    <ion-select-option *ngFor=\"let item of globalService.contracts\" [value]=\"item._id\">\n                        {{item.name}}\n                    </ion-select-option>\n                </ion-select>\n            </ion-item>\n            <small class=\"text-error\"\n                *ngIf=\"form.get('contract').invalid && (form.get('contract').dirty || form.get('contract').touched) \">\n                Champ obligatoire\n            </small>\n        </div>\n\n        <div class=\"w-100\" fxLayout=\"column\" fxFlex.xs=\"45%\">\n            <ion-item class=\"custom-select w-100\">\n                <ion-label position=\"floating\">Type de Poste <span class=\"required\">*</span></ion-label>\n                <ion-select class=\"w-100\" ok-text=\"Ok\" cancel-text=\"Annuler\" placeholder=\"Sélectionner\"\n                    formControlName=\"jobType\">\n                    <ion-select-option *ngFor=\"let item of globalService.jobTypes\" [value]=\"item._id\">\n                        {{item.name}}</ion-select-option>\n                </ion-select>\n            </ion-item>\n            <small class=\"text-error\"\n                *ngIf=\"form.get('jobType').invalid && (form.get('jobType').dirty || form.get('jobType').touched) \">\n                Champ obligatoire\n            </small>\n        </div>\n    </div>\n\n    <div class=\"w-100\">\n        <ion-item class=\"custom-select w-100\">\n            <ion-label position=\"floating\">Mode de travail <span class=\"required\">*</span></ion-label>\n            <ion-select class=\"w-100\" ok-text=\"Ok\" cancel-text=\"Annuler\" placeholder=\"Sélectionner\"\n                formControlName=\"jobMode\">\n                <ion-select-option *ngFor=\"let item of globalService.jobModes\" [value]=\"item._id\">\n                    {{item.name}}</ion-select-option>\n            </ion-select>\n        </ion-item>\n        <small class=\"text-error\"\n            *ngIf=\"form.get('jobMode').invalid && (form.get('jobMode').dirty || form.get('jobMode').touched) \">\n            Champ obligatoire\n        </small>\n    </div>\n\n    <div class=\"w-100\">\n        <ion-item class=\"custom-select w-100\">\n            <ion-label position=\"floating\">Poste basé à <span class=\"required\">*</span></ion-label>\n            <ion-select class=\"w-100\" ok-text=\"Ok\" cancel-text=\"Annuler\" placeholder=\"Sélectionner\"\n                formControlName=\"location\">\n                <ion-select-option *ngFor=\"let item of globalService.locations\" [value]=\"item._id\">\n                    {{item.name}}\n                </ion-select-option>\n            </ion-select>\n        </ion-item>\n        <small class=\"text-error\"\n            *ngIf=\"form.get('location').invalid && (form.get('location').dirty || form.get('location').touched) \">\n            Champ obligatoire\n        </small>\n    </div>\n\n\n    <div class=\"w-100 mt-1\">\n        <mat-form-field class=\"w-100\">\n            <mat-label>Mission générale <span class=\"required\">*</span></mat-label>\n            <textarea matInput placeholder=\"Mission générale\" matTextareaAutosize matAutosizeMinRows=1 matAutosizeMaxRows=7\n                formControlName=\"missions\">\n                        </textarea>\n        </mat-form-field>\n        <small class=\"text-error\"\n            *ngIf=\"form.get('missions').invalid && (form.get('missions').dirty || form.get('missions').touched) \">\n            Champ obligatoire\n        </small>\n    </div>\n\n    <div class=\"w-100\">\n        <ion-item class=\"custom-input\">\n            <ion-label position=\"floating\">Descriptif de poste <span class=\"required\">*</span></ion-label>\n            <ion-input type=\"text\" formControlName=\"descriptions\" #description></ion-input>\n            <!-- <ion-icon (click)=\"addDescription(description)\" name=\"add\"></ion-icon> -->\n        </ion-item>\n        <small class=\"text-error\" *ngIf=\"descriptions.length <= 0\">\n            Veuillez ajouter chaque tâche du descriptif.\n        </small>\n    </div>\n    <div class=\"mt-1 w-100\">\n        <ion-button fill=\"outline\" class=\"btn-outline d-block ml-auto mr-0 w-30\" color=\"primary\"\n            [disabled]=\"!form.get('descriptions').value\" (click)=\"addDescription(description)\">\n            Ajouter\n            <ion-icon slot=\"end\" name=\"add\"></ion-icon>\n        </ion-button>\n    </div>\n\n\n    <div class=\"mb-1 mt-1\">\n        <ul class=\"customList\">\n            <li *ngFor=\"let description of descriptions; let i = index;\">\n                {{ description }}\n                <span class=\"text-primary text-left\" (click)=\"deleteDescription(i)\">\n                    <mat-icon class=\"cursor-pointer btn-round vertical-align ml-1\">close</mat-icon>\n                </span><br>\n            </li>\n        </ul>\n    </div>\n\n    <mat-form-field class=\"w-100\">\n        <mat-label>Prérequis <span class=\"required\">*</span></mat-label>\n        <textarea matInput placeholder=\"Prérequis\" matTextareaAutosize matAutosizeMinRows=1 matAutosizeMaxRows=7\n            formControlName=\"prerequisite\">\n                    </textarea>\n    </mat-form-field>\n    <small class=\"text-error\"\n        *ngIf=\"form.get('prerequisite').invalid && (form.get('prerequisite').dirty || form.get('prerequisite').touched) \">\n        Champ obligatoire\n    </small>\n\n\n    <div class=\"w-100\">\n        <app-multi-select label=\"Formation souhaitée\" collection=\"typeOfTrainings\" formControlName=\"typeOfTraining\">\n        </app-multi-select>\n        <small class=\"text-error\" *ngIf=\"form.get('typeOfTraining').value?.length <= 0\">\n            Veuillez choisir au moins une Formation.\n        </small>\n    </div>\n\n    <!-- <div class=\"w-100\">\n        <ion-item class=\"custom-select\">\n            <ion-label position=\"floating\">Formation souhaitée <span class=\"required\">*</span></ion-label>\n            <ion-select class=\"w-100\" ok-text=\"Ok\" cancel-text=\"Annuler\" placeholder=\"Sélectionner\"\n                formControlName=\"typeOfTraining\">\n                <ion-select-option *ngFor=\"let typeOfTraining of globalService.typeOfTrainings\"\n                    [value]=\"typeOfTraining._id\">\n                    {{ typeOfTraining.name }}\n                </ion-select-option>\n            </ion-select>\n        </ion-item>\n        <small class=\"text-error\"\n            *ngIf=\"form.get('typeOfTraining').invalid && (form.get('typeOfTraining').dirty || form.get('typeOfTraining').touched) \">\n            Champ obligatoire\n        </small>\n    </div> -->\n\n    <div class=\"w-100\">\n        <ion-item class=\"custom-select w-100\">\n            <ion-label position=\"floating\">Niveau d'études <span class=\"required\">*</span></ion-label>\n            <ion-select class=\"w-100\" ok-text=\"Ok\" cancel-text=\"Annuler\" placeholder=\"Sélectionner\"\n                formControlName=\"levelOfStudies\">\n                <ion-select-option *ngFor=\"let item of globalService.levelOfStudies\" [value]=\"item._id\">\n                    {{item.name}}</ion-select-option>\n            </ion-select>\n        </ion-item>\n        <small class=\"text-error\"\n            *ngIf=\"form.get('levelOfStudies').invalid && (form.get('levelOfStudies').dirty || form.get('levelOfStudies').touched) \">\n            Champ obligatoire\n        </small>\n    </div>\n\n    <h4 class=\"pt-2\">Salaire proposé (Dhs)</h4>\n    <div fxLayout=\"row\" fxLayoutAlign=\"space-between\" fxLayoutGap=\"20px\">\n        <div class=\"w-100\" fxLayout=\"column\" fxFlex.xs=\"45%\">\n            <ion-item class=\"custom-input\">\n                <ion-label position=\"floating\">À partir de <span class=\"required\">*</span></ion-label>\n                <ion-input type=\"number\" formControlName=\"supposedSalaryMin\"></ion-input>\n            </ion-item>\n            <small class=\"text-error\"\n                *ngIf=\"form.get('supposedSalaryMin').invalid && (form.get('supposedSalaryMin').dirty || form.get('supposedSalaryMin').touched) \">\n                Champ obligatoire\n            </small>\n        </div>\n\n        <div class=\"w-100\" fxLayout=\"column\" fxFlex.xs=\"45%\">\n            <ion-item class=\"custom-input\">\n                <ion-label position=\"floating\">Jusqu'à <span class=\"required\">*</span></ion-label>\n                <ion-input type=\"number\" formControlName=\"supposedSalaryMax\"></ion-input>\n            </ion-item>\n            <small class=\"text-error\"\n                *ngIf=\"form.get('supposedSalaryMax').invalid && (form.get('supposedSalaryMax').dirty || form.get('supposedSalaryMax').touched) \">\n                Champ obligatoire\n            </small>\n        </div>\n    </div>\n    <small class=\"text-error\" *ngIf=\"form.get('supposedSalaryMax').touched && !form.get('supposedSalaryMax').hasError('required') \n                && form.hasError('salaryErreur')\">\n        Le salaire maximum doit être supérieur au salaire minimum\n    </small>\n\n    <div class=\"w-100\">\n        <ion-item class=\"custom-input\">\n            <ion-label position=\"floating\">Autres avantages</ion-label>\n            <ion-input type=\"text\" formControlName=\"otherAdvantage\"></ion-input>\n        </ion-item>\n    </div>\n\n    <ion-item class=\"custom-datetime w-100\">\n        <ion-label position=\"floating\">Date de prise de poste <span class=\"required\">*</span></ion-label>\n        <ion-datetime placeholder=\"Sélectionner\" formControlName=\"startedDate\">\n        </ion-datetime>\n    </ion-item>\n    <small class=\"text-error\"\n        *ngIf=\"form.get('startedDate').invalid && (form.get('startedDate').dirty || form.get('startedDate').touched) \">\n        Champ obligatoire\n    </small>\n\n    <div class=\"mt-3 text-center\">\n        <ion-button type=\"submit\" class=\"w-80\" color=\"primary\"\n            [disabled]=\"!form.valid || form.get('usageTitles').value?.length <= 0 || form.get('typeOfTraining').value?.length <= 0 || descriptions.length <=0 \">\n            Continuez\n        </ion-button>\n    </div>\n\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/advertisement/components/create/experience-required/experience-required.component.html":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/advertisement/components/create/experience-required/experience-required.component.html ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form class=\"d-block\" [formGroup]=\"form\" (ngSubmit)=\"onSave()\">\n\n    <app-multi-select label=\"Soft skills\" [limit]=\"5\" collection=\"softSkills\" formControlName=\"skills\">\n    </app-multi-select>\n    <!-- <small class=\"text-error\" *ngIf=\"form.get('skills').value?.length === 0 \">\n        Veuillez renseigner ces valeurs\n    </small>\n    <small class=\"text-error\" *ngIf=\"form.get('skills').value?.length < 5 && form.get('skills').value?.length !== 0\">\n        Veuillez renseigner au moins 5 valeur\n    </small>  -->\n    <small class=\"text-error\" *ngIf=\"form.get('skills').value?.length < 5\">\n        Vous pouvez choisir jusqu'à 5 soft skills dans la liste\n    </small>\n\n    <div formGroupName=\"languages\" class=\"mb-1\">\n        <div class=\"mt-1\" fxLayout=\"row\" fxLayoutAlign=\"space-between\" fxLayoutGap=\"20px\">\n\n            <div class=\"w-100\" fxLayout=\"column\" fxFlex.xs=\"45%\">\n                <ion-item class=\"custom-select w-100\">\n                    <ion-label position=\"floating\">Langue</ion-label>\n                    <ion-select class=\"w-100\" ok-text=\"Ok\" cancel-text=\"Annuler\" placeholder=\"Sélectionner\"\n                        formControlName=\"language\">\n                        <ion-select-option *ngFor=\"let item of globalService.languages | languages:languagesList\"\n                            [value]=\"item._id\">\n                            {{item.name}}\n                        </ion-select-option>\n                    </ion-select>\n                </ion-item>\n            </div>\n\n            <div class=\"w-100\" fxLayout=\"column\" fxFlex.xs=\"45%\">\n                <ion-item class=\"custom-select w-100\">\n                    <ion-label position=\"floating\">Niveau de langue</ion-label>\n                    <ion-select class=\"w-100\" ok-text=\"Ok\" cancel-text=\"Annuler\" placeholder=\"Sélectionner\"\n                        formControlName=\"languageLevel\">\n                        <ion-select-option *ngFor=\"let item of globalService.languagesLevels\" [value]=\"item._id\">\n                            {{item.name}}\n                        </ion-select-option>\n                    </ion-select>\n                </ion-item>\n            </div>\n\n        </div>\n    </div>\n    <small class=\"text-error\" *ngIf=\"languagesList <= 0\">\n        Veuillez renseigner au moins une valeur et cliquer sur ajouter\n    </small>   \n    <div class=\"mt-1 text-left\">\n        <ion-button fill=\"outline\" class=\"btn-outline w-40\" color=\"primary\"\n            [disabled]=\"!form.get('languages').get('language').value || !form.get('languages').get('languageLevel').value\"\n            (click)=\"addLanguage()\">\n            Ajouter\n            <ion-icon slot=\"end\" name=\"add\"></ion-icon>\n        </ion-button>\n    </div>\n    <div class=\"mb-1 mt-1\">\n        <ul class=\"customList\">\n            <li *ngFor=\"let item of languagesList;let i =index;\">\n                <span class=\"text-primary text-left\">{{ item.language.name }} :\n                    {{ item.languageLevel.name }}</span>\n                <mat-icon class=\"cursor-pointer btn-round vertical-align ml-1\" (click)=\"deleteLanguage(i)\">\n                    close</mat-icon>\n            </li>\n        </ul>\n    </div>\n\n    <div formGroupName=\"programingLanguages\" class=\"mb-1\" fxLayout=\"row\" fxLayoutAlign=\"space-between\"\n        fxLayoutGap=\"20px\">\n        <div class=\"w-100\" fxLayout=\"column\" fxFlex.xs=\"45%\">\n            <app-multi-select label=\"Langages informatiques\" collection=\"programmingLanguages\"\n                formControlName=\"language\"></app-multi-select>\n            <small class=\"text-error\" *ngIf=\"form.get('programingLanguages.language').value?.length <= 0\">\n                Veuillez renseigner au moins une valeur\n            </small>\n        </div>\n        <div class=\"w-100\" fxLayout=\"column\" fxFlex.xs=\"45%\">\n            <app-multi-select label=\"Logiciels informatiques\" collection=\"logiciels\" formControlName=\"logiciel\">\n            </app-multi-select>\n            <small class=\"text-error\" *ngIf=\"form.get('programingLanguages.logiciel').value?.length <= 0\">\n                Veuillez renseigner au moins une valeur\n            </small>\n        </div>\n    </div>\n\n    <div class=\"mt-3 text-center\">\n        <ion-button type=\"submit\" class=\"w-80\" color=\"primary\" [disabled]=\"languagesList.length <= 0\n                    || form.get('skills').value?.length < 5\n                    || form.get('programingLanguages.logiciel').value?.length <= 0\n                    || form.get('programingLanguages.language').value?.length <= 0\">\n            Continuez\n        </ion-button>\n    </div>\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/advertisement/components/create/form-advertissement/form-advertissement.component.html":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/advertisement/components/create/form-advertissement/form-advertissement.component.html ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"steps-header ion-no-border\" mode=\"md\">\n    <ion-toolbar class=\"steps-toolbar\">\n        <ion-buttons slot=\"start\">\n            <ion-button [routerLink]=\"pageLink\" routerDirection=\"root\" class=\"roundbutton p-0\">\n                <ion-icon src=\"./assets/icon/arrow-back.svg\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n\n        <ion-title class=\"page-title\">\n            <h1 class=\"title mb-0\">Créer une annonce</h1>\n        </ion-title>\n    </ion-toolbar>\n    <div class=\"progressbar\">\n        <div class=\"porcent text-center\"\n            [ngStyle]=\"{'width': ( advertisementService.percentage | async | number: '1.0-0' ) + '%'}\">\n            <div class=\"counter text-center\">\n                {{ advertisementService.percentage | async | number: '1.0-0' }} %\n            </div>\n        </div>\n    </div>\n</ion-header>\n<ion-content [fullscreen]=\"true\" class=\"forms\">\n    <section class=\"steps-content mb-3\">\n        <article class=\"page-content\">\n            <router-outlet></router-outlet>\n        </article>\n    </section>\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/advertisement/components/create/slider-advertisement/slider-advertisement.component.html":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/advertisement/components/create/slider-advertisement/slider-advertisement.component.html ***!
  \******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"list-header ion-no-border\" mode=\"md\">\n    <ion-toolbar>\n        <ion-buttons routerLink=\"/dashboard/advertisement\" routerDirection=\"root\" class=\"roundbutton\" slot=\"start\">\n            <ion-icon src=\"./assets/icon/arrow-back.svg\"></ion-icon>\n        </ion-buttons>\n        <ion-title>Annonces</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content [fullscreen]=\"true\" class=\"forms\">\n    <section class=\"steps-content\">\n        <article class=\"page-content\">\n\n            <ion-slides pager=\"true\">\n\n                <ion-slide>\n                    <div class=\"slide\">\n                        <img src=\"./assets/img/slide1.jpg\" />\n                        <h2>Créer votre première annonce</h2>\n                        <p>\n                            En quelques minutes seulement, vous pouvez mettre en ligne votre annonce! Grace à son\n                            algorithme performant, jobwinwin vous présentera des profils adaptés à vos besoins.\n                        </p>\n                    </div>\n                </ion-slide>\n\n                <ion-slide>\n                    <img src=\"./assets/img/slide2.jpg\" />\n                    <h2>Remplir le formulaire</h2>\n                    <p>\n                        Il vous suffit de renseigner tous les éléments de l'annonce. Quelques éléments sont obligatoires\n                        pour nous permettre de sélectionner les candidats qui correspondent le mieux à vos attentes. Vous\n                        pourrez à tout moment, modifier ces informations.\n                    </p>\n                </ion-slide>\n\n                <ion-slide>\n                    <img src=\"./assets/img/slide3.jpg\" />\n                    <h2>Validation de votre annonce</h2>\n                    <p>\n                        Une fois votre annonce créée, elle apparaîtra en statut \"en cours de validation\". Une\n                        notification sera envoyée au responsable de votre entité pour une validation.Vous pourrez\n                        ensuite commencer à matcher avec des candidats!\n                    </p>\n                </ion-slide>\n\n            </ion-slides>\n\n        </article>\n        <div class=\"text-center mt-2 mb-3\">\n            <ion-button class=\"light-color w-80\" routerLink=\"/dashboard/advertisement/form/create-advertisement\"\n                routerDirection=\"root\">\n                <ion-icon name=\"add\"></ion-icon>\n                Ajouter une annonce\n            </ion-button>\n        </div>\n    </section>\n\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/advertisement/components/create/validate-advertisement/validate-advertisement.component.html":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/advertisement/components/create/validate-advertisement/validate-advertisement.component.html ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form class=\"d-block\">\n\n    <div class=\"text-center mt-2\">\n        <h2>{{advertisementService.advertisement.desiredJob}}</h2>\n        <p class=\"px-0\">Votre annonce de \"{{advertisementService.advertisement.desiredJob}}\" a été créée avec succès </p>\n        <p class=\"px-0\">Pour visualiser et modifier les informations, prévisualisez votre annonce.</p>\n        <p class=\"px-0\">Pour la valider et la publier, cliquez sur win. </p>\n        <p class=\"px-0\">avec Jobwinwin, swipez, matchez et rencontrez le candidat adéquat ! </p>\n    </div>\n    <div class=\"mt-3 text-center\">\n        <ion-button class=\"w-80\" color=\"primary\" (click)=\"previewAdvertisement()\">\n            Prévisualisez votre annonce\n        </ion-button>\n    </div>\n\n    <div class=\"mt-1 text-center\">\n        <ion-button class=\"btn-win w-80\" color=\"primary\" (click)=\"onSave()\">\n            <img src=\"./assets/icon/win-btn.svg\" alt=\"\">\n        </ion-button>\n    </div>\n\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/advertisement/components/details/ads-details/ads-details.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/advertisement/components/details/ads-details/ads-details.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"advertisementService.advertisement\">\n    <ion-header class=\"list-header ion-no-border\" mode=\"md\">\n        <ion-toolbar>\n            <ion-buttons routerLink=\"/dashboard/advertisement\" routerDirection=\"root\" class=\"roundbutton\" slot=\"start\">\n                <ion-icon src=\"./assets/icon/arrow-back.svg\"></ion-icon>\n            </ion-buttons>\n            <ion-buttons slot=\"primary\">\n                <ion-button >\n                    <ion-icon slot=\"icon-only\" ios=\"ellipsis-vertical\" md=\"ellipsis-vertical\"></ion-icon>\n                    <!-- <mat-menu #menu=\"matMenu\" [matMenuTriggerFor]=\"menu\">\n                        <button class=\"icon-menu-ads\" mat-menu-item>\n                            <span>Modifier annonce</span>\n                        </button>\n                    </mat-menu> -->\n                </ion-button>\n            </ion-buttons>\n            <ion-title>Annonces</ion-title>\n        </ion-toolbar>\n    </ion-header>\n    <ion-content [fullscreen]=\"true\" class=\"forms\">\n        <section class=\"detail-mission-content mt-1 mb-3\">\n            <div class=\"detail-mission\">\n                <h3 class=\"title\">\n                    <img src=\"./assets/icon/mission-generale-blue.svg\" alt=\"\" width=\"30px\">\n                    <span>Mission Générale</span>\n                    <mat-icon class=\"float-right\" (click)=\"openMission()\">edit</mat-icon>\n                </h3>\n                <span class=\"desc\">\n                    {{ advertisementService.advertisement.missions }}\n                </span>\n            </div>\n            <div class=\"detail-mission mt-2\">\n                <h3 class=\"title\">\n                    <img src=\"./assets/icon/Taches-blue.svg\" alt=\"\" width=\"30px\">\n                    <span>Descriptif de poste</span>\n                    <mat-icon class=\"float-right\" (click)=\"openTasks()\">edit</mat-icon>\n                </h3>\n                <div class=\"desc\">\n                    <ul class=\"list\">\n                        <li *ngFor=\"let description of advertisementService.advertisement.descriptions\">\n                            {{ description }}\n                        </li>\n                    </ul>\n                </div>\n            </div>\n            <div class=\"detail-mission mt-2\">\n                <h3 class=\"title\">\n                    <img src=\"./assets/icon/profil-blue.svg\" alt=\"\" width=\"30px\">\n                    <span>Prérequis</span>\n                    <mat-icon class=\"float-right\" (click)=\"openProfile()\">edit</mat-icon>\n                </h3>\n                <span class=\"desc\">\n                    <p>\n                        {{ advertisementService.advertisement.prerequisite }}\n                    </p>\n                    <h5 class=\"text-center\">\n                        <strong>Langue</strong>\n                    </h5>\n                    <ul class=\"list\">\n                        <li *ngFor=\"let item of languages\">\n                            {{ item.language.name }} : {{ item.languageLevel.name }}\n                        </li>\n                    </ul>\n                    <h5 class=\"text-center\">\n                        <strong>Compétences informatiques</strong>\n                    </h5>\n                    <ul class=\"list\" id=\"programming-languages\">\n                        <li *ngFor=\"let item of programingLanguages\"> {{ item }} </li>\n                    </ul>\n                </span>\n            </div>\n            <div class=\"detail-mission mt-2\">\n                <h3 class=\"title\">\n                    <img src=\"./assets/icon/profil-blue.svg\" alt=\"\" width=\"30px\">\n                    <span>Autres informations</span>\n                    <mat-icon class=\"float-right\" (click)=\"openOtherInfo()\">edit</mat-icon>\n                </h3>\n                <span class=\"desc\">\n                    <ul class=\"list\">\n                        <li *ngIf=\"infos.contract\">Type de contrat : {{ infos.contract.name }} </li>\n                        <li *ngIf=\"infos.jobType\">Type de poste : {{ infos.jobType.name }} </li>\n                        <li *ngIf=\"infos.jobMode\">Mode de travail : {{ infos.jobMode.name }} </li>\n                        <li *ngIf=\"infos.managerialLevel\">Niv. managérial : {{ infos.managerialLevel.name }} </li>\n                        <li *ngIf=\"infos.effective\">Effectif géré : {{ infos.effective.name }}</li>\n                    </ul>\n                </span>\n            </div>\n            <div class=\"detail-mission mt-2\">\n                <h3 class=\"title\">\n                    <img src=\"./assets/icon/calender.svg\" alt=\"\" width=\"30px\">\n                    <span>Date prise de poste</span>\n                    <mat-icon class=\"float-right\" (click)=\"openDate()\">edit</mat-icon>\n                </h3>\n                <span class=\"desc\">\n                    <p class=\"ml-2\">Le {{ advertisementService.advertisement.startedDate | date: 'dd/MM/yyyy' }} </p>\n                </span>\n            </div>\n            <!-- *appCanChangeStatus=\"advertisementService.advertisement.recruiter\" -->\n            <div class=\"detail-mission mt-2\" *ngIf=\"authService.user.role.name == 'Responsable principale' \"  >\n                <h3 class=\"title\">\n                    <img src=\"/assets/icon/statusAds.svg\" alt=\"\" width=\"30px\">\n                    <span>Statut</span>\n                    <mat-icon class=\"float-right\" (click)=\"openStatus()\">edit</mat-icon>\n                </h3>\n                <span class=\"desc\">\n                    <p class=\"ml-2\">{{ advertisementService.advertisement.status }} </p>\n                </span>\n            </div>\n        </section>\n    </ion-content>\n</ng-container>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/advertisement/components/details/ads-profile/ads-profile.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/advertisement/components/details/ads-profile/ads-profile.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"advertisementService.advertisement\">\n    <ion-header class=\"list-header ion-no-border\" mode=\"md\">\n        <ion-toolbar>\n            <ion-buttons routerLink=\"/dashboard/advertisement\" routerDirection=\"root\" class=\"roundbutton\" slot=\"start\">\n                <ion-icon src=\"./assets/icon/arrow-back.svg\"></ion-icon>\n            </ion-buttons>\n            <ion-buttons slot=\"primary\">\n                <ion-button>\n                    <ion-icon slot=\"icon-only\" ios=\"ellipsis-vertical\" md=\"ellipsis-vertical\"></ion-icon>\n                </ion-button>\n            </ion-buttons>\n            <ion-title>Annonces</ion-title>\n        </ion-toolbar>\n    </ion-header>\n    <ion-content [fullscreen]=\"true\" class=\"forms\">\n        <section class=\"detail-mission-content\">\n            <div class=\"d-block text-center mb-3 w-100\">\n                <h1 class=\"title title-border capitalize w-80\"> {{ advertisementService.advertisement.desiredJob }} </h1>\n                <img [src]=\"authService.user.company.logo ? (('backend_url' | env) + authService.user.company.logo.name) : './assets/img/default-image.svg'\"\n                    alt=\"profil Annonce\" class=\"image-circle\">\n            </div>\n\n            <div class=\"d-block mt-1 w-100\">\n                <div class=\"d-inline text-right align-middle w-30\">\n                    <img class=\"mr-2\" src=\"./assets/icon/calender.svg\" alt=\"calendar\" width=\"20px\">\n                </div>\n                <div class=\"d-inline text-left w-60\">\n                    <span>Édité le {{ advertisementService.advertisement.updatedAt | date: 'dd/MM' }}</span>\n                </div>\n            </div>\n            <div class=\"d-block mt-1 w-100\">\n                <div class=\"d-inline text-right align-middle w-30\">\n                    <img class=\"mr-2\" src=\"./assets/icon/win-blue.svg\" alt=\"Win\" width=\"20px\">\n                </div>\n                <div class=\"d-inline text-left w-60\">\n                    <span>{{ advertisementService.advertisement.wins }} wins</span>\n                </div>\n            </div>\n            <div class=\"d-block mt-1 w-100\">\n                <div class=\"d-inline text-right align-center w-30\">\n                    <img class=\"mr-2\" src=\"./assets/icon/status.svg\" alt=\"status\" width=\"20px\">\n                </div>\n                <div class=\"d-inline text-left w-60\">\n                    <span>Statut de l’annonce : <br>{{ advertisementService.advertisement.status }} <mat-slide-toggle class=\"align-middle\" color=\"primary\" [(ngModel)]=\"isChecked\" (click)=\"changeStatus()\"></mat-slide-toggle></span>\n                </div>\n                <!-- <div class=\"d-inline text-left w-60\">\n                    <span>Statut : {{ advertisementService.advertisement.status }}</span>\n                </div> -->\n            </div>\n            <div class=\"d-block mt-1 w-100\">\n                <div class=\"d-inline text-right align-middle w-30\">\n                    <img class=\"mr-2\" src=\"./assets/icon/recruiter.svg\" alt=\"recruiter\" width=\"20px\">\n                </div>\n                <div class=\"d-inline text-left w-60\" *ngIf=\"advertisementService.advertisement.recruiter || advertisementService.advertisement.recruiter\" >\n                    <span class=\"d-inline vertical-align mr-2\">\n                        {{ advertisementService.advertisement.recruiter.firstName }}\n                        {{ advertisementService.advertisement.recruiter.lastName }}\n                    </span>\n                </div>\n            </div>\n\n        </section>\n\n    </ion-content>\n</ng-container>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/advertisement/components/listes/listes.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/advertisement/components/listes/listes.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"list-header ion-no-border\" mode=\"md\">\n    <ion-toolbar>\n        <ion-buttons (click)=\"goBack()\" class=\"roundbutton\" slot=\"start\">\n            <ion-icon src=\"./assets/icon/arrow-back.svg\"></ion-icon>\n        </ion-buttons>\n        <ion-title>Annonces</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content [fullscreen]=\"true\" class=\"forms\">\n    <section class=\"steps-content\">\n        <article class=\"page-content\">\n\n            <form class=\"mb-1\">\n                <div class=\"d-block\">\n                    <div class=\"form-group position-relative d-inline w-100\">\n                        <input class=\"custom-input search-input border-bleu\" type=\"text\" name=\"search\"\n                            placeholder=\"Rechercher une annonce\" [(ngModel)]=\"search\" (ngModelChange)=\"onSearch()\">\n                        <span class=\"icon-search position-absolute\">\n                            <img src=\"./assets/icon/search.svg\">\n                        </span>\n                    </div>\n                </div>\n            </form>\n\n            <div class=\"text-center mb-1\">\n                <ion-button class=\"light-color w-60\"\n                    [routerLink]=\" advertisementService.advertisements.length > 0  ? '/dashboard/advertisement/form/create-advertisement' : '/dashboard/advertisement/slider-advertisement'\">\n                    <ion-icon name=\"add\"></ion-icon>\n                    Ajouter une annonce\n                </ion-button>\n            </div>\n\n            <div class=\"d-block\">\n                <!-- <div class=\"d-inline w-50 mt-1 text-left\">\n                    <h2 class=\"annonce-title\">Annonces</h2>\n                </div> -->\n\n                <div class=\"d-inline w-100 mt-1 text-right\">\n                    <p class=\"recent-ads\">Récent</p>\n                </div>\n            </div>\n\n            <ng-container *ngFor=\"let advertisement of advertisementService.advertisements\">\n                <ion-row class=\"advertisement-detail w-100 mt-1\"\n                [ngClass]=\"[advertisement.status === 'Ouverte' ? 'alert-valid' : '',  advertisement.status === 'En attente de validation' ? 'alert-attention' : '', advertisement.status === 'Close' ? 'alert-close' : '']\">\n                    <ion-col size=\"10\" class=\"ion-align-self-start\">\n                        <div class=\"w-10\" [ngClass]=\"{'animate__animated animate__tada animate__infinite infinite': advertisement.status === 'En attente de validation'}\">\n                            <ion-icon class=\"status-annoce\" *ngIf=\"advertisement.status === 'Ouverte'\" name=\"checkmark-circle\"></ion-icon>\n                            <ion-icon class=\"status-annoce\" *ngIf=\"advertisement.status === 'En attente de validation'\" name=\"alert-circle\"></ion-icon>\n                            <ion-icon class=\"status-annoce\" *ngIf=\"advertisement.status === 'Close'\" name=\"close-circle\"></ion-icon>\n                        </div>\n                        <div class=\"advertisement-data\">\n                            <h2 class=\"advertisement-name\">\n                                {{ advertisement.desiredJob }}\n                            </h2>\n                            <p class=\"city\">{{ advertisement.location }}</p>\n                            <p class=\"salary\">De {{ advertisement.supposedSalaryMin }} DH</p>\n                            <p class=\"salary\">à {{ advertisement.supposedSalaryMax }} DH</p>\n                        </div>\n                    </ion-col>\n                    <ion-col size=\"2\" class=\"ion-align-self-start\">\n                        <button mat-icon-button [matMenuTriggerFor]=\"menu\" class=\"more-btn\">\n                            <mat-icon>more_horiz</mat-icon>\n                        </button>\n                        <mat-menu #menu=\"matMenu\" class=\"advertisement-menu\">\n                            <button class=\"icon-menu-ads\" mat-menu-item\n                                [routerLink]=\"['detail-profile', advertisement._id]\">\n                                <img src=\"/assets/icon/statusAds.svg\" alt=\"status\">\n                                <span>Statut annonce</span>\n                            </button>\n                            <button class=\"icon-menu-ads\" mat-menu-item\n                                [routerLink]=\"['detail-annonce', advertisement._id]\">\n                                <img src=\"/assets/icon/updateAds.svg\" alt=\"status\">\n                                <span>Modifier annonce</span>\n                            </button>\n                                <button class=\"icon-menu-ads\" mat-menu-item [routerLink]=\"['/dashboard']\" [queryParams]=\"{advertismentId: advertisement._id}\">\n                                <img src=\"/assets/icon/swipe.svg\" alt=\"status\">\n                                <span>Swipe & match</span>\n                            </button>\n    \n                        </mat-menu>\n                    </ion-col>\n                    <ion-col size=\"3\" class=\"advertisement-info text-left\">\n                        {{advertisement.views}} <br>\n                        Vues\n                    </ion-col>\n                    <ion-col size=\"3\" class=\"advertisement-info text-left\">\n                        {{ advertisement.wins }} <br>\n                        Wins\n                    </ion-col>\n                    <ion-col size=\"6\" class=\"advertisement-info text-left\">\n                        Édité le {{advertisement.updatedAt | date:'dd/MM'}}<br>\n                        {{ advertisement.recruiter.firstName }} {{ advertisement.recruiter.lastName }}\n                    </ion-col>\n                </ion-row>\n            </ng-container>\n        </article>\n    </section>\n\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/advertisement/components/update/date/date.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/advertisement/components/update/date/date.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form class=\"d-block\" [formGroup]=\"form\" (ngSubmit)=\"onSave()\">\n    <ion-header class=\"list-header ion-no-border\" mode=\"md\">\n        <ion-toolbar>\n            <ion-buttons (click)=\"close()\" routerDirection=\"root\" class=\"roundbutton\" slot=\"start\">\n                <ion-icon src=\"./assets/icon/arrow-back.svg\"></ion-icon>\n            </ion-buttons>\n            <ion-title>Date prise de poste</ion-title>\n        </ion-toolbar>\n    </ion-header>\n    <ion-content [fullscreen]=\"true\" class=\"forms\">\n        <section class=\"steps-content\">\n            <div class=\"page-content\">\n                <ion-item class=\"custom-datetime w-100\">\n                    <ion-label position=\"floating\">Date de prise de poste</ion-label>\n                    <ion-datetime placeholder=\"Sélectionner\" formControlName=\"startedDate\">\n                    </ion-datetime>\n                </ion-item>\n                <div class=\"text-right mt-2\">\n                    <ion-button type=\"submit\" [disabled]=\"!form.valid\">\n                        Enregistrer\n                    </ion-button>\n                </div>\n            </div>\n        </section>\n    </ion-content>\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/advertisement/components/update/mission/mission.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/advertisement/components/update/mission/mission.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form class=\"d-block\" [formGroup]=\"form\" (ngSubmit)=\"onSave()\">\n    <ion-header class=\"list-header ion-no-border\" mode=\"md\">\n        <ion-toolbar>\n            <ion-buttons (click)=\"close()\" routerDirection=\"root\" class=\"roundbutton\" slot=\"start\">\n                <ion-icon src=\"./assets/icon/arrow-back.svg\"></ion-icon>\n            </ion-buttons>\n            <ion-title>Mission générale</ion-title>\n        </ion-toolbar>\n    </ion-header>\n    <ion-content [fullscreen]=\"true\" class=\"forms\">\n        <section class=\"steps-content\">\n            <div class=\"page-content\">\n                <mat-form-field class=\"w-100\">\n                    <mat-label>Missions</mat-label>\n                    <textarea matInput placeholder=\"\" matTextareaAutosize matAutosizeMinRows=1 matAutosizeMaxRows=7 formControlName=\"missions\">\n                    </textarea>\n                </mat-form-field>\n                <div class=\"text-right mt-1\">\n                    <ion-button type=\"submit\" [disabled]=\"!form.valid\">\n                        Enregistrer\n                    </ion-button>\n                </div>\n            </div>\n        </section>\n    </ion-content>\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/advertisement/components/update/other-info/other-info.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/advertisement/components/update/other-info/other-info.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form class=\"d-block\" [formGroup]=\"form\" (ngSubmit)=\"onSave()\">\n    <ion-header class=\"list-header ion-no-border\" mode=\"md\">\n        <ion-toolbar>\n            <ion-buttons (click)=\"close()\" routerDirection=\"root\" class=\"roundbutton\" slot=\"start\">\n                <ion-icon src=\"./assets/icon/arrow-back.svg\"></ion-icon>\n            </ion-buttons>\n            <ion-title>Autre information</ion-title>\n        </ion-toolbar>\n    </ion-header>\n    <ion-content [fullscreen]=\"true\" class=\"forms\">\n        <section class=\"steps-content\">\n            <div class=\"page-content\">\n                <div class=\"mt-1\" fxLayout=\"row\" fxLayoutAlign=\"space-between\" fxLayoutGap=\"20px\">\n\n                    <div fxLayout=\"column\" fxFlex.xs=\"45%\">\n                        <ion-item class=\"custom-select w-100\">\n                            <ion-label position=\"floating\">Type de contrat <span class=\"required\">*</span></ion-label>\n                            <ion-select class=\"w-100\" ok-text=\"Ok\" cancel-text=\"Annuler\" placeholder=\"Sélectionner\"\n                                formControlName=\"contract\">\n                                <ion-select-option *ngFor=\"let item of globalService.contracts\" [value]=\"item._id\">\n                                    {{item.name}}\n                                </ion-select-option>\n                            </ion-select>\n                        </ion-item>\n                        <small class=\"text-error\"\n                            *ngIf=\"form.get('contract').invalid && (form.get('contract').dirty || form.get('contract').touched) \">\n                            Champ obligatoire\n                        </small>\n                    </div>\n\n                    <div fxLayout=\"column\" fxFlex.xs=\"45%\">\n                        <ion-item class=\"custom-select w-100\">\n                            <ion-label position=\"floating\">Type de Poste <span class=\"required\">*</span></ion-label>\n                            <ion-select class=\"w-100\" ok-text=\"Ok\" cancel-text=\"Annuler\" placeholder=\"Sélectionner\"\n                                formControlName=\"jobType\">\n                                <ion-select-option *ngFor=\"let item of globalService.jobTypes\" [value]=\"item._id\">\n                                    {{item.name}}</ion-select-option>\n                            </ion-select>\n                        </ion-item>\n                        <small class=\"text-error\"\n                            *ngIf=\"form.get('jobType').invalid && (form.get('jobType').dirty || form.get('jobType').touched) \">\n                            Champ obligatoire\n                        </small>\n                    </div>\n\n                </div>\n\n                <div fxLayout=\"row\" fxLayoutAlign=\"space-between\" fxLayoutGap=\"20px\">\n\n                    <div fxLayout=\"column\" fxFlex.xs=\"45%\">\n                        <ion-item class=\"custom-select w-100\">\n                            <ion-label position=\"floating\">Mode de travail <span class=\"required\">*</span></ion-label>\n                            <ion-select class=\"w-100\" ok-text=\"Ok\" cancel-text=\"Annuler\" placeholder=\"Sélectionner\"\n                                formControlName=\"jobMode\">\n                                <ion-select-option *ngFor=\"let item of globalService.jobModes\" [value]=\"item._id\">\n                                    {{item.name}}</ion-select-option>\n                            </ion-select>\n                        </ion-item>\n                        <small class=\"text-error\"\n                            *ngIf=\"form.get('jobMode').invalid && (form.get('jobMode').dirty || form.get('jobMode').touched) \">\n                            Champ obligatoire\n                        </small>\n                    </div>\n                    <div fxLayout=\"column\" fxFlex.xs=\"45%\">\n                        <ion-item class=\"custom-select w-100\">\n                            <ion-label position=\"floating\">Poste basé à <span class=\"required\">*</span></ion-label>\n                            <ion-select class=\"w-100\" ok-text=\"Ok\" cancel-text=\"Annuler\" placeholder=\"Sélectionner\"\n                                formControlName=\"location\">\n                                <ion-select-option *ngFor=\"let item of globalService.locations\" [value]=\"item._id\">\n                                    {{item.name}}\n                                </ion-select-option>\n                            </ion-select>\n                        </ion-item>\n                        <small class=\"text-error\"\n                            *ngIf=\"form.get('location').invalid && (form.get('location').dirty || form.get('location').touched) \">\n                            Champ obligatoire\n                        </small>\n                    </div>\n\n                </div>\n\n                <div fxLayout=\"row\" fxLayoutAlign=\"space-between\" fxLayoutGap=\"20px\">\n                    <div fxLayout=\"column\" fxFlex.xs=\"45%\">\n                        <ion-item class=\"custom-select w-100\">\n                            <ion-label position=\"floating\">Niv. managérial <span class=\"required\">*</span></ion-label>\n                            <ion-select class=\"w-100\" ok-text=\"Ok\" cancel-text=\"Annuler\" placeholder=\"Sélectionner\"\n                                formControlName=\"managerialLevel\">\n                                <ion-select-option *ngFor=\"let item of globalService.managerialLevels\"\n                                    [value]=\"item._id\">\n                                    {{item.name}}\n                                </ion-select-option>\n                            </ion-select>\n                        </ion-item>\n                        <small class=\"text-error\"\n                            *ngIf=\"form.get('managerialLevel').invalid && (form.get('managerialLevel').dirty || form.get('managerialLevel').touched) \">\n                            Champ obligatoire\n                        </small>\n                    </div>\n\n                    <div fxLayout=\"column\" fxFlex.xs=\"45%\">\n                        <ion-item class=\"custom-select w-100\">\n                            <ion-label position=\"floating\">Effectif géré <span class=\"required\">*</span></ion-label>\n                            <ion-select class=\"w-100\" ok-text=\"Ok\" cancel-text=\"Annuler\" placeholder=\"Sélectionner\"\n                                formControlName=\"effective\">\n                                <ion-select-option *ngFor=\"let effective of globalService.effectives\"\n                                    [value]=\"effective._id\">\n                                    {{ effective.name }}\n                                </ion-select-option>\n                            </ion-select>\n                        </ion-item>\n                        <small class=\"text-error\"\n                            *ngIf=\"form.get('effective').invalid && (form.get('effective').dirty || form.get('effective').touched) \">\n                            Champ obligatoire\n                        </small>\n                    </div>\n\n                </div>\n\n                <h4 class=\"pt-2\">Salaire proposé (Dhs)</h4>\n                <div fxLayout=\"row\" fxLayoutAlign=\"space-between\" fxLayoutGap=\"20px\">\n                    <div class=\"w-100\" fxLayout=\"column\" fxFlex.xs=\"45%\">\n                        <ion-item class=\"custom-input\">\n                            <ion-label position=\"floating\">À partir de <span class=\"required\">*</span></ion-label>\n                            <ion-input type=\"number\" formControlName=\"supposedSalaryMin\"></ion-input>\n                        </ion-item>\n                        <small class=\"text-error\"\n                            *ngIf=\"form.get('supposedSalaryMin').invalid && (form.get('supposedSalaryMin').dirty || form.get('supposedSalaryMin').touched) \">\n                            Champ obligatoire\n                        </small>\n                    </div>\n\n                    <div class=\"w-100\" fxLayout=\"column\" fxFlex.xs=\"45%\">\n                        <ion-item class=\"custom-input\">\n                            <ion-label position=\"floating\">Jusqu'à <span class=\"required\">*</span></ion-label>\n                            <ion-input type=\"number\" formControlName=\"supposedSalaryMax\"></ion-input>\n                        </ion-item>\n                        <small class=\"text-error\"\n                            *ngIf=\"form.get('supposedSalaryMax').invalid && (form.get('supposedSalaryMax').dirty || form.get('supposedSalaryMax').touched) \">\n                            Champ obligatoire\n                        </small>\n                    </div>\n                </div>\n                <small class=\"text-error\" *ngIf=\"form.get('supposedSalaryMax').touched && !form.get('supposedSalaryMax').hasError('required') \n                && form.hasError('salaryErreur')\">\n                    Le salaire maximum doit être supérieur au salaire minimum\n                </small>\n\n                <div class=\"w-100\">\n                    <ion-item class=\"custom-input\">\n                        <ion-label position=\"floating\">Autres avantages</ion-label>\n                        <ion-input type=\"text\" formControlName=\"otherAdvantage\"></ion-input>\n                    </ion-item>\n                </div>\n\n                <div class=\"text-right mt-2\">\n                    <ion-button type=\"submit\" [disabled]=\"!form.valid\">\n                        Enregistrer\n                    </ion-button>\n                </div>\n\n            </div>\n        </section>\n    </ion-content>\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/advertisement/components/update/profil/profil.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/advertisement/components/update/profil/profil.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form class=\"d-block\" [formGroup]=\"form\" (ngSubmit)=\"onSave()\">\n    <ion-header class=\"list-header ion-no-border\" mode=\"md\">\n        <ion-toolbar>\n            <ion-buttons (click)=\"close()\" routerDirection=\"root\" class=\"roundbutton\" slot=\"start\">\n                <ion-icon src=\"./assets/icon/arrow-back.svg\"></ion-icon>\n            </ion-buttons>\n            <ion-title>Prérequis</ion-title>\n        </ion-toolbar>\n    </ion-header>\n    <ion-content [fullscreen]=\"true\" class=\"forms\">\n        <section class=\"steps-content\">\n            <div class=\"page-content\">\n\n                <div class=\"w-100\">\n                    <ion-item class=\"custom-input\">\n                        <ion-label position=\"floating\">Pré-requis <span class=\"required\">*</span></ion-label>\n                        <ion-input type=\"text\" formControlName=\"prerequisite\"></ion-input>\n                    </ion-item>\n                    <small class=\"text-error\"\n                        *ngIf=\"form.get('prerequisite').invalid && (form.get('prerequisite').dirty || form.get('prerequisite').touched) \">\n                        Champ obligatoire\n                    </small>\n                </div>\n\n                <app-multi-select label=\"Soft skills\" [limit]=\"5\" collection=\"softSkills\" formControlName=\"skills\">\n                </app-multi-select>\n                \n                <!-- <small class=\"text-error\" *ngIf=\"form.get('skills').value?.length === 0 \">\n                    Veuillez renseigner ces valeurs\n                </small>\n                <small class=\"text-error\" *ngIf=\"form.get('skills').value?.length < 5 && form.get('skills').value?.length !== 0\">\n                    Veuillez renseigner au moins 5 valeur\n                </small>  -->\n\n                <small class=\"text-error\" *ngIf=\"form.get('skills').value?.length < 5\">\n                    Vous pouvez choisir jusqu'à 5 soft skills dans la liste\n                </small>\n\n\n                <div formGroupName=\"languages\">\n                    <div class=\"mt-1\" fxLayout=\"row\" fxLayoutAlign=\"space-between\" fxLayoutGap=\"20px\">\n\n                        <ion-item class=\"custom-select w-100\" fxLayout=\"column\" fxFlex.xs=\"45%\">\n                            <ion-label position=\"floating\">Langue</ion-label>\n                            <ion-select class=\"w-100\" ok-text=\"Ok\" cancel-text=\"Annuler\" placeholder=\"Sélectionner\"\n                                formControlName=\"language\">\n                                <ion-select-option\n                                    *ngFor=\"let item of globalService.languages | languages:languagesList\"\n                                    [value]=\"item._id\">\n                                    {{item.name}}\n                                </ion-select-option>\n                            </ion-select>\n                        </ion-item>\n\n                        <ion-item class=\"custom-select w-100\" fxLayout=\"column\" fxFlex.xs=\"45%\">\n                            <ion-label position=\"floating\">Niveau de langue</ion-label>\n                            <ion-select class=\"w-100\" ok-text=\"Ok\" cancel-text=\"Annuler\" placeholder=\"Sélectionner\"\n                                formControlName=\"languageLevel\">\n                                <ion-select-option *ngFor=\"let item of globalService.languagesLevels\" [value]=\"item._id\">\n                                    {{item.name}}\n                                </ion-select-option>\n                            </ion-select>\n                        </ion-item>\n\n                    </div>\n                    <small class=\"text-error\" *ngIf=\"languagesList <= 0\">\n                        Veuillez renseigner au moins une valeur\n                    </small>  \n                </div>\n                <div class=\"mt-1 text-left\">\n                    <ion-button fill=\"outline\" class=\"btn-outline w-40\" color=\"primary\"\n                        [disabled]=\"form.get('languages').invalid\" (click)=\"addLanguage()\">\n                        Ajouter\n                        <ion-icon slot=\"end\" name=\"add\"></ion-icon>\n                    </ion-button>\n                </div>\n                <div class=\"mb-1 mt-1\">\n                    <ul class=\"customList\">\n                        <li *ngFor=\"let item of languagesList;let i =index;\">\n                            <span class=\"text-primary text-left\">{{ item.language.name }} :\n                                {{ item.languageLevel.name }}</span>\n                            <mat-icon class=\"cursor-pointer btn-round vertical-align ml-1\" (click)=\"deleteLanguage(i)\">\n                                close</mat-icon>\n                        </li>\n                    </ul>\n                </div>\n\n\n                <div formGroupName=\"programingLanguages\" class=\"mb-1\" fxLayout=\"row\" fxLayoutAlign=\"space-between\"\n                    fxLayoutGap=\"20px\">\n                    <div fxLayout=\"column\" fxFlex.xs=\"45%\">\n                        <app-multi-select label=\"Langages informatiques\" collection=\"programmingLanguages\"\n                            formControlName=\"language\"></app-multi-select>\n                        <small class=\"text-error\" *ngIf=\"form.get('programingLanguages.language').value?.length <= 0\">\n                            Veuillez choisir au moins un Langages informatiques.\n                        </small>\n                    </div>\n                    <div fxLayout=\"column\" fxFlex.xs=\"45%\">\n                        <app-multi-select label=\"Logiciels informatiques\" collection=\"logiciels\"\n                            formControlName=\"logiciel\">\n                        </app-multi-select>\n                        <small class=\"text-error\" *ngIf=\"form.get('programingLanguages.logiciel').value?.length <= 0\">\n                            Veuillez choisir au moins un Logiciels informatiques.\n                        </small>\n                    </div>\n                </div>\n\n                <div class=\"w-100\">\n                    <app-multi-select label=\"Formation souhaitée\" collection=\"typeOfTrainings\" formControlName=\"typeOfTraining\">\n                    </app-multi-select>\n                    <small class=\"text-error\" *ngIf=\"form.get('typeOfTraining').value?.length <= 0\">\n                        Veuillez choisir au moins une Formation.\n                    </small>\n                </div>\n                <!-- <ion-item class=\"custom-select w-100\">\n                    <ion-label position=\"floating\">Formation souhaitée <span class=\"required\">*</span>\n                    </ion-label>\n                    <ion-select class=\"w-100\" ok-text=\"Ok\" cancel-text=\"Annuler\" placeholder=\"Sélectionner\"\n                        formControlName=\"typeOfTraining\">\n                        <ion-select-option *ngFor=\"let typeOfTraining of globalService.typeOfTrainings\"\n                            [value]=\"typeOfTraining._id\">\n                            {{ typeOfTraining.name }}\n                        </ion-select-option>\n                    </ion-select>\n                </ion-item>\n                <small class=\"text-error\"\n                    *ngIf=\"form.get('typeOfTraining').invalid && (form.get('typeOfTraining').dirty || form.get('typeOfTraining').touched) \">\n                    Champ obligatoire\n                </small> -->\n\n                <ion-item class=\"custom-select w-100\">\n                    <ion-label position=\"floating\">Niveau d'études <span class=\"required\">*</span></ion-label>\n                    <ion-select class=\"w-100\" ok-text=\"Ok\" cancel-text=\"Annuler\" placeholder=\"Sélectionner\"\n                        formControlName=\"levelOfStudies\">\n                        <ion-select-option *ngFor=\"let item of globalService.levelOfStudies\" [value]=\"item._id\">\n                            {{item.name}}</ion-select-option>\n                    </ion-select>\n                </ion-item>\n                <small class=\"text-error\"\n                    *ngIf=\"form.get('levelOfStudies').invalid && (form.get('levelOfStudies').dirty || form.get('levelOfStudies').touched) \">\n                    Champ obligatoire\n                </small>\n\n                <ion-item class=\"custom-select w-100\">\n                    <ion-label position=\"floating\">Expérience <span class=\"required\">*</span></ion-label>\n                    <ion-select class=\"w-100\" ok-text=\"Ok\" cancel-text=\"Annuler\" placeholder=\"Sélectionner\"\n                        formControlName=\"experienceYears\">\n                        <ion-select-option *ngFor=\"let experience of globalService.experiences\"\n                            [value]=\"experience._id\">\n                            {{ experience.name }}\n                        </ion-select-option>\n                    </ion-select>\n                </ion-item>\n                <small class=\"text-error\"\n                    *ngIf=\"form.get('experienceYears').invalid && (form.get('experienceYears').dirty || form.get('experienceYears').touched) \">\n                    Champ obligatoire\n                </small>\n                \n                <div class=\"text-right mt-2\">\n                    <ion-button type=\"submit\" [disabled]=\"languagesList.length <= 0\n                    || form.get('programingLanguages.logiciel').value?.length <= 0\n                    || form.get('programingLanguages.language').value?.length <= 0 || !form.valid\">\n                        Enregistrer\n                    </ion-button>\n                </div>\n\n            </div>\n        </section>\n    </ion-content>\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/advertisement/components/update/status/status.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/advertisement/components/update/status/status.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form class=\"d-block\" [formGroup]=\"form\" (ngSubmit)=\"changeStatus()\">\n  <ion-header class=\"list-header ion-no-border\" mode=\"md\">\n    <ion-toolbar>\n      <ion-buttons (click)=\"close()\" routerDirection=\"root\" class=\"roundbutton\" slot=\"start\">\n        <ion-icon src=\"./assets/icon/arrow-back.svg\"></ion-icon>\n      </ion-buttons>\n      <ion-title>Statut</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content [fullscreen]=\"true\" class=\"forms\">\n    <section class=\"steps-content\">\n      <div class=\"page-content\">\n        <ion-item class=\"custom-select w-100\">\n          <ion-label position=\"floating\">Statut <span class=\"required\">*</span></ion-label>\n          <ion-select class=\"w-100\" ok-text=\"Ok\" cancel-text=\"Annuler\" placeholder=\"Sélectionner\"\n            formControlName=\"status\">\n            <ion-select-option value=\"En attente de validation\">\n              En attente de validation\n            </ion-select-option>\n            <ion-select-option value=\"Ouverte\">\n              Publiée\n            </ion-select-option>\n            <ion-select-option value=\"Close\">\n              Close\n            </ion-select-option>\n          </ion-select>\n        </ion-item>\n        <div class=\"text-right mt-2\">\n          <ion-button type=\"ngSubmit\" [disabled]=\"!form.valid\">\n            Enregistrer\n          </ion-button>\n      </div>\n      </div>\n    </section>\n  </ion-content>\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/advertisement/components/update/task/task.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/advertisement/components/update/task/task.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"list-header ion-no-border\" mode=\"md\">\n    <ion-toolbar>\n        <ion-buttons (click)=\"close()\" class=\"roundbutton\" slot=\"start\">\n            <ion-icon src=\"./assets/icon/arrow-back.svg\"></ion-icon>\n        </ion-buttons>\n        <ion-title>Descriptif du poste</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content [fullscreen]=\"true\" class=\"forms\">\n    <section class=\"steps-content\">\n        <div class=\"page-content\">\n            <form class=\"d-block\" [formGroup]=\"form\">\n\n                <div class=\"w-100\">\n                    <app-multi-select label=\"Intitulés d'usage\" collection=\"usageTitles\" formControlName=\"usageTitles\">\n                    </app-multi-select>\n                    <small class=\"text-error\" *ngIf=\"form.get('usageTitles').value?.length <= 0\">\n                        Veuillez choisir au moins un intitulés d'usage.\n                    </small>\n                </div>\n\n                <div class=\"w-100\">\n                    <ion-item class=\"custom-select w-100\">\n                        <ion-label position=\"floating\">Fonction <span class=\"required\">*</span></ion-label>\n                        <ion-select class=\"w-100\" ok-text=\"Ok\" cancel-text=\"Annuler\" placeholder=\"Sélectionner\"\n                            formControlName=\"function\">\n                            <ion-select-option *ngFor=\"let item of globalService.functions\" [value]=\"item._id\">\n                                {{item.name}}\n                            </ion-select-option>\n                        </ion-select>\n                    </ion-item>\n                    <small class=\"text-error\"\n                        *ngIf=\"form.get('function').invalid && (form.get('function').dirty || form.get('function').touched) \">\n                        Champ obligatoire\n                    </small>\n                </div>\n\n                <div class=\"w-100 mt-1\">\n                    <ion-item class=\"custom-input\">\n                        <ion-label position=\"floating\">Poste à pourvoir <span class=\"required\">*</span></ion-label>\n                        <ion-input type=\"text\" formControlName=\"desiredJob\"></ion-input>\n                    </ion-item>\n                    <small class=\"text-error\"\n                        *ngIf=\"form.get('desiredJob').invalid && (form.get('desiredJob').dirty || form.get('desiredJob').touched) \">\n                        Champ obligatoire\n                    </small>\n                </div>\n\n                <div class=\"w-100\">\n                    <ion-item class=\"custom-input\">\n                        <ion-label position=\"floating\">Descriptif de poste <span class=\"required\">*</span></ion-label>\n                        <ion-input type=\"text\" formControlName=\"descriptions\" #description></ion-input>\n                        <ion-icon (click)=\"addTask(description)\" name=\"add\"></ion-icon>\n                    </ion-item>\n                    <small class=\"text-error\" *ngIf=\"descriptions.length <= 0\">\n                        Veuillez Ajouter au moins une description.\n                    </small>\n                </div>\n            </form>\n            <div class=\"mb-1 mt-1\">\n                <ul class=\"customList\">\n                    <li *ngFor=\"let description of descriptions; let i = index;\">\n                        {{ description }}\n                        <span class=\"text-primary text-left\" (click)=\"deleteTask(i)\">\n                            <mat-icon class=\"cursor-pointer btn-round vertical-align ml-1\">close</mat-icon>\n                        </span><br>\n                    </li>\n                </ul>\n            </div>\n\n            <div class=\"text-right mt-2\">\n                <ion-button (click)=\"onSave()\" [disabled]=\"!form.valid || descriptions.length <= 0\">\n                    Enregistrer\n                </ion-button>\n            </div>\n            \n        </div>\n    </section>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/advertisement/advertisement-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/advertisement/advertisement-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: AdvertisementRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvertisementRoutingModule", function() { return AdvertisementRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_create_create_advertisement_create_advertisement_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/create/create-advertisement/create-advertisement.component */ "./src/app/pages/advertisement/components/create/create-advertisement/create-advertisement.component.ts");
/* harmony import */ var _components_create_experience_required_experience_required_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/create/experience-required/experience-required.component */ "./src/app/pages/advertisement/components/create/experience-required/experience-required.component.ts");
/* harmony import */ var _components_create_form_advertissement_form_advertissement_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/create/form-advertissement/form-advertissement.component */ "./src/app/pages/advertisement/components/create/form-advertissement/form-advertissement.component.ts");
/* harmony import */ var _components_create_slider_advertisement_slider_advertisement_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/create/slider-advertisement/slider-advertisement.component */ "./src/app/pages/advertisement/components/create/slider-advertisement/slider-advertisement.component.ts");
/* harmony import */ var _components_create_validate_advertisement_validate_advertisement_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/create/validate-advertisement/validate-advertisement.component */ "./src/app/pages/advertisement/components/create/validate-advertisement/validate-advertisement.component.ts");
/* harmony import */ var _components_details_ads_details_ads_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/details/ads-details/ads-details.component */ "./src/app/pages/advertisement/components/details/ads-details/ads-details.component.ts");
/* harmony import */ var _components_details_ads_profile_ads_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/details/ads-profile/ads-profile.component */ "./src/app/pages/advertisement/components/details/ads-profile/ads-profile.component.ts");
/* harmony import */ var _components_listes_listes_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/listes/listes.component */ "./src/app/pages/advertisement/components/listes/listes.component.ts");











const routes = [
    {
        path: '',
        component: _components_listes_listes_component__WEBPACK_IMPORTED_MODULE_10__["ListesComponent"]
    },
    {
        path: 'slider-advertisement',
        component: _components_create_slider_advertisement_slider_advertisement_component__WEBPACK_IMPORTED_MODULE_6__["SliderAdvertisementComponent"]
    },
    {
        path: 'form',
        component: _components_create_form_advertissement_form_advertissement_component__WEBPACK_IMPORTED_MODULE_5__["FormAdvertissementComponent"],
        children: [
            {
                path: 'create-advertisement',
                component: _components_create_create_advertisement_create_advertisement_component__WEBPACK_IMPORTED_MODULE_3__["CreateAdvertisementComponent"],
                data: { pagelink: '/dashboard/advertisement' }
            },
            {
                path: 'experience-required',
                component: _components_create_experience_required_experience_required_component__WEBPACK_IMPORTED_MODULE_4__["ExperienceRequiredComponent"],
                data: { pagelink: '/dashboard/advertisement/form/create-advertisement' }
            },
            {
                path: 'validate-advertisement',
                component: _components_create_validate_advertisement_validate_advertisement_component__WEBPACK_IMPORTED_MODULE_7__["ValidateAdvertisementComponent"],
                data: { pagelink: '/dashboard/advertisement/form/experience-required' }
            },
        ]
    },
    {
        path: 'detail-annonce/:id',
        component: _components_details_ads_details_ads_details_component__WEBPACK_IMPORTED_MODULE_8__["AdsDetailsComponent"]
    },
    {
        path: 'detail-profile/:id',
        component: _components_details_ads_profile_ads_profile_component__WEBPACK_IMPORTED_MODULE_9__["AdsProfileComponent"]
    }
];
let AdvertisementRoutingModule = class AdvertisementRoutingModule {
};
AdvertisementRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AdvertisementRoutingModule);



/***/ }),

/***/ "./src/app/pages/advertisement/advertisement.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/advertisement/advertisement.module.ts ***!
  \*************************************************************/
/*! exports provided: AdvertisementModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvertisementModule", function() { return AdvertisementModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _advertisement_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./advertisement-routing.module */ "./src/app/pages/advertisement/advertisement-routing.module.ts");
/* harmony import */ var _components_create_create_advertisement_create_advertisement_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/create/create-advertisement/create-advertisement.component */ "./src/app/pages/advertisement/components/create/create-advertisement/create-advertisement.component.ts");
/* harmony import */ var _components_create_experience_required_experience_required_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/create/experience-required/experience-required.component */ "./src/app/pages/advertisement/components/create/experience-required/experience-required.component.ts");
/* harmony import */ var _components_create_slider_advertisement_slider_advertisement_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/create/slider-advertisement/slider-advertisement.component */ "./src/app/pages/advertisement/components/create/slider-advertisement/slider-advertisement.component.ts");
/* harmony import */ var _components_create_validate_advertisement_validate_advertisement_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/create/validate-advertisement/validate-advertisement.component */ "./src/app/pages/advertisement/components/create/validate-advertisement/validate-advertisement.component.ts");
/* harmony import */ var _components_details_ads_details_ads_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/details/ads-details/ads-details.component */ "./src/app/pages/advertisement/components/details/ads-details/ads-details.component.ts");
/* harmony import */ var _components_details_ads_profile_ads_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/details/ads-profile/ads-profile.component */ "./src/app/pages/advertisement/components/details/ads-profile/ads-profile.component.ts");
/* harmony import */ var _components_listes_listes_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/listes/listes.component */ "./src/app/pages/advertisement/components/listes/listes.component.ts");
/* harmony import */ var _components_update_date_date_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/update/date/date.component */ "./src/app/pages/advertisement/components/update/date/date.component.ts");
/* harmony import */ var _components_update_mission_mission_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/update/mission/mission.component */ "./src/app/pages/advertisement/components/update/mission/mission.component.ts");
/* harmony import */ var _components_update_profil_profil_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/update/profil/profil.component */ "./src/app/pages/advertisement/components/update/profil/profil.component.ts");
/* harmony import */ var _components_update_task_task_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/update/task/task.component */ "./src/app/pages/advertisement/components/update/task/task.component.ts");
/* harmony import */ var _components_update_other_info_other_info_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/update/other-info/other-info.component */ "./src/app/pages/advertisement/components/update/other-info/other-info.component.ts");
/* harmony import */ var _components_update_status_status_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/update/status/status.component */ "./src/app/pages/advertisement/components/update/status/status.component.ts");
/* harmony import */ var _components_create_form_advertissement_form_advertissement_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/create/form-advertissement/form-advertissement.component */ "./src/app/pages/advertisement/components/create/form-advertissement/form-advertissement.component.ts");


















let AdvertisementModule = class AdvertisementModule {
};
AdvertisementModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_components_create_create_advertisement_create_advertisement_component__WEBPACK_IMPORTED_MODULE_4__["CreateAdvertisementComponent"], _components_create_validate_advertisement_validate_advertisement_component__WEBPACK_IMPORTED_MODULE_7__["ValidateAdvertisementComponent"],
            _components_create_experience_required_experience_required_component__WEBPACK_IMPORTED_MODULE_5__["ExperienceRequiredComponent"],
            _components_update_mission_mission_component__WEBPACK_IMPORTED_MODULE_12__["MissionComponent"],
            _components_update_task_task_component__WEBPACK_IMPORTED_MODULE_14__["TaskComponent"],
            _components_update_profil_profil_component__WEBPACK_IMPORTED_MODULE_13__["ProfilComponent"],
            _components_update_date_date_component__WEBPACK_IMPORTED_MODULE_11__["DateComponent"],
            _components_listes_listes_component__WEBPACK_IMPORTED_MODULE_10__["ListesComponent"],
            _components_details_ads_profile_ads_profile_component__WEBPACK_IMPORTED_MODULE_9__["AdsProfileComponent"],
            _components_details_ads_details_ads_details_component__WEBPACK_IMPORTED_MODULE_8__["AdsDetailsComponent"],
            _components_create_slider_advertisement_slider_advertisement_component__WEBPACK_IMPORTED_MODULE_6__["SliderAdvertisementComponent"],
            _components_update_other_info_other_info_component__WEBPACK_IMPORTED_MODULE_15__["OtherInfoComponent"],
            _components_update_status_status_component__WEBPACK_IMPORTED_MODULE_16__["StatusComponent"],
            _components_create_form_advertissement_form_advertissement_component__WEBPACK_IMPORTED_MODULE_17__["FormAdvertissementComponent"]
        ],
        imports: [
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
            _advertisement_routing_module__WEBPACK_IMPORTED_MODULE_3__["AdvertisementRoutingModule"]
        ]
    })
], AdvertisementModule);



/***/ }),

/***/ "./src/app/pages/advertisement/components/create/create-advertisement/create-advertisement.component.scss":
/*!****************************************************************************************************************!*\
  !*** ./src/app/pages/advertisement/components/create/create-advertisement/create-advertisement.component.scss ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkdmVydGlzZW1lbnQvY29tcG9uZW50cy9jcmVhdGUvY3JlYXRlLWFkdmVydGlzZW1lbnQvY3JlYXRlLWFkdmVydGlzZW1lbnQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/advertisement/components/create/create-advertisement/create-advertisement.component.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/pages/advertisement/components/create/create-advertisement/create-advertisement.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: CreateAdvertisementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateAdvertisementComponent", function() { return CreateAdvertisementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_core_services_global_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/global/global.service */ "./src/app/core/services/global/global.service.ts");
/* harmony import */ var src_app_core_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/utils */ "./src/app/core/utils/index.ts");
/* harmony import */ var src_app_core_services_crud_advertisement_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/crud/advertisement.service */ "./src/app/core/services/crud/advertisement.service.ts");
/* harmony import */ var src_app_core_models_classes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/models/classes */ "./src/app/core/models/classes/index.ts");
/* harmony import */ var src_app_core_services_global_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/global/auth.service */ "./src/app/core/services/global/auth.service.ts");








let CreateAdvertisementComponent = class CreateAdvertisementComponent {
    constructor(fb, globalService, advertisementService, authService) {
        this.fb = fb;
        this.globalService = globalService;
        this.advertisementService = advertisementService;
        this.authService = authService;
        this.descriptions = [];
        this.initForm();
    }
    ngOnInit() {
        if (this.advertisementService.advertisement) {
            const val = this.advertisementService.advertisement.toJson();
            console.log(val);
            if (Object.keys(val).length > 0) {
                this.descriptions = val['descriptions'];
                delete val['descriptions'];
                this.form.patchValue(val);
            }
        }
    }
    /**
     * init advertisement form
     */
    initForm() {
        this.form = this.fb.group({
            usageTitles: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]([]),
            location: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            desiredJob: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            function: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            experienceYears: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            contract: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            jobType: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            jobMode: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            managerialLevel: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            effective: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            missions: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            descriptions: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            prerequisite: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            typeOfTraining: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]([]),
            levelOfStudies: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            supposedSalaryMin: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            supposedSalaryMax: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            otherAdvantage: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            startedDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
        }, { validator: this.checkSupposedSalary });
    }
    /**
     * check salaries
     * @param group
     */
    checkSupposedSalary(group) {
        const min = group.controls.supposedSalaryMin.value;
        const max = group.controls.supposedSalaryMax.value;
        return min < max ? null : { salaryErreur: true };
    }
    addDescription(element) {
        if (element.value) {
            this.descriptions.push(element.value);
            element.value = null;
        }
    }
    /**
     * delete tasks
     * @param i
     */
    deleteDescription(i) {
        this.descriptions.splice(i, 1);
    }
    /**
     * add advertisement infos
     */
    onSave() {
        let value = Object.assign(this.form.value, { 'descriptions': this.descriptions });
        console.log(value);
        const percentage = src_app_core_utils__WEBPACK_IMPORTED_MODULE_4__["Helper"].calculePercentage(value, 0, 4.16);
        console.log(percentage);
        this.advertisementService.advertisement = new src_app_core_models_classes__WEBPACK_IMPORTED_MODULE_6__["Advertisement"](Object.assign(value, this.advertisementService.advertisement ? this.advertisementService.advertisement.toJson() : { company: this.authService.user.company }));
        this.advertisementService.setPercentage((Math.round(percentage * 100) / 100).toFixed(2));
        src_app_core_utils__WEBPACK_IMPORTED_MODULE_4__["Redirection"].advertisementExperiences();
    }
};
CreateAdvertisementComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_core_services_global_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"] },
    { type: src_app_core_services_crud_advertisement_service__WEBPACK_IMPORTED_MODULE_5__["AdvertisementService"] },
    { type: src_app_core_services_global_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] }
];
CreateAdvertisementComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-advertisement',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./create-advertisement.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/advertisement/components/create/create-advertisement/create-advertisement.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./create-advertisement.component.scss */ "./src/app/pages/advertisement/components/create/create-advertisement/create-advertisement.component.scss")).default]
    })
], CreateAdvertisementComponent);



/***/ }),

/***/ "./src/app/pages/advertisement/components/create/experience-required/experience-required.component.scss":
/*!**************************************************************************************************************!*\
  !*** ./src/app/pages/advertisement/components/create/experience-required/experience-required.component.scss ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkdmVydGlzZW1lbnQvY29tcG9uZW50cy9jcmVhdGUvZXhwZXJpZW5jZS1yZXF1aXJlZC9leHBlcmllbmNlLXJlcXVpcmVkLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/advertisement/components/create/experience-required/experience-required.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/pages/advertisement/components/create/experience-required/experience-required.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: ExperienceRequiredComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceRequiredComponent", function() { return ExperienceRequiredComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_core_services_global_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/global/global.service */ "./src/app/core/services/global/global.service.ts");
/* harmony import */ var src_app_core_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/utils */ "./src/app/core/utils/index.ts");
/* harmony import */ var src_app_core_services_crud_advertisement_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/crud/advertisement.service */ "./src/app/core/services/crud/advertisement.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_core_services_global_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/global/auth.service */ "./src/app/core/services/global/auth.service.ts");








let ExperienceRequiredComponent = class ExperienceRequiredComponent {
    constructor(fb, globalService, authService, advertisementService, modalController) {
        this.fb = fb;
        this.globalService = globalService;
        this.authService = authService;
        this.advertisementService = advertisementService;
        this.modalController = modalController;
        this.languagesList = [];
        this.oldPercentage = 0;
        this.initForm();
    }
    ngOnInit() {
        if (this.advertisementService.advertisement['languages'] && this.advertisementService.advertisement['languages'].length > 0) {
            this.advertisementService.advertisement['languages'].forEach(item => {
                const languageIndex = this.globalService.languages.findIndex(x => x._id === item.language);
                const languageLevelIndex = this.globalService.languagesLevels.findIndex(x => x._id === item.languageLevel);
                this.languagesList.push({
                    language: this.globalService.languages[languageIndex],
                    languageLevel: this.globalService.languagesLevels[languageLevelIndex]
                });
            });
        }
        // this.oldPercentage = Helper.calculePercentage(Object.assign(this.form.value, { languages: this.languagesList }), 0, 4.16);
    }
    /**
     * init experience form
     */
    initForm() {
        this.form = this.fb.group({
            skills: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.advertisementService.advertisement.skills ? this.advertisementService.advertisement.skills : []),
            languages: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                language: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
                languageLevel: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null)
            }),
            programingLanguages: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                language: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.advertisementService.advertisement.programingLanguages ? this.advertisementService.advertisement.programingLanguages['language'] : []),
                logiciel: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.advertisementService.advertisement.programingLanguages ? this.advertisementService.advertisement.programingLanguages['logiciel'] : [])
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
     * add experiences
     */
    onSave() {
        let value = this.form.value;
        delete value['languages'];
        value.languages = this.languagesList.map(x => ({
            language: x.language._id,
            languageLevel: x.languageLevel._id
        }));
        const percentage = src_app_core_utils__WEBPACK_IMPORTED_MODULE_4__["Helper"].calculePercentage(value, (this.advertisementService.getPercentage() ? Number(this.advertisementService.getPercentage()) : 0) - Number(this.oldPercentage), 4.16);
        this.advertisementService.setPercentage(percentage);
        this.advertisementService.advertisement.languages = value.languages;
        this.advertisementService.advertisement.programingLanguages = value.programingLanguages;
        this.advertisementService.advertisement.skills = value.skills;
        this.advertisementService.advertisement.company = this.authService.user.company;
        src_app_core_utils__WEBPACK_IMPORTED_MODULE_4__["Redirection"].validateAdvertisement();
    }
};
ExperienceRequiredComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_core_services_global_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"] },
    { type: src_app_core_services_global_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
    { type: src_app_core_services_crud_advertisement_service__WEBPACK_IMPORTED_MODULE_5__["AdvertisementService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] }
];
ExperienceRequiredComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-experience-required',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./experience-required.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/advertisement/components/create/experience-required/experience-required.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./experience-required.component.scss */ "./src/app/pages/advertisement/components/create/experience-required/experience-required.component.scss")).default]
    })
], ExperienceRequiredComponent);



/***/ }),

/***/ "./src/app/pages/advertisement/components/create/form-advertissement/form-advertissement.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/pages/advertisement/components/create/form-advertissement/form-advertissement.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: FormAdvertissementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormAdvertissementComponent", function() { return FormAdvertissementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_core_services_crud_advertisement_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/crud/advertisement.service */ "./src/app/core/services/crud/advertisement.service.ts");




let FormAdvertissementComponent = class FormAdvertissementComponent {
    constructor(advertisementService, router) {
        this.advertisementService = advertisementService;
        this.router = router;
    }
    ngOnInit() {
        this.subscription = this.router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["ChildActivationEnd"]) {
                if (event.snapshot.firstChild.data.pagelink) {
                    this.pageLink = event.snapshot.firstChild.data.pagelink;
                }
            }
        });
    }
};
FormAdvertissementComponent.ctorParameters = () => [
    { type: src_app_core_services_crud_advertisement_service__WEBPACK_IMPORTED_MODULE_3__["AdvertisementService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
FormAdvertissementComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-form-advertissement',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./form-advertissement.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/advertisement/components/create/form-advertissement/form-advertissement.component.html")).default
    })
], FormAdvertissementComponent);



/***/ }),

/***/ "./src/app/pages/advertisement/components/create/slider-advertisement/slider-advertisement.component.scss":
/*!****************************************************************************************************************!*\
  !*** ./src/app/pages/advertisement/components/create/slider-advertisement/slider-advertisement.component.scss ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-slides {\n  height: 100%;\n}\n\nion-slides .swiper-slide {\n  display: block;\n}\n\nion-slides .swiper-slide img {\n  max-height: 50%;\n  max-width: 80%;\n  margin: 16px 0 40px;\n  pointer-events: none;\n}\n\nion-slides p {\n  padding: 0 40px 2em 40px;\n  font-size: 14px;\n  line-height: 1.5;\n  color: var(--ion-color-step-600, #60646b);\n}\n\nion-slides .swiper-pagination-bullet-active {\n  width: 16px !important;\n  height: 16px !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWR2ZXJ0aXNlbWVudC9jb21wb25lbnRzL2NyZWF0ZS9zbGlkZXItYWR2ZXJ0aXNlbWVudC9zbGlkZXItYWR2ZXJ0aXNlbWVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQVk7QUFDaEI7O0FBRkE7RUFHTSxjQUFjO0FBR3BCOztBQU5BO0VBTU0sZUFBZTtFQUNmLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsb0JBQW9CO0FBSTFCOztBQWJBO0VBYU0sd0JBQXdCO0VBQ3hCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIseUNBQXlDO0FBSS9DOztBQXBCQTtFQW1CTSxzQkFBc0I7RUFDdEIsdUJBQXVCO0FBSzdCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWR2ZXJ0aXNlbWVudC9jb21wb25lbnRzL2NyZWF0ZS9zbGlkZXItYWR2ZXJ0aXNlbWVudC9zbGlkZXItYWR2ZXJ0aXNlbWVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1zbGlkZXMge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICAuc3dpcGVyLXNsaWRlIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgICAuc3dpcGVyLXNsaWRlIGltZyB7XG4gICAgICBtYXgtaGVpZ2h0OiA1MCU7XG4gICAgICBtYXgtd2lkdGg6IDgwJTtcbiAgICAgIG1hcmdpbjogMTZweCAwIDQwcHg7XG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICB9XG4gIFxuICAgIHAge1xuICAgICAgcGFkZGluZzogMCA0MHB4IDJlbSA0MHB4O1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC02MDAsICM2MDY0NmIpO1xuICAgIH1cbiAgICAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZSB7XG4gICAgICB3aWR0aDogMTZweCAhaW1wb3J0YW50O1xuICAgICAgaGVpZ2h0OiAxNnB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG4gICJdfQ== */");

/***/ }),

/***/ "./src/app/pages/advertisement/components/create/slider-advertisement/slider-advertisement.component.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/pages/advertisement/components/create/slider-advertisement/slider-advertisement.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: SliderAdvertisementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderAdvertisementComponent", function() { return SliderAdvertisementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let SliderAdvertisementComponent = class SliderAdvertisementComponent {
    constructor() { }
    ionViewDidEnter() {
    }
};
SliderAdvertisementComponent.ctorParameters = () => [];
SliderAdvertisementComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-slider-advertisement',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./slider-advertisement.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/advertisement/components/create/slider-advertisement/slider-advertisement.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./slider-advertisement.component.scss */ "./src/app/pages/advertisement/components/create/slider-advertisement/slider-advertisement.component.scss")).default]
    })
], SliderAdvertisementComponent);



/***/ }),

/***/ "./src/app/pages/advertisement/components/create/validate-advertisement/validate-advertisement.component.scss":
/*!********************************************************************************************************************!*\
  !*** ./src/app/pages/advertisement/components/create/validate-advertisement/validate-advertisement.component.scss ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkdmVydGlzZW1lbnQvY29tcG9uZW50cy9jcmVhdGUvdmFsaWRhdGUtYWR2ZXJ0aXNlbWVudC92YWxpZGF0ZS1hZHZlcnRpc2VtZW50LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/advertisement/components/create/validate-advertisement/validate-advertisement.component.ts":
/*!******************************************************************************************************************!*\
  !*** ./src/app/pages/advertisement/components/create/validate-advertisement/validate-advertisement.component.ts ***!
  \******************************************************************************************************************/
/*! exports provided: ValidateAdvertisementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateAdvertisementComponent", function() { return ValidateAdvertisementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_core_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/utils */ "./src/app/core/utils/index.ts");
/* harmony import */ var src_app_core_services_crud_advertisement_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/crud/advertisement.service */ "./src/app/core/services/crud/advertisement.service.ts");
/* harmony import */ var src_app_core_models_classes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/models/classes */ "./src/app/core/models/classes/index.ts");
/* harmony import */ var src_app_shared_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/components */ "./src/app/shared/components/index.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");







let ValidateAdvertisementComponent = class ValidateAdvertisementComponent {
    constructor(advertisementService, modalController) {
        this.advertisementService = advertisementService;
        this.modalController = modalController;
    }
    ionViewDidEnter() {
    }
    onSave() {
        console.log(this.advertisementService.advertisement);
        this.advertisementService.addAdvertisement().subscribe((response) => {
            this.advertisementService.advertisement = new src_app_core_models_classes__WEBPACK_IMPORTED_MODULE_4__["Advertisement"]({});
            this.advertisementService.setPercentage(0);
            src_app_core_utils__WEBPACK_IMPORTED_MODULE_2__["Redirection"].advertisements();
        });
    }
    previewAdvertisement() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_app_shared_components__WEBPACK_IMPORTED_MODULE_5__["PreviewAdvertisementComponent"]
            });
            modal.onWillDismiss().then(() => {
                return this.advertisementService.advertisement;
            });
            return yield modal.present();
        });
    }
};
ValidateAdvertisementComponent.ctorParameters = () => [
    { type: src_app_core_services_crud_advertisement_service__WEBPACK_IMPORTED_MODULE_3__["AdvertisementService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] }
];
ValidateAdvertisementComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-validate-advertisement',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./validate-advertisement.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/advertisement/components/create/validate-advertisement/validate-advertisement.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./validate-advertisement.component.scss */ "./src/app/pages/advertisement/components/create/validate-advertisement/validate-advertisement.component.scss")).default]
    })
], ValidateAdvertisementComponent);



/***/ }),

/***/ "./src/app/pages/advertisement/components/details/ads-details/ads-details.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/advertisement/components/details/ads-details/ads-details.component.scss ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#programming-languages span {\n  position: relative !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWR2ZXJ0aXNlbWVudC9jb21wb25lbnRzL2RldGFpbHMvYWRzLWRldGFpbHMvYWRzLWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFUSw2QkFBNkI7QUFBckMiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hZHZlcnRpc2VtZW50L2NvbXBvbmVudHMvZGV0YWlscy9hZHMtZGV0YWlscy9hZHMtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNwcm9ncmFtbWluZy1sYW5ndWFnZXMge1xuICAgIHNwYW4ge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcbiAgICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/advertisement/components/details/ads-details/ads-details.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/advertisement/components/details/ads-details/ads-details.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: AdsDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdsDetailsComponent", function() { return AdsDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _update_date_date_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../update/date/date.component */ "./src/app/pages/advertisement/components/update/date/date.component.ts");
/* harmony import */ var _update_mission_mission_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../update/mission/mission.component */ "./src/app/pages/advertisement/components/update/mission/mission.component.ts");
/* harmony import */ var _update_profil_profil_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../update/profil/profil.component */ "./src/app/pages/advertisement/components/update/profil/profil.component.ts");
/* harmony import */ var _update_task_task_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../update/task/task.component */ "./src/app/pages/advertisement/components/update/task/task.component.ts");
/* harmony import */ var src_app_core_services_crud_advertisement_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/crud/advertisement.service */ "./src/app/core/services/crud/advertisement.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_core_services_global_global_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/global/global.service */ "./src/app/core/services/global/global.service.ts");
/* harmony import */ var _update_other_info_other_info_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../update/other-info/other-info.component */ "./src/app/pages/advertisement/components/update/other-info/other-info.component.ts");
/* harmony import */ var _update_status_status_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../update/status/status.component */ "./src/app/pages/advertisement/components/update/status/status.component.ts");
/* harmony import */ var src_app_core_services_global_auth_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/core/services/global/auth.service */ "./src/app/core/services/global/auth.service.ts");













let AdsDetailsComponent = class AdsDetailsComponent {
    constructor(modalController, advertisementService, activatedRoute, globalService, authService) {
        this.modalController = modalController;
        this.advertisementService = advertisementService;
        this.activatedRoute = activatedRoute;
        this.globalService = globalService;
        this.authService = authService;
        this.languages = [];
        this.programingLanguages = [];
        this.infos = {
            contract: null,
            jobType: null,
            jobMode: null,
            managerialLevel: null,
            effective: null
        };
    }
    ionViewDidEnter() {
        const { id } = this.activatedRoute.snapshot.params;
        if (id) {
            this.advertisementService.readOne(id).subscribe(res => {
                this.setData(res);
            });
        }
        // change values in popuo
        this.advertisementService.changed.subscribe(res => {
            this.setData(this.advertisementService.advertisement);
        });
    }
    setData(res) {
        if (res) {
            if (res.languages) {
                this.languages = [];
                res.languages.forEach((x) => {
                    const languageIndex = this.globalService.languages.findIndex(val => val._id === x.language);
                    const languageLevelIndex = this.globalService.languagesLevels.findIndex(val => val._id === x.languageLevel);
                    console.log(languageIndex, languageLevelIndex);
                    this.languages.push({
                        language: this.globalService.languages[languageIndex],
                        languageLevel: this.globalService.languagesLevels[languageLevelIndex],
                    });
                });
            }
            if (res.programingLanguages) {
                this.programingLanguages = [];
                res.programingLanguages.language.forEach(item => {
                    const val = this.globalService.programmingLanguages.find(x => x._id === item);
                    if (val) {
                        this.programingLanguages.push(val.name);
                    }
                });
                res.programingLanguages.logiciel.forEach(item => {
                    const val = this.globalService.logiciels.find(x => x._id === item);
                    if (val) {
                        this.programingLanguages.push(val.name);
                    }
                });
            }
            this.infos = {
                contract: this.globalService.contracts.find(x => x._id === this.advertisementService.advertisement.contract),
                jobType: this.globalService.jobTypes.find(x => x._id === this.advertisementService.advertisement.jobType),
                jobMode: this.globalService.jobModes.find(x => x._id === this.advertisementService.advertisement.jobMode),
                managerialLevel: this.globalService.managerialLevels.find(x => x._id === this.advertisementService.advertisement.managerialLevel),
                effective: this.globalService.effectives.find(x => x._id === this.advertisementService.advertisement.effective)
            };
        }
    }
    openMission() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _update_mission_mission_component__WEBPACK_IMPORTED_MODULE_4__["MissionComponent"]
            });
            return yield modal.present();
        });
    }
    openTasks() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _update_task_task_component__WEBPACK_IMPORTED_MODULE_6__["TaskComponent"]
            });
            return yield modal.present();
        });
    }
    openProfile() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _update_profil_profil_component__WEBPACK_IMPORTED_MODULE_5__["ProfilComponent"]
            });
            return yield modal.present();
        });
    }
    openDate() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _update_date_date_component__WEBPACK_IMPORTED_MODULE_3__["DateComponent"]
            });
            return yield modal.present();
        });
    }
    openOtherInfo() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _update_other_info_other_info_component__WEBPACK_IMPORTED_MODULE_10__["OtherInfoComponent"]
            });
            return yield modal.present();
        });
    }
    openStatus() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _update_status_status_component__WEBPACK_IMPORTED_MODULE_11__["StatusComponent"]
            });
            return yield modal.present();
        });
    }
    ngOnDestroy() {
        this.advertisementService.advertisement = null;
    }
};
AdsDetailsComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: src_app_core_services_crud_advertisement_service__WEBPACK_IMPORTED_MODULE_7__["AdvertisementService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] },
    { type: src_app_core_services_global_global_service__WEBPACK_IMPORTED_MODULE_9__["GlobalService"] },
    { type: src_app_core_services_global_auth_service__WEBPACK_IMPORTED_MODULE_12__["AuthService"] }
];
AdsDetailsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ads-details',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./ads-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/advertisement/components/details/ads-details/ads-details.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./ads-details.component.scss */ "./src/app/pages/advertisement/components/details/ads-details/ads-details.component.scss")).default]
    })
], AdsDetailsComponent);



/***/ }),

/***/ "./src/app/pages/advertisement/components/details/ads-profile/ads-profile.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/advertisement/components/details/ads-profile/ads-profile.component.scss ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkdmVydGlzZW1lbnQvY29tcG9uZW50cy9kZXRhaWxzL2Fkcy1wcm9maWxlL2Fkcy1wcm9maWxlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/advertisement/components/details/ads-profile/ads-profile.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/advertisement/components/details/ads-profile/ads-profile.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: AdsProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdsProfileComponent", function() { return AdsProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_core_services_crud_advertisement_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/crud/advertisement.service */ "./src/app/core/services/crud/advertisement.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_core_services_global_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/global/auth.service */ "./src/app/core/services/global/auth.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");






let AdsProfileComponent = class AdsProfileComponent {
    constructor(advertisementService, activatedRoute, authService, alertController) {
        this.advertisementService = advertisementService;
        this.activatedRoute = activatedRoute;
        this.authService = authService;
        this.alertController = alertController;
        this.isChecked = true;
    }
    ngOnInit() {
        const { id } = this.activatedRoute.snapshot.params;
        if (id) {
            this.subscribe = this.advertisementService.readDetails(id).subscribe(res => console.log(res));
        }
    }
    ngOnDestroy() {
        this.advertisementService.advertisement = null;
        this.subscribe.unsubscribe();
    }
    changeStatus() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Confirmation!',
                message: 'Etes-vous sûr de vouloir clôturer cette annonce?',
                buttons: [
                    {
                        text: 'Non',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Oui',
                        handler: () => {
                            console.log('Confirm Okay');
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
AdsProfileComponent.ctorParameters = () => [
    { type: src_app_core_services_crud_advertisement_service__WEBPACK_IMPORTED_MODULE_2__["AdvertisementService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_core_services_global_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] }
];
AdsProfileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ads-profile',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./ads-profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/advertisement/components/details/ads-profile/ads-profile.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./ads-profile.component.scss */ "./src/app/pages/advertisement/components/details/ads-profile/ads-profile.component.scss")).default]
    })
], AdsProfileComponent);



/***/ }),

/***/ "./src/app/pages/advertisement/components/listes/listes.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/advertisement/components/listes/listes.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#badge-ribbon {\n  position: relative;\n  background: red;\n  height: 100px;\n  width: 100px;\n  border-radius: 50px;\n}\n\n#badge-ribbon:before,\n#badge-ribbon:after {\n  content: \"\";\n  position: absolute;\n  border-bottom: 70px solid red;\n  border-left: 40px solid transparent;\n  border-right: 40px solid transparent;\n  top: 70px;\n  left: -10px;\n  transform: rotate(-140deg);\n}\n\n#badge-ribbon:after {\n  left: auto;\n  right: -10px;\n  transform: rotate(140deg);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWR2ZXJ0aXNlbWVudC9jb21wb25lbnRzL2xpc3Rlcy9saXN0ZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGFBQWE7RUFDYixZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUNBOztFQUVFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsNkJBQTZCO0VBQzdCLG1DQUFtQztFQUNuQyxvQ0FBb0M7RUFDcEMsU0FBUztFQUNULFdBQVc7RUFDWCwwQkFBMEI7QUFFNUI7O0FBQUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLHlCQUF5QjtBQUczQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkdmVydGlzZW1lbnQvY29tcG9uZW50cy9saXN0ZXMvbGlzdGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2JhZGdlLXJpYmJvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogcmVkO1xuICBoZWlnaHQ6IDEwMHB4O1xuICB3aWR0aDogMTAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG59XG4jYmFkZ2UtcmliYm9uOmJlZm9yZSxcbiNiYWRnZS1yaWJib246YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlci1ib3R0b206IDcwcHggc29saWQgcmVkO1xuICBib3JkZXItbGVmdDogNDBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJpZ2h0OiA0MHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICB0b3A6IDcwcHg7XG4gIGxlZnQ6IC0xMHB4O1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTQwZGVnKTtcbn1cbiNiYWRnZS1yaWJib246YWZ0ZXIge1xuICBsZWZ0OiBhdXRvO1xuICByaWdodDogLTEwcHg7XG4gIHRyYW5zZm9ybTogcm90YXRlKDE0MGRlZyk7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/pages/advertisement/components/listes/listes.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/advertisement/components/listes/listes.component.ts ***!
  \***************************************************************************/
/*! exports provided: ListesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListesComponent", function() { return ListesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_core_services_crud_advertisement_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/crud/advertisement.service */ "./src/app/core/services/crud/advertisement.service.ts");
/* harmony import */ var src_app_core_services_global_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/global/auth.service */ "./src/app/core/services/global/auth.service.ts");
/* harmony import */ var src_app_core_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/utils */ "./src/app/core/utils/index.ts");
/* harmony import */ var _update_status_status_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../update/status/status.component */ "./src/app/pages/advertisement/components/update/status/status.component.ts");







let ListesComponent = class ListesComponent {
    constructor(advertisementService, authService, modalController) {
        this.advertisementService = advertisementService;
        this.authService = authService;
        this.modalController = modalController;
    }
    ionViewDidEnter() {
        this.advertisementService.read().subscribe();
    }
    ngOnInit() {
    }
    changeStatus(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(id);
            const modal = yield this.modalController.create({
                component: _update_status_status_component__WEBPACK_IMPORTED_MODULE_6__["StatusComponent"],
                componentProps: { idAdvertissement: id }
            });
            return yield modal.present();
        });
    }
    /**
     * search recruiter
     */
    onSearch() {
        this.advertisementService.read(this.search).subscribe();
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
};
ListesComponent.ctorParameters = () => [
    { type: src_app_core_services_crud_advertisement_service__WEBPACK_IMPORTED_MODULE_3__["AdvertisementService"] },
    { type: src_app_core_services_global_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
ListesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-listes',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./listes.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/advertisement/components/listes/listes.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./listes.component.scss */ "./src/app/pages/advertisement/components/listes/listes.component.scss")).default]
    })
], ListesComponent);



/***/ }),

/***/ "./src/app/pages/advertisement/components/update/date/date.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/pages/advertisement/components/update/date/date.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkdmVydGlzZW1lbnQvY29tcG9uZW50cy91cGRhdGUvZGF0ZS9kYXRlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/advertisement/components/update/date/date.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/advertisement/components/update/date/date.component.ts ***!
  \******************************************************************************/
/*! exports provided: DateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateComponent", function() { return DateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_core_services_crud_advertisement_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/crud/advertisement.service */ "./src/app/core/services/crud/advertisement.service.ts");





let DateComponent = class DateComponent {
    constructor(modalController, advertisementService) {
        this.modalController = modalController;
        this.advertisementService = advertisementService;
        this.initForm();
    }
    ionViewDidEnter() {
    }
    close() {
        this.modalController.dismiss();
    }
    /**
     * init date form
     */
    initForm() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            startedDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.advertisementService.advertisement.startedDate, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required)
        });
    }
    /**
     * on save
     */
    onSave() {
        this.advertisementService.updateStartedDate(this.advertisementService.advertisement._id, this.form.value).subscribe(res => {
            this.close();
        });
    }
};
DateComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: src_app_core_services_crud_advertisement_service__WEBPACK_IMPORTED_MODULE_4__["AdvertisementService"] }
];
DateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-date',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./date.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/advertisement/components/update/date/date.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./date.component.scss */ "./src/app/pages/advertisement/components/update/date/date.component.scss")).default]
    })
], DateComponent);



/***/ }),

/***/ "./src/app/pages/advertisement/components/update/mission/mission.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/advertisement/components/update/mission/mission.component.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkdmVydGlzZW1lbnQvY29tcG9uZW50cy91cGRhdGUvbWlzc2lvbi9taXNzaW9uLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/advertisement/components/update/mission/mission.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/pages/advertisement/components/update/mission/mission.component.ts ***!
  \************************************************************************************/
/*! exports provided: MissionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MissionComponent", function() { return MissionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_core_services_crud_advertisement_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/crud/advertisement.service */ "./src/app/core/services/crud/advertisement.service.ts");





let MissionComponent = class MissionComponent {
    constructor(modalController, advertisementService) {
        this.modalController = modalController;
        this.advertisementService = advertisementService;
    }
    ngOnInit() {
        this.initForm();
    }
    close() {
        this.modalController.dismiss();
    }
    /**
     * init Form
     */
    initForm() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            missions: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.advertisementService.advertisement.missions, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required)
        });
    }
    /**
     * on save
     */
    onSave() {
        this.advertisementService.updateMissions(this.advertisementService.advertisement._id, this.form.value).subscribe(res => {
            this.close();
        });
    }
};
MissionComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: src_app_core_services_crud_advertisement_service__WEBPACK_IMPORTED_MODULE_4__["AdvertisementService"] }
];
MissionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mission',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./mission.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/advertisement/components/update/mission/mission.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./mission.component.scss */ "./src/app/pages/advertisement/components/update/mission/mission.component.scss")).default]
    })
], MissionComponent);



/***/ }),

/***/ "./src/app/pages/advertisement/components/update/other-info/other-info.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/advertisement/components/update/other-info/other-info.component.scss ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkdmVydGlzZW1lbnQvY29tcG9uZW50cy91cGRhdGUvb3RoZXItaW5mby9vdGhlci1pbmZvLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/advertisement/components/update/other-info/other-info.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/advertisement/components/update/other-info/other-info.component.ts ***!
  \******************************************************************************************/
/*! exports provided: OtherInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtherInfoComponent", function() { return OtherInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_core_services_crud_advertisement_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/crud/advertisement.service */ "./src/app/core/services/crud/advertisement.service.ts");
/* harmony import */ var src_app_core_services_global_global_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/global/global.service */ "./src/app/core/services/global/global.service.ts");






let OtherInfoComponent = class OtherInfoComponent {
    constructor(modalController, advertisementService, globalService, fb) {
        this.modalController = modalController;
        this.advertisementService = advertisementService;
        this.globalService = globalService;
        this.fb = fb;
        this.locations = [];
    }
    ngOnInit() {
        this.initForm();
    }
    close() {
        this.modalController.dismiss();
    }
    /**
     * init date form
     */
    initForm() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            contract: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.advertisementService.advertisement['contract'], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            jobType: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.advertisementService.advertisement['jobType'], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            jobMode: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.advertisementService.advertisement['jobMode'], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            managerialLevel: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.advertisementService.advertisement['managerialLevel'], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            location: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.advertisementService.advertisement['location'], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            effective: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.advertisementService.advertisement['effective'], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            supposedSalaryMin: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.advertisementService.advertisement['supposedSalaryMin'], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            supposedSalaryMax: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.advertisementService.advertisement['supposedSalaryMax'], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            otherAdvantage: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.advertisementService.advertisement['otherAdvantage'], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
        });
    }
    /**
     * on save
     */
    onSave() {
        const value = this.form.value;
        this.advertisementService.updateStartedDate(this.advertisementService.advertisement._id, value).subscribe(res => {
            this.advertisementService.advertisement = Object.assign(this.advertisementService.advertisement, value);
            this.advertisementService.setChanges();
            this.close();
        });
    }
};
OtherInfoComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: src_app_core_services_crud_advertisement_service__WEBPACK_IMPORTED_MODULE_4__["AdvertisementService"] },
    { type: src_app_core_services_global_global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
OtherInfoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-other-info',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./other-info.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/advertisement/components/update/other-info/other-info.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./other-info.component.scss */ "./src/app/pages/advertisement/components/update/other-info/other-info.component.scss")).default]
    })
], OtherInfoComponent);



/***/ }),

/***/ "./src/app/pages/advertisement/components/update/profil/profil.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/pages/advertisement/components/update/profil/profil.component.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkdmVydGlzZW1lbnQvY29tcG9uZW50cy91cGRhdGUvcHJvZmlsL3Byb2ZpbC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/advertisement/components/update/profil/profil.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/advertisement/components/update/profil/profil.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ProfilComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilComponent", function() { return ProfilComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_core_services_global_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/global/global.service */ "./src/app/core/services/global/global.service.ts");
/* harmony import */ var src_app_core_services_crud_advertisement_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/crud/advertisement.service */ "./src/app/core/services/crud/advertisement.service.ts");






let ProfilComponent = class ProfilComponent {
    constructor(modalController, fb, globalService, advertisementService) {
        this.modalController = modalController;
        this.fb = fb;
        this.globalService = globalService;
        this.advertisementService = advertisementService;
        this.softSkills = [];
        this.maxLenght = false;
        this.languagesList = [];
        this.programingLanguages = [];
        this.programs = [];
        this.initForm();
    }
    ngOnInit() {
        if (this.advertisementService.advertisement['languages'] && this.advertisementService.advertisement['languages'].length > 0) {
            this.advertisementService.advertisement['languages'].forEach(item => {
                const languageIndex = this.globalService.languages.findIndex(x => x._id === item.language);
                const languageLevelIndex = this.globalService.languagesLevels.findIndex(x => x._id === item.languageLevel);
                this.languagesList.push({
                    language: this.globalService.languages[languageIndex],
                    languageLevel: this.globalService.languagesLevels[languageLevelIndex]
                });
            });
        }
        if (this.advertisementService.advertisement['programingLanguages']) {
            this.advertisementService.advertisement['programingLanguages']['language'].forEach(item => {
                const index = this.programingLanguages.findIndex(x => x._id === item);
                if (index !== -1) {
                    this.programingLanguages[index]['checked'] = true;
                }
            });
            this.advertisementService.advertisement['programingLanguages']['logiciel'].forEach(item => {
                const index = this.programs.findIndex(x => x._id === item);
                if (index !== -1) {
                    this.programs[index]['checked'] = true;
                }
            });
        }
        if (this.advertisementService.advertisement['skills'] && this.advertisementService.advertisement['skills'].length > 0) {
            this.advertisementService.advertisement['skills'].forEach(item => {
                const index = this.softSkills.findIndex(x => x._id === item);
                if (index !== -1) {
                    this.softSkills[index]['checked'] = true;
                }
            });
        }
    }
    ionViewDidEnter() {
        this.form.patchValue(this.advertisementService.advertisement);
    }
    close() {
        this.modalController.dismiss();
    }
    /**
     * init profile form
     */
    initForm() {
        this.form = this.fb.group({
            prerequisite: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.advertisementService.advertisement.prerequisite, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            skills: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.advertisementService.advertisement.skills ? this.advertisementService.advertisement.skills : []),
            languages: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
                language: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
                languageLevel: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null)
            }),
            programingLanguages: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
                language: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.advertisementService.advertisement.programingLanguages ? this.advertisementService.advertisement.programingLanguages['language'] : []),
                logiciel: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.advertisementService.advertisement.programingLanguages ? this.advertisementService.advertisement.programingLanguages['logiciel'] : [])
            }),
            typeOfTraining: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.advertisementService.advertisement.typeOfTraining ? this.advertisementService.advertisement.typeOfTraining : []),
            levelOfStudies: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.advertisementService.advertisement.levelOfStudies ? this.advertisementService.advertisement.levelOfStudies : null),
            experienceYears: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.advertisementService.advertisement.experienceYears)
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
     * add experiences
     */
    onSave() {
        const value = this.form.value;
        value['languages'] = this.languagesList.map(x => ({
            language: x.language._id,
            languageLevel: x.languageLevel._id
        }));
        this.advertisementService.updateProfile(this.advertisementService.advertisement._id, value).subscribe(res => {
            this.advertisementService.advertisement = Object.assign(this.advertisementService.advertisement, value);
            this.advertisementService.setChanges();
            this.close();
        });
    }
};
ProfilComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: src_app_core_services_global_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"] },
    { type: src_app_core_services_crud_advertisement_service__WEBPACK_IMPORTED_MODULE_5__["AdvertisementService"] }
];
ProfilComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profil',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./profil.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/advertisement/components/update/profil/profil.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./profil.component.scss */ "./src/app/pages/advertisement/components/update/profil/profil.component.scss")).default]
    })
], ProfilComponent);



/***/ }),

/***/ "./src/app/pages/advertisement/components/update/status/status.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/pages/advertisement/components/update/status/status.component.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkdmVydGlzZW1lbnQvY29tcG9uZW50cy91cGRhdGUvc3RhdHVzL3N0YXR1cy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/advertisement/components/update/status/status.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/advertisement/components/update/status/status.component.ts ***!
  \**********************************************************************************/
/*! exports provided: StatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusComponent", function() { return StatusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_core_services_crud_advertisement_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/crud/advertisement.service */ "./src/app/core/services/crud/advertisement.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");





let StatusComponent = class StatusComponent {
    constructor(advertisementService, modalController) {
        this.advertisementService = advertisementService;
        this.modalController = modalController;
        this.initForm();
    }
    ngOnInit() {
        if (this.idAdvertissement) {
            this.advertisementService.readOne(this.idAdvertissement);
            console.log(this.advertisementService.advertisement.status);
            this.initForm();
        }
    }
    /**
     * init status form
     */
    initForm() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.advertisementService.advertisement.status, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    }
    /**
     * change status
     */
    changeStatus() {
        const value = this.form.value;
        this.advertisementService.updateStatus(this.advertisementService.advertisement._id, value).subscribe(res => {
            this.advertisementService.advertisement = Object.assign(this.advertisementService.advertisement, value);
            this.advertisementService.setChanges();
            this.modalController.dismiss();
        });
    }
    close() {
        this.modalController.dismiss();
    }
};
StatusComponent.ctorParameters = () => [
    { type: src_app_core_services_crud_advertisement_service__WEBPACK_IMPORTED_MODULE_3__["AdvertisementService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
StatusComponent.propDecorators = {
    idAdvertissement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
StatusComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-status',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./status.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/advertisement/components/update/status/status.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./status.component.scss */ "./src/app/pages/advertisement/components/update/status/status.component.scss")).default]
    })
], StatusComponent);



/***/ }),

/***/ "./src/app/pages/advertisement/components/update/task/task.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/pages/advertisement/components/update/task/task.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkdmVydGlzZW1lbnQvY29tcG9uZW50cy91cGRhdGUvdGFzay90YXNrLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/advertisement/components/update/task/task.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/advertisement/components/update/task/task.component.ts ***!
  \******************************************************************************/
/*! exports provided: TaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskComponent", function() { return TaskComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_core_services_crud_advertisement_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/crud/advertisement.service */ "./src/app/core/services/crud/advertisement.service.ts");
/* harmony import */ var src_app_core_services_global_global_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/global/global.service */ "./src/app/core/services/global/global.service.ts");






let TaskComponent = class TaskComponent {
    constructor(modalController, advertisementService, globalService) {
        this.modalController = modalController;
        this.advertisementService = advertisementService;
        this.globalService = globalService;
        this.descriptions = [];
    }
    ngOnInit() {
        console.log(this.advertisementService.advertisement);
        this.descriptions = this.advertisementService.advertisement.descriptions;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            usageTitles: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.advertisementService.advertisement.usageTitles ? this.advertisementService.advertisement.usageTitles : []),
            function: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.advertisementService.advertisement.function),
            desiredJob: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.advertisementService.advertisement.desiredJob, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            descriptions: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null)
        });
    }
    close() {
        this.modalController.dismiss();
    }
    /**
     * add new task
     * @param element
     */
    addTask(element) {
        if (element.value) {
            this.descriptions.push(element.value);
            element.value = null;
        }
    }
    /**
     * delete tasks
     * @param i
     */
    deleteTask(i) {
        this.descriptions.splice(i, 1);
    }
    /**
     * add experiences
     */
    onSave() {
        this.advertisementService.updateTasks(this.advertisementService.advertisement._id, Object.assign(this.form.value, { descriptions: this.descriptions })).subscribe(res => {
            this.close();
        });
    }
};
TaskComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: src_app_core_services_crud_advertisement_service__WEBPACK_IMPORTED_MODULE_4__["AdvertisementService"] },
    { type: src_app_core_services_global_global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"] }
];
TaskComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-task',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./task.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/advertisement/components/update/task/task.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./task.component.scss */ "./src/app/pages/advertisement/components/update/task/task.component.scss")).default]
    })
], TaskComponent);



/***/ })

}]);
//# sourceMappingURL=pages-advertisement-advertisement-module-es2015.js.map