import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassificationInputComponent } from './classification-input.component';

describe('ClassificationInputComponent', () => {
  let component: ClassificationInputComponent;
  let fixture: ComponentFixture<ClassificationInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassificationInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassificationInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
