import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationAddComponent } from './publication-add.component';

describe('PublicationAddComponent', () => {
  let component: PublicationAddComponent;
  let fixture: ComponentFixture<PublicationAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicationAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicationAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
