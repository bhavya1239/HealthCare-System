import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserAppointmentsComponent } from './user-appointments/user-appointments.component';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RegisterUserFormComponent } from './register-user-form/register-user-form.component';
import { AddAppointmentComponent } from './add-appointment/add-appointment.component';
import { AddTestComponent } from './add-test/add-test.component';
import { AddCenterComponent } from './add-center/add-center.component';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { CenterListComponent } from './center-list/center-list.component';
import { TestListComponent } from './test-list/test-list.component';

export const routes: Routes = [
  { path: 'user-list', component: UserListComponent },
  {path:'',component:SignInPageComponent},
  { path: 'login', component: LoginComponent },
  { path: 'user-register', component: RegisterUserFormComponent },
  { path: 'user-appointments', component: UserAppointmentsComponent },
  { path: 'add-center', component: AddCenterComponent },
  { path: 'add-appointment', component: AddAppointmentComponent },
  { path: 'add-test', component: AddTestComponent },
  { path: 'center-list', component: CenterListComponent },
  {path:'test-list',component:TestListComponent},
  {path:'admin-navbar',component:AdminNavbarComponent},
  { path: '', redirectTo: '/add-center', pathMatch: 'full' },
  { path: '', redirectTo: '/user-list', pathMatch: 'full' },
  { path: '**', redirectTo: '/user-list' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
