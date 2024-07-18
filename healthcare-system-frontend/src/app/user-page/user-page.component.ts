import { Component } from '@angular/core';
import { UserNavbarComponent } from '../user-navbar/user-navbar.component';
import { BookAppointmentComponent } from '../book-appointment/book-appointment.component';

@Component({
  selector: 'app-user-page',
  standalone: true,
  imports: [UserNavbarComponent,BookAppointmentComponent],
  templateUrl: './user-page.component.html',
  styleUrl: './user-page.component.css'
})
export class UserPageComponent {

}
