import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProgressTrackerPage } from './progress-tracker.page';

const routes: Routes = [
  {
    path: '',
    component: ProgressTrackerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProgressTrackerPageRoutingModule {}
