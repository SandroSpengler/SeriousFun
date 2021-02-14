import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProgressTrackerDetailPageRoutingModule } from './progress-tracker-detail-routing.module';

import { ProgressTrackerDetailPage } from './progress-tracker-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProgressTrackerDetailPageRoutingModule
  ],
  declarations: [ProgressTrackerDetailPage]
})
export class ProgressTrackerDetailPageModule {}
