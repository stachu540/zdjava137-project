import {Attribute, Component, Input, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {Products} from "../../../service/model/product";
import {ProductsService} from "../../../service/products.service";
import {Sort} from "../../../service/model/login";

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  results: Products = []
  public sort = new FormControl<Sort>("asc")
  public limit = new FormControl<number>(20)
  public page = new FormControl<number>(1)
  @Input() public query: string = ""

  constructor(private route: ActivatedRoute, private search: ProductsService) {
    this.route.queryParams.subscribe(params => {
      this.query = params['query']
    })
  }

  ngOnInit(): void {
  }
}
