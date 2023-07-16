import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {User, UserCreate, Users, UserUpdate} from "./model/user";
import {Cart, CartItemDTO} from "./model/cart";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  public get(): Observable<Cart> {
    return this.http.get<Cart>(`/api/cart`)
  }

  public update(dto: CartItemDTO): Observable<Cart> {
    return this.http.patch<Cart>(`/api/cart`, dto)
  }

  public delete(body: number[]): Observable<any> {
    return this.http.delete(`/api/cart`, { body })
  }
}
