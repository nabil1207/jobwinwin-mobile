(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-files-files-module~pages-notifications-notification-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/notifications/notifications.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/notifications/notifications.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<div class=\"notifications\" *ngIf=\"notifService.notifications.length else Nonotifications\">\n    <ion-list>\n        <ion-list-header>\n            Notifications\n        </ion-list-header>\n        <div class=\"position-relative\" *ngFor=\"let item of notifService.notifications\">\n            <!-- <div class=\"badge-new\">\n                Nouveau \n            </div> --> \n            <ion-item class=\"list-notif\" *ngIf=\"item.type === 'status'\" routerLink=\"/dashboard/advertisement\">\n                <ng-container *ngIf=\"item.advertisement.status ==='Close'\">\n                    <ion-avatar slot=\"start\">\n                        <img [src]=\"item.picture ? (('backend_url' | env) + item.picture.name) : '../../../assets/img/default-image.svg' \" alt=\"Profil\">\n                    </ion-avatar>\n                    <ion-label>\n                        <h2>{{ item.civility }}.{{ item.firstName }} {{ item.lastName }}\n                            <span class=\"date-notif\">{{ item.time | date}}</span>\n                        </h2>\n                        <p>Votre annonce de <span class=\"intitule-annonce\">{{ item.advertisement.desiredJob }}</span>\n                            a été <span style=\"color: red\"> refusée</span> prenez contact avec le responsable\n                        </p>\n                    </ion-label>\n                </ng-container> \n                <ng-container *ngIf=\"item.advertisement.status ==='Ouverte'\">\n                    <ion-avatar slot=\"start\">\n                        <img [src]=\"item.picture ? (('backend_url' | env) + item.picture.name) : '../../../assets/img/default-image.svg' \" alt=\"Profil\">\n                    </ion-avatar>\n                    <ion-label>\n                        <h2>{{ item.civility }}.{{ item.firstName }} {{ item.lastName }}\n                            <span class=\"date-notif\">{{ item.time | date}}</span>\n                        </h2>\n                        <p>Votre annonce de <span class=\"intitule-annonce\"> {{ item.advertisement.desiredJob }}</span>\n                            a été <span style=\"color: green\"> validée</span> vous pouvez commencer à matcher avec des candidats\n                        </p>\n                    </ion-label>\n                </ng-container>\n            </ion-item>\n\n            <ion-item class=\"list-notif\" *ngIf=\"item.type === 'pendingAdvertisement'\"> \n                <ion-avatar slot=\"start\">\n                    <img [src]=\"item.picture ? (('backend_url' | env) + item.picture.name) : '../../../assets/img/default-image.svg' \" alt=\"Profil\">\n                </ion-avatar>\n                <ion-label>\n                    <h2>{{ item.civility }}.{{ item.firstName }} {{ item.lastName }}\n                        <span class=\"date-notif\">{{ item.time | date}}</span>\n                    </h2>\n                    <p>Votre annonce de <span class=\"intitule-annonce\"> {{ item.advertisement.desiredJob }}</span>\n                        est en cours de validation.\n                    </p>\n                </ion-label>\n            </ion-item>\n\n            <ion-item class=\"list-notif\" *ngIf=\"item.type === 'match'\"> \n                <ion-avatar slot=\"start\">\n                    <img src=\"../../../assets/img/default-image.svg\">\n                </ion-avatar>\n                <ion-label>\n                    <h2>\n                        Félicitations ! \n                        <!-- {{ item.firstName }} {{ item.lastName }} -->\n                        <span class=\"date-notif\">{{ item.time | date}}</span>\n                    </h2>\n                    <p> \n                        Vous avez bien Match\n                    </p>\n                </ion-label>\n            </ion-item>\n\n            <ion-item class=\"list-notif\" *ngIf=\"item.type === 'advertisement'\" routerLink=\"/dashboard/advertisement\">\n                <ng-container>\n                    <ion-avatar slot=\"start\">\n                        <img [src]=\"item.picture ? (('backend_url' | env) + item.picture.name) : '../../../assets/img/default-image.svg' \" alt=\"Profil\">\n                    </ion-avatar>\n                    <ion-label>\n                        <h2>{{ item.civility }}.{{ item.firstName }} {{ item.lastName }}\n                            <span class=\"date-notif\">{{ item.time | date}}</span>\n                        </h2>\n                        <p>A crée une annonce de <span class=\"intitule-annonce\"> {{ item.advertisement.desiredJob }}</span>\n                            souhaitez-vous la valider ?\n                        </p>\n                    </ion-label>\n                </ng-container>\n            </ion-item>\n            \n        </div>\n    </ion-list>\n</div>\n<ng-template #Nonotifications>\n    <div class=\"no-notifications\">\n        <ion-icon src=\"./assets/icon/no-notification.svg\"></ion-icon>\n        <p class=\"color-muted text-center\">\n            Vous n'avez pas de notification\n        </p>\n        <!-- <button class=\"btn-parametre\" type=\"button\">\n            Parametre notification\n        </button> -->\n    </div>\n</ng-template>");

/***/ }),

/***/ "./src/app/pages/notifications/notifications.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/pages/notifications/notifications.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".no-notifications {\n  width: 100%;\n}\n\n.no-notifications ion-icon {\n  font-size: 60px;\n  display: block;\n  margin: auto;\n  padding-top: 16px;\n  width: 160px;\n  height: 120px;\n}\n\n.no-notifications p.color-muted {\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 23px;\n  text-align: center;\n  color: #b4b4b4;\n  padding: 16px;\n  margin-bottom: 0 !important;\n}\n\n.notifications .list-notif {\n  margin-top: 1em;\n}\n\n.notifications .list-notif ion-avatar {\n  width: 50px;\n  height: 50px;\n}\n\n.notifications .list-notif ion-label h2 {\n  font-weight: bold;\n  font-size: 14px;\n  line-height: 23px;\n  text-align: left;\n  color: #445ca6;\n  margin-bottom: 5px !important;\n}\n\n.notifications .list-notif ion-label h2 .date-notif {\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 15px;\n  float: right;\n  color: #858585;\n}\n\n.notifications .list-notif ion-label p {\n  font-size: 13px;\n  line-height: 23px;\n  text-align: left;\n  color: #707070;\n  margin: 0 !important;\n  white-space: pre-wrap !important;\n}\n\n.notifications .list-notif ion-label p .intitule-annonce {\n  font-weight: bold;\n}\n\n.notifications .badge-new {\n  position: absolute;\n  z-index: 10;\n  top: -1em;\n  right: 16px;\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 23px;\n  text-align: center;\n  color: #707070;\n  width: 66px;\n  height: 20px;\n  border-radius: 15px 0px;\n  background: rgba(237, 199, 79, 0.6);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbm90aWZpY2F0aW9ucy9ub3RpZmljYXRpb25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztBQUNiOztBQUZBO0VBR0ksZUFBZTtFQUNmLGNBQWM7RUFDZCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixhQUFhO0FBR2pCOztBQVhBO0VBV0ksbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxhQUFhO0VBQ2IsMkJBQTJCO0FBSS9COztBQUFBO0VBR0ksZUFBZTtBQUNuQjs7QUFKQTtFQUtNLFdBQVc7RUFDWCxZQUFZO0FBR2xCOztBQVRBO0VBVVEsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCw2QkFBNkI7QUFHckM7O0FBbEJBO0VBaUJVLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixjQUFjO0FBS3hCOztBQTFCQTtFQXlCUSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLGdDQUFnQztBQUt4Qzs7QUFuQ0E7RUFnQ1UsaUJBQWlCO0FBTzNCOztBQXZDQTtFQXNDSSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFNBQVM7RUFDVCxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxXQUFXO0VBQ1gsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixtQ0FBbUM7QUFLdkMiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ub3RpZmljYXRpb25zL25vdGlmaWNhdGlvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubm8tbm90aWZpY2F0aW9ucyB7XG4gIHdpZHRoOiAxMDAlO1xuICBpb24taWNvbiB7XG4gICAgZm9udC1zaXplOiA2MHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBwYWRkaW5nLXRvcDogMTZweDtcbiAgICB3aWR0aDogMTYwcHg7XG4gICAgaGVpZ2h0OiAxMjBweDtcbiAgfVxuICBwLmNvbG9yLW11dGVkIHtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMjNweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICNiNGI0YjQ7XG4gICAgcGFkZGluZzogMTZweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLm5vdGlmaWNhdGlvbnMge1xuICAubGlzdC1ub3RpZiB7XG4gICAgLy8gYm9yZGVyOiAxcHggc29saWQgI2NlY2VjZTtcbiAgICBtYXJnaW4tdG9wOiAxZW07XG4gICAgaW9uLWF2YXRhciB7XG4gICAgICB3aWR0aDogNTBweDtcbiAgICAgIGhlaWdodDogNTBweDtcbiAgICB9XG4gICAgaW9uLWxhYmVsIHtcbiAgICAgIGgyIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIzcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIGNvbG9yOiAjNDQ1Y2E2O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHggIWltcG9ydGFudDtcbiAgICAgICAgLmRhdGUtbm90aWYge1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICBjb2xvcjogIzg1ODU4NTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIzcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIGNvbG9yOiAjNzA3MDcwO1xuICAgICAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgICAgICAgd2hpdGUtc3BhY2U6IHByZS13cmFwICFpbXBvcnRhbnQ7XG4gICAgICAgIC5pbnRpdHVsZS1hbm5vbmNlIHtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICAuYmFkZ2UtbmV3IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogMTA7XG4gICAgdG9wOiAtMWVtO1xuICAgIHJpZ2h0OiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyM3B4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogIzcwNzA3MDtcbiAgICB3aWR0aDogNjZweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweCAwcHg7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyMzcsIDE5OSwgNzksIDAuNik7XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/pages/notifications/notifications.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/notifications/notifications.component.ts ***!
  \****************************************************************/
/*! exports provided: NotificationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsComponent", function() { return NotificationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_core_services_global_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/global/notification.service */ "./src/app/core/services/global/notification.service.ts");
/* harmony import */ var src_app_core_services_global_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/global/auth.service */ "./src/app/core/services/global/auth.service.ts");




let NotificationsComponent = class NotificationsComponent {
    constructor(notifService, authService) {
        this.notifService = notifService;
        this.authService = authService;
    }
    ngOnInit() {
    }
};
NotificationsComponent.ctorParameters = () => [
    { type: src_app_core_services_global_notification_service__WEBPACK_IMPORTED_MODULE_2__["NotificationService"] },
    { type: src_app_core_services_global_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
NotificationsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-notifications',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./notifications.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/notifications/notifications.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./notifications.component.scss */ "./src/app/pages/notifications/notifications.component.scss")).default]
    })
], NotificationsComponent);



/***/ })

}]);
//# sourceMappingURL=default~pages-files-files-module~pages-notifications-notification-module-es2015.js.map