import { NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { BiosearchRoutingModule } from './biosearch-routing.module';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import en from '@angular/common/locales/en';
import {ShareModule} from '../share/share.module';

registerLocaleData(en);
import { SearchboxComponent } from './searchbox/searchbox.component';

@NgModule({
  imports: [
    CommonModule,
    BiosearchRoutingModule,
    NgZorroAntdModule,
    ShareModule
  ],
  declarations: [
    SearchboxComponent,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }]
})
export class BiosearchModule { }
