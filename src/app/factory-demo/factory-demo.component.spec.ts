import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FactoryDemoComponent } from './factory-demo.component';

describe('FactoryDemoComponent', () => {
  let component: FactoryDemoComponent;
  let fixture: ComponentFixture<FactoryDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FactoryDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FactoryDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
