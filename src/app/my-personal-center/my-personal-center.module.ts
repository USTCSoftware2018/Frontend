import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyPersonalCenterRoutingModule } from './my-personal-center-routing.module';
import { MyCenterIndexComponent } from './my-center-index/my-center-index.component';
import { ShareModule } from '../share/share.module';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import {en_US, NZ_I18N} from 'ng-zorro-antd';
registerLocaleData(en);

@NgModule({
  imports: [
    CommonModule,
    MyPersonalCenterRoutingModule,
    ShareModule
  ],
  declarations: [MyCenterIndexComponent],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
})
export class MyPersonalCenterModule { }
