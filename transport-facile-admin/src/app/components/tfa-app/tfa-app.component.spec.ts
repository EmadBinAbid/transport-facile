import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TFAAppComponent } from './tfa-app.component';

describe('TFAAppComponent', () => {
  let component: TFAAppComponent;
  let fixture: ComponentFixture<TFAAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TFAAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TFAAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
