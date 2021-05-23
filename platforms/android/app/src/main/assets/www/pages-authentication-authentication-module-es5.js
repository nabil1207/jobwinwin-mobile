(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-authentication-authentication-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/authentication/components/account-type/account-type.component.html":
    /*!********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/authentication/components/account-type/account-type.component.html ***!
      \********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesAuthenticationComponentsAccountTypeAccountTypeComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- <ion-header class=\"auth-header ion-no-border\" mode=\"md\">\n  <ion-toolbar class=\"auth-toolbar\">\n    <ion-buttons slot=\"start\" class=\"ml-3\">\n      <ion-button routerLink=\"/\" routerDirection=\"root\" class=\"roundbutton p-0\">\n        <ion-icon src=\"./assets/icon/arrow-back.svg\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title class=\"page-title\">\n      <h1 class=\"title text-primary mb-0\">Inscription</h1>\n    </ion-title>\n  </ion-toolbar>\n  <div class=\"page-title\">\n    <h1 class=\"title text-primary\">Inscription</h1>\n  </div>\n</ion-header> -->\n<ion-header class=\"auth-header ion-no-border\" mode=\"md\">\n  <a routerLink=\"/\" routerDirection=\"root\" class=\"roundbutton\">\n    <ion-icon src=\"./assets/icon/arrow-back.svg\"></ion-icon>\n  </a>\n  <div class=\"page-title\">\n    <h1 class=\"title text-primary\">Inscription</h1>\n  </div>\n</ion-header>\n<ion-content [fullscreen]=\"true\">\n  <section class=\"auth-content auth-account-type p-2\">\n    <ion-grid class=\"h-100\">\n      <ion-row class=\"h-100\">\n        <ion-col size=\"12\" class=\"ion-align-self-center\">\n          <article class=\"page-title\">\n            <h1 class=\"title fw-500\">Vous êtes ?</h1>\n          </article>\n        </ion-col>\n        <ion-col size=\"12\" class=\"ion-align-self-center\">\n          <div class=\"page-content\">\n            <form class=\"d-block mt-3\" [formGroup]=\"form\" (ngSubmit)=\"choiseType()\">\n  \n              <img class=\"d-block mb-2 mt-2 mr-auto w-100\" src=\"./assets/img/type-background.svg\" alt=\"type account\">\n  \n              <ion-radio-group formControlName=\"type\">\n                <ion-item lines=\"none\" class=\"d-inline ion-no-padding\">\n                  <ion-label>Recruteur</ion-label>\n                  <ion-radio slot=\"start\" color=\"primary\" mode=\"md\" value=\"recruiter\"></ion-radio>\n                </ion-item>\n  \n                <ion-item lines=\"none\" class=\"d-inline float-right ion-no-padding\">\n                  <ion-label>Candidat</ion-label>\n                  <ion-radio slot=\"start\" color=\"primary\" mode=\"md\" value=\"candidate\"></ion-radio>\n                </ion-item>\n              </ion-radio-group>\n  \n              <div class=\"mt-1\">\n                <ion-button class=\"choose-btn w-100\" color=\"primary\" type=\"submit\" [disabled]=\"!form.valid\">Continuer</ion-button>\n              </div>\n            </form>\n  \n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </section>\n</ion-content>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/authentication/components/congratulation/congratulation.component.html":
    /*!************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/authentication/components/congratulation/congratulation.component.html ***!
      \************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesAuthenticationComponentsCongratulationCongratulationComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<section class=\"congratulation mt-1\">\n    <ng-container *ngIf=\"authService.fromPage === 'sign-up', else contact \" >\n        <img class=\"d-block mt-1 mb-2 mr-auto\" src=\"./assets/img/logo.svg\" alt=\"\">\n        <h2 class=\"text-center\"> Votre compte Jobwinwin a été créé avec succès!</h2>\n        <div class=\"mt-2 text-center\">\n            Les recruteurs sont à quelques clics! <br>\n            Suivez les étapes d'inscription pour matcher et trouver votre futur emploi\n        </div>\n        <img class=\"d-block mt-3 mr-auto\" src=\"./assets/img/congratulation-ilustration.svg\" alt=\"\">\n        <div class=\"text-center mt-3\">\n            <ion-button class=\"yellow-btn w-80\" color=\"secondary\" (click)=\"goTo()\">\n                Ok\n            </ion-button>\n        </div>\n    </ng-container>\n    \n    <ng-template #contact>\n        <img class=\"d-block mt-4 mr-auto\" src=\"./assets/img/logo.svg\" alt=\"\">\n        <div class=\"mt-3 text-center\">\n            Nous vous remercions pour votre message, un conseiller Jobwinwin prendra rapidement contact avec vous.\n        </div>\n        <img class=\"d-block mt-3 mr-auto w-30\" src=\"./assets/img/msg-check.svg\" alt=\"\">\n        <div class=\"text-center mt-3\">\n            <ion-button class=\"yellow-btn w-80\" color=\"secondary\" (click)=\"goTo()\">\n                Ok\n            </ion-button>\n        </div>\n    </ng-template>\n\n</section>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/authentication/components/forgot-password/forgot-password.component.html":
    /*!**************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/authentication/components/forgot-password/forgot-password.component.html ***!
      \**************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesAuthenticationComponentsForgotPasswordForgotPasswordComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- <ion-header class=\"auth-header ion-no-border\" mode=\"md\">\n  <ion-toolbar class=\"auth-toolbar\">\n    <ion-buttons slot=\"start\" class=\"ml-3\">\n      <ion-button routerLink=\"/\" routerDirection=\"root\" class=\"roundbutton p-0\">\n        <ion-icon src=\"./assets/icon/arrow-back.svg\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title class=\"page-title\">\n      <h1 class=\"title text-primary mb-0\">Mot de passe oublié</h1>\n    </ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-header class=\"auth-header ion-no-border\" mode=\"md\">\n  <a routerLink=\"/\" routerDirection=\"root\" class=\"roundbutton\">\n    <ion-icon src=\"./assets/icon/arrow-back.svg\"></ion-icon>\n  </a>\n  <div class=\"page-title\">\n    <h1 class=\"title text-primary\">Mot de passe oublié</h1>\n  </div>\n</ion-header>\n<ion-content [fullscreen]=\"false\" class=\"forms\">\n  <section class=\"auth-content auth-forgot-password p-1\">\n    <ion-grid class=\"h-100\">\n      <ion-row class=\"h-100\">\n        <ion-col size=\"12\" class=\"ion-align-self-center\">\n          <div class=\"page-content\">\n            <img class=\"d-block mb-2 mr-auto w-100\" src=\"./assets/img/forgot-password.svg\" alt=\"forgot password\">\n            <p class=\"mt-2\">\n              Saisissez votre adresse e-mail <br>\n              pour réinitialiser votre mot de passe\n            </p>\n            <form class=\"d-block mt-2\" [formGroup]=\"form\" (ngSubmit)=\"onSave()\">\n              <div class=\"form-group\">\n                <input class=\"custom-input\" type=\"email\" placeholder=\"E-mail\" formControlName=\"email\">\n                <small class=\"text-error\" *ngIf=\"form.get('email').touched && (form.get('email').hasError('email') || \n                form.get('email').hasError('required'))\">\n                  {{ 'shared.validations.email' | translate}}\n                </small>\n              </div>\n              <div class=\"mt-1\">\n                <ion-button type=\"submit\" class=\"choose-btn w-100\" color=\"primary\" [disabled]=\"!form.valid\">\n                  Envoyer\n                </ion-button>\n              </div>\n            </form>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n  </section>\n\n</ion-content>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/authentication/components/recruiter/recruiter.component.html":
    /*!**************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/authentication/components/recruiter/recruiter.component.html ***!
      \**************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesAuthenticationComponentsRecruiterRecruiterComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"auth-header signup-background ion-no-border\" mode=\"md\">\n    <ion-toolbar class=\"auth-toolbar\">\n        <ion-buttons slot=\"start\">\n            <ion-button routerLink=\"/auth/account-type\" routerDirection=\"root\" class=\"roundbutton p-0\">\n                <ion-icon src=\"./assets/icon/arrow-back.svg\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <ion-title class=\"page-title\">\n            <h1 class=\"title mb-0\">Contactez-nous</h1>\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content overflow-scroll=\"true\" scroll=\"true\" class=\"forms\">\n    <section class=\"auth-content auth-contact p-1\">\n        <ion-grid class=\"h-100\">\n            <ion-row class=\"h-100\">\n                <ion-col size=\"12\" class=\"ion-align-self-start\">\n                    <div class=\"page-content\">\n                        <form class=\"d-block\" [formGroup]=\"form\" (ngSubmit)=\"onSave()\">\n                            <div class=\"form-group\">\n                                <input class=\"custom-input\" type=\"text\" placeholder=\"Société\"\n                                    formControlName=\"companyName\">\n                                <small class=\"text-error\"\n                                    *ngIf=\"form.get('companyName').touched && form.get('companyName').hasError('required')\">\n                                    {{ 'shared.validations.required' | translate}}\n                                </small>\n                            </div>\n                            <div class=\"form-group\">\n                                <input class=\"custom-input\" type=\"text\" placeholder=\"Nom complet\"\n                                    formControlName=\"fullName\">\n                                <small class=\"text-error\"\n                                    *ngIf=\"form.get('fullName').touched && form.get('fullName').hasError('required')\">\n                                    {{ 'shared.validations.required' | translate}}\n                                </small>\n                            </div>\n                            <div class=\"form-group\">\n                                <input class=\"custom-input\" type=\"text\" placeholder=\"Fonction\"\n                                    formControlName=\"function\">\n                                <small class=\"text-error\"\n                                    *ngIf=\"form.get('function').touched && form.get('function').hasError('required')\">\n                                    {{ 'shared.validations.required' | translate}}\n                                </small>\n                            </div>\n                            <div class=\"form-group\">\n                                <input class=\"custom-input\" type=\"tel\" placeholder=\"Téléphone\"\n                                    formControlName=\"phoneNumber\">\n                                <small class=\"text-error\"\n                                    *ngIf=\"form.get('phoneNumber').touched && form.get('phoneNumber').hasError('required')\">\n                                    {{ 'shared.validations.required' | translate}}\n                                </small>\n                            </div>\n                            <div class=\"form-group\">\n                                <input class=\"custom-input\" type=\"email\" placeholder=\"E-mail\" formControlName=\"email\">\n                                <small class=\"text-error\" *ngIf=\"form.get('email').touched && (form.get('email').hasError('email') || \n                                form.get('email').hasError('required'))\">\n                                    {{ 'shared.validations.email' | translate}}\n                                </small>\n                            </div>\n                            <div class=\"form-group\">\n                                <textarea class=\"custom-textarea\" placeholder=\"Tapez votre message\"\n                                    formControlName=\"message\"></textarea>\n                                <small class=\"text-error\"\n                                    *ngIf=\"form.get('message').touched && form.get('message').hasError('required')\">\n                                    {{ 'shared.validations.required' | translate}}\n                                </small>\n                            </div>\n                            <div class=\"mt-1\">\n                                <ion-button type=\"submit\" class=\"w-100\" color=\"primary\" [disabled]=\"!form.valid\">\n                                    Envoyez le message\n                                </ion-button>\n                            </div>\n                        </form>\n\n                        <div class=\"other-choice text-center mt-2 pb-4\">\n                            <h3 class=\"title\">\n                                <span>Ou appelez le</span>\n                            </h3>\n                            <div class=\"text-center mt-2\">\n                                <div class=\"d-block mb-1\">\n                                    <img class=\"d-inline align-sub mr-2\" src=\"./assets/icon/phone-icon.svg\">\n                                    <span class=\"d-inline align-center\">+212 000 000 000</span>\n                                </div>\n                                <div class=\"d-block\">\n                                    <img class=\"d-inline align-sub mr-2\" src=\"./assets/icon/phone-icon.svg\">\n                                    <span class=\"d-inline align-center\">+212 000 000 000</span>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n\n    </section>\n</ion-content>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/authentication/components/reset-password/reset-password.component.html":
    /*!************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/authentication/components/reset-password/reset-password.component.html ***!
      \************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesAuthenticationComponentsResetPasswordResetPasswordComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"auth-header ion-no-border\" mode=\"md\">\n  <ion-toolbar class=\"auth-toolbar\">\n    <ion-buttons slot=\"start\" class=\"ml-3\">\n      <ion-button routerLink=\"/\" routerDirection=\"root\" class=\"roundbutton p-0\">\n        <ion-icon src=\"./assets/icon/arrow-back.svg\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title class=\"page-title\">\n      <h1 class=\"title-black mb-0\">Nouveau mot de passe</h1>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content [fullscreen]=\"true\" class=\"forms\">\n  <section class=\"auth-content auth-resetPassword p-1 h-80vh\">\n    <ion-grid class=\"h-100\">\n      <ion-row class=\"h-100\">\n        <ion-col size=\"12\" class=\"ion-align-self-center\">\n          <div class=\"page-content\">\n            <img class=\"d-block mb-2 mr-auto w-100\" src=\"./assets/img/set-new-password.svg\" alt=\"Set New password\">\n            <p class=\"text-center mt-2\">\n              Entrez le nouveau mot de passe\n            </p>\n            <form class=\"d-block mt-2\" [formGroup]=\"form\" (ngSubmit)=\"onSave()\">\n              <div class=\"form-group position-relative\">\n                <input class=\"custom-input\" type=\"password\" placeholder=\"Nouveau mot de passe\"\n                  formControlName=\"password\">\n              </div>\n              <div class=\"form-group position-relative\">\n                <input class=\"custom-input\" type=\"password\" placeholder=\"Confirmez le mot de passe\"\n                  formControlName=\"confirmPassword\">\n              </div>\n              <div class=\"mt-1\">\n                <ion-button type=\"submit\" class=\"w-100\" color=\"primary\" [disabled]=\"!form.valid\">Validez</ion-button>\n              </div>\n            </form>\n\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n  </section>\n\n</ion-content>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/authentication/components/sign-in/sign-in.component.html":
    /*!**********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/authentication/components/sign-in/sign-in.component.html ***!
      \**********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesAuthenticationComponentsSignInSignInComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"auth-header signup-background ion-no-border\" mode=\"md\">\n  <ion-toolbar class=\"auth-toolbar\">\n    <ion-title class=\"text-center\">\n      <img class=\"auth-logo\" src=\"./assets/img/logo.svg\" alt=\"Logo\">\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"forms\" >\n  <section class=\"auth-content auth-login\">\n    <ion-grid class=\"h-100\">\n      <ion-row class=\"h-100 py-1\">\n        <ion-col size=\"12\" class=\"ion-align-self-start\">\n          <article class=\"page-title\">\n            <p class=\"pt-1\">\n              Connectez-vous à Jobwinwin<br>\n              Swipez, Matchez et Rencontrez-vous !\n            </p>\n            {{ code }}\n          </article>\n        </ion-col>\n        <ion-col size=\"12\" class=\"ion-align-self-center\">\n          <div class=\"page-content\">\n            <div class=\"custom-card py-1\">\n              <form class=\"d-block\" [formGroup]=\"form\" (ngSubmit)=\"onSave()\">\n                <div class=\"form-group\">\n                  <input class=\"custom-input\" type=\"email\" placeholder=\"E-mail\" formControlName=\"email\">\n                  <small class=\"text-error\" *ngIf=\"form.get('email').touched && (form.get('email').hasError('email') || \n                form.get('email').hasError('required'))\">\n                    {{ 'shared.validations.email' | translate}}\n                  </small>\n                </div>\n                <div class=\"form-group position-relative\">\n                  <input class=\"custom-input\" type=\"password\" placeholder=\"Mot de passe\" formControlName=\"password\">\n                  <small class=\"text-error\" *ngIf=\"form.get('password').touched && (form.get('password').hasError('minlength') || \n                form.get('password').hasError('required'))\"\n                    [innerHtml]=\"'shared.validations.required-password' | translate\"></small>\n                </div>\n                <div class=\"forgot-password w-100 mt-1\">\n                  <a routerLink=\"/auth/forgot-password\" routerDirection=\"root\">Mot de passe oublié ?</a>\n                </div>\n                <div class=\"mt-1\" fxLayout=\"row\" fxLayoutAlign=\"space-between\" fxLayoutGap=\"20px\">\n                  <div fxLayout=\"column\" fxFlex.xs=\"40%\">\n                    <a class=\"pt-1\" routerLink=\"/auth/account-type\" routerDirection=\"root\"><span class=\"link\">Créer un compte</span></a>\n                  </div>\n                  <div fxLayout=\"column\" fxFlex.xs=\"50%\">\n                    <ion-button type=\"submit\" class=\"w-100\" color=\"primary\" [disabled]=\"!form.valid\">\n                      Se connecter\n                    </ion-button>\n                  </div>\n                </div>\n              </form>\n              <div class=\"other-choice text-center mt-2\">\n                <h3 class=\"title\">Ou connectez-vous avec </h3>\n                <p class=\"text-center mt-2\">\n                  <img class=\"mr-2\" src=\"./assets/icon/linkedin.svg\">\n                  <img src=\"./assets/icon/google.svg\">\n                </p>\n              </div>\n            </div>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </section>\n</ion-content>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/authentication/components/sign-up/sign-up.component.html":
    /*!**********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/authentication/components/sign-up/sign-up.component.html ***!
      \**********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesAuthenticationComponentsSignUpSignUpComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"auth-header signup-background ion-no-border\" mode=\"md\">\n  <ion-toolbar class=\"auth-toolbar\">\n    <ion-buttons slot=\"start\">\n      <ion-button routerLink=\"/auth/account-type\" routerDirection=\"root\" class=\"roundbutton p-0\">\n        <ion-icon src=\"./assets/icon/arrow-back.svg\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title class=\"page-title\">\n      <h1 class=\"title mb-0\">Créer votre compte</h1>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content [fullscreen]=\"true\" class=\"forms\">\n  <section class=\"auth-content auth-signup p-1\">\n\n    <ion-grid class=\"h-100\">\n      <ion-row class=\"h-100\">\n        <ion-col size=\"12\" class=\"ion-align-self-start\">\n          <div class=\"page-content\">\n            <form class=\"d-block\" [formGroup]=\"form\" (ngSubmit)=\"onSave()\">\n              <div class=\"form-group\">\n                <input class=\"custom-input\" type=\"text\" placeholder=\"Votre prénom\" formControlName=\"lastName\">\n                <small class=\"text-error\"\n                  *ngIf=\"form.get('lastName').touched && form.get('lastName').hasError('required')\">\n                  {{ 'shared.validations.required' | translate}}\n                </small>\n              </div>\n              <div class=\"form-group\">\n                <input class=\"custom-input\" type=\"text\" placeholder=\"Votre nom\" formControlName=\"firstName\">\n                <small class=\"text-error\"\n                  *ngIf=\"form.get('firstName').touched && form.get('firstName').hasError('required')\">\n                  {{ 'shared.validations.required' | translate}}\n                </small>\n              </div>\n              <div class=\"form-group\">\n                <input class=\"custom-input\" type=\"email\" placeholder=\"E-mail\" formControlName=\"email\">\n                <small class=\"text-error\" *ngIf=\"form.get('email').touched && (form.get('email').hasError('email') || \n                form.get('email').hasError('required'))\">\n                  {{ 'shared.validations.email' | translate}}\n                </small>\n              </div>\n              <div class=\"form-group\">\n                <input class=\"custom-input\" type=\"password\" placeholder=\"Mot de passe\" formControlName=\"password\">\n                <small class=\"text-error\" *ngIf=\"form.get('password').touched && (form.get('password').hasError('minlength') || \n                form.get('password').hasError('required'))\"\n                  [innerHtml]=\"'shared.validations.required-password' | translate\"></small>\n              </div>\n              <div class=\"form-group position-relative\">\n                <input class=\"custom-input\" type=\"password\" placeholder=\"Confirmez le mot de passe\"\n                  formControlName=\"confirmPassword\">\n                <small class=\"text-error\"\n                  *ngIf=\"form.get('confirmPassword').touched &&\n                      (form.get('confirmPassword').hasError('required') || form.get('confirmPassword').hasError('minlength'))\">\n                  Le champ doit contenir au moins <strong>5</strong> caractères.\n                </small>\n                <small *ngIf=\"form.get('confirmPassword').touched &&\n                      !form.get('confirmPassword').hasError('required') &&\n                      !form.get('confirmPassword').hasError('minlength') &&\n                      form.hasError('passwordsDoNotMatch')\" class=\"text-error\">\n                  Les mots de passe ne <strong>correspondent pas</strong>.\n                </small>\n              </div>\n              <p class=\"condition-politique ion-text-center\">\n                En appuyant sur je m'inscris et j'accepte, vous reconnaissez avoir lu notre\n                <span class=\"link\">Politique de confidentialité </span> et acceptez nos <span class=\"link\"> Conditions\n                  d'utilisation </span> du service\n              </p>\n              <div class=\"mt-1\">\n                <ion-button type=\"submit\" class=\"w-100\" color=\"primary\" [disabled]=\"!form.valid\">Je m'inscris\n                </ion-button>\n              </div>\n              <p class=\"hint ion-text-center\">\n                En vous connectant.vous acceptez nos conditions générales. Pour en savoir plus sur l'usage que nous\n                faisons de\n                vos données, consultez notre Politique de confidentialité et notre Politique en matière de cookies.\n              </p>\n            </form>\n\n            <div class=\"other-choice text-center mt-2\">\n              <h3 class=\"title\">Ou inscrivez-vous avec </h3>\n              <p class=\"text-center mt-2\">\n                <img class=\"mr-2\" src=\"./assets/icon/linkedin.svg\">\n                <img src=\"./assets/icon/google.svg\">\n              </p>\n            </div>\n\n          </div>\n        </ion-col>\n        <ion-col size=\"12\" class=\"ion-align-self-end\">\n          <div class=\"footer-auth text-center\">\n            <p class=\"mt-1 copyright\">Vous avez déjà un compte ?\n              <a routerLink=\"/\" routerDirection=\"root\"><span class=\"link\">S’identifier</span></a>\n            </p>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </section>\n</ion-content>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/authentication/components/verification/verification.component.html":
    /*!********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/authentication/components/verification/verification.component.html ***!
      \********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesAuthenticationComponentsVerificationVerificationComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- <ion-header class=\"auth-header ion-no-border\" mode=\"md\">\n  <ion-toolbar class=\"auth-toolbar\">\n    <ion-buttons slot=\"start\" class=\"ml-3\">\n      <ion-button routerLink=\"/auth/forgot-password\" routerDirection=\"root\" class=\"roundbutton p-0\">\n        <ion-icon src=\"./assets/icon/arrow-back.svg\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title class=\"page-title\">\n      <h1 class=\"title mb-0\">Vérification d’email</h1>\n    </ion-title>\n  </ion-toolbar>\n</ion-header> -->\n<ion-header class=\"auth-header ion-no-border\" mode=\"md\">\n  <a [routerLink]=\"authService.fromPage === 'sign-up' ? '/auth/sign-up' : '/auth/forgot-password' \" routerDirection=\"root\" class=\"roundbutton\">\n    <ion-icon src=\"./assets/icon/arrow-back.svg\"></ion-icon>\n  </a>\n  <div class=\"page-title\">\n    <h1 class=\"title\">Vérification d’email</h1>\n  </div>\n</ion-header>\n<ion-content [fullscreen]=\"true\" class=\"verify-background forms\">\n  <section class=\"auth-content auth-verification p-1\">\n    <ion-grid class=\"h-100\">\n      <ion-row class=\"h-100\">\n        <ion-col size=\"12\" class=\"ion-align-self-center\">\n          <div class=\"page-content mt-3\">\n            <h4 class=\"subtitle\">Entrez le code</h4>\n            <p class=\"desc text-center mt-2\">\n              Nous vous avons envoyé un code d’activation par email sur le compte {{ authService.verificationEmail }}\n            </p>\n            <form [formGroup]=\"form\" (ngSubmit)=\"onSave()\">\n              <div class=\"custom-card mt-4\">\n                <div class=\"form-group text-center\">\n                  <input class=\"verify-number\" type=\"text\" maxLength=\"1\" tabindex=\"1\" (keyup)=\"moveFocus($event, b)\"\n                    formControlName=\"one\">\n                  <input class=\"verify-number\" type=\"text\" maxLength=\"1\" tabindex=\"2\" #b (keyup)=\"moveFocus($event, c)\"\n                    formControlName=\"two\">\n                  <input class=\"verify-number\" type=\"text\" maxLength=\"1\" tabindex=\"3\" #c (keyup)=\"moveFocus($event, d)\"\n                    formControlName=\"three\">\n                  <input class=\"verify-number\" type=\"text\" maxLength=\"1\" tabindex=\"4\" #d formControlName=\"four\">\n                </div>\n              </div>\n\n              <div class=\"text-left pt-2\">\n                <strong *ngIf=\"sendTimer\"  class=\"text-primary\" (click)=\"resendCode()\">Renvoyer le code ?</strong><br>\n                <small>Veuillez patienter au moins 2 minutes avant de demander un autre code </small>\n              </div>\n\n              <ion-button type=\"submit\" class=\"btn-verification mt-3 w-100\" [disabled]=\"!form.valid\">\n                Validez\n              </ion-button>\n\n            </form>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n  </section>\n\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/core/services/crud/contact.service.ts":
    /*!*******************************************************!*\
      !*** ./src/app/core/services/crud/contact.service.ts ***!
      \*******************************************************/

    /*! exports provided: ContactService */

    /***/
    function srcAppCoreServicesCrudContactServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContactService", function () {
        return ContactService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _global_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../global/api.service */
      "./src/app/core/services/global/api.service.ts");

      var ContactService = /*#__PURE__*/function () {
        function ContactService(apiService) {
          _classCallCheck(this, ContactService);

          this.apiService = apiService;
        }
        /**
         * contact admin
         * @param contact
         */


        _createClass(ContactService, [{
          key: "contact",
          value: function contact(_contact) {
            return this.apiService.post('contact-ms/contacts', _contact);
          }
        }]);

        return ContactService;
      }();

      ContactService.ctorParameters = function () {
        return [{
          type: _global_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
        }];
      };

      ContactService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], ContactService);
      /***/
    },

    /***/
    "./src/app/pages/authentication/Authentication-routing.module.ts":
    /*!***********************************************************************!*\
      !*** ./src/app/pages/authentication/Authentication-routing.module.ts ***!
      \***********************************************************************/

    /*! exports provided: routes, AuthenticationRoutingModule */

    /***/
    function srcAppPagesAuthenticationAuthenticationRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "routes", function () {
        return routes;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthenticationRoutingModule", function () {
        return AuthenticationRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _components_congratulation_congratulation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./components/congratulation/congratulation.component */
      "./src/app/pages/authentication/components/congratulation/congratulation.component.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./components */
      "./src/app/pages/authentication/components/index.ts");
      /* harmony import */


      var _components_recruiter_recruiter_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./components/recruiter/recruiter.component */
      "./src/app/pages/authentication/components/recruiter/recruiter.component.ts");

      var routes = [{
        path: '',
        component: _components__WEBPACK_IMPORTED_MODULE_4__["SignInComponent"]
      }, {
        path: 'sign-up',
        component: _components__WEBPACK_IMPORTED_MODULE_4__["SignUpComponent"]
      }, {
        path: 'forgot-password',
        component: _components__WEBPACK_IMPORTED_MODULE_4__["ForgotPasswordComponent"]
      }, {
        path: 'reset-password',
        component: _components__WEBPACK_IMPORTED_MODULE_4__["ResetPasswordComponent"]
      }, {
        path: 'verification',
        component: _components__WEBPACK_IMPORTED_MODULE_4__["VerificationComponent"]
      }, {
        path: 'account-type',
        component: _components__WEBPACK_IMPORTED_MODULE_4__["AccountTypeComponent"]
      }, {
        path: 'recruiter',
        component: _components_recruiter_recruiter_component__WEBPACK_IMPORTED_MODULE_5__["RecruiterComponent"]
      }, {
        path: 'congratulation',
        component: _components_congratulation_congratulation_component__WEBPACK_IMPORTED_MODULE_1__["CongratulationComponent"]
      }];

      var AuthenticationRoutingModule = function AuthenticationRoutingModule() {
        _classCallCheck(this, AuthenticationRoutingModule);
      };

      AuthenticationRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
      })], AuthenticationRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/authentication/authentication.module.ts":
    /*!***************************************************************!*\
      !*** ./src/app/pages/authentication/authentication.module.ts ***!
      \***************************************************************/

    /*! exports provided: AuthenticationModule */

    /***/
    function srcAppPagesAuthenticationAuthenticationModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthenticationModule", function () {
        return AuthenticationModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./components */
      "./src/app/pages/authentication/components/index.ts");
      /* harmony import */


      var _Authentication_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./Authentication-routing.module */
      "./src/app/pages/authentication/Authentication-routing.module.ts");
      /* harmony import */


      var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/shared.module */
      "./src/app/shared/shared.module.ts");
      /* harmony import */


      var _components_recruiter_recruiter_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./components/recruiter/recruiter.component */
      "./src/app/pages/authentication/components/recruiter/recruiter.component.ts");
      /* harmony import */


      var _components_congratulation_congratulation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./components/congratulation/congratulation.component */
      "./src/app/pages/authentication/components/congratulation/congratulation.component.ts");

      var AuthenticationModule = function AuthenticationModule() {
        _classCallCheck(this, AuthenticationModule);
      };

      AuthenticationModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_components__WEBPACK_IMPORTED_MODULE_2__["SignInComponent"], _components__WEBPACK_IMPORTED_MODULE_2__["SignUpComponent"], _components__WEBPACK_IMPORTED_MODULE_2__["ForgotPasswordComponent"], _components__WEBPACK_IMPORTED_MODULE_2__["ResetPasswordComponent"], _components__WEBPACK_IMPORTED_MODULE_2__["VerificationComponent"], _components__WEBPACK_IMPORTED_MODULE_2__["AccountTypeComponent"], _components_recruiter_recruiter_component__WEBPACK_IMPORTED_MODULE_5__["RecruiterComponent"], _components_congratulation_congratulation_component__WEBPACK_IMPORTED_MODULE_6__["CongratulationComponent"]],
        imports: [src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _Authentication_routing_module__WEBPACK_IMPORTED_MODULE_3__["AuthenticationRoutingModule"]]
      })], AuthenticationModule);
      /***/
    },

    /***/
    "./src/app/pages/authentication/components/account-type/account-type.component.scss":
    /*!******************************************************************************************!*\
      !*** ./src/app/pages/authentication/components/account-type/account-type.component.scss ***!
      \******************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesAuthenticationComponentsAccountTypeAccountTypeComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2F1dGhlbnRpY2F0aW9uL2NvbXBvbmVudHMvYWNjb3VudC10eXBlL2FjY291bnQtdHlwZS5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/pages/authentication/components/account-type/account-type.component.ts":
    /*!****************************************************************************************!*\
      !*** ./src/app/pages/authentication/components/account-type/account-type.component.ts ***!
      \****************************************************************************************/

    /*! exports provided: AccountTypeComponent */

    /***/
    function srcAppPagesAuthenticationComponentsAccountTypeAccountTypeComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccountTypeComponent", function () {
        return AccountTypeComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var AccountTypeComponent = /*#__PURE__*/function () {
        function AccountTypeComponent(router) {
          _classCallCheck(this, AccountTypeComponent);

          this.router = router;
          this.initForm();
        }

        _createClass(AccountTypeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "initForm",
          value: function initForm() {
            this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
              type: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
            });
          }
        }, {
          key: "choiseType",
          value: function choiseType() {
            if (this.form.get('type').value === 'candidate') {
              this.router.navigateByUrl('/auth/sign-up');
            } else {
              this.router.navigateByUrl('/auth/recruiter');
            }
          }
        }]);

        return AccountTypeComponent;
      }();

      AccountTypeComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      };

      AccountTypeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-account-type',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./account-type.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/authentication/components/account-type/account-type.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./account-type.component.scss */
        "./src/app/pages/authentication/components/account-type/account-type.component.scss"))["default"]]
      })], AccountTypeComponent);
      /***/
    },

    /***/
    "./src/app/pages/authentication/components/congratulation/congratulation.component.scss":
    /*!**********************************************************************************************!*\
      !*** ./src/app/pages/authentication/components/congratulation/congratulation.component.scss ***!
      \**********************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesAuthenticationComponentsCongratulationCongratulationComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2F1dGhlbnRpY2F0aW9uL2NvbXBvbmVudHMvY29uZ3JhdHVsYXRpb24vY29uZ3JhdHVsYXRpb24uY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/pages/authentication/components/congratulation/congratulation.component.ts":
    /*!********************************************************************************************!*\
      !*** ./src/app/pages/authentication/components/congratulation/congratulation.component.ts ***!
      \********************************************************************************************/

    /*! exports provided: CongratulationComponent */

    /***/
    function srcAppPagesAuthenticationComponentsCongratulationCongratulationComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CongratulationComponent", function () {
        return CongratulationComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var src_app_core_services_global_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/core/services/global/auth.service */
      "./src/app/core/services/global/auth.service.ts");
      /* harmony import */


      var src_app_core_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/core/utils */
      "./src/app/core/utils/index.ts");
      /* harmony import */


      var src_app_core_services_crud_candidate_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/core/services/crud/candidate.service */
      "./src/app/core/services/crud/candidate.service.ts");

      var CongratulationComponent = /*#__PURE__*/function () {
        function CongratulationComponent(authService, candidateService) {
          _classCallCheck(this, CongratulationComponent);

          this.authService = authService;
          this.candidateService = candidateService;
        }

        _createClass(CongratulationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
          /**
           * on save
           */

        }, {
          key: "goTo",
          value: function goTo() {
            var _this = this;

            if (this.authService.fromPage === 'sign-up') {
              var value = {
                email: this.authService.verificationEmail,
                password: this.authService.signUpPassword
              };
              this.authService.signIn(value).subscribe(function (response) {
                if (response.user.userRole === 'Candidate') {
                  if (!response.user || Object.keys(response.user).length === 0 || response.user.currentStep <= 8) {
                    _this.authService.isLoggedIn().toPromise().then(function (res) {
                      console.log(res);
                      _this.candidateService.candidate = res;
                      src_app_core_utils__WEBPACK_IMPORTED_MODULE_3__["Redirection"].profileByStep(res.currentStep);
                    });
                  } else {
                    src_app_core_utils__WEBPACK_IMPORTED_MODULE_3__["Redirection"].candidateDashboard();
                  }
                } else {
                  src_app_core_utils__WEBPACK_IMPORTED_MODULE_3__["Redirection"].dashboard();
                }
              });
            } else {
              src_app_core_utils__WEBPACK_IMPORTED_MODULE_3__["Redirection"].login();
            }
          }
        }]);

        return CongratulationComponent;
      }();

      CongratulationComponent.ctorParameters = function () {
        return [{
          type: src_app_core_services_global_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }, {
          type: src_app_core_services_crud_candidate_service__WEBPACK_IMPORTED_MODULE_4__["CandidateService"]
        }];
      };

      CongratulationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-congratulation',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./congratulation.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/authentication/components/congratulation/congratulation.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./congratulation.component.scss */
        "./src/app/pages/authentication/components/congratulation/congratulation.component.scss"))["default"]]
      })], CongratulationComponent);
      /***/
    },

    /***/
    "./src/app/pages/authentication/components/forgot-password/forgot-password.component.scss":
    /*!************************************************************************************************!*\
      !*** ./src/app/pages/authentication/components/forgot-password/forgot-password.component.scss ***!
      \************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesAuthenticationComponentsForgotPasswordForgotPasswordComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2F1dGhlbnRpY2F0aW9uL2NvbXBvbmVudHMvZm9yZ290LXBhc3N3b3JkL2ZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/pages/authentication/components/forgot-password/forgot-password.component.ts":
    /*!**********************************************************************************************!*\
      !*** ./src/app/pages/authentication/components/forgot-password/forgot-password.component.ts ***!
      \**********************************************************************************************/

    /*! exports provided: ForgotPasswordComponent */

    /***/
    function srcAppPagesAuthenticationComponentsForgotPasswordForgotPasswordComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function () {
        return ForgotPasswordComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var src_app_core_services_global_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/core/services/global/auth.service */
      "./src/app/core/services/global/auth.service.ts");
      /* harmony import */


      var src_app_core_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/core/utils */
      "./src/app/core/utils/index.ts");
      /* harmony import */


      var src_app_core_services_addapters_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/core/services/addapters/toast.service */
      "./src/app/core/services/addapters/toast.service.ts");
      /* harmony import */


      var src_app_core_services_addapters_trans_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/core/services/addapters/trans.service */
      "./src/app/core/services/addapters/trans.service.ts");

      var ForgotPasswordComponent = /*#__PURE__*/function () {
        function ForgotPasswordComponent(authService, toastService, transService) {
          _classCallCheck(this, ForgotPasswordComponent);

          this.authService = authService;
          this.toastService = toastService;
          this.transService = transService;
          this.initForm();
        }

        _createClass(ForgotPasswordComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
          /**
           * init forgot password form
           */

        }, {
          key: "initForm",
          value: function initForm() {
            this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
              email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]))
            });
          }
          /**
           * forgot your password
           */

        }, {
          key: "onSave",
          value: function onSave() {
            var _this2 = this;

            this.authService.forgotPassword(this.form.value).subscribe(function (response) {
              _this2.authService.fromPage = 'forgot-password';
              _this2.authService.verificationEmail = _this2.form.get('email').value;

              _this2.toastService.success(_this2.transService.translate(response.message));

              src_app_core_utils__WEBPACK_IMPORTED_MODULE_4__["Redirection"].verification();
            });
          }
        }]);

        return ForgotPasswordComponent;
      }();

      ForgotPasswordComponent.ctorParameters = function () {
        return [{
          type: src_app_core_services_global_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }, {
          type: src_app_core_services_addapters_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"]
        }, {
          type: src_app_core_services_addapters_trans_service__WEBPACK_IMPORTED_MODULE_6__["TransService"]
        }];
      };

      ForgotPasswordComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forgot-password',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./forgot-password.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/authentication/components/forgot-password/forgot-password.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./forgot-password.component.scss */
        "./src/app/pages/authentication/components/forgot-password/forgot-password.component.scss"))["default"]]
      })], ForgotPasswordComponent);
      /***/
    },

    /***/
    "./src/app/pages/authentication/components/index.ts":
    /*!**********************************************************!*\
      !*** ./src/app/pages/authentication/components/index.ts ***!
      \**********************************************************/

    /*! exports provided: AccountTypeComponent, ForgotPasswordComponent, ResetPasswordComponent, SignInComponent, SignUpComponent, VerificationComponent */

    /***/
    function srcAppPagesAuthenticationComponentsIndexTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _account_type_account_type_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./account-type/account-type.component */
      "./src/app/pages/authentication/components/account-type/account-type.component.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AccountTypeComponent", function () {
        return _account_type_account_type_component__WEBPACK_IMPORTED_MODULE_0__["AccountTypeComponent"];
      });
      /* harmony import */


      var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./forgot-password/forgot-password.component */
      "./src/app/pages/authentication/components/forgot-password/forgot-password.component.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function () {
        return _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_1__["ForgotPasswordComponent"];
      });
      /* harmony import */


      var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./reset-password/reset-password.component */
      "./src/app/pages/authentication/components/reset-password/reset-password.component.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function () {
        return _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_2__["ResetPasswordComponent"];
      });
      /* harmony import */


      var _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./sign-in/sign-in.component */
      "./src/app/pages/authentication/components/sign-in/sign-in.component.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "SignInComponent", function () {
        return _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_3__["SignInComponent"];
      });
      /* harmony import */


      var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./sign-up/sign-up.component */
      "./src/app/pages/authentication/components/sign-up/sign-up.component.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "SignUpComponent", function () {
        return _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_4__["SignUpComponent"];
      });
      /* harmony import */


      var _verification_verification_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./verification/verification.component */
      "./src/app/pages/authentication/components/verification/verification.component.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "VerificationComponent", function () {
        return _verification_verification_component__WEBPACK_IMPORTED_MODULE_5__["VerificationComponent"];
      });
      /***/

    },

    /***/
    "./src/app/pages/authentication/components/recruiter/recruiter.component.scss":
    /*!************************************************************************************!*\
      !*** ./src/app/pages/authentication/components/recruiter/recruiter.component.scss ***!
      \************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesAuthenticationComponentsRecruiterRecruiterComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".other-choice .title {\n  line-height: 0.5;\n  text-align: center;\n}\n\n.other-choice .title span {\n  display: inline-block;\n  position: relative;\n}\n\n.other-choice .title span:before,\n.other-choice .title span:after {\n  content: \"\";\n  position: absolute;\n  height: 5px;\n  border-bottom: 1px solid #ccc;\n  border-top: 1px solid #ccc;\n  top: 0;\n  width: 130px;\n}\n\n.other-choice .title span:before {\n  right: 100%;\n  margin-right: 15px;\n}\n\n.other-choice .title span:after {\n  left: 100%;\n  margin-left: 15px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYXV0aGVudGljYXRpb24vY29tcG9uZW50cy9yZWNydWl0ZXIvcmVjcnVpdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVEsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUExQjs7QUFIQTtFQU1RLHFCQUFxQjtFQUNyQixrQkFBa0I7QUFDMUI7O0FBUkE7O0VBV1EsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsNkJBQTZCO0VBQzdCLDBCQUEwQjtFQUMxQixNQUFNO0VBQ04sWUFBWTtBQUVwQjs7QUFuQkE7RUFvQlEsV0FBVztFQUNYLGtCQUFrQjtBQUcxQjs7QUF4QkE7RUF3QlEsVUFBVTtFQUNWLGlCQUFpQjtBQUl6QiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2F1dGhlbnRpY2F0aW9uL2NvbXBvbmVudHMvcmVjcnVpdGVyL3JlY3J1aXRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vdGhlci1jaG9pY2Uge1xuICAgIC50aXRsZSB7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAwLjU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cbiAgICAgIC50aXRsZSBzcGFuIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7ICBcbiAgICAgIH1cbiAgICAgIC50aXRsZSBzcGFuOmJlZm9yZSxcbiAgICAgIC50aXRsZSBzcGFuOmFmdGVyIHtcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBoZWlnaHQ6IDVweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIHdpZHRoOiAxMzBweDtcbiAgICAgIH1cbiAgICAgIC50aXRsZSBzcGFuOmJlZm9yZSB7XG4gICAgICAgIHJpZ2h0OiAxMDAlO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgICB9XG4gICAgICAudGl0bGUgc3BhbjphZnRlciB7XG4gICAgICAgIGxlZnQ6IDEwMCU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgICAgfVxufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/pages/authentication/components/recruiter/recruiter.component.ts":
    /*!**********************************************************************************!*\
      !*** ./src/app/pages/authentication/components/recruiter/recruiter.component.ts ***!
      \**********************************************************************************/

    /*! exports provided: RecruiterComponent */

    /***/
    function srcAppPagesAuthenticationComponentsRecruiterRecruiterComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RecruiterComponent", function () {
        return RecruiterComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var src_app_core_services_crud_contact_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/core/services/crud/contact.service */
      "./src/app/core/services/crud/contact.service.ts");
      /* harmony import */


      var src_app_core_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/core/utils */
      "./src/app/core/utils/index.ts");
      /* harmony import */


      var src_app_core_services_global_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/core/services/global/auth.service */
      "./src/app/core/services/global/auth.service.ts");

      var RecruiterComponent = /*#__PURE__*/function () {
        function RecruiterComponent(contactService, authService) {
          _classCallCheck(this, RecruiterComponent);

          this.contactService = contactService;
          this.authService = authService;
          this.initForm();
        }

        _createClass(RecruiterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
          /**
           * init contact form
           */

        }, {
          key: "initForm",
          value: function initForm() {
            this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
              companyName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
              "function": new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
              fullName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
              phoneNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
              email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email])),
              message: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
            });
          }
          /**
           * contact
           */

        }, {
          key: "onSave",
          value: function onSave() {
            var _this3 = this;

            this.contactService.contact(this.form.value).subscribe(function (res) {
              _this3.authService.fromPage = 'contact';
              src_app_core_utils__WEBPACK_IMPORTED_MODULE_4__["Redirection"].congratulation();
            });
          }
        }]);

        return RecruiterComponent;
      }();

      RecruiterComponent.ctorParameters = function () {
        return [{
          type: src_app_core_services_crud_contact_service__WEBPACK_IMPORTED_MODULE_3__["ContactService"]
        }, {
          type: src_app_core_services_global_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
        }];
      };

      RecruiterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-recruiter',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./recruiter.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/authentication/components/recruiter/recruiter.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./recruiter.component.scss */
        "./src/app/pages/authentication/components/recruiter/recruiter.component.scss"))["default"]]
      })], RecruiterComponent);
      /***/
    },

    /***/
    "./src/app/pages/authentication/components/reset-password/reset-password.component.scss":
    /*!**********************************************************************************************!*\
      !*** ./src/app/pages/authentication/components/reset-password/reset-password.component.scss ***!
      \**********************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesAuthenticationComponentsResetPasswordResetPasswordComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2F1dGhlbnRpY2F0aW9uL2NvbXBvbmVudHMvcmVzZXQtcGFzc3dvcmQvcmVzZXQtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/pages/authentication/components/reset-password/reset-password.component.ts":
    /*!********************************************************************************************!*\
      !*** ./src/app/pages/authentication/components/reset-password/reset-password.component.ts ***!
      \********************************************************************************************/

    /*! exports provided: ResetPasswordComponent */

    /***/
    function srcAppPagesAuthenticationComponentsResetPasswordResetPasswordComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function () {
        return ResetPasswordComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var src_app_core_services_addapters_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/core/services/addapters/toast.service */
      "./src/app/core/services/addapters/toast.service.ts");
      /* harmony import */


      var src_app_core_services_addapters_trans_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/core/services/addapters/trans.service */
      "./src/app/core/services/addapters/trans.service.ts");
      /* harmony import */


      var src_app_core_services_global_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/core/services/global/auth.service */
      "./src/app/core/services/global/auth.service.ts");
      /* harmony import */


      var src_app_core_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/core/utils */
      "./src/app/core/utils/index.ts");

      var ResetPasswordComponent = /*#__PURE__*/function () {
        function ResetPasswordComponent(fb, authService, toastService, transService) {
          _classCallCheck(this, ResetPasswordComponent);

          this.fb = fb;
          this.authService = authService;
          this.toastService = toastService;
          this.transService = transService;
          this.initForm();
        }

        _createClass(ResetPasswordComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
          /**
           * init form
           */

        }, {
          key: "initForm",
          value: function initForm() {
            this.form = this.fb.group({
              password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5)])),
              confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5)]))
            }, {
              validator: this.checkPasswords
            });
          }
          /**
           * check match passwords
           * @param group
           */

        }, {
          key: "checkPasswords",
          value: function checkPasswords(group) {
            return group.controls.password.value === group.controls.confirmPassword.value ? null : {
              passwordsDoNotMatch: true
            };
          }
          /**
           * reset password
           */

        }, {
          key: "onSave",
          value: function onSave() {
            var _this4 = this;

            this.authService.resetPassword(this.form.get('password').value).subscribe(function (res) {
              _this4.toastService.success(_this4.transService.translate(res.message));

              src_app_core_utils__WEBPACK_IMPORTED_MODULE_6__["Redirection"].login();
            });
          }
        }]);

        return ResetPasswordComponent;
      }();

      ResetPasswordComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: src_app_core_services_global_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
        }, {
          type: src_app_core_services_addapters_toast_service__WEBPACK_IMPORTED_MODULE_3__["ToastService"]
        }, {
          type: src_app_core_services_addapters_trans_service__WEBPACK_IMPORTED_MODULE_4__["TransService"]
        }];
      };

      ResetPasswordComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-reset-password',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./reset-password.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/authentication/components/reset-password/reset-password.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./reset-password.component.scss */
        "./src/app/pages/authentication/components/reset-password/reset-password.component.scss"))["default"]]
      })], ResetPasswordComponent);
      /***/
    },

    /***/
    "./src/app/pages/authentication/components/sign-in/sign-in.component.scss":
    /*!********************************************************************************!*\
      !*** ./src/app/pages/authentication/components/sign-in/sign-in.component.scss ***!
      \********************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesAuthenticationComponentsSignInSignInComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2F1dGhlbnRpY2F0aW9uL2NvbXBvbmVudHMvc2lnbi1pbi9zaWduLWluLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/pages/authentication/components/sign-in/sign-in.component.ts":
    /*!******************************************************************************!*\
      !*** ./src/app/pages/authentication/components/sign-in/sign-in.component.ts ***!
      \******************************************************************************/

    /*! exports provided: SignInComponent */

    /***/
    function srcAppPagesAuthenticationComponentsSignInSignInComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignInComponent", function () {
        return SignInComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var src_app_core_services_global_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/core/services/global/auth.service */
      "./src/app/core/services/global/auth.service.ts");
      /* harmony import */


      var src_app_core_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/core/utils */
      "./src/app/core/utils/index.ts");
      /* harmony import */


      var src_app_core_services_crud_candidate_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/core/services/crud/candidate.service */
      "./src/app/core/services/crud/candidate.service.ts");

      var SignInComponent = /*#__PURE__*/function () {
        function SignInComponent(authService, candidateService) {
          _classCallCheck(this, SignInComponent);

          this.authService = authService;
          this.candidateService = candidateService;
          this.visibility = false;
          this.initForm();
        }

        _createClass(SignInComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
          /**
           * init sign in form
           */

        }, {
          key: "initForm",
          value: function initForm() {
            this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
              email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email])),
              password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5)]))
            });
          }
          /**
           * singn in
           */

        }, {
          key: "onSave",
          value: function onSave() {
            var _this5 = this;

            this.authService.signIn(this.form.value).subscribe(function (response) {
              if (Object.keys(response.user).length !== 0) {
                _this5.candidateService.candidate = response.user;

                if (response.user.userRole === 'Candidate') {
                  if (!response.user || Object.keys(response.user).length === 0 || response.user.currentStep <= 6) {
                    _this5.authService.isLoggedIn().toPromise().then(function (res) {
                      console.log(res);
                      _this5.candidateService.candidate = res;
                      src_app_core_utils__WEBPACK_IMPORTED_MODULE_4__["Redirection"].profileByStep(res.currentStep);
                    });
                  } else {
                    src_app_core_utils__WEBPACK_IMPORTED_MODULE_4__["Redirection"].candidateDashboard();
                  }
                } else {
                  src_app_core_utils__WEBPACK_IMPORTED_MODULE_4__["Redirection"].dashboard();
                }
              }
            });
          }
        }]);

        return SignInComponent;
      }();

      SignInComponent.ctorParameters = function () {
        return [{
          type: src_app_core_services_global_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }, {
          type: src_app_core_services_crud_candidate_service__WEBPACK_IMPORTED_MODULE_5__["CandidateService"]
        }];
      };

      SignInComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sign-in',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./sign-in.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/authentication/components/sign-in/sign-in.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./sign-in.component.scss */
        "./src/app/pages/authentication/components/sign-in/sign-in.component.scss"))["default"]]
      })], SignInComponent);
      /***/
    },

    /***/
    "./src/app/pages/authentication/components/sign-up/sign-up.component.scss":
    /*!********************************************************************************!*\
      !*** ./src/app/pages/authentication/components/sign-up/sign-up.component.scss ***!
      \********************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesAuthenticationComponentsSignUpSignUpComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2F1dGhlbnRpY2F0aW9uL2NvbXBvbmVudHMvc2lnbi11cC9zaWduLXVwLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/pages/authentication/components/sign-up/sign-up.component.ts":
    /*!******************************************************************************!*\
      !*** ./src/app/pages/authentication/components/sign-up/sign-up.component.ts ***!
      \******************************************************************************/

    /*! exports provided: SignUpComponent */

    /***/
    function srcAppPagesAuthenticationComponentsSignUpSignUpComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignUpComponent", function () {
        return SignUpComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var src_app_core_services_global_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/core/services/global/auth.service */
      "./src/app/core/services/global/auth.service.ts");
      /* harmony import */


      var src_app_core_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/core/utils */
      "./src/app/core/utils/index.ts");

      var SignUpComponent = /*#__PURE__*/function () {
        function SignUpComponent(fb, authService) {
          _classCallCheck(this, SignUpComponent);

          this.fb = fb;
          this.authService = authService;
          this.initForm();
        }

        _createClass(SignUpComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
          /**
           * init sign up form
           */

        }, {
          key: "initForm",
          value: function initForm() {
            this.form = this.fb.group({
              firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
              lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
              email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
              password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5)])),
              confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5)]))
            }, {
              validator: this.checkPasswords
            });
          }
          /**
           * check match passwords
           * @param group
           */

        }, {
          key: "checkPasswords",
          value: function checkPasswords(group) {
            return group.controls.password.value === group.controls.confirmPassword.value ? null : {
              passwordsDoNotMatch: true
            };
          }
          /**
           * on save
           */

        }, {
          key: "onSave",
          value: function onSave() {
            var _this6 = this;

            var value = this.form.value;
            var getLocalEmail = localStorage.getItem('email');

            if (getLocalEmail === value.email) {
              src_app_core_utils__WEBPACK_IMPORTED_MODULE_4__["Redirection"].verification();
            } else {
              this.authService.signUp(value).subscribe(function (res) {
                console.log(res);
                _this6.authService.fromPage = 'sign-up';
                _this6.authService.verificationEmail = value.email;
                _this6.authService.signUpPassword = value.password;
                localStorage.setItem('email', value.email);
                src_app_core_utils__WEBPACK_IMPORTED_MODULE_4__["Redirection"].verification();
              });
            }
          }
        }]);

        return SignUpComponent;
      }();

      SignUpComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: src_app_core_services_global_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }];
      };

      SignUpComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sign-up',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./sign-up.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/authentication/components/sign-up/sign-up.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./sign-up.component.scss */
        "./src/app/pages/authentication/components/sign-up/sign-up.component.scss"))["default"]]
      })], SignUpComponent);
      /***/
    },

    /***/
    "./src/app/pages/authentication/components/verification/verification.component.scss":
    /*!******************************************************************************************!*\
      !*** ./src/app/pages/authentication/components/verification/verification.component.scss ***!
      \******************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesAuthenticationComponentsVerificationVerificationComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2F1dGhlbnRpY2F0aW9uL2NvbXBvbmVudHMvdmVyaWZpY2F0aW9uL3ZlcmlmaWNhdGlvbi5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/pages/authentication/components/verification/verification.component.ts":
    /*!****************************************************************************************!*\
      !*** ./src/app/pages/authentication/components/verification/verification.component.ts ***!
      \****************************************************************************************/

    /*! exports provided: VerificationComponent */

    /***/
    function srcAppPagesAuthenticationComponentsVerificationVerificationComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VerificationComponent", function () {
        return VerificationComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var src_app_core_services_global_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/core/services/global/auth.service */
      "./src/app/core/services/global/auth.service.ts");
      /* harmony import */


      var src_app_core_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/core/utils */
      "./src/app/core/utils/index.ts");
      /* harmony import */


      var src_app_core_services_addapters_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/core/services/addapters/toast.service */
      "./src/app/core/services/addapters/toast.service.ts");

      var VerificationComponent = /*#__PURE__*/function () {
        function VerificationComponent(authService, toastService) {
          _classCallCheck(this, VerificationComponent);

          this.authService = authService;
          this.toastService = toastService;
          this.sendTimer = false;
          this.initForm();
        }

        _createClass(VerificationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this7 = this;

            setTimeout(function () {
              _this7.sendTimer = true;
            }, 120000);
          }
          /**
           * init verification form
           */

        }, {
          key: "initForm",
          value: function initForm() {
            this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
              one: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
              two: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
              three: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
              four: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
            });
          }
        }, {
          key: "moveFocus",
          value: function moveFocus(event, nextElement) {
            if (event.code !== 'Backspace' && event.code !== 'Space' && event.code !== 'CapsLock' && event.code !== 'ShiftLeft' && event.code !== 'ShiftRight' && event.keyCode !== 16 && event.keyCode !== 8) nextElement.focus();
          }
        }, {
          key: "resendCode",
          value: function resendCode() {
            var _this8 = this;

            if (this.authService.verificationEmail) {
              this.authService.forgotPassword({
                email: this.authService.verificationEmail
              }).subscribe(function (response) {
                _this8.toastService.success('Le code a été bien renvoyé');

                _this8.sendTimer = false;
                setTimeout(function () {
                  _this8.sendTimer = true;
                }, 120000);
              });
            }
          }
          /**
           * on save
           */

        }, {
          key: "onSave",
          value: function onSave() {
            var _this9 = this;

            var verificationCode = '';
            Object.keys(this.form.value).forEach(function (key) {
              verificationCode += _this9.form.get(key).value.toLowerCase();
            });

            if (this.authService.fromPage === 'sign-up') {
              this.authService.verification({
                verificationCode: verificationCode,
                email: this.authService.verificationEmail
              }).subscribe(function (res) {
                src_app_core_utils__WEBPACK_IMPORTED_MODULE_4__["Redirection"].congratulation();
              });
            } else {
              this.authService.verification({
                verificationCode: verificationCode,
                email: this.authService.verificationEmail
              }).subscribe(function (res) {
                _this9.authService.verificationCode = verificationCode;
                src_app_core_utils__WEBPACK_IMPORTED_MODULE_4__["Redirection"].resetPassword();
              });
            }

            localStorage.removeItem('email');
          }
        }]);

        return VerificationComponent;
      }();

      VerificationComponent.ctorParameters = function () {
        return [{
          type: src_app_core_services_global_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }, {
          type: src_app_core_services_addapters_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"]
        }];
      };

      VerificationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-verification',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./verification.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/authentication/components/verification/verification.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./verification.component.scss */
        "./src/app/pages/authentication/components/verification/verification.component.scss"))["default"]]
      })], VerificationComponent);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-authentication-authentication-module-es5.js.map