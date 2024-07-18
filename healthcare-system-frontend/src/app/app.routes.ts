import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
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
import { AdminPageComponent } from './admin-page/admin-page.component';
import { UserRegisterAdminComponent } from './user-register-admin/user-register-admin.component';
import { UserPageComponent } from './user-page/user-page.component';

export const routes: Routes = [
  { path: '', component: SignInPageComponent },  // Default route
  { path: 'register', component: RegisterUserFormComponent },
  { path: 'login', component: LoginComponent },
  { path: 'user-list', component: UserListComponent },  // Protected route
  { path: 'add-center', component: AddCenterComponent},  // Protected route
  { path: 'add-appointment', component: AddAppointmentComponent },  // Protected route
  { path: 'add-test', component: AddTestComponent },  // Protected route
  { path: 'center-list', component: CenterListComponent },  // Protected route
  { path: 'test-list', component: TestListComponent },  // Protected route
  { path: 'admin-navbar', component: AdminNavbarComponent }, 
  {path:'admin',component:AdminPageComponent},
  {path:'user-page',component:UserPageComponent},
  {path:'admin-register',component:UserRegisterAdminComponent},// Protected route
  { path: '**', redirectTo: '' },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
