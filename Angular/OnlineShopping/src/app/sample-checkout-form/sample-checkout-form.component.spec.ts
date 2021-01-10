import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleCheckoutFormComponent } from './sample-checkout-form.component';

describe('SampleCheckoutFormComponent', () => {
  let component: SampleCheckoutFormComponent;
  let fixture: ComponentFixture<SampleCheckoutFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SampleCheckoutFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleCheckoutFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
