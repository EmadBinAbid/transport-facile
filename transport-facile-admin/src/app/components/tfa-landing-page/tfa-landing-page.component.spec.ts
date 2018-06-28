import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TFALandingPageComponent } from './tfa-landing-page.component';

describe('TFALandingPageComponent', () => {
  let component: TFALandingPageComponent;
  let fixture: ComponentFixture<TFALandingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TFALandingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TFALandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
