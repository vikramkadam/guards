import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirlineshomeComponent } from './airlineshome.component';

describe('AirlineshomeComponent', () => {
  let component: AirlineshomeComponent;
  let fixture: ComponentFixture<AirlineshomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirlineshomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AirlineshomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
