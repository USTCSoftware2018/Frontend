import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import {forbiddenEmailValidator, forbiddenUsernameValidator, forbiddenAlphaValidator,
  forbiddenNumericValidator, forbiddenSpecialValidator} from './forbidden-signup';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.less']
})
export class SignupComponent implements OnInit {
  validateForm: FormGroup;
  shake = false;
  constructor() { }

  ngOnInit() {
    this.validateForm = new FormGroup({
      'username': new FormControl(null,
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(20),
          forbiddenUsernameValidator(),
        ]),
      'email': new FormControl(null,
        [Validators.required, forbiddenEmailValidator()]),
      'password': new FormControl(null,
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(30),
          forbiddenSpecialValidator(),
          forbiddenNumericValidator(),
          forbiddenAlphaValidator()
        ])
    });
  }
  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[ i ].markAsDirty();
      this.validateForm.controls[ i ].updateValueAndValidity();
    }
  }
  get username() { return this.validateForm.get('username'); }
  get password() { return this.validateForm.get('password'); }
  get email() { return this.validateForm.get('email'); }
  startShake() {
    this.shake = true;
  }
  stopShake() {
    this.shake = false;
  }
}
