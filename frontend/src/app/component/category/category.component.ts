import {Component, OnInit} from '@angular/core';
import {Products} from "../../service/model/product";
import {ProductsService} from "../../service/products.service";
import {ActivatedRoute} from "@angular/router";
import {map} from "rxjs";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {CategoriesService} from "../../service/categories.service";
import {Paginated} from "../../service/model/misc";
import {Sort} from "../../service/model/login";
import {PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  products: Products = { data: [], entries: 0 }
  id: number = -1
  page = 1
  limit = 25
  limits = [ 10, 25, 50, 100 ]
  loading = true

  constructor(private prod: CategoriesService, private router: ActivatedRoute) {
  }

  ngOnInit() {
    this.router.paramMap.pipe(map(it => it.get('id'))).subscribe(id => {
      this.id = parseInt(id ?? "-1")
      this.prod.fetch(this.id, this.page, this.limit).subscribe(data => {
        this.products = data;
        this.loading = false;
      })
    })
  }

  update(event: PageEvent) {
    this.page = event.pageIndex + 1
    this.limit = event.pageSize
    this.loading = true

    this.prod.fetch(this.id, this.page, this.limit).subscribe({
      next: data => {
        this.products = data;
        this.loading = false;
      },
      error: console.error
    })
  }
}
