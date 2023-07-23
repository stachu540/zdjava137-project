import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Cart, CartItemDTO} from "./model/cart";
import {HttpClient} from "@angular/common/http";
import {TokenService} from "./token.service";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(private http: HttpClient, private token: TokenService) {
  }

  public get(): Observable<Cart> {
    return new Observable(subscriber => {
      subscriber.next([{
        quantity: 3,
        product: {
          id: 312541,
          name: "Testing Item",
          description: "Testing",
          seller: {
            id: 684132,
            updated_at: "",
            created_at: "",
            permission: "USER",
            email: "",
            username: "test"
          },
          price_per_unit: 2.69,
          units: 400,
          avg_rate: 4.18,
          images: [
            "https://img.freepik.com/free-photo/cardboard-box-isolated_125540-652.jpg"
          ]
        }
      }])
      subscriber.complete()
    })
    // return this.http.get<Cart>(`/api/cart`)
  }

  public update(dto: CartItemDTO): Observable<Cart> {
    return this.http.patch<Cart>(`/api/cart`, dto)
  }

  public delete(body: number[]): Observable<any> {
    return this.http.delete(`/api/cart`, {body})
  }
}
