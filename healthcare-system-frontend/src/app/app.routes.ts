import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserAppointmentsComponent } from './user-appointments/user-appointments.component';
import { AdminCenterListComponent } from './admin-center-list/admin-center-list.component';
import { AdminAddCenterComponent } from './admin-add-center/admin-add-center.component';
import { AdminAddTestComponent } from './admin-add-test/admin-add-test.component';
import { AdminAppointmentsComponent } from './admin-appointments/admin-appointments.component';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RegisterUserFormComponent } from './register-user-form/register-user-form.component';

export const routes: Routes = [
  { path: 'user-list', component: UserListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'user-register', component: RegisterUserFormComponent },
  { path: 'user-appointments', component: UserAppointmentsComponent },
  { path: 'admin-center-list', component: AdminCenterListComponent },
  { path: 'admin-add-center', component: AdminAddCenterComponent },
  { path: 'admin-add-test', component: AdminAddTestComponent },
  { path: 'admin-appointments', component: AdminAppointmentsComponent },
  { path: '', redirectTo: '/user-list', pathMatch: 'full' },
  { path: '**', redirectTo: '/user-list' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
