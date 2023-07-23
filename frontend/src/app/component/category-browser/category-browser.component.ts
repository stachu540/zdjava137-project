import {Component, OnInit} from '@angular/core';
import {Categories} from "../../service/model/category";
import {CategoriesService} from "../../service/categories.service";

@Component({
  selector: 'category-browser',
  templateUrl: './category-browser.component.html',
  styleUrls: ['./category-browser.component.scss']
})
export class CategoryBrowserComponent implements OnInit {
  categories: Categories = []
  loading: boolean = true

  constructor(private service: CategoriesService) {
  }

  ngOnInit() {
    this.service.list().subscribe({
      next: data => {
        this.categories = data
        this.loading = false
      },
      error: console.error
    })
  }
}
