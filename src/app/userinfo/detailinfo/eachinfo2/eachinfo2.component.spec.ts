import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Eachinfo2Component } from './eachinfo2.component';

describe('Eachinfo2Component', () => {
  let component: Eachinfo2Component;
  let fixture: ComponentFixture<Eachinfo2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Eachinfo2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Eachinfo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
