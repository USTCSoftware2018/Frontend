import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportshowComponent } from './reportshow/reportshow.component';
import { ReportshowsRoutingModule } from './reportshows-routing.module';
import {ShareModule} from '../share/share.module';

@NgModule({
  imports: [
    CommonModule,
    ReportshowsRoutingModule,
    ShareModule
  ],
  declarations: [ReportshowComponent]
})
export class ReportshowsModule { }
