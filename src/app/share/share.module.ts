import { NgModule } from '@angular/core';
import {CommonModule, registerLocaleData} from '@angular/common';
import { NgZorroAntdModule, NZ_I18N, en_US, zh_CN } from 'ng-zorro-antd';
import en from '@angular/common/locales/en';
import { UserInfoProfileComponent } from './user-info-profile/user-info-profile.component';
import { PandaComponent } from './panda/panda.component';
import { OthersReportComponent } from './others-report/others-report.component';
import { SiminfoComponent } from './siminfo/siminfo.component';
import { LikereportComponent } from './likereport/likereport.component';
import { FollowuserComponent } from './followuser/followuser.component';

registerLocaleData(en);

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule
  ],
  declarations: [
    PandaComponent,
    OthersReportComponent,
    UserInfoProfileComponent
    SiminfoComponent,
    LikereportComponent,
    FollowuserComponent
  ],
  // 公用导出组件放在exports数组内
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  exports: [
    PandaComponent,
    UserInfoProfileComponent
    NgZorroAntdModule,
    OthersReportComponent,
    SiminfoComponent,
    LikereportComponent,
    FollowuserComponent
  ]
})
export class ShareModule { }
