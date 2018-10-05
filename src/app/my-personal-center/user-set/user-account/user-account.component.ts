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
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.less']
})
export class UserAccountComponent implements OnInit {
  useraccount=this.fb.group({
    oldpassword:[''],
    newpassword:[''],
    confirmpassword:['']
  })
  callback = (result: ApiResult) => {
    console.log(result);
    if (result.success) {
      this.message.success('Update sucessfully');
    }else {
      this.message.error('Fail to Update.' + result.data.detail);
    }
  }
  constructor(private fb:FormBuilder,private http:HttpService, private message: NzMessageService) { }

  update_password():void{
    console.log(this.useraccount.value);
    console.log(this.useraccount.value.oldpassword);
    this.http.update_password(this.useraccount.value.oldpassword, this.useraccount.value.newpassword, this.callback);
  }
  ngOnInit() {
  }

}
