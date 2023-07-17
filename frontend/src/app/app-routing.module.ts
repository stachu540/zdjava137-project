import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IndexComponent} from "./component/index/index.component";
import {CartComponent} from "./component/cart/cart.component";
import {CategoryComponent} from "./component/category/category.component";
import {LoginComponent} from "./component/login/login.component";
import {OrderComponent} from "./component/order/order.component";
import {ProductsComponent as UserProducts} from "./component/settings/products/products.component";
import {OrdersComponent as UserOrders} from "./component/settings/orders/orders.component";
import {AccountComponent as UserAccount} from "./component/settings/account/account.component";
import {NewProductComponent as UserCreateProduct} from "./component/settings/new-product/new-product.component";
import {DashboardComponent as AdminDashboard } from "./component/admin/dashboard/dashboard.component";
import {ProductsComponent as AdminProducts} from "./component/admin/products/products.component";
import {ProductCommentsComponent as AdminProductComments} from "./component/admin/product-comments/product-comments.component";
import {UsersComponent as AdminUsers} from "./component/admin/users/users.component";
import {CategoriesComponent as AdminCategories} from "./component/admin/categories/categories.component";
import {AddressSettingsComponent as UserAddress} from "./component/settings/address-settings/address-settings.component";
import {AccountCloseComponent as UserAccountClose} from "./component/settings/account-close/account-close.component";
import {PaymentsComponent as UserPayments} from "./component/settings/payments/payments.component";
import {ProductComponent} from "./component/product/product.component";
import {SettingsComponent as AdminSettings} from "./component/admin/settings/settings.component";
import {PaymentsComponent as AdminPayments} from "./component/admin/payments/payments.component";
import {ProductCommentsComponent} from "./component/settings/product-comments/product-comments.component";
import {PaymentDetailsComponent} from "./component/payment-details/payment-details.component";
import {RegisterComponent} from "./component/register/register.component";

const routes: Routes = [
  {
    path: "",
    component: IndexComponent
  },
  {
    path: "cart",
    component: CartComponent
  },
  {
    path: "category",
    component: CategoryComponent,
    children: [
      {
        path: "{id}",
        component: CategoryComponent,
      }
    ]
  },
  {
    path: "payment/{id}",
    component: PaymentDetailsComponent
  },
  {
    path: "order",
    component: OrderComponent
  },
  {
    path: "product/{id}",
    component: ProductComponent,
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "account",
    redirectTo: "/account/settings",
  },
  {
    path: "account/settings",
    component: UserAccount,
    children: [
      {
        path: "address",
        component: UserAddress,
      }
    ]
  },
  {
    path: "account/close",
    component: UserAccountClose
  },
  {
    path: "account/orders",
    component: UserOrders,
  },
  {
    path: "account/payments",
    component: UserPayments,
  },
  {
    path: "account/products",
    component: UserProducts,
    children: [
      {
        path: "new",
        component: UserCreateProduct
      },
      {
        path: "{id}/comments",
        component: ProductCommentsComponent
      }
    ]
  },
  {
    path: "admin",
    redirectTo: "/admin/dashboard",
  },
  {
    path: "admin/dashboard",
    component: AdminDashboard
  },
  {
    path: "admin/users",
    component: AdminUsers
  },
  {
    path: "admin/categories",
    component: AdminCategories,
  },
  {
    path: "admin/settings",
    component: AdminSettings
  },
  {
    path: "admin/payments",
    component: AdminPayments
  },
  {
    path: "admin/products",
    component: AdminProducts,
    children: [
      {
        path: "{id}/comments",
        component: AdminProductComments
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
