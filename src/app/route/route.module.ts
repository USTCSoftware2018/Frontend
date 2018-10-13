import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from '../error/error404/error404.component';
import { ReportshowComponent} from '../reportshows/reportshow/reportshow.component';
import { ReportshowotherComponent } from '../reportshows/reportshowother/reportshowother.component';
import { FeedsComponent } from '../core/feeds/feeds.component';
import { HttpExampleComponent } from '../http-example/http-example.component';
import {NotificationComponent} from '../core/notification/notification.component';
import { MockRenderComponent } from '../mock-render/mock-render.component';



const appRoutes: Routes = [
  { path: 'render', component: MockRenderComponent },
  { path: 'test-http', component: HttpExampleComponent },
  { path: 'editor',  loadChildren: '../editor/editor.module#EditorModule' },
  { path: 'feeds', component: FeedsComponent},
  { path: 'notification', component: NotificationComponent},
  { path: 'mypersonalcenter',
    loadChildren: '../my-personal-center/my-personal-center.module#MyPersonalCenterModule', data: {preload: true}},
  { path: 'authentication', loadChildren: '../authentic/authentic.module#AuthenticModule', data: {preload: true}},
  { path: 'search', loadChildren: '../biosearch/biosearch.module#BiosearchModule', data: {preload: true}},
  { path: 'explore', loadChildren: '../explore/explore.module#ExploreModule', data: {preload: true}},
  { path: 'userprofile/:user_id', loadChildren: '../others-personal-center/others-personal-center.module#OthersPersonalCenterModule',
    data: {preload: true}},
  { path: 'report', loadChildren: '../reportshows/reportshows.module#ReportshowsModule', data: {preload: true}},
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: '**', component: Error404Component}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true},
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
