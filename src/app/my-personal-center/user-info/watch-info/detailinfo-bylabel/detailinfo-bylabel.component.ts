import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';


@Component({
  selector: 'app-detailinfo-bylabel',
  templateUrl: './detailinfo-bylabel.component.html',
  styleUrls: ['./detailinfo-bylabel.component.less']
})
export class DetailinfoBylabelComponent implements OnInit {
  label: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.label = params.get('name');
    });
  }

}
