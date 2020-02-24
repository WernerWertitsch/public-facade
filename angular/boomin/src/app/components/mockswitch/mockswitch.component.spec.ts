import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MockswitchComponent } from './mockswitch.component';

describe('MockswitchComponent', () => {
  let component: MockswitchComponent;
  let fixture: ComponentFixture<MockswitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MockswitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MockswitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
