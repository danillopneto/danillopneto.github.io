(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Documents\GitHub\mypocket\frontend\src\main.ts */"zUnb");


/***/ }),

/***/ "5Ncf":
/*!****************************************************!*\
  !*** ./src/app/components/base-angular.service.ts ***!
  \****************************************************/
/*! exports provided: BaseAngularService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseAngularService", function() { return BaseAngularService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ "4USb");



class BaseAngularService {
    constructor(db, messageService) {
        this.db = db;
        this.messageService = messageService;
        this.defaultOrderBy = 'description';
    }
    getAll(orderBy) {
        var order = orderBy != null && orderBy != ''
            ? orderBy
            : this.defaultOrderBy;
        return this.db.list(this.baseUrl, ref => ref.orderByChild(order)).valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((obj) => obj), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(e => this.errorHandler(e)));
        ;
    }
    get(id) {
        return this.db.object(`${this.baseUrl}/${id}`).valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((obj) => obj), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(e => this.errorHandler(e)));
    }
    save(model) {
        if (model.id == null || model.id == '') {
            model.id = Object(uuid__WEBPACK_IMPORTED_MODULE_2__["v4"])();
        }
        return this.db.database.ref(`${this.baseUrl}/${model.id}`).set(Object.assign({}, model)).catch((reason) => {
            this.errorHandler(reason);
        });
    }
    delete(id) {
        return this.db.object(`${this.baseUrl}/${id}`).remove().catch((reason) => {
            this.errorHandler(reason);
        });
    }
    errorHandler(e) {
        console.log(e);
        this.messageService.showMessage("Ocorreu um erro!", true);
        return rxjs__WEBPACK_IMPORTED_MODULE_0__["EMPTY"];
    }
}


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyDc07UgX0KW09d7-9qEjScATDTJiq39bVk",
        authDomain: "my-pocket-fire.firebaseapp.com",
        databaseURL: "https://my-pocket-fire.firebaseio.com",
        projectId: "my-pocket-fire",
        storageBucket: "my-pocket-fire.appspot.com",
        messagingSenderId: "803149419066"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "EA4a":
/*!**************************************************************!*\
  !*** ./src/app/views/product-crud/product-crud.component.ts ***!
  \**************************************************************/
/*! exports provided: ProductCrudComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCrudComponent", function() { return ProductCrudComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_components_template_header_header_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/template/header/header.service */ "XnBB");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _components_product_product_read_product_read_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/product/product-read/product-read.component */ "KON2");






class ProductCrudComponent {
    constructor(router, headerService) {
        this.router = router;
        this.headerService = headerService;
        this.headerService.setHeaderData('Cadastro de Produtos', 'storefront', '/products');
    }
    ngOnInit() {
    }
    navigateToProductCreate() {
        this.router.navigate(['/products/create']);
    }
}
ProductCrudComponent.ɵfac = function ProductCrudComponent_Factory(t) { return new (t || ProductCrudComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_components_template_header_header_service__WEBPACK_IMPORTED_MODULE_2__["HeaderService"])); };
ProductCrudComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductCrudComponent, selectors: [["app-product-crud"]], decls: 3, vars: 0, consts: [["mat-raised-button", "", 3, "click"]], template: function ProductCrudComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductCrudComponent_Template_button_click_0_listener() { return ctx.navigateToProductCreate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Novo produto\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-product-read");
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _components_product_product_read_product_read_component__WEBPACK_IMPORTED_MODULE_4__["ProductReadComponent"]], styles: ["button[_ngcontent-%COMP%] {\r\n    margin-bottom: 30px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QtY3J1ZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InByb2R1Y3QtY3J1ZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductCrudComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-product-crud',
                templateUrl: './product-crud.component.html',
                styleUrls: ['./product-crud.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: src_app_components_template_header_header_service__WEBPACK_IMPORTED_MODULE_2__["HeaderService"] }]; }, null); })();


/***/ }),

/***/ "F7aH":
/*!*******************************************************************************!*\
  !*** ./src/app/components/product/product-create/product-create.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ProductCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCreateComponent", function() { return ProductCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../product.service */ "KZW2");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _messages_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../messages/message.service */ "nj0I");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-currency-mask */ "9nqD");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");











class ProductCreateComponent {
    constructor(productService, router, messageService) {
        this.productService = productService;
        this.router = router;
        this.messageService = messageService;
        this.product = {
            id: '',
            description: '',
            price: null
        };
    }
    ngOnInit() {
    }
    createProduct() {
        this.productService.save(this.product).then(() => {
            this.messageService.showMessage(`Produto ${this.product.description} criado!`);
            this.cancel();
        });
    }
    cancel() {
        this.router.navigate(['/products']);
    }
}
ProductCreateComponent.ɵfac = function ProductCreateComponent_Factory(t) { return new (t || ProductCreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_messages_message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"])); };
ProductCreateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductCreateComponent, selectors: [["app-product-create"]], decls: 12, vars: 2, consts: [["matInput", "", "placeholder", "Nome", "name", "description", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "Pre\u00E7o (R$)", "name", "price", "currencyMask", "", 3, "ngModel", "ngModelChange"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["mat-raised-button", "", 3, "click"]], template: function ProductCreateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Novo produto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProductCreateComponent_Template_input_ngModelChange_5_listener($event) { return ctx.product.description = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProductCreateComponent_Template_input_ngModelChange_7_listener($event) { return ctx.product.price = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductCreateComponent_Template_button_click_8_listener() { return ctx.createProduct(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Salvar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductCreateComponent_Template_button_click_10_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Cancelar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.product.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.product.price);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardTitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], ng2_currency_mask__WEBPACK_IMPORTED_MODULE_8__["CurrencyMaskDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"]], styles: ["form[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin-top: 20px;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n    margin: 20px 15px 0 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QtY3JlYXRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6QiIsImZpbGUiOiJwcm9kdWN0LWNyZWF0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9ybSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgICBtYXJnaW46IDIwcHggMTVweCAwIDA7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductCreateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-product-create',
                templateUrl: './product-create.component.html',
                styleUrls: ['./product-create.component.css']
            }]
    }], function () { return [{ type: _product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _messages_message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"] }]; }, null); })();


/***/ }),

/***/ "K3cx":
/*!*******************************************************************************!*\
  !*** ./src/app/components/product/product-update/product-update.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ProductUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductUpdateComponent", function() { return ProductUpdateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../product.service */ "KZW2");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _messages_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../messages/message.service */ "nj0I");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-currency-mask */ "9nqD");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");











class ProductUpdateComponent {
    constructor(productService, router, route, messageService) {
        this.productService = productService;
        this.router = router;
        this.route = route;
        this.messageService = messageService;
        this.product = {
            id: '',
            description: '',
            price: null
        };
    }
    ngOnInit() {
        const id = this.route.snapshot.paramMap.get('id');
        if (id != null) {
            this.productService.get(id).subscribe(product => {
                if (product != null) {
                    this.product = product;
                }
            });
        }
    }
    updateProduct() {
        this.productService.save(this.product).then(() => {
            this.messageService.showMessage(`Produto ${this.product.description} atualizado!`);
            this.cancel();
        });
    }
    cancel() {
        this.router.navigate(['/products']);
    }
}
ProductUpdateComponent.ɵfac = function ProductUpdateComponent_Factory(t) { return new (t || ProductUpdateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_messages_message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"])); };
ProductUpdateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductUpdateComponent, selectors: [["app-product-update"]], decls: 12, vars: 2, consts: [["matInput", "", "placeholder", "Nome", "name", "description", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "Pre\u00E7o (R$)", "name", "price", "currencyMask", "", 3, "ngModel", "ngModelChange"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["mat-raised-button", "", 3, "click"]], template: function ProductUpdateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Alterar produto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProductUpdateComponent_Template_input_ngModelChange_5_listener($event) { return ctx.product.description = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProductUpdateComponent_Template_input_ngModelChange_7_listener($event) { return ctx.product.price = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductUpdateComponent_Template_button_click_8_listener() { return ctx.updateProduct(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Atualizar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductUpdateComponent_Template_button_click_10_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Cancelar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.product.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.product.price);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardTitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], ng2_currency_mask__WEBPACK_IMPORTED_MODULE_8__["CurrencyMaskDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"]], styles: ["form[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin-top: 20px;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n    margin: 20px 15px 0 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QtdXBkYXRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6QiIsImZpbGUiOiJwcm9kdWN0LXVwZGF0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9ybSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgICBtYXJnaW46IDIwcHggMTVweCAwIDA7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductUpdateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-product-update',
                templateUrl: './product-update.component.html',
                styleUrls: ['./product-update.component.css']
            }]
    }], function () { return [{ type: _product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _messages_message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"] }]; }, null); })();


/***/ }),

/***/ "KON2":
/*!***************************************************************************!*\
  !*** ./src/app/components/product/product-read/product-read.component.ts ***!
  \***************************************************************************/
/*! exports provided: ProductReadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductReadComponent", function() { return ProductReadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _product_delete_product_delete_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../product-delete/product-delete.component */ "s77Z");
/* harmony import */ var _product_read_datasource__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product-read-datasource */ "gllh");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../product.service */ "KZW2");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");














function ProductReadComponent_th_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Descri\u00E7\u00E3o");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductReadComponent_td_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r9.description);
} }
function ProductReadComponent_th_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Pre\u00E7o (R$)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductReadComponent_td_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, row_r10.price, "BRL"));
} }
function ProductReadComponent_th_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "A\u00E7\u00F5es");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductReadComponent_td_10_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductReadComponent_td_10_Template_a_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const row_r11 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.delete(row_r11.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "update/", row_r11.id, "");
} }
function ProductReadComponent_tr_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 18);
} }
function ProductReadComponent_tr_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 19);
} }
const _c0 = function () { return [5, 10, 50]; };
class ProductReadComponent {
    constructor(productService, dialog) {
        this.productService = productService;
        this.dialog = dialog;
        this.displayedColumns = ['description', 'price', 'action'];
    }
    ngOnInit() {
        this.dataSource = new _product_read_datasource__WEBPACK_IMPORTED_MODULE_5__["ProductReadDataSource"]([]);
        this.loadProducts();
    }
    loadProducts() {
        this.productService.getAll().subscribe(products => {
            this.setTableData(products);
        });
    }
    setTableData(products) {
        this.dataSource = new _product_read_datasource__WEBPACK_IMPORTED_MODULE_5__["ProductReadDataSource"](products);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.table.dataSource = this.dataSource;
    }
    delete(id) {
        const dialogRef = this.dialog.open(_product_delete_product_delete_component__WEBPACK_IMPORTED_MODULE_4__["ProductDeleteComponent"], {
            data: id
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.loadProducts();
            }
        });
    }
}
ProductReadComponent.ɵfac = function ProductReadComponent_Factory(t) { return new (t || ProductReadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_product_service__WEBPACK_IMPORTED_MODULE_6__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"])); };
ProductReadComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductReadComponent, selectors: [["app-product-read"]], viewQuery: function ProductReadComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"], true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
    } }, decls: 15, vars: 7, consts: [[1, "mat-elevation-z4"], ["mat-table", "", "matSort", "", "aria-label", "Elements", 1, "full-width-table"], ["matColumnDef", "description"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "price"], ["matColumnDef", "action"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "length", "pageIndex", "pageSize", "pageSizeOptions"], ["paginator", ""], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-cell", ""], [1, "edit", 3, "routerLink"], [1, "material-icons"], [1, "delete", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]], template: function ProductReadComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](2, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProductReadComponent_th_3_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProductReadComponent_td_4_Template, 2, 1, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](5, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ProductReadComponent_th_6_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ProductReadComponent_td_7_Template, 3, 4, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](8, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ProductReadComponent_th_9_Template, 2, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ProductReadComponent_td_10_Template, 7, 1, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ProductReadComponent_tr_11_Template, 1, 0, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ProductReadComponent_tr_12_Template, 1, 0, "tr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "mat-paginator", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("length", ctx.dataSource == null ? null : ctx.dataSource.data == null ? null : ctx.dataSource.data.length)("pageIndex", 0)("pageSize", 10)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));
    } }, directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCell"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLinkWithHref"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRow"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["CurrencyPipe"]], styles: ["table[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n}\r\n\r\n.edit[_ngcontent-%COMP%] {\r\n    margin-right: 10px;\r\n}\r\n\r\n.edit[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\r\n    color: #d9cd26;\r\n}\r\n\r\n.delete[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\r\n    color: #e35e6d;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QtcmVhZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCIiwiZmlsZSI6InByb2R1Y3QtcmVhZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmEge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uZWRpdCB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5lZGl0ID4gaSB7XHJcbiAgICBjb2xvcjogI2Q5Y2QyNjtcclxufVxyXG5cclxuLmRlbGV0ZSA+IGkge1xyXG4gICAgY29sb3I6ICNlMzVlNmQ7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductReadComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-product-read',
                templateUrl: './product-read.component.html',
                styleUrls: ['./product-read.component.css']
            }]
    }], function () { return [{ type: _product_service__WEBPACK_IMPORTED_MODULE_6__["ProductService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] }]; }, { paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]]
        }], sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"]]
        }], table: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"]]
        }] }); })();


/***/ }),

/***/ "KZW2":
/*!*******************************************************!*\
  !*** ./src/app/components/product/product.service.ts ***!
  \*******************************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _base_angular_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base-angular.service */ "5Ncf");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "sSZD");
/* harmony import */ var _messages_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../messages/message.service */ "nj0I");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");






class ProductService extends _base_angular_service__WEBPACK_IMPORTED_MODULE_1__["BaseAngularService"] {
    constructor(db, messageService, http) {
        super(db, messageService);
        this.db = db;
        this.messageService = messageService;
        this.http = http;
        this.baseUrl = '/products';
    }
}
ProductService.ɵfac = function ProductService_Factory(t) { return new (t || ProductService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_messages_message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
ProductService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProductService, factory: ProductService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"] }, { type: _messages_message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "KnQY":
/*!****************************************************************!*\
  !*** ./src/app/components/template/footer/footer.component.ts ***!
  \****************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _directives_red_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../directives/red.directive */ "g6ns");
/* harmony import */ var _directives_jumping_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../directives/jumping.directive */ "QVFG");





class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 7, vars: 0, consts: [[1, "footer"], ["appRed", "", "appJumping", "", 1, "material-icons", "v-middle"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Desenvolvido por ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " code ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Danillo Pinheiro Neto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _directives_red_directive__WEBPACK_IMPORTED_MODULE_2__["RedDirective"], _directives_jumping_directive__WEBPACK_IMPORTED_MODULE_3__["JumpingDirective"]], styles: [".footer[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    bottom: 0;\r\n    display: flex;\r\n    justify-content: flex-end;\r\n}\r\n\r\n.footer[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\r\n    font-size: 1.1rem;\r\n    font-weight: 300;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLFNBQVM7SUFDVCxhQUFhO0lBQ2IseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXIge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbn1cclxuXHJcbi5mb290ZXIgPiBzcGFuIHtcclxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "QVFG":
/*!*************************************************!*\
  !*** ./src/app/directives/jumping.directive.ts ***!
  \*************************************************/
/*! exports provided: JumpingDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JumpingDirective", function() { return JumpingDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class JumpingDirective {
    constructor(renderer, el) {
        this.renderer = renderer;
        this.el = el;
        this.renderer.addClass(this.el.nativeElement, "jumping");
    }
}
JumpingDirective.ɵfac = function JumpingDirective_Factory(t) { return new (t || JumpingDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
JumpingDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: JumpingDirective, selectors: [["", "appJumping", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JumpingDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appJumping]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, null); })();


/***/ }),

/***/ "QlPV":
/*!**********************************************!*\
  !*** ./src/app/views/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_template_header_header_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../components/template/header/header.service */ "XnBB");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");




class HomeComponent {
    constructor(headerService) {
        this.headerService = headerService;
        this.headerService.setHeaderData('My Pocket', 'home');
    }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_components_template_header_header_service__WEBPACK_IMPORTED_MODULE_1__["HeaderService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 5, vars: 0, consts: [[1, "home", "mat-elevation-z3"], [1, "title"], [1, "subtitle"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Bem Vindo! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-subtitle", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Sistema para exemplificar a constru\u00E7\u00E3o de um cadastro em Angular. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardSubtitle"]], styles: [".home[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\r\n    font-size: 3rem;\r\n    font-weight: 300;\r\n    line-height: 1.2;\r\n}\r\n\r\n.home[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\r\n    font-size: 1.1rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob21lIC50aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDNyZW07XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcclxufVxyXG5cclxuLmhvbWUgLnN1YnRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return [{ type: _components_template_header_header_service__WEBPACK_IMPORTED_MODULE_1__["HeaderService"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_template_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/template/header/header.component */ "qK/A");
/* harmony import */ var _components_template_nav_nav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/template/nav/nav.component */ "kz4Y");
/* harmony import */ var _components_template_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/template/footer/footer.component */ "KnQY");





class AppComponent {
    constructor() {
        this.nome = 'Danillo';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer");
    } }, directives: [_components_template_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _components_template_nav_nav_component__WEBPACK_IMPORTED_MODULE_2__["NavComponent"], _components_template_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: 'app.component.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "XnBB":
/*!**************************************************************!*\
  !*** ./src/app/components/template/header/header.service.ts ***!
  \**************************************************************/
/*! exports provided: HeaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderService", function() { return HeaderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



class HeaderService {
    constructor() {
        this._headerData = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({
            title: 'My Pocket',
            icon: 'home',
            routeUrl: ''
        });
    }
    get headerData() {
        return this._headerData.value;
    }
    set headerData(headerData) {
        this._headerData.next(headerData);
    }
    setHeaderData(title, icon, routeUrl = '') {
        this.headerData = {
            title: title,
            icon: icon,
            routeUrl: routeUrl
        };
    }
}
HeaderService.ɵfac = function HeaderService_Factory(t) { return new (t || HeaderService)(); };
HeaderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HeaderService, factory: HeaderService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: CustomCurrencyMaskConfig, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomCurrencyMaskConfig", function() { return CustomCurrencyMaskConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/locales/pt */ "vT00");
/* harmony import */ var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_template_header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/template/header/header.component */ "qK/A");
/* harmony import */ var _components_template_nav_nav_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/template/nav/nav.component */ "kz4Y");
/* harmony import */ var _components_template_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/template/footer/footer.component */ "KnQY");
/* harmony import */ var _views_home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./views/home/home.component */ "QlPV");
/* harmony import */ var _views_product_crud_product_crud_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./views/product-crud/product-crud.component */ "EA4a");
/* harmony import */ var _components_product_product_create_product_create_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/product/product-create/product-create.component */ "F7aH");
/* harmony import */ var _components_product_product_read_product_read_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/product/product-read/product-read.component */ "KON2");
/* harmony import */ var _components_product_product_update_product_update_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/product/product-update/product-update.component */ "K3cx");
/* harmony import */ var _directives_red_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./directives/red.directive */ "g6ns");
/* harmony import */ var _directives_jumping_directive__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./directives/jumping.directive */ "QVFG");
/* harmony import */ var _directives_for_directive__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./directives/for.directive */ "p9p6");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _components_product_product_delete_product_delete_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/product/product-delete/product-delete.component */ "s77Z");
/* harmony import */ var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ng2-currency-mask */ "9nqD");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/fire */ "spgP");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/fire/database */ "sSZD");










/* App Components */








/* App Directives */



/* Material */













/* Plugins */

/* Firebase */




Object(_angular_common__WEBPACK_IMPORTED_MODULE_9__["registerLocaleData"])(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_8___default.a);
const CustomCurrencyMaskConfig = {
    align: "left",
    allowNegative: true,
    decimal: ",",
    precision: 2,
    prefix: "R$ ",
    suffix: "",
    thousands: "."
};
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        { provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"], useValue: 'pt-BR' },
        { provide: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_32__["MAT_DIALOG_DEFAULT_OPTIONS"], useValue: { hasBackdrop: false } },
        { provide: ng2_currency_mask__WEBPACK_IMPORTED_MODULE_34__["CURRENCY_MASK_CONFIG"], useValue: CustomCurrencyMaskConfig }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_22__["MatToolbarModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_23__["MatSidenavModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_21__["MatListModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_24__["MatCardModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_25__["MatButtonModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_26__["MatSnackBarModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_27__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_28__["MatInputModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_29__["MatTableModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_30__["MatPaginatorModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_31__["MatSortModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_32__["MatDialogModule"],
            ng2_currency_mask__WEBPACK_IMPORTED_MODULE_34__["CurrencyMaskModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_35__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].firebaseConfig),
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_36__["AngularFireDatabaseModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _components_template_header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"],
        _components_template_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"],
        _components_template_nav_nav_component__WEBPACK_IMPORTED_MODULE_11__["NavComponent"],
        _views_home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"],
        _views_product_crud_product_crud_component__WEBPACK_IMPORTED_MODULE_14__["ProductCrudComponent"],
        _directives_red_directive__WEBPACK_IMPORTED_MODULE_18__["RedDirective"],
        _directives_jumping_directive__WEBPACK_IMPORTED_MODULE_19__["JumpingDirective"],
        _directives_for_directive__WEBPACK_IMPORTED_MODULE_20__["ForDirective"],
        _components_product_product_create_product_create_component__WEBPACK_IMPORTED_MODULE_15__["ProductCreateComponent"],
        _components_product_product_read_product_read_component__WEBPACK_IMPORTED_MODULE_16__["ProductReadComponent"],
        _components_product_product_update_product_update_component__WEBPACK_IMPORTED_MODULE_17__["ProductUpdateComponent"],
        _components_product_product_delete_product_delete_component__WEBPACK_IMPORTED_MODULE_33__["ProductDeleteComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_22__["MatToolbarModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_23__["MatSidenavModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_21__["MatListModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_24__["MatCardModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_25__["MatButtonModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_26__["MatSnackBarModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_27__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_28__["MatInputModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_29__["MatTableModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_30__["MatPaginatorModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_31__["MatSortModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_32__["MatDialogModule"],
        ng2_currency_mask__WEBPACK_IMPORTED_MODULE_34__["CurrencyMaskModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_35__["AngularFireModule"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_36__["AngularFireDatabaseModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _components_template_header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"],
                    _components_template_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"],
                    _components_template_nav_nav_component__WEBPACK_IMPORTED_MODULE_11__["NavComponent"],
                    _views_home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"],
                    _views_product_crud_product_crud_component__WEBPACK_IMPORTED_MODULE_14__["ProductCrudComponent"],
                    _directives_red_directive__WEBPACK_IMPORTED_MODULE_18__["RedDirective"],
                    _directives_jumping_directive__WEBPACK_IMPORTED_MODULE_19__["JumpingDirective"],
                    _directives_for_directive__WEBPACK_IMPORTED_MODULE_20__["ForDirective"],
                    _components_product_product_create_product_create_component__WEBPACK_IMPORTED_MODULE_15__["ProductCreateComponent"],
                    _components_product_product_read_product_read_component__WEBPACK_IMPORTED_MODULE_16__["ProductReadComponent"],
                    _components_product_product_update_product_update_component__WEBPACK_IMPORTED_MODULE_17__["ProductUpdateComponent"],
                    _components_product_product_delete_product_delete_component__WEBPACK_IMPORTED_MODULE_33__["ProductDeleteComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_22__["MatToolbarModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_23__["MatSidenavModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_21__["MatListModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_24__["MatCardModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_25__["MatButtonModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_26__["MatSnackBarModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_27__["MatFormFieldModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_28__["MatInputModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_29__["MatTableModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_30__["MatPaginatorModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_31__["MatSortModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_32__["MatDialogModule"],
                    ng2_currency_mask__WEBPACK_IMPORTED_MODULE_34__["CurrencyMaskModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_fire__WEBPACK_IMPORTED_MODULE_35__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].firebaseConfig),
                    _angular_fire_database__WEBPACK_IMPORTED_MODULE_36__["AngularFireDatabaseModule"]
                ],
                providers: [
                    { provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"], useValue: 'pt-BR' },
                    { provide: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_32__["MAT_DIALOG_DEFAULT_OPTIONS"], useValue: { hasBackdrop: false } },
                    { provide: ng2_currency_mask__WEBPACK_IMPORTED_MODULE_34__["CURRENCY_MASK_CONFIG"], useValue: CustomCurrencyMaskConfig }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "g6ns":
/*!*********************************************!*\
  !*** ./src/app/directives/red.directive.ts ***!
  \*********************************************/
/*! exports provided: RedDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedDirective", function() { return RedDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class RedDirective {
    constructor(renderer, el) {
        this.renderer = renderer;
        this.el = el;
        this.el.nativeElement.style.color = "#e35e6b";
    }
}
RedDirective.ɵfac = function RedDirective_Factory(t) { return new (t || RedDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
RedDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: RedDirective, selectors: [["", "appRed", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RedDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appRed]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, null); })();


/***/ }),

/***/ "gllh":
/*!****************************************************************************!*\
  !*** ./src/app/components/product/product-read/product-read-datasource.ts ***!
  \****************************************************************************/
/*! exports provided: ProductReadDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductReadDataSource", function() { return ProductReadDataSource; });
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/collections */ "0EQZ");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");



/**
 * Data source for the ProductRead view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
class ProductReadDataSource extends _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__["DataSource"] {
    constructor(products) {
        super();
        this.products = products;
        this.data = this.products;
    }
    /**
     * Connect this data source to the table. The table will only update when
     * the returned stream emits new items.
     * @returns A stream of the items to be rendered.
     */
    connect() {
        // Combine everything that affects the rendered data into one update
        // stream for the data-table to consume.
        const dataMutations = [
            Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.data),
            this.paginator.page,
            this.sort.sortChange
        ];
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(...dataMutations).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(() => {
            return this.getPagedData(this.getSortedData([...this.data]));
        }));
    }
    /**
     *  Called when the table is being destroyed. Use this function, to clean up
     * any open connections or free any held resources that were set up during connect.
     */
    disconnect() { }
    /**
     * Paginate the data (client-side). If you're using server-side pagination,
     * this would be replaced by requesting the appropriate data from the server.
     */
    getPagedData(data) {
        const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
        return data.splice(startIndex, this.paginator.pageSize);
    }
    /**
     * Sort the data (client-side). If you're using server-side sorting,
     * this would be replaced by requesting the appropriate data from the server.
     */
    getSortedData(data) {
        if (!this.sort.active || this.sort.direction === '') {
            return data;
        }
        return data.sort((a, b) => {
            const isAsc = this.sort.direction === 'asc';
            switch (this.sort.active) {
                case 'description': return compare(a.description, b.description, isAsc);
                case 'price': return compare(+this.fixValue(a.price), +this.fixValue(b.price), isAsc);
                default: return 0;
            }
        });
    }
    fixValue(value) {
        return value != null && value != undefined ? value : 0;
    }
}
/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
    if (typeof (a) == "string") {
        a = a.toUpperCase();
    }
    if (typeof (b) == "string") {
        b = b.toUpperCase();
    }
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}


/***/ }),

/***/ "kz4Y":
/*!**********************************************************!*\
  !*** ./src/app/components/template/nav/nav.component.ts ***!
  \**********************************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _header_header_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../header/header.service */ "XnBB");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/list */ "MutI");








class NavComponent {
    constructor(headerService, changeDetectorRef, media) {
        this.headerService = headerService;
        this.isMobile = true;
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);
        this.isMobile = this.mobileQuery.matches;
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    }
    get title() {
        return this.headerService.headerData.title;
    }
    get icon() {
        return this.headerService.headerData.icon;
    }
    get routeUrl() {
        return this.headerService.headerData.routeUrl;
    }
}
NavComponent.ɵfac = function NavComponent_Factory(t) { return new (t || NavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_header_header_service__WEBPACK_IMPORTED_MODULE_1__["HeaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["MediaMatcher"])); };
NavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavComponent, selectors: [["app-nav"]], decls: 24, vars: 8, consts: [[1, "header", "container"], [1, "header", "mat-elevation-z4", "toolbar"], ["src", "assets/img/logo.png", "alt", "logo", 1, "logo", 3, "click"], [1, "title-group"], [3, "routerLink"], [1, "material-icons"], [1, "sidenav-container"], ["fixedTopGap", "56", 1, "sidenav", 3, "opened", "mode", "fixedInViewport"], ["menu", ""], [1, "nav-list"], ["mat-list-item", "", "routerLink", "/", 3, "click"], ["mat-list-item", "", "routerLink", "/products", 3, "click"], [1, "content"]], template: function NavComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_img_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12); return ctx.isMobile ? _r0.toggle() : null; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-sidenav-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-sidenav", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-nav-list", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_a_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12); return ctx.isMobile ? _r0.close() : null; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " In\u00EDcio ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_a_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12); return ctx.isMobile ? _r0.close() : null; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " storefront ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Produtos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-sidenav-content", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-mobile", ctx.mobileQuery.matches);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", ctx.routeUrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.icon, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("opened", ctx.isMobile ? null : "")("mode", ctx.mobileQuery.matches ? "over" : "side")("fixedInViewport", ctx.mobileQuery.matches);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbar"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenav"], _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatNavList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListItem"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavContent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]], styles: [".header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    text-decoration: none;\r\n    color: #333;\r\n}\r\n\r\n.header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\r\n    max-height: 50px;\r\n    cursor: pointer;\r\n}\r\n\r\n.header[_ngcontent-%COMP%]   .title-group[_ngcontent-%COMP%] {\r\n    padding-left: 25px;\r\n}\r\n\r\n.header[_ngcontent-%COMP%]   .title-group[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    padding-right: 5px;\r\n}\r\n\r\n.sidenav[_ngcontent-%COMP%] {\r\n    background-color: #3F51B5;\r\n}\r\n\r\n.sidenav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    color: #FFF\r\n}\r\n\r\n.sidenav[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    padding-right: 10px;\r\n}\r\n\r\n.content[_ngcontent-%COMP%] {\r\n    padding: 16px;\r\n    background-color: #FFF;\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n}\r\n\r\n.sidenav-container[_ngcontent-%COMP%] {\r\n    flex: 1;\r\n}\r\n\r\n.is-mobile[_ngcontent-%COMP%]   .sidenav-container[_ngcontent-%COMP%] {\r\n    flex: 1 auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsV0FBVztBQUNmOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixTQUFTO0lBQ1QsT0FBTztJQUNQLFFBQVE7QUFDWjs7QUFFQTtJQUNJLE9BQU87QUFDWDs7QUFFQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoibmF2LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIGEge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogIzMzMztcclxufVxyXG5cclxuLmhlYWRlciAubG9nbyB7XHJcbiAgICBtYXgtaGVpZ2h0OiA1MHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uaGVhZGVyIC50aXRsZS1ncm91cCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XHJcbn1cclxuXHJcbi5oZWFkZXIgLnRpdGxlLWdyb3VwIGkge1xyXG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG59XHJcblxyXG4uc2lkZW5hdiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0Y1MUI1O1xyXG59XHJcblxyXG4uc2lkZW5hdiBhIHtcclxuICAgIGNvbG9yOiAjRkZGXHJcbn1cclxuXHJcbi5zaWRlbmF2IGkge1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbn1cclxuXHJcbi5zaWRlbmF2LWNvbnRhaW5lciB7XHJcbiAgICBmbGV4OiAxO1xyXG59XHJcblxyXG4uaXMtbW9iaWxlIC5zaWRlbmF2LWNvbnRhaW5lciB7XHJcbiAgICBmbGV4OiAxIGF1dG87XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-nav',
                templateUrl: './nav.component.html',
                styleUrls: ['./nav.component.css']
            }]
    }], function () { return [{ type: _header_header_service__WEBPACK_IMPORTED_MODULE_1__["HeaderService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["MediaMatcher"] }]; }, null); })();


/***/ }),

/***/ "nj0I":
/*!********************************************************!*\
  !*** ./src/app/components/messages/message.service.ts ***!
  \********************************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");



class MessageService {
    constructor(snackBar) {
        this.snackBar = snackBar;
    }
    showMessage(msg, isError = false, time) {
        this.snackBar.open(msg, 'x', {
            duration: time != null ? time : 3000,
            horizontalPosition: 'right',
            verticalPosition: 'top',
            panelClass: isError ? 'msg-error' : 'msg-success'
        });
    }
}
MessageService.ɵfac = function MessageService_Factory(t) { return new (t || MessageService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"])); };
MessageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MessageService, factory: MessageService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MessageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"] }]; }, null); })();


/***/ }),

/***/ "p9p6":
/*!*********************************************!*\
  !*** ./src/app/directives/for.directive.ts ***!
  \*********************************************/
/*! exports provided: ForDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForDirective", function() { return ForDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ForDirective {
    constructor(container, template) {
        this.container = container;
        this.template = template;
        this.numbers = [];
    }
    ngOnInit() {
        for (let number of this.numbers) {
            this.container.createEmbeddedView(this.template, { $implicit: number });
        }
    }
}
ForDirective.ɵfac = function ForDirective_Factory(t) { return new (t || ForDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])); };
ForDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ForDirective, selectors: [["", "myFor", ""]], inputs: { numbers: ["myForEm", "numbers"] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ForDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[myFor]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }]; }, { numbers: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['myForEm']
        }] }); })();


/***/ }),

/***/ "qK/A":
/*!****************************************************************!*\
  !*** ./src/app/components/template/header/header.component.ts ***!
  \****************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _header_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.service */ "XnBB");



class HeaderComponent {
    constructor(headerService) {
        this.headerService = headerService;
    }
    ngOnInit() {
    }
    get title() {
        return this.headerService.headerData.title;
    }
    get icon() {
        return this.headerService.headerData.icon;
    }
    get routeUrl() {
        return this.headerService.headerData.routeUrl;
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_header_service__WEBPACK_IMPORTED_MODULE_1__["HeaderService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 0, vars: 0, template: function HeaderComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return [{ type: _header_service__WEBPACK_IMPORTED_MODULE_1__["HeaderService"] }]; }, null); })();


/***/ }),

/***/ "s77Z":
/*!*******************************************************************************!*\
  !*** ./src/app/components/product/product-delete/product-delete.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ProductDeleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDeleteComponent", function() { return ProductDeleteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../product.service */ "KZW2");
/* harmony import */ var _messages_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../messages/message.service */ "nj0I");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");







class ProductDeleteComponent {
    constructor(dialogRef, productService, messageService, data) {
        this.dialogRef = dialogRef;
        this.productService = productService;
        this.messageService = messageService;
        this.data = data;
        this.productId = data;
    }
    ngOnInit() {
        this.productService.get(this.productId).subscribe(product => {
            if (product != null) {
                this.product = product;
            }
        });
    }
    deleteProduct() {
        this.productService.delete(this.product.id).then(() => {
            this.messageService.showMessage(`O produto ${this.product.description} foi excluído!`);
            this.dialogRef.close(true);
        });
    }
}
ProductDeleteComponent.ɵfac = function ProductDeleteComponent_Factory(t) { return new (t || ProductDeleteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_messages_message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
ProductDeleteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductDeleteComponent, selectors: [["app-product-delete"]], decls: 11, vars: 2, consts: [[3, "hidden"], ["mat-dialog-title", ""], ["mat-dialog-content", ""], ["mat-dialog-actions", ""], ["mat-button", "", "mat-raised-button", "", "mat-dialog-close", ""], ["mat-button", "", "mat-raised-button", "", "color", "warn", 3, "click"]], template: function ProductDeleteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Exclus\u00E3o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "N\u00E3o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductDeleteComponent_Template_button_click_9_listener() { return ctx.deleteProduct(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Sim");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.product == null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Deseja realmente excluir o produto ", ctx.product != null ? ctx.product.description : "", "?");
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LWRlbGV0ZS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductDeleteComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-product-delete',
                templateUrl: './product-delete.component.html',
                styleUrls: ['./product-delete.component.css']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: _product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] }, { type: _messages_message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _views_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/home/home.component */ "QlPV");
/* harmony import */ var _views_product_crud_product_crud_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/product-crud/product-crud.component */ "EA4a");
/* harmony import */ var _components_product_product_create_product_create_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/product/product-create/product-create.component */ "F7aH");
/* harmony import */ var _components_product_product_update_product_update_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/product/product-update/product-update.component */ "K3cx");








const routes = [
    {
        path: "",
        component: _views_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    },
    {
        path: "products",
        component: _views_product_crud_product_crud_component__WEBPACK_IMPORTED_MODULE_3__["ProductCrudComponent"]
    },
    {
        path: "products/create",
        component: _components_product_product_create_product_create_component__WEBPACK_IMPORTED_MODULE_4__["ProductCreateComponent"]
    },
    {
        path: "products/update/:id",
        component: _components_product_product_update_product_update_component__WEBPACK_IMPORTED_MODULE_5__["ProductUpdateComponent"]
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map