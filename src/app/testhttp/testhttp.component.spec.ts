import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TesthttpComponent } from './testhttp.component';

describe('TesthttpComponent', () => {
  let component: TesthttpComponent;
  let fixture: ComponentFixture<TesthttpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TesthttpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TesthttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
