import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Observable } from "rxjs";
import { map, tap } from "rxjs/operators";

import { TaskModel } from "../Model/TaskModel";

@Injectable({
  providedIn: "root",
})
export class ProgressTrackerService {
  httpOptions: Object;
  httpHeaders: HttpHeaders;

  taskModel: TaskModel;
  url: String;

  constructor(private http: HttpClient) {
    this.url = environment.urlSpringWindows;

    this.httpOptions = {
      headers: new Headers({
        "content-type": "application/json",
      }),
    };
  }

  getTasksSortedByDate = (): Observable<any> => {
    return this.http.get(`${this.url}sortTasks`);
  };

  getTaskCreatedByDateRange = (
    startDate: string,
    endDate: string
  ): Observable<any> => {
    return this.http.get(
      `${environment.urlSpringWindows}sortedTaskByCreatedRange?startDate=${startDate}&endDate=${endDate}`
    );
  };

  getSortedTaskByDueRange = (
    startDate: string,
    endDate: string
  ): Observable<any> => {
    return this.http.get(
      `${environment.urlSpringWindows}sortedTaskByDueRange?startDate=${startDate}&endDate=${endDate}`
    );
  };

  postNewTask = (dueDate: string, group: string): Observable<any> => {
    return this.http.post(
      `${environment.urlSpringWindows}task`,
      this.fillTaskModel(dueDate, group)
    );
  };

  deleteTask = (id: string): Observable<any> => {
    return this.http.delete(`${environment.urlSpringWindows}task?taskId=${id}`);
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

  fillTaskModel = (dueDate: string, group: string): TaskModel => {
    this.taskModel = new TaskModel();

    this.taskModel.author = "Sandro";
    this.taskModel.description = "Not displayed yet";
    this.taskModel.createdDate = this.generateISODate(0);
    this.taskModel.dueDate = dueDate;
    this.taskModel.group = group;

    return this.taskModel;
  };
}
