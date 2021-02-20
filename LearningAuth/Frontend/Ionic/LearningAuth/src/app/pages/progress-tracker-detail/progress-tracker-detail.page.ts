import { Component, OnInit } from "@angular/core";

import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { map, tap } from "rxjs/operators";

import { TaskModel } from "../../Model/TaskModel";
import { ProgressTrackerService } from "../../services/progress-tracker.service";

@Component({
  selector: "app-progress-tracker-detail",
  templateUrl: "./progress-tracker-detail.page.html",
  styleUrls: ["./progress-tracker-detail.page.scss"],
})
export class ProgressTrackerDetailPage implements OnInit {
  public routeParams: any;
  public overviewText: string;
  public startDate: string;
  public endDate: string;

  public taskArray: TaskModel[];
  public taskList$: Observable<TaskModel[]>;

  constructor(
    private route: ActivatedRoute,
    private progressTrackerService: ProgressTrackerService
  ) {
    this.routeParams = {};
    this.routeParams = this.route.snapshot.paramMap;

    this.overviewText = "";
    this.startDate = "";
    this.endDate = "";

    this.taskArray = [new TaskModel(), new TaskModel()];
  }

  ngOnInit() {
    this.overviewText = this.routeParams.get("overviewText");
    this.startDate = this.routeParams.get("startDate");
    this.endDate = this.routeParams.get("endDate");

    this.taskList$ = this.getTasks();
  }

  getTasks = (): Observable<TaskModel[]> => {
    return this.progressTrackerService
      .getSortedTaskByDueRange(this.startDate, this.endDate)
      .pipe(
        tap((data) => {
          console.log(data);
        })
      );
  };
}
