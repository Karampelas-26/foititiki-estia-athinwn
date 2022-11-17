import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintainerHeaderComponent } from './maintainer-header.component';

describe('MaintainerHeaderComponent', () => {
  let component: MaintainerHeaderComponent;
  let fixture: ComponentFixture<MaintainerHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaintainerHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaintainerHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
