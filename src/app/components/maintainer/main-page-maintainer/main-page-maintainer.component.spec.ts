import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageMaintainerComponent } from './main-page-maintainer.component';

describe('MainPageMaintainerComponent', () => {
  let component: MainPageMaintainerComponent;
  let fixture: ComponentFixture<MainPageMaintainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPageMaintainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainPageMaintainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
