import { ThisReceiver } from '@angular/compiler';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IUser } from 'src/app/dto/user';
import { IUsersList } from 'src/app/dto/users-list';
import { EQuarter } from 'src/app/enum/quarter';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit, OnDestroy {

  users: IUser[];
  value = '';
  private _unSub: Subscription;

  constructor(private _usersService: UsersService) { }

  ngOnInit(): void {
    this._initUsers();
  }

  // Get the users list when the component is loading.
  private async _initUsers() {
    this._usersService.getUsers(EQuarter.first)
    .subscribe( data => {
      this.users= data.users;
    })

    this._unSub = this._usersService.usersList$
    .subscribe (data => {
      this.users = data.users;
    });
  }

  // Trasnfer the chosen user data to the users table component.
  pickUser (user: IUser) {
    this._usersService.updateUser(user);
  }

  findUser() {
    if (this.value) {
      const user = this.users.filter(u => u.name.includes(this.value));
      this._usersService.updateUser(user[0]);
    }
  }

  ngOnDestroy(): void {
    // In order to prevent memory leak
    this._unSub.unsubscribe();
  }
}
