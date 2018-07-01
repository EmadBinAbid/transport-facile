import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TFAViewServiceMessageComponent } from './tfa-view-service-message.component';

describe('TFAViewServiceMessageComponent', () => {
  let component: TFAViewServiceMessageComponent;
  let fixture: ComponentFixture<TFAViewServiceMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TFAViewServiceMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TFAViewServiceMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
