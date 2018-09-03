import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserSetModule } from '../user-set/user-set.module';
import { Error404Component } from '../error/error404/error404.component';
import { ReportshowComponent} from '../reportshow/reportshow.component';
import {MainComponent as EditorMainComponent} from '../editor/views/main/main.component';
import { ProfilePageComponent } from '../profile/profile-page/profile-page.component';
import {UserinfoComponent} from '../userinfo/userinfo.component';
import {SigninComponent} from '../signin/signin.component';

const appRoutes: Routes = [
  { path: 'editor', component: EditorMainComponent},
  { path: 'reportshow', component: ReportshowComponent},
  { path: 'userset', loadChildren: '../user-set/user-set.module#UserSetModule', data: { preload: true } },
  { path: 'profile', component: ProfilePageComponent},
  { path: 'userinfo', component: UserinfoComponent},
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'signin', component: SigninComponent},
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
