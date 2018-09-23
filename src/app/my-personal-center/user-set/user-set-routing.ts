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
      path: 'user-display-all-info',
      component: UserReportComponent,
      children: [{
        path: '',
        redirectTo: 'display-all-info-all',
        pathMatch: 'full'
      },
        {
          path: 'display-all-info-all',
          component: ReportAllComponent
        },
        {
          path: 'display-all-info-draft',
          component: ReportDraftComponent
        }]
    }]
};
