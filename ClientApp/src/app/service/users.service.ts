import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { catchError, retry } from 'rxjs/internal/operators';
import { USERS_API } from '../consts/consts';
import { IUser } from '../dto/user';
import { IUsersList } from '../dto/users-list';
import { EQuarter } from '../enum/quarter';

@Injectable()
export class UsersService {
constructor(private _http: HttpClient) { }

  private _chosenUser$ = new Subject<IUser>();
  private _usersList$ = new Subject<IUsersList>();

  public get chosenUser$() {
    return this._chosenUser$;
  }

  public get usersList$() {
    return this._usersList$;
  }

  /*
    Get users methods - makes a HTTP requests to get the
    list of the users, and returns them.
  */
  async getUsers(quarter: EQuarter) {
    return await this._http.get<IUsersList>(`${USERS_API}?quarter=${quarter}`).pipe(
      retry(3), catchError(this.handleError<IUsersList>('getUsers')));
  }

  updateUser(user: IUser) {
    this._chosenUser$.next(user);
  }

  updateUsersList(usersList: IUsersList) {{
      this._usersList$.next(usersList);
    }
  }

  /**
    * Handle Http operation that failed.
    * Let the app continue.
    * @param operation - name of the operation that failed
    * @param result - optional value to return as the observable result
  */
   private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  private log(message: string) {
    console.log(message);
  }
}
