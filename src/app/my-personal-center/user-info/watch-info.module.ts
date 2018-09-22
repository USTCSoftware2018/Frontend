import { NgModule } from '@angular/core';
import {CommonModule, registerLocaleData} from '@angular/common';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import en from '@angular/common/locales/en';
import { RouterModule } from '@angular/router';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { DetailinfoComponent } from './userinfo/detailinfo/detailinfo.component';
import { ShareModule } from '../../share/share.module';

registerLocaleData(en);

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    ShareModule,
    RouterModule
  ],
  declarations: [
    DetailinfoComponent,
    UserinfoComponent,
  ],
  exports: [
    NgZorroAntdModule,
    ShareModule,
    UserinfoComponent,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }]
})
export class WatchInfoModule { }
