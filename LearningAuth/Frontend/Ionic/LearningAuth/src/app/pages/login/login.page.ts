import { Component, OnInit } from "@angular/core";

import { LoginService } from "../../services/login.service";
import { Observable } from "rxjs";
import { tap, map } from "rxjs/operators";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  public userName: string;
  public userPassword: string;
  public userEmail: string;

  constructor(private loginService: LoginService) {
    this.userName = "";
    this.userPassword = "";
    this.userEmail = "";
  }

  ngOnInit() {}

  public loginUser = (
    userName: string,
    userPassword: string,
    userEmail: string
  ): Observable<any> => {
    return this.loginService.sendLoginData(userName, userPassword, userEmail);
  };

  public testFunction = (): void => {
    if (this.checkIfInputsAreFilled()) {
      this.loginUser(this.userName, this.userPassword, this.userEmail)
        .pipe(
          tap((data) => {
            console.log(data.token);
          })
        )
        .subscribe();

      this.clearData();
    } else {
      alert("Fill all fields");
    }
  };

  private clearData = (): void => {
    this.userName = "";
    this.userPassword = "";
    this.userEmail = "";
  };

  private checkIfInputsAreFilled = (): boolean => {
    if (
      this.userName !== "" &&
      this.userPassword !== "" &&
      this.userEmail !== ""
    ) {
      return true;
    } else {
      return false;
    }
  };
}
