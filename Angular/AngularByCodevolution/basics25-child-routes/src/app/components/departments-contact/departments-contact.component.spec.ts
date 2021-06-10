import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentsContactComponent } from './departments-contact.component';

describe('DepartmentsContactComponent', () => {
  let component: DepartmentsContactComponent;
  let fixture: ComponentFixture<DepartmentsContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentsContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentsContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
