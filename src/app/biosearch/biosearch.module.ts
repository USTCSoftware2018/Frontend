import { NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { BiosearchRoutingModule } from './biosearch-routing.module';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import en from '@angular/common/locales/en';
import {ShareModule} from '../share/share.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

registerLocaleData(en);
import { SearchboxComponent } from './searchbox/searchbox.component';
import { SearchresultComponent} from './searchresult/searchresult.component';

@NgModule({
  imports: [
    CommonModule,
    BiosearchRoutingModule,
    NgZorroAntdModule,
    ShareModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    SearchboxComponent,
    SearchresultComponent
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  exports: [
    NgZorroAntdModule
  ]
})
export class BiosearchModule { }
