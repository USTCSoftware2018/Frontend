import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { StepsService } from './core/steps.service';
import { EditorReportService } from './core/editorReport.service';
import { GetDataService } from './getData/getData.service';

import { MainComponent } from './views/main/main.component';
import { ToolsComponent } from './views/tools/tools.component';
import { ReportsEditorComponent } from './views/reports-editor/reports-editor.component';

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule
  ],
  declarations: [
    MainComponent,
    ToolsComponent,
    ReportsEditorComponent,
  ],
  providers: [
    StepsService,
    EditorReportService,
    GetDataService,
  ],
})
export class EditorModule { }
