import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellACarComponent } from './sell-a-car.component';

describe('SellACarComponent', () => {
  let component: SellACarComponent;
  let fixture: ComponentFixture<SellACarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellACarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellACarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
