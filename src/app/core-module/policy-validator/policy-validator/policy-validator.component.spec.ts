import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyValidatorComponent } from './policy-validator.component';

describe('PolicyValidatorComponent', () => {
  let component: PolicyValidatorComponent;
  let fixture: ComponentFixture<PolicyValidatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolicyValidatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolicyValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
