import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  query: string = "";

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.query = params['q']
    })
  }

  search(route: Router, query: string) {
    route.navigate(['search'], {
      queryParams: {
        q: query,
      },
      queryParamsHandling: "merge"
    })
  }
}
