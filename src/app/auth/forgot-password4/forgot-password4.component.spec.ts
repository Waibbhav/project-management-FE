import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotPassword4Component } from './forgot-password4.component';

describe('ForgotPassword4Component', () => {
  let component: ForgotPassword4Component;
  let fixture: ComponentFixture<ForgotPassword4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgotPassword4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForgotPassword4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
