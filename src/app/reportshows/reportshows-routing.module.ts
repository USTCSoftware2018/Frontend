import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ReportshowComponent} from './reportshow/reportshow.component';
import {ReportshowotherComponent} from './reportshowother/reportshowother.component';

const routes: Routes = [
  {
    path: 'my/:report_id',
    component: ReportshowComponent
  },
  {
    path: ':user_id/:report_id',
    component: ReportshowotherComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportshowsRoutingModule { }
