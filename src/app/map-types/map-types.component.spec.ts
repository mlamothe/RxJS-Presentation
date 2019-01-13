import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapTypesComponent } from './map-types.component';

describe('MapTypesComponent', () => {
  let component: MapTypesComponent;
  let fixture: ComponentFixture<MapTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapTypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
