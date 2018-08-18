import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import {TesthttpComponent} from './testhttp/testhttp.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { SiminfoComponent } from './userinfo/siminfo/siminfo.component';
import { DetailinfoComponent } from './userinfo/detailinfo/detailinfo.component';
import { Eachinfo1Component } from './userinfo/detailinfo/eachinfo1/eachinfo1.component';
import { Eachinfo2Component } from './userinfo/detailinfo/eachinfo2/eachinfo2.component';
import { LikeinfoComponent } from './userinfo/detailinfo/likeinfo/likeinfo.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    TesthttpComponent,
    UserinfoComponent,
    SiminfoComponent,
    DetailinfoComponent,
    Eachinfo1Component,
    Eachinfo2Component,
    LikeinfoComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgZorroAntdModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
