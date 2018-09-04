import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule, NZ_I18N, en_US, zh_CN } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import zh from '@angular/common/locales/zh';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './route/route.module';
import {EditorModule} from './editor/editor.module';
import {ErrorModule} from './error/error.module';
import { Error404Component } from './error/error404/error404.component';
import { ReportshowComponent } from './reportshow/reportshow.component';
import { UserSetModule } from './user-set/user-set.module';
import { SiminfoComponent } from './siminfo/siminfo.component';
import { ProfilePageComponent } from './profile/profile-page/profile-page.component';
import { Report2Component} from './profile/report/report.component';
import { PersonalInformationComponent } from './profile/personal-information/personal-information.component';
import {TesthttpComponent} from './testhttp/testhttp.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { DetailinfoComponent } from './userinfo/detailinfo/detailinfo.component';
import { Eachinfo1Component } from './userinfo/detailinfo/eachinfo1/eachinfo1.component';
import { Eachinfo2Component } from './userinfo/detailinfo/eachinfo2/eachinfo2.component';
import { LikeinfoComponent } from './userinfo/detailinfo/likeinfo/likeinfo.component';
import { SigninComponent } from './signin/signin.component';
import { PandaComponent } from './panda/panda.component';
import { StartResetComponent } from './start-reset/start-reset.component';
import { CpltResetComponent } from './cplt-reset/cplt-reset.component';



registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SiminfoComponent,
    ProfilePageComponent,
    ReportshowComponent,
    Report2Component,
    PersonalInformationComponent,
    TesthttpComponent,
    UserinfoComponent,
    SiminfoComponent,
    DetailinfoComponent,
    Eachinfo1Component,
    Eachinfo2Component,
    LikeinfoComponent,
    SigninComponent,
    PandaComponent,
    StartResetComponent,
    CpltResetComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    UserSetModule,
    NgZorroAntdModule,
    AppRoutingModule,
    EditorModule,
    ErrorModule,
    ReactiveFormsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
