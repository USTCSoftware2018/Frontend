import { Component, OnInit } from '@angular/core';
import { USER } from '../../Interface/mock-user';
import { Simuser, Report } from '../../Interface/userinfo';
import { SearchResult } from '../search-result';
import {
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import {HttpService} from '../../http.service';
import {ApiResult} from '../../Interface/ApiResult';


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
  result: SearchResult;
  suggestions = ['aaaaa', 'bbbbb', 'ccccc', 'ddddd', 'abcdefghi'];
  prefix: string[] = [];
  constructor(
    private http: HttpService,
  ) {
  }

  ngOnInit() {
    this.result = new SearchResult();
    this.result.filters = {label: 'a', people: 'b', time: { end: 'b', start: 'c'}};
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
    const forminfo = this.searchForm.value;
    const callback = (result: ApiResult) => {
      this.result = result.data;
    }
    this.http.get_search_result(forminfo.search_info, callback);
  }
  getSearchResult() {
  }
  startloading() {
    this.loading = true;
  }
  endloading() {
    this.loading = true;
  }
  get search_info() { return this.searchForm.get('search_info'); }
}
