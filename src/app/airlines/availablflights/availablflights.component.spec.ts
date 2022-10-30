import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailablflightsComponent } from './availablflights.component';

describe('AvailablflightsComponent', () => {
  let component: AvailablflightsComponent;
  let fixture: ComponentFixture<AvailablflightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvailablflightsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvailablflightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
