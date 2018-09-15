import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExploreRoutingModule } from './explore-routing.module';
import { ShareModule } from '../share/share.module';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';

import { IndexComponent } from './index/index.component';
import { PopularReportComponent } from './popular-report/popular-report.component';
import {en_US, NZ_I18N} from 'ng-zorro-antd';
registerLocaleData(en);
@NgModule({
  imports: [
    CommonModule,
    ExploreRoutingModule,
    ShareModule
  ],
  declarations: [
    PopularReportComponent,
    IndexComponent
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
})
export class ExploreModule { }
