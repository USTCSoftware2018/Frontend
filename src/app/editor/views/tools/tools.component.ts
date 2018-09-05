import { Component, OnInit , OnChanges, SimpleChange } from '@angular/core';
import { StepsService } from '../../core/steps.service';
import { EditorStepHeader , EditorSubroutineHeader } from '../../headers/steps';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.less']
})
export class ToolsComponent implements OnInit {

  steps: EditorStepHeader[];

  constructor(public stepsService: StepsService) { }

  ngOnInit() {
    this.stepsService.mockData();
    this.steps = this.stepsService.steps;
    console.log(this.steps);
  }
}
