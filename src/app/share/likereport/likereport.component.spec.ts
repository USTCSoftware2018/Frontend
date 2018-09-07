import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LikereportComponent } from './likereport.component';

describe('LikereportComponent', () => {
  let component: LikereportComponent;
  let fixture: ComponentFixture<LikereportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LikereportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LikereportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
