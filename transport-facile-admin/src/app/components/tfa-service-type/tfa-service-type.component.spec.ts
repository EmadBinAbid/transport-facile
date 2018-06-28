import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TFAServiceTypeComponent } from './tfa-service-type.component';

describe('TFAServiceTypeComponent', () => {
  let component: TFAServiceTypeComponent;
  let fixture: ComponentFixture<TFAServiceTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TFAServiceTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TFAServiceTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
