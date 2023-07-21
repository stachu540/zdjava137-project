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
import {ProductCommentsComponent} from "./component/settings/product-comments/product-comments.component";
import {PaymentDetailsComponent} from "./component/payment-details/payment-details.component";
import {RegisterComponent} from "./component/register/register.component";
import {CategorySingletonTitle, CommentsOfProductTitle, NewProductTitle, ProductSingletonTitle} from "./titile";
import {SearchComponent} from "./component/_model/search/search.component";

const routes: Routes = [
  {
    path: "",
    component: IndexComponent
  },
  {
    path: "cart",
    title: "Cart",
    component: CartComponent
  },
  {
    title: "Categories",
    path: "category",
    component: CategoryComponent,
    children: [
      {
        title: CategorySingletonTitle,
        path: ":id",
        component: CategoryComponent,
      }
    ]
  },
  {
    path: "payment/:id",
    title: "Payment Details",
    component: PaymentDetailsComponent
  },
  {
    path: "order",
    title: "Order Details",
    component: OrderComponent
  },
  {
    path: "product/:id",
    title: ProductSingletonTitle,
    component: ProductComponent,
  },
  {
    path: "login",
    title: "Login",
    component: LoginComponent
  },
  {
    path: "register",
    title: "Register",
    component: RegisterComponent
  },
  {
    path: "account",
    pathMatch: "full",
    redirectTo: "/account/settings",
  },
  {
    path: "account/settings",
    title: "Account Settings",
    component: UserAccount,
    children: [
      {
        path: "address",
        title: "Account Settings - Address",
        component: UserAddress,
      }
    ]
  },
  {
    path: "account/close",
    title: "Close Account",
    component: UserAccountClose
  },
  {
    path: "account/orders",
    title: "Your Orders",
    component: UserOrders,
  },
  {
    path: "account/payments",
    title: "Your Payments",
    component: UserPayments,
  },
  {
    path: "account/products",
    title: "Your Products",
    component: UserProducts,
    children: [
      {
        path: "new",
        title: NewProductTitle,
        component: UserCreateProduct
      },
      {
        path: ":id/comments",
        title: CommentsOfProductTitle,
        component: ProductCommentsComponent
      }
    ]
  },
  {
    path: "admin",
    pathMatch: "full",
    redirectTo: "/admin/dashboard",
  },
  {
    path: "admin/dashboard",
    title: "Admin - Dashboard",
    component: AdminDashboard
  },
  {
    path: "admin/users",
    title: "Admin - Users",
    component: AdminUsers
  },
  {
    path: "admin/categories",
    title: "Admin - Categories",
    component: AdminCategories,
  },
  {
    path: "admin/settings",
    title: "Admin - Settings",
    component: AdminSettings
  },
  {
    path: "admin/payments",
    title: "Admin - Payments",
    component: AdminPayments
  },
  {
    path: "admin/products",
    title: "Admin - Products",
    component: AdminProducts,
    children: [
      {
        path: ":id/comments",
        title: CommentsOfProductTitle,
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
