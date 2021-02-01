import { Component, OnInit } from "@angular/core";
import { AuthguardGuard } from "../../Authentification/authguard.guard";
import { Router, NavigationStart } from "@angular/router";

@Component({
  selector: "app-progress-tracker",
  templateUrl: "./progress-tracker.page.html",
  styleUrls: ["./progress-tracker.page.scss"],
})
export class ProgressTrackerPage implements OnInit {
  private loggedIn: boolean;

  constructor(private router: Router, private AuthGuard: AuthguardGuard) {}

  ngOnInit() {
    this.checkForLogInOnReload();
  }

  checkForLogInOnReload = (): void => {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        // console.log(event);
        this.loggedIn = this.AuthGuard.checkforLogin();
      }
    });
  };
}
