import { Injectable, EventEmitter, } from '@angular/core';

@Injectable()
export class EditorEventService {
  public eventEmit: any;

  constructor() {
      this.eventEmit = new EventEmitter();
  }

}
