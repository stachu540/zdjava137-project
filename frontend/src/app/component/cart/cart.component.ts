import {Component, OnInit} from '@angular/core';
import {Cart} from "../../service/model/cart";
import {ActivatedRoute} from "@angular/router";
import {CheckoutService} from "../../service/checkout.service";
import {CartService} from "../../service/cart.service";

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  items: Cart = []

  constructor(private route: ActivatedRoute, private checkout: CheckoutService, private cart: CartService) {
  }

  ngOnInit() {
    this.cart.get().subscribe({
      next: data => {
        this.items = data
      },
      error: console.error
    })
  }

  totalCost() {
    return this.items.map(item => item.product.price_per_unit * item.quantity).reduce((acc, v) => acc + v, 0)
  }
}
