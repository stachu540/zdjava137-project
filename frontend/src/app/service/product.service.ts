import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User, UserCreate, Users, UserUpdate} from "./model/user";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // TODO: Authorization header
  constructor(private http: HttpClient) { }

  public list(limit: number = 20, page: number = 1, sort: "asc" | "desc"): Observable<Users> {
    return this.http.get<Users>("/api/users", {
      params: { limit, page, sort }
    })
  }

  public create(dto: UserCreate): Observable<User> {
    return this.http.post<User>("/api/users", dto)
  }

  public get(id: number): Observable<User> {
    return this.http.get<User>(`/api/users/${id}`)
  }

  public update(id: number, dto: UserUpdate): Observable<User> {
    return this.http.patch<User>(`/api/users/${id}`, dto)
  }

  public delete(id: number): Observable<any> {
    return this.http.delete(`/api/users/${id}`)
  }
}
