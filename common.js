"use strict";
(self["webpackChunkWarnerPacific"] = self["webpackChunkWarnerPacific"] || []).push([["common"],{

/***/ 53376:
/*!*****************************************************************************!*\
  !*** ./src/app/carrier411/shared/resolvers/carrier411-messages.resolver.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Carrier411MessagesResolver": () => (/* binding */ Carrier411MessagesResolver)
/* harmony export */ });
/* harmony import */ var src_app_shared_constants_tools_list_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/constants/tools-list.enum */ 99485);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_admin_tools_management_services_tool_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/admin/tools-management/services/tool.service */ 92412);



class Carrier411MessagesResolver {
    constructor(toolService) {
        this.toolService = toolService;
    }
    resolve(route, state) {
        return this.toolService.getToolMessages(src_app_shared_constants_tools_list_enum__WEBPACK_IMPORTED_MODULE_0__.ToolsList.Carrier411);
    }
}
Carrier411MessagesResolver.ɵfac = function Carrier411MessagesResolver_Factory(t) { return new (t || Carrier411MessagesResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](src_app_admin_tools_management_services_tool_service__WEBPACK_IMPORTED_MODULE_1__.ToolService)); };
Carrier411MessagesResolver.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: Carrier411MessagesResolver, factory: Carrier411MessagesResolver.ɵfac });


/***/ })

}]);
//# sourceMappingURL=common.js.map