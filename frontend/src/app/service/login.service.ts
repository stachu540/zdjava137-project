import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {SessionToken} from "./model/login";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {
  }

  public login(username: String, password: String): Observable<SessionToken> {
    return this.http.post<SessionToken>("/api/login", { username, password })
  }
  public check(token: String): Observable<SessionToken> {
    return this.http.get<SessionToken>("/api/login", {
        headers: {
          Authorization: `${token}`
        }
      })
  }

  public logout(token: String): Observable<any> {
    return this.http.delete<any>("/api/login", {
      headers: {
        Authorization: `${token}`
      }
    })
  }
}
