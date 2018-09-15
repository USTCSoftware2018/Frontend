import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import {WatchReportLabelComponent} from './watch-report-label/watch-report-label.component';
import {Report2Component} from './report/report.component';

const routs: Routes = [
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
      }]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routs)
  ],
  exports: [
    RouterModule
  ]
})
export class ProfileRoutingModule { }
