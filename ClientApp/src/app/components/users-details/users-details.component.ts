import { Component, OnInit } from '@angular/core';
import { EQuarter } from 'src/app/enum/quarter';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.scss']
})
export class UsersDetailsComponent implements OnInit {

  constructor(private _usersService: UsersService) { }

  ngOnInit(): void {
  }

  async getUsersByFirstQuarter() {
    await this.updateUsersListTable(EQuarter.first);
  }

  async getUsersBySecondQuarter() {
    await this.updateUsersListTable(EQuarter.second);
  }

  async getUsersByThirdQuarter() {
    await this.updateUsersListTable(EQuarter.third);
  }

  async getUsersByFourthQuarter() {
    await this.updateUsersListTable(EQuarter.fourth);
  }

  async updateUsersListTable(quarter: EQuarter) {
    (await this._usersService.getUsers(quarter))
    .subscribe( data => {
      this._usersService.updateUsersList(data);
    })
  }
}
