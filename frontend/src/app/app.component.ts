import {Component, OnInit} from '@angular/core';
import {ProductsService} from "./service/products.service";
import {CategoriesService} from "./service/categories.service";
import {Products} from "./service/model/product";
import {Categories} from "./service/model/category";
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private cookies: CookieService) {
  }
}
