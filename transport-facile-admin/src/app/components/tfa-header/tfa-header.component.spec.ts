import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TFAHeaderComponent } from './tfa-header.component';

describe('TFAHeaderComponent', () => {
  let component: TFAHeaderComponent;
  let fixture: ComponentFixture<TFAHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TFAHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TFAHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
