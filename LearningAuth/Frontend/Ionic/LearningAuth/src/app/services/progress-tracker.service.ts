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
}
