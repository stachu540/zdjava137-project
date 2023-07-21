import {Component, OnInit} from '@angular/core';
import {Products} from "../../service/model/product";
import {Categories} from "../../service/model/category";
import {ProductsService} from "../../service/products.service";
import {CategoriesService} from "../../service/categories.service";
import {CookieService} from "ngx-cookie-service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  products: Products = [
    {
      id: 1,
      avg_rate: 4.19,
      description: "",
      name: "",
      images: [],
      price_per_unit: 9.5,
      units: 100,
      seller: {
        id: 100,
        username: "",
        created_at: "",
        email: undefined,
        permission: undefined,
        updated_at: undefined
      }
    },
    {
      id: 16,
      avg_rate: 5,
      description: "",
      name: "",
      images: [],
      price_per_unit: 14.99,
      units: 1000,
      seller: {
        id: 100,
        username: "",
        created_at: "",
        email: undefined,
        permission: undefined,
        updated_at: undefined
      }
    }
  ]
  categories: Categories = [
    {
      id: 1,
      name: "",
      description: "",
      parent: undefined
    },
    {
      id: 2,
      name: "",
      description: "",
      parent: undefined
    }
  ]
  query: string = ""

  constructor(
    private product: ProductsService,
    private category: CategoriesService,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit() {
    this.route.queryParams.subscribe(q => {
      this.query = q['query']
    })
  }
}
