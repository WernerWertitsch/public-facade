import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainRowEntriesComponent } from './main-row-entries.component';

describe('MainRowEntriesComponent', () => {
  let component: MainRowEntriesComponent;
  let fixture: ComponentFixture<MainRowEntriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainRowEntriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainRowEntriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
