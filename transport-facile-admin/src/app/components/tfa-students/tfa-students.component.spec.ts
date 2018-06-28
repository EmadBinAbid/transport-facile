import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TFAStudentsComponent } from './tfa-students.component';

describe('TFAStudentsComponent', () => {
  let component: TFAStudentsComponent;
  let fixture: ComponentFixture<TFAStudentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TFAStudentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TFAStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
