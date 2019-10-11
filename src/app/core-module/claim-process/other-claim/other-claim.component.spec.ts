import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherClaimComponent } from './other-claim.component';

describe('OtherClaimComponent', () => {
  let component: OtherClaimComponent;
  let fixture: ComponentFixture<OtherClaimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherClaimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherClaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
