import { Component, OnInit } from "@angular/core";

import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-progress-tracker-detail",
  templateUrl: "./progress-tracker-detail.page.html",
  styleUrls: ["./progress-tracker-detail.page.scss"],
})
export class ProgressTrackerDetailPage implements OnInit {
  public routeParams: any;
  public authorName: string;
  public startDate: string;
  public endDate: string;

  constructor(private route: ActivatedRoute) {
    this.routeParams = {};
    this.routeParams = this.route.snapshot.paramMap;

    this.authorName = "";
    this.startDate = "";
    this.endDate = "";
  }

  ngOnInit() {
    this.authorName = this.routeParams.get("authorName");
    this.startDate = this.routeParams.get("startDate");
    this.endDate = this.routeParams.get("endDate");

    console.log(this.authorName);
    console.log(this.startDate);
    console.log(this.endDate);
  }
}
