import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { PopularReportComponent } from './popular-report/popular-report.component';

const routes: Routes = [
  { path: '', component: IndexComponent,
  children: [
    { path: 'reports', component: PopularReportComponent},
    { path: '', redirectTo: 'reports', pathMatch: 'full'},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExploreRoutingModule { }
