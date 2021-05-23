(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-notifications-notification-module"],{

/***/ "./src/app/pages/notifications/notification-routing.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/notifications/notification-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: NotificationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationRoutingModule", function() { return NotificationRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _notifications_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notifications.component */ "./src/app/pages/notifications/notifications.component.ts");




const routes = [
    {
        path: '',
        component: _notifications_component__WEBPACK_IMPORTED_MODULE_3__["NotificationsComponent"]
    }
];
let NotificationRoutingModule = class NotificationRoutingModule {
};
NotificationRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], NotificationRoutingModule);



/***/ }),

/***/ "./src/app/pages/notifications/notification.module.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/notifications/notification.module.ts ***!
  \************************************************************/
/*! exports provided: NotificationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationModule", function() { return NotificationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _notification_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notification-routing.module */ "./src/app/pages/notifications/notification-routing.module.ts");
/* harmony import */ var _notifications_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./notifications.component */ "./src/app/pages/notifications/notifications.component.ts");





let NotificationModule = class NotificationModule {
};
NotificationModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_notifications_component__WEBPACK_IMPORTED_MODULE_4__["NotificationsComponent"]],
        imports: [
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
            _notification_routing_module__WEBPACK_IMPORTED_MODULE_3__["NotificationRoutingModule"]
        ]
    })
], NotificationModule);



/***/ })

}]);
//# sourceMappingURL=pages-notifications-notification-module-es2015.js.map