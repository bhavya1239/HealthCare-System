import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserAppointmentsComponent } from './user-appointments/user-appointments.component';
import { AdminCenterListComponent } from './admin-center-list/admin-center-list.component';
import { AdminAddCenterComponent } from './admin-add-center/admin-add-center.component';
import { AdminAddTestComponent } from './admin-add-test/admin-add-test.component';
import { AdminAppointmentsComponent } from './admin-appointments/admin-appointments.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule,
    AppComponent,
    UserListComponent,
    UserAppointmentsComponent,
    AdminCenterListComponent,
    AdminAddCenterComponent,
    AdminAddTestComponent,
    AdminAppointmentsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'healthcare-system-frontend';
}
