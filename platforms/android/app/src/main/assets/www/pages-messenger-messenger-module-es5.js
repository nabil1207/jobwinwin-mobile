(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-messenger-messenger-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/messenger/components/messages-form/messages-form.component.html":
    /*!*****************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/messenger/components/messages-form/messages-form.component.html ***!
      \*****************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesMessengerComponentsMessagesFormMessagesFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"chat-header ion-no-border\" mode=\"md\">\n    <ion-toolbar>\n        <ion-buttons (click)=\"modalController.dismiss()\" routerDirection=\"root\" class=\"roundbutton\" slot=\"start\">\n            <ion-icon src=\"./assets/icon/arrow-back.svg\"></ion-icon>\n        </ion-buttons>\n        <ion-buttons slot=\"primary\">\n            <ion-button>\n                <ion-icon slot=\"icon-only\" ios=\"ellipsis-vertical\" md=\"ellipsis-vertical\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <ion-title *ngIf=\"sender && receiver\"> {{ authService.user._id === sender._id ?\n            (receiver.firstName + ' ' + receiver.lastName) :\n            (sender.firstName + ' ' + sender.lastName)\n            }} </ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content [fullscreen]=\"true\" class=\"forms\" #content>\n    <section class=\"chat-content\">\n        <ion-grid>\n            <ion-row *ngFor=\"let msg of messages\">\n                <ion-col size=\"9\" *ngIf=\"authService.user._id !== msg.sender._id\" class=\"message other-message\">\n                    <b>{{ receiver.firstName + ' ' + receiver.lastName }} : </b><br>\n                    <span>{{ msg.message }}</span>\n                    <div class=\"time text-right\">\n                        {{ msg.createdAt | date:'short' }}\n                    </div>\n                </ion-col>\n                <ion-col offset=\"3\" size=\"9\" *ngIf=\"authService.user._id === msg.sender._id\"\n                    class=\"message own-message\">\n                    <b>{{ sender.firstName + ' ' + sender.lastName }} : </b><br>\n                    <span>{{ msg.message }}</span>\n                    <div class=\"time text-right\">\n                        {{ msg.createdAt | date:'short' }}\n                    </div>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </section>\n</ion-content>\n<ion-footer>\n    <ion-toolbar color=\"light\">\n        <ion-row>\n            <ion-col size=\"10\">\n                <textarea autosize maxRows=\"3\" [(ngModel)]=\"newMsg\" class=\"msg-textarea\">\n                    Tapez votre message\n                </textarea>\n            </ion-col>\n            <ion-col size=\"2\">\n                <ion-button expand=\"block\" fill=\"clear\" color=\"primary\" [disabled]=\"newMsg === ''\" class=\"btn-msg\"\n                    (click)=\"sendMessage()\">\n                    <ion-icon name=\"send\" slot=\"icon-only\"></ion-icon>\n                </ion-button>\n            </ion-col>\n        </ion-row>\n    </ion-toolbar>\n</ion-footer>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/messenger/components/messages-listing/messages-listing.component.html":
    /*!***********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/messenger/components/messages-listing/messages-listing.component.html ***!
      \***********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesMessengerComponentsMessagesListingMessagesListingComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"list-header ion-no-border\" mode=\"md\">\n    <ion-toolbar>\n        <ion-buttons (click)=\"goBack()\" class=\"roundbutton\" slot=\"start\">\n            <ion-icon src=\"./assets/icon/arrow-back.svg\"></ion-icon>\n        </ion-buttons>\n        <ion-title>Messages</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content [fullscreen]=\"true\" class=\"forms\">\n    <section class=\"settings-content mb-3\">\n        <div class=\"page-content py-1\">\n            <form class=\"d-block\">\n                <div class=\"form-group d-block w-90 mr-auto\">\n                    <input class=\"custom-input search-input border-bleu\" type=\"text\" name=\"search\" [(ngModel)]=\"search\"\n                        placeholder=\"Rechercher\">\n                    <span class=\"icon-search position-absolute\">\n                        <img src=\"./assets/icon/search.svg\">\n                    </span>\n                </div>\n            </form>\n            <ion-list>\n                <!-- <ion-list-header>\n                    Messages\n                </ion-list-header> -->\n                <ion-item class=\"messagerie\" lines=\"none\" *ngFor=\"let item of messages | filter:search\" >\n                    <ion-avatar slot=\"start\">\n                        <img [src]=\"item.user.picture ? (('backend_url' | env) + item.user.picture) : \n                        (item.user.civility === 'Mr' || item.user.gender === 'masculin' ? '/assets/img/male.svg': '/assets/img/female.svg' )\">\n                    </ion-avatar>\n                    <ion-label (click)=\"openConversation(item._id)\">\n                        <h2>{{ item.user.firstName + ' ' + item.user.lastName}}</h2>\n                        <p class=\"last-msg\">\n                            {{ (item.message.length > 25)? (item.message | slice:0:25) + '...' : (item.message) }}\n                            <span class=\"msg-date\">{{ item.createdAt | date:'dd/MM/yyyy' }}</span>\n                        </p>\n                    </ion-label>\n                    <button mat-icon-button [matMenuTriggerFor]=\"menu\" class=\"more-btn-win\">\n                        <mat-icon>more_vert</mat-icon>\n                    </button>\n                    <mat-menu #menu=\"matMenu\">\n                        <button mat-menu-item *ngIf=\"authService.user.userRole != 'Candidate'\"  (click)=\"showCandidate(item.user._id)\">\n                            <span>Voir le profil</span>\n                        </button>\n                        <button mat-menu-item *ngIf=\"authService.user.userRole === 'Candidate'\"  (click)=\"showAdvertissement(item.advertisement)\">\n                            <span>Voir le profil</span>\n                        </button>\n                        <button mat-menu-item>\n                            <span>Signaler</span>\n                        </button>\n                        <button mat-menu-item>\n                            <span>Effacer</span>\n                        </button>\n                    </mat-menu>\n                </ion-item>\n            </ion-list>\n        </div>\n    </section>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/pages/messenger/components/messages-form/messages-form.component.scss":
    /*!***************************************************************************************!*\
      !*** ./src/app/pages/messenger/components/messages-form/messages-form.component.scss ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesMessengerComponentsMessagesFormMessagesFormComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".message {\n  border-radius: 5px;\n  margin: 0.5em 0;\n  padding: 0.5em;\n  max-width: 50%;\n}\n\n.other-message {\n  align-self: flex-end;\n  background-color: #536ba2;\n  color: white;\n}\n\n.own-message {\n  align-self: flex-start;\n  background-color: #6370ff;\n  color: white;\n}\n\n.time {\n  font-size: 10px;\n  color: #dfdfdfdf;\n  float: right;\n}\n\n.msg-textarea {\n  width: 100%;\n  border: 1px solid var(--ion-color-medium);\n  border-radius: 15px;\n  background: #ffffff;\n  padding-top: 5px;\n  padding-left: 10px;\n  padding-right: 10px;\n  resize: none;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWVzc2VuZ2VyL2NvbXBvbmVudHMvbWVzc2FnZXMtZm9ybS9tZXNzYWdlcy1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixjQUFjO0VBQ2QsY0FBYztBQUNoQjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQix5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBQ0E7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFFZDs7QUFBQTtFQUNFLFdBQVc7RUFDWCx5Q0FBeUM7RUFDekMsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixZQUFZO0FBR2QiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9tZXNzZW5nZXIvY29tcG9uZW50cy9tZXNzYWdlcy1mb3JtL21lc3NhZ2VzLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVzc2FnZSB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luOiAwLjVlbSAwO1xuICBwYWRkaW5nOiAwLjVlbTtcbiAgbWF4LXdpZHRoOiA1MCU7XG59XG5cbi5vdGhlci1tZXNzYWdlIHtcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1MzZiYTI7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLm93bi1tZXNzYWdlIHtcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYzNzBmZjtcbiAgY29sb3I6IHdoaXRlO1xufVxuLnRpbWUge1xuICBmb250LXNpemU6IDEwcHg7XG4gIGNvbG9yOiAjZGZkZmRmZGY7XG4gIGZsb2F0OiByaWdodDtcbn1cbi5tc2ctdGV4dGFyZWEge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgcmVzaXplOiBub25lO1xufVxuLy8uY2hhdC1jb250ZW50IHtcbiAgLy8gbWluLWhlaWdodDogMTAwJTtcbiAgLy8gd2lkdGg6IDEwMCU7XG4gIC8vIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLy8gLy8gZGlzcGxheTogZmxleDtcbiAgLy8gb3ZlcmZsb3c6IGhpZGRlbjtcbiAgLy8gbWFyZ2luOiAwIGF1dG87XG4vL31cbi8vIC5jaGF0LXNlY3Rpb24ge1xuLy8gICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuLy8gICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWcvYmctY29udmVyc2F0aW9uLnN2ZykgIWltcG9ydGFudDtcbi8vICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbi8vICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbi8vIH1cbi8vIC5jaGF0IHtcbi8vICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4vLyAgIGRpc3BsYXk6IGZsZXg7XG4vLyAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4vLyAgIHBhZGRpbmc6IDE2cHg7XG4vLyB9XG4iXX0= */";
      /***/
    },

    /***/
    "./src/app/pages/messenger/components/messages-form/messages-form.component.ts":
    /*!*************************************************************************************!*\
      !*** ./src/app/pages/messenger/components/messages-form/messages-form.component.ts ***!
      \*************************************************************************************/

    /*! exports provided: MessagesFormComponent */

    /***/
    function srcAppPagesMessengerComponentsMessagesFormMessagesFormComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MessagesFormComponent", function () {
        return MessagesFormComponent;
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


      var src_app_core_services_global_socket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/core/services/global/socket.service */
      "./src/app/core/services/global/socket.service.ts");
      /* harmony import */


      var src_app_core_services_global_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/core/services/global/auth.service */
      "./src/app/core/services/global/auth.service.ts");

      var MessagesFormComponent = /*#__PURE__*/function () {
        function MessagesFormComponent(modalController, socketService, authService) {
          _classCallCheck(this, MessagesFormComponent);

          this.modalController = modalController;
          this.socketService = socketService;
          this.authService = authService;
          this.messages = [];
        }

        _createClass(MessagesFormComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.socketService.emit('getDiscussion', {
              matchingId: this.matchingId
            });
            this.socketService.on('matchingMessage').subscribe(function (resp) {
              console.log(resp); // todo this.messages = resp.messages

              _this.sender = _this.authService.user._id === resp.matching.candidate._id ? resp.matching.candidate : resp.matching.recruiter;
              _this.receiver = _this.sender._id === resp.matching.candidate._id ? resp.matching.recruiter : resp.matching.candidate;
              _this.messages = resp.messages;
            });
            this.socketService.on('getNewMessage').subscribe(function (resp) {
              if (resp.matching === _this.matchingId) {
                _this.messages.push(Object.assign(resp, {
                  sender: _this.authService.user._id === resp.sender && _this.sender._id === resp.sender ? _this.sender : _this.receiver,
                  receiver: _this.authService.user._id === resp.sender && _this.sender._id === resp.sender ? _this.sender : _this.receiver
                }));
              }
            });
          }
          /**
           * send message
           */

        }, {
          key: "sendMessage",
          value: function sendMessage() {
            this.socketService.emit('newMessage', {
              matching: this.matchingId,
              message: this.newMsg,
              sender: this.sender._id,
              receiver: this.receiver._id
            });
            this.newMsg = '';
            this.scrollToBottomOnInit();
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.scrollToBottomOnInit();
          }
        }, {
          key: "scrollToBottomOnInit",
          value: function scrollToBottomOnInit() {
            var _this2 = this;

            setTimeout(function () {
              _this2.content.scrollToBottom(300);
            });
          }
        }]);

        return MessagesFormComponent;
      }();

      MessagesFormComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
        }, {
          type: src_app_core_services_global_socket_service__WEBPACK_IMPORTED_MODULE_3__["SocketService"]
        }, {
          type: src_app_core_services_global_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
        }];
      };

      MessagesFormComponent.propDecorators = {
        content: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['content']
        }]
      };
      MessagesFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-messages-form',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./messages-form.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/messenger/components/messages-form/messages-form.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./messages-form.component.scss */
        "./src/app/pages/messenger/components/messages-form/messages-form.component.scss"))["default"]]
      })], MessagesFormComponent);
      /***/
    },

    /***/
    "./src/app/pages/messenger/components/messages-listing/messages-listing.component.scss":
    /*!*********************************************************************************************!*\
      !*** ./src/app/pages/messenger/components/messages-listing/messages-listing.component.scss ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesMessengerComponentsMessagesListingMessagesListingComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".more-btn-win {\n  background-color: #ffffff !important;\n  color: black;\n  text-decoration: none;\n  font-size: 13px;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  z-index: 999;\n  margin-top: 16px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWVzc2VuZ2VyL2NvbXBvbmVudHMvbWVzc2FnZXMtbGlzdGluZy9tZXNzYWdlcy1saXN0aW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksb0NBQW9DO0VBQ3BDLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLFlBQVk7RUFDWixhQUFhO0VBQ2IsZUFBZTtFQUNmLFlBQVk7RUFDWixnQkFBZ0I7QUFBcEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9tZXNzZW5nZXIvY29tcG9uZW50cy9tZXNzYWdlcy1saXN0aW5nL21lc3NhZ2VzLWxpc3RpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9yZS1idG4td2luIHtcbiAgICAvLyBwYWRkaW5nOiAxNHB4IDExcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiBibGFjaztcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB6LWluZGV4OiA5OTk7XG4gICAgbWFyZ2luLXRvcDogMTZweDtcbiAgfSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/pages/messenger/components/messages-listing/messages-listing.component.ts":
    /*!*******************************************************************************************!*\
      !*** ./src/app/pages/messenger/components/messages-listing/messages-listing.component.ts ***!
      \*******************************************************************************************/

    /*! exports provided: MessagesListingComponent */

    /***/
    function srcAppPagesMessengerComponentsMessagesListingMessagesListingComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MessagesListingComponent", function () {
        return MessagesListingComponent;
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


      var src_app_core_services_global_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/core/services/global/auth.service */
      "./src/app/core/services/global/auth.service.ts");
      /* harmony import */


      var src_app_core_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/core/utils */
      "./src/app/core/utils/index.ts");
      /* harmony import */


      var _messages_form_messages_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../messages-form/messages-form.component */
      "./src/app/pages/messenger/components/messages-form/messages-form.component.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var src_app_core_services_global_socket_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/core/services/global/socket.service */
      "./src/app/core/services/global/socket.service.ts");
      /* harmony import */


      var src_app_shared_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/shared/components */
      "./src/app/shared/components/index.ts");

      var MessagesListingComponent = /*#__PURE__*/function () {
        function MessagesListingComponent(modalController, activatedRoute, socketService, authService) {
          _classCallCheck(this, MessagesListingComponent);

          this.modalController = modalController;
          this.activatedRoute = activatedRoute;
          this.socketService = socketService;
          this.authService = authService;
          this.messages = [];
        }

        _createClass(MessagesListingComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var matching = this.activatedRoute.snapshot.queryParams.matching;

            if (matching) {
              this.openConversation(matching);
            }

            this.getLastMsg();
          }
        }, {
          key: "getLastMsg",
          value: function getLastMsg() {
            var _this3 = this;

            this.socketService.emit('lastMessages', {
              userId: this.authService.user._id
            });
            this.subscription = this.socketService.on('readLastMessages').subscribe(function (messages) {
              _this3.messages = messages;
              console.log(messages);
            });
          }
          /**
           * open conversation popup
           * @param matchingId
           */

        }, {
          key: "openConversation",
          value: function openConversation(matchingId) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var modal;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.modalController.create({
                        component: _messages_form_messages_form_component__WEBPACK_IMPORTED_MODULE_5__["MessagesFormComponent"],
                        componentProps: {
                          matchingId: matchingId
                        }
                      });

                    case 2:
                      modal = _context.sent;
                      this.modalController.dismiss(this.getLastMsg());
                      _context.next = 6;
                      return modal.present();

                    case 6:
                      return _context.abrupt("return", _context.sent);

                    case 7:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
          /**
           * open profile candidate
           */

        }, {
          key: "showCandidate",
          value: function showCandidate(candidateId) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var modal;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.modalController.create({
                        component: src_app_shared_components__WEBPACK_IMPORTED_MODULE_8__["PreviewCandidateComponent"],
                        componentProps: {
                          candidateId: candidateId
                        }
                      });

                    case 2:
                      modal = _context2.sent;
                      this.modalController.dismiss(this.getLastMsg());
                      _context2.next = 6;
                      return modal.present();

                    case 6:
                      return _context2.abrupt("return", _context2.sent);

                    case 7:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
          /**
           * open advertissement
           */

        }, {
          key: "showAdvertissement",
          value: function showAdvertissement(advertissementId) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var modal;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.modalController.create({
                        component: src_app_shared_components__WEBPACK_IMPORTED_MODULE_8__["PreviewAdvertisementComponent"],
                        componentProps: {
                          advertissementId: advertissementId
                        }
                      });

                    case 2:
                      modal = _context3.sent;
                      this.modalController.dismiss(this.getLastMsg());
                      _context3.next = 6;
                      return modal.present();

                    case 6:
                      return _context3.abrupt("return", _context3.sent);

                    case 7:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.subscription) {
              this.subscription.unsubscribe();
            }
          }
          /**
           * go back redirection
           */

        }, {
          key: "goBack",
          value: function goBack() {
            var role = this.authService.user.userRole;
            role === 'Candidate' ? src_app_core_utils__WEBPACK_IMPORTED_MODULE_4__["Redirection"].candidateDashboard() : src_app_core_utils__WEBPACK_IMPORTED_MODULE_4__["Redirection"].dashboard();
          }
        }]);

        return MessagesListingComponent;
      }();

      MessagesListingComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
        }, {
          type: src_app_core_services_global_socket_service__WEBPACK_IMPORTED_MODULE_7__["SocketService"]
        }, {
          type: src_app_core_services_global_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }];
      };

      MessagesListingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-messages-listing',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./messages-listing.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/messenger/components/messages-listing/messages-listing.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./messages-listing.component.scss */
        "./src/app/pages/messenger/components/messages-listing/messages-listing.component.scss"))["default"]]
      })], MessagesListingComponent);
      /***/
    },

    /***/
    "./src/app/pages/messenger/messenger-routing.module.ts":
    /*!*************************************************************!*\
      !*** ./src/app/pages/messenger/messenger-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: MessengerRoutingModule */

    /***/
    function srcAppPagesMessengerMessengerRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MessengerRoutingModule", function () {
        return MessengerRoutingModule;
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


      var _components_messages_listing_messages_listing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components/messages-listing/messages-listing.component */
      "./src/app/pages/messenger/components/messages-listing/messages-listing.component.ts");

      var routes = [{
        path: '',
        component: _components_messages_listing_messages_listing_component__WEBPACK_IMPORTED_MODULE_3__["MessagesListingComponent"]
      }];

      var MessengerRoutingModule = function MessengerRoutingModule() {
        _classCallCheck(this, MessengerRoutingModule);
      };

      MessengerRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], MessengerRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/messenger/messenger.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/pages/messenger/messenger.module.ts ***!
      \*****************************************************/

    /*! exports provided: MessengerModule */

    /***/
    function srcAppPagesMessengerMessengerModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MessengerModule", function () {
        return MessengerModule;
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


      var _messenger_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./messenger-routing.module */
      "./src/app/pages/messenger/messenger-routing.module.ts");
      /* harmony import */


      var _components_messages_listing_messages_listing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components/messages-listing/messages-listing.component */
      "./src/app/pages/messenger/components/messages-listing/messages-listing.component.ts");
      /* harmony import */


      var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/shared.module */
      "./src/app/shared/shared.module.ts");
      /* harmony import */


      var _components_messages_form_messages_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./components/messages-form/messages-form.component */
      "./src/app/pages/messenger/components/messages-form/messages-form.component.ts");

      var MessengerModule = function MessengerModule() {
        _classCallCheck(this, MessengerModule);
      };

      MessengerModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_components_messages_listing_messages_listing_component__WEBPACK_IMPORTED_MODULE_3__["MessagesListingComponent"], _components_messages_form_messages_form_component__WEBPACK_IMPORTED_MODULE_5__["MessagesFormComponent"]],
        imports: [src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _messenger_routing_module__WEBPACK_IMPORTED_MODULE_2__["MessengerRoutingModule"]]
      })], MessengerModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-messenger-messenger-module-es5.js.map