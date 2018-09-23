import { Component, ViewChild, ElementRef, OnInit, Input} from '@angular/core';
import { ReportHeader as Report  } from '../../headers/article';
@Component({
  selector: 'app-editor-report-show-area',
  templateUrl: './editor-report-show-area.component.html',
  styleUrls: ['./editor-report-show-area.component.less']
})

export class EditorReportShowAreaComponent implements OnInit {

  @ViewChild('root') myroot: ElementRef;
  @Input() R = new Report();

  materials = ['hahah', 'aaaa', 'kjsdlkjs'];
  equipments = ['HAHAH', 'SKJDFOISJDFI', 'JFKLWEJFOIW'];
  constructor() { }

  ngOnInit() {
    this.R.title = 'Transformation of MtrCAB and CysDes';
    this.R.author = ['Yitian Zhou'];
    this.R.ndate = 'Jun. 13 2018';
    this.R.introduction = 'Transformation of plasmid pSB1C3 containing MtrACB and CysDes to top10 E.coil strain.';
  }

}
