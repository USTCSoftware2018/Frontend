import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ShareModule } from '../share/share.module';
import { NotificationComponent } from './notification/notification.component';
import { NotificationRoutingModule } from './notification-routing.module';
import { NgZorroAntdModule, NZ_I18N, en_US, zh_CN } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import zh from '@angular/common/locales/zh';
registerLocaleData(zh);

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    HttpClientModule,
    NotificationRoutingModule,
    ShareModule,
  ],
  declarations: [
    NotificationComponent
  ],
  providers:[{ provide: NZ_I18N, useValue: en_US }],
})
export class NotificationModule { }
