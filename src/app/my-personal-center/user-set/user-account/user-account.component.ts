import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { HttpService} from '../../../http.service';
import { ApiResult } from '../../../Interface/ApiResult';

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
  callback=function(result: ApiResult){
    console.log(result);
}
  constructor(private fb:FormBuilder,private http:HttpService) { }
  update_password():void{
    this.http.update_password(this.useraccount.value.old_password, this.useraccount.value.new_password, this.callback);
  }
  ngOnInit() {
  }

}
