import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertContactFormComponent } from './insert-contact-form.component';

describe('InsertContactFormComponent', () => {
  let component: InsertContactFormComponent;
  let fixture: ComponentFixture<InsertContactFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertContactFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertContactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
