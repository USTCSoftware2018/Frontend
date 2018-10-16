import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllDbComponent } from './all-db.component';

describe('AllDbComponent', () => {
  let component: AllDbComponent;
  let fixture: ComponentFixture<AllDbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllDbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllDbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
