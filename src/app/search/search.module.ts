import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from '../share/share.module';
import { NgZorroAntdModule, NZ_I18N, en_US, zh_CN } from 'ng-zorro-antd';
import { SearchRoutingModule } from './search-routing.module';
import { SearchboxComponent } from './searchbox/searchbox.component';

@NgModule({
  imports: [
    CommonModule,
    SearchRoutingModule
    ShareModule,
    NgZorroAntdModule,
  ],
  declarations: [SearchboxComponent],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
})
export class SearchModule { }
