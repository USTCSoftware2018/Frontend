import { Injectable } from '@angular/core';
import { EditorModule } from '../editor.module';

import { HttpService } from '../../http.service';

@Injectable({
  providedIn: EditorModule,
})
export class GetDataService {

  constructor(public httpService: HttpService) { }

  public getSteps(content: object) {}

  public getProcess() {}

  public getReport() {}

  public setSteps() {}

  public setProcess() {}

  public setReport() {}

}
