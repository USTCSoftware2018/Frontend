import { Component, OnInit, OnChanges } from '@angular/core';
import { switchMap,map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-nav',
  templateUrl: './user-nav.component.html',
  styleUrls: ['./user-nav.component.less']
})
export class UserNavComponent implements OnInit {
  isreport: boolean;
  thisurl: string;
  constructor( private route: ActivatedRoute,
               private router: Router,
               private location:Location) { }
  isCollapsed:boolean;
  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }
  ngOnInit() {
    this.thisurl = location.pathname;
    this.isreport = this.thisurl==='/userset/user-watch-all-info/watch-all-info-all'||this.thisurl==='/userset/user-watch-all-info/watch-all-info-draft';
    this.isCollapsed=this.isreport;
  }
  okisreport(){
    this.isreport=true;
    this.isCollapsed=true;
  }
  changeisreport(){
   this.isreport=false;
  }
}
