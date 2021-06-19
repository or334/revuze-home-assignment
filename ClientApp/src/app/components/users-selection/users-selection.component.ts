import { OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IUser } from 'src/app/dto/user';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-users-selection',
  templateUrl: './users-selection.component.html',
  styleUrls: ['./users-selection.component.scss']
})
export class UsersSelectionComponent implements OnInit, OnDestroy {

  user: IUser;
  private _unSub: Subscription;

  constructor(private _usersService: UsersService) { }

  ngOnInit(): void {
    this._initSub();
  }

  // Get the user data when it's been picked from the users table.
  private _initSub() {
    this._unSub = this._usersService.chosenUser$
    .subscribe (data => {
      this.user = data;
    });
  }

  ngOnDestroy(): void {
    // In order to prevent memory leak
    this._unSub.unsubscribe();
  }
}
