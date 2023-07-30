import {Component, Input} from '@angular/core';
import {User} from "../../../service/model/user";
import {UserService} from "../../../service/users.service";

@Component({
  selector: 'account-close-modal',
  templateUrl: './account-close.component.html',
  styleUrls: ['./account-close.component.scss']
})
export class AccountCloseComponent {
  @Input() user: User | undefined
  password: string = ""
  constructor(private repo: UserService) {

  }

  close() {

  }
}
