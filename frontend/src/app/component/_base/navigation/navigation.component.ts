import {Component} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {LogoutComponent} from "../logout/logout.component";
import {Router} from "@angular/router";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  constructor(public dialog: MatDialog, public router: Router) {
  }

  logout() {
    const logout = this.dialog.open(LogoutComponent)
  }
}
