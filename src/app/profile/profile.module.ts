import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { Report2Component } from './report/report.component';
import { ShareModule } from '../share/share.module';
import { UserInfoComponent } from './user-info/user-info.component';
import { ProfileRoutingModule } from './profile-routing.module';

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    FormsModule,
    ShareModule,
    ProfileRoutingModule
  ],
  declarations: [
    PersonalInformationComponent,
    ProfilePageComponent,
    Report2Component,
    UserInfoComponent
  ],
  exports: [
    NgZorroAntdModule,
  ]
})
export class ProfileModule { }
