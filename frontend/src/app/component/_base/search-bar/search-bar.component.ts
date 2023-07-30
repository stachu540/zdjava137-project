import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  @Input() query: string = ""
  @Input() action: (route: Router, query: string) => void = (route, query) => {
  }

  constructor(private route: Router) {

  }

  execute() {
    this.action(this.route, this.query)
  }
}
