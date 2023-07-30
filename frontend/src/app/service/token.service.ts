import { Injectable } from '@angular/core';
import {LoginService} from "./login.service";
import {CookieService} from "ngx-cookie-service";
import {SessionToken} from "./model/login";
import {firstValueFrom} from "rxjs"

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private token: SessionToken | undefined

  constructor(private login: LoginService, private cookie: CookieService) {
    if (cookie.check("Session")) {
      const session = cookie.get("Session")
      login.check(session).subscribe(token => this.token)
    }
  }

  public killSession(): Promise<void> {
    if (this.token) {
      return firstValueFrom(this.login.logout(this.token?.token))
    }
    return Promise.reject("not logged in")
  }

  public create(username: String, password: String): Promise<void> {
    if (!this.token) {
      return firstValueFrom(this.login.login(username, password)).then(token => {
        this.token = token
      })
    }

    return Promise.reject("already logged in")
  }
}
