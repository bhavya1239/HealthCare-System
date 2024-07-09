
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppointmentService } from '../service/appointment.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-add-appointment',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule,MatDatepickerModule, MatNativeDateModule,MatSelectModule],
  templateUrl: './add-appointment.component.html',
  styleUrl: './add-appointment.component.css'
})
export class AddAppointmentComponent {
  appointmentForm: FormGroup;
  loggedInUser: string = 'John Doe'; // Replace with actual logged-in user info
  tests = [
    { id: 1, name: 'Blood Test' },
    { id: 2, name: 'X-Ray' },
  ];
  diagnosticCenters = [
    { id: 1, name: 'City Diagnostic Center' },
    { id: 2, name: 'Health Clinic' },
  ];

  constructor(
    private fb: FormBuilder,
    private appointmentService: AppointmentService
  ) {
    this.appointmentForm = this.fb.group({
      user: [this.loggedInUser],
      test: [''],
      diagnosticCenter: [''],
      datetime: ['']
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.appointmentForm.valid) {
      this.appointmentService.createAppointment(this.appointmentForm.value).subscribe((Response: any) => {
        console.log('Appointment created:', Response);
      });
    }
  }
}

