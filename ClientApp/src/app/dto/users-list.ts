import { IUser } from "./user";

export interface IUsersList {
  from: number;
  to: number;
  users: IUser[];
}
