import {Component, ViewChild, OnInit, TemplateRef, ElementRef} from '@angular/core';
import { USER } from '../../Interface/mock-user';
import { Simuser, Report, BioBrick } from '../../Interface/userinfo';
import { Data, Filter} from '../search-result';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import {HttpService} from '../../http.service';
import {ApiResult} from '../../Interface/ApiResult';
import { DB } from '../search-result';
import { RESULT, MOCKDB } from '../mock-search';

class UsingArrays {
  'report': Report[];
  'db': DB[];
  'user': Simuser[];
  'brick': BioBrick[];
}
@Component({
  selector: 'app-searchresult',
  templateUrl: './searchresult.component.html',
  styleUrls: ['./searchresult.component.less']
})
export class SearchresultComponent implements OnInit {
  @ViewChild('usersTemplate') usersRef: TemplateRef<any>;
  @ViewChild('reportsTemplate') reportsRef: TemplateRef<any>;
  @ViewChild('dbsTemplate') dbsRef: TemplateRef<any>;
  @ViewChild('blastTemplate') blastRef: TemplateRef<any>;
  @ViewChild('bricksTemplate') bricksRef: TemplateRef<any>;
  searchForm: FormGroup;
  blastForm: FormGroup;
  User = USER;
  arrays: UsingArrays;
  filters: Filter[];
  data: Data[];
  order_keys: string[] = [];
  order_templates:  (TemplateRef<any>|ElementRef)[] = [];
  order_visible: boolean[];
  isOkLoading = false;
  // blast input
  blast_value: string;
  blast_type: string;
  @ViewChild('submitBlast') submitBlast: ElementRef;
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
  filtertype = {
    'time': 'time',
    'title': 'title',
    'name': 'name',
    'addr': '',
    'user': 'user',
    'label': 'label'
  };
  keywords: string[] = [];
  options: string[];
  visible: boolean;
  get search_info() { return this.searchForm.get('search_info'); }
  constructor(
    private http: HttpService,
    private fb: FormBuilder
  ) {
  }

  ngOnInit() {
    this.arrays = new UsingArrays();
    this.searchForm = new FormGroup({
      'search_info': new FormControl( null,
      ),
    });
    // this.initPrefix();
    this.initSuggestion();
  }
  onChange(value: string): void {
    this.visible = !value;
    if (!value || value[value.length - 1] === ' ') {
      this.options = [];
    } else {
      const prefix = value.substr(0, value.lastIndexOf(' '));
      const lookup = value.substr(value.lastIndexOf(' ') + 1, value.length).toLowerCase();
      this.options = [];
      if (lookup.length >= 2) {
        for (const keyword of this.keywords) {
          if (keyword.toLowerCase().startsWith(lookup)) {
            this.options.push(prefix + ' ' + keyword);
          }
        }
        for (const keyword of this.keywords) {
          if (this.options.indexOf(prefix + ' ' + keyword) === -1) {
            if (keyword.toLowerCase().indexOf(lookup) !== -1) {
              this.options.push(prefix + ' ' + keyword);
            }
          }
        }
      }
    }
  }
  initSuggestion() {
    const callback = (result: ApiResult) => {
      if (result.success) {
        this.keywords = result.data.keywords;
      } else {
        this.keywords = [];
      }
    };
    this.http.get_keywords(callback);
  }
  // initPrefix = () => {
  //   for ( let ii  = 32; ii < 127; ii++) {
  //     const char = String.fromCharCode(ii);
  //     this.prefix.push(char);
  //   }
  //   console.log(this.prefix);
  // }
  submitForm = () => {
    const forminfo = this.searchForm.value;
    this.http.get_search_result(forminfo.search_info, this.proccessResult);
  }
  proccessResult = (result: ApiResult) => {
    this.isOkLoading = false;
    this.clearData();
    if (result.success) {
      this.filters = result.data.filters;
      this.data = result.data.data;
      this.data = this.searchResultSort(this.data);
      this.InitData(this.data);
      console.log(this.data);
      this.isOkLoading = true;
    }
  }
  // 排序功能
  searchResultSort = (data: Data[]) => {
    const sorted = data.sort(
      function(a, b) {
        return a.rank - b.rank;
      }
    );
    console.log(sorted);
    return sorted;
  }
  // 填入
  InitData = (data: Data[]) => {
    for (const i of data) {
        this.order_keys.push(i.type);
        if (i.type === 'db') {
          this.arrays[i.type] = i.data.sort(
            function (a, b) {
              return b.count - a.count;
            });
        }
        this.arrays[i.type] = i.data;
        if (i.data.length > 0 && i.rank !== -1) {
          this.order_visible.push(true);
        } else {
          this.order_visible.push(false);
        }
        const template = this.type2Template(i.type);
        this.order_templates.push(template);
        console.log(this.order_templates, this.order_keys, this.arrays);
    }
  }
  clearData = () => {
    this.order_keys = [];
    this.order_templates = [];
    this.order_visible = [];
  }
  type2Template = (type: string) => {
    switch (type) {
      case 'user': return this.usersRef;
      case 'report': return this.reportsRef;
      case 'db': return this.dbsRef;
      case 'blast': return this.blastRef;
      case 'brick': return this.bricksRef;
    }
  }
  // blast form
  submitBlastForm() {
    // const elem = document.getElementById('submitBlast');
    // elem.click();
    // const evt = new MouseEvent('click', { bubbles: true, cancelable: true, view: window });
    this.submitBlast.nativeElement.click();
    console.log('blast');
  }
  goToblastn() {
    this.blast_type = 'blastn';
    this.blast_value = this.search_info.value;
    this.submitBlastForm();
  }
  goToblastx() {
    this.blast_type = 'blastx';
    this.blast_value = this.search_info.value;
    this.submitBlastForm();
  }
  goTotblastn() {
    this.blast_type = 'tblastn';
    this.blast_value = this.search_info.value;
    this.submitBlastForm();
  }
  goTotblastp() {
    this.blast_type = 'blastp';
    this.blast_value = this.search_info.value;
    this.submitBlastForm();
  }
}
