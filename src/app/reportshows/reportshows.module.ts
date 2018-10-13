import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportshowComponent } from './reportshow/reportshow.component';
import { ReportshowsRoutingModule } from './reportshows-routing.module';
import {ShareModule} from '../share/share.module';
import {ReportshowotherComponent} from './reportshowother/reportshowother.component';

@NgModule({
  imports: [
    CommonModule,
    ReportshowsRoutingModule,
    ShareModule
  ],
  declarations: [
    ReportshowComponent,
    ReportshowotherComponent
  ]
})
export class ReportshowsModule { }
