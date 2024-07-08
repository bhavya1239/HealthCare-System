import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddTestComponent } from './admin-add-test.component';

describe('AdminAddTestComponent', () => {
  let component: AdminAddTestComponent;
  let fixture: ComponentFixture<AdminAddTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminAddTestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAddTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
