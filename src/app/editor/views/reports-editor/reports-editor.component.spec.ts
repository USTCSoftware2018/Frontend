import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsEditorComponent } from './reports-editor.component';

describe('ReportsEditorComponent', () => {
  let component: ReportsEditorComponent;
  let fixture: ComponentFixture<ReportsEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportsEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
