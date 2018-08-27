import { Injectable } from '@angular/core';
import {Report} from './report';
import {REPORTS} from './mock-report';

@Injectable({
  providedIn: 'root'
})
export class ReportServiceService {
  getReports(): Report[] {
    return REPORTS;
  }
  constructor() { }
}
