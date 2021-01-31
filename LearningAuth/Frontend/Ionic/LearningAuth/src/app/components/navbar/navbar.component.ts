import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    this.checkForLogin();
  }

  checkForLogin = (): boolean => {
    if (sessionStorage.getItem("token")) {
      console.log("true");
      return true;
    } else {
      return false;
    }
  };

  logout = (): void => {
    sessionStorage.removeItem("token");
  };
}
