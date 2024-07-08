import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCenterListComponent } from './admin-center-list.component';

describe('AdminCenterListComponent', () => {
  let component: AdminCenterListComponent;
  let fixture: ComponentFixture<AdminCenterListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminCenterListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCenterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
