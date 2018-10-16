import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dbsearchresult',
  templateUrl: './dbsearchresult.component.html',
  styleUrls: ['./dbsearchresult.component.less']
})
export class DBsearchresultComponent implements OnInit {

  dbsearchtip = {
    count: 0,
    src: '',
    title: '',
    url: '',
  };

  constructor() { }

  ngOnInit() {
    this.dbsearchtip.count = 0;
    this.dbsearchtip.title = 'RCSB';
    this.dbsearchtip.url = 'http://parts.igem.org/Special:Search?search=p12';
    this.dbsearchtip.src = 'assets/img/searchresult/icon/' + this.dbsearchtip.title + '.png';
  }

}
