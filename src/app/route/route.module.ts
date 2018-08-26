import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Error404Component } from '../error/error404/error404.component';
import {EditorMainComponent} from '../editor/editor-main/editor-main.component';
import {ReportComponent} from '../report/report.component';

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
