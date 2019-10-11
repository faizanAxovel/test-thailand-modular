import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultDateComponent } from './consult-date.component';

describe('ConsultDateComponent', () => {
  let component: ConsultDateComponent;
  let fixture: ComponentFixture<ConsultDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
