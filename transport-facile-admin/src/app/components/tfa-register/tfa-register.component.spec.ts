import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TFARegisterComponent } from './tfa-register.component';

describe('TFARegisterComponent', () => {
  let component: TFARegisterComponent;
  let fixture: ComponentFixture<TFARegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TFARegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TFARegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
