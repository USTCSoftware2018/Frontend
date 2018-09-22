import { NgModule } from '@angular/core';
import {CommonModule, registerLocaleData} from '@angular/common';
import { NgZorroAntdModule, NZ_I18N, en_US, zh_CN } from 'ng-zorro-antd';
import en from '@angular/common/locales/en';

import { PandaComponent } from './panda/panda.component';
import { OthersReportComponent } from './others-report/others-report.component';
import { SiminfoComponent } from './siminfo/siminfo.component';
import { LikereportComponent } from './likereport/likereport.component';
import { FollowuserComponent } from './followuser/followuser.component';
import { UserInfoProfileComponent } from './user-info-profile/user-info-profile.component';
import { ReportCardComponent } from './report-card/report-card.component';
import { MyReportComponent } from './my-report/my-report.component';
import { WatchReportByLabelComponent } from './watch-report-by-label/watch-report-by-label.component';

registerLocaleData(en);

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule
  ],
  declarations: [
    PandaComponent,
    OthersReportComponent,
    SiminfoComponent,
    LikereportComponent,
    FollowuserComponent,
    UserInfoProfileComponent,
    ReportCardComponent,
    MyReportComponent,
    WatchReportByLabelComponent,
  ],
  // 公用导出组件放在exports数组内
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  exports: [
    PandaComponent,
    NgZorroAntdModule,
    OthersReportComponent,
    SiminfoComponent,
    LikereportComponent,
    FollowuserComponent,
    UserInfoProfileComponent,
    ReportCardComponent,
    MyReportComponent,
    WatchReportByLabelComponent
  ]
})
export class ShareModule { }
