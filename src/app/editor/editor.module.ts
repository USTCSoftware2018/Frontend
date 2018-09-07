import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { StepsService } from './core/steps.service';
import { AppendixService } from './core/appendix.service';
import { EditorReportService } from './core/editorReport.service';
import { GetDataService } from './getData/getData.service';

import { MainComponent } from './views/main/main.component';
import { ToolsComponent } from './views/tools/tools.component';
import { ReportsEditorComponent } from './views/reports-editor/reports-editor.component';
import { EditorFieldComponent } from './views/editor-field/editor-field.component';
import { EditorFieldTypeComponent } from './views/editor-field-type/editor-field-type.component';

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    FormsModule,
  ],
  declarations: [
    MainComponent,
    ToolsComponent,
    ReportsEditorComponent,
    EditorFieldComponent,
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
