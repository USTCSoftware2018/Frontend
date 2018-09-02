import {AbstractControl, Validator, ValidatorFn, Validators} from '@angular/forms';

const email: RegExp = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/ ;
const username: RegExp = /^[a-zA-Z0-9_-]{4,16}$/ ;

export function forbiddenUsernameValidator(): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    let forbidden: Boolean;
    if (email.test(control.value)) {
      if (username.test(control.value)) {
        forbidden = false;
      } else {
        forbidden = true;
      }
    } else {
      forbidden = true;
    }
    return null;
  };
}
export function forbiddenEmailValidator(): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    let forbidden: Boolean;
    if (email.test(control.value)) {
      if (username.test(control.value)) {
        forbidden = false;
      } else {
        forbidden = true;
      }
    } else {
      forbidden = true;
    }
    return null;
  };
}
