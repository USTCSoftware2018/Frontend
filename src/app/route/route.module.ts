import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from '../error/error404/error404.component';
import { ReportshowComponent} from '../reportshows/reportshow/reportshow.component';
import { MainComponent as EditorMainComponent} from '../editor/views/main/main.component';
import { ReportshowotherComponent } from '../reportshows/reportshow/reportshowother/reportshowother.component';
import { FeedsComponent } from '../core/feeds/feeds.component';
import { HttpExampleComponent } from '../http-example/http-example.component';


const appRoutes: Routes = [
  { path: 'test-http', component: HttpExampleComponent },
  { path: 'editor', component: EditorMainComponent},
  { path: 'reportshow', component: ReportshowComponent},
  { path: 'reportdisplay', component: ReportshowotherComponent},
  { path: 'feeds', component: FeedsComponent},
  { path: 'userset', loadChildren: '../user-set/user-set.module#UserSetModule', data: { preload: true } },
  { path: 'userinfo', loadChildren: '../user-info/watch-info.module#WatchInfoModule', data: {preload: true}},
  { path: 'authentication', loadChildren: '../authentic/authentic.module#AuthenticModule', data: {preload: true}},
  { path: 'search', loadChildren: '../biosearch/biosearch.module#BiosearchModule', data: {preload: true}},
  { path: 'explore', loadChildren: '../explore/explore.module#ExploreModule', data: {preload: true}},
  { path: 'profile', loadChildren: '../profile/profile.module#ProfileModule', data: {preload: true}},
<<<<<<< HEAD
  { path: 'notification', loadChildren: '../notification/notification.module#NotificationModule', data: {preload:true}},
  { path: 'reportshows', loadChildren: '../reportshows/reportshows.module#ReportshowsModule'},
    { path: '', redirectTo: '/index', pathMatch: 'full' },
=======
  { path: 'reportshows', loadChildren: '../reportshows/reportshows.module#ReportshowsModule', data: {preload: true}},
  { path: '', redirectTo: '/index', pathMatch: 'full' },
>>>>>>> upstream/dev
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
