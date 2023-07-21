import { Component } from '@angular/core';
import {Categories} from "../../service/model/category";
import {Products} from "../../service/model/product";
import {ProductsService} from "../../service/products.service";
import {CategoriesService} from "../../service/categories.service";
import {Router} from "@angular/router";

@Component({
  selector: 'category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {
  categories: Categories = []
  products: Products = []

  constructor(private cat: CategoriesService, private prod: ProductsService, private router: Router) {

  }
}
