import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimWarningComponent } from './claim-warning.component';

describe('ClaimWarningComponent', () => {
  let component: ClaimWarningComponent;
  let fixture: ComponentFixture<ClaimWarningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClaimWarningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimWarningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
