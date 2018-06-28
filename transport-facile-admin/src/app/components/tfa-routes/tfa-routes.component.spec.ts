import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TFARoutesComponent } from './tfa-routes.component';

describe('TFARoutesComponent', () => {
  let component: TFARoutesComponent;
  let fixture: ComponentFixture<TFARoutesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TFARoutesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TFARoutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
