import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-editor-field-type',
  templateUrl: './editor-field-type.component.html',
  styleUrls: ['./editor-field-type.component.less']
})
export class EditorFieldTypeComponent implements OnInit {

  @Input() fld: any;
  constructor() { }

  ngOnInit() {
  }

}
