import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { environment } from "../../environments/environment";
import { Observable } from "rxjs";
import { tap, map } from "rxjs/operators";

import { User } from "../../Models/UserModel/User";

@Injectable({
  providedIn: "root",
})
export class LoginService {
  private url: string;

  private httpOptions: object;
  private user: User;

  constructor(private http: HttpClient) {
    this.url = environment.url;

    this.httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      }),
    };
  }

  sendLoginData = (
    userName: string,
    userPassword: string,
    userEmail: string
  ): Observable<any> => {
    return this.http.post(
      `${this.url}UsersAuth/Login`,
      this.fillUser(userName, userPassword, userEmail)
      // Allows to actually look inside the response not only the response data
      // { observe: "response" }
    );
  };

  public fillUser = (
    userName: string,
    userPassword: string,
    email: string
  ): User => {
    this.user = new User();

    this.user.userName = userName;
    this.user.password = userPassword;
    this.user.Email = email;

    return this.user;
  };
}
