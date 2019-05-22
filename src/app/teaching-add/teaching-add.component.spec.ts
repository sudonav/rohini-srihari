import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachingAddComponent } from './teaching-add.component';

describe('TeachingAddComponent', () => {
  let component: TeachingAddComponent;
  let fixture: ComponentFixture<TeachingAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeachingAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachingAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
