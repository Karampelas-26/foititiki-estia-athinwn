import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageStudentComponent } from './main-page-student.component';

describe('MainPageStudentComponent', () => {
  let component: MainPageStudentComponent;
  let fixture: ComponentFixture<MainPageStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPageStudentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainPageStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
