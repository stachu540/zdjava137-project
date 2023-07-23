import {Component, Input, OnInit} from '@angular/core';
import {CategoriesService} from "../../../service/categories.service";
import {Categories} from "../../../service/model/category";

@Component({
  selector: 'category-filter',
  templateUrl: './category-filter.component.html',
  styleUrls: ['./category-filter.component.scss']
})
export class CategoryFilterComponent implements OnInit {
  @Input() id: number | undefined;
  subs: Categories = []

  constructor(private service: CategoriesService) {
  }

  ngOnInit() {
    this.service.listChildren(this.id ?? 0).subscribe(data => {
      this.subs = data
    })
  }
}
