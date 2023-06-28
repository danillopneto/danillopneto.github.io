"use strict";
(self["webpackChunkWarnerPacific"] = self["webpackChunkWarnerPacific"] || []).push([["src_app_carrier411_front-end_carrier411_module_ts"],{

/***/ 36488:
/*!*******************************************************************!*\
  !*** ./src/app/carrier411/front-end/carrier411-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Carrier411RoutingModule": () => (/* binding */ Carrier411RoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _components_carrier411_browse_carrier411_browse_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/carrier411-browse/carrier411-browse.component */ 36458);
/* harmony import */ var _components_carrier411_landing_carrier411_landing_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/carrier411-landing/carrier411-landing.component */ 22541);
/* harmony import */ var _shared_resolvers_carrier411_messages_resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/resolvers/carrier411-messages.resolver */ 53376);
/* harmony import */ var _resolvers_categories_list_resolver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resolvers/categories-list.resolver */ 89445);
/* harmony import */ var _resolvers_sub_categories_list_resolver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resolvers/sub-categories-list.resolver */ 27020);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);

// Components


// Resolvers





const childRoutes = [
    {
        path: '',
        component: _components_carrier411_landing_carrier411_landing_component__WEBPACK_IMPORTED_MODULE_1__.Carrier411LandingComponent,
        resolve: { messages: _shared_resolvers_carrier411_messages_resolver__WEBPACK_IMPORTED_MODULE_2__.Carrier411MessagesResolver, categories: _resolvers_categories_list_resolver__WEBPACK_IMPORTED_MODULE_3__.CategoriesListResolver }
    },
    {
        path: 'browse',
        component: _components_carrier411_browse_carrier411_browse_component__WEBPACK_IMPORTED_MODULE_0__.Carrier411BrowseComponent,
        resolve: { categories: _resolvers_categories_list_resolver__WEBPACK_IMPORTED_MODULE_3__.CategoriesListResolver, subCategories: _resolvers_sub_categories_list_resolver__WEBPACK_IMPORTED_MODULE_4__.SubCategoriesListResolver }
    },
];
class Carrier411RoutingModule {
}
Carrier411RoutingModule.ɵfac = function Carrier411RoutingModule_Factory(t) { return new (t || Carrier411RoutingModule)(); };
Carrier411RoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: Carrier411RoutingModule });
Carrier411RoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(childRoutes)], _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](Carrier411RoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] }); })();


/***/ }),

/***/ 91858:
/*!***********************************************************!*\
  !*** ./src/app/carrier411/front-end/carrier411.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Carrier411Module": () => (/* binding */ Carrier411Module)
/* harmony export */ });
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _components_carrier411_browse_carrier411_browse_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/carrier411-browse/carrier411-browse.component */ 36458);
/* harmony import */ var _components_carrier411_category_filters_carrier411_category_filters_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/carrier411-category-filters/carrier411-category-filters.component */ 45317);
/* harmony import */ var _components_carrier411_landing_carrier411_landing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/carrier411-landing/carrier411-landing.component */ 22541);
/* harmony import */ var _components_carrier411_navbar_carrier411_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/carrier411-navbar/carrier411-navbar.component */ 83664);
/* harmony import */ var _components_carrier411_searchbar_carrier411_searchbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/carrier411-searchbar/carrier411-searchbar.component */ 9768);
/* harmony import */ var _shared_components_category_icon_category_icon_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/components/category-icon/category-icon.component */ 33375);
/* harmony import */ var _carrier411_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./carrier411-routing.module */ 36488);
/* harmony import */ var _shared_resolvers_carrier411_messages_resolver__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/resolvers/carrier411-messages.resolver */ 53376);
/* harmony import */ var _resolvers_categories_list_resolver__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./resolvers/categories-list.resolver */ 89445);
/* harmony import */ var _resolvers_sub_categories_list_resolver__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./resolvers/sub-categories-list.resolver */ 27020);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);
//Angular and Shared Modules



// Components






// Routing

// Resolvers




class Carrier411Module {
}
Carrier411Module.ɵfac = function Carrier411Module_Factory(t) { return new (t || Carrier411Module)(); };
Carrier411Module.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: Carrier411Module });
Carrier411Module.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ providers: [
        _shared_resolvers_carrier411_messages_resolver__WEBPACK_IMPORTED_MODULE_8__.Carrier411MessagesResolver,
        _resolvers_categories_list_resolver__WEBPACK_IMPORTED_MODULE_9__.CategoriesListResolver,
        _resolvers_sub_categories_list_resolver__WEBPACK_IMPORTED_MODULE_10__.SubCategoriesListResolver
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule,
            _carrier411_routing_module__WEBPACK_IMPORTED_MODULE_7__.Carrier411RoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](Carrier411Module, { declarations: [_components_carrier411_browse_carrier411_browse_component__WEBPACK_IMPORTED_MODULE_1__.Carrier411BrowseComponent,
        _components_carrier411_category_filters_carrier411_category_filters_component__WEBPACK_IMPORTED_MODULE_2__.Carrier411CategoryFiltersComponent,
        _components_carrier411_landing_carrier411_landing_component__WEBPACK_IMPORTED_MODULE_3__.Carrier411LandingComponent,
        _components_carrier411_navbar_carrier411_navbar_component__WEBPACK_IMPORTED_MODULE_4__.Carrier411NavbarComponent,
        _components_carrier411_searchbar_carrier411_searchbar_component__WEBPACK_IMPORTED_MODULE_5__.Carrier411SearchbarComponent,
        _shared_components_category_icon_category_icon_component__WEBPACK_IMPORTED_MODULE_6__.CategoryIconComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule,
        _carrier411_routing_module__WEBPACK_IMPORTED_MODULE_7__.Carrier411RoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule] }); })();


/***/ }),

/***/ 36458:
/*!**************************************************************************************************!*\
  !*** ./src/app/carrier411/front-end/components/carrier411-browse/carrier411-browse.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Carrier411BrowseComponent": () => (/* binding */ Carrier411BrowseComponent)
/* harmony export */ });
/* harmony import */ var src_app_shared_constants_tools_list_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/constants/tools-list.enum */ 99485);
/* harmony import */ var _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/pro-regular-svg-icons */ 26966);
/* harmony import */ var src_app_shared_constants_application_urls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/constants/application-urls */ 85561);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_core_services_result_handler_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/result.handler.service */ 32464);
/* harmony import */ var _services_carrier411_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/carrier411.service */ 82383);
/* harmony import */ var _syncfusion_ej2_angular_layouts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @syncfusion/ej2-angular-layouts */ 71435);
/* harmony import */ var _carrier411_navbar_carrier411_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../carrier411-navbar/carrier411-navbar.component */ 83664);
/* harmony import */ var _shared_components_tool_hidden_warning_tool_hidden_warning_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/components/tool-hidden-warning/tool-hidden-warning.component */ 37840);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 19397);












const _c0 = ["ejsSplitter"];
function Carrier411BrowseComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "carrier411-navbar", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onExpandMenu", function Carrier411BrowseComponent_ng_template_6_Template_carrier411_navbar_onExpandMenu_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r5.onExpandMenu(); })("onExpandCategory", function Carrier411BrowseComponent_ng_template_6_Template_carrier411_navbar_onExpandCategory_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r7.onExpandCategory($event); })("onSubCategoryChange", function Carrier411BrowseComponent_ng_template_6_Template_carrier411_navbar_onSubCategoryChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r8.onSubCategoryChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("categories", ctx_r2.categories)("subCategories", ctx_r2.subCategories)("expanded", ctx_r2.menuExpanded);
} }
function Carrier411BrowseComponent_ng_template_9_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "fa-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Let's find what you're looking for...");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Select some sub-category filters on the left to begin your search!");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Return to main");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icon", ctx_r9.faMagnifyingGlass);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", ctx_r9.carrier411Url);
} }
function Carrier411BrowseComponent_ng_template_9_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 15)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "carrier411-browse works!");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} }
function Carrier411BrowseComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tool-hidden-warning", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, Carrier411BrowseComponent_ng_template_9_div_1_Template, 8, 2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, Carrier411BrowseComponent_ng_template_9_div_2_Template, 3, 0, "div", 10);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("toolId", ctx_r4.Carrier411Id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r4.selectedSubCategoryIds.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r4.selectedSubCategoryIds.length);
} }
class Carrier411BrowseComponent {
    constructor(route, resultHandlerService, carrier411Service) {
        this.route = route;
        this.resultHandlerService = resultHandlerService;
        this.carrier411Service = carrier411Service;
        this.Carrier411Id = src_app_shared_constants_tools_list_enum__WEBPACK_IMPORTED_MODULE_0__.ToolsList.Carrier411;
        this.faMagnifyingGlass = _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faMagnifyingGlass;
        this.carrier411Url = src_app_shared_constants_application_urls__WEBPACK_IMPORTED_MODULE_1__.ApplicationUrls.Carrier411.path;
        this.categories = [];
        this.subCategories = [];
        this.selectedSubCategoryIds = [];
        this.menuExpanded = true;
        this.categories = this.handleResolverData('categories');
        this.subCategories = this.handleResolverData('subCategories');
    }
    ngOnInit() {
    }
    onExpandMenu() {
        this.ejsSplitter.expand(0);
    }
    onExpandCategory(categoryId) {
        if (!this.subCategories.some(sc => sc.category.id == categoryId)) {
            this.carrier411Service.getSubCategories([categoryId]).subscribe(data => {
                if (data.isSuccess) {
                    this.subCategories = this.subCategories.concat(data.value).sort(sc => sc.order);
                }
                else {
                    this.resultHandlerService.handle(data);
                }
            });
        }
    }
    onSubCategoryChange(subCategoryIds) {
        this.selectedSubCategoryIds = subCategoryIds;
        // TODO
    }
    toggleMenu() {
        this.menuExpanded = !this.menuExpanded;
    }
    handleResolverData(key) {
        const data = this.route.snapshot.data[key];
        if (data) {
            if (data.isSuccess) {
                return data.value;
            }
            else {
                this.resultHandlerService.handle(data);
                return [];
            }
        }
        else {
            return [];
        }
    }
}
Carrier411BrowseComponent.ɵfac = function Carrier411BrowseComponent_Factory(t) { return new (t || Carrier411BrowseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_services_result_handler_service__WEBPACK_IMPORTED_MODULE_2__.ResultHandlerService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_carrier411_service__WEBPACK_IMPORTED_MODULE_3__.Carrier411Service)); };
Carrier411BrowseComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: Carrier411BrowseComponent, selectors: [["app-carrier411-browse"]], viewQuery: function Carrier411BrowseComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.ejsSplitter = _t.first);
    } }, decls: 11, vars: 2, consts: [[1, "container-fluid", "carrier-411-browse-container"], [1, "d-flex"], [3, "collapsed", "expanded"], ["ejsSplitter", ""], ["min", "300px", "max", "40%", "size", "300px", 3, "collapsible"], ["content", ""], ["cssClass", "px-3", 3, "collapsible"], [1, "d-block", "mr-3", 3, "categories", "subCategories", "expanded", "onExpandMenu", "onExpandCategory", "onSubCategoryChange"], [3, "toolId"], ["class", "d-flex col landing-message p-4", 4, "ngIf"], ["class", "browse-results", 4, "ngIf"], [1, "d-flex", "col", "landing-message", "p-4"], [1, "icon", "pt-5", 3, "icon"], [1, "fw-bold"], [1, "text-uppercase", "pt-2", 3, "routerLink"], [1, "browse-results"]], template: function Carrier411BrowseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "ejs-splitter", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("collapsed", function Carrier411BrowseComponent_Template_ejs_splitter_collapsed_2_listener() { return ctx.toggleMenu(); })("expanded", function Carrier411BrowseComponent_Template_ejs_splitter_expanded_2_listener() { return ctx.toggleMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "e-panes")(5, "e-pane", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, Carrier411BrowseComponent_ng_template_6_Template, 1, 3, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "e-pane", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, Carrier411BrowseComponent_ng_template_9_Template, 3, 3, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("collapsible", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("collapsible", false);
    } }, directives: [_syncfusion_ej2_angular_layouts__WEBPACK_IMPORTED_MODULE_9__.SplitterComponent, _syncfusion_ej2_angular_layouts__WEBPACK_IMPORTED_MODULE_9__.PanesDirective, _syncfusion_ej2_angular_layouts__WEBPACK_IMPORTED_MODULE_9__.PaneDirective, _carrier411_navbar_carrier411_navbar_component__WEBPACK_IMPORTED_MODULE_4__.Carrier411NavbarComponent, _shared_components_tool_hidden_warning_tool_hidden_warning_component__WEBPACK_IMPORTED_MODULE_5__.ToolHiddenWarningComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__.FaIconComponent, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLinkWithHref], styles: [".carrier-411-browse-container .e-splitter {\n  border: none;\n}\n.carrier-411-browse-container .e-splitter button {\n  min-height: 0;\n}\n.carrier-411-browse-container .e-splitter.e-splitter-horizontal .e-pane.e-pane-horizontal.e-pane-hidden {\n  flex-basis: 80px !important;\n}\n.carrier-411-browse-container .landing-message {\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  text-align: center;\n}\n.carrier-411-browse-container .landing-message *:not(label) {\n  color: var(--warnerblue);\n  text-decoration: none;\n}\n.carrier-411-browse-container .landing-message .icon {\n  font-size: 4rem;\n}\n.carrier-411-browse-container .landing-message p {\n  font-size: 1.5rem;\n}\n.carrier-411-browse-container .landing-message a {\n  font-size: 14px;\n}\n.carrier-411-browse-container .landing-message a:hover {\n  text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcnJpZXI0MTEtYnJvd3NlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsWUFBQTtBQUFKO0FBRUk7RUFDRSxhQUFBO0FBQU47QUFHSTtFQUNFLDJCQUFBO0FBRE47QUFLRTtFQUNFLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBSEo7QUFLSTtFQUNFLHdCQUFBO0VBQ0EscUJBQUE7QUFITjtBQU1JO0VBQ0UsZUFBQTtBQUpOO0FBT0k7RUFDRSxpQkFBQTtBQUxOO0FBUUk7RUFDRSxlQUFBO0FBTk47QUFRTTtFQUNFLDBCQUFBO0FBTlIiLCJmaWxlIjoiY2FycmllcjQxMS1icm93c2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2Fycmllci00MTEtYnJvd3NlLWNvbnRhaW5lciB7XHJcbiAgLmUtc3BsaXR0ZXIge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG5cclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgIG1pbi1oZWlnaHQ6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgJi5lLXNwbGl0dGVyLWhvcml6b250YWwgLmUtcGFuZS5lLXBhbmUtaG9yaXpvbnRhbC5lLXBhbmUtaGlkZGVuIHtcclxuICAgICAgZmxleC1iYXNpczogODBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmxhbmRpbmctbWVzc2FnZSB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAqOm5vdChsYWJlbCkge1xyXG4gICAgICBjb2xvcjogdmFyKC0td2FybmVyYmx1ZSk7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAuaWNvbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogNHJlbTtcclxuICAgIH1cclxuXHJcbiAgICBwIHtcclxuICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICB9XHJcblxyXG4gICAgYSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"], encapsulation: 2 });


/***/ }),

/***/ 45317:
/*!**********************************************************************************************************************!*\
  !*** ./src/app/carrier411/front-end/components/carrier411-category-filters/carrier411-category-filters.component.ts ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Carrier411CategoryFiltersComponent": () => (/* binding */ Carrier411CategoryFiltersComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/toast.service */ 31443);
/* harmony import */ var _shared_components_modal_header_modal_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/components/modal-header/modal-header.component */ 89519);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _syncfusion_ej2_angular_buttons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @syncfusion/ej2-angular-buttons */ 78218);






function Carrier411CategoryFiltersComponent_ejs_checkbox_15_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ejs-checkbox", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("checkedChange", function Carrier411CategoryFiltersComponent_ejs_checkbox_15_Template_ejs_checkbox_checkedChange_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); const option_r1 = restoredCtx.$implicit; return option_r1.selected = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("label", option_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", option_r1.selected);
} }
class Carrier411CategoryFiltersComponent {
    constructor(toastService) {
        this.toastService = toastService;
        this.categories = [];
        this.selectedIds = [];
        this.onUpdateTrigger = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.onCloseTrigger = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.options = undefined;
    }
    ngOnChanges() {
        this.loadOptions();
    }
    loadOptions() {
        this.options = this.categories.map(c => {
            return {
                id: c.id,
                name: c.name,
                selected: this.selectedIds != null && this.selectedIds.findIndex(s => s == c.id) != -1
            };
        });
    }
    selectAll() {
        var _a;
        this.options = (_a = this.options) === null || _a === void 0 ? void 0 : _a.map(o => {
            return Object.assign(Object.assign({}, o), { selected: true });
        });
    }
    clear() {
        var _a;
        this.options = (_a = this.options) === null || _a === void 0 ? void 0 : _a.map(o => {
            return Object.assign(Object.assign({}, o), { selected: false });
        });
    }
    onUpdate() {
        var _a;
        const optionsSelected = (_a = this.options) === null || _a === void 0 ? void 0 : _a.filter(c => c.selected);
        if ((optionsSelected === null || optionsSelected === void 0 ? void 0 : optionsSelected.length) == 0) {
            this.toastService.show({
                content: 'At least one category must be selected!',
                icon: 'error'
            });
        }
        else {
            this.onUpdateTrigger.emit(optionsSelected);
        }
    }
    onClose() {
        this.onCloseTrigger.emit();
    }
}
Carrier411CategoryFiltersComponent.ɵfac = function Carrier411CategoryFiltersComponent_Factory(t) { return new (t || Carrier411CategoryFiltersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_0__.ToastService)); };
Carrier411CategoryFiltersComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: Carrier411CategoryFiltersComponent, selectors: [["carrier411-category-filters"]], inputs: { categories: "categories", selectedIds: "selectedIds" }, outputs: { onUpdateTrigger: "onUpdate", onCloseTrigger: "onClose" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]], decls: 23, vars: 1, consts: [[1, "category-filters-container", "container-fluid", "pt-3"], ["title", "Category Filters", 3, "onClose"], [1, "content"], [1, "align-middle-space-between", "pt-4", "pb-2"], [1, "fw-bold"], [1, "actions"], [1, "text-uppercase", "action", 3, "click"], [1, "pl-2", "pr-2"], [1, "row", "options-container", "pt-1"], ["cssClass", "pb-3", 3, "label", "checked", "checkedChange", 4, "ngFor", "ngForOf"], [1, "row", "pt-4"], [1, "col-md-4"], ["type", "button", "ejs-button", "", 1, "e-dark", "e-flat", "w-100", 3, "click"], [1, "col-md-4", "offset-md-4"], ["type", "button", "ejs-button", "", 1, "e-success", "w-100", 3, "click"], ["cssClass", "pb-3", 3, "label", "checked", "checkedChange"]], template: function Carrier411CategoryFiltersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "modal-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onClose", function Carrier411CategoryFiltersComponent_Template_modal_header_onClose_1_listener() { return ctx.onClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2)(3, "div", 3)(4, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5)(7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function Carrier411CategoryFiltersComponent_Template_span_click_7_listener() { return ctx.selectAll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Select All");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, " | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function Carrier411CategoryFiltersComponent_Template_span_click_11_listener() { return ctx.clear(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Clear");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, Carrier411CategoryFiltersComponent_ejs_checkbox_15_Template, 1, 2, "ejs-checkbox", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 10)(17, "div", 11)(18, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function Carrier411CategoryFiltersComponent_Template_button_click_18_listener() { return ctx.onClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 13)(21, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function Carrier411CategoryFiltersComponent_Template_button_click_21_listener() { return ctx.onUpdate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Update");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.options);
    } }, directives: [_shared_components_modal_header_modal_header_component__WEBPACK_IMPORTED_MODULE_1__.ModalHeaderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _syncfusion_ej2_angular_buttons__WEBPACK_IMPORTED_MODULE_4__.CheckBoxComponent, _syncfusion_ej2_angular_buttons__WEBPACK_IMPORTED_MODULE_4__.ButtonComponent], styles: [".category-filters-container[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%] {\n  color: var(--graymedium);\n  font-size: 12px;\n}\n.category-filters-container[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.category-filters-container[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n  margin-bottom: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcnJpZXI0MTEtY2F0ZWdvcnktZmlsdGVycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLHdCQUFBO0VBQ0EsZUFBQTtBQUFKO0FBRUk7RUFDRSxlQUFBO0FBQU47QUFJRTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUFGSiIsImZpbGUiOiJjYXJyaWVyNDExLWNhdGVnb3J5LWZpbHRlcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2F0ZWdvcnktZmlsdGVycy1jb250YWluZXIge1xyXG4gIC5hY3Rpb25zIHtcclxuICAgIGNvbG9yOiB2YXIoLS1ncmF5bWVkaXVtKTtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuXHJcbiAgICAuYWN0aW9uIHtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaHIge1xyXG4gICAgbWFyZ2luLXRvcDogMC41cmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 22541:
/*!****************************************************************************************************!*\
  !*** ./src/app/carrier411/front-end/components/carrier411-landing/carrier411-landing.component.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Carrier411LandingComponent": () => (/* binding */ Carrier411LandingComponent)
/* harmony export */ });
/* harmony import */ var _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/pro-regular-svg-icons */ 26966);
/* harmony import */ var src_app_shared_constants_application_urls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/constants/application-urls */ 85561);
/* harmony import */ var src_app_shared_constants_tools_list_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/constants/tools-list.enum */ 99485);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_core_services_result_handler_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/result.handler.service */ 32464);
/* harmony import */ var _shared_components_tool_hidden_warning_tool_hidden_warning_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/tool-hidden-warning/tool-hidden-warning.component */ 37840);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _carrier411_searchbar_carrier411_searchbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../carrier411-searchbar/carrier411-searchbar.component */ 9768);
/* harmony import */ var _shared_components_expandable_content_expandable_content_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/components/expandable-content/expandable-content.component */ 50483);
/* harmony import */ var _shared_components_category_icon_category_icon_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/category-icon/category-icon.component */ 33375);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 19397);












function Carrier411LandingComponent_label_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.toolMessages.welcomeMessage);
} }
const _c0 = function (a0) { return [a0]; };
const _c1 = function (a0) { return { categoryIds: a0 }; };
const _c2 = function (a0) { return { categories: a0 }; };
function Carrier411LandingComponent_li_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "li", 23)(1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "category-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "fa-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r5 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", ctx_r1.BrowseCarrier411Url)("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](10, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](8, _c0, category_r5.id)))("state", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](12, _c2, ctx_r1.categories))("skipLocationChange", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("category", category_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](category_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("icon", ctx_r1.faChevronRight)("fixedWidth", true);
} }
function Carrier411LandingComponent_label_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "No categories found.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function Carrier411LandingComponent_label_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r3.toolMessages == null ? null : ctx_r3.toolMessages.favoriteMessage);
} }
function Carrier411LandingComponent_expandable_content_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "expandable-content", 30)(1, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Announcements");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 12)(4, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "fa-icon", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "Message from Warner");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](8, "label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("icon", ctx_r4.faMegaphone)("fixedWidth", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("innerHtml", ctx_r4.toolMessages.announcementMessage, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeHtml"]);
} }
class Carrier411LandingComponent {
    constructor(route, resultHandlerService) {
        this.route = route;
        this.resultHandlerService = resultHandlerService;
        this.Carrier411Id = src_app_shared_constants_tools_list_enum__WEBPACK_IMPORTED_MODULE_1__.ToolsList.Carrier411;
        this.BrowseCarrier411Url = src_app_shared_constants_application_urls__WEBPACK_IMPORTED_MODULE_0__.ApplicationUrls.Carrier411.Browse.path;
        this.faChevronRight = _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_8__.faChevronRight;
        this.faMegaphone = _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_8__.faMegaphone;
        this.toolMessages = this.handleResolverData('messages');
        this.categories = this.handleResolverData('categories');
    }
    ngOnInit() {
    }
    handleResolverData(key) {
        const data = this.route.snapshot.data[key];
        if (data.isSuccess) {
            return data.value;
        }
        else {
            this.resultHandlerService.handle(data);
            return null;
        }
    }
}
Carrier411LandingComponent.ɵfac = function Carrier411LandingComponent_Factory(t) { return new (t || Carrier411LandingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_core_services_result_handler_service__WEBPACK_IMPORTED_MODULE_2__.ResultHandlerService)); };
Carrier411LandingComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: Carrier411LandingComponent, selectors: [["app-carrier411-landing"]], decls: 28, vars: 7, consts: [[1, "container-fluid", "carrier-411-container"], [3, "toolId"], [1, "e-card", "welcome-card"], [1, "e-header"], [1, "warner-color"], ["class", "text-break", 4, "ngIf"], [1, "e-card-content"], [3, "categories"], [1, "row", "pt-5"], ["height", "900", 1, "col-sm-12", "col-md-4", "d-block", "pb-4", "browse-category"], ["header", "", 1, "favorites-header", "pt-2", "pb-2"], [1, "fw-bold", "text-uppercase"], ["body", ""], [1, "categories-list"], ["class", "align-middle-space-between", 3, "routerLink", "queryParams", "state", "skipLocationChange", 4, "ngFor", "ngForOf"], ["class", "default-text", 4, "ngIf"], [1, "col-sm-12", "col-md-8"], ["height", "500", 1, "my-favorites", "d-block", "pb-4"], ["header", "", 1, "align-middle-space-between", "pt-2", "pb-2"], [1, "text-uppercase", "gray-action"], ["class", "message default-text text-break", 4, "ngIf"], ["class", "announcements", "height", "110", 4, "ngIf"], [1, "text-break"], [1, "align-middle-space-between", 3, "routerLink", "queryParams", "state", "skipLocationChange"], [1, "category-data", "align-middle-space-between", "pr-2"], [1, "mr-3", 3, "category"], [1, "default-text", "text-break"], [1, "chevron-icon", 3, "icon", "fixedWidth"], [1, "default-text"], [1, "message", "default-text", "text-break"], ["height", "110", 1, "announcements"], ["header", "", 1, "fw-bold", "text-uppercase", "pb-2"], [1, "align-middle", "title", "pb-3"], [1, "icon", 3, "icon", "fixedWidth"], [1, "fw-bold"], [1, "message", "default-text", "text-break", 3, "innerHtml"]], template: function Carrier411LandingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "tool-hidden-warning", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 2)(3, "div", 3)(4, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Welcome to Carrier 411");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, Carrier411LandingComponent_label_6_Template, 2, 1, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](8, "carrier411-searchbar", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 8)(10, "expandable-content", 9)(11, "div", 10)(12, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "Browse by category");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 12)(15, "ul", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](16, Carrier411LandingComponent_li_16_Template, 6, 14, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](17, Carrier411LandingComponent_label_17_Template, 2, 0, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 16)(19, "expandable-content", 17)(20, "div", 18)(21, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22, "My favorites");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24, "Manage");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](26, Carrier411LandingComponent_label_26_Template, 2, 1, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](27, Carrier411LandingComponent_expandable_content_27_Template, 9, 3, "expandable-content", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("toolId", ctx.Carrier411Id);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.toolMessages == null ? null : ctx.toolMessages.welcomeMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("categories", ctx.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.categories == null || ctx.categories.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.toolMessages == null ? null : ctx.toolMessages.favoriteMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx.toolMessages == null ? null : ctx.toolMessages.announcementMessage) && (ctx.toolMessages == null ? null : ctx.toolMessages.announcementMessage) != "");
    } }, directives: [_shared_components_tool_hidden_warning_tool_hidden_warning_component__WEBPACK_IMPORTED_MODULE_3__.ToolHiddenWarningComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _carrier411_searchbar_carrier411_searchbar_component__WEBPACK_IMPORTED_MODULE_4__.Carrier411SearchbarComponent, _shared_components_expandable_content_expandable_content_component__WEBPACK_IMPORTED_MODULE_5__.ExpandableContentComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLink, _shared_components_category_icon_category_icon_component__WEBPACK_IMPORTED_MODULE_6__.CategoryIconComponent, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__.FaIconComponent], styles: [".carrier-411-container .welcome-card {\n  margin-top: 1rem;\n  padding: 2rem 1.5rem;\n  background-color: var(--springtime-rain);\n}\n.carrier-411-container .welcome-card p {\n  color: var(--warnerblue);\n  word-break: break-word;\n  font-weight: bold;\n  font-size: 40px;\n}\n.carrier-411-container .welcome-card label {\n  line-height: normal;\n}\n.carrier-411-container .browse-category .categories-list {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.carrier-411-container .browse-category .categories-list li {\n  border-bottom: 1px solid var(--border-color);\n  cursor: pointer;\n  line-height: 15px;\n  padding: 0.5rem 0;\n}\n.carrier-411-container .browse-category .categories-list li:hover {\n  background-color: var(--white-smoke);\n}\n.carrier-411-container .browse-category .categories-list li * {\n  cursor: pointer;\n}\n.carrier-411-container .browse-category .categories-list li .category-data label {\n  line-height: 15px;\n}\n.carrier-411-container .browse-category .categories-list li .chevron-icon {\n  font-size: 12px;\n  color: var(--graylight);\n}\n.carrier-411-container .announcements .title {\n  justify-content: flex-start;\n  gap: 1em;\n}\n.carrier-411-container .announcements .icon {\n  font-size: 25px;\n  color: var(--sunflower);\n  background-color: var(--yellow-transparent);\n  padding: 0.25rem 0.5rem;\n  border-radius: 10px;\n}\n.carrier-411-container .announcements .message p {\n  font-size: 14px;\n  margin: 0;\n  line-height: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcnJpZXI0MTEtbGFuZGluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSx3Q0FBQTtBQUFKO0FBRUk7RUFDRSx3QkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBQU47QUFHSTtFQUNFLG1CQUFBO0FBRE47QUFNSTtFQUNFLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUFKTjtBQU1NO0VBQ0UsNENBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQUpSO0FBTVE7RUFDRSxvQ0FBQTtBQUpWO0FBT1E7RUFDRSxlQUFBO0FBTFY7QUFTVTtFQUNFLGlCQUFBO0FBUFo7QUFXUTtFQUNFLGVBQUE7RUFDQSx1QkFBQTtBQVRWO0FBZ0JJO0VBQ0UsMkJBQUE7RUFDQSxRQUFBO0FBZE47QUFpQkk7RUFDRSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSwyQ0FBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFmTjtBQW1CTTtFQUNFLGVBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7QUFqQlIiLCJmaWxlIjoiY2FycmllcjQxMS1sYW5kaW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcnJpZXItNDExLWNvbnRhaW5lciB7XHJcbiAgLndlbGNvbWUtY2FyZCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgcGFkZGluZzogMnJlbSAxLjVyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zcHJpbmd0aW1lLXJhaW4pO1xyXG5cclxuICAgIHAge1xyXG4gICAgICBjb2xvcjogdmFyKC0td2FybmVyYmx1ZSk7XHJcbiAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgbGFiZWwge1xyXG4gICAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmJyb3dzZS1jYXRlZ29yeSB7XHJcbiAgICAuY2F0ZWdvcmllcy1saXN0IHtcclxuICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgICAgbWFyZ2luOiAwO1xyXG5cclxuICAgICAgbGkge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTVweDtcclxuICAgICAgICBwYWRkaW5nOiAwLjVyZW0gMDtcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZS1zbW9rZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAqIHtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jYXRlZ29yeS1kYXRhIHtcclxuICAgICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2hldnJvbi1pY29uIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1ncmF5bGlnaHQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmFubm91bmNlbWVudHMge1xyXG4gICAgLnRpdGxlIHtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICBnYXA6IDFlbTtcclxuICAgIH1cclxuXHJcbiAgICAuaWNvbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgY29sb3I6IHZhcigtLXN1bmZsb3dlcik7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXllbGxvdy10cmFuc3BhcmVudCk7XHJcbiAgICAgIHBhZGRpbmc6IDAuMjVyZW0gMC41cmVtO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5tZXNzYWdlIHtcclxuICAgICAgcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjVweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"], encapsulation: 2 });


/***/ }),

/***/ 83664:
/*!**************************************************************************************************!*\
  !*** ./src/app/carrier411/front-end/components/carrier411-navbar/carrier411-navbar.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Carrier411NavbarComponent": () => (/* binding */ Carrier411NavbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/pro-regular-svg-icons */ 26966);
/* harmony import */ var src_app_shared_constants_application_urls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/constants/application-urls */ 85561);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 19397);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _syncfusion_ej2_angular_buttons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @syncfusion/ej2-angular-buttons */ 78218);








function Carrier411NavbarComponent_ul_4_li_1_fa_icon_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "fa-icon", 11);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx_r3.faChevronDown);
} }
function Carrier411NavbarComponent_ul_4_li_1_fa_icon_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "fa-icon", 11);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx_r4.faChevronRight);
} }
function Carrier411NavbarComponent_ul_4_li_1_ul_6_li_8_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", null, 17)(2, "ejs-checkbox", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function Carrier411NavbarComponent_ul_4_li_1_ul_6_li_8_Template_ejs_checkbox_change_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r9.onSubCategoryChange(); })("checkedChange", function Carrier411NavbarComponent_ul_4_li_1_ul_6_li_8_Template_ejs_checkbox_checkedChange_2_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const subCategory_r7 = restoredCtx.$implicit; return subCategory_r7.selected = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const subCategory_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("label", subCategory_r7.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", subCategory_r7.selected);
} }
function Carrier411NavbarComponent_ul_4_li_1_ul_6_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 12)(1, "li", 13)(2, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function Carrier411NavbarComponent_ul_4_li_1_ul_6_Template_span_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const category_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r12.selectAll(category_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Select All");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " | ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function Carrier411NavbarComponent_ul_4_li_1_ul_6_Template_span_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const category_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r15.clear(category_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, Carrier411NavbarComponent_ul_4_li_1_ul_6_li_8_Template, 3, 2, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !category_r2.expanded);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", category_r2.subCategories);
} }
function Carrier411NavbarComponent_ul_4_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 6)(1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function Carrier411NavbarComponent_ul_4_li_1_Template_div_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19); const category_r2 = restoredCtx.$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r18.toggleCategory(category_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, Carrier411NavbarComponent_ul_4_li_1_fa_icon_2_Template, 1, 1, "fa-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, Carrier411NavbarComponent_ul_4_li_1_fa_icon_3_Template, 1, 1, "fa-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, Carrier411NavbarComponent_ul_4_li_1_ul_6_Template, 9, 2, "ul", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", category_r2.expanded);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !category_r2.expanded);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](category_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", category_r2.subCategories != null && category_r2.subCategories.length);
} }
function Carrier411NavbarComponent_ul_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, Carrier411NavbarComponent_ul_4_li_1_Template, 7, 4, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !ctx_r0.expanded);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.items);
} }
class Carrier411NavbarComponent {
    constructor(route) {
        this.route = route;
        this.Carrier411URL = src_app_shared_constants_application_urls__WEBPACK_IMPORTED_MODULE_0__.ApplicationUrls.Carrier411.path;
        this.faChevronDown = _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faChevronDown;
        this.faChevronRight = _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faChevronRight;
        this.faSliders = _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faSliders;
        this.expanded = true;
        this.categories = [];
        this.subCategories = [];
        this.onExpandMenuTrigger = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.onExpandCategoryTrigger = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.onSubCategoryChangeTrigger = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.items = [];
        this.categoryIds = [];
    }
    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            this.categoryIds = params['categoryIds'].toString().split(',').map((c) => Number(c));
            this.setupItems();
        });
    }
    ngOnChanges() {
        if (this.items && this.items.length) {
            this.items
                .filter(c => c.subCategories == null || c.subCategories.length == 0)
                .forEach(c => {
                c.subCategories = this.filterSubCategories(c.id);
            });
        }
        else {
            this.items = this.categories.map(c => {
                return Object.assign(Object.assign({}, c), { expanded: this.categoryIds.includes(c.id), subCategories: this.filterSubCategories(c.id) });
            });
        }
    }
    onExpand() {
        this.onExpandMenuTrigger.emit();
    }
    toggleCategory(category) {
        category.expanded = !category.expanded;
        if (category.expanded) {
            this.onExpandCategoryTrigger.emit(category.id);
        }
    }
    selectAll(category) {
        let changed = false;
        category.subCategories.filter(sc => !sc.selected).forEach((sc) => {
            changed = true;
            sc.selected = true;
        });
        if (changed) {
            this.onSubCategoryChange();
        }
    }
    clear(category) {
        let changed = false;
        category.subCategories.filter(sc => sc.selected).forEach((sc) => {
            changed = true;
            sc.selected = false;
        });
        if (changed) {
            this.onSubCategoryChange();
        }
    }
    onSubCategoryChange() {
        const subCategoryIds = this.items.flatMap(c => c.subCategories.filter(sc => sc.selected).map(sc => sc.id));
        this.onSubCategoryChangeTrigger.emit(subCategoryIds);
    }
    filterSubCategories(categoryId) {
        return this.subCategories
            .filter(sc => sc.category.id == categoryId)
            .sort(sc => sc.order)
            .map(sc => {
            return {
                id: sc.id,
                name: sc.name,
                selected: false
            };
        });
    }
    setupItems() {
        this.items.filter(i => this.categoryIds.includes(i.id)).forEach(i => {
            i.expanded = true;
        });
    }
}
Carrier411NavbarComponent.ɵfac = function Carrier411NavbarComponent_Factory(t) { return new (t || Carrier411NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute)); };
Carrier411NavbarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: Carrier411NavbarComponent, selectors: [["carrier411-navbar"]], inputs: { expanded: "expanded", categories: "categories", subCategories: "subCategories" }, outputs: { onExpandMenuTrigger: "onExpandMenu", onExpandCategoryTrigger: "onExpandCategory", onSubCategoryChangeTrigger: "onSubCategoryChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 5, vars: 5, consts: [[1, "carrier411-nav-bar", "p-3", "w-100", "default-text"], ["role", "button", 1, "sliders-icon", 3, "icon", "hidden", "click"], ["role", "button", 1, "title", "mb-1", "fw-bold", "text-uppercase", "w-100", 3, "routerLink", "hidden"], ["class", "category-tree pt-2", 3, "hidden", 4, "ngIf"], [1, "category-tree", "pt-2", 3, "hidden"], ["class", "py-1", 4, "ngFor", "ngForOf"], [1, "py-1"], ["role", "button", 1, "level-wrapper", 3, "click"], ["class", "toggle-icon", "role", "button", 3, "icon", 4, "ngIf"], ["role", "button", 1, "mr-2", "text-break"], ["class", "sub-categories-tree", 3, "hidden", 4, "ngIf"], ["role", "button", 1, "toggle-icon", 3, "icon"], [1, "sub-categories-tree", 3, "hidden"], [1, "actions", "py-2"], ["role", "button", 1, "text-uppercase", "action", "fw-bold", 3, "click"], [1, "pl-2", "pr-2"], [4, "ngFor", "ngForOf"], ["liItem", ""], ["cssClass", "text-break", 3, "label", "checked", "change", "checkedChange"]], template: function Carrier411NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "fa-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function Carrier411NavbarComponent_Template_fa_icon_click_1_listener() { return ctx.onExpand(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Carrier 411");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, Carrier411NavbarComponent_ul_4_Template, 2, 2, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.faSliders)("hidden", ctx.expanded);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx.Carrier411URL)("hidden", !ctx.expanded);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.items != null && ctx.items.length);
    } }, directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FaIconComponent, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _syncfusion_ej2_angular_buttons__WEBPACK_IMPORTED_MODULE_6__.CheckBoxComponent], styles: [".carrier411-nav-bar[_ngcontent-%COMP%] {\n  background-color: var(--springtime-rain);\n  border-radius: 15px;\n  min-height: calc(100vh - 110px);\n}\n.carrier411-nav-bar[_ngcontent-%COMP%]   .sliders-icon[_ngcontent-%COMP%] {\n  font-size: 28px;\n  color: var(--warnerblue);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.carrier411-nav-bar[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.carrier411-nav-bar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding-left: 0;\n}\n.carrier411-nav-bar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .toggle-icon[_ngcontent-%COMP%] {\n  font-size: 10px;\n  width: 25px;\n  padding: 0.5rem;\n  height: 30px;\n}\n.carrier411-nav-bar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .level-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.carrier411-nav-bar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .sub-categories-tree[_ngcontent-%COMP%] {\n  padding-left: 15px;\n  margin: 0.5em 1.5rem;\n  border-left: 1px solid var(--warnerblue);\n}\n.carrier411-nav-bar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .sub-categories-tree[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%] {\n  color: var(--warnerblue);\n  font-size: 12px;\n}\n.carrier411-nav-bar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .sub-categories-tree[_ngcontent-%COMP%]   .e-checkbox-wrapper[_ngcontent-%COMP%]   .e-frame.e-check[_ngcontent-%COMP%], .carrier411-nav-bar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .sub-categories-tree[_ngcontent-%COMP%]   .e-checkbox-wrapper[_ngcontent-%COMP%]   .e-checkbox[_ngcontent-%COMP%]:active    + .e-frame.e-check[_ngcontent-%COMP%], .carrier411-nav-bar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .sub-categories-tree[_ngcontent-%COMP%]   .e-checkbox-wrapper[_ngcontent-%COMP%]   .e-checkbox[_ngcontent-%COMP%]:focus    + .e-frame.e-check[_ngcontent-%COMP%] {\n  background-color: var(--warnerblue);\n  border-color: var(--warnerblue);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcnJpZXI0MTEtbmF2YmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0NBQUE7RUFDQSxtQkFBQTtFQUNBLCtCQUFBO0FBQ0Y7QUFDRTtFQUNFLGVBQUE7RUFDQSx3QkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQ0o7QUFFRTtFQUNFLDBCQUFBO0FBQUo7QUFHRTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQURKO0FBR0k7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBRE47QUFJSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQUZOO0FBS0k7RUFDRSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esd0NBQUE7QUFITjtBQUtNO0VBQ0Usd0JBQUE7RUFDQSxlQUFBO0FBSFI7QUFNTTs7O0VBR0UsbUNBQUE7RUFDQSwrQkFBQTtBQUpSIiwiZmlsZSI6ImNhcnJpZXI0MTEtbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcnJpZXI0MTEtbmF2LWJhciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3ByaW5ndGltZS1yYWluKTtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxMTBweCk7XHJcblxyXG4gIC5zbGlkZXJzLWljb24ge1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgY29sb3I6IHZhcigtLXdhcm5lcmJsdWUpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC50aXRsZTpob3ZlciB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICB9XHJcblxyXG4gIHVsIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcblxyXG4gICAgLnRvZ2dsZS1pY29uIHtcclxuICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICB3aWR0aDogMjVweDtcclxuICAgICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmxldmVsLXdyYXBwZXIge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLy8gU3ViQ2F0ZWdvcnlcclxuICAgIC5zdWItY2F0ZWdvcmllcy10cmVlIHtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgICBtYXJnaW46IDAuNWVtIDEuNXJlbTtcclxuICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB2YXIoLS13YXJuZXJibHVlKTtcclxuXHJcbiAgICAgIC5hY3Rpb25zIHtcclxuICAgICAgICBjb2xvcjogdmFyKC0td2FybmVyYmx1ZSk7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuZS1jaGVja2JveC13cmFwcGVyIC5lLWZyYW1lLmUtY2hlY2ssXHJcbiAgICAgIC5lLWNoZWNrYm94LXdyYXBwZXIgLmUtY2hlY2tib3g6YWN0aXZlICsgLmUtZnJhbWUuZS1jaGVjayxcclxuICAgICAgLmUtY2hlY2tib3gtd3JhcHBlciAuZS1jaGVja2JveDpmb2N1cyArIC5lLWZyYW1lLmUtY2hlY2sge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdhcm5lcmJsdWUpO1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0td2FybmVyYmx1ZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 9768:
/*!********************************************************************************************************!*\
  !*** ./src/app/carrier411/front-end/components/carrier411-searchbar/carrier411-searchbar.component.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Carrier411SearchbarComponent": () => (/* binding */ Carrier411SearchbarComponent)
/* harmony export */ });
/* harmony import */ var _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/pro-regular-svg-icons */ 26966);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _syncfusion_ej2_angular_popups__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-angular-popups */ 58917);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 19397);
/* harmony import */ var _syncfusion_ej2_angular_inputs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @syncfusion/ej2-angular-inputs */ 53691);
/* harmony import */ var _carrier411_category_filters_carrier411_category_filters_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../carrier411-category-filters/carrier411-category-filters.component */ 45317);






const _c0 = ["categoriesToolTip"];
const _c1 = ["categoryFilters"];
const _c2 = ["ejCategoryFiltersDialog"];
class Carrier411SearchbarComponent {
    constructor() {
        this.faSliders = _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faSliders;
        this.selectedCategoriesText = 'All Categories';
        this.selectedCategoriesIds = [];
    }
    ngOnChanges() {
        this.selectedCategoriesIds = this.categories.map(c => c.id);
    }
    beforeOpenTooltip(args) {
        if (this.categoriesToolTip.content == undefined ||
            this.categoriesToolTip.content == null) {
            args.cancel = true;
        }
    }
    onOpenModal(args) {
        //Preventing the default dialog focus
        args.preventFocus = true;
    }
    onCloseModal(modal) {
        modal.hide();
    }
    onOverlayClick() {
        var _a;
        (_a = this.categoryFiltersDialog) === null || _a === void 0 ? void 0 : _a.hide();
    }
    openCategoryFilters() {
        this.categoryFilters.loadOptions();
        this.categoryFiltersDialog.show();
    }
    onUpdateSelectedCategories(categories) {
        this.selectedCategoriesIds = categories.map(c => c.id);
        this.selectedCategoriesText = this.getSelectedCategoryText();
        this.categoryFiltersDialog.hide();
    }
    getSelectedCategoriesDescription() {
        if (this.selectedCategoriesIds && this.selectedCategoriesIds.length &&
            this.selectedCategoriesIds.length != this.categories.length) {
            let content = '<div>';
            content += this.categories.filter(c => this.selectedCategoriesIds.includes(c.id)).map(c => {
                return c.name;
            }).join('<br />');
            content += '</div>';
            return content;
        }
        return '';
    }
    getSelectedCategoryText() {
        if (this.selectedCategoriesIds.length == this.categories.length) {
            return 'All Categories';
        }
        if (this.selectedCategoriesIds.length == 1) {
            return '1 category';
        }
        return `${this.selectedCategoriesIds.length} categories`;
    }
}
Carrier411SearchbarComponent.ɵfac = function Carrier411SearchbarComponent_Factory(t) { return new (t || Carrier411SearchbarComponent)(); };
Carrier411SearchbarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: Carrier411SearchbarComponent, selectors: [["carrier411-searchbar"]], viewQuery: function Carrier411SearchbarComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c2, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.categoriesToolTip = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.categoryFilters = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.categoryFiltersDialog = _t.first);
    } }, inputs: { categories: "categories" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]], decls: 15, vars: 7, consts: [[1, "search-bar-container", "row"], ["width", "auto", 1, "search-categories", "align-middle", "col-md-2", "col-sm-12", "p-0", 3, "content", "beforeOpen"], ["categoriesToolTip", ""], [1, "align-middle", "px-2", "w-100", 3, "click"], [1, "icon", 3, "icon", "fixedWidth"], ["placeholder", "Search for a specific term...", "showClearButton", "true", "autoComplete", "off", 1, "col-md", "col-sm-12", "search-input"], [1, "col-md-2", "col-sm-12", "search-button"], [1, "d-none"], ["isModal", "true", "width", "500", 3, "visible", "open"], ["ejCategoryFiltersDialog", ""], [3, "categories", "selectedIds", "onUpdate", "onClose"], ["categoryFilters", ""]], template: function Carrier411SearchbarComponent_Template(rf, ctx) { if (rf & 1) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "ejs-tooltip", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("beforeOpen", function Carrier411SearchbarComponent_Template_ejs_tooltip_beforeOpen_1_listener($event) { return ctx.beforeOpenTooltip($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function Carrier411SearchbarComponent_Template_div_click_3_listener() { return ctx.openCategoryFilters(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "fa-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "ejs-textbox", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 7)(11, "ejs-dialog", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("open", function Carrier411SearchbarComponent_Template_ejs_dialog_open_11_listener($event) { return ctx.onOpenModal($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "carrier411-category-filters", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onUpdate", function Carrier411SearchbarComponent_Template_carrier411_category_filters_onUpdate_13_listener($event) { return ctx.onUpdateSelectedCategories($event); })("onClose", function Carrier411SearchbarComponent_Template_carrier411_category_filters_onClose_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](12); return ctx.onCloseModal(_r1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("content", ctx.getSelectedCategoriesDescription());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.selectedCategoriesText);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx.faSliders)("fixedWidth", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("visible", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("categories", ctx.categories)("selectedIds", ctx.selectedCategoriesIds);
    } }, directives: [_syncfusion_ej2_angular_popups__WEBPACK_IMPORTED_MODULE_3__.TooltipComponent, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FaIconComponent, _syncfusion_ej2_angular_inputs__WEBPACK_IMPORTED_MODULE_5__.TextBoxComponent, _syncfusion_ej2_angular_popups__WEBPACK_IMPORTED_MODULE_3__.DialogComponent, _carrier411_category_filters_carrier411_category_filters_component__WEBPACK_IMPORTED_MODULE_0__.Carrier411CategoryFiltersComponent], styles: [".search-bar-container {\n  min-height: 50px;\n  border: 1px solid var(--warnerblue);\n  border-radius: 10px;\n}\n.search-bar-container * {\n  border: none;\n}\n.search-bar-container .search-categories {\n  background-color: var(--white);\n  cursor: pointer;\n  width: 100%;\n  font-size: 14px;\n}\n.search-bar-container .search-categories * {\n  cursor: pointer;\n  justify-content: center;\n  gap: 1rem;\n}\n@media (max-width: 992px) {\n  .search-bar-container .search-categories * {\n    justify-content: space-between;\n  }\n}\n.search-bar-container .search-categories .icon {\n  font-size: 18px;\n  color: var(--warnerblue);\n}\n@media (min-width: 993px) {\n  .search-bar-container .search-categories {\n    max-width: 10rem;\n    border-right: 1px solid var(--warnerblue);\n    border-radius: 10px 0 0 10px;\n  }\n}\n@media (max-width: 992px) {\n  .search-bar-container .search-categories {\n    height: 40px;\n    max-width: 100%;\n    border-radius: 10px 10px 0 0;\n    border-bottom: 1px solid var(--warnerblue);\n  }\n}\n.search-bar-container ejs-textbox.search-input {\n  padding: 0;\n}\n.search-bar-container ejs-textbox.search-input > span,\n.search-bar-container ejs-textbox.search-input input.search-input {\n  height: 100%;\n  width: 100%;\n  padding: 0 0.5rem;\n  border-radius: 0;\n}\n@media (max-width: 992px) {\n  .search-bar-container ejs-textbox.search-input > span,\n.search-bar-container ejs-textbox.search-input input.search-input {\n    height: 40px;\n  }\n}\n.search-bar-container .search-button {\n  color: var(--white);\n  background-color: var(--warnerblue);\n  min-width: 10rem;\n  border-radius: 0 8px 8px 0;\n}\n@media (max-width: 992px) {\n  .search-bar-container .search-button {\n    border-radius: 0 0 8px 8px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcnJpZXI0MTEtc2VhcmNoYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxtQ0FBQTtFQUNBLG1CQUFBO0FBQ0Y7QUFDRTtFQUNFLFlBQUE7QUFDSjtBQUVFO0VBQ0UsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFBSjtBQUVJO0VBQ0UsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtBQUFOO0FBRU07RUFMRjtJQU1JLDhCQUFBO0VBQ047QUFDRjtBQUVJO0VBQ0UsZUFBQTtFQUNBLHdCQUFBO0FBQU47QUFHSTtFQXJCRjtJQXNCSSxnQkFBQTtJQUNBLHlDQUFBO0lBQ0EsNEJBQUE7RUFBSjtBQUNGO0FBRUk7RUEzQkY7SUE0QkksWUFBQTtJQUNBLGVBQUE7SUFDQSw0QkFBQTtJQUNBLDBDQUFBO0VBQ0o7QUFDRjtBQUVFO0VBQ0UsVUFBQTtBQUFKO0FBRUk7O0VBRUUsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBQU47QUFFTTtFQVBGOztJQVFJLFlBQUE7RUFFTjtBQUNGO0FBRUU7RUFDRSxtQkFBQTtFQUNBLG1DQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtBQUFKO0FBRUk7RUFORjtJQU9JLDBCQUFBO0VBQ0o7QUFDRiIsImZpbGUiOiJjYXJyaWVyNDExLXNlYXJjaGJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWFyY2gtYmFyLWNvbnRhaW5lciB7XHJcbiAgbWluLWhlaWdodDogNTBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS13YXJuZXJibHVlKTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5cclxuICAqIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICB9XHJcblxyXG4gIC5zZWFyY2gtY2F0ZWdvcmllcyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuXHJcbiAgICAmICoge1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBnYXA6IDFyZW07XHJcblxyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuaWNvbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgY29sb3I6IHZhcigtLXdhcm5lcmJsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTNweCkge1xyXG4gICAgICBtYXgtd2lkdGg6IDEwcmVtO1xyXG4gICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS13YXJuZXJibHVlKTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweCAwIDAgMTBweDtcclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwIDA7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS13YXJuZXJibHVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGVqcy10ZXh0Ym94LnNlYXJjaC1pbnB1dCB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG5cclxuICAgID4gc3BhbixcclxuICAgIGlucHV0LnNlYXJjaC1pbnB1dCB7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIHBhZGRpbmc6IDAgMC41cmVtO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG5cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuc2VhcmNoLWJ1dHRvbiB7XHJcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2FybmVyYmx1ZSk7XHJcbiAgICBtaW4td2lkdGg6IDEwcmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCA4cHggOHB4IDA7XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAgMCA4cHggOHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"], encapsulation: 2 });


/***/ }),

/***/ 82872:
/*!****************************************************************************!*\
  !*** ./src/app/carrier411/front-end/constants/carrier411-api.constants.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Carrier411ApiEndpoints": () => (/* binding */ Carrier411ApiEndpoints)
/* harmony export */ });
let carrier411ApiEndpoints = {
    /* Categories */
    GetCategories: () => '/carrier411/categories',
    /* SubCategories */
    GetSubCategories: () => '/carrier411/subcategories',
    /* Questions */
    /* Answers */
    /* Subcategories */
};
const Carrier411ApiEndpoints = carrier411ApiEndpoints;


/***/ }),

/***/ 89445:
/*!****************************************************************************!*\
  !*** ./src/app/carrier411/front-end/resolvers/categories-list.resolver.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoriesListResolver": () => (/* binding */ CategoriesListResolver)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _services_carrier411_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/carrier411.service */ 82383);



class CategoriesListResolver {
    constructor(router, carrier411Service) {
        this.router = router;
        this.carrier411Service = carrier411Service;
    }
    resolve(route, state) {
        var _a, _b;
        const stateData = (_b = (_a = this.router) === null || _a === void 0 ? void 0 : _a.getCurrentNavigation()) === null || _b === void 0 ? void 0 : _b.extras.state;
        const hasArrayInHistoryState = stateData != null &&
            typeof stateData === 'object' &&
            stateData.categories != null &&
            stateData.categories instanceof Array;
        if (hasArrayInHistoryState) {
            return {
                isSuccess: true,
                value: stateData.categories
            };
        }
        return this.carrier411Service.getCategories();
    }
}
CategoriesListResolver.ɵfac = function CategoriesListResolver_Factory(t) { return new (t || CategoriesListResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_carrier411_service__WEBPACK_IMPORTED_MODULE_0__.Carrier411Service)); };
CategoriesListResolver.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CategoriesListResolver, factory: CategoriesListResolver.ɵfac });


/***/ }),

/***/ 27020:
/*!********************************************************************************!*\
  !*** ./src/app/carrier411/front-end/resolvers/sub-categories-list.resolver.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubCategoriesListResolver": () => (/* binding */ SubCategoriesListResolver)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_carrier411_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/carrier411.service */ 82383);


class SubCategoriesListResolver {
    constructor(carrier411Service) {
        this.carrier411Service = carrier411Service;
    }
    resolve(route, state) {
        var _a, _b;
        const categoryIds = (_b = (_a = route.queryParamMap.get('categoryIds')) === null || _a === void 0 ? void 0 : _a.split('.').map(c => Number(c))) !== null && _b !== void 0 ? _b : [];
        return this.carrier411Service.getSubCategories(categoryIds);
    }
}
SubCategoriesListResolver.ɵfac = function SubCategoriesListResolver_Factory(t) { return new (t || SubCategoriesListResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_carrier411_service__WEBPACK_IMPORTED_MODULE_0__.Carrier411Service)); };
SubCategoriesListResolver.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SubCategoriesListResolver, factory: SubCategoriesListResolver.ɵfac });


/***/ }),

/***/ 44961:
/*!*************************************************************************!*\
  !*** ./src/app/carrier411/front-end/services/carrier411.api.service.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Carrier411ApiService": () => (/* binding */ Carrier411ApiService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _core_api_base_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/api/base.api.service */ 14089);
/* harmony import */ var _constants_carrier411_api_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/carrier411-api.constants */ 82872);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);





class Carrier411ApiService extends _core_api_base_api_service__WEBPACK_IMPORTED_MODULE_0__.BaseAPIService {
    constructor(baseApiUrl_Web, http) {
        super(baseApiUrl_Web, http);
    }
    /* Categories */
    getCategories() {
        return this.http.get(this.constructRequestUrl(_constants_carrier411_api_constants__WEBPACK_IMPORTED_MODULE_1__.Carrier411ApiEndpoints.GetCategories()));
    }
    /* SubCategories */
    getSubCategories(categoryIds) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams();
        categoryIds.forEach(c => {
            params = params.append('categoryIds', c);
        });
        return this.http.get(this.constructRequestUrl(_constants_carrier411_api_constants__WEBPACK_IMPORTED_MODULE_1__.Carrier411ApiEndpoints.GetSubCategories()), { params });
    }
}
Carrier411ApiService.ɵfac = function Carrier411ApiService_Factory(t) { return new (t || Carrier411ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"]("BASE_API_URL_WEB"), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
Carrier411ApiService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: Carrier411ApiService, factory: Carrier411ApiService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 82383:
/*!*********************************************************************!*\
  !*** ./src/app/carrier411/front-end/services/carrier411.service.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Carrier411Service": () => (/* binding */ Carrier411Service)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _carrier411_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./carrier411.api.service */ 44961);


class Carrier411Service {
    constructor(carrier411ApiService) {
        this.carrier411ApiService = carrier411ApiService;
    }
    /* Categories */
    getCategories() {
        return this.carrier411ApiService.getCategories();
    }
    /* SubCategories */
    getSubCategories(categoryIds) {
        return this.carrier411ApiService.getSubCategories(categoryIds);
    }
}
Carrier411Service.ɵfac = function Carrier411Service_Factory(t) { return new (t || Carrier411Service)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_carrier411_api_service__WEBPACK_IMPORTED_MODULE_0__.Carrier411ApiService)); };
Carrier411Service.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: Carrier411Service, factory: Carrier411Service.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 33375:
/*!***************************************************************************************!*\
  !*** ./src/app/carrier411/shared/components/category-icon/category-icon.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryIconComponent": () => (/* binding */ CategoryIconComponent)
/* harmony export */ });
/* harmony import */ var _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/pro-regular-svg-icons */ 26966);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 19397);




function CategoryIconComponent_fa_icon_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "fa-icon", 1);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r0.getCategoryIcon(ctx_r0.category))("fixedWidth", true);
} }
class CategoryIconComponent {
    constructor() {
        this.category = null;
        this.icons = {
            'enrollment': _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faDisplayMedical,
            'aca': _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faStethoscope,
            'dental': _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faTooth,
            'vision': _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faEye,
            'life': _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faHeartPulse,
            'ltd': _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faWheelchair,
            'std': _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faCrutches,
            'discounts': _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faTags,
            'guidelines': _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faBooksMedical,
            'contact': _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faCommentMedical,
            'renewal': _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faBookMedical,
            'rate status': _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faSackDollar,
            'bonus': _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faMoneyBillTrendUp,
            'medicare': _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faM,
            'large group medical': _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faUsersMedical,
        };
    }
    ngOnInit() {
    }
    getCategoryIcon(category) {
        const categoryIcon = this.filterIcon(category.name);
        if (categoryIcon)
            return categoryIcon;
        return _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faTag;
    }
    filterIcon(categoryName) {
        for (let key in this.icons) {
            if (categoryName.toLowerCase().includes(key.toLowerCase())) {
                return this.icons[key];
            }
        }
        return null;
    }
}
CategoryIconComponent.ɵfac = function CategoryIconComponent_Factory(t) { return new (t || CategoryIconComponent)(); };
CategoryIconComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CategoryIconComponent, selectors: [["category-icon"]], inputs: { category: "category" }, decls: 1, vars: 1, consts: [["class", "category-icon align-middle", 3, "icon", "fixedWidth", 4, "ngIf"], [1, "category-icon", "align-middle", 3, "icon", "fixedWidth"]], template: function CategoryIconComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CategoryIconComponent_fa_icon_0_Template, 1, 2, "fa-icon", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.category);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FaIconComponent], styles: [".category-icon[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: var(--aqua);\n  background-color: var(--aqualight);\n  min-height: 25px;\n  min-width: 25px;\n  border-radius: 5px;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGVnb3J5LWljb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7QUFDRiIsImZpbGUiOiJjYXRlZ29yeS1pY29uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhdGVnb3J5LWljb24ge1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBjb2xvcjogdmFyKC0tYXF1YSk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYXF1YWxpZ2h0KTtcclxuICBtaW4taGVpZ2h0OiAyNXB4O1xyXG4gIG1pbi13aWR0aDogMjVweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuIl19 */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_carrier411_front-end_carrier411_module_ts.js.map