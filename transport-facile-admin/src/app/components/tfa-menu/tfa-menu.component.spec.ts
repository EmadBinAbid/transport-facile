import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TFAMenuComponent } from './tfa-menu.component';

describe('TFAMenuComponent', () => {
  let component: TFAMenuComponent;
  let fixture: ComponentFixture<TFAMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TFAMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TFAMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
