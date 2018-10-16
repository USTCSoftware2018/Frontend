import { Component, OnInit, Input } from '@angular/core';
import { NzMessageService, UploadFile } from 'ng-zorro-antd';
import { FormGroup, FormControl, Validators, ValidationErrors, FormBuilder } from '@angular/forms';
import { Observable, Observer } from 'rxjs';
import { forbiddenNameValidator } from '../formvalidate/forbidden-name.directive';
import { HttpService } from '../../../http.service';
import {ApiResult} from '../../../Interface/ApiResult';

@Component({
  selector: 'app-user-basic',
  templateUrl: './user-basic.component.html',
  styleUrls: ['./user-basic.component.less']
})
export class UserBasicComponent implements OnInit {
  loading = false;
  viewImage = '//zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png';
  issaved = false;
  usermes = this.fb.group({
    photo: [''],
    actualname: ['', [ Validators.required,
      Validators.minLength(4),
      forbiddenNameValidator(/Peng/)
    ]],
    description: [''],
    location: ['', [Validators.required]],
    organization: [''],
    email: ['', [Validators.email]],
  });
  personalmes = {
    photo: '',
    actualname: '',
    description: '',
    location: '',
    organization: '',
    email: '',
  };

  beforeUpload = (file: File) => {
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      this.message.error('Image must smaller than 2MB!');
    }
    return isLt2M;
  }

  private getBase64(img: File, callback: (img: {}) => void): void {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }

  handleChange(info: { file: UploadFile }): void {
    if (info.file.status === 'uploading') {
      this.loading = true;
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      this.getBase64(info.file.originFileObj, (img: string) => {
        this.loading = false;
        this.viewImage = img;
      });
    }
  }

  onSave() {
    this.issaved = true;
    console.log(this.usermes.value);
    this.http.update_profile( this.usermes.value.photo,
                              this.usermes.value.actualname,
                              this.usermes.value.location,
                              this.usermes.value.description,
                              this.usermes.value.organization,
                              this.usermes.value.email,
                              this.callback);
  }
  callback = (result: ApiResult) => {
    console.log(result);
    if (result.success) {
      this.message.success('Update sucessfully');
    } else {
      this.message.error('Fail to Update.' + result.data.detail);
    }
  }

  get_simuser = (result: ApiResult) => {
   console.log(result);
    this.personalmes.photo = result.data.avatar_url;
   this.personalmes.actualname = result.data.actualname;
    this.personalmes.location = result.data.location;
    this.personalmes.description = result.data.description;
    this.personalmes.organization = result.data.organization;
    this.personalmes.email = result.data.email;
  }

  constructor(private fb: FormBuilder, private message: NzMessageService, private http: HttpService) { }

  ngOnInit() {
   this.http.get_simuser_by_id(1, this.get_simuser);
  }

}
