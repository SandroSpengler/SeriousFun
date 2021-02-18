import { Component, OnInit } from "@angular/core";
import { Router, NavigationStart } from "@angular/router";
import { AuthguardGuard } from "../../Authentification/authguard.guard";

import { Observable } from "rxjs";
import { take, first, map, tap } from "rxjs/operators";

import { ThrowStmt } from "@angular/compiler";

import { ProgressTrackerService } from "../../services/progress-tracker.service";
import { TaskModel } from "../../Model/TaskModel";

@Component({
  selector: "app-progress-tracker",
  templateUrl: "./progress-tracker.page.html",
  styleUrls: ["./progress-tracker.page.scss"],
})
export class ProgressTrackerPage implements OnInit {
  public loggedIn: boolean;
  public title: string;

  public sortedDates$: Observable<any>;
  public upNext: TaskModel[];

  private exampleArray: Object[];

  constructor(
    private router: Router,
    private AuthGuard: AuthguardGuard,
    private progressTrackerService: ProgressTrackerService
  ) {
    this.title = "Welcome to the Progress Tracker";
    this.upNext = [];

    // this.exampleArray = ["1", "2"];
    this.exampleArray = [];
  }

  ngOnInit() {
    // Checking Authentification on Init
    this.checkForLogInOnReload();

    // Displaying Data on Init
    this.sortedDates$ = this.getTasksSortedByDate();

    this.getTaskByCreatedByDateRange(
      this.generateISODate(-10),
      this.generateISODate(0)
    ).subscribe((data) => {
      console.log(data);
    });

    this.pushIntoUpNext().subscribe();
  }

  // Service Requests

  getTasksSortedByDate = (): Observable<any> => {
    return this.progressTrackerService.getTasksSortedByDate();
  };

  getTaskByCreatedByDateRange = (
    startDate: string,
    endDate: string
  ): Observable<any> => {
    return this.progressTrackerService.getTaskCreatedByDateRange(
      startDate,
      endDate
    );
  };

  // Working with Data

  pushIntoUpNext = (): Observable<any> => {
    return this.getTasksSortedByDate().pipe(
      map((data: TaskModel[]) => {
        // data.forEach((element) => {
        //   this.upNext.push(element);
        // });

        for (let i = 0; i < 3; i++) {
          this.upNext.push(data[i]);
        }

        return this.upNext;
      })
    );
  };

  generateISODate = (dateOffset: number): string => {
    let date = new Date();

    if (dateOffset > 0) {
      date.setDate(date.getDate() + dateOffset);
    } else {
      date.setDate(date.getDate() + dateOffset);
    }

    return date.toISOString();
  };

  // Authentification

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
