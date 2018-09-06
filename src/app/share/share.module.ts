import { NgModule } from '@angular/core';
import {CommonModule, registerLocaleData} from '@angular/common';
import { NgZorroAntdModule, NZ_I18N, en_US, zh_CN } from 'ng-zorro-antd';
import en from '@angular/common/locales/en';

import { PandaComponent } from './panda/panda.component';
import { OthersReportComponent } from './others-report/others-report.component';
import { SiminfoComponent } from './siminfo/siminfo.component';

registerLocaleData(en);

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule
  ],
  declarations: [
    PandaComponent,
    OthersReportComponent,
    SiminfoComponent
  ],
  // 公用导出组件放在exports数组内
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  exports: [
    PandaComponent,
    NgZorroAntdModule,
    OthersReportComponent,
    SiminfoComponent
  ]
})
export class ShareModule { }
