import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverLimitInfoComponent } from './over-limit-info.component';

describe('OverLimitInfoComponent', () => {
  let component: OverLimitInfoComponent;
  let fixture: ComponentFixture<OverLimitInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverLimitInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverLimitInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
