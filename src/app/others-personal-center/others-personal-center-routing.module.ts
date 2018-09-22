import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { WatchReportLabelComponent } from './watch-report-label/watch-report-label.component';
import { Report2Component } from './report/report.component';
import { WatchReportArchiveComponent } from './watch-report-archive/watch-report-archive.component';

const routes: Routes = [
  {
    path: '',
    component: ProfilePageComponent,
    children: [{
      path: '',
      redirectTo: 'reportshow',
      pathMatch: 'full'
    },
      {
        path: 'reportshow',
        component: Report2Component,
      },
      {
        path: 'watch/:name',
        component: WatchReportLabelComponent,
      },
      {
        path: 'archive/:data',
        component: WatchReportArchiveComponent,
      }]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OthersPersonalCenterRoutingModule { }
