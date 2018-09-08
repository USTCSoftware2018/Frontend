import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from '../error/error404/error404.component';
import { ReportshowComponent} from '../reportshow/reportshow.component';
import { MainComponent as EditorMainComponent} from '../editor/views/main/main.component';
import { ProfilePageComponent } from '../profile/profile-page/profile-page.component';
import { ReportshowotherComponent } from '../reportshow/reportshowother/reportshowother.component';

const appRoutes: Routes = [
  { path: 'editor', component: EditorMainComponent},
  { path: 'reportshow', component: ReportshowComponent},
  { path: 'reportshowother', component: ReportshowotherComponent},
  { path: 'userset', loadChildren: '../user-set/user-set.module#UserSetModule', data: { preload: true } },
  { path: 'userinfo', loadChildren: '../watch-info/watch-info.module#WatchInfoModule', data: {preload: true}},
  { path: 'authentication', loadChildren: '../authentic/authentic.module#AuthenticModule', data: {preload: true}},
  { path: 'search', loadChildren: '../biosearch/biosearch.module#BiosearchModule', data: {preload: true}},
  { path: 'profile', component: ProfilePageComponent},
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
