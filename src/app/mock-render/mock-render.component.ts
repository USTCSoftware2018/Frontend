import { Component, OnInit } from '@angular/core';
import { ReportHeader } from '../editor/headers/article';
const jsonData = require('../editor/render/simple.json');
@Component({
  selector: 'app-mock-render',
  templateUrl: './mock-render.component.html',
  styleUrls: ['./mock-render.component.less']
})
export class MockRenderComponent implements OnInit {

  mockReport: ReportHeader = JSON.parse(jsonData);
  constructor() { }

  ngOnInit() {
    console.log(this.mockReport);
  }

}
