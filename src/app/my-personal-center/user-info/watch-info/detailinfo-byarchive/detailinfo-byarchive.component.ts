import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-detailinfo-byarchive',
  templateUrl: './detailinfo-byarchive.component.html',
  styleUrls: ['./detailinfo-byarchive.component.less']
})
export class DetailinfoByarchiveComponent implements OnInit {
  archive: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.archive = params.get('data');
    });
  }

}
