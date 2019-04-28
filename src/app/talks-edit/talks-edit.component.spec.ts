import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TalksEditComponent } from './talks-edit.component';

describe('TalksEditComponent', () => {
  let component: TalksEditComponent;
  let fixture: ComponentFixture<TalksEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TalksEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TalksEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
