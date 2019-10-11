import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiptAmountComponent } from './receipt-amount.component';

describe('ReceiptAmountComponent', () => {
  let component: ReceiptAmountComponent;
  let fixture: ComponentFixture<ReceiptAmountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceiptAmountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiptAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
