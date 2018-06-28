import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TFANewServiceMessageComponent } from './tfa-new-service-message.component';

describe('TFANewServiceMessageComponent', () => {
  let component: TFANewServiceMessageComponent;
  let fixture: ComponentFixture<TFANewServiceMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TFANewServiceMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TFANewServiceMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
