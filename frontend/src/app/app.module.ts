import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CartComponent} from "./component/cart/cart.component";
import {CategoriesModComponent} from "./component/categories-mod/categories-mod.component";
import {CategoryComponent} from "./component/category/category.component";
import {DashboardComponent} from "./component/dashboard/dashboard.component";
import {LoginFormComponent} from "./component/login-form/login-form.component";
import {NewProductComponent} from "./component/new-product/new-product.component";
import {NewProductInCategoryComponent} from "./component/new-product-in-category/new-product-in-category.component";
import {OrderComponent} from "./component/order/order.component";
import {OrderDetailsComponent} from "./component/order-details/order-details.component";
import {PaymentDetailsComponent} from "./component/payment-details/payment-details.component";
import {ProductComponent} from "./component/product/product.component";
import {ProductCommentsComponent} from "./component/product-comments/product-comments.component";
import {ProductCommentsModComponent} from "./component/product-comments-mod/product-comments-mod.component";
import {ProductsModComponent} from "./component/products-mod/products-mod.component";
import {RegisterFormComponent} from "./component/register-form/register-form.component";
import {UsersModComponent} from "./component/users-mod/users-mod.component";


@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    CategoriesModComponent,
    CategoryComponent,
    DashboardComponent,
    LoginFormComponent,
    NewProductComponent,
    NewProductInCategoryComponent,
    OrderComponent,
    OrderDetailsComponent,
    PaymentDetailsComponent,
    ProductComponent,
    ProductCommentsComponent,
    ProductCommentsModComponent,
    ProductsModComponent,
    RegisterFormComponent,
    UsersModComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
