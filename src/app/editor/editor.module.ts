import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { StepsService } from './core/steps.service';
import { AppendixService } from './core/appendix.service';
import { EditorReportService } from './core/editorReport.service';
import { GetDataService } from './getData/getData.service';

import { MainComponent } from './views/main/main.component';
import { StepBarComponent } from './views/step-bar/step-bar.component';
import { EditAreaComponent } from './views/edit-area/edit-area.component';
import { ButtonAreaComponent } from './views/button-area/button-area.component';
import { EditReportComponent } from './views/edit-report/edit-report.component';
import { SubroutineComponent } from './views/subroutine/subroutine.component';
import { EditorFieldTypeComponent } from './views/editor-field-type/editor-field-type.component';

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    FormsModule,
  ],
  declarations: [
    MainComponent,
    StepBarComponent,
    EditAreaComponent,
    ButtonAreaComponent,
    EditReportComponent,
    SubroutineComponent,
    EditorFieldTypeComponent,
  ],
  providers: [
    StepsService,
    EditorReportService,
    GetDataService,
    AppendixService,
  ],
})
export class EditorModule { }
