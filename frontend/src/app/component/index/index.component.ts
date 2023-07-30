import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent {
  constructor() {

  }
  search(route: Router, query: string) {
    if (query != "" && query.trim() != "") {
      route.navigate(['search'], {
        queryParams: {
          q: query,
        },
        queryParamsHandling: "merge"
      })
    }
  }
}
