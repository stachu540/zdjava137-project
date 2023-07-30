import {Component, Input} from '@angular/core';
import {CartItem} from "../../../service/model/cart";

@Component({
  selector: 'cart-entry',
  templateUrl: './cart-entry.component.html',
  styleUrls: ['./cart-entry.component.scss']
})
export class CartEntryComponent {
  @Input({required: true}) entry: CartItem | undefined;
}
