import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ReportshowComponent} from './reportshow/reportshow.component';

const routes: Routes = [
  {
    path: '',
    component: ReportshowComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportshowsRoutingModule { }
