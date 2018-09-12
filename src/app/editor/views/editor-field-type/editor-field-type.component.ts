import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-editor-field-type',
  templateUrl: './editor-field-type.component.html',
  styleUrls: ['./editor-field-type.component.less']
})
export class EditorFieldTypeComponent implements OnInit {

  @Input() fld: any;
  @Input() size: string;
  options: string[];
  constructor() { }

  ngOnInit() {
    for (const key of this.fld.attr) {
      const keystring: string = key;
      if (keystring.length >= 5 && keystring.substr(0, 5) === '@opt=') {
        const opts: string = keystring.substr(5);
        this.options = opts.split('/').filter((elem) => elem !== '');
      }
    }
  }

}
