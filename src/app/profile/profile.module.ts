import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { Report2Component } from './report/report.component';
import { ShareModule } from "../share/share.module";

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    FormsModule,
    ShareModule,
  ],
  declarations: [
    PersonalInformationComponent,
    ProfilePageComponent,
    Report2Component
  ],
  providers: [
  ]
})
export class ProfileModule { }
