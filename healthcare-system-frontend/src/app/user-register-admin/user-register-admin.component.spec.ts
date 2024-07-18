import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRegisterAdminComponent } from './user-register-admin.component';

describe('UserRegisterAdminComponent', () => {
  let component: UserRegisterAdminComponent;
  let fixture: ComponentFixture<UserRegisterAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserRegisterAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserRegisterAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
