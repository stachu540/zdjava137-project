import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {IndexComponent} from "./component/index/index.component";
import {CartComponent} from "./component/cart/cart.component";
import {CategoryComponent} from "./component/category/category.component";
import {LoginComponent} from "./component/login/login.component";
import {CheckoutComponent} from "./component/checkout/checkout.component";
import {ProductsComponent as UserProducts} from "./component/settings/products/products.component";
import {OrdersComponent as UserOrders} from "./component/settings/orders/orders.component";
import {AccountComponent as UserAccount} from "./component/settings/account/account.component";
import {NewProductComponent as UserCreateProduct} from "./component/settings/new-product/new-product.component";
import {DashboardComponent as AdminDashboard} from "./component/admin/dashboard/dashboard.component";
import {ProductsComponent as AdminProducts} from "./component/admin/products/products.component";
import {
  ProductCommentsComponent as AdminProductComments
} from "./component/admin/product-comments/product-comments.component";
import {UsersComponent as AdminUsers} from "./component/admin/users/users.component";
import {CategoriesComponent as AdminCategories} from "./component/admin/categories/categories.component";
import {AddressComponent as UserAddress} from "./component/settings/address/address.component";
import {AccountCloseComponent as UserAccountClose} from "./component/_base/account-close/account-close.component";
import {PaymentsComponent as UserPayments} from "./component/settings/payments/payments.component";
import {ProductComponent} from "./component/product/product.component";
import {SettingsComponent as AdminSettings} from "./component/admin/settings/settings.component";
import {PaymentsComponent as AdminPayments} from "./component/admin/payments/payments.component";
import {ProductCommentsComponent} from "./component/product-comments/product-comments.component";
import {
  ProductCommentsComponent as UserProductComments
} from "./component/settings/product-comments/product-comments.component"
import {PaymentDetailsComponent} from "./component/payment-details/payment-details.component";
import {OrderDetailsComponent} from "./component/settings/order-details/order-details.component";
import {RegisterComponent} from "./component/register/register.component";
import {TitleStrategy} from "@angular/router";
import {AppTitlePrefix} from "./titile";
import {CookieService} from "ngx-cookie-service";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NavigationComponent} from './component/_base/navigation/navigation.component';
import {FooterComponent} from './component/_base/footer/footer.component';
import {CartEntryComponent} from './component/_model/cart-entry/cart-entry.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {MatDividerModule} from "@angular/material/divider";
import {LogoutComponent} from './component/_base/logout/logout.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatGridListModule} from "@angular/material/grid-list";
import {SearchBarComponent} from './component/_base/search-bar/search-bar.component';
import {SearchComponent} from "./component/search/search.component";
import {CategoryBrowserComponent} from "./component/category-browser/category-browser.component";
import {MatListModule} from "@angular/material/list";
import {CategoryFilterComponent} from "./component/_model/category-filter/category-filter.component";
import {CheckoutEntryComponent} from "./component/_model/checkout-entry/checkout-entry.component";
import {ProductEntryComponent} from "./component/_model/product-entry/product-entry.component";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatBadgeModule} from "@angular/material/badge";
import {MatTableModule} from "@angular/material/table";
import {MatCardModule} from "@angular/material/card";
import {MatSnackBarModule} from "@angular/material/snack-bar";


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    CartComponent,
    CategoryComponent,
    LoginComponent,
    CheckoutComponent,
    UserProducts,
    UserOrders,
    UserAccount,
    UserCreateProduct,
    AdminDashboard,
    AdminProducts,
    AdminProductComments,
    AdminUsers,
    AdminCategories,
    UserAddress,
    UserAccountClose,
    UserPayments,
    ProductComponent,
    AdminSettings,
    AdminPayments,
    ProductCommentsComponent,
    UserProductComments,
    PaymentDetailsComponent,
    OrderDetailsComponent,
    RegisterComponent,
    NavigationComponent,
    FooterComponent,
    CartEntryComponent,
    CheckoutComponent,
    LogoutComponent,
    SearchBarComponent,
    SearchComponent,
    CategoryBrowserComponent,
    CategoryFilterComponent,
    CheckoutEntryComponent,
    ProductEntryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    MatMenuModule,
    MatDividerModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatBadgeModule,
    MatTableModule,
    MatCardModule,
    MatSnackBarModule
  ],
  providers: [
    {
      provide: TitleStrategy,
      useClass: AppTitlePrefix
    }, CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
