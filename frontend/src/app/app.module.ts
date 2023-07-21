import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {IndexComponent} from "./component/index/index.component";
import {CartComponent} from "./component/cart/cart.component";
import {CategoryComponent} from "./component/category/category.component";
import {LoginComponent} from "./component/login/login.component";
import {OrderComponent} from "./component/order/order.component";
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
import {AccountCloseComponent as UserAccountClose} from "./component/settings/account-close/account-close.component";
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
import {SearchModelComponent} from './component/_model/search-model/search-model.component';
import {ProductTileComponent} from './component/_model/product-tile/product-tile.component';
import {ProductRowComponent} from './component/_model/product-row/product-row.component';
import {CartEntryComponent} from './component/_model/cart-entry/cart-entry.component';
import {CheckoutComponent} from './component/_model/checkout/checkout.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {MatDividerModule} from "@angular/material/divider";
import {LogoutComponent} from './component/_base/logout/logout.component';
import {MatDialogModule} from "@angular/material/dialog";
import {SearchComponent} from "./component/_model/search/search.component";
import {MatGridListModule} from "@angular/material/grid-list";


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    CartComponent,
    CategoryComponent,
    LoginComponent,
    OrderComponent,
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
    SearchModelComponent,
    ProductTileComponent,
    ProductRowComponent,
    CartEntryComponent,
    CheckoutComponent,
    LogoutComponent,
    SearchComponent
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
    MatGridListModule
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
