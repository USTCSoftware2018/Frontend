import {  Route } from '@angular/router';
import {ReportAllComponent} from './report-all/report-all.component';
import {ReportDraftComponent} from './report-draft/report-draft.component';
import {UserReportComponent} from './user-report/user-report.component';
import {UserNavComponent} from './user-nav/user-nav.component';
import {UserBasicComponent} from './user-basic/user-basic.component';
import {UserAccountComponent} from './user-account/user-account.component';

export const userset_route: Route = {
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
};
