"use strict";
(self["webpackChunkWarnerPacific"] = self["webpackChunkWarnerPacific"] || []).push([["src_app_carrier411_admin_carrier411-admin_module_ts"],{

/***/ 95622:
/*!*********************************************************************!*\
  !*** ./src/app/carrier411/admin/carrier411-admin-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Carrier411AdminRoutingModule": () => (/* binding */ Carrier411AdminRoutingModule)
/* harmony export */ });
/* harmony import */ var _resolvers_pending_questions_list_resolver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resolvers/pending-questions-list.resolver */ 47261);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_authentication_guards_role_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/authentication/guards/role.guard */ 43784);
/* harmony import */ var src_app_core_constants_role_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/constants/role.constants */ 85601);
/* harmony import */ var _components_answer_management_answer_management_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/answer-management/answer-management.component */ 89296);
/* harmony import */ var _components_carrier411_admin_landing_carrier411_admin_landing_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/carrier411-admin-landing/carrier411-admin-landing.component */ 875);
/* harmony import */ var _components_landing_page_content_management_landing_page_content_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/landing-page-content-management/landing-page-content.component */ 91128);
/* harmony import */ var _components_pending_approval_management_components_pending_approval_management_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/pending-approval-management/components/pending-approval-management.component */ 95493);
/* harmony import */ var _components_carrier411_management_carrier411_management_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/carrier411-management/carrier411-management.component */ 67917);
/* harmony import */ var _components_category_management_category_management_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/category-management/category-management.component */ 98650);
/* harmony import */ var _components_question_management_question_management_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/question-management/question-management.component */ 15450);
/* harmony import */ var _components_subcategory_management_subcategory_management_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/subcategory-management/subcategory-management.component */ 79050);
/* harmony import */ var _resolvers_answers_list_resolver__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./resolvers/answers-list.resolver */ 21404);
/* harmony import */ var _shared_resolvers_carrier411_messages_resolver__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/resolvers/carrier411-messages.resolver */ 53376);
/* harmony import */ var _resolvers_categories_list_admin_resolver__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./resolvers/categories-list-admin.resolver */ 5163);
/* harmony import */ var _resolvers_category_resolver__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./resolvers/category.resolver */ 7414);
/* harmony import */ var _resolvers_questions_list_resolver__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./resolvers/questions-list.resolver */ 450);
/* harmony import */ var _resolvers_question_resolver__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./resolvers/question.resolver */ 67294);
/* harmony import */ var _resolvers_sub_categories_list_admin_resolver__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./resolvers/sub-categories-list-admin.resolver */ 94833);
/* harmony import */ var _resolvers_sub_category_resolver__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./resolvers/sub-category.resolver */ 60491);
/* harmony import */ var _resolvers_pending_categories_list_resolver__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./resolvers/pending-categories-list.resolver */ 25736);
/* harmony import */ var _resolvers_pending_subcategories_list_resolver__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./resolvers/pending-subcategories-list.resolver */ 45605);
/* harmony import */ var _resolvers_pending_answers_list_resolver__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./resolvers/pending-answers-list.resolver */ 24865);
/* harmony import */ var _resolvers_pending_approval_counter_resolver__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./resolvers/pending-approval-counter.resolver */ 39301);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/core */ 3184);




// Components








// Resolvers














const childRoutes = [
    { path: '', component: _components_carrier411_admin_landing_carrier411_admin_landing_component__WEBPACK_IMPORTED_MODULE_4__.Carrier411AdminLandingComponent },
    {
        path: 'question-management',
        component: _components_carrier411_management_carrier411_management_component__WEBPACK_IMPORTED_MODULE_7__.Carrier411ManagementComponent,
        children: [
            {
                path: '',
                component: _components_category_management_category_management_component__WEBPACK_IMPORTED_MODULE_8__.CategoryManagementComponent,
                resolve: { categories: _resolvers_categories_list_admin_resolver__WEBPACK_IMPORTED_MODULE_13__.CategoriesListAdminResolver }
            },
            {
                path: 'subcategories',
                component: _components_subcategory_management_subcategory_management_component__WEBPACK_IMPORTED_MODULE_10__.SubCategoryManagementComponent,
                resolve: { category: _resolvers_category_resolver__WEBPACK_IMPORTED_MODULE_14__.CategoryResolver, subCategories: _resolvers_sub_categories_list_admin_resolver__WEBPACK_IMPORTED_MODULE_17__.SubCategoriesAdminListResolver }
            },
            {
                path: 'questions',
                component: _components_question_management_question_management_component__WEBPACK_IMPORTED_MODULE_9__.QuestionManagementComponent,
                resolve: { subCategory: _resolvers_sub_category_resolver__WEBPACK_IMPORTED_MODULE_18__.SubCategoryResolver, questions: _resolvers_questions_list_resolver__WEBPACK_IMPORTED_MODULE_15__.QuestionsListResolver }
            },
            {
                path: 'answers',
                component: _components_answer_management_answer_management_component__WEBPACK_IMPORTED_MODULE_3__.AnswerManagementComponent,
                resolve: { question: _resolvers_question_resolver__WEBPACK_IMPORTED_MODULE_16__.QuestionResolver, answers: _resolvers_answers_list_resolver__WEBPACK_IMPORTED_MODULE_11__.AnswersListResolver }
            }
        ]
    },
    {
        path: 'landing-page-content-management',
        component: _components_landing_page_content_management_landing_page_content_component__WEBPACK_IMPORTED_MODULE_5__.Carrier411AdminLandingPageContentComponent,
        resolve: { messages: _shared_resolvers_carrier411_messages_resolver__WEBPACK_IMPORTED_MODULE_12__.Carrier411MessagesResolver }
    },
    {
        path: 'pending-approval-management',
        component: _components_pending_approval_management_components_pending_approval_management_component__WEBPACK_IMPORTED_MODULE_6__.Carrier411AdminPendingApprovalManagementComponent,
        canActivate: [src_app_authentication_guards_role_guard__WEBPACK_IMPORTED_MODULE_1__.RoleGuard],
        data: { roles: [src_app_core_constants_role_constants__WEBPACK_IMPORTED_MODULE_2__.Roles.Carrier411.Reviewer, src_app_core_constants_role_constants__WEBPACK_IMPORTED_MODULE_2__.Roles.Carrier411.Publisher] },
        resolve: {
            pendingApprovalCount: _resolvers_pending_approval_counter_resolver__WEBPACK_IMPORTED_MODULE_22__.PendingApprovalCountListResolver,
            categories: _resolvers_pending_categories_list_resolver__WEBPACK_IMPORTED_MODULE_19__.PendingCategoriesListResolver,
            subcategories: _resolvers_pending_subcategories_list_resolver__WEBPACK_IMPORTED_MODULE_20__.PendingSubCategoriesListResolver,
            questions: _resolvers_pending_questions_list_resolver__WEBPACK_IMPORTED_MODULE_0__.PendingQuestionsListResolver,
            answers: _resolvers_pending_answers_list_resolver__WEBPACK_IMPORTED_MODULE_21__.PendingAnswersListResolver
        }
    }
];
class Carrier411AdminRoutingModule {
}
Carrier411AdminRoutingModule.ɵfac = function Carrier411AdminRoutingModule_Factory(t) { return new (t || Carrier411AdminRoutingModule)(); };
Carrier411AdminRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdefineNgModule"]({ type: Carrier411AdminRoutingModule });
Carrier411AdminRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_24__.RouterModule.forChild(childRoutes)], _angular_router__WEBPACK_IMPORTED_MODULE_24__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵsetNgModuleScope"](Carrier411AdminRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_24__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_24__.RouterModule] }); })();


/***/ }),

/***/ 82373:
/*!*************************************************************!*\
  !*** ./src/app/carrier411/admin/carrier411-admin.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Carrier411AdminModule": () => (/* binding */ Carrier411AdminModule)
/* harmony export */ });
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _components_answer_create_answer_create_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/answer-create/answer-create.component */ 470);
/* harmony import */ var _components_answer_edit_answer_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/answer-edit/answer-edit.component */ 25888);
/* harmony import */ var _components_answer_management_answer_management_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/answer-management/answer-management.component */ 89296);
/* harmony import */ var _shared_components_answer_text_answer_text_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/components/answer-text/answer-text.component */ 87082);
/* harmony import */ var _components_carrier411_admin_landing_carrier411_admin_landing_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/carrier411-admin-landing/carrier411-admin-landing.component */ 875);
/* harmony import */ var _components_landing_page_content_management_landing_page_content_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/landing-page-content-management/landing-page-content.component */ 91128);
/* harmony import */ var _components_carrier411_admin_navbar_carrier411_admin_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/carrier411-admin-navbar/carrier411-admin-navbar.component */ 11037);
/* harmony import */ var _components_carrier411_admin_navbar_levels_carrier411_admin_navbar_levels_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/carrier411-admin-navbar-levels/carrier411-admin-navbar-levels.component */ 38129);
/* harmony import */ var _components_pending_approval_management_components_answers_pending_approval_management_answers_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/pending-approval-management/components/answers/pending-approval-management-answers.component */ 50259);
/* harmony import */ var _components_pending_approval_management_components_pending_approval_management_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/pending-approval-management/components/pending-approval-management.component */ 95493);
/* harmony import */ var _components_pending_approval_management_components_categories_pending_approval_management_categories_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/pending-approval-management/components/categories/pending-approval-management-categories.component */ 59123);
/* harmony import */ var _components_pending_approval_management_components_subcategories_pending_approval_management_subcategories_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/pending-approval-management/components/subcategories/pending-approval-management-subcategories.component */ 39755);
/* harmony import */ var _components_pending_approval_management_components_questions_pending_approval_management_questions_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/pending-approval-management/components/questions/pending-approval-management-questions.component */ 25819);
/* harmony import */ var _components_carrier411_management_carrier411_management_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/carrier411-management/carrier411-management.component */ 67917);
/* harmony import */ var _components_category_create_category_create_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/category-create/category-create.component */ 60102);
/* harmony import */ var _components_category_edit_category_edit_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/category-edit/category-edit.component */ 32780);
/* harmony import */ var _components_category_management_category_management_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/category-management/category-management.component */ 98650);
/* harmony import */ var _components_content_type_actions_content_type_actions_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/content-type-actions/content-type-actions.component */ 80473);
/* harmony import */ var _components_content_type_card_content_type_card_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/content-type-card/content-type-card.component */ 22623);
/* harmony import */ var _components_content_type_last_modified_content_type_last_modified_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/content-type-last-modified/content-type-last-modified.component */ 55769);
/* harmony import */ var _components_content_type_manage_order_content_type_manage_order_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/content-type-manage-order/content-type-manage-order.component */ 33710);
/* harmony import */ var _components_content_type_save_button_content_type_save_button_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/content-type-save-button/content-type-save-button.component */ 37883);
/* harmony import */ var _components_content_type_status_change_content_type_status_change_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/content-type-status-change/content-type-status-change.component */ 8001);
/* harmony import */ var _components_content_type_toggle_data_content_type_toggle_data_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/content-type-toggle-data/content-type-toggle-data.component */ 75028);
/* harmony import */ var _components_subcategory_create_subcategory_create_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/subcategory-create/subcategory-create.component */ 6959);
/* harmony import */ var _components_subcategory_edit_subcategory_edit_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/subcategory-edit/subcategory-edit.component */ 11776);
/* harmony import */ var _components_subcategory_management_subcategory_management_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/subcategory-management/subcategory-management.component */ 79050);
/* harmony import */ var _components_question_create_question_create_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/question-create/question-create.component */ 10322);
/* harmony import */ var _components_question_edit_question_edit_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/question-edit/question-edit.component */ 73179);
/* harmony import */ var _components_question_management_question_management_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/question-management/question-management.component */ 15450);
/* harmony import */ var _carrier411_admin_routing_module__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./carrier411-admin-routing.module */ 95622);
/* harmony import */ var _resolvers_answers_list_resolver__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./resolvers/answers-list.resolver */ 21404);
/* harmony import */ var _shared_resolvers_carrier411_messages_resolver__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../shared/resolvers/carrier411-messages.resolver */ 53376);
/* harmony import */ var _resolvers_categories_list_admin_resolver__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./resolvers/categories-list-admin.resolver */ 5163);
/* harmony import */ var _resolvers_category_resolver__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./resolvers/category.resolver */ 7414);
/* harmony import */ var _resolvers_pending_categories_list_resolver__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./resolvers/pending-categories-list.resolver */ 25736);
/* harmony import */ var _resolvers_pending_answers_list_resolver__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./resolvers/pending-answers-list.resolver */ 24865);
/* harmony import */ var _resolvers_pending_questions_list_resolver__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./resolvers/pending-questions-list.resolver */ 47261);
/* harmony import */ var _resolvers_pending_subcategories_list_resolver__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./resolvers/pending-subcategories-list.resolver */ 45605);
/* harmony import */ var _resolvers_questions_list_resolver__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./resolvers/questions-list.resolver */ 450);
/* harmony import */ var _resolvers_question_resolver__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./resolvers/question.resolver */ 67294);
/* harmony import */ var _resolvers_sub_categories_list_admin_resolver__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./resolvers/sub-categories-list-admin.resolver */ 94833);
/* harmony import */ var _resolvers_sub_category_resolver__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./resolvers/sub-category.resolver */ 60491);
/* harmony import */ var _resolvers_pending_approval_counter_resolver__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./resolvers/pending-approval-counter.resolver */ 39301);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/core */ 3184);
//Angular and Shared Modules



// Components






























// Routing

// Resolvers














class Carrier411AdminModule {
}
Carrier411AdminModule.ɵfac = function Carrier411AdminModule_Factory(t) { return new (t || Carrier411AdminModule)(); };
Carrier411AdminModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵdefineNgModule"]({ type: Carrier411AdminModule });
Carrier411AdminModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵdefineInjector"]({ providers: [
        _resolvers_answers_list_resolver__WEBPACK_IMPORTED_MODULE_32__.AnswersListResolver,
        _shared_resolvers_carrier411_messages_resolver__WEBPACK_IMPORTED_MODULE_33__.Carrier411MessagesResolver,
        _resolvers_categories_list_admin_resolver__WEBPACK_IMPORTED_MODULE_34__.CategoriesListAdminResolver,
        _resolvers_category_resolver__WEBPACK_IMPORTED_MODULE_35__.CategoryResolver,
        _resolvers_pending_approval_counter_resolver__WEBPACK_IMPORTED_MODULE_44__.PendingApprovalCountListResolver,
        _resolvers_pending_categories_list_resolver__WEBPACK_IMPORTED_MODULE_36__.PendingCategoriesListResolver,
        _resolvers_pending_subcategories_list_resolver__WEBPACK_IMPORTED_MODULE_39__.PendingSubCategoriesListResolver,
        _resolvers_pending_questions_list_resolver__WEBPACK_IMPORTED_MODULE_38__.PendingQuestionsListResolver,
        _resolvers_pending_answers_list_resolver__WEBPACK_IMPORTED_MODULE_37__.PendingAnswersListResolver,
        _resolvers_questions_list_resolver__WEBPACK_IMPORTED_MODULE_40__.QuestionsListResolver,
        _resolvers_question_resolver__WEBPACK_IMPORTED_MODULE_41__.QuestionResolver,
        _resolvers_sub_categories_list_admin_resolver__WEBPACK_IMPORTED_MODULE_42__.SubCategoriesAdminListResolver,
        _resolvers_sub_category_resolver__WEBPACK_IMPORTED_MODULE_43__.SubCategoryResolver
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_46__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_47__.FormsModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
            _carrier411_admin_routing_module__WEBPACK_IMPORTED_MODULE_31__.Carrier411AdminRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵsetNgModuleScope"](Carrier411AdminModule, { declarations: [_components_answer_create_answer_create_component__WEBPACK_IMPORTED_MODULE_1__.AnswerCreateComponent,
        _components_answer_edit_answer_edit_component__WEBPACK_IMPORTED_MODULE_2__.AnswerEditComponent,
        _components_answer_management_answer_management_component__WEBPACK_IMPORTED_MODULE_3__.AnswerManagementComponent,
        _shared_components_answer_text_answer_text_component__WEBPACK_IMPORTED_MODULE_4__.AnswerTextComponent,
        _components_carrier411_admin_landing_carrier411_admin_landing_component__WEBPACK_IMPORTED_MODULE_5__.Carrier411AdminLandingComponent,
        _components_landing_page_content_management_landing_page_content_component__WEBPACK_IMPORTED_MODULE_6__.Carrier411AdminLandingPageContentComponent,
        _components_pending_approval_management_components_answers_pending_approval_management_answers_component__WEBPACK_IMPORTED_MODULE_9__.Carrier411AdminPendingApprovalManagementAnswersComponent,
        _components_pending_approval_management_components_categories_pending_approval_management_categories_component__WEBPACK_IMPORTED_MODULE_11__.Carrier411AdminPendingApprovalManagementCategoriesComponent,
        _components_pending_approval_management_components_subcategories_pending_approval_management_subcategories_component__WEBPACK_IMPORTED_MODULE_12__.Carrier411AdminPendingApprovalManagementSubCategoriesComponent,
        _components_pending_approval_management_components_questions_pending_approval_management_questions_component__WEBPACK_IMPORTED_MODULE_13__.Carrier411AdminPendingApprovalManagementQuestionsComponent,
        _components_pending_approval_management_components_pending_approval_management_component__WEBPACK_IMPORTED_MODULE_10__.Carrier411AdminPendingApprovalManagementComponent,
        _components_carrier411_admin_navbar_carrier411_admin_navbar_component__WEBPACK_IMPORTED_MODULE_7__.Carrier411AdminNavbarComponent,
        _components_carrier411_admin_navbar_levels_carrier411_admin_navbar_levels_component__WEBPACK_IMPORTED_MODULE_8__.Carrier411AdminNavbarLevelsComponent,
        _components_carrier411_management_carrier411_management_component__WEBPACK_IMPORTED_MODULE_14__.Carrier411ManagementComponent,
        _components_category_create_category_create_component__WEBPACK_IMPORTED_MODULE_15__.CategoryCreateComponent,
        _components_category_edit_category_edit_component__WEBPACK_IMPORTED_MODULE_16__.CategoryEditComponent,
        _components_category_management_category_management_component__WEBPACK_IMPORTED_MODULE_17__.CategoryManagementComponent,
        _components_content_type_actions_content_type_actions_component__WEBPACK_IMPORTED_MODULE_18__.ContentTypeActionsComponent,
        _components_content_type_card_content_type_card_component__WEBPACK_IMPORTED_MODULE_19__.ContentTypeCardComponent,
        _components_content_type_last_modified_content_type_last_modified_component__WEBPACK_IMPORTED_MODULE_20__.ContentTypeLastModifiedComponent,
        _components_content_type_manage_order_content_type_manage_order_component__WEBPACK_IMPORTED_MODULE_21__.ContentTypeManageOrderComponent,
        _components_content_type_save_button_content_type_save_button_component__WEBPACK_IMPORTED_MODULE_22__.ContentTypeSaveButtonComponent,
        _components_content_type_status_change_content_type_status_change_component__WEBPACK_IMPORTED_MODULE_23__.ContentTypeStatusChangeComponent,
        _components_content_type_toggle_data_content_type_toggle_data_component__WEBPACK_IMPORTED_MODULE_24__.ContentTypeToggleDataComponent,
        _components_question_create_question_create_component__WEBPACK_IMPORTED_MODULE_28__.QuestionCreateComponent,
        _components_question_edit_question_edit_component__WEBPACK_IMPORTED_MODULE_29__.QuestionEditComponent,
        _components_question_management_question_management_component__WEBPACK_IMPORTED_MODULE_30__.QuestionManagementComponent,
        _components_subcategory_create_subcategory_create_component__WEBPACK_IMPORTED_MODULE_25__.SubCategoryCreateComponent,
        _components_subcategory_edit_subcategory_edit_component__WEBPACK_IMPORTED_MODULE_26__.SubCategoryEditComponent,
        _components_subcategory_management_subcategory_management_component__WEBPACK_IMPORTED_MODULE_27__.SubCategoryManagementComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_46__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_47__.FormsModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        _carrier411_admin_routing_module__WEBPACK_IMPORTED_MODULE_31__.Carrier411AdminRoutingModule] }); })();


/***/ }),

/***/ 470:
/*!**************************************************************************************!*\
  !*** ./src/app/carrier411/admin/components/answer-create/answer-create.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnswerCreateComponent": () => (/* binding */ AnswerCreateComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _syncfusion_ej2_angular_inputs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @syncfusion/ej2-angular-inputs */ 53691);
/* harmony import */ var src_app_carrier411_shared_constants_workflow_step_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/carrier411/shared/constants/workflow-step.enum */ 48473);
/* harmony import */ var _utilities_content_type_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities/content-type-utils */ 65196);
/* harmony import */ var src_app_shared_services_input_validator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/input-validator.service */ 68516);
/* harmony import */ var _services_carrier411_admin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/carrier411-admin.service */ 61972);
/* harmony import */ var src_app_core_services_result_handler_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/result.handler.service */ 32464);
/* harmony import */ var _shared_components_modal_header_modal_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/components/modal-header/modal-header.component */ 89519);
/* harmony import */ var _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @syncfusion/ej2-angular-dropdowns */ 24779);
/* harmony import */ var _shared_components_field_error_display_field_error_display_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/components/field-error-display/field-error-display.component */ 76530);
/* harmony import */ var _shared_components_rich_text_editor_with_file_rich_text_editor_with_file_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/components/rich-text-editor-with-file/rich-text-editor-with-file.component */ 81013);
/* harmony import */ var _syncfusion_ej2_angular_buttons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @syncfusion/ej2-angular-buttons */ 78218);
/* harmony import */ var _content_type_save_button_content_type_save_button_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../content-type-save-button/content-type-save-button.component */ 37883);

















const _c0 = ["richText"];
const _c1 = function () { return { id: "id", text: "name", value: "id" }; };
class AnswerCreateComponent {
    constructor(inputValidatorService, carrier411AdminService, resultHandler) {
        this.inputValidatorService = inputValidatorService;
        this.carrier411AdminService = carrier411AdminService;
        this.resultHandler = resultHandler;
        this.WorkflowStep = src_app_carrier411_shared_constants_workflow_step_enum__WEBPACK_IMPORTED_MODULE_0__.WorkflowStep;
        this.onCloseTrigger = new _angular_core__WEBPACK_IMPORTED_MODULE_9__.EventEmitter();
        this.created = false;
    }
    ngOnInit() {
        this.initializeForm();
    }
    initializeForm(created = false, carriers = []) {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroup({
            carrierId: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', [_syncfusion_ej2_angular_inputs__WEBPACK_IMPORTED_MODULE_11__.FormValidators.required]),
            text: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', [_syncfusion_ej2_angular_inputs__WEBPACK_IMPORTED_MODULE_11__.FormValidators.required])
        });
        this.created = created;
        this.carriers = carriers;
        if (this.richText) {
            this.richText.initializeRichText('');
        }
    }
    onSave(option) {
        this.form.markAllAsTouched();
        if (!this.form.valid) {
            return;
        }
        const model = this.form.getRawValue();
        model.questionId = this.question.id;
        model.workflowStep = _utilities_content_type_utils__WEBPACK_IMPORTED_MODULE_1__.ContentTypeUtils.getWorkflowStep(option);
        this.saveAnswer(model, option);
    }
    onClose() {
        this.richText.richTextEditor.focusOut();
        this.onCloseTrigger.emit(this.created);
    }
    saveAnswer(model, step) {
        this.richText.richTextEditor.focusOut();
        this.carrier411AdminService.createAnswer(model, this.richText.getFiles()).subscribe((data) => {
            this.resultHandler.handle(data).then((success) => {
                if (success) {
                    if (_utilities_content_type_utils__WEBPACK_IMPORTED_MODULE_1__.ContentTypeUtils.finishSaveAction(step)) {
                        this.onCloseTrigger.emit(true);
                    }
                    else {
                        this.initializeForm(true, this.carriers.filter(c => c.id != model.carrierId));
                    }
                }
            });
        }, (err) => this.resultHandler.handle(err.error));
    }
}
AnswerCreateComponent.ɵfac = function AnswerCreateComponent_Factory(t) { return new (t || AnswerCreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_shared_services_input_validator_service__WEBPACK_IMPORTED_MODULE_2__.InputValidatorService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_carrier411_admin_service__WEBPACK_IMPORTED_MODULE_3__.Carrier411AdminService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_core_services_result_handler_service__WEBPACK_IMPORTED_MODULE_4__.ResultHandlerService)); };
AnswerCreateComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: AnswerCreateComponent, selectors: [["answer-create"]], viewQuery: function AnswerCreateComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.richText = _t.first);
    } }, inputs: { question: "question" }, outputs: { onCloseTrigger: "onClose" }, decls: 25, vars: 9, consts: [[3, "formGroup"], [1, "answer-create-container", "container-fluid", "pt-3"], ["title", "New Answer", 3, "onClose"], [1, "content"], [1, "form-group", "pt-2"], ["placeholder", "Category", "floatLabelType", "Always", "disabled", "", "autocomplete", "off", 3, "value"], ["placeholder", "Sub Category", "floatLabelType", "Always", "disabled", "", "autocomplete", "off", 3, "value"], ["placeholder", "Question", "floatLabelType", "Always", "disabled", "", "autocomplete", "off", 3, "value"], ["placeholder", "Carrier", "floatLabelType", "Always", "required", "", "formControlName", "carrierId", 3, "dataSource", "fields"], ["errorMsg", "* This field is required.", 3, "displayError"], [1, "fw-bold"], ["formControlName", "text"], ["richText", ""], [1, "row", "pt-5"], [1, "col-md-4"], ["type", "button", "ejs-button", "", 1, "e-dark", "e-flat", "w-100", 3, "click"], [1, "col-md-4", "offset-md-4"], [1, "w-100", 3, "onSave"]], template: function AnswerCreateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "form", 0)(1, "div", 1)(2, "modal-header", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("onClose", function AnswerCreateComponent_Template_modal_header_onClose_2_listener() { return ctx.onClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div", 3)(4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](5, "ejs-textbox", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](7, "ejs-textbox", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](9, "ejs-textbox", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](11, "ejs-dropdownlist", 8)(12, "app-field-error-display", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "div", 4)(14, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](15, "Answer *");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](16, "rich-text-editor-with-file", 11, 12)(18, "app-field-error-display", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "div", 13)(20, "div", 14)(21, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AnswerCreateComponent_Template_button_click_21_listener() { return ctx.onClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](22, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](23, "div", 16)(24, "content-type-save-button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("onSave", function AnswerCreateComponent_Template_content_type_save_button_onSave_24_listener($event) { return ctx.onSave($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", ctx.question == null ? null : ctx.question.category == null ? null : ctx.question.category.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", ctx.question == null ? null : ctx.question.subCategory == null ? null : ctx.question.subCategory.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", ctx.question == null ? null : ctx.question.text);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("dataSource", ctx.carriers)("fields", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](8, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("displayError", ctx.inputValidatorService.isInvalidRequired(ctx.form, "carrierId"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("displayError", ctx.inputValidatorService.isInvalidRequired(ctx.form, "text"));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective, _shared_components_modal_header_modal_header_component__WEBPACK_IMPORTED_MODULE_5__.ModalHeaderComponent, _syncfusion_ej2_angular_inputs__WEBPACK_IMPORTED_MODULE_11__.TextBoxComponent, _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_12__.DropDownListComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControlName, _shared_components_field_error_display_field_error_display_component__WEBPACK_IMPORTED_MODULE_6__.FieldErrorDisplayComponent, _shared_components_rich_text_editor_with_file_rich_text_editor_with_file_component__WEBPACK_IMPORTED_MODULE_7__.RichTextEditorWithFileComponent, _syncfusion_ej2_angular_buttons__WEBPACK_IMPORTED_MODULE_13__.ButtonComponent, _content_type_save_button_content_type_save_button_component__WEBPACK_IMPORTED_MODULE_8__.ContentTypeSaveButtonComponent], styles: [".answer-create-container[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  resize: none;\n  height: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFuc3dlci1jcmVhdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxZQUFBO0VBQ0EsYUFBQTtBQUFKIiwiZmlsZSI6ImFuc3dlci1jcmVhdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYW5zd2VyLWNyZWF0ZS1jb250YWluZXIge1xyXG4gIHRleHRhcmVhIHtcclxuICAgIHJlc2l6ZTogbm9uZTtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 25888:
/*!**********************************************************************************!*\
  !*** ./src/app/carrier411/admin/components/answer-edit/answer-edit.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnswerEditComponent": () => (/* binding */ AnswerEditComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _syncfusion_ej2_angular_inputs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @syncfusion/ej2-angular-inputs */ 53691);
/* harmony import */ var src_app_shared_utilities_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/utilities/shared */ 14364);
/* harmony import */ var _utilities_carrier411_admin_messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities/carrier411-admin-messages */ 47555);
/* harmony import */ var src_app_shared_services_input_validator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/input-validator.service */ 68516);
/* harmony import */ var _services_carrier411_admin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/carrier411-admin.service */ 61972);
/* harmony import */ var src_app_authentication_services_account_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/authentication/services/account.service */ 94398);
/* harmony import */ var src_app_core_services_result_handler_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/result.handler.service */ 32464);
/* harmony import */ var _shared_components_modal_header_modal_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/components/modal-header/modal-header.component */ 89519);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _shared_components_rich_text_editor_with_file_rich_text_editor_with_file_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/components/rich-text-editor-with-file/rich-text-editor-with-file.component */ 81013);
/* harmony import */ var _shared_components_field_error_display_field_error_display_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/components/field-error-display/field-error-display.component */ 76530);
/* harmony import */ var _syncfusion_ej2_angular_buttons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @syncfusion/ej2-angular-buttons */ 78218);

















const _c0 = ["richText"];
function AnswerEditComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("innerHtml", ctx_r0.userWarningMessage, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeHtml"]);
} }
class AnswerEditComponent {
    constructor(inputValidatorService, carrier411AdminService, accountService, resultHandler) {
        this.inputValidatorService = inputValidatorService;
        this.carrier411AdminService = carrier411AdminService;
        this.accountService = accountService;
        this.resultHandler = resultHandler;
        this.inlineMode = (0,src_app_shared_utilities_shared__WEBPACK_IMPORTED_MODULE_0__.getDefaultRichTextInlineMode)();
        this.toolbarSettings = (0,src_app_shared_utilities_shared__WEBPACK_IMPORTED_MODULE_0__.getDefaultRichTextSettings)();
        this.format = (0,src_app_shared_utilities_shared__WEBPACK_IMPORTED_MODULE_0__.getDefaultRichTextFormat)();
        this.userWarningMessage = '';
        this.onCloseTrigger = new _angular_core__WEBPACK_IMPORTED_MODULE_9__.EventEmitter();
        this.edited = false;
        this.hasDifferentOwner = () => { var _a, _b; return ((_a = this.answer) === null || _a === void 0 ? void 0 : _a.lastModifiedById) != ((_b = this.accountService.getUser()) === null || _b === void 0 ? void 0 : _b.id); };
    }
    ngOnInit() {
        this.initializeForm();
    }
    initializeForm(answer, edited = false) {
        this.answer = answer;
        this.edited = edited;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroup({
            text: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(answer === null || answer === void 0 ? void 0 : answer.text, [_syncfusion_ej2_angular_inputs__WEBPACK_IMPORTED_MODULE_11__.FormValidators.required])
        });
        this.setupUserWarning();
        if (this.richText) {
            this.richText.initializeRichText(answer.text);
        }
    }
    onSave() {
        this.form.markAllAsTouched();
        if (!this.form.valid) {
            return;
        }
        const model = this.form.getRawValue();
        model.workflowStep = this.answer.workflowStep;
        this.updateAnswer(model);
    }
    onClose() {
        this.richText.richTextEditor.focusOut();
        this.onCloseTrigger.emit(this.edited);
    }
    updateAnswer(model) {
        this.richText.richTextEditor.focusOut();
        this.carrier411AdminService.updateAnswer(this.answer.id, model, this.richText.getFiles()).subscribe((data) => {
            this.resultHandler.handle(data).then((success) => {
                if (success) {
                    this.onCloseTrigger.emit(true);
                }
            });
        }, (err) => this.resultHandler.handle(err.error));
    }
    setupUserWarning() {
        var _a;
        if (this.hasDifferentOwner()) {
            this.userWarningMessage = _utilities_carrier411_admin_messages__WEBPACK_IMPORTED_MODULE_1__.Carrier411AdminMessages.getUserEditorWarningMessage((_a = this.answer) === null || _a === void 0 ? void 0 : _a.lastModifiedByName);
        }
        else {
            this.userWarningMessage = '';
        }
    }
}
AnswerEditComponent.ɵfac = function AnswerEditComponent_Factory(t) { return new (t || AnswerEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_shared_services_input_validator_service__WEBPACK_IMPORTED_MODULE_2__.InputValidatorService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_carrier411_admin_service__WEBPACK_IMPORTED_MODULE_3__.Carrier411AdminService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_authentication_services_account_service__WEBPACK_IMPORTED_MODULE_4__.AccountService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_core_services_result_handler_service__WEBPACK_IMPORTED_MODULE_5__.ResultHandlerService)); };
AnswerEditComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: AnswerEditComponent, selectors: [["answer-edit"]], viewQuery: function AnswerEditComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.richText = _t.first);
    } }, inputs: { question: "question" }, outputs: { onCloseTrigger: "onClose" }, decls: 26, vars: 7, consts: [[3, "formGroup"], [1, "answer-edit-container", "container-fluid", "pt-3"], ["title", "Edit Answer", 3, "onClose"], ["class", "acknowledge-action", 4, "ngIf"], [1, "content"], [1, "form-group", "pt-2"], ["placeholder", "Category", "floatLabelType", "Always", "disabled", "", "autocomplete", "off", 3, "value"], ["placeholder", "Sub Category", "floatLabelType", "Always", "disabled", "", "autocomplete", "off", 3, "value"], ["placeholder", "Question", "floatLabelType", "Always", "disabled", "", "autocomplete", "off", 3, "value"], ["placeholder", "Carrier", "floatLabelType", "Always", "disabled", "", "autocomplete", "off", 3, "value"], [1, "fw-bold"], ["formControlName", "text"], ["richText", ""], ["errorMsg", "* This field is required.", 3, "displayError"], [1, "row", "pt-5"], [1, "col-md-4"], ["type", "button", "ejs-button", "", 1, "e-dark", "e-flat", "w-100", 3, "click"], [1, "col-md-4", "offset-md-4"], ["type", "button", "ejs-button", "", 1, "e-success", "w-100", 3, "click"], [1, "acknowledge-action"], [3, "innerHtml"]], template: function AnswerEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "form", 0)(1, "div", 1)(2, "modal-header", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("onClose", function AnswerEditComponent_Template_modal_header_onClose_2_listener() { return ctx.onClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, AnswerEditComponent_div_3_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div", 4)(5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](6, "ejs-textbox", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](8, "ejs-textbox", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](10, "ejs-textbox", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](12, "ejs-textbox", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "div", 5)(14, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](15, "Answer *");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](16, "rich-text-editor-with-file", 11, 12)(18, "app-field-error-display", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "div", 14)(20, "div", 15)(21, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AnswerEditComponent_Template_button_click_21_listener() { return ctx.onClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](22, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](23, "div", 17)(24, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AnswerEditComponent_Template_button_click_24_listener() { return ctx.onSave(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](25, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.userWarningMessage != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", ctx.question == null ? null : ctx.question.category == null ? null : ctx.question.category.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", ctx.question == null ? null : ctx.question.subCategory == null ? null : ctx.question.subCategory.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", ctx.question == null ? null : ctx.question.text);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", ctx.answer == null ? null : ctx.answer.carrier == null ? null : ctx.answer.carrier.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("displayError", ctx.inputValidatorService.isInvalidRequired(ctx.form, "text"));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective, _shared_components_modal_header_modal_header_component__WEBPACK_IMPORTED_MODULE_6__.ModalHeaderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _syncfusion_ej2_angular_inputs__WEBPACK_IMPORTED_MODULE_11__.TextBoxComponent, _shared_components_rich_text_editor_with_file_rich_text_editor_with_file_component__WEBPACK_IMPORTED_MODULE_7__.RichTextEditorWithFileComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControlName, _shared_components_field_error_display_field_error_display_component__WEBPACK_IMPORTED_MODULE_8__.FieldErrorDisplayComponent, _syncfusion_ej2_angular_buttons__WEBPACK_IMPORTED_MODULE_13__.ButtonComponent], styles: [".answer-edit-container[_ngcontent-%COMP%]   .acknowledge-action[_ngcontent-%COMP%] {\n  background: var(--acknowledge-background);\n  padding: 1rem;\n}\n.answer-edit-container[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  resize: none;\n  height: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFuc3dlci1lZGl0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UseUNBQUE7RUFDQSxhQUFBO0FBQUo7QUFHRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FBREoiLCJmaWxlIjoiYW5zd2VyLWVkaXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYW5zd2VyLWVkaXQtY29udGFpbmVyIHtcclxuICAuYWNrbm93bGVkZ2UtYWN0aW9uIHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWFja25vd2xlZGdlLWJhY2tncm91bmQpO1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICB9XHJcblxyXG4gIHRleHRhcmVhIHtcclxuICAgIHJlc2l6ZTogbm9uZTtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 89296:
/*!**********************************************************************************************!*\
  !*** ./src/app/carrier411/admin/components/answer-management/answer-management.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnswerManagementComponent": () => (/* binding */ AnswerManagementComponent)
/* harmony export */ });
/* harmony import */ var src_app_shared_constants_tools_list_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/constants/tools-list.enum */ 99485);
/* harmony import */ var _utilities_content_type_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities/content-type-utils */ 65196);
/* harmony import */ var _content_type_management_content_type_management_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../content-type-management/content-type-management.component */ 6857);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_core_services_result_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/result.handler.service */ 32464);
/* harmony import */ var _services_carrier411_admin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/carrier411-admin.service */ 61972);
/* harmony import */ var src_app_admin_tools_management_services_tool_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/admin/tools-management/services/tool.service */ 92412);
/* harmony import */ var _services_carrier411_admin_navbar_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/carrier411-admin-navbar.service */ 98252);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @syncfusion/ej2-angular-dropdowns */ 24779);
/* harmony import */ var _syncfusion_ej2_angular_buttons__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @syncfusion/ej2-angular-buttons */ 78218);
/* harmony import */ var _content_type_card_content_type_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../content-type-card/content-type-card.component */ 22623);
/* harmony import */ var _shared_components_answer_text_answer_text_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/components/answer-text/answer-text.component */ 87082);
/* harmony import */ var _syncfusion_ej2_angular_popups__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @syncfusion/ej2-angular-popups */ 58917);
/* harmony import */ var _answer_create_answer_create_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../answer-create/answer-create.component */ 470);
/* harmony import */ var _answer_edit_answer_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../answer-edit/answer-edit.component */ 25888);
/* harmony import */ var _content_type_status_change_content_type_status_change_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../content-type-status-change/content-type-status-change.component */ 8001);
/* harmony import */ var _content_type_toggle_data_content_type_toggle_data_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../content-type-toggle-data/content-type-toggle-data.component */ 75028);




















const _c0 = ["answerCreate"];
const _c1 = ["answerEdit"];
const _c2 = function (a0) { return { "e-dark": a0 }; };
function AnswerManagementComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 20)(1, "div", 21)(2, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3, "Filter by Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "ejs-dropdownlist", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("change", function AnswerManagementComponent_div_3_Template_ejs_dropdownlist_change_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r11.onFilterChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "div", 24)(6, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function AnswerManagementComponent_div_3_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r12); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r13.onAddContentItem(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](7, "Add Answer");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("dataSource", ctx_r0.filters)("fields", ctx_r0.fields)("enablePersistence", true)("value", ctx_r0.currentFilterId);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction1"](6, _c2, ctx_r0.carriersAvailable))("disabled", !ctx_r0.carriersAvailable);
} }
function AnswerManagementComponent_content_type_card_8_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "content-type-card", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("onAction", function AnswerManagementComponent_content_type_card_8_Template_content_type_card_onAction_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r15.onTakeAction($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 27)(2, "label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3, "Carrier");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](4, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](5, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "div", 27)(7, "label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](8, "Answer");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](9, "answer-text", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](10, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const answer_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("contentType", answer_r14)("hasPublishedVersion", answer_r14.item.hasPublishedVersion);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("innerText", answer_r14.item.carrier.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("text", answer_r14.item.text);
} }
function AnswerManagementComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 31)(1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, " No records to display. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
} }
class AnswerManagementComponent extends _content_type_management_content_type_management_component__WEBPACK_IMPORTED_MODULE_2__.ContentTypeManagementComponent {
    constructor(route, resultHandler, carrier411AdminService, toolService, navService) {
        super(resultHandler);
        this.route = route;
        this.resultHandler = resultHandler;
        this.carrier411AdminService = carrier411AdminService;
        this.toolService = toolService;
        this.navService = navService;
        this.carriersAvailable = true;
        this.showHeader = true;
        const data = route.snapshot.data["answers"];
        this.setContentItems(data);
        const questionData = route.snapshot.data["question"];
        this.question = questionData.value;
        this.loadNavbar();
    }
    ngOnInit() {
        this.filters = _utilities_content_type_utils__WEBPACK_IMPORTED_MODULE_1__.ContentTypeUtils.getFilters(false);
        this.loadCarriers();
        this.setupQuerySubscription();
    }
    loadNavbar() {
        if (this.question != null) {
            this.navService.injectAnswers(this.question.id, this.contentItems, this.route.snapshot.queryParams.answerId);
        }
    }
    showFilter() {
        return this.route.snapshot.params.answerId == null;
    }
    setupQuerySubscription() {
        this.route.queryParams.subscribe(queryParams => {
            if (this.question != null && this.question.id != queryParams.questionId) {
                this.loadQuestion(queryParams.questionId).then((success) => {
                    if (success) {
                        this.loadContentItems().then((success) => {
                            if (success) {
                                this.filterAnswers(queryParams.answerId);
                            }
                        });
                    }
                });
            }
            else {
                this.filterAnswers(queryParams.answerId);
            }
        });
    }
    filterAnswers(answerId) {
        if (answerId != null) {
            const answer = this.contentItems.filter(a => a.item.id == answerId);
            this.contentItemsList = answer;
            this.showHeader = false;
        }
        else {
            this.contentItemsList = this.getFilteredContentItems();
            this.showHeader = true;
        }
    }
    loadQuestion(questionId) {
        return new Promise((resolve, reject) => {
            this.carrier411AdminService.getQuestionById(questionId).subscribe((data) => {
                if (data.isSuccess) {
                    this.question = data.value;
                    resolve(true);
                }
                else {
                    this.resultHandler.handle(data);
                    reject(false);
                }
            });
        });
    }
    loadCarriers() {
        this.toolService.getToolActiveCarriers(src_app_shared_constants_tools_list_enum__WEBPACK_IMPORTED_MODULE_0__.ToolsList.Carrier411).subscribe((data) => {
            var _a;
            if (data.isSuccess) {
                this.carriers = data.value;
                this.carriersAvailable = ((_a = this.getAvailableCarriers()) === null || _a === void 0 ? void 0 : _a.length) > 0;
            }
            else {
                this.resultHandler.handle(data);
            }
        });
    }
    getAvailableCarriers() {
        var _a, _b;
        const carrierAnswers = (_a = this.contentItems) === null || _a === void 0 ? void 0 : _a.map(a => a.item.carrier.id);
        return (_b = this.carriers) === null || _b === void 0 ? void 0 : _b.filter(c => !carrierAnswers.includes(c.id));
    }
    onAddContentItem() {
        this.addContentDialog.show();
        this.answerCreate.initializeForm(false, this.getAvailableCarriers());
    }
    initializeEditDialog(contentType) {
        this.answerEdit.initializeForm(contentType, false);
    }
    handleDenyAction(action, contentType) {
        this.carrier411AdminService.getAnswerPreviousStep(contentType.id).subscribe((data) => {
            this.handlePreviousStatus(data, action, contentType);
        });
    }
    loadContentItems() {
        return new Promise((resolve, reject) => {
            this.carrier411AdminService.getAnswers(this.question.id).subscribe((data) => {
                var _a;
                if (data.isSuccess) {
                    this.setContentItems(data);
                    this.carriersAvailable = ((_a = this.getAvailableCarriers()) === null || _a === void 0 ? void 0 : _a.length) > 0;
                    this.filterAnswers(this.route.snapshot.queryParams.answerId);
                    resolve(true);
                }
                else {
                    reject(data.errors);
                }
            });
        });
    }
    updateContentItem(data) {
        const answer = data.contentType;
        const model = {
            text: answer.text,
            workflowStep: data.newStatus
        };
        this.carrier411AdminService.updateAnswer(data.contentType.id, model).subscribe((data) => {
            this.resultHandler.handle(data).then((success) => {
                if (success) {
                    this.onCloseModal(this.statusChangeDialog);
                    this.loadContentItems();
                }
            });
        }, (err) => this.resultHandler.handle(err.error));
    }
    deleteContentItem(data) {
        this.carrier411AdminService.deleteAnswer(data.contentType.id).subscribe((data) => {
            this.resultHandler.handle(data).then((success) => {
                if (success) {
                    this.onCloseModal(this.statusChangeDialog);
                    this.loadContentItems();
                }
            });
        }, (err) => this.resultHandler.handle(err.error));
    }
    onConfirmToggleData($event) {
        const contentType = $event.contentType;
        this.carrier411AdminService.toggleAnswerVisibility(contentType.id).subscribe((data) => {
            this.resultHandler.handle(data).then((success) => {
                if (success) {
                    this.onCloseModal(this.contentTypeToggleDataDialog);
                    this.loadContentItems();
                }
            });
        });
    }
}
AnswerManagementComponent.ɵfac = function AnswerManagementComponent_Factory(t) { return new (t || AnswerManagementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_core_services_result_handler_service__WEBPACK_IMPORTED_MODULE_3__.ResultHandlerService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_carrier411_admin_service__WEBPACK_IMPORTED_MODULE_4__.Carrier411AdminService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_admin_tools_management_services_tool_service__WEBPACK_IMPORTED_MODULE_5__.ToolService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_carrier411_admin_navbar_service__WEBPACK_IMPORTED_MODULE_6__.Carrier411AdminNavbarService)); };
AnswerManagementComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({ type: AnswerManagementComponent, selectors: [["app-answer-management"]], viewQuery: function AnswerManagementComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_c1, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.answerCreate = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.answerEdit = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵInheritDefinitionFeature"]], decls: 27, vars: 10, consts: [[1, "answer-management"], [1, "pb-3"], ["class", "header", 4, "ngIf"], [1, "content", "pt-4"], [1, "fw-bold", "text-uppercase"], [3, "contentType", "hasPublishedVersion", "onAction", 4, "ngFor", "ngForOf"], ["class", "e-card mt-4 shadow p-5", 4, "ngIf"], [1, "d-none"], ["isModal", "true", "width", "500", 3, "visible", "open"], ["ejAddContentDialog", ""], [3, "question", "onClose"], ["answerCreate", ""], ["ejEditContentDialog", ""], ["answerEdit", ""], ["isModal", "true", "width", "550", 3, "visible", "open"], ["ejStatusChangeDialog", ""], [3, "onConfirm", "onClose"], ["contentTypeStatusChange", ""], ["ejToggleDataDialog", ""], ["contentTypeToggleData", ""], [1, "header"], [1, "filter-status", "align-middle"], [1, "mr-3"], [3, "dataSource", "fields", "enablePersistence", "value", "change"], [1, "general-action-buttons"], ["type", "button", "ejs-button", "", 1, "ml-4", 3, "ngClass", "disabled", "click"], [3, "contentType", "hasPublishedVersion", "onAction"], [1, "row", "pt-3"], [1, "col-3", "fw-bold"], [1, "col", "text-break", 3, "innerText"], [1, "col", 3, "text"], [1, "e-card", "mt-4", "shadow", "p-5"], [1, "e-content", "text-center"]], template: function AnswerManagementComponent_Template(rf, ctx) { if (rf & 1) {
        const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 0)(1, "page-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](3, AnswerManagementComponent_div_3_Template, 8, 8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "div", 3)(5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6, "Answers");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](7, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](8, AnswerManagementComponent_content_type_card_8_Template, 11, 4, "content-type-card", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](9, AnswerManagementComponent_div_9_Template, 3, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](10, "div", 7)(11, "ejs-dialog", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("open", function AnswerManagementComponent_Template_ejs_dialog_open_11_listener($event) { return ctx.onOpenModal($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](13, "answer-create", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("onClose", function AnswerManagementComponent_Template_answer_create_onClose_13_listener($event) { return ctx.onOverlayClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](15, "ejs-dialog", 8, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("open", function AnswerManagementComponent_Template_ejs_dialog_open_15_listener($event) { return ctx.onOpenModal($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](17, "answer-edit", 10, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("onClose", function AnswerManagementComponent_Template_answer_edit_onClose_17_listener($event) { return ctx.onOverlayClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](19, "ejs-dialog", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("open", function AnswerManagementComponent_Template_ejs_dialog_open_19_listener($event) { return ctx.onOpenModal($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](21, "content-type-status-change", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("onConfirm", function AnswerManagementComponent_Template_content_type_status_change_onConfirm_21_listener($event) { return ctx.onConfirmStatusChange($event); })("onClose", function AnswerManagementComponent_Template_content_type_status_change_onClose_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r17); const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](20); return ctx.onCloseModal(_r7); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](23, "ejs-dialog", 14, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("open", function AnswerManagementComponent_Template_ejs_dialog_open_23_listener($event) { return ctx.onOpenModal($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](25, "content-type-toggle-data", 16, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("onConfirm", function AnswerManagementComponent_Template_content_type_toggle_data_onConfirm_25_listener($event) { return ctx.onConfirmToggleData($event); })("onClose", function AnswerManagementComponent_Template_content_type_toggle_data_onClose_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r17); const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](24); return ctx.onCloseModal(_r9); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx.question == null ? null : ctx.question.text);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.showHeader);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx.contentItemsList);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.contentItemsList == null || ctx.contentItemsList.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("visible", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("question", ctx.question);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("visible", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("question", ctx.question);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("visible", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("visible", false);
    } }, directives: [_shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_7__.PageTitleComponent, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_17__.DropDownListComponent, _syncfusion_ej2_angular_buttons__WEBPACK_IMPORTED_MODULE_18__.ButtonComponent, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgForOf, _content_type_card_content_type_card_component__WEBPACK_IMPORTED_MODULE_8__.ContentTypeCardComponent, _shared_components_answer_text_answer_text_component__WEBPACK_IMPORTED_MODULE_9__.AnswerTextComponent, _syncfusion_ej2_angular_popups__WEBPACK_IMPORTED_MODULE_19__.DialogComponent, _answer_create_answer_create_component__WEBPACK_IMPORTED_MODULE_10__.AnswerCreateComponent, _answer_edit_answer_edit_component__WEBPACK_IMPORTED_MODULE_11__.AnswerEditComponent, _content_type_status_change_content_type_status_change_component__WEBPACK_IMPORTED_MODULE_12__.ContentTypeStatusChangeComponent, _content_type_toggle_data_content_type_toggle_data_component__WEBPACK_IMPORTED_MODULE_13__.ContentTypeToggleDataComponent], styles: [".answer-management[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.answer-management[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--graymedium);\n}\n.answer-management[_ngcontent-%COMP%]   content-type-card[_ngcontent-%COMP%] {\n  white-space: pre-wrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFuc3dlci1tYW5hZ2VtZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFBSjtBQUdFO0VBQ0UsU0FBQTtFQUNBLHdCQUFBO0FBREo7QUFJRTtFQUNFLHFCQUFBO0FBRkoiLCJmaWxlIjoiYW5zd2VyLW1hbmFnZW1lbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYW5zd2VyLW1hbmFnZW1lbnQge1xyXG4gIC5oZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICBociB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBjb2xvcjogdmFyKC0tZ3JheW1lZGl1bSk7XHJcbiAgfVxyXG5cclxuICBjb250ZW50LXR5cGUtY2FyZCB7XHJcbiAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 875:
/*!************************************************************************************************************!*\
  !*** ./src/app/carrier411/admin/components/carrier411-admin-landing/carrier411-admin-landing.component.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Carrier411AdminLandingComponent": () => (/* binding */ Carrier411AdminLandingComponent)
/* harmony export */ });
/* harmony import */ var src_app_shared_constants_application_urls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/constants/application-urls */ 85561);
/* harmony import */ var _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/pro-regular-svg-icons */ 26966);
/* harmony import */ var _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/pro-solid-svg-icons */ 61250);
/* harmony import */ var src_app_core_constants_role_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/constants/role.constants */ 85601);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _shared_components_page_description_page_description_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/page-description/page-description.component */ 89424);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _shared_components_horizontal_card_horizontal_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/horizontal-card/horizontal-card.component */ 86190);
/* harmony import */ var _core_directives_has_role_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/directives/has-role.directive */ 799);










function Carrier411AdminLandingComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "horizontal-card", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", ctx_r0.pendingApprovalsUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("buttonIcon", ctx_r0.faPendingApprovals);
} }
const _c0 = function (a0, a1) { return [a0, a1]; };
class Carrier411AdminLandingComponent {
    constructor() {
        this.roles = src_app_core_constants_role_constants__WEBPACK_IMPORTED_MODULE_1__.Roles;
        this.questionManagementUrl = src_app_shared_constants_application_urls__WEBPACK_IMPORTED_MODULE_0__.ApplicationUrls.Carrier411Admin.Carrier411Management.path;
        this.faQuestionManagement = _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faQuestionCircle;
        this.pendingApprovalsUrl = src_app_shared_constants_application_urls__WEBPACK_IMPORTED_MODULE_0__.ApplicationUrls.Carrier411Admin.PendingApprovals.path;
        this.faPendingApprovals = _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faListCheck;
        this.welcomeMessageUrl = src_app_shared_constants_application_urls__WEBPACK_IMPORTED_MODULE_0__.ApplicationUrls.Carrier411Admin.LandingPageContentManagement.path;
        this.faWelcomeMessage = _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faMessageLines;
        this.massUploadToolUrl = src_app_shared_constants_application_urls__WEBPACK_IMPORTED_MODULE_0__.ApplicationUrls.Carrier411Admin.MassUploadTool.path;
        this.faMassUploadTool = _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__.faUpload;
    }
    ngOnInit() {
    }
}
Carrier411AdminLandingComponent.ɵfac = function Carrier411AdminLandingComponent_Factory(t) { return new (t || Carrier411AdminLandingComponent)(); };
Carrier411AdminLandingComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: Carrier411AdminLandingComponent, selectors: [["app-carrier411-admin-landing"]], decls: 12, vars: 10, consts: [[1, "container-fluid"], [1, "e-card", "card-list", "mb-3", 3, "routerLink"], ["title", "Question Management", "description", "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.", 3, "buttonIcon"], ["class", "e-card card-list mb-3", 3, "routerLink", 4, "appHasRole"], ["title", "Landing Page Content Management", "description", "Manage the welcome, favorite and announcement messages for brokers.", 3, "buttonIcon"], ["title", "Mass Upload Tool", "description", "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.", 3, "buttonIcon"], ["title", "Pending Approvals Management", "description", "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.", 3, "buttonIcon"]], template: function Carrier411AdminLandingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "page-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Carrier 411 Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "page-description");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Select tool to view its management options");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "horizontal-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, Carrier411AdminLandingComponent_div_7_Template, 2, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "horizontal-card", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](11, "horizontal-card", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", ctx.questionManagementUrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("buttonIcon", ctx.faQuestionManagement);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("appHasRole", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](7, _c0, ctx.roles.Carrier411.Reviewer, ctx.roles.Carrier411.Publisher));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", ctx.welcomeMessageUrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("buttonIcon", ctx.faWelcomeMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", ctx.massUploadToolUrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("buttonIcon", ctx.faMassUploadTool);
    } }, directives: [_shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_2__.PageTitleComponent, _shared_components_page_description_page_description_component__WEBPACK_IMPORTED_MODULE_3__.PageDescriptionComponent, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLink, _shared_components_horizontal_card_horizontal_card_component__WEBPACK_IMPORTED_MODULE_4__.HorizontalCardComponent, _core_directives_has_role_directive__WEBPACK_IMPORTED_MODULE_5__.HasRoleDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJyaWVyNDExLWFkbWluLWxhbmRpbmcuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 38129:
/*!************************************************************************************************************************!*\
  !*** ./src/app/carrier411/admin/components/carrier411-admin-navbar-levels/carrier411-admin-navbar-levels.component.ts ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Carrier411AdminNavbarLevelsComponent": () => (/* binding */ Carrier411AdminNavbarLevelsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_carrier411_shared_constants_workflow_step_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/carrier411/shared/constants/workflow-step.enum */ 48473);
/* harmony import */ var src_app_shared_utilities_workflow_step_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/utilities/workflow-step-utils */ 37916);
/* harmony import */ var _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/pro-solid-svg-icons */ 61250);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/animations */ 31631);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 19397);
/* harmony import */ var _syncfusion_ej2_angular_popups__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @syncfusion/ej2-angular-popups */ 58917);










function Carrier411AdminNavbarLevelsComponent_ul_0_li_1_fa_icon_3_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "fa-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function Carrier411AdminNavbarLevelsComponent_ul_0_li_1_fa_icon_3_Template_fa_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10); const data_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r8.itemCollapsed(data_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx_r4.faChevronDown);
} }
function Carrier411AdminNavbarLevelsComponent_ul_0_li_1_fa_icon_4_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "fa-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function Carrier411AdminNavbarLevelsComponent_ul_0_li_1_fa_icon_4_Template_fa_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13); const data_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r11.itemExpanded(data_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx_r5.faChevronRight);
} }
function Carrier411AdminNavbarLevelsComponent_ul_0_li_1_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div");
} if (rf & 2) {
    const data_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("status-icon align-middle ", data_r2.workflowStep.toLowerCase(), "");
} }
function Carrier411AdminNavbarLevelsComponent_ul_0_li_1_carrier411_admin_navbar_levels_14_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "carrier411-admin-navbar-levels", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("expanded", function Carrier411AdminNavbarLevelsComponent_ul_0_li_1_carrier411_admin_navbar_levels_14_Template_carrier411_admin_navbar_levels_expanded_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3); return ctx_r15.itemExpanded($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("items", data_r2.subChild)("@slide", undefined);
} }
const _c0 = function () { return { exact: true }; };
function Carrier411AdminNavbarLevelsComponent_ul_0_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", null, 3)(2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, Carrier411AdminNavbarLevelsComponent_ul_0_li_1_fa_icon_3_Template, 1, 1, "fa-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, Carrier411AdminNavbarLevelsComponent_ul_0_li_1_fa_icon_4_Template, 1, 1, "fa-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "a", 6)(6, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 8)(9, "ejs-tooltip", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, Carrier411AdminNavbarLevelsComponent_ul_0_li_1_div_10_Template, 1, 3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "ejs-tooltip", 9)(12, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "fa-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, Carrier411AdminNavbarLevelsComponent_ul_0_li_1_carrier411_admin_navbar_levels_14_Template, 1, 2, "carrier411-admin-navbar-levels", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("level-wrapper ", data_r2.hasChildren ? "has-children" : "no-children", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](18, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.isExpanded(data_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", data_r2.hasChildren && !ctx_r1.isExpanded(data_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", data_r2.link)("queryParams", data_r2.queryParams)("skipLocationChange", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](data_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("content", ctx_r1.WorkflowStepUtils.getDescription(data_r2.workflowStep));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.showNonPublishedStatus(data_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("content", ctx_r1.getPublishedDescription(data_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("status-icon align-middle current-status ", ctx_r1.getWorkflowStep(data_r2).toString().toLowerCase(), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx_r1.faCheck);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.isExpanded(data_r2));
} }
function Carrier411AdminNavbarLevelsComponent_ul_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ul", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, Carrier411AdminNavbarLevelsComponent_ul_0_li_1_Template, 15, 19, "li", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.items);
} }
class Carrier411AdminNavbarLevelsComponent {
    constructor() {
        this.WorkflowStepUtils = src_app_shared_utilities_workflow_step_utils__WEBPACK_IMPORTED_MODULE_1__.WorkflowStepUtils;
        this.faCheck = _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faCheck;
        this.faChevronDown = _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faChevronDown;
        this.faChevronRight = _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faChevronRight;
        this.items = [];
        this.expandedTrigger = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.showNonPublishedStatus = (data) => !src_app_shared_utilities_workflow_step_utils__WEBPACK_IMPORTED_MODULE_1__.WorkflowStepUtils.compareEnumValue(data.workflowStep, src_app_carrier411_shared_constants_workflow_step_enum__WEBPACK_IMPORTED_MODULE_0__.WorkflowStep.Published);
        this.getPublishedDescription = (item) => item.hasPublishedVersion ? src_app_shared_utilities_workflow_step_utils__WEBPACK_IMPORTED_MODULE_1__.WorkflowStepUtils.getDescription(src_app_carrier411_shared_constants_workflow_step_enum__WEBPACK_IMPORTED_MODULE_0__.WorkflowStep.Published) : 'Not Yet Published';
        this.getWorkflowStep = (item) => item.hasPublishedVersion ? src_app_carrier411_shared_constants_workflow_step_enum__WEBPACK_IMPORTED_MODULE_0__.WorkflowStep[src_app_carrier411_shared_constants_workflow_step_enum__WEBPACK_IMPORTED_MODULE_0__.WorkflowStep.Published].toLowerCase() : src_app_carrier411_shared_constants_workflow_step_enum__WEBPACK_IMPORTED_MODULE_0__.WorkflowStep[src_app_carrier411_shared_constants_workflow_step_enum__WEBPACK_IMPORTED_MODULE_0__.WorkflowStep.Draft].toLowerCase();
        this.isExpanded = (data) => data.hasChildren && data.expanded;
    }
    ngOnInit() {
    }
    itemExpanded(data) {
        data.expanded = true;
        this.expandedTrigger.emit(data);
    }
    itemCollapsed(data) {
        data.expanded = false;
        if (data.subChild) {
            data.subChild.forEach((sb) => {
                this.itemCollapsed(sb);
            });
        }
    }
}
Carrier411AdminNavbarLevelsComponent.ɵfac = function Carrier411AdminNavbarLevelsComponent_Factory(t) { return new (t || Carrier411AdminNavbarLevelsComponent)(); };
Carrier411AdminNavbarLevelsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: Carrier411AdminNavbarLevelsComponent, selectors: [["carrier411-admin-navbar-levels"]], inputs: { items: "items" }, outputs: { expandedTrigger: "expanded" }, decls: 1, vars: 1, consts: [["class", "custom-tree-view", 4, "ngIf"], [1, "custom-tree-view"], [4, "ngFor", "ngForOf"], ["liItem", ""], ["routerLinkActive", "nav-item-active", 3, "routerLinkActiveOptions"], ["class", "toggle-icon", 3, "icon", "click", 4, "ngIf"], [1, "col", "blue-link", "nav-menu-link", 3, "routerLink", "queryParams", "skipLocationChange"], [1, "mr-2", "text-break"], [1, "status-container"], ["width", "auto", 3, "content"], [3, "class", 4, "ngIf"], [3, "icon"], [3, "items", "expanded", 4, "ngIf"], [1, "toggle-icon", 3, "icon", "click"], [3, "items", "expanded"]], template: function Carrier411AdminNavbarLevelsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, Carrier411AdminNavbarLevelsComponent_ul_0_Template, 2, 1, "ul", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.items != null && ctx.items.length);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkActive, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__.FaIconComponent, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, _syncfusion_ej2_angular_popups__WEBPACK_IMPORTED_MODULE_7__.TooltipComponent, Carrier411AdminNavbarLevelsComponent], styles: [".custom-tree-view[_ngcontent-%COMP%] {\n  list-style: none;\n}\n.custom-tree-view[_ngcontent-%COMP%]   .toggle-icon[_ngcontent-%COMP%] {\n  font-size: 10px;\n  padding: 0.5rem;\n}\n.custom-tree-view[_ngcontent-%COMP%]   .level-wrapper[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n}\n.custom-tree-view[_ngcontent-%COMP%]   .level-wrapper.nav-item-active[_ngcontent-%COMP%] {\n  background-color: var(--white-smoke);\n  border-color: var(--white-smoke);\n}\n.custom-tree-view[_ngcontent-%COMP%]   .level-wrapper.no-children[_ngcontent-%COMP%] {\n  padding-left: 20px;\n}\n.custom-tree-view[_ngcontent-%COMP%]   .level-wrapper[_ngcontent-%COMP%]   .nav-menu-link[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  padding: 0.4rem 0;\n}\n.custom-tree-view[_ngcontent-%COMP%]   .level-wrapper[_ngcontent-%COMP%]   .nav-menu-link[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  line-height: 15px;\n  font-family: var(--montserrat);\n  font-size: 14px;\n}\n.custom-tree-view[_ngcontent-%COMP%]   .level-wrapper[_ngcontent-%COMP%]   .nav-menu-link[_ngcontent-%COMP%]   .status-container[_ngcontent-%COMP%] {\n  display: flex;\n}\n.custom-tree-view[_ngcontent-%COMP%]   .level-wrapper[_ngcontent-%COMP%]   .nav-menu-link[_ngcontent-%COMP%]   .status-container[_ngcontent-%COMP%]   .status-icon[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  width: 15px;\n  height: 15px;\n  justify-content: center;\n  color: var(--white);\n  font-size: 10px;\n  padding-top: 2px;\n}\n.custom-tree-view[_ngcontent-%COMP%]   .level-wrapper[_ngcontent-%COMP%]   .nav-menu-link[_ngcontent-%COMP%]   .status-container[_ngcontent-%COMP%]   .status-icon[_ngcontent-%COMP%]:first-child {\n  margin-left: 0.25rem;\n  margin-right: 0.25rem;\n}\n.custom-tree-view[_ngcontent-%COMP%]   .level-wrapper[_ngcontent-%COMP%]   .nav-menu-link[_ngcontent-%COMP%]   .status-container[_ngcontent-%COMP%]   .status-icon.draft[_ngcontent-%COMP%] {\n  background-color: var(--graylight);\n}\n.custom-tree-view[_ngcontent-%COMP%]   .level-wrapper[_ngcontent-%COMP%]   .nav-menu-link[_ngcontent-%COMP%]   .status-container[_ngcontent-%COMP%]   .status-icon.pendingapproval[_ngcontent-%COMP%], .custom-tree-view[_ngcontent-%COMP%]   .level-wrapper[_ngcontent-%COMP%]   .nav-menu-link[_ngcontent-%COMP%]   .status-container[_ngcontent-%COMP%]   .status-icon.pendingpublish[_ngcontent-%COMP%] {\n  background-color: var(--yellow);\n}\n.custom-tree-view[_ngcontent-%COMP%]   .level-wrapper[_ngcontent-%COMP%]   .nav-menu-link[_ngcontent-%COMP%]   .status-container[_ngcontent-%COMP%]   .status-icon.published[_ngcontent-%COMP%] {\n  background-color: var(--green);\n}\n.custom-tree-view[_ngcontent-%COMP%]   .level-wrapper[_ngcontent-%COMP%]   .nav-menu-link[_ngcontent-%COMP%]   .status-container[_ngcontent-%COMP%]   .status-icon.deleterequested[_ngcontent-%COMP%], .custom-tree-view[_ngcontent-%COMP%]   .level-wrapper[_ngcontent-%COMP%]   .nav-menu-link[_ngcontent-%COMP%]   .status-container[_ngcontent-%COMP%]   .status-icon.pendingdelete[_ngcontent-%COMP%], .custom-tree-view[_ngcontent-%COMP%]   .level-wrapper[_ngcontent-%COMP%]   .nav-menu-link[_ngcontent-%COMP%]   .status-container[_ngcontent-%COMP%]   .status-icon.deleted[_ngcontent-%COMP%] {\n  background-color: var(--red);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcnJpZXI0MTEtYWRtaW4tbmF2YmFyLWxldmVscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FBQ0Y7QUFDRTtFQUNFLGVBQUE7RUFDQSxlQUFBO0FBQ0o7QUFFRTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFBSjtBQUVJO0VBQ0Usb0NBQUE7RUFDQSxnQ0FBQTtBQUFOO0FBR0k7RUFDRSxrQkFBQTtBQUROO0FBSUk7RUFDRSw4QkFBQTtFQUNBLGlCQUFBO0FBRk47QUFJTTtFQUNFLGlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0FBRlI7QUFLTTtFQUNFLGFBQUE7QUFIUjtBQUtRO0VBTUUsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFSVjtBQUhVO0VBQ0Usb0JBQUE7RUFDQSxxQkFBQTtBQUtaO0FBTVU7RUFDRSxrQ0FBQTtBQUpaO0FBT1U7RUFFRSwrQkFBQTtBQU5aO0FBU1U7RUFDRSw4QkFBQTtBQVBaO0FBVVU7RUFHRSw0QkFBQTtBQVZaIiwiZmlsZSI6ImNhcnJpZXI0MTEtYWRtaW4tbmF2YmFyLWxldmVscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jdXN0b20tdHJlZS12aWV3IHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG5cclxuICAudG9nZ2xlLWljb24ge1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgcGFkZGluZzogMC41cmVtO1xyXG4gIH1cclxuXHJcbiAgLmxldmVsLXdyYXBwZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgJi5uYXYtaXRlbS1hY3RpdmUge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZS1zbW9rZSk7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0td2hpdGUtc21va2UpO1xyXG4gICAgfVxyXG5cclxuICAgICYubm8tY2hpbGRyZW4ge1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLm5hdi1tZW51LWxpbmsge1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgIHBhZGRpbmc6IDAuNHJlbSAwO1xyXG5cclxuICAgICAgbGFiZWwge1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1tb250c2VycmF0KTtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zdGF0dXMtY29udGFpbmVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgICAgICAuc3RhdHVzLWljb24ge1xyXG4gICAgICAgICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwLjI1cmVtO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuMjVyZW07XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgIHdpZHRoOiAxNXB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgICAgcGFkZGluZy10b3A6IDJweDtcclxuXHJcbiAgICAgICAgICAmLmRyYWZ0IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JheWxpZ2h0KTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAmLnBlbmRpbmdhcHByb3ZhbCxcclxuICAgICAgICAgICYucGVuZGluZ3B1Ymxpc2gge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS15ZWxsb3cpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICYucHVibGlzaGVkIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4pO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICYuZGVsZXRlcmVxdWVzdGVkLFxyXG4gICAgICAgICAgJi5wZW5kaW5nZGVsZXRlLFxyXG4gICAgICAgICAgJi5kZWxldGVkIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVkKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"], data: { animation: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.trigger)('slide', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.transition)(":enter", [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({ transform: "translateY(100%)", opacity: 0 }),
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.animate)('200ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({ transform: "translateY(-100%)", opacity: 1 }))
                ]),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.transition)(':leave', [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({ transform: 'translateX(0)', opacity: 1 }),
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.animate)('200ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({ transform: 'translateX(100%)', opacity: 0 }))
                ])
            ])
        ] } });


/***/ }),

/***/ 11037:
/*!**********************************************************************************************************!*\
  !*** ./src/app/carrier411/admin/components/carrier411-admin-navbar/carrier411-admin-navbar.component.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Carrier411AdminNavbarComponent": () => (/* binding */ Carrier411AdminNavbarComponent)
/* harmony export */ });
/* harmony import */ var src_app_shared_constants_application_urls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/constants/application-urls */ 85561);
/* harmony import */ var _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/pro-solid-svg-icons */ 61250);
/* harmony import */ var src_app_shared_utilities_workflow_step_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/utilities/workflow-step-utils */ 37916);
/* harmony import */ var src_app_carrier411_shared_constants_content_type_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/carrier411/shared/constants/content-type.enum */ 93606);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_carrier411_admin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/carrier411-admin.service */ 61972);
/* harmony import */ var _services_carrier411_admin_navbar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/carrier411-admin-navbar.service */ 98252);
/* harmony import */ var _shared_components_return_button_return_button_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/components/return-button/return-button.component */ 44188);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _carrier411_admin_navbar_levels_carrier411_admin_navbar_levels_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../carrier411-admin-navbar-levels/carrier411-admin-navbar-levels.component */ 38129);










class Carrier411AdminNavbarComponent {
    constructor(carrier411AdminService, navService) {
        this.carrier411AdminService = carrier411AdminService;
        this.navService = navService;
        this.Carrier411ManagementURL = src_app_shared_constants_application_urls__WEBPACK_IMPORTED_MODULE_0__.ApplicationUrls.Carrier411Admin.Carrier411Management.path;
        this.WorkflowStepUtils = src_app_shared_utilities_workflow_step_utils__WEBPACK_IMPORTED_MODULE_1__.WorkflowStepUtils;
        this.faCheck = _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faCheck;
        this.decodeURIComponent = decodeURIComponent;
        this.returnUrl = src_app_shared_constants_application_urls__WEBPACK_IMPORTED_MODULE_0__.ApplicationUrls.Carrier411Admin.path;
        this.items = [];
    }
    ngOnInit() {
        this.navCategoriesSubscription = this.navService.navbarCategories$.subscribe(items => {
            this.setupCategoryTree(items);
        });
        this.navSubCategoriesSubscription = this.navService.navbarSubCategories$.subscribe(items => {
            this.setupSubCategoryTree(items);
        });
        this.navQuestionsSubscription = this.navService.navbarQuestions$.subscribe(items => {
            this.setupQuestionsTree(items);
        });
        this.navAnswersSubscription = this.navService.navbarAnswers$.subscribe(items => {
            this.setupAnswersTree(items);
        });
    }
    ngOnDestroy() {
        this.navService.injectCategories([]);
        this.navCategoriesSubscription.unsubscribe();
        this.navService.injectSubCategories(0, []);
        this.navSubCategoriesSubscription.unsubscribe();
        this.navService.injectQuestions(0, []);
        this.navQuestionsSubscription.unsubscribe();
        this.navService.injectAnswers(0, []);
        this.navAnswersSubscription.unsubscribe();
    }
    itemExpanded(data) {
        const ids = data.id.toString().split('.');
        const contentType = this.getContentType(ids);
        if (contentType == src_app_carrier411_shared_constants_content_type_enum__WEBPACK_IMPORTED_MODULE_2__.ContentType.Category) {
            this.loadSubCategories(ids);
        }
        else if (contentType == src_app_carrier411_shared_constants_content_type_enum__WEBPACK_IMPORTED_MODULE_2__.ContentType.SubCategory) {
            this.loadQuestions(ids);
        }
        else if (contentType == src_app_carrier411_shared_constants_content_type_enum__WEBPACK_IMPORTED_MODULE_2__.ContentType.Question) {
            this.loadAnswers(ids);
        }
    }
    getContentType(ids) {
        switch (ids.length) {
            case 1:
                return src_app_carrier411_shared_constants_content_type_enum__WEBPACK_IMPORTED_MODULE_2__.ContentType.Category;
            case 2:
                return src_app_carrier411_shared_constants_content_type_enum__WEBPACK_IMPORTED_MODULE_2__.ContentType.SubCategory;
            case 3:
                return src_app_carrier411_shared_constants_content_type_enum__WEBPACK_IMPORTED_MODULE_2__.ContentType.Question;
            case 4:
                return src_app_carrier411_shared_constants_content_type_enum__WEBPACK_IMPORTED_MODULE_2__.ContentType.Answer;
            default:
                return undefined;
        }
    }
    setupEntireTree(dataSource) {
        if (dataSource == undefined)
            return;
        this.items = dataSource;
    }
    setupNode(currentData, node, items) {
        node[0].subChild = items === null || items === void 0 ? void 0 : items.map(i => {
            var _a;
            const subChild = (_a = node[0].subChild) === null || _a === void 0 ? void 0 : _a.filter((sc) => sc.id == i.id);
            if (subChild && subChild.length) {
                i.subChild = subChild.flatMap((sc) => sc.subChild).filter((sc) => sc != null);
            }
            return i;
        });
        node[0].hasChildren = node[0].subChild != null && node[0].subChild.length;
        node[0].expanded = true;
        this.setupEntireTree(currentData);
    }
    /* Category */
    setupCategoryTree(items) {
        if (items == undefined) {
            this.items = [];
        }
        const formated = this.getFormatedCategories(items);
        this.setupEntireTree(formated);
    }
    getFormatedCategories(items) {
        if (items == undefined)
            return undefined;
        return items.map((c) => {
            return {
                id: c.item.id,
                name: c.item.name,
                hasChildren: c.childrenCount != null && c.childrenCount > 0,
                link: src_app_shared_constants_application_urls__WEBPACK_IMPORTED_MODULE_0__.ApplicationUrls.Carrier411Admin.Carrier411Management.SubCategoryManagement.path,
                queryParams: {
                    categoryId: c.item.id
                },
                hasPublishedVersion: c.item.hasPublishedVersion,
                workflowStep: c.item.workflowStep
            };
        });
    }
    /* Sub Category */
    loadSubCategories(ids) {
        const categoryId = Number(ids[0]);
        if (this.items.some((c) => c.id == categoryId && (c.subChild == null || c.subChild.length == 0))) {
            this.carrier411AdminService.getSubCategories(categoryId).subscribe((data) => {
                if (data.isSuccess) {
                    this.setupSubCategoryTree({
                        parentId: categoryId,
                        items: data.value
                    });
                }
            });
        }
    }
    setupSubCategoryTree(items) {
        if (items == undefined)
            return;
        const category = this.items.filter(c => c.id == items.parentId);
        if (category && category.length) {
            const formated = this.getFormatedSubCategories(items.parentId, items.items);
            this.setupNode(this.items, category, formated);
        }
    }
    getFormatedSubCategories(parentId, items) {
        if (items == undefined)
            return undefined;
        return items.map((sc) => {
            return {
                id: parentId + '.' + sc.item.id,
                name: sc.item.name,
                hasChildren: sc.childrenCount != null && sc.childrenCount > 0,
                link: src_app_shared_constants_application_urls__WEBPACK_IMPORTED_MODULE_0__.ApplicationUrls.Carrier411Admin.Carrier411Management.QuestionManagement.path,
                queryParams: {
                    subCategoryId: sc.item.id
                },
                hasPublishedVersion: sc.item.hasPublishedVersion,
                workflowStep: sc.item.workflowStep
            };
        });
    }
    /* Questions */
    loadQuestions(ids) {
        const categoryId = Number(ids[0]);
        const subCategoryId = Number(ids[1]);
        const nodeId = `${categoryId}.${subCategoryId}`;
        if (this.items.some((c) => { var _a; return (_a = c.subChild) === null || _a === void 0 ? void 0 : _a.some((sc) => sc.id == nodeId && (sc.subChild == null || sc.subChild.length == 0)); })) {
            this.carrier411AdminService.getQuestions(subCategoryId).subscribe((data) => {
                if (data.isSuccess) {
                    this.setupQuestionsTree({
                        parentId: subCategoryId,
                        items: data.value
                    });
                }
            });
        }
    }
    setupQuestionsTree(items) {
        if (items == undefined)
            return;
        const subCategory = this.items.flatMap(sc => sc.subChild)
            .filter(sc => { var _a; return (_a = sc === null || sc === void 0 ? void 0 : sc.id) === null || _a === void 0 ? void 0 : _a.toString().endsWith(items.parentId); });
        if (subCategory && subCategory.length) {
            const formated = this.getFormatedQuestions(subCategory[0].id, items.items);
            this.setupNode(this.items, subCategory, formated);
        }
    }
    getFormatedQuestions(parentId, items) {
        if (items == undefined)
            return undefined;
        return items.map((q) => {
            return {
                id: parentId + '.' + q.item.id,
                name: q.item.text,
                hasChildren: q.childrenCount != null && q.childrenCount > 0,
                link: src_app_shared_constants_application_urls__WEBPACK_IMPORTED_MODULE_0__.ApplicationUrls.Carrier411Admin.Carrier411Management.AnswerManagement.path,
                queryParams: {
                    questionId: q.item.id
                },
                hasPublishedVersion: q.item.hasPublishedVersion,
                workflowStep: q.item.workflowStep
            };
        });
    }
    /* Answers */
    loadAnswers(ids) {
        const categoryId = Number(ids[0]);
        const subCategoryId = Number(ids[1]);
        const questionId = Number(ids[2]);
        const nodeId = `${categoryId}.${subCategoryId}.${questionId}`;
        const question = this.items.flatMap(c => c.subChild)
            .flatMap(sc => sc === null || sc === void 0 ? void 0 : sc.subChild)
            .filter(q => { var _a; return (_a = q === null || q === void 0 ? void 0 : q.id) === null || _a === void 0 ? void 0 : _a.toString().endsWith(nodeId); });
        if (question && question.length > 0 && (question[0].subChild == null || question[0].subChild.length == 0)) {
            this.carrier411AdminService.getAnswers(questionId).subscribe((data) => {
                if (data.isSuccess) {
                    this.setupAnswersTree({
                        parentId: questionId,
                        items: data.value
                    });
                }
            });
        }
    }
    setupAnswersTree(items) {
        if (items == undefined)
            return;
        const question = this.items.flatMap(c => c.subChild)
            .flatMap(sc => sc === null || sc === void 0 ? void 0 : sc.subChild)
            .filter(q => { var _a; return (_a = q === null || q === void 0 ? void 0 : q.id) === null || _a === void 0 ? void 0 : _a.toString().endsWith(items.parentId); });
        if (question && question.length) {
            const formated = this.getFormatedAnswers(items.parentId, question[0].id, items.items);
            this.setupNode(this.items, question, formated);
        }
    }
    getFormatedAnswers(questionId, parentId, items) {
        if (items == undefined)
            return undefined;
        return items.map((a) => {
            return {
                id: parentId + '.' + a.item.id,
                name: a.item.carrier.name,
                link: src_app_shared_constants_application_urls__WEBPACK_IMPORTED_MODULE_0__.ApplicationUrls.Carrier411Admin.Carrier411Management.AnswerManagement.path,
                queryParams: {
                    questionId: questionId,
                    answerId: a.item.id
                },
                hasPublishedVersion: a.item.hasPublishedVersion,
                workflowStep: a.item.workflowStep
            };
        });
    }
}
Carrier411AdminNavbarComponent.ɵfac = function Carrier411AdminNavbarComponent_Factory(t) { return new (t || Carrier411AdminNavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_carrier411_admin_service__WEBPACK_IMPORTED_MODULE_3__.Carrier411AdminService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_carrier411_admin_navbar_service__WEBPACK_IMPORTED_MODULE_4__.Carrier411AdminNavbarService)); };
Carrier411AdminNavbarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: Carrier411AdminNavbarComponent, selectors: [["carrier411-admin-navbar"]], decls: 7, vars: 3, consts: [[1, "carrier411-admin-nav-bar", "pr-2"], ["sufix", "To Main", 3, "returnUrl"], [1, "nav-title"], [1, "title", "mb-1", 3, "routerLink"], [3, "items", "expanded"]], template: function Carrier411AdminNavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "return-button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Question Management");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "Carrier 411");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "carrier411-admin-navbar-levels", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("expanded", function Carrier411AdminNavbarComponent_Template_carrier411_admin_navbar_levels_expanded_6_listener($event) { return ctx.itemExpanded($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("returnUrl", ctx.returnUrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", ctx.Carrier411ManagementURL);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("items", ctx.items);
    } }, directives: [_shared_components_return_button_return_button_component__WEBPACK_IMPORTED_MODULE_5__.ReturnButtonComponent, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLink, _carrier411_admin_navbar_levels_carrier411_admin_navbar_levels_component__WEBPACK_IMPORTED_MODULE_6__.Carrier411AdminNavbarLevelsComponent], styles: [".carrier411-admin-nav-bar[_ngcontent-%COMP%] {\n  width: 300px;\n  border-right: 1px solid var(--border-color);\n  min-height: calc(100vh - 110px);\n  margin-right: 20px;\n}\n.carrier411-admin-nav-bar[_ngcontent-%COMP%]   .nav-title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  text-transform: uppercase;\n  margin-bottom: 15px;\n}\n.carrier411-admin-nav-bar[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  cursor: pointer;\n  width: 100%;\n  font-size: 14px;\n}\n.carrier411-admin-nav-bar[_ngcontent-%COMP%]   .e-treeview[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.carrier411-admin-nav-bar[_ngcontent-%COMP%]   .e-treeview[_ngcontent-%COMP%]   .e-list-item[_ngcontent-%COMP%]    > .e-text-content[_ngcontent-%COMP%]:has( > .e-list-text[_ngcontent-%COMP%]   a.nav-item-active)[_ngcontent-%COMP%] {\n  background-color: var(--white-smoke);\n  border-color: var(--white-smoke);\n}\n.carrier411-admin-nav-bar[_ngcontent-%COMP%]   .e-treeview[_ngcontent-%COMP%]   .e-list-item.e-active[_ngcontent-%COMP%]    > .e-text-content[_ngcontent-%COMP%], .carrier411-admin-nav-bar[_ngcontent-%COMP%]   .e-treeview[_ngcontent-%COMP%]   .e-list-item.e-active[_ngcontent-%COMP%]   .e-list-item[_ngcontent-%COMP%], .carrier411-admin-nav-bar[_ngcontent-%COMP%]   .e-treeview[_ngcontent-%COMP%]   .e-list-item.e-hover[_ngcontent-%COMP%]    > .e-text-content[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: transparent;\n}\n.carrier411-admin-nav-bar[_ngcontent-%COMP%]   .e-treeview[_ngcontent-%COMP%]   .e-text-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: stretch;\n}\n.carrier411-admin-nav-bar[_ngcontent-%COMP%]   .e-treeview[_ngcontent-%COMP%]   .e-text-content[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: stretch;\n}\n.carrier411-admin-nav-bar[_ngcontent-%COMP%]   .e-treeview[_ngcontent-%COMP%]   .e-text-content[_ngcontent-%COMP%]   .e-icon-collapsible[_ngcontent-%COMP%], .carrier411-admin-nav-bar[_ngcontent-%COMP%]   .e-treeview[_ngcontent-%COMP%]   .e-text-content[_ngcontent-%COMP%]   .e-icon-expandable[_ngcontent-%COMP%] {\n  margin: 0 5px 0 -25px;\n}\n.carrier411-admin-nav-bar[_ngcontent-%COMP%]   .e-treeview[_ngcontent-%COMP%]   .e-text-content[_ngcontent-%COMP%]   .e-list-text[_ngcontent-%COMP%] {\n  min-height: 25px;\n  width: 100%;\n  padding: 0;\n}\n.carrier411-admin-nav-bar[_ngcontent-%COMP%]   .nav-menu-link[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n.carrier411-admin-nav-bar[_ngcontent-%COMP%]   .nav-menu-link[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  line-height: 15px;\n}\n.carrier411-admin-nav-bar[_ngcontent-%COMP%]   .nav-menu-link[_ngcontent-%COMP%]   .status-container[_ngcontent-%COMP%] {\n  display: flex;\n}\n.carrier411-admin-nav-bar[_ngcontent-%COMP%]   .nav-menu-link[_ngcontent-%COMP%]   .status-container[_ngcontent-%COMP%]   .status-icon[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  width: 15px;\n  height: 15px;\n  justify-content: center;\n  color: var(--white);\n  font-size: 10px;\n  padding-top: 2px;\n}\n.carrier411-admin-nav-bar[_ngcontent-%COMP%]   .nav-menu-link[_ngcontent-%COMP%]   .status-container[_ngcontent-%COMP%]   .status-icon[_ngcontent-%COMP%]:first-child {\n  margin-left: 0.25rem;\n  margin-right: 0.25rem;\n}\n.carrier411-admin-nav-bar[_ngcontent-%COMP%]   .nav-menu-link[_ngcontent-%COMP%]   .status-container[_ngcontent-%COMP%]   .status-icon.draft[_ngcontent-%COMP%] {\n  background-color: var(--graylight);\n}\n.carrier411-admin-nav-bar[_ngcontent-%COMP%]   .nav-menu-link[_ngcontent-%COMP%]   .status-container[_ngcontent-%COMP%]   .status-icon.pendingapproval[_ngcontent-%COMP%], .carrier411-admin-nav-bar[_ngcontent-%COMP%]   .nav-menu-link[_ngcontent-%COMP%]   .status-container[_ngcontent-%COMP%]   .status-icon.pendingpublish[_ngcontent-%COMP%] {\n  background-color: var(--yellow);\n}\n.carrier411-admin-nav-bar[_ngcontent-%COMP%]   .nav-menu-link[_ngcontent-%COMP%]   .status-container[_ngcontent-%COMP%]   .status-icon.published[_ngcontent-%COMP%] {\n  background-color: var(--green);\n}\n.carrier411-admin-nav-bar[_ngcontent-%COMP%]   .nav-menu-link[_ngcontent-%COMP%]   .status-container[_ngcontent-%COMP%]   .status-icon.deleterequested[_ngcontent-%COMP%], .carrier411-admin-nav-bar[_ngcontent-%COMP%]   .nav-menu-link[_ngcontent-%COMP%]   .status-container[_ngcontent-%COMP%]   .status-icon.pendingdelete[_ngcontent-%COMP%], .carrier411-admin-nav-bar[_ngcontent-%COMP%]   .nav-menu-link[_ngcontent-%COMP%]   .status-container[_ngcontent-%COMP%]   .status-icon.deleted[_ngcontent-%COMP%] {\n  background-color: var(--red);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcnJpZXI0MTEtYWRtaW4tbmF2YmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLDJDQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtBQUNGO0FBQ0U7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBQ0o7QUFFRTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQUFKO0FBSUk7RUFDRSxnQkFBQTtBQUZOO0FBTU07RUFDRSxvQ0FBQTtFQUNBLGdDQUFBO0FBSlI7QUFPTTtFQUdFLDZCQUFBO0VBQ0EseUJBQUE7QUFQUjtBQVdJO0VBQ0UsYUFBQTtFQUNBLG9CQUFBO0FBVE47QUFXTTtFQUNFLGFBQUE7RUFDQSxvQkFBQTtBQVRSO0FBWU07O0VBRUUscUJBQUE7QUFWUjtBQWFNO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQVhSO0FBZ0JFO0VBQ0UsOEJBQUE7QUFkSjtBQWdCSTtFQUNFLGlCQUFBO0FBZE47QUFpQkk7RUFDRSxhQUFBO0FBZk47QUFpQk07RUFNRSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQXBCUjtBQVNRO0VBQ0Usb0JBQUE7RUFDQSxxQkFBQTtBQVBWO0FBa0JRO0VBQ0Usa0NBQUE7QUFoQlY7QUFtQlE7RUFFRSwrQkFBQTtBQWxCVjtBQXFCUTtFQUNFLDhCQUFBO0FBbkJWO0FBc0JRO0VBR0UsNEJBQUE7QUF0QlYiLCJmaWxlIjoiY2FycmllcjQxMS1hZG1pbi1uYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FycmllcjQxMS1hZG1pbi1uYXYtYmFyIHtcclxuICB3aWR0aDogMzAwcHg7XHJcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcclxuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTEwcHgpO1xyXG4gIG1hcmdpbi1yaWdodDogMjBweDtcclxuXHJcbiAgLm5hdi10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgfVxyXG5cclxuICAudGl0bGUge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG5cclxuICAuZS10cmVldmlldyB7XHJcbiAgICB1bCB7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB9XHJcblxyXG4gICAgLmUtbGlzdC1pdGVtIHtcclxuICAgICAgPiAuZS10ZXh0LWNvbnRlbnQ6aGFzKD4gLmUtbGlzdC10ZXh0IGEubmF2LWl0ZW0tYWN0aXZlKSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUtc21va2UpO1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0td2hpdGUtc21va2UpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmUtYWN0aXZlID4gLmUtdGV4dC1jb250ZW50LFxyXG4gICAgICAmLmUtYWN0aXZlIC5lLWxpc3QtaXRlbSxcclxuICAgICAgJi5lLWhvdmVyID4gLmUtdGV4dC1jb250ZW50IHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmUtdGV4dC1jb250ZW50IHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcblxyXG4gICAgICA+ICoge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5lLWljb24tY29sbGFwc2libGUsXHJcbiAgICAgIC5lLWljb24tZXhwYW5kYWJsZSB7XHJcbiAgICAgICAgbWFyZ2luOiAwIDVweCAwIC0yNXB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuZS1saXN0LXRleHQge1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLm5hdi1tZW51LWxpbmsge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAgIGxhYmVsIHtcclxuICAgICAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnN0YXR1cy1jb250YWluZXIge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgICAgLnN0YXR1cy1pY29uIHtcclxuICAgICAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwLjI1cmVtO1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjI1cmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICB3aWR0aDogMTVweDtcclxuICAgICAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlKTtcclxuICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDJweDtcclxuXHJcbiAgICAgICAgJi5kcmFmdCB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmF5bGlnaHQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi5wZW5kaW5nYXBwcm92YWwsXHJcbiAgICAgICAgJi5wZW5kaW5ncHVibGlzaCB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS15ZWxsb3cpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi5wdWJsaXNoZWQge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi5kZWxldGVyZXF1ZXN0ZWQsXHJcbiAgICAgICAgJi5wZW5kaW5nZGVsZXRlLFxyXG4gICAgICAgICYuZGVsZXRlZCB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 67917:
/*!******************************************************************************************************!*\
  !*** ./src/app/carrier411/admin/components/carrier411-management/carrier411-management.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Carrier411ManagementComponent": () => (/* binding */ Carrier411ManagementComponent)
/* harmony export */ });
/* harmony import */ var src_app_shared_constants_tools_list_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/constants/tools-list.enum */ 99485);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _carrier411_admin_navbar_carrier411_admin_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../carrier411-admin-navbar/carrier411-admin-navbar.component */ 11037);
/* harmony import */ var _shared_components_tool_hidden_warning_tool_hidden_warning_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/tool-hidden-warning/tool-hidden-warning.component */ 37840);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);





class Carrier411ManagementComponent {
    constructor() {
        this.Carrier411Id = src_app_shared_constants_tools_list_enum__WEBPACK_IMPORTED_MODULE_0__.ToolsList.Carrier411;
    }
    ngOnInit() {
    }
}
Carrier411ManagementComponent.ɵfac = function Carrier411ManagementComponent_Factory(t) { return new (t || Carrier411ManagementComponent)(); };
Carrier411ManagementComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: Carrier411ManagementComponent, selectors: [["app-carrier411-management"]], decls: 5, vars: 1, consts: [[1, "carrier411-admin-management"], [1, "content"], [3, "toolId"]], template: function Carrier411ManagementComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "carrier411-admin-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "tool-hidden-warning", 2)(4, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("toolId", ctx.Carrier411Id);
    } }, directives: [_carrier411_admin_navbar_carrier411_admin_navbar_component__WEBPACK_IMPORTED_MODULE_1__.Carrier411AdminNavbarComponent, _shared_components_tool_hidden_warning_tool_hidden_warning_component__WEBPACK_IMPORTED_MODULE_2__.ToolHiddenWarningComponent, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet], styles: [".carrier411-admin-management[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n.carrier411-admin-management[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child {\n  flex: 1 0 0%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcnJpZXI0MTEtbWFuYWdlbWVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQUNGO0FBQ0U7RUFDRSxZQUFBO0FBQ0oiLCJmaWxlIjoiY2FycmllcjQxMS1tYW5hZ2VtZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcnJpZXI0MTEtYWRtaW4tbWFuYWdlbWVudCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cclxuICBkaXY6bGFzdC1jaGlsZCB7XHJcbiAgICBmbGV4OiAxIDAgMCU7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 60102:
/*!******************************************************************************************!*\
  !*** ./src/app/carrier411/admin/components/category-create/category-create.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryCreateComponent": () => (/* binding */ CategoryCreateComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _syncfusion_ej2_angular_inputs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @syncfusion/ej2-angular-inputs */ 53691);
/* harmony import */ var src_app_carrier411_shared_constants_workflow_step_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/carrier411/shared/constants/workflow-step.enum */ 48473);
/* harmony import */ var _utilities_content_type_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities/content-type-utils */ 65196);
/* harmony import */ var src_app_shared_services_input_validator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/input-validator.service */ 68516);
/* harmony import */ var _services_carrier411_admin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/carrier411-admin.service */ 61972);
/* harmony import */ var src_app_core_services_result_handler_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/result.handler.service */ 32464);
/* harmony import */ var _shared_components_modal_header_modal_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/components/modal-header/modal-header.component */ 89519);
/* harmony import */ var _shared_components_field_error_display_field_error_display_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/components/field-error-display/field-error-display.component */ 76530);
/* harmony import */ var _syncfusion_ej2_angular_buttons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @syncfusion/ej2-angular-buttons */ 78218);
/* harmony import */ var _content_type_save_button_content_type_save_button_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../content-type-save-button/content-type-save-button.component */ 37883);















class CategoryCreateComponent {
    constructor(inputValidatorService, carrier411AdminService, resultHandler) {
        this.inputValidatorService = inputValidatorService;
        this.carrier411AdminService = carrier411AdminService;
        this.resultHandler = resultHandler;
        this.WorkflowStep = src_app_carrier411_shared_constants_workflow_step_enum__WEBPACK_IMPORTED_MODULE_0__.WorkflowStep;
        this.onCloseTrigger = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
        this.created = false;
    }
    ngOnInit() {
        this.initializeForm();
    }
    initializeForm(created = false) {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroup({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl('', [_syncfusion_ej2_angular_inputs__WEBPACK_IMPORTED_MODULE_10__.FormValidators.required])
        });
        this.created = created;
    }
    onSave(option) {
        this.form.markAllAsTouched();
        if (!this.form.valid) {
            return;
        }
        const model = this.form.getRawValue();
        model.workflowStep = _utilities_content_type_utils__WEBPACK_IMPORTED_MODULE_1__.ContentTypeUtils.getWorkflowStep(option);
        this.saveCategory(model, option);
    }
    onClose() {
        this.onCloseTrigger.emit(this.created);
    }
    saveCategory(model, step) {
        this.carrier411AdminService.createCategory(model).subscribe((data) => {
            this.resultHandler.handle(data).then((success) => {
                if (success) {
                    if (_utilities_content_type_utils__WEBPACK_IMPORTED_MODULE_1__.ContentTypeUtils.finishSaveAction(step)) {
                        this.onCloseTrigger.emit(true);
                    }
                    else {
                        this.initializeForm(true);
                    }
                }
            });
        }, (err) => this.resultHandler.handle(err.error));
    }
}
CategoryCreateComponent.ɵfac = function CategoryCreateComponent_Factory(t) { return new (t || CategoryCreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_shared_services_input_validator_service__WEBPACK_IMPORTED_MODULE_2__.InputValidatorService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_carrier411_admin_service__WEBPACK_IMPORTED_MODULE_3__.Carrier411AdminService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_core_services_result_handler_service__WEBPACK_IMPORTED_MODULE_4__.ResultHandlerService)); };
CategoryCreateComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: CategoryCreateComponent, selectors: [["category-create"]], outputs: { onCloseTrigger: "onClose" }, decls: 13, vars: 2, consts: [[3, "formGroup"], [1, "container-fluid", "pt-3"], ["title", "New Category", 3, "onClose"], [1, "content"], [1, "form-group", "pt-2"], ["placeholder", "Category", "floatLabelType", "Always", "autocomplete", "off", "maxlength", "200", "required", "", "formControlName", "name"], ["errorMsg", "* This field is required.", 3, "displayError"], [1, "row", "pt-5"], [1, "col-md-4"], ["type", "button", "ejs-button", "", 1, "e-dark", "e-flat", "w-100", 3, "click"], [1, "col-md-4", "offset-md-4"], [1, "w-100", 3, "onSave"]], template: function CategoryCreateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "form", 0)(1, "div", 1)(2, "modal-header", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("onClose", function CategoryCreateComponent_Template_modal_header_onClose_2_listener() { return ctx.onClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 3)(4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "ejs-textbox", 5)(6, "app-field-error-display", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 7)(8, "div", 8)(9, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function CategoryCreateComponent_Template_button_click_9_listener() { return ctx.onClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "div", 10)(12, "content-type-save-button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("onSave", function CategoryCreateComponent_Template_content_type_save_button_onSave_12_listener($event) { return ctx.onSave($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("displayError", ctx.inputValidatorService.isInvalidRequired(ctx.form, "name"));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _shared_components_modal_header_modal_header_component__WEBPACK_IMPORTED_MODULE_5__.ModalHeaderComponent, _syncfusion_ej2_angular_inputs__WEBPACK_IMPORTED_MODULE_10__.TextBoxComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName, _shared_components_field_error_display_field_error_display_component__WEBPACK_IMPORTED_MODULE_6__.FieldErrorDisplayComponent, _syncfusion_ej2_angular_buttons__WEBPACK_IMPORTED_MODULE_11__.ButtonComponent, _content_type_save_button_content_type_save_button_component__WEBPACK_IMPORTED_MODULE_7__.ContentTypeSaveButtonComponent], encapsulation: 2 });


/***/ }),

/***/ 32780:
/*!**************************************************************************************!*\
  !*** ./src/app/carrier411/admin/components/category-edit/category-edit.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryEditComponent": () => (/* binding */ CategoryEditComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _syncfusion_ej2_angular_inputs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @syncfusion/ej2-angular-inputs */ 53691);
/* harmony import */ var _utilities_carrier411_admin_messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/carrier411-admin-messages */ 47555);
/* harmony import */ var src_app_shared_services_input_validator_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/input-validator.service */ 68516);
/* harmony import */ var _services_carrier411_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/carrier411-admin.service */ 61972);
/* harmony import */ var src_app_authentication_services_account_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/authentication/services/account.service */ 94398);
/* harmony import */ var src_app_core_services_result_handler_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/result.handler.service */ 32464);
/* harmony import */ var _shared_components_modal_header_modal_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/components/modal-header/modal-header.component */ 89519);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _shared_components_field_error_display_field_error_display_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/components/field-error-display/field-error-display.component */ 76530);
/* harmony import */ var _syncfusion_ej2_angular_buttons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @syncfusion/ej2-angular-buttons */ 78218);















function CategoryEditComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("innerHtml", ctx_r0.userWarningMessage, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeHtml"]);
} }
class CategoryEditComponent {
    constructor(inputValidatorService, carrier411AdminService, accountService, resultHandler) {
        this.inputValidatorService = inputValidatorService;
        this.carrier411AdminService = carrier411AdminService;
        this.accountService = accountService;
        this.resultHandler = resultHandler;
        this.onCloseTrigger = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
        this.userWarningMessage = '';
        this.edited = false;
        this.hasDifferentOwner = () => { var _a, _b; return ((_a = this.category) === null || _a === void 0 ? void 0 : _a.lastModifiedById) != ((_b = this.accountService.getUser()) === null || _b === void 0 ? void 0 : _b.id); };
    }
    ngOnInit() {
        this.initializeForm(undefined, false);
    }
    initializeForm(category, edited = false) {
        this.category = category;
        this.edited = edited;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroup({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(category === null || category === void 0 ? void 0 : category.name, [_syncfusion_ej2_angular_inputs__WEBPACK_IMPORTED_MODULE_9__.FormValidators.required])
        });
        this.setupUserWarning();
    }
    onSave() {
        this.form.markAllAsTouched();
        if (!this.form.valid) {
            return;
        }
        const model = this.form.getRawValue();
        model.workflowStep = this.category.workflowStep;
        this.updateCategory(model);
    }
    onClose() {
        this.onCloseTrigger.emit(this.edited);
    }
    updateCategory(model) {
        this.carrier411AdminService.updateCategory(this.category.id, model).subscribe((data) => {
            this.resultHandler.handle(data).then((success) => {
                if (success) {
                    this.onCloseTrigger.emit(true);
                }
            });
        }, (err) => this.resultHandler.handle(err.error));
    }
    setupUserWarning() {
        var _a;
        if (this.hasDifferentOwner()) {
            this.userWarningMessage = _utilities_carrier411_admin_messages__WEBPACK_IMPORTED_MODULE_0__.Carrier411AdminMessages.getUserEditorWarningMessage((_a = this.category) === null || _a === void 0 ? void 0 : _a.lastModifiedByName);
        }
        else {
            this.userWarningMessage = '';
        }
    }
}
CategoryEditComponent.ɵfac = function CategoryEditComponent_Factory(t) { return new (t || CategoryEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_input_validator_service__WEBPACK_IMPORTED_MODULE_1__.InputValidatorService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_carrier411_admin_service__WEBPACK_IMPORTED_MODULE_2__.Carrier411AdminService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_authentication_services_account_service__WEBPACK_IMPORTED_MODULE_3__.AccountService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_core_services_result_handler_service__WEBPACK_IMPORTED_MODULE_4__.ResultHandlerService)); };
CategoryEditComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: CategoryEditComponent, selectors: [["category-edit"]], outputs: { onCloseTrigger: "onClose" }, decls: 15, vars: 3, consts: [[3, "formGroup"], [1, "container-fluid", "pt-3", "edit-category-container"], ["title", "Edit Category", 3, "onClose"], ["class", "acknowledge-action", 4, "ngIf"], [1, "content"], [1, "form-group", "pt-2"], ["placeholder", "Category", "floatLabelType", "Always", "autocomplete", "off", "maxlength", "200", "required", "", "formControlName", "name"], ["errorMsg", "* This field is required.", 3, "displayError"], [1, "row", "pt-5"], [1, "col-md-4"], ["type", "button", "ejs-button", "", 1, "e-dark", "e-flat", "w-100", 3, "click"], [1, "col-md-4", "offset-md-4"], ["type", "button", "ejs-button", "", 1, "e-success", "w-100", 3, "click"], [1, "acknowledge-action"], [3, "innerHtml"]], template: function CategoryEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "form", 0)(1, "div", 1)(2, "modal-header", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onClose", function CategoryEditComponent_Template_modal_header_onClose_2_listener() { return ctx.onClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, CategoryEditComponent_div_3_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 4)(5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "ejs-textbox", 6)(7, "app-field-error-display", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 8)(9, "div", 9)(10, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CategoryEditComponent_Template_button_click_10_listener() { return ctx.onClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 11)(13, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CategoryEditComponent_Template_button_click_13_listener() { return ctx.onSave(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.userWarningMessage != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("displayError", ctx.inputValidatorService.isInvalidRequired(ctx.form, "name"));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _shared_components_modal_header_modal_header_component__WEBPACK_IMPORTED_MODULE_5__.ModalHeaderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _syncfusion_ej2_angular_inputs__WEBPACK_IMPORTED_MODULE_9__.TextBoxComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _shared_components_field_error_display_field_error_display_component__WEBPACK_IMPORTED_MODULE_6__.FieldErrorDisplayComponent, _syncfusion_ej2_angular_buttons__WEBPACK_IMPORTED_MODULE_11__.ButtonComponent], styles: [".edit-category-container[_ngcontent-%COMP%]   .acknowledge-action[_ngcontent-%COMP%] {\n  background: var(--acknowledge-background);\n  padding: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGVnb3J5LWVkaXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSx5Q0FBQTtFQUNBLGFBQUE7QUFBSiIsImZpbGUiOiJjYXRlZ29yeS1lZGl0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVkaXQtY2F0ZWdvcnktY29udGFpbmVyIHtcclxuICAuYWNrbm93bGVkZ2UtYWN0aW9uIHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWFja25vd2xlZGdlLWJhY2tncm91bmQpO1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 98650:
/*!**************************************************************************************************!*\
  !*** ./src/app/carrier411/admin/components/category-management/category-management.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryManagementComponent": () => (/* binding */ CategoryManagementComponent)
/* harmony export */ });
/* harmony import */ var _constants_content_type_action_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/content-type-action.enum */ 60344);
/* harmony import */ var src_app_shared_constants_application_urls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/constants/application-urls */ 85561);
/* harmony import */ var _content_type_management_content_type_management_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../content-type-management/content-type-management.component */ 6857);
/* harmony import */ var _utilities_content_type_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utilities/content-type-utils */ 65196);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_core_services_result_handler_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/result.handler.service */ 32464);
/* harmony import */ var _services_carrier411_admin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/carrier411-admin.service */ 61972);
/* harmony import */ var src_app_carrier411_shared_services_carrier411_roles_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/carrier411/shared/services/carrier411-roles.service */ 90673);
/* harmony import */ var _services_carrier411_admin_navbar_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/carrier411-admin-navbar.service */ 98252);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @syncfusion/ej2-angular-dropdowns */ 24779);
/* harmony import */ var _syncfusion_ej2_angular_buttons__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @syncfusion/ej2-angular-buttons */ 78218);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _content_type_card_content_type_card_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../content-type-card/content-type-card.component */ 22623);
/* harmony import */ var _shared_components_badge_custom_badge_custom_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/components/badge-custom/badge-custom.component */ 39040);
/* harmony import */ var _syncfusion_ej2_angular_popups__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @syncfusion/ej2-angular-popups */ 58917);
/* harmony import */ var _category_create_category_create_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../category-create/category-create.component */ 60102);
/* harmony import */ var _category_edit_category_edit_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../category-edit/category-edit.component */ 32780);
/* harmony import */ var _content_type_status_change_content_type_status_change_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../content-type-status-change/content-type-status-change.component */ 8001);
/* harmony import */ var _content_type_toggle_data_content_type_toggle_data_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../content-type-toggle-data/content-type-toggle-data.component */ 75028);
/* harmony import */ var _content_type_manage_order_content_type_manage_order_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../content-type-manage-order/content-type-manage-order.component */ 33710);






















const _c0 = ["categoryCreate"];
const _c1 = ["categoryEdit"];
const _c2 = function (a0) { return { categoryId: a0 }; };
function CategoryManagementComponent_content_type_card_17_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "content-type-card", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("onAction", function CategoryManagementComponent_content_type_card_17_Template_content_type_card_onAction_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return ctx_r13.onTakeAction($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "div", 30)(2, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](3, "Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](4, "label", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](6, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](7, "div", 33)(8, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](9, "Sub Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](10, "a", 34)(11, "label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](12, "View Sub Categories");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](13, "badge-custom");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](15, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r12 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("contentType", category_r12)("hasPublishedVersion", category_r12.item.hasPublishedVersion);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](category_r12.item.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("routerLink", ctx_r0.SubCategoriesLink)("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction1"](7, _c2, category_r12.item.id))("skipLocationChange", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](category_r12.childrenCount);
} }
function CategoryManagementComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 36)(1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2, " No records to display. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
} }
class CategoryManagementComponent extends _content_type_management_content_type_management_component__WEBPACK_IMPORTED_MODULE_2__.ContentTypeManagementComponent {
    constructor(route, resultHandler, carrier411AdminService, carrier411RolesService, navService) {
        super(resultHandler);
        this.route = route;
        this.resultHandler = resultHandler;
        this.carrier411AdminService = carrier411AdminService;
        this.carrier411RolesService = carrier411RolesService;
        this.navService = navService;
        this.SubCategoriesLink = src_app_shared_constants_application_urls__WEBPACK_IMPORTED_MODULE_1__.ApplicationUrls.Carrier411Admin.Carrier411Management.SubCategoryManagement.path;
        this.showRestrictFilter = () => this.carrier411RolesService.isPublisher();
        const data = route.snapshot.data["categories"];
        this.setContentItems(data);
    }
    ngOnInit() {
        this.filters = _utilities_content_type_utils__WEBPACK_IMPORTED_MODULE_3__.ContentTypeUtils.getFilters(this.showRestrictFilter());
    }
    loadNavbar() {
        this.navService.injectCategories(this.contentItems);
    }
    onUpdateOrder(categories) {
        this.carrier411AdminService.reorderCategories(categories).subscribe((data) => {
            this.handleUpdateOrder(data);
        });
    }
    onAddContentItem() {
        this.addContentDialog.show();
        this.categoryCreate.initializeForm();
    }
    initializeEditDialog(contentType) {
        this.categoryEdit.initializeForm(contentType, false);
    }
    handleDenyAction(action, contentType) {
        this.carrier411AdminService.getCategoryPreviousStep(contentType.id).subscribe((data) => {
            this.handlePreviousStatus(data, action, contentType);
        });
    }
    loadContentItems() {
        this.carrier411AdminService.getCategories().subscribe((data) => {
            this.setContentItems(data);
        });
    }
    updateContentItem(data) {
        const model = {
            name: data.contentType.name,
            workflowStep: data.newStatus
        };
        this.carrier411AdminService.updateCategory(data.contentType.id, model).subscribe((data) => {
            this.resultHandler.handle(data).then((success) => {
                if (success) {
                    this.onCloseModal(this.statusChangeDialog);
                    this.loadContentItems();
                }
            });
        }, (err) => this.resultHandler.handle(err.error));
    }
    deleteContentItem(data) {
        this.carrier411AdminService.deleteCategory(data.contentType.id).subscribe((data) => {
            this.resultHandler.handle(data).then((success) => {
                if (success) {
                    this.onCloseModal(this.statusChangeDialog);
                    this.loadContentItems();
                }
            });
        }, (err) => this.resultHandler.handle(err.error));
    }
    /* Toggle Data */
    onConfirmToggleData($event) {
        const actionConverted = $event.action;
        const contentType = $event.contentType;
        switch (actionConverted) {
            case +_constants_content_type_action_enum__WEBPACK_IMPORTED_MODULE_0__.ContentTypeAction.Hide:
            case +_constants_content_type_action_enum__WEBPACK_IMPORTED_MODULE_0__.ContentTypeAction.Unhide:
                this.toggleVisibility(contentType);
                break;
            case +_constants_content_type_action_enum__WEBPACK_IMPORTED_MODULE_0__.ContentTypeAction.RestrictAccess:
            case +_constants_content_type_action_enum__WEBPACK_IMPORTED_MODULE_0__.ContentTypeAction.UnrestrictAccess:
                this.toggleRestrictAccess(contentType);
                break;
            default:
                this.onCloseModal(this.contentTypeToggleDataDialog);
                break;
        }
    }
    toggleVisibility(category) {
        this.carrier411AdminService.toggleCategoryVisibility(category.id).subscribe((data) => {
            this.resultHandler.handle(data).then((success) => {
                if (success) {
                    this.onCloseModal(this.contentTypeToggleDataDialog);
                    this.loadContentItems();
                }
            });
        });
    }
    toggleRestrictAccess(category) {
        this.carrier411AdminService.toggleCategoryRestrictAccess(category.id).subscribe((data) => {
            this.resultHandler.handle(data).then((success) => {
                if (success) {
                    this.onCloseModal(this.contentTypeToggleDataDialog);
                    this.loadContentItems();
                }
            });
        });
    }
}
CategoryManagementComponent.ɵfac = function CategoryManagementComponent_Factory(t) { return new (t || CategoryManagementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_17__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](src_app_core_services_result_handler_service__WEBPACK_IMPORTED_MODULE_4__.ResultHandlerService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_services_carrier411_admin_service__WEBPACK_IMPORTED_MODULE_5__.Carrier411AdminService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](src_app_carrier411_shared_services_carrier411_roles_service__WEBPACK_IMPORTED_MODULE_6__.Carrier411RolesService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_services_carrier411_admin_navbar_service__WEBPACK_IMPORTED_MODULE_7__.Carrier411AdminNavbarService)); };
CategoryManagementComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineComponent"]({ type: CategoryManagementComponent, selectors: [["app-category-management"]], viewQuery: function CategoryManagementComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵviewQuery"](_c1, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵloadQuery"]()) && (ctx.categoryCreate = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵloadQuery"]()) && (ctx.categoryEdit = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵInheritDefinitionFeature"]], decls: 40, vars: 11, consts: [[1, "category-management"], [1, "pb-3"], [1, "header"], [1, "filter-status", "align-middle"], [1, "mr-3"], [3, "dataSource", "fields", "enablePersistence", "value", "change"], [1, "general-action-buttons"], ["type", "button", "ejs-button", "", 3, "click"], ["type", "button", "ejs-button", "", 1, "e-dark", "ml-4", 3, "click"], [1, "content", "pt-4"], [1, "fw-bold", "text-uppercase"], [3, "contentType", "hasPublishedVersion", "onAction", 4, "ngFor", "ngForOf"], ["class", "e-card mt-4 shadow p-5", 4, "ngIf"], [1, "d-none"], ["isModal", "true", "width", "500", 3, "visible", "open"], ["ejAddContentDialog", ""], [3, "onClose"], ["categoryCreate", ""], ["ejEditContentDialog", ""], ["categoryEdit", ""], ["isModal", "true", "width", "550", 3, "visible", "open"], ["ejStatusChangeDialog", ""], [3, "onConfirm", "onClose"], ["contentTypeStatusChange", ""], ["ejToggleDataDialog", ""], ["contentTypeToggleData", ""], ["ejManageOrderDialog", ""], ["contentTypeLabel", "Categories", 3, "onUpdate", "onClose"], ["contentTypeManageOrder", ""], [3, "contentType", "hasPublishedVersion", "onAction"], [1, "row", "pt-3"], [1, "col-4", "fw-bold"], [1, "col", "text-break"], [1, "row", "pt-2"], [1, "col", "blue-link", 3, "routerLink", "queryParams", "skipLocationChange"], [1, "mr-2"], [1, "e-card", "mt-4", "shadow", "p-5"], [1, "e-content", "text-center"]], template: function CategoryManagementComponent_Template(rf, ctx) { if (rf & 1) {
        const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 0)(1, "page-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2, "Carrier 411 Management");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](3, "div", 2)(4, "div", 3)(5, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](6, "Filter by Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](7, "ejs-dropdownlist", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("change", function CategoryManagementComponent_Template_ejs_dropdownlist_change_7_listener($event) { return ctx.onFilterChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](8, "div", 6)(9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function CategoryManagementComponent_Template_button_click_9_listener() { return ctx.onManageOrder(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](10, "Manage Order");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](11, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function CategoryManagementComponent_Template_button_click_11_listener() { return ctx.onAddContentItem(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](12, "Add Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](13, "div", 9)(14, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](15, "Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](16, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](17, CategoryManagementComponent_content_type_card_17_Template, 16, 9, "content-type-card", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](18, CategoryManagementComponent_div_18_Template, 3, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](19, "div", 13)(20, "ejs-dialog", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("open", function CategoryManagementComponent_Template_ejs_dialog_open_20_listener($event) { return ctx.onOpenModal($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](22, "category-create", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("onClose", function CategoryManagementComponent_Template_category_create_onClose_22_listener($event) { return ctx.onOverlayClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](24, "ejs-dialog", 14, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("open", function CategoryManagementComponent_Template_ejs_dialog_open_24_listener($event) { return ctx.onOpenModal($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](26, "category-edit", 16, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("onClose", function CategoryManagementComponent_Template_category_edit_onClose_26_listener($event) { return ctx.onOverlayClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](28, "ejs-dialog", 20, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("open", function CategoryManagementComponent_Template_ejs_dialog_open_28_listener($event) { return ctx.onOpenModal($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](30, "content-type-status-change", 22, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("onConfirm", function CategoryManagementComponent_Template_content_type_status_change_onConfirm_30_listener($event) { return ctx.onConfirmStatusChange($event); })("onClose", function CategoryManagementComponent_Template_content_type_status_change_onClose_30_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r15); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵreference"](29); return ctx.onCloseModal(_r6); });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](32, "ejs-dialog", 20, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("open", function CategoryManagementComponent_Template_ejs_dialog_open_32_listener($event) { return ctx.onOpenModal($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](34, "content-type-toggle-data", 22, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("onConfirm", function CategoryManagementComponent_Template_content_type_toggle_data_onConfirm_34_listener($event) { return ctx.onConfirmToggleData($event); })("onClose", function CategoryManagementComponent_Template_content_type_toggle_data_onClose_34_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r15); const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵreference"](33); return ctx.onCloseModal(_r8); });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](36, "ejs-dialog", 20, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("open", function CategoryManagementComponent_Template_ejs_dialog_open_36_listener($event) { return ctx.onOpenModal($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](38, "content-type-manage-order", 27, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("onUpdate", function CategoryManagementComponent_Template_content_type_manage_order_onUpdate_38_listener($event) { return ctx.onUpdateOrder($event); })("onClose", function CategoryManagementComponent_Template_content_type_manage_order_onClose_38_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r15); const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵreference"](37); return ctx.onCloseModal(_r10); });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("dataSource", ctx.filters)("fields", ctx.fields)("enablePersistence", true)("value", ctx.currentFilterId);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngForOf", ctx.contentItemsList);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.contentItemsList == null || ctx.contentItemsList.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("visible", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("visible", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("visible", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("visible", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("visible", false);
    } }, directives: [_shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_8__.PageTitleComponent, _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_18__.DropDownListComponent, _syncfusion_ej2_angular_buttons__WEBPACK_IMPORTED_MODULE_19__.ButtonComponent, _angular_common__WEBPACK_IMPORTED_MODULE_20__.NgForOf, _content_type_card_content_type_card_component__WEBPACK_IMPORTED_MODULE_9__.ContentTypeCardComponent, _angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterLinkWithHref, _shared_components_badge_custom_badge_custom_component__WEBPACK_IMPORTED_MODULE_10__.BadgeCustomComponent, _angular_common__WEBPACK_IMPORTED_MODULE_20__.NgIf, _syncfusion_ej2_angular_popups__WEBPACK_IMPORTED_MODULE_21__.DialogComponent, _category_create_category_create_component__WEBPACK_IMPORTED_MODULE_11__.CategoryCreateComponent, _category_edit_category_edit_component__WEBPACK_IMPORTED_MODULE_12__.CategoryEditComponent, _content_type_status_change_content_type_status_change_component__WEBPACK_IMPORTED_MODULE_13__.ContentTypeStatusChangeComponent, _content_type_toggle_data_content_type_toggle_data_component__WEBPACK_IMPORTED_MODULE_14__.ContentTypeToggleDataComponent, _content_type_manage_order_content_type_manage_order_component__WEBPACK_IMPORTED_MODULE_15__.ContentTypeManageOrderComponent], styles: [".category-management[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.category-management[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--graymedium);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGVnb3J5LW1hbmFnZW1lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQUFKO0FBR0U7RUFDRSxTQUFBO0VBQ0Esd0JBQUE7QUFESiIsImZpbGUiOiJjYXRlZ29yeS1tYW5hZ2VtZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhdGVnb3J5LW1hbmFnZW1lbnQge1xyXG4gIC5oZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICBociB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBjb2xvcjogdmFyKC0tZ3JheW1lZGl1bSk7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 80473:
/*!****************************************************************************************************!*\
  !*** ./src/app/carrier411/admin/components/content-type-actions/content-type-actions.component.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContentTypeActionsComponent": () => (/* binding */ ContentTypeActionsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_carrier411_shared_constants_workflow_step_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/carrier411/shared/constants/workflow-step.enum */ 48473);
/* harmony import */ var _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/pro-regular-svg-icons */ 26966);
/* harmony import */ var _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/pro-solid-svg-icons */ 61250);
/* harmony import */ var _constants_content_type_action_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/content-type-action.enum */ 60344);
/* harmony import */ var src_app_carrier411_shared_services_carrier411_roles_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/carrier411/shared/services/carrier411-roles.service */ 90673);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 19397);
/* harmony import */ var _syncfusion_ej2_angular_splitbuttons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @syncfusion/ej2-angular-splitbuttons */ 34872);










function ContentTypeActionsComponent_div_0_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ContentTypeActionsComponent_div_0_button_1_Template_button_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5); const action_r3 = restoredCtx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r4.onTakeAction(action_r3.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "fa-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const action_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("mr-2 button-icon ", action_r3.class, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", action_r3.icon);
} }
function ContentTypeActionsComponent_div_0_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("select", function ContentTypeActionsComponent_div_0_button_2_Template_button_select_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r6.select($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "fa-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("items", ctx_r2.otherActions);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", ctx_r2.otherIcon);
} }
function ContentTypeActionsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ContentTypeActionsComponent_div_0_button_1_Template, 2, 4, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ContentTypeActionsComponent_div_0_button_2_Template, 2, 2, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.mainActions);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.otherActions && ctx_r0.otherActions.length);
} }
class ContentTypeActionsComponent {
    constructor(carrier411RolesService) {
        this.carrier411RolesService = carrier411RolesService;
        this.otherIcon = _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faEllipsis;
        this.hasPublishedVersion = false;
        this.onAction = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.mainActions = [];
        this.otherActions = [];
        this.hasAction = false;
        /* Main Actions */
        this.getApproveButton = () => ({ id: _constants_content_type_action_enum__WEBPACK_IMPORTED_MODULE_1__.ContentTypeAction.Approve.toString(), icon: _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faCheck, class: 'approve-button' });
        this.getDenyButton = () => ({ id: _constants_content_type_action_enum__WEBPACK_IMPORTED_MODULE_1__.ContentTypeAction.Deny.toString(), icon: _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faClose, class: 'deny-button' });
        this.getEditButton = () => ({ id: _constants_content_type_action_enum__WEBPACK_IMPORTED_MODULE_1__.ContentTypeAction.Edit.toString(), icon: _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faPencil, class: 'edit-button' });
        this.getAllMainActions = () => [this.getApproveButton(), this.getDenyButton(), this.getEditButton()];
        /* Other Actions */
        this.getDeleteButton = () => ({ id: _constants_content_type_action_enum__WEBPACK_IMPORTED_MODULE_1__.ContentTypeAction.Delete.toString(), text: 'Delete' });
        this.getRequestDeleteButton = () => ({ id: _constants_content_type_action_enum__WEBPACK_IMPORTED_MODULE_1__.ContentTypeAction.Delete.toString(), text: 'Request Delete' });
        this.getHideButton = () => ({ id: _constants_content_type_action_enum__WEBPACK_IMPORTED_MODULE_1__.ContentTypeAction.Hide.toString(), text: 'Hide' });
        this.getUnhideButton = () => ({ id: _constants_content_type_action_enum__WEBPACK_IMPORTED_MODULE_1__.ContentTypeAction.Unhide.toString(), text: 'Unhide' });
        this.getRestrictAccessButton = () => ({ id: _constants_content_type_action_enum__WEBPACK_IMPORTED_MODULE_1__.ContentTypeAction.RestrictAccess.toString(), text: 'Restrict Access' });
        this.getUnrestrictAccessButton = () => ({ id: _constants_content_type_action_enum__WEBPACK_IMPORTED_MODULE_1__.ContentTypeAction.UnrestrictAccess.toString(), text: 'Unrestrict Access' });
    }
    ngOnInit() {
        this.setupActions();
    }
    onTakeAction(action) {
        if (action != undefined) {
            const actionType = _constants_content_type_action_enum__WEBPACK_IMPORTED_MODULE_1__.ContentTypeAction[action];
            this.onAction.emit({ action: actionType, contentType: this.contentType });
        }
    }
    select(args) {
        this.onTakeAction(args.item.id);
    }
    setupActions() {
        this.mainActions = [];
        this.otherActions = [];
        const isReviewer = this.carrier411RolesService.isReviewer();
        const isPublisher = this.carrier411RolesService.isPublisher();
        switch (+src_app_carrier411_shared_constants_workflow_step_enum__WEBPACK_IMPORTED_MODULE_0__.WorkflowStep[this.contentType.workflowStep]) {
            case src_app_carrier411_shared_constants_workflow_step_enum__WEBPACK_IMPORTED_MODULE_0__.WorkflowStep.Draft:
                this.mainActions.push(this.getApproveButton());
                this.mainActions.push(this.getEditButton());
                this.otherActions.push(this.getDeleteButton());
                this.handleHideButtons(isPublisher);
                this.handleRestrictAccessButtons(isPublisher);
                break;
            case src_app_carrier411_shared_constants_workflow_step_enum__WEBPACK_IMPORTED_MODULE_0__.WorkflowStep.PendingApproval:
                if (isReviewer || isPublisher) {
                    this.mainActions = this.getAllMainActions();
                }
                if (!this.hasPublishedVersion) {
                    this.otherActions.push(isPublisher ? this.getDeleteButton() : this.getRequestDeleteButton());
                }
                this.handleHideButtons(isPublisher);
                this.handleRestrictAccessButtons(isPublisher);
                break;
            case src_app_carrier411_shared_constants_workflow_step_enum__WEBPACK_IMPORTED_MODULE_0__.WorkflowStep.PendingPublish:
                if (isPublisher) {
                    this.mainActions = this.getAllMainActions();
                }
                if (!this.hasPublishedVersion) {
                    this.otherActions.push(isPublisher ? this.getDeleteButton() : this.getRequestDeleteButton());
                }
                this.handleHideButtons(isPublisher);
                this.handleRestrictAccessButtons(isPublisher);
                break;
            case src_app_carrier411_shared_constants_workflow_step_enum__WEBPACK_IMPORTED_MODULE_0__.WorkflowStep.Published:
                this.mainActions.push(this.getEditButton());
                this.otherActions.push(isPublisher ? this.getDeleteButton() : this.getRequestDeleteButton());
                this.handleHideButtons(isPublisher);
                this.handleRestrictAccessButtons(isPublisher);
                break;
            case src_app_carrier411_shared_constants_workflow_step_enum__WEBPACK_IMPORTED_MODULE_0__.WorkflowStep.DeleteRequested:
                if (isReviewer || isPublisher) {
                    this.mainActions.push(this.getApproveButton());
                    this.mainActions.push(this.getDenyButton());
                }
                break;
            case src_app_carrier411_shared_constants_workflow_step_enum__WEBPACK_IMPORTED_MODULE_0__.WorkflowStep.PendingDelete:
                if (isPublisher) {
                    this.mainActions.push(this.getApproveButton());
                    this.mainActions.push(this.getDenyButton());
                }
                break;
            default:
                break;
        }
        this.hasAction = this.mainActions.length > 0 || this.otherActions.length > 0;
    }
    handleHideButtons(isPublisher) {
        if (isPublisher) {
            if (this.contentType.isHidden) {
                this.otherActions.push(this.getUnhideButton());
            }
            else {
                this.otherActions.push(this.getHideButton());
            }
        }
    }
    handleRestrictAccessButtons(isPublisher) {
        if (isPublisher && 'isRestricted' in this.contentType) {
            if (this.contentType.isRestricted) {
                this.otherActions.push(this.getUnrestrictAccessButton());
            }
            else {
                this.otherActions.push(this.getRestrictAccessButton());
            }
        }
    }
}
ContentTypeActionsComponent.ɵfac = function ContentTypeActionsComponent_Factory(t) { return new (t || ContentTypeActionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_carrier411_shared_services_carrier411_roles_service__WEBPACK_IMPORTED_MODULE_2__.Carrier411RolesService)); };
ContentTypeActionsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ContentTypeActionsComponent, selectors: [["content-type-actions"]], inputs: { contentType: "contentType", hasPublishedVersion: "hasPublishedVersion" }, outputs: { onAction: "onAction" }, decls: 1, vars: 1, consts: [["class", "content-type-actions mb-4", 4, "ngIf"], [1, "content-type-actions", "mb-4"], [3, "class", "click", 4, "ngFor", "ngForOf"], ["class", "button-icon other-actions", "ejs-dropdownbutton", "", 3, "items", "select", 4, "ngIf"], [3, "click"], [3, "icon"], ["ejs-dropdownbutton", "", 1, "button-icon", "other-actions", 3, "items", "select"]], template: function ContentTypeActionsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, ContentTypeActionsComponent_div_0_Template, 3, 2, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.hasAction);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__.FaIconComponent, _syncfusion_ej2_angular_splitbuttons__WEBPACK_IMPORTED_MODULE_8__.DropDownButtonComponent], styles: [".content-type-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  column-gap: 0.25em;\n  line-height: 25px;\n}\n.content-type-actions[_ngcontent-%COMP%]   .button-icon[_ngcontent-%COMP%] {\n  background: none;\n  border: 1px solid var(--graylight);\n  border-radius: 30px;\n  width: 50px;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n.content-type-actions[_ngcontent-%COMP%]   .button-icon[_ngcontent-%COMP%]:hover {\n  background-color: var(--white-smoke);\n}\n.content-type-actions[_ngcontent-%COMP%]   .button-icon.approve-button[_ngcontent-%COMP%] {\n  color: var(--green);\n  font-size: 30px;\n}\n.content-type-actions[_ngcontent-%COMP%]   .button-icon.deny-button[_ngcontent-%COMP%] {\n  color: var(--red);\n  font-size: 30px;\n}\n.content-type-actions[_ngcontent-%COMP%]   .button-icon.edit-button[_ngcontent-%COMP%] {\n  color: var(--graydark);\n  font-size: 22px;\n}\n.content-type-actions[_ngcontent-%COMP%]   .button-icon.other-actions[_ngcontent-%COMP%] {\n  color: var(--graydark);\n  font-size: 25px;\n}\n.content-type-actions[_ngcontent-%COMP%]   .button-icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRlbnQtdHlwZS1hY3Rpb25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBQ0Y7QUFDRTtFQUNFLGdCQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FBQ0o7QUFDSTtFQUNFLG9DQUFBO0FBQ047QUFFSTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtBQUFOO0FBR0k7RUFDRSxpQkFBQTtFQUNBLGVBQUE7QUFETjtBQUlJO0VBQ0Usc0JBQUE7RUFDQSxlQUFBO0FBRk47QUFLSTtFQUNFLHNCQUFBO0VBQ0EsZUFBQTtBQUhOO0FBTUk7RUFDRSxhQUFBO0FBSk4iLCJmaWxlIjoiY29udGVudC10eXBlLWFjdGlvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudC10eXBlLWFjdGlvbnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgY29sdW1uLWdhcDogMC4yNWVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG5cclxuICAuYnV0dG9uLWljb24ge1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWdyYXlsaWdodCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZS1zbW9rZSk7XHJcbiAgICB9XHJcblxyXG4gICAgJi5hcHByb3ZlLWJ1dHRvbiB7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1ncmVlbik7XHJcbiAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIH1cclxuXHJcbiAgICAmLmRlbnktYnV0dG9uIHtcclxuICAgICAgY29sb3I6IHZhcigtLXJlZCk7XHJcbiAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIH1cclxuXHJcbiAgICAmLmVkaXQtYnV0dG9uIHtcclxuICAgICAgY29sb3I6IHZhcigtLWdyYXlkYXJrKTtcclxuICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgfVxyXG5cclxuICAgICYub3RoZXItYWN0aW9ucyB7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1ncmF5ZGFyayk7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIH1cclxuXHJcbiAgICBzcGFuIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 22623:
/*!**********************************************************************************************!*\
  !*** ./src/app/carrier411/admin/components/content-type-card/content-type-card.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContentTypeCardComponent": () => (/* binding */ ContentTypeCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/pro-solid-svg-icons */ 61250);
/* harmony import */ var _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/pro-regular-svg-icons */ 26966);
/* harmony import */ var src_app_carrier411_shared_constants_workflow_step_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/carrier411/shared/constants/workflow-step.enum */ 48473);
/* harmony import */ var src_app_shared_utilities_workflow_step_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/utilities/workflow-step-utils */ 37916);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _shared_components_workflow_step_workflow_step_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/workflow-step/workflow-step.component */ 99154);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 19397);
/* harmony import */ var _content_type_actions_content_type_actions_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../content-type-actions/content-type-actions.component */ 80473);
/* harmony import */ var _content_type_last_modified_content_type_last_modified_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../content-type-last-modified/content-type-last-modified.component */ 55769);











function ContentTypeCardComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "div", 13);
} }
function ContentTypeCardComponent_div_0_workflow_step_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "workflow-step", 14);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("step", ctx_r2.WorkflowStep.Published)("showDescription", false);
} }
function ContentTypeCardComponent_div_0_fa_icon_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "fa-icon", 15);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", ctx_r3.faArrowsRotate);
} }
function ContentTypeCardComponent_div_0_fa_icon_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "fa-icon", 16);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", ctx_r4.faEyeSlash);
} }
function ContentTypeCardComponent_div_0_fa_icon_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "fa-icon", 16);
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", ctx_r5.faLock);
} }
function ContentTypeCardComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ContentTypeCardComponent_div_0_div_1_Template, 1, 0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 3)(3, "div", 4)(4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, ContentTypeCardComponent_div_0_workflow_step_5_Template, 1, 2, "workflow-step", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, ContentTypeCardComponent_div_0_fa_icon_6_Template, 1, 1, "fa-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "workflow-step", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, ContentTypeCardComponent_div_0_fa_icon_8_Template, 1, 1, "fa-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, ContentTypeCardComponent_div_0_fa_icon_9_Template, 1, 1, "fa-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵprojection"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 10)(12, "content-type-actions", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("onAction", function ContentTypeCardComponent_div_0_Template_content_type_actions_onAction_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r6.onTakeAction($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "content-type-last-modified", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.showHeaderHighlight());
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.showPublishedIcon());
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.showPublishedIcon());
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("step", ctx_r0.contentType.item.workflowStep);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.isHidden());
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.isRestricted());
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("contentType", ctx_r0.contentType.item)("hasPublishedVersion", ctx_r0.hasPublishedVersion);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("name", ctx_r0.contentType.item.lastModifiedByName)("dateOnUTC", ctx_r0.contentType.item.lastModifiedOnUTC);
} }
const _c0 = ["*"];
class ContentTypeCardComponent {
    constructor() {
        this.WorkflowStep = src_app_carrier411_shared_constants_workflow_step_enum__WEBPACK_IMPORTED_MODULE_0__.WorkflowStep;
        this.faArrowsRotate = _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faArrowsRotate;
        this.faLock = _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faLock;
        this.faEyeSlash = _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faEyeSlash;
        this.hasPublishedVersion = false;
        this.onAction = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
        this.showHeaderHighlight = () => this.isHidden() || this.contentType.parentHidden || this.isRestricted() || this.contentType.parentRestricted;
        this.isHidden = () => this.contentType.item.isHidden;
        this.isRestricted = () => { var _a; return (_a = this.contentType.item) === null || _a === void 0 ? void 0 : _a.isRestricted; };
        this.showPublishedIcon = () => this.hasPublishedVersion && !src_app_shared_utilities_workflow_step_utils__WEBPACK_IMPORTED_MODULE_1__.WorkflowStepUtils.compareEnumValue(this.contentType.item.workflowStep, src_app_carrier411_shared_constants_workflow_step_enum__WEBPACK_IMPORTED_MODULE_0__.WorkflowStep.Published);
    }
    ngOnInit() {
    }
    onTakeAction($event) {
        if ($event != undefined) {
            this.onAction.emit($event);
        }
    }
}
ContentTypeCardComponent.ɵfac = function ContentTypeCardComponent_Factory(t) { return new (t || ContentTypeCardComponent)(); };
ContentTypeCardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: ContentTypeCardComponent, selectors: [["content-type-card"]], inputs: { contentType: "contentType", hasPublishedVersion: "hasPublishedVersion" }, outputs: { onAction: "onAction" }, ngContentSelectors: _c0, decls: 1, vars: 1, consts: [["class", "e-card pb-3 mt-4 shadow content-type-container", 4, "ngIf"], [1, "e-card", "pb-3", "mt-4", "shadow", "content-type-container"], ["class", "e-header", 4, "ngIf"], [1, "e-content", "row", "pt-3"], [1, "content-type-data", "col", "pr-3"], [1, "d-flex"], [3, "step", "showDescription", 4, "ngIf"], ["class", "mr-2", 3, "icon", 4, "ngIf"], [1, "mr-3", 3, "step"], ["class", "mr-3", 3, "icon", 4, "ngIf"], [1, "details-container", "col", "pl-3"], [3, "contentType", "hasPublishedVersion", "onAction"], [3, "name", "dateOnUTC"], [1, "e-header"], [3, "step", "showDescription"], [1, "mr-2", 3, "icon"], [1, "mr-3", 3, "icon"]], template: function ContentTypeCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, ContentTypeCardComponent_div_0_Template, 14, 10, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.contentType != null);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _shared_components_workflow_step_workflow_step_component__WEBPACK_IMPORTED_MODULE_2__.WorkflowStepComponent, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__.FaIconComponent, _content_type_actions_content_type_actions_component__WEBPACK_IMPORTED_MODULE_3__.ContentTypeActionsComponent, _content_type_last_modified_content_type_last_modified_component__WEBPACK_IMPORTED_MODULE_4__.ContentTypeLastModifiedComponent], styles: [".content-type-container[_ngcontent-%COMP%]   .e-content[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n  padding: 1em 1.5em;\n}\n.content-type-container[_ngcontent-%COMP%]   .e-header[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 10px;\n  background-color: var(--graylight);\n}\n.content-type-container[_ngcontent-%COMP%]   .content-type-data[_ngcontent-%COMP%] {\n  border-right: 1px solid var(--border-color);\n}\n.content-type-container[_ngcontent-%COMP%]   .details-container[_ngcontent-%COMP%] {\n  max-width: 260px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRlbnQtdHlwZS1jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsMkJBQUE7RUFDQSxrQkFBQTtBQUFKO0FBR0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtDQUFBO0FBREo7QUFJRTtFQUNFLDJDQUFBO0FBRko7QUFLRTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7QUFISiIsImZpbGUiOiJjb250ZW50LXR5cGUtY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50LXR5cGUtY29udGFpbmVyIHtcclxuICAuZS1jb250ZW50IHtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIHBhZGRpbmc6IDFlbSAxLjVlbTtcclxuICB9XHJcblxyXG4gIC5lLWhlYWRlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyYXlsaWdodCk7XHJcbiAgfVxyXG5cclxuICAuY29udGVudC10eXBlLWRhdGEge1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcclxuICB9XHJcblxyXG4gIC5kZXRhaWxzLWNvbnRhaW5lciB7XHJcbiAgICBtYXgtd2lkdGg6IDI2MHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 55769:
/*!****************************************************************************************************************!*\
  !*** ./src/app/carrier411/admin/components/content-type-last-modified/content-type-last-modified.component.ts ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContentTypeLastModifiedComponent": () => (/* binding */ ContentTypeLastModifiedComponent)
/* harmony export */ });
/* harmony import */ var _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/pro-light-svg-icons */ 67538);
/* harmony import */ var src_app_shared_utilities_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/utilities/shared */ 14364);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 19397);




class ContentTypeLastModifiedComponent {
    constructor() {
        this.faUser = _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faUser;
        this.faClock = _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faClock;
        this.name = '';
        this.getFormattedDate = () => src_app_shared_utilities_shared__WEBPACK_IMPORTED_MODULE_0__.DateDisplayFunctions.createDateTimeLocalDisplayValueFromUTC(this.dateOnUTC);
    }
    ngOnInit() {
    }
}
ContentTypeLastModifiedComponent.ɵfac = function ContentTypeLastModifiedComponent_Factory(t) { return new (t || ContentTypeLastModifiedComponent)(); };
ContentTypeLastModifiedComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ContentTypeLastModifiedComponent, selectors: [["content-type-last-modified"]], inputs: { name: "name", dateOnUTC: "dateOnUTC" }, decls: 11, vars: 4, consts: [[1, "content-type-last-modified"], [1, "fw-bold"], [1, "d-flex"], [1, "icon", 3, "icon"], [1, "text-break"]], template: function ContentTypeLastModifiedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Last Modified");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "fa-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "fa-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx.faUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx.faClock);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.getFormattedDate());
    } }, directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FaIconComponent], styles: [".content-type-last-modified[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], .content-type-last-modified[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  color: var(--graymedium);\n  line-height: 25px;\n}\n.content-type-last-modified[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  width: 1.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRlbnQtdHlwZS1sYXN0LW1vZGlmaWVkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFOztFQUVFLHdCQUFBO0VBQ0EsaUJBQUE7QUFBSjtBQUdFO0VBQ0UsYUFBQTtBQURKIiwiZmlsZSI6ImNvbnRlbnQtdHlwZS1sYXN0LW1vZGlmaWVkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQtdHlwZS1sYXN0LW1vZGlmaWVkIHtcclxuICBsYWJlbCxcclxuICAuaWNvbiB7XHJcbiAgICBjb2xvcjogdmFyKC0tZ3JheW1lZGl1bSk7XHJcbiAgICBsaW5lLWhlaWdodDogMjVweDtcclxuICB9XHJcblxyXG4gIC5pY29uIHtcclxuICAgIHdpZHRoOiAxLjVyZW07XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 33710:
/*!**************************************************************************************************************!*\
  !*** ./src/app/carrier411/admin/components/content-type-manage-order/content-type-manage-order.component.ts ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContentTypeManageOrderComponent": () => (/* binding */ ContentTypeManageOrderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/pro-solid-svg-icons */ 61250);
/* harmony import */ var _shared_components_modal_header_modal_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/components/modal-header/modal-header.component */ 89519);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @syncfusion/ej2-angular-dropdowns */ 24779);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 19397);
/* harmony import */ var _syncfusion_ej2_angular_buttons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @syncfusion/ej2-angular-buttons */ 78218);








const _c0 = ["contentItemsListBox"];
function ContentTypeManageOrderComponent_ejs_listbox_8_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "fa-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const contentItem_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx_r3.faArrowsUpDownLeftRight);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.getContentItemText(contentItem_r4));
} }
function ContentTypeManageOrderComponent_ejs_listbox_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ejs-listbox", 11, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ContentTypeManageOrderComponent_ejs_listbox_8_ng_template_2_Template, 4, 2, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx_r0.contentItems)("fields", ctx_r0.getFields())("allowDragAndDrop", true);
} }
class ContentTypeManageOrderComponent {
    constructor(cd) {
        this.cd = cd;
        this.faArrowsUpDownLeftRight = _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faArrowsUpDownLeftRight;
        this.contentTypeLabel = '';
        this.onUpdateTrigger = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.onCloseTrigger = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.contentItems = [];
    }
    ngOnInit() {
    }
    /* RTE problem: Expression has changed after it was checked
     * http://www.syncfusion.com/forums/132152/rte-problem-expression-has-changed-after-it-was-checked?reply=ls7keM */
    ngAfterViewChecked() {
        this.cd.detectChanges();
    }
    initializeForm(contentItems) {
        this.contentItems = contentItems;
    }
    onUpdate() {
        const newList = this.contentItemsListBox.getDataList();
        const newOrder = newList.map((c, index) => {
            return {
                id: c.id,
                order: index + 1
            };
        });
        this.onUpdateTrigger.emit(newOrder);
    }
    onClose() {
        this.onCloseTrigger.emit();
    }
    getFields() {
        if ('name' in this.contentItems[0])
            return { text: 'name', value: 'id' };
        if ('text' in this.contentItems[0])
            return { text: 'text', value: 'id' };
        return { text: 'name', value: 'id' };
    }
    getContentItemText(contentItem) {
        if ('name' in contentItem)
            return contentItem.name;
        if ('text' in contentItem)
            return contentItem.text;
        return '';
    }
}
ContentTypeManageOrderComponent.ɵfac = function ContentTypeManageOrderComponent_Factory(t) { return new (t || ContentTypeManageOrderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef)); };
ContentTypeManageOrderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ContentTypeManageOrderComponent, selectors: [["content-type-manage-order"]], viewQuery: function ContentTypeManageOrderComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.contentItemsListBox = _t.first);
    } }, inputs: { contentTypeLabel: "contentTypeLabel" }, outputs: { onUpdateTrigger: "onUpdate", onCloseTrigger: "onClose" }, decls: 16, vars: 2, consts: [[1, "container-fluid", "pt-3"], ["title", "Manage Order", 3, "onClose"], [1, "content"], [1, "content-type-label", "fw-bold"], [1, "m-0"], ["class", "nav-list", 3, "dataSource", "fields", "allowDragAndDrop", 4, "ngIf"], [1, "row", "pt-5"], [1, "col-md-4"], ["type", "button", "ejs-button", "", 1, "e-dark", "e-flat", "w-100", 3, "click"], [1, "col-md-4", "offset-md-4"], ["type", "button", "ejs-button", "", 1, "e-success", "w-100", 3, "click"], [1, "nav-list", 3, "dataSource", "fields", "allowDragAndDrop"], ["contentItemsListBox", ""], ["itemTemplate", ""], ["title", "getContentItemText(contentItem)", 1, "nav-item", "mt-1", "d-flex"], [1, "icon", "mr-2", 3, "icon"]], template: function ContentTypeManageOrderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "modal-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onClose", function ContentTypeManageOrderComponent_Template_modal_header_onClose_1_listener() { return ctx.onClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2)(3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Drag and drop an item within the list to reorder.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "hr", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ContentTypeManageOrderComponent_ejs_listbox_8_Template, 4, 3, "ejs-listbox", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6)(10, "div", 7)(11, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ContentTypeManageOrderComponent_Template_button_click_11_listener() { return ctx.onClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 9)(14, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ContentTypeManageOrderComponent_Template_button_click_14_listener() { return ctx.onUpdate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Update");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.contentTypeLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.contentItems != null && ctx.contentItems.length);
    } }, directives: [_shared_components_modal_header_modal_header_component__WEBPACK_IMPORTED_MODULE_0__.ModalHeaderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_4__.ListBoxComponent, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__.FaIconComponent, _syncfusion_ej2_angular_buttons__WEBPACK_IMPORTED_MODULE_6__.ButtonComponent], styles: [".content[_ngcontent-%COMP%]   .nav-list.e-control[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  border: none;\n  padding-top: 0.5em;\n  overflow: hidden;\n}\n.content[_ngcontent-%COMP%]   .content-type-label[_ngcontent-%COMP%] {\n  margin-left: 2em;\n  padding-bottom: 0.5em;\n}\n.content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 0.25em 0.5em;\n}\n.content[_ngcontent-%COMP%]   .nav-list[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.content[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  color: var(--graylight);\n  cursor: move;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRlbnQtdHlwZS1tYW5hZ2Utb3JkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUFKO0FBR0U7RUFDRSxnQkFBQTtFQUNBLHFCQUFBO0FBREo7QUFJRTtFQUNFLHFCQUFBO0FBRko7QUFLRTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQUhKO0FBTUU7RUFDRSx1QkFBQTtFQUNBLFlBQUE7QUFKSiIsImZpbGUiOiJjb250ZW50LXR5cGUtbWFuYWdlLW9yZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQge1xyXG4gIC5uYXYtbGlzdC5lLWNvbnRyb2wgPiBkaXYge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgcGFkZGluZy10b3A6IDAuNWVtO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcblxyXG4gIC5jb250ZW50LXR5cGUtbGFiZWwge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDJlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwLjVlbTtcclxuICB9XHJcblxyXG4gIHVsIGxpIHtcclxuICAgIHBhZGRpbmc6IDAuMjVlbSAwLjVlbTtcclxuICB9XHJcblxyXG4gIC5uYXYtbGlzdCBsYWJlbCB7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIH1cclxuXHJcbiAgLmljb24ge1xyXG4gICAgY29sb3I6IHZhcigtLWdyYXlsaWdodCk7XHJcbiAgICBjdXJzb3I6IG1vdmU7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 6857:
/*!**********************************************************************************************************!*\
  !*** ./src/app/carrier411/admin/components/content-type-management/content-type-management.component.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContentTypeManagementComponent": () => (/* binding */ ContentTypeManagementComponent)
/* harmony export */ });
/* harmony import */ var src_app_carrier411_shared_constants_workflow_step_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/carrier411/shared/constants/workflow-step.enum */ 48473);
/* harmony import */ var src_app_shared_utilities_workflow_step_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/utilities/workflow-step-utils */ 37916);
/* harmony import */ var _constants_carrier411_filter_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/carrier411-filter.enum */ 48984);
/* harmony import */ var _constants_content_type_action_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants/content-type-action.enum */ 60344);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_core_services_result_handler_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/result.handler.service */ 32464);






const _c0 = ["ejAddContentDialog"];
const _c1 = ["ejEditContentDialog"];
const _c2 = ["ejManageOrderDialog"];
const _c3 = ["contentTypeManageOrder"];
const _c4 = ["ejStatusChangeDialog"];
const _c5 = ["contentTypeStatusChange"];
const _c6 = ["ejToggleDataDialog"];
const _c7 = ["contentTypeToggleData"];
class ContentTypeManagementComponent {
    constructor(resultHandler) {
        this.resultHandler = resultHandler;
        this.fields = { text: 'name', value: 'id' };
        this.currentFilterId = 0;
    }
    onOpenModal(args) {
        //Preventing the default dialog focus
        args.preventFocus = true;
    }
    onCloseModal(modal) {
        modal.hide();
    }
    onFilterChanged(event) {
        const filter = event.itemData;
        this.currentFilterId = filter.id;
        this.contentItemsList = this.getFilteredContentItems();
    }
    getFilteredContentItems() {
        const filtered = this.contentItems.filter(c => c.item.nonPublishedItemId == undefined);
        const hasFilter = this.currentFilterId != undefined && this.currentFilterId != null && this.currentFilterId != 0;
        if (!hasFilter) {
            return filtered;
        }
        else if (this.currentFilterId == +_constants_carrier411_filter_enum__WEBPACK_IMPORTED_MODULE_2__.Carrier411FilterEnum.Hidden) {
            return filtered.filter(c => c.item.isHidden);
        }
        else if (this.currentFilterId == +_constants_carrier411_filter_enum__WEBPACK_IMPORTED_MODULE_2__.Carrier411FilterEnum.Restricted) {
            return filtered.filter(c => { var _a; return (_a = c.item) === null || _a === void 0 ? void 0 : _a.isRestricted; });
        }
        return filtered.filter(c => +_constants_carrier411_filter_enum__WEBPACK_IMPORTED_MODULE_2__.Carrier411FilterEnum[c.item.workflowStep] == this.currentFilterId);
    }
    onOverlayClick(reload = false) {
        var _a, _b;
        (_a = this.addContentDialog) === null || _a === void 0 ? void 0 : _a.hide();
        (_b = this.editContentDialog) === null || _b === void 0 ? void 0 : _b.hide();
        if (reload) {
            this.loadContentItems();
        }
    }
    onManageOrder() {
        const contentToManage = this.contentItems.filter(c => c.item.nonPublishedItemId == undefined).map(c => c.item);
        this.contentTypeManageOrder.initializeForm(contentToManage);
        this.manageOrderDialog.show();
    }
    onConfirmStatusChange($event) {
        if (src_app_shared_utilities_workflow_step_utils__WEBPACK_IMPORTED_MODULE_1__.WorkflowStepUtils.compareEnumValue($event.newStatus, src_app_carrier411_shared_constants_workflow_step_enum__WEBPACK_IMPORTED_MODULE_0__.WorkflowStep.Deleted)) {
            this.deleteContentItem($event);
        }
        else {
            this.updateContentItem($event);
        }
    }
    onTakeAction($event) {
        const actionConverted = +_constants_content_type_action_enum__WEBPACK_IMPORTED_MODULE_3__.ContentTypeAction[$event.action];
        const contentType = $event.contentType;
        switch (actionConverted) {
            case _constants_content_type_action_enum__WEBPACK_IMPORTED_MODULE_3__.ContentTypeAction.Approve:
            case _constants_content_type_action_enum__WEBPACK_IMPORTED_MODULE_3__.ContentTypeAction.RequestDelete:
            case _constants_content_type_action_enum__WEBPACK_IMPORTED_MODULE_3__.ContentTypeAction.Delete:
                this.statusChangeDialog.show();
                this.contentTypeStatusChange.initializeForm(actionConverted, contentType);
                break;
            case _constants_content_type_action_enum__WEBPACK_IMPORTED_MODULE_3__.ContentTypeAction.Deny:
                this.handleDenyAction(actionConverted, contentType);
                break;
            case _constants_content_type_action_enum__WEBPACK_IMPORTED_MODULE_3__.ContentTypeAction.Edit:
                this.editContentDialog.show();
                this.initializeEditDialog(contentType);
                break;
            case _constants_content_type_action_enum__WEBPACK_IMPORTED_MODULE_3__.ContentTypeAction.Hide:
            case _constants_content_type_action_enum__WEBPACK_IMPORTED_MODULE_3__.ContentTypeAction.Unhide:
            case _constants_content_type_action_enum__WEBPACK_IMPORTED_MODULE_3__.ContentTypeAction.RestrictAccess:
            case _constants_content_type_action_enum__WEBPACK_IMPORTED_MODULE_3__.ContentTypeAction.UnrestrictAccess:
                this.contentTypeToggleData.initializeForm(actionConverted, contentType);
                this.contentTypeToggleDataDialog.show();
                break;
            default:
                break;
        }
    }
    handlePreviousStatus(data, action, contentType) {
        if (data.isSuccess) {
            this.contentTypeStatusChange.initializeForm(action, contentType, +src_app_carrier411_shared_constants_workflow_step_enum__WEBPACK_IMPORTED_MODULE_0__.WorkflowStep[data.value]);
            this.statusChangeDialog.show();
        }
        else {
            this.resultHandler.handle(data);
        }
    }
    handleUpdateOrder(data) {
        this.resultHandler.handle(data).then((success) => {
            if (success) {
                this.loadContentItems();
                this.manageOrderDialog.hide();
            }
        });
    }
    setContentItems(data) {
        if (data.isSuccess) {
            this.contentItems = data.value;
            this.contentItemsList = this.getFilteredContentItems();
            this.loadNavbar();
        }
        else {
            this.resultHandler.handle(data);
        }
    }
}
ContentTypeManagementComponent.ɵfac = function ContentTypeManagementComponent_Factory(t) { return new (t || ContentTypeManagementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_result_handler_service__WEBPACK_IMPORTED_MODULE_4__.ResultHandlerService)); };
ContentTypeManagementComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: ContentTypeManagementComponent, selectors: [["ng-component"]], viewQuery: function ContentTypeManagementComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c2, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c3, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c5, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c6, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c7, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.addContentDialog = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.editContentDialog = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.manageOrderDialog = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.contentTypeManageOrder = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.statusChangeDialog = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.contentTypeStatusChange = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.contentTypeToggleDataDialog = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.contentTypeToggleData = _t.first);
    } }, decls: 0, vars: 0, template: function ContentTypeManagementComponent_Template(rf, ctx) { }, encapsulation: 2 });


/***/ }),

/***/ 37883:
/*!************************************************************************************************************!*\
  !*** ./src/app/carrier411/admin/components/content-type-save-button/content-type-save-button.component.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContentTypeSaveButtonComponent": () => (/* binding */ ContentTypeSaveButtonComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _constants_save_content_type_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/save-content-type.enum */ 57129);
/* harmony import */ var src_app_carrier411_shared_services_carrier411_roles_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/carrier411/shared/services/carrier411-roles.service */ 90673);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _syncfusion_ej2_angular_splitbuttons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @syncfusion/ej2-angular-splitbuttons */ 34872);






function ContentTypeSaveButtonComponent_ejs_splitbutton_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ejs-splitbutton", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ContentTypeSaveButtonComponent_ejs_splitbutton_0_Template_ejs_splitbutton_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r1.onSelect(); })("select", function ContentTypeSaveButtonComponent_ejs_splitbutton_0_Template_ejs_splitbutton_select_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r3.onSelect($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("items", ctx_r0.items);
} }
class ContentTypeSaveButtonComponent {
    constructor(carrier411RolesService) {
        this.carrier411RolesService = carrier411RolesService;
        this.onSaveTrigger = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    }
    ngOnInit() {
        this.setupUserOptions();
    }
    setupUserOptions() {
        this.items = [
            { id: _constants_save_content_type_enum__WEBPACK_IMPORTED_MODULE_0__.SaveContentType.Save.toString(), text: 'Save' },
            { id: _constants_save_content_type_enum__WEBPACK_IMPORTED_MODULE_0__.SaveContentType.SaveAddMore.toString(), text: 'Save & Add More' }
        ];
        if (this.carrier411RolesService.isEditor()) {
            this.items = this.items.concat([
                { id: _constants_save_content_type_enum__WEBPACK_IMPORTED_MODULE_0__.SaveContentType.PendingApproval.toString(), text: 'Pending Approval' },
                { id: _constants_save_content_type_enum__WEBPACK_IMPORTED_MODULE_0__.SaveContentType.PendingApprovalAddMore.toString(), text: 'Pending Approval & Add More' }
            ]);
        }
        else if (this.carrier411RolesService.isReviewer()) {
            this.items = this.items.concat([
                { id: _constants_save_content_type_enum__WEBPACK_IMPORTED_MODULE_0__.SaveContentType.PendingPublish.toString(), text: 'Pending Publish' },
                { id: _constants_save_content_type_enum__WEBPACK_IMPORTED_MODULE_0__.SaveContentType.PendingPublishAddMore.toString(), text: 'Pending Publish & Add More' }
            ]);
        }
        else if (this.carrier411RolesService.isPublisher()) {
            this.items = this.items.concat([
                { id: _constants_save_content_type_enum__WEBPACK_IMPORTED_MODULE_0__.SaveContentType.Publish.toString(), text: 'Publish' },
                { id: _constants_save_content_type_enum__WEBPACK_IMPORTED_MODULE_0__.SaveContentType.PublishAddMore.toString(), text: 'Publish & Add More' }
            ]);
        }
    }
    onSelect(args) {
        if (args == undefined) {
            const step = _constants_save_content_type_enum__WEBPACK_IMPORTED_MODULE_0__.SaveContentType[_constants_save_content_type_enum__WEBPACK_IMPORTED_MODULE_0__.SaveContentType.Save.toString()];
            this.onSaveTrigger.emit(step);
        }
        else {
            const step = _constants_save_content_type_enum__WEBPACK_IMPORTED_MODULE_0__.SaveContentType[args.item.id];
            this.onSaveTrigger.emit(step);
        }
    }
}
ContentTypeSaveButtonComponent.ɵfac = function ContentTypeSaveButtonComponent_Factory(t) { return new (t || ContentTypeSaveButtonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_carrier411_shared_services_carrier411_roles_service__WEBPACK_IMPORTED_MODULE_1__.Carrier411RolesService)); };
ContentTypeSaveButtonComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ContentTypeSaveButtonComponent, selectors: [["content-type-save-button"]], outputs: { onSaveTrigger: "onSave" }, decls: 1, vars: 1, consts: [["content", "Save", "cssClass", "e-success fw-split", 3, "items", "click", "select", 4, "ngIf"], ["content", "Save", "cssClass", "e-success fw-split", 3, "items", "click", "select"]], template: function ContentTypeSaveButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ContentTypeSaveButtonComponent_ejs_splitbutton_0_Template, 1, 1, "ejs-splitbutton", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.items != null);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _syncfusion_ej2_angular_splitbuttons__WEBPACK_IMPORTED_MODULE_4__.SplitButtonComponent], encapsulation: 2 });


/***/ }),

/***/ 8001:
/*!****************************************************************************************************************!*\
  !*** ./src/app/carrier411/admin/components/content-type-status-change/content-type-status-change.component.ts ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContentTypeStatusChangeComponent": () => (/* binding */ ContentTypeStatusChangeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _constants_content_type_action_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/content-type-action.enum */ 60344);
/* harmony import */ var src_app_carrier411_shared_constants_workflow_step_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/carrier411/shared/constants/workflow-step.enum */ 48473);
/* harmony import */ var src_app_shared_utilities_workflow_step_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/utilities/workflow-step-utils */ 37916);
/* harmony import */ var _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/pro-regular-svg-icons */ 26966);
/* harmony import */ var _utilities_carrier411_admin_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utilities/carrier411-admin-messages */ 47555);
/* harmony import */ var src_app_carrier411_shared_services_carrier411_roles_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/carrier411/shared/services/carrier411-roles.service */ 90673);
/* harmony import */ var src_app_authentication_services_account_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/authentication/services/account.service */ 94398);
/* harmony import */ var _shared_components_modal_header_modal_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/components/modal-header/modal-header.component */ 89519);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _shared_components_workflow_step_workflow_step_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/components/workflow-step/workflow-step.component */ 99154);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 19397);
/* harmony import */ var _syncfusion_ej2_angular_buttons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @syncfusion/ej2-angular-buttons */ 78218);
/* harmony import */ var _syncfusion_ej2_angular_splitbuttons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @syncfusion/ej2-angular-splitbuttons */ 34872);















function ContentTypeStatusChangeComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("innerHtml", ctx_r0.userWarningMessage, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeHtml"]);
} }
function ContentTypeStatusChangeComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 12)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Would you like to change this content status? This content will be moved to ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](7, "workflow-step", 14)(8, "fa-icon", 15)(9, "workflow-step", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.WorkflowStepUtils.getDescription(ctx_r1.nextStep));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("step", ctx_r1.contentType.workflowStep);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("icon", ctx_r1.faArrowRight);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("step", ctx_r1.nextStep);
} }
const _c0 = function (a0, a1) { return { "e-success": a0, "e-danger": a1 }; };
function ContentTypeStatusChangeComponent_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ContentTypeStatusChangeComponent_button_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r4.onConfirm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction2"](1, _c0, ctx_r2.isButtonGreen(), ctx_r2.isButtonRed()));
} }
function ContentTypeStatusChangeComponent_ejs_splitbutton_10_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ejs-splitbutton", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ContentTypeStatusChangeComponent_ejs_splitbutton_10_Template_ejs_splitbutton_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r6.onConfirm(); })("select", function ContentTypeStatusChangeComponent_ejs_splitbutton_10_Template_ejs_splitbutton_select_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r8.onConfirm($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("items", ctx_r3.otherActions);
} }
class ContentTypeStatusChangeComponent {
    constructor(carrier411RolesService, accountService) {
        this.carrier411RolesService = carrier411RolesService;
        this.accountService = accountService;
        this.WorkflowStepUtils = src_app_shared_utilities_workflow_step_utils__WEBPACK_IMPORTED_MODULE_2__.WorkflowStepUtils;
        this.faArrowRight = _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_9__.faArrowRight;
        this.onConfirmTrigger = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
        this.onCloseTrigger = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
        this.otherActions = [];
        this.action = '';
        this.userWarningMessage = '';
        this.getConfirm = () => ({ id: this.nextStep.toString(), text: 'Confirm' });
        this.getMoveToPendingPublish = () => ({ id: (+src_app_carrier411_shared_constants_workflow_step_enum__WEBPACK_IMPORTED_MODULE_1__.WorkflowStep.PendingPublish).toString(), text: 'Move to Pending Publish' });
        this.getMoveToPublished = () => ({ id: (+src_app_carrier411_shared_constants_workflow_step_enum__WEBPACK_IMPORTED_MODULE_1__.WorkflowStep.Published).toString(), text: 'Move to Published' });
        this.getMoveToPendingDelete = () => ({ id: (+src_app_carrier411_shared_constants_workflow_step_enum__WEBPACK_IMPORTED_MODULE_1__.WorkflowStep.PendingDelete).toString(), text: 'Move to Pending Delete' });
        this.getMoveToDeleted = () => ({ id: (+src_app_carrier411_shared_constants_workflow_step_enum__WEBPACK_IMPORTED_MODULE_1__.WorkflowStep.Deleted).toString(), text: 'Move to Deleted' });
        this.isDeleteAction = () => this.userAction == _constants_content_type_action_enum__WEBPACK_IMPORTED_MODULE_0__.ContentTypeAction.RequestDelete || this.userAction == _constants_content_type_action_enum__WEBPACK_IMPORTED_MODULE_0__.ContentTypeAction.Delete;
        this.isDraft = () => src_app_shared_utilities_workflow_step_utils__WEBPACK_IMPORTED_MODULE_2__.WorkflowStepUtils.compareEnumValue(this.contentType.workflowStep, src_app_carrier411_shared_constants_workflow_step_enum__WEBPACK_IMPORTED_MODULE_1__.WorkflowStep.Draft);
        this.hasDifferentOwner = () => { var _a; return this.contentType.lastModifiedById != ((_a = this.accountService.getUser()) === null || _a === void 0 ? void 0 : _a.id); };
    }
    ngOnInit() {
    }
    initializeForm(userAction, contentType, nextStep = null) {
        this.userAction = userAction;
        this.contentType = contentType;
        this.setTitle();
        this.otherActions = [];
        if (nextStep == null) {
            this.setupNextStep();
        }
        else {
            this.nextStep = nextStep;
        }
        this.setupUserWarning();
    }
    setTitle() {
        switch (this.userAction) {
            case _constants_content_type_action_enum__WEBPACK_IMPORTED_MODULE_0__.ContentTypeAction.Approve:
            case _constants_content_type_action_enum__WEBPACK_IMPORTED_MODULE_0__.ContentTypeAction.RequestDelete:
            case _constants_content_type_action_enum__WEBPACK_IMPORTED_MODULE_0__.ContentTypeAction.Delete:
                this.action = 'Approve';
                break;
            case _constants_content_type_action_enum__WEBPACK_IMPORTED_MODULE_0__.ContentTypeAction.Deny:
                this.action = 'Deny';
                break;
            default:
                this.action = '';
                break;
        }
    }
    setupNextStep() {
        const isReviewer = this.carrier411RolesService.isReviewer();
        const isPublisher = this.carrier411RolesService.isPublisher();
        if (this.userAction == _constants_content_type_action_enum__WEBPACK_IMPORTED_MODULE_0__.ContentTypeAction.Approve) {
            switch (+src_app_carrier411_shared_constants_workflow_step_enum__WEBPACK_IMPORTED_MODULE_1__.WorkflowStep[this.contentType.workflowStep]) {
                case src_app_carrier411_shared_constants_workflow_step_enum__WEBPACK_IMPORTED_MODULE_1__.WorkflowStep.Draft:
                    this.nextStep = src_app_carrier411_shared_constants_workflow_step_enum__WEBPACK_IMPORTED_MODULE_1__.WorkflowStep.PendingApproval;
                    if (isReviewer) {
                        this.otherActions.push(this.getConfirm());
                        this.otherActions.push(this.getMoveToPendingPublish());
                    }
                    else if (isPublisher) {
                        this.otherActions.push(this.getConfirm());
                        this.otherActions.push(this.getMoveToPublished());
                    }
                    break;
                case src_app_carrier411_shared_constants_workflow_step_enum__WEBPACK_IMPORTED_MODULE_1__.WorkflowStep.PendingApproval:
                    this.nextStep = src_app_carrier411_shared_constants_workflow_step_enum__WEBPACK_IMPORTED_MODULE_1__.WorkflowStep.PendingPublish;
                    if (isPublisher) {
                        this.otherActions.push(this.getConfirm());
                        this.otherActions.push(this.getMoveToPublished());
                    }
                    break;
                case src_app_carrier411_shared_constants_workflow_step_enum__WEBPACK_IMPORTED_MODULE_1__.WorkflowStep.PendingPublish:
                    this.nextStep = src_app_carrier411_shared_constants_workflow_step_enum__WEBPACK_IMPORTED_MODULE_1__.WorkflowStep.Published;
                    break;
                case src_app_carrier411_shared_constants_workflow_step_enum__WEBPACK_IMPORTED_MODULE_1__.WorkflowStep.DeleteRequested:
                    this.nextStep = src_app_carrier411_shared_constants_workflow_step_enum__WEBPACK_IMPORTED_MODULE_1__.WorkflowStep.PendingDelete;
                    if (isPublisher) {
                        this.otherActions.push(this.getConfirm());
                        this.otherActions.push(this.getMoveToDeleted());
                    }
                    break;
                case src_app_carrier411_shared_constants_workflow_step_enum__WEBPACK_IMPORTED_MODULE_1__.WorkflowStep.PendingDelete:
                    this.nextStep = src_app_carrier411_shared_constants_workflow_step_enum__WEBPACK_IMPORTED_MODULE_1__.WorkflowStep.Deleted;
                    break;
                default:
                    this.nextStep = undefined;
            }
        }
        else if (this.userAction == _constants_content_type_action_enum__WEBPACK_IMPORTED_MODULE_0__.ContentTypeAction.Delete) {
            switch (+src_app_carrier411_shared_constants_workflow_step_enum__WEBPACK_IMPORTED_MODULE_1__.WorkflowStep[this.contentType.workflowStep]) {
                case src_app_carrier411_shared_constants_workflow_step_enum__WEBPACK_IMPORTED_MODULE_1__.WorkflowStep.Draft:
                    this.nextStep = src_app_carrier411_shared_constants_workflow_step_enum__WEBPACK_IMPORTED_MODULE_1__.WorkflowStep.Deleted;
                    break;
                default:
                    this.nextStep = src_app_carrier411_shared_constants_workflow_step_enum__WEBPACK_IMPORTED_MODULE_1__.WorkflowStep.DeleteRequested;
                    if (isReviewer) {
                        this.otherActions.push(this.getConfirm());
                        this.otherActions.push(this.getMoveToPendingDelete());
                    }
                    else if (isPublisher) {
                        this.otherActions.push(this.getConfirm());
                        this.otherActions.push(this.getMoveToDeleted());
                    }
            }
        }
        else {
            this.nextStep = undefined;
        }
    }
    setupUserWarning() {
        if (this.isDeleteAction() &&
            this.isDraft() &&
            this.hasDifferentOwner()) {
            this.userWarningMessage = _utilities_carrier411_admin_messages__WEBPACK_IMPORTED_MODULE_3__.Carrier411AdminMessages.getUserEditorWarningMessage(this.contentType.lastModifiedByName);
        }
        else {
            this.userWarningMessage = '';
        }
    }
    onConfirm(args) {
        if (args != undefined) {
            this.onConfirmTrigger.emit({
                newStatus: src_app_carrier411_shared_constants_workflow_step_enum__WEBPACK_IMPORTED_MODULE_1__.WorkflowStep[args.item.id],
                contentType: this.contentType
            });
        }
        else {
            this.onConfirmTrigger.emit({
                newStatus: +this.nextStep,
                contentType: this.contentType
            });
        }
    }
    onClose() {
        this.onCloseTrigger.emit();
    }
    isButtonGreen() {
        return this.userAction == _constants_content_type_action_enum__WEBPACK_IMPORTED_MODULE_0__.ContentTypeAction.Approve;
    }
    isButtonRed() {
        return this.userAction == _constants_content_type_action_enum__WEBPACK_IMPORTED_MODULE_0__.ContentTypeAction.Deny ||
            this.userAction == _constants_content_type_action_enum__WEBPACK_IMPORTED_MODULE_0__.ContentTypeAction.Delete ||
            this.userAction == _constants_content_type_action_enum__WEBPACK_IMPORTED_MODULE_0__.ContentTypeAction.RequestDelete;
    }
}
ContentTypeStatusChangeComponent.ɵfac = function ContentTypeStatusChangeComponent_Factory(t) { return new (t || ContentTypeStatusChangeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_carrier411_shared_services_carrier411_roles_service__WEBPACK_IMPORTED_MODULE_4__.Carrier411RolesService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_authentication_services_account_service__WEBPACK_IMPORTED_MODULE_5__.AccountService)); };
ContentTypeStatusChangeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: ContentTypeStatusChangeComponent, selectors: [["content-type-status-change"]], outputs: { onConfirmTrigger: "onConfirm", onCloseTrigger: "onClose" }, decls: 11, vars: 5, consts: [[1, "container-fluid", "pt-3", "status-change-container"], [3, "title", "onClose"], ["class", "acknowledge-action", 4, "ngIf"], ["class", "content mt-4", 4, "ngIf"], [1, "row", "pt-5"], [1, "col-md-4"], ["type", "button", "ejs-button", "", 1, "e-dark", "e-flat", "w-100", 3, "click"], [1, "col-md-4", "offset-md-4"], ["type", "button", "ejs-button", "", "class", "w-100", "content", "Confirm", 3, "ngClass", "click", 4, "ngIf"], ["content", "Confirm", "cssClass", "e-success fw-split", 3, "items", "click", "select", 4, "ngIf"], [1, "acknowledge-action"], [3, "innerHtml"], [1, "content", "mt-4"], [1, "steps", "mt-4"], [3, "step"], [1, "icon", 3, "icon"], ["type", "button", "ejs-button", "", "content", "Confirm", 1, "w-100", 3, "ngClass", "click"], ["content", "Confirm", "cssClass", "e-success fw-split", 3, "items", "click", "select"]], template: function ContentTypeStatusChangeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0)(1, "modal-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("onClose", function ContentTypeStatusChangeComponent_Template_modal_header_onClose_1_listener() { return ctx.onClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, ContentTypeStatusChangeComponent_div_2_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, ContentTypeStatusChangeComponent_div_3_Template, 10, 4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 4)(5, "div", 5)(6, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ContentTypeStatusChangeComponent_Template_button_click_6_listener() { return ctx.onClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](9, ContentTypeStatusChangeComponent_button_9_Template, 1, 4, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](10, ContentTypeStatusChangeComponent_ejs_splitbutton_10_Template, 1, 1, "ejs-splitbutton", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate1"]("title", "", ctx.action, " Status Change");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.userWarningMessage != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.nextStep != undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.otherActions == null || ctx.otherActions.length <= 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.otherActions != null && ctx.otherActions.length > 1);
    } }, directives: [_shared_components_modal_header_modal_header_component__WEBPACK_IMPORTED_MODULE_6__.ModalHeaderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _shared_components_workflow_step_workflow_step_component__WEBPACK_IMPORTED_MODULE_7__.WorkflowStepComponent, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__.FaIconComponent, _syncfusion_ej2_angular_buttons__WEBPACK_IMPORTED_MODULE_12__.ButtonComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _syncfusion_ej2_angular_splitbuttons__WEBPACK_IMPORTED_MODULE_13__.SplitButtonComponent], styles: [".status-change-container[_ngcontent-%COMP%]   .acknowledge-action[_ngcontent-%COMP%] {\n  background: var(--acknowledge-background);\n  padding: 1rem;\n}\n.status-change-container[_ngcontent-%COMP%]   .steps[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  column-gap: 1.5em;\n  border: 1px solid var(--border-color);\n  padding: 1em;\n  border-radius: 5px;\n}\n.status-change-container[_ngcontent-%COMP%]   .steps[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  line-height: 28px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRlbnQtdHlwZS1zdGF0dXMtY2hhbmdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UseUNBQUE7RUFDQSxhQUFBO0FBQUo7QUFHRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQ0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQURKO0FBR0k7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFETiIsImZpbGUiOiJjb250ZW50LXR5cGUtc3RhdHVzLWNoYW5nZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdGF0dXMtY2hhbmdlLWNvbnRhaW5lciB7XHJcbiAgLmFja25vd2xlZGdlLWFjdGlvbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1hY2tub3dsZWRnZS1iYWNrZ3JvdW5kKTtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgfVxyXG5cclxuICAuc3RlcHMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGNvbHVtbi1nYXA6IDEuNWVtO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcclxuICAgIHBhZGRpbmc6IDFlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHJcbiAgICAuaWNvbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDI4cHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 75028:
/*!************************************************************************************************************!*\
  !*** ./src/app/carrier411/admin/components/content-type-toggle-data/content-type-toggle-data.component.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContentTypeToggleDataComponent": () => (/* binding */ ContentTypeToggleDataComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _utilities_carrier411_admin_messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/carrier411-admin-messages */ 47555);
/* harmony import */ var _constants_content_type_action_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/content-type-action.enum */ 60344);
/* harmony import */ var src_app_shared_services_input_validator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/input-validator.service */ 68516);
/* harmony import */ var _shared_components_modal_header_modal_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/modal-header/modal-header.component */ 89519);
/* harmony import */ var _syncfusion_ej2_angular_buttons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @syncfusion/ej2-angular-buttons */ 78218);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);










function ContentTypeToggleDataComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "You need to acknowledge");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
class ContentTypeToggleDataComponent {
    constructor(inputValidatorService) {
        this.inputValidatorService = inputValidatorService;
        this.onConfirmTrigger = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.onCloseTrigger = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.title = '';
        this.description = '';
        this.acknowledge = '';
    }
    ngOnInit() {
        this.setupForm();
    }
    setupForm() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({
            acknowledge: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(false, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.requiredTrue])
        });
    }
    initializeForm(userAction, contentType) {
        this.userAction = userAction;
        this.contentType = contentType;
        this.setMessages();
        this.setupForm();
    }
    setMessages() {
        switch (this.userAction) {
            case _constants_content_type_action_enum__WEBPACK_IMPORTED_MODULE_1__.ContentTypeAction.Hide:
                this.title = 'Hide Content';
                this.description = _utilities_carrier411_admin_messages__WEBPACK_IMPORTED_MODULE_0__.Carrier411AdminMessages.getHideContentDescription();
                this.acknowledge = _utilities_carrier411_admin_messages__WEBPACK_IMPORTED_MODULE_0__.Carrier411AdminMessages.getHideContentAcknowledge();
                break;
            case _constants_content_type_action_enum__WEBPACK_IMPORTED_MODULE_1__.ContentTypeAction.Unhide:
                this.title = 'Unhide Content';
                this.description = _utilities_carrier411_admin_messages__WEBPACK_IMPORTED_MODULE_0__.Carrier411AdminMessages.getUnhideContentDescription();
                this.acknowledge = _utilities_carrier411_admin_messages__WEBPACK_IMPORTED_MODULE_0__.Carrier411AdminMessages.getUnhideContentAcknowledge();
                break;
            case _constants_content_type_action_enum__WEBPACK_IMPORTED_MODULE_1__.ContentTypeAction.RestrictAccess:
                this.title = 'Restrict Access';
                this.description = _utilities_carrier411_admin_messages__WEBPACK_IMPORTED_MODULE_0__.Carrier411AdminMessages.getRestrictContentDescription();
                this.acknowledge = _utilities_carrier411_admin_messages__WEBPACK_IMPORTED_MODULE_0__.Carrier411AdminMessages.getRestrictContentAcknowledge();
                break;
            case _constants_content_type_action_enum__WEBPACK_IMPORTED_MODULE_1__.ContentTypeAction.UnrestrictAccess:
                this.title = 'Unrestrict Access';
                this.description = _utilities_carrier411_admin_messages__WEBPACK_IMPORTED_MODULE_0__.Carrier411AdminMessages.getUnrestrictContentDescription();
                this.acknowledge = _utilities_carrier411_admin_messages__WEBPACK_IMPORTED_MODULE_0__.Carrier411AdminMessages.getUnrestrictContentAcknowledge();
                break;
            default:
                this.title = '';
                break;
        }
    }
    onConfirm(args) {
        this.form.markAllAsTouched();
        if (!this.form.valid) {
            return;
        }
        this.onConfirmTrigger.emit({
            action: this.userAction,
            contentType: this.contentType
        });
    }
    onClose() {
        this.onCloseTrigger.emit();
    }
}
ContentTypeToggleDataComponent.ɵfac = function ContentTypeToggleDataComponent_Factory(t) { return new (t || ContentTypeToggleDataComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_services_input_validator_service__WEBPACK_IMPORTED_MODULE_2__.InputValidatorService)); };
ContentTypeToggleDataComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ContentTypeToggleDataComponent, selectors: [["content-type-toggle-data"]], outputs: { onConfirmTrigger: "onConfirm", onCloseTrigger: "onClose" }, decls: 14, vars: 5, consts: [[3, "formGroup"], [1, "container-fluid", "pt-3"], [3, "title", "onClose"], [1, "content", "mt-4"], [3, "innerHTML"], [1, "acknowledge-action"], ["formControlName", "acknowledge", 3, "label"], ["class", "swal2-validation-message d-flex", 4, "ngIf"], [1, "row", "pt-5"], [1, "col-md-4"], ["type", "button", "ejs-button", "", 1, "e-dark", "e-flat", "w-100", 3, "click"], [1, "col-md-4", "offset-md-4"], ["type", "button", "ejs-button", "", "content", "Confirm", 1, "e-danger", "w-100", 3, "click"], [1, "swal2-validation-message", "d-flex"]], template: function ContentTypeToggleDataComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "form", 0)(1, "div", 1)(2, "modal-header", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("onClose", function ContentTypeToggleDataComponent_Template_modal_header_onClose_2_listener() { return ctx.onClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "ejs-checkbox", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, ContentTypeToggleDataComponent_div_7_Template, 2, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 8)(9, "div", 9)(10, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ContentTypeToggleDataComponent_Template_button_click_10_listener() { return ctx.onClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 11)(13, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ContentTypeToggleDataComponent_Template_button_click_13_listener() { return ctx.onConfirm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("title", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", ctx.description, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("label", ctx.acknowledge);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.inputValidatorService.isInvalidRequired(ctx.form, "acknowledge"));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _shared_components_modal_header_modal_header_component__WEBPACK_IMPORTED_MODULE_3__.ModalHeaderComponent, _syncfusion_ej2_angular_buttons__WEBPACK_IMPORTED_MODULE_6__.CheckBoxComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _syncfusion_ej2_angular_buttons__WEBPACK_IMPORTED_MODULE_6__.ButtonComponent], styles: [".swal2-validation-message[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\n.acknowledge-action[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--acknowledge-background);\n  border-radius: 5px;\n  margin-top: 2em;\n  padding: 1rem 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRlbnQtdHlwZS10b2dnbGUtZGF0YS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EseUNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUNGIiwiZmlsZSI6ImNvbnRlbnQtdHlwZS10b2dnbGUtZGF0YS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zd2FsMi12YWxpZGF0aW9uLW1lc3NhZ2Uge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuLmFja25vd2xlZGdlLWFjdGlvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWFja25vd2xlZGdlLWJhY2tncm91bmQpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBtYXJnaW4tdG9wOiAyZW07XHJcbiAgcGFkZGluZzogMXJlbSAycmVtO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 91128:
/*!***************************************************************************************************************!*\
  !*** ./src/app/carrier411/admin/components/landing-page-content-management/landing-page-content.component.ts ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Carrier411AdminLandingPageContentComponent": () => (/* binding */ Carrier411AdminLandingPageContentComponent)
/* harmony export */ });
/* harmony import */ var _shared_constants_tools_list_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/constants/tools-list.enum */ 99485);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_core_services_result_handler_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/result.handler.service */ 32464);
/* harmony import */ var _shared_components_welcome_message_edit_welcome_message_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/welcome-message-edit/welcome-message-edit.component */ 21681);
/* harmony import */ var _shared_components_favorite_message_edit_favorite_message_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/favorite-message-edit/favorite-message-edit.component */ 13003);
/* harmony import */ var _shared_components_announcement_message_edit_announcement_message_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/announcement-message-edit/announcement-message-edit.component */ 46055);







class Carrier411AdminLandingPageContentComponent {
    constructor(route, resultHandlerService) {
        this.resultHandlerService = resultHandlerService;
        this.toolId = _shared_constants_tools_list_enum__WEBPACK_IMPORTED_MODULE_0__.ToolsList.Carrier411;
        const data = route.snapshot.data["messages"];
        if (data.isSuccess) {
            this.toolMessages = data.value;
        }
        else {
            this.resultHandlerService.handle(data);
        }
    }
    ngOnInit() {
    }
}
Carrier411AdminLandingPageContentComponent.ɵfac = function Carrier411AdminLandingPageContentComponent_Factory(t) { return new (t || Carrier411AdminLandingPageContentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_result_handler_service__WEBPACK_IMPORTED_MODULE_1__.ResultHandlerService)); };
Carrier411AdminLandingPageContentComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: Carrier411AdminLandingPageContentComponent, selectors: [["landing-page-content"]], decls: 3, vars: 8, consts: [["title", "Landing Page Content Management", "description", "Manage the welcome message for brokers", 3, "welcomeMessage", "toolId"], [3, "favoriteMessage", "description", "toolId"], [3, "announcementMessage", "description", "toolId"]], template: function Carrier411AdminLandingPageContentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "welcome-message-edit", 0)(1, "favorite-message-edit", 1)(2, "announcement-message-edit", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("welcomeMessage", ctx.toolMessages == null ? null : ctx.toolMessages.welcomeMessage)("toolId", ctx.toolId);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("favoriteMessage", ctx.toolMessages == null ? null : ctx.toolMessages.favoriteMessage)("description", "Manage the favorite message for brokers")("toolId", ctx.toolId);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("announcementMessage", ctx.toolMessages == null ? null : ctx.toolMessages.announcementMessage)("description", "Manage the announcement message for brokers")("toolId", ctx.toolId);
    } }, directives: [_shared_components_welcome_message_edit_welcome_message_edit_component__WEBPACK_IMPORTED_MODULE_2__.WelcomeMessageEditComponent, _shared_components_favorite_message_edit_favorite_message_edit_component__WEBPACK_IMPORTED_MODULE_3__.FavoriteMessageEditComponent, _shared_components_announcement_message_edit_announcement_message_edit_component__WEBPACK_IMPORTED_MODULE_4__.AnnouncementMessageEditComponent], encapsulation: 2 });


/***/ }),

/***/ 50259:
/*!*********************************************************************************************************************************************!*\
  !*** ./src/app/carrier411/admin/components/pending-approval-management/components/answers/pending-approval-management-answers.component.ts ***!
  \*********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Carrier411AdminPendingApprovalManagementAnswersComponent": () => (/* binding */ Carrier411AdminPendingApprovalManagementAnswersComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _content_type_management_content_type_management_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../content-type-management/content-type-management.component */ 6857);
/* harmony import */ var src_app_carrier411_admin_utilities_content_type_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/carrier411/admin/utilities/content-type-utils */ 65196);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_core_services_result_handler_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/result.handler.service */ 32464);
/* harmony import */ var src_app_carrier411_admin_services_carrier411_admin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/carrier411/admin/services/carrier411-admin.service */ 61972);
/* harmony import */ var src_app_carrier411_shared_services_carrier411_roles_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/carrier411/shared/services/carrier411-roles.service */ 90673);
/* harmony import */ var _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @syncfusion/ej2-angular-dropdowns */ 24779);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _content_type_card_content_type_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../content-type-card/content-type-card.component */ 22623);
/* harmony import */ var _shared_components_answer_text_answer_text_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shared/components/answer-text/answer-text.component */ 87082);
/* harmony import */ var _syncfusion_ej2_angular_popups__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @syncfusion/ej2-angular-popups */ 58917);
/* harmony import */ var _content_type_status_change_content_type_status_change_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../content-type-status-change/content-type-status-change.component */ 8001);
/* harmony import */ var _content_type_toggle_data_content_type_toggle_data_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../content-type-toggle-data/content-type-toggle-data.component */ 75028);
/* harmony import */ var _answer_edit_answer_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../answer-edit/answer-edit.component */ 25888);
















const _c0 = ["answerEdit"];
function Carrier411AdminPendingApprovalManagementAnswersComponent_content_type_card_10_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "content-type-card", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("onAction", function Carrier411AdminPendingApprovalManagementAnswersComponent_content_type_card_10_Template_content_type_card_onAction_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r9.onTakeAction($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 20)(2, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](6, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "div", 23)(8, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9, "Sub Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](12, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "div", 23)(14, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](15, "Question");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](18, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "div", 23)(20, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](21, "Carrier");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](22, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](23, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](24, "div", 23)(25, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](26, "Answer");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](27, "answer-text", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](28, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const answer_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("contentType", answer_r8)("hasPublishedVersion", answer_r8.item.hasPublishedVersion);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](answer_r8.item.categoryName);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](answer_r8.item.subCategoryName);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](answer_r8.item.questionText);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("innerHTML", answer_r8.item.carrier.name, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("text", answer_r8.item.text);
} }
function Carrier411AdminPendingApprovalManagementAnswersComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 26)(1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, " No records to display. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
} }
class Carrier411AdminPendingApprovalManagementAnswersComponent extends _content_type_management_content_type_management_component__WEBPACK_IMPORTED_MODULE_0__.ContentTypeManagementComponent {
    constructor(route, resultHandler, carrier411AdminService, carrier411RolesService) {
        super(resultHandler);
        this.route = route;
        this.resultHandler = resultHandler;
        this.carrier411AdminService = carrier411AdminService;
        this.carrier411RolesService = carrier411RolesService;
        this.onConfirmData = new _angular_core__WEBPACK_IMPORTED_MODULE_10__.EventEmitter();
    }
    ngOnInit() {
        this.setContentItems(this.answers);
        this.filters = src_app_carrier411_admin_utilities_content_type_utils__WEBPACK_IMPORTED_MODULE_1__.ContentTypeUtils.getPendingFilters(this.carrier411RolesService.isPublisher());
    }
    loadContentItems() {
        this.carrier411AdminService.getPendingAnswers(this.workflowSteps).subscribe((data) => {
            this.setContentItems(data);
            this.onConfirmData.emit();
        });
    }
    initializeEditDialog(contentType) {
        this.carrier411AdminService.getQuestionById(contentType.questionId).subscribe((data) => {
            this.question = data.value;
        });
        this.answerEdit.initializeForm(contentType, false);
    }
    handleDenyAction(action, contentType) {
        this.carrier411AdminService.getAnswerPreviousStep(contentType.id).subscribe((data) => {
            this.handlePreviousStatus(data, action, contentType);
        });
    }
    updateContentItem(data) {
        const answer = data.contentType;
        const model = {
            text: answer.text,
            workflowStep: data.newStatus
        };
        this.carrier411AdminService.updateAnswer(data.contentType.id, model).subscribe((data) => {
            this.resultHandler.handle(data).then((success) => {
                if (success) {
                    this.onCloseModal(this.statusChangeDialog);
                    this.loadContentItems();
                }
            });
        }, (err) => this.resultHandler.handle(err.error));
    }
    deleteContentItem(data) {
        this.carrier411AdminService.deleteAnswer(data.contentType.id).subscribe((data) => {
            this.resultHandler.handle(data).then((success) => {
                if (success) {
                    this.onCloseModal(this.statusChangeDialog);
                    this.loadContentItems();
                }
            });
        }, (err) => this.resultHandler.handle(err.error));
    }
    onConfirmToggleData($event) {
        const contentType = $event.contentType;
        this.carrier411AdminService.toggleAnswerVisibility(contentType.id).subscribe((data) => {
            this.resultHandler.handle(data).then((success) => {
                if (success) {
                    this.onCloseModal(this.contentTypeToggleDataDialog);
                    this.loadContentItems();
                }
            });
        });
    }
    loadNavbar() {
    }
}
Carrier411AdminPendingApprovalManagementAnswersComponent.ɵfac = function Carrier411AdminPendingApprovalManagementAnswersComponent_Factory(t) { return new (t || Carrier411AdminPendingApprovalManagementAnswersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_core_services_result_handler_service__WEBPACK_IMPORTED_MODULE_2__.ResultHandlerService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_carrier411_admin_services_carrier411_admin_service__WEBPACK_IMPORTED_MODULE_3__.Carrier411AdminService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_carrier411_shared_services_carrier411_roles_service__WEBPACK_IMPORTED_MODULE_4__.Carrier411RolesService)); };
Carrier411AdminPendingApprovalManagementAnswersComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: Carrier411AdminPendingApprovalManagementAnswersComponent, selectors: [["pending-approval-management-answers"]], viewQuery: function Carrier411AdminPendingApprovalManagementAnswersComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.answerEdit = _t.first);
    } }, inputs: { answers: "answers", workflowSteps: "workflowSteps" }, outputs: { onConfirmData: "onConfirmData" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵInheritDefinitionFeature"]], decls: 24, vars: 10, consts: [[1, "pending-approval-management"], [1, "header"], [1, "filter-status", "align-middle"], [1, "mr-3"], [3, "dataSource", "fields", "enablePersistence", "value", "change"], [1, "content", "pt-4"], [1, "fw-bold", "text-uppercase"], [3, "contentType", "hasPublishedVersion", "onAction", 4, "ngFor", "ngForOf"], ["class", "e-card mt-4 shadow p-5", 4, "ngIf"], ["isModal", "true", "width", "550", 3, "visible", "open"], ["ejStatusChangeDialog", ""], [3, "onConfirm", "onClose"], ["contentTypeStatusChange", ""], ["ejToggleDataDialog", ""], ["contentTypeToggleData", ""], ["isModal", "true", "width", "500", 3, "visible", "open"], ["ejEditContentDialog", ""], [3, "question", "onClose"], ["answerEdit", ""], [3, "contentType", "hasPublishedVersion", "onAction"], [1, "row", "pt-2"], [1, "col-3", "fw-bold"], [1, "col", "text-break"], [1, "row"], [1, "col", "text-break", 3, "innerHTML"], [1, "col", 3, "text"], [1, "e-card", "mt-4", "shadow", "p-5"], [1, "e-content", "text-center"]], template: function Carrier411AdminPendingApprovalManagementAnswersComponent_Template(rf, ctx) { if (rf & 1) {
        const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, "Filter by Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "ejs-dropdownlist", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function Carrier411AdminPendingApprovalManagementAnswersComponent_Template_ejs_dropdownlist_change_5_listener($event) { return ctx.onFilterChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "div", 5)(7, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8, "Answers");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](9, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](10, Carrier411AdminPendingApprovalManagementAnswersComponent_content_type_card_10_Template, 29, 7, "content-type-card", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](11, Carrier411AdminPendingApprovalManagementAnswersComponent_div_11_Template, 3, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "ejs-dialog", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("open", function Carrier411AdminPendingApprovalManagementAnswersComponent_Template_ejs_dialog_open_12_listener($event) { return ctx.onOpenModal($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "content-type-status-change", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("onConfirm", function Carrier411AdminPendingApprovalManagementAnswersComponent_Template_content_type_status_change_onConfirm_14_listener($event) { return ctx.onConfirmStatusChange($event); })("onClose", function Carrier411AdminPendingApprovalManagementAnswersComponent_Template_content_type_status_change_onClose_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r11); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](13); return ctx.onCloseModal(_r2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "ejs-dialog", 9, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("open", function Carrier411AdminPendingApprovalManagementAnswersComponent_Template_ejs_dialog_open_16_listener($event) { return ctx.onOpenModal($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "content-type-toggle-data", 11, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("onConfirm", function Carrier411AdminPendingApprovalManagementAnswersComponent_Template_content_type_toggle_data_onConfirm_18_listener($event) { return ctx.onConfirmToggleData($event); })("onClose", function Carrier411AdminPendingApprovalManagementAnswersComponent_Template_content_type_toggle_data_onClose_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r11); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](17); return ctx.onCloseModal(_r4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "ejs-dialog", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("open", function Carrier411AdminPendingApprovalManagementAnswersComponent_Template_ejs_dialog_open_20_listener($event) { return ctx.onOpenModal($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "answer-edit", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("onClose", function Carrier411AdminPendingApprovalManagementAnswersComponent_Template_answer_edit_onClose_22_listener($event) { return ctx.onOverlayClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("dataSource", ctx.filters)("fields", ctx.fields)("enablePersistence", true)("value", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.contentItemsList);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.contentItemsList == null || ctx.contentItemsList.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("visible", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("visible", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("visible", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("question", ctx.question);
    } }, directives: [_syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_12__.DropDownListComponent, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _content_type_card_content_type_card_component__WEBPACK_IMPORTED_MODULE_5__.ContentTypeCardComponent, _shared_components_answer_text_answer_text_component__WEBPACK_IMPORTED_MODULE_6__.AnswerTextComponent, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _syncfusion_ej2_angular_popups__WEBPACK_IMPORTED_MODULE_14__.DialogComponent, _content_type_status_change_content_type_status_change_component__WEBPACK_IMPORTED_MODULE_7__.ContentTypeStatusChangeComponent, _content_type_toggle_data_content_type_toggle_data_component__WEBPACK_IMPORTED_MODULE_8__.ContentTypeToggleDataComponent, _answer_edit_answer_edit_component__WEBPACK_IMPORTED_MODULE_9__.AnswerEditComponent], styles: [".pending-approval-management[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.pending-approval-management[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--graymedium);\n}\n.main-container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  display: flex;\n}\n.main-container[_ngcontent-%COMP%]   badge-custom[_ngcontent-%COMP%] {\n  min-width: 25px;\n}\n.main-container[_ngcontent-%COMP%]   .nav-menu-component[_ngcontent-%COMP%] {\n  width: 200px;\n}\n.nav-title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  text-transform: uppercase;\n  margin-bottom: 15px;\n}\n.nav-url[_ngcontent-%COMP%] {\n  color: var(--warnerblue);\n  margin: 0.25rem 0 0.25rem 0.5rem;\n  cursor: pointer;\n}\n.nav-url[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.nav-url-active[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.default-font[_ngcontent-%COMP%] {\n  color: var(--warnerblue);\n  font-size: 14px;\n}\n.menu-container[_ngcontent-%COMP%] {\n  width: 250px;\n  border-right: 1px solid var(--border-color);\n  margin-right: 20px;\n  min-height: calc(100vh - 110px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlbmRpbmctYXBwcm92YWwtbWFuYWdlbWVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBQUo7QUFHRTtFQUNFLFNBQUE7RUFDQSx3QkFBQTtBQURKO0FBT0k7RUFDRSxhQUFBO0FBSk47QUFRRTtFQUNFLGVBQUE7QUFOSjtBQVNFO0VBQ0UsWUFBQTtBQVBKO0FBV0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBUkY7QUFXQTtFQUNFLHdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxlQUFBO0FBUkY7QUFVRTtFQUNFLDBCQUFBO0FBUko7QUFXRTtFQUNFLGlCQUFBO0FBVEo7QUFhQTtFQUNFLHdCQUFBO0VBQ0EsZUFBQTtBQVZGO0FBYUE7RUFDRSxZQUFBO0VBQ0EsMkNBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0FBVkYiLCJmaWxlIjoicGVuZGluZy1hcHByb3ZhbC1tYW5hZ2VtZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBlbmRpbmctYXBwcm92YWwtbWFuYWdlbWVudCB7XHJcbiAgLmhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIGhyIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGNvbG9yOiB2YXIoLS1ncmF5bWVkaXVtKTtcclxuICB9XHJcbn1cclxuXHJcbi5tYWluLWNvbnRhaW5lciB7XHJcbiAgLndyYXBwZXIge1xyXG4gICAgPiAqIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGJhZGdlLWN1c3RvbSB7XHJcbiAgICBtaW4td2lkdGg6IDI1cHg7XHJcbiAgfVxyXG5cclxuICAubmF2LW1lbnUtY29tcG9uZW50IHtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICB9XHJcbn1cclxuXHJcbi5uYXYtdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuLm5hdi11cmwge1xyXG4gIGNvbG9yOiB2YXIoLS13YXJuZXJibHVlKTtcclxuICBtYXJnaW46IDAuMjVyZW0gMCAwLjI1cmVtIDAuNXJlbTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgfVxyXG5cclxuICAmLWFjdGl2ZSB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbn1cclxuXHJcbi5kZWZhdWx0LWZvbnQge1xyXG4gIGNvbG9yOiB2YXIoLS13YXJuZXJibHVlKTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5tZW51LWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDI1MHB4O1xyXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxMTBweCk7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 59123:
/*!***************************************************************************************************************************************************!*\
  !*** ./src/app/carrier411/admin/components/pending-approval-management/components/categories/pending-approval-management-categories.component.ts ***!
  \***************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Carrier411AdminPendingApprovalManagementCategoriesComponent": () => (/* binding */ Carrier411AdminPendingApprovalManagementCategoriesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _content_type_management_content_type_management_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../content-type-management/content-type-management.component */ 6857);
/* harmony import */ var src_app_carrier411_admin_utilities_content_type_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/carrier411/admin/utilities/content-type-utils */ 65196);
/* harmony import */ var src_app_carrier411_admin_constants_content_type_action_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/carrier411/admin/constants/content-type-action.enum */ 60344);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_core_services_result_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/result.handler.service */ 32464);
/* harmony import */ var src_app_carrier411_admin_services_carrier411_admin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/carrier411/admin/services/carrier411-admin.service */ 61972);
/* harmony import */ var src_app_carrier411_shared_services_carrier411_roles_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/carrier411/shared/services/carrier411-roles.service */ 90673);
/* harmony import */ var _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @syncfusion/ej2-angular-dropdowns */ 24779);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _content_type_card_content_type_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../content-type-card/content-type-card.component */ 22623);
/* harmony import */ var _syncfusion_ej2_angular_popups__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @syncfusion/ej2-angular-popups */ 58917);
/* harmony import */ var _content_type_status_change_content_type_status_change_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../content-type-status-change/content-type-status-change.component */ 8001);
/* harmony import */ var _content_type_toggle_data_content_type_toggle_data_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../content-type-toggle-data/content-type-toggle-data.component */ 75028);
/* harmony import */ var _category_edit_category_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../category-edit/category-edit.component */ 32780);
















const _c0 = ["categoryEdit"];
function Carrier411AdminPendingApprovalManagementCategoriesComponent_content_type_card_10_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "content-type-card", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("onAction", function Carrier411AdminPendingApprovalManagementCategoriesComponent_content_type_card_10_Template_content_type_card_onAction_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r9.onTakeAction($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 20)(2, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](6, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("contentType", category_r8)("hasPublishedVersion", category_r8.item.hasPublishedVersion);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](category_r8.item.name);
} }
function Carrier411AdminPendingApprovalManagementCategoriesComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 23)(1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, " No records to display. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
} }
class Carrier411AdminPendingApprovalManagementCategoriesComponent extends _content_type_management_content_type_management_component__WEBPACK_IMPORTED_MODULE_0__.ContentTypeManagementComponent {
    constructor(route, resultHandler, carrier411AdminService, carrier411RolesService) {
        super(resultHandler);
        this.route = route;
        this.resultHandler = resultHandler;
        this.carrier411AdminService = carrier411AdminService;
        this.carrier411RolesService = carrier411RolesService;
        this.onConfirmData = new _angular_core__WEBPACK_IMPORTED_MODULE_10__.EventEmitter();
    }
    ngOnInit() {
        this.setContentItems(this.categories);
        this.filters = src_app_carrier411_admin_utilities_content_type_utils__WEBPACK_IMPORTED_MODULE_1__.ContentTypeUtils.getPendingFilters(this.carrier411RolesService.isPublisher());
    }
    loadContentItems() {
        this.carrier411AdminService.getPendingCategories(this.workflowSteps).subscribe((data) => {
            this.setContentItems(data);
            this.onConfirmData.emit();
        });
    }
    initializeEditDialog(contentType) {
        this.categoryEdit.initializeForm(contentType, false);
    }
    handleDenyAction(action, contentType) {
        this.carrier411AdminService.getCategoryPreviousStep(contentType.id).subscribe((data) => {
            this.handlePreviousStatus(data, action, contentType);
        });
    }
    updateContentItem(data) {
        const model = {
            name: data.contentType.name,
            workflowStep: data.newStatus
        };
        this.carrier411AdminService.updateCategory(data.contentType.id, model).subscribe((data) => {
            this.resultHandler.handle(data).then((success) => {
                if (success) {
                    this.onCloseModal(this.statusChangeDialog);
                    this.loadContentItems();
                }
            });
        }, (err) => this.resultHandler.handle(err.error));
    }
    deleteContentItem(data) {
        this.carrier411AdminService.deleteCategory(data.contentType.id).subscribe((data) => {
            this.resultHandler.handle(data).then((success) => {
                if (success) {
                    this.onCloseModal(this.statusChangeDialog);
                    this.loadContentItems();
                }
            });
        }, (err) => this.resultHandler.handle(err.error));
    }
    onConfirmToggleData($event) {
        const actionConverted = $event.action;
        const contentType = $event.contentType;
        switch (actionConverted) {
            case +src_app_carrier411_admin_constants_content_type_action_enum__WEBPACK_IMPORTED_MODULE_2__.ContentTypeAction.Hide:
            case +src_app_carrier411_admin_constants_content_type_action_enum__WEBPACK_IMPORTED_MODULE_2__.ContentTypeAction.Unhide:
                this.toggleVisibility(contentType);
                break;
            case +src_app_carrier411_admin_constants_content_type_action_enum__WEBPACK_IMPORTED_MODULE_2__.ContentTypeAction.RestrictAccess:
            case +src_app_carrier411_admin_constants_content_type_action_enum__WEBPACK_IMPORTED_MODULE_2__.ContentTypeAction.UnrestrictAccess:
                this.toggleRestrictAccess(contentType);
                break;
            default:
                this.onCloseModal(this.contentTypeToggleDataDialog);
                break;
        }
        this.onConfirmData.emit();
    }
    toggleVisibility(category) {
        this.carrier411AdminService.toggleCategoryVisibility(category.id).subscribe((data) => {
            this.resultHandler.handle(data).then((success) => {
                if (success) {
                    this.onCloseModal(this.contentTypeToggleDataDialog);
                    this.loadContentItems();
                }
            });
        });
    }
    toggleRestrictAccess(category) {
        this.carrier411AdminService.toggleCategoryRestrictAccess(category.id).subscribe((data) => {
            this.resultHandler.handle(data).then((success) => {
                if (success) {
                    this.onCloseModal(this.contentTypeToggleDataDialog);
                    this.loadContentItems();
                }
            });
        });
    }
    loadNavbar() {
    }
}
Carrier411AdminPendingApprovalManagementCategoriesComponent.ɵfac = function Carrier411AdminPendingApprovalManagementCategoriesComponent_Factory(t) { return new (t || Carrier411AdminPendingApprovalManagementCategoriesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_core_services_result_handler_service__WEBPACK_IMPORTED_MODULE_3__.ResultHandlerService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_carrier411_admin_services_carrier411_admin_service__WEBPACK_IMPORTED_MODULE_4__.Carrier411AdminService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_carrier411_shared_services_carrier411_roles_service__WEBPACK_IMPORTED_MODULE_5__.Carrier411RolesService)); };
Carrier411AdminPendingApprovalManagementCategoriesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: Carrier411AdminPendingApprovalManagementCategoriesComponent, selectors: [["pending-approval-management-categories"]], viewQuery: function Carrier411AdminPendingApprovalManagementCategoriesComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.categoryEdit = _t.first);
    } }, inputs: { categories: "categories", workflowSteps: "workflowSteps" }, outputs: { onConfirmData: "onConfirmData" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵInheritDefinitionFeature"]], decls: 24, vars: 9, consts: [[1, "pending-approval-management"], [1, "header"], [1, "filter-status", "align-middle"], [1, "mr-3"], [3, "dataSource", "fields", "enablePersistence", "value", "change"], [1, "content", "pt-4"], [1, "fw-bold", "text-uppercase"], [3, "contentType", "hasPublishedVersion", "onAction", 4, "ngFor", "ngForOf"], ["class", "e-card mt-4 shadow p-5", 4, "ngIf"], ["isModal", "true", "width", "550", 3, "visible", "open"], ["ejStatusChangeDialog", ""], [3, "onConfirm", "onClose"], ["contentTypeStatusChange", ""], ["ejToggleDataDialog", ""], ["contentTypeToggleData", ""], ["isModal", "true", "width", "500", 3, "visible", "open"], ["ejEditContentDialog", ""], [3, "onClose"], ["categoryEdit", ""], [3, "contentType", "hasPublishedVersion", "onAction"], [1, "row", "pt-2"], [1, "col-4", "fw-bold"], [1, "col", "text-break"], [1, "e-card", "mt-4", "shadow", "p-5"], [1, "e-content", "text-center"]], template: function Carrier411AdminPendingApprovalManagementCategoriesComponent_Template(rf, ctx) { if (rf & 1) {
        const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, "Filter by Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "ejs-dropdownlist", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function Carrier411AdminPendingApprovalManagementCategoriesComponent_Template_ejs_dropdownlist_change_5_listener($event) { return ctx.onFilterChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "div", 5)(7, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8, "Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](9, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](10, Carrier411AdminPendingApprovalManagementCategoriesComponent_content_type_card_10_Template, 7, 3, "content-type-card", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](11, Carrier411AdminPendingApprovalManagementCategoriesComponent_div_11_Template, 3, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "ejs-dialog", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("open", function Carrier411AdminPendingApprovalManagementCategoriesComponent_Template_ejs_dialog_open_12_listener($event) { return ctx.onOpenModal($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "content-type-status-change", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("onConfirm", function Carrier411AdminPendingApprovalManagementCategoriesComponent_Template_content_type_status_change_onConfirm_14_listener($event) { return ctx.onConfirmStatusChange($event); })("onClose", function Carrier411AdminPendingApprovalManagementCategoriesComponent_Template_content_type_status_change_onClose_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r11); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](13); return ctx.onCloseModal(_r2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "ejs-dialog", 9, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("open", function Carrier411AdminPendingApprovalManagementCategoriesComponent_Template_ejs_dialog_open_16_listener($event) { return ctx.onOpenModal($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "content-type-toggle-data", 11, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("onConfirm", function Carrier411AdminPendingApprovalManagementCategoriesComponent_Template_content_type_toggle_data_onConfirm_18_listener($event) { return ctx.onConfirmToggleData($event); })("onClose", function Carrier411AdminPendingApprovalManagementCategoriesComponent_Template_content_type_toggle_data_onClose_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r11); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](17); return ctx.onCloseModal(_r4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "ejs-dialog", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("open", function Carrier411AdminPendingApprovalManagementCategoriesComponent_Template_ejs_dialog_open_20_listener($event) { return ctx.onOpenModal($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "category-edit", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("onClose", function Carrier411AdminPendingApprovalManagementCategoriesComponent_Template_category_edit_onClose_22_listener($event) { return ctx.onOverlayClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("dataSource", ctx.filters)("fields", ctx.fields)("enablePersistence", true)("value", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.contentItemsList);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.contentItemsList == null || ctx.contentItemsList.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("visible", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("visible", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("visible", false);
    } }, directives: [_syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_12__.DropDownListComponent, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _content_type_card_content_type_card_component__WEBPACK_IMPORTED_MODULE_6__.ContentTypeCardComponent, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _syncfusion_ej2_angular_popups__WEBPACK_IMPORTED_MODULE_14__.DialogComponent, _content_type_status_change_content_type_status_change_component__WEBPACK_IMPORTED_MODULE_7__.ContentTypeStatusChangeComponent, _content_type_toggle_data_content_type_toggle_data_component__WEBPACK_IMPORTED_MODULE_8__.ContentTypeToggleDataComponent, _category_edit_category_edit_component__WEBPACK_IMPORTED_MODULE_9__.CategoryEditComponent], styles: [".pending-approval-management[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.pending-approval-management[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--graymedium);\n}\n.main-container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  display: flex;\n}\n.main-container[_ngcontent-%COMP%]   badge-custom[_ngcontent-%COMP%] {\n  min-width: 25px;\n}\n.main-container[_ngcontent-%COMP%]   .nav-menu-component[_ngcontent-%COMP%] {\n  width: 200px;\n}\n.nav-title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  text-transform: uppercase;\n  margin-bottom: 15px;\n}\n.nav-url[_ngcontent-%COMP%] {\n  color: var(--warnerblue);\n  margin: 0.25rem 0 0.25rem 0.5rem;\n  cursor: pointer;\n}\n.nav-url[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.nav-url-active[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.default-font[_ngcontent-%COMP%] {\n  color: var(--warnerblue);\n  font-size: 14px;\n}\n.menu-container[_ngcontent-%COMP%] {\n  width: 250px;\n  border-right: 1px solid var(--border-color);\n  margin-right: 20px;\n  min-height: calc(100vh - 110px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlbmRpbmctYXBwcm92YWwtbWFuYWdlbWVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBQUo7QUFHRTtFQUNFLFNBQUE7RUFDQSx3QkFBQTtBQURKO0FBT0k7RUFDRSxhQUFBO0FBSk47QUFRRTtFQUNFLGVBQUE7QUFOSjtBQVNFO0VBQ0UsWUFBQTtBQVBKO0FBV0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBUkY7QUFXQTtFQUNFLHdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxlQUFBO0FBUkY7QUFVRTtFQUNFLDBCQUFBO0FBUko7QUFXRTtFQUNFLGlCQUFBO0FBVEo7QUFhQTtFQUNFLHdCQUFBO0VBQ0EsZUFBQTtBQVZGO0FBYUE7RUFDRSxZQUFBO0VBQ0EsMkNBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0FBVkYiLCJmaWxlIjoicGVuZGluZy1hcHByb3ZhbC1tYW5hZ2VtZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBlbmRpbmctYXBwcm92YWwtbWFuYWdlbWVudCB7XHJcbiAgLmhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIGhyIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGNvbG9yOiB2YXIoLS1ncmF5bWVkaXVtKTtcclxuICB9XHJcbn1cclxuXHJcbi5tYWluLWNvbnRhaW5lciB7XHJcbiAgLndyYXBwZXIge1xyXG4gICAgPiAqIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGJhZGdlLWN1c3RvbSB7XHJcbiAgICBtaW4td2lkdGg6IDI1cHg7XHJcbiAgfVxyXG5cclxuICAubmF2LW1lbnUtY29tcG9uZW50IHtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICB9XHJcbn1cclxuXHJcbi5uYXYtdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuLm5hdi11cmwge1xyXG4gIGNvbG9yOiB2YXIoLS13YXJuZXJibHVlKTtcclxuICBtYXJnaW46IDAuMjVyZW0gMCAwLjI1cmVtIDAuNXJlbTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgfVxyXG5cclxuICAmLWFjdGl2ZSB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbn1cclxuXHJcbi5kZWZhdWx0LWZvbnQge1xyXG4gIGNvbG9yOiB2YXIoLS13YXJuZXJibHVlKTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5tZW51LWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDI1MHB4O1xyXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxMTBweCk7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 95493:
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/carrier411/admin/components/pending-approval-management/components/pending-approval-management.component.ts ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Carrier411AdminPendingApprovalManagementComponent": () => (/* binding */ Carrier411AdminPendingApprovalManagementComponent)
/* harmony export */ });
/* harmony import */ var src_app_shared_constants_application_urls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/constants/application-urls */ 85561);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_carrier411_shared_services_carrier411_roles_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/carrier411/shared/services/carrier411-roles.service */ 90673);
/* harmony import */ var src_app_carrier411_admin_services_carrier411_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/carrier411/admin/services/carrier411-admin.service */ 61972);
/* harmony import */ var _shared_components_return_button_return_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/components/return-button/return-button.component */ 44188);
/* harmony import */ var _shared_components_badge_custom_badge_custom_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/components/badge-custom/badge-custom.component */ 39040);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _categories_pending_approval_management_categories_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./categories/pending-approval-management-categories.component */ 59123);
/* harmony import */ var _subcategories_pending_approval_management_subcategories_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./subcategories/pending-approval-management-subcategories.component */ 39755);
/* harmony import */ var _questions_pending_approval_management_questions_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./questions/pending-approval-management-questions.component */ 25819);
/* harmony import */ var _answers_pending_approval_management_answers_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./answers/pending-approval-management-answers.component */ 50259);













const _c0 = function (a0) { return { "fw-bold": a0 }; };
class Carrier411AdminPendingApprovalManagementComponent {
    constructor(route, carrier411RolesService, carrier411AdminService) {
        this.carrier411RolesService = carrier411RolesService;
        this.carrier411AdminService = carrier411AdminService;
        this.showCategory = true;
        this.showSubCategory = false;
        this.showQuestion = false;
        this.showAnswer = false;
        this.returnUrl = src_app_shared_constants_application_urls__WEBPACK_IMPORTED_MODULE_0__.ApplicationUrls.Carrier411Admin.path;
        this.categories = route.snapshot.data["categories"];
        this.subcategories = route.snapshot.data["subcategories"];
        this.questions = route.snapshot.data["questions"];
        this.answers = route.snapshot.data["answers"];
        this.pendingApprovalCount = route.snapshot.data["pendingApprovalCount"].value;
        this.workflowSteps = this.carrier411RolesService.getAllowedWorkflowSteps();
    }
    ngOnInit() {
    }
    getPendingApprovalCount() {
        this.carrier411AdminService.getPendingApprovalCount(this.workflowSteps).subscribe((data) => {
            this.pendingApprovalCount = data.value;
        });
    }
    openCategories() {
        this.closeAllPendings();
        this.showCategory = true;
    }
    openSubCategories() {
        this.closeAllPendings();
        this.showSubCategory = true;
    }
    openQuestions() {
        this.closeAllPendings();
        this.showQuestion = true;
    }
    openAnswers() {
        this.closeAllPendings();
        this.showAnswer = true;
    }
    closeAllPendings() {
        this.showCategory = false;
        this.showSubCategory = false;
        this.showQuestion = false;
        this.showAnswer = false;
    }
}
Carrier411AdminPendingApprovalManagementComponent.ɵfac = function Carrier411AdminPendingApprovalManagementComponent_Factory(t) { return new (t || Carrier411AdminPendingApprovalManagementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_carrier411_shared_services_carrier411_roles_service__WEBPACK_IMPORTED_MODULE_1__.Carrier411RolesService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_carrier411_admin_services_carrier411_admin_service__WEBPACK_IMPORTED_MODULE_2__.Carrier411AdminService)); };
Carrier411AdminPendingApprovalManagementComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: Carrier411AdminPendingApprovalManagementComponent, selectors: [["pending-approval-management"]], decls: 37, vars: 29, consts: [[1, "main-container"], [1, "wrapper"], [1, "menu-container"], ["sufix", "To Main", 3, "returnUrl"], ["colspan", "2", 1, "fw-bold", "text-uppercase", "nav-title"], [1, "align-middle"], [1, "nav-url", 3, "ngClass", "click"], [1, "col-md"], [1, "content"], [1, "pending-approval-management"], [1, "pb-3"], [3, "hidden", "categories", "workflowSteps", "onConfirmData"], [3, "hidden", "subcategories", "workflowSteps", "onConfirmData"], [3, "hidden", "questions", "workflowSteps", "onConfirmData"], [3, "hidden", "answers", "workflowSteps", "onConfirmData"]], template: function Carrier411AdminPendingApprovalManagementComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 0)(1, "div")(2, "div", 1)(3, "div")(4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](5, "return-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7, "Pending Approval Management");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "div", 5)(9, "badge-custom");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function Carrier411AdminPendingApprovalManagementComponent_Template_span_click_11_listener() { return ctx.openCategories(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12, "Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "div", 5)(14, "badge-custom");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function Carrier411AdminPendingApprovalManagementComponent_Template_span_click_16_listener() { return ctx.openSubCategories(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](17, "Sub Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "div", 5)(19, "badge-custom");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function Carrier411AdminPendingApprovalManagementComponent_Template_span_click_21_listener() { return ctx.openQuestions(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](22, "Questions");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](23, "div", 5)(24, "badge-custom");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](26, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function Carrier411AdminPendingApprovalManagementComponent_Template_span_click_26_listener() { return ctx.openAnswers(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](27, "Answers");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](28, "div", 7)(29, "div", 8)(30, "div", 9)(31, "page-title", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](32, "Pending Approval Management");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](33, "pending-approval-management-categories", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("onConfirmData", function Carrier411AdminPendingApprovalManagementComponent_Template_pending_approval_management_categories_onConfirmData_33_listener() { return ctx.getPendingApprovalCount(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](34, "pending-approval-management-subcategories", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("onConfirmData", function Carrier411AdminPendingApprovalManagementComponent_Template_pending_approval_management_subcategories_onConfirmData_34_listener() { return ctx.getPendingApprovalCount(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](35, "pending-approval-management-questions", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("onConfirmData", function Carrier411AdminPendingApprovalManagementComponent_Template_pending_approval_management_questions_onConfirmData_35_listener() { return ctx.getPendingApprovalCount(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](36, "pending-approval-management-answers", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("onConfirmData", function Carrier411AdminPendingApprovalManagementComponent_Template_pending_approval_management_answers_onConfirmData_36_listener() { return ctx.getPendingApprovalCount(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("returnUrl", ctx.returnUrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx.pendingApprovalCount.categoriesCount);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](21, _c0, ctx.showCategory));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx.pendingApprovalCount.subCategoriesCount);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](23, _c0, ctx.showSubCategory));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx.pendingApprovalCount.questionsCount);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](25, _c0, ctx.showQuestion));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx.pendingApprovalCount.answersCount);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](27, _c0, ctx.showAnswer));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("hidden", !ctx.showCategory)("categories", ctx.categories)("workflowSteps", ctx.workflowSteps);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("hidden", !ctx.showSubCategory)("subcategories", ctx.subcategories)("workflowSteps", ctx.workflowSteps);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("hidden", !ctx.showQuestion)("questions", ctx.questions)("workflowSteps", ctx.workflowSteps);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("hidden", !ctx.showAnswer)("answers", ctx.answers)("workflowSteps", ctx.workflowSteps);
    } }, directives: [_shared_components_return_button_return_button_component__WEBPACK_IMPORTED_MODULE_3__.ReturnButtonComponent, _shared_components_badge_custom_badge_custom_component__WEBPACK_IMPORTED_MODULE_4__.BadgeCustomComponent, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgClass, _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_5__.PageTitleComponent, _categories_pending_approval_management_categories_component__WEBPACK_IMPORTED_MODULE_6__.Carrier411AdminPendingApprovalManagementCategoriesComponent, _subcategories_pending_approval_management_subcategories_component__WEBPACK_IMPORTED_MODULE_7__.Carrier411AdminPendingApprovalManagementSubCategoriesComponent, _questions_pending_approval_management_questions_component__WEBPACK_IMPORTED_MODULE_8__.Carrier411AdminPendingApprovalManagementQuestionsComponent, _answers_pending_approval_management_answers_component__WEBPACK_IMPORTED_MODULE_9__.Carrier411AdminPendingApprovalManagementAnswersComponent], styles: [".pending-approval-management[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.pending-approval-management[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--graymedium);\n}\n.main-container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  display: flex;\n}\n.main-container[_ngcontent-%COMP%]   badge-custom[_ngcontent-%COMP%] {\n  min-width: 25px;\n}\n.main-container[_ngcontent-%COMP%]   .nav-menu-component[_ngcontent-%COMP%] {\n  width: 200px;\n}\n.nav-title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  text-transform: uppercase;\n  margin-bottom: 15px;\n}\n.nav-url[_ngcontent-%COMP%] {\n  color: var(--warnerblue);\n  margin: 0.25rem 0 0.25rem 0.5rem;\n  cursor: pointer;\n}\n.nav-url[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.nav-url-active[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.default-font[_ngcontent-%COMP%] {\n  color: var(--warnerblue);\n  font-size: 14px;\n}\n.menu-container[_ngcontent-%COMP%] {\n  width: 250px;\n  border-right: 1px solid var(--border-color);\n  margin-right: 20px;\n  min-height: calc(100vh - 110px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlbmRpbmctYXBwcm92YWwtbWFuYWdlbWVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBQUo7QUFHRTtFQUNFLFNBQUE7RUFDQSx3QkFBQTtBQURKO0FBT0k7RUFDRSxhQUFBO0FBSk47QUFRRTtFQUNFLGVBQUE7QUFOSjtBQVNFO0VBQ0UsWUFBQTtBQVBKO0FBV0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBUkY7QUFXQTtFQUNFLHdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxlQUFBO0FBUkY7QUFVRTtFQUNFLDBCQUFBO0FBUko7QUFXRTtFQUNFLGlCQUFBO0FBVEo7QUFhQTtFQUNFLHdCQUFBO0VBQ0EsZUFBQTtBQVZGO0FBYUE7RUFDRSxZQUFBO0VBQ0EsMkNBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0FBVkYiLCJmaWxlIjoicGVuZGluZy1hcHByb3ZhbC1tYW5hZ2VtZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBlbmRpbmctYXBwcm92YWwtbWFuYWdlbWVudCB7XHJcbiAgLmhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIGhyIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGNvbG9yOiB2YXIoLS1ncmF5bWVkaXVtKTtcclxuICB9XHJcbn1cclxuXHJcbi5tYWluLWNvbnRhaW5lciB7XHJcbiAgLndyYXBwZXIge1xyXG4gICAgPiAqIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGJhZGdlLWN1c3RvbSB7XHJcbiAgICBtaW4td2lkdGg6IDI1cHg7XHJcbiAgfVxyXG5cclxuICAubmF2LW1lbnUtY29tcG9uZW50IHtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICB9XHJcbn1cclxuXHJcbi5uYXYtdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuLm5hdi11cmwge1xyXG4gIGNvbG9yOiB2YXIoLS13YXJuZXJibHVlKTtcclxuICBtYXJnaW46IDAuMjVyZW0gMCAwLjI1cmVtIDAuNXJlbTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgfVxyXG5cclxuICAmLWFjdGl2ZSB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbn1cclxuXHJcbi5kZWZhdWx0LWZvbnQge1xyXG4gIGNvbG9yOiB2YXIoLS13YXJuZXJibHVlKTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5tZW51LWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDI1MHB4O1xyXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxMTBweCk7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 25819:
/*!*************************************************************************************************************************************************!*\
  !*** ./src/app/carrier411/admin/components/pending-approval-management/components/questions/pending-approval-management-questions.component.ts ***!
  \*************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Carrier411AdminPendingApprovalManagementQuestionsComponent": () => (/* binding */ Carrier411AdminPendingApprovalManagementQuestionsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _content_type_management_content_type_management_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../content-type-management/content-type-management.component */ 6857);
/* harmony import */ var src_app_carrier411_admin_utilities_content_type_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/carrier411/admin/utilities/content-type-utils */ 65196);
/* harmony import */ var src_app_carrier411_admin_constants_content_type_action_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/carrier411/admin/constants/content-type-action.enum */ 60344);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_core_services_result_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/result.handler.service */ 32464);
/* harmony import */ var src_app_carrier411_admin_services_carrier411_admin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/carrier411/admin/services/carrier411-admin.service */ 61972);
/* harmony import */ var src_app_carrier411_shared_services_carrier411_roles_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/carrier411/shared/services/carrier411-roles.service */ 90673);
/* harmony import */ var _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @syncfusion/ej2-angular-dropdowns */ 24779);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _content_type_card_content_type_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../content-type-card/content-type-card.component */ 22623);
/* harmony import */ var _syncfusion_ej2_angular_popups__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @syncfusion/ej2-angular-popups */ 58917);
/* harmony import */ var _content_type_status_change_content_type_status_change_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../content-type-status-change/content-type-status-change.component */ 8001);
/* harmony import */ var _content_type_toggle_data_content_type_toggle_data_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../content-type-toggle-data/content-type-toggle-data.component */ 75028);
/* harmony import */ var _question_edit_question_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../question-edit/question-edit.component */ 73179);
















const _c0 = ["questionEdit"];
function Carrier411AdminPendingApprovalManagementQuestionsComponent_content_type_card_10_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "content-type-card", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("onAction", function Carrier411AdminPendingApprovalManagementQuestionsComponent_content_type_card_10_Template_content_type_card_onAction_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r9.onTakeAction($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 20)(2, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](6, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "div", 23)(8, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9, "Sub Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](12, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "div", 23)(14, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](15, "Question");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](18, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const question_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("contentType", question_r8)("hasPublishedVersion", question_r8.item.hasPublishedVersion);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](question_r8.item.category.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](question_r8.item.subCategory.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](question_r8.item.text);
} }
function Carrier411AdminPendingApprovalManagementQuestionsComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 24)(1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, " No records to display. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
} }
class Carrier411AdminPendingApprovalManagementQuestionsComponent extends _content_type_management_content_type_management_component__WEBPACK_IMPORTED_MODULE_0__.ContentTypeManagementComponent {
    constructor(route, resultHandler, carrier411AdminService, carrier411RolesService) {
        super(resultHandler);
        this.route = route;
        this.resultHandler = resultHandler;
        this.carrier411AdminService = carrier411AdminService;
        this.carrier411RolesService = carrier411RolesService;
        this.onConfirmData = new _angular_core__WEBPACK_IMPORTED_MODULE_10__.EventEmitter();
    }
    ngOnInit() {
        this.setContentItems(this.questions);
        this.filters = src_app_carrier411_admin_utilities_content_type_utils__WEBPACK_IMPORTED_MODULE_1__.ContentTypeUtils.getPendingFilters(this.carrier411RolesService.isPublisher());
    }
    loadContentItems() {
        this.carrier411AdminService.getPendingQuestions(this.workflowSteps).subscribe((data) => {
            this.setContentItems(data);
            this.onConfirmData.emit();
        });
    }
    initializeEditDialog(contentType) {
        this.carrier411AdminService.getSubCategoryById(contentType.subCategory.id).subscribe((data) => {
            this.subCategory = data.value;
        });
        this.questionEdit.initializeForm(contentType, false);
    }
    handleDenyAction(action, contentType) {
        this.carrier411AdminService.getQuestionPreviousStep(contentType.id).subscribe((data) => {
            this.handlePreviousStatus(data, action, contentType);
        });
    }
    updateContentItem(data) {
        const question = data.contentType;
        const model = {
            workflowStep: data.newStatus,
            text: question.text
        };
        this.carrier411AdminService.updateQuestion(data.contentType.id, model).subscribe((data) => {
            this.resultHandler.handle(data).then((success) => {
                if (success) {
                    this.onCloseModal(this.statusChangeDialog);
                    this.loadContentItems();
                }
            });
        }, (err) => this.resultHandler.handle(err.error));
    }
    deleteContentItem(data) {
        this.carrier411AdminService.deleteQuestion(data.contentType.id).subscribe((data) => {
            this.resultHandler.handle(data).then((success) => {
                if (success) {
                    this.onCloseModal(this.statusChangeDialog);
                    this.loadContentItems();
                }
            });
        }, (err) => this.resultHandler.handle(err.error));
    }
    onConfirmToggleData($event) {
        const actionConverted = $event.action;
        const contentType = $event.contentType;
        switch (actionConverted) {
            case +src_app_carrier411_admin_constants_content_type_action_enum__WEBPACK_IMPORTED_MODULE_2__.ContentTypeAction.Hide:
            case +src_app_carrier411_admin_constants_content_type_action_enum__WEBPACK_IMPORTED_MODULE_2__.ContentTypeAction.Unhide:
                this.toggleVisibility(contentType);
                break;
            default:
                this.onCloseModal(this.contentTypeToggleDataDialog);
                break;
        }
    }
    toggleVisibility(question) {
        this.carrier411AdminService.toggleQuestionVisibility(question.id).subscribe((data) => {
            this.resultHandler.handle(data).then((success) => {
                if (success) {
                    this.onCloseModal(this.contentTypeToggleDataDialog);
                    this.loadContentItems();
                }
            });
        });
    }
    loadNavbar() {
    }
}
Carrier411AdminPendingApprovalManagementQuestionsComponent.ɵfac = function Carrier411AdminPendingApprovalManagementQuestionsComponent_Factory(t) { return new (t || Carrier411AdminPendingApprovalManagementQuestionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_core_services_result_handler_service__WEBPACK_IMPORTED_MODULE_3__.ResultHandlerService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_carrier411_admin_services_carrier411_admin_service__WEBPACK_IMPORTED_MODULE_4__.Carrier411AdminService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_carrier411_shared_services_carrier411_roles_service__WEBPACK_IMPORTED_MODULE_5__.Carrier411RolesService)); };
Carrier411AdminPendingApprovalManagementQuestionsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: Carrier411AdminPendingApprovalManagementQuestionsComponent, selectors: [["pending-approval-management-questions"]], viewQuery: function Carrier411AdminPendingApprovalManagementQuestionsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.questionEdit = _t.first);
    } }, inputs: { questions: "questions", workflowSteps: "workflowSteps" }, outputs: { onConfirmData: "onConfirmData" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵInheritDefinitionFeature"]], decls: 24, vars: 12, consts: [[1, "pending-approval-management"], [1, "header"], [1, "filter-status", "align-middle"], [1, "mr-3"], [3, "dataSource", "fields", "enablePersistence", "value", "change"], [1, "content", "pt-4"], [1, "fw-bold", "text-uppercase"], [3, "contentType", "hasPublishedVersion", "onAction", 4, "ngFor", "ngForOf"], ["class", "e-card mt-4 shadow p-5", 4, "ngIf"], ["isModal", "true", "width", "550", 3, "visible", "open"], ["ejStatusChangeDialog", ""], [3, "onConfirm", "onClose"], ["contentTypeStatusChange", ""], ["ejToggleDataDialog", ""], ["contentTypeToggleData", ""], ["isModal", "true", "width", "500", 3, "visible", "open"], ["ejEditContentDialog", ""], [3, "categoryName", "subcategoryName", "subCategoryId", "onClose"], ["questionEdit", ""], [3, "contentType", "hasPublishedVersion", "onAction"], [1, "row", "pt-2"], [1, "col-4", "fw-bold"], [1, "col"], [1, "row"], [1, "e-card", "mt-4", "shadow", "p-5"], [1, "e-content", "text-center"]], template: function Carrier411AdminPendingApprovalManagementQuestionsComponent_Template(rf, ctx) { if (rf & 1) {
        const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, "Filter by Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "ejs-dropdownlist", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function Carrier411AdminPendingApprovalManagementQuestionsComponent_Template_ejs_dropdownlist_change_5_listener($event) { return ctx.onFilterChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "div", 5)(7, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8, "Questions");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](9, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](10, Carrier411AdminPendingApprovalManagementQuestionsComponent_content_type_card_10_Template, 19, 5, "content-type-card", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](11, Carrier411AdminPendingApprovalManagementQuestionsComponent_div_11_Template, 3, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "ejs-dialog", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("open", function Carrier411AdminPendingApprovalManagementQuestionsComponent_Template_ejs_dialog_open_12_listener($event) { return ctx.onOpenModal($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "content-type-status-change", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("onConfirm", function Carrier411AdminPendingApprovalManagementQuestionsComponent_Template_content_type_status_change_onConfirm_14_listener($event) { return ctx.onConfirmStatusChange($event); })("onClose", function Carrier411AdminPendingApprovalManagementQuestionsComponent_Template_content_type_status_change_onClose_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r11); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](13); return ctx.onCloseModal(_r2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "ejs-dialog", 9, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("open", function Carrier411AdminPendingApprovalManagementQuestionsComponent_Template_ejs_dialog_open_16_listener($event) { return ctx.onOpenModal($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "content-type-toggle-data", 11, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("onConfirm", function Carrier411AdminPendingApprovalManagementQuestionsComponent_Template_content_type_toggle_data_onConfirm_18_listener($event) { return ctx.onConfirmToggleData($event); })("onClose", function Carrier411AdminPendingApprovalManagementQuestionsComponent_Template_content_type_toggle_data_onClose_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r11); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](17); return ctx.onCloseModal(_r4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "ejs-dialog", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("open", function Carrier411AdminPendingApprovalManagementQuestionsComponent_Template_ejs_dialog_open_20_listener($event) { return ctx.onOpenModal($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "question-edit", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("onClose", function Carrier411AdminPendingApprovalManagementQuestionsComponent_Template_question_edit_onClose_22_listener($event) { return ctx.onOverlayClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("dataSource", ctx.filters)("fields", ctx.fields)("enablePersistence", true)("value", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.contentItemsList);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.contentItemsList == null || ctx.contentItemsList.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("visible", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("visible", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("visible", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("categoryName", ctx.subCategory == null ? null : ctx.subCategory.categoryName)("subcategoryName", ctx.subCategory == null ? null : ctx.subCategory.name)("subCategoryId", ctx.subCategory == null ? null : ctx.subCategory.id);
    } }, directives: [_syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_12__.DropDownListComponent, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _content_type_card_content_type_card_component__WEBPACK_IMPORTED_MODULE_6__.ContentTypeCardComponent, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _syncfusion_ej2_angular_popups__WEBPACK_IMPORTED_MODULE_14__.DialogComponent, _content_type_status_change_content_type_status_change_component__WEBPACK_IMPORTED_MODULE_7__.ContentTypeStatusChangeComponent, _content_type_toggle_data_content_type_toggle_data_component__WEBPACK_IMPORTED_MODULE_8__.ContentTypeToggleDataComponent, _question_edit_question_edit_component__WEBPACK_IMPORTED_MODULE_9__.QuestionEditComponent], styles: [".pending-approval-management[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.pending-approval-management[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--graymedium);\n}\n.main-container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  display: flex;\n}\n.main-container[_ngcontent-%COMP%]   badge-custom[_ngcontent-%COMP%] {\n  min-width: 25px;\n}\n.main-container[_ngcontent-%COMP%]   .nav-menu-component[_ngcontent-%COMP%] {\n  width: 200px;\n}\n.nav-title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  text-transform: uppercase;\n  margin-bottom: 15px;\n}\n.nav-url[_ngcontent-%COMP%] {\n  color: var(--warnerblue);\n  margin: 0.25rem 0 0.25rem 0.5rem;\n  cursor: pointer;\n}\n.nav-url[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.nav-url-active[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.default-font[_ngcontent-%COMP%] {\n  color: var(--warnerblue);\n  font-size: 14px;\n}\n.menu-container[_ngcontent-%COMP%] {\n  width: 250px;\n  border-right: 1px solid var(--border-color);\n  margin-right: 20px;\n  min-height: calc(100vh - 110px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlbmRpbmctYXBwcm92YWwtbWFuYWdlbWVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBQUo7QUFHRTtFQUNFLFNBQUE7RUFDQSx3QkFBQTtBQURKO0FBT0k7RUFDRSxhQUFBO0FBSk47QUFRRTtFQUNFLGVBQUE7QUFOSjtBQVNFO0VBQ0UsWUFBQTtBQVBKO0FBV0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBUkY7QUFXQTtFQUNFLHdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxlQUFBO0FBUkY7QUFVRTtFQUNFLDBCQUFBO0FBUko7QUFXRTtFQUNFLGlCQUFBO0FBVEo7QUFhQTtFQUNFLHdCQUFBO0VBQ0EsZUFBQTtBQVZGO0FBYUE7RUFDRSxZQUFBO0VBQ0EsMkNBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0FBVkYiLCJmaWxlIjoicGVuZGluZy1hcHByb3ZhbC1tYW5hZ2VtZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBlbmRpbmctYXBwcm92YWwtbWFuYWdlbWVudCB7XHJcbiAgLmhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIGhyIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGNvbG9yOiB2YXIoLS1ncmF5bWVkaXVtKTtcclxuICB9XHJcbn1cclxuXHJcbi5tYWluLWNvbnRhaW5lciB7XHJcbiAgLndyYXBwZXIge1xyXG4gICAgPiAqIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGJhZGdlLWN1c3RvbSB7XHJcbiAgICBtaW4td2lkdGg6IDI1cHg7XHJcbiAgfVxyXG5cclxuICAubmF2LW1lbnUtY29tcG9uZW50IHtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICB9XHJcbn1cclxuXHJcbi5uYXYtdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuLm5hdi11cmwge1xyXG4gIGNvbG9yOiB2YXIoLS13YXJuZXJibHVlKTtcclxuICBtYXJnaW46IDAuMjVyZW0gMCAwLjI1cmVtIDAuNXJlbTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgfVxyXG5cclxuICAmLWFjdGl2ZSB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbn1cclxuXHJcbi5kZWZhdWx0LWZvbnQge1xyXG4gIGNvbG9yOiB2YXIoLS13YXJuZXJibHVlKTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5tZW51LWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDI1MHB4O1xyXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxMTBweCk7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 39755:
/*!*********************************************************************************************************************************************************!*\
  !*** ./src/app/carrier411/admin/components/pending-approval-management/components/subcategories/pending-approval-management-subcategories.component.ts ***!
  \*********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Carrier411AdminPendingApprovalManagementSubCategoriesComponent": () => (/* binding */ Carrier411AdminPendingApprovalManagementSubCategoriesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _content_type_management_content_type_management_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../content-type-management/content-type-management.component */ 6857);
/* harmony import */ var src_app_carrier411_admin_utilities_content_type_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/carrier411/admin/utilities/content-type-utils */ 65196);
/* harmony import */ var src_app_carrier411_admin_constants_content_type_action_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/carrier411/admin/constants/content-type-action.enum */ 60344);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_core_services_result_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/result.handler.service */ 32464);
/* harmony import */ var src_app_carrier411_admin_services_carrier411_admin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/carrier411/admin/services/carrier411-admin.service */ 61972);
/* harmony import */ var src_app_carrier411_shared_services_carrier411_roles_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/carrier411/shared/services/carrier411-roles.service */ 90673);
/* harmony import */ var _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @syncfusion/ej2-angular-dropdowns */ 24779);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _content_type_card_content_type_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../content-type-card/content-type-card.component */ 22623);
/* harmony import */ var _syncfusion_ej2_angular_popups__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @syncfusion/ej2-angular-popups */ 58917);
/* harmony import */ var _content_type_status_change_content_type_status_change_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../content-type-status-change/content-type-status-change.component */ 8001);
/* harmony import */ var _content_type_toggle_data_content_type_toggle_data_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../content-type-toggle-data/content-type-toggle-data.component */ 75028);
/* harmony import */ var _subcategory_edit_subcategory_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../subcategory-edit/subcategory-edit.component */ 11776);
















const _c0 = ["subCategoryEdit"];
function Carrier411AdminPendingApprovalManagementSubCategoriesComponent_content_type_card_10_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "content-type-card", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("onAction", function Carrier411AdminPendingApprovalManagementSubCategoriesComponent_content_type_card_10_Template_content_type_card_onAction_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r9.onTakeAction($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 20)(2, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](6, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "div", 23)(8, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9, "Sub Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](12, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subcategory_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("contentType", subcategory_r8)("hasPublishedVersion", subcategory_r8.item.hasPublishedVersion);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](subcategory_r8.item.categoryName);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](subcategory_r8.item.name);
} }
function Carrier411AdminPendingApprovalManagementSubCategoriesComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 24)(1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, " No records to display. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
} }
class Carrier411AdminPendingApprovalManagementSubCategoriesComponent extends _content_type_management_content_type_management_component__WEBPACK_IMPORTED_MODULE_0__.ContentTypeManagementComponent {
    constructor(route, resultHandler, carrier411AdminService, carrier411RolesService) {
        super(resultHandler);
        this.route = route;
        this.resultHandler = resultHandler;
        this.carrier411AdminService = carrier411AdminService;
        this.carrier411RolesService = carrier411RolesService;
        this.onConfirmData = new _angular_core__WEBPACK_IMPORTED_MODULE_10__.EventEmitter();
    }
    ngOnInit() {
        this.setContentItems(this.subcategories);
        this.filters = src_app_carrier411_admin_utilities_content_type_utils__WEBPACK_IMPORTED_MODULE_1__.ContentTypeUtils.getPendingFilters(this.carrier411RolesService.isPublisher());
    }
    loadContentItems() {
        this.carrier411AdminService.getPendingSubCategories(this.workflowSteps).subscribe((data) => {
            this.setContentItems(data);
            this.onConfirmData.emit();
        });
    }
    initializeEditDialog(contentType) {
        this.carrier411AdminService.getCategoryById(contentType.category.id).subscribe((data) => {
            this.category = data.value;
        });
        this.subCategoryEdit.initializeForm(contentType, false);
    }
    handleDenyAction(action, contentType) {
        this.carrier411AdminService.getSubCategoryPreviousStep(contentType.id).subscribe((data) => {
            this.handlePreviousStatus(data, action, contentType);
        });
    }
    updateContentItem(data) {
        const model = {
            name: data.contentType.name,
            workflowStep: data.newStatus
        };
        this.carrier411AdminService.updateSubCategory(data.contentType.id, model).subscribe((data) => {
            this.resultHandler.handle(data).then((success) => {
                if (success) {
                    this.onCloseModal(this.statusChangeDialog);
                    this.loadContentItems();
                }
            });
        }, (err) => this.resultHandler.handle(err.error));
    }
    deleteContentItem(data) {
        this.carrier411AdminService.deleteSubCategory(data.contentType.id).subscribe((data) => {
            this.resultHandler.handle(data).then((success) => {
                if (success) {
                    this.onCloseModal(this.statusChangeDialog);
                    this.loadContentItems();
                }
            });
        }, (err) => this.resultHandler.handle(err.error));
    }
    onConfirmToggleData($event) {
        const actionConverted = $event.action;
        const contentType = $event.contentType;
        switch (actionConverted) {
            case +src_app_carrier411_admin_constants_content_type_action_enum__WEBPACK_IMPORTED_MODULE_2__.ContentTypeAction.Hide:
            case +src_app_carrier411_admin_constants_content_type_action_enum__WEBPACK_IMPORTED_MODULE_2__.ContentTypeAction.Unhide:
                this.toggleVisibility(contentType);
                break;
            default:
                this.onCloseModal(this.contentTypeToggleDataDialog);
                break;
        }
    }
    toggleVisibility(subCategory) {
        this.carrier411AdminService.toggleSubCategoryVisibility(subCategory.id).subscribe((data) => {
            this.resultHandler.handle(data).then((success) => {
                if (success) {
                    this.onCloseModal(this.contentTypeToggleDataDialog);
                    this.loadContentItems();
                }
            });
        });
    }
    loadNavbar() {
    }
}
Carrier411AdminPendingApprovalManagementSubCategoriesComponent.ɵfac = function Carrier411AdminPendingApprovalManagementSubCategoriesComponent_Factory(t) { return new (t || Carrier411AdminPendingApprovalManagementSubCategoriesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_core_services_result_handler_service__WEBPACK_IMPORTED_MODULE_3__.ResultHandlerService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_carrier411_admin_services_carrier411_admin_service__WEBPACK_IMPORTED_MODULE_4__.Carrier411AdminService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_carrier411_shared_services_carrier411_roles_service__WEBPACK_IMPORTED_MODULE_5__.Carrier411RolesService)); };
Carrier411AdminPendingApprovalManagementSubCategoriesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: Carrier411AdminPendingApprovalManagementSubCategoriesComponent, selectors: [["pending-approval-management-subcategories"]], viewQuery: function Carrier411AdminPendingApprovalManagementSubCategoriesComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.subCategoryEdit = _t.first);
    } }, inputs: { subcategories: "subcategories", workflowSteps: "workflowSteps" }, outputs: { onConfirmData: "onConfirmData" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵInheritDefinitionFeature"]], decls: 24, vars: 11, consts: [[1, "pending-approval-management"], [1, "header"], [1, "filter-status", "align-middle"], [1, "mr-3"], [3, "dataSource", "fields", "enablePersistence", "value", "change"], [1, "content", "pt-4"], [1, "fw-bold", "text-uppercase"], [3, "contentType", "hasPublishedVersion", "onAction", 4, "ngFor", "ngForOf"], ["class", "e-card mt-4 shadow p-5", 4, "ngIf"], ["isModal", "true", "width", "550", 3, "visible", "open"], ["ejStatusChangeDialog", ""], [3, "onConfirm", "onClose"], ["contentTypeStatusChange", ""], ["ejToggleDataDialog", ""], ["contentTypeToggleData", ""], ["isModal", "true", "width", "500", 3, "visible", "open"], ["ejEditContentDialog", ""], [3, "categoryName", "categoryId", "onClose"], ["subCategoryEdit", ""], [3, "contentType", "hasPublishedVersion", "onAction"], [1, "row", "pt-2"], [1, "col-4", "fw-bold"], [1, "col", "text-break"], [1, "row"], [1, "e-card", "mt-4", "shadow", "p-5"], [1, "e-content", "text-center"]], template: function Carrier411AdminPendingApprovalManagementSubCategoriesComponent_Template(rf, ctx) { if (rf & 1) {
        const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, "Filter by Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "ejs-dropdownlist", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function Carrier411AdminPendingApprovalManagementSubCategoriesComponent_Template_ejs_dropdownlist_change_5_listener($event) { return ctx.onFilterChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "div", 5)(7, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8, "Sub Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](9, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](10, Carrier411AdminPendingApprovalManagementSubCategoriesComponent_content_type_card_10_Template, 13, 4, "content-type-card", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](11, Carrier411AdminPendingApprovalManagementSubCategoriesComponent_div_11_Template, 3, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "ejs-dialog", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("open", function Carrier411AdminPendingApprovalManagementSubCategoriesComponent_Template_ejs_dialog_open_12_listener($event) { return ctx.onOpenModal($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "content-type-status-change", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("onConfirm", function Carrier411AdminPendingApprovalManagementSubCategoriesComponent_Template_content_type_status_change_onConfirm_14_listener($event) { return ctx.onConfirmStatusChange($event); })("onClose", function Carrier411AdminPendingApprovalManagementSubCategoriesComponent_Template_content_type_status_change_onClose_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r11); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](13); return ctx.onCloseModal(_r2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "ejs-dialog", 9, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("open", function Carrier411AdminPendingApprovalManagementSubCategoriesComponent_Template_ejs_dialog_open_16_listener($event) { return ctx.onOpenModal($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "content-type-toggle-data", 11, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("onConfirm", function Carrier411AdminPendingApprovalManagementSubCategoriesComponent_Template_content_type_toggle_data_onConfirm_18_listener($event) { return ctx.onConfirmToggleData($event); })("onClose", function Carrier411AdminPendingApprovalManagementSubCategoriesComponent_Template_content_type_toggle_data_onClose_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r11); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](17); return ctx.onCloseModal(_r4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "ejs-dialog", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("open", function Carrier411AdminPendingApprovalManagementSubCategoriesComponent_Template_ejs_dialog_open_20_listener($event) { return ctx.onOpenModal($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "subcategory-edit", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("onClose", function Carrier411AdminPendingApprovalManagementSubCategoriesComponent_Template_subcategory_edit_onClose_22_listener($event) { return ctx.onOverlayClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("dataSource", ctx.filters)("fields", ctx.fields)("enablePersistence", true)("value", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.contentItemsList);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.contentItemsList == null || ctx.contentItemsList.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("visible", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("visible", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("visible", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("categoryName", ctx.category == null ? null : ctx.category.name)("categoryId", ctx.category == null ? null : ctx.category.id);
    } }, directives: [_syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_12__.DropDownListComponent, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _content_type_card_content_type_card_component__WEBPACK_IMPORTED_MODULE_6__.ContentTypeCardComponent, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _syncfusion_ej2_angular_popups__WEBPACK_IMPORTED_MODULE_14__.DialogComponent, _content_type_status_change_content_type_status_change_component__WEBPACK_IMPORTED_MODULE_7__.ContentTypeStatusChangeComponent, _content_type_toggle_data_content_type_toggle_data_component__WEBPACK_IMPORTED_MODULE_8__.ContentTypeToggleDataComponent, _subcategory_edit_subcategory_edit_component__WEBPACK_IMPORTED_MODULE_9__.SubCategoryEditComponent], styles: [".pending-approval-management[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.pending-approval-management[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--graymedium);\n}\n.main-container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  display: flex;\n}\n.main-container[_ngcontent-%COMP%]   badge-custom[_ngcontent-%COMP%] {\n  min-width: 25px;\n}\n.main-container[_ngcontent-%COMP%]   .nav-menu-component[_ngcontent-%COMP%] {\n  width: 200px;\n}\n.nav-title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  text-transform: uppercase;\n  margin-bottom: 15px;\n}\n.nav-url[_ngcontent-%COMP%] {\n  color: var(--warnerblue);\n  margin: 0.25rem 0 0.25rem 0.5rem;\n  cursor: pointer;\n}\n.nav-url[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.nav-url-active[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.default-font[_ngcontent-%COMP%] {\n  color: var(--warnerblue);\n  font-size: 14px;\n}\n.menu-container[_ngcontent-%COMP%] {\n  width: 250px;\n  border-right: 1px solid var(--border-color);\n  margin-right: 20px;\n  min-height: calc(100vh - 110px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlbmRpbmctYXBwcm92YWwtbWFuYWdlbWVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBQUo7QUFHRTtFQUNFLFNBQUE7RUFDQSx3QkFBQTtBQURKO0FBT0k7RUFDRSxhQUFBO0FBSk47QUFRRTtFQUNFLGVBQUE7QUFOSjtBQVNFO0VBQ0UsWUFBQTtBQVBKO0FBV0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBUkY7QUFXQTtFQUNFLHdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxlQUFBO0FBUkY7QUFVRTtFQUNFLDBCQUFBO0FBUko7QUFXRTtFQUNFLGlCQUFBO0FBVEo7QUFhQTtFQUNFLHdCQUFBO0VBQ0EsZUFBQTtBQVZGO0FBYUE7RUFDRSxZQUFBO0VBQ0EsMkNBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0FBVkYiLCJmaWxlIjoicGVuZGluZy1hcHByb3ZhbC1tYW5hZ2VtZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBlbmRpbmctYXBwcm92YWwtbWFuYWdlbWVudCB7XHJcbiAgLmhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIGhyIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGNvbG9yOiB2YXIoLS1ncmF5bWVkaXVtKTtcclxuICB9XHJcbn1cclxuXHJcbi5tYWluLWNvbnRhaW5lciB7XHJcbiAgLndyYXBwZXIge1xyXG4gICAgPiAqIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGJhZGdlLWN1c3RvbSB7XHJcbiAgICBtaW4td2lkdGg6IDI1cHg7XHJcbiAgfVxyXG5cclxuICAubmF2LW1lbnUtY29tcG9uZW50IHtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICB9XHJcbn1cclxuXHJcbi5uYXYtdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuLm5hdi11cmwge1xyXG4gIGNvbG9yOiB2YXIoLS13YXJuZXJibHVlKTtcclxuICBtYXJnaW46IDAuMjVyZW0gMCAwLjI1cmVtIDAuNXJlbTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgfVxyXG5cclxuICAmLWFjdGl2ZSB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbn1cclxuXHJcbi5kZWZhdWx0LWZvbnQge1xyXG4gIGNvbG9yOiB2YXIoLS13YXJuZXJibHVlKTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5tZW51LWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDI1MHB4O1xyXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxMTBweCk7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 10322:
/*!******************************************************************************************!*\
  !*** ./src/app/carrier411/admin/components/question-create/question-create.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuestionCreateComponent": () => (/* binding */ QuestionCreateComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _syncfusion_ej2_angular_inputs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @syncfusion/ej2-angular-inputs */ 53691);
/* harmony import */ var src_app_carrier411_shared_constants_workflow_step_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/carrier411/shared/constants/workflow-step.enum */ 48473);
/* harmony import */ var _utilities_content_type_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities/content-type-utils */ 65196);
/* harmony import */ var src_app_shared_services_input_validator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/input-validator.service */ 68516);
/* harmony import */ var src_app_core_services_result_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/result.handler.service */ 32464);
/* harmony import */ var _services_carrier411_admin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/carrier411-admin.service */ 61972);
/* harmony import */ var _shared_components_modal_header_modal_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/components/modal-header/modal-header.component */ 89519);
/* harmony import */ var _shared_components_field_error_display_field_error_display_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/components/field-error-display/field-error-display.component */ 76530);
/* harmony import */ var _syncfusion_ej2_angular_buttons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @syncfusion/ej2-angular-buttons */ 78218);
/* harmony import */ var _content_type_save_button_content_type_save_button_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../content-type-save-button/content-type-save-button.component */ 37883);















class QuestionCreateComponent {
    constructor(inputValidatorService, resultHandler, carrier411AdminService) {
        this.inputValidatorService = inputValidatorService;
        this.resultHandler = resultHandler;
        this.carrier411AdminService = carrier411AdminService;
        this.WorkflowStep = src_app_carrier411_shared_constants_workflow_step_enum__WEBPACK_IMPORTED_MODULE_0__.WorkflowStep;
        this.onCloseTrigger = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
        this.created = false;
    }
    ngOnInit() {
        this.initializeForm();
    }
    initializeForm(created = false) {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroup({
            text: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl('', [_syncfusion_ej2_angular_inputs__WEBPACK_IMPORTED_MODULE_10__.FormValidators.required])
        });
        this.created = created;
    }
    onSave(option) {
        this.form.markAllAsTouched();
        if (!this.form.valid) {
            return;
        }
        const model = this.form.getRawValue();
        model.subCategoryId = this.subCategoryId;
        model.workflowStep = _utilities_content_type_utils__WEBPACK_IMPORTED_MODULE_1__.ContentTypeUtils.getWorkflowStep(option);
        this.saveQuestion(model, option);
    }
    onClose() {
        this.onCloseTrigger.emit(this.created);
    }
    saveQuestion(model, step) {
        this.carrier411AdminService.createQuestion(model).subscribe((data) => {
            this.resultHandler.handle(data).then((success) => {
                if (success) {
                    if (_utilities_content_type_utils__WEBPACK_IMPORTED_MODULE_1__.ContentTypeUtils.finishSaveAction(step)) {
                        this.onCloseTrigger.emit(true);
                    }
                    else {
                        this.initializeForm(true);
                    }
                }
            });
        }, (err) => this.resultHandler.handle(err.error));
    }
}
QuestionCreateComponent.ɵfac = function QuestionCreateComponent_Factory(t) { return new (t || QuestionCreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_shared_services_input_validator_service__WEBPACK_IMPORTED_MODULE_2__.InputValidatorService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_core_services_result_handler_service__WEBPACK_IMPORTED_MODULE_3__.ResultHandlerService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_carrier411_admin_service__WEBPACK_IMPORTED_MODULE_4__.Carrier411AdminService)); };
QuestionCreateComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: QuestionCreateComponent, selectors: [["question-create"]], inputs: { subCategoryId: "subCategoryId", categoryName: "categoryName", subcategoryName: "subcategoryName" }, outputs: { onCloseTrigger: "onClose" }, decls: 17, vars: 5, consts: [[3, "formGroup"], [1, "container-fluid", "pt-3"], ["title", "New Question", 3, "onClose"], [1, "content"], [1, "form-group", "pt-2"], ["placeholder", "Category", "floatLabelType", "Always", "readonly", "true", 3, "value"], ["placeholder", "SubCategory", "floatLabelType", "Always", "readonly", "true", 3, "value"], ["placeholder", "Question", "floatLabelType", "Always", "autocomplete", "off", "maxlength", "5000", "formControlName", "text", 1, "default-textarea", 3, "multiline"], ["errorMsg", "* This field is required.", 3, "displayError"], [1, "row", "pt-5"], [1, "col-md-4"], ["type", "button", "ejs-button", "", 1, "e-dark", "e-flat", "w-100", 3, "click"], [1, "col-md-4", "offset-md-4"], [1, "w-100", 3, "onSave"]], template: function QuestionCreateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "form", 0)(1, "div", 1)(2, "modal-header", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("onClose", function QuestionCreateComponent_Template_modal_header_onClose_2_listener() { return ctx.onClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 3)(4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "ejs-textbox", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](7, "ejs-textbox", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](9, "ejs-textbox", 7)(10, "app-field-error-display", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "div", 9)(12, "div", 10)(13, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function QuestionCreateComponent_Template_button_click_13_listener() { return ctx.onClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "div", 12)(16, "content-type-save-button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("onSave", function QuestionCreateComponent_Template_content_type_save_button_onSave_16_listener($event) { return ctx.onSave($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", ctx.categoryName);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", ctx.subcategoryName);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("multiline", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("displayError", ctx.inputValidatorService.isInvalidRequired(ctx.form, "text"));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _shared_components_modal_header_modal_header_component__WEBPACK_IMPORTED_MODULE_5__.ModalHeaderComponent, _syncfusion_ej2_angular_inputs__WEBPACK_IMPORTED_MODULE_10__.TextBoxComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName, _shared_components_field_error_display_field_error_display_component__WEBPACK_IMPORTED_MODULE_6__.FieldErrorDisplayComponent, _syncfusion_ej2_angular_buttons__WEBPACK_IMPORTED_MODULE_11__.ButtonComponent, _content_type_save_button_content_type_save_button_component__WEBPACK_IMPORTED_MODULE_7__.ContentTypeSaveButtonComponent], encapsulation: 2 });


/***/ }),

/***/ 73179:
/*!**************************************************************************************!*\
  !*** ./src/app/carrier411/admin/components/question-edit/question-edit.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuestionEditComponent": () => (/* binding */ QuestionEditComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _syncfusion_ej2_angular_inputs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @syncfusion/ej2-angular-inputs */ 53691);
/* harmony import */ var _utilities_carrier411_admin_messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/carrier411-admin-messages */ 47555);
/* harmony import */ var src_app_shared_services_input_validator_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/input-validator.service */ 68516);
/* harmony import */ var _services_carrier411_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/carrier411-admin.service */ 61972);
/* harmony import */ var src_app_authentication_services_account_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/authentication/services/account.service */ 94398);
/* harmony import */ var src_app_core_services_result_handler_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/result.handler.service */ 32464);
/* harmony import */ var _shared_components_modal_header_modal_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/components/modal-header/modal-header.component */ 89519);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _shared_components_field_error_display_field_error_display_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/components/field-error-display/field-error-display.component */ 76530);
/* harmony import */ var _syncfusion_ej2_angular_buttons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @syncfusion/ej2-angular-buttons */ 78218);















function QuestionEditComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("innerHtml", ctx_r0.userWarningMessage, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeHtml"]);
} }
class QuestionEditComponent {
    constructor(inputValidatorService, carrier411AdminService, accountService, resultHandler) {
        this.inputValidatorService = inputValidatorService;
        this.carrier411AdminService = carrier411AdminService;
        this.accountService = accountService;
        this.resultHandler = resultHandler;
        this.onCloseTrigger = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
        this.userWarningMessage = '';
        this.edited = false;
        this.hasDifferentOwner = () => { var _a, _b; return ((_a = this.question) === null || _a === void 0 ? void 0 : _a.lastModifiedById) != ((_b = this.accountService.getUser()) === null || _b === void 0 ? void 0 : _b.id); };
    }
    ngOnInit() {
        this.initializeForm(undefined, false);
    }
    initializeForm(question, edited = false) {
        this.question = question;
        this.edited = edited;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroup({
            text: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(question === null || question === void 0 ? void 0 : question.text, [_syncfusion_ej2_angular_inputs__WEBPACK_IMPORTED_MODULE_9__.FormValidators.required])
        });
        this.setupUserWarning();
    }
    onSave() {
        this.form.markAllAsTouched();
        if (!this.form.valid) {
            return;
        }
        const model = this.form.getRawValue();
        model.workflowStep = this.question.workflowStep;
        this.updateQuestion(model);
    }
    onClose() {
        this.onCloseTrigger.emit(this.edited);
    }
    updateQuestion(model) {
        this.carrier411AdminService.updateQuestion(this.question.id, model).subscribe((data) => {
            this.resultHandler.handle(data).then((success) => {
                if (success) {
                    this.onCloseTrigger.emit(true);
                }
            });
        }, (err) => this.resultHandler.handle(err.error));
    }
    setupUserWarning() {
        var _a;
        if (this.hasDifferentOwner()) {
            this.userWarningMessage = _utilities_carrier411_admin_messages__WEBPACK_IMPORTED_MODULE_0__.Carrier411AdminMessages.getUserEditorWarningMessage((_a = this.question) === null || _a === void 0 ? void 0 : _a.lastModifiedByName);
        }
        else {
            this.userWarningMessage = '';
        }
    }
}
QuestionEditComponent.ɵfac = function QuestionEditComponent_Factory(t) { return new (t || QuestionEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_input_validator_service__WEBPACK_IMPORTED_MODULE_1__.InputValidatorService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_carrier411_admin_service__WEBPACK_IMPORTED_MODULE_2__.Carrier411AdminService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_authentication_services_account_service__WEBPACK_IMPORTED_MODULE_3__.AccountService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_core_services_result_handler_service__WEBPACK_IMPORTED_MODULE_4__.ResultHandlerService)); };
QuestionEditComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: QuestionEditComponent, selectors: [["question-edit"]], inputs: { categoryName: "categoryName", subcategoryName: "subcategoryName", subCategoryId: "subCategoryId" }, outputs: { onCloseTrigger: "onClose" }, decls: 19, vars: 6, consts: [[3, "formGroup"], [1, "container-fluid", "pt-3", "edit-question-container"], ["title", "Edit Question", 3, "onClose"], ["class", "acknowledge-action", 4, "ngIf"], [1, "content"], [1, "form-group", "pt-2"], ["placeholder", "Category", "floatLabelType", "Always", "readonly", "true", 3, "value"], ["placeholder", "SubCategory", "floatLabelType", "Always", "readonly", "true", 3, "value"], ["placeholder", "Question", "floatLabelType", "Always", "autocomplete", "off", "maxlength", "5000", "formControlName", "text", 1, "default-textarea", 3, "multiline"], ["errorMsg", "* This field is required.", 3, "displayError"], [1, "row", "pt-5"], [1, "col-md-4"], ["type", "button", "ejs-button", "", 1, "e-dark", "e-flat", "w-100", 3, "click"], [1, "col-md-4", "offset-md-4"], ["type", "button", "ejs-button", "", 1, "e-success", "w-100", 3, "click"], [1, "acknowledge-action"], [3, "innerHtml"]], template: function QuestionEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "form", 0)(1, "div", 1)(2, "modal-header", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onClose", function QuestionEditComponent_Template_modal_header_onClose_2_listener() { return ctx.onClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, QuestionEditComponent_div_3_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 4)(5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "ejs-textbox", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](8, "ejs-textbox", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](10, "ejs-textbox", 8)(11, "app-field-error-display", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 10)(13, "div", 11)(14, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function QuestionEditComponent_Template_button_click_14_listener() { return ctx.onClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 13)(17, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function QuestionEditComponent_Template_button_click_17_listener() { return ctx.onSave(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.userWarningMessage != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx.categoryName);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx.subcategoryName);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("multiline", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("displayError", ctx.inputValidatorService.isInvalidRequired(ctx.form, "text"));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _shared_components_modal_header_modal_header_component__WEBPACK_IMPORTED_MODULE_5__.ModalHeaderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _syncfusion_ej2_angular_inputs__WEBPACK_IMPORTED_MODULE_9__.TextBoxComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _shared_components_field_error_display_field_error_display_component__WEBPACK_IMPORTED_MODULE_6__.FieldErrorDisplayComponent, _syncfusion_ej2_angular_buttons__WEBPACK_IMPORTED_MODULE_11__.ButtonComponent], styles: [".edit-question-container[_ngcontent-%COMP%]   .acknowledge-action[_ngcontent-%COMP%] {\n  background: var(--acknowledge-background);\n  padding: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1ZXN0aW9uLWVkaXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSx5Q0FBQTtFQUNBLGFBQUE7QUFBSiIsImZpbGUiOiJxdWVzdGlvbi1lZGl0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVkaXQtcXVlc3Rpb24tY29udGFpbmVyIHtcclxuICAuYWNrbm93bGVkZ2UtYWN0aW9uIHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWFja25vd2xlZGdlLWJhY2tncm91bmQpO1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 15450:
/*!**************************************************************************************************!*\
  !*** ./src/app/carrier411/admin/components/question-management/question-management.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuestionManagementComponent": () => (/* binding */ QuestionManagementComponent)
/* harmony export */ });
/* harmony import */ var _constants_content_type_action_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/content-type-action.enum */ 60344);
/* harmony import */ var src_app_shared_constants_application_urls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/constants/application-urls */ 85561);
/* harmony import */ var _content_type_management_content_type_management_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../content-type-management/content-type-management.component */ 6857);
/* harmony import */ var _utilities_content_type_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utilities/content-type-utils */ 65196);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_core_services_result_handler_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/result.handler.service */ 32464);
/* harmony import */ var _services_carrier411_admin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/carrier411-admin.service */ 61972);
/* harmony import */ var _services_carrier411_admin_navbar_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/carrier411-admin-navbar.service */ 98252);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @syncfusion/ej2-angular-dropdowns */ 24779);
/* harmony import */ var _syncfusion_ej2_angular_buttons__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @syncfusion/ej2-angular-buttons */ 78218);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _content_type_card_content_type_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../content-type-card/content-type-card.component */ 22623);
/* harmony import */ var _shared_components_badge_custom_badge_custom_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/components/badge-custom/badge-custom.component */ 39040);
/* harmony import */ var _syncfusion_ej2_angular_popups__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @syncfusion/ej2-angular-popups */ 58917);
/* harmony import */ var _question_create_question_create_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../question-create/question-create.component */ 10322);
/* harmony import */ var _question_edit_question_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../question-edit/question-edit.component */ 73179);
/* harmony import */ var _content_type_status_change_content_type_status_change_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../content-type-status-change/content-type-status-change.component */ 8001);
/* harmony import */ var _content_type_toggle_data_content_type_toggle_data_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../content-type-toggle-data/content-type-toggle-data.component */ 75028);
/* harmony import */ var _content_type_manage_order_content_type_manage_order_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../content-type-manage-order/content-type-manage-order.component */ 33710);





















const _c0 = ["questionCreate"];
const _c1 = ["questionEdit"];
const _c2 = function (a0) { return { questionId: a0 }; };
function QuestionManagementComponent_content_type_card_17_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "content-type-card", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("onAction", function QuestionManagementComponent_content_type_card_17_Template_content_type_card_onAction_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](); return ctx_r13.onTakeAction($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "div", 30)(2, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3, "Question");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "label", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](6, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](7, "div", 33)(8, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](9, "Answers");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](10, "a", 34)(11, "label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](12, "View Answers");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](13, "badge-custom");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](15, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} if (rf & 2) {
    const question_r12 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("contentType", question_r12)("hasPublishedVersion", question_r12.item.hasPublishedVersion);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](question_r12.item.text);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("routerLink", ctx_r0.AnswersLink)("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction1"](7, _c2, question_r12.item.id))("skipLocationChange", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](question_r12.childrenCount);
} }
function QuestionManagementComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 36)(1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, " No records to display. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} }
class QuestionManagementComponent extends _content_type_management_content_type_management_component__WEBPACK_IMPORTED_MODULE_2__.ContentTypeManagementComponent {
    constructor(route, resultHandler, carrier411AdminService, navService) {
        super(resultHandler);
        this.route = route;
        this.resultHandler = resultHandler;
        this.carrier411AdminService = carrier411AdminService;
        this.navService = navService;
        this.AnswersLink = src_app_shared_constants_application_urls__WEBPACK_IMPORTED_MODULE_1__.ApplicationUrls.Carrier411Admin.Carrier411Management.AnswerManagement.path;
        const data = route.snapshot.data["questions"];
        this.setContentItems(data);
        const subCategoryData = route.snapshot.data["subCategory"];
        this.subCategory = subCategoryData.value;
        this.loadNavbar();
    }
    ngOnInit() {
        this.filters = _utilities_content_type_utils__WEBPACK_IMPORTED_MODULE_3__.ContentTypeUtils.getFilters(false);
        this.setupQuerySubscription();
    }
    loadNavbar() {
        if (this.subCategory != null) {
            this.navService.injectQuestions(this.subCategory.id, this.contentItems);
        }
    }
    setupQuerySubscription() {
        this.route.queryParams.subscribe(queryParams => {
            if (this.subCategory != null && this.subCategory.id != queryParams.subCategoryId) {
                this.loadSubCategory(queryParams.subCategoryId).then((success) => {
                    if (success) {
                        this.loadContentItems();
                    }
                });
            }
        });
    }
    loadSubCategory(subCategoryId) {
        return new Promise((resolve, reject) => {
            this.carrier411AdminService.getSubCategoryById(subCategoryId).subscribe((data) => {
                if (data.isSuccess) {
                    this.subCategory = data.value;
                    resolve(true);
                }
                else {
                    this.resultHandler.handle(data);
                    reject(false);
                }
            });
        });
    }
    onAddContentItem() {
        this.addContentDialog.show();
        this.questionCreate.initializeForm();
    }
    onUpdateOrder(questions) {
        this.carrier411AdminService.reorderQuestions(questions).subscribe((data) => {
            this.resultHandler.handle(data).then((success) => {
                if (success) {
                    this.loadContentItems();
                    this.manageOrderDialog.hide();
                }
            });
        });
    }
    initializeEditDialog(contentType) {
        this.questionEdit.initializeForm(contentType, false);
    }
    handleDenyAction(action, contentType) {
        this.carrier411AdminService.getQuestionPreviousStep(contentType.id).subscribe((data) => {
            this.handlePreviousStatus(data, action, contentType);
        });
    }
    loadContentItems() {
        this.carrier411AdminService.getQuestions(this.subCategory.id).subscribe((data) => {
            this.setContentItems(data);
        });
    }
    updateContentItem(data) {
        const question = data.contentType;
        const model = {
            workflowStep: data.newStatus,
            text: question.text
        };
        this.carrier411AdminService.updateQuestion(data.contentType.id, model).subscribe((data) => {
            this.resultHandler.handle(data).then((success) => {
                if (success) {
                    this.onCloseModal(this.statusChangeDialog);
                    this.loadContentItems();
                }
            });
        }, (err) => this.resultHandler.handle(err.error));
    }
    deleteContentItem(data) {
        this.carrier411AdminService.deleteQuestion(data.contentType.id).subscribe((data) => {
            this.resultHandler.handle(data).then((success) => {
                if (success) {
                    this.onCloseModal(this.statusChangeDialog);
                    this.loadContentItems();
                }
            });
        }, (err) => this.resultHandler.handle(err.error));
    }
    /* Toggle Data */
    onConfirmToggleData($event) {
        const actionConverted = $event.action;
        const contentType = $event.contentType;
        switch (actionConverted) {
            case +_constants_content_type_action_enum__WEBPACK_IMPORTED_MODULE_0__.ContentTypeAction.Hide:
            case +_constants_content_type_action_enum__WEBPACK_IMPORTED_MODULE_0__.ContentTypeAction.Unhide:
                this.toggleVisibility(contentType);
                break;
            default:
                this.onCloseModal(this.contentTypeToggleDataDialog);
                break;
        }
    }
    toggleVisibility(question) {
        this.carrier411AdminService.toggleQuestionVisibility(question.id).subscribe((data) => {
            this.resultHandler.handle(data).then((success) => {
                if (success) {
                    this.onCloseModal(this.contentTypeToggleDataDialog);
                    this.loadContentItems();
                }
            });
        });
    }
}
QuestionManagementComponent.ɵfac = function QuestionManagementComponent_Factory(t) { return new (t || QuestionManagementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_core_services_result_handler_service__WEBPACK_IMPORTED_MODULE_4__.ResultHandlerService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_carrier411_admin_service__WEBPACK_IMPORTED_MODULE_5__.Carrier411AdminService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_carrier411_admin_navbar_service__WEBPACK_IMPORTED_MODULE_6__.Carrier411AdminNavbarService)); };
QuestionManagementComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineComponent"]({ type: QuestionManagementComponent, selectors: [["question-management"]], viewQuery: function QuestionManagementComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵviewQuery"](_c1, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵloadQuery"]()) && (ctx.questionCreate = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵloadQuery"]()) && (ctx.questionEdit = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵInheritDefinitionFeature"]], decls: 40, vars: 18, consts: [[1, "question-management"], [1, "pb-3"], [1, "header"], [1, "filter-status", "align-middle"], [1, "mr-3"], [3, "dataSource", "fields", "enablePersistence", "value", "change"], [1, "general-action-buttons"], ["type", "button", "ejs-button", "", 3, "click"], ["type", "button", "ejs-button", "", 1, "e-dark", "ml-4", 3, "click"], [1, "content", "pt-4"], [1, "fw-bold", "text-uppercase"], [3, "contentType", "hasPublishedVersion", "onAction", 4, "ngFor", "ngForOf"], ["class", "e-card mt-4 shadow p-5", 4, "ngIf"], [1, "d-none"], ["isModal", "true", "width", "500", 3, "visible", "open"], ["ejAddContentDialog", ""], [3, "categoryName", "subcategoryName", "subCategoryId", "onClose"], ["questionCreate", ""], ["ejEditContentDialog", ""], ["questionEdit", ""], ["isModal", "true", "width", "550", 3, "visible", "open"], ["ejStatusChangeDialog", ""], [3, "onConfirm", "onClose"], ["contentTypeStatusChange", ""], ["ejToggleDataDialog", ""], ["contentTypeToggleData", ""], ["ejManageOrderDialog", ""], ["contentTypeLabel", "Questions", 3, "onUpdate", "onClose"], ["contentTypeManageOrder", ""], [3, "contentType", "hasPublishedVersion", "onAction"], [1, "row", "pt-3"], [1, "col-4", "fw-bold"], [1, "col"], [1, "row", "pt-2"], [1, "col", "blue-link", 3, "routerLink", "queryParams", "skipLocationChange"], [1, "mr-2"], [1, "e-card", "mt-4", "shadow", "p-5"], [1, "e-content", "text-center"]], template: function QuestionManagementComponent_Template(rf, ctx) { if (rf & 1) {
        const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 0)(1, "page-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "div", 2)(4, "div", 3)(5, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](6, "Filter by Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](7, "ejs-dropdownlist", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("change", function QuestionManagementComponent_Template_ejs_dropdownlist_change_7_listener($event) { return ctx.onFilterChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](8, "div", 6)(9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function QuestionManagementComponent_Template_button_click_9_listener() { return ctx.onManageOrder(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](10, "Manage Order");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](11, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function QuestionManagementComponent_Template_button_click_11_listener() { return ctx.onAddContentItem(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](12, "Add Question");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](13, "div", 9)(14, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](15, "Questions");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](16, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](17, QuestionManagementComponent_content_type_card_17_Template, 16, 9, "content-type-card", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](18, QuestionManagementComponent_div_18_Template, 3, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](19, "div", 13)(20, "ejs-dialog", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("open", function QuestionManagementComponent_Template_ejs_dialog_open_20_listener($event) { return ctx.onOpenModal($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](22, "question-create", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("onClose", function QuestionManagementComponent_Template_question_create_onClose_22_listener($event) { return ctx.onOverlayClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](24, "ejs-dialog", 14, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("open", function QuestionManagementComponent_Template_ejs_dialog_open_24_listener($event) { return ctx.onOpenModal($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](26, "question-edit", 16, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("onClose", function QuestionManagementComponent_Template_question_edit_onClose_26_listener($event) { return ctx.onOverlayClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](28, "ejs-dialog", 20, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("open", function QuestionManagementComponent_Template_ejs_dialog_open_28_listener($event) { return ctx.onOpenModal($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](30, "content-type-status-change", 22, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("onConfirm", function QuestionManagementComponent_Template_content_type_status_change_onConfirm_30_listener($event) { return ctx.onConfirmStatusChange($event); })("onClose", function QuestionManagementComponent_Template_content_type_status_change_onClose_30_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r15); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](29); return ctx.onCloseModal(_r6); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](32, "ejs-dialog", 20, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("open", function QuestionManagementComponent_Template_ejs_dialog_open_32_listener($event) { return ctx.onOpenModal($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](34, "content-type-toggle-data", 22, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("onConfirm", function QuestionManagementComponent_Template_content_type_toggle_data_onConfirm_34_listener($event) { return ctx.onConfirmToggleData($event); })("onClose", function QuestionManagementComponent_Template_content_type_toggle_data_onClose_34_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r15); const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](33); return ctx.onCloseModal(_r8); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](36, "ejs-dialog", 20, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("open", function QuestionManagementComponent_Template_ejs_dialog_open_36_listener($event) { return ctx.onOpenModal($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](38, "content-type-manage-order", 27, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("onUpdate", function QuestionManagementComponent_Template_content_type_manage_order_onUpdate_38_listener($event) { return ctx.onUpdateOrder($event); })("onClose", function QuestionManagementComponent_Template_content_type_manage_order_onClose_38_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r15); const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](37); return ctx.onCloseModal(_r10); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx.subCategory == null ? null : ctx.subCategory.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("dataSource", ctx.filters)("fields", ctx.fields)("enablePersistence", true)("value", ctx.currentFilterId);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx.contentItemsList);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.contentItemsList == null || ctx.contentItemsList.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("visible", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("categoryName", ctx.subCategory == null ? null : ctx.subCategory.categoryName)("subcategoryName", ctx.subCategory == null ? null : ctx.subCategory.name)("subCategoryId", ctx.subCategory == null ? null : ctx.subCategory.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("visible", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("categoryName", ctx.subCategory == null ? null : ctx.subCategory.categoryName)("subcategoryName", ctx.subCategory == null ? null : ctx.subCategory.name)("subCategoryId", ctx.subCategory == null ? null : ctx.subCategory.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("visible", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("visible", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("visible", false);
    } }, directives: [_shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_7__.PageTitleComponent, _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_17__.DropDownListComponent, _syncfusion_ej2_angular_buttons__WEBPACK_IMPORTED_MODULE_18__.ButtonComponent, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgForOf, _content_type_card_content_type_card_component__WEBPACK_IMPORTED_MODULE_8__.ContentTypeCardComponent, _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterLinkWithHref, _shared_components_badge_custom_badge_custom_component__WEBPACK_IMPORTED_MODULE_9__.BadgeCustomComponent, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgIf, _syncfusion_ej2_angular_popups__WEBPACK_IMPORTED_MODULE_20__.DialogComponent, _question_create_question_create_component__WEBPACK_IMPORTED_MODULE_10__.QuestionCreateComponent, _question_edit_question_edit_component__WEBPACK_IMPORTED_MODULE_11__.QuestionEditComponent, _content_type_status_change_content_type_status_change_component__WEBPACK_IMPORTED_MODULE_12__.ContentTypeStatusChangeComponent, _content_type_toggle_data_content_type_toggle_data_component__WEBPACK_IMPORTED_MODULE_13__.ContentTypeToggleDataComponent, _content_type_manage_order_content_type_manage_order_component__WEBPACK_IMPORTED_MODULE_14__.ContentTypeManageOrderComponent], styles: [".question-management[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.question-management[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--graymedium);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1ZXN0aW9uLW1hbmFnZW1lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQUFKO0FBR0U7RUFDRSxTQUFBO0VBQ0Esd0JBQUE7QUFESiIsImZpbGUiOiJxdWVzdGlvbi1tYW5hZ2VtZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnF1ZXN0aW9uLW1hbmFnZW1lbnQge1xyXG4gIC5oZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICBociB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBjb2xvcjogdmFyKC0tZ3JheW1lZGl1bSk7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 6959:
/*!************************************************************************************************!*\
  !*** ./src/app/carrier411/admin/components/subcategory-create/subcategory-create.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubCategoryCreateComponent": () => (/* binding */ SubCategoryCreateComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _syncfusion_ej2_angular_inputs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @syncfusion/ej2-angular-inputs */ 53691);
/* harmony import */ var src_app_carrier411_shared_constants_workflow_step_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/carrier411/shared/constants/workflow-step.enum */ 48473);
/* harmony import */ var _utilities_content_type_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities/content-type-utils */ 65196);
/* harmony import */ var src_app_shared_services_input_validator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/input-validator.service */ 68516);
/* harmony import */ var _services_carrier411_admin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/carrier411-admin.service */ 61972);
/* harmony import */ var src_app_core_services_result_handler_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/result.handler.service */ 32464);
/* harmony import */ var _shared_components_modal_header_modal_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/components/modal-header/modal-header.component */ 89519);
/* harmony import */ var _shared_components_field_error_display_field_error_display_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/components/field-error-display/field-error-display.component */ 76530);
/* harmony import */ var _syncfusion_ej2_angular_buttons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @syncfusion/ej2-angular-buttons */ 78218);
/* harmony import */ var _content_type_save_button_content_type_save_button_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../content-type-save-button/content-type-save-button.component */ 37883);















class SubCategoryCreateComponent {
    constructor(inputValidatorService, carrier411AdminService, resultHandler) {
        this.inputValidatorService = inputValidatorService;
        this.carrier411AdminService = carrier411AdminService;
        this.resultHandler = resultHandler;
        this.WorkflowStep = src_app_carrier411_shared_constants_workflow_step_enum__WEBPACK_IMPORTED_MODULE_0__.WorkflowStep;
        this.onCloseTrigger = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
        this.created = false;
    }
    ngOnInit() {
        this.initializeForm();
    }
    initializeForm(created = false) {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroup({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl('', [_syncfusion_ej2_angular_inputs__WEBPACK_IMPORTED_MODULE_10__.FormValidators.required])
        });
        this.created = created;
    }
    onSave(option) {
        this.form.markAllAsTouched();
        if (!this.form.valid) {
            return;
        }
        const model = this.form.getRawValue();
        model.workflowStep = _utilities_content_type_utils__WEBPACK_IMPORTED_MODULE_1__.ContentTypeUtils.getWorkflowStep(option);
        this.saveSubCategory(model, option);
    }
    onClose() {
        this.onCloseTrigger.emit(this.created);
    }
    saveSubCategory(model, step) {
        model.categoryId = this.categoryId;
        this.carrier411AdminService.createSubCategory(model).subscribe((data) => {
            this.resultHandler.handle(data).then((success) => {
                if (success) {
                    if (_utilities_content_type_utils__WEBPACK_IMPORTED_MODULE_1__.ContentTypeUtils.finishSaveAction(step)) {
                        this.onCloseTrigger.emit(true);
                    }
                    else {
                        this.initializeForm(true);
                    }
                }
            });
        }, (err) => this.resultHandler.handle(err.error));
    }
}
SubCategoryCreateComponent.ɵfac = function SubCategoryCreateComponent_Factory(t) { return new (t || SubCategoryCreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_shared_services_input_validator_service__WEBPACK_IMPORTED_MODULE_2__.InputValidatorService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_carrier411_admin_service__WEBPACK_IMPORTED_MODULE_3__.Carrier411AdminService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_core_services_result_handler_service__WEBPACK_IMPORTED_MODULE_4__.ResultHandlerService)); };
SubCategoryCreateComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: SubCategoryCreateComponent, selectors: [["subcategory-create"]], inputs: { categoryId: "categoryId", categoryName: "categoryName" }, outputs: { onCloseTrigger: "onClose" }, decls: 15, vars: 3, consts: [[3, "formGroup"], [1, "container-fluid", "pt-3"], ["title", "New Sub Category", 3, "onClose"], [1, "content"], [1, "form-group", "pt-2"], ["placeholder", "Category", "floatLabelType", "Always", "readonly", "true", 3, "value"], ["placeholder", "Sub Category", "floatLabelType", "Always", "autocomplete", "off", "maxlength", "200", "required", "", "formControlName", "name"], ["errorMsg", "* This field is required.", 3, "displayError"], [1, "row", "pt-5"], [1, "col-md-4"], ["type", "button", "ejs-button", "", 1, "e-dark", "e-flat", "w-100", 3, "click"], [1, "col-md-4", "offset-md-4"], [1, "w-100", 3, "onSave"]], template: function SubCategoryCreateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "form", 0)(1, "div", 1)(2, "modal-header", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("onClose", function SubCategoryCreateComponent_Template_modal_header_onClose_2_listener() { return ctx.onClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 3)(4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "ejs-textbox", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](7, "ejs-textbox", 6)(8, "app-field-error-display", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 8)(10, "div", 9)(11, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SubCategoryCreateComponent_Template_button_click_11_listener() { return ctx.onClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "div", 11)(14, "content-type-save-button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("onSave", function SubCategoryCreateComponent_Template_content_type_save_button_onSave_14_listener($event) { return ctx.onSave($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", ctx.categoryName);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("displayError", ctx.inputValidatorService.isInvalidRequired(ctx.form, "name"));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _shared_components_modal_header_modal_header_component__WEBPACK_IMPORTED_MODULE_5__.ModalHeaderComponent, _syncfusion_ej2_angular_inputs__WEBPACK_IMPORTED_MODULE_10__.TextBoxComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName, _shared_components_field_error_display_field_error_display_component__WEBPACK_IMPORTED_MODULE_6__.FieldErrorDisplayComponent, _syncfusion_ej2_angular_buttons__WEBPACK_IMPORTED_MODULE_11__.ButtonComponent, _content_type_save_button_content_type_save_button_component__WEBPACK_IMPORTED_MODULE_7__.ContentTypeSaveButtonComponent], encapsulation: 2 });


/***/ }),

/***/ 11776:
/*!********************************************************************************************!*\
  !*** ./src/app/carrier411/admin/components/subcategory-edit/subcategory-edit.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubCategoryEditComponent": () => (/* binding */ SubCategoryEditComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _syncfusion_ej2_angular_inputs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @syncfusion/ej2-angular-inputs */ 53691);
/* harmony import */ var _utilities_carrier411_admin_messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/carrier411-admin-messages */ 47555);
/* harmony import */ var src_app_shared_services_input_validator_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/input-validator.service */ 68516);
/* harmony import */ var _services_carrier411_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/carrier411-admin.service */ 61972);
/* harmony import */ var src_app_authentication_services_account_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/authentication/services/account.service */ 94398);
/* harmony import */ var src_app_core_services_result_handler_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/result.handler.service */ 32464);
/* harmony import */ var _shared_components_modal_header_modal_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/components/modal-header/modal-header.component */ 89519);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _shared_components_field_error_display_field_error_display_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/components/field-error-display/field-error-display.component */ 76530);
/* harmony import */ var _syncfusion_ej2_angular_buttons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @syncfusion/ej2-angular-buttons */ 78218);















function SubCategoryEditComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("innerHtml", ctx_r0.userWarningMessage, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeHtml"]);
} }
class SubCategoryEditComponent {
    constructor(inputValidatorService, carrier411AdminService, accountService, resultHandler) {
        this.inputValidatorService = inputValidatorService;
        this.carrier411AdminService = carrier411AdminService;
        this.accountService = accountService;
        this.resultHandler = resultHandler;
        this.onCloseTrigger = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
        this.userWarningMessage = '';
        this.edited = false;
        this.hasDifferentOwner = () => { var _a, _b; return ((_a = this.subCategory) === null || _a === void 0 ? void 0 : _a.lastModifiedById) != ((_b = this.accountService.getUser()) === null || _b === void 0 ? void 0 : _b.id); };
    }
    ngOnInit() {
        this.initializeForm(undefined, false);
    }
    initializeForm(subCategory, edited = false) {
        this.subCategory = subCategory;
        this.edited = edited;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroup({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(subCategory === null || subCategory === void 0 ? void 0 : subCategory.name, [_syncfusion_ej2_angular_inputs__WEBPACK_IMPORTED_MODULE_9__.FormValidators.required])
        });
        this.setupUserWarning();
    }
    onSave() {
        this.form.markAllAsTouched();
        if (!this.form.valid) {
            return;
        }
        const model = this.form.getRawValue();
        model.workflowStep = this.subCategory.workflowStep;
        this.updateSubCategory(model);
    }
    onClose() {
        this.onCloseTrigger.emit(this.edited);
    }
    updateSubCategory(model) {
        this.carrier411AdminService.updateSubCategory(this.subCategory.id, model).subscribe((data) => {
            this.resultHandler.handle(data).then((success) => {
                if (success) {
                    this.onCloseTrigger.emit(true);
                }
            });
        }, (err) => this.resultHandler.handle(err.error));
    }
    setupUserWarning() {
        var _a;
        if (this.hasDifferentOwner()) {
            this.userWarningMessage = _utilities_carrier411_admin_messages__WEBPACK_IMPORTED_MODULE_0__.Carrier411AdminMessages.getUserEditorWarningMessage((_a = this.subCategory) === null || _a === void 0 ? void 0 : _a.lastModifiedByName);
        }
        else {
            this.userWarningMessage = '';
        }
    }
}
SubCategoryEditComponent.ɵfac = function SubCategoryEditComponent_Factory(t) { return new (t || SubCategoryEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_input_validator_service__WEBPACK_IMPORTED_MODULE_1__.InputValidatorService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_carrier411_admin_service__WEBPACK_IMPORTED_MODULE_2__.Carrier411AdminService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_authentication_services_account_service__WEBPACK_IMPORTED_MODULE_3__.AccountService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_core_services_result_handler_service__WEBPACK_IMPORTED_MODULE_4__.ResultHandlerService)); };
SubCategoryEditComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: SubCategoryEditComponent, selectors: [["subcategory-edit"]], inputs: { categoryId: "categoryId", categoryName: "categoryName" }, outputs: { onCloseTrigger: "onClose" }, decls: 17, vars: 4, consts: [[3, "formGroup"], [1, "container-fluid", "pt-3", "edit-sub-category-container"], ["title", "Edit Sub Category", 3, "onClose"], ["class", "acknowledge-action", 4, "ngIf"], [1, "content"], [1, "form-group", "pt-2"], ["placeholder", "Category", "floatLabelType", "Always", "readonly", "true", 3, "value"], ["placeholder", "Sub Category", "floatLabelType", "Always", "autocomplete", "off", "maxlength", "200", "required", "", "formControlName", "name"], ["errorMsg", "* This field is required.", 3, "displayError"], [1, "row", "pt-5"], [1, "col-md-4"], ["type", "button", "ejs-button", "", 1, "e-dark", "e-flat", "w-100", 3, "click"], [1, "col-md-4", "offset-md-4"], ["type", "button", "ejs-button", "", 1, "e-success", "w-100", 3, "click"], [1, "acknowledge-action"], [3, "innerHtml"]], template: function SubCategoryEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "form", 0)(1, "div", 1)(2, "modal-header", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onClose", function SubCategoryEditComponent_Template_modal_header_onClose_2_listener() { return ctx.onClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, SubCategoryEditComponent_div_3_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 4)(5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "ejs-textbox", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](8, "ejs-textbox", 7)(9, "app-field-error-display", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 9)(11, "div", 10)(12, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SubCategoryEditComponent_Template_button_click_12_listener() { return ctx.onClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 12)(15, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SubCategoryEditComponent_Template_button_click_15_listener() { return ctx.onSave(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.userWarningMessage != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx.categoryName);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("displayError", ctx.inputValidatorService.isInvalidRequired(ctx.form, "name"));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _shared_components_modal_header_modal_header_component__WEBPACK_IMPORTED_MODULE_5__.ModalHeaderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _syncfusion_ej2_angular_inputs__WEBPACK_IMPORTED_MODULE_9__.TextBoxComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _shared_components_field_error_display_field_error_display_component__WEBPACK_IMPORTED_MODULE_6__.FieldErrorDisplayComponent, _syncfusion_ej2_angular_buttons__WEBPACK_IMPORTED_MODULE_11__.ButtonComponent], encapsulation: 2 });


/***/ }),

/***/ 79050:
/*!********************************************************************************************************!*\
  !*** ./src/app/carrier411/admin/components/subcategory-management/subcategory-management.component.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubCategoryManagementComponent": () => (/* binding */ SubCategoryManagementComponent)
/* harmony export */ });
/* harmony import */ var _shared_constants_application_urls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/constants/application-urls */ 85561);
/* harmony import */ var _constants_content_type_action_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/content-type-action.enum */ 60344);
/* harmony import */ var _content_type_management_content_type_management_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../content-type-management/content-type-management.component */ 6857);
/* harmony import */ var _utilities_content_type_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utilities/content-type-utils */ 65196);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _core_services_result_handler_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/services/result.handler.service */ 32464);
/* harmony import */ var _services_carrier411_admin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/carrier411-admin.service */ 61972);
/* harmony import */ var _services_carrier411_admin_navbar_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/carrier411-admin-navbar.service */ 98252);
/* harmony import */ var _shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/components/page-title/page-title.component */ 46896);
/* harmony import */ var _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @syncfusion/ej2-angular-dropdowns */ 24779);
/* harmony import */ var _syncfusion_ej2_angular_buttons__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @syncfusion/ej2-angular-buttons */ 78218);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _content_type_card_content_type_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../content-type-card/content-type-card.component */ 22623);
/* harmony import */ var _shared_components_badge_custom_badge_custom_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/components/badge-custom/badge-custom.component */ 39040);
/* harmony import */ var _syncfusion_ej2_angular_popups__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @syncfusion/ej2-angular-popups */ 58917);
/* harmony import */ var _subcategory_create_subcategory_create_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../subcategory-create/subcategory-create.component */ 6959);
/* harmony import */ var _subcategory_edit_subcategory_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../subcategory-edit/subcategory-edit.component */ 11776);
/* harmony import */ var _content_type_status_change_content_type_status_change_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../content-type-status-change/content-type-status-change.component */ 8001);
/* harmony import */ var _content_type_toggle_data_content_type_toggle_data_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../content-type-toggle-data/content-type-toggle-data.component */ 75028);
/* harmony import */ var _content_type_manage_order_content_type_manage_order_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../content-type-manage-order/content-type-manage-order.component */ 33710);





















const _c0 = ["subCategoryCreate"];
const _c1 = ["subCategoryEdit"];
const _c2 = function (a0) { return { subCategoryId: a0 }; };
function SubCategoryManagementComponent_content_type_card_17_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "content-type-card", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("onAction", function SubCategoryManagementComponent_content_type_card_17_Template_content_type_card_onAction_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](); return ctx_r13.onTakeAction($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "div", 30)(2, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3, "Sub Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "label", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](6, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](7, "div", 33)(8, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](9, "Questions");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](10, "a", 34)(11, "label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](12, "View Questions");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](13, "badge-custom");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](15, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subCategory_r12 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("contentType", subCategory_r12)("hasPublishedVersion", subCategory_r12.item.hasPublishedVersion);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](subCategory_r12.item.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("routerLink", ctx_r0.QuestionLink)("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction1"](7, _c2, subCategory_r12.item.id))("skipLocationChange", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](subCategory_r12.childrenCount);
} }
function SubCategoryManagementComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 36)(1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, " No records to display. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} }
class SubCategoryManagementComponent extends _content_type_management_content_type_management_component__WEBPACK_IMPORTED_MODULE_2__.ContentTypeManagementComponent {
    constructor(route, resultHandler, carrier411AdminService, navService) {
        super(resultHandler);
        this.route = route;
        this.resultHandler = resultHandler;
        this.carrier411AdminService = carrier411AdminService;
        this.navService = navService;
        this.QuestionLink = _shared_constants_application_urls__WEBPACK_IMPORTED_MODULE_0__.ApplicationUrls.Carrier411Admin.Carrier411Management.QuestionManagement.path;
        const data = route.snapshot.data["subCategories"];
        this.setContentItems(data);
        const categoryData = route.snapshot.data["category"];
        this.category = categoryData.value;
        this.loadNavbar();
    }
    ngOnInit() {
        this.filters = _utilities_content_type_utils__WEBPACK_IMPORTED_MODULE_3__.ContentTypeUtils.getFilters(false);
        this.setupQuerySubscription();
    }
    loadNavbar() {
        if (this.category != null) {
            this.navService.injectSubCategories(this.category.id, this.contentItems);
        }
    }
    setupQuerySubscription() {
        this.route.queryParams.subscribe(queryParams => {
            if (this.category != null && this.category.id != queryParams.categoryId) {
                this.loadCategory(queryParams.categoryId).then((success) => {
                    if (success) {
                        this.loadContentItems();
                    }
                });
            }
        });
    }
    loadCategory(categoryId) {
        return new Promise((resolve, reject) => {
            this.carrier411AdminService.getCategoryById(categoryId).subscribe((data) => {
                if (data.isSuccess) {
                    this.category = data.value;
                    resolve(true);
                }
                else {
                    this.resultHandler.handle(data);
                    reject(false);
                }
            });
        });
    }
    onAddContentItem() {
        this.addContentDialog.show();
        this.subCategoryCreate.initializeForm();
    }
    onUpdateOrder(subCategories) {
        this.carrier411AdminService.reorderSubCategories(subCategories).subscribe((data) => {
            this.handleUpdateOrder(data);
        });
    }
    initializeEditDialog(contentType) {
        this.subCategoryEdit.initializeForm(contentType, false);
    }
    handleDenyAction(action, contentType) {
        this.carrier411AdminService.getSubCategoryPreviousStep(contentType.id).subscribe((data) => {
            this.handlePreviousStatus(data, action, contentType);
        });
    }
    loadContentItems() {
        this.carrier411AdminService.getSubCategories(this.category.id).subscribe((data) => {
            this.setContentItems(data);
        });
    }
    updateContentItem(data) {
        const model = {
            name: data.contentType.name,
            workflowStep: data.newStatus
        };
        this.carrier411AdminService.updateSubCategory(data.contentType.id, model).subscribe((data) => {
            this.resultHandler.handle(data).then((success) => {
                if (success) {
                    this.onCloseModal(this.statusChangeDialog);
                    this.loadContentItems();
                }
            });
        }, (err) => this.resultHandler.handle(err.error));
    }
    deleteContentItem(data) {
        this.carrier411AdminService.deleteSubCategory(data.contentType.id).subscribe((data) => {
            this.resultHandler.handle(data).then((success) => {
                if (success) {
                    this.onCloseModal(this.statusChangeDialog);
                    this.loadContentItems();
                }
            });
        }, (err) => this.resultHandler.handle(err.error));
    }
    /* Toggle Data */
    onConfirmToggleData($event) {
        const actionConverted = $event.action;
        const contentType = $event.contentType;
        switch (actionConverted) {
            case +_constants_content_type_action_enum__WEBPACK_IMPORTED_MODULE_1__.ContentTypeAction.Hide:
            case +_constants_content_type_action_enum__WEBPACK_IMPORTED_MODULE_1__.ContentTypeAction.Unhide:
                this.toggleVisibility(contentType);
                break;
            default:
                this.onCloseModal(this.contentTypeToggleDataDialog);
                break;
        }
    }
    toggleVisibility(subCategory) {
        this.carrier411AdminService.toggleSubCategoryVisibility(subCategory.id).subscribe((data) => {
            this.resultHandler.handle(data).then((success) => {
                if (success) {
                    this.onCloseModal(this.contentTypeToggleDataDialog);
                    this.loadContentItems();
                }
            });
        });
    }
}
SubCategoryManagementComponent.ɵfac = function SubCategoryManagementComponent_Factory(t) { return new (t || SubCategoryManagementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_core_services_result_handler_service__WEBPACK_IMPORTED_MODULE_4__.ResultHandlerService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_carrier411_admin_service__WEBPACK_IMPORTED_MODULE_5__.Carrier411AdminService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_carrier411_admin_navbar_service__WEBPACK_IMPORTED_MODULE_6__.Carrier411AdminNavbarService)); };
SubCategoryManagementComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineComponent"]({ type: SubCategoryManagementComponent, selectors: [["app-subcategory-management"]], viewQuery: function SubCategoryManagementComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵviewQuery"](_c1, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵloadQuery"]()) && (ctx.subCategoryCreate = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵloadQuery"]()) && (ctx.subCategoryEdit = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵInheritDefinitionFeature"]], decls: 40, vars: 16, consts: [[1, "subcategory-management"], [1, "pb-3"], [1, "header"], [1, "filter-status", "align-middle"], [1, "mr-3"], [3, "dataSource", "fields", "enablePersistence", "value", "change"], [1, "general-action-buttons"], ["type", "button", "ejs-button", "", 3, "click"], ["type", "button", "ejs-button", "", 1, "e-dark", "ml-4", 3, "click"], [1, "content", "pt-4"], [1, "fw-bold", "text-uppercase"], [3, "contentType", "hasPublishedVersion", "onAction", 4, "ngFor", "ngForOf"], ["class", "e-card mt-4 shadow p-5", 4, "ngIf"], [1, "d-none"], ["isModal", "true", "width", "500", 3, "visible", "open"], ["ejAddContentDialog", ""], [3, "categoryName", "categoryId", "onClose"], ["subCategoryCreate", ""], ["ejEditContentDialog", ""], ["subCategoryEdit", ""], ["isModal", "true", "width", "550", 3, "visible", "open"], ["ejStatusChangeDialog", ""], [3, "onConfirm", "onClose"], ["contentTypeStatusChange", ""], ["ejToggleDataDialog", ""], ["contentTypeToggleData", ""], ["ejManageOrderDialog", ""], ["contentTypeLabel", "Sub Categories", 3, "onUpdate", "onClose"], ["contentTypeManageOrder", ""], [3, "contentType", "hasPublishedVersion", "onAction"], [1, "row", "pt-3"], [1, "col-4", "fw-bold"], [1, "col"], [1, "row", "pt-2"], [1, "col", "blue-link", 3, "routerLink", "queryParams", "skipLocationChange"], [1, "mr-2"], [1, "e-card", "mt-4", "shadow", "p-5"], [1, "e-content", "text-center"]], template: function SubCategoryManagementComponent_Template(rf, ctx) { if (rf & 1) {
        const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 0)(1, "page-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "div", 2)(4, "div", 3)(5, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](6, "Filter by Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](7, "ejs-dropdownlist", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("change", function SubCategoryManagementComponent_Template_ejs_dropdownlist_change_7_listener($event) { return ctx.onFilterChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](8, "div", 6)(9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function SubCategoryManagementComponent_Template_button_click_9_listener() { return ctx.onManageOrder(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](10, "Manage Order");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](11, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function SubCategoryManagementComponent_Template_button_click_11_listener() { return ctx.onAddContentItem(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](12, "Add Sub Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](13, "div", 9)(14, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](15, "Sub Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](16, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](17, SubCategoryManagementComponent_content_type_card_17_Template, 16, 9, "content-type-card", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](18, SubCategoryManagementComponent_div_18_Template, 3, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](19, "div", 13)(20, "ejs-dialog", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("open", function SubCategoryManagementComponent_Template_ejs_dialog_open_20_listener($event) { return ctx.onOpenModal($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](22, "subcategory-create", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("onClose", function SubCategoryManagementComponent_Template_subcategory_create_onClose_22_listener($event) { return ctx.onOverlayClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](24, "ejs-dialog", 14, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("open", function SubCategoryManagementComponent_Template_ejs_dialog_open_24_listener($event) { return ctx.onOpenModal($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](26, "subcategory-edit", 16, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("onClose", function SubCategoryManagementComponent_Template_subcategory_edit_onClose_26_listener($event) { return ctx.onOverlayClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](28, "ejs-dialog", 20, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("open", function SubCategoryManagementComponent_Template_ejs_dialog_open_28_listener($event) { return ctx.onOpenModal($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](30, "content-type-status-change", 22, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("onConfirm", function SubCategoryManagementComponent_Template_content_type_status_change_onConfirm_30_listener($event) { return ctx.onConfirmStatusChange($event); })("onClose", function SubCategoryManagementComponent_Template_content_type_status_change_onClose_30_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r15); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](29); return ctx.onCloseModal(_r6); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](32, "ejs-dialog", 20, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("open", function SubCategoryManagementComponent_Template_ejs_dialog_open_32_listener($event) { return ctx.onOpenModal($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](34, "content-type-toggle-data", 22, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("onConfirm", function SubCategoryManagementComponent_Template_content_type_toggle_data_onConfirm_34_listener($event) { return ctx.onConfirmToggleData($event); })("onClose", function SubCategoryManagementComponent_Template_content_type_toggle_data_onClose_34_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r15); const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](33); return ctx.onCloseModal(_r8); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](36, "ejs-dialog", 20, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("open", function SubCategoryManagementComponent_Template_ejs_dialog_open_36_listener($event) { return ctx.onOpenModal($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](38, "content-type-manage-order", 27, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("onUpdate", function SubCategoryManagementComponent_Template_content_type_manage_order_onUpdate_38_listener($event) { return ctx.onUpdateOrder($event); })("onClose", function SubCategoryManagementComponent_Template_content_type_manage_order_onClose_38_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r15); const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](37); return ctx.onCloseModal(_r10); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx.category == null ? null : ctx.category.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("dataSource", ctx.filters)("fields", ctx.fields)("enablePersistence", true)("value", ctx.currentFilterId);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx.contentItemsList);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.contentItemsList == null || ctx.contentItemsList.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("visible", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("categoryName", ctx.category == null ? null : ctx.category.name)("categoryId", ctx.category == null ? null : ctx.category.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("visible", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("categoryName", ctx.category == null ? null : ctx.category.name)("categoryId", ctx.category == null ? null : ctx.category.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("visible", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("visible", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("visible", false);
    } }, directives: [_shared_components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_7__.PageTitleComponent, _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_17__.DropDownListComponent, _syncfusion_ej2_angular_buttons__WEBPACK_IMPORTED_MODULE_18__.ButtonComponent, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgForOf, _content_type_card_content_type_card_component__WEBPACK_IMPORTED_MODULE_8__.ContentTypeCardComponent, _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterLinkWithHref, _shared_components_badge_custom_badge_custom_component__WEBPACK_IMPORTED_MODULE_9__.BadgeCustomComponent, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgIf, _syncfusion_ej2_angular_popups__WEBPACK_IMPORTED_MODULE_20__.DialogComponent, _subcategory_create_subcategory_create_component__WEBPACK_IMPORTED_MODULE_10__.SubCategoryCreateComponent, _subcategory_edit_subcategory_edit_component__WEBPACK_IMPORTED_MODULE_11__.SubCategoryEditComponent, _content_type_status_change_content_type_status_change_component__WEBPACK_IMPORTED_MODULE_12__.ContentTypeStatusChangeComponent, _content_type_toggle_data_content_type_toggle_data_component__WEBPACK_IMPORTED_MODULE_13__.ContentTypeToggleDataComponent, _content_type_manage_order_content_type_manage_order_component__WEBPACK_IMPORTED_MODULE_14__.ContentTypeManageOrderComponent], styles: [".subcategory-management[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.subcategory-management[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--graymedium);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1YmNhdGVnb3J5LW1hbmFnZW1lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQUFKO0FBR0U7RUFDRSxTQUFBO0VBQ0Esd0JBQUE7QUFESiIsImZpbGUiOiJzdWJjYXRlZ29yeS1tYW5hZ2VtZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN1YmNhdGVnb3J5LW1hbmFnZW1lbnQge1xyXG4gIC5oZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICBociB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBjb2xvcjogdmFyKC0tZ3JheW1lZGl1bSk7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 83733:
/*!******************************************************************************!*\
  !*** ./src/app/carrier411/admin/constants/carrier411-admin-api.constants.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Carrier411AdminApiEndpoints": () => (/* binding */ Carrier411AdminApiEndpoints)
/* harmony export */ });
let carrier411AdminApiEndpoints = {
    /* Categories */
    CreateCategory: () => '/carrier411-admin/categories',
    DeleteCategory: (id) => `/carrier411-admin/categories/${id}`,
    GetCategories: () => '/carrier411-admin/categories',
    GetCategoryById: (id) => `/carrier411-admin/categories/${id}`,
    GetCategoryPreviousStep: (id) => `/carrier411-admin/categories/${id}/previous-step`,
    GetPendingApprovalCount: () => '/carrier411-admin/pending-approvals-count',
    GetPendingAnswers: () => '/carrier411-admin/pending-answers',
    GetPendingCategories: () => '/carrier411-admin/pending-categories',
    GetPendingSubCategories: () => '/carrier411-admin/pending-subcategories',
    GetPendingQuestions: () => '/carrier411-admin/pending-questions',
    ReorderCategories: () => '/carrier411-admin/categories/reorder',
    ToggleCategoryRestrictAccess: (id) => `/carrier411-admin/categories/${id}/toggle-restrict-access`,
    ToggleCategoryVisibility: (id) => `/carrier411-admin/categories/${id}/toggle-visibility`,
    UpdateCategory: (id) => `/carrier411-admin/categories/${id}`,
    /* SubCategories */
    CreateSubCategory: () => '/carrier411-admin/subcategories',
    GetSubCategories: () => '/carrier411-admin/subcategories',
    GetSubCategoryById: (id) => `/carrier411-admin/subcategories/${id}`,
    GetSubCategoryPreviousStep: (id) => `/carrier411-admin/subcategories/${id}/previous-step`,
    UpdateSubCategory: (id) => `/carrier411-admin/subcategories/${id}`,
    DeleteSubCategory: (id) => `/carrier411-admin/subcategories/${id}`,
    ToggleSubCategoryVisibility: (id) => `/carrier411-admin/subcategories/${id}/toggle-visibility`,
    ReorderSubCategories: () => '/carrier411-admin/subcategories/reorder',
    /* Questions */
    CreateQuestion: () => `/carrier411-admin/questions`,
    DeleteQuestion: (id) => `/carrier411-admin/questions/${id}`,
    GetQuestionById: (id) => `/carrier411-admin/questions/${id}`,
    GetQuestionPreviousStep: (id) => `/carrier411-admin/questions/${id}/previous-step`,
    GetQuestions: () => '/carrier411-admin/questions',
    UpdateQuestion: (id) => `/carrier411-admin/questions/${id}`,
    ReorderQuestions: () => `/carrier411-admin/questions/reorder`,
    ToggleQuestionVisibility: (id) => `/carrier411-admin/questions/${id}/toggle-visibility`,
    /* Answers */
    CreateAnswer: () => '/carrier411-admin/answers',
    DeleteAnswer: (id) => `/carrier411-admin/answers/${id}`,
    GetAnswers: () => '/carrier411-admin/answers',
    GetAnswerPreviousStep: (id) => `/carrier411-admin/answers/${id}/previous-step`,
    ReorderAnswers: () => '/carrier411-admin/answers/reorder',
    ToggleAnswerVisibility: (id) => `/carrier411-admin/answers/${id}/toggle-visibility`,
    UpdateAnswer: (id) => `/carrier411-admin/answers/${id}`
};
const Carrier411AdminApiEndpoints = carrier411AdminApiEndpoints;


/***/ }),

/***/ 48984:
/*!**********************************************************************!*\
  !*** ./src/app/carrier411/admin/constants/carrier411-filter.enum.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Carrier411FilterEnum": () => (/* binding */ Carrier411FilterEnum)
/* harmony export */ });
var Carrier411FilterEnum;
(function (Carrier411FilterEnum) {
    Carrier411FilterEnum[Carrier411FilterEnum["All"] = 0] = "All";
    Carrier411FilterEnum[Carrier411FilterEnum["Draft"] = 1] = "Draft";
    Carrier411FilterEnum[Carrier411FilterEnum["PendingApproval"] = 2] = "PendingApproval";
    Carrier411FilterEnum[Carrier411FilterEnum["PendingPublish"] = 3] = "PendingPublish";
    Carrier411FilterEnum[Carrier411FilterEnum["Published"] = 4] = "Published";
    Carrier411FilterEnum[Carrier411FilterEnum["DeleteRequested"] = 5] = "DeleteRequested";
    Carrier411FilterEnum[Carrier411FilterEnum["PendingDelete"] = 6] = "PendingDelete";
    Carrier411FilterEnum[Carrier411FilterEnum["Deleted"] = 7] = "Deleted";
    Carrier411FilterEnum[Carrier411FilterEnum["Hidden"] = 8] = "Hidden";
    Carrier411FilterEnum[Carrier411FilterEnum["Restricted"] = 9] = "Restricted";
})(Carrier411FilterEnum || (Carrier411FilterEnum = {}));
;


/***/ }),

/***/ 60344:
/*!************************************************************************!*\
  !*** ./src/app/carrier411/admin/constants/content-type-action.enum.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContentTypeAction": () => (/* binding */ ContentTypeAction)
/* harmony export */ });
var ContentTypeAction;
(function (ContentTypeAction) {
    ContentTypeAction[ContentTypeAction["Approve"] = 1] = "Approve";
    ContentTypeAction[ContentTypeAction["Deny"] = 2] = "Deny";
    ContentTypeAction[ContentTypeAction["Edit"] = 3] = "Edit";
    ContentTypeAction[ContentTypeAction["RequestDelete"] = 4] = "RequestDelete";
    ContentTypeAction[ContentTypeAction["Delete"] = 5] = "Delete";
    ContentTypeAction[ContentTypeAction["Hide"] = 6] = "Hide";
    ContentTypeAction[ContentTypeAction["Unhide"] = 7] = "Unhide";
    ContentTypeAction[ContentTypeAction["RestrictAccess"] = 8] = "RestrictAccess";
    ContentTypeAction[ContentTypeAction["UnrestrictAccess"] = 9] = "UnrestrictAccess";
})(ContentTypeAction || (ContentTypeAction = {}));
;


/***/ }),

/***/ 57129:
/*!**********************************************************************!*\
  !*** ./src/app/carrier411/admin/constants/save-content-type.enum.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SaveContentType": () => (/* binding */ SaveContentType)
/* harmony export */ });
var SaveContentType;
(function (SaveContentType) {
    SaveContentType[SaveContentType["Save"] = 1] = "Save";
    SaveContentType[SaveContentType["SaveAddMore"] = 2] = "SaveAddMore";
    SaveContentType[SaveContentType["PendingApproval"] = 3] = "PendingApproval";
    SaveContentType[SaveContentType["PendingApprovalAddMore"] = 4] = "PendingApprovalAddMore";
    SaveContentType[SaveContentType["PendingPublish"] = 5] = "PendingPublish";
    SaveContentType[SaveContentType["PendingPublishAddMore"] = 6] = "PendingPublishAddMore";
    SaveContentType[SaveContentType["Publish"] = 7] = "Publish";
    SaveContentType[SaveContentType["PublishAddMore"] = 8] = "PublishAddMore";
})(SaveContentType || (SaveContentType = {}));
;


/***/ }),

/***/ 21404:
/*!*********************************************************************!*\
  !*** ./src/app/carrier411/admin/resolvers/answers-list.resolver.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnswersListResolver": () => (/* binding */ AnswersListResolver)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_carrier411_admin_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/carrier411-admin.service */ 61972);


class AnswersListResolver {
    constructor(carrier411AdminService) {
        this.carrier411AdminService = carrier411AdminService;
    }
    resolve(route, state) {
        const questionId = Number(route.queryParamMap.get('questionId'));
        return this.carrier411AdminService.getAnswers(questionId);
    }
}
AnswersListResolver.ɵfac = function AnswersListResolver_Factory(t) { return new (t || AnswersListResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_carrier411_admin_service__WEBPACK_IMPORTED_MODULE_0__.Carrier411AdminService)); };
AnswersListResolver.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AnswersListResolver, factory: AnswersListResolver.ɵfac });


/***/ }),

/***/ 5163:
/*!******************************************************************************!*\
  !*** ./src/app/carrier411/admin/resolvers/categories-list-admin.resolver.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoriesListAdminResolver": () => (/* binding */ CategoriesListAdminResolver)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_carrier411_admin_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/carrier411-admin.service */ 61972);


class CategoriesListAdminResolver {
    constructor(carrier411AdminService) {
        this.carrier411AdminService = carrier411AdminService;
    }
    resolve(route, state) {
        return this.carrier411AdminService.getCategories();
    }
}
CategoriesListAdminResolver.ɵfac = function CategoriesListAdminResolver_Factory(t) { return new (t || CategoriesListAdminResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_carrier411_admin_service__WEBPACK_IMPORTED_MODULE_0__.Carrier411AdminService)); };
CategoriesListAdminResolver.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CategoriesListAdminResolver, factory: CategoriesListAdminResolver.ɵfac });


/***/ }),

/***/ 7414:
/*!*****************************************************************!*\
  !*** ./src/app/carrier411/admin/resolvers/category.resolver.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryResolver": () => (/* binding */ CategoryResolver)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_carrier411_admin_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/carrier411-admin.service */ 61972);


class CategoryResolver {
    constructor(carrier411AdminService) {
        this.carrier411AdminService = carrier411AdminService;
    }
    resolve(route, state) {
        const categoryId = Number(route.queryParamMap.get('categoryId'));
        return this.carrier411AdminService.getCategoryById(categoryId);
    }
}
CategoryResolver.ɵfac = function CategoryResolver_Factory(t) { return new (t || CategoryResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_carrier411_admin_service__WEBPACK_IMPORTED_MODULE_0__.Carrier411AdminService)); };
CategoryResolver.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CategoryResolver, factory: CategoryResolver.ɵfac });


/***/ }),

/***/ 24865:
/*!*****************************************************************************!*\
  !*** ./src/app/carrier411/admin/resolvers/pending-answers-list.resolver.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PendingAnswersListResolver": () => (/* binding */ PendingAnswersListResolver)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_carrier411_admin_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/carrier411-admin.service */ 61972);
/* harmony import */ var _shared_services_carrier411_roles_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/carrier411-roles.service */ 90673);



class PendingAnswersListResolver {
    constructor(carrier411AdminService, carrier411RolesService) {
        this.carrier411AdminService = carrier411AdminService;
        this.carrier411RolesService = carrier411RolesService;
    }
    resolve(route, state) {
        var workflowSteps = this.carrier411RolesService.getAllowedWorkflowSteps();
        return this.carrier411AdminService.getPendingAnswers(workflowSteps);
    }
}
PendingAnswersListResolver.ɵfac = function PendingAnswersListResolver_Factory(t) { return new (t || PendingAnswersListResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_services_carrier411_admin_service__WEBPACK_IMPORTED_MODULE_0__.Carrier411AdminService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_shared_services_carrier411_roles_service__WEBPACK_IMPORTED_MODULE_1__.Carrier411RolesService)); };
PendingAnswersListResolver.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: PendingAnswersListResolver, factory: PendingAnswersListResolver.ɵfac });


/***/ }),

/***/ 39301:
/*!*********************************************************************************!*\
  !*** ./src/app/carrier411/admin/resolvers/pending-approval-counter.resolver.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PendingApprovalCountListResolver": () => (/* binding */ PendingApprovalCountListResolver)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_carrier411_admin_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/carrier411-admin.service */ 61972);
/* harmony import */ var _shared_services_carrier411_roles_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/carrier411-roles.service */ 90673);



class PendingApprovalCountListResolver {
    constructor(carrier411AdminService, carrier411RolesService) {
        this.carrier411AdminService = carrier411AdminService;
        this.carrier411RolesService = carrier411RolesService;
    }
    resolve(route, state) {
        var workFlowSteps = this.carrier411RolesService.getAllowedWorkflowSteps();
        return this.carrier411AdminService.getPendingApprovalCount(workFlowSteps);
    }
}
PendingApprovalCountListResolver.ɵfac = function PendingApprovalCountListResolver_Factory(t) { return new (t || PendingApprovalCountListResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_services_carrier411_admin_service__WEBPACK_IMPORTED_MODULE_0__.Carrier411AdminService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_shared_services_carrier411_roles_service__WEBPACK_IMPORTED_MODULE_1__.Carrier411RolesService)); };
PendingApprovalCountListResolver.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: PendingApprovalCountListResolver, factory: PendingApprovalCountListResolver.ɵfac });


/***/ }),

/***/ 25736:
/*!********************************************************************************!*\
  !*** ./src/app/carrier411/admin/resolvers/pending-categories-list.resolver.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PendingCategoriesListResolver": () => (/* binding */ PendingCategoriesListResolver)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_carrier411_admin_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/carrier411-admin.service */ 61972);
/* harmony import */ var _shared_services_carrier411_roles_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/carrier411-roles.service */ 90673);



class PendingCategoriesListResolver {
    constructor(carrier411AdminService, carrier411RolesService) {
        this.carrier411AdminService = carrier411AdminService;
        this.carrier411RolesService = carrier411RolesService;
    }
    resolve(route, state) {
        var workFlowSteps = this.carrier411RolesService.getAllowedWorkflowSteps();
        return this.carrier411AdminService.getPendingCategories(workFlowSteps);
    }
}
PendingCategoriesListResolver.ɵfac = function PendingCategoriesListResolver_Factory(t) { return new (t || PendingCategoriesListResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_services_carrier411_admin_service__WEBPACK_IMPORTED_MODULE_0__.Carrier411AdminService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_shared_services_carrier411_roles_service__WEBPACK_IMPORTED_MODULE_1__.Carrier411RolesService)); };
PendingCategoriesListResolver.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: PendingCategoriesListResolver, factory: PendingCategoriesListResolver.ɵfac });


/***/ }),

/***/ 47261:
/*!*******************************************************************************!*\
  !*** ./src/app/carrier411/admin/resolvers/pending-questions-list.resolver.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PendingQuestionsListResolver": () => (/* binding */ PendingQuestionsListResolver)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_carrier411_admin_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/carrier411-admin.service */ 61972);
/* harmony import */ var _shared_services_carrier411_roles_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/carrier411-roles.service */ 90673);



class PendingQuestionsListResolver {
    constructor(carrier411AdminService, carrier411RolesService) {
        this.carrier411AdminService = carrier411AdminService;
        this.carrier411RolesService = carrier411RolesService;
    }
    resolve(route, state) {
        var workflowSteps = this.carrier411RolesService.getAllowedWorkflowSteps();
        return this.carrier411AdminService.getPendingQuestions(workflowSteps);
    }
}
PendingQuestionsListResolver.ɵfac = function PendingQuestionsListResolver_Factory(t) { return new (t || PendingQuestionsListResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_services_carrier411_admin_service__WEBPACK_IMPORTED_MODULE_0__.Carrier411AdminService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_shared_services_carrier411_roles_service__WEBPACK_IMPORTED_MODULE_1__.Carrier411RolesService)); };
PendingQuestionsListResolver.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: PendingQuestionsListResolver, factory: PendingQuestionsListResolver.ɵfac });


/***/ }),

/***/ 45605:
/*!***********************************************************************************!*\
  !*** ./src/app/carrier411/admin/resolvers/pending-subcategories-list.resolver.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PendingSubCategoriesListResolver": () => (/* binding */ PendingSubCategoriesListResolver)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_carrier411_admin_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/carrier411-admin.service */ 61972);
/* harmony import */ var _shared_services_carrier411_roles_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/carrier411-roles.service */ 90673);



class PendingSubCategoriesListResolver {
    constructor(carrier411AdminService, carrier411RolesService) {
        this.carrier411AdminService = carrier411AdminService;
        this.carrier411RolesService = carrier411RolesService;
    }
    resolve(route, state) {
        var workflowSteps = this.carrier411RolesService.getAllowedWorkflowSteps();
        return this.carrier411AdminService.getPendingSubCategories(workflowSteps);
    }
}
PendingSubCategoriesListResolver.ɵfac = function PendingSubCategoriesListResolver_Factory(t) { return new (t || PendingSubCategoriesListResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_services_carrier411_admin_service__WEBPACK_IMPORTED_MODULE_0__.Carrier411AdminService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_shared_services_carrier411_roles_service__WEBPACK_IMPORTED_MODULE_1__.Carrier411RolesService)); };
PendingSubCategoriesListResolver.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: PendingSubCategoriesListResolver, factory: PendingSubCategoriesListResolver.ɵfac });


/***/ }),

/***/ 67294:
/*!*****************************************************************!*\
  !*** ./src/app/carrier411/admin/resolvers/question.resolver.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuestionResolver": () => (/* binding */ QuestionResolver)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_carrier411_admin_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/carrier411-admin.service */ 61972);


class QuestionResolver {
    constructor(carrier411AdminService) {
        this.carrier411AdminService = carrier411AdminService;
    }
    resolve(route, state) {
        const questionId = Number(route.queryParamMap.get('questionId'));
        return this.carrier411AdminService.getQuestionById(questionId);
    }
}
QuestionResolver.ɵfac = function QuestionResolver_Factory(t) { return new (t || QuestionResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_carrier411_admin_service__WEBPACK_IMPORTED_MODULE_0__.Carrier411AdminService)); };
QuestionResolver.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: QuestionResolver, factory: QuestionResolver.ɵfac });


/***/ }),

/***/ 450:
/*!***********************************************************************!*\
  !*** ./src/app/carrier411/admin/resolvers/questions-list.resolver.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuestionsListResolver": () => (/* binding */ QuestionsListResolver)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_carrier411_admin_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/carrier411-admin.service */ 61972);


class QuestionsListResolver {
    constructor(carrier411AdminService) {
        this.carrier411AdminService = carrier411AdminService;
    }
    resolve(route, state) {
        const subCategoryId = Number(route.queryParamMap.get('subCategoryId'));
        return this.carrier411AdminService.getQuestions(subCategoryId);
    }
}
QuestionsListResolver.ɵfac = function QuestionsListResolver_Factory(t) { return new (t || QuestionsListResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_carrier411_admin_service__WEBPACK_IMPORTED_MODULE_0__.Carrier411AdminService)); };
QuestionsListResolver.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: QuestionsListResolver, factory: QuestionsListResolver.ɵfac });


/***/ }),

/***/ 94833:
/*!**********************************************************************************!*\
  !*** ./src/app/carrier411/admin/resolvers/sub-categories-list-admin.resolver.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubCategoriesAdminListResolver": () => (/* binding */ SubCategoriesAdminListResolver)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_carrier411_admin_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/carrier411-admin.service */ 61972);


class SubCategoriesAdminListResolver {
    constructor(carrier411AdminService) {
        this.carrier411AdminService = carrier411AdminService;
    }
    resolve(route, state) {
        const categoryId = Number(route.queryParamMap.get('categoryId'));
        return this.carrier411AdminService.getSubCategories(categoryId);
    }
}
SubCategoriesAdminListResolver.ɵfac = function SubCategoriesAdminListResolver_Factory(t) { return new (t || SubCategoriesAdminListResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_carrier411_admin_service__WEBPACK_IMPORTED_MODULE_0__.Carrier411AdminService)); };
SubCategoriesAdminListResolver.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SubCategoriesAdminListResolver, factory: SubCategoriesAdminListResolver.ɵfac });


/***/ }),

/***/ 60491:
/*!*********************************************************************!*\
  !*** ./src/app/carrier411/admin/resolvers/sub-category.resolver.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubCategoryResolver": () => (/* binding */ SubCategoryResolver)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_carrier411_admin_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/carrier411-admin.service */ 61972);


class SubCategoryResolver {
    constructor(carrier411AdminService) {
        this.carrier411AdminService = carrier411AdminService;
    }
    resolve(route, state) {
        const subCategoryId = Number(route.queryParamMap.get('subCategoryId'));
        return this.carrier411AdminService.getSubCategoryById(subCategoryId);
    }
}
SubCategoryResolver.ɵfac = function SubCategoryResolver_Factory(t) { return new (t || SubCategoryResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_carrier411_admin_service__WEBPACK_IMPORTED_MODULE_0__.Carrier411AdminService)); };
SubCategoryResolver.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SubCategoryResolver, factory: SubCategoryResolver.ɵfac });


/***/ }),

/***/ 98252:
/*!******************************************************************************!*\
  !*** ./src/app/carrier411/admin/services/carrier411-admin-navbar.service.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Carrier411AdminNavbarService": () => (/* binding */ Carrier411AdminNavbarService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


class Carrier411AdminNavbarService {
    constructor() {
        this.categoriesSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(undefined);
        this.navbarCategories$ = this.categoriesSource.asObservable();
        this.subCategoriesSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(undefined);
        this.navbarSubCategories$ = this.subCategoriesSource.asObservable();
        this.questionsSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(undefined);
        this.navbarQuestions$ = this.questionsSource.asObservable();
        this.answersSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(undefined);
        this.navbarAnswers$ = this.answersSource.asObservable();
    }
    injectCategories(categories) {
        this.categoriesSource.next(categories);
    }
    injectSubCategories(categoryId, subCategories) {
        this.subCategoriesSource.next({
            parentId: categoryId,
            items: subCategories
        });
    }
    injectQuestions(subCategoryId, questions) {
        this.questionsSource.next({
            parentId: subCategoryId,
            items: questions
        });
    }
    injectAnswers(questionId, answers, answerId) {
        this.answersSource.next({
            parentId: questionId,
            items: answers,
            selectedId: answerId
        });
    }
}
Carrier411AdminNavbarService.ɵfac = function Carrier411AdminNavbarService_Factory(t) { return new (t || Carrier411AdminNavbarService)(); };
Carrier411AdminNavbarService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: Carrier411AdminNavbarService, factory: Carrier411AdminNavbarService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 15227:
/*!***************************************************************************!*\
  !*** ./src/app/carrier411/admin/services/carrier411-admin.api.service.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Carrier411AdminApiService": () => (/* binding */ Carrier411AdminApiService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _core_api_base_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/api/base.api.service */ 14089);
/* harmony import */ var _constants_carrier411_admin_api_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/carrier411-admin-api.constants */ 83733);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);





class Carrier411AdminApiService extends _core_api_base_api_service__WEBPACK_IMPORTED_MODULE_0__.BaseAPIService {
    constructor(baseApiUrl_Web, http) {
        super(baseApiUrl_Web, http);
    }
    /* Categories */
    getCategories() {
        return this.http.get(this.constructRequestUrl(_constants_carrier411_admin_api_constants__WEBPACK_IMPORTED_MODULE_1__.Carrier411AdminApiEndpoints.GetCategories()));
    }
    getPendingApprovalCount(workflowSteps) {
        const formData = new FormData();
        formData.append('workflowStepsJsonString', JSON.stringify(workflowSteps));
        return this.http.post(this.constructRequestUrl(_constants_carrier411_admin_api_constants__WEBPACK_IMPORTED_MODULE_1__.Carrier411AdminApiEndpoints.GetPendingApprovalCount()), formData);
    }
    getPendingAnswers(workflowSteps) {
        const formData = new FormData();
        formData.append('workflowStepsJsonString', JSON.stringify(workflowSteps));
        return this.http.post(this.constructRequestUrl(_constants_carrier411_admin_api_constants__WEBPACK_IMPORTED_MODULE_1__.Carrier411AdminApiEndpoints.GetPendingAnswers()), formData);
    }
    getPendingCategories(workflowSteps) {
        const formData = new FormData();
        formData.append('workflowStepsJsonString', JSON.stringify(workflowSteps));
        return this.http.post(this.constructRequestUrl(_constants_carrier411_admin_api_constants__WEBPACK_IMPORTED_MODULE_1__.Carrier411AdminApiEndpoints.GetPendingCategories()), formData);
    }
    getPendingSubCategories(workflowSteps) {
        const formData = new FormData();
        formData.append('workflowStepsJsonString', JSON.stringify(workflowSteps));
        return this.http.post(this.constructRequestUrl(_constants_carrier411_admin_api_constants__WEBPACK_IMPORTED_MODULE_1__.Carrier411AdminApiEndpoints.GetPendingSubCategories()), formData);
    }
    getPendingQuestions(workflowSteps) {
        const formData = new FormData();
        formData.append('workflowStepsJsonString', JSON.stringify(workflowSteps));
        return this.http.post(this.constructRequestUrl(_constants_carrier411_admin_api_constants__WEBPACK_IMPORTED_MODULE_1__.Carrier411AdminApiEndpoints.GetPendingQuestions()), formData);
    }
    getCategoryById(id) {
        return this.http.get(this.constructRequestUrl(_constants_carrier411_admin_api_constants__WEBPACK_IMPORTED_MODULE_1__.Carrier411AdminApiEndpoints.GetCategoryById(id)));
    }
    getCategoryPreviousStep(contentItemId) {
        return this.http.get(this.constructRequestUrl(_constants_carrier411_admin_api_constants__WEBPACK_IMPORTED_MODULE_1__.Carrier411AdminApiEndpoints.GetCategoryPreviousStep(contentItemId)));
    }
    createCategory(category) {
        return this.http.post(this.constructRequestUrl(_constants_carrier411_admin_api_constants__WEBPACK_IMPORTED_MODULE_1__.Carrier411AdminApiEndpoints.CreateCategory()), category);
    }
    updateCategory(id, category) {
        return this.http.put(this.constructRequestUrl(_constants_carrier411_admin_api_constants__WEBPACK_IMPORTED_MODULE_1__.Carrier411AdminApiEndpoints.UpdateCategory(id)), category);
    }
    toggleCategoryRestrictAccess(id) {
        return this.http.put(this.constructRequestUrl(_constants_carrier411_admin_api_constants__WEBPACK_IMPORTED_MODULE_1__.Carrier411AdminApiEndpoints.ToggleCategoryRestrictAccess(id)), null);
    }
    toggleCategoryVisibility(id) {
        return this.http.put(this.constructRequestUrl(_constants_carrier411_admin_api_constants__WEBPACK_IMPORTED_MODULE_1__.Carrier411AdminApiEndpoints.ToggleCategoryVisibility(id)), null);
    }
    deleteCategory(id) {
        return this.http.delete(this.constructRequestUrl(_constants_carrier411_admin_api_constants__WEBPACK_IMPORTED_MODULE_1__.Carrier411AdminApiEndpoints.DeleteCategory(id)));
    }
    reorderCategories(categories) {
        return this.http.post(this.constructRequestUrl(_constants_carrier411_admin_api_constants__WEBPACK_IMPORTED_MODULE_1__.Carrier411AdminApiEndpoints.ReorderCategories()), categories);
    }
    /* SubCategories */
    getSubCategories(categoryId) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams()
            .set('categoryId', categoryId !== null && categoryId !== void 0 ? categoryId : '');
        return this.http.get(this.constructRequestUrl(_constants_carrier411_admin_api_constants__WEBPACK_IMPORTED_MODULE_1__.Carrier411AdminApiEndpoints.GetSubCategories()), { params });
    }
    getSubCategoryById(id) {
        return this.http.get(this.constructRequestUrl(_constants_carrier411_admin_api_constants__WEBPACK_IMPORTED_MODULE_1__.Carrier411AdminApiEndpoints.GetSubCategoryById(id)));
    }
    getSubCategoryPreviousStep(contentItemId) {
        return this.http.get(this.constructRequestUrl(_constants_carrier411_admin_api_constants__WEBPACK_IMPORTED_MODULE_1__.Carrier411AdminApiEndpoints.GetSubCategoryPreviousStep(contentItemId)));
    }
    createSubCategory(subCategory) {
        return this.http.post(this.constructRequestUrl(_constants_carrier411_admin_api_constants__WEBPACK_IMPORTED_MODULE_1__.Carrier411AdminApiEndpoints.CreateSubCategory()), subCategory);
    }
    updateSubCategory(id, subCategory) {
        return this.http.put(this.constructRequestUrl(_constants_carrier411_admin_api_constants__WEBPACK_IMPORTED_MODULE_1__.Carrier411AdminApiEndpoints.UpdateSubCategory(id)), subCategory);
    }
    toggleSubCategoryVisibility(id) {
        return this.http.put(this.constructRequestUrl(_constants_carrier411_admin_api_constants__WEBPACK_IMPORTED_MODULE_1__.Carrier411AdminApiEndpoints.ToggleSubCategoryVisibility(id)), null);
    }
    deleteSubCategory(id) {
        return this.http.delete(this.constructRequestUrl(_constants_carrier411_admin_api_constants__WEBPACK_IMPORTED_MODULE_1__.Carrier411AdminApiEndpoints.DeleteSubCategory(id)));
    }
    reorderSubCategories(subCategories) {
        return this.http.post(this.constructRequestUrl(_constants_carrier411_admin_api_constants__WEBPACK_IMPORTED_MODULE_1__.Carrier411AdminApiEndpoints.ReorderSubCategories()), subCategories);
    }
    /* Questions */
    getQuestions(subCategory) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams()
            .set('subCategoryId', subCategory !== null && subCategory !== void 0 ? subCategory : '');
        return this.http.get(this.constructRequestUrl(_constants_carrier411_admin_api_constants__WEBPACK_IMPORTED_MODULE_1__.Carrier411AdminApiEndpoints.GetQuestions()), { params });
    }
    getQuestionById(id) {
        return this.http.get(this.constructRequestUrl(_constants_carrier411_admin_api_constants__WEBPACK_IMPORTED_MODULE_1__.Carrier411AdminApiEndpoints.GetQuestionById(id)));
    }
    getQuestionPreviousStep(contentItemId) {
        return this.http.get(this.constructRequestUrl(_constants_carrier411_admin_api_constants__WEBPACK_IMPORTED_MODULE_1__.Carrier411AdminApiEndpoints.GetQuestionPreviousStep(contentItemId)));
    }
    createQuestion(question) {
        return this.http.post(this.constructRequestUrl(_constants_carrier411_admin_api_constants__WEBPACK_IMPORTED_MODULE_1__.Carrier411AdminApiEndpoints.CreateQuestion()), question);
    }
    updateQuestion(id, question) {
        return this.http.put(this.constructRequestUrl(_constants_carrier411_admin_api_constants__WEBPACK_IMPORTED_MODULE_1__.Carrier411AdminApiEndpoints.UpdateQuestion(id)), question);
    }
    toggleQuestionVisibility(id) {
        return this.http.put(this.constructRequestUrl(_constants_carrier411_admin_api_constants__WEBPACK_IMPORTED_MODULE_1__.Carrier411AdminApiEndpoints.ToggleQuestionVisibility(id)), null);
    }
    deleteQuestion(id) {
        return this.http.delete(this.constructRequestUrl(_constants_carrier411_admin_api_constants__WEBPACK_IMPORTED_MODULE_1__.Carrier411AdminApiEndpoints.DeleteQuestion(id)));
    }
    reorderQuestions(questions) {
        return this.http.post(this.constructRequestUrl(_constants_carrier411_admin_api_constants__WEBPACK_IMPORTED_MODULE_1__.Carrier411AdminApiEndpoints.ReorderQuestions()), questions);
    }
    /* Answers */
    getAnswers(questionId) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams()
            .set('questionId', questionId !== null && questionId !== void 0 ? questionId : '');
        return this.http.get(this.constructRequestUrl(_constants_carrier411_admin_api_constants__WEBPACK_IMPORTED_MODULE_1__.Carrier411AdminApiEndpoints.GetAnswers()), { params });
    }
    getAnswerPreviousStep(contentItemId) {
        return this.http.get(this.constructRequestUrl(_constants_carrier411_admin_api_constants__WEBPACK_IMPORTED_MODULE_1__.Carrier411AdminApiEndpoints.GetAnswerPreviousStep(contentItemId)));
    }
    createAnswer(answer, files) {
        const formData = new FormData();
        formData.append('answerJsonString', JSON.stringify(answer));
        if (files != null) {
            for (let i = 0; i < files.length; i++) {
                const file = files[i];
                formData.append('files', file, file.name);
            }
        }
        return this.http.post(this.constructRequestUrl(_constants_carrier411_admin_api_constants__WEBPACK_IMPORTED_MODULE_1__.Carrier411AdminApiEndpoints.CreateAnswer()), formData);
    }
    updateAnswer(id, answer, files) {
        const formData = new FormData();
        formData.append('answerJsonString', JSON.stringify(answer));
        if (files != null) {
            for (let i = 0; i < files.length; i++) {
                const file = files[i];
                formData.append('files', file, file.name);
            }
        }
        return this.http.put(this.constructRequestUrl(_constants_carrier411_admin_api_constants__WEBPACK_IMPORTED_MODULE_1__.Carrier411AdminApiEndpoints.UpdateAnswer(id)), formData);
    }
    toggleAnswerVisibility(id) {
        return this.http.put(this.constructRequestUrl(_constants_carrier411_admin_api_constants__WEBPACK_IMPORTED_MODULE_1__.Carrier411AdminApiEndpoints.ToggleAnswerVisibility(id)), null);
    }
    deleteAnswer(id) {
        return this.http.delete(this.constructRequestUrl(_constants_carrier411_admin_api_constants__WEBPACK_IMPORTED_MODULE_1__.Carrier411AdminApiEndpoints.DeleteAnswer(id)));
    }
}
Carrier411AdminApiService.ɵfac = function Carrier411AdminApiService_Factory(t) { return new (t || Carrier411AdminApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"]("BASE_API_URL_WEB"), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
Carrier411AdminApiService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: Carrier411AdminApiService, factory: Carrier411AdminApiService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 61972:
/*!***********************************************************************!*\
  !*** ./src/app/carrier411/admin/services/carrier411-admin.service.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Carrier411AdminService": () => (/* binding */ Carrier411AdminService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _carrier411_admin_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./carrier411-admin.api.service */ 15227);


class Carrier411AdminService {
    constructor(carrier411AdminApiService) {
        this.carrier411AdminApiService = carrier411AdminApiService;
    }
    /* Categories */
    getCategories() {
        return this.carrier411AdminApiService.getCategories();
    }
    getPendingApprovalCount(workflowSteps) {
        return this.carrier411AdminApiService.getPendingApprovalCount(workflowSteps);
    }
    getPendingAnswers(workflowSteps) {
        return this.carrier411AdminApiService.getPendingAnswers(workflowSteps);
    }
    getPendingCategories(workflowSteps) {
        return this.carrier411AdminApiService.getPendingCategories(workflowSteps);
    }
    getPendingSubCategories(workflowSteps) {
        return this.carrier411AdminApiService.getPendingSubCategories(workflowSteps);
    }
    getPendingQuestions(workflowSteps) {
        return this.carrier411AdminApiService.getPendingQuestions(workflowSteps);
    }
    getCategoryById(id) {
        return this.carrier411AdminApiService.getCategoryById(id);
    }
    getCategoryPreviousStep(contentItemId) {
        return this.carrier411AdminApiService.getCategoryPreviousStep(contentItemId);
    }
    createCategory(category) {
        return this.carrier411AdminApiService.createCategory(category);
    }
    updateCategory(id, category) {
        return this.carrier411AdminApiService.updateCategory(id, category);
    }
    toggleCategoryRestrictAccess(id) {
        return this.carrier411AdminApiService.toggleCategoryRestrictAccess(id);
    }
    toggleCategoryVisibility(id) {
        return this.carrier411AdminApiService.toggleCategoryVisibility(id);
    }
    deleteCategory(id) {
        return this.carrier411AdminApiService.deleteCategory(id);
    }
    reorderCategories(categories) {
        return this.carrier411AdminApiService.reorderCategories(categories);
    }
    /* SubCategories */
    getSubCategories(categoryId) {
        return this.carrier411AdminApiService.getSubCategories(categoryId);
    }
    getSubCategoryById(id) {
        return this.carrier411AdminApiService.getSubCategoryById(id);
    }
    getSubCategoryPreviousStep(contentItemId) {
        return this.carrier411AdminApiService.getSubCategoryPreviousStep(contentItemId);
    }
    createSubCategory(subCategory) {
        return this.carrier411AdminApiService.createSubCategory(subCategory);
    }
    updateSubCategory(id, subCategory) {
        return this.carrier411AdminApiService.updateSubCategory(id, subCategory);
    }
    toggleSubCategoryVisibility(id) {
        return this.carrier411AdminApiService.toggleSubCategoryVisibility(id);
    }
    deleteSubCategory(id) {
        return this.carrier411AdminApiService.deleteSubCategory(id);
    }
    reorderSubCategories(subCategories) {
        return this.carrier411AdminApiService.reorderSubCategories(subCategories);
    }
    /* Questions */
    getQuestions(subCategoryId) {
        return this.carrier411AdminApiService.getQuestions(subCategoryId);
    }
    getQuestionById(id) {
        return this.carrier411AdminApiService.getQuestionById(id);
    }
    getQuestionPreviousStep(contentItemId) {
        return this.carrier411AdminApiService.getQuestionPreviousStep(contentItemId);
    }
    createQuestion(question) {
        return this.carrier411AdminApiService.createQuestion(question);
    }
    updateQuestion(id, question) {
        return this.carrier411AdminApiService.updateQuestion(id, question);
    }
    toggleQuestionVisibility(id) {
        return this.carrier411AdminApiService.toggleQuestionVisibility(id);
    }
    deleteQuestion(id) {
        return this.carrier411AdminApiService.deleteQuestion(id);
    }
    reorderQuestions(questions) {
        return this.carrier411AdminApiService.reorderQuestions(questions);
    }
    /* Answers */
    getAnswers(questionId) {
        return this.carrier411AdminApiService.getAnswers(questionId);
    }
    getAnswerPreviousStep(contentItemId) {
        return this.carrier411AdminApiService.getAnswerPreviousStep(contentItemId);
    }
    createAnswer(answer, files) {
        return this.carrier411AdminApiService.createAnswer(answer, files);
    }
    updateAnswer(id, answer, files) {
        return this.carrier411AdminApiService.updateAnswer(id, answer, files);
    }
    toggleAnswerVisibility(id) {
        return this.carrier411AdminApiService.toggleAnswerVisibility(id);
    }
    deleteAnswer(id) {
        return this.carrier411AdminApiService.deleteAnswer(id);
    }
}
Carrier411AdminService.ɵfac = function Carrier411AdminService_Factory(t) { return new (t || Carrier411AdminService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_carrier411_admin_api_service__WEBPACK_IMPORTED_MODULE_0__.Carrier411AdminApiService)); };
Carrier411AdminService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: Carrier411AdminService, factory: Carrier411AdminService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 47555:
/*!*************************************************************************!*\
  !*** ./src/app/carrier411/admin/utilities/carrier411-admin-messages.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Carrier411AdminMessages": () => (/* binding */ Carrier411AdminMessages)
/* harmony export */ });
class Carrier411AdminMessages {
    static getUserEditorWarningMessage(lastModifiedByName) {
        return `<b>${lastModifiedByName}</b> was the last editor,
            are you sure you would like to make changes to this content?
            Doing so can increase the risk of overwriting the last editor's changes.`;
    }
    static getHideContentDescription() {
        return '<b>Hiding</b> this content will remove it from view for all users in the Carrier 411 tool with the exception of Carrier 411 admins.';
    }
    static getHideContentAcknowledge() {
        return 'I acknowledge that I want to hide this content.';
    }
    static getUnhideContentDescription() {
        return '<b>Unhiding</b> this content will shown for all users in the Carrier 411 tool.';
    }
    static getUnhideContentAcknowledge() {
        return 'I acknowledge that I want to show this content.';
    }
    static getRestrictContentDescription() {
        return '<b>Restricting access</b> to this category will cause the category and all of its content to be hidden from all Carrier 411 visitors with the exception of other Carrier 411 admins.';
    }
    static getRestrictContentAcknowledge() {
        return 'I acknowledge that I want to restrict all of this categories content.';
    }
    static getUnrestrictContentDescription() {
        return '<b>Unrestricting access</b> to this category will cause the category and all of its content to be shown for all Carrier 411 visitors.';
    }
    static getUnrestrictContentAcknowledge() {
        return 'I acknowledge that I want to unrestrict all of this categories content.';
    }
}


/***/ }),

/***/ 65196:
/*!******************************************************************!*\
  !*** ./src/app/carrier411/admin/utilities/content-type-utils.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContentTypeUtils": () => (/* binding */ ContentTypeUtils)
/* harmony export */ });
/* harmony import */ var _shared_constants_workflow_step_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/constants/workflow-step.enum */ 48473);
/* harmony import */ var _constants_carrier411_filter_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/carrier411-filter.enum */ 48984);
/* harmony import */ var _constants_save_content_type_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/save-content-type.enum */ 57129);



class ContentTypeUtils {
    static getWorkflowStep(option) {
        switch (+_constants_save_content_type_enum__WEBPACK_IMPORTED_MODULE_2__.SaveContentType[option]) {
            case _constants_save_content_type_enum__WEBPACK_IMPORTED_MODULE_2__.SaveContentType.Save:
            case _constants_save_content_type_enum__WEBPACK_IMPORTED_MODULE_2__.SaveContentType.SaveAddMore:
                return _shared_constants_workflow_step_enum__WEBPACK_IMPORTED_MODULE_0__.WorkflowStep.Draft;
            case _constants_save_content_type_enum__WEBPACK_IMPORTED_MODULE_2__.SaveContentType.PendingApproval:
            case _constants_save_content_type_enum__WEBPACK_IMPORTED_MODULE_2__.SaveContentType.PendingApprovalAddMore:
                return _shared_constants_workflow_step_enum__WEBPACK_IMPORTED_MODULE_0__.WorkflowStep.PendingApproval;
            case _constants_save_content_type_enum__WEBPACK_IMPORTED_MODULE_2__.SaveContentType.PendingPublish:
            case _constants_save_content_type_enum__WEBPACK_IMPORTED_MODULE_2__.SaveContentType.PendingPublishAddMore:
                return _shared_constants_workflow_step_enum__WEBPACK_IMPORTED_MODULE_0__.WorkflowStep.PendingPublish;
            case _constants_save_content_type_enum__WEBPACK_IMPORTED_MODULE_2__.SaveContentType.Publish:
            case _constants_save_content_type_enum__WEBPACK_IMPORTED_MODULE_2__.SaveContentType.PublishAddMore:
                return _shared_constants_workflow_step_enum__WEBPACK_IMPORTED_MODULE_0__.WorkflowStep.Published;
            default:
                return _shared_constants_workflow_step_enum__WEBPACK_IMPORTED_MODULE_0__.WorkflowStep.Draft;
        }
    }
    static finishSaveAction(option) {
        const id = +_constants_save_content_type_enum__WEBPACK_IMPORTED_MODULE_2__.SaveContentType[option];
        return id == _constants_save_content_type_enum__WEBPACK_IMPORTED_MODULE_2__.SaveContentType.Save ||
            id == _constants_save_content_type_enum__WEBPACK_IMPORTED_MODULE_2__.SaveContentType.PendingApproval ||
            id == +_constants_save_content_type_enum__WEBPACK_IMPORTED_MODULE_2__.SaveContentType.PendingPublish ||
            id == +_constants_save_content_type_enum__WEBPACK_IMPORTED_MODULE_2__.SaveContentType.Publish;
    }
    static getFilters(showRestricted) {
        const filters = [
            { id: +_constants_carrier411_filter_enum__WEBPACK_IMPORTED_MODULE_1__.Carrier411FilterEnum.All, name: 'All' },
            { id: +_constants_carrier411_filter_enum__WEBPACK_IMPORTED_MODULE_1__.Carrier411FilterEnum.Draft, name: 'Draft' },
            { id: +_constants_carrier411_filter_enum__WEBPACK_IMPORTED_MODULE_1__.Carrier411FilterEnum.PendingApproval, name: 'Pending Approval' },
            { id: +_constants_carrier411_filter_enum__WEBPACK_IMPORTED_MODULE_1__.Carrier411FilterEnum.PendingPublish, name: 'Pending Publish' },
            { id: +_constants_carrier411_filter_enum__WEBPACK_IMPORTED_MODULE_1__.Carrier411FilterEnum.Published, name: 'Published' },
            { id: +_constants_carrier411_filter_enum__WEBPACK_IMPORTED_MODULE_1__.Carrier411FilterEnum.DeleteRequested, name: 'Delete Requested' },
            { id: +_constants_carrier411_filter_enum__WEBPACK_IMPORTED_MODULE_1__.Carrier411FilterEnum.PendingDelete, name: 'Pending Delete' },
            { id: +_constants_carrier411_filter_enum__WEBPACK_IMPORTED_MODULE_1__.Carrier411FilterEnum.Hidden, name: 'Hidden' }
        ];
        if (showRestricted) {
            filters.push({
                id: +_constants_carrier411_filter_enum__WEBPACK_IMPORTED_MODULE_1__.Carrier411FilterEnum.Restricted,
                name: 'Restricted'
            });
        }
        return filters;
    }
    static getPendingFilters(isPublisher) {
        const filters = [
            { id: +_constants_carrier411_filter_enum__WEBPACK_IMPORTED_MODULE_1__.Carrier411FilterEnum.All, name: 'All' },
            { id: +_constants_carrier411_filter_enum__WEBPACK_IMPORTED_MODULE_1__.Carrier411FilterEnum.DeleteRequested, name: 'Delete Requested' },
            { id: +_constants_carrier411_filter_enum__WEBPACK_IMPORTED_MODULE_1__.Carrier411FilterEnum.PendingApproval, name: 'Pending Approval' }
        ];
        if (isPublisher) {
            filters.push({ id: +_constants_carrier411_filter_enum__WEBPACK_IMPORTED_MODULE_1__.Carrier411FilterEnum.PendingDelete, name: 'Pending Delete' });
            filters.push({ id: +_constants_carrier411_filter_enum__WEBPACK_IMPORTED_MODULE_1__.Carrier411FilterEnum.PendingPublish, name: 'Pending Publish' });
        }
        return filters;
    }
}


/***/ }),

/***/ 87082:
/*!***********************************************************************************!*\
  !*** ./src/app/carrier411/shared/components/answer-text/answer-text.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnswerTextComponent": () => (/* binding */ AnswerTextComponent)
/* harmony export */ });
/* harmony import */ var src_app_shared_utilities_url_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/utilities/url-utils */ 82000);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);



function AnswerTextComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 1);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx_r0.text, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
} }
class AnswerTextComponent {
    constructor() {
        this.text = null;
    }
    ngOnChanges() {
        this.text = this.getAnswerText();
    }
    getAnswerText() {
        if (this.text == null)
            return this.text;
        const container = document.createElement('div');
        container.innerHTML = this.text;
        const elementsWithFiles = container.querySelectorAll('*[file]:not([file=""])');
        elementsWithFiles.forEach(e => {
            const link = document.createElement('a');
            link.href = e.getAttribute('file');
            link.innerHTML = e.innerHTML;
            link.target = '_blank';
            link.download = '';
            link.title = src_app_shared_utilities_url_utils__WEBPACK_IMPORTED_MODULE_0__.UrlUtils.getPrettyFileName(link.href);
            e.removeAttribute('file');
            e.innerHTML = link.outerHTML;
        });
        return container.innerHTML;
    }
}
AnswerTextComponent.ɵfac = function AnswerTextComponent_Factory(t) { return new (t || AnswerTextComponent)(); };
AnswerTextComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AnswerTextComponent, selectors: [["answer-text"]], inputs: { text: "text" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 1, consts: [["class", "answer-text text-break", 3, "innerHTML", 4, "ngIf"], [1, "answer-text", "text-break", 3, "innerHTML"]], template: function AnswerTextComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, AnswerTextComponent_div_0_Template, 1, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.text);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf], styles: [".answer-text p {\n  margin: 0;\n  font-size: 15px;\n}\n.answer-text p:has(br) {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFuc3dlci10ZXh0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsU0FBQTtFQUNBLGVBQUE7QUFBSjtBQUVJO0VBQ0UsU0FBQTtBQUFOIiwiZmlsZSI6ImFuc3dlci10ZXh0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFuc3dlci10ZXh0IHtcclxuICBwIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuXHJcbiAgICAmOmhhcyhicikge1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"], encapsulation: 2 });


/***/ }),

/***/ 93606:
/*!******************************************************************!*\
  !*** ./src/app/carrier411/shared/constants/content-type.enum.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContentType": () => (/* binding */ ContentType)
/* harmony export */ });
var ContentType;
(function (ContentType) {
    ContentType[ContentType["Category"] = 1] = "Category";
    ContentType[ContentType["SubCategory"] = 2] = "SubCategory";
    ContentType[ContentType["Question"] = 3] = "Question";
    ContentType[ContentType["Answer"] = 4] = "Answer";
})(ContentType || (ContentType = {}));
;


/***/ })

}]);
//# sourceMappingURL=src_app_carrier411_admin_carrier411-admin_module_ts.js.map