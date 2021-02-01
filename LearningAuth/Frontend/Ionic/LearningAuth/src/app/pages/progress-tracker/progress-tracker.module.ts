import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { ProgressTrackerPageRoutingModule } from "./progress-tracker-routing.module";

import { ProgressTrackerPage } from "./progress-tracker.page";

import { StandardViewComponent } from "../../components/standard-view/standard-view.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProgressTrackerPageRoutingModule,
  ],
  declarations: [ProgressTrackerPage, StandardViewComponent],
})
export class ProgressTrackerPageModule {}
