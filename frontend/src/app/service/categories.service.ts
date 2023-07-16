import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Categories, Category, CategoryCreate, CategoryUpdate} from "./model/category";

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) {
  }

  public list(limit: number = 20, page: number = 1, sort: "asc" | "desc"): Observable<Categories> {
    return this.http.get<Categories>("/api/categories", {
      params: {limit, page, sort}
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
