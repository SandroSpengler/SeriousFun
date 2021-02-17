import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Observable } from "rxjs";

import { TaskModel } from "../Model/TaskModel";

@Injectable({
  providedIn: "root",
})
export class ProgressTrackerService {
  httpOptions: Object;
  httpHeaders: HttpHeaders;

  url: String;

  constructor(private http: HttpClient) {
    this.url = environment.urlSpring;

    this.httpOptions = {
      headers: new Headers({
        "content-type": "application/json",
      }),
    };
  }

  getTasksSortedByDate = (): Observable<any> => {
    return this.http.get(`${this.url}sortTasks`);
  };

  getTaskDateRange = (): Observable<any> => {
    return this.http.get(
      `${environment.urlSpring}sortedTaskRange?startDate=2021-02-08T14:12:30&endDate=2021-02-15T15:00:00`
    );
  };
}
