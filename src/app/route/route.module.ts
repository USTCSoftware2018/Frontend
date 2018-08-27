import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Error404Component } from '../error/error404/error404.component';
import {ReportComponent} from '../report/report.component';
import {MainComponent as EditorMainComponent} from '../editor/views/main/main.component';

const appRoutes: Routes = [
  { path: 'editor', component: EditorMainComponent},
  { path: 'report', component: ReportComponent},
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: '**', component: Error404Component}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
