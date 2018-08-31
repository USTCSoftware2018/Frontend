import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgZorroAntdModule, NZ_I18N, en_US, zh_CN } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import zh from '@angular/common/locales/zh';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './route/route.module';
import {EditorModule} from './editor/editor.module';
import {ErrorModule} from './error/error.module';
<<<<<<< HEAD
import { UserSetModule } from './user-set/user-set.module';
=======
// import { UserSetModule } from './user-set/user-set.module';
// import { Error404Component } from './error/error404/error404.component';
>>>>>>> 7a6b3b3fe0bbafc34db25f069a996d6d10c6aa96
import { SiminfoComponent } from './report/siminfo/siminfo.component';
import { ProfilePageComponent } from './profile/profile-page/profile-page.component';
import { Report2Component} from './profile/report/report.component';
import { Report1Component} from './report/report.component';
import { PersonalInformationComponent } from './profile/personal-information/personal-information.component';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SiminfoComponent,
    ProfilePageComponent,
    Report1Component,
    Report2Component,
    PersonalInformationComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    // UserSetModule,
    NgZorroAntdModule,
    AppRoutingModule,
    EditorModule,
    ErrorModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
