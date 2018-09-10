import { Component, OnInit } from '@angular/core';

import { StepsService } from '../../core/steps.service';
import { EditorReportService } from '../../core/editorReport.service';
import { EditorStepHeader , EditorSubroutineHeader } from '../../headers/steps';

@Component({
  selector: 'app-step-bar',
  templateUrl: './step-bar.component.html',
  styleUrls: ['./step-bar.component.less']
})
export class StepBarComponent implements OnInit {

  steps: EditorStepHeader[];
  subs: EditorSubroutineHeader[];

  constructor(public stepsService: StepsService, public editorReportService: EditorReportService) { }

  ngOnInit() {
    this.stepsService.mockData();
    this.steps = this.stepsService.steps;
    this.subs = this.stepsService.subs;
    console.log(this.steps);
  }

  addSteps(stepId: string) {
    console.log(stepId);
    this.editorReportService.reportAddStep(stepId);
  }

  addSubs(subId: string) {
    this.editorReportService.reportAddSubroutine(subId);
  }

}
