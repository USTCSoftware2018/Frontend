import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule, NZ_I18N, en_US, zh_CN } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './route/route.module';
import { EditorModule } from './editor/editor.module';
import { ErrorModule } from './error/error.module';
import { Error404Component } from './error/error404/error404.component';
import { ReportshowComponent } from './reportshow/reportshow.component';
import { UserSetModule } from './user-set/user-set.module';
import { ProfilePageComponent } from './profile/profile-page/profile-page.component';
import { Report2Component} from './profile/report/report.component';
import { PersonalInformationComponent } from './profile/personal-information/personal-information.component';
import {TesthttpComponent} from './testhttp/testhttp.component';


registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProfilePageComponent,
    ReportshowComponent,
    Report2Component,
    PersonalInformationComponent,
    TesthttpComponent,
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
