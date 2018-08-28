import { Injectable } from '@angular/core';
import {EditorModule} from '../editor.module';

@Injectable({
  providedIn: EditorModule,
})
export class HttpService {

  constructor() { }
}
