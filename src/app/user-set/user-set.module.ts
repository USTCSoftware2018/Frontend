import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule, NZ_I18N, en_US, zh_CN } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import zh from '@angular/common/locales/zh';
import { UserBasicComponent } from './user-basic/user-basic.component';
import { UserSetRoutingModule } from './user-set-routing.module';
import { UserNavComponent } from './user-nav/user-nav.component';
import { UserAccountComponent } from './user-account/user-account.component';
import { UserReportComponent } from './user-report/user-report.component';
import { ReportAllComponent } from './report-all/report-all.component';
import { ReportDraftComponent } from './report-draft/report-draft.component';
import { ForbiddenNameDirective } from './formvalidate/forbidden-name.directive';

registerLocaleData(zh);

@NgModule({
  imports: [
    CommonModule,
    UserSetRoutingModule,
    FormsModule, ReactiveFormsModule,
    HttpClientModule,
    NgZorroAntdModule,
  ],
  declarations: [UserBasicComponent, UserNavComponent, UserAccountComponent, UserReportComponent, ReportAllComponent, ReportDraftComponent,ForbiddenNameDirective],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
})
export class UserSetModule { }
