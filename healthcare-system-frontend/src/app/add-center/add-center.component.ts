import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-add-center',
  standalone: true,
  imports: [CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule],
  templateUrl: './add-center.component.html',
  styleUrl: './add-center.component.css'
})
export class AddCenterComponent implements OnInit {
  centerForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.centerForm = this.fb.group({
      centerName: ['', Validators.required],
      listOfTests: this.fb.array([]),
      listOfAppointments: this.fb.array([])
    });
  }

  ngOnInit(): void {}

  get tests(): FormArray {
    return this.centerForm.get('listOfTests') as FormArray;
  }

  get appointments(): FormArray {
    return this.centerForm.get('listOfAppointments') as FormArray;
  }

  addTest(): void {
    this.tests.push(this.fb.group({
      testName: ['', Validators.required]
    }));
  }

  addAppointment(): void {
    this.appointments.push(this.fb.group({
      appointmentId: [''], // Adjust fields according to your requirements
      userId: [''],
      testId: [''],
      centerId: [''],
      datetime: [''],
      approved: [false]
    }));
  }

  removeTest(index: number): void {
    this.tests.removeAt(index);
  }

  removeAppointment(index: number): void {
    this.appointments.removeAt(index);
  }

  onSubmit(): void {
    if (this.centerForm.valid) {
      this.http.post('/api/diagnostic-centers', this.centerForm.value).subscribe(response => {
        console.log('Diagnostic center added successfully', response);
      });
    }
  }
}