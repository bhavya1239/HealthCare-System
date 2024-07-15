// src/app/user/user.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Import the components
import { RegisterUserFormComponent } from '../register-user-form/register-user-form.component';
import { AdminNavbarComponent } from '../admin-navbar/admin-navbar.component';

// Import services
import { AdminService } from '../service/admin.service';
import { AuthService } from '../service/auth.service';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RegisterUserFormComponent,
    AdminNavbarComponent
  ],
  providers: [
    AdminService,
    AuthService
  ]
})
export class UserModule { }
