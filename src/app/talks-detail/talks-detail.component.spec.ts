import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TalksDetailComponent } from './talks-detail.component';

describe('TalksDetailComponent', () => {
  let component: TalksDetailComponent;
  let fixture: ComponentFixture<TalksDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TalksDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TalksDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
