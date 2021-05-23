(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "./$$_lazy_route_resource lazy recursive":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function $$_lazy_route_resourceLazyRecursive(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
      /***/
    },

    /***/
    "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \*****************************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
      var map = {
        "./ion-action-sheet.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet.entry.js", "common", 0],
        "./ion-alert.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert.entry.js", "common", 1],
        "./ion-app_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8.entry.js", "common", 2],
        "./ion-avatar_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3.entry.js", "common", 3],
        "./ion-back-button.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button.entry.js", "common", 4],
        "./ion-backdrop.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop.entry.js", 5],
        "./ion-button_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2.entry.js", "common", 6],
        "./ion-card_5.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5.entry.js", "common", 7],
        "./ion-checkbox.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox.entry.js", "common", 8],
        "./ion-chip.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip.entry.js", "common", 9],
        "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 10],
        "./ion-datetime_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3.entry.js", "common", 11],
        "./ion-fab_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3.entry.js", "common", 12],
        "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 13],
        "./ion-infinite-scroll_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2.entry.js", 14],
        "./ion-input.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input.entry.js", "common", 15],
        "./ion-item-option_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3.entry.js", "common", 16],
        "./ion-item_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8.entry.js", "common", 17],
        "./ion-loading.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading.entry.js", "common", 18],
        "./ion-menu_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3.entry.js", "common", 19],
        "./ion-modal.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal.entry.js", "common", 20],
        "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 21],
        "./ion-popover.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover.entry.js", "common", 22],
        "./ion-progress-bar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar.entry.js", "common", 23],
        "./ion-radio_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2.entry.js", "common", 24],
        "./ion-range.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range.entry.js", "common", 25],
        "./ion-refresher_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2.entry.js", "common", 26],
        "./ion-reorder_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2.entry.js", "common", 27],
        "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 28],
        "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 29],
        "./ion-searchbar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar.entry.js", "common", 30],
        "./ion-segment_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2.entry.js", "common", 31],
        "./ion-select_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3.entry.js", "common", 32],
        "./ion-slide_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2.entry.js", 33],
        "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 34],
        "./ion-split-pane.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane.entry.js", 35],
        "./ion-tab-bar_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2.entry.js", "common", 36],
        "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 37],
        "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 38],
        "./ion-textarea.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea.entry.js", "common", 39],
        "./ion-toast.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast.entry.js", "common", 40],
        "./ion-toggle.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle.entry.js", "common", 41],
        "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 42]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-app>\n  <app-loader></app-loader>\n  <ion-split-pane contentId=\"main-content\">\n    <ion-menu contentId=\"main-content\" type=\"overlay\" swipeGesture=\"false\">\n      <ion-content>\n        <ion-item class=\"custom-menu ion-item-transparent\" lines=\"none\" *ngIf=\"authService.user\">\n          <ion-avatar slot=\"start\" class=\"profil-menu\" *ngIf=\"authService.user.userRole === 'Candidate'\">\n            <img\n              [src]=\"authService.user.picture ? (('backend_url' | env) + this.authService.user.picture.name) : (authService.user['gender'] === 'masculin' ? '/assets/img/male.svg' : '/assets/img/female.svg' ) \"\n              alt=\"Profil\">\n          </ion-avatar>\n          <ion-avatar slot=\"start\" class=\"profil-menu\" *ngIf=\"authService.user.userRole !== 'Candidate'\">\n            <img [src]=\"this.authService.user.picture ? (('backend_url' | env) + this.authService.user.picture.name) : \n            (authService.user.civility === 'Mr' ? '/assets/img/male.svg' : '/assets/img/female.svg' )\"\n              alt=\"Profil\">\n          </ion-avatar>\n\n          <!-- <ion-avatar slot=\"start\" class=\"profil-menu\"\n            *ngIf=\"authService.user.userRole === 'Responsable délégué' || authService.user.userRole === 'Responsable principale' \">\n            <img [src]=\"authService.user.picture ? (('backend_url' | env) + this.authService.user.picture.name) : \n            (authService.user.civility === 'Mr' ? '/assets/img/male.svg' : '/assets/img/female.svg' )\"\n              alt=\"Profil\">\n          </ion-avatar> -->\n\n          <ion-label class=\"profil-info ion-text-wrap\">\n            <h2><strong> {{ authService.user.firstName }} {{ authService.user.lastName }} </strong></h2>\n            <p class=\"pt-1\" *ngIf=\"authService.user && authService.user.percentage\">\n              Profil complété à :<strong class=\"porcent\">\n                {{ authService.user.percentage | number: '1.0-0' }} %\n              </strong></p>\n          </ion-label>\n        </ion-item>\n        <!-- <div class=\"spacer\"></div> -->\n        <ion-list class=\"text-center\">\n          <ion-menu-toggle auto-hide=\"false\">\n            <!--  -->\n            <ion-item [routerLink]=\"authService.user['userRole'] === 'Candidate' ? '/dashboard/plug-recruiter' : '/dashboard'\" routerDirection=\"root\"\n              detail=\"false\" *appHasPermission=\"['read_matching']\" lines=\"full\" class=\"ion-item-transparent\">\n              <ion-icon slot=\"start\" src=\"/assets/icon/home.svg\" style=\"width: 20px; height: 20px;\"></ion-icon>\n              <ion-label>Swipe & match</ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n\n          <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of appPages; let i = index\">\n            <ion-item routerDirection=\"root\" [routerLink]=\"[p.url]\" detail=\"true\" *appHasPermission=\"[p.right]\"\n              lines=\"full\">\n              <ion-icon slot=\"start\" [src]=\"p.icon\" style=\"width: 20px; height: 20px;\"></ion-icon>\n              <ion-label>{{ p.title }}</ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n          \n          <ion-menu-toggle auto-hide=\"false\">\n\n            <ion-item lines=\"full\" detail=\"true\" routerLink=\"dashboard/about\" routerDirection=\"root\">\n              <ion-icon slot=\"start\" src=\"/assets/icon/about-us.svg\" style=\"width: 20px; height: 20px;\"></ion-icon>\n              <ion-label> A propos de jobwinwin </ion-label>\n            </ion-item>\n\n            <ion-item lines=\"full\">\n              <ion-icon slot=\"start\" src=\"/assets/icon/suivez-nous.svg\" style=\"width: 20px; height: 20px;\"></ion-icon>\n              <div class=\"\">\n\n                <a href=\"https://www.facebook.com/Jobwinwin-100840178767092\" target=\"_blank\">\n                  <img class=\"mr-1 inline-block cursor-pointer\" src=\"./assets/icon/circle-facebook.svg\" alt=\"facebook\">\n                </a>\n\n                <a href=\"https://www.instagram.com/jobwinwin\" target=\"_blank\">\n                  <img class=\"mr-1 inline-block cursor-pointer\" src=\"./assets/icon/circle-instagram.svg\"\n                    alt=\"instagram\">\n                </a>\n\n                <a href=\"https://twitter.com/jobwinwin\" target=\"_blank\">\n                  <img class=\"mr-1 inline-block cursor-pointer\" src=\"./assets/icon/circle-twitter.svg\" alt=\"twitter\">\n                </a>\n\n                <a href=\"https://www.linkedin.com/company/jobwinwin/\" target=\"_blank\">\n                  <img class=\"mr-1 inline-block cursor-pointer\" src=\"./assets/icon/circle-linkedin.svg\" alt=\"linkedin\">\n                </a>\n\n              </div>\n            </ion-item>\n\n            <!-- <ion-item>\n              <ion-row>\n                <ion-col size=\"12\">\n                 \n                </ion-col>\n                <ion-col class=\"ml-3 ion-no-padding\" size=\"12\">\n                  <div class=\"pt-1 pb-1\">\n                    <img class=\"mr-1\" src=\"./assets/icon/circle-facebook.svg\" alt=\"facebook\">\n                    <img class=\"mr-1\" src=\"./assets/icon/circle-instagram.svg\" alt=\"instagram\">\n                    <img class=\"mr-1\" src=\"./assets/icon/circle-twitter.svg\" alt=\"twitter\">\n                    <img class=\"mr-1 cursor-pointer\" src=\"./assets/icon/circle-linkedin.svg\" alt=\"linkedin\" (click)=\"redirectTo('https://www.linkedin.com/company/jobwinwin/')\">\n                  </div>\n                </ion-col>\n              </ion-row>\n            </ion-item> -->\n\n            <ion-item lines=\"none\" detail=\"false\" (click)=\"authService.logout()\">\n              <ion-icon slot=\"start\" src=\"./assets/icon/deconnexion.svg\" style=\"width: 20px; height: 20px;\"></ion-icon>\n              <ion-label>Déconnexion</ion-label>\n            </ion-item>\n\n          </ion-menu-toggle>\n        </ion-list>\n      </ion-content>\n    </ion-menu>\n    <router-outlet id=\"main-content\"></router-outlet>\n  </ion-split-pane>\n</ion-app>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/auth/auth.component.html":
    /*!****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/auth/auth.component.html ***!
      \****************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppLayoutsAuthAuthComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-router-outlet></ion-router-outlet>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/dashboard/dashboard.component.html":
    /*!**************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/dashboard/dashboard.component.html ***!
      \**************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppLayoutsDashboardDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-router-outlet></ion-router-outlet>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/about-jobwinwin/about-jobwinwin.component.html":
    /*!************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/about-jobwinwin/about-jobwinwin.component.html ***!
      \************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesAboutJobwinwinAboutJobwinwinComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"list-header ion-no-border\" mode=\"md\">\n    <ion-toolbar>\n        <ion-buttons (click)=\"goBack()\" class=\"roundbutton\" slot=\"start\">\n            <ion-icon src=\"./assets/icon/arrow-back.svg\"></ion-icon>\n        </ion-buttons>\n        <ion-title>A propos de jobwinwin</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content [fullscreen]=\"true\" class=\"forms\">\n    <section class=\"settings-content mb-3\">\n        <div class=\"page-content\">\n            <div class=\"d-block\">\n\n                <ion-item lines=\"full\" routerLink=\"/dashboard/contact-form\" routerDirection=\"root\">\n                    <ion-icon slot=\"start\" src=\"/assets/icon/contact.svg\" style=\"width: 20px; height: 20px;\"></ion-icon>\n                    <ion-label> Nous contacter </ion-label>\n                  </ion-item>\n                  \n                <ion-item lines=\"full\">\n                    <ion-icon slot=\"start\" src=\"/assets/icon/condition.svg\" style=\"width: 20px; height: 20px;\">\n                    </ion-icon>\n                    <ion-label> Conditions d'utilisation</ion-label>\n                </ion-item>\n\n                <ion-item lines=\"full\">\n                    <ion-icon slot=\"start\" src=\"/assets/icon/regle.svg\" style=\"width: 20px; height: 20px;\"></ion-icon>\n                    <ion-label> Régles de communauté</ion-label>\n                </ion-item>\n            </div>\n        </div>\n    </section>\n</ion-content>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/form-contact/form-contact.component.html":
    /*!******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/form-contact/form-contact.component.html ***!
      \******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesFormContactFormContactComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"list-header ion-no-border\" mode=\"md\">\n    <ion-toolbar>\n        <ion-buttons routerLink=\"/dashboard/about\" routerDirection=\"root\"class=\"roundbutton\" slot=\"start\">\n            <ion-icon src=\"./assets/icon/arrow-back.svg\"></ion-icon>\n        </ion-buttons>\n        <ion-title>Contact</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content [fullscreen]=\"true\" class=\"forms\">\n    <section class=\"steps-content\">\n        <div class=\"page-content\">\n            <form [formGroup]=\"form\" (ngSubmit)=\"onSave()\">\n                <div class=\"d-block\">\n                    <div class=\"w-100\">\n                        <ion-item class=\"custom-input\">\n                            <ion-label position=\"floating\">Objet <span class=\"required\">*</span></ion-label>\n                            <ion-input type=\"text\" formControlName=\"subject\"></ion-input>\n                        </ion-item>\n                    </div>\n    \n                    <div class=\"w-100\">\n                        <ion-item class=\"custom-input\">\n                            <ion-label position=\"floating\">Message <span class=\"required\">*</span></ion-label>\n                            <ion-textarea placeholder=\"Taper votre message\" formControlName=\"message\">\n                            </ion-textarea>\n                        </ion-item>\n                    </div>\n                    <ion-button class=\"mt-2 d-block ml-auto w-40\" type=\"submit\" [disabled]=\"!form.valid\"> Envoyer </ion-button>\n                </div>\n            </form>\n        </div>\n    </section>\n</ion-content>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/file-uploader/file-uploader.component.html":
    /*!********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/file-uploader/file-uploader.component.html ***!
      \********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppSharedComponentsFileUploaderFileUploaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ng-container *ngIf=\"data\" [ngSwitch]=\"data.type\">\n\n  <div *ngSwitchCase=\"'video'\" class=\"d-block\">\n    <img class=\"mt-2 w-100\" src=\"./assets/img/default-video.svg\" alt=\"Add Video\" *ngIf=\"!data.file else videoFile\"\n      (click)=\"fileVideo.click()\">\n    <ng-template #videoFile>\n      <video width=\"100%\" height=\"200px\" controls>\n        <source [src]=\"('backend_url' | env) + data.file.name\">\n      </video>\n    </ng-template>\n    <span class=\"hint\"><span class=\"required\">*</span> Durée maximale de la vidéo : 30 secondes</span>\n    <div class=\"text-center  mt-1\">\n      <span class=\"hint\" *ngIf=\"data.file\" (click)=\"fileVideo.click()\">\n        <ion-icon class=\"align-middle\" src=\"./assets/icon/video.svg\" style=\"font-size: 20px;\"></ion-icon>\n        modifiez la vidéo\n      </span>\n    </div>\n  </div>\n\n  <div *ngSwitchCase=\"'photo'\" class=\"d-flex\">\n    <ion-avatar slot=\"start\" (click)=\"filePhoto.click()\">\n      <img\n        [src]=\"data.file && data.file.name ? (('backend_url' | env) + data.file.name) : './assets/img/default-image.svg'\" />\n    </ion-avatar>\n    <ion-label>\n      <mat-form-field class=\"w-100\">\n        <mat-label class=\"label-readonly\">{{ data.file && data.file.name ? data.file.name : 'Ajouter une photo' }}\n        </mat-label>\n        <input matInput readonly>\n      </mat-form-field>\n    </ion-label>\n  </div>\n\n  <div *ngSwitchCase=\"'edit-image'\">\n    <img\n      [src]=\"data.file && data.file.name ? (('backend_url' | env) + data.file.name) : '/assets/img/default-image.svg'\"\n      alt=\"profil\" class=\"logo\">\n    <div class=\"change-photo\" (click)=\"filePhoto.click()\">\n      <mat-icon color=\"primary\">edit</mat-icon>\n    </div>\n  </div>\n\n  <div *ngSwitchCase=\"'simple-cv'\">\n    <mat-form-field class=\"upload-cv w-100\">\n      <mat-label class=\"label-readonly\">CV</mat-label>\n      <input [value]=\"data.file && data.file.name ? data.file.name: ' Téléchargez votre cv'\" matInput readonly>\n      <mat-icon matSuffix color=\"primary\" (click)=\"fileCV.click()\">cloud_download</mat-icon>\n    </mat-form-field>\n  </div>\n\n  <div *ngSwitchCase=\"'cv'\">\n    <div class=\"text-center mt-5\">\n      <img class=\"d-inline mr-2\" src=\"./assets/icon/modifierCV.svg\" alt=\"Modifier CV\" (click)=\"fileCV.click()\">\n      <a [href]=\"data.file ? (('backend_url' | env) + data.file.name) : '#'\"> <img class=\"d-inline\"\n          src=\"./assets/icon/VisualiserCV.svg\" alt=\"Visualider CV\"> </a>\n    </div>\n  </div>\n\n  <div *ngSwitchCase=\"'update-picture'\">\n    <mat-icon class=\"change-photo\" color=\"primary\" (click)=\"filePhoto.click()\">add_a_photo</mat-icon>\n  </div>\n\n  <!-- <input type=\"file\" (change)=\"onFileChange($event)\" class=\"display-none\" #file> -->\n\n  <input type=\"file\" (change)=\"onFileChange($event)\" style=\"display: none;\" hidden accept=\"image/x-png,image/jpeg\"\n    #filePhoto>\n\n  <input type=\"file\" accept=\"application/pdf,.doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document\" (change)=\"onFileChange($event)\" style=\"display: none;\" hidden #fileCV>\n \n  <input type=\"file\" (change)=\"onFileChangeVideo($event)\" style=\"display: none;\" hidden\n    accept=\"video/mp4,video/x-m4v,video/*\" #fileVideo>\n\n</ng-container>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/loader/loader.component.html":
    /*!******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/loader/loader.component.html ***!
      \******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppSharedComponentsLoaderLoaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"progress-loader\" [hidden]=\"!loading\">\n  <div class=\"loading-spinner\">\n    <div class=\"loader\">Veuillez patienter...</div>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/multi-select/multi-select.component.html":
    /*!******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/multi-select/multi-select.component.html ***!
      \******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppSharedComponentsMultiSelectMultiSelectComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<mat-accordion class=\"custom-mat-accordion w-100\">\n  <mat-expansion-panel>\n      <mat-expansion-panel-header class=\"pl-0\">\n          <mat-panel-title>\n            {{ label }}\n          </mat-panel-title>\n      </mat-expansion-panel-header>\n      <div *ngFor=\"let item of rows; let i = index;\" class=\"d-inline w-100\">\n          <mat-checkbox [checked]=\"item.checked\" [value]=\"item._id\" (change)=\"onChangeValue(i, $event)\">\n              {{ item.name }}\n          </mat-checkbox>\n      </div>  \n  </mat-expansion-panel>\n</mat-accordion>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/preview-advertisement/preview-advertisement.component.html":
    /*!************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/preview-advertisement/preview-advertisement.component.html ***!
      \************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppSharedComponentsPreviewAdvertisementPreviewAdvertisementComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content class=\"content-files\" fxLayout=\"row\" fxLayoutAlign=\"center center\" *ngIf=\"advertisement\">\n  <mat-horizontal-stepper [@.disabled]=\"true\" class=\"file-mat-horizontal-stepper\">\n\n    <mat-step>\n      <section class=\"file-card\">\n        <header>\n          <ion-button (click)=\"modalController.dismiss()\" color=\"secondary\" class=\"button-preview\">\n            <ion-icon src=\"./assets/icon/arrow-back.svg\"></ion-icon>\n          </ion-button>\n          <h2 class=\"text-center\">{{ advertisement.company.name }}</h2>\n          <div class=\"d-block text-center\">\n            <img src=\"./assets/icon/space-title.svg\" alt=\"\">\n            <p class=\"short-desc\">\n              {{ advertisement.company.title }}\n            </p>\n            <img src=\"./assets/icon/space-title.svg\" alt=\"\">\n            <div class=\"profil-files\">\n              <img\n                [src]=\"advertisement.company.logo ? ('backend_url' | env) + advertisement.company.logo.name : '/assets/img/default-image.svg'\"\n                alt=\"\" class=\"w-100 circle-image\">\n            </div>\n          </div>\n        </header>\n\n        <div class=\"position-relative\">\n          <button mat-button class=\"bg-transparent position-absolute arrow-right cursor-pointer\" matStepperNext><img\n              src=\"./assets/icon/arrow-right.svg\" alt=\"\"></button>\n\n          <div class=\"custom-fields text-center\">\n            <div class=\"d-inline capitalize min-w-50\">{{advertisement.desiredJob}}</div>\n          </div>\n\n          <div class=\"custom-fields text-center\">\n            <!-- style=\"min-height: 50px;vertical-align: bottom;\" -->\n            <div class=\"d-inline capitalize w-50 text-center mr-1\">{{ advertisement.activitySector }}</div>\n            <div class=\"d-inline capitalize w-50 text-center pt-1\">{{\n              advertisement.location }}</div>\n          </div>\n\n          <div class=\"custom-fields text-center\">\n            <div class=\"d-inline capitalize w-80 text-center\">{{ advertisement.experienceYears}} d’expérience</div>\n          </div>\n          <div class=\"custom-fields text-center\">\n            <div class=\"d-inline capitalize w-80 text-center\">{{ advertisement.supposedSalaryMin }} MAD</div>\n          </div>\n\n        </div>\n\n      </section>\n\n    </mat-step>\n\n    <mat-step>\n\n      <section class=\"file-card\">\n        <header>\n          <ion-button (click)=\"modalController.dismiss()\" color=\"secondary\" class=\"button-preview\">\n            <ion-icon src=\"./assets/icon/arrow-back.svg\"></ion-icon>\n          </ion-button>\n          <h2 class=\"text-center\">{{ advertisement.company.name }}</h2>\n          <div class=\"d-block text-center\">\n            <img src=\"./assets/icon/space-title.svg\" alt=\"\">\n            <p class=\"short-desc\">\n              {{ advertisement.company.title }}\n            </p>\n            <img src=\"./assets/icon/space-title.svg\" alt=\"\">\n            <div class=\"profil-files\">\n              <img\n                [src]=\"advertisement.company.logo ? ('backend_url' | env) + advertisement.company.logo.name : '/assets/img/default-image.svg'\"\n                alt=\"\" class=\"w-100 circle-image\">\n            </div>\n          </div>\n        </header>\n        <div class=\"position-relative\">\n          <button mat-button class=\"bg-transparent position-absolute arrow-left cursor-pointer\" matStepperPrevious><img\n              src=\"./assets/icon/arrow-left.svg\" alt=\"\"></button>\n          <button mat-button class=\"bg-transparent position-absolute arrow-right cursor-pointer\" matStepperNext><img\n              src=\"./assets/icon/arrow-right.svg\" alt=\"\"></button>\n          <div class=\"text-center job-title\">\n            <span> {{ advertisement.desiredJob }}</span>\n          </div>\n\n          <div class=\"file-card-details mt-2\">\n            <h3 class=\"title\">\n              <img src=\"./assets/icon/mission-generale.svg\" alt=\"\" width=\"30px\">\n              <span>Mission Générale</span>\n            </h3>\n            <div class=\"desc-candidate\">\n              {{ advertisement.missions }}\n            </div>\n          </div>\n\n          <div class=\"file-card-details mt-1\">\n            <h3 class=\"title\">\n              <img src=\"./assets/icon/Taches.svg\" alt=\"\" width=\"30px\">\n              <span>Descriptif de poste</span>\n            </h3>\n            <div class=\"desc\">\n              <ul class=\"list\">\n                <li *ngFor=\"let description of advertisement.descriptions\">\n                  {{ description }}\n                </li>\n              </ul>\n            </div>\n          </div>\n\n          <div class=\"file-card-details mt-1\">\n            <h3 class=\"title\">\n              <img src=\"./assets/icon/Profil2.svg\" alt=\"\" width=\"30px\">\n              <span>Prérequis</span>\n            </h3>\n            <span class=\"desc\">\n              <ul class=\"list\">\n                <li> {{ advertisement.prerequisite }} </li>\n              </ul>\n\n              <h5 class=\"text-center\">\n                <strong>Niveau d'études</strong>\n              </h5>\n              <ul class=\"list\">\n                <li> {{ advertisement.levelOfStudie }} </li>\n              </ul>\n\n\n              <h5 class=\"text-center\">\n                <strong>Diplôme requis</strong>\n              </h5>\n              <ul class=\"list\" *ngFor=\"let item of advertisement.typeOfTraining\" >\n                <li> {{ item }} </li>\n              </ul>\n\n              <h5 class=\"text-center\">\n                <strong>Langue</strong>\n              </h5>\n              <ul class=\"list\">\n                <li *ngFor=\"let item of advertisement.languages\">\n                  {{ item.language }} : {{ item.languageLevel }}\n                </li>\n              </ul>\n              <h5 class=\"text-center\">\n                <strong>Compétences informatiques</strong>\n              </h5>\n              <ul class=\"list\" id=\"programming-languages\">\n                <li *ngFor=\"let item of advertisement.programingLanguages.language\"> {{ item }} </li>\n                <li *ngFor=\"let item of advertisement.programingLanguages.logiciel\"> {{ item }} </li>\n              </ul>\n            </span>\n          </div>\n\n          <div class=\"file-card-details mt-2\">\n            <h3 class=\"title\">\n              <img src=\"./assets/icon/Taches.svg\" alt=\"\" width=\"30px\">\n              <span>Autres informations</span>\n            </h3>\n            <span class=\"desc\">\n              <ul class=\"list\">\n                <li *ngIf=\"advertisement.contract\">Type de contrat : {{ advertisement.contract }} </li>\n                <li *ngIf=\"advertisement.jobType\">Type de poste : {{ advertisement.jobType }} </li>\n                <li *ngIf=\"advertisement.jobMode\">Mode de travail : {{ advertisement.jobMode }} </li>\n                <li *ngIf=\"advertisement.managerialLevel\">Niv. managérial : {{ advertisement.managerialLevel }} </li>\n                <li *ngIf=\"advertisement.effective\">Effectif géré : {{ advertisement.effective }}</li>\n              </ul>\n            </span>\n          </div>\n\n          <div class=\"file-card-details mt-1\">\n            <h3 class=\"title\">\n              <img src=\"./assets/icon/calendar.png\" alt=\"\" width=\"30px\">\n              <span>Date prise de fonction</span>\n            </h3>\n            <span class=\"desc\">\n              <strong>Le {{ advertisement.startedDate | date : 'dd/MM/yyyy' }}</strong>\n            </span>\n          </div>\n\n        </div>\n\n      </section>\n\n    </mat-step>\n\n    <mat-step>\n      <article class=\"file-card-values file-card-condidate\">\n        <div style=\"padding: 1em\">\n\n          <header>\n            <ion-button (click)=\"modalController.dismiss()\" color=\"secondary\" class=\"button-preview\">\n              <ion-icon src=\"./assets/icon/arrow-back.svg\"></ion-icon>\n            </ion-button>\n            <h2 class=\"text-center\">{{ advertisement.company.name }}</h2>\n          </header>\n\n          <div class=\"top-content text-center w-100 mt-2 mb-4\">\n            <h3 class=\"text-center yellow-text uppercase\">présentation générale</h3>\n            <p>\n              {{ advertisement.company.description }}\n            </p>\n          </div>\n\n          <div class=\"position-relative\">\n            <button mat-button class=\"bg-transparent position-absolute arrow-left cursor-pointer\" matStepperPrevious>\n              <img src=\"./assets/icon/arrow-left-black.svg\" alt=\"\"></button>\n          </div>\n        </div>\n\n\n        <div class=\"yellow-text text-center mb-3\">\n          <h3 class=\"uppercase\">Nos valeurs</h3>\n        </div>\n\n        <div class=\"circle-content position-relative\" *ngIf=\"advertisement && advertisement.company.values\">\n          <div class=\"d-block value-one\">\n            <div class=\"text-content\">{{ advertisement.company.values[0] ? advertisement.company.values[0] : ''}}\n            </div>\n          </div>\n          <div class=\"d-block value-two\">\n            <div class=\"text-content\">{{ advertisement.company.values[1] ? advertisement.company.values[1] : ''}}\n            </div>\n          </div>\n          <div class=\"d-block value-three\">\n            <div class=\"text-content\">{{ advertisement.company.values[2] ? advertisement.company.values[2] : ''}}\n            </div>\n          </div>\n          <div class=\"d-block value-four\">\n            <div class=\"text-content\">{{ advertisement.company.values[3] ? advertisement.company.values[3] : ''}}\n            </div>\n          </div>\n          <div class=\"d-block value-five\">\n            <div class=\"text-content\">{{ advertisement.company.values[4] ? advertisement.company.values[4] : ''}}\n            </div>\n          </div>\n        </div>\n\n        <div class=\"more-content\">\n\n          <div class=\"custom-fields info-recruteur-title text-center mb-2\" *ngIf=\"advertisement.company.webSite\">\n            <a [href]=\" advertisement.company.webSite\" target=\"_blank\">\n              <span>{{ advertisement.company.webSite }}</span>\n            </a>\n          </div>\n\n          <div class=\"social-media text-center\">\n            <a [href]=\"advertisement.company.facebook\" target=\"_blank\" *ngIf=\"advertisement.company.facebook\"><img\n                class=\"mr-1 inline-block cursor-pointer\" src=\"./assets/icon/circle-facebook.svg\" alt=\"facebook\"></a>\n            <a [href]=\"'https://www.instagram.com/'+ advertisement.company.instagram\" target=\"_blank\"\n              *ngIf=\"advertisement.company.instagram\"> <img class=\"mr-1 inline-block cursor-pointer\"\n                src=\"./assets/icon/circle-instagram.svg\" alt=\"instagram\"></a>\n            <a [href]=\"advertisement.company.linkedin\" target=\"_blank\" *ngIf=\"advertisement.company.linkedin\"><img\n                class=\"mr-1 inline-block cursor-pointer\" src=\"./assets/icon/circle-linkedin.svg\" alt=\"linkedin\"></a>\n            <a [href]=\"'https://www.twitter.com/'+ advertisement.company.twitter\" target=\"_blank\"\n              *ngIf=\"advertisement.company.twitter\"><img class=\"mr-1 inline-block cursor-pointer\"\n                src=\"./assets/icon/circle-twitter.svg\" alt=\"twitter\"></a>\n          </div>\n\n        </div>\n      </article>\n    </mat-step>\n\n  </mat-horizontal-stepper>\n</ion-content>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/preview-candidate/preview-candidate.component.html":
    /*!****************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/preview-candidate/preview-candidate.component.html ***!
      \****************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppSharedComponentsPreviewCandidatePreviewCandidateComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content class=\"content-files\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n  <mat-horizontal-stepper [@.disabled]=\"true\" class=\"file-mat-horizontal-stepper\">\n    <mat-step>\n      <section class=\"file-card\" style=\"overflow: scroll;overflow-x: hidden;height: 100vh;\">\n        <ion-header class=\"ion-no-border\" mode=\"md\">\n          <ion-toolbar>\n            <ion-buttons (click)=\"modalController.dismiss()\" class=\"roundbutton position-absolute\" slot=\"start\">\n              <ion-icon src=\"./assets/icon/arrow-back.svg\"></ion-icon>\n            </ion-buttons>\n            <ion-title class=\"text-center\" *ngIf=\"candidate\">\n              {{ candidate.firstName | uppercase }}\n              {{ candidate.lastName | uppercase }}</ion-title>\n          </ion-toolbar>\n          <div class=\"d-block text-center\" *ngIf=\"candidate && candidate.goal\">\n            <img src=\"./assets/icon/space-title.svg\" alt=\"\">\n            <p class=\"short-desc mb-0\">\n              {{candidate.goal}}\n            </p>\n            <img src=\"./assets/icon/space-title.svg\" alt=\"\">\n            <div class=\"profil-files\">\n              <img [src]=\"candidate.picture ? (('backend_url' | env) + candidate.picture.name) : \n              (candidate.gender === 'masculin' ? '/assets/img/male.svg' : '/assets/img/female.svg' )\" alt=\"\"\n                class=\"w-100\">\n            </div>\n          </div>\n        </ion-header>\n        <div class=\"position-relative\" *ngIf=\"candidate && candidate.currentJob\">\n          <button mat-button class=\"bg-transparent position-absolute arrow-right cursor-pointer\" matStepperNext><img\n              src=\"./assets/icon/arrow-right.svg\" alt=\"\"></button>\n          <div class=\"custom-fields text-center\">\n            <div class=\"d-inline capitalize min-w-50\">{{candidate.currentJob}}</div>\n          </div>\n          <div class=\"custom-fields text-center\" *ngIf=\"candidate\">\n            <div class=\"d-inline capitalize w-80 text-center\">{{candidate.experienceYears}} d’expérience</div>\n          </div>\n\n          <h3 class=\"objectif\">OBJECTIFS ACTUELS</h3>\n\n          <div class=\"custom-fields text-center mt-2\">\n            <div class=\"d-inline capitalize min-w-50\">{{candidate.searchedPost}}</div>\n          </div>\n          <div class=\"custom-fields text-center\">\n            <div class=\"d-inline capitalize w-40 text-center mr-1\">{{ candidate.location }}</div>\n            <div class=\"d-inline capitalize w-40 text-center\">{{ candidate.supposedSalaryMax }} DH</div>\n          </div>\n        </div>\n\n      </section>\n\n    </mat-step>\n\n    <mat-step>\n      <section class=\"file-card\">\n        <ion-header class=\"ion-no-border\" mode=\"md\">\n          <ion-toolbar>\n            <ion-buttons (click)=\"modalController.dismiss()\" class=\"roundbutton position-absolute\" slot=\"start\">\n              <ion-icon src=\"./assets/icon/arrow-back.svg\"></ion-icon>\n            </ion-buttons>\n            <ion-title class=\"text-center\" *ngIf=\"candidate\">\n              {{ candidate.firstName | uppercase }}\n              {{ candidate.lastName | uppercase }}\n            </ion-title>\n          </ion-toolbar>\n          <div class=\"d-block text-center\" *ngIf=\"candidate\">\n            <img src=\"./assets/icon/space-title.svg\" alt=\"\">\n            <p class=\"short-desc mb-0\">\n              {{ candidate.goal }}\n            </p>\n            <img src=\"./assets/icon/space-title.svg\" alt=\"\">\n            <div class=\"profil-files\">\n              <img [src]=\"candidate.picture ? (('backend_url' | env) + candidate.picture.name) : \n              (candidate.gender === 'masculin' ? '/assets/img/male.svg' : '/assets/img/female.svg' )\" alt=\"\"\n                class=\"w-100\">\n            </div>\n          </div>\n        </ion-header>\n        <div class=\"position-relative\">\n          <button mat-button class=\"bg-transparent position-absolute arrow-left cursor-pointer\" matStepperPrevious>\n            <img src=\"./assets/icon/arrow-left.svg\" alt=\"\">\n          </button>\n          <button mat-button class=\"bg-transparent position-absolute arrow-right cursor-pointer\" matStepperNext>\n            <img src=\"./assets/icon/arrow-right.svg\" alt=\"\">\n          </button>\n          <div class=\"text-center job-title\">\n            <span>cv-résumé</span>\n          </div>\n\n          <div class=\"text-center mt-2\">\n            <div *ngIf=\"candidateService.candidate.video else uploadVideo\">\n              <video width=\"100%\" height=\"200px\" controls>\n                <source [src]=\"('backend_url' | env) + candidateService.candidate.video.name\">\n              </video>\n            </div>\n            <ng-template #uploadVideo>\n              <img class=\"video-img w-100\" src=\"./assets/img/default-video.svg\" alt=\"Add Video\">\n            </ng-template>\n          </div>\n\n          <div class=\"file-card-details mt-1\">\n            <h3 class=\"title\" style=\"margin-bottom: 0 !important;\">\n              <mat-icon>subject</mat-icon>\n              <span>CV</span>\n              <a style=\"color: #ffffff\" *ngIf=\"candidateService.candidate.cv\"\n                (click)=\"redirectTo(candidateService.candidate.cv.name)\">\n                <mat-icon class=\"float-right\">save_alt</mat-icon>\n              </a>\n              <a style=\"color: #ffffff\" *ngIf=\"!candidateService.candidate.cv\">\n                <mat-icon class=\"float-right\">save_alt</mat-icon>\n              </a>\n            </h3>\n          </div>\n\n          <div class=\"file-card-details mt-1\">\n            <h3 class=\"title\">\n              <mat-icon>mediation</mat-icon>\n              <span>EXPÉRIENCE</span>\n            </h3>\n            <span class=\"desc\" *ngIf=\"candidate && candidate.experiences\">\n              <ul class=\"list\">\n                <li *ngFor=\"let item of candidate.experiences\">\n                    {{ item.startedDate | date:'yyyy' }} - \n                    <ng-container class=\"w-100\" *ngIf=\"item.endDate else inwork\" >{{ item.endDate | date:'yyyy' }}</ng-container>\n                    <ng-template class=\"w-100\" #inwork>Aujourd’hui</ng-template> :\n                  <div class=\"d-inline capitalize\">{{ item.job }}</div>\n                </li>\n              </ul>\n            </span>\n          </div>\n\n          <div class=\"file-card-details mt-1\">\n            <h3 class=\"title\">\n              <mat-icon>school</mat-icon>\n              <span>FORMATION</span>\n            </h3>\n            <span class=\"desc\" *ngIf=\"candidate && candidate.trainings\">\n              <ul class=\"list\">\n                <li *ngFor=\"let item of candidate.trainings\">\n                  <div class=\"d-inline capitalize\">{{ item.yearOfGraduation }} : {{ item.name }}</div>\n                </li>\n              </ul>\n            </span>\n          </div>\n\n          <div class=\"file-card-details mt-1\">\n            <h3 class=\"title\">\n              <mat-icon>g_translate</mat-icon>\n              <span>LANGUE</span>\n            </h3>\n            <span class=\"desc\">\n              <ul class=\"list\" *ngIf=\"candidate && candidate.languages\">\n                <li *ngFor=\"let item of candidate.languages\">\n                  <div class=\"d-inline capitalize\">{{item.language}}</div> : <div class=\"d-inline capitalize\">\n                    {{item.languageLevel}}</div>\n                </li>\n              </ul>\n              <div class=\"text-center\" *ngIf=\"candidate && candidate.programingLanguages\">\n                <strong>Langues et Informatique</strong>\n              </div>\n              <ul class=\"list\" *ngIf=\"candidate && candidate.programingLanguages\">\n                <li *ngFor=\"let item of candidate.programingLanguages.language\">\n                  <div class=\"d-inline capitalize\">{{ item }}</div>\n                </li>\n                <li *ngFor=\"let item of candidate.programingLanguages.logiciel\">\n                  <div class=\"d-inline capitalize\">{{ item }}</div>\n                </li>\n              </ul>\n            </span>\n          </div>\n\n        </div>\n\n      </section>\n    </mat-step>\n\n    <mat-step>\n      <article class=\"file-card-values file-card-recruiter\">\n        <div style=\"padding: 24px 16px 0\">\n          <ion-header class=\"ion-no-border\" mode=\"md\">\n            <ion-toolbar>\n              <ion-buttons (click)=\"modalController.dismiss()\" class=\"roundbutton position-absolute\" slot=\"start\">\n                <ion-icon src=\"./assets/icon/arrow-back.svg\"></ion-icon>\n              </ion-buttons>\n              <ion-title class=\"text-center\" *ngIf=\"candidate\">\n                {{ candidate.firstName | uppercase }}\n                {{ candidate.lastName | uppercase }}\n              </ion-title>\n            </ion-toolbar>\n          </ion-header>\n          <div class=\"file-card-Skills d-block mr-auto\" *ngIf=\"candidate\">\n            <h3 class=\"text-center text-secondary uppercase\">SOFTSKILLS</h3>\n            <div class=\"desc-competence\">\n              <ul class=\"list-competence\">\n                <li *ngFor=\"let item of candidate.skills\">\n                  {{item}}\n                </li>\n              </ul>\n            </div>\n          </div>\n\n          <div class=\"position-relative\">\n            <button mat-button class=\"bg-transparent position-absolute arrow-left cursor-pointer\" matStepperPrevious>\n              <img src=\"./assets/icon/arrow-left-black.svg\" alt=\"\"></button>\n          </div>\n        </div>\n\n\n        <div class=\"text-secondary text-center\">\n          <h3 class=\"uppercase\">Valeurs</h3>\n        </div>\n\n        <div class=\"circle-content position-relative\" *ngIf=\"candidate && candidate.values\">\n          <div class=\"d-block value-one\">\n            <div class=\"text-content\">{{candidate.values[0] ? candidate.values[0] : ''}}</div>\n          </div>\n          <div class=\"d-block value-two\">\n            <div class=\"text-content\">{{candidate.values[1] ? candidate.values[1] : ''}}</div>\n          </div>\n          <div class=\"d-block value-three\">\n            <div class=\"text-content\">{{candidate.values[2] ? candidate.values[2] : ''}}</div>\n          </div>\n          <div class=\"d-block value-four\">\n            <div class=\"text-content\">{{candidate.values[3] ? candidate.values[3] : ''}}</div>\n          </div>\n          <div class=\"d-block value-five\">\n            <div class=\"text-content\">{{candidate.values[4] ? candidate.values[4] : ''}}</div>\n          </div>\n          <div class=\"d-block value-six\">\n            <div class=\"text-content\">{{candidate.values[5] ? candidate.values[5] : ''}}</div>\n          </div>\n        </div>\n\n        <div class=\"more-content\">\n\n          <div class=\"custom-fields info-recruteur-title text-center mb-2\">\n            <span *ngIf=\"candidate && candidate.website\">{{candidate.webSite}}</span>\n          </div>\n\n          <div class=\"social-media text-center\">\n            <a [href]=\"candidate.facebook\" target=\"_blank\" *ngIf=\"candidate && candidate.facebook\">\n              <img class=\"mr-1 inline-block cursor-pointer\" src=\"./assets/icon/circle-facebook.svg\" alt=\"facebook\">\n            </a>\n            <a [href]=\"'https://www.instagram.com/' + candidate.instagram\" target=\"_blank\"\n              *ngIf=\"candidate && candidate.instagram\">\n              <img class=\"mr-1 inline-block cursor-pointer\" src=\"./assets/icon/circle-instagram.svg\" alt=\"instagram\">\n            </a>\n            <a [href]=\"candidate.linkedin\" target=\"_blank\" *ngIf=\"candidate && candidate.linkedin\">\n              <img class=\"mr-1 inline-block cursor-pointer\" src=\"./assets/icon/circle-linkedin.svg\" alt=\"linkedin\">\n            </a>\n            <a [href]=\"'https://www.twitter.com/' + candidate.twitter\" target=\"_blank\"\n              *ngIf=\"candidate && candidate.twitter\">\n              <img class=\"mr-1 inline-block cursor-pointer\" src=\"./assets/icon/circle-twitter.svg\" alt=\"twitter\">\n            </a>\n            <a [href]=\"candidate.blog\" target=\"_blank\" *ngIf=\"candidate && candidate.blog\">\n              <img class=\"mr-1 inline-block cursor-pointer\" src=\"./assets/icon/circle-blogger.svg\" alt=\"blog\">\n            </a>\n          </div>\n        </div>\n      </article>\n    </mat-step>\n\n  </mat-horizontal-stepper>\n</ion-content>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/user-image/user-image.component.html":
    /*!**************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/user-image/user-image.component.html ***!
      \**************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppSharedComponentsUserImageUserImageComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div [class.large]=\"large\">\n  <div *ngIf=\"image; else userName\">\n    <img [src]=\"'178.128.168.245:3000/' + image\" alt=\"user_name\">\n  </div>\n  <ng-template #userName>\n  <div class=\"userName\">\n    <span>\n        {{ firstName | slice:0:1 | uppercase }}{{ lastName | slice:0:1 | uppercase }}\n    </span>\n  </div>\n  </ng-template>\n  \n</div>\n";
      /***/
    },

    /***/
    "./src/app/app-routing.module.ts":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _layouts_auth_auth_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./layouts/auth/auth.component */
      "./src/app/layouts/auth/auth.component.ts");
      /* harmony import */


      var _layouts_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./layouts/dashboard/dashboard.component */
      "./src/app/layouts/dashboard/dashboard.component.ts");
      /* harmony import */


      var _core_services_guards__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./core/services/guards */
      "./src/app/core/services/guards/index.ts");
      /* harmony import */


      var _core_services_resolvers_data_resolver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./core/services/resolvers/data.resolver */
      "./src/app/core/services/resolvers/data.resolver.ts");
      /* harmony import */


      var _pages_about_jobwinwin_about_jobwinwin_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./pages/about-jobwinwin/about-jobwinwin.component */
      "./src/app/pages/about-jobwinwin/about-jobwinwin.component.ts");
      /* harmony import */


      var _pages_form_contact_form_contact_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./pages/form-contact/form-contact.component */
      "./src/app/pages/form-contact/form-contact.component.ts");

      var routes = [{
        path: '',
        pathMatch: 'full',
        redirectTo: '/auth'
      }, {
        path: 'auth',
        component: _layouts_auth_auth_component__WEBPACK_IMPORTED_MODULE_3__["AuthComponent"],
        canActivate: [_core_services_guards__WEBPACK_IMPORTED_MODULE_5__["LoggedInGuard"]],
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | pages-authentication-authentication-module */
            "pages-authentication-authentication-module").then(__webpack_require__.bind(null,
            /*! ./pages/authentication/authentication.module */
            "./src/app/pages/authentication/authentication.module.ts")).then(function (m) {
              return m.AuthenticationModule;
            });
          }
        }]
      }, {
        path: 'dashboard',
        component: _layouts_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"],
        canActivate: [_core_services_guards__WEBPACK_IMPORTED_MODULE_5__["AuthorizedGuard"]],
        resolve: {
          data: _core_services_resolvers_data_resolver__WEBPACK_IMPORTED_MODULE_6__["DataResolver"]
        },
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | pages-files-files-module */
            [__webpack_require__.e("default~pages-files-files-module~pages-notifications-notification-module"), __webpack_require__.e("common"), __webpack_require__.e("pages-files-files-module")]).then(__webpack_require__.bind(null,
            /*! ./pages/files/files.module */
            "./src/app/pages/files/files.module.ts")).then(function (m) {
              return m.FilesModule;
            });
          }
        }, {
          path: 'profile',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | pages-profil-dashboard-module */
            [__webpack_require__.e("common"), __webpack_require__.e("pages-profil-dashboard-module")]).then(__webpack_require__.bind(null,
            /*! ./pages/profil/dashboard.module */
            "./src/app/pages/profil/dashboard.module.ts")).then(function (m) {
              return m.DashboardModule;
            });
          }
        }, {
          path: 'advertisement',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | pages-advertisement-advertisement-module */
            "pages-advertisement-advertisement-module").then(__webpack_require__.bind(null,
            /*! ./pages/advertisement/advertisement.module */
            "./src/app/pages/advertisement/advertisement.module.ts")).then(function (m) {
              return m.AdvertisementModule;
            });
          }
        }, {
          path: 'recruiter',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | pages-recruiter-recruiters-module */
            [__webpack_require__.e("common"), __webpack_require__.e("pages-recruiter-recruiters-module")]).then(__webpack_require__.bind(null,
            /*! ./pages/recruiter/recruiters.module */
            "./src/app/pages/recruiter/recruiters.module.ts")).then(function (m) {
              return m.RecruitersModule;
            });
          }
        }, {
          path: 'entreprise',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | pages-entreprise-entreprise-module */
            "pages-entreprise-entreprise-module").then(__webpack_require__.bind(null,
            /*! ./pages/entreprise/entreprise.module */
            "./src/app/pages/entreprise/entreprise.module.ts")).then(function (m) {
              return m.EntrepriseModule;
            });
          }
        }, {
          path: 'condidate',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | pages-candidate-candidate-module */
            [__webpack_require__.e("common"), __webpack_require__.e("pages-candidate-candidate-module")]).then(__webpack_require__.bind(null,
            /*! ./pages/candidate/candidate.module */
            "./src/app/pages/candidate/candidate.module.ts")).then(function (m) {
              return m.CandidateModule;
            });
          }
        }, {
          path: 'wins',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | pages-wins-wins-module */
            [__webpack_require__.e("common"), __webpack_require__.e("pages-wins-wins-module")]).then(__webpack_require__.bind(null,
            /*! ./pages/wins/wins.module */
            "./src/app/pages/wins/wins.module.ts")).then(function (m) {
              return m.WinsModule;
            });
          }
        }, {
          path: 'settings',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | pages-settings-settings-module */
            [__webpack_require__.e("common"), __webpack_require__.e("pages-settings-settings-module")]).then(__webpack_require__.bind(null,
            /*! ./pages/settings/settings.module */
            "./src/app/pages/settings/settings.module.ts")).then(function (m) {
              return m.SettingsModule;
            });
          }
        }, {
          path: 'messenger',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | pages-messenger-messenger-module */
            "pages-messenger-messenger-module").then(__webpack_require__.bind(null,
            /*! ./pages/messenger/messenger.module */
            "./src/app/pages/messenger/messenger.module.ts")).then(function (m) {
              return m.MessengerModule;
            });
          }
        }, {
          path: 'notification',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | pages-notifications-notification-module */
            [__webpack_require__.e("default~pages-files-files-module~pages-notifications-notification-module"), __webpack_require__.e("pages-notifications-notification-module")]).then(__webpack_require__.bind(null,
            /*! ./pages/notifications/notification.module */
            "./src/app/pages/notifications/notification.module.ts")).then(function (m) {
              return m.NotificationModule;
            });
          }
        }, {
          path: 'about',
          component: _pages_about_jobwinwin_about_jobwinwin_component__WEBPACK_IMPORTED_MODULE_7__["AboutJobwinwinComponent"]
        }, {
          path: 'contact-form',
          component: _pages_form_contact_form_contact_component__WEBPACK_IMPORTED_MODULE_8__["FormContactComponent"]
        }]
      }, {
        path: '**',
        redirectTo: '/auth'
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
          enableTracing: false,
          scrollPositionRestoration: 'enabled',
          preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        providers: [_core_services_resolvers_data_resolver__WEBPACK_IMPORTED_MODULE_6__["DataResolver"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "./src/app/app.component.scss":
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /*! exports provided: default */

    /***/
    function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".profil-menu {\n  width: 80px;\n  height: 80px;\n}\n\n.profil-info {\n  font-weight: 400;\n  color: #ffffff;\n}\n\n.profil-info h2 {\n  line-height: 25px !important;\n  margin: 0 !important;\n  font-size: 16px;\n}\n\n.profil-info h3,\n.profil-info p {\n  margin-bottom: 5px !important;\n  font-size: 14px;\n  color: #ffffff;\n}\n\n.profil-info .strong {\n  font-weight: 600;\n}\n\n.profil-info .porcent {\n  color: #f6ce3c;\n}\n\n.custom-menu {\n  background: url('signup-background.svg') 0 0/100% fixed no-repeat;\n  padding-bottom: 2.5em;\n  padding-top: 1.5em;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0FBRWhCOztBQUpBO0VBS0ksNEJBQTRCO0VBQzVCLG9CQUFvQjtFQUNwQixlQUFlO0FBR25COztBQVZBOztFQVdJLDZCQUE2QjtFQUM3QixlQUFlO0VBQ2YsY0FBYztBQUlsQjs7QUFqQkE7RUFnQkksZ0JBQWdCO0FBS3BCOztBQXJCQTtFQW1CSSxjQUFjO0FBTWxCOztBQUhBO0VBRUUsaUVBQTZFO0VBQzdFLHFCQUFxQjtFQUNyQixrQkFBa0I7QUFLcEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZmlsLW1lbnUge1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiA4MHB4O1xufVxuLnByb2ZpbC1pbmZvIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIC8vIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBoMiB7XG4gICAgbGluZS1oZWlnaHQ6IDI1cHggIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbiAgaDMsXG4gIHAge1xuICAgIG1hcmdpbi1ib3R0b206IDVweCAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgfVxuICAuc3Ryb25nIHtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICB9XG4gIC5wb3JjZW50IHtcbiAgICBjb2xvcjogI2Y2Y2UzYztcbiAgfVxufVxuLmN1c3RvbS1tZW51IHtcbiAgLy8gYmFja2dyb3VuZDogdXJsKC4uL2Fzc2V0cy9pbWcvYmctbWVudS5zdmcpIDEwMCUgMC8xMDAlIG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZDogdXJsKC4uL2Fzc2V0cy9pbWcvc2lnbnVwLWJhY2tncm91bmQuc3ZnKSAwIDAvMTAwJSBmaXhlZCBuby1yZXBlYXQ7XG4gIHBhZGRpbmctYm90dG9tOiAyLjVlbTtcbiAgcGFkZGluZy10b3A6IDEuNWVtO1xufVxuIl19 */";
      /***/
    },

    /***/
    "./src/app/app.component.ts":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/keyboard/ngx */
      "./node_modules/@ionic-native/keyboard/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _core_services_global_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./core/services/global/auth.service */
      "./src/app/core/services/global/auth.service.ts");
      /* harmony import */


      var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-native/android-permissions/ngx */
      "./node_modules/@ionic-native/android-permissions/__ivy_ngcc__/ngx/index.js");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(platform, splashScreen, statusBar, keyboard, authService, permissions) {
          _classCallCheck(this, AppComponent);

          this.platform = platform;
          this.splashScreen = splashScreen;
          this.statusBar = statusBar;
          this.keyboard = keyboard;
          this.authService = authService;
          this.permissions = permissions;
          this.currentPageTitle = 'Swipe and match';
          this.lastTimeBackPress = 0;
          this.timePeriodToExit = 2000;
          this.appPages = [{
            title: 'Wins',
            url: '/dashboard/wins',
            icon: './assets/icon/win.svg',
            right: 'read_win'
          }, {
            title: 'Annonces',
            url: '/dashboard/advertisement',
            icon: './assets/icon/ads.svg',
            right: 'read_advertisement'
          }, {
            title: 'Recruteurs',
            url: '/dashboard/recruiter',
            icon: './assets/icon/recruteurs.svg',
            right: 'read_recruiter'
          }, {
            title: 'Profil candidat',
            url: '/dashboard/condidate',
            icon: './assets/icon/matching.svg',
            right: 'read_fiche_candidate'
          }, {
            title: 'Fiche Entreprise',
            url: '/dashboard/entreprise',
            icon: './assets/icon/matching.svg',
            right: 'read_fiche_company'
          }, {
            title: 'Paramètres',
            url: '/dashboard/settings',
            icon: './assets/icon/parametre.svg',
            right: 'read_params'
          }];
          this.initializeApp();
        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            }));
          }
        }, {
          key: "initializeApp",
          value: function initializeApp() {
            var _this = this;

            this.platform.ready().then(function () {
              _this.statusBar.overlaysWebView(false);

              _this.statusBar.backgroundColorByHexString('#405A98');

              _this.splashScreen.hide();

              _this.permissions.checkPermission(_this.permissions.PERMISSION.CAMERA).then(function (result) {
                if (!result.hasPermission) {
                  _this.permissions.requestPermission(_this.permissions.PERMISSION.CAMERA);
                }

                _this.permissions.checkPermission(_this.permissions.PERMISSION.WRITE_EXTERNAL_STORAGE).then(function (res) {
                  if (!result.hasPermission) {
                    _this.permissions.requestPermission(_this.permissions.PERMISSION.WRITE_EXTERNAL_STORAGE);
                  }
                }, function (error) {
                  _this.permissions.requestPermission(_this.permissions.PERMISSION.WRITE_EXTERNAL_STORAGE);
                });
              }, function (error) {
                _this.permissions.requestPermission(_this.permissions.PERMISSION.CAMERA);
              });
            });
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            var _this2 = this;

            this.platform.ready().then(function () {
              _this2.keyboard.disableScroll(true);
            });
          }
        }, {
          key: "ionViewWillLeave",
          value: function ionViewWillLeave() {
            var _this3 = this;

            this.platform.ready().then(function () {
              _this3.keyboard.disableScroll(false);
            });
          }
        }, {
          key: "redirectTo",
          value: function redirectTo(url) {
            window.open(url, '_blank');
          }
        }, {
          key: "getNativeAudio",
          value: function getNativeAudio() {}
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
        }, {
          type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]
        }, {
          type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
        }, {
          type: _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_5__["Keyboard"]
        }, {
          type: _core_services_global_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
        }, {
          type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_7__["AndroidPermissions"]
        }];
      };

      AppComponent.propDecorators = {
        routerOutlets: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"],
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRouterOutlet"]]
        }]
      };
      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./app.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./app.component.scss */
        "./src/app/app.component.scss"))["default"]]
      })], AppComponent);
      /***/
    },

    /***/
    "./src/app/app.module.ts":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: createTranslateLoader, app_init, AppModule */

    /***/
    function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function () {
        return createTranslateLoader;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "app_init", function () {
        return app_init;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
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


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-native/camera/ngx */
      "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic-native/file/ngx */
      "./node_modules/@ionic-native/file/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./app-routing.module */
      "./src/app/app-routing.module.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./shared/shared.module */
      "./src/app/shared/shared.module.ts");
      /* harmony import */


      var _layouts_auth_auth_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./layouts/auth/auth.component */
      "./src/app/layouts/auth/auth.component.ts");
      /* harmony import */


      var _layouts_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./layouts/dashboard/dashboard.component */
      "./src/app/layouts/dashboard/dashboard.component.ts");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
      /* harmony import */


      var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @ionic-native/keyboard/ngx */
      "./node_modules/@ionic-native/keyboard/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _core_utils__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./core/utils */
      "./src/app/core/utils/index.ts");
      /* harmony import */


      var _core_services_global_app_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./core/services/global/app.service */
      "./src/app/core/services/global/app.service.ts");
      /* harmony import */


      var _core_services_interceptors__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./core/services/interceptors */
      "./src/app/core/services/interceptors/index.ts");
      /* harmony import */


      var _core_services_guards__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./core/services/guards */
      "./src/app/core/services/guards/index.ts");
      /* harmony import */


      var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @ngx-translate/http-loader */
      "./node_modules/@ngx-translate/http-loader/__ivy_ngcc__/fesm2015/ngx-translate-http-loader.js");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
      /* harmony import */


      var _pages_about_jobwinwin_about_jobwinwin_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./pages/about-jobwinwin/about-jobwinwin.component */
      "./src/app/pages/about-jobwinwin/about-jobwinwin.component.ts");
      /* harmony import */


      var _core_services_addapters_loader_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./core/services/addapters/loader.service */
      "./src/app/core/services/addapters/loader.service.ts");
      /* harmony import */


      var _core_services_interceptors_loader_interceptor_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ./core/services/interceptors/loader-interceptor.service */
      "./src/app/core/services/interceptors/loader-interceptor.service.ts");
      /* harmony import */


      var _pages_form_contact_form_contact_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ./pages/form-contact/form-contact.component */
      "./src/app/pages/form-contact/form-contact.component.ts");
      /* harmony import */


      var ngx_autosize__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ngx-autosize */
      "./node_modules/ngx-autosize/__ivy_ngcc__/fesm2015/ngx-autosize.js");
      /* harmony import */


      var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! @ionic-native/android-permissions/ngx */
      "./node_modules/@ionic-native/android-permissions/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _core_services_global_notification_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! ./core/services/global/notification.service */
      "./src/app/core/services/global/notification.service.ts");
      /* harmony import */


      var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! @ionic-native/local-notifications/ngx */
      "./node_modules/@ionic-native/local-notifications/__ivy_ngcc__/ngx/index.js");

      var createTranslateLoader = function createTranslateLoader(http) {
        return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_22__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
      };

      var app_init = function app_init(appService) {
        return function () {
          return appService.initializeApp();
        };
      };

      var AppModule = function AppModule(router) {
        _classCallCheck(this, AppModule);

        this.router = router;
        _core_utils__WEBPACK_IMPORTED_MODULE_18__["Redirection"].router = this.router;
      };

      AppModule.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"], _layouts_auth_auth_component__WEBPACK_IMPORTED_MODULE_13__["AuthComponent"], _layouts_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_14__["DashboardComponent"], _pages_about_jobwinwin_about_jobwinwin_component__WEBPACK_IMPORTED_MODULE_24__["AboutJobwinwinComponent"], _pages_form_contact_form_contact_component__WEBPACK_IMPORTED_MODULE_27__["FormContactComponent"]],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"], ngx_autosize__WEBPACK_IMPORTED_MODULE_28__["AutosizeModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot({
          scrollAssist: false
        }), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__["TranslateModule"].forRoot({
          loader: {
            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__["TranslateLoader"],
            useFactory: createTranslateLoader,
            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClient"]]
          },
          defaultLanguage: 'fr'
        })],
        providers: [_ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_29__["AndroidPermissions"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _core_services_addapters_loader_service__WEBPACK_IMPORTED_MODULE_25__["LoaderService"], _core_services_global_notification_service__WEBPACK_IMPORTED_MODULE_30__["NotificationService"], _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_31__["LocalNotifications"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__["Camera"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__["File"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], {
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
        }, _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_16__["Keyboard"], _core_services_guards__WEBPACK_IMPORTED_MODULE_21__["AuthorizedGuard"], _core_services_guards__WEBPACK_IMPORTED_MODULE_21__["LoggedInGuard"], {
          provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["APP_INITIALIZER"],
          useFactory: app_init,
          deps: [_core_services_global_app_service__WEBPACK_IMPORTED_MODULE_19__["AppService"]],
          multi: true
        }, {
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HTTP_INTERCEPTORS"],
          useClass: _core_services_interceptors_loader_interceptor_service__WEBPACK_IMPORTED_MODULE_26__["LoaderInterceptorService"],
          multi: true
        }, {
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HTTP_INTERCEPTORS"],
          useClass: _core_services_interceptors__WEBPACK_IMPORTED_MODULE_20__["HttpTokenInterceptor"],
          multi: true
        }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "./src/app/core/models/classes/activitySector.ts":
    /*!*******************************************************!*\
      !*** ./src/app/core/models/classes/activitySector.ts ***!
      \*******************************************************/

    /*! exports provided: ActivitySector */

    /***/
    function srcAppCoreModelsClassesActivitySectorTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ActivitySector", function () {
        return ActivitySector;
      });
      /* harmony import */


      var _repertoire__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./repertoire */
      "./src/app/core/models/classes/repertoire.ts");

      var ActivitySector = /*#__PURE__*/function (_repertoire__WEBPACK_) {
        _inherits(ActivitySector, _repertoire__WEBPACK_);

        var _super = _createSuper(ActivitySector);

        function ActivitySector(activitySector) {
          _classCallCheck(this, ActivitySector);

          return _super.call(this, activitySector);
        }

        return ActivitySector;
      }(_repertoire__WEBPACK_IMPORTED_MODULE_0__["Repertoire"]);
      /***/

    },

    /***/
    "./src/app/core/models/classes/advertisement.ts":
    /*!******************************************************!*\
      !*** ./src/app/core/models/classes/advertisement.ts ***!
      \******************************************************/

    /*! exports provided: Advertisement */

    /***/
    function srcAppCoreModelsClassesAdvertisementTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Advertisement", function () {
        return Advertisement;
      });
      /* harmony import */


      var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../utils */
      "./src/app/core/utils/index.ts");

      var Advertisement = /*#__PURE__*/function () {
        function Advertisement(advertisement) {
          _classCallCheck(this, Advertisement);

          this._id = advertisement._id;
          this.startedDate = advertisement.startedDate;
          this.supposedSalaryMin = advertisement.supposedSalaryMin;
          this.supposedSalaryMax = advertisement.supposedSalaryMax;
          this.otherAdvantage = advertisement.otherAdvantage;
          this.tasks = advertisement.tasks;
          this.prerequisite = advertisement.prerequisite;
          this.desiredJob = advertisement.desiredJob;
          this.experienceYears = advertisement.experienceYears;
          this.managerialLevel = advertisement.managerialLevel;
          this.effective = advertisement.effective;
          this.typeOfTraining = advertisement.typeOfTraining;
          this.softSkills = advertisement.softSkills;
          this.skills = advertisement.skills;
          this.languages = advertisement.languages;
          this.logo = advertisement.logo;
          this.jobType = advertisement.jobType;
          this.company = advertisement.company;
          this["function"] = advertisement["function"];
          this.location = advertisement.location;
          this.activitySector = advertisement.activitySector;
          this.contract = advertisement.contract;
          this.recruiter = advertisement.recruiter;
          this.wins = advertisement.wins;
          this.views = advertisement.views;
          this.updatedAt = advertisement.updatedAt;
          this.status = advertisement.status;
          this.missions = advertisement.missions;
          this.descriptions = advertisement.descriptions;
          this.programmingSkills = advertisement.programmingSkills;
          this.programingLanguages = advertisement.programingLanguages;
          this.jobMode = advertisement.jobMode;
          this.profile = advertisement.profile;
          this.usageTitles = advertisement.usageTitles;
          this.levelOfStudies = advertisement.levelOfStudies;
        }

        _createClass(Advertisement, [{
          key: "toJson",

          /**
           * convert object to json
           */
          value: function toJson() {
            var properties = ['_id', 'startedDate', 'supposedSalaryMin', 'supposedSalaryMax', 'otherAdvantage', 'tasks', 'prerequisite', 'desiredJob', 'experienceYears', 'managerialLevel', 'effective', 'typeOfTraining', 'softSkills', 'languages', 'logo', 'jobType', 'company', 'function', 'jobMode', 'location', 'activitySector', 'contract', 'recruiter', 'status', 'programmingSkills', 'programingLanguages', 'missions', 'descriptions', 'views', 'wins', 'profile', 'updatedAt', 'values', 'skills', 'usageTitles', 'levelOfStudies'];
            return _utils__WEBPACK_IMPORTED_MODULE_0__["Helper"].objectToString(properties, this);
          }
        }, {
          key: "_id",
          get: function get() {
            return this.id;
          },
          set: function set(id) {
            this.id = id;
          }
        }, {
          key: "startedDate",
          get: function get() {
            return this._startedDate;
          },
          set: function set(startedDate) {
            this._startedDate = startedDate;
          }
        }, {
          key: "supposedSalaryMin",
          get: function get() {
            return this._supposedSalaryMin;
          },
          set: function set(supposedSalaryMin) {
            this._supposedSalaryMin = supposedSalaryMin;
          }
        }, {
          key: "supposedSalaryMax",
          get: function get() {
            return this._supposedSalaryMax;
          },
          set: function set(supposedSalaryMax) {
            this._supposedSalaryMax = supposedSalaryMax;
          }
        }, {
          key: "otherAdvantage",
          get: function get() {
            return this._otherAdvantage;
          },
          set: function set(otherAdvantage) {
            this._otherAdvantage = otherAdvantage;
          }
        }, {
          key: "tasks",
          get: function get() {
            return this._tasks;
          },
          set: function set(tasks) {
            this._tasks = tasks;
          }
        }, {
          key: "prerequisite",
          get: function get() {
            return this._prerequisite;
          },
          set: function set(prerequisite) {
            this._prerequisite = prerequisite;
          }
        }, {
          key: "desiredJob",
          get: function get() {
            return this._desiredJob;
          },
          set: function set(desiredJob) {
            this._desiredJob = desiredJob;
          }
        }, {
          key: "experienceYears",
          get: function get() {
            return this._experienceYears;
          },
          set: function set(experienceYears) {
            this._experienceYears = experienceYears;
          }
        }, {
          key: "managerialLevel",
          get: function get() {
            return this._managerialLevel;
          },
          set: function set(managerialLevel) {
            this._managerialLevel = managerialLevel;
          }
        }, {
          key: "effective",
          get: function get() {
            return this._effective;
          },
          set: function set(effective) {
            this._effective = effective;
          }
        }, {
          key: "typeOfTraining",
          get: function get() {
            return this._typeOfTraining;
          },
          set: function set(typeOfTraining) {
            this._typeOfTraining = typeOfTraining;
          }
        }, {
          key: "softSkills",
          get: function get() {
            return this._softSkills;
          },
          set: function set(softSkills) {
            this._softSkills = softSkills;
          }
        }, {
          key: "languages",
          get: function get() {
            return this._languages;
          },
          set: function set(languages) {
            this._languages = languages;
          }
        }, {
          key: "logo",
          get: function get() {
            return this._logo;
          },
          set: function set(logo) {
            this._logo = logo;
          }
        }, {
          key: "jobType",
          get: function get() {
            return this._jobType;
          },
          set: function set(jobType) {
            this._jobType = jobType;
          }
        }, {
          key: "company",
          get: function get() {
            return this._company;
          },
          set: function set(company) {
            this._company = company;
          }
        }, {
          key: "function",
          get: function get() {
            return this._function;
          },
          set: function set(fun) {
            this._function = fun;
          }
        }, {
          key: "location",
          get: function get() {
            return this._location;
          },
          set: function set(location) {
            this._location = location;
          }
        }, {
          key: "activitySector",
          get: function get() {
            return this._activitySector;
          },
          set: function set(activitySector) {
            this._activitySector = activitySector;
          }
        }, {
          key: "contract",
          get: function get() {
            return this._contract;
          },
          set: function set(contract) {
            this._contract = contract;
          }
        }, {
          key: "recruiter",
          get: function get() {
            return this._recruiter;
          },
          set: function set(recruiter) {
            this._recruiter = recruiter;
          }
        }, {
          key: "updatedAt",
          get: function get() {
            return this._updatedAt;
          },
          set: function set(updatedAt) {
            this._updatedAt = updatedAt;
          }
        }, {
          key: "views",
          get: function get() {
            return this._views;
          },
          set: function set(views) {
            this._views = views;
          }
        }, {
          key: "wins",
          get: function get() {
            return this._wins;
          },
          set: function set(wins) {
            this._wins = wins;
          }
        }, {
          key: "status",
          get: function get() {
            return this._status;
          },
          set: function set(status) {
            this._status = status;
          }
        }, {
          key: "missions",
          get: function get() {
            return this._missions;
          },
          set: function set(missions) {
            this._missions = missions;
          }
        }, {
          key: "descriptions",
          get: function get() {
            return this._descriptions;
          },
          set: function set(descriptions) {
            this._descriptions = descriptions;
          }
        }, {
          key: "programmingSkills",
          get: function get() {
            return this._programmingSkills;
          },
          set: function set(programmingSkills) {
            this._programmingSkills = programmingSkills;
          }
        }, {
          key: "programingLanguages",
          get: function get() {
            return this._programingLanguages;
          },
          set: function set(programingLanguages) {
            this._programingLanguages = programingLanguages;
          }
        }, {
          key: "jobMode",
          get: function get() {
            return this._jobMode;
          },
          set: function set(jobMode) {
            this._jobMode = jobMode;
          }
        }, {
          key: "profile",
          get: function get() {
            return this._profile;
          },
          set: function set(profile) {
            this._profile = profile;
          }
        }, {
          key: "values",
          get: function get() {
            return this._values;
          },
          set: function set(values) {
            this._values = values;
          }
        }, {
          key: "skills",
          get: function get() {
            return this._skills;
          },
          set: function set(skills) {
            this._skills = skills;
          }
        }, {
          key: "usageTitles",
          get: function get() {
            return this._usageTitles;
          },
          set: function set(usageTitles) {
            this._usageTitles = usageTitles;
          }
        }, {
          key: "levelOfStudies",
          get: function get() {
            return this._levelOfStudies;
          },
          set: function set(levelOfStudies) {
            this._levelOfStudies = levelOfStudies;
          }
        }]);

        return Advertisement;
      }();
      /***/

    },

    /***/
    "./src/app/core/models/classes/candidate.ts":
    /*!**************************************************!*\
      !*** ./src/app/core/models/classes/candidate.ts ***!
      \**************************************************/

    /*! exports provided: Candidate */

    /***/
    function srcAppCoreModelsClassesCandidateTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Candidate", function () {
        return Candidate;
      });
      /* harmony import */


      var _user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./user */
      "./src/app/core/models/classes/user.ts");

      var Candidate = /*#__PURE__*/function (_user__WEBPACK_IMPORT) {
        _inherits(Candidate, _user__WEBPACK_IMPORT);

        var _super2 = _createSuper(Candidate);

        function Candidate(candidate) {
          var _this4;

          _classCallCheck(this, Candidate);

          _this4 = _super2.call(this, candidate);
          _this4._id = candidate._id;
          _this4.currentJob = candidate.currentJob;
          _this4.location = candidate.location;
          _this4.goal = candidate.goal;
          _this4.birthday = candidate.birthday;
          _this4.gender = candidate.gender;
          _this4.searchedPost = candidate.searchedPost;
          _this4.experienceYears = candidate.experienceYears;
          _this4.currentSalary = candidate.currentSalary;
          _this4.managerialLevel = candidate.managerialLevel;
          _this4.supposedSalaryMin = candidate.supposedSalaryMin;
          _this4.supposedSalaryMax = candidate.supposedSalaryMax;
          _this4.video = candidate.video;
          _this4.cv = candidate.cv;
          _this4.values = candidate.values;
          _this4.experiences = candidate.experiences;
          _this4.trainings = candidate.trainings;
          _this4.languages = candidate.languages;
          _this4.availability = candidate.availability;
          _this4.webSite = candidate.webSite;
          _this4.blog = candidate.blog;
          _this4.linkedin = candidate.linkedin;
          _this4.instagram = candidate.instagram;
          _this4.twitter = candidate.twitter;
          _this4.facebook = candidate.facebook;
          _this4.currentLocation = candidate.currentLocation;
          _this4.programingLanguages = candidate.programingLanguages;
          _this4.skills = candidate.skills;
          _this4.completed = candidate.completed;
          return _this4;
        }

        _createClass(Candidate, [{
          key: "currentJob",
          get: function get() {
            return this._currentJob;
          },
          set: function set(currentJob) {
            this._currentJob = currentJob;
          }
        }, {
          key: "goal",
          get: function get() {
            return this._goal;
          },
          set: function set(goal) {
            this._goal = goal;
          }
        }, {
          key: "searchedPost",
          get: function get() {
            return this._searchedPost;
          },
          set: function set(searchedPost) {
            this._searchedPost = searchedPost;
          }
        }, {
          key: "currentSalary",
          get: function get() {
            return this._currentSalary;
          },
          set: function set(currentSalary) {
            this._currentSalary = currentSalary;
          }
        }, {
          key: "birthday",
          get: function get() {
            return this._birthday;
          },
          set: function set(birthday) {
            this._birthday = birthday;
          }
        }, {
          key: "supposedSalaryMin",
          get: function get() {
            return this._supposedSalaryMin;
          },
          set: function set(supposedSalaryMin) {
            this._supposedSalaryMin = supposedSalaryMin;
          }
        }, {
          key: "supposedSalaryMax",
          get: function get() {
            return this._supposedSalaryMax;
          },
          set: function set(supposedSalaryMax) {
            this._supposedSalaryMax = supposedSalaryMax;
          }
        }, {
          key: "availability",
          get: function get() {
            return this._availability;
          },
          set: function set(availability) {
            this._availability = availability;
          }
        }, {
          key: "video",
          get: function get() {
            return this._video;
          },
          set: function set(video) {
            this._video = video;
          }
        }, {
          key: "cv",
          get: function get() {
            return this._cv;
          },
          set: function set(cv) {
            this._cv = cv;
          }
        }, {
          key: "values",
          get: function get() {
            return this._values;
          },
          set: function set(values) {
            this._values = values;
          }
        }, {
          key: "experiences",
          get: function get() {
            return this._experiences;
          },
          set: function set(experiences) {
            this._experiences = experiences;
          }
        }, {
          key: "trainings",
          get: function get() {
            return this._trainings;
          },
          set: function set(trainings) {
            this._trainings = trainings;
          }
        }, {
          key: "languages",
          get: function get() {
            return this._languages;
          },
          set: function set(languages) {
            this._languages = languages;
          }
        }, {
          key: "webSite",
          get: function get() {
            return this._webSite;
          },
          set: function set(webSite) {
            this._webSite = webSite;
          }
        }, {
          key: "blog",
          get: function get() {
            return this._blog;
          },
          set: function set(blog) {
            this._blog = blog;
          }
        }, {
          key: "linkedin",
          get: function get() {
            return this._linkedin;
          },
          set: function set(linkedin) {
            this._linkedin = linkedin;
          }
        }, {
          key: "instagram",
          get: function get() {
            return this._instagram;
          },
          set: function set(instagram) {
            this._instagram = instagram;
          }
        }, {
          key: "twitter",
          get: function get() {
            return this._twitter;
          },
          set: function set(twitter) {
            this._twitter = twitter;
          }
        }, {
          key: "facebook",
          get: function get() {
            return this._facebook;
          },
          set: function set(facebook) {
            this._facebook = facebook;
          }
        }, {
          key: "gender",
          get: function get() {
            return this._gender;
          },
          set: function set(gender) {
            this._gender = gender;
          }
        }, {
          key: "managerialLevel",
          get: function get() {
            return this._managerialLevel;
          },
          set: function set(managerialLevel) {
            this._managerialLevel = managerialLevel;
          }
        }, {
          key: "effective",
          get: function get() {
            return this._effective;
          },
          set: function set(effective) {
            this._effective = effective;
          }
        }, {
          key: "function",
          get: function get() {
            return this._function;
          },
          set: function set(func) {
            this._function = func;
          }
        }, {
          key: "contract",
          get: function get() {
            return this._contract;
          },
          set: function set(contract) {
            this._contract = contract;
          }
        }, {
          key: "jobType",
          get: function get() {
            return this._jobType;
          },
          set: function set(jobType) {
            this._jobType = jobType;
          }
        }, {
          key: "activitySector",
          get: function get() {
            return this._activitySector;
          },
          set: function set(activitySector) {
            this._activitySector = activitySector;
          }
        }, {
          key: "jobMode",
          get: function get() {
            return this._jobMode;
          },
          set: function set(jobMode) {
            this._jobMode = jobMode;
          }
        }, {
          key: "experienceYears",
          get: function get() {
            return this._experienceYears;
          },
          set: function set(experienceYears) {
            this._experienceYears = experienceYears;
          }
        }, {
          key: "location",
          get: function get() {
            return this._location;
          },
          set: function set(location) {
            this._location = location;
          }
        }, {
          key: "currentLocation",
          get: function get() {
            return this._currentLocation;
          },
          set: function set(currentLocation) {
            this._currentLocation = currentLocation;
          }
        }, {
          key: "programingLanguages",
          get: function get() {
            return this._programingLanguages;
          },
          set: function set(programingLanguages) {
            this._programingLanguages = programingLanguages;
          }
        }, {
          key: "skills",
          get: function get() {
            return this._skills;
          },
          set: function set(skills) {
            this._skills = skills;
          }
        }, {
          key: "completed",
          get: function get() {
            return this._completed;
          },
          set: function set(completed) {
            this._completed = completed;
          }
        }]);

        return Candidate;
      }(_user__WEBPACK_IMPORTED_MODULE_0__["User"]);
      /***/

    },

    /***/
    "./src/app/core/models/classes/company.ts":
    /*!************************************************!*\
      !*** ./src/app/core/models/classes/company.ts ***!
      \************************************************/

    /*! exports provided: Company */

    /***/
    function srcAppCoreModelsClassesCompanyTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Company", function () {
        return Company;
      });
      /* harmony import */


      var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../utils */
      "./src/app/core/utils/index.ts");

      var Company = /*#__PURE__*/function () {
        function Company(company) {
          _classCallCheck(this, Company);

          this._id = company._id;
          this.name = company.name;
          this.title = company.title;
          this.email = company.email;
          this.zipCode = company.zipCode;
          this.country = company.country;
          this.rc = company.rc;
          this.taxIdentification = company.taxIdentification;
          this.ice = company.ice;
          this.phoneNumber = company.phoneNumber;
          this.logo = company.logo;
          this.webSite = company.webSite;
          this.linkedin = company.linkedin;
          this.facebook = company.facebook;
          this.twitter = company.twitter;
          this.values = company.values;
          this.description = company.description;
          this.otherValues = company.otherValues;
          this.managerFirstName = company.managerFirstName;
          this.managerLastName = company.managerLastName;
          this.managerFirstPhoneNumber = company.managerFirstPhoneNumber;
          this.managerSecondPhoneNumber = company.managerSecondPhoneNumber;
          this.managerEmail = company.managerEmail;
          this.city = company.city;
          this.activitySector = company.activitySector;
          this.manager = company.manager;
          this.address = company.address;
          this.instagram = company.instagram;
        }

        _createClass(Company, [{
          key: "_id",
          get: function get() {
            return this.id;
          },
          set: function set(id) {
            this.id = id;
          }
        }, {
          key: "name",
          get: function get() {
            return this._name;
          },
          set: function set(name) {
            this._name = name;
          }
        }, {
          key: "title",
          get: function get() {
            return this._title;
          },
          set: function set(title) {
            this._title = title;
          }
        }, {
          key: "managerFirstName",
          get: function get() {
            return this._managerFirstName;
          },
          set: function set(managerFirstName) {
            this._managerFirstName = managerFirstName;
          }
        }, {
          key: "managerLastName",
          get: function get() {
            return this._managerLastName;
          },
          set: function set(managerLastName) {
            this._managerLastName = managerLastName;
          }
        }, {
          key: "managerFirstPhoneNumber",
          get: function get() {
            return this._managerFirstPhoneNumber;
          },
          set: function set(managerFirstPhoneNumber) {
            this._managerFirstPhoneNumber = managerFirstPhoneNumber;
          }
        }, {
          key: "managerSecondPhoneNumber",
          get: function get() {
            return this._managerSecondPhoneNumber;
          },
          set: function set(managerSecondPhoneNumber) {
            this._managerSecondPhoneNumber = managerSecondPhoneNumber;
          }
        }, {
          key: "managerEmail",
          get: function get() {
            return this._managerEmail;
          },
          set: function set(managerEmail) {
            this._managerEmail = managerEmail;
          }
        }, {
          key: "email",
          get: function get() {
            return this._email;
          },
          set: function set(email) {
            this._email = email;
          }
        }, {
          key: "zipCode",
          get: function get() {
            return this._zipCode;
          },
          set: function set(zipCode) {
            this._zipCode = zipCode;
          }
        }, {
          key: "country",
          get: function get() {
            return this._country;
          },
          set: function set(country) {
            this._country = country;
          }
        }, {
          key: "rc",
          get: function get() {
            return this._rc;
          },
          set: function set(rc) {
            this._rc = rc;
          }
        }, {
          key: "taxIdentification",
          get: function get() {
            return this._taxIdentification;
          },
          set: function set(taxIdentification) {
            this._taxIdentification = taxIdentification;
          }
        }, {
          key: "ice",
          get: function get() {
            return this._ice;
          },
          set: function set(ice) {
            this._ice = ice;
          }
        }, {
          key: "phoneNumber",
          get: function get() {
            return this._phoneNumber;
          },
          set: function set(phoneNumber) {
            this._phoneNumber = phoneNumber;
          }
        }, {
          key: "logo",
          get: function get() {
            return this._logo;
          },
          set: function set(logo) {
            this._logo = logo;
          }
        }, {
          key: "webSite",
          get: function get() {
            return this._webSite;
          },
          set: function set(webSite) {
            this._webSite = webSite;
          }
        }, {
          key: "linkedin",
          get: function get() {
            return this._linkedin;
          },
          set: function set(linkedin) {
            this._linkedin = linkedin;
          }
        }, {
          key: "facebook",
          get: function get() {
            return this._facebook;
          },
          set: function set(facebook) {
            this._facebook = facebook;
          }
        }, {
          key: "twitter",
          get: function get() {
            return this._twitter;
          },
          set: function set(twitter) {
            this._twitter = twitter;
          }
        }, {
          key: "values",
          get: function get() {
            return this._values;
          },
          set: function set(values) {
            this._values = values;
          }
        }, {
          key: "description",
          get: function get() {
            return this._description;
          },
          set: function set(description) {
            this._description = description;
          }
        }, {
          key: "otherValues",
          get: function get() {
            return this._otherValues;
          },
          set: function set(otherValues) {
            this._otherValues = otherValues;
          }
        }, {
          key: "instagram",
          get: function get() {
            return this._instagram;
          },
          set: function set(instagram) {
            this._instagram = instagram;
          }
        }, {
          key: "address",
          get: function get() {
            return this._address;
          },
          set: function set(address) {
            this._address = address;
          }
        }, {
          key: "city",
          get: function get() {
            return this._city;
          },
          set: function set(city) {
            this._city = city;
          }
        }, {
          key: "activitySector",
          get: function get() {
            return this._activitySector;
          },
          set: function set(activitySector) {
            this._activitySector = activitySector;
          }
        }, {
          key: "manager",
          get: function get() {
            return this._manager;
          },
          set: function set(manager) {
            this._manager = manager;
          }
        }, {
          key: "ObjectToJson",
          get: function get() {
            return _utils__WEBPACK_IMPORTED_MODULE_0__["Helper"].getObjectValues(this, ['_id', 'name', 'title', 'email', 'zipCode', 'address', 'country', 'rc', 'taxIdentification', 'ice', 'phoneNumber', 'logo', 'webSite', 'linkedin', 'facebook', 'twitter', 'values', 'description', 'otherValues', 'managerFirstName', 'managerLastName', 'managerFirstPhoneNumber', 'managerSecondPhoneNumber', 'managerEmail', 'city', 'instagram', 'activitySector', 'manager']);
          }
        }]);

        return Company;
      }();
      /***/

    },

    /***/
    "./src/app/core/models/classes/contact.ts":
    /*!************************************************!*\
      !*** ./src/app/core/models/classes/contact.ts ***!
      \************************************************/

    /*! exports provided: Contact */

    /***/
    function srcAppCoreModelsClassesContactTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Contact", function () {
        return Contact;
      });
      /* harmony import */


      var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../utils */
      "./src/app/core/utils/index.ts");

      var Contact = /*#__PURE__*/function () {
        function Contact(company) {
          _classCallCheck(this, Contact);

          this.id = company.id;
          this.fullName = company.fullName;
          this.email = company.email;
          this.phoneNumber = company.phoneNumber;
          this.message = company.message;
        }

        _createClass(Contact, [{
          key: "_id",
          get: function get() {
            return this.id;
          },
          set: function set(id) {
            this.id = id;
          }
        }, {
          key: "fullName",
          get: function get() {
            return this._fullName;
          },
          set: function set(fullName) {
            this._fullName = fullName;
          }
        }, {
          key: "email",
          get: function get() {
            return this._email;
          },
          set: function set(email) {
            this._email = email;
          }
        }, {
          key: "phoneNumber",
          get: function get() {
            return this._phoneNumber;
          },
          set: function set(phoneNumber) {
            this._phoneNumber = phoneNumber;
          }
        }, {
          key: "message",
          get: function get() {
            return this._message;
          },
          set: function set(message) {
            this._message = message;
          }
          /**
           * get value
           */

        }, {
          key: "ObjectToJson",
          get: function get() {
            return _utils__WEBPACK_IMPORTED_MODULE_0__["Helper"].getObjectValues(this, ['_id', 'fullName', 'email', 'phoneNumber', 'message']);
          }
        }]);

        return Contact;
      }();
      /***/

    },

    /***/
    "./src/app/core/models/classes/file.ts":
    /*!*********************************************!*\
      !*** ./src/app/core/models/classes/file.ts ***!
      \*********************************************/

    /*! exports provided: File */

    /***/
    function srcAppCoreModelsClassesFileTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "File", function () {
        return File;
      });

      var File = /*#__PURE__*/function () {
        function File(file) {
          _classCallCheck(this, File);

          this.id = file.id;
          this.name = file.name;
          this.path = file.path;
          this.type = file.type;
          this.size = file.size;
        }

        _createClass(File, [{
          key: "_id",
          get: function get() {
            return this.id;
          },
          set: function set(id) {
            this.id = id;
          }
        }, {
          key: "name",
          get: function get() {
            return this._name;
          },
          set: function set(name) {
            this._name = name;
          }
        }, {
          key: "path",
          get: function get() {
            return this._path;
          },
          set: function set(path) {
            this._path = path;
          }
        }, {
          key: "type",
          get: function get() {
            return this._type;
          },
          set: function set(type) {
            this._type = type;
          }
        }, {
          key: "size",
          get: function get() {
            return this._size;
          },
          set: function set(size) {
            this._size = size;
          }
        }]);

        return File;
      }();
      /***/

    },

    /***/
    "./src/app/core/models/classes/function.ts":
    /*!*************************************************!*\
      !*** ./src/app/core/models/classes/function.ts ***!
      \*************************************************/

    /*! exports provided: Function */

    /***/
    function srcAppCoreModelsClassesFunctionTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Function", function () {
        return Function;
      });
      /* harmony import */


      var _repertoire__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./repertoire */
      "./src/app/core/models/classes/repertoire.ts");

      var Function = /*#__PURE__*/function (_repertoire__WEBPACK_2) {
        _inherits(Function, _repertoire__WEBPACK_2);

        var _super3 = _createSuper(Function);

        function Function(functions) {
          _classCallCheck(this, Function);

          return _super3.call(this, functions);
        }

        return Function;
      }(_repertoire__WEBPACK_IMPORTED_MODULE_0__["Repertoire"]);
      /***/

    },

    /***/
    "./src/app/core/models/classes/index.ts":
    /*!**********************************************!*\
      !*** ./src/app/core/models/classes/index.ts ***!
      \**********************************************/

    /*! exports provided: Right, Role, User, Candidate, Company, Contact, Advertisement, ActivitySector, Function, Language, Location, Repertoire, Skill, Value, LanguageLevel, MasteryLevel, File, JobType, SoftSkills, Recruiter, Manager */

    /***/
    function srcAppCoreModelsClassesIndexTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _right__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./right */
      "./src/app/core/models/classes/right.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Right", function () {
        return _right__WEBPACK_IMPORTED_MODULE_0__["Right"];
      });
      /* harmony import */


      var _role__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./role */
      "./src/app/core/models/classes/role.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Role", function () {
        return _role__WEBPACK_IMPORTED_MODULE_1__["Role"];
      });
      /* harmony import */


      var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./user */
      "./src/app/core/models/classes/user.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "User", function () {
        return _user__WEBPACK_IMPORTED_MODULE_2__["User"];
      });
      /* harmony import */


      var _candidate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./candidate */
      "./src/app/core/models/classes/candidate.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Candidate", function () {
        return _candidate__WEBPACK_IMPORTED_MODULE_3__["Candidate"];
      });
      /* harmony import */


      var _company__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./company */
      "./src/app/core/models/classes/company.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Company", function () {
        return _company__WEBPACK_IMPORTED_MODULE_4__["Company"];
      });
      /* harmony import */


      var _contact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./contact */
      "./src/app/core/models/classes/contact.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Contact", function () {
        return _contact__WEBPACK_IMPORTED_MODULE_5__["Contact"];
      });
      /* harmony import */


      var _advertisement__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./advertisement */
      "./src/app/core/models/classes/advertisement.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Advertisement", function () {
        return _advertisement__WEBPACK_IMPORTED_MODULE_6__["Advertisement"];
      });
      /* harmony import */


      var _activitySector__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./activitySector */
      "./src/app/core/models/classes/activitySector.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ActivitySector", function () {
        return _activitySector__WEBPACK_IMPORTED_MODULE_7__["ActivitySector"];
      });
      /* harmony import */


      var _function__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./function */
      "./src/app/core/models/classes/function.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Function", function () {
        return _function__WEBPACK_IMPORTED_MODULE_8__["Function"];
      });
      /* harmony import */


      var _language__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./language */
      "./src/app/core/models/classes/language.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Language", function () {
        return _language__WEBPACK_IMPORTED_MODULE_9__["Language"];
      });
      /* harmony import */


      var _location__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./location */
      "./src/app/core/models/classes/location.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Location", function () {
        return _location__WEBPACK_IMPORTED_MODULE_10__["Location"];
      });
      /* harmony import */


      var _repertoire__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./repertoire */
      "./src/app/core/models/classes/repertoire.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Repertoire", function () {
        return _repertoire__WEBPACK_IMPORTED_MODULE_11__["Repertoire"];
      });
      /* harmony import */


      var _skill__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./skill */
      "./src/app/core/models/classes/skill.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Skill", function () {
        return _skill__WEBPACK_IMPORTED_MODULE_12__["Skill"];
      });
      /* harmony import */


      var _value__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./value */
      "./src/app/core/models/classes/value.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Value", function () {
        return _value__WEBPACK_IMPORTED_MODULE_13__["Value"];
      });
      /* harmony import */


      var _languageLevel__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./languageLevel */
      "./src/app/core/models/classes/languageLevel.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "LanguageLevel", function () {
        return _languageLevel__WEBPACK_IMPORTED_MODULE_14__["LanguageLevel"];
      });
      /* harmony import */


      var _masteryLevel__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./masteryLevel */
      "./src/app/core/models/classes/masteryLevel.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "MasteryLevel", function () {
        return _masteryLevel__WEBPACK_IMPORTED_MODULE_15__["MasteryLevel"];
      });
      /* harmony import */


      var _file__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./file */
      "./src/app/core/models/classes/file.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "File", function () {
        return _file__WEBPACK_IMPORTED_MODULE_16__["File"];
      });
      /* harmony import */


      var _jobType__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./jobType */
      "./src/app/core/models/classes/jobType.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "JobType", function () {
        return _jobType__WEBPACK_IMPORTED_MODULE_17__["JobType"];
      });
      /* harmony import */


      var _softSkills__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./softSkills */
      "./src/app/core/models/classes/softSkills.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "SoftSkills", function () {
        return _softSkills__WEBPACK_IMPORTED_MODULE_18__["SoftSkills"];
      });
      /* harmony import */


      var _recruiter__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./recruiter */
      "./src/app/core/models/classes/recruiter.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Recruiter", function () {
        return _recruiter__WEBPACK_IMPORTED_MODULE_19__["Recruiter"];
      });
      /* harmony import */


      var _manager__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./manager */
      "./src/app/core/models/classes/manager.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Manager", function () {
        return _manager__WEBPACK_IMPORTED_MODULE_20__["Manager"];
      });
      /***/

    },

    /***/
    "./src/app/core/models/classes/jobType.ts":
    /*!************************************************!*\
      !*** ./src/app/core/models/classes/jobType.ts ***!
      \************************************************/

    /*! exports provided: JobType */

    /***/
    function srcAppCoreModelsClassesJobTypeTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JobType", function () {
        return JobType;
      });
      /* harmony import */


      var _repertoire__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./repertoire */
      "./src/app/core/models/classes/repertoire.ts");

      var JobType = /*#__PURE__*/function (_repertoire__WEBPACK_3) {
        _inherits(JobType, _repertoire__WEBPACK_3);

        var _super4 = _createSuper(JobType);

        function JobType(jobType) {
          _classCallCheck(this, JobType);

          return _super4.call(this, jobType);
        }

        return JobType;
      }(_repertoire__WEBPACK_IMPORTED_MODULE_0__["Repertoire"]);
      /***/

    },

    /***/
    "./src/app/core/models/classes/language.ts":
    /*!*************************************************!*\
      !*** ./src/app/core/models/classes/language.ts ***!
      \*************************************************/

    /*! exports provided: Language */

    /***/
    function srcAppCoreModelsClassesLanguageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Language", function () {
        return Language;
      });
      /* harmony import */


      var _repertoire__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./repertoire */
      "./src/app/core/models/classes/repertoire.ts");

      var Language = /*#__PURE__*/function (_repertoire__WEBPACK_4) {
        _inherits(Language, _repertoire__WEBPACK_4);

        var _super5 = _createSuper(Language);

        function Language(language) {
          _classCallCheck(this, Language);

          return _super5.call(this, language);
        }

        return Language;
      }(_repertoire__WEBPACK_IMPORTED_MODULE_0__["Repertoire"]);
      /***/

    },

    /***/
    "./src/app/core/models/classes/languageLevel.ts":
    /*!******************************************************!*\
      !*** ./src/app/core/models/classes/languageLevel.ts ***!
      \******************************************************/

    /*! exports provided: LanguageLevel */

    /***/
    function srcAppCoreModelsClassesLanguageLevelTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LanguageLevel", function () {
        return LanguageLevel;
      });
      /* harmony import */


      var _repertoire__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./repertoire */
      "./src/app/core/models/classes/repertoire.ts");

      var LanguageLevel = /*#__PURE__*/function (_repertoire__WEBPACK_5) {
        _inherits(LanguageLevel, _repertoire__WEBPACK_5);

        var _super6 = _createSuper(LanguageLevel);

        function LanguageLevel(languageLevel) {
          _classCallCheck(this, LanguageLevel);

          return _super6.call(this, languageLevel);
        }

        return LanguageLevel;
      }(_repertoire__WEBPACK_IMPORTED_MODULE_0__["Repertoire"]);
      /***/

    },

    /***/
    "./src/app/core/models/classes/location.ts":
    /*!*************************************************!*\
      !*** ./src/app/core/models/classes/location.ts ***!
      \*************************************************/

    /*! exports provided: Location */

    /***/
    function srcAppCoreModelsClassesLocationTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Location", function () {
        return Location;
      });
      /* harmony import */


      var _repertoire__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./repertoire */
      "./src/app/core/models/classes/repertoire.ts");

      var Location = /*#__PURE__*/function (_repertoire__WEBPACK_6) {
        _inherits(Location, _repertoire__WEBPACK_6);

        var _super7 = _createSuper(Location);

        function Location(location) {
          _classCallCheck(this, Location);

          return _super7.call(this, location);
        }

        return Location;
      }(_repertoire__WEBPACK_IMPORTED_MODULE_0__["Repertoire"]);
      /***/

    },

    /***/
    "./src/app/core/models/classes/manager.ts":
    /*!************************************************!*\
      !*** ./src/app/core/models/classes/manager.ts ***!
      \************************************************/

    /*! exports provided: Manager */

    /***/
    function srcAppCoreModelsClassesManagerTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Manager", function () {
        return Manager;
      });
      /* harmony import */


      var _user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./user */
      "./src/app/core/models/classes/user.ts");

      var Manager = /*#__PURE__*/function (_user__WEBPACK_IMPORT2) {
        _inherits(Manager, _user__WEBPACK_IMPORT2);

        var _super8 = _createSuper(Manager);

        function Manager(manager) {
          var _this5;

          _classCallCheck(this, Manager);

          _this5 = _super8.call(this, manager);
          _this5._firstPhoneNumber = manager.firstPhoneNumber;
          _this5._secondPhoneNumber = manager.secondPhoneNumber;
          _this5._function = manager["function"];
          _this5._status = manager.status;
          return _this5;
        }

        _createClass(Manager, [{
          key: "firstPhoneNumber",
          get: function get() {
            return this._firstPhoneNumber;
          },
          set: function set(firstPhoneNumber) {
            this._firstPhoneNumber = firstPhoneNumber;
          }
        }, {
          key: "secondPhoneNumber",
          get: function get() {
            return this._secondPhoneNumber;
          },
          set: function set(secondPhoneNumber) {
            this._secondPhoneNumber = secondPhoneNumber;
          }
        }, {
          key: "function",
          get: function get() {
            return this._function;
          },
          set: function set(func) {
            this._function = func;
          }
        }, {
          key: "status",
          get: function get() {
            return this._status;
          },
          set: function set(status) {
            this._status = status;
          }
        }]);

        return Manager;
      }(_user__WEBPACK_IMPORTED_MODULE_0__["User"]);
      /***/

    },

    /***/
    "./src/app/core/models/classes/masteryLevel.ts":
    /*!*****************************************************!*\
      !*** ./src/app/core/models/classes/masteryLevel.ts ***!
      \*****************************************************/

    /*! exports provided: MasteryLevel */

    /***/
    function srcAppCoreModelsClassesMasteryLevelTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MasteryLevel", function () {
        return MasteryLevel;
      });
      /* harmony import */


      var _repertoire__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./repertoire */
      "./src/app/core/models/classes/repertoire.ts");

      var MasteryLevel = /*#__PURE__*/function (_repertoire__WEBPACK_7) {
        _inherits(MasteryLevel, _repertoire__WEBPACK_7);

        var _super9 = _createSuper(MasteryLevel);

        function MasteryLevel(masteryLevel) {
          _classCallCheck(this, MasteryLevel);

          return _super9.call(this, masteryLevel);
        }

        return MasteryLevel;
      }(_repertoire__WEBPACK_IMPORTED_MODULE_0__["Repertoire"]);
      /***/

    },

    /***/
    "./src/app/core/models/classes/recruiter.ts":
    /*!**************************************************!*\
      !*** ./src/app/core/models/classes/recruiter.ts ***!
      \**************************************************/

    /*! exports provided: Recruiter */

    /***/
    function srcAppCoreModelsClassesRecruiterTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Recruiter", function () {
        return Recruiter;
      });
      /* harmony import */


      var _user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./user */
      "./src/app/core/models/classes/user.ts");

      var Recruiter = /*#__PURE__*/function (_user__WEBPACK_IMPORT3) {
        _inherits(Recruiter, _user__WEBPACK_IMPORT3);

        var _super10 = _createSuper(Recruiter);

        function Recruiter(recruiter) {
          var _this6;

          _classCallCheck(this, Recruiter);

          _this6 = _super10.call(this, recruiter);
          _this6.firstPhoneNumber = recruiter.firstPhoneNumber;
          _this6.secondPhoneNumber = recruiter.secondPhoneNumber;
          _this6["function"] = recruiter["function"];
          _this6.manager = recruiter.manager;
          _this6.advertisements = recruiter.advertisements;
          _this6.civility = recruiter.civility;
          return _this6;
        }

        _createClass(Recruiter, [{
          key: "getValues",

          /**
           * get values
           */
          value: function getValues() {
            return {
              _id: this._id,
              firstPhoneNumber: this.firstPhoneNumber,
              secondPhoneNumber: this.secondPhoneNumber,
              "function": this["function"],
              firstName: this.firstName,
              lastName: this.lastName,
              email: this.email,
              civility: this.civility,
              picture: this.picture
            };
          }
        }, {
          key: "firstPhoneNumber",
          get: function get() {
            return this._firstPhoneNumber;
          },
          set: function set(firstPhoneNumber) {
            this._firstPhoneNumber = firstPhoneNumber;
          }
        }, {
          key: "secondPhoneNumber",
          get: function get() {
            return this._secondPhoneNumber;
          },
          set: function set(secondPhoneNumber) {
            this._secondPhoneNumber = secondPhoneNumber;
          }
        }, {
          key: "manager",
          get: function get() {
            return this._manager;
          },
          set: function set(manager) {
            this._manager = manager;
          }
        }, {
          key: "advertisements",
          get: function get() {
            return this._advertisements;
          },
          set: function set(advertisements) {
            this._advertisements = advertisements;
          }
        }, {
          key: "function",
          get: function get() {
            return this._function;
          },
          set: function set(fun) {
            this._function = fun;
          }
        }]);

        return Recruiter;
      }(_user__WEBPACK_IMPORTED_MODULE_0__["User"]);
      /***/

    },

    /***/
    "./src/app/core/models/classes/repertoire.ts":
    /*!***************************************************!*\
      !*** ./src/app/core/models/classes/repertoire.ts ***!
      \***************************************************/

    /*! exports provided: Repertoire */

    /***/
    function srcAppCoreModelsClassesRepertoireTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Repertoire", function () {
        return Repertoire;
      });

      var Repertoire = /*#__PURE__*/function () {
        function Repertoire(repertoire) {
          _classCallCheck(this, Repertoire);

          this._id = repertoire._id;
          this.name = repertoire.name;
        }

        _createClass(Repertoire, [{
          key: "_id",
          get: function get() {
            return this.id;
          },
          set: function set(id) {
            this.id = id;
          }
        }, {
          key: "name",
          get: function get() {
            return this._name;
          },
          set: function set(name) {
            this._name = name;
          }
        }]);

        return Repertoire;
      }();
      /***/

    },

    /***/
    "./src/app/core/models/classes/right.ts":
    /*!**********************************************!*\
      !*** ./src/app/core/models/classes/right.ts ***!
      \**********************************************/

    /*! exports provided: Right */

    /***/
    function srcAppCoreModelsClassesRightTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Right", function () {
        return Right;
      });

      var Right = /*#__PURE__*/function () {
        function Right(right) {
          _classCallCheck(this, Right);

          this._id = right._id;
          this.name = right.name;
          this.description = right.description;
        }

        _createClass(Right, [{
          key: "_id",
          get: function get() {
            return this.id;
          },
          set: function set(id) {
            this.id = id;
          }
        }, {
          key: "name",
          get: function get() {
            return this._name;
          },
          set: function set(name) {
            this._name = name;
          }
        }, {
          key: "description",
          get: function get() {
            return this._description;
          },
          set: function set(description) {
            this._description = description;
          }
        }]);

        return Right;
      }();
      /***/

    },

    /***/
    "./src/app/core/models/classes/role.ts":
    /*!*********************************************!*\
      !*** ./src/app/core/models/classes/role.ts ***!
      \*********************************************/

    /*! exports provided: Role */

    /***/
    function srcAppCoreModelsClassesRoleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Role", function () {
        return Role;
      });

      var Role = /*#__PURE__*/function () {
        function Role(role) {
          _classCallCheck(this, Role);

          this._id = role._id;
          this.name = role.name;
          this.description = role.description;
          this.rights = role.rights;
          this.isSystem = role.isSystem;
        }

        _createClass(Role, [{
          key: "_id",
          get: function get() {
            return this.id;
          },
          set: function set(id) {
            this.id = id;
          }
        }, {
          key: "name",
          get: function get() {
            return this._name;
          },
          set: function set(name) {
            this._name = name;
          }
        }, {
          key: "description",
          get: function get() {
            return this._description;
          },
          set: function set(description) {
            this._description = description;
          }
        }, {
          key: "rights",
          get: function get() {
            return this._rights;
          },
          set: function set(rights) {
            this._rights = rights;
          }
        }, {
          key: "isSystem",
          get: function get() {
            return this._isSystem;
          },
          set: function set(isSystem) {
            this._isSystem = isSystem;
          }
        }]);

        return Role;
      }();
      /***/

    },

    /***/
    "./src/app/core/models/classes/skill.ts":
    /*!**********************************************!*\
      !*** ./src/app/core/models/classes/skill.ts ***!
      \**********************************************/

    /*! exports provided: Skill */

    /***/
    function srcAppCoreModelsClassesSkillTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Skill", function () {
        return Skill;
      });
      /* harmony import */


      var _repertoire__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./repertoire */
      "./src/app/core/models/classes/repertoire.ts");

      var Skill = /*#__PURE__*/function (_repertoire__WEBPACK_8) {
        _inherits(Skill, _repertoire__WEBPACK_8);

        var _super11 = _createSuper(Skill);

        function Skill(skill) {
          _classCallCheck(this, Skill);

          return _super11.call(this, skill);
        }

        return Skill;
      }(_repertoire__WEBPACK_IMPORTED_MODULE_0__["Repertoire"]);
      /***/

    },

    /***/
    "./src/app/core/models/classes/softSkills.ts":
    /*!***************************************************!*\
      !*** ./src/app/core/models/classes/softSkills.ts ***!
      \***************************************************/

    /*! exports provided: SoftSkills */

    /***/
    function srcAppCoreModelsClassesSoftSkillsTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SoftSkills", function () {
        return SoftSkills;
      });
      /* harmony import */


      var _repertoire__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./repertoire */
      "./src/app/core/models/classes/repertoire.ts");

      var SoftSkills = /*#__PURE__*/function (_repertoire__WEBPACK_9) {
        _inherits(SoftSkills, _repertoire__WEBPACK_9);

        var _super12 = _createSuper(SoftSkills);

        function SoftSkills(softSkill) {
          _classCallCheck(this, SoftSkills);

          return _super12.call(this, softSkill);
        }

        return SoftSkills;
      }(_repertoire__WEBPACK_IMPORTED_MODULE_0__["Repertoire"]);
      /***/

    },

    /***/
    "./src/app/core/models/classes/user.ts":
    /*!*********************************************!*\
      !*** ./src/app/core/models/classes/user.ts ***!
      \*********************************************/

    /*! exports provided: User */

    /***/
    function srcAppCoreModelsClassesUserTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "User", function () {
        return User;
      });

      var User = /*#__PURE__*/function () {
        // protected _candidate: Candidate;
        // protected _recruiter: Recruiter;
        // protected _manager: Manager;
        // protected _recruiters: Recruiter[];
        function User(user) {
          _classCallCheck(this, User);

          this._id = user._id;
          this.fullName = user.firstName + ' ' + user.lastName;
          this.firstName = user.firstName;
          this.lastName = user.lastName;
          this.picture = user.picture;
          this.email = user.email;
          this.phoneNumber = user.phoneNumber;
          this.role = user.role;
          this.isActive = user.isActive;
          this.company = user.company;
          this.percentage = user.percentage;
          this._userRole = user._userRole;
          this._currentStep = user.currentStep; // this.candidate = user.candidate;
          // this.recruiter = user.recruiter;
          // this.manager = user.manager;
          // this.recruiter = user.recruiter;
          // this.recruiters = user.recruiters;
        }

        _createClass(User, [{
          key: "_id",
          get: function get() {
            return this.id;
          },
          set: function set(id) {
            this.id = id;
          }
        }, {
          key: "fullName",
          get: function get() {
            return this._fullName;
          },
          set: function set(fullName) {
            this._fullName = fullName;
          }
        }, {
          key: "firstName",
          get: function get() {
            return this._firstName;
          },
          set: function set(firstName) {
            this._firstName = firstName;
          }
        }, {
          key: "lastName",
          get: function get() {
            return this._lastName;
          },
          set: function set(lastName) {
            this._lastName = lastName;
          }
        }, {
          key: "picture",
          get: function get() {
            return this._picture;
          },
          set: function set(picture) {
            this._picture = picture;
          }
        }, {
          key: "email",
          get: function get() {
            return this._email;
          },
          set: function set(email) {
            this._email = email;
          }
        }, {
          key: "phoneNumber",
          get: function get() {
            return this._phoneNumber;
          },
          set: function set(phoneNumber) {
            this._phoneNumber = phoneNumber;
          }
        }, {
          key: "role",
          get: function get() {
            return this._role;
          },
          set: function set(role) {
            this._role = role;
          }
        }, {
          key: "isActive",
          get: function get() {
            return this._isActive;
          },
          set: function set(isActive) {
            this._isActive = isActive;
          }
        }, {
          key: "civility",
          get: function get() {
            return this._civility;
          },
          set: function set(civility) {
            this._civility = civility;
          }
        }, {
          key: "company",
          get: function get() {
            return this._company;
          },
          set: function set(company) {
            this._company = company;
          }
        }, {
          key: "percentage",
          get: function get() {
            return this._percentage;
          },
          set: function set(percentage) {
            this._percentage = percentage;
          }
        }, {
          key: "currentStep",
          get: function get() {
            return this._currentStep;
          },
          set: function set(currentStep) {
            this._currentStep = currentStep;
          }
        }, {
          key: "userRole",
          get: function get() {
            return this._userRole;
          },
          set: function set(userRole) {
            this.userRole = userRole;
          }
        }]);

        return User;
      }();
      /***/

    },

    /***/
    "./src/app/core/models/classes/value.ts":
    /*!**********************************************!*\
      !*** ./src/app/core/models/classes/value.ts ***!
      \**********************************************/

    /*! exports provided: Value */

    /***/
    function srcAppCoreModelsClassesValueTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Value", function () {
        return Value;
      });
      /* harmony import */


      var _repertoire__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./repertoire */
      "./src/app/core/models/classes/repertoire.ts");

      var Value = /*#__PURE__*/function (_repertoire__WEBPACK_10) {
        _inherits(Value, _repertoire__WEBPACK_10);

        var _super13 = _createSuper(Value);

        function Value(value) {
          _classCallCheck(this, Value);

          return _super13.call(this, value);
        }

        return Value;
      }(_repertoire__WEBPACK_IMPORTED_MODULE_0__["Repertoire"]);
      /***/

    },

    /***/
    "./src/app/core/services/addapters/loader.service.ts":
    /*!***********************************************************!*\
      !*** ./src/app/core/services/addapters/loader.service.ts ***!
      \***********************************************************/

    /*! exports provided: LoaderService */

    /***/
    function srcAppCoreServicesAddaptersLoaderServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoaderService", function () {
        return LoaderService;
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


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");

      var LoaderService = function LoaderService() {
        _classCallCheck(this, LoaderService);

        this.isLoading = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
      };

      LoaderService.ctorParameters = function () {
        return [];
      };

      LoaderService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], LoaderService);
      /***/
    },

    /***/
    "./src/app/core/services/addapters/toast.service.ts":
    /*!**********************************************************!*\
      !*** ./src/app/core/services/addapters/toast.service.ts ***!
      \**********************************************************/

    /*! exports provided: ToastService */

    /***/
    function srcAppCoreServicesAddaptersToastServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToastService", function () {
        return ToastService;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var ToastService = /*#__PURE__*/function () {
        function ToastService(toastController) {
          _classCallCheck(this, ToastService);

          this.toastController = toastController;
        }
        /**
         * success message
         * @param message
         */


        _createClass(ToastService, [{
          key: "success",
          value: function success(message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      this.presentToast('success', message);

                    case 1:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
          /**
           * success message
           * @param message
           */

        }, {
          key: "error",
          value: function error(message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      this.presentToast('danger', message);

                    case 1:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
          /**
           * show toast message
           * @param color
           * @param message
           */

        }, {
          key: "presentToast",
          value: function presentToast(color, message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var toast;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.toastController.create({
                        message: message,
                        duration: 2000,
                        color: color,
                        position: 'top',
                        cssClass: 'customToast'
                      });

                    case 2:
                      toast = _context4.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }]);

        return ToastService;
      }();

      ToastService.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
        }];
      };

      ToastService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], ToastService);
      /***/
    },

    /***/
    "./src/app/core/services/addapters/trans.service.ts":
    /*!**********************************************************!*\
      !*** ./src/app/core/services/addapters/trans.service.ts ***!
      \**********************************************************/

    /*! exports provided: TransService */

    /***/
    function srcAppCoreServicesAddaptersTransServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TransService", function () {
        return TransService;
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


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

      var TransService = /*#__PURE__*/function () {
        function TransService(translateService) {
          _classCallCheck(this, TransService);

          this.translateService = translateService;
        }
        /**
         * translate
         * @param value
         * @param prefix
         */


        _createClass(TransService, [{
          key: "translate",
          value: function translate(value) {
            var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'api.';
            return this.translateService.instant(prefix + value);
          }
        }]);

        return TransService;
      }();

      TransService.ctorParameters = function () {
        return [{
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]
        }];
      };

      TransService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], TransService);
      /***/
    },

    /***/
    "./src/app/core/services/crud/advertisement.service.ts":
    /*!*************************************************************!*\
      !*** ./src/app/core/services/crud/advertisement.service.ts ***!
      \*************************************************************/

    /*! exports provided: AdvertisementService */

    /***/
    function srcAppCoreServicesCrudAdvertisementServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdvertisementService", function () {
        return AdvertisementService;
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


      var _models_classes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../models/classes */
      "./src/app/core/models/classes/index.ts");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var _global_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../global/api.service */
      "./src/app/core/services/global/api.service.ts");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _addapters_toast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../addapters/toast.service */
      "./src/app/core/services/addapters/toast.service.ts");
      /* harmony import */


      var _addapters_trans_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../addapters/trans.service */
      "./src/app/core/services/addapters/trans.service.ts");
      /* harmony import */


      var _global_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../global/auth.service */
      "./src/app/core/services/global/auth.service.ts");

      var AdvertisementService = /*#__PURE__*/function () {
        function AdvertisementService(apiService, toastService, transService, authService) {
          _classCallCheck(this, AdvertisementService);

          this.apiService = apiService;
          this.toastService = toastService;
          this.transService = transService;
          this.authService = authService;
          this.advertisements = [];
          this.advertisement = new _models_classes__WEBPACK_IMPORTED_MODULE_2__["Advertisement"]({});
          this.$percentage = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](0);
          this.percentage = this.$percentage.asObservable();
          this.$changed = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
          this.changed = this.$changed.asObservable();
        }

        _createClass(AdvertisementService, [{
          key: "setPercentage",
          value: function setPercentage(percentage) {
            this.$percentage.next(percentage);
          }
        }, {
          key: "getPercentage",
          value: function getPercentage() {
            return this.$percentage.value;
          }
        }, {
          key: "setChanges",
          value: function setChanges() {
            this.$changed.next(true);
          }
          /**
           * add advetisement
           */

        }, {
          key: "addAdvertisement",
          value: function addAdvertisement() {
            var _this7 = this;

            return this.apiService.post('matching-ms/advertisements', this.advertisement.toJson()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (x) {
              _this7.toastService.success('Annonce créée avec succès');
            }));
          }
          /**
           * get advertisements
           * @param search
           */

        }, {
          key: "read",
          value: function read(search) {
            var _this8 = this;

            var limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpParams"]();

            if (search) {
              params = params.append('search', search);
            }

            if (limit > 0) {
              params = params.append('limit', limit.toString());
            }

            return this.apiService.get('matching-ms/advertisements', params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (x) {
              _this8.advertisements = x.data;
              console.log(x.data);
            }));
          }
          /**
           * get only advertissement by his creator
           * @param id
           * @returns
           */

        }, {
          key: "getAdvetissementByCreator",
          value: function getAdvetissementByCreator() {
            return this.apiService.get('matching-ms/advertisements/all/active');
          }
          /**
           * get preview advertissement
           * @param id
           * @returns
           */

        }, {
          key: "shwoAdvertissement",
          value: function shwoAdvertissement(advertissementId) {
            return this.apiService.get("matching-ms/advertisements/".concat(advertissementId));
          }
          /**
           * get advertisements
           * @param search
           */

        }, {
          key: "readOne",
          value: function readOne(id) {
            var _this9 = this;

            return this.apiService.get("matching-ms/advertisements/".concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (x) {
              _this9.advertisement = x;
            }));
          }
          /**
           * get advertisements
           * @param search
           */

        }, {
          key: "readDetails",
          value: function readDetails(id) {
            var _this10 = this;

            return this.apiService.get("matching-ms/advertisements/".concat(id, "/details")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (x) {
              _this10.advertisement = x;
            }));
          }
          /**
           * update missions
           * @param advertisementId
           * @param missions
           */

        }, {
          key: "updateMissions",
          value: function updateMissions(advertisementId, values) {
            var _this11 = this;

            return this.apiService.put("matching-ms/advertisements/".concat(advertisementId, "/missions"), values).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (x) {
              _this11.advertisement = Object.assign(_this11.advertisement, values);

              _this11.toastService.success(_this11.transService.translate('update_success'));
            }));
          }
          /**
           *  update started date
           * @param advertisementId
           * @param startedDate
           */

        }, {
          key: "updateStartedDate",
          value: function updateStartedDate(advertisementId, values) {
            var _this12 = this;

            return this.apiService.put("matching-ms/advertisements/".concat(advertisementId, "/started-date"), values).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (x) {
              _this12.advertisement = Object.assign(_this12.advertisement, values);

              _this12.toastService.success(_this12.transService.translate('update_success'));
            }));
          }
        }, {
          key: "updateStatus",
          value: function updateStatus(advertisementId, values) {
            var _this13 = this;

            return this.apiService.put("matching-ms/advertisements/".concat(advertisementId, "/status"), values).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (x) {
              _this13.advertisement = Object.assign(_this13.advertisement, values);

              _this13.toastService.success(_this13.transService.translate('update_success'));
            }));
          }
          /**
           *  update tasks
           * @param advertisementId
           * @param startedDate
           */

        }, {
          key: "updateTasks",
          value: function updateTasks(advertisementId, values) {
            var _this14 = this;

            return this.apiService.put("matching-ms/advertisements/".concat(advertisementId, "/tasks"), values).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (x) {
              _this14.advertisement = Object.assign(_this14.advertisement, values);

              _this14.toastService.success(_this14.transService.translate('update_success'));
            }));
          }
          /**
           *  update profile
           * @param advertisementId
           * @param startedDate
           */

        }, {
          key: "updateProfile",
          value: function updateProfile(advertisementId, values) {
            var _this15 = this;

            return this.apiService.put("matching-ms/advertisements/".concat(advertisementId, "/profile"), values).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (x) {
              _this15.advertisement = Object.assign(_this15.advertisement, values);

              _this15.toastService.success(_this15.transService.translate('update_success'));
            }));
          }
        }]);

        return AdvertisementService;
      }();

      AdvertisementService.ctorParameters = function () {
        return [{
          type: _global_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
        }, {
          type: _addapters_toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"]
        }, {
          type: _addapters_trans_service__WEBPACK_IMPORTED_MODULE_8__["TransService"]
        }, {
          type: _global_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"]
        }];
      };

      AdvertisementService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], AdvertisementService);
      /***/
    },

    /***/
    "./src/app/core/services/crud/candidate.service.ts":
    /*!*********************************************************!*\
      !*** ./src/app/core/services/crud/candidate.service.ts ***!
      \*********************************************************/

    /*! exports provided: CandidateService */

    /***/
    function srcAppCoreServicesCrudCandidateServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CandidateService", function () {
        return CandidateService;
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


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var _global_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../global/api.service */
      "./src/app/core/services/global/api.service.ts");
      /* harmony import */


      var _models_classes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../models/classes */
      "./src/app/core/models/classes/index.ts");
      /* harmony import */


      var _utils_localStorage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../utils/localStorage */
      "./src/app/core/utils/localStorage.ts");

      var CandidateService = /*#__PURE__*/function () {
        function CandidateService(apiService) {
          _classCallCheck(this, CandidateService);

          this.apiService = apiService;
          this.candidate = new _models_classes__WEBPACK_IMPORTED_MODULE_4__["Candidate"]({});
          this.$percentage = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](0);
          this.percentage = this.$percentage.asObservable();
          this.$changes = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
          this.changes = this.$changes.asObservable();
        }

        _createClass(CandidateService, [{
          key: "setPercentage",
          value: function setPercentage(percentage) {
            this.$percentage.next(percentage);
          }
        }, {
          key: "setChanges",
          value: function setChanges(change) {
            this.$changes.next(change);
          }
          /**
           * user steper ws
           */

        }, {
          key: "changeInfos",
          value: function changeInfos(values) {
            return this.apiService.put('account-ms/candidats/profile/change-infos', values);
          }
        }, {
          key: "shwoProfil",
          value: function shwoProfil(candidateId) {
            return this.apiService.get("account-ms/candidats/".concat(candidateId));
          }
          /**
           * create profile
           */
          // createProfile() {
          //   return this.apiService.post('candidates/profile', this.candidate);
          // }

          /**
           * update candidate infos
           * @param infos
           */

        }, {
          key: "updateInfos",
          value: function updateInfos(infos) {
            return this.apiService.put('account-ms/candidats/profile/infos', infos);
          }
          /**
           * update candidate goals
           * @param goals
           */

        }, {
          key: "updateGoals",
          value: function updateGoals(goals) {
            return this.apiService.put('account-ms/candidats/profile/goals', goals);
          }
          /**
           * update candidate video
           * @param goals
           */

        }, {
          key: "updateVideo",
          value: function updateVideo(video) {
            return this.apiService.put('account-ms/candidats/profile/video', video);
          }
          /**
           * update candidate experiences
           * @param experiences
           */

        }, {
          key: "updateExperience",
          value: function updateExperience(experiences) {
            return this.apiService.put('account-ms/candidats/profile/experiences', experiences);
          }
          /**
           * update candidate trainings
           * @param experiences
           */

        }, {
          key: "updateTraining",
          value: function updateTraining(trainings) {
            return this.apiService.put('account-ms/candidats/profile/trainings', trainings);
          }
          /**
           * update candidate cv
           * @param cv
           */

        }, {
          key: "updateCV",
          value: function updateCV(cv) {
            return this.apiService.put('account-ms/candidats/profile/cv', {
              cv: cv
            });
          }
          /**
           * update candidate languages
           * @param languages
           */

        }, {
          key: "updateLanguage",
          value: function updateLanguage(languages) {
            return this.apiService.put('account-ms/candidats/profile/language', languages);
          }
          /**
           * update candidate soft skills
           * @param skills
           */

        }, {
          key: "updateSoftSkills",
          value: function updateSoftSkills(skills) {
            return this.apiService.put('account-ms/candidats/profile/soft-skills', skills);
          }
          /**
           * update candidate soft skills
           * @param social
           */

        }, {
          key: "updateSocialNetworks",
          value: function updateSocialNetworks(social) {
            return this.apiService.put('account-ms/candidats/profile/social-network', social);
          }
          /**
           * update candidate soft skills
           * @param languages
           */

        }, {
          key: "updatePicture",
          value: function updatePicture(values) {
            return this.apiService.post('account-ms/candidats/picture', values);
          }
        }, {
          key: "clearCandidate",
          value: function clearCandidate() {
            this.candidate = new _models_classes__WEBPACK_IMPORTED_MODULE_4__["Candidate"]({});
            this.setPercentage(0);

            _utils_localStorage__WEBPACK_IMPORTED_MODULE_5__["LocalStorage"].clear();
          }
        }]);

        return CandidateService;
      }();

      CandidateService.ctorParameters = function () {
        return [{
          type: _global_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
        }];
      };

      CandidateService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], CandidateService);
      /***/
    },

    /***/
    "./src/app/core/services/crud/file.service.ts":
    /*!****************************************************!*\
      !*** ./src/app/core/services/crud/file.service.ts ***!
      \****************************************************/

    /*! exports provided: FileService */

    /***/
    function srcAppCoreServicesCrudFileServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FileService", function () {
        return FileService;
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
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _addapters_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../addapters/toast.service */
      "./src/app/core/services/addapters/toast.service.ts");

      var FileService = /*#__PURE__*/function () {
        function FileService(apiService, toastService) {
          _classCallCheck(this, FileService);

          this.apiService = apiService;
          this.toastService = toastService;
        }
        /**
        * create file
        * @param file
        */


        _createClass(FileService, [{
          key: "create",
          value: function create(file) {
            var isBase64 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            var data;

            if (isBase64) {
              data = {
                file: file
              };
            } else {
              data = new FormData();
              data.append('file', file);
            }

            return this.apiService.post('setting-ms/files?base64=' + isBase64, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (x) {
              return {
                file: x.file,
                message: x.message
              };
            }));
          }
          /**
           * delete file by id
           * @param id
           */

        }, {
          key: "delete",
          value: function _delete(id) {
            return this.apiService["delete"]("files/".concat(id));
          }
        }]);

        return FileService;
      }();

      FileService.ctorParameters = function () {
        return [{
          type: _global_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
        }, {
          type: _addapters_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"]
        }];
      };

      FileService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], FileService);
      /***/
    },

    /***/
    "./src/app/core/services/global/api.service.ts":
    /*!*****************************************************!*\
      !*** ./src/app/core/services/global/api.service.ts ***!
      \*****************************************************/

    /*! exports provided: ApiService */

    /***/
    function srcAppCoreServicesGlobalApiServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ApiService", function () {
        return ApiService;
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


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _addapters_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../addapters/toast.service */
      "./src/app/core/services/addapters/toast.service.ts");
      /* harmony import */


      var _addapters_trans_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../addapters/trans.service */
      "./src/app/core/services/addapters/trans.service.ts");

      var ApiService = /*#__PURE__*/function () {
        function ApiService(http, toastService, transService) {
          var _this16 = this;

          _classCallCheck(this, ApiService);

          this.http = http;
          this.toastService = toastService;
          this.transService = transService;
          /**
           * throw exception
           * @param error
           */

          this.formatErrors = function (response) {
            // //global error message
            _this16.toastService.error(_this16.transService.translate(response.error.message));

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(response);
          };
        }
        /**
         * call ws via method post
         * @param path
         * @param body
         */


        _createClass(ApiService, [{
          key: "post",
          value: function post(path) {
            var body = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            return this.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].api_url).concat(path), body, {
              observe: 'response'
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (response) {
              return response.body;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.formatErrors));
          }
          /**
           * call ws via method patch
           * @param path
           * @param body
           */

        }, {
          key: "patch",
          value: function patch(path) {
            var body = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            return this.http.patch("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].api_url).concat(path), body, {
              observe: 'response'
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (response) {
              return response.body;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.formatErrors));
          }
          /**
           * call ws via method put
           * @param path
           * @param body
           */

        }, {
          key: "put",
          value: function put(path) {
            var body = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            delete body['id'];
            return this.http.put("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].api_url).concat(path), body, {
              observe: 'response'
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (response) {
              return response.body;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.formatErrors));
          }
          /**
           * call ws via method delete
           * @param path
           */

        }, {
          key: "delete",
          value: function _delete(path) {
            return this.http["delete"]("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].api_url).concat(path), {
              observe: 'response'
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (response) {
              return response.body;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.formatErrors));
          }
          /**
           * call ws via method get
           * @param path
           * @param params
           */

        }, {
          key: "get",
          value: function get(path) {
            var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
            var option = {};

            if (params) {
              option = {
                params: params
              };
            }

            return this.http.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].api_url).concat(path), option);
          }
        }]);

        return ApiService;
      }();

      ApiService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _addapters_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"]
        }, {
          type: _addapters_trans_service__WEBPACK_IMPORTED_MODULE_7__["TransService"]
        }];
      };

      ApiService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], ApiService);
      /***/
    },

    /***/
    "./src/app/core/services/global/app.service.ts":
    /*!*****************************************************!*\
      !*** ./src/app/core/services/global/app.service.ts ***!
      \*****************************************************/

    /*! exports provided: AppService */

    /***/
    function srcAppCoreServicesGlobalAppServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppService", function () {
        return AppService;
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


      var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./auth.service */
      "./src/app/core/services/global/auth.service.ts");
      /* harmony import */


      var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../utils */
      "./src/app/core/utils/index.ts");
      /* harmony import */


      var _crud_candidate_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../crud/candidate.service */
      "./src/app/core/services/crud/candidate.service.ts");

      var AppService = /*#__PURE__*/function () {
        function AppService(injector) {
          _classCallCheck(this, AppService);

          this.injector = injector;
        }

        _createClass(AppService, [{
          key: "initializeApp",
          value: function initializeApp() {
            var _this17 = this;

            return new Promise(function (resolve, reject) {
              var authService = _this17.injector.get(_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]);

              var candidateService = _this17.injector.get(_crud_candidate_service__WEBPACK_IMPORTED_MODULE_4__["CandidateService"]);

              authService.isLoggedIn().toPromise().then(function (res) {
                console.log(res);
                authService.user = res;

                if (res.userRole === 'Candidate') {
                  candidateService.candidate = res;

                  if (!res.completed) {
                    _utils__WEBPACK_IMPORTED_MODULE_3__["Redirection"].profileByStep(res.currentStep);
                  }
                }

                resolve();
              })["catch"](function (err) {
                resolve();
              });
            });
          }
        }]);

        return AppService;
      }();

      AppService.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
        }];
      };

      AppService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], AppService);
      /***/
    },

    /***/
    "./src/app/core/services/global/auth.service.ts":
    /*!******************************************************!*\
      !*** ./src/app/core/services/global/auth.service.ts ***!
      \******************************************************/

    /*! exports provided: AuthService */

    /***/
    function srcAppCoreServicesGlobalAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthService", function () {
        return AuthService;
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


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./api.service */
      "./src/app/core/services/global/api.service.ts");
      /* harmony import */


      var _models_classes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../models/classes */
      "./src/app/core/models/classes/index.ts");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../utils */
      "./src/app/core/utils/index.ts");
      /* harmony import */


      var _crud_candidate_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../crud/candidate.service */
      "./src/app/core/services/crud/candidate.service.ts");

      var AuthService = /*#__PURE__*/function () {
        function AuthService(apiService, candidateService) {
          _classCallCheck(this, AuthService);

          this.apiService = apiService;
          this.candidateService = candidateService;
          this.isLoged = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
          this.permissionsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
          this.permissions = this.permissionsSubject.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["distinctUntilChanged"])());
        }
        /**
         * change current user value
         * @param values
         */


        _createClass(AuthService, [{
          key: "setUser",
          value: function setUser(values) {
            this.user = new _models_classes__WEBPACK_IMPORTED_MODULE_4__["User"](values);
            this.candidateService.setPercentage(this.user.percentage ? this.user.percentage : 0);
          }
          /**
           * login
           * @param credentials
           */

        }, {
          key: "signIn",
          value: function signIn(credentials) {
            var _this18 = this;

            return this.apiService.post('account-ms/auth/sign-in', credentials).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (auth) {
              _this18.user = auth.user;

              if (auth.user.userRole === 'Candidate') {
                _this18.candidateService.candidate = auth.user;
              }

              _this18.isLoged.next(true);

              _this18.permissionsSubject.next(_this18.user.role.rights);

              _utils__WEBPACK_IMPORTED_MODULE_6__["JsonWebToken"].setCredentials(auth.token, auth.refreshToken);

              return auth;
            }));
          }
          /**
           * sign up
           * @param value
           */

        }, {
          key: "signUp",
          value: function signUp(value) {
            return this.apiService.post('account-ms/auth/sign-up', value);
          }
          /**
           * forgot password
           * @param value
           */

        }, {
          key: "forgotPassword",
          value: function forgotPassword(value) {
            return this.apiService.post('account-ms/auth/forgot-password', value);
          }
          /**
           * forgot password
           * @param password
           */

        }, {
          key: "resetPassword",
          value: function resetPassword(password) {
            return this.apiService.post('account-ms/auth/reset-password', {
              email: this.verificationEmail,
              verificationCode: this.verificationCode,
              password: password
            });
          }
          /**
           * forgot password
           * @param password
           * @param token
           */

        }, {
          key: "verification",
          value: function verification(value) {
            return this.apiService.post('account-ms/auth/verification', value);
          }
          /**
           * forgot password
           * @param password
           * @param token
           */

        }, {
          key: "verifyCode",
          value: function verifyCode(value) {
            return this.apiService.post('account-ms/auth/verify-code', value);
          }
          /**
           * check if authorized and get user info
           */

        }, {
          key: "isLoggedIn",
          value: function isLoggedIn() {
            var _this19 = this;

            return this.apiService.get('account-ms/auth/is-authorized').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (user) {
              console.log('From Service : ', user);

              _this19.setUser(user);

              _this19.permissionsSubject.next(user.role.rights);

              _this19.isLoged.next(true);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (err) {
              _this19.isLoged.next(false);

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(false);
            }));
          }
          /**
           *  update profile infos
           * @param values
           */

        }, {
          key: "updateProfile",
          value: function updateProfile(values) {
            var _this20 = this;

            return this.apiService.put('account-ms/auth/change-password', values).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (x) {
              _this20.user.email = values.email;
            }));
          }
          /**
           * update identity
           * @param values
           */

        }, {
          key: "updateIdentity",
          value: function updateIdentity(values) {
            var _this21 = this;

            return this.apiService.put('account-ms/auth/identity', values).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (x) {
              _this21.user.firstName = values.firstName;
              _this21.user.lastName = values.lastName;
              _this21.user = Object.assign(_this21.user, {
                firstPhoneNumber: values.firstPhoneNumber,
                secondPhoneNumber: values.secondPhoneNumber
              });
            }));
          }
          /**
           * logout
           */

        }, {
          key: "logout",
          value: function logout() {
            _utils__WEBPACK_IMPORTED_MODULE_6__["JsonWebToken"].destroyToken();

            this.candidateService.clearCandidate();
            this.isLoged.next(false);

            _utils__WEBPACK_IMPORTED_MODULE_6__["Redirection"].login();
          }
        }]);

        return AuthService;
      }();

      AuthService.ctorParameters = function () {
        return [{
          type: _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
        }, {
          type: _crud_candidate_service__WEBPACK_IMPORTED_MODULE_7__["CandidateService"]
        }];
      };

      AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], AuthService);
      /***/
    },

    /***/
    "./src/app/core/services/global/global.service.ts":
    /*!********************************************************!*\
      !*** ./src/app/core/services/global/global.service.ts ***!
      \********************************************************/

    /*! exports provided: GlobalService */

    /***/
    function srcAppCoreServicesGlobalGlobalServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GlobalService", function () {
        return GlobalService;
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


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./api.service */
      "./src/app/core/services/global/api.service.ts");

      var GlobalService = /*#__PURE__*/function () {
        function GlobalService(apiService) {
          _classCallCheck(this, GlobalService);

          this.apiService = apiService;
          this.values = [];
          this.availabilities = [];
          this.contracts = [];
          this.effectives = [];
          this.experiences = [];
          this.family = [];
          this.functions = [];
          this.jobModes = [];
          this.jobTypes = [];
          this.languages = [];
          this.languagesLevels = [];
          this.levelOfStudies = [];
          this.locations = [];
          this.managerialLevels = [];
          this.masteryLevels = [];
          this.softSkills = [];
          this.typeOfTrainings = [];
          this.activitySectors = [];
          this.programmingLanguages = [];
          this.logiciels = [];
          this.usageTitles = [];
          this.companies = [];
          this.recruiters = [];
        }
        /**
         * get all directories
         */


        _createClass(GlobalService, [{
          key: "getDirectories",
          value: function getDirectories() {
            var _this22 = this;

            return this.apiService.get('directory-ms/all').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (x) {
              _this22.values = x.values;
              _this22.availabilities = x.availabilities;
              _this22.contracts = x.contracts;
              _this22.effectives = x.effectives;
              _this22.experiences = x.experienceYears;
              _this22.family = x.family;
              _this22.functions = x.functions;
              _this22.jobModes = x.jobModes;
              _this22.jobTypes = x.jobTypes;
              _this22.languages = x.languages;
              _this22.levelOfStudies = x.levelOfStudies;
              _this22.locations = x.locations;
              _this22.managerialLevels = x.managerialLevels;
              _this22.masteryLevels = x.masteryLevels;
              _this22.softSkills = x.softSkills;
              _this22.typeOfTrainings = x.typeOfTrainings;
              _this22.activitySectors = x.activitySectors;
              _this22.languagesLevels = x.languageLevels;
              _this22.programmingLanguages = x.programmingLanguages;
              _this22.logiciels = x.logiciels;
              _this22.usageTitles = x.usageTitles;
            }));
          }
        }]);

        return GlobalService;
      }();

      GlobalService.ctorParameters = function () {
        return [{
          type: _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
        }];
      };

      GlobalService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], GlobalService);
      /***/
    },

    /***/
    "./src/app/core/services/global/notification.service.ts":
    /*!**************************************************************!*\
      !*** ./src/app/core/services/global/notification.service.ts ***!
      \**************************************************************/

    /*! exports provided: NotificationService */

    /***/
    function srcAppCoreServicesGlobalNotificationServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotificationService", function () {
        return NotificationService;
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


      var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./api.service */
      "./src/app/core/services/global/api.service.ts");

      var NotificationService = /*#__PURE__*/function () {
        function NotificationService(apiService) {
          _classCallCheck(this, NotificationService);

          this.apiService = apiService;
          this.notifications = [];
          this.countNotif = 0;
        }

        _createClass(NotificationService, [{
          key: "notificationShowing",
          value: function notificationShowing() {
            return this.apiService.put('realtime-ms/notifications/view');
          }
        }]);

        return NotificationService;
      }();

      NotificationService.ctorParameters = function () {
        return [{
          type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
        }];
      };

      NotificationService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], NotificationService);
      /***/
    },

    /***/
    "./src/app/core/services/global/socket.service.ts":
    /*!********************************************************!*\
      !*** ./src/app/core/services/global/socket.service.ts ***!
      \********************************************************/

    /*! exports provided: SocketService */

    /***/
    function srcAppCoreServicesGlobalSocketServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SocketService", function () {
        return SocketService;
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


      var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! socket.io-client */
      "./node_modules/socket.io-client/build/index.js");
      /* harmony import */


      var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./auth.service */
      "./src/app/core/services/global/auth.service.ts");
      /* harmony import */


      var _api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./api.service */
      "./src/app/core/services/global/api.service.ts");

      var SocketService = /*#__PURE__*/function () {
        function SocketService(authService, apiService) {
          _classCallCheck(this, SocketService);

          this.authService = authService;
          this.apiService = apiService;
        }
        /**
         * connection ws
         */


        _createClass(SocketService, [{
          key: "connection",
          value: function connection() {
            this.socket = Object(socket_io_client__WEBPACK_IMPORTED_MODULE_2__["io"])(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].SOCKET_ENDPOINT, {
              query: {
                userId: this.authService.user._id
              }
            });
          }
        }, {
          key: "deconnexion",
          value: function deconnexion() {
            this.socket.disconnect();
          } // signaler(userId) {
          //   return this.apiService.put(`matching-ms/black-lists/${userId}`);
          // }

          /**
           * send new event
           * @param event
           * @param data
           */

        }, {
          key: "emit",
          value: function emit(event, data) {
            this.userId = data.userId;
            console.log(this.userId);
            this.socket.emit(event, data);
          }
          /**
           * listen to event
           * @param event
           */

        }, {
          key: "on",
          value: function on(event) {
            var _this23 = this;

            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].create(function (observer) {
              _this23.socket.on(event, function (data) {
                observer.next(data);
              });
            });
          }
        }]);

        return SocketService;
      }();

      SocketService.ctorParameters = function () {
        return [{
          type: _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
        }, {
          type: _api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"]
        }];
      };

      SocketService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], SocketService);
      /***/
    },

    /***/
    "./src/app/core/services/guards/authorized.guard.ts":
    /*!**********************************************************!*\
      !*** ./src/app/core/services/guards/authorized.guard.ts ***!
      \**********************************************************/

    /*! exports provided: AuthorizedGuard */

    /***/
    function srcAppCoreServicesGuardsAuthorizedGuardTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthorizedGuard", function () {
        return AuthorizedGuard;
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


      var _global_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../global/auth.service */
      "./src/app/core/services/global/auth.service.ts");
      /* harmony import */


      var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../utils */
      "./src/app/core/utils/index.ts");

      var AuthorizedGuard = /*#__PURE__*/function () {
        function AuthorizedGuard(authService) {
          _classCallCheck(this, AuthorizedGuard);

          this.authService = authService;
        }

        _createClass(AuthorizedGuard, [{
          key: "canActivate",
          value: function canActivate(route, state) {
            if (!this.authService.isLoged.value) {
              _utils__WEBPACK_IMPORTED_MODULE_3__["Redirection"].login();

              return false;
            }

            return true;
          }
        }]);

        return AuthorizedGuard;
      }();

      AuthorizedGuard.ctorParameters = function () {
        return [{
          type: _global_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }];
      };

      AuthorizedGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], AuthorizedGuard);
      /***/
    },

    /***/
    "./src/app/core/services/guards/index.ts":
    /*!***********************************************!*\
      !*** ./src/app/core/services/guards/index.ts ***!
      \***********************************************/

    /*! exports provided: AuthorizedGuard, LoggedInGuard */

    /***/
    function srcAppCoreServicesGuardsIndexTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _authorized_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./authorized.guard */
      "./src/app/core/services/guards/authorized.guard.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AuthorizedGuard", function () {
        return _authorized_guard__WEBPACK_IMPORTED_MODULE_0__["AuthorizedGuard"];
      });
      /* harmony import */


      var _logged_in_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./logged-in.guard */
      "./src/app/core/services/guards/logged-in.guard.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "LoggedInGuard", function () {
        return _logged_in_guard__WEBPACK_IMPORTED_MODULE_1__["LoggedInGuard"];
      });
      /***/

    },

    /***/
    "./src/app/core/services/guards/logged-in.guard.ts":
    /*!*********************************************************!*\
      !*** ./src/app/core/services/guards/logged-in.guard.ts ***!
      \*********************************************************/

    /*! exports provided: LoggedInGuard */

    /***/
    function srcAppCoreServicesGuardsLoggedInGuardTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoggedInGuard", function () {
        return LoggedInGuard;
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


      var _global_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../global/auth.service */
      "./src/app/core/services/global/auth.service.ts");
      /* harmony import */


      var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../utils */
      "./src/app/core/utils/index.ts");

      var LoggedInGuard = /*#__PURE__*/function () {
        function LoggedInGuard(authService) {
          _classCallCheck(this, LoggedInGuard);

          this.authService = authService;
        }

        _createClass(LoggedInGuard, [{
          key: "canActivate",
          value: function canActivate(route, state) {
            var _route$queryParams = route.queryParams,
                loginToken = _route$queryParams.loginToken,
                loginRefreshToken = _route$queryParams.loginRefreshToken;

            if (this.authService.isLoged.value) {
              var role = this.authService.user.role.name;
              role === 'candidate' ? _utils__WEBPACK_IMPORTED_MODULE_3__["Redirection"].candidateDashboard() : _utils__WEBPACK_IMPORTED_MODULE_3__["Redirection"].dashboard();
              return false;
            }

            return true;
          }
        }]);

        return LoggedInGuard;
      }();

      LoggedInGuard.ctorParameters = function () {
        return [{
          type: _global_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }];
      };

      LoggedInGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], LoggedInGuard);
      /***/
    },

    /***/
    "./src/app/core/services/interceptors/http-token.interceptor.ts":
    /*!**********************************************************************!*\
      !*** ./src/app/core/services/interceptors/http-token.interceptor.ts ***!
      \**********************************************************************/

    /*! exports provided: HttpTokenInterceptor */

    /***/
    function srcAppCoreServicesInterceptorsHttpTokenInterceptorTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HttpTokenInterceptor", function () {
        return HttpTokenInterceptor;
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


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../utils */
      "./src/app/core/utils/index.ts");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/environments/environment */
      "./src/environments/environment.ts");

      var HttpTokenInterceptor = /*#__PURE__*/function () {
        function HttpTokenInterceptor() {
          _classCallCheck(this, HttpTokenInterceptor);
        }

        _createClass(HttpTokenInterceptor, [{
          key: "intercept",
          value: function intercept(request, next) {
            if (request.url.includes(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].api_url)) {
              var headersConfig = {
                'Access-Control-Allow-Origin': '*'
              };

              var token = _utils__WEBPACK_IMPORTED_MODULE_3__["JsonWebToken"].getToken();

              if (token) {
                headersConfig['Authorization'] = "Bearer ".concat(token);
              }

              request = request.clone({
                setHeaders: headersConfig
              });
            }

            return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
              switch (error.status) {
                case 401:
                  //todo if ! auth module
                  console.log('todo : refresh token');
                  break;
              }

              throw error;
            }));
          }
        }]);

        return HttpTokenInterceptor;
      }();

      HttpTokenInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], HttpTokenInterceptor);
      /***/
    },

    /***/
    "./src/app/core/services/interceptors/index.ts":
    /*!*****************************************************!*\
      !*** ./src/app/core/services/interceptors/index.ts ***!
      \*****************************************************/

    /*! exports provided: HttpTokenInterceptor */

    /***/
    function srcAppCoreServicesInterceptorsIndexTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _http_token_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./http-token.interceptor */
      "./src/app/core/services/interceptors/http-token.interceptor.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "HttpTokenInterceptor", function () {
        return _http_token_interceptor__WEBPACK_IMPORTED_MODULE_0__["HttpTokenInterceptor"];
      });
      /***/

    },

    /***/
    "./src/app/core/services/interceptors/loader-interceptor.service.ts":
    /*!**************************************************************************!*\
      !*** ./src/app/core/services/interceptors/loader-interceptor.service.ts ***!
      \**************************************************************************/

    /*! exports provided: LoaderInterceptorService */

    /***/
    function srcAppCoreServicesInterceptorsLoaderInterceptorServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoaderInterceptorService", function () {
        return LoaderInterceptorService;
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


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var _addapters_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../addapters/loader.service */
      "./src/app/core/services/addapters/loader.service.ts");

      var LoaderInterceptorService = /*#__PURE__*/function () {
        function LoaderInterceptorService(loaderService) {
          _classCallCheck(this, LoaderInterceptorService);

          this.loaderService = loaderService;
          this.requests = [];
        }

        _createClass(LoaderInterceptorService, [{
          key: "removeRequest",
          value: function removeRequest(req) {
            var i = this.requests.indexOf(req);

            if (i >= 0) {
              this.requests.splice(i, 1);
            }

            this.loaderService.isLoading.next(this.requests.length > 0);
          }
        }, {
          key: "intercept",
          value: function intercept(req, next) {
            var _this24 = this;

            this.requests.push(req);
            this.loaderService.isLoading.next(true);
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
              var subscription = next.handle(req).subscribe(function (event) {
                if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]) {
                  _this24.removeRequest(req);

                  observer.next(event);
                }
              }, function (err) {
                _this24.removeRequest(req);

                observer.error(err);
              }, function () {
                _this24.removeRequest(req);

                observer.complete();
              }); // remove request from queue when cancelled

              return function () {
                _this24.removeRequest(req);

                subscription.unsubscribe();
              };
            });
          }
        }]);

        return LoaderInterceptorService;
      }();

      LoaderInterceptorService.ctorParameters = function () {
        return [{
          type: _addapters_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"]
        }];
      };

      LoaderInterceptorService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], LoaderInterceptorService);
      /***/
    },

    /***/
    "./src/app/core/services/resolvers/data.resolver.ts":
    /*!**********************************************************!*\
      !*** ./src/app/core/services/resolvers/data.resolver.ts ***!
      \**********************************************************/

    /*! exports provided: DataResolver */

    /***/
    function srcAppCoreServicesResolversDataResolverTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DataResolver", function () {
        return DataResolver;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _global_global_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../global/global.service */
      "./src/app/core/services/global/global.service.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var DataResolver = /*#__PURE__*/function () {
        function DataResolver(globalService) {
          _classCallCheck(this, DataResolver);

          this.globalService = globalService;
        }

        _createClass(DataResolver, [{
          key: "resolve",
          value: function resolve() {
            return this.globalService.getDirectories();
          }
        }]);

        return DataResolver;
      }();

      DataResolver.ctorParameters = function () {
        return [{
          type: _global_global_service__WEBPACK_IMPORTED_MODULE_1__["GlobalService"]
        }];
      };

      DataResolver = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()], DataResolver);
      /***/
    },

    /***/
    "./src/app/core/utils/helper.ts":
    /*!**************************************!*\
      !*** ./src/app/core/utils/helper.ts ***!
      \**************************************/

    /*! exports provided: Helper */

    /***/
    function srcAppCoreUtilsHelperTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Helper", function () {
        return Helper;
      });

      var Helper = /*#__PURE__*/function () {
        function Helper() {
          _classCallCheck(this, Helper);
        }

        _createClass(Helper, null, [{
          key: "fetchDataJson",

          /**
           * fetch data from json file
           * @param cb
           * @param path
           */
          value: function fetchDataJson(cb, path) {
            var req = new XMLHttpRequest();
            req.open('GET', path);

            req.onload = function () {
              cb(JSON.parse(req.response));
            };

            req.send();
          }
          /**
           * get type
           * @param p
           */

        }, {
          key: "getType",
          value: function getType(p) {
            if (Array.isArray(p)) return 'array';else if (typeof p == 'string') return 'string';else if (typeof p == 'number') return 'number';else if (p != null && typeof p == 'object') return 'object';else return 'other';
          }
          /**
           * remove element from array
           * @param array
           * @param element
           * @param value
           */

        }, {
          key: "removeElement",
          value: function removeElement(array, element, value) {
            var index = array.findIndex(function (x) {
              return x[element].toString() === value;
            });

            if (index >= 0) {
              array.splice(index, 1);
            }
          }
          /**
           * calcule percentage
           * @param value
           * @param pers
           * @param skip
           */

        }, {
          key: "calculePercentage",
          value: function calculePercentage(value, percentage, skip) {
            Object.keys(value).forEach(function (key) {
              // console.log(value[key]);
              if (value[key]) {
                switch (Helper.getType(value[key])) {
                  case 'array':
                    // console.log('array calc')
                    if (Helper.getType(value[key][0]) === 'object') {
                      for (var _i = 0, _Object$keys = Object.keys(value[key][0]); _i < _Object$keys.length; _i++) {
                        var item = _Object$keys[_i];

                        if (value[key][0][item] && (Helper.getType(value[key][0][item]) !== 'array' || Helper.getType(value[key][0][item]) === 'array' && value[key][0][item].length > 0)) {
                          percentage += Number(skip);
                          if (key === 'logo' || key === 'video' || key === 'picture' || key === 'cv') break;
                        }
                      }
                    } else if (value[key].length > 0) {
                      percentage += Number(skip);
                    }

                    break;

                  case 'object':
                    // console.log('object calc')
                    for (var _i2 = 0, _Object$keys2 = Object.keys(value[key]); _i2 < _Object$keys2.length; _i2++) {
                      var _item = _Object$keys2[_i2];

                      if (value[key][_item] && (Helper.getType(value[key][_item]) !== 'array' || Helper.getType(value[key][_item]) === 'array' && value[key][_item].length > 0)) {
                        percentage += Number(skip);
                        if (key === 'logo' || key === 'video' || key === 'picture' || key === 'cv') break;
                      }
                    }

                    break;

                  case 'string':
                    percentage += Number(skip);
                    break;

                  case 'number':
                    percentage += Number(skip);
                    break;
                }
              }
            }); // console.log(percentage);

            return percentage;
          }
          /**
           * class object to json
           * @param properties
           */

        }, {
          key: "objectToString",
          value: function objectToString(properties, object) {
            var val = {};
            properties.forEach(function (item) {
              if (object[item]) {
                val[item] = object[item];
              }
            });
            return val;
          }
        }, {
          key: "getObjectValues",
          value: function getObjectValues(obj, properties) {
            var val = {};
            properties.forEach(function (item) {
              if (obj[item]) {
                val[item] = obj[item];
              }
            });
            return val;
          }
        }]);

        return Helper;
      }();
      /***/

    },

    /***/
    "./src/app/core/utils/index.ts":
    /*!*************************************!*\
      !*** ./src/app/core/utils/index.ts ***!
      \*************************************/

    /*! exports provided: Helper, JsonWebToken, LocalStorage, Redirection */

    /***/
    function srcAppCoreUtilsIndexTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./helper */
      "./src/app/core/utils/helper.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Helper", function () {
        return _helper__WEBPACK_IMPORTED_MODULE_0__["Helper"];
      });
      /* harmony import */


      var _jsonWebToken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./jsonWebToken */
      "./src/app/core/utils/jsonWebToken.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "JsonWebToken", function () {
        return _jsonWebToken__WEBPACK_IMPORTED_MODULE_1__["JsonWebToken"];
      });
      /* harmony import */


      var _localStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./localStorage */
      "./src/app/core/utils/localStorage.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "LocalStorage", function () {
        return _localStorage__WEBPACK_IMPORTED_MODULE_2__["LocalStorage"];
      });
      /* harmony import */


      var _redirection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./redirection */
      "./src/app/core/utils/redirection.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Redirection", function () {
        return _redirection__WEBPACK_IMPORTED_MODULE_3__["Redirection"];
      });
      /***/

    },

    /***/
    "./src/app/core/utils/jsonWebToken.ts":
    /*!********************************************!*\
      !*** ./src/app/core/utils/jsonWebToken.ts ***!
      \********************************************/

    /*! exports provided: JsonWebToken */

    /***/
    function srcAppCoreUtilsJsonWebTokenTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JsonWebToken", function () {
        return JsonWebToken;
      });
      /* harmony import */


      var _localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./localStorage */
      "./src/app/core/utils/localStorage.ts");

      var JsonWebToken = /*#__PURE__*/function () {
        function JsonWebToken() {
          _classCallCheck(this, JsonWebToken);
        }

        _createClass(JsonWebToken, null, [{
          key: "getToken",

          /**
             * get token
             */
          value: function getToken() {
            return _localStorage__WEBPACK_IMPORTED_MODULE_0__["LocalStorage"].getItem('token');
          }
          /**
           * get refresh token
           */

        }, {
          key: "getRefreshToken",
          value: function getRefreshToken() {
            return _localStorage__WEBPACK_IMPORTED_MODULE_0__["LocalStorage"].getItem('refresh-token');
          }
          /**
           * set token
           * @param token
           */

        }, {
          key: "setToken",
          value: function setToken(token) {
            _localStorage__WEBPACK_IMPORTED_MODULE_0__["LocalStorage"].setItem('token', token);
          }
          /**
           * set refresh token
           * @param refreshToken
           */

        }, {
          key: "setRefreshToken",
          value: function setRefreshToken(refreshToken) {
            _localStorage__WEBPACK_IMPORTED_MODULE_0__["LocalStorage"].setItem('refresh-token', refreshToken);
          }
          /**
           * set token & refreshtoken
           * @param token
           * @param refreshToken
           */

        }, {
          key: "setCredentials",
          value: function setCredentials(token, refreshToken) {
            JsonWebToken.setToken(token);
            JsonWebToken.setRefreshToken(refreshToken);
          }
          /**
           * destroy token & refresh token
           */

        }, {
          key: "destroyToken",
          value: function destroyToken() {
            _localStorage__WEBPACK_IMPORTED_MODULE_0__["LocalStorage"].removeItem('token');

            _localStorage__WEBPACK_IMPORTED_MODULE_0__["LocalStorage"].removeItem('refresh-token');
          }
        }]);

        return JsonWebToken;
      }();
      /***/

    },

    /***/
    "./src/app/core/utils/localStorage.ts":
    /*!********************************************!*\
      !*** ./src/app/core/utils/localStorage.ts ***!
      \********************************************/

    /*! exports provided: LocalStorage */

    /***/
    function srcAppCoreUtilsLocalStorageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LocalStorage", function () {
        return LocalStorage;
      });

      var LocalStorage = /*#__PURE__*/function () {
        function LocalStorage() {
          _classCallCheck(this, LocalStorage);
        }

        _createClass(LocalStorage, null, [{
          key: "getItem",

          /**
           * get item from local storage
           * @param key
           */
          value: function getItem(key) {
            return LocalStorage.local.getItem(key);
          }
          /**
           * set item to localstorage
           * @param key
           * @param value
           */

        }, {
          key: "setItem",
          value: function setItem(key, value) {
            return LocalStorage.local.setItem(key, value);
          }
          /**
           * remove item
           * @param key
           */

        }, {
          key: "removeItem",
          value: function removeItem(key) {
            LocalStorage.local.removeItem(key);
          }
          /**
           * clear local storage
           */

        }, {
          key: "clear",
          value: function clear() {
            LocalStorage.local.clear();
          }
        }]);

        return LocalStorage;
      }();

      LocalStorage.local = window.localStorage;
      /***/
    },

    /***/
    "./src/app/core/utils/redirection.ts":
    /*!*******************************************!*\
      !*** ./src/app/core/utils/redirection.ts ***!
      \*******************************************/

    /*! exports provided: Redirection */

    /***/
    function srcAppCoreUtilsRedirectionTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Redirection", function () {
        return Redirection;
      });

      var Redirection = /*#__PURE__*/function () {
        function Redirection() {
          _classCallCheck(this, Redirection);
        }

        _createClass(Redirection, null, [{
          key: "login",

          /**
           * redirect to login page
           */
          value: function login() {
            Redirection.router.navigate(['/auth/sign-in']);
          }
          /**
           * redirect to verification page
           */

        }, {
          key: "verification",
          value: function verification() {
            Redirection.router.navigate(['/auth/verification']);
          }
          /**
           * redirect to congratulation page
           */

        }, {
          key: "congratulation",
          value: function congratulation() {
            Redirection.router.navigate(['/auth/congratulation']);
          }
          /**
           * redirect to reset password page
           */

        }, {
          key: "resetPassword",
          value: function resetPassword() {
            Redirection.router.navigate(['/auth/reset-password']);
          }
          /**
           * redirect to dashboard page
           */

        }, {
          key: "dashboard",
          value: function dashboard() {
            Redirection.router.navigate(['/dashboard']);
          }
          /**
           * candidate dashboard
           */

        }, {
          key: "candidateDashboard",
          value: function candidateDashboard() {
            Redirection.router.navigate(['/dashboard/plug-recruiter']);
          }
          /**
           * redirect to dashboard page
           */

        }, {
          key: "profile",
          value: function profile() {
            Redirection.router.navigate(['/dashboard/profile']);
          }
          /**
           * redirect to dashboard page
           */

        }, {
          key: "addProfile",
          value: function addProfile() {
            Redirection.router.navigate(['/dashboard/profile/add-profil']);
          }
          /**
           * redirect to profile experiences page
           */

        }, {
          key: "profileExperiences",
          value: function profileExperiences() {
            Redirection.router.navigate(['/dashboard/profile/experience']);
          }
          /**
           * redirect to profile video page
           */

        }, {
          key: "profileVideo",
          value: function profileVideo() {
            Redirection.router.navigate(['/dashboard/profile/upload-video']);
          }
          /**
           * redirect to info plus page
           */

        }, {
          key: "infoPlus",
          value: function infoPlus() {
            Redirection.router.navigate(['/dashboard/profile/info-plus']);
          }
          /**
           * redirect to final step page
           */

        }, {
          key: "finalStep",
          value: function finalStep() {
            Redirection.router.navigate(['/dashboard/profile/final-steps']);
          }
          /**
           * redirect to recruiters page
           */

        }, {
          key: "recruiters",
          value: function recruiters() {
            Redirection.router.navigate(['/dashboard/recruiter']);
          }
          /**
           * redirect to recruiters page
           */

        }, {
          key: "advertisementExperiences",
          value: function advertisementExperiences() {
            Redirection.router.navigate(['/dashboard/advertisement/form/experience-required']);
          }
          /**
           * redirect to validate advertisement
           */

        }, {
          key: "validateAdvertisement",
          value: function validateAdvertisement() {
            Redirection.router.navigate(['/dashboard/advertisement/form/validate-advertisement']);
          }
          /**
           * redirect to advertisements
           */

        }, {
          key: "advertisements",
          value: function advertisements() {
            Redirection.router.navigate(['/dashboard/advertisement']);
          }
          /**
           * redirect to advertisements
           */

        }, {
          key: "values",
          value: function values() {
            Redirection.router.navigate(['/dashboard/profile/values']);
          }
          /**
           * redirect to job infos
           */

        }, {
          key: "jobInfo",
          value: function jobInfo() {
            Redirection.router.navigate(['/dashboard/profile/job-info']);
          }
          /**
           * redirect to about
           */

        }, {
          key: "about",
          value: function about() {
            Redirection.router.navigate(['/dashboard/about']);
          }
          /**
           * redirect to step by number
           * @param stepNumber
           */

        }, {
          key: "profileByStep",
          value: function profileByStep(stepNumber) {
            switch (stepNumber) {
              // case 1:
              //     this.profile();
              //     break;
              case 1:
                this.addProfile();
                break;

              case 2:
                this.jobInfo();
                break;

              case 3:
                this.profileExperiences();
                break;

              case 4:
                this.infoPlus();
                break;

              case 5:
                this.values();
                break;

              case 6:
                this.profileVideo();
                break;

              case 7:
                this.finalStep();
                break;

              default:
                this.profile();
                break;
            }
          }
        }]);

        return Redirection;
      }();
      /***/

    },

    /***/
    "./src/app/layouts/auth/auth.component.scss":
    /*!**************************************************!*\
      !*** ./src/app/layouts/auth/auth.component.scss ***!
      \**************************************************/

    /*! exports provided: default */

    /***/
    function srcAppLayoutsAuthAuthComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvYXV0aC9hdXRoLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/layouts/auth/auth.component.ts":
    /*!************************************************!*\
      !*** ./src/app/layouts/auth/auth.component.ts ***!
      \************************************************/

    /*! exports provided: AuthComponent */

    /***/
    function srcAppLayoutsAuthAuthComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthComponent", function () {
        return AuthComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var AuthComponent = /*#__PURE__*/function () {
        function AuthComponent() {
          _classCallCheck(this, AuthComponent);
        }

        _createClass(AuthComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AuthComponent;
      }();

      AuthComponent.ctorParameters = function () {
        return [];
      };

      AuthComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-auth',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./auth.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/auth/auth.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./auth.component.scss */
        "./src/app/layouts/auth/auth.component.scss"))["default"]]
      })], AuthComponent);
      /***/
    },

    /***/
    "./src/app/layouts/dashboard/dashboard.component.scss":
    /*!************************************************************!*\
      !*** ./src/app/layouts/dashboard/dashboard.component.scss ***!
      \************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppLayoutsDashboardDashboardComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/layouts/dashboard/dashboard.component.ts":
    /*!**********************************************************!*\
      !*** ./src/app/layouts/dashboard/dashboard.component.ts ***!
      \**********************************************************/

    /*! exports provided: DashboardComponent */

    /***/
    function srcAppLayoutsDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
        return DashboardComponent;
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


      var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/local-notifications/ngx */
      "./node_modules/@ionic-native/local-notifications/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var src_app_core_services_global_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/core/services/global/notification.service */
      "./src/app/core/services/global/notification.service.ts");
      /* harmony import */


      var src_app_core_services_global_socket_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/core/services/global/socket.service */
      "./src/app/core/services/global/socket.service.ts");
      /* harmony import */


      var src_app_core_services_global_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/core/services/global/auth.service */
      "./src/app/core/services/global/auth.service.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var DashboardComponent = /*#__PURE__*/function () {
        function DashboardComponent(socketService, notifService, authService, localNotifications, platform) {
          _classCallCheck(this, DashboardComponent);

          this.socketService = socketService;
          this.notifService = notifService;
          this.authService = authService;
          this.localNotifications = localNotifications;
          this.platform = platform;
          socketService.connection();
        }

        _createClass(DashboardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this25 = this;

            this.socketService.on('advertisementNotifications').subscribe(function (res) {
              _this25.notifService.countNotif = res.count;
              console.log(res);
              _this25.notifService.notifications = res.notifications.map(function (x) {
                if (x.type === 'match') {
                  var userName = _this25.authService.user._id === x.candidate._id ? {
                    firstName: x.recruiter.firstName,
                    lastName: x.recruiter.lastName
                  } : {
                    firstName: x.candidate.firstName,
                    lastName: x.candidate.lastName
                  };
                  return Object.assign(userName, {
                    time: x.time,
                    type: x.type,
                    _id: x._id
                  });
                }

                _this25.platform.ready().then(function () {
                  if (!x.viewed) {
                    _this25.localNotifications.schedule({
                      id: x._id,
                      title: 'Jobwinwin',
                      text: 'Le statut de votre annonce a été modifier',
                      sound: _this25.setSound()
                    });
                  }
                });

                return x;
              });
            }, function (err) {
              console.log(err);
            });
            this.socketService.on('newUserNotifications').subscribe(function (res) {
              _this25.platform.ready().then(function () {
                if (!res.viewed) {
                  _this25.localNotifications.schedule({
                    id: res._id,
                    title: 'Jobwinwin',
                    text: 'Une nouvelle annonce a été créée',
                    sound: _this25.setSound()
                  });
                }
              }); // this.localNotifications.schedule({
              //   id: res._id,
              //   title: 'Jobwinwin',
              //   text: `Votre annonce de DEV a été validée vous pouvez commencer à matcher avec des candidats`,
              //   sound: this.setSound(),
              // });


              console.log('push notifications');
            }, function (err) {
              console.log(err);
            });
          }
        }, {
          key: "setSound",
          value: function setSound() {
            if (this.platform.is('android')) {
              return 'file://assets/sounds/shame.mp3';
            } else {
              return 'file://assets/sounds/shame.mp3';
            }
          } // delayed_notification() {
          //   this.localNotifications.schedule({
          //     id: 1,
          //     title: 'Local ILocalNotification Example',
          //     text: 'Single ILocalNotification',
          //     sound: 'file://assets/mp3/goes-without-saying-608.mp3',
          //   });
          // }

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.socketService.deconnexion();
          }
        }]);

        return DashboardComponent;
      }();

      DashboardComponent.ctorParameters = function () {
        return [{
          type: src_app_core_services_global_socket_service__WEBPACK_IMPORTED_MODULE_4__["SocketService"]
        }, {
          type: src_app_core_services_global_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"]
        }, {
          type: src_app_core_services_global_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
        }, {
          type: _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_2__["LocalNotifications"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"]
        }];
      };

      DashboardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./dashboard.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/dashboard/dashboard.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./dashboard.component.scss */
        "./src/app/layouts/dashboard/dashboard.component.scss"))["default"]]
      })], DashboardComponent);
      /***/
    },

    /***/
    "./src/app/pages/about-jobwinwin/about-jobwinwin.component.scss":
    /*!**********************************************************************!*\
      !*** ./src/app/pages/about-jobwinwin/about-jobwinwin.component.scss ***!
      \**********************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesAboutJobwinwinAboutJobwinwinComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fib3V0LWpvYndpbndpbi9hYm91dC1qb2J3aW53aW4uY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/pages/about-jobwinwin/about-jobwinwin.component.ts":
    /*!********************************************************************!*\
      !*** ./src/app/pages/about-jobwinwin/about-jobwinwin.component.ts ***!
      \********************************************************************/

    /*! exports provided: AboutJobwinwinComponent */

    /***/
    function srcAppPagesAboutJobwinwinAboutJobwinwinComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AboutJobwinwinComponent", function () {
        return AboutJobwinwinComponent;
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

      var AboutJobwinwinComponent = /*#__PURE__*/function () {
        function AboutJobwinwinComponent(authService) {
          _classCallCheck(this, AboutJobwinwinComponent);

          this.authService = authService;
        }

        _createClass(AboutJobwinwinComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "goBack",
          value: function goBack() {
            if (this.authService.user.role.name === 'candidate') {
              src_app_core_utils__WEBPACK_IMPORTED_MODULE_3__["Redirection"].candidateDashboard();
            } else {
              src_app_core_utils__WEBPACK_IMPORTED_MODULE_3__["Redirection"].dashboard();
            }
          }
        }]);

        return AboutJobwinwinComponent;
      }();

      AboutJobwinwinComponent.ctorParameters = function () {
        return [{
          type: src_app_core_services_global_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }];
      };

      AboutJobwinwinComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about-jobwinwin',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./about-jobwinwin.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/about-jobwinwin/about-jobwinwin.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./about-jobwinwin.component.scss */
        "./src/app/pages/about-jobwinwin/about-jobwinwin.component.scss"))["default"]]
      })], AboutJobwinwinComponent);
      /***/
    },

    /***/
    "./src/app/pages/form-contact/form-contact.component.ts":
    /*!**************************************************************!*\
      !*** ./src/app/pages/form-contact/form-contact.component.ts ***!
      \**************************************************************/

    /*! exports provided: FormContactComponent */

    /***/
    function srcAppPagesFormContactFormContactComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormContactComponent", function () {
        return FormContactComponent;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_core_services_global_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/core/services/global/api.service */
      "./src/app/core/services/global/api.service.ts");
      /* harmony import */


      var src_app_core_services_addapters_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/core/services/addapters/toast.service */
      "./src/app/core/services/addapters/toast.service.ts");
      /* harmony import */


      var src_app_core_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/core/utils */
      "./src/app/core/utils/index.ts");

      var FormContactComponent = /*#__PURE__*/function () {
        function FormContactComponent(modalController, apiService, toastService) {
          _classCallCheck(this, FormContactComponent);

          this.modalController = modalController;
          this.apiService = apiService;
          this.toastService = toastService;
          this.initForm();
        }

        _createClass(FormContactComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
          /**
           * init contact form
           */

        }, {
          key: "initForm",
          value: function initForm() {
            this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
              subject: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
              message: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null)
            });
          }
          /**
           * send message to support
           */

        }, {
          key: "onSave",
          value: function onSave() {
            var _this26 = this;

            this.apiService.post('contact-ms/users-contacts', this.form.value).subscribe(function (response) {
              _this26.toastService.success('Merci de nous avoir contacté');

              src_app_core_utils__WEBPACK_IMPORTED_MODULE_6__["Redirection"].about();
            });
          }
        }]);

        return FormContactComponent;
      }();

      FormContactComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
        }, {
          type: src_app_core_services_global_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
        }, {
          type: src_app_core_services_addapters_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"]
        }];
      };

      FormContactComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-form-contact',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./form-contact.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/form-contact/form-contact.component.html"))["default"]
      })], FormContactComponent);
      /***/
    },

    /***/
    "./src/app/shared/components/file-uploader/file-uploader.component.scss":
    /*!******************************************************************************!*\
      !*** ./src/app/shared/components/file-uploader/file-uploader.component.scss ***!
      \******************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppSharedComponentsFileUploaderFileUploaderComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".logo {\n  width: 115px !important;\n  height: 115px !important;\n  border-radius: 100% !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZmlsZS11cGxvYWRlci9maWxlLXVwbG9hZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQXVCO0VBQ3ZCLHdCQUF3QjtFQUN4Qiw4QkFBOEI7QUFDbEMiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9maWxlLXVwbG9hZGVyL2ZpbGUtdXBsb2FkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nbyB7XG4gICAgd2lkdGg6IDExNXB4ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiAxMTVweCAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCUgIWltcG9ydGFudDtcbn0gIl19 */";
      /***/
    },

    /***/
    "./src/app/shared/components/file-uploader/file-uploader.component.ts":
    /*!****************************************************************************!*\
      !*** ./src/app/shared/components/file-uploader/file-uploader.component.ts ***!
      \****************************************************************************/

    /*! exports provided: FileUploaderComponent */

    /***/
    function srcAppSharedComponentsFileUploaderFileUploaderComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FileUploaderComponent", function () {
        return FileUploaderComponent;
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


      var src_app_core_services_crud_file_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/core/services/crud/file.service */
      "./src/app/core/services/crud/file.service.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var src_app_core_services_addapters_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/core/services/addapters/toast.service */
      "./src/app/core/services/addapters/toast.service.ts");

      var FileUploaderComponent = /*#__PURE__*/function () {
        function FileUploaderComponent(fileService, loadingController, toastService) {
          _classCallCheck(this, FileUploaderComponent);

          this.fileService = fileService;
          this.loadingController = loadingController;
          this.toastService = toastService;
          this.data = {
            file: null,
            type: 'video'
          };
          this.fileChanges = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        }
        /**
         * console.log('aaa);
         * @param files
         */


        _createClass(FileUploaderComponent, [{
          key: "onFileChange",
          value: function onFileChange(event) {
            var _this27 = this;

            var reader = new FileReader();
            var files = event.target.files;

            if (files && files.length) {
              var _files = _slicedToArray(files, 1),
                  file = _files[0];

              reader.readAsDataURL(file);

              reader.onload = function () {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this27, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                  var _this28 = this;

                  var loading;
                  return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) {
                      switch (_context5.prev = _context5.next) {
                        case 0:
                          _context5.next = 2;
                          return this.loadingController.create({});

                        case 2:
                          loading = _context5.sent;
                          _context5.next = 5;
                          return loading.present();

                        case 5:
                          this.data.file = null;
                          this.fileService.create(file).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () {
                            loading.dismiss();
                          })).subscribe(function (response) {
                            _this28.data = {
                              file: response.file,
                              type: _this28.data.type
                            };

                            _this28.fileChanges.emit(response.file);

                            _this28.toastService.success('Enregistré avec succès');

                            loading.dismiss();
                          });

                        case 7:
                        case "end":
                          return _context5.stop();
                      }
                    }
                  }, _callee5, this);
                }));
              };
            }
          }
        }, {
          key: "onFileChangeVideo",
          value: function onFileChangeVideo(event) {
            var _this29 = this;

            var reader = new FileReader();
            var files = event.target.files;

            if (files && files.length) {
              var _files2 = _slicedToArray(files, 1),
                  file = _files2[0];

              reader.readAsDataURL(file);

              reader.onload = function () {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this29, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
                  var _this30 = this;

                  var media;
                  return regeneratorRuntime.wrap(function _callee7$(_context7) {
                    while (1) {
                      switch (_context7.prev = _context7.next) {
                        case 0:
                          media = new Audio(reader.result.toString());

                          media.onloadedmetadata = function () {
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this30, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
                              var _this31 = this;

                              var loading;
                              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                                while (1) {
                                  switch (_context6.prev = _context6.next) {
                                    case 0:
                                      _context6.next = 2;
                                      return this.loadingController.create({});

                                    case 2:
                                      loading = _context6.sent;
                                      _context6.next = 5;
                                      return loading.present();

                                    case 5:
                                      this.data.file = null;

                                      if (!(media.duration > 30)) {
                                        _context6.next = 12;
                                        break;
                                      }

                                      this.toastService.error('Durée maximale de la vidéo : 30 secondes');
                                      loading.dismiss();
                                      return _context6.abrupt("return");

                                    case 12:
                                      this.fileService.create(file).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () {
                                        loading.dismiss();
                                      })).subscribe(function (response) {
                                        _this31.data = {
                                          file: response.file,
                                          type: _this31.data.type
                                        };

                                        _this31.fileChanges.emit(response.file);

                                        loading.dismiss();
                                      });

                                    case 13:
                                    case "end":
                                      return _context6.stop();
                                  }
                                }
                              }, _callee6, this);
                            }));
                          };

                        case 2:
                        case "end":
                          return _context7.stop();
                      }
                    }
                  }, _callee7);
                }));
              };
            }
          }
          /**
           *
           */

        }, {
          key: "onDelete",
          value: function onDelete() {
            var _this32 = this;

            this.fileService["delete"](this.data.file._id).subscribe(function (res) {
              _this32.data = Object.assign(_this32.data, {
                'file': null
              });

              _this32.fileChanges.emit(null);
            });
          }
        }]);

        return FileUploaderComponent;
      }();

      FileUploaderComponent.ctorParameters = function () {
        return [{
          type: src_app_core_services_crud_file_service__WEBPACK_IMPORTED_MODULE_2__["FileService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
        }, {
          type: src_app_core_services_addapters_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"]
        }];
      };

      FileUploaderComponent.propDecorators = {
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['data']
        }],
        fileChanges: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }]
      };
      FileUploaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-file-uploader',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./file-uploader.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/file-uploader/file-uploader.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./file-uploader.component.scss */
        "./src/app/shared/components/file-uploader/file-uploader.component.scss"))["default"]]
      })], FileUploaderComponent);
      /***/
    },

    /***/
    "./src/app/shared/components/index.ts":
    /*!********************************************!*\
      !*** ./src/app/shared/components/index.ts ***!
      \********************************************/

    /*! exports provided: PreviewAdvertisementComponent, PreviewCandidateComponent, UserImageComponent, FileUploaderComponent, MultiSelectComponent */

    /***/
    function srcAppSharedComponentsIndexTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _preview_advertisement_preview_advertisement_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./preview-advertisement/preview-advertisement.component */
      "./src/app/shared/components/preview-advertisement/preview-advertisement.component.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "PreviewAdvertisementComponent", function () {
        return _preview_advertisement_preview_advertisement_component__WEBPACK_IMPORTED_MODULE_0__["PreviewAdvertisementComponent"];
      });
      /* harmony import */


      var _preview_candidate_preview_candidate_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./preview-candidate/preview-candidate.component */
      "./src/app/shared/components/preview-candidate/preview-candidate.component.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "PreviewCandidateComponent", function () {
        return _preview_candidate_preview_candidate_component__WEBPACK_IMPORTED_MODULE_1__["PreviewCandidateComponent"];
      });
      /* harmony import */


      var _user_image_user_image_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./user-image/user-image.component */
      "./src/app/shared/components/user-image/user-image.component.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "UserImageComponent", function () {
        return _user_image_user_image_component__WEBPACK_IMPORTED_MODULE_2__["UserImageComponent"];
      });
      /* harmony import */


      var _file_uploader_file_uploader_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./file-uploader/file-uploader.component */
      "./src/app/shared/components/file-uploader/file-uploader.component.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "FileUploaderComponent", function () {
        return _file_uploader_file_uploader_component__WEBPACK_IMPORTED_MODULE_3__["FileUploaderComponent"];
      });
      /* harmony import */


      var _multi_select_multi_select_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./multi-select/multi-select.component */
      "./src/app/shared/components/multi-select/multi-select.component.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "MultiSelectComponent", function () {
        return _multi_select_multi_select_component__WEBPACK_IMPORTED_MODULE_4__["MultiSelectComponent"];
      });
      /***/

    },

    /***/
    "./src/app/shared/components/loader/loader.component.scss":
    /*!****************************************************************!*\
      !*** ./src/app/shared/components/loader/loader.component.scss ***!
      \****************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppSharedComponentsLoaderLoaderComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".loading-spinner {\n  background-color: #0000001f;\n  position: absolute;\n  width: 100%;\n  top: 0px;\n  left: 0px;\n  height: 100vh;\n  align-items: center;\n  justify-content: center;\n  display: grid;\n  z-index: 999 !important;\n}\n\n.loading-spinner {\n  align-self: end;\n}\n\n.loading-spinner .loader,\n.loading-spinner .loader:before,\n.loading-spinner .loader:after {\n  border-radius: 50%;\n  width: 2.5em;\n  height: 2.5em;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n  -webkit-animation: load7 1.8s infinite ease-in-out;\n  animation: load7 1.8s infinite ease-in-out;\n}\n\n.loading-spinner .loader {\n  color: #405A98;\n  font-size: 10px;\n  margin: 80px auto;\n  position: relative;\n  text-indent: -9999em;\n  transform: translateZ(0);\n  -webkit-animation-delay: -0.16s;\n  animation-delay: -0.16s;\n}\n\n.loading-spinner .loader:before,\n.loading-spinner .loader:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n}\n\n.loading-spinner .loader:before {\n  left: -3.5em;\n  -webkit-animation-delay: -0.32s;\n  animation-delay: -0.32s;\n}\n\n.loading-spinner .loader:after {\n  left: 3.5em;\n}\n\n@-webkit-keyframes load7 {\n  0%,\n  80%,\n  100% {\n    box-shadow: 0 2.5em 0 -1.3em;\n  }\n  40% {\n    box-shadow: 0 2.5em 0 0;\n  }\n}\n\n@keyframes load7 {\n  0%,\n  80%,\n  100% {\n    box-shadow: 0 2.5em 0 -1.3em;\n  }\n  40% {\n    box-shadow: 0 2.5em 0 0;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbG9hZGVyL2xvYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJCQUEyQjtFQUMzQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFFBQVE7RUFDUixTQUFTO0VBQ1QsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRkE7OztFQUtJLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtFQUNiLGlDQUFpQztFQUNqQyx5QkFBeUI7RUFDekIsa0RBQWtEO0VBQ2xELDBDQUEwQztBQUc5Qzs7QUFkQTtFQWNJLGNBQWM7RUFDZCxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFHcEIsd0JBQXdCO0VBQ3hCLCtCQUErQjtFQUMvQix1QkFBdUI7QUFJM0I7O0FBM0JBOztFQTJCSSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLE1BQU07QUFLVjs7QUFsQ0E7RUFnQ0ksWUFBWTtFQUNaLCtCQUErQjtFQUMvQix1QkFBdUI7QUFNM0I7O0FBeENBO0VBcUNJLFdBQVc7QUFPZjs7QUFMRTtFQUNFOzs7SUFHRSw0QkFBNEI7RUFRaEM7RUFORTtJQUNFLHVCQUF1QjtFQVEzQjtBQUNGOztBQU5FO0VBQ0U7OztJQUdFLDRCQUE0QjtFQVNoQztFQVBFO0lBQ0UsdUJBQXVCO0VBUzNCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9sb2FkZXIvbG9hZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvYWRpbmctc3Bpbm5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAxZjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHotaW5kZXg6IDk5OSAhaW1wb3J0YW50O1xufVxuXG4ubG9hZGluZy1zcGlubmVyIHtcbiAgYWxpZ24tc2VsZjogZW5kO1xuICAubG9hZGVyLFxuICAubG9hZGVyOmJlZm9yZSxcbiAgLmxvYWRlcjphZnRlciB7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHdpZHRoOiAyLjVlbTtcbiAgICBoZWlnaHQ6IDIuNWVtO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBsb2FkNyAxLjhzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xuICAgIGFuaW1hdGlvbjogbG9hZDcgMS44cyBpbmZpbml0ZSBlYXNlLWluLW91dDtcbiAgfVxuICAubG9hZGVyIHtcbiAgICBjb2xvcjogIzQwNUE5ODtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgbWFyZ2luOiA4MHB4IGF1dG87XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRleHQtaW5kZW50OiAtOTk5OWVtO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC4xNnM7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4xNnM7XG4gIH1cbiAgLmxvYWRlcjpiZWZvcmUsXG4gIC5sb2FkZXI6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgfVxuICAubG9hZGVyOmJlZm9yZSB7XG4gICAgbGVmdDogLTMuNWVtO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC4zMnM7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4zMnM7XG4gIH1cbiAgLmxvYWRlcjphZnRlciB7XG4gICAgbGVmdDogMy41ZW07XG4gIH1cbiAgQC13ZWJraXQta2V5ZnJhbWVzIGxvYWQ3IHtcbiAgICAwJSxcbiAgICA4MCUsXG4gICAgMTAwJSB7XG4gICAgICBib3gtc2hhZG93OiAwIDIuNWVtIDAgLTEuM2VtO1xuICAgIH1cbiAgICA0MCUge1xuICAgICAgYm94LXNoYWRvdzogMCAyLjVlbSAwIDA7XG4gICAgfVxuICB9XG4gIEBrZXlmcmFtZXMgbG9hZDcge1xuICAgIDAlLFxuICAgIDgwJSxcbiAgICAxMDAlIHtcbiAgICAgIGJveC1zaGFkb3c6IDAgMi41ZW0gMCAtMS4zZW07XG4gICAgfVxuICAgIDQwJSB7XG4gICAgICBib3gtc2hhZG93OiAwIDIuNWVtIDAgMDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "./src/app/shared/components/loader/loader.component.ts":
    /*!**************************************************************!*\
      !*** ./src/app/shared/components/loader/loader.component.ts ***!
      \**************************************************************/

    /*! exports provided: LoaderComponent */

    /***/
    function srcAppSharedComponentsLoaderLoaderComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoaderComponent", function () {
        return LoaderComponent;
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


      var src_app_core_services_addapters_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/core/services/addapters/loader.service */
      "./src/app/core/services/addapters/loader.service.ts");

      var LoaderComponent = /*#__PURE__*/function () {
        function LoaderComponent(loaderService) {
          var _this33 = this;

          _classCallCheck(this, LoaderComponent);

          this.loaderService = loaderService;
          this.loaderService.isLoading.subscribe(function (result) {
            _this33.loading = result;
          });
        }

        _createClass(LoaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return LoaderComponent;
      }();

      LoaderComponent.ctorParameters = function () {
        return [{
          type: src_app_core_services_addapters_loader_service__WEBPACK_IMPORTED_MODULE_2__["LoaderService"]
        }];
      };

      LoaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-loader',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./loader.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/loader/loader.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./loader.component.scss */
        "./src/app/shared/components/loader/loader.component.scss"))["default"]]
      })], LoaderComponent);
      /***/
    },

    /***/
    "./src/app/shared/components/multi-select/multi-select.component.scss":
    /*!****************************************************************************!*\
      !*** ./src/app/shared/components/multi-select/multi-select.component.scss ***!
      \****************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppSharedComponentsMultiSelectMultiSelectComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL211bHRpLXNlbGVjdC9tdWx0aS1zZWxlY3QuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/shared/components/multi-select/multi-select.component.ts":
    /*!**************************************************************************!*\
      !*** ./src/app/shared/components/multi-select/multi-select.component.ts ***!
      \**************************************************************************/

    /*! exports provided: MultiSelectComponent */

    /***/
    function srcAppSharedComponentsMultiSelectMultiSelectComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MultiSelectComponent", function () {
        return MultiSelectComponent;
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


      var src_app_core_services_global_global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/core/services/global/global.service */
      "./src/app/core/services/global/global.service.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

      var MultiSelectComponent_1;

      var MultiSelectComponent = MultiSelectComponent_1 = /*#__PURE__*/function () {
        function MultiSelectComponent(globalService) {
          _classCallCheck(this, MultiSelectComponent);

          this.globalService = globalService;
          this.value = [];
          this.disabled = false;
          this.rows = [];

          this.onChange = function () {};

          this.onTouched = function () {};
        }

        _createClass(MultiSelectComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "writeValue",
          value: function writeValue(value) {
            var _this34 = this;

            this.value = value;
            this.rows = this.globalService[this.collection].map(function (x) {
              var index = _this34.value.findIndex(function (val) {
                return val === x._id;
              });

              return {
                _id: x._id,
                name: x.name,
                checked: index !== -1
              };
            });
          }
        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            this.onChange = fn;
          }
        }, {
          key: "registerOnTouched",
          value: function registerOnTouched(fn) {
            this.onTouched = fn;
          }
        }, {
          key: "setDisabledState",
          value: function setDisabledState(isDisabled) {
            this.disabled = isDisabled;
          }
          /**
           * detecte values changes
           * @param i
           * @param event
           */

        }, {
          key: "onChangeValue",
          value: function onChangeValue(i, event) {
            var _this35 = this;

            this.rows[i]['checked'] = event.checked;
            var rowsSize = this.rows.filter(function (x) {
              return x.checked;
            }).length - 1;

            if (this.limit && this.limit === rowsSize) {
              // validation limit
              event.source._checked = false;
              this.rows[i]['checked'] = false;
            } else if (event.checked) {
              this.value.push(this.rows[i]._id);
            } else {
              var index = this.value.findIndex(function (x) {
                return x === _this35.rows[i]._id;
              });

              if (index !== -1) {
                this.value.splice(index, 1);
              }
            }
          }
        }]);

        return MultiSelectComponent;
      }();

      MultiSelectComponent.ctorParameters = function () {
        return [{
          type: src_app_core_services_global_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"]
        }];
      };

      MultiSelectComponent.propDecorators = {
        label: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['label']
        }],
        collection: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['collection']
        }],
        limit: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['limit']
        }]
      };
      MultiSelectComponent = MultiSelectComponent_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-multi-select',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./multi-select.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/multi-select/multi-select.component.html"))["default"],
        providers: [{
          provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
          useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
            return MultiSelectComponent_1;
          }),
          multi: true
        }],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./multi-select.component.scss */
        "./src/app/shared/components/multi-select/multi-select.component.scss"))["default"]]
      })], MultiSelectComponent);
      /***/
    },

    /***/
    "./src/app/shared/components/preview-advertisement/preview-advertisement.component.scss":
    /*!**********************************************************************************************!*\
      !*** ./src/app/shared/components/preview-advertisement/preview-advertisement.component.scss ***!
      \**********************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppSharedComponentsPreviewAdvertisementPreviewAdvertisementComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3ByZXZpZXctYWR2ZXJ0aXNlbWVudC9wcmV2aWV3LWFkdmVydGlzZW1lbnQuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/shared/components/preview-advertisement/preview-advertisement.component.ts":
    /*!********************************************************************************************!*\
      !*** ./src/app/shared/components/preview-advertisement/preview-advertisement.component.ts ***!
      \********************************************************************************************/

    /*! exports provided: PreviewAdvertisementComponent */

    /***/
    function srcAppSharedComponentsPreviewAdvertisementPreviewAdvertisementComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PreviewAdvertisementComponent", function () {
        return PreviewAdvertisementComponent;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_core_services_global_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/core/services/global/global.service */
      "./src/app/core/services/global/global.service.ts");
      /* harmony import */


      var src_app_core_services_crud_advertisement_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/core/services/crud/advertisement.service */
      "./src/app/core/services/crud/advertisement.service.ts");
      /* harmony import */


      var src_app_core_services_global_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/core/services/global/auth.service */
      "./src/app/core/services/global/auth.service.ts");

      var PreviewAdvertisementComponent = /*#__PURE__*/function () {
        function PreviewAdvertisementComponent(globalService, advertisementService, authService, modalController) {
          _classCallCheck(this, PreviewAdvertisementComponent);

          this.globalService = globalService;
          this.advertisementService = advertisementService;
          this.authService = authService;
          this.modalController = modalController;
        }

        _createClass(PreviewAdvertisementComponent, [{
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.getAdvertisement();
          }
        }, {
          key: "getAdvertisement",
          value: function getAdvertisement() {
            var _this36 = this;

            if (this.advertissementId) {
              this.advertisementService.shwoAdvertissement(this.advertissementId).subscribe(function (res) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this36, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
                  return regeneratorRuntime.wrap(function _callee8$(_context8) {
                    while (1) {
                      switch (_context8.prev = _context8.next) {
                        case 0:
                          _context8.next = 2;
                          return res;

                        case 2:
                          this.advertisement = _context8.sent;
                          console.log('From Show Advertissement', this.advertisement);
                          this.checkAdvertissement();

                        case 5:
                        case "end":
                          return _context8.stop();
                      }
                    }
                  }, _callee8, this);
                }));
              });
            } else {
              this.advertisement = JSON.parse(JSON.stringify(this.advertisementService.advertisement.toJson()));
              console.log('From preview', this.advertisement);
              this.checkAdvertissement();
            }
          }
        }, {
          key: "checkAdvertissement",
          value: function checkAdvertissement() {
            var _this37 = this;

            if (this.advertisement) {
              if (this.advertisement['languages']) {
                this.advertisement['languages'] = this.advertisement.languages.map(function (x) {
                  var langIndex = _this37.globalService.languages.findIndex(function (val) {
                    return val._id === x.language;
                  });

                  var langLevelIndex = _this37.globalService.languagesLevels.findIndex(function (val) {
                    return val._id === x.languageLevel;
                  });

                  return {
                    language: langIndex !== -1 ? _this37.globalService.languages[langIndex].name : null,
                    languageLevel: langLevelIndex !== -1 ? _this37.globalService.languagesLevels[langLevelIndex].name : null
                  };
                });
              }

              if (this.advertisement['programingLanguages']) {
                this.advertisement['programingLanguages'].language = this.advertisement['programingLanguages'].language.map(function (x) {
                  var language = _this37.globalService.programmingLanguages.find(function (val) {
                    return val._id === x;
                  });

                  return language ? language.name : null;
                });
                this.advertisement['programingLanguages'].logiciel = this.advertisement['programingLanguages'].logiciel.map(function (x) {
                  var logiciel = _this37.globalService.logiciels.find(function (val) {
                    return val._id === x;
                  });

                  return logiciel ? logiciel.name : null;
                });
              }

              var activitySectorIndex = this.globalService.activitySectors.findIndex(function (x) {
                return x._id === _this37.advertisement.company.activitySector;
              });

              if (activitySectorIndex !== -1) {
                this.advertisement['activitySector'] = this.globalService.activitySectors[activitySectorIndex].name;
              }

              var levelOfStudie = this.globalService.levelOfStudies.findIndex(function (x) {
                return x._id === _this37.advertisement.levelOfStudies;
              });

              if (levelOfStudie !== -1) {
                this.advertisement['levelOfStudie'] = this.globalService.levelOfStudies[levelOfStudie].name;
              }

              this.advertisement['typeOfTraining'] = this.advertisement['typeOfTraining'].map(function (x) {
                var typeOfTraining = _this37.globalService.typeOfTrainings.find(function (val) {
                  return val._id === x;
                });

                return typeOfTraining ? typeOfTraining.name : null;
              }); // const typeOfTraining = this.globalService.typeOfTrainings.findIndex(x => x._id === this.advertisement.typeOfTraining);
              // if (typeOfTraining !== -1) {
              //   this.advertisement['typeOfTraining'] = this.globalService.typeOfTrainings[typeOfTraining].name;
              // }

              if (this.advertisement.company.values) {
                this.advertisement.company.values = this.advertisement.company.values.map(function (x) {
                  var valueIndex = _this37.globalService.values.findIndex(function (val) {
                    return val._id === x;
                  });

                  return valueIndex !== -1 ? _this37.globalService.values[valueIndex].name : null;
                });
                console.log(this.advertisement.company.values);
              }

              this.getRepertoire('experienceYears');
              this.getRepertoire('location');
              this.getRepertoire('contract');
              this.getRepertoire('jobType');
              this.getRepertoire('jobMode');
              this.getRepertoire('managerialLevel');
              this.getRepertoire('effective');
              this.getRepertoire('language');
              this.getRepertoire('logiciel');
            }
          }
          /**
           * get repertoires
           * @param key
           */

        }, {
          key: "getRepertoire",
          value: function getRepertoire(key) {
            var _this38 = this;

            var val;

            switch (key) {
              case 'contract':
                val = this.globalService.contracts.find(function (x) {
                  return x._id === _this38.advertisement[key];
                });
                break;

              case 'jobType':
                val = this.globalService.jobTypes.find(function (x) {
                  return x._id === _this38.advertisement[key];
                });
                break;

              case 'jobMode':
                val = this.globalService.jobModes.find(function (x) {
                  return x._id === _this38.advertisement[key];
                });
                break;

              case 'managerialLevel':
                val = this.globalService.managerialLevels.find(function (x) {
                  return x._id === _this38.advertisement[key];
                });
                break;

              case 'effective':
                val = this.globalService.effectives.find(function (x) {
                  return x._id === _this38.advertisement[key];
                });
                break;

              case 'experienceYears':
                val = this.globalService.experiences.find(function (x) {
                  return x._id === _this38.advertisement[key];
                });
                break;

              case 'location':
                val = this.globalService.locations.find(function (x) {
                  return x._id === _this38.advertisement[key];
                });
                break;

              case 'levelOfStudies':
                val = this.globalService.levelOfStudies.find(function (x) {
                  return x._id === _this38.advertisement[key];
                });
                break;

              case 'typeOfTraining':
                val = this.globalService.typeOfTrainings.find(function (x) {
                  return x._id === _this38.advertisement[key];
                });
                break;

              case 'language':
                val = this.globalService.languages.find(function (x) {
                  return x._id === _this38.advertisement[key];
                });
                break;

              case 'logiciel':
                val = this.globalService.logiciels.find(function (x) {
                  return x._id === _this38.advertisement[key];
                });
                break;
            }

            if (val) {
              this.advertisement[key] = val.name;
            }
          }
        }, {
          key: "redirectTo",
          value: function redirectTo(url) {
            window.open('https://www.facebook.com/' + url, '_blank');
          }
        }]);

        return PreviewAdvertisementComponent;
      }();

      PreviewAdvertisementComponent.ctorParameters = function () {
        return [{
          type: src_app_core_services_global_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"]
        }, {
          type: src_app_core_services_crud_advertisement_service__WEBPACK_IMPORTED_MODULE_4__["AdvertisementService"]
        }, {
          type: src_app_core_services_global_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
        }];
      };

      PreviewAdvertisementComponent.propDecorators = {
        theSlides: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"]]
        }]
      };
      PreviewAdvertisementComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-preview-advertisement',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./preview-advertisement.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/preview-advertisement/preview-advertisement.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./preview-advertisement.component.scss */
        "./src/app/shared/components/preview-advertisement/preview-advertisement.component.scss"))["default"]]
      })], PreviewAdvertisementComponent);
      /***/
    },

    /***/
    "./src/app/shared/components/preview-candidate/preview-candidate.component.scss":
    /*!**************************************************************************************!*\
      !*** ./src/app/shared/components/preview-candidate/preview-candidate.component.scss ***!
      \**************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppSharedComponentsPreviewCandidatePreviewCandidateComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3ByZXZpZXctY2FuZGlkYXRlL3ByZXZpZXctY2FuZGlkYXRlLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/shared/components/preview-candidate/preview-candidate.component.ts":
    /*!************************************************************************************!*\
      !*** ./src/app/shared/components/preview-candidate/preview-candidate.component.ts ***!
      \************************************************************************************/

    /*! exports provided: PreviewCandidateComponent */

    /***/
    function srcAppSharedComponentsPreviewCandidatePreviewCandidateComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PreviewCandidateComponent", function () {
        return PreviewCandidateComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../../../environments/environment.prod */
      "./src/environments/environment.prod.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_core_services_global_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/core/services/global/global.service */
      "./src/app/core/services/global/global.service.ts");
      /* harmony import */


      var src_app_core_services_global_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/core/services/global/auth.service */
      "./src/app/core/services/global/auth.service.ts");
      /* harmony import */


      var src_app_core_services_crud_candidate_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/core/services/crud/candidate.service */
      "./src/app/core/services/crud/candidate.service.ts");

      var PreviewCandidateComponent = /*#__PURE__*/function () {
        function PreviewCandidateComponent(authService, candidateService, globalService, modalController) {
          _classCallCheck(this, PreviewCandidateComponent);

          this.authService = authService;
          this.candidateService = candidateService;
          this.globalService = globalService;
          this.modalController = modalController;
        }

        _createClass(PreviewCandidateComponent, [{
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.getCandidate();
          }
        }, {
          key: "nextSlide",
          value: function nextSlide() {
            this.theSlides.slideNext();
          }
        }, {
          key: "previousSlide",
          value: function previousSlide() {
            this.theSlides.slidePrev();
          }
          /**
           * get candidate
           */

        }, {
          key: "getCandidate",
          value: function getCandidate() {
            var _this39 = this;

            if (this.candidateId) {
              this.candidateService.shwoProfil(this.candidateId).subscribe(function (res) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this39, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
                  return regeneratorRuntime.wrap(function _callee9$(_context9) {
                    while (1) {
                      switch (_context9.prev = _context9.next) {
                        case 0:
                          _context9.next = 2;
                          return res;

                        case 2:
                          this.candidate = _context9.sent;
                          console.log('From Show Profile', this.candidate);
                          this.checkCandidate();

                        case 5:
                        case "end":
                          return _context9.stop();
                      }
                    }
                  }, _callee9, this);
                }));
              });
            } else {
              this.candidate = JSON.parse(JSON.stringify(this.candidateService.candidate));
              console.log('From preview', this.candidate);
              this.checkCandidate();
            }
          }
        }, {
          key: "checkCandidate",
          value: function checkCandidate() {
            var _this40 = this;

            if (this.candidate) {
              var experienceYearsIndex = this.globalService.experiences.findIndex(function (x) {
                return x._id === _this40.candidate.experienceYears;
              });

              if (experienceYearsIndex !== -1) {
                this.candidate['experienceYears'] = this.globalService.experiences[experienceYearsIndex].name;
              }

              var locationIndex = this.globalService.locations.findIndex(function (x) {
                return x._id === _this40.candidate.locations[0];
              });

              if (locationIndex !== -1) {
                this.candidate['location'] = this.globalService.locations[locationIndex].name;
              }

              if (this.candidate['languages']) {
                this.candidate['languages'] = this.candidate.languages.map(function (x) {
                  var langIndex = _this40.globalService.languages.findIndex(function (val) {
                    return val._id === x.language;
                  });

                  var langLevelIndex = _this40.globalService.languagesLevels.findIndex(function (val) {
                    return val._id === x.languageLevel;
                  });

                  return {
                    language: langIndex !== -1 ? _this40.globalService.languages[langIndex].name : null,
                    languageLevel: langLevelIndex !== -1 ? _this40.globalService.languagesLevels[langLevelIndex].name : null
                  };
                });
              }

              if (this.candidate['programingLanguages']) {
                this.candidate['programingLanguages'].language = this.candidate['programingLanguages'].language.map(function (x) {
                  var languageIndex = _this40.globalService.programmingLanguages.find(function (val) {
                    return val._id === x;
                  });

                  return languageIndex !== null ? languageIndex.name : null;
                });
                this.candidate['programingLanguages'].logiciel = this.candidate['programingLanguages'].logiciel.map(function (x) {
                  var logicielsIndex = _this40.globalService.logiciels.find(function (val) {
                    return val._id === x;
                  });

                  return logicielsIndex !== null ? logicielsIndex.name : null;
                });
              }

              if (this.candidate['skills']) {
                this.candidate['skills'] = this.candidate.skills.map(function (x) {
                  var softSkillsIndex = _this40.globalService.softSkills.findIndex(function (val) {
                    return val._id === x;
                  });

                  return softSkillsIndex !== -1 ? _this40.globalService.softSkills[softSkillsIndex].name : null;
                });
              }

              if (this.candidate['values']) {
                this.candidate['values'] = this.candidate.values.map(function (x) {
                  var valueIndex = _this40.globalService.values.findIndex(function (val) {
                    return val._id === x;
                  });

                  return valueIndex !== -1 ? _this40.globalService.values[valueIndex].name : null;
                });
              }
            }
          }
        }, {
          key: "redirectTo",
          value: function redirectTo(url) {
            window.open(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].backend_url + url, '_blank');
          }
        }]);

        return PreviewCandidateComponent;
      }();

      PreviewCandidateComponent.ctorParameters = function () {
        return [{
          type: src_app_core_services_global_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
        }, {
          type: src_app_core_services_crud_candidate_service__WEBPACK_IMPORTED_MODULE_6__["CandidateService"]
        }, {
          type: src_app_core_services_global_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
        }];
      };

      PreviewCandidateComponent.propDecorators = {
        theSlides: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonSlides"]]
        }]
      };
      PreviewCandidateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-preview-candidate',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./preview-candidate.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/preview-candidate/preview-candidate.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./preview-candidate.component.scss */
        "./src/app/shared/components/preview-candidate/preview-candidate.component.scss"))["default"]]
      })], PreviewCandidateComponent);
      /***/
    },

    /***/
    "./src/app/shared/components/user-image/user-image.component.scss":
    /*!************************************************************************!*\
      !*** ./src/app/shared/components/user-image/user-image.component.scss ***!
      \************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppSharedComponentsUserImageUserImageComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".userName {\n  display: inline-block;\n  margin-left: 10px !important;\n  text-align: center;\n  width: 40px;\n  height: 40px;\n  border: 2px solid var(--ion-color-primary);\n  margin: 0 auto 10px;\n  border-radius: 100%;\n  box-shadow: 0px 16px 20px 0px rgba(55, 52, 142, 0.07) !important;\n}\n\n.userName span {\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 39px;\n  color: var(--ion-color-primary);\n}\n\n.large .userName {\n  width: 70px;\n  height: 70px;\n}\n\n.large .userName span {\n  font-size: 20px;\n  line-height: 65px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvdXNlci1pbWFnZS91c2VyLWltYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQXFCO0VBQ3JCLDRCQUE0QjtFQUM1QixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWiwwQ0FBMEM7RUFDMUMsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUduQixnRUFBNkQ7QUFDakU7O0FBWkE7RUFhUSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQiwrQkFBK0I7QUFHdkM7O0FBQ0E7RUFFUSxXQUFXO0VBQ1gsWUFBWTtBQUNwQjs7QUFKQTtFQUtZLGVBQWU7RUFDZixpQkFBaUI7QUFHN0IiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy91c2VyLWltYWdlL3VzZXItaW1hZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXNlck5hbWUge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW4tbGVmdDogMTBweCAhaW1wb3J0YW50O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIG1hcmdpbjogMCBhdXRvIDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAxNnB4IDIwcHggMHB4IHJnYmEoNTUsNTIsMTQyLDAuMDcpICFpbXBvcnRhbnQ7XG4gICAgLW1vei1ib3gtc2hhZG93OiAwcHggMTZweCAyMHB4IDBweCByZ2JhKDU1LDUyLDE0MiwwLjA3KSAhaW1wb3J0YW50O1xuICAgIGJveC1zaGFkb3c6IDBweCAxNnB4IDIwcHggMHB4IHJnYmEoNTUsNTIsMTQyLDAuMDcpICFpbXBvcnRhbnQ7XG4gICAgc3BhbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDM5cHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgfVxufVxuXG4ubGFyZ2Uge1xuICAgIC51c2VyTmFtZSB7XG4gICAgICAgIHdpZHRoOiA3MHB4O1xuICAgICAgICBoZWlnaHQ6IDcwcHg7XG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDY1cHg7XG4gICAgICAgIH1cbiAgICB9XG59Il19 */";
      /***/
    },

    /***/
    "./src/app/shared/components/user-image/user-image.component.ts":
    /*!**********************************************************************!*\
      !*** ./src/app/shared/components/user-image/user-image.component.ts ***!
      \**********************************************************************/

    /*! exports provided: UserImageComponent */

    /***/
    function srcAppSharedComponentsUserImageUserImageComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserImageComponent", function () {
        return UserImageComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var UserImageComponent = /*#__PURE__*/function () {
        function UserImageComponent() {
          _classCallCheck(this, UserImageComponent);

          this.large = false;
        }

        _createClass(UserImageComponent, [{
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {}
        }]);

        return UserImageComponent;
      }();

      UserImageComponent.ctorParameters = function () {
        return [];
      };

      UserImageComponent.propDecorators = {
        firstName: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['firstName']
        }],
        lastName: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['lastName']
        }],
        image: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['image']
        }],
        large: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['large']
        }]
      };
      UserImageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-image',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./user-image.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/user-image/user-image.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./user-image.component.scss */
        "./src/app/shared/components/user-image/user-image.component.scss"))["default"]]
      })], UserImageComponent);
      /***/
    },

    /***/
    "./src/app/shared/directives/can-change-status.directive.ts":
    /*!******************************************************************!*\
      !*** ./src/app/shared/directives/can-change-status.directive.ts ***!
      \******************************************************************/

    /*! exports provided: CanChangeStatusDirective */

    /***/
    function srcAppSharedDirectivesCanChangeStatusDirectiveTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CanChangeStatusDirective", function () {
        return CanChangeStatusDirective;
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

      var CanChangeStatusDirective = /*#__PURE__*/function () {
        function CanChangeStatusDirective(element, templateRef, viewContainer, authService) {
          _classCallCheck(this, CanChangeStatusDirective);

          this.element = element;
          this.templateRef = templateRef;
          this.viewContainer = viewContainer;
          this.authService = authService;
          this.isHidden = true;
        }

        _createClass(CanChangeStatusDirective, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "appCanChangeStatus",
          set: function set(val) {
            if (this.authService.user.userRole === 'recruiter' && this.authService.user.userRole.includes(val) || val === this.authService.user._id) {
              if (this.isHidden) {
                this.viewContainer.createEmbeddedView(this.templateRef);
                this.isHidden = false;
              }
            } else {
              this.isHidden = true;
              this.viewContainer.clear();
            }
          }
        }]);

        return CanChangeStatusDirective;
      }();

      CanChangeStatusDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]
        }, {
          type: src_app_core_services_global_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }];
      };

      CanChangeStatusDirective.propDecorators = {
        appCanChangeStatus: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };
      CanChangeStatusDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appCanChangeStatus]'
      })], CanChangeStatusDirective);
      /***/
    },

    /***/
    "./src/app/shared/directives/has-permission.directive.ts":
    /*!***************************************************************!*\
      !*** ./src/app/shared/directives/has-permission.directive.ts ***!
      \***************************************************************/

    /*! exports provided: HasPermissionDirective */

    /***/
    function srcAppSharedDirectivesHasPermissionDirectiveTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HasPermissionDirective", function () {
        return HasPermissionDirective;
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

      var HasPermissionDirective = /*#__PURE__*/function () {
        function HasPermissionDirective(element, templateRef, viewContainer, authService) {
          _classCallCheck(this, HasPermissionDirective);

          this.element = element;
          this.templateRef = templateRef;
          this.viewContainer = viewContainer;
          this.authService = authService;
          this.rights = [];
          this.permissions = [];
          this.isHidden = true;
        }

        _createClass(HasPermissionDirective, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this41 = this;

            this.authService.permissions.subscribe(function (p) {
              _this41.permissions = p;

              _this41.updateView();
            });
          }
        }, {
          key: "updateView",

          /**
           * update view
           */
          value: function updateView() {
            if (this.verifyPermision()) {
              if (this.isHidden) {
                this.viewContainer.createEmbeddedView(this.templateRef);
                this.isHidden = false;
              }
            } else {
              this.isHidden = true;
              this.viewContainer.clear();
            }
          }
          /**
           * verify user permissions
           */

        }, {
          key: "verifyPermision",
          value: function verifyPermision() {
            if (this.permissions.length > 0 && this.rights && this.rights.length > 0) {
              var _iterator = _createForOfIteratorHelper(this.rights),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var right = _step.value;

                  if (this.permissions.includes(right)) {
                    return true;
                  }
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            }

            return false;
          }
        }, {
          key: "appHasPermission",
          set: function set(val) {
            this.rights = val;
            this.updateView();
          }
        }]);

        return HasPermissionDirective;
      }();

      HasPermissionDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]
        }, {
          type: src_app_core_services_global_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }];
      };

      HasPermissionDirective.propDecorators = {
        appHasPermission: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };
      HasPermissionDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appHasPermission]'
      })], HasPermissionDirective);
      /***/
    },

    /***/
    "./src/app/shared/directives/scroll-to-top.directive.ts":
    /*!**************************************************************!*\
      !*** ./src/app/shared/directives/scroll-to-top.directive.ts ***!
      \**************************************************************/

    /*! exports provided: ScrollToTopDirective */

    /***/
    function srcAppSharedDirectivesScrollToTopDirectiveTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ScrollToTopDirective", function () {
        return ScrollToTopDirective;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var ScrollToTopDirective = function ScrollToTopDirective(router) {
        _classCallCheck(this, ScrollToTopDirective);

        this.router = router;
        this.router.events.subscribe(function (evt) {
          if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"])) {
            return;
          }

          document.body.scrollTop = 0;
          console.log('im in the top');
        });
      };

      ScrollToTopDirective.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      ScrollToTopDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appScrollToTop]'
      })], ScrollToTopDirective);
      /***/
    },

    /***/
    "./src/app/shared/pipes/env.pipe.ts":
    /*!******************************************!*\
      !*** ./src/app/shared/pipes/env.pipe.ts ***!
      \******************************************/

    /*! exports provided: EnvPipe */

    /***/
    function srcAppSharedPipesEnvPipeTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EnvPipe", function () {
        return EnvPipe;
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


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/environments/environment */
      "./src/environments/environment.ts");

      var EnvPipe = /*#__PURE__*/function () {
        function EnvPipe() {
          _classCallCheck(this, EnvPipe);
        }

        _createClass(EnvPipe, [{
          key: "transform",
          value: function transform(variable) {
            return src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"][variable];
          }
        }]);

        return EnvPipe;
      }();

      EnvPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'env'
      })], EnvPipe);
      /***/
    },

    /***/
    "./src/app/shared/pipes/filter.pipe.ts":
    /*!*********************************************!*\
      !*** ./src/app/shared/pipes/filter.pipe.ts ***!
      \*********************************************/

    /*! exports provided: FilterPipe */

    /***/
    function srcAppSharedPipesFilterPipeTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FilterPipe", function () {
        return FilterPipe;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var FilterPipe = /*#__PURE__*/function () {
        function FilterPipe() {
          _classCallCheck(this, FilterPipe);
        }

        _createClass(FilterPipe, [{
          key: "transform",
          value: function transform(value) {
            for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              args[_key - 1] = arguments[_key];
            }

            return args[0] && args[0] !== '' ? value.filter(function (x) {
              return x.user.firstName.includes(args[0]) || x.user.lastName.includes(args[0]);
            }) : value;
          }
        }]);

        return FilterPipe;
      }();

      FilterPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'filter'
      })], FilterPipe);
      /***/
    },

    /***/
    "./src/app/shared/pipes/languages.pipe.ts":
    /*!************************************************!*\
      !*** ./src/app/shared/pipes/languages.pipe.ts ***!
      \************************************************/

    /*! exports provided: LanguagesPipe */

    /***/
    function srcAppSharedPipesLanguagesPipeTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LanguagesPipe", function () {
        return LanguagesPipe;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var LanguagesPipe = /*#__PURE__*/function () {
        function LanguagesPipe() {
          _classCallCheck(this, LanguagesPipe);
        }

        _createClass(LanguagesPipe, [{
          key: "transform",
          value: function transform(value) {
            for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
              args[_key2 - 1] = arguments[_key2];
            }

            if (args[0] && args[0].length > 0) {
              var languages = args[0].map(function (x) {
                return x.language._id;
              });
              return value.filter(function (x) {
                return !languages.includes(x._id);
              });
            }

            return value;
          }
        }]);

        return LanguagesPipe;
      }();

      LanguagesPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'languages',
        pure: false
      })], LanguagesPipe);
      /***/
    },

    /***/
    "./src/app/shared/shared.module.ts":
    /*!*****************************************!*\
      !*** ./src/app/shared/shared.module.ts ***!
      \*****************************************/

    /*! exports provided: SharedModule */

    /***/
    function srcAppSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
        return SharedModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./components/loader/loader.component */
      "./src/app/shared/components/loader/loader.component.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/datepicker */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/form-field */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/input */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/core */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/select */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/icon */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
      /* harmony import */


      var _angular_material_radio__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/radio */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
      /* harmony import */


      var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/expansion */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/stepper */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/menu */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
      /* harmony import */


      var _components__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./components */
      "./src/app/shared/components/index.ts");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
      /* harmony import */


      var _directives_has_permission_directive__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./directives/has-permission.directive */
      "./src/app/shared/directives/has-permission.directive.ts");
      /* harmony import */


      var _pipes_env_pipe__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./pipes/env.pipe */
      "./src/app/shared/pipes/env.pipe.ts");
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/flex-layout */
      "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
      /* harmony import */


      var _pipes_languages_pipe__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./pipes/languages.pipe */
      "./src/app/shared/pipes/languages.pipe.ts");
      /* harmony import */


      var _directives_can_change_status_directive__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./directives/can-change-status.directive */
      "./src/app/shared/directives/can-change-status.directive.ts");
      /* harmony import */


      var _directives_scroll_to_top_directive__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ./directives/scroll-to-top.directive */
      "./src/app/shared/directives/scroll-to-top.directive.ts");
      /* harmony import */


      var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ng-multiselect-dropdown */
      "./node_modules/ng-multiselect-dropdown/__ivy_ngcc__/fesm2015/ng-multiselect-dropdown.js");
      /* harmony import */


      var _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ./pipes/filter.pipe */
      "./src/app/shared/pipes/filter.pipe.ts");

      var SharedModule = function SharedModule() {
        _classCallCheck(this, SharedModule);
      };

      SharedModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_components__WEBPACK_IMPORTED_MODULE_19__["UserImageComponent"], _components__WEBPACK_IMPORTED_MODULE_19__["PreviewAdvertisementComponent"], _components__WEBPACK_IMPORTED_MODULE_19__["PreviewCandidateComponent"], _directives_has_permission_directive__WEBPACK_IMPORTED_MODULE_21__["HasPermissionDirective"], _pipes_env_pipe__WEBPACK_IMPORTED_MODULE_22__["EnvPipe"], _components__WEBPACK_IMPORTED_MODULE_19__["FileUploaderComponent"], _components__WEBPACK_IMPORTED_MODULE_19__["MultiSelectComponent"], _pipes_languages_pipe__WEBPACK_IMPORTED_MODULE_24__["LanguagesPipe"], _directives_can_change_status_directive__WEBPACK_IMPORTED_MODULE_25__["CanChangeStatusDirective"], _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_1__["LoaderComponent"], _directives_scroll_to_top_directive__WEBPACK_IMPORTED_MODULE_26__["ScrollToTopDirective"], _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_28__["FilterPipe"]],
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatNativeDateModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__["MatCheckboxModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_13__["MatRadioModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__["MatExpansionModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_16__["MatStepperModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__["MatMenuModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__["TranslateModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_23__["FlexLayoutModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_18__["MatSlideToggleModule"], ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_27__["NgMultiSelectDropDownModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatNativeDateModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__["MatCheckboxModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_13__["MatRadioModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__["MatExpansionModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_16__["MatStepperModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__["MatMenuModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__["TranslateModule"], _directives_has_permission_directive__WEBPACK_IMPORTED_MODULE_21__["HasPermissionDirective"], _pipes_env_pipe__WEBPACK_IMPORTED_MODULE_22__["EnvPipe"], _components__WEBPACK_IMPORTED_MODULE_19__["UserImageComponent"], _components__WEBPACK_IMPORTED_MODULE_19__["PreviewAdvertisementComponent"], _components__WEBPACK_IMPORTED_MODULE_19__["PreviewCandidateComponent"], _components__WEBPACK_IMPORTED_MODULE_19__["FileUploaderComponent"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_23__["FlexLayoutModule"], _components__WEBPACK_IMPORTED_MODULE_19__["MultiSelectComponent"], _pipes_languages_pipe__WEBPACK_IMPORTED_MODULE_24__["LanguagesPipe"], _directives_can_change_status_directive__WEBPACK_IMPORTED_MODULE_25__["CanChangeStatusDirective"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_18__["MatSlideToggleModule"], _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_1__["LoaderComponent"], _directives_scroll_to_top_directive__WEBPACK_IMPORTED_MODULE_26__["ScrollToTopDirective"], ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_27__["NgMultiSelectDropDownModule"], _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_28__["FilterPipe"]]
      })], SharedModule);
      /***/
    },

    /***/
    "./src/environments/environment.prod.ts":
    /*!**********************************************!*\
      !*** ./src/environments/environment.prod.ts ***!
      \**********************************************/

    /*! exports provided: environment */

    /***/
    function srcEnvironmentsEnvironmentProdTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      });

      var environment = {
        production: false,
        api_url: 'http://161.35.34.115:3006/api/',
        backend_url: 'http://161.35.34.115:3006/api/setting-ms/',
        SOCKET_ENDPOINT: 'http://161.35.34.115:3008'
      };
      /***/
    },

    /***/
    "./src/environments/environment.ts":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false,
        api_url: 'http://161.35.34.115:3006/api/',
        backend_url: 'http://161.35.34.115:3006/api/setting-ms/',
        SOCKET_ENDPOINT: 'http://161.35.34.115:3008' // api_url: 'http://localhost:3006/api/',
        // backend_url: 'http://localhost:3006/api/setting-ms/',
        // SOCKET_ENDPOINT: 'http://localhost:3008'

      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "./src/main.ts":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function srcMainTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "./src/app/app.module.ts");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "./src/environments/environment.ts");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.log(err);
      });
      /***/
    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /Users/mac/Desktop/Invyscode/Jobwinwin/mobile-ionic/src/main.ts */
      "./src/main.ts");
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map