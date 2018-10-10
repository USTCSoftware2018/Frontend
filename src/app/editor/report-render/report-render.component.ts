import { Component, ViewChild, ElementRef, OnInit, Input} from '@angular/core';
import { ReportHeader, ReportStepsHeader } from '../headers/article';
import { StepsService } from '../core/steps.service';
import { HttpService } from '../../http.service';


@Component({
  selector: 'app-report-render',
  templateUrl: './report-render.component.html',
  styleUrls: ['./report-render.component.less']
})
export class ReportRenderComponent implements OnInit {

  @ViewChild('root') myroot: ElementRef;
  @Input() R: ReportHeader;

  materials = ['hahah', 'aaaa', 'kjsdlkjs'];
  equipments = ['HAHAH', 'SKJDFOISJDFI', 'JFKLWEJFOIW'];
  test: any;
  constructor(private step: StepsService, private http: HttpService) { }

  stepList: Array<any> = [];


  ngOnInit() {
    console.log(this.R);
    // this.R.title = 'Transformation of MtrCAB and CysDes';
    // this.R.author = ['Yitian Zhou'];
    // this.R.mdate = 'Jun. 13 2018';
    // this.R.introduction = 'Transformation of plasmid pSB1C3 containing MtrACB and CysDes to top10 E.coil strain.';
    for (const subroutine of this.R.subroutines) {
      for (const step of subroutine.steps) {
        this.getSentence_by_step_id(step.id, step);
        this.stepList.push(step);
      }
    }
  }

  getSentence_by_step_id(id: string, obj: any) {
    this.http.get_step_by_id( parseInt(id, 10), (response) => {
      console.log(response.data);
      obj.sentence = response.data.yield_method;
    });
  }

}
