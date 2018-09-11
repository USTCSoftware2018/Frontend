import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from '../error/error404/error404.component';
import { ReportshowComponent} from '../reportshow/reportshow.component';
import { FeedsComponent } from '../core/feeds/feeds.component';
import { MainComponent as EditorMainComponent} from '../editor/views/main/main.component';
import { ProfilePageComponent } from '../profile/profile-page/profile-page.component';
import { ReportshowotherComponent } from '../reportshow/reportshowother/reportshowother.component';

const appRoutes: Routes = [
  { path: 'editor', component: EditorMainComponent},
  { path: 'reportshow', component: ReportshowComponent},
  { path: 'reportdisplay', component: ReportshowotherComponent},
  { path: 'feeds', component: FeedsComponent},
  { path: 'userset', loadChildren: '../user-set/user-set.module#UserSetModule', data: { preload: true } },
  { path: 'userinfo', loadChildren: '../user-info/watch-info.module#WatchInfoModule', data: {preload: true}},
  { path: 'authentication', loadChildren: '../authentic/authentic.module#AuthenticModule', data: {preload: true}},
  { path: 'search', loadChildren: '../biosearch/biosearch.module#BiosearchModule', data: {preload: true}},
  { path: 'profile', loadChildren: '../profile/profile.module#ProfileModule', data: {preload: true}},
  // { path: 'user-set', loadChildren: '../user-set/user-set.module#UserSetModule', data: { preload: true } },
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
