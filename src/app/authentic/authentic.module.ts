import { NgModule } from '@angular/core';
import {CommonModule, registerLocaleData} from '@angular/common';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import en from '@angular/common/locales/en';

import { AuthenticRoutingModule } from './authentic-routing.module';
import { SigninComponent } from './signin/signin.component';
import { PandaComponent } from './panda/panda.component';
import { StartResetComponent } from './start-reset/start-reset.component';
import { CpltResetComponent } from './cplt-reset/cplt-reset.component';

registerLocaleData(en);

@NgModule({
  imports: [
    CommonModule,
    AuthenticRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    SigninComponent,
    PandaComponent,
    StartResetComponent,
    CpltResetComponent,
  ],
  exports: [
    PandaComponent,
    NgZorroAntdModule,
  ]
})
export class AuthenticModule { }
