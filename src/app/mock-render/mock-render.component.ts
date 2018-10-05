import { Component, OnInit } from '@angular/core';
import { ReportHeader } from '../editor/headers/article';
@Component({
  selector: 'app-mock-render',
  templateUrl: './mock-render.component.html',
  styleUrls: ['./mock-render.component.less']
})
export class MockRenderComponent implements OnInit {

  mockReport: ReportHeader = JSON.parse(
    `{
      "title":"Transformation of MtrCAB and CysDes",
      "introduction":"Transformation of plasmid pSB1C3 containing MtrACB and CysDes to top10 E.coil strain.","label":["22"],
      "mdate":"",
      "ndate":"",
      "result":[
          {"desc":"result_1","subType":"Text","list":[],"pic":[{"name":"test","url":
          "http://game.gtimg.cn/images/yxzj/img201606/heroimg/191/191-mobileskin-1.jpg"}],"remark":"this is a remark"},
          {"desc":"result_2","subType":"List","list":[{"str":"111"},{"str":"2222"},{}],
          "pic":[{"name":"test","url":"http://image.9game.cn/2018/6/4/20525628.jpg"}], "remark":"this is another remark"}],
      "subroutines":[
        {"id":"-1","desc":"","name":"Add","idx":0,"steps":[
          {"name":"Add","data":{"Volume":"111111","Name":"2","container":"3"},"id":"2","remark":"444"}]
        },
        {"id":"1","name":"Incubate","idx":0,"steps":[
            {"name":"Add","data":{"Name":"template","Volume":"0","container":""},"id":"2","remark":""},
            {"name":"Add","data":{"Name":"buffer","Volume":"0","container":""},"id":"2","remark":""},
            {"name":"Add","data":{"Name":"enzyme","Volume":"0","container":""},"id":"2","remark":""},
            {"name":"Mix","data":{"Type":"摇晃"},"id":"4","remark":""},
            {"name":"Incubate","data":{"Num":"37"},"id":"9","remark":""}
          ]
        }],
      "id":0,
      "author":["Yitian Zhou"]}`
    );
  constructor() { }

  ngOnInit() {
  }

}
