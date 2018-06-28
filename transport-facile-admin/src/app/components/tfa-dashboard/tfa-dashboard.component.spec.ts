import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TFADashboardComponent } from './tfa-dashboard.component';

describe('TFADashboardComponent', () => {
  let component: TFADashboardComponent;
  let fixture: ComponentFixture<TFADashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TFADashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TFADashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
