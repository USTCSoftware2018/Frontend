import { Component, OnInit } from '@angular/core';
import { EditorReportService } from '../../core/editorReport.service';

@Component({
  selector: 'app-info-panel',
  templateUrl: './info-panel.component.html',
  styleUrls: ['./info-panel.component.less']
})
export class InfoPanelComponent implements OnInit {

  constructor(public editor: EditorReportService) { }

  ngOnInit() {
  }

}
