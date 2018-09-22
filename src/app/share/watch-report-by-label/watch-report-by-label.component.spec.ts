import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchReportByLabelComponent } from './watch-report-by-label.component';

describe('WatchReportByLabelComponent', () => {
  let component: WatchReportByLabelComponent;
  let fixture: ComponentFixture<WatchReportByLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatchReportByLabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchReportByLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
