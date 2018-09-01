import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Eachinfo1Component } from './eachinfo1.component';

describe('Eachinfo1Component', () => {
  let component: Eachinfo1Component;
  let fixture: ComponentFixture<Eachinfo1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Eachinfo1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Eachinfo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
