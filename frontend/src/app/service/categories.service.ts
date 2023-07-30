import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Categories, Category, CategoryCreate, CategoryUpdate} from "./model/category";
import {Products} from "./model/product";

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) {
  }

  public list(): Observable<Categories> {
    return this.http.get<Categories>("/api/categories")
  }

  public listChildren(id: number): Observable<Categories> {
    return this.http.get<Categories>(`/api/categories/${id}/children`)
  }

  public fetch(id: number, page: number = 1, limit: number = 20): Observable<Products> {
    return this.http.get<Products>(`/api/categories/${id}/products`, {
      params: { page, limit }
    })
  }

  public create(dto: CategoryCreate): Observable<Category> {
    return this.http.post<Category>("/api/categories", dto)
  }

  public get(id: number): Observable<Category> {
    return this.http.get<Category>(`/api/categories/${id}`)
  }

  public update(id: number, dto: CategoryUpdate): Observable<Category> {
    return this.http.patch<Category>(`/api/categories/${id}`, dto)
  }

  public delete(id: number): Observable<any> {
    return this.http.delete(`/api/categories/${id}`)
  }
}
