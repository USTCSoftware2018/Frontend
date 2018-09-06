import { NgModule } from '@angular/core';
import {CommonModule, registerLocaleData} from '@angular/common';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import en from '@angular/common/locales/en';

import { WatchInfoRoutingModule } from './watch-info-routing.module';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { DetailinfoComponent } from './userinfo/detailinfo/detailinfo.component';
import { Eachinfo1Component } from './userinfo/detailinfo/eachinfo1/eachinfo1.component';
import { Eachinfo2Component } from './userinfo/detailinfo/eachinfo2/eachinfo2.component';
import { LikeinfoComponent } from './userinfo/detailinfo/likeinfo/likeinfo.component';
import { ShareModule } from '../share/share.module';

registerLocaleData(en);

@NgModule({
  imports: [
    CommonModule,
    WatchInfoRoutingModule,
    NgZorroAntdModule,
    ShareModule
  ],
  declarations: [
    DetailinfoComponent,
    UserinfoComponent,
    Eachinfo2Component,
    Eachinfo1Component,
    LikeinfoComponent
  ],
  exports: [
    NgZorroAntdModule,
    ShareModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }]
})
export class WatchInfoModule { }
