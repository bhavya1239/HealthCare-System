import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddCenterComponent } from './admin-add-center.component';

describe('AdminAddCenterComponent', () => {
  let component: AdminAddCenterComponent;
  let fixture: ComponentFixture<AdminAddCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminAddCenterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAddCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
