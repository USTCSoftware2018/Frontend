import { Injectable } from '@angular/core';
import {USER} from '../Interface/mock-user';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportServiceService {
  constructor() { }
  getLabel(name: string) {
    return of(name);
  }
}
