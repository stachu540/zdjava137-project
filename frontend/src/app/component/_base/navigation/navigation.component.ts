import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {LogoutComponent} from "../logout/logout.component";
import {Router} from "@angular/router";
import {CartService} from "../../../service/cart.service";
import {Cart} from "../../../service/model/cart";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  cart: Cart = []

  constructor(private dialog: MatDialog, private service: CartService, public router: Router) {
  }

  ngOnInit() {
    this.service.get().subscribe({
      next: data => this.cart = data,
      error: console.error
    })
  }

  logout() {
    const logout = this.dialog.open(LogoutComponent)
  }

  items() {
    return this.cart.length
  }
}
