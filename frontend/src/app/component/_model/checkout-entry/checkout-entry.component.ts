import {Component, Input} from '@angular/core';
import {CartItem} from "../../../service/model/cart";

@Component({
  selector: 'checkout-entry',
  templateUrl: './checkout-entry.component.html',
  styleUrls: ['./checkout-entry.component.scss']
})
export class CheckoutEntryComponent {
  @Input({required: true}) entry: CartItem | undefined;
}
