import {Component, Input} from '@angular/core';
import {FormControl} from "@angular/forms";
import {ActivatedRoute, QueryParamsHandling, Router} from "@angular/router";
import {Sort} from "../../../service/model/login";
import {FloatLabelType} from "@angular/material/form-field";

@Component({
  selector: 'search-model',
  templateUrl: './search-model.component.html',
  styleUrls: ['./search-model.component.scss']
})
export class SearchModelComponent {
  @Input() query: string = ""

  constructor(readonly router: Router, readonly active: ActivatedRoute) {
    active.queryParams.subscribe(p => {
      if (p['query']) {
        this.query = p['query']
      }
    })
  }

  search() {
    this.router.navigate(['/'], {
      queryParams: { query: this.query },
      queryParamsHandling: "merge"
    })
  }
}
