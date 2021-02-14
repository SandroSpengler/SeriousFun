import { Component, OnInit } from "@angular/core";
import { AuthguardGuard } from "../../Authentification/authguard.guard";
import { Router, NavigationStart } from "@angular/router";

import { ProgressTrackerService } from "../../services/progress-tracker.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-progress-tracker",
  templateUrl: "./progress-tracker.page.html",
  styleUrls: ["./progress-tracker.page.scss"],
})
export class ProgressTrackerPage implements OnInit {
  public loggedIn: boolean;
  public title: string;

  public sortedDates$: Observable<any>;

  private exampleArray: string[];

  constructor(
    private router: Router,
    private AuthGuard: AuthguardGuard,
    private progressTrackerService: ProgressTrackerService
  ) {
    this.title = "Welcome to the Progress Tracker";

    this.sortedDates$ = this.getTasksSortedByDate();

    this.exampleArray = ["1", "2"];
  }

  ngOnInit() {
    this.checkForLogInOnReload();
    this.getTasksSortedByDate().subscribe((data) => {
      console.log(data);
    });
  }

  getTasksSortedByDate = (): Observable<any> => {
    return this.progressTrackerService.getTasksSortedByDate();
  };

  checkForLogInOnReload = (): void => {
    this.router.events.subscribe((event) => {
      // if (event instanceof NavigationStart) {
      // console.log(event);
      //   this.loggedIn = this.AuthGuard.checkforLogin();
      // }
      this.loggedIn = true;
    });
  };
}
