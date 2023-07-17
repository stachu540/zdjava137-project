import { Component } from '@angular/core';
import {IndexComponent} from "./component/index/index.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Auction';
    protected readonly IndexComponent = IndexComponent;
}
