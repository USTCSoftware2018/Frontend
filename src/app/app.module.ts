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
import { ReportshowComponent } from './reportshows/reportshow/reportshow.component';
import { UserSetModule } from './user-set/user-set.module';
import { ProfileModule } from './profile/profile.module';
import { ReportshowotherComponent } from './reportshows/reportshow/reportshowother/reportshowother.component';
import { FeedsComponent } from './core/feeds/feeds.component';
import { ShareModule } from './share/share.module';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ReportshowComponent,
    ReportshowotherComponent,
    FeedsComponent,
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
    ReactiveFormsModule,
    ProfileModule,
    ShareModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
