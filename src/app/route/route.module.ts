import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Error404Component } from '../error/error404/error404.component';
import {EditorMainComponent} from '../editor/editor-main/editor-main.component';
import { ExploreComponent } from '../explore/explore.component';

import { LoginComponent } from '../login/login.component';

const appRoutes: Routes = [
  { path: 'editor', component: EditorMainComponent},
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'explore', component: ExploreComponent },
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
