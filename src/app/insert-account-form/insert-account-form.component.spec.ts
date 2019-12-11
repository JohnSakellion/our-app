import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertAccountFormComponent } from './insert-account-form.component';

describe('InsertAccountFormComponent', () => {
  let component: InsertAccountFormComponent;
  let fixture: ComponentFixture<InsertAccountFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertAccountFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertAccountFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
