import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TalksAddComponent } from './talks-add.component';

describe('TalksAddComponent', () => {
  let component: TalksAddComponent;
  let fixture: ComponentFixture<TalksAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TalksAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TalksAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
