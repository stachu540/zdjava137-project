import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {LoginService} from "../../service/login.service";
import {parseJson} from "@angular/cli/src/utilities/json-file";
import {HttpErrorResponse, HttpResponseBase} from "@angular/common/http";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = ""
  password: string = ""

  constructor(private router: ActivatedRoute, private service: LoginService, private _sb: MatSnackBar) {
  }

  login() {
    this.service.login(this.username, this.password).subscribe({
      next: session => {

      },
      error: err => {
        console.error(err)
        if (err instanceof HttpErrorResponse) {
          this._sb.open(err.error, "Dismiss", {
            duration: 5000
          })
        }
      }
    })
  }
}
