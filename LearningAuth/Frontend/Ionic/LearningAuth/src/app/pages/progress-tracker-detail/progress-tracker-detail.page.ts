import { LiteralMapEntry } from "@angular/compiler/src/output/output_ast";
import { Component, OnInit } from "@angular/core";
import { ActionSheetController } from "@ionic/angular";

import { ActivatedRoute } from "@angular/router";
import { Observable, from } from "rxjs";
import { map, tap, mergeMap, groupBy, toArray, take } from "rxjs/operators";

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
  public showNewTask: boolean;

  public taskArray: any;
  public taskList$: Observable<TaskModel[]>;

  constructor(
    private route: ActivatedRoute,
    private progressTrackerService: ProgressTrackerService,
    public actionSheetController: ActionSheetController
  ) {
    this.routeParams = {};
    this.routeParams = this.route.snapshot.paramMap;

    this.overviewText = "";
    this.startDate = "";
    this.endDate = "";
    this.showNewTask = false;

    // this.taskArray = [new TaskModel(), new TaskModel()];
    this.taskArray = [];
  }

  ngOnInit() {
    this.overviewText = this.routeParams.get("overviewText");
    this.startDate = this.routeParams.get("startDate");
    this.endDate = this.routeParams.get("endDate");

    this.taskList$ = this.getTasks();
    this.groupTasks();
  }

  getTasks = (): Observable<TaskModel[]> => {
    return this.progressTrackerService.getSortedTaskByDueRange(
      this.startDate,
      this.endDate
    );
  };

  groupTasks = () => {
    const getTasks = this.getTasks();

    getTasks.subscribe((data) => {
      const taskSource = from(data);

      const example = taskSource.pipe(
        // goes through the elements and groups them by specifed attribute (task.group)
        groupBy((task) => task.group),
        // places them into a list of which you can do toArray(), toObject()...
        mergeMap((taskGroup) => taskGroup.pipe(toArray()))
      );

      // here you can choose how many you want to take()
      example.pipe().subscribe((data) => {
        this.taskArray.push(data);
      });
      console.log(this.taskArray);
    });
  };

  // Create Data

  createNewTask = () => {
    this.showNewTask = true;
  };

  sendCreateTask = () => {
    this.showNewTask = false;
  };

  // Action Sheet

  sortByActionSheet = async () => {
    const actionSheet = await this.actionSheetController.create({
      header: "Sort Tasks By ???",
      cssClass: "my-custom-class",
      buttons: [
        {
          text: "Delete",
          role: "destructive",
          icon: "trash",
          handler: () => {
            console.log("Delete clicked");
          },
        },
        {
          text: "Share",
          icon: "share",
          handler: () => {
            console.log("Share clicked");
          },
        },
        {
          text: "Play (open modal)",
          icon: "caret-forward-circle",
          handler: () => {
            console.log("Play clicked");
          },
        },
        {
          text: "Favorite",
          icon: "heart",
          handler: () => {
            console.log("Favorite clicked");
          },
        },
        {
          text: "Cancel",
          icon: "close",
          role: "cancel",
          handler: () => {
            console.log("Cancel clicked");
          },
        },
      ],
    });
    await actionSheet.present();
  };
}
