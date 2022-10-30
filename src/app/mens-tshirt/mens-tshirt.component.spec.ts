import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensTshirtComponent } from './mens-tshirt.component';

describe('MensTshirtComponent', () => {
  let component: MensTshirtComponent;
  let fixture: ComponentFixture<MensTshirtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MensTshirtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MensTshirtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
