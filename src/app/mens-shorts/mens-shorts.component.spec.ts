import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensShortsComponent } from './mens-shorts.component';

describe('MensShortsComponent', () => {
  let component: MensShortsComponent;
  let fixture: ComponentFixture<MensShortsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MensShortsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MensShortsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
