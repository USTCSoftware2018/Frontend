import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeinfoComponent } from './likeinfo.component';

describe('LikeinfoComponent', () => {
  let component: LikeinfoComponent;
  let fixture: ComponentFixture<LikeinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LikeinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LikeinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
