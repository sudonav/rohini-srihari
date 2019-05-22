import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachingDetailComponent } from './teaching-detail.component';

describe('TeachingDetailComponent', () => {
  let component: TeachingDetailComponent;
  let fixture: ComponentFixture<TeachingDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeachingDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachingDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
