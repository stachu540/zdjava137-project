import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product, ProductCreate, Products, ProductUpdate} from "./model/product";
import {Sort} from "./model/login";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private http: HttpClient) {
  }

  public list(limit: number = 20, page: number = 1, sort: Sort = "asc"): Observable<Products> {
    return this.http.get<Products>("/api/product", {
      params: {limit, page, sort}
    })
  }

  public find(query: string, limit: number = 20, page: number = 1, sort: Sort = "asc"): Observable<Products> {
    return this.http.get<Products>("/api/product", {
      params: {query, limit, page, sort}
    })
  }

  public create(dto: ProductCreate): Observable<Product> {
    return this.http.post<Product>("/api/product", dto)
  }

  public get(id: number): Observable<Product> {
    return this.http.get<Product>(`/api/product/${id}`)
  }

  public update(id: number, dto: ProductUpdate): Observable<Product> {
    return this.http.patch<Product>(`/api/product/${id}`, dto)
  }

  public delete(id: number): Observable<any> {
    return this.http.delete(`/api/product/${id}`)
  }
}
