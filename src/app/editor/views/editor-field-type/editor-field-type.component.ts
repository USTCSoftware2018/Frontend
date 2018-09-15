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
  changed: Boolean = false;

  constructor() { }

  ngOnInit() {


    for (const key of this.fld.attr) {
      const keystring: string = key;
      if (keystring.length >= 5 && keystring.substr(0, 5) === '@opt=') {
        const opts: string = keystring.substr(5);
        this.options = opts.split('/').filter((elem) => elem !== '');
        if (this.fld.value !== undefined && this.fld.value !== '' && !this.isInArray(this.fld.value, this.options)) {
          this.options.push(this.fld.value);
        }
      }
    }
  }

  isInArray(str: string, list: string[]) {
    let flag = false;
    for (const kk of list) {
      if (kk === 'str') {
        flag = true;
      }
    }
    return flag;
  }

  changeInToInput() {
    console.log(this.fld.value);
    if (this.fld.value === 'input') {
      this.changed = true;
      this.fld.value = '';
    }
  }

}
