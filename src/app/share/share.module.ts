import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PandaComponent } from './panda/panda.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PandaComponent
  ],
  // 公用导出组件放在exports数组内
  exports: [
    PandaComponent
  ]
})
export class ShareModule { }
