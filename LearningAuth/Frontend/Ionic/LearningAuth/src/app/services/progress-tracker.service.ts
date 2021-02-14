import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Observable } from "rxjs";

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
}
