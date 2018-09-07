import { Component, OnInit } from '@angular/core';
import { forbiddenUsernameValidator, forbiddenEmailValidator} from './forbidden-signin';
import {
  AbstractControl,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.less']
})
export class SigninComponent implements OnInit {
  validateForm: FormGroup;
  shake = false;
  constructor() { }
  ngOnInit(): void {
    this.validateForm = new FormGroup({
      'userName': new FormControl(null,
        [Validators.required, Validators.minLength(4), Validators.maxLength(20),
          forbiddenUsernameValidator(), forbiddenEmailValidator()]),
      'password': new FormControl(null,
        [Validators.required]),
      'remember': new FormControl(true)
    });
  }
  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[ i ].markAsDirty();
      this.validateForm.controls[ i ].updateValueAndValidity();
    }
  }
  get username() { return this.validateForm.get('userName'); }
  get password() { return this.validateForm.get('password'); }
  startShake() {
    this.shake = true;
  }
  stopShake() {
    this.shake = false;
  }
}
