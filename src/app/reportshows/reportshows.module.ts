import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportshowComponent } from './reportshow/reportshow.component';
import { ReportshowsRoutingModule } from './reportshows-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ReportshowsRoutingModule
  ],
  declarations: [ReportshowComponent]
})
export class ReportshowsModule { }
