import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimantGpComponent } from './claimant-gp.component';

describe('ClaimantGpComponent', () => {
  let component: ClaimantGpComponent;
  let fixture: ComponentFixture<ClaimantGpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClaimantGpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimantGpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
