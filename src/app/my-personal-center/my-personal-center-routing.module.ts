import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MyCenterIndexComponent} from './my-center-index/my-center-index.component';
import {ReportAllComponent} from './user-set/report-all/report-all.component';
import {ReportDraftComponent} from './user-set/report-draft/report-draft.component';
import {UserReportComponent} from './user-set/user-report/user-report.component';
import {UserNavComponent} from './user-set/user-nav/user-nav.component';
import {UserBasicComponent} from './user-set/user-basic/user-basic.component';
import {UserAccountComponent} from './user-set/user-account/user-account.component';

const routes: Routes = [
  { path: '', component: MyCenterIndexComponent},
  {
    path: 'userset',
    component: UserNavComponent,
    children: [{
      path: '',
      redirectTo: 'user-basic',
      pathMatch: 'full',
    },
      {
        path: 'user-basic',
        component: UserBasicComponent
      },
      {
        path: 'user-account',
        component: UserAccountComponent
      },
      {
        path: 'user-report',
        component: UserReportComponent,
        children: [{
          path: '',
          redirectTo: 'report-all',
          pathMatch: 'full'
        },
          {
            path: 'report-all',
            component: ReportAllComponent
          },
          {
            path: 'report-draft',
            component: ReportDraftComponent
          }]
      }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyPersonalCenterRoutingModule { }
