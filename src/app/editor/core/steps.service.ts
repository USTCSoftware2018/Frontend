import { Injectable } from '@angular/core';
import {StepHeader} from '../headers/steps';
import {EditorModule} from '../editor.module';

@Injectable({
  providedIn: EditorModule,
})
export class StepsService {

  constructor() { }

  public getDefaultSteps() {}  // 获取默认的过程

  public getUserSteps() { // 获取用户自己的 steps
    throw Error('Never Implement Error');
  }

  public getDefaultProcess() {} // 获取默认小实验

  public getUserProcess() {} // 获取用户定义的小实验

}
