import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Order, Pay, PaymentMethods} from "./model/order";

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  constructor(private http: HttpClient) {
  }

  fetchMethods() {
    return this.http.get<PaymentMethods>("/checkout/methods")
  }

  pay(data: Pay) {
    return this.http.post<Order>("/checkout/pay", data)
  }
}
