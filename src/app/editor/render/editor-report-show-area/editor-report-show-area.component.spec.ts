import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorReportShowAreaComponent } from './editor-report-show-area.component';

describe('EditorReportShowAreaComponent', () => {
  let component: EditorReportShowAreaComponent;
  let fixture: ComponentFixture<EditorReportShowAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorReportShowAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorReportShowAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
