import { Component, ViewChild, ElementRef, OnInit, Input} from '@angular/core';
import { ReportHeader } from '../headers/article';

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
  constructor() { }

  ngOnInit() {
    console.log(this.R);
    // this.R.title = 'Transformation of MtrCAB and CysDes';
    // this.R.author = ['Yitian Zhou'];
    // this.R.mdate = 'Jun. 13 2018';
    // this.R.introduction = 'Transformation of plasmid pSB1C3 containing MtrACB and CysDes to top10 E.coil strain.';
  }


}
