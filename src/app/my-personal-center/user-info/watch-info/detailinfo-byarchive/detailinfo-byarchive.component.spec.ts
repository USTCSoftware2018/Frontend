import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailinfoByarchieveComponent } from './detailinfo-byarchive.component';

describe('DetailinfoByarchieveComponent', () => {
  let component: DetailinfoByarchieveComponent;
  let fixture: ComponentFixture<DetailinfoByarchieveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailinfoByarchieveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailinfoByarchieveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
