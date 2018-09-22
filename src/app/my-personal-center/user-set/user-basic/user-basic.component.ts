import { Component, OnInit, Input } from '@angular/core';
import { NzMessageService, UploadFile } from 'ng-zorro-antd';
import { FormGroup, FormControl, Validators, ValidationErrors, FormBuilder } from '@angular/forms';
import { Observable, Observer } from 'rxjs';
import { forbiddenNameValidator } from '../formvalidate/forbidden-name.directive';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-user-basic',
  templateUrl: './user-basic.component.html',
  styleUrls: ['./user-basic.component.less']
})
export class UserBasicComponent implements OnInit {
  loading = false;
  viewImage="//zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png";
  issaved = false;
  usermes=this.fb.group({

    photo: [''],
    actualname: ['',[Validators.required,
      Validators.minLength(4),
      forbiddenNameValidator(/Peng/)
    ]],
    bio:[''],
    location: ['', [Validators.required]],
    school: [''],
    email: ['', [Validators.email]],
  });

  beforeUpload = (file: File) => {
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      this.msg.error('Image must smaller than 2MB!');
    }
    return isLt2M;
  };
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
  onSave(){
    this.issaved=true;
  }
  constructor(private fb:FormBuilder,private msg: NzMessageService,private http: HttpService) { }

  ngOnInit() {
  }

}
