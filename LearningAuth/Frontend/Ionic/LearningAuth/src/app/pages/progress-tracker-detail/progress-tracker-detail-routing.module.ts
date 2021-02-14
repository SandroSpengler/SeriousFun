import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProgressTrackerDetailPage } from './progress-tracker-detail.page';

const routes: Routes = [
  {
    path: '',
    component: ProgressTrackerDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProgressTrackerDetailPageRoutingModule {}
