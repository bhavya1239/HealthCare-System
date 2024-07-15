// src/app/app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserAppointmentsComponent } from './user-appointments/user-appointments.component';
import { LoginComponent } from './login/login.component';
import { AddAppointmentComponent } from './add-appointment/add-appointment.component';
import { AddTestComponent } from './add-test/add-test.component';
import { AddCenterComponent } from './add-center/add-center.component';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { CenterListComponent } from './center-list/center-list.component';
import { TestListComponent } from './test-list/test-list.component';
import { AuthGuard } from './guards/auth.guard';  // Import AuthGuard
import { RegisterUserFormComponent } from './register-user-form/register-user-form.component';

export const routes: Routes = [
  { path: '', component: SignInPageComponent },  // Default route
  { path: 'register', component: RegisterUserFormComponent },
  { path: 'login', component: LoginComponent },
  { path: 'user-list', component: UserListComponent, canActivate: [AuthGuard] },  // Protected route
  { path: 'user-appointments', component: UserAppointmentsComponent, canActivate: [AuthGuard] },  // Protected route
  { path: 'add-center', component: AddCenterComponent, canActivate: [AuthGuard] },  // Protected route
  { path: 'add-appointment', component: AddAppointmentComponent, canActivate: [AuthGuard] },  // Protected route
  { path: 'add-test', component: AddTestComponent, canActivate: [AuthGuard] },  // Protected route
  { path: 'center-list', component: CenterListComponent, canActivate: [AuthGuard] },  // Protected route
  { path: 'test-list', component: TestListComponent, canActivate: [AuthGuard] },  // Protected route
  { path: 'admin-navbar', component: AdminNavbarComponent, canActivate: [AuthGuard] },  // Protected route
  { path: '**', redirectTo: '' },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
