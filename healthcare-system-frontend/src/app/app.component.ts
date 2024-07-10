
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserAppointmentsComponent } from './user-appointments/user-appointments.component';
import { AddAppointmentComponent } from './add-appointment/add-appointment.component';
import { ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { AddTestComponent } from './add-test/add-test.component';
import { CommonModule } from '@angular/common';
import { AddCenterComponent } from './add-center/add-center.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterModule,
    AppComponent,
    UserListComponent,
    UserAppointmentsComponent,
    AddAppointmentComponent,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    AddTestComponent,
    AddCenterComponent
    
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'healthcare-system-frontend';
}
