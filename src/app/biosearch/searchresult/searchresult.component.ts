import { Component, OnInit } from '@angular/core';
import { USER } from '../../Interface/mock-user';
import { Simuser, Report } from '../../Interface/userinfo';
import { SearchResult, Data} from '../search-result';
import {report1, user1, user2} from '../../Interface/mock-user';
import {
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import {HttpService} from '../../http.service';
import {ApiResult} from '../../Interface/ApiResult';
import { DB } from '../search-result';
import { RESULT, MOCKDB } from '../mock-search';


@Component({
  selector: 'app-searchresult',
  templateUrl: './searchresult.component.html',
  styleUrls: ['./searchresult.component.less']
})
export class SearchresultComponent implements OnInit {
  searchForm: FormGroup;
  User = USER;
  users: Simuser[] = [user1, user2];
  reports: Report[] = [report1];
  dbs: DB[] = MOCKDB;
  filtertype2color = {
    'time': 'blue',
    'title': 'cyan',
    'name': 'greekblue',
    'addr': 'gold',
    'author': 'purple',
  };
  filterrel2verb = {
    'eq': '=',
    'gt': '>',
    'lt': '<',
    'is': 'is',
    'like': 'like',
    'in': 'in',
  };
  result: SearchResult = RESULT;
  suggestions = ['aaaaa', 'bbbbb', 'ccccc', 'ddddd', 'abcdefghi'];
  prefix: string[] = [];
  constructor(
    private http: HttpService,
  ) {
  }

  ngOnInit() {
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
    for ( let ii  = 32; ii < 127; ii++) {
      const char = String.fromCharCode(ii);
      this.prefix.push(char);
    }
    console.log(this.prefix);
  }
  submitForm() {
    const forminfo = this.searchForm.value;
    const callback = (result: ApiResult) => {
      this.result = result.data;
    };
    this.http.get_search_result(forminfo.search_info, callback);
  }
  get search_info() { return this.searchForm.get('search_info'); }
  // 排序功能
  searchResultSort(data: Data) {
    const objSorted = Object.keys(data).sort(
      function(a, b) {
        return data[a].rank - data[b].rank;
      }
    );
    return objSorted;
  }
  // private addComponent<T>(component: Type<any> , paramas: T) {
  //   const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
  //   this.vcRef.clear();
  //   const dynamicComponent1 =  this.vcRef.createComponent(componentFactory);
  //   (<any>dynamicComponent1.instance).data = paramas;
  // }
  // appendComponent() {
  //   const sort_result = this.searchResultSort(this.result.filters);
  //   console.log(sort_result);
  //   // for ( const filter in sort_result ) {
  //   // }
  // }
}
