import { Component, OnInit } from '@angular/core';
import { USER } from '../../Interface/mock-user';
import { Simuser, Report } from '../../Interface/userinfo';
import {
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';

class Result {
  filters: any[];
  ranks: any;
  data: any;
}
@Component({
  selector: 'app-searchresult',
  templateUrl: './searchresult.component.html',
  styleUrls: ['./searchresult.component.less']
})
export class SearchresultComponent implements OnInit {
  searchForm: FormGroup;
  User = USER;
  users: Simuser[];
  reports: Report[] = [];
  loading: boolean;
  result: Result;
  suggestions = ['aaaaa', 'bbbbb', 'ccccc', 'ddddd', 'abcdefghi'];
  prefix: string[] = [];
  constructor() {
  }

  ngOnInit() {
    this.result = new Result();
    this.result.filters = ['a', 'b', 'c', 'd', 'e'];
    this.users = this.User.followers;
    this.reports = this.User.reports;
    this.searchForm = new FormGroup({
      'search_info': new FormControl( null,
      ),
    });
    this.initPrefix();
    console.log(this.users);
  }
  initPrefix = () => {
    for ( let ii  = 32; ii < 126; ii++) {
      const char = String.fromCharCode(ii);
      this.prefix.push(char);
    }
    console.log(this.prefix);
  }
  submitForm() {

  }
  getSearchResult(){
  }
  startloading() {
    this.loading = true;
  }
  endloading() {
    this.loading = true;
  }
  get search_info() { return this.searchForm.get('search_info'); }
}
