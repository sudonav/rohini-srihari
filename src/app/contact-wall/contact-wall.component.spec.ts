import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactWallComponent } from './contact-wall.component';

describe('ContactWallComponent', () => {
  let component: ContactWallComponent;
  let fixture: ComponentFixture<ContactWallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactWallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactWallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
