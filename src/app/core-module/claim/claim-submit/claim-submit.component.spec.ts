import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimSubmitComponent } from './claim-submit.component';

describe('ClaimSubmitComponent', () => {
  let component: ClaimSubmitComponent;
  let fixture: ComponentFixture<ClaimSubmitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClaimSubmitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
