import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TFALoginComponent } from './tfa-login.component';

describe('TFALoginComponent', () => {
  let component: TFALoginComponent;
  let fixture: ComponentFixture<TFALoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TFALoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TFALoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
