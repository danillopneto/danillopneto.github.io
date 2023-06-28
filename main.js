(self["webpackChunkWarnerPacific"] = self["webpackChunkWarnerPacific"] || []).push([["main"],{

/***/ 86937:
/*!********************************************************!*\
  !*** ./src/app/admin/constants/admin-api.constants.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminApiEndpoints": () => (/* binding */ AdminApiEndpoints)
/* harmony export */ });
let adminApiEndpoints = {
    /* Carriers */
    CreateCarrier: () => '/carriers',
    DeleteCarrier: (id) => `/carriers/${id}`,
    GetCarriers: () => '/carriers',
    GetCarrierById: (id) => `/carriers/${id}`,
    RestoreCarrier: (id) => `/carriers/${id}/restore`,
    UpdateCarrier: (id) => `/carriers/${id}`,
    ValidateDeleteCarrier: () => `/carriers/validate-delete`,
    ValidateRestoreCarrier: () => `/carriers/validate-restore`,
    ValidateUpdateCarrier: (id) => `/carriers/${id}/validate-update`,
    /* Logs*/
    GetLogs: () => `/logs`,
    /* Roles */
    CreateRole: () => `/roles`,
    GetRoleById: (id) => `/roles/${id}`,
    GetRoles: () => `/roles`,
    GetRolesGrouped: () => `/roles/grouped`,
    GetUsersRoles: () => '/roles/users-roles',
    RemoveUserRole: (userId, roleId) => `/roles/${roleId}/user/${userId}`,
    UpdateRole: (id) => `/roles/${id}`,
    ValidateRemoveUserRole: () => `/roles/validate-remove-user-role`,
    /* Regions */
    GetCountries: () => `/countries`,
    GetRegionsWithFilter: () => `/regions`,
    UpdateRegions: () => `/regions/list`,
    ValidateUpdateRegions: () => `/regions/validate-list`,
    /* Tools */
    CreateTool: () => '/tools',
    DeleteTool: (id) => `/tools/${id}`,
    GetManageableTools: () => '/tools/manageable',
    GetToolActiveCarriers: (id) => `/tools/${id}/carriers`,
    GetToolPermissionGroups: (id) => `/tools/${id}/permission-groups`,
    GetToolMessages: (id) => `/tools/${id}/messages`,
    IsToolActiveInCurrentRegion: (id) => `/tools/${id}/region-active`,
    RestoreTool: (id) => `/tools/${id}/restore`,
    UpdateTool: (id) => `/tools/${id}`,
    UpdateToolGeneralInfo: (id) => `/tools/${id}/general-info`,
    UpdateToolManagement: (id) => `/tools/${id}/tool-management`,
    UpdateToolPermissions: (id) => `/tools/${id}/permissions`,
    UpdateToolOrder: (id) => `/tools/${id}/order`,
    UpdateToolAnnouncementMessage: (id) => `/tools/${id}/announcement-message`,
    UpdateToolFavoriteMessage: (id) => `/tools/${id}/favorite-message`,
    UpdateToolWelcomeMessage: (id) => `/tools/${id}/welcome-message`,
    ValidateDeleteTool: () => `/tools/validate-delete`,
    ValidateRestoreTool: () => `/tools/validate-restore`,
    ValidateUpdateTool: (id) => `/tools/${id}/validate-update`,
    ValidateUpdateToolGeneralInfo: (id) => `/tools/${id}/validate-update-general-info`,
    ValidateUpdateToolManagement: (id) => `/tools/${id}/validate-update-tool-management`,
    ValidateUpdateToolPermissions: (id) => `/tools/${id}/validate-update-permissions`,
    /* Users */
    ChangePassword: () => `/users/change-password`,
    GetUsers: () => `/users`,
    GetUserById: (id) => `/users/${id}`,
    CreateUser: () => `/users`,
    DeleteUser: (id) => `/users/${id}`,
    RestoreUser: (id) => `/users/${id}/restore`,
    UpdateUser: (id) => `/users/${id}`,
    UpdateUserRolesByTool: (userId, toolId) => `/users/${userId}/roles/${toolId}`,
    UpdateUserSecurity: (id) => `/users/${id}/security`,
    ValidateDeleteUser: () => `/users/validate-delete`,
    ValidateRestoreUser: () => `/users/validate-restore`,
    ValidateUpdateUserRolesByTool: (userId, toolId) => `/users/${userId}/roles/${toolId}/validate`,
    /* UserTypes */
    GetUserTypes: () => `/user-types`,
    /* FileManager */
    FileOperations: () => `/filemanager/fileoperations`,
    Download: () => `/filemanager/download`,
    DownloadFromFullPath: (fullFilePath) => `/filemanager/downloadfromfullpath?fullFilePath=${fullFilePath}`,
    Upload: () => `/filemanager/upload`,
    GetImage: () => `/filemanager/getimage`,
    /* Resource Center */
    CreateResourceLink: () => `/resourcecenter`,
    DeleteResourceLink: (id) => `/resourcecenter/resource-link/${id}`,
    GetResourceLinkById: (id) => `/resourcecenter/resource-link/${id}`,
    GetResourceLinks: (toolId) => `/resourcecenter/${toolId}/resource-links`,
    SetResourceCenter: () => `/resourcecenter`,
    UpdateResourceLink: (id) => `/resourcecenter/resource-link/${id}`,
    UpdateResourceLinkOrder: (id) => `/resourcecenter/${id}/order`,
    ValidateDeleteResourceLink: () => `/resourcecenter/resource-link/validate-delete`
};
const AdminApiEndpoints = adminApiEndpoints;


/***/ }),

/***/ 95755:
/*!****************************************************************************!*\
  !*** ./src/app/admin/file-management/services/file-manager.api.service.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FileManagerApiService": () => (/* binding */ FileManagerApiService)
/* harmony export */ });
/* harmony import */ var _core_api_base_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/api/base.api.service */ 14089);
/* harmony import */ var _constants_admin_api_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/admin-api.constants */ 86937);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 28784);




class FileManagerApiService extends _core_api_base_api_service__WEBPACK_IMPORTED_MODULE_0__.BaseAPIService {
    constructor(baseApiUrl_Web, http) {
        super(baseApiUrl_Web, http);
    }
    downloadFromFullPath(fullFilePath) {
        return this.http.get(this.constructRequestUrl(_constants_admin_api_constants__WEBPACK_IMPORTED_MODULE_1__.AdminApiEndpoints.DownloadFromFullPath(fullFilePath)), { responseType: 'blob' });
    }
}
FileManagerApiService.ɵfac = function FileManagerApiService_Factory(t) { return new (t || FileManagerApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"]("BASE_API_URL_WEB"), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
FileManagerApiService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: FileManagerApiService, factory: FileManagerApiService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 35755:
/*!************************************************************************!*\
  !*** ./src/app/admin/file-management/services/file-manager.service.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FileManagerService": () => (/* binding */ FileManagerService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _file_manager_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./file-manager.api.service */ 95755);


class FileManagerService {
    constructor(fileManagerApiService) {
        this.fileManagerApiService = fileManagerApiService;
    }
    getFromFullPath(fullFilePath) {
        return this.fileManagerApiService.downloadFromFullPath(fullFilePath);
    }
}
FileManagerService.ɵfac = function FileManagerService_Factory(t) { return new (t || FileManagerService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_file_manager_api_service__WEBPACK_IMPORTED_MODULE_0__.FileManagerApiService)); };
FileManagerService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: FileManagerService, factory: FileManagerService.ɵfac });


/***/ }),

/***/ 59194:
/*!********************************************************************!*\
  !*** ./src/app/admin/region-management/services/region.service.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegionService": () => (/* binding */ RegionService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _regions_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regions.api.service */ 56555);


class RegionService {
    constructor(regionApiService) {
        this.regionApiService = regionApiService;
    }
    getActiveRegions() {
        return this.regionApiService.getWithFilter(undefined, true);
    }
    update(regions) {
        return this.regionApiService.update(regions);
    }
    validateUpdate(regions) {
        return this.regionApiService.validateUpdate(regions);
    }
}
RegionService.ɵfac = function RegionService_Factory(t) { return new (t || RegionService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_regions_api_service__WEBPACK_IMPORTED_MODULE_0__.RegionApiService)); };
RegionService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: RegionService, factory: RegionService.ɵfac });


/***/ }),

/***/ 56555:
/*!*************************************************************************!*\
  !*** ./src/app/admin/region-management/services/regions.api.service.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegionApiService": () => (/* binding */ RegionApiService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _core_api_base_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/api/base.api.service */ 14089);
/* harmony import */ var _constants_admin_api_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/admin-api.constants */ 86937);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);





class RegionApiService extends _core_api_base_api_service__WEBPACK_IMPORTED_MODULE_0__.BaseAPIService {
    constructor(baseApiUrl_Web, http) {
        super(baseApiUrl_Web, http);
    }
    getWithFilter(countryId, active) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams()
            .set('countryId', countryId !== null && countryId !== void 0 ? countryId : '')
            .set('active', active !== null && active !== void 0 ? active : '');
        return this.http.get(this.constructRequestUrl(_constants_admin_api_constants__WEBPACK_IMPORTED_MODULE_1__.AdminApiEndpoints.GetRegionsWithFilter()), { params });
    }
    update(regions) {
        return this.http.patch(this.constructRequestUrl(_constants_admin_api_constants__WEBPACK_IMPORTED_MODULE_1__.AdminApiEndpoints.UpdateRegions()), regions);
    }
    validateUpdate(regions) {
        return this.http.post(this.constructRequestUrl(_constants_admin_api_constants__WEBPACK_IMPORTED_MODULE_1__.AdminApiEndpoints.ValidateUpdateRegions()), regions);
    }
}
RegionApiService.ɵfac = function RegionApiService_Factory(t) { return new (t || RegionApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"]("BASE_API_URL_WEB"), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
RegionApiService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: RegionApiService, factory: RegionApiService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 95995:
/*!*********************************************************************!*\
  !*** ./src/app/admin/tools-management/services/tool.api.service.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToolApiService": () => (/* binding */ ToolApiService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _core_api_base_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/api/base.api.service */ 14089);
/* harmony import */ var _constants_admin_api_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/admin-api.constants */ 86937);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);





class ToolApiService extends _core_api_base_api_service__WEBPACK_IMPORTED_MODULE_0__.BaseAPIService {
    constructor(baseApiUrl_Web, http) {
        super(baseApiUrl_Web, http);
    }
    getManageableTools(isActive) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams()
            .set('isActive', isActive.toString());
        return this.http.get(this.constructRequestUrl(_constants_admin_api_constants__WEBPACK_IMPORTED_MODULE_1__.AdminApiEndpoints.GetManageableTools()), { params });
    }
    getToolPermissionGroups(id) {
        return this.http.get(this.constructRequestUrl(_constants_admin_api_constants__WEBPACK_IMPORTED_MODULE_1__.AdminApiEndpoints.GetToolPermissionGroups(id)));
    }
    getToolActiveCarriers(id) {
        return this.http.get(this.constructRequestUrl(_constants_admin_api_constants__WEBPACK_IMPORTED_MODULE_1__.AdminApiEndpoints.GetToolActiveCarriers(id)));
    }
    isToolActiveInCurrentRegion(toolId) {
        return this.http.get(this.constructRequestUrl(_constants_admin_api_constants__WEBPACK_IMPORTED_MODULE_1__.AdminApiEndpoints.IsToolActiveInCurrentRegion(toolId)));
    }
    createTool(tool, primaryLogo, fullSizeLogo) {
        const formData = new FormData();
        formData.append('toolJsonString', JSON.stringify(tool));
        if (primaryLogo != null)
            formData.append("primaryLogo", primaryLogo);
        if (fullSizeLogo != null)
            formData.append("fullSizeLogo", fullSizeLogo);
        return this.http.post(this.constructRequestUrl(_constants_admin_api_constants__WEBPACK_IMPORTED_MODULE_1__.AdminApiEndpoints.CreateTool()), formData);
    }
    validateUpdate(id, tool, primaryLogo) {
        const formData = new FormData();
        formData.append('toolJsonString', JSON.stringify(tool));
        if (primaryLogo != null)
            formData.append("primaryLogo", primaryLogo);
        return this.http.post(this.constructRequestUrl(_constants_admin_api_constants__WEBPACK_IMPORTED_MODULE_1__.AdminApiEndpoints.ValidateUpdateTool(id)), formData);
    }
    updateTool(id, tool, primaryLogo, fullSizeLogo) {
        const formData = new FormData();
        formData.append('toolJsonString', JSON.stringify(tool));
        if (primaryLogo != null)
            formData.append("primaryLogo", primaryLogo);
        if (fullSizeLogo != null)
            formData.append("fullSizeLogo", fullSizeLogo);
        return this.http.put(this.constructRequestUrl(_constants_admin_api_constants__WEBPACK_IMPORTED_MODULE_1__.AdminApiEndpoints.UpdateTool(id)), formData);
    }
    validateUpdateGeneralInfo(id, tool, primaryLogo) {
        const formData = new FormData();
        formData.append('toolJsonString', JSON.stringify(tool));
        if (primaryLogo != null)
            formData.append("primaryLogo", primaryLogo);
        return this.http.post(this.constructRequestUrl(_constants_admin_api_constants__WEBPACK_IMPORTED_MODULE_1__.AdminApiEndpoints.ValidateUpdateToolGeneralInfo(id)), formData);
    }
    updateGeneralInfo(id, tool, primaryLogo, fullSizeLogo) {
        const formData = new FormData();
        formData.append('toolJsonString', JSON.stringify(tool));
        if (primaryLogo != null)
            formData.append("primaryLogo", primaryLogo);
        if (fullSizeLogo != null)
            formData.append("fullSizeLogo", fullSizeLogo);
        return this.http.put(this.constructRequestUrl(_constants_admin_api_constants__WEBPACK_IMPORTED_MODULE_1__.AdminApiEndpoints.UpdateToolGeneralInfo(id)), formData);
    }
    validateUpdatePermissions(id, tool) {
        return this.http.post(this.constructRequestUrl(_constants_admin_api_constants__WEBPACK_IMPORTED_MODULE_1__.AdminApiEndpoints.ValidateUpdateToolPermissions(id)), tool);
    }
    updatePermissions(id, tool) {
        return this.http.put(this.constructRequestUrl(_constants_admin_api_constants__WEBPACK_IMPORTED_MODULE_1__.AdminApiEndpoints.UpdateToolPermissions(id)), tool);
    }
    validateUpdateToolManagement(id, toolManagement) {
        return this.http.post(this.constructRequestUrl(_constants_admin_api_constants__WEBPACK_IMPORTED_MODULE_1__.AdminApiEndpoints.ValidateUpdateToolManagement(id)), toolManagement);
    }
    updateToolManagement(id, toolManagement) {
        return this.http.put(this.constructRequestUrl(_constants_admin_api_constants__WEBPACK_IMPORTED_MODULE_1__.AdminApiEndpoints.UpdateToolManagement(id)), toolManagement);
    }
    updateToolOrder(id, newOrder) {
        var tool = { order: newOrder };
        return this.http.put(this.constructRequestUrl(_constants_admin_api_constants__WEBPACK_IMPORTED_MODULE_1__.AdminApiEndpoints.UpdateToolOrder(id)), tool);
    }
    validateDelete(tool) {
        return this.http.post(this.constructRequestUrl(_constants_admin_api_constants__WEBPACK_IMPORTED_MODULE_1__.AdminApiEndpoints.ValidateDeleteTool()), tool);
    }
    delete(id) {
        return this.http.delete(this.constructRequestUrl(_constants_admin_api_constants__WEBPACK_IMPORTED_MODULE_1__.AdminApiEndpoints.DeleteTool(id)));
    }
    validateRestore(tool) {
        return this.http.post(this.constructRequestUrl(_constants_admin_api_constants__WEBPACK_IMPORTED_MODULE_1__.AdminApiEndpoints.ValidateRestoreTool()), tool);
    }
    restoreTool(id) {
        return this.http.post(this.constructRequestUrl(_constants_admin_api_constants__WEBPACK_IMPORTED_MODULE_1__.AdminApiEndpoints.RestoreTool(id)), null);
    }
    updateWelcomeMessage(id, welcomeMessage) {
        var tool = { welcomeMessage: welcomeMessage };
        return this.http.put(this.constructRequestUrl(_constants_admin_api_constants__WEBPACK_IMPORTED_MODULE_1__.AdminApiEndpoints.UpdateToolWelcomeMessage(id)), tool);
    }
    updateFavoriteMessage(id, favoriteMessage) {
        var tool = { favoriteMessage: favoriteMessage };
        return this.http.put(this.constructRequestUrl(_constants_admin_api_constants__WEBPACK_IMPORTED_MODULE_1__.AdminApiEndpoints.UpdateToolFavoriteMessage(id)), tool);
    }
    updateAnnouncementMessage(id, announcementMessage) {
        var tool = { announcementMessage: announcementMessage };
        return this.http.put(this.constructRequestUrl(_constants_admin_api_constants__WEBPACK_IMPORTED_MODULE_1__.AdminApiEndpoints.UpdateToolAnnouncementMessage(id)), tool);
    }
    getToolMessages(toolId) {
        return this.http.get(this.constructRequestUrl(_constants_admin_api_constants__WEBPACK_IMPORTED_MODULE_1__.AdminApiEndpoints.GetToolMessages(toolId)));
    }
}
ToolApiService.ɵfac = function ToolApiService_Factory(t) { return new (t || ToolApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"]("BASE_API_URL_WEB"), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
ToolApiService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: ToolApiService, factory: ToolApiService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 92412:
/*!*****************************************************************!*\
  !*** ./src/app/admin/tools-management/services/tool.service.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToolService": () => (/* binding */ ToolService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _tool_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tool.api.service */ 95995);


class ToolService {
    constructor(toolApiService) {
        this.toolApiService = toolApiService;
    }
    getManageableTools(isActive) {
        return this.toolApiService.getManageableTools(isActive);
    }
    getToolPermissionGroups(id) {
        return this.toolApiService.getToolPermissionGroups(id);
    }
    isToolActiveInCurrentRegion(toolId) {
        return this.toolApiService.isToolActiveInCurrentRegion(toolId);
    }
    getToolActiveCarriers(id) {
        return this.toolApiService.getToolActiveCarriers(id);
    }
    createTool(tool, primaryLogo, fullSizeLogo) {
        return this.toolApiService.createTool(tool, primaryLogo, fullSizeLogo);
    }
    validateUpdate(id, tool, primaryLogo) {
        return this.toolApiService.validateUpdate(id, tool, primaryLogo);
    }
    updateTool(id, tool, primaryLogo, fullSizeLogo) {
        return this.toolApiService.updateTool(id, tool, primaryLogo, fullSizeLogo);
    }
    validateUpdateGeneralInfo(id, tool, primaryLogo) {
        return this.toolApiService.validateUpdateGeneralInfo(id, tool, primaryLogo);
    }
    updateGeneralInfo(id, tool, primaryLogo, fullSizeLogo) {
        return this.toolApiService.updateGeneralInfo(id, tool, primaryLogo, fullSizeLogo);
    }
    validateUpdatePermissions(id, tool) {
        return this.toolApiService.validateUpdatePermissions(id, tool);
    }
    updatePermissions(id, tool) {
        return this.toolApiService.updatePermissions(id, tool);
    }
    validateUpdateToolManagement(id, toolManagement) {
        return this.toolApiService.validateUpdateToolManagement(id, toolManagement);
    }
    updateToolManagement(id, toolManagement) {
        return this.toolApiService.updateToolManagement(id, toolManagement);
    }
    updateToolOrder(id, newOrder) {
        return this.toolApiService.updateToolOrder(id, newOrder);
    }
    validateDelete(tool) {
        return this.toolApiService.validateDelete(tool);
    }
    delete(tool) {
        return this.toolApiService.delete(tool.id);
    }
    validateRestore(tool) {
        return this.toolApiService.validateRestore(tool);
    }
    restoreTool(tool) {
        return this.toolApiService.restoreTool(tool.id);
    }
    updateWelcomeMessage(toolId, welcomeMessage) {
        return this.toolApiService.updateWelcomeMessage(toolId, welcomeMessage);
    }
    updateFavoriteMessage(toolId, favoriteMessage) {
        return this.toolApiService.updateFavoriteMessage(toolId, favoriteMessage);
    }
    updateAnnouncementMessage(toolId, welcomeMessage) {
        return this.toolApiService.updateAnnouncementMessage(toolId, welcomeMessage);
    }
    getToolMessages(toolId) {
        return this.toolApiService.getToolMessages(toolId);
    }
}
ToolService.ɵfac = function ToolService_Factory(t) { return new (t || ToolService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_tool_api_service__WEBPACK_IMPORTED_MODULE_0__.ToolApiService)); };
ToolService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ToolService, factory: ToolService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _resource_center_resolvers_resource_center_resolver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resource-center/resolvers/resource-center.resolver */ 75267);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _authentication_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authentication/guards/auth.guard */ 61008);
/* harmony import */ var _authentication_guards_role_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authentication/guards/role.guard */ 43784);
/* harmony import */ var _authentication_guards_user_type_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authentication/guards/user-type.guard */ 56818);
/* harmony import */ var _core_components_app_container_unauthenticated_app_container_unauthenticated_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/components/app-container-unauthenticated/app-container-unauthenticated.component */ 69773);
/* harmony import */ var _core_components_app_container_app_container_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/components/app-container/app-container.component */ 87129);
/* harmony import */ var _core_utils_role_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/utils/role.utils */ 2810);
/* harmony import */ var _dashboard_components_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard/components/dashboard.component */ 41057);
/* harmony import */ var _shared_constants_tools_list_enum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/constants/tools-list.enum */ 99485);
/* harmony import */ var _resource_center_components_resource_center_list_resource_center_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./resource-center/components/resource-center-list/resource-center.component */ 70121);
/* harmony import */ var _shared_resolvers_tool_list_resolver__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/resolvers/tool-list.resolver */ 44809);
/* harmony import */ var _shared_guards_tool_active_region_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/guards/tool-active-region.guard */ 38233);
/* harmony import */ var _carrier411_front_end_guards_carrier411_visible_region_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./carrier411/front-end/guards/carrier411-visible-region.guard */ 85776);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 3184);
















const routes = [
    {
        path: '',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./authentication/authentication.module */ 41082)).then(m => m.AuthenticationModule),
        pathMatch: 'full',
        component: _core_components_app_container_unauthenticated_app_container_unauthenticated_component__WEBPACK_IMPORTED_MODULE_4__.AppContainerUnauthenticatedComponent
    },
    {
        path: 'account',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./authentication/authentication.module */ 41082)).then(m => m.AuthenticationModule),
        component: _core_components_app_container_unauthenticated_app_container_unauthenticated_component__WEBPACK_IMPORTED_MODULE_4__.AppContainerUnauthenticatedComponent
    },
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [_authentication_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard],
        children: [
            { path: 'dashboard', component: _dashboard_components_dashboard_component__WEBPACK_IMPORTED_MODULE_7__.DashboardComponent },
            {
                path: 'admin',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_admin_admin_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./admin/admin.module */ 77095)).then(m => m.AdminModule),
                canActivate: [_authentication_guards_role_guard__WEBPACK_IMPORTED_MODULE_2__.RoleGuard],
                data: { roles: _core_utils_role_utils__WEBPACK_IMPORTED_MODULE_6__.RoleUtils.getToolRoles(_shared_constants_tools_list_enum__WEBPACK_IMPORTED_MODULE_8__.ToolsList.GlobalToolSuite) }
            },
            {
                path: 'carrier411-admin',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_carrier411_admin_carrier411-admin_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./carrier411/admin/carrier411-admin.module */ 82373)).then(m => m.Carrier411AdminModule),
                canActivate: [_shared_guards_tool_active_region_guard__WEBPACK_IMPORTED_MODULE_11__.ToolActiveInRegionGuard, _authentication_guards_role_guard__WEBPACK_IMPORTED_MODULE_2__.RoleGuard],
                data: { toolId: _shared_constants_tools_list_enum__WEBPACK_IMPORTED_MODULE_8__.ToolsList.Carrier411, roles: _core_utils_role_utils__WEBPACK_IMPORTED_MODULE_6__.RoleUtils.getToolRoles(_shared_constants_tools_list_enum__WEBPACK_IMPORTED_MODULE_8__.ToolsList.Carrier411) }
            },
            {
                path: 'carrier411',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_carrier411_front-end_carrier411_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./carrier411/front-end/carrier411.module */ 91858)).then(m => m.Carrier411Module),
                canActivate: [_carrier411_front_end_guards_carrier411_visible_region_guard__WEBPACK_IMPORTED_MODULE_12__.Carrier411VisibleInRegionGuard, _shared_guards_tool_active_region_guard__WEBPACK_IMPORTED_MODULE_11__.ToolActiveInRegionGuard, _authentication_guards_user_type_guard__WEBPACK_IMPORTED_MODULE_3__.UserTypeGuard],
                data: { toolId: _shared_constants_tools_list_enum__WEBPACK_IMPORTED_MODULE_8__.ToolsList.Carrier411 }
            },
            {
                path: 'resource-center',
                component: _resource_center_components_resource_center_list_resource_center_component__WEBPACK_IMPORTED_MODULE_9__.ResourceCenterComponent,
                resolve: { tools: _shared_resolvers_tool_list_resolver__WEBPACK_IMPORTED_MODULE_10__.ToolListResolver, resourceCenter: _resource_center_resolvers_resource_center_resolver__WEBPACK_IMPORTED_MODULE_0__.ResourceCenterListResolver }
            }
        ],
        component: _core_components_app_container_app_container_component__WEBPACK_IMPORTED_MODULE_5__.AppContainerComponent
    }
    //TODO: these are for future use
    //{ path: '404', component: NotFoundComponent },
    //{ path: '**', redirectTo: '/404', pathMatch: 'full' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })], _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule] }); })();


/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _core_services_theme_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/services/theme.service */ 6074);
/* harmony import */ var _shared_services_media_query_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/services/media-query.service */ 134);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ 63947);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);






class AppComponent {
    constructor(renderer, themeService, mediaQueryService, document) {
        this.renderer = renderer;
        this.themeService = themeService;
        this.mediaQueryService = mediaQueryService;
        this.document = document;
        this.title = 'WarnerPacific';
        this.themeService.theme$.subscribe(theme => {
            var _a;
            if (theme[0]) {
                this.renderer.removeClass(this.document.body, theme[0]);
            }
            this.renderer.addClass(this.document.body, (_a = theme[1]) !== null && _a !== void 0 ? _a : '');
        });
        this.mediaQueryService.isMobile$.subscribe((isMobile) => {
            this.setupMediaQueryClasses(isMobile);
        });
    }
    setupMediaQueryClasses(isMobile) {
        if (isMobile) {
            this.renderer.removeClass(this.document.body, 'body-desktop');
            this.renderer.addClass(this.document.body, 'body-mobile');
        }
        else {
            this.renderer.removeClass(this.document.body, 'body-mobile');
            this.renderer.addClass(this.document.body, 'body-desktop');
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_services_theme_service__WEBPACK_IMPORTED_MODULE_0__.ThemeService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_services_media_query_service__WEBPACK_IMPORTED_MODULE_1__.MediaQueryService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 1, consts: [["bdColor", "rgba(255,255,255, 0)", "size", "medium", "color", "#0a7b75", "type", "ball-clip-rotate", 3, "fullScreen"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "ngx-spinner", 0)(1, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("fullScreen", true);
    } }, directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_4__.NgxSpinnerComponent, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterOutlet], styles: [".main-container[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUFDRiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser */ 50318);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/platform-browser/animations */ 73598);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-spinner */ 63947);
/* harmony import */ var _shared_loading_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/loading.module */ 88499);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _dashboard_components_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard/components/dashboard.component */ 41057);
/* harmony import */ var _resource_center_components_resource_center_list_resource_center_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resource-center/components/resource-center-list/resource-center.component */ 70121);
/* harmony import */ var _resource_center_components_resource_link_list_resource_link_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resource-center/components/resource-link-list/resource-link-list.component */ 50449);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/shared.module */ 44466);
/* harmony import */ var _shared_syncfusion_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/syncfusion.module */ 99214);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 19397);
/* harmony import */ var _authentication_jwt_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./authentication/jwt.module */ 47877);
/* harmony import */ var _authentication_services_gait_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./authentication/services/gait.service */ 87526);
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./core/core.module */ 40294);
/* harmony import */ var _core_services_app_startup_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./core/services/app.startup.service */ 49735);
/* harmony import */ var _authentication_services_account_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./authentication/services/account.service */ 94398);
/* harmony import */ var _core_services_theme_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./core/services/theme.service */ 6074);
/* harmony import */ var _authentication_gait_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./authentication/gait.module */ 61150);




// Import library module


// Components




// Modules








//Services






class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({ providers: [
        _authentication_services_account_service__WEBPACK_IMPORTED_MODULE_12__.AccountService,
        _authentication_services_gait_service__WEBPACK_IMPORTED_MODULE_9__.GaitService,
        _core_services_app_startup_service__WEBPACK_IMPORTED_MODULE_11__.AppStartupService,
        {
            provide: _angular_core__WEBPACK_IMPORTED_MODULE_15__.APP_INITIALIZER,
            useFactory: _core_services_app_startup_service__WEBPACK_IMPORTED_MODULE_11__.appStartupServiceFactory,
            deps: [_core_services_app_startup_service__WEBPACK_IMPORTED_MODULE_11__.AppStartupService, _angular_router__WEBPACK_IMPORTED_MODULE_16__.Router],
            multi: true
        },
        _core_services_theme_service__WEBPACK_IMPORTED_MODULE_13__.ThemeService
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__.AppRoutingModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterModule.forRoot([]),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_18__.HttpClientModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__.BrowserAnimationsModule,
            ngx_spinner__WEBPACK_IMPORTED_MODULE_20__.NgxSpinnerModule,
            _shared_loading_module__WEBPACK_IMPORTED_MODULE_0__.LoadingInterceptorModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__.SharedModule,
            _shared_syncfusion_module__WEBPACK_IMPORTED_MODULE_7__.SyncfusionModule,
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_21__.FontAwesomeModule,
            _authentication_jwt_module__WEBPACK_IMPORTED_MODULE_8__.JwtInterceptorModule,
            _authentication_gait_module__WEBPACK_IMPORTED_MODULE_14__.GaitInterceptorModule,
            _core_core_module__WEBPACK_IMPORTED_MODULE_10__.CoreModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _dashboard_components_dashboard_component__WEBPACK_IMPORTED_MODULE_2__.DashboardComponent,
        _resource_center_components_resource_center_list_resource_center_component__WEBPACK_IMPORTED_MODULE_3__.ResourceCenterComponent,
        _resource_center_components_resource_link_list_resource_link_list_component__WEBPACK_IMPORTED_MODULE_4__.ResourceLinkListComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_5__.AppRoutingModule, _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_18__.HttpClientModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__.BrowserAnimationsModule,
        ngx_spinner__WEBPACK_IMPORTED_MODULE_20__.NgxSpinnerModule,
        _shared_loading_module__WEBPACK_IMPORTED_MODULE_0__.LoadingInterceptorModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__.SharedModule,
        _shared_syncfusion_module__WEBPACK_IMPORTED_MODULE_7__.SyncfusionModule,
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_21__.FontAwesomeModule,
        _authentication_jwt_module__WEBPACK_IMPORTED_MODULE_8__.JwtInterceptorModule,
        _authentication_gait_module__WEBPACK_IMPORTED_MODULE_14__.GaitInterceptorModule,
        _core_core_module__WEBPACK_IMPORTED_MODULE_10__.CoreModule] }); })();


/***/ }),

/***/ 33365:
/*!*****************************************************************!*\
  !*** ./src/app/authentication/authentication-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthenticationRoutingModule": () => (/* binding */ AuthenticationRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/forgot-password/forgot-password.component */ 90001);
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/login/login.component */ 67801);
/* harmony import */ var _components_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/reset-password/reset-password.component */ 39142);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);






const childRoutes = [
    { path: '', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent },
    { path: 'forgot-password', component: _components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_0__.ForgotPasswordComponent },
    { path: 'reset-password', component: _components_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_2__.ResetPasswordComponent }
];
class AuthenticationRoutingModule {
}
AuthenticationRoutingModule.ɵfac = function AuthenticationRoutingModule_Factory(t) { return new (t || AuthenticationRoutingModule)(); };
AuthenticationRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AuthenticationRoutingModule });
AuthenticationRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(childRoutes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AuthenticationRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 41082:
/*!*********************************************************!*\
  !*** ./src/app/authentication/authentication.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthenticationModule": () => (/* binding */ AuthenticationModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/shared.module */ 44466);
/* harmony import */ var _shared_syncfusion_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/syncfusion.module */ 99214);
/* harmony import */ var _authentication_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authentication-routing.module */ 33365);
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/login/login.component */ 67801);
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/account.service */ 94398);
/* harmony import */ var _components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/forgot-password/forgot-password.component */ 90001);
/* harmony import */ var _components_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/reset-password/reset-password.component */ 39142);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);











class AuthenticationModule {
}
AuthenticationModule.ɵfac = function AuthenticationModule_Factory(t) { return new (t || AuthenticationModule)(); };
AuthenticationModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AuthenticationModule });
AuthenticationModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ providers: [
        _services_account_service__WEBPACK_IMPORTED_MODULE_4__.AccountService
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
            _shared_syncfusion_module__WEBPACK_IMPORTED_MODULE_1__.SyncfusionModule,
            _authentication_routing_module__WEBPACK_IMPORTED_MODULE_2__.AuthenticationRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AuthenticationModule, { declarations: [_components_login_login_component__WEBPACK_IMPORTED_MODULE_3__.LoginComponent,
        _components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_5__.ForgotPasswordComponent,
        _components_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_6__.ResetPasswordComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        _shared_syncfusion_module__WEBPACK_IMPORTED_MODULE_1__.SyncfusionModule,
        _authentication_routing_module__WEBPACK_IMPORTED_MODULE_2__.AuthenticationRoutingModule] }); })();


/***/ }),

/***/ 90001:
/*!****************************************************************************************!*\
  !*** ./src/app/authentication/components/forgot-password/forgot-password.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotPasswordComponent": () => (/* binding */ ForgotPasswordComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _core_services_result_handler_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/services/result.handler.service */ 32464);
/* harmony import */ var _shared_services_input_validator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/input-validator.service */ 68516);
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/account.service */ 94398);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _syncfusion_ej2_angular_inputs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @syncfusion/ej2-angular-inputs */ 53691);
/* harmony import */ var _shared_components_field_error_display_field_error_display_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/field-error-display/field-error-display.component */ 76530);
/* harmony import */ var _syncfusion_ej2_angular_buttons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @syncfusion/ej2-angular-buttons */ 78218);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 52816);












class ForgotPasswordComponent {
    constructor(resultHandler, inputValidatorService, fb, accountService) {
        this.resultHandler = resultHandler;
        this.inputValidatorService = inputValidatorService;
        this.fb = fb;
        this.accountService = accountService;
        this.showMessage = false;
        this.isSuccess = false;
    }
    ngOnInit() {
        this.initializeForm();
    }
    initializeForm() {
        this.form = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.email]]
        });
    }
    forgotPassword() {
        let formValues = this.form.value;
        let forgotPasswordDto = {
            email: formValues.email,
            clientUri: _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.client.baseUrl
        };
        this.accountService.forgotPassword(forgotPasswordDto).subscribe((data) => { this.resultHandler.handle(data); }, (err) => { this.resultHandler.handle(err.error); });
    }
}
ForgotPasswordComponent.ɵfac = function ForgotPasswordComponent_Factory(t) { return new (t || ForgotPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_services_result_handler_service__WEBPACK_IMPORTED_MODULE_1__.ResultHandlerService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_shared_services_input_validator_service__WEBPACK_IMPORTED_MODULE_2__.InputValidatorService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_account_service__WEBPACK_IMPORTED_MODULE_3__.AccountService)); };
ForgotPasswordComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: ForgotPasswordComponent, selectors: [["app-forgot-password"]], decls: 25, vars: 3, consts: [[1, "container-fluid", "forgot-container", "align-middle-vh", "fd-c", "pos-abs-top"], [1, "header", "align-middle", "fd-c", "mb-3", "mt-auto"], ["src", "assets/images/logo-wp-light-small.png", "width", "60", 1, "logo"], ["autocomplete", "off", "novalidate", "", 1, "w-100", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["autocomplete", "off", "floatLabelType", "Always", "formControlName", "email", "placeholder", "Email", "required", ""], ["errorMsg", "* Email is required", 3, "displayError"], ["errorMsg", "* Please enter a valid email", 3, "displayError"], [1, "row", "pt-3"], [1, "col-md-5"], ["ejs-button", "", "type", "button", "routerLink", "/", 1, "e-flat", "w-100"], [1, "col-md-5", "offset-md-2"], ["ejs-button", "", "type", "submit", 1, "e-success", "w-100"], [1, "footer", "mb-2", "mt-auto"], [1, "w-100"], ["routerLink", "/"]], template: function ForgotPasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "page-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Forgot Password?");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "Please enter in your email to reset your password.");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "Must be email associated to account.");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngSubmit", function ForgotPasswordComponent_Template_form_ngSubmit_9_listener() { return ctx.form.valid && ctx.forgotPassword(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](11, "ejs-textbox", 5)(12, "app-field-error-display", 6)(13, "app-field-error-display", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 8)(15, "div", 9)(16, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 11)(19, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "div", 13)(22, "div", 14)(23, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("displayError", ctx.inputValidatorService.isInvalidRequired(ctx.form, "email"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("displayError", ctx.inputValidatorService.isInvalidEmail(ctx.form, "email"));
    } }, directives: [_shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_4__.PageTitleComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _syncfusion_ej2_angular_inputs__WEBPACK_IMPORTED_MODULE_8__.TextBoxComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RequiredValidator, _shared_components_field_error_display_field_error_display_component__WEBPACK_IMPORTED_MODULE_5__.FieldErrorDisplayComponent, _syncfusion_ej2_angular_buttons__WEBPACK_IMPORTED_MODULE_9__.ButtonComponent, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLinkWithHref], styles: [".forgot-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  max-width: 500px;\n}\n.forgot-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  text-align: left;\n  width: 100%;\n}\n.forgot-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  max-width: 400px;\n}\n.forgot-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--graymedium);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGdCQUFBO0FBQUo7QUFFSTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtBQUFOO0FBSUU7RUFDRSxnQkFBQTtBQUZKO0FBS0U7RUFDRSxlQUFBO0VBQ0Esd0JBQUE7QUFISiIsImZpbGUiOiJmb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9yZ290LWNvbnRhaW5lciB7XHJcbiAgLmhlYWRlciB7XHJcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG5cclxuICAgIGxhYmVsIHtcclxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmb3JtIHtcclxuICAgIG1heC13aWR0aDogNDAwcHg7XHJcbiAgfVxyXG5cclxuICBhIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiB2YXIoLS1ncmF5bWVkaXVtKTtcclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 67801:
/*!********************************************************************!*\
  !*** ./src/app/authentication/components/login/login.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _forms_login_form_group__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../forms/login-form-group */ 9910);
/* harmony import */ var src_app_shared_constants_application_urls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/constants/application-urls */ 85561);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/account.service */ 94398);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _core_services_result_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/services/result.handler.service */ 32464);
/* harmony import */ var _shared_services_input_validator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/input-validator.service */ 68516);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _syncfusion_ej2_angular_inputs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @syncfusion/ej2-angular-inputs */ 53691);
/* harmony import */ var _shared_components_field_error_display_field_error_display_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/field-error-display/field-error-display.component */ 76530);
/* harmony import */ var _syncfusion_ej2_angular_buttons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @syncfusion/ej2-angular-buttons */ 78218);













const _c0 = function (a0) { return [a0]; };
function LoginComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 1)(1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "page-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "Please login to your account to access secure content");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "form", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngSubmit", function LoginComponent_div_0_Template_form_ngSubmit_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r1.login(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "ejs-textbox", 7)(10, "app-field-error-display", 8)(11, "app-field-error-display", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](13, "ejs-textbox", 10)(14, "app-field-error-display", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "div", 12)(16, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, "Forgot password?");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 14)(19, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "div", 16)(22, "div", 17)(23, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24, "Home");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("displayError", ctx_r0.inputValidatorService.isInvalidRequired(ctx_r0.form, "username"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("displayError", ctx_r0.inputValidatorService.isInvalidEmail(ctx_r0.form, "username"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("displayError", ctx_r0.inputValidatorService.isInvalidRequired(ctx_r0.form, "password"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](5, _c0, ctx_r0.forgotPasswordUrl));
} }
class LoginComponent {
    constructor(accountService, route, router, resultHandler, inputValidatorService) {
        this.accountService = accountService;
        this.route = route;
        this.router = router;
        this.resultHandler = resultHandler;
        this.inputValidatorService = inputValidatorService;
        this.bypassingLogin = true; // So the login component doesn't flash on screen before the redirect when authenticated
        this.forgotPasswordUrl = src_app_shared_constants_application_urls__WEBPACK_IMPORTED_MODULE_1__.ApplicationUrls.Account.ForgotPassword.path;
        this.checkIfUserLoggedIn();
    }
    checkIfUserLoggedIn() {
        if (!this.accountService.isValidAuthPersisted()) {
            this.bypassingLogin = false;
            return;
        }
        this.bypassingLogin = true;
        this.navigateAfterLogin();
    }
    ngOnInit() {
        this.form = (0,_forms_login_form_group__WEBPACK_IMPORTED_MODULE_0__.getLoginFormGroup)();
    }
    login() {
        if (!this.form.valid) {
            return;
        }
        this.accountService.login(this.form.value).subscribe((data) => {
            this.resultHandler.handle(data).then((success) => {
                if (success) {
                    this.navigateAfterLogin();
                }
            });
        }, (err) => {
            this.resultHandler.handle(err.error);
        });
    }
    navigateAfterLogin() {
        // get return url from route parameters or default to ''
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || src_app_shared_constants_application_urls__WEBPACK_IMPORTED_MODULE_1__.ApplicationUrls.Dashboard.path;
        this.router.navigateByUrl(this.returnUrl);
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_account_service__WEBPACK_IMPORTED_MODULE_2__.AccountService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_services_result_handler_service__WEBPACK_IMPORTED_MODULE_3__.ResultHandlerService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_shared_services_input_validator_service__WEBPACK_IMPORTED_MODULE_4__.InputValidatorService)); };
LoginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 1, vars: 1, consts: [["class", "container-fluid login-container align-middle-vh fd-c pos-abs-top", 4, "ngIf"], [1, "container-fluid", "login-container", "align-middle-vh", "fd-c", "pos-abs-top"], [1, "fd-c", "align-middle", "mt-auto"], ["src", "assets/images/logo-wp-light-small.png", "width", "60", 1, "logo"], [1, "mb-4"], [1, "w-100", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["autocomplete", "off", "floatLabelType", "Always", "formControlName", "username", "placeholder", "Email", "required", ""], ["errorMsg", "* Username is required", 3, "displayError"], ["errorMsg", "* Please enter a valid username", 3, "displayError"], ["autocomplete", "off", "floatLabelType", "Always", "formControlName", "password", "maxlength", "255", "placeholder", "Password", "required", "", "type", "password"], ["errorMsg", "* Password is required", 3, "displayError"], [1, "my-3", "w-100"], [3, "routerLink"], [1, "mt-3"], ["ejs-button", "", 1, "e-success", "w-100"], [1, "footer", "mt-auto"], [1, "w-100"], ["routerLink", "/"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, LoginComponent_div_0_Template, 25, 7, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.bypassingLogin);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_5__.PageTitleComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective, _syncfusion_ej2_angular_inputs__WEBPACK_IMPORTED_MODULE_11__.TextBoxComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.RequiredValidator, _shared_components_field_error_display_field_error_display_component__WEBPACK_IMPORTED_MODULE_6__.FieldErrorDisplayComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.MaxLengthValidator, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLinkWithHref, _syncfusion_ej2_angular_buttons__WEBPACK_IMPORTED_MODULE_12__.ButtonComponent], styles: [".login-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  max-width: 500px;\n}\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  max-width: 400px;\n}\n.login-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--graymedium);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsZ0JBQUE7QUFBSjtBQUdFO0VBQ0UsZ0JBQUE7QUFESjtBQUlFO0VBQ0UsZUFBQTtFQUNBLHdCQUFBO0FBRkoiLCJmaWxlIjoibG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4tY29udGFpbmVyIHtcclxuICAuaGVhZGVyIHtcclxuICAgIG1heC13aWR0aDogNTAwcHg7XHJcbiAgfVxyXG5cclxuICBmb3JtIHtcclxuICAgIG1heC13aWR0aDogNDAwcHg7XHJcbiAgfVxyXG5cclxuICBhIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiB2YXIoLS1ncmF5bWVkaXVtKTtcclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 39142:
/*!**************************************************************************************!*\
  !*** ./src/app/authentication/components/reset-password/reset-password.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResetPasswordComponent": () => (/* binding */ ResetPasswordComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _shared_services_input_validator_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/services/input-validator.service */ 68516);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/account.service */ 94398);
/* harmony import */ var _core_services_result_handler_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/services/result.handler.service */ 32464);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _syncfusion_ej2_angular_inputs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @syncfusion/ej2-angular-inputs */ 53691);
/* harmony import */ var _shared_components_field_error_display_field_error_display_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/field-error-display/field-error-display.component */ 76530);
/* harmony import */ var _syncfusion_ej2_angular_buttons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @syncfusion/ej2-angular-buttons */ 78218);











class ResetPasswordComponent {
    constructor(fb, inputValidatorService, route, accountService, resultHandler) {
        this.fb = fb;
        this.inputValidatorService = inputValidatorService;
        this.route = route;
        this.accountService = accountService;
        this.resultHandler = resultHandler;
        this.token = this.route.snapshot.queryParams['token'];
        this.email = this.route.snapshot.queryParams['email'];
        if (!this.token || !this.email) {
            this.accountService.logout();
        }
    }
    ngOnInit() {
        this.initializeForm();
    }
    initializeForm() {
        this.form = this.fb.group({
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]
        });
    }
    resetPassword() {
        this.form.markAllAsTouched();
        this.form.markAsDirty();
        const resetPassFormValues = this.form.value;
        const resetPassDto = {
            password: resetPassFormValues.password,
            confirmPassword: resetPassFormValues.confirmPassword,
            token: this.token,
            email: this.email
        };
        this.accountService.resetPassword(resetPassDto).subscribe((data) => { this.resultHandler.handle(data); }, (err) => { this.resultHandler.handle(err.error); });
    }
}
ResetPasswordComponent.ɵfac = function ResetPasswordComponent_Factory(t) { return new (t || ResetPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_services_input_validator_service__WEBPACK_IMPORTED_MODULE_0__.InputValidatorService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_account_service__WEBPACK_IMPORTED_MODULE_1__.AccountService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_services_result_handler_service__WEBPACK_IMPORTED_MODULE_2__.ResultHandlerService)); };
ResetPasswordComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: ResetPasswordComponent, selectors: [["app-reset-password"]], decls: 20, vars: 4, consts: [[1, "container-fluid", "reset-container", "align-middle-vh", "fd-c", "pos-abs-top"], [1, "header", "align-middle", "fd-c", "mt-auto"], ["src", "assets/images/logo-wp-light-small.png", "width", "60", 1, "logo"], [1, "w-100", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["autocomplete", "off", "floatLabelType", "Always", "formControlName", "password", "maxlength", "255", "placeholder", "Password", "required", "", "type", "password"], ["errorMsg", "* New password is required", 3, "displayError"], [1, "form-group", "mt-3"], ["autocomplete", "off", "floatLabelType", "Always", "formControlName", "confirmPassword", "maxlength", "255", "placeholder", "Confirm Password", "required", "", "type", "password"], ["errorMsg", "* You need to confirm your new password", 3, "displayError"], ["errorMsg", "* Passwords must match", 3, "displayError"], [1, "mt-3"], ["ejs-button", "", 1, "e-success", "w-100"], [1, "footer", "mb-2", "mt-auto"], [1, "w-100"], ["routerLink", "/"]], template: function ResetPasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "page-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Reset password");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function ResetPasswordComponent_Template_form_ngSubmit_5_listener() { return ctx.form.valid && ctx.resetPassword(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "ejs-textbox", 5)(8, "app-field-error-display", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "ejs-textbox", 8)(11, "app-field-error-display", 9)(12, "app-field-error-display", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 11)(14, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 13)(17, "div", 14)(18, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("displayError", ctx.inputValidatorService.isInvalidRequired(ctx.form, "password"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("displayError", ctx.inputValidatorService.isInvalidRequired(ctx.form, "confirmPassword"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("displayError", ctx.inputValidatorService.areDifferentValues(ctx.form, "password", "confirmPassword"));
    } }, directives: [_shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_3__.PageTitleComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _syncfusion_ej2_angular_inputs__WEBPACK_IMPORTED_MODULE_8__.TextBoxComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _shared_components_field_error_display_field_error_display_component__WEBPACK_IMPORTED_MODULE_4__.FieldErrorDisplayComponent, _syncfusion_ej2_angular_buttons__WEBPACK_IMPORTED_MODULE_9__.ButtonComponent, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkWithHref], styles: [".reset-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  max-width: 500px;\n}\n.reset-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  max-width: 400px;\n}\n.reset-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--graymedium);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc2V0LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsZ0JBQUE7QUFBSjtBQUdFO0VBQ0UsZ0JBQUE7QUFESjtBQUlFO0VBQ0UsZUFBQTtFQUNBLHdCQUFBO0FBRkoiLCJmaWxlIjoicmVzZXQtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVzZXQtY29udGFpbmVyIHtcclxuICAuaGVhZGVyIHtcclxuICAgIG1heC13aWR0aDogNTAwcHg7XHJcbiAgfVxyXG5cclxuICBmb3JtIHtcclxuICAgIG1heC13aWR0aDogNDAwcHg7XHJcbiAgfVxyXG5cclxuICBhIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiB2YXIoLS1ncmF5bWVkaXVtKTtcclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 82818:
/*!**************************************************************************!*\
  !*** ./src/app/authentication/constants/authentication-api.constants.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthenticationApiEndpoints": () => (/* binding */ AuthenticationApiEndpoints)
/* harmony export */ });
let authenticationEndpoints = {
    /* Gait */
    AuthenticateGaitUser: () => '/gait/authenticate',
    /* Account */
    LoginAdministrator: () => '/account/login',
    ForgotPassword: () => '/account/forgot-password',
    RefreshToken: () => '/account/refresh-token',
    ResetPassword: () => '/account/reset-password',
};
const AuthenticationApiEndpoints = authenticationEndpoints;


/***/ }),

/***/ 84128:
/*!****************************************************************!*\
  !*** ./src/app/authentication/constants/gait-api.constants.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GaitApiEndpoints": () => (/* binding */ GaitApiEndpoints)
/* harmony export */ });
let gaitEndpoints = {
    /* Gait */
    CheckContext: (context) => `/gait/check-context/${context}`,
    RefreshContext: (context) => `/gait/refresh-context/${context}`,
    DeleteContext: (context) => `/gait/delete-context/${context}`
};
const GaitApiEndpoints = gaitEndpoints;


/***/ }),

/***/ 9910:
/*!**********************************************************!*\
  !*** ./src/app/authentication/forms/login-form-group.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getLoginFormGroup": () => (/* binding */ getLoginFormGroup)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _syncfusion_ej2_angular_inputs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-angular-inputs */ 53691);


function getLoginFormGroup() {
    return new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormGroup({
        username: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl('', [_syncfusion_ej2_angular_inputs__WEBPACK_IMPORTED_MODULE_1__.FormValidators.required, _syncfusion_ej2_angular_inputs__WEBPACK_IMPORTED_MODULE_1__.FormValidators.email]),
        password: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl('', [_syncfusion_ej2_angular_inputs__WEBPACK_IMPORTED_MODULE_1__.FormValidators.required])
    });
}


/***/ }),

/***/ 61150:
/*!***********************************************!*\
  !*** ./src/app/authentication/gait.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GaitInterceptorModule": () => (/* binding */ GaitInterceptorModule)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _interceptors_gait_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interceptors/gait.interceptor */ 10106);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);



class GaitInterceptorModule {
}
GaitInterceptorModule.ɵfac = function GaitInterceptorModule_Factory(t) { return new (t || GaitInterceptorModule)(); };
GaitInterceptorModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: GaitInterceptorModule });
GaitInterceptorModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ providers: [
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HTTP_INTERCEPTORS, useClass: _interceptors_gait_interceptor__WEBPACK_IMPORTED_MODULE_0__.GaitInterceptor, multi: true, }
    ] });


/***/ }),

/***/ 61008:
/*!*****************************************************!*\
  !*** ./src/app/authentication/guards/auth.guard.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/account.service */ 94398);



class AuthGuard {
    constructor(accountService) {
        this.accountService = accountService;
    }
    canActivate(route, state) {
        const isAuthenticated = this.accountService.isValidAuthPersisted();
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(isAuthenticated);
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_services_account_service__WEBPACK_IMPORTED_MODULE_0__.AccountService)); };
AuthGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 43784:
/*!*****************************************************!*\
  !*** ./src/app/authentication/guards/role.guard.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoleGuard": () => (/* binding */ RoleGuard)
/* harmony export */ });
/* harmony import */ var src_app_shared_utilities_string_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/utilities/string-utils */ 34686);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/account.service */ 94398);
/* harmony import */ var src_app_core_services_region_selector_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/region-selector.service */ 69442);
/* harmony import */ var src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/toast.service */ 31443);






class RoleGuard {
    constructor(router, accountService, regionSelectorService, toastService) {
        this.router = router;
        this.accountService = accountService;
        this.regionSelectorService = regionSelectorService;
        this.toastService = toastService;
    }
    canActivate(route, state) {
        var requiredRoles = route.data["roles"];
        if (!(requiredRoles instanceof Array) || requiredRoles.length === 0) {
            return true;
        }
        requiredRoles = this.handleRegionOnRoles(requiredRoles);
        const user = this.accountService.getCurrentUser();
        const hasRequiredRole = requiredRoles.some((role) => { var _a; return (_a = user === null || user === void 0 ? void 0 : user.roles) === null || _a === void 0 ? void 0 : _a.includes(role); });
        if (!hasRequiredRole) {
            this.router.navigate(['/']);
            this.toastService.show({ content: 'Access denied!', icon: 'error' });
        }
        return hasRequiredRole;
    }
    handleRegionOnRoles(roles) {
        const currentRegion = this.regionSelectorService.getCurrentAbbreviation();
        return roles.map((role) => {
            return src_app_shared_utilities_string_utils__WEBPACK_IMPORTED_MODULE_0__.StringUtils.format(role, '.', currentRegion);
        });
    }
}
RoleGuard.separator = ".";
RoleGuard.ɵfac = function RoleGuard_Factory(t) { return new (t || RoleGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_services_account_service__WEBPACK_IMPORTED_MODULE_1__.AccountService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](src_app_core_services_region_selector_service__WEBPACK_IMPORTED_MODULE_2__.RegionSelectorService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_3__.ToastService)); };
RoleGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: RoleGuard, factory: RoleGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 56818:
/*!**********************************************************!*\
  !*** ./src/app/authentication/guards/user-type.guard.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserTypeGuard": () => (/* binding */ UserTypeGuard)
/* harmony export */ });
/* harmony import */ var D_source_thinklogic_Tools_WarnerPacific_Tools_Web_Angular_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 83918);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 78611);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/account.service */ 94398);
/* harmony import */ var src_app_admin_tools_management_services_tool_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/admin/tools-management/services/tool.service */ 92412);
/* harmony import */ var src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/toast.service */ 31443);







class UserTypeGuard {
  constructor(router, accountService, toolService, toastService) {
    this.router = router;
    this.accountService = accountService;
    this.toolService = toolService;
    this.toastService = toastService;
  }

  canActivate(route, state) {
    var _this = this;

    return (0,D_source_thinklogic_Tools_WarnerPacific_Tools_Web_Angular_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var toolId = route.data["toolId"];

      if (!(typeof toolId === 'number') || toolId == null || toolId == 0) {
        return true;
      }

      const user = _this.accountService.getCurrentUser();

      if (user == null) return false;
      const response = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.lastValueFrom)(_this.toolService.getToolPermissionGroups(Number(toolId)));
      const userTypeAllowed = response.isSuccess && response.value.includes(user.userType);

      if (!userTypeAllowed) {
        _this.router.navigate(['/']);

        _this.toastService.show({
          content: 'Access denied!',
          icon: 'error'
        });
      }

      return userTypeAllowed;
    })();
  }

}

UserTypeGuard.ɵfac = function UserTypeGuard_Factory(t) {
  return new (t || UserTypeGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_services_account_service__WEBPACK_IMPORTED_MODULE_1__.AccountService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](src_app_admin_tools_management_services_tool_service__WEBPACK_IMPORTED_MODULE_2__.ToolService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_3__.ToastService));
};

UserTypeGuard.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
  token: UserTypeGuard,
  factory: UserTypeGuard.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 10106:
/*!*****************************************************************!*\
  !*** ./src/app/authentication/interceptors/gait.interceptor.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GaitInterceptor": () => (/* binding */ GaitInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/account.service */ 94398);
/* harmony import */ var _services_gait_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/gait.service */ 87526);



class GaitInterceptor {
    constructor(accountService, gaitService) {
        this.accountService = accountService;
        this.gaitService = gaitService;
    }
    intercept(request, next) {
        let currentUser = this.accountService.getCurrentUser(true);
        if (currentUser && currentUser.contextId) {
            this.gaitService.refreshContextId(currentUser.contextId);
        }
        return next.handle(request);
    }
}
GaitInterceptor.ɵfac = function GaitInterceptor_Factory(t) { return new (t || GaitInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_services_account_service__WEBPACK_IMPORTED_MODULE_0__.AccountService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_services_gait_service__WEBPACK_IMPORTED_MODULE_1__.GaitService)); };
GaitInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: GaitInterceptor, factory: GaitInterceptor.ɵfac });


/***/ }),

/***/ 99344:
/*!****************************************************************!*\
  !*** ./src/app/authentication/interceptors/jwt.interceptor.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JwtInterceptor": () => (/* binding */ JwtInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 25474);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 53158);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 32673);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 60116);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 59295);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/account.service */ 94398);
/* harmony import */ var src_app_core_services_app_startup_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/app.startup.service */ 49735);






const TOKEN_HEADER_KEY = 'Authorization';
class JwtInterceptor {
    constructor(accountService, appStartupService) {
        this.accountService = accountService;
        this.appStartupService = appStartupService;
        this.isRefreshing = false;
        this.refreshTokenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(null);
    }
    intercept(request, next) {
        const user = this.accountService.getCurrentUser();
        if (user) {
            request = this.addTokenHeader(request, user.token);
        }
        return next.handle(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(error => {
            if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpErrorResponse &&
                error.status === 401 &&
                !this.appStartupService.isOnAccountPage()) {
                return this.handle401Error(request, next);
            }
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(error);
        }));
    }
    handle401Error(request, next) {
        if (!this.isRefreshing) {
            this.isRefreshing = true;
            this.refreshTokenSubject.next(null);
            const user = this.accountService.getCurrentUser();
            if (!user)
                return next.handle(request);
            const tokenDTO = {
                accessToken: user.token,
                refreshToken: user.refreshToken
            };
            return this.accountService.refreshToken(tokenDTO).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)((result) => {
                if (result.isSuccess) {
                    const token = result.value;
                    this.isRefreshing = false;
                    this.accountService.updateTokens(token);
                    this.refreshTokenSubject.next(token.accessToken);
                    return next.handle(this.addTokenHeader(request, token.accessToken));
                }
                else {
                    this.isRefreshing = false;
                    this.accountService.logout();
                    return next.handle(request);
                }
            }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)((err) => {
                this.isRefreshing = false;
                this.accountService.logout();
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(err);
            }));
        }
        return this.refreshTokenSubject.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.filter)(token => token !== null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)((token) => next.handle(this.addTokenHeader(request, token))));
    }
    addTokenHeader(request, token) {
        return request.clone({ headers: request.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token) });
    }
}
JwtInterceptor.ɵfac = function JwtInterceptor_Factory(t) { return new (t || JwtInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_services_account_service__WEBPACK_IMPORTED_MODULE_0__.AccountService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](src_app_core_services_app_startup_service__WEBPACK_IMPORTED_MODULE_1__.AppStartupService)); };
JwtInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({ token: JwtInterceptor, factory: JwtInterceptor.ɵfac });


/***/ }),

/***/ 47877:
/*!**********************************************!*\
  !*** ./src/app/authentication/jwt.module.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JwtInterceptorModule": () => (/* binding */ JwtInterceptorModule)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _interceptors_jwt_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interceptors/jwt.interceptor */ 99344);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);



class JwtInterceptorModule {
}
JwtInterceptorModule.ɵfac = function JwtInterceptorModule_Factory(t) { return new (t || JwtInterceptorModule)(); };
JwtInterceptorModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: JwtInterceptorModule });
JwtInterceptorModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ providers: [
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HTTP_INTERCEPTORS, useClass: _interceptors_jwt_interceptor__WEBPACK_IMPORTED_MODULE_0__.JwtInterceptor, multi: true, }
    ] });


/***/ }),

/***/ 51889:
/*!****************************************************************!*\
  !*** ./src/app/authentication/services/account.api.service.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountApiService": () => (/* binding */ AccountApiService)
/* harmony export */ });
/* harmony import */ var _core_api_base_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/api/base.api.service */ 14089);
/* harmony import */ var _constants_authentication_api_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/authentication-api.constants */ 82818);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 28784);




class AccountApiService extends _core_api_base_api_service__WEBPACK_IMPORTED_MODULE_0__.BaseAPIService {
    constructor(baseApiUrl_Web, http) {
        super(baseApiUrl_Web, http);
    }
    login(login) {
        return this.http.post(this.constructRequestUrl(_constants_authentication_api_constants__WEBPACK_IMPORTED_MODULE_1__.AuthenticationApiEndpoints.LoginAdministrator()), login);
    }
    forgotPassword(forgotPasswordDto) {
        return this.http.post(this.constructRequestUrl(_constants_authentication_api_constants__WEBPACK_IMPORTED_MODULE_1__.AuthenticationApiEndpoints.ForgotPassword()), forgotPasswordDto);
    }
    resetPassword(resetPasswordDto) {
        return this.http.post(this.constructRequestUrl(_constants_authentication_api_constants__WEBPACK_IMPORTED_MODULE_1__.AuthenticationApiEndpoints.ResetPassword()), resetPasswordDto);
    }
    refreshToken(token) {
        return this.http.post(this.constructRequestUrl(_constants_authentication_api_constants__WEBPACK_IMPORTED_MODULE_1__.AuthenticationApiEndpoints.RefreshToken()), token);
    }
}
AccountApiService.ɵfac = function AccountApiService_Factory(t) { return new (t || AccountApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"]("BASE_API_URL_WEB"), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
AccountApiService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AccountApiService, factory: AccountApiService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 94398:
/*!************************************************************!*\
  !*** ./src/app/authentication/services/account.service.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountService": () => (/* binding */ AccountService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 59295);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var _utilities_crypto_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/crypto-tools */ 71159);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../environments/environment */ 92340);
/* harmony import */ var _shared_constants_user_type_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/constants/user-type.enum */ 6814);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _account_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./account.api.service */ 51889);
/* harmony import */ var _gait_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gait.service */ 87526);







const USER_KEY = 'auth-user';
class AccountService {
    constructor(accountApiService, gaitService) {
        this.accountApiService = accountApiService;
        this.gaitService = gaitService;
    }
    login(loginDto) {
        return this.accountApiService.login(loginDto).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)((response) => {
            if (response.isSuccess) {
                let userAccountDTO = response.value;
                this.setCurrentUser(userAccountDTO);
            }
        }));
    }
    logout() {
        const user = this.getUser();
        //for brokers log out from gait
        if ((user === null || user === void 0 ? void 0 : user.userType) == _shared_constants_user_type_enum__WEBPACK_IMPORTED_MODULE_2__.UserType.Broker && (user === null || user === void 0 ? void 0 : user.contextId)) {
            this.gaitService.deleteContextId(user.contextId);
        }
        window.localStorage.removeItem(USER_KEY);
        //redirects to marketing site, signs out the user and navigates to homepage
        window.location.href = _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.marketing.baseUrl + '/sign-out';
    }
    getCurrentUser(bypassLogoutOnNull = false) {
        const user = this.getUser();
        if ((!user || !this.isValidWPUserAccount(user)) && !bypassLogoutOnNull) {
            return null;
        }
        return Object.assign({}, (user || {}));
    }
    getCurrentUserId() {
        const currentUser = this.getUser();
        return (currentUser || {}).id;
    }
    getCurrentUserAuthToken() {
        const currentUser = this.getUser();
        return (currentUser || {}).token;
    }
    getCurrentWPUserAccountId() {
        const currentUser = this.getUser();
        return (currentUser || {}).accountId;
    }
    isValidAuthPersisted() {
        const userAccount = this.getUser();
        if (!userAccount)
            return false;
        return this.isValidWPUserAccount(userAccount);
    }
    forgotPassword(forgotPasswordDto) {
        return this.accountApiService.forgotPassword(forgotPasswordDto);
    }
    resetPassword(resetPasswordDto) {
        return this.accountApiService.resetPassword(resetPasswordDto);
    }
    refreshToken(token) {
        return this.accountApiService.refreshToken(token);
    }
    getUser() {
        const user = window.localStorage.getItem(USER_KEY);
        if (user) {
            return _utilities_crypto_tools__WEBPACK_IMPORTED_MODULE_0__.cryptoTools.decrypt(user);
        }
        return null;
    }
    saveUser(user) {
        window.localStorage.removeItem(USER_KEY);
        const encrypted = _utilities_crypto_tools__WEBPACK_IMPORTED_MODULE_0__.cryptoTools.encryptObject(user);
        window.localStorage.setItem(USER_KEY, encrypted);
    }
    updateTokens(token) {
        const user = this.getUser();
        this.setCurrentUser(Object.assign(Object.assign({}, user), { token: token.accessToken, refreshToken: token.refreshToken }));
    }
    userHasRole(roleName) {
        var _a;
        const user = this.getCurrentUser();
        return user != null && ((_a = user.roles) === null || _a === void 0 ? void 0 : _a.includes(roleName));
    }
    isValidWPUserAccount(user) {
        if (typeof user == "undefined" || !user || !user.token) {
            return false;
        }
        const token = _utilities_crypto_tools__WEBPACK_IMPORTED_MODULE_0__.cryptoTools.decodeJwt(user.token);
        if (!token.nameid) {
            return false;
        }
        return true;
    }
    setCurrentUser(user) {
        user.roles = [];
        const roles = _utilities_crypto_tools__WEBPACK_IMPORTED_MODULE_0__.cryptoTools.decodeJwt(user.token).role;
        //if user is in one role JWT returns as string, if in multiple roles returns as array
        Array.isArray(roles) ? user.roles = roles : user.roles.push(roles);
        this.saveUser(user);
    }
}
AccountService.ɵfac = function AccountService_Factory(t) { return new (t || AccountService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_account_api_service__WEBPACK_IMPORTED_MODULE_3__.AccountApiService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_gait_service__WEBPACK_IMPORTED_MODULE_4__.GaitService)); };
AccountService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({ token: AccountService, factory: AccountService.ɵfac });


/***/ }),

/***/ 3105:
/*!*************************************************************!*\
  !*** ./src/app/authentication/services/gait.api.service.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GaitApiService": () => (/* binding */ GaitApiService)
/* harmony export */ });
/* harmony import */ var _core_api_base_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/api/base.api.service */ 14089);
/* harmony import */ var _constants_authentication_api_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/authentication-api.constants */ 82818);
/* harmony import */ var _constants_gait_api_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/gait-api.constants */ 84128);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 28784);





class GaitApiService extends _core_api_base_api_service__WEBPACK_IMPORTED_MODULE_0__.BaseAPIService {
    constructor(baseApiUrl_Web, http) {
        super(baseApiUrl_Web, http);
    }
    authenticateGaitUser(gaitUserDTO) {
        return this.http.post(this.constructRequestUrl(_constants_authentication_api_constants__WEBPACK_IMPORTED_MODULE_1__.AuthenticationApiEndpoints.AuthenticateGaitUser()), gaitUserDTO);
    }
    refrechContext(contextId) {
        return this.http.get(this.constructRequestUrl(_constants_gait_api_constants__WEBPACK_IMPORTED_MODULE_2__.GaitApiEndpoints.RefreshContext(contextId)));
    }
    checkContext(contextId) {
        return this.http.get(this.constructRequestUrl(_constants_gait_api_constants__WEBPACK_IMPORTED_MODULE_2__.GaitApiEndpoints.CheckContext(contextId)));
    }
    deleteContext(contextId) {
        return this.http.get(this.constructRequestUrl(_constants_gait_api_constants__WEBPACK_IMPORTED_MODULE_2__.GaitApiEndpoints.DeleteContext(contextId)));
    }
}
GaitApiService.ɵfac = function GaitApiService_Factory(t) { return new (t || GaitApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"]("BASE_API_URL_WEB"), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient)); };
GaitApiService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: GaitApiService, factory: GaitApiService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 87526:
/*!*********************************************************!*\
  !*** ./src/app/authentication/services/gait.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GaitService": () => (/* binding */ GaitService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _gait_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gait.api.service */ 3105);


class GaitService {
    constructor(gaitApiService) {
        this.gaitApiService = gaitApiService;
    }
    authenticateGaitUser(contextId) {
        let gaitUserDTO = {
            contextId: contextId
        };
        return this.gaitApiService.authenticateGaitUser(gaitUserDTO);
    }
    checkContextId(contextId) {
        return this.gaitApiService.checkContext(contextId);
    }
    deleteContextId(contextId) {
        return this.gaitApiService.deleteContext(contextId);
    }
    refreshContextId(contextId) {
        return this.gaitApiService.refrechContext(contextId);
    }
}
GaitService.ɵfac = function GaitService_Factory(t) { return new (t || GaitService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_gait_api_service__WEBPACK_IMPORTED_MODULE_0__.GaitApiService)); };
GaitService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: GaitService, factory: GaitService.ɵfac });


/***/ }),

/***/ 71159:
/*!**********************************************************!*\
  !*** ./src/app/authentication/utilities/crypto-tools.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cryptoTools": () => (/* binding */ cryptoTools)
/* harmony export */ });
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto-js */ 36240);
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jwt-decode */ 79168);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ 92340);



const cryptoTools = (function (crypto, jwt_decode) {
    const sk = _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.cryptoKey;
    const cryptoTools = {};
    cryptoTools.encryptObject = function (object) {
        if (typeof object === "undefined"
            || typeof object !== "object") {
            return console.error("object was not passed");
        }
        const stringify = JSON.stringify(object);
        return (crypto.AES.encrypt(stringify, sk)).toString();
    };
    cryptoTools.decrypt = function (cipherText) {
        if (typeof cipherText == "undefined"
            || typeof cipherText !== "string"
            || !cipherText) {
            return console.error("Cipher text was not passed");
        }
        const bytes = crypto.AES.decrypt(cipherText, sk);
        const decryptedString = bytes.toString(crypto.enc.Utf8);
        return JSON.parse(decryptedString);
    };
    cryptoTools.decodeJwt = function (token) {
        const decoded = jwt_decode(token);
        return decoded;
    };
    return cryptoTools;
})(crypto_js__WEBPACK_IMPORTED_MODULE_0__, jwt_decode__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ 85776:
/*!********************************************************************************!*\
  !*** ./src/app/carrier411/front-end/guards/carrier411-visible-region.guard.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Carrier411VisibleInRegionGuard": () => (/* binding */ Carrier411VisibleInRegionGuard)
/* harmony export */ });
/* harmony import */ var D_source_thinklogic_Tools_WarnerPacific_Tools_Web_Angular_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 83918);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 78611);
/* harmony import */ var src_app_shared_constants_tools_list_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/constants/tools-list.enum */ 99485);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _core_services_region_selector_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/services/region-selector.service */ 69442);
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/shared.service */ 97282);
/* harmony import */ var src_app_carrier411_shared_services_carrier411_roles_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/carrier411/shared/services/carrier411-roles.service */ 90673);
/* harmony import */ var src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/toast.service */ 31443);









class Carrier411VisibleInRegionGuard {
  constructor(router, regionSelectorService, sharedService, carrier411RolesService, toastService) {
    this.router = router;
    this.regionSelectorService = regionSelectorService;
    this.sharedService = sharedService;
    this.carrier411RolesService = carrier411RolesService;
    this.toastService = toastService;
  }

  canActivate(route, state) {
    var _this = this;

    return (0,D_source_thinklogic_Tools_WarnerPacific_Tools_Web_Angular_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.carrier411RolesService.isAdmin()) {
        return true;
      }

      const region = _this.regionSelectorService.getCurrentRegion();

      if (region == null) return false;
      const response = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.lastValueFrom)(_this.sharedService.getToolIsContentHidden(Number(src_app_shared_constants_tools_list_enum__WEBPACK_IMPORTED_MODULE_1__.ToolsList.Carrier411)));
      const regionHidden = response.isSuccess && response.value;

      if (regionHidden) {
        _this.router.navigate(['/']);

        _this.toastService.show({
          content: 'Access denied!',
          icon: 'error'
        });
      }

      return !regionHidden;
    })();
  }

}

Carrier411VisibleInRegionGuard.ɵfac = function Carrier411VisibleInRegionGuard_Factory(t) {
  return new (t || Carrier411VisibleInRegionGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_core_services_region_selector_service__WEBPACK_IMPORTED_MODULE_2__.RegionSelectorService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__.SharedService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](src_app_carrier411_shared_services_carrier411_roles_service__WEBPACK_IMPORTED_MODULE_4__.Carrier411RolesService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__.ToastService));
};

Carrier411VisibleInRegionGuard.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
  token: Carrier411VisibleInRegionGuard,
  factory: Carrier411VisibleInRegionGuard.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 48473:
/*!*******************************************************************!*\
  !*** ./src/app/carrier411/shared/constants/workflow-step.enum.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkflowStep": () => (/* binding */ WorkflowStep)
/* harmony export */ });
var WorkflowStep;
(function (WorkflowStep) {
    WorkflowStep[WorkflowStep["Draft"] = 1] = "Draft";
    WorkflowStep[WorkflowStep["PendingApproval"] = 2] = "PendingApproval";
    WorkflowStep[WorkflowStep["PendingPublish"] = 3] = "PendingPublish";
    WorkflowStep[WorkflowStep["Published"] = 4] = "Published";
    WorkflowStep[WorkflowStep["DeleteRequested"] = 5] = "DeleteRequested";
    WorkflowStep[WorkflowStep["PendingDelete"] = 6] = "PendingDelete";
    WorkflowStep[WorkflowStep["Deleted"] = 7] = "Deleted";
})(WorkflowStep || (WorkflowStep = {}));
;


/***/ }),

/***/ 90673:
/*!************************************************************************!*\
  !*** ./src/app/carrier411/shared/services/carrier411-roles.service.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Carrier411RolesService": () => (/* binding */ Carrier411RolesService)
/* harmony export */ });
/* harmony import */ var _constants_workflow_step_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../constants/workflow-step.enum */ 48473);
/* harmony import */ var src_app_core_constants_role_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/constants/role.constants */ 85601);
/* harmony import */ var src_app_shared_utilities_string_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/utilities/string-utils */ 34686);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_authentication_services_account_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/authentication/services/account.service */ 94398);
/* harmony import */ var src_app_core_services_region_selector_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/region-selector.service */ 69442);






class Carrier411RolesService {
    constructor(accountService, regionSelectorService) {
        this.accountService = accountService;
        this.regionSelectorService = regionSelectorService;
        this.isAdmin = () => this.isEditor() || this.isReviewer() || this.isPublisher();
        this.getCurrentRegion = () => { var _a; return (_a = this.regionSelectorService.getCurrentRegion()) === null || _a === void 0 ? void 0 : _a.abbreviation; };
    }
    isEditor() {
        const role = src_app_shared_utilities_string_utils__WEBPACK_IMPORTED_MODULE_2__.StringUtils.format(src_app_core_constants_role_constants__WEBPACK_IMPORTED_MODULE_1__.Roles.Carrier411.Editor, '.', this.getCurrentRegion());
        return this.accountService.userHasRole(role);
    }
    isReviewer() {
        const role = src_app_shared_utilities_string_utils__WEBPACK_IMPORTED_MODULE_2__.StringUtils.format(src_app_core_constants_role_constants__WEBPACK_IMPORTED_MODULE_1__.Roles.Carrier411.Reviewer, '.', this.getCurrentRegion());
        return this.accountService.userHasRole(role);
    }
    isPublisher() {
        const role = src_app_shared_utilities_string_utils__WEBPACK_IMPORTED_MODULE_2__.StringUtils.format(src_app_core_constants_role_constants__WEBPACK_IMPORTED_MODULE_1__.Roles.Carrier411.Publisher, '.', this.getCurrentRegion());
        return this.accountService.userHasRole(role);
    }
    getAllowedWorkflowSteps() {
        var workflowStep = [];
        if (this.isEditor())
            return workflowStep;
        workflowStep.push(_constants_workflow_step_enum__WEBPACK_IMPORTED_MODULE_0__.WorkflowStep.DeleteRequested);
        workflowStep.push(_constants_workflow_step_enum__WEBPACK_IMPORTED_MODULE_0__.WorkflowStep.PendingApproval);
        if (this.isPublisher()) {
            workflowStep.push(_constants_workflow_step_enum__WEBPACK_IMPORTED_MODULE_0__.WorkflowStep.PendingDelete);
            workflowStep.push(_constants_workflow_step_enum__WEBPACK_IMPORTED_MODULE_0__.WorkflowStep.PendingPublish);
        }
        return workflowStep;
    }
}
Carrier411RolesService.ɵfac = function Carrier411RolesService_Factory(t) { return new (t || Carrier411RolesService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](src_app_authentication_services_account_service__WEBPACK_IMPORTED_MODULE_3__.AccountService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](src_app_core_services_region_selector_service__WEBPACK_IMPORTED_MODULE_4__.RegionSelectorService)); };
Carrier411RolesService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: Carrier411RolesService, factory: Carrier411RolesService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 14089:
/*!**********************************************!*\
  !*** ./src/app/core/api/base.api.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseAPIService": () => (/* binding */ BaseAPIService)
/* harmony export */ });
class BaseAPIService {
    constructor(baseUrl, http) {
        this.baseUrl = baseUrl;
        this.http = http;
    }
    constructRequestUrl(endpoint) {
        return this.baseUrl + endpoint;
    }
}


/***/ }),

/***/ 69773:
/*!**********************************************************************************************************!*\
  !*** ./src/app/core/components/app-container-unauthenticated/app-container-unauthenticated.component.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppContainerUnauthenticatedComponent": () => (/* binding */ AppContainerUnauthenticatedComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 52816);


class AppContainerUnauthenticatedComponent {
    constructor() { }
}
AppContainerUnauthenticatedComponent.ɵfac = function AppContainerUnauthenticatedComponent_Factory(t) { return new (t || AppContainerUnauthenticatedComponent)(); };
AppContainerUnauthenticatedComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppContainerUnauthenticatedComponent, selectors: [["app-app-container-unauthenticated"]], decls: 3, vars: 0, consts: [[1, "wrapper"], [1, "main-panel"]], template: function AppContainerUnauthenticatedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAtY29udGFpbmVyLXVuYXV0aGVudGljYXRlZC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 87129:
/*!**************************************************************************!*\
  !*** ./src/app/core/components/app-container/app-container.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppContainerComponent": () => (/* binding */ AppContainerComponent)
/* harmony export */ });
/* harmony import */ var _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/pro-regular-svg-icons */ 26966);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_shared_services_media_query_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/media-query.service */ 134);
/* harmony import */ var _services_theme_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/theme.service */ 6074);
/* harmony import */ var _services_main_menu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/main-menu.service */ 18399);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 19397);
/* harmony import */ var _syncfusion_ej2_angular_navigations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @syncfusion/ej2-angular-navigations */ 36477);
/* harmony import */ var _main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../main-menu/main-menu.component */ 19803);
/* harmony import */ var _app_header_app_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app-header/app-header.component */ 8961);
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../navbar/navbar.component */ 57009);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 52816);












const _c0 = ["navMenu"];
const _c1 = ["dockBar"];

function AppContainerComponent_div_4_img_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "img", 17);
  }
}

function AppContainerComponent_div_4_img_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "img", 18);
  }
}

function AppContainerComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 11)(1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, AppContainerComponent_div_4_img_2_Template, 1, 0, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, AppContainerComponent_div_4_img_4_Template, 1, 0, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 15)(7, "fa-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AppContainerComponent_div_4_Template_fa_icon_click_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return ctx_r6.open($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 3, ctx_r0.isDark$));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 5, ctx_r0.isDark$));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icon", ctx_r0.faBars);
  }
}

function AppContainerComponent_ejs_sidebar_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ejs-sidebar", 19, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("open", function AppContainerComponent_ejs_sidebar_6_Template_ejs_sidebar_open_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return ctx_r9.open($event);
    })("close", function AppContainerComponent_ejs_sidebar_6_Template_ejs_sidebar_close_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r10);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return ctx_r11.close($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "main-menu", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function AppContainerComponent_ejs_sidebar_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ejs-sidebar", 22, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("open", function AppContainerComponent_ejs_sidebar_8_Template_ejs_sidebar_open_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return ctx_r13.open($event);
    })("close", function AppContainerComponent_ejs_sidebar_8_Template_ejs_sidebar_close_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r14);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return ctx_r15.close($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "main-menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("enableDock", true)("enableGestures", false);
  }
}

class AppContainerComponent {
  constructor(mediaQueryService, themeService, mainMenuService) {
    this.mediaQueryService = mediaQueryService;
    this.themeService = themeService;
    this.mainMenuService = mainMenuService;
    this.navMenuVisible = false;
    this.isOpen = true;
    this.faBars = _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faBars;
    this.isMobile$ = this.mediaQueryService.isMobile$;
    this.isDark$ = this.themeService.isDark$;
  }

  ngOnInit() {
    this.mainMenuService.collapsed$.subscribe(collapsed => {
      this.isOpen = !collapsed;
      if (this.dockBar != null) this.dockBar.isOpen = !collapsed;
    });
  }

  ngAfterContentChecked() {
    this.navMenuVisible = this.navbar != null && this.navbar.navbar != null;
  }

  open(event) {
    this.mainMenuService.setCollapsed(false);
  }

  close(event) {
    this.mainMenuService.setCollapsed(true);
  }

}

AppContainerComponent.ɵfac = function AppContainerComponent_Factory(t) {
  return new (t || AppContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_services_media_query_service__WEBPACK_IMPORTED_MODULE_0__.MediaQueryService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_theme_service__WEBPACK_IMPORTED_MODULE_1__.ThemeService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_main_menu_service__WEBPACK_IMPORTED_MODULE_2__.MainMenuService));
};

AppContainerComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: AppContainerComponent,
  selectors: [["app-app-container"]],
  viewQuery: function AppContainerComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c1, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.navbar = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.dockBar = _t.first);
    }
  },
  decls: 18,
  vars: 18,
  consts: [[1, "main-container"], ["class", "mobile-header", 4, "ngIf"], ["type", "Over", "width", "100%", 3, "open", "close", 4, "ngIf"], ["width", "300px", "dockSize", "110px", 3, "enableDock", "enableGestures", "open", "close", 4, "ngIf"], [1, "wrapper"], [1, "w-100"], [1, "container-fluid", "h-100", "p-0"], [3, "ngClass"], ["navMenu", ""], [1, "col-md"], [1, "content"], [1, "mobile-header"], [1, "logo-header"], ["class", "logo", "src", "assets/images/logo-wp-dark-small.png", 4, "ngIf"], ["class", "logo", "src", "assets/images/logo-wp-light-small.png", 4, "ngIf"], [1, "icon"], [3, "icon", "click"], ["src", "assets/images/logo-wp-dark-small.png", 1, "logo"], ["src", "assets/images/logo-wp-light-small.png", 1, "logo"], ["type", "Over", "width", "100%", 3, "open", "close"], ["dockBar", ""], [1, "mobile-sidebar"], ["width", "300px", "dockSize", "110px", 3, "enableDock", "enableGestures", "open", "close"]],
  template: function AppContainerComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, AppContainerComponent_div_4_Template, 8, 7, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, AppContainerComponent_ejs_sidebar_6_Template, 3, 0, "ejs-sidebar", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](7, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, AppContainerComponent_ejs_sidebar_8_Template, 3, 2, "ejs-sidebar", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](9, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](11, "app-header", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](13, "navbar", 7, 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 9)(16, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](17, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMapInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 8, ctx.isMobile$) ? "layout-mobile" : "layout-desktop", " ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 10, ctx.isDark$) ? "warner-dark" : "warner-light", "");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 12, ctx.isMobile$));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](7, 14, ctx.isMobile$));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](9, 16, ctx.isMobile$));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx.navMenuVisible ? "col-md-2" : "d-none");
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__.FaIconComponent, _syncfusion_ej2_angular_navigations__WEBPACK_IMPORTED_MODULE_10__.SidebarComponent, _main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_3__.MainMenuComponent, _app_header_app_header_component__WEBPACK_IMPORTED_MODULE_4__.AppHeaderComponent, _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__.NavbarComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterOutlet],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe],
  styles: [".main-container[_ngcontent-%COMP%] {\n  max-width: 1920px;\n  margin: 0 auto;\n  padding: 30px;\n}\n.main-container[_ngcontent-%COMP%]   ejs-sidebar[_ngcontent-%COMP%] {\n  background: none;\n  left: auto;\n  top: 20px;\n  padding: 1px;\n}\n.main-container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%] {\n  padding-left: 20px;\n}\n@media (max-width: 992px) {\n  .main-container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%] {\n    padding-left: 0;\n  }\n}\n.main-container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  display: flex;\n}\n.main-container[_ngcontent-%COMP%]   .layout-desktop[_ngcontent-%COMP%]   navbar[_ngcontent-%COMP%] {\n  min-width: 200px;\n  max-width: 250px;\n  border-right: 1px solid var(--border-color);\n  min-height: calc(100vh - 110px);\n  margin-right: 20px;\n}\n.main-container[_ngcontent-%COMP%]   .layout-mobile[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  flex-direction: column;\n}\n.main-container[_ngcontent-%COMP%]   .layout-mobile[_ngcontent-%COMP%]   .mobile-header[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  box-shadow: 0px 3px 6px var(--shadow-light);\n  margin-bottom: 20px;\n}\n.main-container[_ngcontent-%COMP%]   .layout-mobile[_ngcontent-%COMP%]   .mobile-header[_ngcontent-%COMP%]   .logo-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 10px 15px;\n}\n.main-container[_ngcontent-%COMP%]   .layout-mobile[_ngcontent-%COMP%]   .mobile-header[_ngcontent-%COMP%]   .logo-header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  height: 60px;\n  width: auto;\n}\n.main-container[_ngcontent-%COMP%]   .layout-mobile[_ngcontent-%COMP%]   .mobile-header[_ngcontent-%COMP%]   .logo-header[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  margin-left: auto;\n  font-size: 20px;\n  cursor: pointer;\n}\n.main-container[_ngcontent-%COMP%]   .layout-mobile.warner-dark[_ngcontent-%COMP%]   .mobile-header[_ngcontent-%COMP%] {\n  background-color: var(--midnight);\n  color: var(--white);\n}\n.main-container[_ngcontent-%COMP%]   .layout-mobile.warner-light[_ngcontent-%COMP%]   .mobile-header[_ngcontent-%COMP%] {\n  background-color: var(--white);\n  color: var(--black);\n}\n.main-container[_ngcontent-%COMP%]   .layout-mobile[_ngcontent-%COMP%]   ejs-sidebar[_ngcontent-%COMP%] {\n  height: 100%;\n  padding: 0;\n  margin: 0;\n  top: 0;\n  left: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC1jb250YWluZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0FBQ0Y7QUFDRTtFQUNFLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0FBQ0o7QUFFRTtFQUNFLGtCQUFBO0FBQUo7QUFFSTtFQUhGO0lBSUksZUFBQTtFQUNKO0FBQ0Y7QUFDSTtFQUNFLGFBQUE7QUFDTjtBQUlJO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLDJDQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtBQUZOO0FBUU07RUFDRSxzQkFBQTtBQU5SO0FBVUk7RUFDRSxtQkFBQTtFQUNBLDJDQUFBO0VBQ0EsbUJBQUE7QUFSTjtBQVVNO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFSUjtBQVVRO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUFSVjtBQVdRO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQVRWO0FBY0k7RUFDRSxpQ0FBQTtFQUNBLG1CQUFBO0FBWk47QUFlSTtFQUNFLDhCQUFBO0VBQ0EsbUJBQUE7QUFiTjtBQWdCSTtFQUNFLFlBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0FBZE4iLCJmaWxlIjoiYXBwLWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWNvbnRhaW5lciB7XHJcbiAgbWF4LXdpZHRoOiAxOTIwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgcGFkZGluZzogMzBweDtcclxuXHJcbiAgZWpzLXNpZGViYXIge1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGxlZnQ6IGF1dG87XHJcbiAgICB0b3A6IDIwcHg7XHJcbiAgICBwYWRkaW5nOiAxcHg7XHJcbiAgfVxyXG5cclxuICAud3JhcHBlciB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgIH1cclxuXHJcbiAgICA+ICoge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmxheW91dC1kZXNrdG9wIHtcclxuICAgIG5hdmJhciB7XHJcbiAgICAgIG1pbi13aWR0aDogMjAwcHg7XHJcbiAgICAgIG1heC13aWR0aDogMjUwcHg7XHJcbiAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XHJcbiAgICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxMTBweCk7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5sYXlvdXQtbW9iaWxlIHtcclxuICAgIC53cmFwcGVyIHtcclxuICAgICAgPiAqIHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLm1vYmlsZS1oZWFkZXIge1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICBib3gtc2hhZG93OiAwcHggM3B4IDZweCB2YXIoLS1zaGFkb3ctbGlnaHQpO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG5cclxuICAgICAgLmxvZ28taGVhZGVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAxNXB4O1xyXG5cclxuICAgICAgICAubG9nbyB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5pY29uIHtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYud2FybmVyLWRhcmsgLm1vYmlsZS1oZWFkZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1taWRuaWdodCk7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgJi53YXJuZXItbGlnaHQgLm1vYmlsZS1oZWFkZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1ibGFjayk7XHJcbiAgICB9XHJcblxyXG4gICAgZWpzLXNpZGViYXIge1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"]
});

/***/ }),

/***/ 8961:
/*!********************************************************************!*\
  !*** ./src/app/core/components/app-header/app-header.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppHeaderComponent": () => (/* binding */ AppHeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../breadcrumb/breadcrumb.component */ 46721);
/* harmony import */ var _region_selector_region_selector_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../region-selector/region-selector.component */ 31030);
/* harmony import */ var _user_settings_user_settings_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user-settings/user-settings.component */ 65366);




class AppHeaderComponent {
    constructor() { }
}
AppHeaderComponent.ɵfac = function AppHeaderComponent_Factory(t) { return new (t || AppHeaderComponent)(); };
AppHeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AppHeaderComponent, selectors: [["app-header"]], decls: 4, vars: 0, consts: [[1, "header-container", "w-100"], [1, "col"], [1, "mr-1"]], template: function AppHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "custom-breadcrumb", 1)(2, "region-selector", 2)(3, "user-settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } }, directives: [_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbComponent, _region_selector_region_selector_component__WEBPACK_IMPORTED_MODULE_1__.RegionSelectorComponent, _user_settings_user_settings_component__WEBPACK_IMPORTED_MODULE_2__.UserSettingsComponent], styles: [".header-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-bottom: 1px solid var(--border-color);\n  margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC1oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLDRDQUFBO0VBQ0EsbUJBQUE7QUFDRiIsImZpbGUiOiJhcHAtaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 46721:
/*!********************************************************************!*\
  !*** ./src/app/core/components/breadcrumb/breadcrumb.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BreadcrumbComponent": () => (/* binding */ BreadcrumbComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 60116);
/* harmony import */ var src_app_shared_constants_application_urls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/constants/application-urls */ 85561);
/* harmony import */ var src_app_shared_utilities_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/utilities/shared */ 14364);
/* harmony import */ var src_app_shared_utilities_url_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/utilities/url-utils */ 82000);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);








function BreadcrumbComponent_li_5_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BreadcrumbComponent_li_5_span_1_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6); const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r4.redirectTo(item_r1.url); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r1.text);
} }
function BreadcrumbComponent_li_5_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r1.text);
} }
function BreadcrumbComponent_li_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, BreadcrumbComponent_li_5_span_1_Template, 2, 1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, BreadcrumbComponent_li_5_span_2_Template, 2, 1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.isValidUrl(item_r1.url));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r0.isValidUrl(item_r1.url));
} }
class BreadcrumbComponent {
    constructor(router) {
        this.router = router;
        this.replaceParamFromUrl = src_app_shared_utilities_url_utils__WEBPACK_IMPORTED_MODULE_2__.UrlUtils.replaceParamFromUrl;
        this.applicationUrls = src_app_shared_constants_application_urls__WEBPACK_IMPORTED_MODULE_0__.ApplicationUrls;
        this.isValidUrl = src_app_shared_utilities_shared__WEBPACK_IMPORTED_MODULE_1__.isValidUrl;
        this.breadcrumbItems = [];
        this.initialize();
    }
    ngOnInit() {
        this.setupBreadcrumb();
    }
    ngOnDestroy() {
        this.routerSubscription.unsubscribe();
    }
    initialize() {
        this.routerSubscription = this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__.NavigationEnd)).subscribe((res) => {
            this.setupBreadcrumb();
        });
    }
    setupBreadcrumbLevel(urls) {
        for (var key of Object.keys(urls)) {
            if (typeof urls[key] === 'object') {
                this.setupBreadcrumbLevel(urls[key]);
            }
            else if (key == 'path' && urls.path != null) {
                this.checkPathAndAdd(urls);
            }
        }
    }
    setupBreadcrumb() {
        this.breadcrumbItems = [];
        this.setupBreadcrumbLevel(src_app_shared_constants_application_urls__WEBPACK_IMPORTED_MODULE_0__.ApplicationUrls);
    }
    redirectTo(url) {
        if ((0,src_app_shared_utilities_shared__WEBPACK_IMPORTED_MODULE_1__.isValidUrl)(url))
            this.router.navigate([url]);
    }
    checkPathAndAdd(menu) {
        if (menu.text == undefined || menu.text == '')
            return;
        const path = menu.path.includes('{') ? this.replaceParamFromUrl(this.router.url, menu.path) : menu.path;
        const possiblePaths = this.getPossiblePaths();
        if (possiblePaths.includes(path)) {
            this.breadcrumbItems.push({
                text: menu.text,
                url: menu.path
            });
        }
    }
    getPossiblePaths() {
        const urlsParts = this.router.url.split(/[/]/g).filter(u => u != '');
        return urlsParts.map((element, i) => {
            let possiblePath = '';
            for (var j = 0; j <= i; j++)
                possiblePath = possiblePath.concat(`/${urlsParts[j]}`);
            return possiblePath;
        });
    }
}
BreadcrumbComponent.ɵfac = function BreadcrumbComponent_Factory(t) { return new (t || BreadcrumbComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router)); };
BreadcrumbComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: BreadcrumbComponent, selectors: [["custom-breadcrumb"]], decls: 6, vars: 1, consts: [[1, "e-control", "e-breadcrumb", "e-lib"], [1, "e-breadcrumb-item", "e-icon-item"], [1, "e-breadcrumb-text", "pt-0", "pb-1", 3, "click"], [1, "e-breadcrumb-icon", "e-icons", "e-home"], ["class", "e-breadcrumb-item e-navigable", 4, "ngFor", "ngForOf"], [1, "e-breadcrumb-item", "e-navigable"], ["class", "e-breadcrumb-text", 3, "click", 4, "ngIf"], ["class", "e-breadcrumb-text e-breadcrumb-no-link", 4, "ngIf"], [1, "e-breadcrumb-text", 3, "click"], [1, "e-breadcrumb-text", "e-breadcrumb-no-link"]], template: function BreadcrumbComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "ol")(2, "li", 1)(3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BreadcrumbComponent_Template_a_click_3_listener() { return ctx.redirectTo(ctx.applicationUrls.Dashboard.path); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, BreadcrumbComponent_li_5_Template, 3, 2, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.breadcrumbItems);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf], styles: ["li.e-breadcrumb-item[_ngcontent-%COMP%]   .e-breadcrumb-text[_ngcontent-%COMP%] {\n  color: var(--black);\n}\nli.e-breadcrumb-item[_ngcontent-%COMP%]   .e-breadcrumb-text[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  text-decoration: underline;\n}\nli.e-breadcrumb-item[_ngcontent-%COMP%]   .e-breadcrumb-text.e-breadcrumb-no-link[_ngcontent-%COMP%] {\n  cursor: default;\n  text-decoration: none;\n}\nli.e-breadcrumb-item[_ngcontent-%COMP%]:not(:first-child):before {\n  content: \" / \";\n  padding: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJyZWFkY3J1bWIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxtQkFBQTtBQUFKO0FBRUk7RUFDRSxlQUFBO0VBQ0EsMEJBQUE7QUFBTjtBQUdJO0VBQ0UsZUFBQTtFQUNBLHFCQUFBO0FBRE47QUFLRTtFQUNFLGNBQUE7RUFDQSxZQUFBO0FBSEoiLCJmaWxlIjoiYnJlYWRjcnVtYi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImxpLmUtYnJlYWRjcnVtYi1pdGVtIHtcclxuICAuZS1icmVhZGNydW1iLXRleHQge1xyXG4gICAgY29sb3I6IHZhcigtLWJsYWNrKTtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIH1cclxuXHJcbiAgICAmLmUtYnJlYWRjcnVtYi1uby1saW5rIHtcclxuICAgICAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmOm5vdCg6Zmlyc3QtY2hpbGQpOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnIC8gJztcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 18332:
/*!******************************************************************************!*\
  !*** ./src/app/core/components/main-menu-links/main-menu-links.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainMenuLinksComponent": () => (/* binding */ MainMenuLinksComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/pro-solid-svg-icons */ 61250);
/* harmony import */ var _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/pro-light-svg-icons */ 67538);
/* harmony import */ var src_app_shared_constants_application_urls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/constants/application-urls */ 85561);
/* harmony import */ var src_app_shared_utilities_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/utilities/shared */ 14364);
/* harmony import */ var _services_main_menu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/main-menu.service */ 18399);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 19397);
/* harmony import */ var _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @syncfusion/ej2-angular-dropdowns */ 24779);












function MainMenuLinksComponent_div_0_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 6)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.title);
  }
}

function MainMenuLinksComponent_div_0_ul_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ul", 7)(1, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MainMenuLinksComponent_div_0_ul_4_Template_li_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return ctx_r5.onClick($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "a", 9)(3, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "fa-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx_r2.dashboard.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("title", ctx_r2.dashboard.text);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", ctx_r2.dashboard.icon)("fixedWidth", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r2.dashboard.text, " ");
  }
}

function MainMenuLinksComponent_div_0_ejs_listbox_5_ng_template_2_fa_icon_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "fa-icon", 11);
  }

  if (rf & 2) {
    const link_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", link_r10.icon)("fixedWidth", true);
  }
}

function MainMenuLinksComponent_div_0_ejs_listbox_5_ng_template_2_fa_icon_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "fa-icon", 11);
  }

  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", ctx_r12.faScrewdriverWrench)("fixedWidth", true);
  }
}

function MainMenuLinksComponent_div_0_ejs_listbox_5_ng_template_2_img_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 20);
  }

  if (rf & 2) {
    const link_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("alt", link_r10.text);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", ctx_r13.getFilePathEncoded(link_r10.iconPath), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
  }
}

function MainMenuLinksComponent_div_0_ejs_listbox_5_ng_template_2_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("mousedown", function MainMenuLinksComponent_div_0_ejs_listbox_5_ng_template_2_div_8_Template_div_mousedown_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r19);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4);
      return ctx_r18.onDraggingLink();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}

function MainMenuLinksComponent_div_0_ejs_listbox_5_ng_template_2_div_9_fa_icon_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "fa-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MainMenuLinksComponent_div_0_ejs_listbox_5_ng_template_2_div_9_fa_icon_1_Template_fa_icon_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r24);
      const link_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      return ctx_r22.onClick($event, link_r10);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", ctx_r20.faStarSolid)("fixedWidth", true);
  }
}

function MainMenuLinksComponent_div_0_ejs_listbox_5_ng_template_2_div_9_fa_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "fa-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MainMenuLinksComponent_div_0_ejs_listbox_5_ng_template_2_div_9_fa_icon_2_Template_fa_icon_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r27);
      const link_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      return ctx_r25.onClick($event, link_r10);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", ctx_r21.faStarLight)("fixedWidth", true);
  }
}

function MainMenuLinksComponent_div_0_ejs_listbox_5_ng_template_2_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, MainMenuLinksComponent_div_0_ejs_listbox_5_ng_template_2_div_9_fa_icon_1_Template, 1, 2, "fa-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, MainMenuLinksComponent_div_0_ejs_listbox_5_ng_template_2_div_9_fa_icon_2_Template, 1, 2, "fa-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const link_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r15.isFavorite(link_r10));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r15.isFavorite(link_r10));
  }
}

const _c0 = function (a0) {
  return [a0];
};

function MainMenuLinksComponent_div_0_ejs_listbox_5_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MainMenuLinksComponent_div_0_ejs_listbox_5_ng_template_2_Template_div_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r30);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      return ctx_r29.onClick($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "a", 9)(2, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, MainMenuLinksComponent_div_0_ejs_listbox_5_ng_template_2_fa_icon_3_Template, 1, 2, "fa-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, MainMenuLinksComponent_div_0_ejs_listbox_5_ng_template_2_fa_icon_4_Template, 1, 2, "fa-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, MainMenuLinksComponent_div_0_ejs_listbox_5_ng_template_2_img_5_Template, 1, 2, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, MainMenuLinksComponent_div_0_ejs_listbox_5_ng_template_2_div_8_Template, 2, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, MainMenuLinksComponent_div_0_ejs_listbox_5_ng_template_2_div_9_Template, 3, 2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const link_r10 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", !ctx_r9.isExternal(link_r10.path) ? _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](12, _c0, link_r10.path) : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("title", link_r10.text);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("href", ctx_r9.isExternal(link_r10.path) ? link_r10.path : null, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"])("target", ctx_r9.isExternal(link_r10.path) ? "_blank" : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", link_r10.icon != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", link_r10.icon == null && link_r10.iconPath == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", link_r10.iconPath != null && link_r10.iconPath != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", link_r10.text, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r9.sortable);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](10, 10, ctx_r9.isCollapsed$) && ctx_r9.favorites);
  }
}

const _c1 = function (a0) {
  return {
    "sortable": a0
  };
};

function MainMenuLinksComponent_div_0_ejs_listbox_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ejs-listbox", 13, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("beforeDrop", function MainMenuLinksComponent_div_0_ejs_listbox_5_Template_ejs_listbox_beforeDrop_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r32);
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return ctx_r31.checkDrag($event);
    })("drop", function MainMenuLinksComponent_div_0_ejs_listbox_5_Template_ejs_listbox_drop_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r32);
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return ctx_r33.drop($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, MainMenuLinksComponent_div_0_ejs_listbox_5_ng_template_2_Template, 11, 14, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dataSource", ctx_r3.links)("allowDragAndDrop", ctx_r3.sortable)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](3, _c1, ctx_r3.sortable));
  }
}

function MainMenuLinksComponent_div_0_hr_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "hr");
  }
}

const _c2 = function (a0, a1) {
  return {
    "nav-open": a0,
    "nav-close": a1
  };
};

function MainMenuLinksComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, MainMenuLinksComponent_div_0_div_3_Template, 3, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, MainMenuLinksComponent_div_0_ul_4_Template, 7, 5, "ul", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, MainMenuLinksComponent_div_0_ejs_listbox_5_Template, 4, 5, "ejs-listbox", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, MainMenuLinksComponent_div_0_hr_6_Template, 1, 0, "hr", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](9, _c2, !_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 5, ctx_r0.isCollapsed$), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 7, ctx_r0.isCollapsed$)));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.title != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.showDashboard);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.links != null && ctx_r0.links.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.hasDivider);
  }
}

class MainMenuLinksComponent {
  constructor(mainMenuService, cd) {
    this.mainMenuService = mainMenuService;
    this.cd = cd;
    this.getFilePathEncoded = src_app_shared_utilities_shared__WEBPACK_IMPORTED_MODULE_1__.getFilePathEncoded;
    this.faScrewdriverWrench = _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faScrewdriverWrench;
    this.faStarLight = _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faStar;
    this.faStarSolid = _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faStar;
    this.title = '';
    this.links = [];
    this.isVisible = false;
    this.hasDivider = false;
    this.sortable = false;
    this.showDashboard = false;
    this.draggingLink = false;
    this.dashboard = {
      text: src_app_shared_constants_application_urls__WEBPACK_IMPORTED_MODULE_0__.ApplicationUrls.Dashboard.text,
      path: src_app_shared_constants_application_urls__WEBPACK_IMPORTED_MODULE_0__.ApplicationUrls.Dashboard.path,
      icon: _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faHouse
    };
    this.onToggleFavorite = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.onSortEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.isCollapsed$ = this.mainMenuService.collapsed$;

    this.isExternal = path => path.includes('http');

    this.isFavorite = link => this.favorites.some(f => f.path == link.path);
  }

  ngOnInit() {}
  /* RTE problem: Expression has changed after it was checked
   * http://www.syncfusion.com/forums/132152/rte-problem-expression-has-changed-after-it-was-checked?reply=ls7keM */


  ngAfterViewChecked() {
    this.cd.detectChanges();
  }

  onClick($event, link) {
    if (link != undefined && link != null) {
      this.onToggleFavorite.emit(link);
      $event.stopPropagation();
      $event.preventDefault();
    } else {
      this.mainMenuService.setCollapsed(true);
    }
  }

  drop($event) {
    this.draggingLink = false;
    if ($event.previousIndex == $event.currentIndex) return;
    const nextOrder = $event.currentIndex + 1;
    const link = $event.items[0];
    link.order = nextOrder;
    this.onSortEmitter.emit(link);
  }

  checkDrag($event) {
    if (!this.draggingLink) $event.cancel = true;
  }

  onDraggingLink() {
    this.draggingLink = true;
  }

}

MainMenuLinksComponent.ɵfac = function MainMenuLinksComponent_Factory(t) {
  return new (t || MainMenuLinksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_main_menu_service__WEBPACK_IMPORTED_MODULE_2__.MainMenuService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef));
};

MainMenuLinksComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: MainMenuLinksComponent,
  selectors: [["main-menu-links"]],
  inputs: {
    title: "title",
    links: "links",
    isVisible: "isVisible",
    hasDivider: "hasDivider",
    favorites: "favorites",
    sortable: "sortable",
    showDashboard: "showDashboard"
  },
  outputs: {
    onToggleFavorite: "onToggleFavorite",
    onSortEmitter: "sort"
  },
  decls: 1,
  vars: 1,
  consts: [["class", "main-menu-links", 3, "ngClass", 4, "ngIf"], [1, "main-menu-links", 3, "ngClass"], ["class", "tool-group-name", 4, "ngIf"], ["class", "nav-list", 4, "ngIf"], ["class", "nav-list", 3, "dataSource", "allowDragAndDrop", "ngClass", "beforeDrop", "drop", 4, "ngIf"], [4, "ngIf"], [1, "tool-group-name"], [1, "nav-list"], ["routerLinkActive", "nav-item-active", 1, "nav-item", 3, "routerLink", "click"], [1, "nav-link", 3, "title"], [1, "icon"], [3, "icon", "fixedWidth"], [1, "text", "col"], [1, "nav-list", 3, "dataSource", "allowDragAndDrop", "ngClass", "beforeDrop", "drop"], ["listObj", ""], ["itemTemplate", ""], ["routerLinkActive", "nav-item-active", 1, "nav-item", "mt-1", 3, "routerLink", "click"], [3, "icon", "fixedWidth", 4, "ngIf"], [3, "alt", "src", 4, "ngIf"], ["class", "sortable-icon", 3, "mousedown", 4, "ngIf"], [3, "alt", "src"], [1, "sortable-icon", 3, "mousedown"], ["class", "favorite active-favorite", 3, "icon", "fixedWidth", "click", 4, "ngIf"], ["class", "favorite", 3, "icon", "fixedWidth", "click", 4, "ngIf"], [1, "favorite", "active-favorite", 3, "icon", "fixedWidth", "click"], [1, "favorite", 3, "icon", "fixedWidth", "click"]],
  template: function MainMenuLinksComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, MainMenuLinksComponent_div_0_Template, 7, 12, "div", 0);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isVisible);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkActive, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__.FaIconComponent, _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_9__.ListBoxComponent],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe],
  styles: [".tool-group-name[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-weight: bold;\n}\n\nfa-icon[_ngcontent-%COMP%] {\n  font-size: 23px;\n}\n\n.nav-list[_ngcontent-%COMP%] {\n  list-style: none;\n  margin-bottom: 0;\n  padding-left: 0;\n}\n\n.nav-list[_ngcontent-%COMP%]   .e-listbox-wrapper[_ngcontent-%COMP%] {\n  border: none;\n}\n\n.nav-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  border-radius: 5px;\n}\n\n.nav-list[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\n  padding: 5px 10px;\n  border-radius: 5px;\n  cursor: pointer;\n}\n\n.nav-list[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 18px;\n}\n\n.nav-list[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  height: 35px;\n  display: flex;\n  align-items: center;\n  padding: 0;\n}\n\n.nav-list[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]   .favorite[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.nav-list[_ngcontent-%COMP%]   .nav-item.nav-item-active[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  color: var(--white);\n}\n\n.nav-list[_ngcontent-%COMP%]   .nav-item.nav-item-active[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]:after {\n  color: var(--white);\n}\n\n.nav-list[_ngcontent-%COMP%]   .nav-item.nav-item-active[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   img[src*=svg][_ngcontent-%COMP%] {\n  filter: var(--white-filter);\n}\n\n.nav-list[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.nav-list[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-height: 25px;\n  width: 30px;\n  -webkit-user-drag: none;\n}\n\n.nav-list[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   [title$=Admin][_ngcontent-%COMP%]   span.icon[_ngcontent-%COMP%]:after {\n  display: flex;\n  content: \"ADMIN\";\n  font-size: 10px;\n}\n\n.nav-open[_ngcontent-%COMP%]   .nav-list[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]:hover   .favorite[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.nav-open[_ngcontent-%COMP%]   .nav-list[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n\n.nav-open[_ngcontent-%COMP%]   .nav-list[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]   .favorite[_ngcontent-%COMP%] {\n  font-size: 15px;\n  text-align: right;\n}\n\n.nav-open[_ngcontent-%COMP%]   .nav-list[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]   .favorite.active-favorite[_ngcontent-%COMP%] {\n  display: block;\n  color: var(--sunflower);\n}\n\n.nav-open[_ngcontent-%COMP%]   .nav-list[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n\n.nav-open[_ngcontent-%COMP%]   .nav-list.sortable[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .sortable-icon[_ngcontent-%COMP%] {\n  cursor: move;\n  height: 35px;\n  width: 35px;\n}\n\n.nav-close[_ngcontent-%COMP%]   span.text[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.nav-close[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n\n.nav-close.sortable[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .sortable-icon[_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4tbWVudS1saW5rcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBQ0U7RUFDRSxZQUFBO0FBQ0o7O0FBRUU7RUFDRSxrQkFBQTtBQUFKOztBQUdFO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFESjs7QUFHSTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQUROOztBQUlJO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7QUFGTjs7QUFJTTtFQUNFLGFBQUE7QUFGUjs7QUFPTTtFQUNFLG1CQUFBO0FBTFI7O0FBT1E7RUFDRSxtQkFBQTtBQUxWOztBQVFRO0VBQ0UsMkJBQUE7QUFOVjs7QUFXSTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFUTjs7QUFXTTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0FBVFI7O0FBYUk7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBWE47O0FBbUJNO0VBQ0UsY0FBQTtBQWhCUjs7QUFvQkk7RUFDRSwyQkFBQTtBQWxCTjs7QUFvQk07RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFsQlI7O0FBb0JRO0VBQ0UsY0FBQTtFQUNBLHVCQUFBO0FBbEJWOztBQXVCSTtFQUNFLGtCQUFBO0FBckJOOztBQXdCSTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQXRCTjs7QUE0QkU7RUFDRSxhQUFBO0FBekJKOztBQTRCRTtFQUNFLHVCQUFBO0FBMUJKOztBQTZCRTtFQUNFLGFBQUE7QUEzQkoiLCJmaWxlIjoibWFpbi1tZW51LWxpbmtzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvb2wtZ3JvdXAtbmFtZSB7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuZmEtaWNvbiB7XHJcbiAgZm9udC1zaXplOiAyM3B4O1xyXG59XHJcblxyXG4ubmF2LWxpc3Qge1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxuICBwYWRkaW5nLWxlZnQ6IDA7XHJcblxyXG4gIC5lLWxpc3Rib3gtd3JhcHBlciB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgfVxyXG5cclxuICBsaSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgfVxyXG5cclxuICAubmF2LWl0ZW0ge1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgLnRleHQge1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5uYXYtbGluayB7XHJcbiAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgcGFkZGluZzogMDtcclxuXHJcbiAgICAgIC5mYXZvcml0ZSB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYubmF2LWl0ZW0tYWN0aXZlIHtcclxuICAgICAgLm5hdi1saW5rIC5pY29uIHtcclxuICAgICAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xyXG5cclxuICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbWdbc3JjKj1cInN2Z1wiXSB7XHJcbiAgICAgICAgICBmaWx0ZXI6IHZhcigtLXdoaXRlLWZpbHRlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmljb24ge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgbWF4LWhlaWdodDogMjVweDtcclxuICAgICAgICB3aWR0aDogMzBweDtcclxuICAgICAgICAtd2Via2l0LXVzZXItZHJhZzogbm9uZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIFt0aXRsZSQ9XCJBZG1pblwiXSBzcGFuLmljb246YWZ0ZXIge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBjb250ZW50OiAnQURNSU4nO1xyXG4gICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ubmF2LW9wZW4ge1xyXG4gIC5uYXYtbGlzdCB7XHJcbiAgICAubmF2LWl0ZW06aG92ZXIge1xyXG4gICAgICAuZmF2b3JpdGUge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLm5hdi1saW5rIHtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG5cclxuICAgICAgLmZhdm9yaXRlIHtcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcblxyXG4gICAgICAgICYuYWN0aXZlLWZhdm9yaXRlIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLXN1bmZsb3dlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmljb24ge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgJi5zb3J0YWJsZSAubmF2LWl0ZW0gLnNvcnRhYmxlLWljb24ge1xyXG4gICAgICBjdXJzb3I6IG1vdmU7XHJcbiAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgd2lkdGg6IDM1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ubmF2LWNsb3NlIHtcclxuICBzcGFuLnRleHQge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIC5uYXYtbGluayB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gICYuc29ydGFibGUgLm5hdi1pdGVtIC5zb3J0YWJsZS1pY29uIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"]
});

/***/ }),

/***/ 19803:
/*!******************************************************************!*\
  !*** ./src/app/core/components/main-menu/main-menu.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainMenuComponent": () => (/* binding */ MainMenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @fortawesome/pro-regular-svg-icons */ 26966);
/* harmony import */ var _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @fortawesome/pro-light-svg-icons */ 67538);
/* harmony import */ var _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @fortawesome/pro-solid-svg-icons */ 61250);
/* harmony import */ var _shared_constants_application_urls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/constants/application-urls */ 85561);
/* harmony import */ var src_app_shared_constants_tools_list_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/constants/tools-list.enum */ 99485);
/* harmony import */ var _utils_role_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/role.utils */ 2810);
/* harmony import */ var src_app_shared_utilities_url_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/utilities/url-utils */ 82000);
/* harmony import */ var _constants_favorite_type__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants/favorite-type */ 20168);
/* harmony import */ var src_app_shared_services_media_query_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/media-query.service */ 134);
/* harmony import */ var _authentication_services_account_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../authentication/services/account.service */ 94398);
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/services/shared.service */ 97282);
/* harmony import */ var _services_user_settings_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/user-settings.service */ 87338);
/* harmony import */ var _services_result_handler_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/result.handler.service */ 32464);
/* harmony import */ var src_app_core_services_region_selector_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/services/region-selector.service */ 69442);
/* harmony import */ var _services_theme_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/theme.service */ 6074);
/* harmony import */ var _services_main_menu_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../services/main-menu.service */ 18399);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 19397);
/* harmony import */ var _main_menu_links_main_menu_links_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../main-menu-links/main-menu-links.component */ 18332);
/* harmony import */ var _syncfusion_ej2_angular_buttons__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @syncfusion/ej2-angular-buttons */ 78218);























function MainMenuComponent_div_0_div_4_img_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "img", 11);
  }
}

function MainMenuComponent_div_0_div_4_img_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "img", 12);
  }
}

function MainMenuComponent_div_0_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, MainMenuComponent_div_0_div_4_img_1_Template, 1, 0, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](3, MainMenuComponent_div_0_div_4_img_3_Template, 1, 0, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](5, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function MainMenuComponent_div_0_div_4_Template_div_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return ctx_r9.onToggleClick();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](7, "fa-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 3, ctx_r1.isDark$));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](4, 5, ctx_r1.isDark$));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("icon", ctx_r1.faChevronsRight);
  }
}

function MainMenuComponent_div_0_div_6_img_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "img", 15);
  }
}

function MainMenuComponent_div_0_div_6_img_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "img", 16);
  }
}

function MainMenuComponent_div_0_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, MainMenuComponent_div_0_div_6_img_1_Template, 1, 0, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](3, MainMenuComponent_div_0_div_6_img_3_Template, 1, 0, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function MainMenuComponent_div_0_div_6_Template_div_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return ctx_r13.onToggleClick();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](6, "fa-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 3, ctx_r2.isDark$));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](4, 5, ctx_r2.isDark$));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("icon", ctx_r2.faChevronsLeft);
  }
}

function MainMenuComponent_div_0_div_9_hr_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "hr", 26);
  }
}

function MainMenuComponent_div_0_div_9_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function MainMenuComponent_div_0_div_9_div_12_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      return ctx_r17.viewAll = !ctx_r17.viewAll;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "View all");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](3, "fa-icon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("icon", ctx_r16.faChevronRight);
  }
}

function MainMenuComponent_div_0_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 17)(1, "div", 18)(2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](3, "fa-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5, " Need an overview of all our tools? Visit our ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](7, "Resource Center");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "div", 22)(9, "main-menu-links", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("sort", function MainMenuComponent_div_0_div_9_Template_main_menu_links_sort_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r20);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return ctx_r19.onSortFavorite($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](10, MainMenuComponent_div_0_div_9_hr_10_Template, 1, 0, "hr", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](11, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](12, MainMenuComponent_div_0_div_9_div_12_Template, 4, 1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](13, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("icon", ctx_r3.faMemoCircleInfo);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("href", ctx_r3.resourceCenterUrl, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("isVisible", true)("links", ctx_r3.favoriteLinks)("sortable", true)("showDashboard", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](11, 8, ctx_r3.isCollapsed));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](13, 10, ctx_r3.isCollapsed));
  }
}

function MainMenuComponent_div_0_div_10_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function MainMenuComponent_div_0_div_10_div_1_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r25);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      return ctx_r24.viewAll = !ctx_r24.viewAll;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](2, "fa-icon", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3, "Favorites");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("icon", ctx_r21.faChevronLeft);
  }
}

function MainMenuComponent_div_0_div_10_main_menu_links_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "main-menu-links", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("onToggleFavorite", function MainMenuComponent_div_0_div_10_main_menu_links_4_Template_main_menu_links_onToggleFavorite_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r27);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      return ctx_r26.toggleFavorite($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("isVisible", true)("links", ctx_r22.adminLinks)("hasDivider", true)("favorites", ctx_r22.favoriteLinks);
  }
}

function MainMenuComponent_div_0_div_10_main_menu_links_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "main-menu-links", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("onToggleFavorite", function MainMenuComponent_div_0_div_10_main_menu_links_5_Template_main_menu_links_onToggleFavorite_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r29);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      return ctx_r28.toggleFavorite($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("title", ctx_r23.otherLinksTitle())("isVisible", true)("links", ctx_r23.otherLinks)("favorites", ctx_r23.favoriteLinks)("showDashboard", true);
  }
}

function MainMenuComponent_div_0_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, MainMenuComponent_div_0_div_10_div_1_Template, 4, 1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](4, MainMenuComponent_div_0_div_10_main_menu_links_4_Template, 1, 4, "main-menu-links", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](5, MainMenuComponent_div_0_div_10_main_menu_links_5_Template, 1, 5, "main-menu-links", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 3, ctx_r4.isCollapsed));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r4.favoriteLinks != null && ctx_r4.adminLinks != null && ctx_r4.adminLinks.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r4.favoriteLinks != null && ctx_r4.otherLinks != null && ctx_r4.otherLinks.length);
  }
}

function MainMenuComponent_div_0_hr_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "hr", 37);
  }
}

function MainMenuComponent_div_0_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "fa-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "ejs-switch", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("change", function MainMenuComponent_div_0_div_13_Template_ejs_switch_change_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r31);
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return ctx_r30.onChangeTheme($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](4, "fa-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("icon", ctx_r6.faSunBright);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("checked", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](3, 3, ctx_r6.isDark$));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("icon", ctx_r6.faMoon);
  }
}

function MainMenuComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](4, MainMenuComponent_div_0_div_4_Template, 8, 7, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](6, MainMenuComponent_div_0_div_6_Template, 7, 7, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](8, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](9, MainMenuComponent_div_0_div_9_Template, 14, 12, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](10, MainMenuComponent_div_0_div_10_Template, 6, 5, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](11, MainMenuComponent_div_0_hr_11_Template, 1, 0, "hr", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](12, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](13, MainMenuComponent_div_0_div_13_Template, 5, 5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](14, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵclassMapInterpolate1"]("main-menu navbar-component ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](1, 12, ctx_r0.isMobile$) ? "nav-mobile" : "nav-desktop", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵclassMapInterpolate1"]("wrapper ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](3, 14, ctx_r0.isCollapsed) ? "nav-close" : "nav-open", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](5, 16, ctx_r0.isCollapsed));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](7, 18, ctx_r0.isCollapsed));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx_r0.viewAll);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r0.viewAll);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](12, 20, ctx_r0.isCollapsed));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](14, 22, ctx_r0.isCollapsed));
  }
}

class MainMenuComponent {
  constructor(mediaQueryService, accountService, sharedService, userSettingsService, resultHandler, regionSelectorService, themeService, mainMenuService, cd) {
    this.mediaQueryService = mediaQueryService;
    this.accountService = accountService;
    this.sharedService = sharedService;
    this.userSettingsService = userSettingsService;
    this.resultHandler = resultHandler;
    this.regionSelectorService = regionSelectorService;
    this.themeService = themeService;
    this.mainMenuService = mainMenuService;
    this.cd = cd;
    this.faMemoCircleInfo = _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_15__.faMemoCircleInfo;
    this.faChevronLeft = _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_16__.faChevronLeft;
    this.faChevronRight = _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_16__.faChevronRight;
    this.faChevronsLeft = _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_15__.faChevronsLeft;
    this.faChevronsRight = _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_15__.faChevronsRight;
    this.faScrewdriverWrench = _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_17__.faScrewdriverWrench;
    this.faSunBright = _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_15__.faSunBright;
    this.faMoon = _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_15__.faMoon;
    this.resourceCenterUrl = _shared_constants_application_urls__WEBPACK_IMPORTED_MODULE_0__.ApplicationUrls.ResourceCenter.path;
    this.userSettings = null;
    this.user = null;
    this.tools = null;
    this.viewAll = false;
    this.hasUserTheme = false;
    this.theme$ = this.themeService.theme$;
    this.isDark$ = this.themeService.isDark$;
    this.isCollapsed = this.mainMenuService.collapsed$;
    this.isMobile$ = this.mediaQueryService.isMobile$;
    this.toggleClick = new _angular_core__WEBPACK_IMPORTED_MODULE_14__.EventEmitter();

    this.onToggleClick = () => this.mainMenuService.toggleCollapsed();

    this.onLinkClick = () => this.mainMenuService.setCollapsed(true);

    this.otherLinksTitle = () => this.adminLinks != null && this.adminLinks.length > 0 ? 'Other' : '';

    this.initialize();
    this.loadUserSettings();
  }

  ngOnInit() {
    this.subscribeRegionChange();
    this.loadTools();
  }
  /* RTE problem: Expression has changed after it was checked
   * http://www.syncfusion.com/forums/132152/rte-problem-expression-has-changed-after-it-was-checked?reply=ls7keM */


  ngAfterViewChecked() {
    this.cd.detectChanges();
  }

  ngOnDestroy() {
    var _a;

    (_a = this.routerSubscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
  }

  initialize() {
    this.user = this.accountService.getCurrentUser();
  }

  loadUserSettings() {
    var _a;

    (_a = this.userSettingsService.userSettings$) === null || _a === void 0 ? void 0 : _a.subscribe(data => {
      if (data != null) {
        this.userSettings = data;
        this.hasUserTheme = true;
        this.themeService.setTheme(this.userSettings.isDarkModeEnabled ? 'warner-dark' : 'warner-light');
      }
    });
  }

  loadTools() {
    this.sharedService.getTools(undefined, undefined, undefined, true).subscribe(data => {
      if (data.isSuccess) {
        this.tools = data.value;
        this.setMenuLinks();
      } else {
        this.resultHandler.handle(data);
      }
    });
  }

  setMenuLinks() {
    if (this.tools != null) {
      const currentRegion = this.regionSelectorService.regionSource.getValue();
      this.adminLinks = this.getAdminLinks().filter(l => {
        var _a, _b, _c;

        return ((_b = (_a = this.user) === null || _a === void 0 ? void 0 : _a.roles) === null || _b === void 0 ? void 0 : _b.some(r => {
          var _a;

          return (_a = l.roles) === null || _a === void 0 ? void 0 : _a.includes(r);
        })) && (l.regionsIds == undefined || ((_c = l.regionsIds) === null || _c === void 0 ? void 0 : _c.includes(currentRegion === null || currentRegion === void 0 ? void 0 : currentRegion.id)));
      });
      this.otherLinks = this.getOtherLinks().filter(l => {
        var _a, _b, _c, _d;

        const enabledToUserType = l.userTypes != null && l.userTypes.includes((_a = this.user) === null || _a === void 0 ? void 0 : _a.userType);
        if (!enabledToUserType) return false;

        if (l.managedByRegion) {
          if (l.regionsIds != null && ((_b = l.regionsIds) === null || _b === void 0 ? void 0 : _b.includes(currentRegion === null || currentRegion === void 0 ? void 0 : currentRegion.id))) {
            if (l.regionsContentHidden != null && l.regionsContentHidden.includes(currentRegion.id)) {
              return (_d = (_c = this.user) === null || _c === void 0 ? void 0 : _c.roles) === null || _d === void 0 ? void 0 : _d.some(ur => {
                var _a;

                return (_a = l.roles) === null || _a === void 0 ? void 0 : _a.includes(ur);
              });
            }

            return true;
          }

          return false;
        }

        return true;
      });
      this.favoriteLinks = this.getFavoriteLinks();
    }
  }

  onChangeTheme(event) {
    var _a;

    if (this.user != null) {
      const userId = Number(this.user.id);
      const isDarkModeEnabled = event.checked;
      this.themeService.setTheme(isDarkModeEnabled ? 'warner-dark' : 'warner-light');
      this.userSettingsService.updateUserMenuThemeSettings(userId, (_a = this.user) === null || _a === void 0 ? void 0 : _a.accountId, isDarkModeEnabled).subscribe(data => {
        this.resultHandler.handle(data);
        this.userSettings.isDarkModeEnabled = isDarkModeEnabled;
      });
    }
  }

  subscribeRegionChange() {
    this.regionSelectorService.region$.subscribe(r => {
      if (r != null) this.setMenuLinks();
    });
  }

  getFavoriteLinks() {
    var _a;

    const links = [];

    if ((_a = this.userSettings) === null || _a === void 0 ? void 0 : _a.favorites) {
      this.userSettings.favorites.forEach(uf => {
        if (uf.favoriteType.toString() === _constants_favorite_type__WEBPACK_IMPORTED_MODULE_4__.FavoriteType[_constants_favorite_type__WEBPACK_IMPORTED_MODULE_4__.FavoriteType.AdminTool]) {
          this.adminLinks.filter(l => {
            return l.toolId == uf.toolId;
          }).forEach(l => {
            links.push(l);
          });
        } else if (uf.favoriteType.toString() == _constants_favorite_type__WEBPACK_IMPORTED_MODULE_4__.FavoriteType[_constants_favorite_type__WEBPACK_IMPORTED_MODULE_4__.FavoriteType.OtherTool]) {
          this.otherLinks.filter(l => {
            return l.toolId == uf.toolId;
          }).forEach(l => {
            links.push(l);
          });
        }
      });
    }

    return links;
  }

  getAdminLinks() {
    var _a, _b, _c, _d, _e, _f;

    const links = [];
    const currentRegion = (_a = this.regionSelectorService.regionSource.getValue()) === null || _a === void 0 ? void 0 : _a.abbreviation;

    if (currentRegion != '' && currentRegion != undefined) {
      links.push({
        toolId: src_app_shared_constants_tools_list_enum__WEBPACK_IMPORTED_MODULE_1__.ToolsList.GlobalToolSuite,
        text: _shared_constants_application_urls__WEBPACK_IMPORTED_MODULE_0__.ApplicationUrls.GlobalToolSuite.text,
        path: _shared_constants_application_urls__WEBPACK_IMPORTED_MODULE_0__.ApplicationUrls.GlobalToolSuite.path,
        icon: _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_17__.faScrewdriverWrench,
        roles: _utils_role_utils__WEBPACK_IMPORTED_MODULE_2__.RoleUtils.getToolRoles(src_app_shared_constants_tools_list_enum__WEBPACK_IMPORTED_MODULE_1__.ToolsList.GlobalToolSuite),
        type: _constants_favorite_type__WEBPACK_IMPORTED_MODULE_4__.FavoriteType.AdminTool
      });
      links.push({
        toolId: src_app_shared_constants_tools_list_enum__WEBPACK_IMPORTED_MODULE_1__.ToolsList.Carrier411,
        text: _shared_constants_application_urls__WEBPACK_IMPORTED_MODULE_0__.ApplicationUrls.Carrier411Admin.text,
        path: _shared_constants_application_urls__WEBPACK_IMPORTED_MODULE_0__.ApplicationUrls.Carrier411Admin.path,
        iconPath: (_b = this.tools) === null || _b === void 0 ? void 0 : _b.filter(t => t.id == src_app_shared_constants_tools_list_enum__WEBPACK_IMPORTED_MODULE_1__.ToolsList.Carrier411)[0].primaryLogoFilePath,
        regionsIds: (_c = this.tools) === null || _c === void 0 ? void 0 : _c.filter(t => t.id == src_app_shared_constants_tools_list_enum__WEBPACK_IMPORTED_MODULE_1__.ToolsList.Carrier411)[0].regionsIds,
        roles: _utils_role_utils__WEBPACK_IMPORTED_MODULE_2__.RoleUtils.getToolRoles(src_app_shared_constants_tools_list_enum__WEBPACK_IMPORTED_MODULE_1__.ToolsList.Carrier411, currentRegion),
        type: _constants_favorite_type__WEBPACK_IMPORTED_MODULE_4__.FavoriteType.AdminTool
      });
      links.push({
        toolId: src_app_shared_constants_tools_list_enum__WEBPACK_IMPORTED_MODULE_1__.ToolsList.LargeGroupRFP,
        text: _shared_constants_application_urls__WEBPACK_IMPORTED_MODULE_0__.ApplicationUrls.LargeGroupRFPAdmin.text,
        path: _shared_constants_application_urls__WEBPACK_IMPORTED_MODULE_0__.ApplicationUrls.LargeGroupRFPAdmin.path,
        iconPath: (_d = this.tools) === null || _d === void 0 ? void 0 : _d.filter(t => t.id == src_app_shared_constants_tools_list_enum__WEBPACK_IMPORTED_MODULE_1__.ToolsList.LargeGroupRFP)[0].primaryLogoFilePath,
        roles: _utils_role_utils__WEBPACK_IMPORTED_MODULE_2__.RoleUtils.getToolRoles(src_app_shared_constants_tools_list_enum__WEBPACK_IMPORTED_MODULE_1__.ToolsList.LargeGroupRFP, currentRegion),
        type: _constants_favorite_type__WEBPACK_IMPORTED_MODULE_4__.FavoriteType.AdminTool
      });
      links.push({
        toolId: src_app_shared_constants_tools_list_enum__WEBPACK_IMPORTED_MODULE_1__.ToolsList.DocumentToolkit,
        text: _shared_constants_application_urls__WEBPACK_IMPORTED_MODULE_0__.ApplicationUrls.DocumentToolkitAdmin.text,
        path: _shared_constants_application_urls__WEBPACK_IMPORTED_MODULE_0__.ApplicationUrls.DocumentToolkitAdmin.path,
        iconPath: (_e = this.tools) === null || _e === void 0 ? void 0 : _e.filter(t => t.id == src_app_shared_constants_tools_list_enum__WEBPACK_IMPORTED_MODULE_1__.ToolsList.DocumentToolkit)[0].primaryLogoFilePath,
        roles: _utils_role_utils__WEBPACK_IMPORTED_MODULE_2__.RoleUtils.getToolRoles(src_app_shared_constants_tools_list_enum__WEBPACK_IMPORTED_MODULE_1__.ToolsList.DocumentToolkit, currentRegion),
        type: _constants_favorite_type__WEBPACK_IMPORTED_MODULE_4__.FavoriteType.AdminTool
      });
      links.push({
        toolId: src_app_shared_constants_tools_list_enum__WEBPACK_IMPORTED_MODULE_1__.ToolsList.SecureDirectUpload,
        text: _shared_constants_application_urls__WEBPACK_IMPORTED_MODULE_0__.ApplicationUrls.SecureDirectUploadAdmin.text,
        path: _shared_constants_application_urls__WEBPACK_IMPORTED_MODULE_0__.ApplicationUrls.SecureDirectUploadAdmin.path,
        iconPath: (_f = this.tools) === null || _f === void 0 ? void 0 : _f.filter(t => t.id == src_app_shared_constants_tools_list_enum__WEBPACK_IMPORTED_MODULE_1__.ToolsList.SecureDirectUpload)[0].primaryLogoFilePath,
        roles: _utils_role_utils__WEBPACK_IMPORTED_MODULE_2__.RoleUtils.getToolRoles(src_app_shared_constants_tools_list_enum__WEBPACK_IMPORTED_MODULE_1__.ToolsList.SecureDirectUpload, currentRegion),
        type: _constants_favorite_type__WEBPACK_IMPORTED_MODULE_4__.FavoriteType.AdminTool
      });
    }

    return links;
  }

  getOtherLinks() {
    var _a;

    const links = [];

    if (this.tools != null) {
      const currentRegion = (_a = this.regionSelectorService.regionSource.getValue()) === null || _a === void 0 ? void 0 : _a.abbreviation;

      if (currentRegion != '' && currentRegion != undefined) {
        this.tools.filter(t => !t.isAdminTool).map(t => {
          var _a;

          return {
            toolId: t.id,
            text: t.name,
            path: (_a = src_app_shared_utilities_url_utils__WEBPACK_IMPORTED_MODULE_3__.UrlUtils.getToolUrl(t.id, t.url)) !== null && _a !== void 0 ? _a : '',
            iconPath: t.primaryLogoFilePath,
            userTypes: t.permissionGroupsIds,
            regionsIds: t.regionsIds,
            managedByRegion: t.isExternal || t.isManagedByStateAndCarrier,
            type: _constants_favorite_type__WEBPACK_IMPORTED_MODULE_4__.FavoriteType.OtherTool,
            regionsContentHidden: t.toolsManagement.filter(tm => tm.isContentHidden).map(tm => tm.region.id),
            roles: _utils_role_utils__WEBPACK_IMPORTED_MODULE_2__.RoleUtils.getToolRoles(t.id, currentRegion)
          };
        }).forEach(l => links.push(l));
      }
    }

    return links;
  }

  onSortFavorite(link) {
    var _a;

    if (this.user != null) {
      const userId = Number(this.user.id);
      const favorite = {
        favoriteType: link.type,
        order: link.order,
        toolId: link.toolId
      };
      this.userSettingsService.updateUserFavoriteOrder(userId, (_a = this.user) === null || _a === void 0 ? void 0 : _a.accountId, favorite).subscribe(data => {
        this.handleFavoriteUpdate(data);
      });
    }
  }

  toggleFavorite(link) {
    if (link != null && this.user != null) {
      const userId = Number(this.user.id);
      this.userSettingsService.toggleUserFavorite(userId, this.user.accountId, link.toolId, link.type).subscribe(data => {
        this.handleFavoriteUpdate(data);
      });
    }
  }

  handleFavoriteUpdate(data) {
    this.resultHandler.handle(data).then(success => {
      if (success) {
        this.userSettings = data.value;
        this.favoriteLinks = this.getFavoriteLinks();
      }
    });
  }

}

MainMenuComponent.ɵfac = function MainMenuComponent_Factory(t) {
  return new (t || MainMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_shared_services_media_query_service__WEBPACK_IMPORTED_MODULE_5__.MediaQueryService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_authentication_services_account_service__WEBPACK_IMPORTED_MODULE_6__.AccountService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_7__.SharedService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_user_settings_service__WEBPACK_IMPORTED_MODULE_8__.UserSettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_result_handler_service__WEBPACK_IMPORTED_MODULE_9__.ResultHandlerService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_core_services_region_selector_service__WEBPACK_IMPORTED_MODULE_10__.RegionSelectorService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_theme_service__WEBPACK_IMPORTED_MODULE_11__.ThemeService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_main_menu_service__WEBPACK_IMPORTED_MODULE_12__.MainMenuService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_14__.ChangeDetectorRef));
};

MainMenuComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({
  type: MainMenuComponent,
  selectors: [["main-menu"]],
  outputs: {
    toggleClick: "toggleClick"
  },
  decls: 2,
  vars: 3,
  consts: [[3, "class", 4, "ngIf"], ["class", "logo-header", 4, "ngIf"], ["class", "wrapper-favorites", 4, "ngIf"], ["class", "wrapper-view-all", 4, "ngIf"], ["class", "mt-auto", 4, "ngIf"], ["class", "theme-switch-container pt-1", 4, "ngIf"], [1, "logo-header"], ["class", "logo", "src", "assets/images/logo-wp-dark-small.png", 4, "ngIf"], ["class", "logo", "src", "assets/images/logo-wp-light-small.png", 4, "ngIf"], [1, "icon", 3, "click"], [3, "icon"], ["src", "assets/images/logo-wp-dark-small.png", 1, "logo"], ["src", "assets/images/logo-wp-light-small.png", 1, "logo"], ["class", "logo", "src", "assets/images/logo-wp-dark.png", 4, "ngIf"], ["class", "logo", "src", "assets/images/logo-wp-light.png", 4, "ngIf"], ["src", "assets/images/logo-wp-dark.png", 1, "logo"], ["src", "assets/images/logo-wp-light.png", 1, "logo"], [1, "wrapper-favorites"], [1, "resource-cta"], [1, "icon"], [1, "text"], [3, "href"], [1, "wrapper-links"], [3, "isVisible", "links", "sortable", "showDashboard", "sort"], ["class", "mt-3", 4, "ngIf"], ["class", "fw-bold text-uppercase view-all mb-3", 3, "click", 4, "ngIf"], [1, "mt-3"], [1, "fw-bold", "text-uppercase", "view-all", "mb-3", 3, "click"], [1, "ml-2", 3, "icon"], [1, "wrapper-view-all"], ["class", "fw-bold text-uppercase favorites mb-3", 3, "click", 4, "ngIf"], ["title", "Admin Tools", 3, "isVisible", "links", "hasDivider", "favorites", "onToggleFavorite", 4, "ngIf"], [3, "title", "isVisible", "links", "favorites", "showDashboard", "onToggleFavorite", 4, "ngIf"], [1, "fw-bold", "text-uppercase", "favorites", "mb-3", 3, "click"], [1, "mr-2", 3, "icon"], ["title", "Admin Tools", 3, "isVisible", "links", "hasDivider", "favorites", "onToggleFavorite"], [3, "title", "isVisible", "links", "favorites", "showDashboard", "onToggleFavorite"], [1, "mt-auto"], [1, "theme-switch-container", "pt-1"], [3, "checked", "change"]],
  template: function MainMenuComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](0, MainMenuComponent_div_0_Template, 15, 24, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](1, "async");
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](1, 1, ctx.theme$)[0]);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.NgIf, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_19__.FaIconComponent, _main_menu_links_main_menu_links_component__WEBPACK_IMPORTED_MODULE_13__.MainMenuLinksComponent, _syncfusion_ej2_angular_buttons__WEBPACK_IMPORTED_MODULE_20__.SwitchComponent],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.AsyncPipe],
  styles: [".navbar-component[_ngcontent-%COMP%] {\n  overflow: hidden;\n  box-shadow: 0px 3px 6px var(--shadow-light);\n}\n.navbar-component.nav-desktop[_ngcontent-%COMP%] {\n  border-radius: 15px;\n}\n.navbar-component.nav-desktop[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%] {\n  height: calc(100vh - 45px);\n  border-radius: 15px;\n}\n.navbar-component.nav-mobile[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%] {\n  height: 100vh;\n}\n.navbar-component[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.navbar-component[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 20px 15px;\n}\n.navbar-component[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .wrapper-view-all[_ngcontent-%COMP%], .navbar-component[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .wrapper-favorites[_ngcontent-%COMP%] {\n  overflow: hidden;\n  height: 100%;\n  display: flex;\n  flex-flow: column;\n}\n.navbar-component[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .wrapper-links[_ngcontent-%COMP%] {\n  overflow-y: auto;\n}\n.navbar-component[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .wrapper-links[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  padding: 3px 0;\n}\n.navbar-component[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .wrapper-links[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 5px;\n}\n.navbar-component[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .wrapper-links[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n}\n.navbar-component[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .logo-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.navbar-component[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .logo-header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  height: 30px;\n}\n.navbar-component[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 30px;\n}\n.navbar-component[_ngcontent-%COMP%]   .wrapper.nav-open[_ngcontent-%COMP%]   .logo-header[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n.navbar-component[_ngcontent-%COMP%]   .wrapper.nav-open[_ngcontent-%COMP%]   .logo-header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  height: 30px;\n}\n.navbar-component[_ngcontent-%COMP%]   .wrapper.nav-close[_ngcontent-%COMP%]   .logo-header[_ngcontent-%COMP%] {\n  flex-direction: column;\n  justify-content: center;\n}\n.navbar-component[_ngcontent-%COMP%]   .wrapper.nav-close[_ngcontent-%COMP%]   .logo-header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  height: 40px;\n}\n.navbar-component[_ngcontent-%COMP%]   .wrapper.nav-close[_ngcontent-%COMP%]   .resource-cta[_ngcontent-%COMP%] {\n  display: none;\n}\n.navbar-component[_ngcontent-%COMP%]   .wrapper.nav-close[_ngcontent-%COMP%]   .wrapper-view-all[_ngcontent-%COMP%]   .wrapper-links[_ngcontent-%COMP%], .navbar-component[_ngcontent-%COMP%]   .wrapper.nav-close[_ngcontent-%COMP%]   .wrapper-favorites[_ngcontent-%COMP%]   .wrapper-links[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.navbar-component[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  margin: 10px 0;\n  width: 100%;\n}\n.navbar-component[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .logo-header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  width: auto;\n}\n.navbar-component[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .logo-header[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  text-align: center;\n  cursor: pointer;\n}\n.navbar-component[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .resource-cta[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  border-radius: 5px;\n  padding: 10px;\n  margin: 15px 0 20px 0;\n}\n.navbar-component[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .resource-cta[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin-right: 10px;\n}\n.navbar-component[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .resource-cta[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%], .navbar-component[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .resource-cta[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 18px;\n}\n.navbar-component[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .theme-switch-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  column-gap: 0.5em;\n}\n.navbar-component[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .theme-switch-container[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 16px;\n}\n.navbar-component[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .theme-switch-container[_ngcontent-%COMP%]   .e-switch-wrapper[_ngcontent-%COMP%] {\n  width: 40px;\n}\n.navbar-component[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .theme-switch-container[_ngcontent-%COMP%]   .e-switch-handle[_ngcontent-%COMP%] {\n  background-color: var(--marine);\n}\n.navbar-component[_ngcontent-%COMP%]   .view-all[_ngcontent-%COMP%], .navbar-component[_ngcontent-%COMP%]   .favorites[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.navbar-component[_ngcontent-%COMP%]   .view-all[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%], .navbar-component[_ngcontent-%COMP%]   .favorites[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4tbWVudS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsMkNBQUE7QUFDRjtBQUNFO0VBQ0UsbUJBQUE7QUFDSjtBQUNJO0VBQ0UsMEJBQUE7RUFDQSxtQkFBQTtBQUNOO0FBSUk7RUFDRSxhQUFBO0FBRk47QUFNRTtFQUNFLGVBQUE7QUFKSjtBQU9FO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUFMSjtBQU9JOztFQUVFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQUxOO0FBUUk7RUFDRSxnQkFBQTtBQU5OO0FBUU07RUFDRSxjQUFBO0FBTlI7QUFTTTtFQUNFLFVBQUE7QUFQUjtBQVVNO0VBQ0UsbUJBQUE7QUFSUjtBQVlJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBVk47QUFZTTtFQUNFLFlBQUE7QUFWUjtBQWVNO0VBQ0UsV0FBQTtBQWJSO0FBa0JNO0VBQ0UsOEJBQUE7QUFoQlI7QUFrQlE7RUFDRSxZQUFBO0FBaEJWO0FBc0JNO0VBQ0Usc0JBQUE7RUFDQSx1QkFBQTtBQXBCUjtBQXNCUTtFQUNFLFlBQUE7QUFwQlY7QUF3Qk07RUFDRSxhQUFBO0FBdEJSO0FBeUJNOztFQUVFLFlBQUE7QUF2QlI7QUEyQkk7RUFDRSxjQUFBO0VBQ0EsV0FBQTtBQXpCTjtBQTZCTTtFQUNFLFdBQUE7QUEzQlI7QUE4Qk07RUFDRSxrQkFBQTtFQUNBLGVBQUE7QUE1QlI7QUFnQ0k7RUFDRSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtBQTlCTjtBQWdDTTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQTlCUjtBQWlDTTs7RUFFRSxlQUFBO0VBQ0EsaUJBQUE7QUEvQlI7QUFtQ0k7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQWpDTjtBQW1DTTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQWpDUjtBQW9DTTtFQUNFLFdBQUE7QUFsQ1I7QUFxQ007RUFDRSwrQkFBQTtBQW5DUjtBQXdDRTs7RUFFRSxlQUFBO0FBdENKO0FBd0NJOztFQUNFLGVBQUE7QUFyQ04iLCJmaWxlIjoibWFpbi1tZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhci1jb21wb25lbnQge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggdmFyKC0tc2hhZG93LWxpZ2h0KTtcclxuXHJcbiAgJi5uYXYtZGVza3RvcCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG5cclxuICAgIC53cmFwcGVyIHtcclxuICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNDVweCk7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLm5hdi1tb2JpbGUge1xyXG4gICAgLndyYXBwZXIge1xyXG4gICAgICBoZWlnaHQ6IGNhbGMoMTAwdmgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZmEtaWNvbiB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgfVxyXG5cclxuICAud3JhcHBlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHBhZGRpbmc6IDIwcHggMTVweDtcclxuXHJcbiAgICAud3JhcHBlci12aWV3LWFsbCxcclxuICAgIC53cmFwcGVyLWZhdm9yaXRlcyB7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgICB9XHJcblxyXG4gICAgLndyYXBwZXItbGlua3Mge1xyXG4gICAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG5cclxuICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgICAgIHBhZGRpbmc6IDNweCAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICAgICAgd2lkdGg6IDVweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAubG9nby1oZWFkZXIge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgLmxvZ28ge1xyXG4gICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5pY29uIHtcclxuICAgICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogMzBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYubmF2LW9wZW4ge1xyXG4gICAgICAubG9nby1oZWFkZXIge1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgICAgICAgLmxvZ28ge1xyXG4gICAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYubmF2LWNsb3NlIHtcclxuICAgICAgLmxvZ28taGVhZGVyIHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgICAgICAubG9nbyB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAucmVzb3VyY2UtY3RhIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAud3JhcHBlci12aWV3LWFsbCAud3JhcHBlci1saW5rcyxcclxuICAgICAgLndyYXBwZXItZmF2b3JpdGVzIC53cmFwcGVyLWxpbmtzIHtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBociB7XHJcbiAgICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAubG9nby1oZWFkZXIge1xyXG4gICAgICAubG9nbyB7XHJcbiAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5pY29uIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnJlc291cmNlLWN0YSB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICBtYXJnaW46IDE1cHggMCAyMHB4IDA7XHJcblxyXG4gICAgICAuaWNvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnRleHQsXHJcbiAgICAgIGEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC50aGVtZS1zd2l0Y2gtY29udGFpbmVyIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgY29sdW1uLWdhcDogMC41ZW07XHJcblxyXG4gICAgICBmYS1pY29uIHtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5lLXN3aXRjaC13cmFwcGVyIHtcclxuICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmUtc3dpdGNoLWhhbmRsZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFyaW5lKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnZpZXctYWxsLFxyXG4gIC5mYXZvcml0ZXMge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgIGZhLWljb24ge1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"]
});

/***/ }),

/***/ 57009:
/*!************************************************************!*\
  !*** ./src/app/core/components/navbar/navbar.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavbarComponent": () => (/* binding */ NavbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 60116);
/* harmony import */ var src_app_shared_utilities_url_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/utilities/url-utils */ 82000);
/* harmony import */ var _shared_constants_application_urls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/constants/application-urls */ 85561);
/* harmony import */ var _constants_nav_elements_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/nav-elements.constants */ 99136);
/* harmony import */ var _constants_nav_menus_enums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants/nav-menus.enums */ 43485);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_nav_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/nav.service */ 30651);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _shared_components_return_button_return_button_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/return-button/return-button.component */ 44188);











function NavbarComponent_div_0_return_button_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "return-button", 5);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("returnUrl", ctx_r1.navbar.returnUrl);
} }
function NavbarComponent_div_0_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 6)(1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const link_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("routerLink", link_r3.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("state", ctx_r2.state);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](link_r3.text);
} }
function NavbarComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, NavbarComponent_div_0_return_button_1_Template, 1, 1, "return-button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, NavbarComponent_div_0_div_4_Template, 3, 3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.navbar.showReturn);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.navbar.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r0.navbar.links);
} }
class NavbarComponent {
    constructor(router, navService) {
        this.router = router;
        this.navService = navService;
        this.replaceParamFromUrl = src_app_shared_utilities_url_utils__WEBPACK_IMPORTED_MODULE_0__.UrlUtils.replaceParamFromUrl;
        this.navbar = undefined;
        this.initialize();
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        this.routerSubscription.unsubscribe();
        this.navSubscription.unsubscribe();
    }
    initialize() {
        this.routerSubscription = this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_8__.NavigationEnd)).subscribe((res) => {
            this.state = history.state;
            this.setCurrentNavBar();
            this.replaceLinksParams();
        });
        this.navSubscription = this.navService.navbar$.subscribe(item => {
            this.navbar = item;
            this.replaceLinksParams();
        });
    }
    setCurrentNavBar() {
        switch (this.getNavMenu()) {
            case _constants_nav_menus_enums__WEBPACK_IMPORTED_MODULE_3__.NavMenus.GlobalToolSuite:
                this.navbar = _constants_nav_elements_constants__WEBPACK_IMPORTED_MODULE_2__.NavElements.GetGlobalToolSuite();
                break;
            case _constants_nav_menus_enums__WEBPACK_IMPORTED_MODULE_3__.NavMenus.ToolManagement:
            case _constants_nav_menus_enums__WEBPACK_IMPORTED_MODULE_3__.NavMenus.UserManagement:
            case _constants_nav_menus_enums__WEBPACK_IMPORTED_MODULE_3__.NavMenus.RoleManagement:
                // Being handled by the NavService.
                break;
            case _constants_nav_menus_enums__WEBPACK_IMPORTED_MODULE_3__.NavMenus.Carrier411Admin:
                this.navbar = _constants_nav_elements_constants__WEBPACK_IMPORTED_MODULE_2__.NavElements.GetCarrier411Admin();
                break;
            default:
                this.navbar = undefined;
                break;
        }
    }
    getNavMenu() {
        if (this.router.url.endsWith(_shared_constants_application_urls__WEBPACK_IMPORTED_MODULE_1__.ApplicationUrls.GlobalToolSuite.path) ||
            this.router.url.endsWith(_shared_constants_application_urls__WEBPACK_IMPORTED_MODULE_1__.ApplicationUrls.GlobalToolSuite.UserManagement.path) ||
            this.router.url.endsWith(_shared_constants_application_urls__WEBPACK_IMPORTED_MODULE_1__.ApplicationUrls.GlobalToolSuite.UserManagement.NewAdministrator.path) ||
            this.router.url.endsWith(_shared_constants_application_urls__WEBPACK_IMPORTED_MODULE_1__.ApplicationUrls.GlobalToolSuite.RoleManagement.path) ||
            this.router.url.includes(_shared_constants_application_urls__WEBPACK_IMPORTED_MODULE_1__.ApplicationUrls.GlobalToolSuite.StateManagement.path) ||
            this.router.url.includes(_shared_constants_application_urls__WEBPACK_IMPORTED_MODULE_1__.ApplicationUrls.GlobalToolSuite.CarrierManagement.path) ||
            this.router.url.endsWith(_shared_constants_application_urls__WEBPACK_IMPORTED_MODULE_1__.ApplicationUrls.GlobalToolSuite.ToolsManagement.path) ||
            this.router.url.includes(_shared_constants_application_urls__WEBPACK_IMPORTED_MODULE_1__.ApplicationUrls.GlobalToolSuite.ResourceCenter.path)) {
            return _constants_nav_menus_enums__WEBPACK_IMPORTED_MODULE_3__.NavMenus.GlobalToolSuite;
        }
        if (this.router.url.includes(_shared_constants_application_urls__WEBPACK_IMPORTED_MODULE_1__.ApplicationUrls.GlobalToolSuite.UserManagement.path)) {
            return _constants_nav_menus_enums__WEBPACK_IMPORTED_MODULE_3__.NavMenus.UserManagement;
        }
        const roleManagementPath = src_app_shared_utilities_url_utils__WEBPACK_IMPORTED_MODULE_0__.UrlUtils.replaceParamFromUrl(this.router.url, _shared_constants_application_urls__WEBPACK_IMPORTED_MODULE_1__.ApplicationUrls.GlobalToolSuite.RoleManagement.RoleToolManagement.path);
        if (this.router.url.includes(roleManagementPath)) {
            return _constants_nav_menus_enums__WEBPACK_IMPORTED_MODULE_3__.NavMenus.RoleManagement;
        }
        if (this.router.url.includes(_shared_constants_application_urls__WEBPACK_IMPORTED_MODULE_1__.ApplicationUrls.GlobalToolSuite.ToolsManagement.path)) {
            return _constants_nav_menus_enums__WEBPACK_IMPORTED_MODULE_3__.NavMenus.ToolManagement;
        }
        if (this.router.url == _shared_constants_application_urls__WEBPACK_IMPORTED_MODULE_1__.ApplicationUrls.Carrier411Admin.path ||
            this.router.url == _shared_constants_application_urls__WEBPACK_IMPORTED_MODULE_1__.ApplicationUrls.Carrier411Admin.LandingPageContentManagement.path ||
            this.router.url == _shared_constants_application_urls__WEBPACK_IMPORTED_MODULE_1__.ApplicationUrls.Carrier411Admin.MassUploadTool.path) {
            return _constants_nav_menus_enums__WEBPACK_IMPORTED_MODULE_3__.NavMenus.Carrier411Admin;
        }
        return _constants_nav_menus_enums__WEBPACK_IMPORTED_MODULE_3__.NavMenus.None;
    }
    replaceLinksParams() {
        var _a, _b;
        (_b = (_a = this.navbar) === null || _a === void 0 ? void 0 : _a.links) === null || _b === void 0 ? void 0 : _b.filter(l => l.path.includes('{')).forEach(link => {
            link.path = this.replaceParamFromUrl(this.router.url, link.path);
        });
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_nav_service__WEBPACK_IMPORTED_MODULE_4__.NavService)); };
NavbarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["navbar"]], decls: 1, vars: 1, consts: [["class", "nav-menu-component", 4, "ngIf"], [1, "nav-menu-component"], ["sufix", "To Main", 3, "returnUrl", 4, "ngIf"], [1, "nav-title"], ["class", "nav-url", 3, "routerLink", "state", 4, "ngFor", "ngForOf"], ["sufix", "To Main", 3, "returnUrl"], [1, "nav-url", 3, "routerLink", "state"], ["routerLinkActive", "nav-url-active"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, NavbarComponent_div_0_Template, 5, 3, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.navbar != null);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _shared_components_return_button_return_button_component__WEBPACK_IMPORTED_MODULE_5__.ReturnButtonComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLinkActive], styles: [".nav-menu-component[_ngcontent-%COMP%]   .nav-title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  text-transform: uppercase;\n  margin-bottom: 15px;\n}\n.nav-menu-component[_ngcontent-%COMP%]   .nav-url[_ngcontent-%COMP%] {\n  color: var(--warnerblue);\n  margin-bottom: 5px;\n  cursor: pointer;\n}\n.nav-menu-component[_ngcontent-%COMP%]   .nav-url[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.nav-menu-component[_ngcontent-%COMP%]   .nav-url-active[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUFBSjtBQUdFO0VBQ0Usd0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFESjtBQUdJO0VBQ0UsMEJBQUE7QUFETjtBQUlJO0VBQ0UsaUJBQUE7QUFGTiIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2LW1lbnUtY29tcG9uZW50IHtcclxuICAubmF2LXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICB9XHJcblxyXG4gIC5uYXYtdXJsIHtcclxuICAgIGNvbG9yOiB2YXIoLS13YXJuZXJibHVlKTtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICB9XHJcblxyXG4gICAgJi1hY3RpdmUge1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 31030:
/*!******************************************************************************!*\
  !*** ./src/app/core/components/region-selector/region-selector.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegionSelectorComponent": () => (/* binding */ RegionSelectorComponent)
/* harmony export */ });
/* harmony import */ var _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/pro-light-svg-icons */ 67538);
/* harmony import */ var src_app_admin_region_management_services_region_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/admin/region-management/services/region.service */ 59194);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_result_handler_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/result.handler.service */ 32464);
/* harmony import */ var _services_region_selector_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/region-selector.service */ 69442);
/* harmony import */ var src_app_authentication_services_account_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/authentication/services/account.service */ 94398);
/* harmony import */ var _services_user_settings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/user-settings.service */ 87338);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @syncfusion/ej2-angular-dropdowns */ 24779);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 19397);











function RegionSelectorComponent_ejs_dropdownlist_1_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "fa-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", ctx_r2.faGlobeAmericas);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](data_r3 != null ? data_r3.name : "");
} }
function RegionSelectorComponent_ejs_dropdownlist_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ejs-dropdownlist", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function RegionSelectorComponent_ejs_dropdownlist_1_Template_ejs_dropdownlist_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r4.onRegionChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, RegionSelectorComponent_ejs_dropdownlist_1_ng_template_1_Template, 4, 2, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("dataSource", ctx_r0.regions)("fields", ctx_r0.fields)("enablePersistence", true)("value", ctx_r0.userRegionId);
} }
class RegionSelectorComponent {
    constructor(resultHandler, regionService, regionSelectorService, accountService, userSettingsService, cd) {
        this.resultHandler = resultHandler;
        this.regionService = regionService;
        this.regionSelectorService = regionSelectorService;
        this.accountService = accountService;
        this.userSettingsService = userSettingsService;
        this.cd = cd;
        this.faGlobeAmericas = _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faGlobeAmericas;
        this.fields = { text: 'name', value: 'id' };
    }
    ngOnInit() {
        this.loadUserRegion();
    }
    /* RTE problem: Expression has changed after it was checked
     * http://www.syncfusion.com/forums/132152/rte-problem-expression-has-changed-after-it-was-checked?reply=ls7keM */
    ngAfterViewChecked() {
        this.cd.detectChanges();
    }
    onRegionChanged(event) {
        const region = event.itemData;
        this.userRegionId = region.id;
        if (region != null)
            this.regionSelectorService.changeRegion(region);
        const user = this.accountService.getCurrentUser();
        if (user != null) {
            const userId = Number(user.id);
            this.userSettingsService.updateUserRegionSettings(userId, user === null || user === void 0 ? void 0 : user.accountId, region.id).subscribe((data) => {
                if (data.isSuccess) {
                    window.location.reload();
                }
                else {
                    this.resultHandler.handle(data);
                }
            });
        }
    }
    loadUserRegion() {
        var _a;
        (_a = this.userSettingsService.userSettings$) === null || _a === void 0 ? void 0 : _a.subscribe((data) => {
            if (data != null && this.userRegionId != data.regionId) {
                this.userRegionId = data.regionId;
                this.loadRegions();
            }
        });
    }
    loadRegions() {
        this.regionService.getActiveRegions().subscribe((data) => {
            if (data.isSuccess) {
                this.regions = data.value;
                this.publishUserRegion();
            }
            else {
                this.resultHandler.handle(data);
            }
        });
    }
    publishUserRegion() {
        if (this.regions != null) {
            const region = this.regions.filter(r => r.id == this.userRegionId)[0];
            if (this.regionSelectorService.regionSource.getValue() == null) {
                this.regionSelectorService.changeRegion(region);
            }
        }
    }
}
RegionSelectorComponent.ɵfac = function RegionSelectorComponent_Factory(t) { return new (t || RegionSelectorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_result_handler_service__WEBPACK_IMPORTED_MODULE_1__.ResultHandlerService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_admin_region_management_services_region_service__WEBPACK_IMPORTED_MODULE_0__.RegionService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_region_selector_service__WEBPACK_IMPORTED_MODULE_2__.RegionSelectorService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_authentication_services_account_service__WEBPACK_IMPORTED_MODULE_3__.AccountService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_user_settings_service__WEBPACK_IMPORTED_MODULE_4__.UserSettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef)); };
RegionSelectorComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: RegionSelectorComponent, selectors: [["region-selector"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵProvidersFeature"]([src_app_admin_region_management_services_region_service__WEBPACK_IMPORTED_MODULE_0__.RegionService])], decls: 2, vars: 1, consts: [[1, "region-selector-wrapper", "d-flex"], ["popupWidth", "auto", 3, "dataSource", "fields", "enablePersistence", "value", "change", 4, "ngIf"], ["popupWidth", "auto", 3, "dataSource", "fields", "enablePersistence", "value", "change"], ["valueTemplate", ""], [1, "e-icons"], [3, "icon"]], template: function RegionSelectorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, RegionSelectorComponent_ejs_dropdownlist_1_Template, 3, 4, "ejs-dropdownlist", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.regions != null);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_8__.DropDownListComponent, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__.FaIconComponent], styles: [".region-selector-wrapper[_ngcontent-%COMP%] {\n  gap: 0.5em;\n  align-items: center;\n  color: var(--black);\n}\n.region-selector-wrapper[_ngcontent-%COMP%]   .e-dropdownlist[_ngcontent-%COMP%]   .e-input-group[_ngcontent-%COMP%], .region-selector-wrapper[_ngcontent-%COMP%]   .e-dropdownlist[_ngcontent-%COMP%]   .e-input-group-icon[_ngcontent-%COMP%] {\n  border: none;\n}\n.region-selector-wrapper[_ngcontent-%COMP%]   .e-dropdownlist[_ngcontent-%COMP%]   .e-input-group[_ngcontent-%COMP%]:active, .region-selector-wrapper[_ngcontent-%COMP%]   .e-dropdownlist[_ngcontent-%COMP%]   .e-input-group[_ngcontent-%COMP%]:focus, .region-selector-wrapper[_ngcontent-%COMP%]   .e-dropdownlist[_ngcontent-%COMP%]   .e-input-group[_ngcontent-%COMP%]:hover {\n  border-color: var(--warnerblue5);\n  box-shadow: 0 0 0 4px var(--warnerblue5);\n}\n@media only screen and (max-width: 768px) {\n  .region-selector-wrapper[_ngcontent-%COMP%]   .e-dropdownlist[_ngcontent-%COMP%]   .e-input-group[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n.region-selector-wrapper[_ngcontent-%COMP%]   .e-dropdownlist[_ngcontent-%COMP%]   .e-input-value[_ngcontent-%COMP%] {\n  padding: 0 0.5em;\n  display: flex;\n  align-items: center;\n  gap: 1em;\n  justify-content: flex-start;\n}\n.region-selector-wrapper[_ngcontent-%COMP%]   .e-dropdownlist[_ngcontent-%COMP%]   .e-input-value[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  cursor: pointer;\n  min-width: 4em;\n}\n@media only screen and (max-width: 850px) {\n  .region-selector-wrapper[_ngcontent-%COMP%]   .e-dropdownlist[_ngcontent-%COMP%]   .e-input-value[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lvbi1zZWxlY3Rvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7QUFFSTs7RUFFRSxZQUFBO0FBQU47QUFJTTtFQUdFLGdDQUFBO0VBQ0Esd0NBQUE7QUFKUjtBQU9NO0VBUkY7SUFTSSxzQkFBQTtFQUpOO0FBQ0Y7QUFPSTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBTE47QUFPTTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FBTFI7QUFRTTtFQVpGO0lBYUksc0JBQUE7RUFMTjtBQUNGIiwiZmlsZSI6InJlZ2lvbi1zZWxlY3Rvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZWdpb24tc2VsZWN0b3Itd3JhcHBlciB7XHJcbiAgZ2FwOiAwLjVlbTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGNvbG9yOiB2YXIoLS1ibGFjayk7XHJcblxyXG4gIC5lLWRyb3Bkb3dubGlzdCB7XHJcbiAgICAuZS1pbnB1dC1ncm91cCxcclxuICAgIC5lLWlucHV0LWdyb3VwLWljb24ge1xyXG4gICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLmUtaW5wdXQtZ3JvdXAge1xyXG4gICAgICAmOmFjdGl2ZSxcclxuICAgICAgJjpmb2N1cyxcclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS13YXJuZXJibHVlNSk7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgNHB4IHZhcigtLXdhcm5lcmJsdWU1KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZS1pbnB1dC12YWx1ZSB7XHJcbiAgICAgIHBhZGRpbmc6IDAgMC41ZW07XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGdhcDogMWVtO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcblxyXG4gICAgICBsYWJlbCB7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIG1pbi13aWR0aDogNGVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg1MHB4KSB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 65366:
/*!**************************************************************************!*\
  !*** ./src/app/core/components/user-settings/user-settings.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserSettingsComponent": () => (/* binding */ UserSettingsComponent)
/* harmony export */ });
/* harmony import */ var _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/pro-light-svg-icons */ 67538);
/* harmony import */ var src_app_shared_constants_user_type_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/constants/user-type.enum */ 6814);
/* harmony import */ var src_app_shared_constants_application_urls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/constants/application-urls */ 85561);
/* harmony import */ var src_app_shared_utilities_url_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/utilities/url-utils */ 82000);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_authentication_services_account_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/authentication/services/account.service */ 94398);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _syncfusion_ej2_angular_splitbuttons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @syncfusion/ej2-angular-splitbuttons */ 34872);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 19397);









function UserSettingsComponent_div_0_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("select", function UserSettingsComponent_div_0_button_1_Template_button_select_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r2.select($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "fa-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("items", ctx_r1.items);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", ctx_r1.faUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.user.fullName, " ");
} }
function UserSettingsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, UserSettingsComponent_div_0_button_1_Template, 4, 3, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.items != null);
} }
class UserSettingsComponent {
    constructor(accountService) {
        this.accountService = accountService;
        this.logOutText = 'Sign Out';
        this.faUser = _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faUser;
        this.user = null;
    }
    ngOnInit() {
        this.user = this.accountService.getCurrentUser();
        this.setupUserLinks();
    }
    setupUserLinks() {
        var _a;
        if (((_a = this.user) === null || _a === void 0 ? void 0 : _a.userType) == src_app_shared_constants_user_type_enum__WEBPACK_IMPORTED_MODULE_0__.UserType.Broker) {
            this.items = src_app_shared_utilities_url_utils__WEBPACK_IMPORTED_MODULE_2__.UrlUtils.getLinksFromObject(src_app_shared_constants_application_urls__WEBPACK_IMPORTED_MODULE_1__.ApplicationUrls.BrokerUserLinks).map(l => {
                return {
                    text: l.text,
                    url: l.path
                };
            });
            this.items.push({
                separator: true
            }, {
                text: this.logOutText
            });
        }
        else {
            this.items = [{
                    text: this.logOutText
                }];
        }
    }
    select(args) {
        if (args.item.text === this.logOutText)
            this.signOut();
    }
    signOut() {
        this.accountService.logout();
    }
}
UserSettingsComponent.ɵfac = function UserSettingsComponent_Factory(t) { return new (t || UserSettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_authentication_services_account_service__WEBPACK_IMPORTED_MODULE_3__.AccountService)); };
UserSettingsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: UserSettingsComponent, selectors: [["user-settings"]], decls: 1, vars: 1, consts: [["class", "user-settings-wrapper", 4, "ngIf"], [1, "user-settings-wrapper"], ["ejs-dropdownbutton", "", 3, "items", "select", 4, "ngIf"], ["ejs-dropdownbutton", "", 3, "items", "select"], [1, "e-icons"], [3, "icon"]], template: function UserSettingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, UserSettingsComponent_div_0_Template, 2, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.user != null);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _syncfusion_ej2_angular_splitbuttons__WEBPACK_IMPORTED_MODULE_7__.DropDownButtonComponent, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__.FaIconComponent], styles: [".user-settings-wrapper[_ngcontent-%COMP%]   .e-control.e-dropdown-btn[_ngcontent-%COMP%] {\n  border: none;\n  background: none;\n  color: var(--black);\n}\n.user-settings-wrapper[_ngcontent-%COMP%]   .e-control.e-dropdown-btn[_ngcontent-%COMP%]:hover, .user-settings-wrapper[_ngcontent-%COMP%]   .e-control.e-dropdown-btn.e-active[_ngcontent-%COMP%], .user-settings-wrapper[_ngcontent-%COMP%]   .e-control.e-dropdown-btn[_ngcontent-%COMP%]:focus {\n  color: var(--black);\n  border-color: var(--warnerblue5);\n  box-shadow: 0 0 0 4px var(--warnerblue5);\n}\n.user-settings-wrapper[_ngcontent-%COMP%]   .e-dropdown-btn[_ngcontent-%COMP%]   .e-caret[_ngcontent-%COMP%]::before, .user-settings-wrapper[_ngcontent-%COMP%]   .e-dropdown-btn.e-btn[_ngcontent-%COMP%]   .e-caret[_ngcontent-%COMP%]::before {\n  content: \"\\e734\";\n  font-size: 26px;\n  color: #999999;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItc2V0dGluZ3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUFKO0FBRUk7RUFHRSxtQkFBQTtFQUNBLGdDQUFBO0VBQ0Esd0NBQUE7QUFGTjtBQU1FO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUpKIiwiZmlsZSI6InVzZXItc2V0dGluZ3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXNlci1zZXR0aW5ncy13cmFwcGVyIHtcclxuICAuZS1jb250cm9sLmUtZHJvcGRvd24tYnRuIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBjb2xvcjogdmFyKC0tYmxhY2spO1xyXG5cclxuICAgICY6aG92ZXIsXHJcbiAgICAmLmUtYWN0aXZlLFxyXG4gICAgJjpmb2N1cyB7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1ibGFjayk7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0td2FybmVyYmx1ZTUpO1xyXG4gICAgICBib3gtc2hhZG93OiAwIDAgMCA0cHggdmFyKC0td2FybmVyYmx1ZTUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmUtZHJvcGRvd24tYnRuIC5lLWNhcmV0OjpiZWZvcmUsIC5lLWRyb3Bkb3duLWJ0bi5lLWJ0biAuZS1jYXJldDo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXFxlNzM0XCI7XHJcbiAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICBjb2xvcjogIzk5OTk5OTtcclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 9812:
/*!******************************************************!*\
  !*** ./src/app/core/constants/core-api.constants.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreApiEndpoints": () => (/* binding */ CoreApiEndpoints)
/* harmony export */ });
let coreApiEndpoints = {
    /* User Settings */
    GetUserSettings: (userId) => `/users-settings/${userId}`,
    GetUserRegionSettings: (userId) => `/users-settings/${userId}/region`,
    ToggleUserFavorite: (userId) => `/users-settings/${userId}/toggle-favorite`,
    ToggleUserResourceCenterFavorite: (userId) => `/users-settings/${userId}/toggle-resource-center-favorite`,
    UpdateUserFavoriteOrder: (userId) => `/users-settings/${userId}/favorite-order`,
    UpdateUserResourceCenterOrder: (userId) => `/users-settings/${userId}/resource-center-order`,
    UpdateUserMenuThemeSettings: (userId) => `/users-settings/${userId}/menu-theme`,
    UpdateUserRegionSettings: (userId) => `/users-settings/${userId}/region`
};
const CoreApiEndpoints = coreApiEndpoints;


/***/ }),

/***/ 20168:
/*!*************************************************!*\
  !*** ./src/app/core/constants/favorite-type.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FavoriteType": () => (/* binding */ FavoriteType)
/* harmony export */ });
var FavoriteType;
(function (FavoriteType) {
    FavoriteType[FavoriteType["AdminTool"] = 0] = "AdminTool";
    FavoriteType[FavoriteType["OtherTool"] = 1] = "OtherTool";
})(FavoriteType || (FavoriteType = {}));
;


/***/ }),

/***/ 99136:
/*!**********************************************************!*\
  !*** ./src/app/core/constants/nav-elements.constants.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GlobalToolSuiteMenu": () => (/* binding */ GlobalToolSuiteMenu),
/* harmony export */   "NavElements": () => (/* binding */ NavElements)
/* harmony export */ });
/* harmony import */ var _shared_utilities_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/utilities/shared */ 14364);
/* harmony import */ var _shared_constants_application_urls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/constants/application-urls */ 85561);
/* harmony import */ var src_app_shared_utilities_url_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/utilities/url-utils */ 82000);



function GlobalToolSuiteMenu() {
    return {
        returnUrl: _shared_constants_application_urls__WEBPACK_IMPORTED_MODULE_1__.ApplicationUrls.GlobalToolSuite.path,
        title: _shared_constants_application_urls__WEBPACK_IMPORTED_MODULE_1__.ApplicationUrls.GlobalToolSuite.text,
        links: src_app_shared_utilities_url_utils__WEBPACK_IMPORTED_MODULE_2__.UrlUtils.getLinksFromObject(_shared_constants_application_urls__WEBPACK_IMPORTED_MODULE_1__.ApplicationUrls.GlobalToolSuite)
    };
}
;
let navElements = {
    GetGlobalToolSuite: () => {
        return GlobalToolSuiteMenu();
    },
    GetUserManagement: (userType) => {
        var links = [];
        links.push(src_app_shared_utilities_url_utils__WEBPACK_IMPORTED_MODULE_2__.UrlUtils.getLinkFromObject(_shared_constants_application_urls__WEBPACK_IMPORTED_MODULE_1__.ApplicationUrls.GlobalToolSuite.UserManagement.ContactInfo));
        if (userType == 'Administrator') {
            links.push(src_app_shared_utilities_url_utils__WEBPACK_IMPORTED_MODULE_2__.UrlUtils.getLinkFromObject(_shared_constants_application_urls__WEBPACK_IMPORTED_MODULE_1__.ApplicationUrls.GlobalToolSuite.UserManagement.Security));
        }
        links.push(src_app_shared_utilities_url_utils__WEBPACK_IMPORTED_MODULE_2__.UrlUtils.getLinkFromObject(_shared_constants_application_urls__WEBPACK_IMPORTED_MODULE_1__.ApplicationUrls.GlobalToolSuite.UserManagement.Roles));
        return {
            showReturn: true,
            returnUrl: _shared_constants_application_urls__WEBPACK_IMPORTED_MODULE_1__.ApplicationUrls.GlobalToolSuite.UserManagement.path,
            title: 'User Settings',
            links: links
        };
    },
    GetRoleManagement: (tools) => {
        return {
            showReturn: true,
            returnUrl: _shared_constants_application_urls__WEBPACK_IMPORTED_MODULE_1__.ApplicationUrls.GlobalToolSuite.RoleManagement.path,
            title: _shared_constants_application_urls__WEBPACK_IMPORTED_MODULE_1__.ApplicationUrls.GlobalToolSuite.RoleManagement.text,
            links: tools.map(t => {
                return {
                    text: (0,_shared_utilities_shared__WEBPACK_IMPORTED_MODULE_0__.formatAdminToolName)(t),
                    path: src_app_shared_utilities_url_utils__WEBPACK_IMPORTED_MODULE_2__.UrlUtils.replaceParams(_shared_constants_application_urls__WEBPACK_IMPORTED_MODULE_1__.ApplicationUrls.GlobalToolSuite.RoleManagement.RoleToolManagement.path, t.id)
                };
            })
        };
    },
    GetToolManagement: (tool) => {
        if (tool == null || (tool === null || tool === void 0 ? void 0 : tool.isExternal))
            return GlobalToolSuiteMenu();
        var links = [];
        if (tool === null || tool === void 0 ? void 0 : tool.isManagedByStateAndCarrier) {
            links.push(src_app_shared_utilities_url_utils__WEBPACK_IMPORTED_MODULE_2__.UrlUtils.getLinkFromObject(_shared_constants_application_urls__WEBPACK_IMPORTED_MODULE_1__.ApplicationUrls.GlobalToolSuite.ToolsManagement.StateAndCarrier));
        }
        links.push(src_app_shared_utilities_url_utils__WEBPACK_IMPORTED_MODULE_2__.UrlUtils.getLinkFromObject(_shared_constants_application_urls__WEBPACK_IMPORTED_MODULE_1__.ApplicationUrls.GlobalToolSuite.ToolsManagement.GeneralInformation));
        links.push(src_app_shared_utilities_url_utils__WEBPACK_IMPORTED_MODULE_2__.UrlUtils.getLinkFromObject(_shared_constants_application_urls__WEBPACK_IMPORTED_MODULE_1__.ApplicationUrls.GlobalToolSuite.ToolsManagement.Permission));
        return {
            showReturn: true,
            returnUrl: _shared_constants_application_urls__WEBPACK_IMPORTED_MODULE_1__.ApplicationUrls.GlobalToolSuite.ToolsManagement.path,
            title: tool === null || tool === void 0 ? void 0 : tool.name,
            links: links
        };
    },
    GetCarrier411Admin: () => {
        return {
            returnUrl: _shared_constants_application_urls__WEBPACK_IMPORTED_MODULE_1__.ApplicationUrls.Carrier411Admin.path,
            title: _shared_constants_application_urls__WEBPACK_IMPORTED_MODULE_1__.ApplicationUrls.Carrier411Admin.text,
            links: src_app_shared_utilities_url_utils__WEBPACK_IMPORTED_MODULE_2__.UrlUtils.getLinksFromObject(_shared_constants_application_urls__WEBPACK_IMPORTED_MODULE_1__.ApplicationUrls.Carrier411Admin)
        };
    }
};
const NavElements = navElements;


/***/ }),

/***/ 43485:
/*!***************************************************!*\
  !*** ./src/app/core/constants/nav-menus.enums.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavMenus": () => (/* binding */ NavMenus)
/* harmony export */ });
var NavMenus;
(function (NavMenus) {
    NavMenus[NavMenus["None"] = 0] = "None";
    NavMenus[NavMenus["GlobalToolSuite"] = 1] = "GlobalToolSuite";
    NavMenus[NavMenus["UserManagement"] = 2] = "UserManagement";
    NavMenus[NavMenus["RoleManagement"] = 3] = "RoleManagement";
    NavMenus[NavMenus["ToolManagement"] = 4] = "ToolManagement";
    NavMenus[NavMenus["Carrier411Admin"] = 5] = "Carrier411Admin";
})(NavMenus || (NavMenus = {}));
;


/***/ }),

/***/ 85601:
/*!**************************************************!*\
  !*** ./src/app/core/constants/role.constants.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Roles": () => (/* binding */ Roles)
/* harmony export */ });
const Roles = {
    GlobalToolSuite: 'Global Tool Suite',
    ArchiveManager: 'Archive Manager',
    SuperAdmin: 'Super Admin',
    Carrier411: {
        Editor: 'Carrier411.{0}.Editor',
        Reviewer: 'Carrier411.{0}.Reviewer',
        Publisher: 'Carrier411.{0}.Publisher',
        ChangeReport: 'Carrier411.Change Report',
        AnalyticsReport: 'Carrier411.Analytics Report'
    },
    TeamSheets: {
        TeamSheetsAdmin: 'TeamsSheets.Team Sheets Admin'
    },
    LargeGroupRFP: {
        Admin: 'LargeGroupRFP.{0}.Admin',
        Assignee: 'LargeGroupRFP.{0}.Assignee',
        RFQReport: 'LargeGroupRFP.RFQ Report'
    },
    DocumentToolkit: {
        Editor: 'DocumentToolkit.{0}.Editor',
        Reviewer: 'DocumentToolkit.{0}.Reviewer',
        Publisher: 'DocumentToolkit.{0}.Publisher',
        ExpiringEKitsReport: 'DocumentToolkit.Expiring E-Kits Report'
    }
};


/***/ }),

/***/ 40294:
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreModule": () => (/* binding */ CoreModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _authentication_authentication_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../authentication/authentication.module */ 41082);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared.module */ 44466);
/* harmony import */ var _components_app_container_app_container_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/app-container/app-container.component */ 87129);
/* harmony import */ var _components_app_container_unauthenticated_app_container_unauthenticated_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/app-container-unauthenticated/app-container-unauthenticated.component */ 69773);
/* harmony import */ var _components_app_header_app_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/app-header/app-header.component */ 8961);
/* harmony import */ var _components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/breadcrumb/breadcrumb.component */ 46721);
/* harmony import */ var _components_main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/main-menu/main-menu.component */ 19803);
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/navbar/navbar.component */ 57009);
/* harmony import */ var _components_region_selector_region_selector_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/region-selector/region-selector.component */ 31030);
/* harmony import */ var _interceptors_current_region_interceptor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./interceptors/current-region.interceptor */ 68650);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _components_user_settings_user_settings_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/user-settings/user-settings.component */ 65366);
/* harmony import */ var _components_main_menu_links_main_menu_links_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/main-menu-links/main-menu-links.component */ 18332);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 3184);











// Region Selector






class CoreModule {
}
CoreModule.ɵfac = function CoreModule_Factory(t) { return new (t || CoreModule)(); };
CoreModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: CoreModule });
CoreModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ providers: [
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HTTP_INTERCEPTORS,
            useClass: _interceptors_current_region_interceptor__WEBPACK_IMPORTED_MODULE_9__.CurrentRegionInterceptor,
            multi: true,
        }
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule,
            _authentication_authentication_module__WEBPACK_IMPORTED_MODULE_0__.AuthenticationModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](CoreModule, { declarations: [_components_app_container_app_container_component__WEBPACK_IMPORTED_MODULE_2__.AppContainerComponent,
        _components_app_container_unauthenticated_app_container_unauthenticated_component__WEBPACK_IMPORTED_MODULE_3__.AppContainerUnauthenticatedComponent,
        _components_main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_6__.MainMenuComponent,
        _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__.NavbarComponent,
        _components_app_header_app_header_component__WEBPACK_IMPORTED_MODULE_4__.AppHeaderComponent,
        _components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_5__.BreadcrumbComponent,
        _components_region_selector_region_selector_component__WEBPACK_IMPORTED_MODULE_8__.RegionSelectorComponent,
        _components_user_settings_user_settings_component__WEBPACK_IMPORTED_MODULE_10__.UserSettingsComponent,
        _components_main_menu_links_main_menu_links_component__WEBPACK_IMPORTED_MODULE_11__.MainMenuLinksComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule,
        _authentication_authentication_module__WEBPACK_IMPORTED_MODULE_0__.AuthenticationModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule], exports: [_components_app_container_app_container_component__WEBPACK_IMPORTED_MODULE_2__.AppContainerComponent,
        _components_app_container_unauthenticated_app_container_unauthenticated_component__WEBPACK_IMPORTED_MODULE_3__.AppContainerUnauthenticatedComponent,
        _components_main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_6__.MainMenuComponent,
        _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__.NavbarComponent] }); })();


/***/ }),

/***/ 799:
/*!*******************************************************!*\
  !*** ./src/app/core/directives/has-role.directive.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HasRoleDirective": () => (/* binding */ HasRoleDirective)
/* harmony export */ });
/* harmony import */ var src_app_shared_utilities_string_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/utilities/string-utils */ 34686);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _authentication_services_account_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../authentication/services/account.service */ 94398);
/* harmony import */ var _services_region_selector_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/region-selector.service */ 69442);




class HasRoleDirective {
    constructor(viewContainerRef, templateRef, accountService, regionSelectorService) {
        this.viewContainerRef = viewContainerRef;
        this.templateRef = templateRef;
        this.accountService = accountService;
        this.regionSelectorService = regionSelectorService;
        this.user = this.accountService.getCurrentUser();
    }
    ngOnInit() {
        var _a, _b;
        //clear view if no roles
        if (!((_a = this.user) === null || _a === void 0 ? void 0 : _a.roles) || this.user == null) {
            this.viewContainerRef.clear();
            return;
        }
        this.appHasRole = this.handleRegionOnRoles(this.appHasRole);
        if ((_b = this.user) === null || _b === void 0 ? void 0 : _b.roles.some(r => this.appHasRole.includes(r))) {
            this.viewContainerRef.createEmbeddedView(this.templateRef);
        }
        else {
            this.viewContainerRef.clear();
        }
    }
    handleRegionOnRoles(roles) {
        const currentRegion = this.regionSelectorService.getCurrentAbbreviation();
        return roles.map((role) => {
            return src_app_shared_utilities_string_utils__WEBPACK_IMPORTED_MODULE_0__.StringUtils.format(role, '.', currentRegion);
        });
    }
}
HasRoleDirective.ɵfac = function HasRoleDirective_Factory(t) { return new (t || HasRoleDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.TemplateRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_authentication_services_account_service__WEBPACK_IMPORTED_MODULE_1__.AccountService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_region_selector_service__WEBPACK_IMPORTED_MODULE_2__.RegionSelectorService)); };
HasRoleDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: HasRoleDirective, selectors: [["", "appHasRole", ""]], inputs: { appHasRole: "appHasRole" } });


/***/ }),

/***/ 68650:
/*!*****************************************************************!*\
  !*** ./src/app/core/interceptors/current-region.interceptor.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CurrentRegionInterceptor": () => (/* binding */ CurrentRegionInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_region_selector_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/region-selector.service */ 69442);


class CurrentRegionInterceptor {
    constructor(regionSelectorService) {
        this.regionSelectorService = regionSelectorService;
    }
    intercept(request, next) {
        const currentRegion = this.regionSelectorService.getCurrentRegion();
        if (currentRegion != null) {
            request = request.clone({
                setHeaders: {
                    RegionId: `${currentRegion.id}`
                }
            });
        }
        return next.handle(request);
    }
}
CurrentRegionInterceptor.ɵfac = function CurrentRegionInterceptor_Factory(t) { return new (t || CurrentRegionInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_region_selector_service__WEBPACK_IMPORTED_MODULE_0__.RegionSelectorService)); };
CurrentRegionInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CurrentRegionInterceptor, factory: CurrentRegionInterceptor.ɵfac });


/***/ }),

/***/ 40954:
/*!*******************************************************!*\
  !*** ./src/app/core/logger/constants/logger.enums.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RetentionPeriod": () => (/* binding */ RetentionPeriod)
/* harmony export */ });
var RetentionPeriod;
(function (RetentionPeriod) {
    RetentionPeriod[RetentionPeriod["Indefinitely"] = 0] = "Indefinitely";
    RetentionPeriod[RetentionPeriod["OneDay"] = 1] = "OneDay";
    RetentionPeriod[RetentionPeriod["ThreeDays"] = 3] = "ThreeDays";
    RetentionPeriod[RetentionPeriod["FiveDays"] = 5] = "FiveDays";
    RetentionPeriod[RetentionPeriod["OneWeek"] = 7] = "OneWeek";
    RetentionPeriod[RetentionPeriod["TwoWeeks"] = 14] = "TwoWeeks";
    RetentionPeriod[RetentionPeriod["OneMonth"] = 30] = "OneMonth";
    RetentionPeriod[RetentionPeriod["TwoMonths"] = 60] = "TwoMonths";
    RetentionPeriod[RetentionPeriod["ThreeMonths"] = 90] = "ThreeMonths";
    RetentionPeriod[RetentionPeriod["FourMonths"] = 120] = "FourMonths";
    RetentionPeriod[RetentionPeriod["FiveMonths"] = 150] = "FiveMonths";
    RetentionPeriod[RetentionPeriod["SixMonths"] = 180] = "SixMonths";
    RetentionPeriod[RetentionPeriod["OneYear"] = 365] = "OneYear";
    RetentionPeriod[RetentionPeriod["OneYearAndOneMonth"] = 400] = "OneYearAndOneMonth";
    RetentionPeriod[RetentionPeriod["OneYearAndSixMonths"] = 545] = "OneYearAndSixMonths";
    RetentionPeriod[RetentionPeriod["TwoYears"] = 731] = "TwoYears";
    RetentionPeriod[RetentionPeriod["FiveYears"] = 1827] = "FiveYears";
    RetentionPeriod[RetentionPeriod["TenYears"] = 3653] = "TenYears";
})(RetentionPeriod || (RetentionPeriod = {}));


/***/ }),

/***/ 2616:
/*!********************************************************!*\
  !*** ./src/app/core/logger/services/logger.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Logger)
/* harmony export */ });
/* harmony import */ var D_source_thinklogic_Tools_WarnerPacific_Tools_Web_Angular_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 83918);
/* harmony import */ var _aws_sdk_client_cloudwatch_logs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @aws-sdk/client-cloudwatch-logs */ 36642);
/* harmony import */ var _aws_sdk_client_cloudwatch_logs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @aws-sdk/client-cloudwatch-logs */ 93052);
/* harmony import */ var _aws_sdk_client_cloudwatch_logs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @aws-sdk/client-cloudwatch-logs */ 36493);
/* harmony import */ var _aws_sdk_client_cloudwatch_logs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @aws-sdk/client-cloudwatch-logs */ 78547);
/* harmony import */ var _aws_sdk_client_cloudwatch_logs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @aws-sdk/client-cloudwatch-logs */ 13728);
/* harmony import */ var _aws_sdk_client_cloudwatch_logs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @aws-sdk/client-cloudwatch-logs */ 14038);
/* harmony import */ var _aws_sdk_client_cloudwatch_logs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @aws-sdk/client-cloudwatch-logs */ 38042);
/* harmony import */ var _constants_logger_enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/logger.enums */ 40954);



class Logger {
  /**
   * Constructor.
   *
   * @param accessKeyId     - AWS Access Key Id
   * @param secretAccessKey - AWS Secret Access Key
   * @param region          - AWS Region (e.g. ap-northeast-1)
   * @param logGroupName    - AWS CloudWatch Log Group Name
   */
  constructor(accessKeyId, secretAccessKey, region, logGroupName) {
    this.accessKeyId = accessKeyId;
    this.secretAccessKey = secretAccessKey;
    this.region = region;
    this.logGroupName = logGroupName;
    this.levels = ['error'];
    this.interval = 10000;
    this.muting = false;
    this.enabled = true;
    this.events = [];
  }
  /**
   * Set level.
   *
   * @param levels - Reported error level
   */


  setLevels(levels) {
    this.levels = levels;
    return this;
  }
  /**
   * Set interval.
   *
   * @param interval - Interval milliseconds for sending logs
   */


  setInterval(interval) {
    this.interval = interval;
    return this;
  }
  /**
   * Mute logging in browser console.
   */


  mute() {
    this.muting = true;
    return this;
  }
  /**
   * Resume logging in browser console.
   */


  unmute() {
    this.muting = false;
    return this;
  }
  /**
   * Enable collecting errors and sending to AWS CloudWatch.
   */


  enable() {
    this.enabled = true;
    return this;
  }
  /**
   * Disable collecting errors and sending to AWS CloudWatch.
   */


  disable() {
    this.enabled = false;
    return this;
  }
  /**
   * Bootstrap Logger.
   *
   * @param logStreamNameResolver - Resolve logStreamName for current user (e.g. Canvas Fingerprint)
   * @param messageFormatter      - Format message string from Error
   * @param Ctor
   * @param storage
   * @param globalConsole
   * @param eventTarget
   */


  install({
    logStreamNameResolver,
    messageFormatter,
    retentionPeriod = _constants_logger_enums__WEBPACK_IMPORTED_MODULE_1__.RetentionPeriod.OneDay,
    ClientConstructor: Ctor = _aws_sdk_client_cloudwatch_logs__WEBPACK_IMPORTED_MODULE_2__.CloudWatchLogsClient,
    storage = localStorage,
    console: globalConsole = console,
    eventTarget = window
  } = {}) {
    var _this = this;

    this.client = new Ctor({
      credentials: {
        accessKeyId: this.accessKeyId,
        secretAccessKey: this.secretAccessKey
      },
      region: this.region
    });
    this.logStreamNameResolver = logStreamNameResolver;
    this.messageFormatter = messageFormatter !== null && messageFormatter !== void 0 ? messageFormatter : function (e, info = {
      type: 'unknown'
    }) {
      if (!e.message) {
        return null;
      }

      return JSON.stringify(Object.assign({
        message: e.message,
        timestamp: new Date().toISOString(),
        userAgent: window.navigator.userAgent,
        stack: e.stack
      }, info));
    };
    this.storage = storage; // Swap window.console.*() functions and overridden ones

    const originalConsole = {};

    for (const level of this.levels) {
      originalConsole[level] = globalConsole[level].bind(globalConsole);

      globalConsole[level] = /*#__PURE__*/function () {
        var _ref = (0,D_source_thinklogic_Tools_WarnerPacific_Tools_Web_Angular_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (message, ...args) {
          // Listen overridden console.*() function calls (type="console", level="*")
          yield _this.onError(new Error(message), {
            type: 'console',
            level
          });

          if (!_this.muting) {
            originalConsole[level](message, ...args);
          }
        });

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }();
    }

    this.console = originalConsole; // Listen "error" event on window (type="uncaught")

    eventTarget.addEventListener('error', /*#__PURE__*/function () {
      var _ref2 = (0,D_source_thinklogic_Tools_WarnerPacific_Tools_Web_Angular_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (error) {
        yield _this.onError(error, {
          type: 'uncaught'
        });
      });

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }());
    this.handleLogGroup(this.client, this.logGroupName, retentionPeriod); // Start timer that executes this.onInterval()

    this.intervalId = setInterval(this.onInterval.bind(this), this.interval);
  }

  handleLogGroup(client, logGroupName, retentionPeriod) {
    var currentLogGroup = new _aws_sdk_client_cloudwatch_logs__WEBPACK_IMPORTED_MODULE_3__.DescribeLogGroupsCommand({
      logGroupNamePrefix: logGroupName
    });
    client.send(currentLogGroup).then(response => {
      if (response == null || response.logGroups == null || response.logGroups.length == 0) {
        const createLogGroupCommand = new _aws_sdk_client_cloudwatch_logs__WEBPACK_IMPORTED_MODULE_4__.CreateLogGroupCommand({
          logGroupName: logGroupName
        });
        this.getClient().send(createLogGroupCommand).then(() => {
          const retentionPolicyCommand = new _aws_sdk_client_cloudwatch_logs__WEBPACK_IMPORTED_MODULE_5__.PutRetentionPolicyCommand({
            logGroupName: logGroupName,
            retentionInDays: retentionPeriod
          });
          client.send(retentionPolicyCommand);
        });
      }
    });
  }

  /**
   * Queue a new error.
   *
   * @param e    - Error object
   * @param info - Extra Error Info (Consider using "type" field)
   */
  onError(e, info) {
    var _this2 = this;

    return (0,D_source_thinklogic_Tools_WarnerPacific_Tools_Web_Angular_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!Logger.isValidError(e) || !_this2.enabled) {
        return;
      }

      const message = _this2.messageFormatter ? yield _this2.messageFormatter(e, info) // Custom formatter
      : JSON.stringify(Object.assign({
        message: e.message
      }, info)); // Simple JSON formatter
      // Abort when received null

      if (!message) {
        return;
      }

      _this2.events.push({
        timestamp: new Date().getTime(),
        message
      });
    })();
  }
  /**
   * Send queued errors.
   */


  onInterval() {
    var _this3 = this;

    return (0,D_source_thinklogic_Tools_WarnerPacific_Tools_Web_Angular_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this3.enabled) {
        return;
      } // Extract errors from queue


      const pendingEvents = _this3.events.splice(0);

      if (!pendingEvents.length) {
        return;
      } // Retrieve or newly calculate logStreamName for current user


      const logStreamName = yield _this3.getLogStreamName();

      if (!logStreamName) {
        return;
      } // Retrieve previous "nextSequenceToken" from cache


      const sequenceToken = yield _this3.getCache('sequenceToken'); // Build parameters for PutLogEvents endpoint
      //   c.f. https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutLogEvents.html

      const command = new _aws_sdk_client_cloudwatch_logs__WEBPACK_IMPORTED_MODULE_6__.PutLogEventsCommand(Object.assign({
        logEvents: pendingEvents,
        logGroupName: _this3.logGroupName,
        logStreamName: logStreamName
      }, sequenceToken ? {
        sequenceToken
      } : undefined));
      let nextSequenceToken = undefined;
      let needsRetry = false;

      try {
        // Run request to send events and retrieve fresh "nextSequenceToken"
        ({
          nextSequenceToken = undefined
        } = yield _this3.getClient().send(command));
      } catch (e) {
        // Try to recover from InvalidSequenceTokenException error message
        if (!Logger.isValidError(e) || e.name !== 'DataAlreadyAcceptedException' && e.name !== 'InvalidSequenceTokenException' || !e.expectedSequenceToken) {
          // Print error to original console and reset states
          _this3.getConsole().error(e);

          yield _this3.refresh();
          return;
        } // Recover from InvalidSequenceTokenException error message


        nextSequenceToken = e.expectedSequenceToken;
        needsRetry = e.name !== 'DataAlreadyAcceptedException';
      } // Cache fresh "nextSequenceToken"


      if (nextSequenceToken) {
        yield _this3.setCache('sequenceToken', nextSequenceToken);
      } // Immediately retry after recovery


      if (needsRetry) {
        _this3.events.push(...pendingEvents);

        setTimeout(_this3.onInterval, 0);
      }
    })();
  }

  getClient() {
    if (!this.client) {
      throw new Error('Not yet installed');
    }

    return this.client;
  }

  getStorage() {
    if (!this.storage) {
      throw new Error('Not yet installed');
    }

    return this.storage;
  }

  getConsole() {
    if (!this.console) {
      throw new Error('Not yet installed');
    }

    return this.console;
  }

  setCache(key, value) {
    var _this4 = this;

    return (0,D_source_thinklogic_Tools_WarnerPacific_Tools_Web_Angular_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this4.getStorage().setItem(`${Logger.namespace}:${key}`, value);
    })();
  }

  getCache(key) {
    var _this5 = this;

    return (0,D_source_thinklogic_Tools_WarnerPacific_Tools_Web_Angular_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this5.getStorage().getItem(`${Logger.namespace}:${key}`);
    })();
  }

  deleteCache(key) {
    var _this6 = this;

    return (0,D_source_thinklogic_Tools_WarnerPacific_Tools_Web_Angular_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this6.getStorage().removeItem(`${Logger.namespace}:${key}`);
    })();
  }

  refresh() {
    var _this7 = this;

    return (0,D_source_thinklogic_Tools_WarnerPacific_Tools_Web_Angular_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this7.deleteCache('logStreamName');
      yield _this7.deleteCache('sequenceToken');

      _this7.events.splice(0);
    })();
  }

  getLogStreamName() {
    var _this8 = this;

    return (0,D_source_thinklogic_Tools_WarnerPacific_Tools_Web_Angular_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Retrieve "logStreamName" for current user
      const retrieved = yield _this8.getCache('logStreamName');

      if (retrieved) {
        return retrieved;
      } // Build parameters for CreateLogStream endpoint
      //   c.f. https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_CreateLogStream.html


      const logStreamName = _this8.logStreamNameResolver && (yield _this8.logStreamNameResolver()) || // Resolve for current user (e.g. Canvas Fingerprint)
      Logger.defaultLogStreamName; // "development"

      const getLogStreamCommand = new _aws_sdk_client_cloudwatch_logs__WEBPACK_IMPORTED_MODULE_7__.DescribeLogStreamsCommand({
        logGroupName: _this8.logGroupName,
        logStreamNamePrefix: logStreamName,
        descending: true
      });

      try {
        yield _this8.getClient().send(getLogStreamCommand).then( /*#__PURE__*/function () {
          var _ref3 = (0,D_source_thinklogic_Tools_WarnerPacific_Tools_Web_Angular_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (logStreamResult) {
            if (logStreamResult != null && logStreamResult.logStreams != null && logStreamResult.logStreams.length > 0) {
              yield _this8.setCache('sequenceToken', logStreamResult.logStreams[0].uploadSequenceToken);
            } else {
              const createLogStreamCommand = new _aws_sdk_client_cloudwatch_logs__WEBPACK_IMPORTED_MODULE_8__.CreateLogStreamCommand({
                logGroupName: _this8.logGroupName,
                logStreamName
              }); // Run request to create a new logStream

              yield _this8.getClient().send(createLogStreamCommand);
            }
          });

          return function (_x3) {
            return _ref3.apply(this, arguments);
          };
        }());
      } catch (e) {
        // Try to recover from ResourceAlreadyExistsException error
        if (!Logger.isValidError(e) || e.name !== 'ResourceAlreadyExistsException') {
          // Print error to original console and reset states
          // this.getConsole().error(e); Don't need to print, cause we're gonna to reuse the same stream (not a problem).
          yield _this8.refresh();
          return null;
        }
      } // Cache fresh "logStreamName"


      yield _this8.setCache('logStreamName', logStreamName);
      return logStreamName;
    })();
  }

  static isValidError(value) {
    return Boolean(value && typeof value.message === 'string');
  }

}
Logger.namespace = 'CloudWatchFrontLogger';
Logger.defaultLogStreamName = 'development';

/***/ }),

/***/ 49735:
/*!******************************************************!*\
  !*** ./src/app/core/services/app.startup.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppStartupService": () => (/* binding */ AppStartupService),
/* harmony export */   "appStartupServiceFactory": () => (/* binding */ appStartupServiceFactory)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 92340);
/* harmony import */ var _shared_constants_application_urls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/constants/application-urls */ 85561);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _authentication_services_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../authentication/services/account.service */ 94398);
/* harmony import */ var _authentication_services_gait_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../authentication/services/gait.service */ 87526);
/* harmony import */ var _result_handler_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./result.handler.service */ 32464);






function appStartupServiceFactory(startupService) {
    return () => startupService.load();
}
class AppStartupService {
    constructor(accountService, gaitService, resultHandler) {
        this.accountService = accountService;
        this.gaitService = gaitService;
        this.resultHandler = resultHandler;
    }
    load() {
        return new Promise((resolve, reject) => {
            if (this.isOnAccountPage()) {
                return resolve(null);
            }
            const hasValidAuthSession = this.accountService.isValidAuthPersisted();
            if (hasValidAuthSession) {
                return resolve(null);
            }
            else {
                let gaitContextId = this.getGaitContextIdFromUrl();
                if (!gaitContextId) {
                    this.goToLogin();
                }
                else {
                    this.processGaitContext(gaitContextId);
                }
            }
        });
    }
    isOnAccountPage() {
        return window.location.pathname == "/"
            || window.location.pathname == _shared_constants_application_urls__WEBPACK_IMPORTED_MODULE_1__.ApplicationUrls.Account.ForgotPassword.path
            || window.location.pathname == _shared_constants_application_urls__WEBPACK_IMPORTED_MODULE_1__.ApplicationUrls.Account.ResetPassword.path;
    }
    goToLogin() {
        if (this.isOnAccountPage()) {
            return;
        }
        this.redirectToMarketingLoginPage();
    }
    logOut() {
        this.accountService.logout();
    }
    getGaitContextIdFromUrl() {
        return this.getParameterByName('context');
    }
    processGaitContext(contextId) {
        if (contextId == '') {
            this.logOut();
        }
        else {
            //try to authenticate in gait
            this.gaitService.authenticateGaitUser(contextId).subscribe((data) => {
                this.resultHandler.handle(data).then((success) => {
                    if (success) {
                        let gaitUser = data.value;
                        this.accountService.saveUser(gaitUser);
                        this.redirectToReturnUrlOrDashboard();
                    }
                });
            }, (err) => {
                this.resultHandler.handle(err.error);
            });
        }
        //if successfully authenticated, store a cookie and redirect to return url
        //else redirect to the marketing site
        // not logged in, redirect to login page with the return url and return false
        //this.router.navigate(['/'], { queryParams: { returnUrl: state.url } });
    }
    redirectToMarketingLoginPage() {
        let loginUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.marketing.baseUrl + '/login';
        if (window.location.pathname != loginUrl)
            loginUrl += '?returnUrl=' + window.location.href;
        window.location.href = loginUrl;
    }
    redirectToReturnUrlOrDashboard() {
        var returnUrl = this.getParameterByName('returnUrl');
        if (returnUrl)
            window.location.href = returnUrl;
        else
            window.location.href = _shared_constants_application_urls__WEBPACK_IMPORTED_MODULE_1__.ApplicationUrls.Dashboard.path;
    }
    getParameterByName(name, url = window.location.href) {
        name = name.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'), results = regex.exec(url);
        if (!results)
            return null;
        if (!results[2])
            return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }
}
AppStartupService.ɵfac = function AppStartupService_Factory(t) { return new (t || AppStartupService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_authentication_services_account_service__WEBPACK_IMPORTED_MODULE_2__.AccountService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_authentication_services_gait_service__WEBPACK_IMPORTED_MODULE_3__.GaitService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_result_handler_service__WEBPACK_IMPORTED_MODULE_4__.ResultHandlerService)); };
AppStartupService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: AppStartupService, factory: AppStartupService.ɵfac });


/***/ }),

/***/ 18399:
/*!****************************************************!*\
  !*** ./src/app/core/services/main-menu.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainMenuService": () => (/* binding */ MainMenuService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


class MainMenuService {
    constructor() {
        this._collapsedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
        this.collapsed$ = this._collapsedSubject.asObservable();
    }
    setCollapsed(collapsed) {
        this._collapsedSubject.next(collapsed);
    }
    toggleCollapsed() {
        this._collapsedSubject.next(!this._collapsedSubject.getValue());
    }
}
MainMenuService.ɵfac = function MainMenuService_Factory(t) { return new (t || MainMenuService)(); };
MainMenuService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: MainMenuService, factory: MainMenuService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 30651:
/*!**********************************************!*\
  !*** ./src/app/core/services/nav.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavService": () => (/* binding */ NavService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var _shared_constants_application_urls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/constants/application-urls */ 85561);
/* harmony import */ var _constants_nav_elements_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/nav-elements.constants */ 99136);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




class NavService {
    constructor() {
        // Observable navbar source
        this.navbarSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(undefined);
        // Observable navbar stream
        this.navbar$ = this.navbarSource.asObservable();
    }
    // service command
    changeNav(navbar) {
        this.navbarSource.next(navbar);
    }
    // dynamic menu for the Role Management where it lists tools
    setRoleManagementMenu(sharedService) {
        const hasArrayInHistoryState = history.state == null ||
            typeof history.state !== 'object' ||
            history.state.data == undefined ||
            history.state.data == null ||
            !(history.state.data instanceof Array);
        if (hasArrayInHistoryState) {
            const currentNavbar = this.navbarSource.getValue();
            const differentNavBar = currentNavbar == undefined || currentNavbar.title != _shared_constants_application_urls__WEBPACK_IMPORTED_MODULE_0__.ApplicationUrls.GlobalToolSuite.RoleManagement.text;
            if (differentNavBar) {
                sharedService.getTools(true, false, undefined, true).subscribe(t => {
                    if (t.isSuccess) {
                        const tools = t.value.sort((a, b) => a.id > b.id ? 1 : -1);
                        const navbar = _constants_nav_elements_constants__WEBPACK_IMPORTED_MODULE_1__.NavElements.GetRoleManagement(tools);
                        this.changeNav(navbar);
                    }
                });
            }
        }
        else {
            const navbar = _constants_nav_elements_constants__WEBPACK_IMPORTED_MODULE_1__.NavElements.GetRoleManagement(history.state.data);
            this.changeNav(navbar);
        }
    }
    // dynamic menu based on the User Type
    setUserManagementNavMenu(userTypeName) {
        const menu = _constants_nav_elements_constants__WEBPACK_IMPORTED_MODULE_1__.NavElements.GetUserManagement(userTypeName);
        this.changeNav(menu);
    }
    // dynamic menu based on the Tool
    setToolNavMenu(tool) {
        const menu = _constants_nav_elements_constants__WEBPACK_IMPORTED_MODULE_1__.NavElements.GetToolManagement(tool);
        this.changeNav(menu);
    }
}
NavService.ɵfac = function NavService_Factory(t) { return new (t || NavService)(); };
NavService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: NavService, factory: NavService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 69442:
/*!**********************************************************!*\
  !*** ./src/app/core/services/region-selector.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegionSelectorService": () => (/* binding */ RegionSelectorService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


const REGION_KEY = 'CurrentRegion';
class RegionSelectorService {
    constructor() {
        // Observable region source
        this.regionSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
        // Observable region stream
        this.region$ = this.regionSource.asObservable();
    }
    // service command
    changeRegion(region) {
        if (region != null) {
            this.regionSource.next(region);
            window.sessionStorage.setItem(REGION_KEY, JSON.stringify(region));
        }
    }
    getCurrentAbbreviation() {
        var _a;
        return (_a = this.getCurrentRegion()) === null || _a === void 0 ? void 0 : _a.abbreviation;
    }
    getCurrentRegion() {
        var _a;
        return (_a = this.regionSource.getValue()) !== null && _a !== void 0 ? _a : JSON.parse(window.sessionStorage.getItem(REGION_KEY));
    }
}
RegionSelectorService.ɵfac = function RegionSelectorService_Factory(t) { return new (t || RegionSelectorService)(); };
RegionSelectorService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: RegionSelectorService, factory: RegionSelectorService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 32464:
/*!*********************************************************!*\
  !*** ./src/app/core/services/result.handler.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResultHandlerService": () => (/* binding */ ResultHandlerService)
/* harmony export */ });
/* harmony import */ var D_source_thinklogic_Tools_WarnerPacific_Tools_Web_Angular_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 83918);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _shared_services_confirm_dialog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/confirm-dialog.service */ 15303);
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/toast.service */ 31443);




class ResultHandlerService {
  constructor(confirmDialogService, toastService) {
    this.confirmDialogService = confirmDialogService;
    this.toastService = toastService;

    this.handleSuccessMessage = result => this.toastService.show({
      content: result.successMessage,
      icon: 'success'
    });

    this.handleErrors = result => {
      this.toastService.show({
        content: 'An internal error has occurred. Please contact the adminstrator.',
        icon: 'error'
      });
    };

    this.handleValidationErrors = errors => this.toastService.show({
      content: errors.map(e => e.errorMessage).join('\n'),
      icon: 'error'
    });

    this.handleValidationInfos = infos => this.toastService.show({
      content: infos.map(e => e.errorMessage).join('\n'),
      icon: 'info'
    });
  }

  handle(result) {
    var _this = this;

    return (0,D_source_thinklogic_Tools_WarnerPacific_Tools_Web_Angular_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (result.isSuccess && result.successMessage != null && result.successMessage != '') {
        _this.handleSuccessMessage(result);
      } else if (result.validationErrors != null && result.validationErrors.length > 0) {
        return yield _this.handleValidations(result);
      } else if (result.errors != null && result.errors.length > 0) {
        _this.handleErrors(result);

        return false;
      }

      return true;
    })();
  }

  handleValidations(result) {
    var _this2 = this;

    return (0,D_source_thinklogic_Tools_WarnerPacific_Tools_Web_Angular_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const errors = result.validationErrors.filter(v => v.severity.toString() == 'Error');

      if (errors.length > 0) {
        _this2.handleValidationErrors(errors);

        return false;
      }

      const infos = result.validationErrors.filter(v => v.severity.toString() == 'Info');

      if (infos.length > 0) {
        _this2.handleValidationInfos(infos);

        return true;
      }

      const warnings = result.validationErrors.filter(v => v.severity.toString() == 'Warning');

      if (warnings.length > 0) {
        return yield _this2.handleValidationWarnings(warnings);
      }

      return true;
    })();
  }

  handleValidationWarnings(warnings) {
    var _this3 = this;

    return (0,D_source_thinklogic_Tools_WarnerPacific_Tools_Web_Angular_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return yield _this3.confirmDialogService.show({
        content: warnings.map(e => e.errorMessage).join('<br />'),
        requireAcknowledge: warnings.filter(w => w.identifier == 'DeactivateAndArchive').length > 0
      });
    })();
  }

}

ResultHandlerService.ɵfac = function ResultHandlerService_Factory(t) {
  return new (t || ResultHandlerService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_shared_services_confirm_dialog_service__WEBPACK_IMPORTED_MODULE_1__.ConfirmDialogService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_2__.ToastService));
};

ResultHandlerService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: ResultHandlerService,
  factory: ResultHandlerService.ɵfac
});

/***/ }),

/***/ 6074:
/*!************************************************!*\
  !*** ./src/app/core/services/theme.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThemeService": () => (/* binding */ ThemeService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);



class ThemeService {
    constructor() {
        this._themeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject([null, 'warner-dark']);
        this.theme$ = this._themeSubject.asObservable();
        this._isDarkSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(true);
        this.isDark$ = this._isDarkSubject.asObservable();
        this.activeTheme$ = this.theme$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(theme => theme[1]));
    }
    setTheme(theme) {
        this._themeSubject.next([this._themeSubject.getValue()[1], theme]);
        this._isDarkSubject.next(theme == 'warner-dark');
    }
}
ThemeService.ɵfac = function ThemeService_Factory(t) { return new (t || ThemeService)(); };
ThemeService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ThemeService, factory: ThemeService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 95760:
/*!************************************************************!*\
  !*** ./src/app/core/services/user-settings.api.service.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserSettingsApiService": () => (/* binding */ UserSettingsApiService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _core_api_base_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/api/base.api.service */ 14089);
/* harmony import */ var _constants_core_api_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/core-api.constants */ 9812);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);





class UserSettingsApiService extends _core_api_base_api_service__WEBPACK_IMPORTED_MODULE_0__.BaseAPIService {
    constructor(baseApiUrl_Web, http) {
        super(baseApiUrl_Web, http);
    }
    getUserSettings(userId, accountId) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams()
            .set('accountId', accountId !== null && accountId !== void 0 ? accountId : '');
        return this.http.get(this.constructRequestUrl(_constants_core_api_constants__WEBPACK_IMPORTED_MODULE_1__.CoreApiEndpoints.GetUserSettings(userId)), { params });
    }
    toggleUserFavorite(userId, accountId, toolId, favoriteType) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams()
            .set('accountId', accountId !== null && accountId !== void 0 ? accountId : '');
        const body = {
            toolId: toolId,
            favoriteType: favoriteType
        };
        return this.http.put(this.constructRequestUrl(_constants_core_api_constants__WEBPACK_IMPORTED_MODULE_1__.CoreApiEndpoints.ToggleUserFavorite(userId)), body, { params });
    }
    toggleUserResourceCenterFavorite(userId, toolId) {
        const body = {
            toolId: toolId
        };
        return this.http.put(this.constructRequestUrl(_constants_core_api_constants__WEBPACK_IMPORTED_MODULE_1__.CoreApiEndpoints.ToggleUserResourceCenterFavorite(userId)), body);
    }
    updateUserFavoriteOrder(userId, accountId, favorite) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams()
            .set('accountId', accountId !== null && accountId !== void 0 ? accountId : '');
        return this.http.put(this.constructRequestUrl(_constants_core_api_constants__WEBPACK_IMPORTED_MODULE_1__.CoreApiEndpoints.UpdateUserFavoriteOrder(userId)), favorite, { params });
    }
    updateUserResourceCenterOrder(userId, accountId, tool) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams()
            .set('accountId', accountId !== null && accountId !== void 0 ? accountId : '');
        return this.http.put(this.constructRequestUrl(_constants_core_api_constants__WEBPACK_IMPORTED_MODULE_1__.CoreApiEndpoints.UpdateUserResourceCenterOrder(userId)), tool, { params });
    }
    updateUserMenuThemeSettings(userId, accountId, isDarkModeEnabled) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams()
            .set('accountId', accountId !== null && accountId !== void 0 ? accountId : '');
        const body = {
            isDarkModeEnabled: isDarkModeEnabled
        };
        return this.http.put(this.constructRequestUrl(_constants_core_api_constants__WEBPACK_IMPORTED_MODULE_1__.CoreApiEndpoints.UpdateUserMenuThemeSettings(userId)), body, { params });
    }
    updateUserRegionSettings(userId, accountId, regionId) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams()
            .set('accountId', accountId !== null && accountId !== void 0 ? accountId : '');
        const body = {
            regionId: regionId
        };
        return this.http.put(this.constructRequestUrl(_constants_core_api_constants__WEBPACK_IMPORTED_MODULE_1__.CoreApiEndpoints.UpdateUserRegionSettings(userId)), body, { params });
    }
}
UserSettingsApiService.ɵfac = function UserSettingsApiService_Factory(t) { return new (t || UserSettingsApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"]("BASE_API_URL_WEB"), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
UserSettingsApiService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: UserSettingsApiService, factory: UserSettingsApiService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 87338:
/*!********************************************************!*\
  !*** ./src/app/core/services/user-settings.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserSettingsService": () => (/* binding */ UserSettingsService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 32673);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 81203);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 26067);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 78947);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _user_settings_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-settings.api.service */ 95760);
/* harmony import */ var src_app_authentication_services_account_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/authentication/services/account.service */ 94398);




class UserSettingsService {
    constructor(userSettingsApiService, accountService) {
        this.userSettingsApiService = userSettingsApiService;
        this.accountService = accountService;
        this.CACHE_TIMEOUT = 2000;
        this._userSettingsData = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(undefined);
        this.loadUserSettings();
    }
    toggleUserFavorite(userId, accountId, toolId, favoriteType) {
        return this.userSettingsApiService.toggleUserFavorite(userId, accountId, toolId, favoriteType);
    }
    toggleUserResourceCenterFavorite(userId, toolId) {
        return this.userSettingsApiService.toggleUserResourceCenterFavorite(userId, toolId);
    }
    updateUserFavoriteOrder(userId, accountId, favorite) {
        return this.userSettingsApiService.updateUserFavoriteOrder(userId, accountId, favorite);
    }
    updateUserResourceCenterOrder(userId, accountId, tool) {
        return this.userSettingsApiService.updateUserResourceCenterOrder(userId, accountId, tool);
    }
    updateUserMenuThemeSettings(userId, accountId, isDarkModeEnabled) {
        return this.userSettingsApiService.updateUserMenuThemeSettings(userId, accountId, isDarkModeEnabled);
    }
    updateUserRegionSettings(userId, accountId, regionId) {
        return this.userSettingsApiService.updateUserRegionSettings(userId, accountId, regionId);
    }
    loadUserInformation() {
        this.loadUserSettings();
        return this.userSettings$;
    }
    loadUserSettings() {
        const user = this.accountService.getCurrentUser();
        if (user != null) {
            const userId = Number(user.id);
            const accountId = user.accountId;
            this.userSettings$ = this._userSettingsData.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.switchMap)(() => {
                return this.userSettingsApiService.getUserSettings(userId, accountId)
                    .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)((settings) => {
                    if (settings.isSuccess) {
                        return settings.value;
                    }
                    else {
                        return null;
                    }
                }));
            }), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.share)({
                connector: () => new rxjs__WEBPACK_IMPORTED_MODULE_6__.ReplaySubject(1),
                resetOnComplete: () => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.timer)(this.CACHE_TIMEOUT)
            }));
        }
    }
    ;
}
UserSettingsService.ɵfac = function UserSettingsService_Factory(t) { return new (t || UserSettingsService)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_user_settings_api_service__WEBPACK_IMPORTED_MODULE_0__.UserSettingsApiService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](src_app_authentication_services_account_service__WEBPACK_IMPORTED_MODULE_1__.AccountService)); };
UserSettingsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({ token: UserSettingsService, factory: UserSettingsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2810:
/*!******************************************!*\
  !*** ./src/app/core/utils/role.utils.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoleUtils": () => (/* binding */ RoleUtils)
/* harmony export */ });
/* harmony import */ var src_app_shared_constants_tools_list_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/constants/tools-list.enum */ 99485);
/* harmony import */ var src_app_shared_utilities_string_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/utilities/string-utils */ 34686);
/* harmony import */ var _constants_role_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/role.constants */ 85601);



class RoleUtils {
    static getToolRoles(tool, currentRegion) {
        switch (tool) {
            case src_app_shared_constants_tools_list_enum__WEBPACK_IMPORTED_MODULE_0__.ToolsList.GlobalToolSuite:
                return [
                    _constants_role_constants__WEBPACK_IMPORTED_MODULE_2__.Roles.GlobalToolSuite,
                    _constants_role_constants__WEBPACK_IMPORTED_MODULE_2__.Roles.SuperAdmin
                ];
            case src_app_shared_constants_tools_list_enum__WEBPACK_IMPORTED_MODULE_0__.ToolsList.Carrier411:
                return [
                    src_app_shared_utilities_string_utils__WEBPACK_IMPORTED_MODULE_1__.StringUtils.format(_constants_role_constants__WEBPACK_IMPORTED_MODULE_2__.Roles.Carrier411.Editor, this.separator, currentRegion),
                    src_app_shared_utilities_string_utils__WEBPACK_IMPORTED_MODULE_1__.StringUtils.format(_constants_role_constants__WEBPACK_IMPORTED_MODULE_2__.Roles.Carrier411.Reviewer, this.separator, currentRegion),
                    src_app_shared_utilities_string_utils__WEBPACK_IMPORTED_MODULE_1__.StringUtils.format(_constants_role_constants__WEBPACK_IMPORTED_MODULE_2__.Roles.Carrier411.Publisher, this.separator, currentRegion)
                ];
            case src_app_shared_constants_tools_list_enum__WEBPACK_IMPORTED_MODULE_0__.ToolsList.TeamSheets:
                return [
                    _constants_role_constants__WEBPACK_IMPORTED_MODULE_2__.Roles.TeamSheets.TeamSheetsAdmin
                ];
            case src_app_shared_constants_tools_list_enum__WEBPACK_IMPORTED_MODULE_0__.ToolsList.LargeGroupRFP:
                return [
                    src_app_shared_utilities_string_utils__WEBPACK_IMPORTED_MODULE_1__.StringUtils.format(_constants_role_constants__WEBPACK_IMPORTED_MODULE_2__.Roles.LargeGroupRFP.Admin, this.separator, currentRegion),
                    src_app_shared_utilities_string_utils__WEBPACK_IMPORTED_MODULE_1__.StringUtils.format(_constants_role_constants__WEBPACK_IMPORTED_MODULE_2__.Roles.LargeGroupRFP.Assignee, this.separator, currentRegion)
                ];
            case src_app_shared_constants_tools_list_enum__WEBPACK_IMPORTED_MODULE_0__.ToolsList.DocumentToolkit:
                return [
                    src_app_shared_utilities_string_utils__WEBPACK_IMPORTED_MODULE_1__.StringUtils.format(_constants_role_constants__WEBPACK_IMPORTED_MODULE_2__.Roles.DocumentToolkit.Editor, this.separator, currentRegion),
                    src_app_shared_utilities_string_utils__WEBPACK_IMPORTED_MODULE_1__.StringUtils.format(_constants_role_constants__WEBPACK_IMPORTED_MODULE_2__.Roles.DocumentToolkit.Reviewer, this.separator, currentRegion),
                    src_app_shared_utilities_string_utils__WEBPACK_IMPORTED_MODULE_1__.StringUtils.format(_constants_role_constants__WEBPACK_IMPORTED_MODULE_2__.Roles.DocumentToolkit.Publisher, this.separator, currentRegion)
                ];
            default:
                return [];
        }
    }
}
RoleUtils.separator = ".";


/***/ }),

/***/ 41057:
/*!*************************************************************!*\
  !*** ./src/app/dashboard/components/dashboard.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardComponent": () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/page-title/page-title.component */ 46896);


class DashboardComponent {
    constructor() { }
    ngOnInit() {
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(); };
DashboardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 3, vars: 0, consts: [[1, "container-fluid"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "page-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } }, directives: [_shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_0__.PageTitleComponent], styles: ["img[_ngcontent-%COMP%] {\n  max-width: 1152px;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtBQUNGIiwiZmlsZSI6ImRhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XHJcbiAgbWF4LXdpZHRoOiAxMTUycHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 70121:
/*!**********************************************************************************************!*\
  !*** ./src/app/resource-center/components/resource-center-list/resource-center.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResourceCenterComponent": () => (/* binding */ ResourceCenterComponent)
/* harmony export */ });
/* harmony import */ var _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/pro-solid-svg-icons */ 61250);
/* harmony import */ var _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/pro-regular-svg-icons */ 26966);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_authentication_services_account_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/authentication/services/account.service */ 94398);
/* harmony import */ var src_app_core_services_result_handler_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/result.handler.service */ 32464);
/* harmony import */ var src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/shared.service */ 97282);
/* harmony import */ var src_app_core_services_user_settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/user-settings.service */ 87338);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @syncfusion/ej2-angular-dropdowns */ 24779);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 19397);
/* harmony import */ var _syncfusion_ej2_angular_navigations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @syncfusion/ej2-angular-navigations */ 36477);
/* harmony import */ var _resource_link_list_resource_link_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../resource-link-list/resource-link-list.component */ 50449);













const _c0 = ["listObjLeft"];
const _c1 = ["listObjRight"];
function ResourceCenterComponent_ejs_listbox_7_ng_template_2_fa_icon_3_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "fa-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ResourceCenterComponent_ejs_listbox_7_ng_template_2_fa_icon_3_Template_fa_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11); const tool_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r9.toggleFavorite(tool_r5.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", ctx_r6.farStar);
} }
function ResourceCenterComponent_ejs_listbox_7_ng_template_2_fa_icon_4_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "fa-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ResourceCenterComponent_ejs_listbox_7_ng_template_2_fa_icon_4_Template_fa_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r14); const tool_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r12.toggleFavorite(tool_r5.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", ctx_r7.fasStar);
} }
function ResourceCenterComponent_ejs_listbox_7_ng_template_2_app_resource_link_list_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-resource-link-list", 19);
} if (rf & 2) {
    const tool_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("resourceLinks", tool_r5.resourceLinks);
} }
const _c2 = function (a0) { return [a0]; };
function ResourceCenterComponent_ejs_listbox_7_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 8)(1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, ResourceCenterComponent_ejs_listbox_7_ng_template_2_fa_icon_3_Template, 1, 1, "fa-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, ResourceCenterComponent_ejs_listbox_7_ng_template_2_fa_icon_4_Template, 1, 1, "fa-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "ejs-accordion", 14)(8, "div")(9, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Resources");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, ResourceCenterComponent_ejs_listbox_7_ng_template_2_app_resource_link_list_11_Template, 1, 1, "app-resource-link-list", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const tool_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("src", tool_r5.fullSizeLogoFilePath != null ? tool_r5.fullSizeLogoFilePath : tool_r5.primaryLogoFilePath, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", tool_r5.fullSizeLogoFilePath != null ? "fullcolor-logo" : "icon-logo");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !tool_r5.isFavoritedByDefault);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", tool_r5.isFavoritedByDefault);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", tool_r5.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("expandedIndices", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](7, _c2, tool_r5.isFavoritedByDefault ? 0 : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", tool_r5.resourceLinks.length > 0);
} }
const _c3 = function () { return { text: "name", value: "id" }; };
function ResourceCenterComponent_ejs_listbox_7_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ejs-listbox", 5, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("drop", function ResourceCenterComponent_ejs_listbox_7_Template_ejs_listbox_drop_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r16.setNewOrder($event); })("beforeDrop", function ResourceCenterComponent_ejs_listbox_7_Template_ejs_listbox_beforeDrop_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r17); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r18.checkOrder($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, ResourceCenterComponent_ejs_listbox_7_ng_template_2_Template, 12, 9, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("dataSource", ctx_r0.toolsLeft)("allowDragAndDrop", true)("fields", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](3, _c3));
} }
function ResourceCenterComponent_ejs_listbox_9_ng_template_2_fa_icon_3_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "fa-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ResourceCenterComponent_ejs_listbox_9_ng_template_2_fa_icon_3_Template_fa_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r28); const tool_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r26.toggleFavorite(tool_r22.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", ctx_r23.farStar);
} }
function ResourceCenterComponent_ejs_listbox_9_ng_template_2_fa_icon_4_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "fa-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ResourceCenterComponent_ejs_listbox_9_ng_template_2_fa_icon_4_Template_fa_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r31); const tool_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit; const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r29.toggleFavorite(tool_r22.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", ctx_r24.fasStar);
} }
function ResourceCenterComponent_ejs_listbox_9_ng_template_2_app_resource_link_list_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-resource-link-list", 19);
} if (rf & 2) {
    const tool_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("resourceLinks", tool_r22.resourceLinks);
} }
function ResourceCenterComponent_ejs_listbox_9_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 8)(1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, ResourceCenterComponent_ejs_listbox_9_ng_template_2_fa_icon_3_Template, 1, 1, "fa-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, ResourceCenterComponent_ejs_listbox_9_ng_template_2_fa_icon_4_Template, 1, 1, "fa-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "ejs-accordion", 14)(8, "div")(9, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Resources");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, ResourceCenterComponent_ejs_listbox_9_ng_template_2_app_resource_link_list_11_Template, 1, 1, "app-resource-link-list", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const tool_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("src", tool_r22.fullSizeLogoFilePath != null ? tool_r22.fullSizeLogoFilePath : tool_r22.primaryLogoFilePath, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", tool_r22.fullSizeLogoFilePath != null ? "fullcolor-logo" : "icon-logo");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !tool_r22.isFavoritedByDefault);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", tool_r22.isFavoritedByDefault);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", tool_r22.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("expandedIndices", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](7, _c2, tool_r22.isFavoritedByDefault ? 0 : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", tool_r22.resourceLinks.length > 0);
} }
function ResourceCenterComponent_ejs_listbox_9_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ejs-listbox", 5, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("drop", function ResourceCenterComponent_ejs_listbox_9_Template_ejs_listbox_drop_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r34); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r33.setNewOrder($event); })("beforeDrop", function ResourceCenterComponent_ejs_listbox_9_Template_ejs_listbox_beforeDrop_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r34); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r35.checkOrder($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, ResourceCenterComponent_ejs_listbox_9_ng_template_2_Template, 12, 9, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("dataSource", ctx_r1.toolsRight)("allowDragAndDrop", true)("fields", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](3, _c3));
} }
class ResourceCenterComponent {
    constructor(route, accountService, resultHandler, sharedService, cd, userSettingsService) {
        this.accountService = accountService;
        this.resultHandler = resultHandler;
        this.sharedService = sharedService;
        this.cd = cd;
        this.userSettingsService = userSettingsService;
        this.userSettings = null;
        this.fasStar = _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faStar;
        this.farStar = _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faStar;
        this.user = null;
        this.resourceCenter = route.snapshot.data["resourceCenter"].value;
        this.user = this.accountService.getCurrentUser();
        this.loadUserSettings();
    }
    handleTools(tools) {
        var _a, _b, _c;
        if (tools.isSuccess) {
            if (((_a = this.userSettings) === null || _a === void 0 ? void 0 : _a.resourceCenterSettings) != null && ((_b = this.userSettings) === null || _b === void 0 ? void 0 : _b.resourceCenterSettings.length)) {
                (_c = this.userSettings) === null || _c === void 0 ? void 0 : _c.resourceCenterSettings.forEach(x => {
                    let index = tools.value.findIndex(obj => obj.id == x.toolId);
                    if (index != -1) {
                        tools.value[index].order = x.order;
                        tools.value[index].isFavoritedByDefault = x.isFavorited;
                    }
                });
            }
            this.tools = tools.value.sort((a, b) => a.order > b.order ? 1 : -1);
            this.toolsLeft = this.tools.filter(obj => obj.order % 2 != 0);
            this.toolsRight = this.tools.filter(obj => obj.order % 2 == 0);
        }
        else {
            this.resultHandler.handle(tools);
        }
    }
    ngOnInit() {
        var _a;
        this.user = this.accountService.getCurrentUser();
        this.descriptionPage = (_a = this.resourceCenter) === null || _a === void 0 ? void 0 : _a.description;
    }
    /* RTE problem: Expression has changed after it was checked
    * http://www.syncfusion.com/forums/132152/rte-problem-expression-has-changed-after-it-was-checked?reply=ls7keM */
    ngAfterViewChecked() {
        this.cd.detectChanges();
    }
    loadTools() {
        var _a;
        if (((_a = this.user) === null || _a === void 0 ? void 0 : _a.id) != null) {
            this.sharedService.getTools(undefined, undefined, false, true).subscribe((data) => {
                this.handleTools(data);
            }, (err) => this.resultHandler.handle(err.error));
        }
    }
    toggleFavorite(toolId) {
        var _a;
        this.userSettingsService.toggleUserResourceCenterFavorite(Number((_a = this.user) === null || _a === void 0 ? void 0 : _a.id), toolId).subscribe((data) => {
            if (data != null) {
                this.loadUserSettings();
            }
        });
    }
    loadUserSettings() {
        var _a;
        (_a = this.userSettingsService.loadUserInformation()) === null || _a === void 0 ? void 0 : _a.subscribe((data) => {
            if (data != null) {
                this.userSettings = data;
                this.loadTools();
            }
        });
    }
    setNewOrder($event) {
        const tool = $event.items[0];
        const newOrder = this.getNewOrder($event);
        let model = { toolId: tool.id, order: newOrder, isFavorited: undefined };
        this.userSettingsService.updateUserResourceCenterOrder(Number(this.user.id), this.user.accountId, model).subscribe((data) => {
            this.resultHandler.handle(data).then((success) => {
                if (success) {
                    this.loadUserSettings();
                }
            });
        }, (err) => this.resultHandler.handle(err.error));
    }
    checkOrder($event) {
        const newOrder = this.getNewOrder($event);
        if (newOrder > this.tools.length) {
            $event.cancel = true;
            return;
        }
    }
    getNewOrder($event) {
        let listLeft = this.listLeft.getDataList();
        const tool = $event.items[0];
        let newOrder = ($event.currentIndex + 1) * 2;
        if (listLeft.filter(x => x.id == tool.id).length) {
            newOrder -= 1;
        }
        return newOrder;
    }
}
ResourceCenterComponent.ɵfac = function ResourceCenterComponent_Factory(t) { return new (t || ResourceCenterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_authentication_services_account_service__WEBPACK_IMPORTED_MODULE_0__.AccountService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_result_handler_service__WEBPACK_IMPORTED_MODULE_1__.ResultHandlerService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_2__.SharedService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_user_settings_service__WEBPACK_IMPORTED_MODULE_3__.UserSettingsService)); };
ResourceCenterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: ResourceCenterComponent, selectors: [["app-resource-center"]], viewQuery: function ResourceCenterComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c1, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.listLeft = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.listRight = _t.first);
    } }, decls: 10, vars: 3, consts: [[1, "container-fluid", "resource-center"], [1, "drag-drop-wrapper"], [1, "listbox-control1"], ["scope", "combined-list", 3, "dataSource", "allowDragAndDrop", "fields", "drop", "beforeDrop", 4, "ngIf"], [1, "listbox-control2"], ["scope", "combined-list", 3, "dataSource", "allowDragAndDrop", "fields", "drop", "beforeDrop"], ["listObjLeft", ""], ["itemTemplate", ""], [1, "e-card"], [1, "e-card-header", "flex-box-centered"], [3, "src", "ngClass"], ["class", "start unfavorited", 3, "icon", "click", 4, "ngIf"], ["class", "start favorited", 3, "icon", "click", 4, "ngIf"], [1, "e-card-content"], [1, "resource-link-content", 3, "expandedIndices"], [1, "fw-bold", "default-text"], [3, "resourceLinks", 4, "ngIf"], [1, "start", "unfavorited", 3, "icon", "click"], [1, "start", "favorited", 3, "icon", "click"], [3, "resourceLinks"], ["listObjRight", ""]], template: function ResourceCenterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Resource Center");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 1)(6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, ResourceCenterComponent_ejs_listbox_7_Template, 4, 4, "ejs-listbox", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, ResourceCenterComponent_ejs_listbox_9_Template, 4, 4, "ejs-listbox", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.descriptionPage);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.tools != null && ctx.tools.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.tools != null && ctx.tools.length);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_10__.ListBoxComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__.FaIconComponent, _syncfusion_ej2_angular_navigations__WEBPACK_IMPORTED_MODULE_12__.AccordionComponent, _resource_link_list_resource_link_list_component__WEBPACK_IMPORTED_MODULE_4__.ResourceLinkListComponent], styles: [".resource-center[_ngcontent-%COMP%]   .e-card[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  padding: 10px;\n}\n.resource-center[_ngcontent-%COMP%]   .e-card[_ngcontent-%COMP%]   .e-accordion[_ngcontent-%COMP%] {\n  padding: 0;\n  border: 0;\n  margin-top: 20px;\n}\n.resource-center[_ngcontent-%COMP%]   .e-card[_ngcontent-%COMP%]   .e-accordion[_ngcontent-%COMP%]   .e-acrdn-header[_ngcontent-%COMP%] {\n  height: 45px;\n  margin-bottom: 0;\n}\n.resource-center[_ngcontent-%COMP%]   .e-card[_ngcontent-%COMP%]   .e-accordion[_ngcontent-%COMP%]   .e-acrdn-header[_ngcontent-%COMP%]   .e-acrdn-header-content[_ngcontent-%COMP%] {\n  color: var(--black);\n}\n.resource-center[_ngcontent-%COMP%]   .e-card[_ngcontent-%COMP%]   .e-accordion[_ngcontent-%COMP%]   .e-acrdn-header[_ngcontent-%COMP%]   .e-toggle-icon[_ngcontent-%COMP%] {\n  height: 45px;\n  color: var(--black);\n}\n.resource-center[_ngcontent-%COMP%]   .e-card[_ngcontent-%COMP%]   .e-accordion[_ngcontent-%COMP%]   .e-acrdn-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.resource-center[_ngcontent-%COMP%]   .e-card[_ngcontent-%COMP%]   .e-accordion[_ngcontent-%COMP%]   .e-acrdn-panel[_ngcontent-%COMP%]   .e-acrdn-content[_ngcontent-%COMP%] {\n  padding-top: 0;\n}\n.resource-center[_ngcontent-%COMP%]   .fullcolor-logo[_ngcontent-%COMP%] {\n  height: 40px;\n}\n.resource-center[_ngcontent-%COMP%]   .icon-logo[_ngcontent-%COMP%] {\n  height: 40px;\n  filter: var(--warnerblue-filter);\n}\n.resource-center[_ngcontent-%COMP%]   .start[_ngcontent-%COMP%] {\n  align-self: start;\n}\n.resource-center[_ngcontent-%COMP%]   .unfavorited[_ngcontent-%COMP%] {\n  color: var(--graymedium);\n  font-size: 20px;\n}\n.resource-center[_ngcontent-%COMP%]   .favorited[_ngcontent-%COMP%] {\n  color: var(--sunflower);\n  font-size: 20px;\n}\n.resource-center[_ngcontent-%COMP%]   .resource-link-header[_ngcontent-%COMP%] {\n  display: block;\n}\n.resource-center[_ngcontent-%COMP%]   .resource-link-content[_ngcontent-%COMP%], .resource-center[_ngcontent-%COMP%]   .e-accordion[_ngcontent-%COMP%]   .e-active[_ngcontent-%COMP%] {\n  background-color: var(--white-smoke);\n  border-radius: 10px;\n}\n.resource-center[_ngcontent-%COMP%]   .e-listbox-wrapper[_ngcontent-%COMP%] {\n  border: none;\n}\n.resource-center[_ngcontent-%COMP%]   .e-listbox-wrapper[_ngcontent-%COMP%]   .e-list-item.e-selected[_ngcontent-%COMP%] {\n  background: none;\n}\n.resource-center[_ngcontent-%COMP%]   .e-listbox-wrapper[_ngcontent-%COMP%]   .e-list-item[_ngcontent-%COMP%]:hover {\n  background: none;\n}\n.resource-center[_ngcontent-%COMP%]   #container[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n.resource-center[_ngcontent-%COMP%]   #loader[_ngcontent-%COMP%] {\n  color: #008cff;\n  height: 40px;\n  width: 30%;\n  position: absolute;\n  top: 45%;\n  left: 45%;\n}\n.resource-center[_ngcontent-%COMP%]   .listbox-control1[_ngcontent-%COMP%], .resource-center[_ngcontent-%COMP%]   .listbox-control2[_ngcontent-%COMP%] {\n  width: 48%;\n}\n.resource-center[_ngcontent-%COMP%]   .listbox-control1[_ngcontent-%COMP%] {\n  float: left;\n}\n.resource-center[_ngcontent-%COMP%]   .listbox-control2[_ngcontent-%COMP%] {\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlLWNlbnRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtBQUFKO0FBRUk7RUFDRSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FBQU47QUFFTTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtBQUFSO0FBRVE7RUFDSSxtQkFBQTtBQUFaO0FBR1E7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7QUFEVjtBQUlRO0VBQ0UsZ0JBQUE7QUFGVjtBQU9RO0VBQ0UsY0FBQTtBQUxWO0FBV0U7RUFDRSxZQUFBO0FBVEo7QUFZRTtFQUNFLFlBQUE7RUFDQSxnQ0FBQTtBQVZKO0FBYUU7RUFDRSxpQkFBQTtBQVhKO0FBY0U7RUFDRSx3QkFBQTtFQUNBLGVBQUE7QUFaSjtBQWVFO0VBQ0UsdUJBQUE7RUFDQSxlQUFBO0FBYko7QUFnQkU7RUFDRSxjQUFBO0FBZEo7QUFpQkU7O0VBRUUsb0NBQUE7RUFDQSxtQkFBQTtBQWZKO0FBa0JFO0VBQ0UsWUFBQTtBQWhCSjtBQWtCSTtFQUNFLGdCQUFBO0FBaEJOO0FBbUJJO0VBQ0UsZ0JBQUE7QUFqQk47QUFxQkU7RUFDRSxrQkFBQTtBQW5CSjtBQXNCRTtFQUNFLGNBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUFwQko7QUF1QkU7O0VBRUUsVUFBQTtBQXJCSjtBQXdCRTtFQUNFLFdBQUE7QUF0Qko7QUF5QkU7RUFDRSxZQUFBO0FBdkJKIiwiZmlsZSI6InJlc291cmNlLWNlbnRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZXNvdXJjZS1jZW50ZXIge1xyXG4gIC5lLWNhcmQge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcblxyXG4gICAgLmUtYWNjb3JkaW9uIHtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG5cclxuICAgICAgLmUtYWNyZG4taGVhZGVyIHtcclxuICAgICAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuXHJcbiAgICAgICAgLmUtYWNyZG4taGVhZGVyLWNvbnRlbnQge1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tYmxhY2spXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZS10b2dnbGUtaWNvbiB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICAgICAgICBjb2xvcjogdmFyKC0tYmxhY2spO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmUtYWNyZG4tcGFuZWwge1xyXG4gICAgICAgIC5lLWFjcmRuLWNvbnRlbnQge1xyXG4gICAgICAgICAgcGFkZGluZy10b3A6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuZnVsbGNvbG9yLWxvZ28ge1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gIH1cclxuXHJcbiAgLmljb24tbG9nbyB7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBmaWx0ZXI6IHZhcigtLXdhcm5lcmJsdWUtZmlsdGVyKTtcclxuICB9XHJcblxyXG4gIC5zdGFydCB7XHJcbiAgICBhbGlnbi1zZWxmOiBzdGFydDtcclxuICB9XHJcblxyXG4gIC51bmZhdm9yaXRlZCB7XHJcbiAgICBjb2xvcjogdmFyKC0tZ3JheW1lZGl1bSk7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgfVxyXG5cclxuICAuZmF2b3JpdGVkIHtcclxuICAgIGNvbG9yOiB2YXIoLS1zdW5mbG93ZXIpO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgLnJlc291cmNlLWxpbmstaGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuXHJcbiAgLnJlc291cmNlLWxpbmstY29udGVudCxcclxuICAuZS1hY2NvcmRpb24gLmUtYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlLXNtb2tlKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgfVxyXG5cclxuICAuZS1saXN0Ym94LXdyYXBwZXIge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG5cclxuICAgIC5lLWxpc3QtaXRlbS5lLXNlbGVjdGVkIHtcclxuICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAuZS1saXN0LWl0ZW06aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgI2NvbnRhaW5lciB7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgfVxyXG5cclxuICAjbG9hZGVyIHtcclxuICAgIGNvbG9yOiAjMDA4Y2ZmO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNDUlO1xyXG4gICAgbGVmdDogNDUlO1xyXG4gIH1cclxuXHJcbiAgLmxpc3Rib3gtY29udHJvbDEsXHJcbiAgLmxpc3Rib3gtY29udHJvbDIge1xyXG4gICAgd2lkdGg6IDQ4JTtcclxuICB9XHJcblxyXG4gIC5saXN0Ym94LWNvbnRyb2wxIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gIH1cclxuXHJcbiAgLmxpc3Rib3gtY29udHJvbDIge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 50449:
/*!***********************************************************************************************!*\
  !*** ./src/app/resource-center/components/resource-link-list/resource-link-list.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResourceLinkListComponent": () => (/* binding */ ResourceLinkListComponent)
/* harmony export */ });
/* harmony import */ var _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/pro-regular-svg-icons */ 26966);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 19397);




function ResourceLinkListComponent_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "fa-icon", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 2)(4, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const link_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r0.getIcon(link_r1.type.toString()));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", link_r1.type.toString() === "Link" ? link_r1.url : link_r1.filePath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", link_r1.title, " ");
} }
class ResourceLinkListComponent {
    constructor() {
        this.faCirclePlay = _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faCirclePlay;
        this.faFilePdf = _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faFilePdf;
        this.faLink = _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faLink;
    }
    ngOnInit() {
    }
    getIcon(type) {
        return type === "Link" ? this.faLink :
            type === "Video" ? this.faCirclePlay :
                this.faFilePdf;
    }
}
ResourceLinkListComponent.ɵfac = function ResourceLinkListComponent_Factory(t) { return new (t || ResourceLinkListComponent)(); };
ResourceLinkListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResourceLinkListComponent, selectors: [["app-resource-link-list"]], inputs: { resourceLinks: "resourceLinks" }, decls: 2, vars: 1, consts: [[4, "ngFor", "ngForOf"], [1, "fa-lg", "icon", 3, "icon"], [1, "table-content"], ["target", "_blank", 3, "href"]], template: function ResourceLinkListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ResourceLinkListComponent_tr_1_Template, 6, 3, "tr", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.resourceLinks);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FaIconComponent], styles: ["table[_ngcontent-%COMP%] {\n  border-top: solid 1px;\n  border-color: var(--graymedium);\n}\ntable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: solid 0.5px;\n  border-color: var(--border-color);\n}\ntable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child {\n  border-bottom: 0;\n}\ntable[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  color: var(--aqua);\n  padding-left: 5px;\n}\ntable[_ngcontent-%COMP%]   .table-content[_ngcontent-%COMP%] {\n  padding: 10px;\n  width: 100%;\n}\ntable[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: var(--midnight);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlLWxpbmstbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0VBQ0EsK0JBQUE7QUFDRjtBQUNFO0VBQ0UsMEJBQUE7RUFDQSxpQ0FBQTtBQUNKO0FBQ0k7RUFDRSxnQkFBQTtBQUNOO0FBR0U7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0FBREo7QUFJRTtFQUNFLGFBQUE7RUFDQSxXQUFBO0FBRko7QUFLRTtFQUNFLHFCQUFBO0VBQ0Esc0JBQUE7QUFISiIsImZpbGUiOiJyZXNvdXJjZS1saW5rLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgYm9yZGVyLXRvcDogc29saWQgMXB4O1xyXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZ3JheW1lZGl1bSk7XHJcblxyXG4gIHRyIHtcclxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDAuNXB4O1xyXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1ib3JkZXItY29sb3IpO1xyXG5cclxuICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuaWNvbiB7XHJcbiAgICBjb2xvcjogdmFyKC0tYXF1YSk7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICB9XHJcblxyXG4gIC50YWJsZS1jb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIGEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6IHZhcigtLW1pZG5pZ2h0KTtcclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 75267:
/*!***********************************************************************!*\
  !*** ./src/app/resource-center/resolvers/resource-center.resolver.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResourceCenterListResolver": () => (/* binding */ ResourceCenterListResolver)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _shared_services_shared_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/services/shared.api.service */ 54558);


class ResourceCenterListResolver {
    constructor(resourceCenterService) {
        this.resourceCenterService = resourceCenterService;
    }
    resolve(route, state) {
        return this.resourceCenterService.getResourceCenter();
    }
}
ResourceCenterListResolver.ɵfac = function ResourceCenterListResolver_Factory(t) { return new (t || ResourceCenterListResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_shared_services_shared_api_service__WEBPACK_IMPORTED_MODULE_0__.SharedApiService)); };
ResourceCenterListResolver.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ResourceCenterListResolver, factory: ResourceCenterListResolver.ɵfac });


/***/ }),

/***/ 46055:
/*!****************************************************************************************************!*\
  !*** ./src/app/shared/components/announcement-message-edit/announcement-message-edit.component.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnnouncementMessageEditComponent": () => (/* binding */ AnnouncementMessageEditComponent)
/* harmony export */ });
/* harmony import */ var _utilities_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/shared */ 14364);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_admin_tools_management_services_tool_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/admin/tools-management/services/tool.service */ 92412);
/* harmony import */ var src_app_core_services_result_handler_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/result.handler.service */ 32464);
/* harmony import */ var _syncfusion_ej2_angular_richtexteditor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @syncfusion/ej2-angular-richtexteditor */ 27338);
/* harmony import */ var _syncfusion_ej2_angular_buttons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @syncfusion/ej2-angular-buttons */ 78218);






class AnnouncementMessageEditComponent {
    constructor(toolService, resultHandlerService) {
        this.toolService = toolService;
        this.resultHandlerService = resultHandlerService;
        this.description = "";
        this.toolId = 0;
        this.announcementMessage = "";
        this.newMessage = "";
        this.inlineMode = (0,_utilities_shared__WEBPACK_IMPORTED_MODULE_0__.getDefaultRichTextInlineMode)();
        this.toolbarSettings = (0,_utilities_shared__WEBPACK_IMPORTED_MODULE_0__.getDefaultRichTextSettings)();
        this.format = (0,_utilities_shared__WEBPACK_IMPORTED_MODULE_0__.getDefaultRichTextFormat)();
    }
    ngOnInit() {
    }
    ngOnChanges() {
        this.newMessage = this.announcementMessage;
    }
    onUndo() {
        this.newMessage = this.announcementMessage;
    }
    onSave() {
        this.toolService.updateAnnouncementMessage(this.toolId, this.newMessage).subscribe((data) => {
            this.resultHandlerService.handle(data).then((success) => {
                if (success)
                    this.announcementMessage = data.value;
            });
        });
    }
}
AnnouncementMessageEditComponent.ɵfac = function AnnouncementMessageEditComponent_Factory(t) { return new (t || AnnouncementMessageEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_admin_tools_management_services_tool_service__WEBPACK_IMPORTED_MODULE_1__.ToolService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_services_result_handler_service__WEBPACK_IMPORTED_MODULE_2__.ResultHandlerService)); };
AnnouncementMessageEditComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AnnouncementMessageEditComponent, selectors: [["announcement-message-edit"]], inputs: { description: "description", toolId: "toolId", announcementMessage: "announcementMessage" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]], decls: 13, vars: 5, consts: [[1, "container-fluid"], [1, "e-card", "mt-4", "p-1", "pb-4"], [1, "e-card-content"], [1, "fw-bold", "mt-1"], [3, "inlineMode", "toolbarSettings", "format", "value", "valueChange"], [1, "row", "pt-2", "actions-container"], [1, "col-md-3", "offset-md-6"], ["type", "button", "ejs-button", "", 1, "e-flat", 3, "click"], [1, "col-md-3"], ["ejs-button", "", 1, "e-success", 3, "click"]], template: function AnnouncementMessageEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "ejs-richtexteditor", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("valueChange", function AnnouncementMessageEditComponent_Template_ejs_richtexteditor_valueChange_5_listener($event) { return ctx.newMessage = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 5)(7, "div", 6)(8, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AnnouncementMessageEditComponent_Template_button_click_8_listener() { return ctx.onUndo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Undo");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 8)(11, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AnnouncementMessageEditComponent_Template_button_click_11_listener() { return ctx.onSave(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("inlineMode", ctx.inlineMode)("toolbarSettings", ctx.toolbarSettings)("format", ctx.format)("value", ctx.newMessage);
    } }, directives: [_syncfusion_ej2_angular_richtexteditor__WEBPACK_IMPORTED_MODULE_4__.RichTextEditorComponent, _syncfusion_ej2_angular_buttons__WEBPACK_IMPORTED_MODULE_5__.ButtonComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbm5vdW5jZW1lbnQtbWVzc2FnZS1lZGl0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 39040:
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/badge-custom/badge-custom.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BadgeCustomComponent": () => (/* binding */ BadgeCustomComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

const _c0 = ["*"];
class BadgeCustomComponent {
    constructor() { }
    ngOnInit() {
    }
}
BadgeCustomComponent.ɵfac = function BadgeCustomComponent_Factory(t) { return new (t || BadgeCustomComponent)(); };
BadgeCustomComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BadgeCustomComponent, selectors: [["badge-custom"]], ngContentSelectors: _c0, decls: 2, vars: 0, template: function BadgeCustomComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["p[_ngcontent-%COMP%] {\n  background-color: var(--bluelight);\n  color: var(--blue);\n  font-weight: bold;\n  border-radius: 5px;\n  width: auto;\n  padding: 0 0.5rem;\n  text-align: center;\n  line-height: 20px;\n  font-size: 14px;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhZGdlLWN1c3RvbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0FBQ0YiLCJmaWxlIjoiYmFkZ2UtY3VzdG9tLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsicCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZWxpZ2h0KTtcclxuICBjb2xvcjogdmFyKC0tYmx1ZSk7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIHBhZGRpbmc6IDAgMC41cmVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBsaW5lLWhlaWdodDogMjBweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 91317:
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/container-list/container-list.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContainerListComponent": () => (/* binding */ ContainerListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/pro-regular-svg-icons */ 26966);
/* harmony import */ var _restricted_restricted_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../restricted/restricted.component */ 64780);
/* harmony import */ var _page_title_page_title_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../page-title/page-title.component */ 46896);
/* harmony import */ var _syncfusion_ej2_angular_inputs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @syncfusion/ej2-angular-inputs */ 53691);
/* harmony import */ var _core_directives_has_role_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/directives/has-role.directive */ 799);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _syncfusion_ej2_angular_buttons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @syncfusion/ej2-angular-buttons */ 78218);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 19397);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 52816);












const _c0 = ["searchTextbox"];
function ContainerListComponent_div_8_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ContainerListComponent_div_8_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r5.onArchiveChange(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "fa-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Show Archived ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", ctx_r3.archiveIcon);
} }
function ContainerListComponent_div_8_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ContainerListComponent_div_8_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r7.onArchiveChange(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "fa-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Hide Archived ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", ctx_r4.archiveIcon);
} }
function ContainerListComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ContainerListComponent_div_8_button_1_Template, 3, 1, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ContainerListComponent_div_8_button_2_Template, 3, 1, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.handleArchive && !ctx_r1.showArchived);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.handleArchive && ctx_r1.showArchived);
} }
function ContainerListComponent_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ContainerListComponent_button_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r9.onActionClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "fa-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx_r2.actionButtonLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", ctx_r2.actionButtonIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r2.actionButtonText, " ");
} }
const _c1 = function (a0) { return [a0]; };
const _c2 = ["*"];
class ContainerListComponent extends _restricted_restricted_component__WEBPACK_IMPORTED_MODULE_0__.RestrictedComponent {
    constructor() {
        super();
        this.showArchived = false;
        this.archiveIcon = _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faBoxArchive;
        this.actionButtonIcon = _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faPlus;
        this.handleArchive = true;
        this.showActionButton = true;
        this.title = '';
        this.actionButtonText = '';
        this.actionButtonLink = '';
        this.searchPlaceHolder = 'Search by name...';
        this.onSearchTrigger = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.onArchiveChangeTrigger = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.onActionClickTrigger = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    }
    ngOnInit() {
    }
    onCreate(args) {
        this.searchTextbox.addIcon("append", "e-icons e-search");
    }
    onSearch(args) {
        this.onSearchTrigger.emit(args);
    }
    onArchiveChange() {
        this.showArchived = !this.showArchived;
        this.onArchiveChangeTrigger.emit(this.showArchived);
    }
    onActionClick() {
        this.onActionClickTrigger.emit();
    }
}
ContainerListComponent.ɵfac = function ContainerListComponent_Factory(t) { return new (t || ContainerListComponent)(); };
ContainerListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ContainerListComponent, selectors: [["container-list"]], viewQuery: function ContainerListComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.searchTextbox = _t.first);
    } }, inputs: { handleArchive: "handleArchive", showActionButton: "showActionButton", title: "title", actionButtonText: "actionButtonText", actionButtonLink: "actionButtonLink", searchPlaceHolder: "searchPlaceHolder" }, outputs: { onSearchTrigger: "search", onArchiveChangeTrigger: "archiveChange", onActionClickTrigger: "actionClick" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], ngContentSelectors: _c2, decls: 12, vars: 6, consts: [[1, "container-fluid"], [1, "e-card", "p-1"], [1, "e-card-header", "mt-2"], ["showClearButton", "true", "floatLabelType", "Never", "autoComplete", "off", 3, "placeholder", "created", "input"], ["searchTextbox", ""], [1, "general-action-buttons", "d-flex"], ["class", "archive-buttons", 4, "appHasRole"], ["type", "button", "class", "e-success ml-4", "ejs-button", "", 3, "routerLink", "click", 4, "ngIf"], [1, "e-card-content"], [1, "archive-buttons"], ["type", "button", "ejs-button", "", 3, "click", 4, "ngIf"], ["type", "button", "class", "e-dark", "ejs-button", "", 3, "click", 4, "ngIf"], ["type", "button", "ejs-button", "", 3, "click"], [3, "icon"], ["type", "button", "ejs-button", "", 1, "e-dark", 3, "click"], ["type", "button", "ejs-button", "", 1, "e-success", "ml-4", 3, "routerLink", "click"]], template: function ContainerListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "page-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 1)(4, "div", 2)(5, "ejs-textbox", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("created", function ContainerListComponent_Template_ejs_textbox_created_5_listener($event) { return ctx.onCreate($event); })("input", function ContainerListComponent_Template_ejs_textbox_input_5_listener($event) { return ctx.onSearch($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, ContainerListComponent_div_8_Template, 3, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, ContainerListComponent_button_9_Template, 3, 3, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("placeholder", ctx.searchPlaceHolder);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("appHasRole", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](4, _c1, ctx.roles.ArchiveManager));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showActionButton && !ctx.showArchived);
    } }, directives: [_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_1__.PageTitleComponent, _syncfusion_ej2_angular_inputs__WEBPACK_IMPORTED_MODULE_5__.TextBoxComponent, _core_directives_has_role_directive__WEBPACK_IMPORTED_MODULE_2__.HasRoleDirective, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _syncfusion_ej2_angular_buttons__WEBPACK_IMPORTED_MODULE_7__.ButtonComponent, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__.FaIconComponent, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLink], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250YWluZXItbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 72300:
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/default-button/default-button.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DefaultButtonComponent": () => (/* binding */ DefaultButtonComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _syncfusion_ej2_angular_buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-angular-buttons */ 78218);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 19397);



class DefaultButtonComponent {
    constructor() {
        this.text = '';
    }
    ngOnInit() {
    }
}
DefaultButtonComponent.ɵfac = function DefaultButtonComponent_Factory(t) { return new (t || DefaultButtonComponent)(); };
DefaultButtonComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DefaultButtonComponent, selectors: [["default-button"]], inputs: { buttonIcon: "buttonIcon", text: "text" }, decls: 3, vars: 2, consts: [["type", "button", "ejs-button", "", 1, "action-button"], [3, "icon"]], template: function DefaultButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.buttonIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.text, "\n");
    } }, directives: [_syncfusion_ej2_angular_buttons__WEBPACK_IMPORTED_MODULE_1__.ButtonComponent, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FaIconComponent], encapsulation: 2 });


/***/ }),

/***/ 36820:
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/delete-button/delete-button.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeleteButtonComponent": () => (/* binding */ DeleteButtonComponent)
/* harmony export */ });
/* harmony import */ var _default_button_default_button_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../default-button/default-button.component */ 72300);
/* harmony import */ var _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/pro-regular-svg-icons */ 26966);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _syncfusion_ej2_angular_buttons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-angular-buttons */ 78218);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 19397);





class DeleteButtonComponent extends _default_button_default_button_component__WEBPACK_IMPORTED_MODULE_0__.DefaultButtonComponent {
    constructor() {
        super();
        this.buttonIcon = _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faTrashCan;
        if (this.text == '')
            this.text = 'Delete';
    }
    ngOnInit() {
    }
}
DeleteButtonComponent.ɵfac = function DeleteButtonComponent_Factory(t) { return new (t || DeleteButtonComponent)(); };
DeleteButtonComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: DeleteButtonComponent, selectors: [["delete-button"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 3, vars: 2, consts: [["type", "button", "ejs-button", "", 1, "action-button"], [3, "icon"]], template: function DeleteButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "fa-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx.buttonIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.text, "\n");
    } }, directives: [_syncfusion_ej2_angular_buttons__WEBPACK_IMPORTED_MODULE_3__.ButtonComponent, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FaIconComponent], encapsulation: 2 });


/***/ }),

/***/ 81297:
/*!************************************************************************!*\
  !*** ./src/app/shared/components/edit-button/edit-button.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditButtonComponent": () => (/* binding */ EditButtonComponent)
/* harmony export */ });
/* harmony import */ var _default_button_default_button_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../default-button/default-button.component */ 72300);
/* harmony import */ var _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/pro-regular-svg-icons */ 26966);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _syncfusion_ej2_angular_buttons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-angular-buttons */ 78218);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 19397);





class EditButtonComponent extends _default_button_default_button_component__WEBPACK_IMPORTED_MODULE_0__.DefaultButtonComponent {
    constructor() {
        super();
        this.buttonIcon = _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faPenToSquare;
        if (this.text == '')
            this.text = 'Edit';
    }
    ngOnInit() {
    }
}
EditButtonComponent.ɵfac = function EditButtonComponent_Factory(t) { return new (t || EditButtonComponent)(); };
EditButtonComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: EditButtonComponent, selectors: [["edit-button"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 3, vars: 2, consts: [["type", "button", "ejs-button", "", 1, "action-button"], [3, "icon"]], template: function EditButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "fa-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx.buttonIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.text, "\n");
    } }, directives: [_syncfusion_ej2_angular_buttons__WEBPACK_IMPORTED_MODULE_3__.ButtonComponent, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FaIconComponent], encapsulation: 2 });


/***/ }),

/***/ 50483:
/*!**************************************************************************************!*\
  !*** ./src/app/shared/components/expandable-content/expandable-content.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExpandableContentComponent": () => (/* binding */ ExpandableContentComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 36362);


const _c0 = ["contentContainer"];
function ExpandableContentComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExpandableContentComponent_span_6_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.toggleContent(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.show ? "View less..." : "View more...");
} }
const _c1 = [[["", "header", ""]], [["", "body", ""]]];
const _c2 = ["[header]", "[body]"];
class ExpandableContentComponent {
    constructor(renderer, cd) {
        this.renderer = renderer;
        this.cd = cd;
        this.height = '';
        this.show = false;
        this.showButton = false;
    }
    ngAfterViewInit() {
        if (this.contentContainer && this.height != '') {
            this.setDefaultHeight();
            this.showButton = this.showViewButton();
        }
    }
    /* Problem: Expression has changed after it was checked */
    ngAfterViewChecked() {
        this.cd.detectChanges();
    }
    toggleContent() {
        this.show = !this.show;
        if (this.show) {
            this.setChildrenHeight();
        }
        else {
            this.setDefaultHeight();
        }
    }
    setChildrenHeight() {
        this.renderer.setStyle(this.contentContainer.nativeElement, 'max-height', `${this.getChildrenHeight()}px`);
    }
    setDefaultHeight() {
        this.renderer.setStyle(this.contentContainer.nativeElement, 'max-height', `${this.height}px`);
    }
    showViewButton() {
        let containerHeight = this.contentContainer.nativeElement.offsetHeight;
        return this.getChildrenHeight() > containerHeight;
    }
    getChildrenHeight() {
        let childrenHeight = 0;
        const elements = this.contentContainer.nativeElement.querySelectorAll(':scope > *');
        elements.forEach((e) => {
            childrenHeight += e.offsetHeight;
        });
        return childrenHeight;
    }
}
ExpandableContentComponent.ɵfac = function ExpandableContentComponent_Factory(t) { return new (t || ExpandableContentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef)); };
ExpandableContentComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExpandableContentComponent, selectors: [["expandable-content"]], viewQuery: function ExpandableContentComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.contentContainer = _t.first);
    } }, inputs: { height: "height" }, ngContentSelectors: _c2, decls: 7, vars: 5, consts: [[1, "expandable-content"], [1, "e-card", "p-4"], [1, "content"], ["contentContainer", ""], ["class", "pt-3 pb-4 view-text gray-action w-100 text-uppercase", 3, "click", 4, "ngIf"], [1, "pt-3", "pb-4", "view-text", "gray-action", "w-100", "text-uppercase", 3, "click"]], template: function ExpandableContentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1)(3, "div", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](5, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ExpandableContentComponent_span_6_Template, 2, 1, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("pb-0", ctx.showButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("show", ctx.show);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showButton);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf], styles: [".expandable-content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  transition: max-height 0.3s ease-out;\n  overflow: hidden;\n}\n.expandable-content[_ngcontent-%COMP%]   .content.show[_ngcontent-%COMP%], .expandable-content[_ngcontent-%COMP%]   .content.show[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  overflow: visible;\n  transition: max-height 0.5s ease-in;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4cGFuZGFibGUtY29udGVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLG9DQUFBO0VBQ0EsZ0JBQUE7QUFBSjtBQUVJO0VBRUUsaUJBQUE7RUFDQSxtQ0FBQTtBQUROIiwiZmlsZSI6ImV4cGFuZGFibGUtY29udGVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leHBhbmRhYmxlLWNvbnRlbnQge1xyXG4gIC5jb250ZW50IHtcclxuICAgIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4zcyBlYXNlLW91dDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICAgJi5zaG93LFxyXG4gICAgJi5zaG93ICoge1xyXG4gICAgICBvdmVyZmxvdzogdmlzaWJsZTtcclxuICAgICAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjVzIGVhc2UtaW47XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 13003:
/*!********************************************************************************************!*\
  !*** ./src/app/shared/components/favorite-message-edit/favorite-message-edit.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FavoriteMessageEditComponent": () => (/* binding */ FavoriteMessageEditComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_admin_tools_management_services_tool_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/admin/tools-management/services/tool.service */ 92412);
/* harmony import */ var src_app_core_services_result_handler_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/result.handler.service */ 32464);
/* harmony import */ var _syncfusion_ej2_angular_inputs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-angular-inputs */ 53691);
/* harmony import */ var _syncfusion_ej2_angular_buttons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @syncfusion/ej2-angular-buttons */ 78218);





class FavoriteMessageEditComponent {
    constructor(toolService, resultHandlerService) {
        this.toolService = toolService;
        this.resultHandlerService = resultHandlerService;
        this.description = "";
        this.toolId = 0;
        this.favoriteMessage = "";
        this.newMessage = "";
    }
    ngOnInit() {
    }
    ngOnChanges() {
        this.newMessage = this.favoriteMessage;
    }
    onUndo() {
        this.newMessage = this.favoriteMessage;
    }
    onSave() {
        this.toolService.updateFavoriteMessage(this.toolId, this.newMessage).subscribe((data) => {
            this.resultHandlerService.handle(data).then((success) => {
                if (success)
                    this.favoriteMessage = data.value;
            });
        });
    }
}
FavoriteMessageEditComponent.ɵfac = function FavoriteMessageEditComponent_Factory(t) { return new (t || FavoriteMessageEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_admin_tools_management_services_tool_service__WEBPACK_IMPORTED_MODULE_0__.ToolService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_services_result_handler_service__WEBPACK_IMPORTED_MODULE_1__.ResultHandlerService)); };
FavoriteMessageEditComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: FavoriteMessageEditComponent, selectors: [["favorite-message-edit"]], inputs: { description: "description", toolId: "toolId", favoriteMessage: "favoriteMessage" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]], decls: 12, vars: 3, consts: [[1, "container-fluid"], [1, "e-card", "mt-4", "p-1", "pb-4"], [1, "e-card-content"], [1, "form-group"], ["floatLabelType", "Always", "autocomplete", "off", "maxlength", "5000", 1, "default-textarea", 3, "placeholder", "multiline", "value", "valueChange"], [1, "row", "pt-2", "actions-container"], [1, "col-md-3", "offset-md-6"], ["type", "button", "ejs-button", "", 1, "e-flat", 3, "click"], [1, "col-md-3"], ["ejs-button", "", 1, "e-success", 3, "click"]], template: function FavoriteMessageEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "ejs-textbox", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("valueChange", function FavoriteMessageEditComponent_Template_ejs_textbox_valueChange_4_listener($event) { return ctx.newMessage = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5)(6, "div", 6)(7, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FavoriteMessageEditComponent_Template_button_click_7_listener() { return ctx.onUndo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Undo");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 8)(10, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FavoriteMessageEditComponent_Template_button_click_10_listener() { return ctx.onSave(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", ctx.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("multiline", true)("value", ctx.newMessage);
    } }, directives: [_syncfusion_ej2_angular_inputs__WEBPACK_IMPORTED_MODULE_3__.TextBoxComponent, _syncfusion_ej2_angular_buttons__WEBPACK_IMPORTED_MODULE_4__.ButtonComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmYXZvcml0ZS1tZXNzYWdlLWVkaXQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 76530:
/*!****************************************************************************************!*\
  !*** ./src/app/shared/components/field-error-display/field-error-display.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FieldErrorDisplayComponent": () => (/* binding */ FieldErrorDisplayComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 36362);


function FieldErrorDisplayComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.errorMsg, " ");
} }
class FieldErrorDisplayComponent {
}
FieldErrorDisplayComponent.ɵfac = function FieldErrorDisplayComponent_Factory(t) { return new (t || FieldErrorDisplayComponent)(); };
FieldErrorDisplayComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FieldErrorDisplayComponent, selectors: [["app-field-error-display"]], inputs: { errorMsg: "errorMsg", displayError: "displayError" }, decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "e-error"]], template: function FieldErrorDisplayComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FieldErrorDisplayComponent_div_0_Template, 3, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.displayError);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmaWVsZC1lcnJvci1kaXNwbGF5LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 16492:
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/helper-tooltip/helper-tooltip.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HelperTooltipComponent": () => (/* binding */ HelperTooltipComponent)
/* harmony export */ });
/* harmony import */ var _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/pro-regular-svg-icons */ 26966);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _syncfusion_ej2_angular_popups__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-angular-popups */ 58917);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 19397);




const _c0 = ["box"];
class HelperTooltipComponent {
    constructor() {
        this.faCircleQuestion = _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faCircleQuestion;
        this.title = 'Recommendation';
        this.position = 'right';
        this.text = '';
    }
    ngAfterViewInit() {
        this.box.nativeElement.style.textAlign = this.position;
    }
}
HelperTooltipComponent.ɵfac = function HelperTooltipComponent_Factory(t) { return new (t || HelperTooltipComponent)(); };
HelperTooltipComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HelperTooltipComponent, selectors: [["helper-tooltip"]], viewQuery: function HelperTooltipComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.box = _t.first);
    } }, inputs: { title: "title", position: "position", text: "text" }, decls: 5, vars: 3, consts: [["box", ""], ["cssClass", "customtooltip", "width", "200", 3, "content"], [3, "icon"]], template: function HelperTooltipComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", null, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ejs-tooltip", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "fa-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("content", ctx.text);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.faCircleQuestion);
    } }, directives: [_syncfusion_ej2_angular_popups__WEBPACK_IMPORTED_MODULE_2__.TooltipComponent, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FaIconComponent], styles: ["label[_ngcontent-%COMP%] {\n  font-family: var(--montserrat);\n  color: #999999;\n  width: 100%;\n}\n\n.customtooltip.e-tooltip-wrap[_ngcontent-%COMP%] {\n  background-color: #FFFFFF;\n}\n\n.customtooltip.e-tooltip-wrap.e-popup[_ngcontent-%COMP%] {\n  box-shadow: -4px 4px 10px #00000029;\n  text-align: left;\n}\n\n.customtooltip.e-tooltip-wrap[_ngcontent-%COMP%]   .e-tip-content[_ngcontent-%COMP%] {\n  text-align: left;\n  font: normal normal normal 14px/18px var(--montserrat);\n  color: #333333;\n}\n\n.customtooltip.e-tooltip-wrap[_ngcontent-%COMP%]   .e-arrow-tip-inner.e-tip-bottom[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.customtooltip.e-tooltip-wrap[_ngcontent-%COMP%]   .e-arrow-tip-outer.e-tip-bottom[_ngcontent-%COMP%] {\n  box-shadow: -4px 4px 0 #00000029;\n  border-top: 8px solid transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlbHBlci10b29sdGlwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsOEJBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7QUFDRjs7QUFFQTtFQUNFLG1DQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0Esc0RBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQ0FBQTtFQUNBLGlDQUFBO0FBQ0YiLCJmaWxlIjoiaGVscGVyLXRvb2x0aXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJsYWJlbCB7XHJcbiAgZm9udC1mYW1pbHk6IHZhcigtLW1vbnRzZXJyYXQpO1xyXG4gIGNvbG9yOiAjOTk5OTk5O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY3VzdG9tdG9vbHRpcC5lLXRvb2x0aXAtd3JhcCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxufVxyXG5cclxuLmN1c3RvbXRvb2x0aXAuZS10b29sdGlwLXdyYXAuZS1wb3B1cCB7XHJcbiAgYm94LXNoYWRvdzogLTRweCA0cHggMTBweCAjMDAwMDAwMjk7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLmN1c3RvbXRvb2x0aXAuZS10b29sdGlwLXdyYXAgLmUtdGlwLWNvbnRlbnQge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgZm9udDogbm9ybWFsIG5vcm1hbCBub3JtYWwgMTRweC8xOHB4IHZhcigtLW1vbnRzZXJyYXQpO1xyXG4gIGNvbG9yOiAjMzMzMzMzO1xyXG59XHJcblxyXG4uY3VzdG9tdG9vbHRpcC5lLXRvb2x0aXAtd3JhcCAuZS1hcnJvdy10aXAtaW5uZXIuZS10aXAtYm90dG9tIHtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLmN1c3RvbXRvb2x0aXAuZS10b29sdGlwLXdyYXAgLmUtYXJyb3ctdGlwLW91dGVyLmUtdGlwLWJvdHRvbSB7XHJcbiAgYm94LXNoYWRvdzogLTRweCA0cHggMCAjMDAwMDAwMjk7XHJcbiAgYm9yZGVyLXRvcDogOHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 86190:
/*!********************************************************************************!*\
  !*** ./src/app/shared/components/horizontal-card/horizontal-card.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HorizontalCardComponent": () => (/* binding */ HorizontalCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 19397);


class HorizontalCardComponent {
    constructor() {
        this.title = "";
        this.description = "";
    }
    ngOnInit() {
    }
}
HorizontalCardComponent.ɵfac = function HorizontalCardComponent_Factory(t) { return new (t || HorizontalCardComponent)(); };
HorizontalCardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HorizontalCardComponent, selectors: [["horizontal-card"]], inputs: { title: "title", description: "description", buttonIcon: "buttonIcon" }, decls: 10, vars: 3, consts: [[1, "horizontal-card-header"], [1, "e-card-header-image", "horizontal-card"], [1, "horizontal-card-size"], [1, "fa-2xl", "horizontal-card-size", 3, "icon"], [1, "e-card-header-caption"], [1, "e-card-header-title"], [1, "horizontal-sub-title", "mt-2"]], template: function HorizontalCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "fa-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4)(5, "div", 4)(6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.buttonIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.description);
    } }, directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FaIconComponent], styles: [".horizontal-card-header[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n  place-content: start;\n}\n\n.horizontal-card[_ngcontent-%COMP%] {\n  background-color: #f3f5f8;\n  border: solid;\n  border-color: #f3f5f8;\n  border-radius: 6px;\n  color: #1b3e6f;\n  display: table;\n  margin: 20px;\n}\n\n.horizontal-card-size[_ngcontent-%COMP%] {\n  height: 50px;\n  width: 50px;\n  text-align-last: center;\n  vertical-align: text-top;\n}\n\n.horizontal-sub-title[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvcml6b250YWwtY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0Esb0JBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSx3QkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtBQUNGIiwiZmlsZSI6Imhvcml6b250YWwtY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob3Jpem9udGFsLWNhcmQtaGVhZGVyIHtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHBsYWNlLWNvbnRlbnQ6IHN0YXJ0O1xyXG59XHJcblxyXG4uaG9yaXpvbnRhbC1jYXJkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmNWY4O1xyXG4gIGJvcmRlcjogc29saWQ7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZjNmNWY4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICBjb2xvcjogIzFiM2U2ZjtcclxuICBkaXNwbGF5OiB0YWJsZTtcclxuICBtYXJnaW46IDIwcHg7XHJcbn1cclxuXHJcbi5ob3Jpem9udGFsLWNhcmQtc2l6ZSB7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIHRleHQtYWxpZ24tbGFzdDogY2VudGVyO1xyXG4gIHZlcnRpY2FsLWFsaWduOiB0ZXh0LXRvcDtcclxufVxyXG5cclxuLmhvcml6b250YWwtc3ViLXRpdGxlIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 89519:
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/modal-header/modal-header.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalHeaderComponent": () => (/* binding */ ModalHeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/pro-regular-svg-icons */ 26966);
/* harmony import */ var _page_title_page_title_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../page-title/page-title.component */ 46896);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 19397);





class ModalHeaderComponent {
    constructor() {
        this.faClose = _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faClose;
        this.title = '';
        this.onCloseTrigger = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    }
    ngOnInit() {
    }
    onClose() {
        this.onCloseTrigger.emit();
    }
}
ModalHeaderComponent.ɵfac = function ModalHeaderComponent_Factory(t) { return new (t || ModalHeaderComponent)(); };
ModalHeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ModalHeaderComponent, selectors: [["modal-header"]], inputs: { title: "title" }, outputs: { onCloseTrigger: "onClose" }, decls: 4, vars: 3, consts: [[1, "header", "mb-2"], [3, "margin"], [3, "icon", "click"]], template: function ModalHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "page-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "fa-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ModalHeaderComponent_Template_fa_icon_click_3_listener() { return ctx.onClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("margin", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx.faClose);
    } }, directives: [_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_0__.PageTitleComponent, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FaIconComponent], styles: [".header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.header[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%] {\n  color: var(--graylight);\n  cursor: pointer;\n  font-size: 26px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGFsLWhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtBQUNGO0FBQ0U7RUFDRSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBQ0oiLCJmaWxlIjoibW9kYWwtaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gIGZhLWljb24ge1xyXG4gICAgY29sb3I6IHZhcigtLWdyYXlsaWdodCk7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 14561:
/*!************************************************************************!*\
  !*** ./src/app/shared/components/option-list/option-list.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OptionListComponent": () => (/* binding */ OptionListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _syncfusion_ej2_angular_buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-angular-buttons */ 78218);



function OptionListComponent_div_0_hr_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "hr");
} }
function OptionListComponent_div_0_ejs_checkbox_5_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ejs-checkbox", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("checkedChange", function OptionListComponent_div_0_ejs_checkbox_5_Template_ejs_checkbox_checkedChange_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const option_r3 = restoredCtx.$implicit; return option_r3.selected = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("label", option_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", option_r3.selected);
} }
function OptionListComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1)(1, "label", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, OptionListComponent_div_0_hr_3_Template, 1, 0, "hr", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, OptionListComponent_div_0_ejs_checkbox_5_Template, 1, 2, "ejs-checkbox", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("pt-4", ctx_r0.padding);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.rowInTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("pt-3", ctx_r0.padding);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.options);
} }
class OptionListComponent {
    constructor() {
        this.options = undefined;
        this.title = '';
        this.selectedIds = [];
        this.padding = true;
        this.rowInTitle = false;
        this.getSelectedIds = () => { var _a, _b; return (_b = (_a = this.options) === null || _a === void 0 ? void 0 : _a.filter(o => o.selected).map(o => o.id)) !== null && _b !== void 0 ? _b : []; };
        this.clear = () => { var _a; return (_a = this.options) === null || _a === void 0 ? void 0 : _a.forEach(o => { o.selected = false; }); };
    }
    ngOnInit() {
    }
    loadOptions(options) {
        this.options = options.map(r => {
            return {
                id: r.id,
                name: r.name,
                selected: this.selectedIds != null && this.selectedIds.findIndex(sr => sr == r.id) != -1
            };
        });
    }
    reset() {
        var _a;
        if (this.selectedIds == null) {
            this.clear();
        }
        else {
            (_a = this.options) === null || _a === void 0 ? void 0 : _a.forEach(o => { var _a; o.selected = ((_a = this.selectedIds) === null || _a === void 0 ? void 0 : _a.findIndex(sr => sr == o.id)) != -1; });
        }
    }
}
OptionListComponent.ɵfac = function OptionListComponent_Factory(t) { return new (t || OptionListComponent)(); };
OptionListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OptionListComponent, selectors: [["option-list"]], inputs: { selectedIds: "selectedIds", padding: "padding", rowInTitle: "rowInTitle" }, decls: 1, vars: 1, consts: [["class", "row", 3, "pt-4", 4, "ngIf"], [1, "row"], [1, "col-md-12", "fw-bold"], [4, "ngIf"], [1, "row", "options-container"], [3, "label", "checked", "checkedChange", 4, "ngFor", "ngForOf"], [3, "label", "checked", "checkedChange"]], template: function OptionListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, OptionListComponent_div_0_Template, 6, 7, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.options != undefined);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _syncfusion_ej2_angular_buttons__WEBPACK_IMPORTED_MODULE_2__.CheckBoxComponent], styles: [".options-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  gap: 10px;\n}\n.options-container[_ngcontent-%COMP%]   .e-checkbox-wrapper[_ngcontent-%COMP%] {\n  width: 30%;\n  word-break: break-word;\n}\nhr[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9wdGlvbi1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxTQUFBO0FBQ0Y7QUFDRTtFQUNFLFVBQUE7RUFDQSxzQkFBQTtBQUNKO0FBR0E7RUFDRSxZQUFBO0FBQUYiLCJmaWxlIjoib3B0aW9uLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3B0aW9ucy1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgZ2FwOiAxMHB4O1xyXG5cclxuICAuZS1jaGVja2JveC13cmFwcGVyIHtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4gIH1cclxufVxyXG5cclxuaHIge1xyXG4gIG1hcmdpbjogMTBweDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 89424:
/*!**********************************************************************************!*\
  !*** ./src/app/shared/components/page-description/page-description.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageDescriptionComponent": () => (/* binding */ PageDescriptionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

const _c0 = ["*"];
class PageDescriptionComponent {
    constructor() { }
    ngOnInit() {
    }
}
PageDescriptionComponent.ɵfac = function PageDescriptionComponent_Factory(t) { return new (t || PageDescriptionComponent)(); };
PageDescriptionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageDescriptionComponent, selectors: [["page-description"]], ngContentSelectors: _c0, decls: 2, vars: 0, consts: [[1, "mb-4"]], template: function PageDescriptionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLWRlc2NyaXB0aW9uLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 46896:
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/page-title/page-title.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageTitleComponent": () => (/* binding */ PageTitleComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 36362);


const _c0 = function (a0) { return { "mb-4": a0 }; };
const _c1 = ["*"];
class PageTitleComponent {
    constructor() {
        this.margin = true;
    }
    ngOnInit() {
    }
}
PageTitleComponent.ɵfac = function PageTitleComponent_Factory(t) { return new (t || PageTitleComponent)(); };
PageTitleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageTitleComponent, selectors: [["page-title"]], inputs: { margin: "margin" }, ngContentSelectors: _c1, decls: 2, vars: 3, consts: [[3, "ngClass"]], template: function PageTitleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx.margin));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass], styles: ["h1[_ngcontent-%COMP%] {\n  word-break: break-word;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2UtdGl0bGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBQTtFQUNBLGlCQUFBO0FBQ0YiLCJmaWxlIjoicGFnZS10aXRsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgxIHtcclxuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 43339:
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/preview-image/preview-image.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PreviewImageComponent": () => (/* binding */ PreviewImageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 36362);


function PreviewImageComponent_img_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 6);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function PreviewImageComponent_label_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No image");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class PreviewImageComponent {
    constructor() {
        this.title = 'Current';
    }
    ngOnInit() {
    }
}
PreviewImageComponent.ɵfac = function PreviewImageComponent_Factory(t) { return new (t || PreviewImageComponent)(); };
PreviewImageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PreviewImageComponent, selectors: [["preview-image"]], inputs: { src: "src", title: "title" }, decls: 7, vars: 3, consts: [[1, "row", "pt-4"], [1, "col-md-12", "fw-bold"], [1, "col-md-12", "pt-2"], [1, "image-container"], ["alt", "", 3, "src", 4, "ngIf"], ["class", "p-2", 4, "ngIf"], ["alt", "", 3, "src"], [1, "p-2"]], template: function PreviewImageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2)(4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PreviewImageComponent_img_5_Template, 1, 1, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PreviewImageComponent_label_6_Template, 2, 0, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.src != null && ctx.src != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.src == null || ctx.src == "");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf], styles: [".image-container[_ngcontent-%COMP%] {\n  border: 1px dashed rgba(0, 0, 0, 0.12);\n}\n.image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-height: 70px;\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByZXZpZXctaW1hZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQ0FBQTtBQUNGO0FBQ0U7RUFDRSxnQkFBQTtFQUNBLGFBQUE7QUFDSiIsImZpbGUiOiJwcmV2aWV3LWltYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltYWdlLWNvbnRhaW5lciB7XHJcbiAgYm9yZGVyOiAxcHggZGFzaGVkIHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcblxyXG4gIGltZyB7XHJcbiAgICBtYXgtaGVpZ2h0OiA3MHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 24805:
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/restore-button/restore-button.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RestoreButtonComponent": () => (/* binding */ RestoreButtonComponent)
/* harmony export */ });
/* harmony import */ var _default_button_default_button_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../default-button/default-button.component */ 72300);
/* harmony import */ var _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/pro-regular-svg-icons */ 26966);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _syncfusion_ej2_angular_buttons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-angular-buttons */ 78218);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 19397);





class RestoreButtonComponent extends _default_button_default_button_component__WEBPACK_IMPORTED_MODULE_0__.DefaultButtonComponent {
    constructor() {
        super();
        this.buttonIcon = _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faArrowsSpin;
        if (this.text == '')
            this.text = 'Restore';
    }
    ngOnInit() {
    }
}
RestoreButtonComponent.ɵfac = function RestoreButtonComponent_Factory(t) { return new (t || RestoreButtonComponent)(); };
RestoreButtonComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: RestoreButtonComponent, selectors: [["restore-button"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 3, vars: 2, consts: [["type", "button", "ejs-button", "", 1, "action-button"], [3, "icon"]], template: function RestoreButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "fa-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx.buttonIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.text, "\n");
    } }, directives: [_syncfusion_ej2_angular_buttons__WEBPACK_IMPORTED_MODULE_3__.ButtonComponent, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FaIconComponent], encapsulation: 2 });


/***/ }),

/***/ 64780:
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/restricted/restricted.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RestrictedComponent": () => (/* binding */ RestrictedComponent)
/* harmony export */ });
/* harmony import */ var _core_constants_role_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/constants/role.constants */ 85601);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _authentication_services_account_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../authentication/services/account.service */ 94398);



class RestrictedComponent {
    constructor(accountService) {
        this.accountService = accountService;
        this.roles = _core_constants_role_constants__WEBPACK_IMPORTED_MODULE_0__.Roles;
    }
    isSuperAdmin() {
        if (this.accountService != null) {
            const user = this.accountService.getCurrentUser();
            return user != null ? user.roles.some(r => r == _core_constants_role_constants__WEBPACK_IMPORTED_MODULE_0__.Roles.SuperAdmin) : false;
        }
        return false;
    }
}
RestrictedComponent.ɵfac = function RestrictedComponent_Factory(t) { return new (t || RestrictedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_authentication_services_account_service__WEBPACK_IMPORTED_MODULE_1__.AccountService)); };
RestrictedComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: RestrictedComponent, selectors: [["ng-component"]], decls: 0, vars: 0, template: function RestrictedComponent_Template(rf, ctx) { }, encapsulation: 2 });


/***/ }),

/***/ 44188:
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/return-button/return-button.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReturnButtonComponent": () => (/* binding */ ReturnButtonComponent)
/* harmony export */ });
/* harmony import */ var _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/pro-regular-svg-icons */ 26966);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 19397);





class ReturnButtonComponent {
    constructor(location, router) {
        this.location = location;
        this.router = router;
        this.sufix = '';
        this.buttonIcon = _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faArrowLeftLong;
    }
    ngOnInit() {
    }
    return() {
        if (this.returnUrl == undefined || this.returnUrl == '') {
            this.location.back();
        }
        else {
            this.router.navigate([this.returnUrl]);
        }
    }
}
ReturnButtonComponent.ɵfac = function ReturnButtonComponent_Factory(t) { return new (t || ReturnButtonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
ReturnButtonComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ReturnButtonComponent, selectors: [["return-button"]], inputs: { sufix: "sufix", returnUrl: "returnUrl" }, decls: 5, vars: 2, consts: [[1, "return-button-component", 3, "click"], [1, "icon"], [3, "icon"], [1, "text"]], template: function ReturnButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ReturnButtonComponent_Template_div_click_0_listener() { return ctx.return(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "fa-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.buttonIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Return ", ctx.sufix, " ");
    } }, directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FaIconComponent], styles: [".return-button-component[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  cursor: pointer;\n  font-size: 15px;\n  text-transform: uppercase;\n  color: var(--graymedium);\n  margin-bottom: 10px;\n}\n.return-button-component[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJldHVybi1idXR0b24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkFBQTtBQUNGO0FBQ0U7RUFDSSxrQkFBQTtBQUNOIiwiZmlsZSI6InJldHVybi1idXR0b24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmV0dXJuLWJ1dHRvbi1jb21wb25lbnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBjb2xvcjogdmFyKC0tZ3JheW1lZGl1bSk7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuXHJcbiAgLmljb24ge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 81013:
/*!******************************************************************************************************!*\
  !*** ./src/app/shared/components/rich-text-editor-with-file/rich-text-editor-with-file.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RichTextEditorWithFileComponent": () => (/* binding */ RichTextEditorWithFileComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _utilities_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/shared */ 14364);
/* harmony import */ var _utilities_url_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities/url-utils */ 82000);
/* harmony import */ var _syncfusion_ej2_angular_richtexteditor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @syncfusion/ej2-angular-richtexteditor */ 27338);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);







const _c0 = ["attachment"];
const _c1 = ["richTextEditor"];
function RichTextEditorWithFileComponent_div_5_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 9)(1, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RichTextEditorWithFileComponent_div_5_div_3_Template_label_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); const file_r4 = restoredCtx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r5.downloadFile(file_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const file_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](file_r4.name);
} }
function RichTextEditorWithFileComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 6)(1, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Related Documents");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, RichTextEditorWithFileComponent_div_5_div_3_Template, 3, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.files);
} }
class RichTextEditorWithFileComponent {
    constructor() {
        this.text = '';
        this.files = [];
        this.toolbarSettings = this.getToolbarSettings();
        this.inlineMode = (0,_utilities_shared__WEBPACK_IMPORTED_MODULE_0__.getDefaultRichTextInlineMode)();
        this.format = (0,_utilities_shared__WEBPACK_IMPORTED_MODULE_0__.getDefaultRichTextFormat)();
    }
    ngOnInit() { }
    initializeRichText(text) {
        this.richTextEditor.autoResize();
        this.richTextEditor.refreshUI();
        this.handleFiles(text);
    }
    getFiles() {
        return this.files.filter(f => f.size > 0);
    }
    handleChange($event) {
        if ($event.value) {
            this.onTouched();
            this.text = $event.value;
            this.onChanged(this.text);
            this.handleFiles(this.text);
        }
    }
    writeValue(value) {
        this.text = value;
    }
    registerOnChange(fn) {
        this.onChanged = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    downloadFile(file) {
        if (file.url) {
            window.open(file.url, '_blank');
        }
        else {
            var link = document.createElement("a");
            link.download = file.name;
            link.href = URL.createObjectURL(file);
            link.target = '_blank';
            link.click();
        }
    }
    fileUploaded(event) {
        const file = this.addFile(event);
        if (file != null) {
            this.highlightTextWithFile(file.name);
            this.handleChange({ value: this.richTextEditor.getHtml() });
        }
    }
    getCurrentNode() {
        const selectedRange = this.richTextEditor.getRange();
        return selectedRange.startContainer.nodeName === "#text" ?
            selectedRange.startContainer.parentElement :
            selectedRange.startContainer;
    }
    getToolbarSettings() {
        const settings = (0,_utilities_shared__WEBPACK_IMPORTED_MODULE_0__.getDefaultRichTextSettings)();
        settings.items.push('-');
        settings.items.push({
            tooltipText: 'Attach related document',
            undo: true,
            click: () => {
                this.selectAttachment();
            },
            template: `<button class="e-tbar-btn e-btn" tabindex="-1" style="width:100%">
                <div class="e-icons e-changes-track" style="font-weight: 500;"></div></button>`
        });
        settings.items.push({
            tooltipText: 'Detach related document',
            undo: true,
            click: () => {
                this.removeAttachment();
            },
            template: `<button class="e-tbar-btn e-btn" tabindex="-1" style="width:100%">
                <div class="e-icons e-changes-reject" style="font-weight: 500;"></div></button>`
        });
        return settings;
    }
    addFile(event) {
        const element = event.currentTarget;
        let fileList = element.files;
        if (fileList && fileList.length > 0 && fileList[0] != null) {
            const file = fileList[0];
            this.files.push(file);
            element.value = '';
            return file;
        }
        return null;
    }
    selectAttachment() {
        this.attachment.nativeElement.click();
    }
    removeAttachment() {
        const currentNode = this.getCurrentNode();
        if (currentNode) {
            if (currentNode.hasAttribute('file')) {
                currentNode.removeAttribute('file');
            }
            else if (currentNode.parentElement.hasAttribute('file')) {
                currentNode.parentElement.removeAttribute('file');
            }
            this.handleChange({ value: this.richTextEditor.getHtml() });
        }
    }
    highlightTextWithFile(fileName) {
        const currentNode = this.getCurrentNode();
        if (currentNode) {
            currentNode.setAttribute('file', fileName);
        }
    }
    handleFiles(text) {
        if (text == null) {
            this.files = [];
            return;
        }
        const fileNames = text.match(/(?<=file=").*?(?=">| ?")/gs);
        if (fileNames) {
            const files = [];
            for (let fileName of fileNames) {
                const currentFile = this.files.filter(f => f.name.includes(fileName));
                if (currentFile && currentFile.length) {
                    files.push(currentFile[0]);
                }
                else {
                    files.push({
                        name: _utilities_url_utils__WEBPACK_IMPORTED_MODULE_1__.UrlUtils.getPrettyFileName(fileName),
                        url: fileName
                    });
                }
            }
            this.files = files;
        }
        else {
            this.files = [];
        }
    }
}
RichTextEditorWithFileComponent.ɵfac = function RichTextEditorWithFileComponent_Factory(t) { return new (t || RichTextEditorWithFileComponent)(); };
RichTextEditorWithFileComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: RichTextEditorWithFileComponent, selectors: [["rich-text-editor-with-file"]], viewQuery: function RichTextEditorWithFileComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.attachment = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.richTextEditor = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NG_VALUE_ACCESSOR,
                multi: true,
                useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(() => RichTextEditorWithFileComponent)
            }
        ])], decls: 6, vars: 6, consts: [[1, "rich-text-editor-with-file"], ["required", "", 3, "inlineMode", "toolbarSettings", "format", "value", "showCharCount", "change"], ["richTextEditor", ""], ["type", "file", 1, "d-none", 3, "change"], ["attachment", ""], ["class", "files-container pt-2", 4, "ngIf"], [1, "files-container", "pt-2"], [1, "fw-bold"], ["class", "d-flex mt-1", 4, "ngFor", "ngForOf"], [1, "d-flex", "mt-1"], [1, "file-name", 3, "click"]], template: function RichTextEditorWithFileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "ejs-richtexteditor", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function RichTextEditorWithFileComponent_Template_ejs_richtexteditor_change_1_listener($event) { return ctx.handleChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "input", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function RichTextEditorWithFileComponent_Template_input_change_3_listener($event) { return ctx.fileUploaded($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, RichTextEditorWithFileComponent_div_5_Template, 4, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("inlineMode", ctx.inlineMode)("toolbarSettings", ctx.toolbarSettings)("format", ctx.format)("value", ctx.text)("showCharCount", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.files != null && ctx.files.length);
    } }, directives: [_syncfusion_ej2_angular_richtexteditor__WEBPACK_IMPORTED_MODULE_4__.RichTextEditorComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf], styles: [".rich-text-editor-with-file[_ngcontent-%COMP%]   .files-container[_ngcontent-%COMP%] {\n  counter-reset: file-list;\n}\n.rich-text-editor-with-file[_ngcontent-%COMP%]   .files-container[_ngcontent-%COMP%]   .file-name[_ngcontent-%COMP%] {\n  counter-increment: file-list;\n  color: blue;\n  text-decoration: underline;\n  cursor: pointer;\n}\n.rich-text-editor-with-file[_ngcontent-%COMP%]   .files-container[_ngcontent-%COMP%]   .file-name[_ngcontent-%COMP%]::before {\n  font-size: 10px;\n  vertical-align: top;\n  content: counter(file-list) \" \";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJpY2gtdGV4dC1lZGl0b3Itd2l0aC1maWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0Usd0JBQUE7QUFBSjtBQUVJO0VBQ0UsNEJBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0FBQU47QUFHSTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLCtCQUFBO0FBRE4iLCJmaWxlIjoicmljaC10ZXh0LWVkaXRvci13aXRoLWZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmljaC10ZXh0LWVkaXRvci13aXRoLWZpbGUge1xyXG4gIC5maWxlcy1jb250YWluZXIge1xyXG4gICAgY291bnRlci1yZXNldDogZmlsZS1saXN0O1xyXG5cclxuICAgIC5maWxlLW5hbWUge1xyXG4gICAgICBjb3VudGVyLWluY3JlbWVudDogZmlsZS1saXN0O1xyXG4gICAgICBjb2xvcjogYmx1ZTtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAuZmlsZS1uYW1lOjpiZWZvcmUge1xyXG4gICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICAgIGNvbnRlbnQ6IGNvdW50ZXIoZmlsZS1saXN0KScgJztcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 40031:
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/single-upload/single-upload.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SingleUploadComponent": () => (/* binding */ SingleUploadComponent)
/* harmony export */ });
/* harmony import */ var _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/pro-regular-svg-icons */ 26966);
/* harmony import */ var _utilities_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/shared */ 14364);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_admin_file_management_services_file_manager_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/admin/file-management/services/file-manager.service */ 35755);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 50318);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _helper_tooltip_helper_tooltip_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helper-tooltip/helper-tooltip.component */ 16492);
/* harmony import */ var _syncfusion_ej2_angular_inputs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @syncfusion/ej2-angular-inputs */ 53691);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 19397);









const _c0 = ["uploader"];
function SingleUploadComponent_helper_tooltip_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "helper-tooltip", 9);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("text", ctx_r0.tooltip);
} }
function SingleUploadComponent_div_8_div_1_fa_icon_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "fa-icon", 16);
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", ctx_r7.faArrowRightLong);
} }
function SingleUploadComponent_div_8_div_1_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 17);
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r8.previewSrc, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
} }
function SingleUploadComponent_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, SingleUploadComponent_div_8_div_1_fa_icon_2_Template, 1, 1, "fa-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, SingleUploadComponent_div_8_div_1_img_3_Template, 1, 1, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r5.getFilePathEncoded(ctx_r5.currentFilePathPreview), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r5.previewSrc != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r5.previewSrc != "");
} }
function SingleUploadComponent_div_8_div_2_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 17);
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r9.previewSrc, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
} }
function SingleUploadComponent_div_8_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SingleUploadComponent_div_8_div_2_img_1_Template, 1, 1, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r6.previewSrc != "");
} }
function SingleUploadComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SingleUploadComponent_div_8_div_1_Template, 4, 3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, SingleUploadComponent_div_8_div_2_Template, 2, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r3.currentFilePathPreview != null && ctx_r3.currentFilePathPreview != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r3.currentFilePathPreview == null || ctx_r3.currentFilePathPreview == "");
} }
function SingleUploadComponent_div_9_div_1_fa_icon_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "fa-icon", 25);
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", ctx_r13.faFilePdf);
} }
function SingleUploadComponent_div_9_div_1_fa_icon_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "fa-icon", 25);
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", ctx_r14.faFileVideo);
} }
function SingleUploadComponent_div_9_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SingleUploadComponent_div_9_div_1_fa_icon_1_Template, 1, 1, "fa-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, SingleUploadComponent_div_9_div_1_fa_icon_2_Template, 1, 1, "fa-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r10.isPdf());
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r10.isVideo());
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("href", ctx_r10.currentFilePathPreview, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r10.getCurrentFileName());
} }
function SingleUploadComponent_div_9_fa_icon_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "fa-icon", 26);
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", ctx_r11.faArrowRightLong);
} }
function SingleUploadComponent_div_9_div_3_fa_icon_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "fa-icon", 25);
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", ctx_r15.faFileVideo);
} }
function SingleUploadComponent_div_9_div_3_fa_icon_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "fa-icon", 25);
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", ctx_r16.faFilePdf);
} }
function SingleUploadComponent_div_9_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SingleUploadComponent_div_9_div_3_fa_icon_1_Template, 1, 1, "fa-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, SingleUploadComponent_div_9_div_3_fa_icon_2_Template, 1, 1, "fa-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r12.isVideo());
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r12.isPdf());
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r12.previewFileName);
} }
function SingleUploadComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SingleUploadComponent_div_9_div_1_Template, 5, 4, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, SingleUploadComponent_div_9_fa_icon_2_Template, 1, 1, "fa-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, SingleUploadComponent_div_9_div_3_Template, 5, 3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r4.currentFilePathPreview != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r4.currentFilePathPreview != "" && ctx_r4.previewSrc != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r4.previewSrc != "");
} }
class SingleUploadComponent {
    constructor(fileManagerService, domSanitizer) {
        this.fileManagerService = fileManagerService;
        this.domSanitizer = domSanitizer;
        this.getFilePathEncoded = _utilities_shared__WEBPACK_IMPORTED_MODULE_0__.getFilePathEncoded;
        this.faArrowRightLong = _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faArrowRightLong;
        this.faFilePdf = _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faFilePdf;
        this.faFileVideo = _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faFileVideo;
        this.imageExtensions = '.svg, .png, .jpg, .jpeg';
        this.pdfExtension = '.pdf';
        this.videoExtension = '.mp4, .mov, .wmv, .avi, .avchd, .flv, .f4v, .swf, .mkv, .webm, .mpeg-2';
        this.title = '';
        this.autoUpload = false;
        this.allowExtensions = this.imageExtensions;
        this.tooltip = 'We recommend SVG format with a 1:1 aspect ratio.';
        this.currentFilePath = '';
        this.showRecommendation = true;
        this.required = true;
        this.maxFileSize = 30000000;
        this.previewSrc = '';
        this.previewFileName = '';
        this.currentFile = null;
        this.currentFilePathPreview = '';
        this.uploaderCreated = () => this.loadCurrentFile();
        this.getCurrentFileType = () => { var _a, _b, _c; return (_c = (_b = (_a = this.currentFilePath) === null || _a === void 0 ? void 0 : _a.split('.')) === null || _b === void 0 ? void 0 : _b.pop()) !== null && _c !== void 0 ? _c : ''; };
    }
    ngOnInit() {
        this.currentFilePathPreview = this.currentFilePath;
    }
    getFile() {
        const filesUploaded = this.uploader.getFilesData();
        if (filesUploaded != null && filesUploaded.length > 0 && filesUploaded.every(f => f.statusCode != "0")) {
            const rawFile = filesUploaded[0].rawFile;
            if (rawFile == null || rawFile == '') {
                return this.currentFile;
            }
            return rawFile;
        }
        return undefined;
    }
    onSelect(args) {
        const file = args.filesData[0];
        if (!this.allowExtensions.includes(file.type)) {
            args.cancel = true;
            return;
        }
        let reader = new FileReader();
        reader.addEventListener('load', () => {
            this.previewSrc = this.domSanitizer.bypassSecurityTrustResourceUrl(reader.result);
        }, false);
        if (file) {
            reader.readAsDataURL(file.rawFile);
            this.previewFileName = file.rawFile.name;
            this.currentFilePathPreview = this.currentFilePath;
        }
    }
    onFileRemove(args) {
        if (this.previewSrc == '') {
            this.files = [];
            this.currentFilePathPreview = '';
        }
        else if (!this.required) {
            this.previewCurrentFile();
        }
        this.previewSrc = '';
    }
    reset() {
        this.previewSrc = '';
        this.uploader.clearAll();
        this.previewCurrentFile();
    }
    isImage() {
        return this.allowExtensions == this.imageExtensions;
    }
    isPdf() {
        return this.allowExtensions == this.pdfExtension;
    }
    isVideo() {
        return this.allowExtensions == this.videoExtension;
    }
    getCurrentFileName(withExtension = true) {
        var _a, _b, _c;
        const fullName = (_c = (_b = (_a = this.currentFilePath) === null || _a === void 0 ? void 0 : _a.split('/')) === null || _b === void 0 ? void 0 : _b.pop()) !== null && _c !== void 0 ? _c : '';
        if (withExtension)
            return fullName;
        return fullName.replace(`.${this.getCurrentFileType()}`, '');
    }
    loadCurrentFile() {
        /* When the file is not required, it will allow the user to remove the current file. */
        if (!this.required
            && this.currentFilePath != undefined
            && this.currentFilePath != '') {
            this.fileManagerService.getFromFullPath(this.currentFilePath).subscribe((file) => {
                this.currentFile = new File([file], this.getCurrentFileName());
                this.previewCurrentFile();
            });
        }
    }
    previewCurrentFile() {
        if (this.currentFilePath != '' && this.currentFile != null) {
            this.files = [{
                    name: this.getCurrentFileName(false),
                    size: this.currentFile.size,
                    type: this.getCurrentFileType()
                }];
        }
        else {
            this.files = [];
        }
        this.currentFilePathPreview = this.currentFilePath;
    }
    reloadCurrentFile(file, filePath) {
        this.currentFile = file;
        this.currentFilePath = filePath;
        this.reset();
    }
}
SingleUploadComponent.ɵfac = function SingleUploadComponent_Factory(t) { return new (t || SingleUploadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_admin_file_management_services_file_manager_service__WEBPACK_IMPORTED_MODULE_1__.FileManagerService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.DomSanitizer)); };
SingleUploadComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: SingleUploadComponent, selectors: [["single-upload"]], viewQuery: function SingleUploadComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.uploader = _t.first);
    } }, inputs: { title: "title", autoUpload: "autoUpload", allowExtensions: "allowExtensions", tooltip: "tooltip", currentFilePath: "currentFilePath", showRecommendation: "showRecommendation", required: "required", maxFileSize: "maxFileSize" }, decls: 10, vars: 10, consts: [[1, "col-md-8", "fw-bold"], ["class", "col-md-4", 3, "text", 4, "ngIf"], [1, "col-md-12", "pt-2"], [3, "className"], ["dropArea", ""], [3, "files", "multiple", "dropArea", "maxFileSize", "allowedExtensions", "created", "selected", "removing"], ["uploader", ""], [4, "ngIf"], ["class", "preview-file-container", 4, "ngIf"], [1, "col-md-4", 3, "text"], ["class", "preview-with-current-container", 4, "ngIf"], ["class", "preview-logo-container", 4, "ngIf"], [1, "preview-with-current-container"], ["alt", "", 3, "src"], [3, "icon", 4, "ngIf"], ["alt", "Image", 3, "src", 4, "ngIf"], [3, "icon"], ["alt", "Image", 3, "src"], [1, "preview-logo-container"], [1, "preview-file-container"], ["class", "icon m-3", 4, "ngIf"], ["class", "align-item-center", 3, "icon", 4, "ngIf"], [1, "icon", "m-3"], ["class", "fa-2xl", 3, "icon", 4, "ngIf"], [3, "href"], [1, "fa-2xl", 3, "icon"], [1, "align-item-center", 3, "icon"]], template: function SingleUploadComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "label", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, SingleUploadComponent_helper_tooltip_2_Template, 1, 1, "helper-tooltip", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 2)(4, "div", 3, 4)(6, "ejs-uploader", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("created", function SingleUploadComponent_Template_ejs_uploader_created_6_listener() { return ctx.uploaderCreated(); })("selected", function SingleUploadComponent_Template_ejs_uploader_selected_6_listener($event) { return ctx.onSelect($event); })("removing", function SingleUploadComponent_Template_ejs_uploader_removing_6_listener($event) { return ctx.onFileRemove($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, SingleUploadComponent_div_8_Template, 3, 2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, SingleUploadComponent_div_9_Template, 4, 3, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showRecommendation);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("className", ctx.currentFile != null || ctx.previewSrc != "" ? "has-file" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("files", ctx.files)("multiple", false)("dropArea", _r1)("maxFileSize", ctx.maxFileSize)("allowedExtensions", ctx.allowExtensions);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isImage());
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isPdf() || ctx.isVideo());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _helper_tooltip_helper_tooltip_component__WEBPACK_IMPORTED_MODULE_2__.HelperTooltipComponent, _syncfusion_ej2_angular_inputs__WEBPACK_IMPORTED_MODULE_7__.UploaderComponent, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__.FaIconComponent], styles: [".has-file[_ngcontent-%COMP%]   .e-upload[_ngcontent-%COMP%], .e-upload[_ngcontent-%COMP%]   .e-upload-file-list[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n\n.e-upload[_ngcontent-%COMP%], .preview-logo-container[_ngcontent-%COMP%], .current-file[_ngcontent-%COMP%], .preview-with-current-container[_ngcontent-%COMP%] {\n  border: 1px dashed rgba(0, 0, 0, 0.12);\n}\n\n.preview-logo-container[_ngcontent-%COMP%], .preview-with-current-container[_ngcontent-%COMP%] {\n  border-top: none;\n}\n\n.preview-logo-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .preview-with-current-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-height: 6em;\n  max-width: 15em;\n  padding: 1em;\n}\n\n.preview-logo-container[_ngcontent-%COMP%]   img[src$=svg][_ngcontent-%COMP%], .preview-logo-container[_ngcontent-%COMP%]   img[src*=\"image/svg\"][_ngcontent-%COMP%], .preview-with-current-container[_ngcontent-%COMP%]   img[src$=svg][_ngcontent-%COMP%], .preview-with-current-container[_ngcontent-%COMP%]   img[src*=\"image/svg\"][_ngcontent-%COMP%] {\n  filter: var(--warnerblue-filter);\n  height: 6em;\n}\n\n.e-upload-drag-hover[_ngcontent-%COMP%] {\n  outline: 1px dashed black;\n}\n\n.current-file[_ngcontent-%COMP%] {\n  padding: 1em 0 0 1em;\n  border-bottom: none;\n}\n\n.current-file[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n\n.current-file[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 6em;\n  max-width: 15em;\n  padding: 1em;\n}\n\n.icon[_ngcontent-%COMP%] {\n  display: inline-grid;\n  text-align: center;\n  width: 30%;\n}\n\n.preview-with-current-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.preview-file-container[_ngcontent-%COMP%] {\n  border: dashed 1px;\n  border-color: #e0e0e0;\n  border-top: none;\n  display: flex;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpbmdsZS11cGxvYWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDRSxtQkFBQTtBQUhGOztBQU1BOzs7O0VBSUUsc0NBQUE7QUFIRjs7QUFNQTs7RUFFRSxnQkFBQTtBQUhGOztBQU1BOztFQUVFLGVBcEJhO0VBcUJiLGVBdEJZO0VBdUJaLFlBeEJjO0FBcUJoQjs7QUFLRTs7O0VBRUUsZ0NBQUE7RUFDQSxXQTNCVztBQXlCZjs7QUFNQTtFQUNFLHlCQUFBO0FBSEY7O0FBTUE7RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0FBSEY7O0FBS0U7RUFDRSxzQkFBQTtBQUhKOztBQU1FO0VBQ0UsV0E1Q1c7RUE2Q1gsZUE5Q1U7RUErQ1YsWUFoRFk7QUE0Q2hCOztBQVFBO0VBQ0Usb0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFMRjs7QUFRQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQUxGOztBQVFBO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBTEYiLCJmaWxlIjoic2luZ2xlLXVwbG9hZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRpbWFnZS1wYWRkaW5nOiAxZW07XHJcbiRpbWFnZS13aWR0aDogMTVlbTtcclxuJGltYWdlLWhlaWdodDogNmVtO1xyXG5cclxuLmhhcy1maWxlIC5lLXVwbG9hZCwgLmUtdXBsb2FkIC5lLXVwbG9hZC1maWxlLWxpc3Qge1xyXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbn1cclxuXHJcbi5lLXVwbG9hZCxcclxuLnByZXZpZXctbG9nby1jb250YWluZXIsXHJcbi5jdXJyZW50LWZpbGUsXHJcbi5wcmV2aWV3LXdpdGgtY3VycmVudC1jb250YWluZXIge1xyXG4gIGJvcmRlcjogMXB4IGRhc2hlZCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG59XHJcblxyXG4ucHJldmlldy1sb2dvLWNvbnRhaW5lcixcclxuLnByZXZpZXctd2l0aC1jdXJyZW50LWNvbnRhaW5lciB7XHJcbiAgYm9yZGVyLXRvcDogbm9uZTtcclxufVxyXG5cclxuLnByZXZpZXctbG9nby1jb250YWluZXIgaW1nLFxyXG4ucHJldmlldy13aXRoLWN1cnJlbnQtY29udGFpbmVyIGltZyB7XHJcbiAgbWF4LWhlaWdodDogJGltYWdlLWhlaWdodDtcclxuICBtYXgtd2lkdGg6ICRpbWFnZS13aWR0aDtcclxuICBwYWRkaW5nOiAkaW1hZ2UtcGFkZGluZztcclxuXHJcbiAgJltzcmMkPVwic3ZnXCJdLFxyXG4gICZbc3JjKj1cImltYWdlL3N2Z1wiXSB7XHJcbiAgICBmaWx0ZXI6IHZhcigtLXdhcm5lcmJsdWUtZmlsdGVyKTtcclxuICAgIGhlaWdodDogJGltYWdlLWhlaWdodDtcclxuICB9XHJcbn1cclxuXHJcbi5lLXVwbG9hZC1kcmFnLWhvdmVyIHtcclxuICBvdXRsaW5lOiAxcHggZGFzaGVkIGJsYWNrO1xyXG59XHJcblxyXG4uY3VycmVudC1maWxlIHtcclxuICBwYWRkaW5nOiAxZW0gMCAwIDFlbTtcclxuICBib3JkZXItYm90dG9tOiBub25lO1xyXG5cclxuICBsYWJlbCB7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIH1cclxuXHJcbiAgaW1nIHtcclxuICAgIGhlaWdodDogJGltYWdlLWhlaWdodDtcclxuICAgIG1heC13aWR0aDogJGltYWdlLXdpZHRoO1xyXG4gICAgcGFkZGluZzogJGltYWdlLXBhZGRpbmc7XHJcbiAgfVxyXG59XHJcblxyXG4uaWNvbiB7XHJcbiAgZGlzcGxheTogaW5saW5lLWdyaWQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiAzMCU7XHJcbn1cclxuXHJcbi5wcmV2aWV3LXdpdGgtY3VycmVudC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnByZXZpZXctZmlsZS1jb250YWluZXIge1xyXG4gIGJvcmRlcjogZGFzaGVkIDFweDtcclxuICBib3JkZXItY29sb3I6ICNlMGUwZTA7XHJcbiAgYm9yZGVyLXRvcDogbm9uZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 37840:
/*!****************************************************************************************!*\
  !*** ./src/app/shared/components/tool-hidden-warning/tool-hidden-warning.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToolHiddenWarningComponent": () => (/* binding */ ToolHiddenWarningComponent)
/* harmony export */ });
/* harmony import */ var _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/pro-solid-svg-icons */ 61250);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_core_services_region_selector_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/services/region-selector.service */ 69442);
/* harmony import */ var src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/shared.service */ 97282);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 19397);






function ToolHiddenWarningComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "fa-icon", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " The content for ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " is currently hidden. Please contact an administrator if you have any questions. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx_r0.faEyeSlash);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.regionName);
} }
class ToolHiddenWarningComponent {
    constructor(regionSelectorService, sharedService) {
        this.regionSelectorService = regionSelectorService;
        this.sharedService = sharedService;
        this.faEyeSlash = _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faEyeSlash;
        this.isContentHidden = false;
        this.regionName = '';
    }
    ngOnInit() {
        this.loadRegionName();
        this.loadIsContentHidden();
    }
    loadRegionName() {
        var _a;
        this.regionName = (_a = this.regionSelectorService.getCurrentRegion()) === null || _a === void 0 ? void 0 : _a.name;
    }
    loadIsContentHidden() {
        this.sharedService.getToolIsContentHidden(this.toolId).subscribe((data) => {
            this.isContentHidden = data.isSuccess && data.value;
        });
    }
}
ToolHiddenWarningComponent.ɵfac = function ToolHiddenWarningComponent_Factory(t) { return new (t || ToolHiddenWarningComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_services_region_selector_service__WEBPACK_IMPORTED_MODULE_0__.RegionSelectorService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_1__.SharedService)); };
ToolHiddenWarningComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ToolHiddenWarningComponent, selectors: [["tool-hidden-warning"]], inputs: { toolId: "toolId" }, decls: 1, vars: 1, consts: [["class", "content-hidden", 4, "ngIf"], [1, "content-hidden"], [1, "icon", "mr-3", 3, "icon"]], template: function ToolHiddenWarningComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ToolHiddenWarningComponent_div_0_Template, 7, 2, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isContentHidden && ctx.regionName != undefined && ctx.regionName != "");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__.FaIconComponent], styles: [".content-hidden[_ngcontent-%COMP%] {\n  background-color: var(--yellow-transparent);\n  padding: 0.5em 1em;\n  margin-bottom: 1em;\n  display: flex;\n  align-items: center;\n  border-radius: 5px;\n}\n.content-hidden[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  color: var(--sunflower);\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvb2wtaGlkZGVuLXdhcm5pbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwyQ0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUNGO0FBQ0U7RUFDRSx1QkFBQTtFQUNBLGVBQUE7QUFDSiIsImZpbGUiOiJ0b29sLWhpZGRlbi13YXJuaW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQtaGlkZGVuIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS15ZWxsb3ctdHJhbnNwYXJlbnQpO1xyXG4gIHBhZGRpbmc6IDAuNWVtIDFlbTtcclxuICBtYXJnaW4tYm90dG9tOiAxZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHJcbiAgLmljb24ge1xyXG4gICAgY29sb3I6IHZhcigtLXN1bmZsb3dlcik7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 21681:
/*!******************************************************************************************!*\
  !*** ./src/app/shared/components/welcome-message-edit/welcome-message-edit.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WelcomeMessageEditComponent": () => (/* binding */ WelcomeMessageEditComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_admin_tools_management_services_tool_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/admin/tools-management/services/tool.service */ 92412);
/* harmony import */ var src_app_core_services_result_handler_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/result.handler.service */ 32464);
/* harmony import */ var _page_title_page_title_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../page-title/page-title.component */ 46896);
/* harmony import */ var _syncfusion_ej2_angular_inputs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @syncfusion/ej2-angular-inputs */ 53691);
/* harmony import */ var _syncfusion_ej2_angular_buttons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @syncfusion/ej2-angular-buttons */ 78218);






class WelcomeMessageEditComponent {
    constructor(toolService, resultHandlerService) {
        this.toolService = toolService;
        this.resultHandlerService = resultHandlerService;
        this.title = "Welcome Message Management";
        this.description = "";
        this.toolId = 0;
        this.welcomeMessage = "";
        this.newMessage = "";
    }
    ngOnInit() {
    }
    ngOnChanges() {
        this.newMessage = this.welcomeMessage;
    }
    onUndo() {
        this.newMessage = this.welcomeMessage;
    }
    onSave() {
        this.toolService.updateWelcomeMessage(this.toolId, this.newMessage).subscribe((data) => {
            this.resultHandlerService.handle(data).then((success) => {
                if (success)
                    this.welcomeMessage = data.value;
            });
        });
    }
}
WelcomeMessageEditComponent.ɵfac = function WelcomeMessageEditComponent_Factory(t) { return new (t || WelcomeMessageEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_admin_tools_management_services_tool_service__WEBPACK_IMPORTED_MODULE_0__.ToolService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_services_result_handler_service__WEBPACK_IMPORTED_MODULE_1__.ResultHandlerService)); };
WelcomeMessageEditComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: WelcomeMessageEditComponent, selectors: [["welcome-message-edit"]], inputs: { title: "title", description: "description", toolId: "toolId", welcomeMessage: "welcomeMessage" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]], decls: 14, vars: 4, consts: [[1, "container-fluid"], [1, "e-card", "mt-4", "p-1", "pb-4"], [1, "e-card-content"], [1, "form-group"], ["floatLabelType", "Always", "autocomplete", "off", "maxlength", "5000", 1, "default-textarea", 3, "placeholder", "multiline", "value", "valueChange"], [1, "row", "pt-2", "actions-container"], [1, "col-md-3", "offset-md-6"], ["type", "button", "ejs-button", "", 1, "e-flat", 3, "click"], [1, "col-md-3"], ["ejs-button", "", 1, "e-success", 3, "click"]], template: function WelcomeMessageEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "page-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 1)(4, "div", 2)(5, "div", 3)(6, "ejs-textbox", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("valueChange", function WelcomeMessageEditComponent_Template_ejs_textbox_valueChange_6_listener($event) { return ctx.newMessage = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 5)(8, "div", 6)(9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function WelcomeMessageEditComponent_Template_button_click_9_listener() { return ctx.onUndo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Undo");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 8)(12, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function WelcomeMessageEditComponent_Template_button_click_12_listener() { return ctx.onSave(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("placeholder", ctx.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("multiline", true)("value", ctx.newMessage);
    } }, directives: [_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_2__.PageTitleComponent, _syncfusion_ej2_angular_inputs__WEBPACK_IMPORTED_MODULE_4__.TextBoxComponent, _syncfusion_ej2_angular_buttons__WEBPACK_IMPORTED_MODULE_5__.ButtonComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3ZWxjb21lLW1lc3NhZ2UtZWRpdC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 99154:
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/workflow-step/workflow-step.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkflowStepComponent": () => (/* binding */ WorkflowStepComponent)
/* harmony export */ });
/* harmony import */ var src_app_carrier411_shared_constants_workflow_step_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/carrier411/shared/constants/workflow-step.enum */ 48473);
/* harmony import */ var _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/pro-solid-svg-icons */ 61250);
/* harmony import */ var _utilities_workflow_step_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities/workflow-step-utils */ 37916);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 19397);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);






function WorkflowStepComponent_label_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "label", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.getDescription());
} }
class WorkflowStepComponent {
    constructor() {
        this.WorkflowStep = src_app_carrier411_shared_constants_workflow_step_enum__WEBPACK_IMPORTED_MODULE_0__.WorkflowStep;
        this.workflowStep = src_app_carrier411_shared_constants_workflow_step_enum__WEBPACK_IMPORTED_MODULE_0__.WorkflowStep.Draft;
        this.showDescription = true;
        this.icon = _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faCircle;
    }
    ngOnInit() {
    }
    getClass() {
        if (typeof this.workflowStep == 'number') {
            return src_app_carrier411_shared_constants_workflow_step_enum__WEBPACK_IMPORTED_MODULE_0__.WorkflowStep[this.workflowStep].toString().toLowerCase();
        }
        return (this.workflowStep + '').toString().toLowerCase();
    }
    getDescription() {
        return _utilities_workflow_step_utils__WEBPACK_IMPORTED_MODULE_1__.WorkflowStepUtils.getDescription(this.workflowStep);
    }
}
WorkflowStepComponent.ɵfac = function WorkflowStepComponent_Factory(t) { return new (t || WorkflowStepComponent)(); };
WorkflowStepComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: WorkflowStepComponent, selectors: [["workflow-step"]], inputs: { workflowStep: ["step", "workflowStep"], showDescription: "showDescription" }, decls: 3, vars: 5, consts: [[1, "mr-2", 3, "icon"], ["class", "text-uppercase", 4, "ngIf"], [1, "text-uppercase"]], template: function WorkflowStepComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "fa-icon", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, WorkflowStepComponent_label_2_Template, 2, 1, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("workflow-step ", ctx.getClass(), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx.icon);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showDescription);
    } }, directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FaIconComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf], styles: [".workflow-step[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  padding: 0.5em 1em;\n  line-height: 1em;\n  border-radius: 5px;\n  color: var(--black);\n  font-size: 14px;\n}\n.workflow-step.draft[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%] {\n  color: var(--graylight);\n}\n.workflow-step.draft[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  background-color: var(--white-smoke);\n}\n.workflow-step.pendingapproval[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%], .workflow-step.pendingpublish[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%] {\n  color: var(--yellow);\n}\n.workflow-step.pendingapproval[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], .workflow-step.pendingpublish[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  background-color: var(--yellowlight);\n}\n.workflow-step.published[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%] {\n  color: var(--green);\n}\n.workflow-step.published[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  background-color: var(--greenlight);\n}\n.workflow-step.deleterequested[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%], .workflow-step.pendingdelete[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%], .workflow-step.deleted[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%] {\n  color: var(--red);\n}\n.workflow-step.deleterequested[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], .workflow-step.pendingdelete[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], .workflow-step.deleted[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  background-color: var(--redlight);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvcmtmbG93LXN0ZXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFBSjtBQUlJO0VBQ0UsdUJBQUE7QUFGTjtBQUtJO0VBQ0Usb0NBQUE7QUFITjtBQVNJO0VBQ0Usb0JBQUE7QUFQTjtBQVVJO0VBQ0Usb0NBQUE7QUFSTjtBQWFJO0VBQ0UsbUJBQUE7QUFYTjtBQWNJO0VBQ0UsbUNBQUE7QUFaTjtBQW1CSTtFQUNFLGlCQUFBO0FBakJOO0FBb0JJO0VBQ0UsaUNBQUE7QUFsQk4iLCJmaWxlIjoid29ya2Zsb3ctc3RlcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53b3JrZmxvdy1zdGVwIHtcclxuICBsYWJlbCB7XHJcbiAgICBwYWRkaW5nOiAwLjVlbSAxZW07XHJcbiAgICBsaW5lLWhlaWdodDogMWVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgY29sb3I6IHZhcigtLWJsYWNrKTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICB9XHJcblxyXG4gICYuZHJhZnQge1xyXG4gICAgZmEtaWNvbiB7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1ncmF5bGlnaHQpO1xyXG4gICAgfVxyXG5cclxuICAgIGxhYmVsIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUtc21va2UpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi5wZW5kaW5nYXBwcm92YWwsXHJcbiAgJi5wZW5kaW5ncHVibGlzaCB7XHJcbiAgICBmYS1pY29uIHtcclxuICAgICAgY29sb3I6IHZhcigtLXllbGxvdyk7XHJcbiAgICB9XHJcblxyXG4gICAgbGFiZWwge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS15ZWxsb3dsaWdodCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLnB1Ymxpc2hlZCB7XHJcbiAgICBmYS1pY29uIHtcclxuICAgICAgY29sb3I6IHZhcigtLWdyZWVuKTtcclxuICAgIH1cclxuXHJcbiAgICBsYWJlbCB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVubGlnaHQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi5kZWxldGVyZXF1ZXN0ZWQsXHJcbiAgJi5wZW5kaW5nZGVsZXRlLFxyXG4gICYuZGVsZXRlZCB7XHJcbiAgICBmYS1pY29uIHtcclxuICAgICAgY29sb3I6IHZhcigtLXJlZCk7XHJcbiAgICB9XHJcblxyXG4gICAgbGFiZWwge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWRsaWdodCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 85561:
/*!******************************************************!*\
  !*** ./src/app/shared/constants/application-urls.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApplicationUrls": () => (/* binding */ ApplicationUrls)
/* harmony export */ });
const ApplicationUrls = {
    Dashboard: {
        text: 'Dashboard',
        path: '/dashboard'
    },
    ResourceCenter: {
        text: 'Resource Center',
        path: '/resource-center'
    },
    GlobalToolSuite: {
        text: 'Global Tool Suite',
        path: '/admin',
        UserManagement: {
            text: 'User Management',
            path: '/admin/user-management',
            NewAdministrator: {
                text: 'New Administrator',
                path: '/admin/user-management/create'
            },
            ContactInfo: {
                text: 'Contact Info',
                path: '/admin/user-management/{id}/contact-info'
            },
            Security: {
                text: 'Security',
                path: '/admin/user-management/{id}/security'
            },
            Roles: {
                text: 'Roles',
                path: '/admin/user-management/{id}/roles'
            }
        },
        RoleManagement: {
            text: 'Role Management',
            path: '/admin/roles',
            RoleToolManagement: {
                path: '/admin/roles/tool/{id}',
                RoleToolUserManagement: {
                    AssignUser: {
                        text: 'Assign User',
                        path: '/admin/roles/tool/{id}/assign-user'
                    },
                    EditUser: {
                        text: 'Edit User Roles',
                        path: '/admin/roles/tool/{id}/user/{userId}'
                    }
                }
            }
        },
        StateManagement: {
            text: 'State Management',
            path: '/admin/state-management'
        },
        CarrierManagement: {
            text: 'Carrier Management',
            path: '/admin/carrier-management',
            NewCarrier: {
                text: 'New Carrier',
                path: '/admin/carrier-management/create'
            },
            EditCarrier: {
                text: 'Edit Carrier',
                path: '/admin/carrier-management/{id}'
            }
        },
        ToolsManagement: {
            text: 'Tools Management',
            path: '/admin/tools-management',
            NewExternalTool: {
                text: 'New External Tool',
                path: '/admin/tools-management/create'
            },
            EditTool: {
                text: 'Edit Tool',
                path: '/admin/tools-management/{id}'
            },
            StateAndCarrier: {
                text: 'State and Carrier',
                path: `/admin/tools-management/{id}/state-carrier`
            },
            GeneralInformation: {
                text: 'General Information',
                path: `/admin/tools-management/{id}/general-info`
            },
            Permission: {
                text: 'Permission',
                path: `/admin/tools-management/{id}/permission`
            }
        },
        ResourceCenter: {
            text: 'Resource Center',
            path: '/admin/resource-center',
            EditTool: {
                text: 'Edit Resource Links',
                path: '/admin/resource-center/{id}'
            }
        }
    },
    BrokerUserLinks: {
        MyDelegates: {
            text: 'My Delegates',
            path: '/broker/my-delegates'
        },
        ResetPassword: {
            text: 'Reset Password',
            path: '/broker/reset-password'
        },
        UploadLogo: {
            text: 'Upload Logo',
            path: '/broker/upload-logo'
        },
        UpdateContactInfo: {
            text: 'Update Contact Info',
            path: '/broker/update-contact-info'
        }
    },
    Carrier411Admin: {
        text: 'Carrier 411 Admin',
        path: '/carrier411-admin',
        Carrier411Management: {
            text: 'Question Management',
            path: '/carrier411-admin/question-management',
            SubCategoryManagement: {
                path: '/carrier411-admin/question-management/subcategories'
            },
            QuestionManagement: {
                path: '/carrier411-admin/question-management/questions'
            },
            AnswerManagement: {
                path: '/carrier411-admin/question-management/answers'
            }
        },
        PendingApprovals: {
            text: 'Pending Approvals Management',
            path: '/carrier411-admin/pending-approval-management'
        },
        LandingPageContentManagement: {
            text: 'Landing Page Content Management',
            path: '/carrier411-admin/landing-page-content-management'
        },
        MassUploadTool: {
            text: 'Mass Upload Tool',
            path: '/carrier411-admin/mass-upload-tool'
        }
    },
    LargeGroupRFPAdmin: {
        text: 'Large Group RFP Admin',
        path: '/large-group-rfp-admin'
    },
    DocumentToolkitAdmin: {
        text: 'Document Tookit Admin',
        path: '/document-toolkit-admin'
    },
    SecureDirectUploadAdmin: {
        text: 'Secure Direct Upload Admin',
        path: '/secure-direct-upload-admin'
    },
    Carrier411: {
        text: 'Carrier 411',
        path: '/carrier411',
        Browse: {
            path: '/carrier411/browse'
        }
    },
    LargeGroupRFP: {
        text: 'Large Group RFP',
        path: '/large-group-rfp'
    },
    DocumentToolkit: {
        text: 'Document Tookit',
        path: '/document-toolkit'
    },
    SecureDirectUpload: {
        text: 'Secure Direct Upload',
        path: '/secure-direct-upload'
    },
    TeamSheets: {
        text: 'Team Sheets',
        path: '/teamsheets'
    },
    Account: {
        ForgotPassword: {
            text: "Password",
            path: '/account/forgot-password'
        },
        ResetPassword: {
            text: "Reset Password",
            path: '/account/reset-password'
        }
    }
};


/***/ }),

/***/ 75419:
/*!**********************************************************!*\
  !*** ./src/app/shared/constants/shared-api.constants.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedApiEndpoints": () => (/* binding */ SharedApiEndpoints)
/* harmony export */ });
let sharedApiEndpoints = {
    /* Tools */
    GetTool: (id) => `/tools/${id}`,
    GetTools: () => `/tools`,
    GetToolIsContentHidden: (id) => `/tools/${id}/content-hidden`,
    /* ResourceCenter */
    GetResourceCenter: () => `/resourcecenter`,
    /* User Settings */
    GetUserSettings: (userId) => `/users-settings/${userId}`,
    GetUserRegionSettings: (userId) => `/users-settings/${userId}/region`,
    UpdateUserMenuThemeSettings: (userId) => `/users-settings/${userId}/menu-theme`,
    UpdateUserRegionSettings: (userId) => `/users-settings/${userId}/region`
};
const SharedApiEndpoints = sharedApiEndpoints;


/***/ }),

/***/ 99485:
/*!*****************************************************!*\
  !*** ./src/app/shared/constants/tools-list.enum.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToolsList": () => (/* binding */ ToolsList)
/* harmony export */ });
var ToolsList;
(function (ToolsList) {
    ToolsList[ToolsList["GlobalToolSuite"] = 1] = "GlobalToolSuite";
    ToolsList[ToolsList["Carrier411"] = 2] = "Carrier411";
    ToolsList[ToolsList["TeamSheets"] = 3] = "TeamSheets";
    ToolsList[ToolsList["LargeGroupRFP"] = 4] = "LargeGroupRFP";
    ToolsList[ToolsList["DocumentToolkit"] = 5] = "DocumentToolkit";
    ToolsList[ToolsList["SecureDirectUpload"] = 6] = "SecureDirectUpload";
})(ToolsList || (ToolsList = {}));
;


/***/ }),

/***/ 6814:
/*!****************************************************!*\
  !*** ./src/app/shared/constants/user-type.enum.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserType": () => (/* binding */ UserType)
/* harmony export */ });
var UserType;
(function (UserType) {
    UserType[UserType["Administrator"] = 1] = "Administrator";
    UserType[UserType["InternalUser"] = 2] = "InternalUser";
    UserType[UserType["Broker"] = 3] = "Broker";
})(UserType || (UserType = {}));
;


/***/ }),

/***/ 38233:
/*!***********************************************************!*\
  !*** ./src/app/shared/guards/tool-active-region.guard.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToolActiveInRegionGuard": () => (/* binding */ ToolActiveInRegionGuard)
/* harmony export */ });
/* harmony import */ var D_source_thinklogic_Tools_WarnerPacific_Tools_Web_Angular_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 83918);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 78611);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _core_services_region_selector_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services/region-selector.service */ 69442);
/* harmony import */ var src_app_admin_tools_management_services_tool_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/admin/tools-management/services/tool.service */ 92412);
/* harmony import */ var src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/toast.service */ 31443);







class ToolActiveInRegionGuard {
  constructor(router, regionSelectorService, toolService, toastService) {
    this.router = router;
    this.regionSelectorService = regionSelectorService;
    this.toolService = toolService;
    this.toastService = toastService;
  }

  canActivate(route, state) {
    var _this = this;

    return (0,D_source_thinklogic_Tools_WarnerPacific_Tools_Web_Angular_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var toolId = route.data["toolId"];

      if (!(typeof toolId === 'number') || toolId == null || toolId == 0) {
        return true;
      }

      const region = _this.regionSelectorService.getCurrentRegion();

      if (region == null) return false;
      const response = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.lastValueFrom)(_this.toolService.isToolActiveInCurrentRegion(Number(toolId)));
      const regionAllowed = response.isSuccess && response.value;

      if (!regionAllowed) {
        _this.router.navigate(['/']);

        _this.toastService.show({
          content: 'Access denied!',
          icon: 'error'
        });
      }

      return regionAllowed;
    })();
  }

}

ToolActiveInRegionGuard.ɵfac = function ToolActiveInRegionGuard_Factory(t) {
  return new (t || ToolActiveInRegionGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_core_services_region_selector_service__WEBPACK_IMPORTED_MODULE_1__.RegionSelectorService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](src_app_admin_tools_management_services_tool_service__WEBPACK_IMPORTED_MODULE_2__.ToolService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_3__.ToastService));
};

ToolActiveInRegionGuard.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
  token: ToolActiveInRegionGuard,
  factory: ToolActiveInRegionGuard.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 91054:
/*!************************************************************!*\
  !*** ./src/app/shared/interceptors/loading.interceptor.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadingInterceptor": () => (/* binding */ LoadingInterceptor)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 32313);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_busy_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/busy.service */ 19754);



class LoadingInterceptor {
    constructor(busyService) {
        this.busyService = busyService;
    }
    intercept(request, next) {
        this.busyService.busy();
        return next.handle(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.finalize)(() => {
            this.busyService.idle();
        }));
    }
}
LoadingInterceptor.ɵfac = function LoadingInterceptor_Factory(t) { return new (t || LoadingInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_services_busy_service__WEBPACK_IMPORTED_MODULE_0__.BusyService)); };
LoadingInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: LoadingInterceptor, factory: LoadingInterceptor.ɵfac });


/***/ }),

/***/ 88499:
/*!******************************************!*\
  !*** ./src/app/shared/loading.module.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadingInterceptorModule": () => (/* binding */ LoadingInterceptorModule)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _interceptors_loading_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interceptors/loading.interceptor */ 91054);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);



class LoadingInterceptorModule {
}
LoadingInterceptorModule.ɵfac = function LoadingInterceptorModule_Factory(t) { return new (t || LoadingInterceptorModule)(); };
LoadingInterceptorModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: LoadingInterceptorModule });
LoadingInterceptorModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ providers: [
        _interceptors_loading_interceptor__WEBPACK_IMPORTED_MODULE_0__.LoadingInterceptor,
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HTTP_INTERCEPTORS,
            useClass: _interceptors_loading_interceptor__WEBPACK_IMPORTED_MODULE_0__.LoadingInterceptor,
            multi: true,
        },
    ] });


/***/ }),

/***/ 78002:
/*!********************************************************!*\
  !*** ./src/app/shared/resolvers/tool-edit.resolver.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToolEditResolver": () => (/* binding */ ToolEditResolver)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_shared_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/shared.api.service */ 54558);


class ToolEditResolver {
    constructor(sharedApiService) {
        this.sharedApiService = sharedApiService;
    }
    resolve(route, state) {
        const id = Number(route.paramMap.get('id'));
        return this.sharedApiService.getTool(id);
    }
}
ToolEditResolver.ɵfac = function ToolEditResolver_Factory(t) { return new (t || ToolEditResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_shared_api_service__WEBPACK_IMPORTED_MODULE_0__.SharedApiService)); };
ToolEditResolver.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ToolEditResolver, factory: ToolEditResolver.ɵfac });


/***/ }),

/***/ 27837:
/*!**************************************************************!*\
  !*** ./src/app/shared/resolvers/tool-list-roles.resolver.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToolListRolesResolver": () => (/* binding */ ToolListRolesResolver)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_shared_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/shared.api.service */ 54558);


class ToolListRolesResolver {
    constructor(toolService) {
        this.toolService = toolService;
    }
    resolve(route, state) {
        return this.toolService.getTools(true, false, undefined, true);
    }
}
ToolListRolesResolver.ɵfac = function ToolListRolesResolver_Factory(t) { return new (t || ToolListRolesResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_shared_api_service__WEBPACK_IMPORTED_MODULE_0__.SharedApiService)); };
ToolListRolesResolver.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ToolListRolesResolver, factory: ToolListRolesResolver.ɵfac });


/***/ }),

/***/ 44809:
/*!********************************************************!*\
  !*** ./src/app/shared/resolvers/tool-list.resolver.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToolListResolver": () => (/* binding */ ToolListResolver)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_shared_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/shared.api.service */ 54558);


class ToolListResolver {
    constructor(toolService) {
        this.toolService = toolService;
    }
    resolve(route, state) {
        return this.toolService.getTools(undefined, undefined, false, true);
    }
}
ToolListResolver.ɵfac = function ToolListResolver_Factory(t) { return new (t || ToolListResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_shared_api_service__WEBPACK_IMPORTED_MODULE_0__.SharedApiService)); };
ToolListResolver.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ToolListResolver, factory: ToolListResolver.ɵfac });


/***/ }),

/***/ 19754:
/*!*************************************************!*\
  !*** ./src/app/shared/services/busy.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BusyService": () => (/* binding */ BusyService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-spinner */ 63947);


class BusyService {
    constructor(spinner) {
        this.spinner = spinner;
        this.busyRequestCount = 0;
    }
    busy() {
        this.busyRequestCount++;
        this.spinner.show();
    }
    idle() {
        this.busyRequestCount--;
        if (this.busyRequestCount <= 0) {
            this.busyRequestCount = 0;
            this.spinner.hide();
        }
    }
}
BusyService.ɵfac = function BusyService_Factory(t) { return new (t || BusyService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_1__.NgxSpinnerService)); };
BusyService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BusyService, factory: BusyService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 15303:
/*!***********************************************************!*\
  !*** ./src/app/shared/services/confirm-dialog.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmDialogService": () => (/* binding */ ConfirmDialogService)
/* harmony export */ });
/* harmony import */ var D_source_thinklogic_Tools_WarnerPacific_Tools_Web_Angular_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 83918);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ 60598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);



class ConfirmDialogService {
  constructor() {}

  show(options) {
    return (0,D_source_thinklogic_Tools_WarnerPacific_Tools_Web_Angular_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var _a, _b, _c, _d;

      const toastConfig = {
        title: (_a = options.title) !== null && _a !== void 0 ? _a : '<label class="fw-bold red-color">Are you sure?</label>',
        html: options.content + '<br />Would you still like to continue?',
        icon: (_b = options.icon) !== null && _b !== void 0 ? _b : undefined,
        showCancelButton: true,
        showCloseButton: true,
        cancelButtonText: (_c = options.cancelText) !== null && _c !== void 0 ? _c : 'Cancel',
        confirmButtonColor: '#3085d6',
        confirmButtonText: (_d = options.confirmText) !== null && _d !== void 0 ? _d : 'Continue',
        reverseButtons: true
      };

      if (options.requireAcknowledge) {
        toastConfig.input = 'checkbox';
        toastConfig.inputValue = 0;
        toastConfig.inputPlaceholder = 'I acknowledge that this action will affect data globally.';

        toastConfig.inputValidator = accept => {
          return new Promise(resolve => {
            if (!accept) {
              resolve('You need to acknowledge');
            } else {
              resolve(null);
            }
          });
        };

        toastConfig.customClass = {
          container: 'confirm-dialog-container',
          input: 'acknowledge-action'
        };
        const {
          value: accept
        } = yield sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire(toastConfig);
        return accept;
      } else {
        const {
          value: accept
        } = yield sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire(toastConfig);
        return accept;
      }
    })();
  }

}

ConfirmDialogService.ɵfac = function ConfirmDialogService_Factory(t) {
  return new (t || ConfirmDialogService)();
};

ConfirmDialogService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: ConfirmDialogService,
  factory: ConfirmDialogService.ɵfac
});

/***/ }),

/***/ 68516:
/*!************************************************************!*\
  !*** ./src/app/shared/services/input-validator.service.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InputValidatorService": () => (/* binding */ InputValidatorService)
/* harmony export */ });
/* harmony import */ var _utilities_custom_validators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/custom-validators */ 19984);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


class InputValidatorService {
    areDifferentValues(form, field1, field2) {
        return (form.controls[field1].value != "" && form.controls[field2].value != "") &&
            form.controls[field1].value != form.controls[field2].value;
    }
    isInvalidRequired(form, field) {
        return form.controls[field].hasError('required') && (form.controls[field].dirty || form.controls[field].touched);
    }
    isInvalidEmail(form, field) {
        return form.controls[field].hasError('email') && (form.controls[field].dirty || form.controls[field].touched);
    }
    isInvalidPhoneNumber(form, field) {
        let regex = /\(([0-9]{3}|0{1}((x|[0-9]){2}[0-9]{2}))\)\s*[0-9]{3,4}[- ]*[0-9]{4}/;
        return (form.controls[field].dirty || form.controls[field].touched) && !regex.test(form.value.phoneNumber);
    }
    isInvalidUrl(form, field) {
        const value = form.controls[field].value;
        return value != null && value != '' && !_utilities_custom_validators__WEBPACK_IMPORTED_MODULE_0__.CustomValidators.urlRegex.test(value);
    }
    isValidMultipleEmails(form, field) {
        const control = form.controls[field];
        var validation = _utilities_custom_validators__WEBPACK_IMPORTED_MODULE_0__.CustomValidators.multipleEmailsValidator(control);
        return validation == null || validation["validEmails"];
    }
}
InputValidatorService.ɵfac = function InputValidatorService_Factory(t) { return new (t || InputValidatorService)(); };
InputValidatorService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: InputValidatorService, factory: InputValidatorService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 134:
/*!********************************************************!*\
  !*** ./src/app/shared/services/media-query.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MediaQueryService": () => (/* binding */ MediaQueryService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


class MediaQueryService {
    constructor() {
        this._isMobileSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(this.getIsMobile());
        this.isMobile$ = this._isMobileSubject.asObservable();
        addEventListener('resize', () => {
            this.setIsMobile();
        });
    }
    setIsMobile() {
        this._isMobileSubject.next(this.getIsMobile());
    }
    getIsMobile() {
        const w = document.documentElement.clientWidth;
        const breakpoint = 992;
        return w < breakpoint;
    }
}
MediaQueryService.ɵfac = function MediaQueryService_Factory(t) { return new (t || MediaQueryService)(); };
MediaQueryService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: MediaQueryService, factory: MediaQueryService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 54558:
/*!*******************************************************!*\
  !*** ./src/app/shared/services/shared.api.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedApiService": () => (/* binding */ SharedApiService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _core_api_base_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/api/base.api.service */ 14089);
/* harmony import */ var _constants_shared_api_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/shared-api.constants */ 75419);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);





class SharedApiService extends _core_api_base_api_service__WEBPACK_IMPORTED_MODULE_0__.BaseAPIService {
    constructor(baseApiUrl_Web, http) {
        super(baseApiUrl_Web, http);
    }
    getTools(hasRoles, isExternal, isAdminTool, isActive) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams()
            .set('hasRoles', hasRoles !== null && hasRoles !== void 0 ? hasRoles : '')
            .set('isExternal', isExternal !== null && isExternal !== void 0 ? isExternal : '')
            .set('isAdminTool', isAdminTool !== null && isAdminTool !== void 0 ? isAdminTool : '')
            .set('isActive', isActive !== null && isActive !== void 0 ? isActive : '');
        return this.http.get(this.constructRequestUrl(_constants_shared_api_constants__WEBPACK_IMPORTED_MODULE_1__.SharedApiEndpoints.GetTools()), { params });
    }
    getTool(id) {
        return this.http.get(this.constructRequestUrl(_constants_shared_api_constants__WEBPACK_IMPORTED_MODULE_1__.SharedApiEndpoints.GetTool(id)));
    }
    getToolIsContentHidden(id) {
        return this.http.get(this.constructRequestUrl(_constants_shared_api_constants__WEBPACK_IMPORTED_MODULE_1__.SharedApiEndpoints.GetToolIsContentHidden(id)));
    }
    getResourceCenter() {
        return this.http.get(this.constructRequestUrl(_constants_shared_api_constants__WEBPACK_IMPORTED_MODULE_1__.SharedApiEndpoints.GetResourceCenter()));
    }
}
SharedApiService.ɵfac = function SharedApiService_Factory(t) { return new (t || SharedApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"]("BASE_API_URL_WEB"), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
SharedApiService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: SharedApiService, factory: SharedApiService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 97282:
/*!***************************************************!*\
  !*** ./src/app/shared/services/shared.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedService": () => (/* binding */ SharedService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _shared_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared.api.service */ 54558);


class SharedService {
    constructor(sharedApiService) {
        this.sharedApiService = sharedApiService;
    }
    getTools(hasRoles, isExternal, isAdminTool, isActive) {
        return this.sharedApiService.getTools(hasRoles, isExternal, isAdminTool, isActive);
    }
    getTool(id) {
        return this.sharedApiService.getTool(id);
    }
    getToolIsContentHidden(id) {
        return this.sharedApiService.getToolIsContentHidden(id);
    }
    getResourceCenter() {
        return this.sharedApiService.getResourceCenter();
    }
}
SharedService.ɵfac = function SharedService_Factory(t) { return new (t || SharedService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_shared_api_service__WEBPACK_IMPORTED_MODULE_0__.SharedApiService)); };
SharedService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SharedService, factory: SharedService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 31443:
/*!**************************************************!*\
  !*** ./src/app/shared/services/toast.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToastService": () => (/* binding */ ToastService)
/* harmony export */ });
/* harmony import */ var D_source_thinklogic_Tools_WarnerPacific_Tools_Web_Angular_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 83918);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ 60598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utilities_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utilities/shared */ 14364);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




class ToastService {
  constructor() {}

  show(options) {
    return (0,D_source_thinklogic_Tools_WarnerPacific_Tools_Web_Angular_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: toast => {
          if (toast.parentElement) {
            toast.parentElement.style.zIndex = `${(0,_utilities_shared__WEBPACK_IMPORTED_MODULE_2__.getMaxZIndex)()}`;
          } else {
            toast.style.zIndex = `${(0,_utilities_shared__WEBPACK_IMPORTED_MODULE_2__.getMaxZIndex)()}`;
          }

          toast.addEventListener('mouseenter', (sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().stopTimer));
          toast.addEventListener('mouseleave', (sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().resumeTimer));
        }
      });
      Toast.fire({
        icon: options.icon,
        title: options.content
      });
    })();
  }

}

ToastService.ɵfac = function ToastService_Factory(t) {
  return new (t || ToastService)();
};

ToastService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: ToastService,
  factory: ToastService.ɵfac
});

/***/ }),

/***/ 44466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _syncfusion_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./syncfusion.module */ 99214);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 19397);
/* harmony import */ var _services_confirm_dialog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/confirm-dialog.service */ 15303);
/* harmony import */ var _core_services_result_handler_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/services/result.handler.service */ 32464);
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/toast.service */ 31443);
/* harmony import */ var _components_announcement_message_edit_announcement_message_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/announcement-message-edit/announcement-message-edit.component */ 46055);
/* harmony import */ var _components_badge_custom_badge_custom_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/badge-custom/badge-custom.component */ 39040);
/* harmony import */ var _components_container_list_container_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/container-list/container-list.component */ 91317);
/* harmony import */ var _components_default_button_default_button_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/default-button/default-button.component */ 72300);
/* harmony import */ var _components_delete_button_delete_button_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/delete-button/delete-button.component */ 36820);
/* harmony import */ var _components_edit_button_edit_button_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/edit-button/edit-button.component */ 81297);
/* harmony import */ var _components_expandable_content_expandable_content_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/expandable-content/expandable-content.component */ 50483);
/* harmony import */ var _components_favorite_message_edit_favorite_message_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/favorite-message-edit/favorite-message-edit.component */ 13003);
/* harmony import */ var _components_field_error_display_field_error_display_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/field-error-display/field-error-display.component */ 76530);
/* harmony import */ var _components_helper_tooltip_helper_tooltip_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/helper-tooltip/helper-tooltip.component */ 16492);
/* harmony import */ var _components_horizontal_card_horizontal_card_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/horizontal-card/horizontal-card.component */ 86190);
/* harmony import */ var _components_modal_header_modal_header_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/modal-header/modal-header.component */ 89519);
/* harmony import */ var _components_option_list_option_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/option-list/option-list.component */ 14561);
/* harmony import */ var _components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/page-title/page-title.component */ 46896);
/* harmony import */ var _components_page_description_page_description_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/page-description/page-description.component */ 89424);
/* harmony import */ var _components_preview_image_preview_image_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/preview-image/preview-image.component */ 43339);
/* harmony import */ var _components_restore_button_restore_button_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/restore-button/restore-button.component */ 24805);
/* harmony import */ var _components_return_button_return_button_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/return-button/return-button.component */ 44188);
/* harmony import */ var _components_rich_text_editor_with_file_rich_text_editor_with_file_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/rich-text-editor-with-file/rich-text-editor-with-file.component */ 81013);
/* harmony import */ var _components_single_upload_single_upload_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/single-upload/single-upload.component */ 40031);
/* harmony import */ var _components_tool_hidden_warning_tool_hidden_warning_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/tool-hidden-warning/tool-hidden-warning.component */ 37840);
/* harmony import */ var _components_welcome_message_edit_welcome_message_edit_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/welcome-message-edit/welcome-message-edit.component */ 21681);
/* harmony import */ var _components_workflow_step_workflow_step_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/workflow-step/workflow-step.component */ 99154);
/* harmony import */ var _resource_center_resolvers_resource_center_resolver__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../resource-center/resolvers/resource-center.resolver */ 75267);
/* harmony import */ var _resolvers_tool_edit_resolver__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./resolvers/tool-edit.resolver */ 78002);
/* harmony import */ var _shared_resolvers_tool_list_resolver__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../shared/resolvers/tool-list.resolver */ 44809);
/* harmony import */ var _shared_resolvers_tool_list_roles_resolver__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../shared/resolvers/tool-list-roles.resolver */ 27837);
/* harmony import */ var _core_directives_has_role_directive__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../core/directives/has-role.directive */ 799);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/core */ 3184);





































const SharedModules = [
    _angular_forms__WEBPACK_IMPORTED_MODULE_32__.ReactiveFormsModule,
    _angular_router__WEBPACK_IMPORTED_MODULE_33__.RouterModule,
    _syncfusion_module__WEBPACK_IMPORTED_MODULE_0__.SyncfusionModule,
    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_34__.FontAwesomeModule
];
const SharedComponents = [
    _components_announcement_message_edit_announcement_message_edit_component__WEBPACK_IMPORTED_MODULE_4__.AnnouncementMessageEditComponent,
    _components_badge_custom_badge_custom_component__WEBPACK_IMPORTED_MODULE_5__.BadgeCustomComponent,
    _components_container_list_container_list_component__WEBPACK_IMPORTED_MODULE_6__.ContainerListComponent,
    _components_default_button_default_button_component__WEBPACK_IMPORTED_MODULE_7__.DefaultButtonComponent,
    _components_delete_button_delete_button_component__WEBPACK_IMPORTED_MODULE_8__.DeleteButtonComponent,
    _components_edit_button_edit_button_component__WEBPACK_IMPORTED_MODULE_9__.EditButtonComponent,
    _components_expandable_content_expandable_content_component__WEBPACK_IMPORTED_MODULE_10__.ExpandableContentComponent,
    _components_favorite_message_edit_favorite_message_edit_component__WEBPACK_IMPORTED_MODULE_11__.FavoriteMessageEditComponent,
    _components_field_error_display_field_error_display_component__WEBPACK_IMPORTED_MODULE_12__.FieldErrorDisplayComponent,
    _components_helper_tooltip_helper_tooltip_component__WEBPACK_IMPORTED_MODULE_13__.HelperTooltipComponent,
    _components_horizontal_card_horizontal_card_component__WEBPACK_IMPORTED_MODULE_14__.HorizontalCardComponent,
    _components_modal_header_modal_header_component__WEBPACK_IMPORTED_MODULE_15__.ModalHeaderComponent,
    _components_option_list_option_list_component__WEBPACK_IMPORTED_MODULE_16__.OptionListComponent,
    _components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_17__.PageTitleComponent,
    _components_page_description_page_description_component__WEBPACK_IMPORTED_MODULE_18__.PageDescriptionComponent,
    _components_preview_image_preview_image_component__WEBPACK_IMPORTED_MODULE_19__.PreviewImageComponent,
    _components_restore_button_restore_button_component__WEBPACK_IMPORTED_MODULE_20__.RestoreButtonComponent,
    _components_return_button_return_button_component__WEBPACK_IMPORTED_MODULE_21__.ReturnButtonComponent,
    _components_rich_text_editor_with_file_rich_text_editor_with_file_component__WEBPACK_IMPORTED_MODULE_22__.RichTextEditorWithFileComponent,
    _components_single_upload_single_upload_component__WEBPACK_IMPORTED_MODULE_23__.SingleUploadComponent,
    _components_tool_hidden_warning_tool_hidden_warning_component__WEBPACK_IMPORTED_MODULE_24__.ToolHiddenWarningComponent,
    _components_welcome_message_edit_welcome_message_edit_component__WEBPACK_IMPORTED_MODULE_25__.WelcomeMessageEditComponent,
    _components_workflow_step_workflow_step_component__WEBPACK_IMPORTED_MODULE_26__.WorkflowStepComponent
];
class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_35__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_35__["ɵɵdefineInjector"]({ providers: [
        _services_confirm_dialog_service__WEBPACK_IMPORTED_MODULE_1__.ConfirmDialogService,
        _core_services_result_handler_service__WEBPACK_IMPORTED_MODULE_2__.ResultHandlerService,
        _resource_center_resolvers_resource_center_resolver__WEBPACK_IMPORTED_MODULE_27__.ResourceCenterListResolver,
        _services_toast_service__WEBPACK_IMPORTED_MODULE_3__.ToastService,
        _resolvers_tool_edit_resolver__WEBPACK_IMPORTED_MODULE_28__.ToolEditResolver,
        _shared_resolvers_tool_list_resolver__WEBPACK_IMPORTED_MODULE_29__.ToolListResolver,
        _shared_resolvers_tool_list_roles_resolver__WEBPACK_IMPORTED_MODULE_30__.ToolListRolesResolver,
    ], imports: [[
            _syncfusion_module__WEBPACK_IMPORTED_MODULE_0__.SyncfusionModule,
            SharedModules,
            _angular_common__WEBPACK_IMPORTED_MODULE_36__.CommonModule
        ], _angular_forms__WEBPACK_IMPORTED_MODULE_32__.ReactiveFormsModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_33__.RouterModule,
        _syncfusion_module__WEBPACK_IMPORTED_MODULE_0__.SyncfusionModule,
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_34__.FontAwesomeModule, _angular_common__WEBPACK_IMPORTED_MODULE_36__.CommonModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_35__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_core_directives_has_role_directive__WEBPACK_IMPORTED_MODULE_31__.HasRoleDirective, _components_announcement_message_edit_announcement_message_edit_component__WEBPACK_IMPORTED_MODULE_4__.AnnouncementMessageEditComponent,
        _components_badge_custom_badge_custom_component__WEBPACK_IMPORTED_MODULE_5__.BadgeCustomComponent,
        _components_container_list_container_list_component__WEBPACK_IMPORTED_MODULE_6__.ContainerListComponent,
        _components_default_button_default_button_component__WEBPACK_IMPORTED_MODULE_7__.DefaultButtonComponent,
        _components_delete_button_delete_button_component__WEBPACK_IMPORTED_MODULE_8__.DeleteButtonComponent,
        _components_edit_button_edit_button_component__WEBPACK_IMPORTED_MODULE_9__.EditButtonComponent,
        _components_expandable_content_expandable_content_component__WEBPACK_IMPORTED_MODULE_10__.ExpandableContentComponent,
        _components_favorite_message_edit_favorite_message_edit_component__WEBPACK_IMPORTED_MODULE_11__.FavoriteMessageEditComponent,
        _components_field_error_display_field_error_display_component__WEBPACK_IMPORTED_MODULE_12__.FieldErrorDisplayComponent,
        _components_helper_tooltip_helper_tooltip_component__WEBPACK_IMPORTED_MODULE_13__.HelperTooltipComponent,
        _components_horizontal_card_horizontal_card_component__WEBPACK_IMPORTED_MODULE_14__.HorizontalCardComponent,
        _components_modal_header_modal_header_component__WEBPACK_IMPORTED_MODULE_15__.ModalHeaderComponent,
        _components_option_list_option_list_component__WEBPACK_IMPORTED_MODULE_16__.OptionListComponent,
        _components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_17__.PageTitleComponent,
        _components_page_description_page_description_component__WEBPACK_IMPORTED_MODULE_18__.PageDescriptionComponent,
        _components_preview_image_preview_image_component__WEBPACK_IMPORTED_MODULE_19__.PreviewImageComponent,
        _components_restore_button_restore_button_component__WEBPACK_IMPORTED_MODULE_20__.RestoreButtonComponent,
        _components_return_button_return_button_component__WEBPACK_IMPORTED_MODULE_21__.ReturnButtonComponent,
        _components_rich_text_editor_with_file_rich_text_editor_with_file_component__WEBPACK_IMPORTED_MODULE_22__.RichTextEditorWithFileComponent,
        _components_single_upload_single_upload_component__WEBPACK_IMPORTED_MODULE_23__.SingleUploadComponent,
        _components_tool_hidden_warning_tool_hidden_warning_component__WEBPACK_IMPORTED_MODULE_24__.ToolHiddenWarningComponent,
        _components_welcome_message_edit_welcome_message_edit_component__WEBPACK_IMPORTED_MODULE_25__.WelcomeMessageEditComponent,
        _components_workflow_step_workflow_step_component__WEBPACK_IMPORTED_MODULE_26__.WorkflowStepComponent], imports: [_syncfusion_module__WEBPACK_IMPORTED_MODULE_0__.SyncfusionModule, _angular_forms__WEBPACK_IMPORTED_MODULE_32__.ReactiveFormsModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_33__.RouterModule,
        _syncfusion_module__WEBPACK_IMPORTED_MODULE_0__.SyncfusionModule,
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_34__.FontAwesomeModule, _angular_common__WEBPACK_IMPORTED_MODULE_36__.CommonModule], exports: [_core_directives_has_role_directive__WEBPACK_IMPORTED_MODULE_31__.HasRoleDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_32__.ReactiveFormsModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_33__.RouterModule,
        _syncfusion_module__WEBPACK_IMPORTED_MODULE_0__.SyncfusionModule,
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_34__.FontAwesomeModule, _components_announcement_message_edit_announcement_message_edit_component__WEBPACK_IMPORTED_MODULE_4__.AnnouncementMessageEditComponent,
        _components_badge_custom_badge_custom_component__WEBPACK_IMPORTED_MODULE_5__.BadgeCustomComponent,
        _components_container_list_container_list_component__WEBPACK_IMPORTED_MODULE_6__.ContainerListComponent,
        _components_default_button_default_button_component__WEBPACK_IMPORTED_MODULE_7__.DefaultButtonComponent,
        _components_delete_button_delete_button_component__WEBPACK_IMPORTED_MODULE_8__.DeleteButtonComponent,
        _components_edit_button_edit_button_component__WEBPACK_IMPORTED_MODULE_9__.EditButtonComponent,
        _components_expandable_content_expandable_content_component__WEBPACK_IMPORTED_MODULE_10__.ExpandableContentComponent,
        _components_favorite_message_edit_favorite_message_edit_component__WEBPACK_IMPORTED_MODULE_11__.FavoriteMessageEditComponent,
        _components_field_error_display_field_error_display_component__WEBPACK_IMPORTED_MODULE_12__.FieldErrorDisplayComponent,
        _components_helper_tooltip_helper_tooltip_component__WEBPACK_IMPORTED_MODULE_13__.HelperTooltipComponent,
        _components_horizontal_card_horizontal_card_component__WEBPACK_IMPORTED_MODULE_14__.HorizontalCardComponent,
        _components_modal_header_modal_header_component__WEBPACK_IMPORTED_MODULE_15__.ModalHeaderComponent,
        _components_option_list_option_list_component__WEBPACK_IMPORTED_MODULE_16__.OptionListComponent,
        _components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_17__.PageTitleComponent,
        _components_page_description_page_description_component__WEBPACK_IMPORTED_MODULE_18__.PageDescriptionComponent,
        _components_preview_image_preview_image_component__WEBPACK_IMPORTED_MODULE_19__.PreviewImageComponent,
        _components_restore_button_restore_button_component__WEBPACK_IMPORTED_MODULE_20__.RestoreButtonComponent,
        _components_return_button_return_button_component__WEBPACK_IMPORTED_MODULE_21__.ReturnButtonComponent,
        _components_rich_text_editor_with_file_rich_text_editor_with_file_component__WEBPACK_IMPORTED_MODULE_22__.RichTextEditorWithFileComponent,
        _components_single_upload_single_upload_component__WEBPACK_IMPORTED_MODULE_23__.SingleUploadComponent,
        _components_tool_hidden_warning_tool_hidden_warning_component__WEBPACK_IMPORTED_MODULE_24__.ToolHiddenWarningComponent,
        _components_welcome_message_edit_welcome_message_edit_component__WEBPACK_IMPORTED_MODULE_25__.WelcomeMessageEditComponent,
        _components_workflow_step_workflow_step_component__WEBPACK_IMPORTED_MODULE_26__.WorkflowStepComponent, _angular_common__WEBPACK_IMPORTED_MODULE_36__.CommonModule] }); })();


/***/ }),

/***/ 99214:
/*!*********************************************!*\
  !*** ./src/app/shared/syncfusion.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SyncfusionModule": () => (/* binding */ SyncfusionModule)
/* harmony export */ });
/* harmony import */ var _syncfusion_ej2_angular_navigations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @syncfusion/ej2-angular-navigations */ 36477);
/* harmony import */ var _syncfusion_ej2_angular_buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-angular-buttons */ 78218);
/* harmony import */ var _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-angular-dropdowns */ 24779);
/* harmony import */ var _syncfusion_ej2_angular_calendars__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-angular-calendars */ 10370);
/* harmony import */ var _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @syncfusion/ej2-angular-grids */ 27723);
/* harmony import */ var _syncfusion_ej2_angular_popups__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @syncfusion/ej2-angular-popups */ 58917);
/* harmony import */ var _syncfusion_ej2_angular_splitbuttons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @syncfusion/ej2-angular-splitbuttons */ 34872);
/* harmony import */ var _syncfusion_ej2_angular_filemanager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @syncfusion/ej2-angular-filemanager */ 56892);
/* harmony import */ var _syncfusion_ej2_angular_richtexteditor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @syncfusion/ej2-angular-richtexteditor */ 27338);
/* harmony import */ var _syncfusion_ej2_angular_layouts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @syncfusion/ej2-angular-layouts */ 71435);
/* harmony import */ var _syncfusion_ej2_angular_inputs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @syncfusion/ej2-angular-inputs */ 53691);
/* harmony import */ var _syncfusion_ej2_angular_notifications__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @syncfusion/ej2-angular-notifications */ 45250);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 3184);

























const SyncfusionModules = [
    _syncfusion_ej2_angular_navigations__WEBPACK_IMPORTED_MODULE_0__.AccordionModule,
    _syncfusion_ej2_angular_navigations__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbModule,
    _syncfusion_ej2_angular_buttons__WEBPACK_IMPORTED_MODULE_1__.ButtonModule,
    _syncfusion_ej2_angular_buttons__WEBPACK_IMPORTED_MODULE_1__.CheckBoxModule,
    _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_2__.ComboBoxModule,
    _syncfusion_ej2_angular_calendars__WEBPACK_IMPORTED_MODULE_3__.DateTimePickerModule,
    _syncfusion_ej2_angular_popups__WEBPACK_IMPORTED_MODULE_4__.DialogModule,
    _syncfusion_ej2_angular_splitbuttons__WEBPACK_IMPORTED_MODULE_5__.DropDownButtonModule,
    _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_2__.DropDownListModule,
    _syncfusion_ej2_angular_filemanager__WEBPACK_IMPORTED_MODULE_6__.FileManagerModule,
    _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_7__.GridModule,
    _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_2__.ListBoxModule,
    _syncfusion_ej2_angular_inputs__WEBPACK_IMPORTED_MODULE_8__.MaskedTextBoxModule,
    _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_2__.MultiSelectModule,
    _syncfusion_ej2_angular_buttons__WEBPACK_IMPORTED_MODULE_1__.RadioButtonModule,
    _syncfusion_ej2_angular_richtexteditor__WEBPACK_IMPORTED_MODULE_9__.RichTextEditorAllModule,
    _syncfusion_ej2_angular_navigations__WEBPACK_IMPORTED_MODULE_0__.SidebarModule,
    _syncfusion_ej2_angular_splitbuttons__WEBPACK_IMPORTED_MODULE_5__.SplitButtonModule,
    _syncfusion_ej2_angular_layouts__WEBPACK_IMPORTED_MODULE_10__.SplitterModule,
    _syncfusion_ej2_angular_buttons__WEBPACK_IMPORTED_MODULE_1__.SwitchModule,
    _syncfusion_ej2_angular_notifications__WEBPACK_IMPORTED_MODULE_11__.ToastModule,
    _syncfusion_ej2_angular_popups__WEBPACK_IMPORTED_MODULE_4__.TooltipModule,
    _syncfusion_ej2_angular_inputs__WEBPACK_IMPORTED_MODULE_8__.TextBoxModule,
    _syncfusion_ej2_angular_navigations__WEBPACK_IMPORTED_MODULE_0__.TreeViewModule,
    _syncfusion_ej2_angular_inputs__WEBPACK_IMPORTED_MODULE_8__.UploaderModule
];
class SyncfusionModule {
}
SyncfusionModule.ɵfac = function SyncfusionModule_Factory(t) { return new (t || SyncfusionModule)(); };
SyncfusionModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: SyncfusionModule });
SyncfusionModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ providers: [
        _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_7__.FilterService,
        _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_7__.GroupService,
        _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_7__.DetailRowService,
        _syncfusion_ej2_angular_filemanager__WEBPACK_IMPORTED_MODULE_6__.DetailsViewService,
        _syncfusion_ej2_angular_filemanager__WEBPACK_IMPORTED_MODULE_6__.NavigationPaneService,
        _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_7__.PageService,
        _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_7__.RowDDService,
        _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_7__.SearchService,
        _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_7__.SortService,
        _syncfusion_ej2_angular_filemanager__WEBPACK_IMPORTED_MODULE_6__.ToolbarService,
        _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_7__.ToolbarService
    ], imports: [[SyncfusionModules], _syncfusion_ej2_angular_navigations__WEBPACK_IMPORTED_MODULE_0__.AccordionModule,
        _syncfusion_ej2_angular_navigations__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbModule,
        _syncfusion_ej2_angular_buttons__WEBPACK_IMPORTED_MODULE_1__.ButtonModule,
        _syncfusion_ej2_angular_buttons__WEBPACK_IMPORTED_MODULE_1__.CheckBoxModule,
        _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_2__.ComboBoxModule,
        _syncfusion_ej2_angular_calendars__WEBPACK_IMPORTED_MODULE_3__.DateTimePickerModule,
        _syncfusion_ej2_angular_popups__WEBPACK_IMPORTED_MODULE_4__.DialogModule,
        _syncfusion_ej2_angular_splitbuttons__WEBPACK_IMPORTED_MODULE_5__.DropDownButtonModule,
        _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_2__.DropDownListModule,
        _syncfusion_ej2_angular_filemanager__WEBPACK_IMPORTED_MODULE_6__.FileManagerModule,
        _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_7__.GridModule,
        _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_2__.ListBoxModule,
        _syncfusion_ej2_angular_inputs__WEBPACK_IMPORTED_MODULE_8__.MaskedTextBoxModule,
        _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_2__.MultiSelectModule,
        _syncfusion_ej2_angular_buttons__WEBPACK_IMPORTED_MODULE_1__.RadioButtonModule,
        _syncfusion_ej2_angular_richtexteditor__WEBPACK_IMPORTED_MODULE_9__.RichTextEditorAllModule,
        _syncfusion_ej2_angular_navigations__WEBPACK_IMPORTED_MODULE_0__.SidebarModule,
        _syncfusion_ej2_angular_splitbuttons__WEBPACK_IMPORTED_MODULE_5__.SplitButtonModule,
        _syncfusion_ej2_angular_layouts__WEBPACK_IMPORTED_MODULE_10__.SplitterModule,
        _syncfusion_ej2_angular_buttons__WEBPACK_IMPORTED_MODULE_1__.SwitchModule,
        _syncfusion_ej2_angular_notifications__WEBPACK_IMPORTED_MODULE_11__.ToastModule,
        _syncfusion_ej2_angular_popups__WEBPACK_IMPORTED_MODULE_4__.TooltipModule,
        _syncfusion_ej2_angular_inputs__WEBPACK_IMPORTED_MODULE_8__.TextBoxModule,
        _syncfusion_ej2_angular_navigations__WEBPACK_IMPORTED_MODULE_0__.TreeViewModule,
        _syncfusion_ej2_angular_inputs__WEBPACK_IMPORTED_MODULE_8__.UploaderModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](SyncfusionModule, { imports: [_syncfusion_ej2_angular_navigations__WEBPACK_IMPORTED_MODULE_0__.AccordionModule,
        _syncfusion_ej2_angular_navigations__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbModule,
        _syncfusion_ej2_angular_buttons__WEBPACK_IMPORTED_MODULE_1__.ButtonModule,
        _syncfusion_ej2_angular_buttons__WEBPACK_IMPORTED_MODULE_1__.CheckBoxModule,
        _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_2__.ComboBoxModule,
        _syncfusion_ej2_angular_calendars__WEBPACK_IMPORTED_MODULE_3__.DateTimePickerModule,
        _syncfusion_ej2_angular_popups__WEBPACK_IMPORTED_MODULE_4__.DialogModule,
        _syncfusion_ej2_angular_splitbuttons__WEBPACK_IMPORTED_MODULE_5__.DropDownButtonModule,
        _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_2__.DropDownListModule,
        _syncfusion_ej2_angular_filemanager__WEBPACK_IMPORTED_MODULE_6__.FileManagerModule,
        _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_7__.GridModule,
        _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_2__.ListBoxModule,
        _syncfusion_ej2_angular_inputs__WEBPACK_IMPORTED_MODULE_8__.MaskedTextBoxModule,
        _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_2__.MultiSelectModule,
        _syncfusion_ej2_angular_buttons__WEBPACK_IMPORTED_MODULE_1__.RadioButtonModule,
        _syncfusion_ej2_angular_richtexteditor__WEBPACK_IMPORTED_MODULE_9__.RichTextEditorAllModule,
        _syncfusion_ej2_angular_navigations__WEBPACK_IMPORTED_MODULE_0__.SidebarModule,
        _syncfusion_ej2_angular_splitbuttons__WEBPACK_IMPORTED_MODULE_5__.SplitButtonModule,
        _syncfusion_ej2_angular_layouts__WEBPACK_IMPORTED_MODULE_10__.SplitterModule,
        _syncfusion_ej2_angular_buttons__WEBPACK_IMPORTED_MODULE_1__.SwitchModule,
        _syncfusion_ej2_angular_notifications__WEBPACK_IMPORTED_MODULE_11__.ToastModule,
        _syncfusion_ej2_angular_popups__WEBPACK_IMPORTED_MODULE_4__.TooltipModule,
        _syncfusion_ej2_angular_inputs__WEBPACK_IMPORTED_MODULE_8__.TextBoxModule,
        _syncfusion_ej2_angular_navigations__WEBPACK_IMPORTED_MODULE_0__.TreeViewModule,
        _syncfusion_ej2_angular_inputs__WEBPACK_IMPORTED_MODULE_8__.UploaderModule], exports: [_syncfusion_ej2_angular_navigations__WEBPACK_IMPORTED_MODULE_0__.AccordionModule,
        _syncfusion_ej2_angular_navigations__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbModule,
        _syncfusion_ej2_angular_buttons__WEBPACK_IMPORTED_MODULE_1__.ButtonModule,
        _syncfusion_ej2_angular_buttons__WEBPACK_IMPORTED_MODULE_1__.CheckBoxModule,
        _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_2__.ComboBoxModule,
        _syncfusion_ej2_angular_calendars__WEBPACK_IMPORTED_MODULE_3__.DateTimePickerModule,
        _syncfusion_ej2_angular_popups__WEBPACK_IMPORTED_MODULE_4__.DialogModule,
        _syncfusion_ej2_angular_splitbuttons__WEBPACK_IMPORTED_MODULE_5__.DropDownButtonModule,
        _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_2__.DropDownListModule,
        _syncfusion_ej2_angular_filemanager__WEBPACK_IMPORTED_MODULE_6__.FileManagerModule,
        _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_7__.GridModule,
        _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_2__.ListBoxModule,
        _syncfusion_ej2_angular_inputs__WEBPACK_IMPORTED_MODULE_8__.MaskedTextBoxModule,
        _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_2__.MultiSelectModule,
        _syncfusion_ej2_angular_buttons__WEBPACK_IMPORTED_MODULE_1__.RadioButtonModule,
        _syncfusion_ej2_angular_richtexteditor__WEBPACK_IMPORTED_MODULE_9__.RichTextEditorAllModule,
        _syncfusion_ej2_angular_navigations__WEBPACK_IMPORTED_MODULE_0__.SidebarModule,
        _syncfusion_ej2_angular_splitbuttons__WEBPACK_IMPORTED_MODULE_5__.SplitButtonModule,
        _syncfusion_ej2_angular_layouts__WEBPACK_IMPORTED_MODULE_10__.SplitterModule,
        _syncfusion_ej2_angular_buttons__WEBPACK_IMPORTED_MODULE_1__.SwitchModule,
        _syncfusion_ej2_angular_notifications__WEBPACK_IMPORTED_MODULE_11__.ToastModule,
        _syncfusion_ej2_angular_popups__WEBPACK_IMPORTED_MODULE_4__.TooltipModule,
        _syncfusion_ej2_angular_inputs__WEBPACK_IMPORTED_MODULE_8__.TextBoxModule,
        _syncfusion_ej2_angular_navigations__WEBPACK_IMPORTED_MODULE_0__.TreeViewModule,
        _syncfusion_ej2_angular_inputs__WEBPACK_IMPORTED_MODULE_8__.UploaderModule] }); })();


/***/ }),

/***/ 19984:
/*!*******************************************************!*\
  !*** ./src/app/shared/utilities/custom-validators.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomValidators": () => (/* binding */ CustomValidators)
/* harmony export */ });
class CustomValidators {
    static multipleEmailsValidator(control) {
        var _a;
        if (control.value !== undefined && control.value != '') {
            const emails = (_a = control.value) === null || _a === void 0 ? void 0 : _a.split(',');
            if ((emails === null || emails === void 0 ? void 0 : emails.length) > 0) {
                const invalidEmails = emails.filter(e => !CustomValidators.emailRegex.test(e.trim()));
                return { 'validEmails': invalidEmails.length == 0 };
            }
        }
        return null;
    }
}
CustomValidators.urlRegex = /^(?:http(s?):\/\/)[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
CustomValidators.emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


/***/ }),

/***/ 14364:
/*!********************************************!*\
  !*** ./src/app/shared/utilities/shared.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DateDisplayFunctions": () => (/* binding */ DateDisplayFunctions),
/* harmony export */   "formatAdminToolName": () => (/* binding */ formatAdminToolName),
/* harmony export */   "getDefaultRichTextFormat": () => (/* binding */ getDefaultRichTextFormat),
/* harmony export */   "getDefaultRichTextInlineMode": () => (/* binding */ getDefaultRichTextInlineMode),
/* harmony export */   "getDefaultRichTextSettings": () => (/* binding */ getDefaultRichTextSettings),
/* harmony export */   "getFilePathEncoded": () => (/* binding */ getFilePathEncoded),
/* harmony export */   "getMaxZIndex": () => (/* binding */ getMaxZIndex),
/* harmony export */   "isGlobalToolSuite": () => (/* binding */ isGlobalToolSuite),
/* harmony export */   "isValidUrl": () => (/* binding */ isValidUrl),
/* harmony export */   "tableCompareFunction": () => (/* binding */ tableCompareFunction),
/* harmony export */   "toFormData": () => (/* binding */ toFormData)
/* harmony export */ });
/* harmony import */ var _constants_tools_list_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/tools-list.enum */ 99485);

function tableCompareFunction(a, b, isAsc) {
    if (a && b)
        return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    else if (a)
        return -1;
    else if (b)
        return 1;
    else
        return 1;
}
/*
 * The UTC DateTime object returned form the server should be formatted as an ISO string
 * so we can convert it to local time.
 * Example: "2021-11-01T20:15:04.0540837"
 * @param dateString
 */
const DateDisplayFunctions = {
    createDateTimeDisplayValue,
    createTimeDisplayValue,
    createDateDisplayValue,
    createDateTimeLocalDisplayValueFromUTC
};
function createDateTimeDisplayValue(dateString) {
    if (!dateString) {
        throw "Provide a date";
    }
    if (dateString[dateString.length - 1] !== "Z") {
        dateString += "Z";
    }
    var date = new Date(dateString);
    return date.toLocaleString();
}
function createTimeDisplayValue(dateString) {
    if (!dateString) {
        throw "Provide a date";
    }
    if (dateString[dateString.length - 1] !== "Z") {
        dateString += "Z";
    }
    var date = new Date(dateString);
    return date.toLocaleTimeString();
}
function createDateDisplayValue(dateString) {
    if (!dateString) {
        throw "Provide a date";
    }
    if (dateString[dateString.length - 1] !== "Z") {
        dateString += "Z";
    }
    var date = new Date(dateString);
    return date.toLocaleDateString();
}
function createDateTimeLocalDisplayValueFromUTC(date) {
    if (!date)
        return '';
    date = new Date(date);
    const utcTime = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds());
    date = new Date(utcTime);
    return date.toLocaleString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        timeZoneName: 'short'
    }).replace(',', '');
}
function toFormData(formValue) {
    const formData = new FormData();
    for (const key of Object.keys(formValue)) {
        const value = formValue[key];
        if (Array.isArray(value)) {
            for (var i = 0; i < value.length; i++) {
                formData.append(`${key}[${i}]`, value[i]);
            }
        }
        else {
            formData.append(key, value);
        }
    }
    return formData;
}
function formatAdminToolName(tool) {
    return tool.id == _constants_tools_list_enum__WEBPACK_IMPORTED_MODULE_0__.ToolsList.GlobalToolSuite ? tool.name : tool.name + ' Admin';
}
function isGlobalToolSuite(toolId) {
    return toolId == _constants_tools_list_enum__WEBPACK_IMPORTED_MODULE_0__.ToolsList.GlobalToolSuite;
}
function isValidUrl(url) {
    return url != undefined && !(url === null || url === void 0 ? void 0 : url.includes('{')) && !(url === null || url === void 0 ? void 0 : url.includes('NaN'));
}
function getFilePathEncoded(fullFilename) {
    const fileName = fullFilename.split('/').pop();
    if (fileName != undefined) {
        const filePath = fullFilename.replace(fileName, '');
        return `${filePath}${encodeURIComponent(fileName)}`;
    }
    return fullFilename;
}
function getDefaultRichTextSettings() {
    return { items: ['Bold', 'Italic', 'Underline', 'Formats', '-', 'Alignments', 'OrderedList', 'UnorderedList', 'CreateLink'] };
}
function getDefaultRichTextInlineMode() {
    return { enable: true, onSelection: true };
}
function getDefaultRichTextFormat() {
    return { width: 'auto' };
}
function getMaxZIndex() {
    return Math.max(...Array.from(document.querySelectorAll('body *'), el => parseFloat(window.getComputedStyle(el).zIndex)).filter(zIndex => !Number.isNaN(zIndex)), 0);
}


/***/ }),

/***/ 34686:
/*!**************************************************!*\
  !*** ./src/app/shared/utilities/string-utils.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StringUtils": () => (/* binding */ StringUtils)
/* harmony export */ });
class StringUtils {
    static format(text, separator, ...params) {
        const partsText = text.split(separator);
        const partsWithParam = partsText.filter(pl => pl.includes('{'));
        for (var i = 0; i < partsWithParam.length; i++) {
            const index = partsText.indexOf(partsWithParam[i]);
            if (index != -1 && params[i] != undefined && params[i] != null) {
                partsText[index] = params[i];
            }
        }
        return partsText.join(separator);
    }
}


/***/ }),

/***/ 82000:
/*!***********************************************!*\
  !*** ./src/app/shared/utilities/url-utils.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UrlUtils": () => (/* binding */ UrlUtils)
/* harmony export */ });
/* harmony import */ var _constants_application_urls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/application-urls */ 85561);
/* harmony import */ var _constants_tools_list_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/tools-list.enum */ 99485);
/* harmony import */ var _string_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./string-utils */ 34686);



class UrlUtils {
    static getToolUrl(toolId, currentPath) {
        if (_constants_tools_list_enum__WEBPACK_IMPORTED_MODULE_1__.ToolsList[toolId] != null) {
            switch (_constants_tools_list_enum__WEBPACK_IMPORTED_MODULE_1__.ToolsList[toolId]) {
                case _constants_tools_list_enum__WEBPACK_IMPORTED_MODULE_1__.ToolsList[_constants_tools_list_enum__WEBPACK_IMPORTED_MODULE_1__.ToolsList.Carrier411]:
                    return _constants_application_urls__WEBPACK_IMPORTED_MODULE_0__.ApplicationUrls.Carrier411.path;
                case _constants_tools_list_enum__WEBPACK_IMPORTED_MODULE_1__.ToolsList[_constants_tools_list_enum__WEBPACK_IMPORTED_MODULE_1__.ToolsList.LargeGroupRFP]:
                    return _constants_application_urls__WEBPACK_IMPORTED_MODULE_0__.ApplicationUrls.LargeGroupRFP.path;
                case _constants_tools_list_enum__WEBPACK_IMPORTED_MODULE_1__.ToolsList[_constants_tools_list_enum__WEBPACK_IMPORTED_MODULE_1__.ToolsList.DocumentToolkit]:
                    return _constants_application_urls__WEBPACK_IMPORTED_MODULE_0__.ApplicationUrls.DocumentToolkit.path;
                case _constants_tools_list_enum__WEBPACK_IMPORTED_MODULE_1__.ToolsList[_constants_tools_list_enum__WEBPACK_IMPORTED_MODULE_1__.ToolsList.SecureDirectUpload]:
                    return _constants_application_urls__WEBPACK_IMPORTED_MODULE_0__.ApplicationUrls.SecureDirectUpload.path;
                case _constants_tools_list_enum__WEBPACK_IMPORTED_MODULE_1__.ToolsList[_constants_tools_list_enum__WEBPACK_IMPORTED_MODULE_1__.ToolsList.TeamSheets]:
                    return _constants_application_urls__WEBPACK_IMPORTED_MODULE_0__.ApplicationUrls.TeamSheets.path;
                default:
                    return '';
            }
        }
        return currentPath;
    }
    static getLinksFromObject(p) {
        const links = [];
        for (var key of Object.keys(p)) {
            if (typeof p[key] === 'object') {
                const link = this.getLinkFromObject(p[key]);
                if (link != null)
                    links.push(link);
            }
        }
        return links;
    }
    static getLinkFromObject(p) {
        if (p.path != undefined && p.path != '') {
            return {
                path: p.path,
                text: p.text
            };
        }
        return null;
    }
    static replaceParamFromUrl(currentUrl, urlWithPlaceHolders) {
        const partsUrl = currentUrl.split('/');
        const partsLink = urlWithPlaceHolders.split('/');
        const pathsWithParam = partsLink.filter(pl => pl.includes('{'));
        pathsWithParam.forEach(pl => {
            const index = partsLink.indexOf(pl);
            if (partsUrl.length >= index + 1 && !isNaN(+partsUrl[index])) {
                partsLink[index] = partsUrl[index];
            }
        });
        return partsLink.join('/');
    }
    static replaceParams(urlWithPlaceHolders, ...params) {
        var url = urlWithPlaceHolders;
        params.forEach(p => {
            url = _string_utils__WEBPACK_IMPORTED_MODULE_2__.StringUtils.format(url, '/', p);
        });
        return url;
    }
    static getPrettyFileName(filePath) {
        const fileNameWithoutPath = filePath.match(/[^\\/:*?"<>|\r\n]+$/gs);
        if (fileNameWithoutPath) {
            const startExtensionIndex = fileNameWithoutPath[0].lastIndexOf('.');
            const fileName = fileNameWithoutPath[0].substring(0, startExtensionIndex);
            const fileExtension = fileNameWithoutPath[0].substring(startExtensionIndex);
            return `${fileName.substring(0, fileName.length - 5)}${fileExtension}`;
        }
        return filePath;
    }
}


/***/ }),

/***/ 37916:
/*!*********************************************************!*\
  !*** ./src/app/shared/utilities/workflow-step-utils.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkflowStepUtils": () => (/* binding */ WorkflowStepUtils)
/* harmony export */ });
/* harmony import */ var src_app_carrier411_shared_constants_workflow_step_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/carrier411/shared/constants/workflow-step.enum */ 48473);

class WorkflowStepUtils {
    static getDescription(step) {
        var _a;
        const list = WorkflowStepUtils.getList();
        const id = typeof step == 'number' ? step : +src_app_carrier411_shared_constants_workflow_step_enum__WEBPACK_IMPORTED_MODULE_0__.WorkflowStep[step];
        return (_a = list.filter(s => s.id == id)[0]) === null || _a === void 0 ? void 0 : _a.name;
    }
    static getList() {
        return [
            { id: +src_app_carrier411_shared_constants_workflow_step_enum__WEBPACK_IMPORTED_MODULE_0__.WorkflowStep.Draft, name: 'Draft' },
            { id: +src_app_carrier411_shared_constants_workflow_step_enum__WEBPACK_IMPORTED_MODULE_0__.WorkflowStep.PendingApproval, name: 'Pending Approval' },
            { id: +src_app_carrier411_shared_constants_workflow_step_enum__WEBPACK_IMPORTED_MODULE_0__.WorkflowStep.PendingPublish, name: 'Pending Publish' },
            { id: +src_app_carrier411_shared_constants_workflow_step_enum__WEBPACK_IMPORTED_MODULE_0__.WorkflowStep.Published, name: 'Published' },
            { id: +src_app_carrier411_shared_constants_workflow_step_enum__WEBPACK_IMPORTED_MODULE_0__.WorkflowStep.DeleteRequested, name: 'Delete Requested' },
            { id: +src_app_carrier411_shared_constants_workflow_step_enum__WEBPACK_IMPORTED_MODULE_0__.WorkflowStep.PendingDelete, name: 'Pending Delete' },
            { id: +src_app_carrier411_shared_constants_workflow_step_enum__WEBPACK_IMPORTED_MODULE_0__.WorkflowStep.Deleted, name: 'Deleted' }
        ];
    }
    static compareEnumValue(value, valueToCompare) {
        const idValue = typeof value == 'number' ? value : +src_app_carrier411_shared_constants_workflow_step_enum__WEBPACK_IMPORTED_MODULE_0__.WorkflowStep[value];
        const idValueToCompare = typeof valueToCompare == 'number' ? valueToCompare : +src_app_carrier411_shared_constants_workflow_step_enum__WEBPACK_IMPORTED_MODULE_0__.WorkflowStep[valueToCompare];
        return idValue.toString() == idValueToCompare.toString();
    }
}


/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
const environment = {
    production: true,
    api: {
        web: 'https://wpdevtools-api.thinklogic.org/api'
    },
    client: {
        baseUrl: "https://tldevtools.warnerpacific.com"
    },
    marketing: {
        baseUrl: 'https://tldevwww.warnerpacific.com/'
    },
    syncFusionApiKey: 'ORg4AjUWIQA/Gnt2VVhhQlFaclhJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxRdkBiWn5adHRWQ2RZVkA=',
    cloudwatch: {
        isEnable: true,
        retentionPeriod: 'OneDay',
        accessKeyId: 'AKIAVVFKBNH3YKVYAUFO',
        secretAccessKey: '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',
        region: 'us-west-2',
        logGroupName: 'WarnerPacific.Tools.Dev',
        logStreamName: 'development/frontend'
    },
    cryptoKey: '4C1A68722221493E8B69CF218A9C4875'
};


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 50318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);
/* harmony import */ var _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-base */ 16724);
/* harmony import */ var _app_core_logger_constants_logger_enums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/core/logger/constants/logger.enums */ 40954);
/* harmony import */ var _app_core_logger_services_logger_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/core/logger/services/logger.service */ 2616);







const providers = [
    { provide: 'BASE_API_URL_WEB', useFactory: getBaseAPIURL_Web, deps: [] }
];
if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.enableProdMode)();
}
(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__.registerLicense)(_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.syncFusionApiKey);
const cloudwatch = _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.cloudwatch;
if (cloudwatch.isEnable) {
    const logger = new _app_core_logger_services_logger_service__WEBPACK_IMPORTED_MODULE_4__["default"](cloudwatch.accessKeyId, cloudwatch.secretAccessKey, cloudwatch.region, cloudwatch.logGroupName);
    logger.install({
        logStreamNameResolver() {
            return _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.cloudwatch.logStreamName;
        },
        retentionPeriod: _app_core_logger_constants_logger_enums__WEBPACK_IMPORTED_MODULE_3__.RetentionPeriod[cloudwatch.retentionPeriod]
    });
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.platformBrowser(providers).bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));
/* Provider Factories */
function getBaseAPIURL_Web() {
    return _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.api.web;
}


/***/ }),

/***/ 42480:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map