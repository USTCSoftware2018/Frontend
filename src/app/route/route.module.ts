import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from '../error/error404/error404.component';
import { ReportshowComponent} from '../reportshows/reportshow/reportshow.component';
import { MainComponent as EditorMainComponent} from '../editor/views/main/main.component';
import { ReportshowotherComponent } from '../reportshows/reportshow/reportshowother/reportshowother.component';
import { FeedsComponent } from '../core/feeds/feeds.component';
import { HttpExampleComponent } from '../http-example/http-example.component';
import {NotificationComponent} from '../core/notification/notification.component';


const appRoutes: Routes = [
  { path: 'test-http', component: HttpExampleComponent },
  { path: 'editor', component: EditorMainComponent},
  { path: 'reportshow', component: ReportshowComponent},
  { path: 'reportdisplay', component: ReportshowotherComponent},
  { path: 'feeds', component: FeedsComponent},
  { path: 'notification', component: NotificationComponent},
  { path: 'mypersonalcenter',
    loadChildren: '../my-personal-center/my-personal-center.module#MyPersonalCenterModule', data: {preload: true}},
  { path: 'authentication', loadChildren: '../authentic/authentic.module#AuthenticModule', data: {preload: true}},
  { path: 'search', loadChildren: '../biosearch/biosearch.module#BiosearchModule', data: {preload: true}},
  { path: 'explore', loadChildren: '../explore/explore.module#ExploreModule', data: {preload: true}},
  { path: 'infocenter', loadChildren: '../others-personal-center/others-personal-center.module#OthersPersonalCenterModule',
    data: {preload: true}},
  { path: 'reportshows', loadChildren: '../reportshows/reportshows.module#ReportshowsModule', data: {preload: true}},
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: '**', component: Error404Component},
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
