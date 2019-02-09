import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColdVsHotComponent } from './cold-vs-hot.component';

describe('ColdVsHotComponent', () => {
  let component: ColdVsHotComponent;
  let fixture: ComponentFixture<ColdVsHotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColdVsHotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColdVsHotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
