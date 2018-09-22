import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Report2Component } from './report.component';

describe('ReportComponent', () => {
  let component: Report2Component;
  let fixture: ComponentFixture<Report2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Report2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Report2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
