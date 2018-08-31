import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.less']
})
export class UserAccountComponent implements OnInit {
  useraccount=this.fb.group({
    name:[''],
    oldpassword:[''],
    newpassword:[''],
    confirmpassword:['']
  })
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
  }

}
