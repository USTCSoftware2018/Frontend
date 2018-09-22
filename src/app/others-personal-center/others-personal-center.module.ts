import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { Report2Component } from './report/report.component';
import { ShareModule } from '../share/share.module';
import {OthersPersonalCenterRoutingModule} from './others-personal-center-routing.module';
import { WatchReportLabelComponent } from './watch-report-label/watch-report-label.component';
import { WatchReportArchiveComponent } from './watch-report-archive/watch-report-archive.component';


@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    FormsModule,
    ShareModule,
    OthersPersonalCenterRoutingModule
  ],
  declarations: [
    PersonalInformationComponent,
    ProfilePageComponent,
    Report2Component,
    WatchReportLabelComponent,
    WatchReportArchiveComponent,
  ],
  exports: [
    NgZorroAntdModule,
  ]
})
export class OthersPersonalCenterModule { }
