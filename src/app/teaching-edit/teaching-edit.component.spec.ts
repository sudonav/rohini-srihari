import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachingEditComponent } from './teaching-edit.component';

describe('TeachingEditComponent', () => {
  let component: TeachingEditComponent;
  let fixture: ComponentFixture<TeachingEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeachingEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachingEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
