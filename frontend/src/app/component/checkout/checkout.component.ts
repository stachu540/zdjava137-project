import {Component, OnInit} from '@angular/core';
import {CartService} from "../../service/cart.service";
import {CheckoutService} from "../../service/checkout.service";
import {Cart} from "../../service/model/cart";
import {PaymentMethod, PaymentMethods} from "../../service/model/order";

@Component({
  selector: 'checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  entries: Cart = []
  methods: PaymentMethods = []

  constructor(private cart: CartService, private checkout: CheckoutService) {

  }

  pay(method: PaymentMethod) {

  }

  ngOnInit(): void {
    this.cart.get().subscribe(data => this.entries = data)
    this.checkout.fetchMethods().subscribe(data => this.methods = data)
  }
}
