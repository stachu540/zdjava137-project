import {Component} from '@angular/core';
import {TokenService} from "../../../service/token.service";

@Component({
  selector: 'dialog-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss'],
})
export class LogoutComponent {
  constructor(private token: TokenService) {
  }

  public async logout() {
    return await this.token.killSession()
  }
}
