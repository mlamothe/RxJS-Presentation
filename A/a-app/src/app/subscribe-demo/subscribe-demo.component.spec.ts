import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribeDemoComponent } from './subscribe-demo.component';

describe('SubscribeDemoComponent', () => {
  let component: SubscribeDemoComponent;
  let fixture: ComponentFixture<SubscribeDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscribeDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscribeDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
