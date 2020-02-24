import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainRowEntryComponent } from './main-row-entry.component';

describe('MainRowEntryComponent', () => {
  let component: MainRowEntryComponent;
  let fixture: ComponentFixture<MainRowEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainRowEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainRowEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
