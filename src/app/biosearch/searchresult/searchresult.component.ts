import { Component, OnInit } from '@angular/core';
import { USER } from '../../Interface/mock-user';
import { Simuser } from '../../Interface/userinfo';
import {
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-searchresult',
  templateUrl: './searchresult.component.html',
  styleUrls: ['./searchresult.component.less']
})
export class SearchresultComponent implements OnInit {
  searchForm: FormGroup;
  users: Simuser[];
  reports = USER.reports;
  loading: boolean;
  constructor() {
  }

  ngOnInit() {
    this.users = USER.followers;
    this.searchForm = new FormGroup({
      'search_info': new FormControl(null,
        [Validators.required, Validators.minLength(4), Validators.maxLength(20),
          ]),
    });
  }
  submitForm() {

  }
  startloading() {
    this.loading = true;
  }
  endloading() {
    this.loading = true;
  }
}
